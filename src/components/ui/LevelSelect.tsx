import { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, StatusBar, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LEVELS, CATEGORY_LIST, CategoryMeta } from '../../data/levels/index';
import { CategoryKey } from '../../types';
import { IS_TABLET, ms, gridColumns } from '../../utils/responsive';

const COLS = gridColumns(IS_TABLET ? 140 : 105);

interface LevelSelectProps {
  unlockedLevels: number;
  levelStars: Record<number, number>;
  initialCategory?: CategoryKey | null;
  onCategoryChange?: (cat: CategoryKey | null) => void;
  onSelect: (levelId: number) => void;
  onBack: () => void;
}

const CATEGORY_THEMES: Record<CategoryKey, { main: string; bg: string; border: string; lightBg: string }> = {
  animals: { main: '#10B981', bg: '#ECFDF5', border: '#A7F3D0', lightBg: '#F0FDF4' },
  nature: { main: '#EC4899', bg: '#FDF2F8', border: '#FBCFE8', lightBg: '#FFF1F2' },
  food: { main: '#EF4444', bg: '#FEF2F2', border: '#FECACA', lightBg: '#FFF5F5' },
  mythical: { main: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE', lightBg: '#FAF5FF' },
  architecture: { main: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', lightBg: '#FEFCE8' },
  space: { main: '#06B6D4', bg: '#ECFEFF', border: '#A5F3FC', lightBg: '#F0FDFA' },
  vehicles: { main: '#3B82F6', bg: '#EFF6FF', border: '#BFDBFE', lightBg: '#F8FAFC' },
  fun: { main: '#F97316', bg: '#FFF7ED', border: '#FED7AA', lightBg: '#FFFBEB' },
  mandalas: { main: '#6366F1', bg: '#EEF2FF', border: '#C7D2FE', lightBg: '#F5F3FF' },
};

const RAINBOW = ['#FF4D4D', '#FF8C00', '#FFD700', '#4CAF50', '#2196F3', '#9C27B0'];

export default function LevelSelect({
  unlockedLevels,
  levelStars,
  initialCategory,
  onCategoryChange,
  onSelect,
  onBack,
}: LevelSelectProps) {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(initialCategory ?? null);

  const handleSelectCategory = (cat: CategoryKey) => {
    setActiveCategory(cat);
    onCategoryChange?.(cat);
  };

  const handleBackToCategories = () => {
    setActiveCategory(null);
    onCategoryChange?.(null);
  };

  const selectedCategoryMeta = useMemo(
    () => CATEGORY_LIST.find(c => c.key === activeCategory) || null,
    [activeCategory],
  );

  const categoryLevels = useMemo(
    () => (activeCategory ? LEVELS.filter(l => l.category === activeCategory) : []),
    [activeCategory],
  );

  // Pad to full row
  const paddedData = useMemo(() => {
    const rem = categoryLevels.length % COLS;
    if (rem === 0) return categoryLevels as (typeof categoryLevels[0] | null)[];
    return [...categoryLevels, ...Array(COLS - rem).fill(null)] as (typeof categoryLevels[0] | null)[];
  }, [categoryLevels]);

  // Calculate stars per category and total stars
  const { categoryStats, totalGameStars, totalPossibleStars } = useMemo(() => {
    const stats: Record<string, { totalStars: number; earnedStars: number; totalLevels: number }> = {};
    let totalEarned = 0;
    let totalMax = 0;

    for (const cat of CATEGORY_LIST) {
      const lvls = LEVELS.filter(l => l.category === cat.key);
      let earned = 0;
      for (const l of lvls) {
        earned += levelStars[l.id] ?? 0;
      }
      stats[cat.key] = {
        totalStars: lvls.length * 3,
        earnedStars: earned,
        totalLevels: lvls.length,
      };
      totalEarned += earned;
      totalMax += lvls.length * 3;
    }
    return { categoryStats: stats, totalGameStars: totalEarned, totalPossibleStars: totalMax };
  }, [levelStars]);

  // ───────────────────────────────────────────────────────────────────────────
  // VIEW 1: 2-COLUMN SQUARE BENTO CATEGORY HUB
  // ───────────────────────────────────────────────────────────────────────────
  if (!activeCategory || !selectedCategoryMeta) {
    const overallProgress = totalPossibleStars > 0 ? (totalGameStars / totalPossibleStars) * 100 : 0;

    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <StatusBar barStyle="dark-content" />

        {/* Rainbow stripe */}
        <View style={styles.rainbowStripe}>
          {RAINBOW.map(c => <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />)}
        </View>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onBack} style={styles.backBtn} activeOpacity={0.7}>
            <Text style={styles.backIcon}>‹</Text>
            <Text style={styles.backText}>Home</Text>
          </TouchableOpacity>

          <View style={styles.headerTitleWrap}>
            <Text style={styles.title}>🎨 Choose Category</Text>
            <Text style={styles.subtitle}>Select a theme to start coloring</Text>
          </View>

          {/* Stars Pill Badge */}
          <View style={styles.headerStarsPill}>
            <Text style={styles.headerStarIcon}>★</Text>
            <Text style={styles.headerStarText}>{totalGameStars}</Text>
          </View>
        </View>

        {/* 2-Column Grid with Last Item Full Width */}
        <ScrollView
          style={styles.categoryScroll}
          contentContainerStyle={[styles.categoryList, { paddingBottom: insets.bottom + 16 }]}
          showsVerticalScrollIndicator={false}
        >
          {/* Overall Progress Banner */}
          <View style={styles.overallBanner}>
            <View style={styles.overallHeaderRow}>
              <View style={styles.overallTitleWrap}>
                <Text style={styles.overallTrophyEmoji}>🏆</Text>
                <View>
                  <Text style={styles.overallTitle}>Total Art Journey</Text>
                  <Text style={styles.overallSubtitle}>9 Categories · 465+ Sketches</Text>
                </View>
              </View>
              <View style={styles.overallStarBadge}>
                <Text style={styles.overallStarText}>★ {totalGameStars}</Text>
                <Text style={styles.overallMaxText}>/{totalPossibleStars}</Text>
              </View>
            </View>
            <View style={styles.overallBarBg}>
              <View style={[styles.overallBarFill, { width: `${Math.max(4, overallProgress)}%` }]} />
            </View>
          </View>

          {/* 2-Column Grid */}
          <View style={styles.bentoGrid}>
            {CATEGORY_LIST.map((cat: CategoryMeta, idx: number) => {
              const theme = CATEGORY_THEMES[cat.key] || { main: cat.color, bg: cat.bg, border: cat.color + '44', lightBg: '#FFF' };
              const stat = categoryStats[cat.key] || { totalStars: 0, earnedStars: 0, totalLevels: 0 };
              const progress = stat.totalStars > 0 ? (stat.earnedStars / stat.totalStars) * 100 : 0;
              const isLastFullWidth = !IS_TABLET && idx === CATEGORY_LIST.length - 1;

              if (isLastFullWidth) {
                return (
                  <TouchableOpacity
                    key={cat.key}
                    style={[
                      styles.fullWidthCard,
                      {
                        backgroundColor: theme.bg,
                        borderColor: theme.border,
                        borderBottomColor: theme.main,
                      },
                    ]}
                    onPress={() => handleSelectCategory(cat.key)}
                    activeOpacity={0.82}
                  >
                    {/* Left Icon Emblem Bubble */}
                    <View style={[styles.fullWidthIconBubble, { borderColor: theme.border }]}>
                      <Text style={styles.fullWidthIconText}>{cat.emoji}</Text>
                    </View>

                    {/* Middle Content */}
                    <View style={styles.fullWidthMiddle}>
                      <View style={styles.fullWidthTitleRow}>
                        <Text style={styles.fullWidthTitle} numberOfLines={1}>{cat.label}</Text>
                        <View style={[styles.sketchCountPill, { backgroundColor: '#FFFFFF' }]}>
                          <Text style={[styles.sketchCountText, { color: theme.main }]} numberOfLines={1}>
                            {stat.totalLevels} Sketches
                          </Text>
                        </View>
                      </View>

                      <Text style={styles.fullWidthSubtitle} numberOfLines={1}>
                        {cat.subtitle}
                      </Text>

                      {/* Progress Bar Row */}
                      <View style={styles.fullWidthProgressWrap}>
                        <View style={styles.fullWidthStarScoreRow}>
                          <Text style={[styles.starIconText, { color: stat.earnedStars > 0 ? '#F59E0B' : '#94A3B8' }]}>★</Text>
                          <Text style={styles.squareStarScore}>
                            {stat.earnedStars} / {stat.totalStars}
                          </Text>
                        </View>
                        <View style={styles.fullWidthBarBg}>
                          <View style={[styles.squareProgressBarFill, { width: `${progress}%`, backgroundColor: theme.main }]} />
                        </View>
                      </View>
                    </View>

                    {/* Right Chevron Action */}
                    <View style={[styles.fullWidthChevronBubble, { backgroundColor: theme.main + '20', borderColor: theme.main + '40' }]}>
                      <Text style={[styles.fullWidthChevron, { color: theme.main }]}>›</Text>
                    </View>
                  </TouchableOpacity>
                );
              }

              return (
                <TouchableOpacity
                  key={cat.key}
                  style={[
                    styles.squareCard,
                    {
                      backgroundColor: theme.bg,
                      borderColor: theme.border,
                      borderBottomColor: theme.main,
                    },
                  ]}
                  onPress={() => handleSelectCategory(cat.key)}
                  activeOpacity={0.82}
                >
                  {/* Top Badge: Sketch Count */}
                  <View style={styles.cardTopRow}>
                    <View style={[styles.sketchCountPill, { backgroundColor: '#FFFFFF' }]}>
                      <Text style={[styles.sketchCountText, { color: theme.main }]}>
                        {stat.totalLevels} Sketches
                      </Text>
                    </View>
                  </View>

                  {/* Center Emblem Bubble */}
                  <View style={[styles.squareIconBubble, { borderColor: theme.border }]}>
                    <Text style={styles.squareIconText}>{cat.emoji}</Text>
                  </View>

                  {/* Title & Subtitle */}
                  <View style={styles.squareTextWrap}>
                    <Text style={styles.squareTitle} numberOfLines={1}>
                      {cat.label}
                    </Text>
                    <Text style={styles.squareSubtitle} numberOfLines={1}>
                      {cat.subtitle}
                    </Text>
                  </View>

                  {/* Bottom Star Score & Progress Bar */}
                  <View style={styles.squareBottomWrap}>
                    <View style={styles.squareProgressRow}>
                      <Text style={[styles.starIconText, { color: stat.earnedStars > 0 ? '#F59E0B' : '#94A3B8' }]}>★</Text>
                      <Text style={styles.squareStarScore}>
                        {stat.earnedStars} / {stat.totalStars}
                      </Text>
                    </View>
                    <View style={styles.squareProgressBarBg}>
                      <View style={[styles.squareProgressBarFill, { width: `${progress}%`, backgroundColor: theme.main }]} />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // VIEW 2: CATEGORY LEVEL GRID (3 Columns on Mobile Phones)
  // ───────────────────────────────────────────────────────────────────────────
  const currentTheme = (activeCategory ? CATEGORY_THEMES[activeCategory] : null) || { main: '#6B7280', bg: '#F3F4F6', border: '#E5E7EB', lightBg: '#FFF' };
  const currentCatStat = (activeCategory ? categoryStats[activeCategory] : null) || { totalStars: 0, earnedStars: 0, totalLevels: 0 };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />

      {/* Rainbow stripe */}
      <View style={styles.rainbowStripe}>
        {RAINBOW.map(c => <View key={c} style={[styles.rainbowBand, { backgroundColor: c }]} />)}
      </View>

      {/* Level Grid Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackToCategories} style={styles.backBtn} activeOpacity={0.7}>
          <Text style={styles.backIcon}>‹</Text>
          <Text style={styles.backText}>Categories</Text>
        </TouchableOpacity>

        <View style={styles.headerTitleWrap}>
          <Text style={styles.title} numberOfLines={1}>
            {selectedCategoryMeta.emoji} {selectedCategoryMeta.label}
          </Text>
          <Text style={styles.subtitle}>
            {categoryLevels.length} Sketches Available
          </Text>
        </View>

        {/* Category Stars Badge */}
        <View style={[styles.headerStarsPill, { backgroundColor: currentTheme.main + '15', borderColor: currentTheme.main + '40' }]}>
          <Text style={[styles.headerStarIcon, { color: currentTheme.main }]}>★</Text>
          <Text style={[styles.headerStarText, { color: currentTheme.main }]}>
            {currentCatStat.earnedStars}/{currentCatStat.totalStars}
          </Text>
        </View>
      </View>

      {/* Level Grid */}
      <FlatList
        data={paddedData}
        numColumns={COLS}
        key={`${activeCategory}-${COLS}`}
        keyExtractor={(item, index) => (item ? String(item.id) : `pad-${index}`)}
        contentContainerStyle={[styles.grid, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (!item) return <View style={styles.cellGhost} />;
          const locked = item.id > unlockedLevels;
          const emoji = item.emoji ?? '🎨';
          const stars = levelStars[item.id] ?? 0;
          const perfect = stars === 3;
          const modeIcon = item.mode === 'masterpiece' ? '👑' : null;

          return (
            <TouchableOpacity
              style={[
                styles.cell,
                locked
                  ? styles.cellLocked
                  : {
                    backgroundColor: '#FFFFFF',
                    borderColor: perfect ? '#F59E0B' : currentTheme.border,
                    borderWidth: perfect ? 2 : 1.5,
                  },
              ]}
              onPress={() => !locked && onSelect(item.id)}
              activeOpacity={locked ? 1 : 0.75}
            >
              {locked ? (
                <View style={styles.lockedWrap}>
                  <Text style={styles.lockEmoji}>🔒</Text>
                  <Text style={styles.lockedNumber}>#{item.categoryLevelNumber ?? item.id}</Text>
                </View>
              ) : (
                <View style={styles.cellContent}>
                  {/* Top Bar inside card */}
                  <View style={styles.cellTopBar}>
                    <View style={[styles.numBadge, { backgroundColor: currentTheme.main + '20' }]}>
                      <Text style={[styles.numText, { color: currentTheme.main }]}>{item.categoryLevelNumber ?? item.id}</Text>
                    </View>
                    {modeIcon && <Text style={styles.crownIcon}>{modeIcon}</Text>}
                  </View>

                  {/* Artwork Emoji / Emblem */}
                  <View style={styles.emojiContainer}>
                    <Text style={styles.cellEmoji}>{emoji}</Text>
                  </View>

                  {/* Sketch Name */}
                  <Text style={styles.cellName} numberOfLines={1}>
                    {item.name}
                  </Text>

                  {/* Stars Row */}
                  <View style={styles.starsRow}>
                    {[1, 2, 3].map(s => (
                      <Text
                        key={s}
                        style={[
                          styles.starChar,
                          s <= stars ? styles.starFilled : styles.starEmpty,
                        ]}
                      >
                        ★
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFDF7' },

  rainbowStripe: { flexDirection: 'row', height: 6 },
  rainbowBand: { flex: 1 },

  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FED7AA',
    gap: 2,
  },
  backIcon: { fontSize: ms(18), color: '#EA580C', fontWeight: '900', lineHeight: ms(20) },
  backText: { fontSize: ms(13), color: '#EA580C', fontWeight: '800' },
  headerTitleWrap: { flex: 1, marginLeft: 2 },
  title: { fontSize: ms(16), fontWeight: '900', color: '#0F172A', textAlign: 'left' },
  subtitle: { fontSize: ms(11), color: '#64748B', fontWeight: '600', marginTop: 1, textAlign: 'left' },

  headerStarsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    gap: 3,
  },
  headerStarIcon: { fontSize: ms(13), color: '#F59E0B' },
  headerStarText: { fontSize: ms(12), fontWeight: '800', color: '#92400E' },

  // 2-Column Bento Category Hub Styles
  categoryScroll: { flex: 1 },
  categoryList: {
    padding: 14,
    gap: 14,
    alignSelf: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 1100 : undefined,
  },

  // Overall Journey Banner
  overallBanner: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#FEF3C7',
    shadowColor: '#F59E0B',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    gap: 10,
  },
  overallHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overallTitleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  overallTrophyEmoji: { fontSize: ms(24) },
  overallTitle: { fontSize: ms(15), fontWeight: '900', color: '#0F172A' },
  overallSubtitle: { fontSize: ms(11), color: '#64748B', fontWeight: '600' },
  overallStarBadge: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  overallStarText: { fontSize: ms(13), fontWeight: '900', color: '#B45309' },
  overallMaxText: { fontSize: ms(10), fontWeight: '800', color: '#92400E', opacity: 0.8 },
  overallBarBg: {
    height: 7,
    borderRadius: 5,
    backgroundColor: '#F1F5F9',
    overflow: 'hidden',
  },
  overallBarFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#FF5722',
  },

  // Square Grid (2-col mobile, 3-col tablet)
  bentoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: IS_TABLET ? 'flex-start' : 'space-between',
    gap: 12,
  },
  squareCard: {
    width: IS_TABLET ? '31.8%' : '48.2%',
    borderRadius: 24,
    padding: 12,
    borderWidth: 1.5,
    borderBottomWidth: 4,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: IS_TABLET ? 210 : 162,
  },
  cardTopRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  sketchCountPill: {
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2.5,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  sketchCountText: { fontSize: ms(9.5), fontWeight: '900' },

  squareIconBubble: {
    width: ms(54),
    height: ms(54),
    borderRadius: ms(27),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginVertical: 4,
  },
  squareIconText: { fontSize: ms(28) },

  squareTextWrap: {
    alignItems: 'center',
    width: '100%',
    gap: 2,
  },
  squareTitle: { fontSize: ms(14.5), fontWeight: '900', color: '#0F172A', textAlign: 'center' },
  squareSubtitle: { fontSize: ms(10), color: '#64748B', fontWeight: '600', textAlign: 'center' },

  squareBottomWrap: {
    width: '100%',
    gap: 5,
    marginTop: 6,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
  },
  squareProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  starIconText: { fontSize: ms(11) },
  squareStarScore: { fontSize: ms(10.5), fontWeight: '800', color: '#475569' },
  squareProgressBarBg: {
    width: '100%',
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },
  squareProgressBarFill: { height: '100%', borderRadius: 3 },

  // Last Item Full Width Card Styles (Featured Landscape Card)
  fullWidthCard: {
    width: '100%',
    borderRadius: 26,
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderBottomWidth: 4.5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: IS_TABLET ? 140 : 112,
  },
  fullWidthIconBubble: {
    width: ms(62),
    height: ms(62),
    borderRadius: ms(31),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  fullWidthIconText: { fontSize: ms(32) },
  fullWidthMiddle: { flex: 1, gap: 4 },
  fullWidthTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  fullWidthTitle: { fontSize: ms(16.5), fontWeight: '900', color: '#0F172A', flexShrink: 1 },
  fullWidthSubtitle: { fontSize: ms(11.5), color: '#64748B', fontWeight: '600' },
  fullWidthProgressWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  fullWidthStarScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  fullWidthBarBg: {
    flex: 1,
    height: 6.5,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },
  fullWidthChevronBubble: {
    width: ms(32),
    height: ms(32),
    borderRadius: ms(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 3,
  },
  fullWidthChevron: { fontSize: ms(20), fontWeight: '900', lineHeight: ms(22) },

  // Grid Styles (Spacious 3-column cards on mobile, 5-6 on iPad)
  grid: {
    padding: 10,
    gap: 10,
    alignSelf: 'center',
    width: '100%',
    maxWidth: IS_TABLET ? 1100 : undefined,
  },
  cell: {
    flex: 1,
    margin: 4,
    minHeight: IS_TABLET ? 140 : 112,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    overflow: 'hidden',
  },
  cellLocked: {
    backgroundColor: '#F1F5F9',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    opacity: 0.6,
  },
  lockedWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  lockEmoji: { fontSize: ms(24), opacity: 0.5 },
  lockedNumber: { fontSize: ms(10), fontWeight: '800', color: '#94A3B8' },
  cellGhost: { flex: 1, margin: 4 },

  cellContent: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cellTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  numBadge: {
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
  },
  numText: { fontSize: ms(10), fontWeight: '900' },
  crownIcon: { fontSize: ms(12) },

  emojiContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  cellEmoji: { fontSize: ms(32) },

  cellName: {
    fontSize: ms(10.5),
    fontWeight: '800',
    color: '#1E293B',
    maxWidth: '100%',
    textAlign: 'center',
  },

  starsRow: { flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'center' },
  starChar: { fontSize: ms(11), lineHeight: ms(13) },
  starFilled: { color: '#F59E0B' },
  starEmpty: { color: '#E2E8F0' },
});


