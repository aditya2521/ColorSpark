import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_TABLET, ms } from '../../utils/responsive';

interface GameOverScreenProps {
  levelName: string;
  levelEmoji: string;
  score: number;
  onRetry: () => void;
  onMenu: () => void;
}

const RAINBOW = ['#FF4D4D', '#FF8C00', '#FFD700', '#4CAF50', '#2196F3', '#9C27B0'];

const SPLASHES = [
  { color: '#FFE4E6', size: 240, top: -60, left: -60 },
  { color: '#E0F2FE', size: 260, top: -80, right: -70 },
  { color: '#FEF3C7', size: 220, bottom: 40, right: -50 },
  { color: '#F3E8FF', size: 160, bottom: 80, left: -40 },
];

export default function GameOverScreen({ levelName, levelEmoji, onRetry, onMenu }: GameOverScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Pastel background blobs */}
      {SPLASHES.map((s, i) => (
        <View
          key={i}
          style={[
            styles.splash,
            {
              width: s.size,
              height: s.size,
              borderRadius: s.size / 2,
              backgroundColor: s.color,
              top: s.top,
              left: (s as any).left,
              right: (s as any).right,
              bottom: s.bottom,
            },
          ]}
        />
      ))}

      {/* Top rainbow stripe */}
      <View style={[styles.rainbowStripe, { top: 0 }]}>
        {RAINBOW.map(c => (
          <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />
        ))}
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Broken Heart Emblem */}
        <View style={styles.iconOuter}>
          <View style={styles.iconBubble}>
            <Text style={styles.iconEmoji}>💔</Text>
          </View>
        </View>

        {/* Title */}
        <View style={styles.titleWrap}>
          <Text
            style={styles.title}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
          >
            Game Over!
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>You ran out of stars</Text>
        </View>

        {/* Level Info Card */}
        <View style={styles.levelCard}>
          <Text style={styles.levelEmoji}>{levelEmoji}</Text>
          <View style={styles.levelInfo}>
            <Text style={styles.levelNum}>SKETCH IN PROGRESS</Text>
            <Text style={styles.levelTitle} numberOfLines={1}>{levelName}</Text>
          </View>
        </View>

        {/* Stars Empty Status Card */}
        <View style={styles.starsCard}>
          <View style={styles.starsRow}>
            {[1, 2, 3].map(i => (
              <View key={i} style={styles.starEmptyBubble}>
                <Text style={styles.starEmptyChar}>★</Text>
              </View>
            ))}
          </View>
          <Text style={styles.starsEncouragement}>
            ✨ Every attempt makes you a better artist!
          </Text>
        </View>

        {/* Pro Tip Card */}
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <Text style={styles.tipIcon}>💡</Text>
            <Text style={styles.tipTitle}>Artist Pro-Tip</Text>
          </View>
          <Text style={styles.tipBody}>
            Use the <Text style={styles.tipBold}>Hint Lightbulb</Text> or pinch to zoom in on tricky regions to avoid losing stars!
          </Text>
        </View>

        {/* Big Juicy Try Again Button */}
        <View style={styles.btnStack}>
          <TouchableOpacity style={styles.retryBtn} onPress={onRetry} activeOpacity={0.88}>
            <View style={styles.retryIconBubble}>
              <Text style={styles.retryIcon}>🔄</Text>
            </View>
            <Text style={styles.retryText}>TRY AGAIN!</Text>
            <View style={styles.retryArrowBubble}>
              <Text style={styles.retryArrow}>▶</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBtn} onPress={onMenu} activeOpacity={0.82}>
            <Text style={styles.menuText}>🏠  Back to Categories</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFDF7',
    overflow: 'hidden',
  },

  splash: { position: 'absolute', opacity: 0.7 },

  rainbowStripe: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 6,
    zIndex: 10,
  },
  rainbowBand: { flex: 1 },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: IS_TABLET ? 40 : 20,
    gap: IS_TABLET ? 22 : 16,
    alignSelf: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 640 : 480,
    minHeight: '100%',
  },

  // Mascot Heart Icon
  iconOuter: {
    padding: 6,
    borderRadius: ms(60),
    backgroundColor: 'rgba(254, 205, 211, 0.45)',
    marginTop: 8,
  },
  iconBubble: {
    width: ms(96),
    height: ms(96),
    borderRadius: ms(48),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#FECDD3',
    shadowColor: '#F43F5E',
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    position: 'relative',
  },
  iconEmoji: { fontSize: ms(48) },
  miniBandage: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    padding: 2,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  miniBandageText: { fontSize: ms(16) },

  // Title
  titleWrap: { alignItems: 'center', gap: 4 },
  title: {
    fontSize: ms(30),
    fontWeight: '900',
    color: '#E11D48',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: ms(13),
    color: '#64748B',
    fontWeight: '700',
    textAlign: 'center',
  },

  // Level Card
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: '#F1F5F9',
    gap: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  levelEmoji: { fontSize: ms(28) },
  levelInfo: { flex: 1, minWidth: 0 },
  levelNum: { fontSize: ms(10), fontWeight: '900', color: '#94A3B8', letterSpacing: 0.6 },
  levelTitle: { fontSize: ms(15), fontWeight: '900', color: '#1E293B', flexShrink: 1 },

  // Stars Empty Card
  starsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#F1F5F9',
    gap: 8,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 1,
  },
  starsRow: { flexDirection: 'row', gap: 12 },
  starEmptyBubble: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(20),
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starEmptyChar: { fontSize: ms(20), color: '#CBD5E1' },
  starsEncouragement: {
    fontSize: ms(11.5),
    fontWeight: '800',
    color: '#64748B',
    textAlign: 'center',
  },

  // Pro Tip Card
  tipCard: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FDE68A',
    borderWidth: 1.5,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    gap: 4,
  },
  tipHeader: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  tipIcon: { fontSize: ms(15) },
  tipTitle: { fontSize: ms(12.5), fontWeight: '900', color: '#B45309' },
  tipBody: {
    fontSize: ms(11.5),
    color: '#92400E',
    fontWeight: '600',
    lineHeight: ms(17),
  },
  tipBold: { fontWeight: '900', color: '#78350F' },

  // Action Buttons
  btnStack: { width: '100%', gap: 10, marginTop: 4 },
  retryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF5722',
    paddingVertical: ms(16),
    paddingHorizontal: 20,
    borderRadius: 28,
    shadowColor: '#EA580C',
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    borderBottomWidth: 5,
    borderBottomColor: '#C23616',
  },
  retryIconBubble: {
    width: ms(34),
    height: ms(34),
    borderRadius: ms(17),
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryIcon: { fontSize: ms(18) },
  retryText: { color: '#FFFFFF', fontSize: ms(18), fontWeight: '900', letterSpacing: 0.5 },
  retryArrowBubble: {
    width: ms(30),
    height: ms(30),
    borderRadius: ms(15),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  retryArrow: { color: '#FF5722', fontSize: ms(12), fontWeight: '900', marginLeft: 2 },

  menuBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingVertical: ms(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderBottomWidth: 3.5,
    borderBottomColor: '#CBD5E1',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  menuText: { color: '#475569', fontSize: ms(14.5), fontWeight: '800' },
});
