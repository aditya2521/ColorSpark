import { useReducer, useEffect, useRef, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GameState, GameAction } from '../types';

// Only these fields are persisted across app restarts
interface PersistedState {
  currentLevel: number;
  unlockedLevels: number;
  score: number;
}

const STORAGE_KEY = '@game_progress_v1';

const initialState: GameState = {
  screen: 'menu',
  currentLevel: 1,
  unlockedLevels: 1,
  filledRegions: {},
  selectedColorNumber: null,
  score: 0,
  wrongAttempts: 0,
  flashRegion: null,
  hintsLeft: 3,
  hintRegion: null,
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'GO_MENU':
      return { ...state, screen: 'menu' };

    case 'GO_LEVEL_SELECT':
      return { ...state, screen: 'levelSelect' };

    case 'START_LEVEL':
      return {
        ...state,
        screen: 'playing',
        currentLevel: action.levelId,
        filledRegions: {},
        selectedColorNumber: null,
        wrongAttempts: 0,
        flashRegion: null,
        hintsLeft: 3,
        hintRegion: null,
      };

    case 'SELECT_COLOR':
      return { ...state, selectedColorNumber: action.colorNumber };

    case 'FILL_REGION': {
      if (!action.correct) {
        return {
          ...state,
          wrongAttempts: state.wrongAttempts + 1,
          flashRegion: action.regionId,
          score: Math.max(0, state.score - 2),
        };
      }
      return {
        ...state,
        filledRegions: { ...state.filledRegions, [action.regionId]: action.colorNumber },
        score: state.score + 10,
        flashRegion: null,
        hintRegion: state.hintRegion === action.regionId ? null : state.hintRegion,
      };
    }

    case 'CLEAR_FLASH':
      return { ...state, flashRegion: null };

    case 'USE_HINT':
      return {
        ...state,
        hintsLeft: Math.max(0, state.hintsLeft - 1),
        hintRegion: action.regionId,
        selectedColorNumber: null,
      };

    case 'CLEAR_HINT':
      return { ...state, hintRegion: null };

    case 'LEVEL_COMPLETE':
      return {
        ...state,
        screen: 'levelComplete',
        unlockedLevels: Math.max(state.unlockedLevels, state.currentLevel + 1),
        score: state.score + 50 + Math.max(0, (3 - state.wrongAttempts) * 20),
      };

    case 'LOAD_SAVED':
      return {
        ...initialState,
        currentLevel: action.saved.currentLevel,
        unlockedLevels: action.saved.unlockedLevels,
        score: action.saved.score,
      };

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

  // Persist whenever score/level/unlocked changes (skip before load completes)
  useEffect(() => {
    if (!isLoaded.current) return;
    saveToDisk(state);
  }, [state.score, state.currentLevel, state.unlockedLevels]);

  return [state, dispatch];
}
