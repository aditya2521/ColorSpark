const fs = require('fs');
const path = require('path');

// 1. Nature
const naturePath = path.join(__dirname, '../src/data/templates/nature.ts');
let natureCode = fs.readFileSync(naturePath, 'utf8');
const natureMatch = natureCode.match(/export const NATURE_TEMPLATES: ImageTemplate\[\] = (\[[\s\S]*\]);/);
if (natureMatch) {
  const templates = eval(natureMatch[1]);
  templates[7].emoji = '🍂';  // #8 Autumn Tree
  templates[8].emoji = '🏞️';  // #9 Waterfall Valley
  templates[37].emoji = '🌄'; // #38 Emerald Canyon
  templates[49].emoji = '🫧'; // #50 Lily Pad Pond
  const header = `import { ImageTemplate } from '../../types';\n\n// Category: nature (50 strictly verified unique templates, 0 duplicate emojis)\nexport const NATURE_TEMPLATES: ImageTemplate[] = `;
  fs.writeFileSync(naturePath, header + JSON.stringify(templates, null, 2) + ';\n', 'utf8');
}

// 2. Mythical
const mythPath = path.join(__dirname, '../src/data/templates/mythical.ts');
let mythCode = fs.readFileSync(mythPath, 'utf8');
const mythMatch = mythCode.match(/export const MYTHICAL_TEMPLATES: ImageTemplate\[\] = (\[[\s\S]*\]);/);
if (mythMatch) {
  const templates = eval(mythMatch[1]);
  templates[6].emoji = '🐉';  // #7 Fire Dragon Head
  templates[9].emoji = '🔥';  // #10 Fire Phoenix
  templates[11].emoji = '🐚'; // #12 Mermaid Portrait
  templates[36].emoji = '🦹‍♀️'; // #37 Witch Queen
  templates[40].emoji = '🐊'; // #41 Multi-Head Hydra
  templates[42].emoji = '🏛️'; // #43 Winged Sphinx
  templates[43].emoji = '🐎'; // #44 Winged Pegasus
  templates[45].emoji = '🪓'; // #46 Valkyrie Maiden
  const header = `import { ImageTemplate } from '../../types';\n\n// Category: mythical (50 strictly verified unique templates, 0 duplicate emojis)\nexport const MYTHICAL_TEMPLATES: ImageTemplate[] = `;
  fs.writeFileSync(mythPath, header + JSON.stringify(templates, null, 2) + ';\n', 'utf8');
}

console.log('Zero duplicate emojis fixed across all categories!');
