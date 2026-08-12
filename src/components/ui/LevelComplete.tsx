import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Level } from '../../types';

interface LevelCompleteProps {
  level: Level;
  score: number;
  onNext: () => void;
  onMenu: () => void;
  onReplay: () => void;
  isLastLevel: boolean;
}

export default function LevelComplete({
  level, score, onNext, onMenu, onReplay, isLastLevel,
}: LevelCompleteProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <Text style={styles.trophy}>🏆</Text>
        <Text style={styles.congrats}>Masterpiece!</Text>
        <Text style={styles.levelName}>{level.emoji} {level.name}</Text>

        <View style={styles.stars}>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.star}>⭐</Text>
          <Text style={styles.star}>⭐</Text>
        </View>

        <View style={styles.scoreBadge}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreVal}>{score}</Text>
        </View>

        <View style={styles.actions}>
          {!isLastLevel && (
            <TouchableOpacity style={styles.nextBtn} onPress={onNext} activeOpacity={0.85}>
              <Text style={styles.nextText}>Next Level ▶</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.replayBtn} onPress={onReplay} activeOpacity={0.85}>
            <Text style={styles.replayText}>🔄 Replay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuBtn} onPress={onMenu} activeOpacity={0.85}>
            <Text style={styles.menuText}>🏠 Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 32,
    padding: 36,
    alignItems: 'center',
    gap: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
  },
  trophy: { fontSize: 72 },
  congrats: { fontSize: 34, fontWeight: '900', color: '#FF4455' },
  levelName: { fontSize: 20, color: '#666', fontWeight: '600' },
  stars: { flexDirection: 'row', gap: 8 },
  star: { fontSize: 32 },
  scoreBadge: {
    backgroundColor: '#FFF3CC',
    borderRadius: 16,
    paddingHorizontal: 36,
    paddingVertical: 12,
    alignItems: 'center',
  },
  scoreLabel: { fontSize: 13, color: '#999', fontWeight: '600' },
  scoreVal: { fontSize: 42, fontWeight: '900', color: '#FF8822' },
  actions: { width: '100%', gap: 10 },
  nextBtn: {
    backgroundColor: '#44CC66',
    borderRadius: 28,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#44CC66',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  nextText: { color: '#fff', fontSize: 20, fontWeight: '900' },
  replayBtn: {
    backgroundColor: '#4488FF',
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: 'center',
  },
  replayText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  menuBtn: {
    backgroundColor: '#F5F5F5',
    borderRadius: 28,
    paddingVertical: 12,
    alignItems: 'center',
  },
  menuText: { color: '#555', fontSize: 16, fontWeight: '700' },
});
