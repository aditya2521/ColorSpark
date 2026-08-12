import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

interface MenuScreenProps {
  onPlay: () => void;
  onLevelSelect: () => void;
  score: number;
}

// Each letter of the title gets its own rainbow colour
const TITLE = ['C','o','l','o','r','S','p','a','r','k'];
const LETTER_COLORS = [
  '#FF4D4D','#FF8C00','#FFD700','#4CAF50','#2196F3',
  '#9C27B0','#FF4D4D','#FF8C00','#FFD700','#4CAF50',
];

// Decorative paint splashes
const SPLASHES = [
  { color:'#FFD6E0', size:180, top:-50,  left:-70  },
  { color:'#D6EAFF', size:220, top:-80,  right:-80 },
  { color:'#D6FFE8', size:140, bottom:60, left:-50  },
  { color:'#FFF3D6', size:170, bottom:20, right:-60 },
  { color:'#EDD6FF', size:100, top:'38%' as any, left:-40 },
];

export default function MenuScreen({ onPlay, onLevelSelect, score }: MenuScreenProps) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" />

      {/* Pastel splash blobs */}
      {SPLASHES.map((s, i) => (
        <View key={i} style={[styles.splash, {
          width: s.size, height: s.size, borderRadius: s.size / 2,
          backgroundColor: s.color,
          top: s.top, left: (s as any).left, right: (s as any).right, bottom: s.bottom,
        }]} />
      ))}

      {/* Rainbow stripe at top */}
      <View style={styles.rainbowStripe}>
        {['#FF4D4D','#FF8C00','#FFD700','#4CAF50','#2196F3','#9C27B0'].map(c => (
          <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />
        ))}
      </View>

      {/* Logo */}
      <View style={styles.logoBubble}>
        <Text style={styles.logoEmoji}>🎨</Text>
      </View>

      {/* Rainbow title */}
      <View style={styles.titleWrap}>
        <View style={styles.titleRow}>
          {TITLE.map((ch, i) => (
            <Text key={i} style={[styles.titleChar, { color: LETTER_COLORS[i] }]}>{ch}</Text>
          ))}
        </View>
        <Text style={styles.tagline}>🎨  Color · Create · Have fun!  🎨</Text>
      </View>

      {/* Emoji showcase */}
      <View style={styles.emojiCard}>
        <Text style={styles.emojiRow}>🦋  🦄  🐉  🌈  🐱  🚀</Text>
        <Text style={styles.emojiCardText}>200 unique images to color!</Text>
      </View>

      {/* Stats row */}
      <View style={styles.statsRow}>
        {([
          ['200', 'Levels',   '#FF6B6B', '#FFE5E5'],
          ['200', 'Images',   '#4CAF50', '#E5F5E9'],
          ['40',  'Palettes', '#2196F3', '#E3F2FD'],
        ] as const).map(([num, lbl, fg, bg]) => (
          <View key={lbl} style={[styles.statPill, { backgroundColor: bg }]}>
            <Text style={[styles.statNum, { color: fg }]}>{num}</Text>
            <Text style={[styles.statLbl, { color: fg }]}>{lbl}</Text>
          </View>
        ))}
      </View>

      {/* Score badge */}
      {score > 0 && (
        <View style={styles.scoreBadge}>
          <Text style={styles.scoreStar}>⭐</Text>
          <View>
            <Text style={styles.scoreLabel}>Your Score</Text>
            <Text style={styles.scoreValue}>{score.toLocaleString()}</Text>
          </View>
        </View>
      )}

      {/* Buttons */}
      <View style={styles.btnStack}>
        <TouchableOpacity style={styles.playBtn} onPress={onPlay} activeOpacity={0.82}>
          <Text style={styles.playBtnText}>▶  Play Now!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectBtn} onPress={onLevelSelect} activeOpacity={0.82}>
          <Text style={styles.selectBtnText}>📋  Level Select</Text>
        </TouchableOpacity>
      </View>

      {/* Difficulty legend */}
      <View style={styles.diffRow}>
        {([
          ['Easy',   '#10B981'],
          ['Medium', '#3B82F6'],
          ['Hard',   '#F97316'],
          ['Expert', '#EF4444'],
        ] as const).map(([label, color]) => (
          <View key={label} style={[styles.diffBadge, { backgroundColor: color }]}>
            <Text style={styles.diffText}>{label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 16,
    overflow: 'hidden',
  },

  // Background blobs
  splash: { position: 'absolute', opacity: 0.85 },

  // Rainbow stripe
  rainbowStripe: {
    position: 'absolute', top: 0, left: 0, right: 0,
    flexDirection: 'row', height: 7,
  },
  rainbowBand: { flex: 1 },

  // Logo
  logoBubble: {
    width: 90, height: 90, borderRadius: 45,
    backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
    shadowColor: '#FF8C00', shadowOpacity: 0.22, shadowRadius: 12, elevation: 8,
    borderWidth: 3, borderColor: '#FFD700',
  },
  logoEmoji: { fontSize: 48 },

  // Title
  titleWrap: { alignItems: 'center', gap: 6 },
  titleRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  titleChar: { fontSize: 38, fontWeight: '900', lineHeight: 44 },
  tagline: { fontSize: 13, color: '#888', fontWeight: '600' },

  // Emoji card
  emojiCard: {
    backgroundColor: '#fff',
    borderRadius: 20, paddingVertical: 14, paddingHorizontal: 20,
    alignItems: 'center', gap: 4, width: '100%',
    shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 10, elevation: 4,
    borderWidth: 1.5, borderColor: '#F0EDFF',
  },
  emojiRow: { fontSize: 26, letterSpacing: 2 },
  emojiCardText: { fontSize: 13, color: '#888', fontWeight: '700' },

  // Stats
  statsRow: { flexDirection: 'row', gap: 10 },
  statPill: {
    borderRadius: 16, paddingHorizontal: 16, paddingVertical: 8,
    alignItems: 'center', minWidth: 76,
  },
  statNum: { fontSize: 22, fontWeight: '900' },
  statLbl: { fontSize: 11, fontWeight: '700' },

  // Score
  scoreBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: '#FFFBEA',
    borderRadius: 18, paddingHorizontal: 22, paddingVertical: 10,
    borderWidth: 2, borderColor: '#FFD700',
    shadowColor: '#FFD700', shadowOpacity: 0.25, shadowRadius: 8, elevation: 4,
  },
  scoreStar: { fontSize: 28 },
  scoreLabel: { fontSize: 11, color: '#999', fontWeight: '600' },
  scoreValue: { fontSize: 28, fontWeight: '900', color: '#F59E0B' },

  // Buttons
  btnStack: { width: '100%', gap: 10 },
  playBtn: {
    backgroundColor: '#FF6B35',
    paddingVertical: 17, borderRadius: 32,
    alignItems: 'center',
    shadowColor: '#FF6B35', shadowOpacity: 0.45, shadowRadius: 14, elevation: 8,
  },
  playBtnText: { color: '#fff', fontSize: 22, fontWeight: '900', letterSpacing: 0.5 },
  selectBtn: {
    backgroundColor: '#fff',
    paddingVertical: 14, borderRadius: 32,
    alignItems: 'center',
    borderWidth: 2, borderColor: '#E5E7EB',
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 6, elevation: 3,
  },
  selectBtnText: { color: '#555', fontSize: 17, fontWeight: '700' },

  // Difficulty
  diffRow: { flexDirection: 'row', gap: 8 },
  diffBadge: { borderRadius: 20, paddingHorizontal: 13, paddingVertical: 5 },
  diffText: { color: '#fff', fontWeight: '800', fontSize: 12 },
});
