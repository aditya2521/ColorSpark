import { Level, ImageTemplate, Difficulty, LevelMode } from '../../types';
import { Palette } from '../palettes';

function resolveMode(id: number, explicitMode?: LevelMode): LevelMode {
  if (explicitMode) return explicitMode;
  if (id % 10 === 0) return 'masterpiece';
  return 'classic';
}

export function buildLevel(
  id: number,
  template: ImageTemplate,
  palette: Palette,
  difficulty: Difficulty,
  explicitMode?: LevelMode,
  description?: string,
): Level {
  const usedNumbers = [...new Set(template.regions.map(r => r.colorNumber))].sort((a, b) => a - b);
  const colorSource = template.colors ?? palette.colors;
  const mode = resolveMode(id, explicitMode);

  return {
    id,
    name: template.name,
    emoji: template.emoji,
    category: (template.category as any) || 'fun',
    difficulty,
    mode,
    description,
    colorSlots: usedNumbers.map(num => ({
      number: num,
      color: colorSource[(num - 1) % colorSource.length],
      name: `Color ${num}`,
    })),
    template,
  };
}
