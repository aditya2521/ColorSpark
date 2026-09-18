import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorSlot, LevelMode } from '../../types';
import { IS_TABLET, ms } from '../../utils/responsive';

interface ColorPaletteProps {
  colorSlots: ColorSlot[];
  selectedNumber: number | null;
  filledNumbers: Set<number>;
  mode?: LevelMode;
  onSelect: (number: number) => void;
}

const RAINBOW_STRIPES = ['#FF6B6B', '#FF9F43', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'];

export default function ColorPalette({
  colorSlots,
  selectedNumber,
  filledNumbers,
  mode = 'classic',
  onSelect,
}: ColorPaletteProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper}>
      {/* Rainbow stripe bar at top */}
      <View style={styles.rainbowBar}>
        {RAINBOW_STRIPES.map((c, i) => (
          <View key={i} style={[styles.stripe, { backgroundColor: c }]} />
        ))}
      </View>

      {/* Main palette area */}
      <View style={[styles.container, { paddingBottom: insets.bottom + 10 }]}>
        {/* Decorative stars */}
        <Text style={[styles.star, { top: 6, left: 14 }]}>⭐</Text>
        <Text style={[styles.star, { top: 4, right: 18 }]}>✨</Text>
        <Text style={[styles.star, { bottom: insets.bottom + 28, left: 8 }]}>🌟</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
          bounces={false}
        >
          {colorSlots.map((slot) => {
            const isSelected = selectedNumber === slot.number;
            const isDone = filledNumbers.has(slot.number);
            const main = slot.color;
            const shadow = darken(main, 0.28);
            const highlight = lighten(main, 0.5);
            const contrast = getContrastColor(main);

            return (
              <TouchableOpacity
                key={slot.number}
                onPress={() => !isDone && onSelect(slot.number)}
                activeOpacity={isDone ? 1 : 0.75}
                style={[
                  styles.swatchOuter,
                  isSelected && styles.swatchOuterSelected,
                  isDone && styles.swatchOuterDone,
                ]}
              >
                {/* Glow ring */}
                {isSelected && (
                  <View style={[styles.glow, { backgroundColor: main + '50' }]} />
                )}

                {/* Outer ring (white border) */}
                <View
                  style={[
                    styles.ring,
                    isSelected
                      ? { borderColor: '#FFFFFF', borderWidth: 3, backgroundColor: shadow }
                      : { borderColor: '#FFFFFF88', borderWidth: 1.5, backgroundColor: shadow },
                  ]}
                >
                  {/* Top face */}
                  <View
                    style={[
                      styles.face,
                      { backgroundColor: main },
                      isSelected && styles.faceSelected,
                    ]}
                  >
                    {/* Shine */}
                    <View style={[styles.shine, { backgroundColor: highlight + 'CC' }]} />

                    {isDone ? (
                      <Text style={[styles.check, { color: contrast }]}>✓</Text>
                    ) : (
                      <Text style={[styles.num, { color: contrast }, isSelected && styles.numSelected]}>
                        {slot.number}
                      </Text>
                    )}
                  </View>
                </View>

                {/* Label */}
                <Text style={[styles.label, isSelected && styles.labelSelected]} numberOfLines={1}>
                  {isDone ? '✓ Done' : slot.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

// ─── helpers ──────────────────────────────────────────────────────────────────

function darken(hex: string, amount: number): string {
  const r = Math.max(0, Math.floor(parseInt(hex.slice(1, 3), 16) * (1 - amount)));
  const g = Math.max(0, Math.floor(parseInt(hex.slice(3, 5), 16) * (1 - amount)));
  const b = Math.max(0, Math.floor(parseInt(hex.slice(5, 7), 16) * (1 - amount)));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function lighten(hex: string, amount: number): string {
  const r = Math.min(255, Math.floor(parseInt(hex.slice(1, 3), 16) + (255 - parseInt(hex.slice(1, 3), 16)) * amount));
  const g = Math.min(255, Math.floor(parseInt(hex.slice(3, 5), 16) + (255 - parseInt(hex.slice(3, 5), 16)) * amount));
  const b = Math.min(255, Math.floor(parseInt(hex.slice(5, 7), 16) + (255 - parseInt(hex.slice(5, 7), 16)) * amount));
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.55 ? '#222222' : '#FFFFFF';
}

// ─── constants ────────────────────────────────────────────────────────────────

const PILL_W = IS_TABLET ? 96 : 64;
const PILL_H = IS_TABLET ? 96 : 64;
const FACE_INSET = 5;
const FACE_W = PILL_W - FACE_INSET;
const FACE_H = PILL_H - FACE_INSET;

// ─── styles ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F9EEFF',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
    elevation: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  rainbowBar: {
    flexDirection: 'row',
    height: 6,
  },
  stripe: {
    flex: 1,
  },
  container: {
    backgroundColor: '#F9EEFF',
    paddingTop: 8,
  },
  star: {
    position: 'absolute',
    fontSize: 14,
    zIndex: 0,
    opacity: 0.7,
  },
  scroll: {
    paddingHorizontal: 16,
    gap: IS_TABLET ? 16 : 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: IS_TABLET ? 10 : 6,
    minWidth: '100%',
  },

  swatchOuter: {
    alignItems: 'center',
    gap: 6,
    width: PILL_W + 10,
  },
  swatchOuterSelected: {
    transform: [{ scale: 1.08 }],
  },
  swatchOuterDone: {
    opacity: 0.5,
  },

  glow: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: 14,
    borderRadius: PILL_W,
    zIndex: 0,
  },

  ring: {
    width: PILL_W,
    height: PILL_H,
    borderRadius: PILL_W / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: FACE_INSET / 2,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 8,
    zIndex: 1,
  },

  face: {
    width: FACE_W,
    height: FACE_H,
    borderRadius: FACE_W / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  faceSelected: {
    width: FACE_W + 2,
    height: FACE_H + 2,
    borderRadius: (FACE_W + 2) / 2,
  },

  shine: {
    position: 'absolute',
    top: 6,
    left: 8,
    width: '45%',
    height: '32%',
    borderRadius: 16,
    transform: [{ rotate: '-20deg' }],
  },

  num: {
    fontSize: ms(22),
    fontWeight: '900',
    letterSpacing: -0.5,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    zIndex: 2,
  },
  numSelected: {
    fontSize: ms(24),
  },

  check: {
    fontSize: ms(26),
    fontWeight: '900',
    zIndex: 2,
  },

  label: {
    fontSize: ms(10),
    color: '#9B72CF',
    fontWeight: '700',
    width: PILL_W + 10,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  labelSelected: {
    color: '#6B21A8',
    fontWeight: '900',
    fontSize: ms(11),
  },
  swatchOuterLocked: {
    opacity: 0.45,
  },
  lockIcon: {
    fontSize: ms(16),
  },
});
