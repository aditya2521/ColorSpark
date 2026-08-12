import { useCallback, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useGameStore } from './store/gameStore';
import { LEVELS } from './data/levels/index';
import MenuScreen from './components/ui/MenuScreen';
import LevelSelect from './components/ui/LevelSelect';
import LevelComplete from './components/ui/LevelComplete';
import GameScene from './scenes/GameScene';
import { useSoundEffects } from './utils/useSoundEffects';

export default function Game() {
  const [state, dispatch] = useGameStore();
  const { soundEnabled, toggleSound, playCorrect, playWrong, playComplete } = useSoundEffects();

  const currentLevel = LEVELS[state.currentLevel - 1];

  // Check level completion
  useEffect(() => {
    if (state.screen !== 'playing' || !currentLevel) return;
    const totalRegions = currentLevel.template.regions.length;
    const filled = Object.keys(state.filledRegions).length;
    if (filled >= totalRegions) {
      playComplete();
      dispatch({ type: 'LEVEL_COMPLETE' });
    }
  }, [state.filledRegions, state.screen, currentLevel]);

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
    [currentLevel, state.selectedColorNumber, state.filledRegions],
  );

  const handleColorSelect = useCallback(
    (num: number) => dispatch({ type: 'SELECT_COLOR', colorNumber: num }),
    [],
  );

  const handleHint = useCallback(() => {
    if (!currentLevel || state.hintsLeft === 0) return;
    // Find first unfilled non-bg region
    const unfilled = currentLevel.template.regions.filter(
      r => r.id !== 'bg' && state.filledRegions[r.id] === undefined,
    );
    if (unfilled.length === 0) return;
    // Pick random unfilled region for variety
    const pick = unfilled[Math.floor(Math.random() * unfilled.length)];
    // Auto-select the correct color
    dispatch({ type: 'SELECT_COLOR', colorNumber: pick.colorNumber });
    dispatch({ type: 'USE_HINT', regionId: pick.id });
  }, [currentLevel, state.hintsLeft, state.filledRegions]);

  if (state.screen === 'menu') {
    return (
      <MenuScreen
        onPlay={() => dispatch({ type: 'START_LEVEL', levelId: state.currentLevel })}
        onLevelSelect={() => dispatch({ type: 'GO_LEVEL_SELECT' })}
        score={state.score}
      />
    );
  }

  if (state.screen === 'levelSelect') {
    return (
      <LevelSelect
        unlockedLevels={state.unlockedLevels}
        onSelect={(id) => dispatch({ type: 'START_LEVEL', levelId: id })}
        onBack={() => dispatch({ type: 'GO_MENU' })}
      />
    );
  }

  if (state.screen === 'levelComplete' && currentLevel) {
    return (
      <LevelComplete
        level={currentLevel}
        score={state.score}
        isLastLevel={state.currentLevel >= 200}
        onNext={() => dispatch({ type: 'START_LEVEL', levelId: state.currentLevel + 1 })}
        onReplay={() => dispatch({ type: 'START_LEVEL', levelId: state.currentLevel })}
        onMenu={() => dispatch({ type: 'GO_MENU' })}
      />
    );
  }

  if (state.screen === 'playing' && currentLevel) {
    return (
      <GameScene
        level={currentLevel}
        filledRegions={state.filledRegions}
        flashRegion={state.flashRegion}
        hintRegion={state.hintRegion}
        selectedColorNumber={state.selectedColorNumber}
        score={state.score}
        wrongAttempts={state.wrongAttempts}
        hintsLeft={state.hintsLeft}
        soundEnabled={soundEnabled}
        onRegionPress={handleRegionPress}
        onColorSelect={handleColorSelect}
        onBack={() => dispatch({ type: 'GO_MENU' })}
        onHint={handleHint}
        onToggleSound={toggleSound}
      />
    );
  }

  return <View style={styles.fallback} />;
}

const styles = StyleSheet.create({
  fallback: { flex: 1, backgroundColor: '#FFF9F0' },
});
