import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Level } from '../../types';

interface HUDProps {
  level: Level;
  filledCount: number;
  totalRegions: number;
  score: number;
  wrongAttempts: number;
  hintsLeft: number;
  soundEnabled: boolean;
  onBack: () => void;
  onHint: () => void;
  onToggleSound: () => void;
}

const DIFFICULTY_COLOR: Record<string, string> = {
  easy: '#44CC66',
  medium: '#4488FF',
  hard: '#FF8822',
  expert: '#FF4455',
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
  score,
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

  return (
    <View style={[styles.container, { paddingTop: insets.top + 6 }]}>
      {/* Back button */}
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      {/* Centre: name + progress bar + stars */}
      <View style={styles.center}>
        <Text style={styles.levelName} numberOfLines={1}>
          {level.emoji} {level.name}
        </Text>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${pct}%`, backgroundColor: diffColor }]} />
        </View>
        <View style={styles.metaRow}>
          <Text style={styles.progressText}>{filledCount}/{totalRegions}</Text>
          <Stars wrong={wrongAttempts} />
        </View>
      </View>

      {/* Right side: score + hint + sound toggle */}
      <View style={styles.right}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
        <View style={styles.rightBtns}>
          <TouchableOpacity
            onPress={onHint}
            style={[styles.hintBtn, hintsLeft === 0 && styles.hintBtnDisabled]}
            disabled={hintsLeft === 0}
          >
            <Text style={styles.hintIcon}>💡</Text>
            <Text style={styles.hintCount}>{hintsLeft}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onToggleSound} style={styles.soundBtn} activeOpacity={0.7}>
            <Text style={styles.soundIcon}>{soundEnabled ? '🔊' : '🔇'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: { fontSize: 24, color: '#333', lineHeight: 30 },
  center: { flex: 1, gap: 3 },
  levelName: { fontSize: 14, fontWeight: '800', color: '#222' },
  progressBg: {
    height: 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: { height: '100%', borderRadius: 4 },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressText: { fontSize: 10, color: '#999', fontWeight: '600' },
  right: { alignItems: 'center', gap: 4 },
  rightBtns: { flexDirection: 'row', gap: 6, alignItems: 'center' },
  soundBtn: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#F0F0F5',
    alignItems: 'center', justifyContent: 'center',
  },
  soundIcon: { fontSize: 14 },
  scoreBox: { alignItems: 'center' },
  scoreLabel: { fontSize: 9, color: '#aaa', fontWeight: '700' },
  scoreValue: { fontSize: 17, fontWeight: '900', color: '#333' },
  hintBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 2,
    borderWidth: 1.5,
    borderColor: '#FFD700',
  },
  hintBtnDisabled: {
    opacity: 0.4,
  },
  hintIcon: { fontSize: 14 },
  hintCount: { fontSize: 12, fontWeight: '900', color: '#B8860B' },
});

const starStyles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 1 },
  star: { fontSize: 12, color: '#DDD' },
  starFilled: { color: '#FFD700' },
});
