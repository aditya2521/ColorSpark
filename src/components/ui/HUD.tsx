import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Level } from '../../types';
import { IS_TABLET, ms } from '../../utils/responsive';

interface HUDProps {
  level: Level;
  filledCount: number;
  totalRegions: number;
  wrongAttempts: number;
  hintsLeft: number;
  soundEnabled: boolean;
  onBack: () => void;
  onHint: () => void;
  onToggleSound: () => void;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  easy: '#10B981',
  medium: '#3B82F6',
  hard: '#F59E0B',
  expert: '#EF4444',
};

const MODE_CONFIG: Record<string, { label: string; color: string; icon: string }> = {
  classic: { label: 'Zen Sketch', color: '#10B981', icon: '🎨' },
  masterpiece: { label: 'Masterpiece', color: '#EC4899', icon: '👑' },
};

function Stars({ wrong }: { wrong: number }) {
  const filled = wrong === 0 ? 3 : wrong < 4 ? 2 : wrong < 8 ? 1 : 0;
  return (
    <View style={starStyles.row}>
      {[0, 1, 2].map(i => (
        <Text key={i} style={[starStyles.star, i < filled && starStyles.starFilled]}>
          ★
        </Text>
      ))}
    </View>
  );
}

export default function HUD({
  level,
  filledCount,
  totalRegions,
  wrongAttempts,
  hintsLeft,
  soundEnabled,
  onBack,
  onHint,
  onToggleSound,
}: HUDProps) {
  const insets = useSafeAreaInsets();
  const pct = Math.round((filledCount / totalRegions) * 100);
  const diffColor = DIFFICULTY_COLOR[level.difficulty] ?? '#888';
  const modeInfo = MODE_CONFIG[level.mode] ?? MODE_CONFIG.classic;

  return (
    <View style={[styles.container, { paddingTop: insets.top + 6 }]}>
      {/* Top Main Row */}
      <View style={styles.topRow}>
        {/* Back button */}
        <TouchableOpacity onPress={onBack} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backText}>‹</Text>
        </TouchableOpacity>

        {/* Center info */}
        <View style={styles.center}>
          <View style={styles.titleRow}>
            <Text style={styles.levelName} numberOfLines={1}>
              {level.emoji} {level.name}
            </Text>
            <View style={[styles.modePill, { backgroundColor: modeInfo.color + '20', borderColor: modeInfo.color + '50' }]}>
              <Text style={[styles.modeText, { color: modeInfo.color }]}>
                {modeInfo.icon} {modeInfo.label}
              </Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBg}>
            <View style={[styles.progressFill, { width: `${pct}%`, backgroundColor: diffColor }]} />
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.progressText}>{filledCount}/{totalRegions} ({pct}%)</Text>
            <Stars wrong={wrongAttempts} />
          </View>
        </View>

        {/* Sound toggle */}
        <TouchableOpacity onPress={onToggleSound} style={styles.soundBtn} activeOpacity={0.7}>
          <Text style={styles.soundIcon}>{soundEnabled ? '🔊' : '🔇'}</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Hint Row */}
      <View style={styles.bottomRow}>
        <View style={styles.spacer} />
        <TouchableOpacity
          onPress={onHint}
          style={[styles.hintBtn, hintsLeft <= 0 && styles.hintBtnDisabled]}
          disabled={hintsLeft <= 0}
          activeOpacity={0.7}
        >
          <Text style={styles.hintIcon}>💡</Text>
          <Text style={styles.hintLabel}>Hint</Text>
          <View style={styles.hintBadge}>
            <Text style={styles.hintCount}>{hintsLeft}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 6,
    alignSelf: 'stretch',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    maxWidth: IS_TABLET ? 900 : undefined,
    alignSelf: 'center',
  },
  backBtn: {
    width: IS_TABLET ? 44 : 36,
    height: IS_TABLET ? 44 : 36,
    borderRadius: IS_TABLET ? 22 : 18,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: ms(24), color: '#334155', lineHeight: ms(30) },
  center: { flex: 1, gap: 3 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  levelName: { fontSize: ms(13), fontWeight: '800', color: '#0F172A', flexShrink: 1 },
  modePill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
  },
  modeText: {
    fontSize: ms(10),
    fontWeight: '800',
  },
  progressBg: {
    height: IS_TABLET ? 8 : 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 4 },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: { fontSize: ms(10), color: '#64748B', fontWeight: '600' },
  soundBtn: {
    width: IS_TABLET ? 36 : 28,
    height: IS_TABLET ? 36 : 28,
    borderRadius: IS_TABLET ? 18 : 14,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  soundIcon: { fontSize: ms(14) },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 2,
    width: '100%',
    maxWidth: IS_TABLET ? 900 : undefined,
    alignSelf: 'center',
  },
  spacer: { flex: 1 },
  hintBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: IS_TABLET ? 14 : 10,
    paddingVertical: IS_TABLET ? 6 : 4,
    borderRadius: 12,
    gap: 5,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  hintBtnDisabled: {
    opacity: 0.4,
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
  },
  hintIcon: { fontSize: ms(14) },
  hintLabel: {
    fontSize: ms(12),
    fontWeight: '800',
    color: '#92400E',
  },
  hintBadge: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  hintCount: {
    fontSize: ms(10),
    fontWeight: '900',
    color: '#FFFFFF',
  },
});

const starStyles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 1 },
  star: { fontSize: 12, color: '#CBD5E1' },
  starFilled: { color: '#EAB308' },
});
