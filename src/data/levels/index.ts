import { Level, Difficulty, LevelMode, CategoryKey } from '../../types';
import { IMAGE_TEMPLATES, CATEGORY_LIST, CategoryMeta } from '../templates/index';
import { PALETTES } from '../palettes';

export { CATEGORY_LIST, CategoryMeta };

function resolveDifficulty(id: number): Difficulty {
  if (id <= 100) return 'easy';
  if (id <= 200) return 'medium';
  if (id <= 300) return 'hard';
  return 'expert';
}

function resolveMode(id: number): LevelMode {
  if (id % 10 === 0) return 'masterpiece';
  return 'classic';
}

const categoryCounters: Record<string, number> = {};

export const LEVELS: Level[] = IMAGE_TEMPLATES.map((rawTemplate, idx) => {
  const id = idx + 1;
  const difficulty = resolveDifficulty(id);
  const mode = resolveMode(id);
  const category = (rawTemplate.category as CategoryKey) || 'fun';
  categoryCounters[category] = (categoryCounters[category] || 0) + 1;
  const categoryLevelNumber = categoryCounters[category];
  const palette = PALETTES[idx % PALETTES.length];
  const colorSource = rawTemplate.colors && rawTemplate.colors.length > 0 ? rawTemplate.colors : palette.colors;
  
  // Find distinct used numbers in sorted order
  const usedNumbers = [...new Set(rawTemplate.regions.map(r => r.colorNumber))].sort((a, b) => a - b);
  
  // Map old numbers to contiguous 1..K
  const numMapping = new Map<number, number>();
  usedNumbers.forEach((oldNum, index) => {
    numMapping.set(oldNum, index + 1);
  });

  const normalizedColors = usedNumbers.map(oldNum => colorSource[(oldNum - 1) % colorSource.length]);

  const template = {
    ...rawTemplate,
    colors: normalizedColors,
    regions: rawTemplate.regions.map(r => ({
      ...r,
      colorNumber: numMapping.get(r.colorNumber) ?? r.colorNumber,
    })),
  };

  const contiguousNumbers = Array.from({ length: usedNumbers.length }, (_, i) => i + 1);

  return {
    id,
    categoryLevelNumber,
    name: template.name,
    emoji: template.emoji,
    category,
    difficulty,
    mode,
    colorSlots: contiguousNumbers.map(num => ({
      number: num,
      color: normalizedColors[num - 1],
      name: `Color ${num}`,
    })),
    template,
  };
});

export function getLevelsByCategory(category: CategoryKey): Level[] {
  return LEVELS.filter(l => l.category === category);
}
