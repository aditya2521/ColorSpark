import { useMemo, useRef } from 'react';
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
  score: number;
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
  score,
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
        score={score}
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
        onRegionPress={onRegionPress}
        onZoomIn={() => {}}
        onZoomOut={() => {}}
        onZoomReset={() => {}}
        zoomControls={zoomControls}
      />

      {/* Zoom bar — below canvas, above palette, never overlaps image */}
      <View style={styles.zoomBar}>
        <TouchableOpacity onPress={() => zoomOutRef.current()} style={styles.zoomBtn} activeOpacity={0.7}>
          <Text style={styles.zoomBtnText}>−</Text>
        </TouchableOpacity>
        <View style={styles.zoomDivider} />
        <TouchableOpacity onPress={() => resetRef.current()} style={styles.zoomReset} activeOpacity={0.7}>
          <Text style={styles.zoomResetText}>FIT</Text>
        </TouchableOpacity>
        <View style={styles.zoomDivider} />
        <TouchableOpacity onPress={() => zoomInRef.current()} style={styles.zoomBtn} activeOpacity={0.7}>
          <Text style={styles.zoomBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      <ColorPalette
        colorSlots={level.colorSlots}
        selectedNumber={selectedColorNumber}
        filledNumbers={filledNumbers}
        onSelect={onColorSelect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },

  zoomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: 4,
    gap: 0,
  },
  zoomBtn: {
    paddingHorizontal: 28,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomBtnText: {
    fontSize: 24,
    fontWeight: '300',
    color: '#444',
    lineHeight: 28,
  },
  zoomDivider: {
    width: 1,
    height: 22,
    backgroundColor: '#DDD',
  },
  zoomReset: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zoomResetText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#9333EA',
    letterSpacing: 0.5,
  },
});
