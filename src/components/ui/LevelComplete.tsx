import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Level } from '../../types';
import { IS_TABLET, ms } from '../../utils/responsive';

interface LevelCompleteProps {
  level: Level;
  starsEarned: number;
  onNext: () => void;
  onMenu: () => void;
  onReplay: () => void;
  isLastLevel: boolean;
}

export default function LevelComplete({
  level, starsEarned, onNext, onMenu, onReplay, isLastLevel,
}: LevelCompleteProps) {
  const isMasterpiece = level.mode === 'masterpiece';

  const congratsTitle = isMasterpiece
    ? 'Masterpiece Created!'
    : starsEarned === 3
    ? 'Super Perfect!'
    : starsEarned === 2
    ? 'Great Job!'
    : 'Sketch Completed!';

  const congratsSubtitle = isMasterpiece
    ? 'You unveiled a legendary artwork!'
    : starsEarned === 3
    ? 'Flawless coloring with 3 Stars!'
    : starsEarned === 2
    ? 'Nicely colored with 2 Stars!'
    : 'You brought this artwork to life!';

  return (
    <View style={styles.overlay}>
      {/* Festive Background Glow & Card */}
      <View style={styles.card}>
        {/* Top Celebration Sparkle Ribbon */}
        <View style={styles.confettiRow}>
          <Text style={styles.confettiText}>🎉  ✨  ⭐  🎨  🌟  🎊</Text>
        </View>

        {/* Big Glowing Trophy / Art Emblem */}
        <View style={styles.trophyOuter}>
          <View style={styles.trophyBubble}>
            <Text style={styles.trophyEmoji}>{isMasterpiece ? '👑' : starsEarned === 3 ? '🏆' : '🎨'}</Text>
          </View>
        </View>

        {/* Title & Celebration Subtitle */}
        <View style={styles.titleWrap}>
          <Text
            style={styles.congrats}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.7}
          >
            {congratsTitle}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>{congratsSubtitle}</Text>
        </View>

        {/* Level Name Badge */}
        <View style={styles.levelCard}>
          <Text style={styles.levelEmoji}>{level.emoji}</Text>
          <View style={styles.levelInfo}>
            <Text style={styles.levelNum}>LEVEL {level.categoryLevelNumber ?? level.id}</Text>
            <Text style={styles.levelTitle} numberOfLines={1}>{level.name}</Text>
          </View>
        </View>

        {/* 3-Star Showcase Card */}
        <View style={styles.starsCard}>
          <View style={styles.starsRow}>
            {[1, 2, 3].map(i => {
              const earned = i <= starsEarned;
              return (
                <View
                  key={i}
                  style={[
                    styles.starWrapper,
                    earned ? styles.starWonWrapper : styles.starEmptyWrapper,
                    i === 2 && styles.starCenterWrapper,
                  ]}
                >
                  <Text style={[styles.starChar, !earned && styles.starDim]}>
                    {earned ? '⭐' : '★'}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.starStatusText}>
            {starsEarned === 3
              ? '🌟 All 3 Stars Collected!'
              : `${starsEarned} Star${starsEarned > 1 ? 's' : ''} Won!`}
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          {!isLastLevel && (
            <TouchableOpacity style={styles.nextBtn} onPress={onNext} activeOpacity={0.88}>
              <Text style={styles.nextIcon}>✨</Text>
              <Text style={styles.nextText}>NEXT SKETCH</Text>
              <View style={styles.nextArrowBubble}>
                <Text style={styles.nextArrow}>▶</Text>
              </View>
            </TouchableOpacity>
          )}

          <View style={styles.secondaryRow}>
            <TouchableOpacity style={styles.replayBtn} onPress={onReplay} activeOpacity={0.82}>
              <Text style={styles.replayText}>🔄 Replay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBtn} onPress={onMenu} activeOpacity={0.82}>
              <Text style={styles.menuText}>🏠 Menu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    paddingVertical: IS_TABLET ? 32 : 24,
    paddingHorizontal: IS_TABLET ? 30 : 22,
    alignItems: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 620 : 440,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 16,
    borderWidth: 2.5,
    borderColor: '#FEF3C7',
    gap: 14,
  },
  confettiRow: { marginBottom: -4 },
  confettiText: { fontSize: ms(17), letterSpacing: 4 },

  // Glowing Trophy / Emblem
  trophyOuter: {
    padding: 6,
    borderRadius: ms(56),
    backgroundColor: 'rgba(255, 215, 0, 0.25)',
    marginTop: 2,
  },
  trophyBubble: {
    width: ms(86),
    height: ms(86),
    borderRadius: ms(43),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2.5,
    borderColor: '#FDE68A',
    shadowColor: '#F59E0B',
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  trophyEmoji: { fontSize: ms(44) },

  // Title Wrap
  titleWrap: { alignItems: 'center', gap: 3 },
  congrats: {
    fontSize: ms(25),
    fontWeight: '900',
    color: '#0F172A',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: ms(12.5),
    color: '#64748B',
    fontWeight: '600',
    textAlign: 'center',
  },

  // Level Badge Card
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    gap: 10,
    width: '100%',
  },
  levelEmoji: { fontSize: ms(26) },
  levelInfo: { flex: 1, minWidth: 0 },
  levelNum: { fontSize: ms(10), fontWeight: '900', color: '#94A3B8', letterSpacing: 0.6 },
  levelTitle: { fontSize: ms(14), fontWeight: '900', color: '#1E293B', flexShrink: 1 },

  // Stars Showcase Card
  starsCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    gap: 6,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  starWrapper: {
    width: ms(44),
    height: ms(44),
    borderRadius: ms(22),
    alignItems: 'center',
    justifyContent: 'center',
  },
  starCenterWrapper: {
    width: ms(52),
    height: ms(52),
    borderRadius: ms(26),
    marginTop: -6,
  },
  starWonWrapper: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1.5,
    borderColor: '#F59E0B',
  },
  starEmptyWrapper: {
    backgroundColor: '#F1F5F9',
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
  },
  starChar: { fontSize: ms(24) },
  starDim: { fontSize: ms(22), color: '#94A3B8' },
  starStatusText: {
    fontSize: ms(12),
    fontWeight: '800',
    color: '#B45309',
  },

  // Action Buttons
  actions: { width: '100%', gap: 10, marginTop: 4 },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#10B981',
    borderRadius: 26,
    paddingVertical: ms(15),
    paddingHorizontal: 20,
    shadowColor: '#059669',
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    borderBottomWidth: 4,
    borderBottomColor: '#047857',
  },
  nextIcon: { fontSize: ms(18) },
  nextText: { color: '#FFFFFF', fontSize: ms(17), fontWeight: '900', letterSpacing: 0.5 },
  nextArrowBubble: {
    width: ms(28),
    height: ms(28),
    borderRadius: ms(14),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nextArrow: { color: '#10B981', fontSize: ms(12), fontWeight: '900', marginLeft: 2 },

  secondaryRow: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  replayBtn: {
    flex: 1,
    backgroundColor: '#EFF6FF',
    borderRadius: 22,
    paddingVertical: ms(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#BFDBFE',
    borderBottomWidth: 3,
    borderBottomColor: '#93C5FD',
  },
  replayText: { color: '#2563EB', fontSize: ms(14), fontWeight: '800' },
  menuBtn: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    paddingVertical: ms(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderBottomWidth: 3,
    borderBottomColor: '#CBD5E1',
  },
  menuText: { color: '#475569', fontSize: ms(14), fontWeight: '800' },
});
