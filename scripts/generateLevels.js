#!/usr/bin/env node
// Generates 100 individual level files in src/data/levels/
const fs = require('fs');
const path = require('path');

// templateIdx → template name (matches IMAGE_TEMPLATES order in imageTemplates.ts)
const TEMPLATE_NAMES = [
  'Happy Face','Sunny Day','Simple House','Red Apple','Daisy Flower',       // 0-4
  'Ice Cream','Magic Mushroom','Birthday Balloon','Happy Fish','Beautiful Butterfly', // 5-9
  'Cute Cat','Space Rocket','Hot Air Balloon','Rainbow Sky','Frosty Snowman', // 10-14
  'Yummy Cupcake','Colorful Parrot','Puppy Dog','Jolly Elephant','Friendly Dino', // 15-19
  'Fairy Castle','Friendly Robot','Yellow Submarine','Friendly Dragon','Magic Unicorn', // 20-24
  'Outer Space','Cool Penguin','Wise Owl','Happy Frog','Brave Lion',         // 25-29
  'Cute Panda','Snappy Crab','Sea Turtle','Little Mermaid','Pirate Ship',   // 30-34
  'Fairy House','Pink Flamingo','Magic Wizard','Tropical Fish','Magic Mandala', // 35-39
  'Lollipop','Ghost','Heart','Star Face','Cartoon Bee',                     // 40-44
  'Cactus','Crown','Baby Chick','Simple Fish','Magic Wand',                 // 45-49
  'Shark','Snail','Ladybug','Tiger Face','Pizza Slice',                     // 50-54
  'Watermelon','Donut','Taco','Toucan','Hedgehog',                          // 55-59
  'Alien','Superhero Mask','Chameleon','Mermaid Face','Dragon Head',        // 60-64
  'Unicorn Head','Lighthouse','Witch on Broom','Viking Helmet','Princess',  // 65-69
  'Knight Helmet','Phoenix','Japanese Koi','Pirate Face','Fox Face',        // 70-74
  'Narwhal','Pineapple','Strawberry','Avocado','Koala',                     // 75-79
  'Gorilla','Kangaroo','Peacock','Hot Dog','Hamburger',                     // 80-84
  'Sunflower','Electric Mouse','UFO','Gingerbread Man','Seahorse',          // 85-89
  'Octopus','Crocodile','Hippo','Bunny','Fairy Godmother',                  // 90-94
  'Emperor Penguin','Baby Dragon','Jungle Monkey','Space Girl','Mermaid Portrait', // 95-99
  'Wizard','Dark Dragon','Mermaid Queen','Elf Archer','Castle Knight',            // 100-104
  'Fairy Wings','Sea Witch','Crystal Palace','Phoenix Bird','Centaur',            // 105-109
  'Snow Leopard','Red Panda','Arctic Fox','Sloth','Fennec Fox',                  // 110-114
  'Deer with Antlers','Cheetah','Polar Bear','Capybara','Okapi',                 // 115-119
  'Macaw Parrot','Toucan','Hummingbird','Owl Portrait','Bald Eagle',             // 120-124
  'Flamingo Pair','Peacock Display','Kingfisher','Cardinal','Blue Whale',         // 125-129
  'Lionfish','Pufferfish','Anglerfish','Lobster','Turtle Reef',                  // 130-134
  'Orca','Dragonfly','Atlas Moth','Stag Beetle','Morpho Butterfly',              // 135-139
  'Eiffel Tower','Taj Mahal','Lighthouse','Space Station','Rocket Launch',        // 140-144
  'Northern Lights','Cherry Blossom','Sushi Set','Birthday Cake','Ramen Bowl',   // 145-149
  'Pirate Captain','Samurai Warrior','Astronaut','Ballet Dancer','Viking',        // 150-154
  'Ninja','Cowboy','Witch Portrait','Princess Portrait','Scientist',              // 155-159
  'Ring-tailed Lemur','Axolotl','Quokka','Kirin','Kraken',                       // 160-164
  'Hippogriff','Thunderbird','Autumn Tree','Waterfall Valley','Candy House',      // 165-169
  'Ice Cream Sundae','Firefly Night','Proboscis Monkey','Wombat','Bumblebee',    // 170-174
  'Echidna','Tapir','Aardvark','Cassowary','Selkie',                             // 175-179
  'Nebula Cloud','Alien World','Manticore','Chimera','Basilisk',                  // 180-184
  'Hydra','Manta Ray','Underwater Garden','Black Hole','Colosseum',              // 185-189
  'Castle on Hill','Fish School','Praying Mantis','Scorpion','Cicada',           // 190-194
  'Stick Insect','Peacock Spider','Sloth Bear','Narwhal Pod','Dragon Turtle',    // 195-199
];

// 100-level plan: [templateIdx, paletteIdx, difficulty]
// Every template (0-99) appears exactly once — no repeats.
// Easy   1-25 : simple shapes, kid-friendly palettes
// Medium 26-55: more regions, varied palettes
// Hard   56-80: complex templates, vibrant palettes
// Expert 81-100: the wildest/most-detailed templates, rich palettes
const LEVEL_PLAN = [
  // ── EASY 1-25 ──────────────────────────────────────────────────────────────
  [0,  0,  'easy'],   // 1  Happy Face - Classic Bright
  [1,  17, 'easy'],   // 2  Sunny Day - Spring Garden
  [2,  1,  'easy'],   // 3  Simple House - Pastel Dream
  [3,  14, 'easy'],   // 4  Red Apple - Candy Shop
  [4,  35, 'easy'],   // 5  Daisy Flower - Kids Crayon
  [5,  14, 'easy'],   // 6  Ice Cream - Candy Shop
  [6,  5,  'easy'],   // 7  Magic Mushroom - Forest Earth
  [7,  0,  'easy'],   // 8  Birthday Balloon - Classic Bright
  [8,  4,  'easy'],   // 9  Happy Fish - Ocean Blues
  [40, 14, 'easy'],   // 10 Lollipop - Candy Shop
  [41, 1,  'easy'],   // 11 Ghost - Pastel Dream
  [42, 7,  'easy'],   // 12 Heart - Cherry Blossom
  [43, 0,  'easy'],   // 13 Star Face - Classic Bright
  [44, 17, 'easy'],   // 14 Cartoon Bee - Spring Garden
  [45, 5,  'easy'],   // 15 Cactus - Forest Earth
  [46, 6,  'easy'],   // 16 Crown - Royal Purple
  [47, 17, 'easy'],   // 17 Baby Chick - Spring Garden
  [48, 4,  'easy'],   // 18 Simple Fish - Ocean Blues
  [49, 22, 'easy'],   // 19 Magic Wand - Unicorn Magic
  [54, 0,  'easy'],   // 20 Pizza Slice - Classic Bright
  [55, 17, 'easy'],   // 21 Watermelon - Spring Garden
  [56, 14, 'easy'],   // 22 Donut - Candy Shop
  [57, 8,  'easy'],   // 23 Taco - Tropical
  [83, 0,  'easy'],   // 24 Hot Dog - Classic Bright
  [84, 14, 'easy'],   // 25 Hamburger - Candy Shop

  // ── MEDIUM 26-55 ────────────────────────────────────────────────────────────
  [9,  1,  'medium'], // 26 Beautiful Butterfly - Pastel Dream
  [10, 1,  'medium'], // 27 Cute Cat - Pastel Dream
  [11, 9,  'medium'], // 28 Space Rocket - Galaxy
  [12, 8,  'medium'], // 29 Hot Air Balloon - Tropical
  [13, 0,  'medium'], // 30 Rainbow Sky - Classic Bright
  [14, 19, 'medium'], // 31 Frosty Snowman - Winter Snow
  [15, 14, 'medium'], // 32 Yummy Cupcake - Candy Shop
  [16, 8,  'medium'], // 33 Colorful Parrot - Tropical
  [17, 1,  'medium'], // 34 Puppy Dog - Pastel Dream
  [18, 8,  'medium'], // 35 Jolly Elephant - Tropical
  [19, 5,  'medium'], // 36 Friendly Dino - Forest Earth
  [20, 7,  'medium'], // 37 Fairy Castle - Cherry Blossom
  [21, 24, 'medium'], // 38 Friendly Robot - Retro 80s
  [22, 4,  'medium'], // 39 Yellow Submarine - Ocean Blues
  [23, 21, 'medium'], // 40 Friendly Dragon - Dragon Fire
  [24, 22, 'medium'], // 41 Magic Unicorn - Unicorn Magic
  [25, 9,  'medium'], // 42 Outer Space - Galaxy
  [26, 19, 'medium'], // 43 Cool Penguin - Winter Snow
  [27, 5,  'medium'], // 44 Wise Owl - Forest Earth
  [28, 5,  'medium'], // 45 Happy Frog - Forest Earth
  [50, 4,  'medium'], // 46 Shark - Ocean Blues
  [51, 5,  'medium'], // 47 Snail - Forest Earth
  [52, 7,  'medium'], // 48 Ladybug - Cherry Blossom
  [53, 3,  'medium'], // 49 Tiger Face - Sunset Glow
  [58, 8,  'medium'], // 50 Toucan - Tropical
  [59, 5,  'medium'], // 51 Hedgehog - Forest Earth
  [76, 8,  'medium'], // 52 Pineapple - Tropical
  [77, 7,  'medium'], // 53 Strawberry - Cherry Blossom
  [78, 5,  'medium'], // 54 Avocado - Forest Earth
  [88, 14, 'medium'], // 55 Gingerbread Man - Candy Shop

  // ── HARD 56-80 ──────────────────────────────────────────────────────────────
  [29, 3,  'hard'],   // 56 Brave Lion - Sunset Glow
  [30, 0,  'hard'],   // 57 Cute Panda - Classic Bright
  [31, 8,  'hard'],   // 58 Snappy Crab - Tropical
  [32, 4,  'hard'],   // 59 Sea Turtle - Ocean Blues
  [33, 22, 'hard'],   // 60 Little Mermaid - Unicorn Magic
  [34, 4,  'hard'],   // 61 Pirate Ship - Ocean Blues
  [35, 7,  'hard'],   // 62 Fairy House - Cherry Blossom
  [36, 8,  'hard'],   // 63 Pink Flamingo - Tropical
  [37, 9,  'hard'],   // 64 Magic Wizard - Galaxy
  [38, 4,  'hard'],   // 65 Tropical Fish - Ocean Blues
  [39, 22, 'hard'],   // 66 Magic Mandala - Unicorn Magic
  [60, 9,  'hard'],   // 67 Alien - Galaxy
  [61, 2,  'hard'],   // 68 Superhero Mask - Neon Pop
  [62, 8,  'hard'],   // 69 Chameleon - Tropical
  [63, 22, 'hard'],   // 70 Mermaid Face - Unicorn Magic
  [64, 21, 'hard'],   // 71 Dragon Head - Dragon Fire
  [65, 22, 'hard'],   // 72 Unicorn Head - Unicorn Magic
  [66, 4,  'hard'],   // 73 Lighthouse - Ocean Blues
  [67, 9,  'hard'],   // 74 Witch on Broom - Galaxy
  [68, 0,  'hard'],   // 75 Viking Helmet - Classic Bright
  [69, 7,  'hard'],   // 76 Princess - Cherry Blossom
  [70, 6,  'hard'],   // 77 Knight Helmet - Royal Purple
  [71, 3,  'hard'],   // 78 Phoenix - Sunset Glow
  [72, 4,  'hard'],   // 79 Japanese Koi - Ocean Blues
  [73, 3,  'hard'],   // 80 Pirate Face - Sunset Glow

  // ── EXPERT 81-100 ───────────────────────────────────────────────────────────
  [74, 3,  'expert'], // 81 Fox Face - Sunset Glow
  [75, 4,  'expert'], // 82 Narwhal - Ocean Blues
  [79, 5,  'expert'], // 83 Koala - Forest Earth
  [80, 5,  'expert'], // 84 Gorilla - Forest Earth
  [81, 3,  'expert'], // 85 Kangaroo - Sunset Glow
  [82, 8,  'expert'], // 86 Peacock - Tropical
  [85, 17, 'expert'], // 87 Sunflower - Spring Garden
  [86, 0,  'expert'], // 88 Electric Mouse - Classic Bright
  [87, 9,  'expert'], // 89 UFO - Galaxy
  [89, 4,  'expert'], // 90 Seahorse - Ocean Blues
  [90, 4,  'expert'], // 91 Octopus - Ocean Blues
  [91, 5,  'expert'], // 92 Crocodile - Forest Earth
  [92, 5,  'expert'], // 93 Hippo - Forest Earth
  [93, 1,  'expert'], // 94 Bunny - Pastel Dream
  [94, 22, 'expert'], // 95 Fairy Godmother - Unicorn Magic
  [95, 19, 'expert'], // 96 Emperor Penguin - Winter Snow
  [96, 21, 'expert'], // 97 Baby Dragon - Dragon Fire
  [97, 5,  'expert'], // 98 Jungle Monkey - Forest Earth
  [98, 9,  'expert'], // 99 Space Girl - Galaxy
  [99, 22, 'expert'], // 100 Mermaid Portrait - Unicorn Magic
  [100, 6,  'expert'], // 101 Wizard
  [101, 21, 'expert'], // 102 Dark Dragon
  [102, 2,  'expert'], // 103 Mermaid Queen
  [103, 14, 'expert'], // 104 Elf Archer
  [104, 11, 'expert'], // 105 Castle Knight
  [105, 1,  'expert'], // 106 Fairy Wings
  [106, 18, 'expert'], // 107 Sea Witch
  [107, 7,  'expert'], // 108 Crystal Palace
  [108, 3,  'expert'], // 109 Phoenix Bird
  [109, 5,  'expert'], // 110 Centaur
  [110, 16, 'expert'], // 111 Snow Leopard
  [111, 13, 'expert'], // 112 Red Panda
  [112, 0,  'expert'], // 113 Arctic Fox
  [113, 4,  'expert'], // 114 Sloth
  [114, 17, 'expert'], // 115 Fennec Fox
  [115, 5,  'expert'], // 116 Deer with Antlers
  [116, 15, 'expert'], // 117 Cheetah
  [117, 19, 'expert'], // 118 Polar Bear
  [118, 9,  'expert'], // 119 Capybara
  [119, 8,  'expert'], // 120 Okapi
  [120, 3,  'expert'], // 121 Macaw Parrot
  [121, 10, 'expert'], // 122 Toucan
  [122, 12, 'expert'], // 123 Hummingbird
  [123, 6,  'expert'], // 124 Owl Portrait
  [124, 0,  'expert'], // 125 Bald Eagle
  [125, 1,  'expert'], // 126 Flamingo Pair
  [126, 2,  'expert'], // 127 Peacock Display
  [127, 14, 'expert'], // 128 Kingfisher
  [128, 3,  'expert'], // 129 Cardinal
  [129, 18, 'expert'], // 130 Blue Whale
  [130, 21, 'expert'], // 131 Lionfish
  [131, 10, 'expert'], // 132 Pufferfish
  [132, 9,  'expert'], // 133 Anglerfish
  [133, 3,  'expert'], // 134 Lobster
  [134, 5,  'expert'], // 135 Turtle Reef
  [135, 11, 'expert'], // 136 Orca
  [136, 7,  'expert'], // 137 Dragonfly
  [137, 8,  'expert'], // 138 Atlas Moth
  [138, 6,  'expert'], // 139 Stag Beetle
  [139, 2,  'expert'], // 140 Morpho Butterfly
  [140, 0,  'expert'], // 141 Eiffel Tower
  [141, 22, 'expert'], // 142 Taj Mahal
  [142, 16, 'expert'], // 143 Lighthouse
  [143, 9,  'expert'], // 144 Space Station
  [144, 3,  'expert'], // 145 Rocket Launch
  [145, 7,  'expert'], // 146 Northern Lights
  [146, 1,  'expert'], // 147 Cherry Blossom
  [147, 4,  'expert'], // 148 Sushi Set
  [148, 12, 'expert'], // 149 Birthday Cake
  [149, 13, 'expert'], // 150 Ramen Bowl
  [150, 11, 'expert'], // 151 Pirate Captain
  [151, 6,  'expert'], // 152 Samurai Warrior
  [152, 9,  'expert'], // 153 Astronaut
  [153, 1,  'expert'], // 154 Ballet Dancer
  [154, 8,  'expert'], // 155 Viking
  [155, 7,  'expert'], // 156 Ninja
  [156, 5,  'expert'], // 157 Cowboy
  [157, 15, 'expert'], // 158 Witch Portrait
  [158, 22, 'expert'], // 159 Princess Portrait
  [159, 14, 'expert'], // 160 Scientist
  [160, 10, 'expert'], // 161 Ring-tailed Lemur
  [161, 2,  'expert'], // 162 Axolotl
  [162, 4,  'expert'], // 163 Quokka
  [163, 21, 'expert'], // 164 Kirin
  [164, 18, 'expert'], // 165 Kraken
  [165, 3,  'expert'], // 166 Hippogriff
  [166, 9,  'expert'], // 167 Thunderbird
  [167, 13, 'expert'], // 168 Autumn Tree
  [168, 7,  'expert'], // 169 Waterfall Valley
  [169, 12, 'expert'], // 170 Candy House
  [170, 1,  'expert'], // 171 Ice Cream Sundae
  [171, 9,  'expert'], // 172 Firefly Night
  [172, 5,  'expert'], // 173 Proboscis Monkey
  [173, 8,  'expert'], // 174 Wombat
  [174, 17, 'expert'], // 175 Bumblebee
  [175, 6,  'expert'], // 176 Echidna
  [176, 5,  'expert'], // 177 Tapir
  [177, 8,  'expert'], // 178 Aardvark
  [178, 10, 'expert'], // 179 Cassowary
  [179, 2,  'expert'], // 180 Selkie
  [180, 9,  'expert'], // 181 Nebula Cloud
  [181, 7,  'expert'], // 182 Alien World
  [182, 21, 'expert'], // 183 Manticore
  [183, 3,  'expert'], // 184 Chimera
  [184, 18, 'expert'], // 185 Basilisk
  [185, 21, 'expert'], // 186 Hydra
  [186, 2,  'expert'], // 187 Manta Ray
  [187, 7,  'expert'], // 188 Underwater Garden
  [188, 9,  'expert'], // 189 Black Hole
  [189, 0,  'expert'], // 190 Colosseum
  [190, 6,  'expert'], // 191 Castle on Hill
  [191, 14, 'expert'], // 192 Fish School
  [192, 5,  'expert'], // 193 Praying Mantis
  [193, 8,  'expert'], // 194 Scorpion
  [194, 10, 'expert'], // 195 Cicada
  [195, 4,  'expert'], // 196 Stick Insect
  [196, 3,  'expert'], // 197 Peacock Spider
  [197, 11, 'expert'], // 198 Sloth Bear
  [198, 18, 'expert'], // 199 Narwhal Pod
  [199, 21, 'expert'], // 200 Dragon Turtle
];

const outDir = path.join(__dirname, '../src/data/levels');

// Ensure directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate individual level files
for (let i = 0; i < LEVEL_PLAN.length; i++) {
  const [tIdx, pIdx, diff] = LEVEL_PLAN[i];
  const levelId = i + 1;
  const paddedId = String(levelId).padStart(3, '0');
  const tName = TEMPLATE_NAMES[tIdx] || `Template${tIdx}`;

  const content = `import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level ${levelId}: ${tName} — ${diff}
const LEVEL_${paddedId} = buildLevel(${levelId}, IMAGE_TEMPLATES[${tIdx}], PALETTES[${pIdx}], '${diff}');
export default LEVEL_${paddedId};
`;

  fs.writeFileSync(path.join(outDir, `level_${paddedId}.ts`), content);
}

// Generate index.ts
const imports = LEVEL_PLAN.map((_, i) => {
  const id = String(i + 1).padStart(3, '0');
  return `import l${i + 1} from './level_${id}';`;
}).join('\n');

const arr = LEVEL_PLAN.map((_, i) => `  l${i + 1}`).join(',\n');

const indexContent = `import { Level } from '../../types';
${imports}

export const LEVELS: Level[] = [
${arr},
];
`;

fs.writeFileSync(path.join(outDir, 'index.ts'), indexContent);

console.log(`✅ Generated ${LEVEL_PLAN.length} level files + index.ts in ${outDir}`);
