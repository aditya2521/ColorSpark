import React, { useMemo, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Level } from '../types';
import ColoringCanvas from '../components/canvas/ColoringCanvas';
import ColorPalette from '../components/ui/ColorPalette';
import HUD from '../components/ui/HUD';

interface GameSceneProps {
  level: Level;
  filledRegions: Record<string, number>;
  flashRegion: string | null;
  hintRegion: string | null;
  selectedColorNumber: number | null;
  wrongAttempts: number;
  hintsLeft: number;
  soundEnabled: boolean;
  onRegionPress: (regionId: string) => void;
  onColorSelect: (number: number) => void;
  onBack: () => void;
  onHint: () => void;
  onToggleSound: () => void;
}

export default function GameScene({
  level,
  filledRegions,
  flashRegion,
  hintRegion,
  selectedColorNumber,
  wrongAttempts,
  hintsLeft,
  soundEnabled,
  onRegionPress,
  onColorSelect,
  onBack,
  onHint,
  onToggleSound,
}: GameSceneProps) {
  const totalRegions = level.template.regions.length;
  const filledCount  = Object.keys(filledRegions).length;

  const filledNumbers = useMemo(() => {
    const counts: Record<number, number> = {};
    const totals: Record<number, number> = {};
    for (const region of level.template.regions) {
      totals[region.colorNumber] = (totals[region.colorNumber] ?? 0) + 1;
    }
    for (const regionId of Object.keys(filledRegions)) {
      const region = level.template.regions.find(r => r.id === regionId);
      if (region) counts[region.colorNumber] = (counts[region.colorNumber] ?? 0) + 1;
    }
    const done = new Set<number>();
    for (const [num, count] of Object.entries(counts)) {
      if (count >= (totals[Number(num)] ?? 0)) done.add(Number(num));
    }
    return done;
  }, [filledRegions, level.template.regions]);

  // Zoom control callbacks — set by ColoringCanvas on mount
  const zoomInRef  = useRef<() => void>(() => {});
  const zoomOutRef = useRef<() => void>(() => {});
  const resetRef   = useRef<() => void>(() => {});

  const zoomControls = {
    zoomIn:  (fn: () => void) => { zoomInRef.current  = fn; },
    zoomOut: (fn: () => void) => { zoomOutRef.current = fn; },
    reset:   (fn: () => void) => { resetRef.current   = fn; },
  };

  return (
    <View style={styles.container}>
      <HUD
        level={level}
        filledCount={filledCount}
        totalRegions={totalRegions}
        wrongAttempts={wrongAttempts}
        hintsLeft={hintsLeft}
        soundEnabled={soundEnabled}
        onBack={onBack}
        onHint={onHint}
        onToggleSound={onToggleSound}
      />

      <ColoringCanvas
        level={level}
        filledRegions={filledRegions}
        flashRegion={flashRegion}
        hintRegion={hintRegion}
        selectedColorNumber={selectedColorNumber}
        onRegionPress={onRegionPress}
        onZoomIn={() => {}}
        onZoomOut={() => {}}
        onZoomReset={() => {}}
        zoomControls={zoomControls}
      />

      {/* Floating Modern Zoom Pill with + and - */}
      <View style={styles.zoomBarContainer}>
        <View style={styles.zoomCapsule}>
          <TouchableOpacity
            onPress={() => zoomOutRef.current()}
            style={styles.zoomActionBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.zoomMinusIcon}>−</Text>
          </TouchableOpacity>

          <View style={styles.zoomDivider} />

          <TouchableOpacity
            onPress={() => zoomInRef.current()}
            style={styles.zoomActionBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.zoomPlusIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ColorPalette
        colorSlots={level.colorSlots}
        selectedNumber={selectedColorNumber}
        filledNumbers={filledNumbers}
        mode={level.mode}
        onSelect={onColorSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },

  zoomBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    backgroundColor: '#FFFFFF',
  },
  zoomCapsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    gap: 2,
  },
  zoomActionBtn: {
    width: 44,
    height: 34,
    borderRadius: 18,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomMinusIcon: {
    fontSize: 22,
    fontWeight: '800',
    color: '#334155',
    lineHeight: 24,
  },
  zoomPlusIcon: {
    fontSize: 21,
    fontWeight: '800',
    color: '#334155',
    lineHeight: 23,
  },
  zoomDivider: {
    width: 1.5,
    height: 18,
    backgroundColor: '#E2E8F0',
  },
});
