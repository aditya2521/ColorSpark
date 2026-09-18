import { useReducer, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameState, GameAction } from '../types';

// Only these fields are persisted across app restarts
interface PersistedState {
  currentLevel: number;
  unlockedLevels: number;
  score: number;
  levelStars: Record<number, number>;
  hintsLeft?: number;
}

const STORAGE_KEY = '@game_progress_v5';

const initialState: GameState = {
  screen: 'menu',
  currentLevel: 1,
  unlockedLevels: 999,
  filledRegions: {},
  selectedColorNumber: null,
  score: 0,
  wrongAttempts: 0,
  flashRegion: null,
  hintsLeft: 3,
  hintRegion: null,
  levelStars: {},
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'GO_MENU':
      return { ...state, screen: 'menu' };

    case 'GO_LEVEL_SELECT':
      return { ...state, screen: 'levelSelect' };

    case 'GO_PRIVACY':
      return { ...state, screen: 'privacy' };

    case 'GO_TERMS':
      return { ...state, screen: 'terms' };

    case 'START_LEVEL': {
      const validLvl = typeof action.levelId === 'number' && action.levelId > 0 ? action.levelId : 1;
      return {
        ...state,
        screen: 'playing',
        currentLevel: validLvl,
        filledRegions: {},
        selectedColorNumber: null,
        wrongAttempts: 0,
        flashRegion: null,
        hintRegion: null,
        hintsLeft: 3,
        lastEarnedStars: undefined,
      };
    }

    case 'SELECT_COLOR':
      return { ...state, selectedColorNumber: action.colorNumber };

    case 'FILL_REGION': {
      if (!action.correct) {
        const newWrong = state.wrongAttempts + 1;
        const starsLeft = newWrong === 0 ? 3 : newWrong < 4 ? 2 : newWrong < 8 ? 1 : 0;
        if (starsLeft === 0) {
          return {
            ...state,
            wrongAttempts: newWrong,
            flashRegion: action.regionId,
            screen: 'gameOver',
          };
        }
        return {
          ...state,
          wrongAttempts: newWrong,
          flashRegion: action.regionId,
        };
      }

      // Correct fill: award flat 10 points
      return {
        ...state,
        filledRegions: { ...state.filledRegions, [action.regionId]: action.colorNumber },
        flashRegion: null,
        hintRegion: state.hintRegion === action.regionId ? null : state.hintRegion,
        score: state.score + 10,
      };
    }

    case 'CLEAR_FLASH':
      return { ...state, flashRegion: null };

    case 'USE_HINT': {
      if (state.hintsLeft <= 0) return state;
      return {
        ...state,
        hintsLeft: state.hintsLeft - 1,
        hintRegion: action.regionId,
        selectedColorNumber: null,
      };
    }

    case 'CLEAR_HINT':
      return { ...state, hintRegion: null };

    case 'LEVEL_COMPLETE': {
      const w = state.wrongAttempts;
      const stars = w === 0 ? 3 : w < 4 ? 2 : w < 8 ? 1 : 0;
      const prevBest = state.levelStars[state.currentLevel] ?? 0;
      const scoreDelta = Math.max(0, stars - prevBest) * 100;

      return {
        ...state,
        screen: 'levelComplete',
        unlockedLevels: Math.max(state.unlockedLevels, state.currentLevel + 1),
        score: state.score + scoreDelta,
        hintsLeft: 3,
        lastEarnedStars: stars,
        levelStars: {
          ...state.levelStars,
          [state.currentLevel]: Math.max(prevBest, stars),
        },
      };
    }

    case 'GAME_OVER':
      return { ...state, screen: 'gameOver' };

    case 'LOAD_SAVED': {
      const savedLvl = typeof action.saved?.currentLevel === 'number' && action.saved.currentLevel > 0
        ? action.saved.currentLevel
        : 1;
      return {
        ...initialState,
        currentLevel: savedLvl,
        unlockedLevels: Math.max(999, action.saved?.unlockedLevels ?? 999),
        score: action.saved?.score ?? 0,
        levelStars: action.saved?.levelStars ?? {},
        hintsLeft: 3,
      };
    }

    default:
      return state;
  }
}

async function loadSaved(): Promise<PersistedState | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedState;
  } catch {
    return null;
  }
}

async function saveToDisk(state: GameState) {
  try {
    const persisted: PersistedState = {
      currentLevel: state.currentLevel,
      unlockedLevels: state.unlockedLevels,
      score: state.score,
      levelStars: state.levelStars,
      hintsLeft: state.hintsLeft,
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  } catch {
    // silently ignore write failures
  }
}

export function useGameStore(): [GameState, React.Dispatch<GameAction>] {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const isLoaded = useRef(false);

  // Load saved progress on first mount
  useEffect(() => {
    loadSaved().then(saved => {
      if (saved) {
        dispatch({ type: 'LOAD_SAVED', saved });
      }
      isLoaded.current = true;
    });
  }, []);

  // Persist whenever score/level/unlocked/hints change (skip before load completes)
  useEffect(() => {
    if (!isLoaded.current) return;
    saveToDisk(state);
  }, [state.score, state.currentLevel, state.unlockedLevels, state.levelStars, state.hintsLeft]);

  return [state, dispatch];
}
