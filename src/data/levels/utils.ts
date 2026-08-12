import { Level, ImageTemplate, Difficulty } from '../../types';
import { Palette } from '../palettes';

export function buildLevel(
  id: number,
  template: ImageTemplate,
  palette: Palette,
  difficulty: Difficulty,
): Level {
  const usedNumbers = [...new Set(template.regions.map(r => r.colorNumber))].sort((a, b) => a - b);
  return {
    id,
    name: template.name,
    emoji: template.emoji,
    difficulty,
    colorSlots: usedNumbers.map(num => ({
      number: num,
      color: palette.colors[(num - 1) % palette.colors.length],
      name: `Color ${num}`,
    })),
    template,
  };
}
