import { useCallback, useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useGameStore } from './store/gameStore';
import { LEVELS } from './data/levels/index';
import { CategoryKey } from './types';
import MenuScreen from './components/ui/MenuScreen';
import LevelSelect from './components/ui/LevelSelect';
import LevelComplete from './components/ui/LevelComplete';
import GameOverScreen from './components/ui/GameOverScreen';
import GameScene from './scenes/GameScene';
import WinCelebration from './components/ui/WinCelebration';
import PrivacyScreen from './components/ui/PrivacyScreen';
import TermsScreen from './components/ui/TermsScreen';
import { useSoundEffects } from './utils/useSoundEffects';

export default function Game() {
  const [state, dispatch] = useGameStore();
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null);
  const { soundEnabled, toggleSound, playCorrect, playWrong, playComplete } = useSoundEffects();
  const [celebrating, setCelebrating] = useState(false);
  const celebrationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const safeLevelId = Math.max(1, Math.min(LEVELS.length, state.currentLevel || 1));
  const currentLevel = LEVELS[safeLevelId - 1] ?? LEVELS[0];

  // Check level completion — show 5-second celebration before modal
  useEffect(() => {
    if (state.screen !== 'playing' || !currentLevel || celebrating) return;
    const totalRegions = currentLevel.template.regions.length;
    const filled = Object.keys(state.filledRegions).length;
    if (filled >= totalRegions) {
      playComplete();
      setCelebrating(true);
      celebrationTimer.current = setTimeout(() => {
        setCelebrating(false);
        dispatch({ type: 'LEVEL_COMPLETE' });
      }, 3000);
    }
  }, [state.filledRegions, state.screen, currentLevel, celebrating]);

  // Clean up timer if user navigates away mid-celebration
  useEffect(() => {
    if (state.screen !== 'playing') {
      setCelebrating(false);
      if (celebrationTimer.current) {
        clearTimeout(celebrationTimer.current);
        celebrationTimer.current = null;
      }
    }
  }, [state.screen]);

  // Auto-clear flash after 350ms
  useEffect(() => {
    if (!state.flashRegion) return;
    const t = setTimeout(() => dispatch({ type: 'CLEAR_FLASH' }), 350);
    return () => clearTimeout(t);
  }, [state.flashRegion]);

  // Auto-clear hint after 3 seconds
  useEffect(() => {
    if (!state.hintRegion) return;
    const t = setTimeout(() => dispatch({ type: 'CLEAR_HINT' }), 3000);
    return () => clearTimeout(t);
  }, [state.hintRegion]);

  const handleRegionPress = useCallback(
    (regionId: string) => {
      if (!currentLevel || state.selectedColorNumber === null) return;
      const region = currentLevel.template.regions.find(r => r.id === regionId);
      if (!region) return;
      if (state.filledRegions[regionId] !== undefined) return;

      const correct = region.colorNumber === state.selectedColorNumber;
      if (correct) playCorrect(); else playWrong();
      dispatch({ type: 'FILL_REGION', regionId, colorNumber: state.selectedColorNumber, correct });
    },
    [currentLevel, state.selectedColorNumber, state.filledRegions, playCorrect, playWrong],
  );

  const handleColorSelect = useCallback(
    (num: number) => dispatch({ type: 'SELECT_COLOR', colorNumber: num }),
    [],
  );

  const handleHint = useCallback(() => {
    if (!currentLevel || state.hintsLeft <= 0) return;
    const unfilled = currentLevel.template.regions.filter(
      r => r.id !== 'bg' && state.filledRegions[r.id] === undefined,
    );
    if (unfilled.length === 0) return;
    const pick = unfilled[Math.floor(Math.random() * unfilled.length)];
    dispatch({ type: 'SELECT_COLOR', colorNumber: pick.colorNumber });
    dispatch({ type: 'USE_HINT', regionId: pick.id });
  }, [currentLevel, state.hintsLeft, state.filledRegions]);

  if (state.screen === 'gameOver') {
    return (
      <GameOverScreen
        levelName={currentLevel.name}
        levelEmoji={currentLevel.emoji}
        score={state.score}
        onRetry={() => dispatch({ type: 'START_LEVEL', levelId: safeLevelId })}
        onMenu={() => dispatch({ type: 'GO_LEVEL_SELECT' })}
      />
    );
  }

  if (state.screen === 'privacy') {
    return (
      <PrivacyScreen
        onBack={() => dispatch({ type: 'GO_MENU' })}
        onTerms={() => dispatch({ type: 'GO_TERMS' })}
      />
    );
  }

  if (state.screen === 'terms') {
    return (
      <TermsScreen
        onBack={() => dispatch({ type: 'GO_MENU' })}
        onPrivacy={() => dispatch({ type: 'GO_PRIVACY' })}
      />
    );
  }

  if (state.screen === 'menu') {
    return (
      <MenuScreen
        onChooseCategory={() => {
          setActiveCategory(null);
          dispatch({ type: 'GO_LEVEL_SELECT' });
        }}
        onPrivacy={() => dispatch({ type: 'GO_PRIVACY' })}
        onTerms={() => dispatch({ type: 'GO_TERMS' })}
        levelStars={state.levelStars}
      />
    );
  }

  if (state.screen === 'levelSelect') {
    return (
      <LevelSelect
        unlockedLevels={state.unlockedLevels}
        levelStars={state.levelStars}
        initialCategory={activeCategory}
        onCategoryChange={(cat) => setActiveCategory(cat)}
        onSelect={(id) => {
          const selectedLvl = LEVELS[id - 1] ?? LEVELS[0];
          if (selectedLvl) setActiveCategory(selectedLvl.category);
          dispatch({ type: 'START_LEVEL', levelId: id });
        }}
        onBack={() => dispatch({ type: 'GO_MENU' })}
      />
    );
  }

  if (state.screen === 'levelComplete') {
    return (
      <LevelComplete
        level={currentLevel}
        starsEarned={state.lastEarnedStars ?? state.levelStars[safeLevelId] ?? 0}
        isLastLevel={safeLevelId >= LEVELS.length}
        onNext={() => dispatch({ type: 'START_LEVEL', levelId: safeLevelId + 1 })}
        onReplay={() => dispatch({ type: 'START_LEVEL', levelId: safeLevelId })}
        onMenu={() => {
          setActiveCategory(currentLevel.category);
          dispatch({ type: 'GO_LEVEL_SELECT' });
        }}
      />
    );
  }

  if (state.screen === 'playing') {
    return (
      <View style={styles.gameWrapper}>
        <GameScene
          level={currentLevel}
          filledRegions={state.filledRegions}
          flashRegion={state.flashRegion}
          hintRegion={state.hintRegion}
          selectedColorNumber={state.selectedColorNumber}
          wrongAttempts={state.wrongAttempts}
          hintsLeft={state.hintsLeft}
          soundEnabled={soundEnabled}
          onRegionPress={handleRegionPress}
          onColorSelect={handleColorSelect}
          onBack={() => {
            setActiveCategory(currentLevel.category);
            dispatch({ type: 'GO_LEVEL_SELECT' });
          }}
          onHint={handleHint}
          onToggleSound={toggleSound}
        />
        {celebrating && <WinCelebration />}
      </View>
    );
  }

  return (
    <View style={styles.gameWrapper}>
      <GameScene
        level={currentLevel}
        filledRegions={state.filledRegions}
        flashRegion={state.flashRegion}
        hintRegion={state.hintRegion}
        selectedColorNumber={state.selectedColorNumber}
        wrongAttempts={state.wrongAttempts}
        hintsLeft={state.hintsLeft}
        soundEnabled={soundEnabled}
        onRegionPress={handleRegionPress}
        onColorSelect={handleColorSelect}
        onBack={() => {
          setActiveCategory(currentLevel.category);
          dispatch({ type: 'GO_LEVEL_SELECT' });
        }}
        onHint={handleHint}
        onToggleSound={toggleSound}
      />
      {celebrating && <WinCelebration />}
    </View>
  );
}

const styles = StyleSheet.create({
  fallback: { flex: 1, backgroundColor: '#FFF9F0' },
  gameWrapper: { flex: 1 },
});
