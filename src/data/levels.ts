import { Level, ColorSlot } from '../types';
import { IMAGE_TEMPLATES } from './imageTemplates';
import { PALETTES } from './palettes';

function buildColorSlots(template: (typeof IMAGE_TEMPLATES)[0], paletteIdx: number): ColorSlot[] {
  const palette = PALETTES[paletteIdx];
  const usedNumbers = [...new Set(template.regions.map(r => r.colorNumber))].sort((a, b) => a - b);
  return usedNumbers.map(num => ({
    number: num,
    color: palette.colors[(num - 1) % palette.colors.length],
    name: `Color ${num}`,
  }));
}

// 100 levels: 25 images × 4 palette variants, easy → expert
const LEVEL_PLAN: Array<{ templateIdx: number; paletteIdx: number; difficulty: Level['difficulty'] }> = [
  // ── EASY (1-25) ──
  { templateIdx: 0,  paletteIdx: 0,  difficulty: 'easy' },   // 1  Smiley - Classic
  { templateIdx: 3,  paletteIdx: 14, difficulty: 'easy' },   // 2  Apple - Fruit
  { templateIdx: 4,  paletteIdx: 18, difficulty: 'easy' },   // 3  Flower - Spring
  { templateIdx: 1,  paletteIdx: 1,  difficulty: 'easy' },   // 4  Sun - Pastel
  { templateIdx: 0,  paletteIdx: 1,  difficulty: 'easy' },   // 5  Smiley - Pastel
  { templateIdx: 2,  paletteIdx: 6,  difficulty: 'easy' },   // 6  House - Royal
  { templateIdx: 3,  paletteIdx: 0,  difficulty: 'easy' },   // 7  Apple - Classic
  { templateIdx: 4,  paletteIdx: 1,  difficulty: 'easy' },   // 8  Flower - Pastel
  { templateIdx: 18, paletteIdx: 14, difficulty: 'easy' },   // 9  Ice Cream - Candy
  { templateIdx: 1,  paletteIdx: 18, difficulty: 'easy' },   // 10 Sun - Spring
  { templateIdx: 0,  paletteIdx: 2,  difficulty: 'easy' },   // 11 Smiley - Neon
  { templateIdx: 3,  paletteIdx: 18, difficulty: 'easy' },   // 12 Apple - Spring
  { templateIdx: 4,  paletteIdx: 0,  difficulty: 'easy' },   // 13 Flower - Classic
  { templateIdx: 2,  paletteIdx: 1,  difficulty: 'easy' },   // 14 House - Pastel
  { templateIdx: 18, paletteIdx: 1,  difficulty: 'easy' },   // 15 Ice Cream - Pastel
  { templateIdx: 19, paletteIdx: 18, difficulty: 'easy' },   // 16 Mushroom - Spring
  { templateIdx: 0,  paletteIdx: 36, difficulty: 'easy' },   // 17 Smiley - Kids Crayon
  { templateIdx: 1,  paletteIdx: 4,  difficulty: 'easy' },   // 18 Sun - Ocean
  { templateIdx: 3,  paletteIdx: 1,  difficulty: 'easy' },   // 19 Apple - Pastel
  { templateIdx: 19, paletteIdx: 1,  difficulty: 'easy' },   // 20 Mushroom - Pastel
  { templateIdx: 2,  paletteIdx: 18, difficulty: 'easy' },   // 21 House - Spring
  { templateIdx: 4,  paletteIdx: 36, difficulty: 'easy' },   // 22 Flower - Kids Crayon
  { templateIdx: 18, paletteIdx: 36, difficulty: 'easy' },   // 23 Ice Cream - Kids Crayon
  { templateIdx: 1,  paletteIdx: 36, difficulty: 'easy' },   // 24 Sun - Kids Crayon
  { templateIdx: 19, paletteIdx: 36, difficulty: 'easy' },   // 25 Mushroom - Kids Crayon

  // ── MEDIUM (26-55) ──
  { templateIdx: 5,  paletteIdx: 12, difficulty: 'medium' }, // 26 Fish - Ocean
  { templateIdx: 6,  paletteIdx: 1,  difficulty: 'medium' }, // 27 Butterfly - Pastel
  { templateIdx: 10, paletteIdx: 0,  difficulty: 'medium' }, // 28 Balloon - Classic
  { templateIdx: 11, paletteIdx: 0,  difficulty: 'medium' }, // 29 Rainbow - Classic
  { templateIdx: 12, paletteIdx: 11, difficulty: 'medium' }, // 30 Snowman - Winter
  { templateIdx: 7,  paletteIdx: 10, difficulty: 'medium' }, // 31 Cat - Cat Colors
  { templateIdx: 16, paletteIdx: 11, difficulty: 'medium' }, // 32 Dog - Dog Colors
  { templateIdx: 5,  paletteIdx: 4,  difficulty: 'medium' }, // 33 Fish - Ocean
  { templateIdx: 8,  paletteIdx: 0,  difficulty: 'medium' }, // 34 Rocket - Classic
  { templateIdx: 6,  paletteIdx: 0,  difficulty: 'medium' }, // 35 Butterfly - Classic
  { templateIdx: 9,  paletteIdx: 6,  difficulty: 'medium' }, // 36 Balloon - Royal
  { templateIdx: 7,  paletteIdx: 1,  difficulty: 'medium' }, // 37 Cat - Pastel
  { templateIdx: 13, paletteIdx: 1,  difficulty: 'medium' }, // 38 Cupcake - Pastel
  { templateIdx: 11, paletteIdx: 1,  difficulty: 'medium' }, // 39 Rainbow - Pastel
  { templateIdx: 16, paletteIdx: 10, difficulty: 'medium' }, // 40 Dog - Cat Colors
  { templateIdx: 5,  paletteIdx: 1,  difficulty: 'medium' }, // 41 Fish - Pastel
  { templateIdx: 6,  paletteIdx: 25, difficulty: 'medium' }, // 42 Butterfly - Spring
  { templateIdx: 8,  paletteIdx: 27, difficulty: 'medium' }, // 43 Rocket - Sky High
  { templateIdx: 12, paletteIdx: 1,  difficulty: 'medium' }, // 44 Snowman - Pastel
  { templateIdx: 20, paletteIdx: 13, difficulty: 'medium' }, // 45 Bird - Bird Colors
  { templateIdx: 10, paletteIdx: 8,  difficulty: 'medium' }, // 46 Balloon - Tropical
  { templateIdx: 7,  paletteIdx: 36, difficulty: 'medium' }, // 47 Cat - Kids Crayon
  { templateIdx: 13, paletteIdx: 14, difficulty: 'medium' }, // 48 Cupcake - Candy
  { templateIdx: 9,  paletteIdx: 0,  difficulty: 'medium' }, // 49 Balloon - Classic
  { templateIdx: 19, paletteIdx: 5,  difficulty: 'medium' }, // 50 Mushroom - Forest
  { templateIdx: 5,  paletteIdx: 29, difficulty: 'medium' }, // 51 Fish - Underwater
  { templateIdx: 11, paletteIdx: 33, difficulty: 'medium' }, // 52 Rainbow - Rainbow
  { templateIdx: 20, paletteIdx: 1,  difficulty: 'medium' }, // 53 Bird - Pastel
  { templateIdx: 17, paletteIdx: 5,  difficulty: 'medium' }, // 54 Elephant - Forest
  { templateIdx: 16, paletteIdx: 1,  difficulty: 'medium' }, // 55 Dog - Pastel

  // ── HARD (56-80) ──
  { templateIdx: 14, paletteIdx: 28, difficulty: 'hard' },   // 56 Castle - City
  { templateIdx: 15, paletteIdx: 24, difficulty: 'hard' },   // 57 Robot - Retro 80s
  { templateIdx: 16, paletteIdx: 20, difficulty: 'hard' },   // 58 Dino - Autumn
  { templateIdx: 17, paletteIdx: 8,  difficulty: 'hard' },   // 59 Elephant - Tropical
  { templateIdx: 7,  paletteIdx: 5,  difficulty: 'hard' },   // 60 Cat - Forest
  { templateIdx: 21, paletteIdx: 29, difficulty: 'hard' },   // 61 Submarine - Underwater
  { templateIdx: 22, paletteIdx: 23, difficulty: 'hard' },   // 62 Dragon - Dragon Fire
  { templateIdx: 14, paletteIdx: 7,  difficulty: 'hard' },   // 63 Castle - Cherry Blossom
  { templateIdx: 8,  paletteIdx: 26, difficulty: 'hard' },   // 64 Rocket - Space
  { templateIdx: 20, paletteIdx: 27, difficulty: 'hard' },   // 65 Bird - Underwater
  { templateIdx: 15, paletteIdx: 0,  difficulty: 'hard' },   // 66 Robot - Classic
  { templateIdx: 17, paletteIdx: 17, difficulty: 'hard' },   // 67 Elephant - Jungle
  { templateIdx: 23, paletteIdx: 25, difficulty: 'hard' },   // 68 Unicorn - Fairy
  { templateIdx: 21, paletteIdx: 4,  difficulty: 'hard' },   // 69 Submarine - Ocean
  { templateIdx: 22, paletteIdx: 9,  difficulty: 'hard' },   // 70 Dragon - Galaxy
  { templateIdx: 14, paletteIdx: 0,  difficulty: 'hard' },   // 71 Castle - Classic
  { templateIdx: 16, paletteIdx: 19, difficulty: 'hard' },   // 72 Dino - Autumn
  { templateIdx: 7,  paletteIdx: 2,  difficulty: 'hard' },   // 73 Cat - Neon
  { templateIdx: 15, paletteIdx: 32, difficulty: 'hard' },   // 74 Robot - Material
  { templateIdx: 20, paletteIdx: 8,  difficulty: 'hard' },   // 75 Bird - Tropical
  { templateIdx: 22, paletteIdx: 2,  difficulty: 'hard' },   // 76 Dragon - Neon
  { templateIdx: 14, paletteIdx: 3,  difficulty: 'hard' },   // 77 Castle - Sunset
  { templateIdx: 21, paletteIdx: 8,  difficulty: 'hard' },   // 78 Submarine - Tropical
  { templateIdx: 23, paletteIdx: 24, difficulty: 'hard' },   // 79 Unicorn - Retro
  { templateIdx: 17, paletteIdx: 2,  difficulty: 'hard' },   // 80 Elephant - Neon

  // ── EXPERT (81-100) ──
  { templateIdx: 24, paletteIdx: 26, difficulty: 'expert' }, // 81 Space - Galaxy
  { templateIdx: 22, paletteIdx: 37, difficulty: 'expert' }, // 82 Dragon - Vibrant Mix
  { templateIdx: 23, paletteIdx: 36, difficulty: 'expert' }, // 83 Unicorn - Muted Elegance
  { templateIdx: 24, paletteIdx: 2,  difficulty: 'expert' }, // 84 Space - Neon
  { templateIdx: 15, paletteIdx: 30, difficulty: 'expert' }, // 85 Robot - Monochrome
  { templateIdx: 22, paletteIdx: 35, difficulty: 'expert' }, // 86 Dragon - Jewel
  { templateIdx: 23, paletteIdx: 9,  difficulty: 'expert' }, // 87 Unicorn - Galaxy
  { templateIdx: 24, paletteIdx: 33, difficulty: 'expert' }, // 88 Space - Rainbow
  { templateIdx: 15, paletteIdx: 20, difficulty: 'expert' }, // 89 Robot - Tropical Rain
  { templateIdx: 22, paletteIdx: 31, difficulty: 'expert' }, // 90 Dragon - Watercolor
  { templateIdx: 23, paletteIdx: 31, difficulty: 'expert' }, // 91 Unicorn - Watercolor
  { templateIdx: 24, paletteIdx: 35, difficulty: 'expert' }, // 92 Space - Jewel
  { templateIdx: 15, paletteIdx: 9,  difficulty: 'expert' }, // 93 Robot - Galaxy
  { templateIdx: 22, paletteIdx: 32, difficulty: 'expert' }, // 94 Dragon - Material
  { templateIdx: 23, paletteIdx: 32, difficulty: 'expert' }, // 95 Unicorn - Material
  { templateIdx: 24, paletteIdx: 9,  difficulty: 'expert' }, // 96 Space - Galaxy 2
  { templateIdx: 22, paletteIdx: 24, difficulty: 'expert' }, // 97 Dragon - Retro
  { templateIdx: 23, paletteIdx: 35, difficulty: 'expert' }, // 98 Unicorn - Jewel
  { templateIdx: 15, paletteIdx: 35, difficulty: 'expert' }, // 99 Robot - Jewel
  { templateIdx: 24, paletteIdx: 32, difficulty: 'expert' }, // 100 Space - Material
];

export const LEVELS: Level[] = LEVEL_PLAN.map((plan, idx) => {
  const template = IMAGE_TEMPLATES[plan.templateIdx];
  const palette = PALETTES[plan.paletteIdx % PALETTES.length];
  return {
    id: idx + 1,
    name: template.name,
    emoji: template.emoji,
    difficulty: plan.difficulty,
    colorSlots: buildColorSlots(template, plan.paletteIdx % PALETTES.length),
    template,
  };
});
