import { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, StatusBar } from 'react-native';
import { LEVELS } from '../../data/levels/index';

interface LevelSelectProps {
  unlockedLevels: number;
  onSelect: (levelId: number) => void;
  onBack: () => void;
}

type Difficulty = 'all' | 'easy' | 'medium' | 'hard' | 'expert';

const DIFF_COLOR: Record<string, string> = {
  easy:   '#10B981',
  medium: '#3B82F6',
  hard:   '#F97316',
  expert: '#EF4444',
};

const DIFF_BG: Record<string, string> = {
  easy:   '#D1FAE5',
  medium: '#DBEAFE',
  hard:   '#FFEDD5',
  expert: '#FEE2E2',
};

const FILTER_TABS: { key: Difficulty; label: string; color: string; activeBg: string }[] = [
  { key: 'all',    label: 'All',    color: '#555',    activeBg: '#333' },
  { key: 'easy',   label: 'Easy',   color: '#10B981', activeBg: '#10B981' },
  { key: 'medium', label: 'Medium', color: '#3B82F6', activeBg: '#3B82F6' },
  { key: 'hard',   label: 'Hard',   color: '#F97316', activeBg: '#F97316' },
  { key: 'expert', label: 'Expert', color: '#EF4444', activeBg: '#EF4444' },
];

// Hardcoded per-level emoji — index 0 = level 1
const LEVEL_EMOJI: string[] = [
  '😊','☀️','🏠','🍎','🌸','🍦','🍄','🎈','🐟','🍭', // 1-10
  '👻','❤️','⭐','🐝','🌵','👑','🐥','🐡','🪄','🍕', // 11-20
  '🍉','🍩','🌮','🌭','🍔','🦋','🐱','🚀','🏮','🌈', // 21-30
  '⛄','🧁','🦜','🐶','🐘','🦕','🏰','🤖','🚢','🐲', // 31-40
  '🦄','🌌','🐧','🦉','🐸','🦈','🐌','🐞','🐯','🐦', // 41-50
  '🦔','🍍','🍓','🥑','🫚','🦁','🐼','🦀','🐢','🧜', // 51-60
  '🏴‍☠️','🏡','🦩','🧙','🐠','🌀','👽','🦸','🦎','🌊', // 61-70
  '🐉','✨','🗼','🧹','⚔️','🫅','🪖','🔥','🎏','🏴', // 71-80
  '🦊','🐬','🐨','🦍','🦘','🦚','🌻','⚡','🛸','🦐', // 81-90
  '🐙','🐊','🦛','🐰','🧚','🎩','🥚','🐵','👩‍🚀','🐚', // 91-100
  '🧙','🐉','🧜','🏹','⚔️','🧚','🐙','💎','🔥','🐴',   // 101-110
  '🐆','🦊','🦊','🦥','🐾','🦌','🐆','🐻‍❄️','🐾','🦓', // 111-120
  '🦜','🦜','🐦','🦉','🦅','🦩','🦚','🐦','🐦','🐋',   // 121-130
  '🐡','🐡','🐠','🦞','🐢','🐋','🦗','🦋','🪲','🦋',   // 131-140
  '🗼','🕌','🗽','🛸','🚀','🌌','🌸','🍱','🎂','🍜',   // 141-150
  '🏴‍☠️','⚔️','👨‍🚀','🩰','🪓','🥷','🤠','🧙‍♀️','👸','👩‍🔬', // 151-160
  '🐒','🦎','🐾','🦄','🦑','🦅','⚡','🍂','💧','🏠',   // 161-170
  '🍨','✨','🐒','🐾','🐝','🦔','🐾','🐾','🐦','🦭',   // 171-180
  '🌌','👽','🦁','🔥','🐍','🐲','🐟','🌊','🌑','🏛️',   // 181-190
  '🏰','🐠','🦗','🦂','🦗','🌿','🕷️','🐻','🦄','🐢',   // 191-200
];

const RAINBOW = ['#FF4D4D','#FF8C00','#FFD700','#4CAF50','#2196F3','#9C27B0'];

export default function LevelSelect({ unlockedLevels, onSelect, onBack }: LevelSelectProps) {
  const [filter, setFilter] = useState<Difficulty>('all');

  const filtered = useMemo(
    () => filter === 'all' ? LEVELS : LEVELS.filter(l => l.difficulty === filter),
    [filter],
  );

  // Pad to a full 4-column row so the last row cells don't stretch
  const paddedData = useMemo(() => {
    const rem = filtered.length % 4;
    if (rem === 0) return filtered as (typeof filtered[0] | null)[];
    return [...filtered, ...Array(4 - rem).fill(null)] as (typeof filtered[0] | null)[];
  }, [filtered]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Rainbow stripe */}
      <View style={styles.rainbowStripe}>
        {RAINBOW.map(c => <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />)}
      </View>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backText}>‹ Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>🎨  Choose a Level</Text>
      </View>

      {/* Difficulty filter tabs */}
      <View style={styles.filterRow}>
        {FILTER_TABS.map(tab => {
          const active = filter === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => setFilter(tab.key)}
              activeOpacity={0.75}
              style={[
                styles.filterTab,
                active
                  ? { backgroundColor: tab.activeBg }
                  : { backgroundColor: '#F3F3F3', borderColor: tab.color + '55' },
              ]}
            >
              <Text style={[styles.filterText, { color: active ? '#fff' : tab.color }]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={paddedData}
        numColumns={4}
        key={filter}
        keyExtractor={(item, index) => item ? String(item.id) : `pad-${index}`}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (!item) return <View style={styles.cellGhost} />;
          const locked = item.id > unlockedLevels;
          const diffColor = DIFF_COLOR[item.difficulty];
          const diffBg    = DIFF_BG[item.difficulty];
          const emoji     = LEVEL_EMOJI[item.id - 1] ?? item.emoji;
          return (
            <TouchableOpacity
              style={[
                styles.cell,
                locked
                  ? styles.cellLocked
                  : { backgroundColor: diffBg, borderColor: diffColor },
              ]}
              onPress={() => !locked && onSelect(item.id)}
              activeOpacity={locked ? 1 : 0.75}
            >
              {locked ? (
                <Text style={styles.lockEmoji}>🔒</Text>
              ) : (
                <>
                  <Text style={styles.cellEmoji}>{emoji}</Text>
                  <Text style={[styles.cellNum, { color: diffColor }]}>{item.id}</Text>
                </>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFDF5' },

  rainbowStripe: { flexDirection: 'row', height: 6 },
  rainbowBand:   { flex: 1 },

  header: {
    paddingTop: 52,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F0EDFF',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  backBtn:  { paddingVertical: 4, paddingRight: 8 },
  backText: { fontSize: 18, color: '#FF6B35', fontWeight: '700' },
  title:    { fontSize: 20, fontWeight: '900', color: '#333' },

  filterRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  filterTab: {
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 5,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  filterText: { fontSize: 12, fontWeight: '800' },

  grid: { padding: 10, gap: 8 },

  cell: {
    flex: 1,
    margin: 4,
    aspectRatio: 1,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
  cellLocked: {
    backgroundColor: '#F9F9F9',
    borderColor: '#E5E5E5',
    opacity: 0.55,
  },
  cellGhost: {
    flex: 1,
    margin: 4,
    aspectRatio: 1,
  },
  lockEmoji: { fontSize: 20, opacity: 0.5 },
  cellEmoji: { fontSize: 24 },
  cellNum:   { fontSize: 11, fontWeight: '900', marginTop: 2 },
});
