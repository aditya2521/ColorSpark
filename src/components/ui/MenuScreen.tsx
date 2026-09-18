import { View, Text, TouchableOpacity, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IS_TABLET, ms } from '../../utils/responsive';

interface MenuScreenProps {
  onChooseCategory: () => void;
  onPrivacy: () => void;
  onTerms: () => void;
  levelStars: Record<number, number>;
}

// Rainbow title letters
const TITLE = ['C', 'o', 'l', 'o', 'r', 'S', 'p', 'a', 'r', 'k'];
const LETTER_COLORS = [
  '#FF4D4D', '#FF8C00', '#FFD700', '#10B981', '#06B6D4',
  '#8B5CF6', '#EC4899', '#FF8C00', '#F59E0B', '#10B981',
];

// Soft ambient background splashes
const SPLASHES = [
  { color: '#FFE4E6', size: 260, top: -70, left: -70 },
  { color: '#E0F2FE', size: 280, top: -90, right: -80 },
  { color: '#DCFCE7', size: 220, bottom: 90, left: -60 },
  { color: '#FEF3C7', size: 240, bottom: 40, right: -60 },
  { color: '#F3E8FF', size: 160, top: '38%' as any, left: -50 },
];

export default function MenuScreen({ onChooseCategory, onPrivacy, onTerms, levelStars }: MenuScreenProps) {
  const totalStars = Object.values(levelStars).reduce((sum, s) => sum + s, 0);
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />

      {/* Pastel splash background blobs */}
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
        {['#FF4D4D', '#FF8C00', '#FFD700', '#10B981', '#06B6D4', '#8B5CF6'].map(c => (
          <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />
        ))}
      </View>

      {/* Scrollable content container */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[
          styles.content,
          { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Playful Floating Logo Emblem */}
        <View style={styles.logoOuter}>
          <View style={styles.logoBubble}>
            <Text style={styles.logoEmoji}>🎨</Text>
            <Text style={styles.logoSparkle}>✨</Text>
          </View>
        </View>

        {/* Rainbow Bubbly Title */}
        <View style={styles.titleWrap}>
          <View style={styles.titleRow}>
            {TITLE.map((ch, i) => (
              <Text key={i} style={[styles.titleChar, { color: LETTER_COLORS[i] }]}>{ch}</Text>
            ))}
          </View>
          <Text style={styles.tagline}>✨  Color · Create · Spark Joy  ✨</Text>
        </View>

        {/* Kid-Friendly Artwork Showcase Card */}
        <View style={styles.heroCard}>
          <View style={styles.emojiBanner}>
            <View style={styles.emojiRowWrap}>
              <Text style={styles.emojiRow}>🦋  🦄  🐉  🌈  🐱  🚀  🐬</Text>
            </View>
            <View style={styles.emojiRowWrap}>
              <Text style={styles.emojiRow}>🌸  🍕  🏰  🍦  🐼  🎨  ✨</Text>
            </View>
          </View>

          <Text style={styles.heroTitle}>465+ Fun Sketches to Color!</Text>
          <Text style={styles.heroSubtitle}>Choose colors by number and bring magical drawings to life</Text>

          {/* Quick Stats Banner */}
          <View style={styles.statsRow}>
            <View style={[styles.statPill, { backgroundColor: '#FEF2F2', borderColor: '#FECACA' }]}>
              <Text style={styles.statIcon}>🎨</Text>
              <Text style={[styles.statNum, { color: '#EF4444' }]}>465+</Text>
              <Text style={[styles.statLbl, { color: '#EF4444' }]}>Drawings</Text>
            </View>

            <View style={[styles.statPill, { backgroundColor: '#FFFBEB', borderColor: '#FDE68A' }]}>
              <Text style={styles.statIcon}>⭐</Text>
              <Text style={[styles.statNum, { color: '#F59E0B' }]}>{totalStars}</Text>
              <Text style={[styles.statLbl, { color: '#F59E0B' }]}>Stars Won</Text>
            </View>
          </View>
        </View>

        {/* Giant Juicy Primary Button: START COLORING! */}
        <View style={styles.btnStack}>
          <TouchableOpacity
            style={styles.mainPlayBtn}
            onPress={onChooseCategory}
            activeOpacity={0.88}
          >
            <View style={styles.playIconBubble}>
              <Text style={styles.playBtnIcon}>✨</Text>
            </View>
            <Text style={styles.mainPlayBtnText}>START COLORING!</Text>
            <View style={styles.playArrowBubble}>
              <Text style={styles.playArrow}>▶</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Kid-Friendly Perks Badges */}
        <View style={styles.perksRow}>
          <View style={[styles.perkBadge, { backgroundColor: '#ECFDF5', borderColor: '#A7F3D0' }]}>
            <Text style={styles.perkEmoji}>📴</Text>
            <Text style={[styles.perkText, { color: '#059669' }]}>Play Offline</Text>
          </View>
          <View style={[styles.perkBadge, { backgroundColor: '#EFF6FF', borderColor: '#BFDBFE' }]}>
            <Text style={styles.perkEmoji}>🛡️</Text>
            <Text style={[styles.perkText, { color: '#2563EB' }]}>100% Kid Safe</Text>
          </View>
          <View style={[styles.perkBadge, { backgroundColor: '#FDF2F8', borderColor: '#FBCFE8' }]}>
            <Text style={styles.perkEmoji}>🌈</Text>
            <Text style={[styles.perkText, { color: '#DB2777' }]}>Free & Fun</Text>
          </View>
        </View>

        {/* Legal Links */}
        <View style={styles.legalRow}>
          <TouchableOpacity onPress={onPrivacy} activeOpacity={0.7} style={styles.legalBtn}>
            <Text style={styles.legalLink}>🔒 Privacy Policy</Text>
          </TouchableOpacity>
          <Text style={styles.legalDivider}>·</Text>
          <TouchableOpacity onPress={onTerms} activeOpacity={0.7} style={styles.legalBtn}>
            <Text style={styles.legalLink}>📋 Terms & Conditions</Text>
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

  content: {
    alignItems: 'center',
    paddingHorizontal: IS_TABLET ? 40 : 20,
    gap: IS_TABLET ? 26 : 18,
    alignSelf: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 780 : 500,
  },

  // Background blobs
  splash: { position: 'absolute', opacity: 0.75 },

  // Rainbow stripe
  rainbowStripe: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 6,
    zIndex: 10,
  },
  rainbowBand: { flex: 1 },

  // Logo
  logoOuter: {
    padding: 6,
    borderRadius: ms(60),
    backgroundColor: 'rgba(255, 215, 0, 0.28)',
    marginTop: 8,
  },
  logoBubble: {
    width: ms(96),
    height: ms(96),
    borderRadius: ms(48),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F59E0B',
    shadowOpacity: 0.28,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
    borderWidth: 3,
    borderColor: '#FDE68A',
    position: 'relative',
  },
  logoEmoji: { fontSize: ms(48) },
  logoSparkle: {
    position: 'absolute',
    top: 4,
    right: 6,
    fontSize: ms(18),
  },

  // Title
  titleWrap: { alignItems: 'center', gap: 4, maxWidth: '100%' },
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  titleChar: {
    fontSize: ms(38),
    fontWeight: '900',
    lineHeight: ms(48),
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  tagline: {
    fontSize: ms(13),
    color: '#64748B',
    fontWeight: '800',
    marginTop: 2,
  },

  // Hero Card
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#F59E0B',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
    borderWidth: 2,
    borderColor: '#FEF3C7',
    gap: 6,
  },
  emojiBanner: {
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 4,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    width: '100%',
    alignItems: 'center',
    gap: 4,
  },
  emojiRowWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emojiRow: { fontSize: ms(20), letterSpacing: 6, textAlign: 'center' },
  heroTitle: { fontSize: ms(17), fontWeight: '900', color: '#0F172A', textAlign: 'center' },
  heroSubtitle: { fontSize: ms(12.5), color: '#64748B', fontWeight: '600', textAlign: 'center', lineHeight: 18 },

  // Stats
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 10, width: '100%', justifyContent: 'center' },
  statPill: {
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    borderWidth: 1.5,
  },
  statIcon: { fontSize: ms(18), marginBottom: 2 },
  statNum: { fontSize: ms(20), fontWeight: '900' },
  statLbl: { fontSize: ms(10.5), fontWeight: '800', marginTop: 1 },

  // Big Play Button
  btnStack: { width: '100%', marginTop: 6 },
  mainPlayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FF5722',
    paddingVertical: ms(17),
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#EA580C',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 9,
    borderBottomWidth: 5,
    borderBottomColor: '#C23616',
  },
  playIconBubble: {
    width: ms(36),
    height: ms(36),
    borderRadius: ms(18),
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playBtnIcon: { fontSize: ms(19) },
  mainPlayBtnText: { color: '#FFFFFF', fontSize: ms(19), fontWeight: '900', letterSpacing: 0.6 },
  playArrowBubble: {
    width: ms(32),
    height: ms(32),
    borderRadius: ms(16),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  playArrow: { color: '#FF5722', fontSize: ms(13), fontWeight: '900', marginLeft: 2 },

  // Perks Badges
  perksRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    width: '100%',
    marginTop: 4,
  },
  perkBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 16,
    borderWidth: 1.5,
    gap: 5,
    flex: 1,
    justifyContent: 'center',
  },
  perkEmoji: { fontSize: ms(13) },
  perkText: { fontSize: ms(10.5), fontWeight: '800' },

  // Legal
  legalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  legalBtn: { paddingVertical: 4, paddingHorizontal: 6 },
  legalLink: { fontSize: ms(11), color: '#94A3B8', fontWeight: '700' },
  legalDivider: { fontSize: ms(14), color: '#CBD5E1' },
});

