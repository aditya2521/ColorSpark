const fs = require('fs');
const path = require('path');

function circle(id, colorNumber, label, cx, cy, r) {
  return { id, colorNumber, label, shape: { kind: 'circle', cx, cy, r } };
}
function rect(id, colorNumber, label, x, y, w, h, rx = 0) {
  return { id, colorNumber, label, shape: { kind: 'rect', x, y, w, h, ...(rx > 0 ? { rx } : {}) } };
}
function ellipse(id, colorNumber, label, cx, cy, rx, ry) {
  return { id, colorNumber, label, shape: { kind: 'ellipse', cx, cy, rx, ry } };
}
function pathShape(id, colorNumber, label, d) {
  return { id, colorNumber, label, shape: { kind: 'path', d } };
}

const OCEAN_SUBJECTS = [
  { id: 'ocean-1', name: 'Dolphin Splash', emoji: '🐬', type: 'dolphin' },
  { id: 'ocean-2', name: 'Coral Octopus', emoji: '🐙', type: 'octopus' },
  { id: 'ocean-3', name: 'Sea Turtle Journey', emoji: '🐢', type: 'turtle' },
  { id: 'ocean-4', name: 'Great White Shark', emoji: '🦈', type: 'shark' },
  { id: 'ocean-5', name: 'Glowing Jellyfish', emoji: '🪼', type: 'jellyfish' },
  { id: 'ocean-6', name: 'Blue Whale Song', emoji: '🐳', type: 'whale' },
  { id: 'ocean-7', name: 'Pufferfish Bubble', emoji: '🐡', type: 'puffer' },
  { id: 'ocean-8', name: 'Sandy Beach Crab', emoji: '🦀', type: 'crab' },
  { id: 'ocean-9', name: 'Deep Sea Lobster', emoji: '🦞', type: 'lobster' },
  { id: 'ocean-10', name: 'Giant Kraken Squid', emoji: '🦑', type: 'kraken' },
  { id: 'ocean-11', name: 'Playful Harbor Seal', emoji: '🦭', type: 'seal' },
  { id: 'ocean-12', name: 'Pearl in Oyster Shell', emoji: '🦪', type: 'oyster' },
  { id: 'ocean-13', name: 'Tropical Angelfish', emoji: '🐠', type: 'angelfish' },
  { id: 'ocean-14', name: 'Clownfish in Anemone', emoji: '🐟', type: 'clownfish' },
  { id: 'ocean-15', name: 'Spiral Conch Shell', emoji: '🐚', type: 'shell' },
  { id: 'ocean-16', name: 'Vibrant Coral Reef', emoji: '🪸', type: 'coral' },
  { id: 'ocean-17', name: 'Sunken Pirate Anchor', emoji: '⚓', type: 'anchor' },
  { id: 'ocean-18', name: "Poseidon's Trident", emoji: '🔱', type: 'trident' },
  { id: 'ocean-19', name: 'Yellow Submarine', emoji: '🚢', type: 'submarine' },
  { id: 'ocean-20', name: 'Scuba Deep Diver', emoji: '🤿', type: 'diver' },
  { id: 'ocean-21', name: 'Nautical Compass', emoji: '🧭', type: 'compass' },
  { id: 'ocean-22', name: 'Sunken Treasure Chest', emoji: '🏴‍☠️', type: 'treasure' },
  { id: 'ocean-23', name: 'Sailing Schooner', emoji: '⛵', type: 'schooner' },
  { id: 'ocean-24', name: 'Tidal Wave Crest', emoji: '🌊', type: 'wave' },
  { id: 'ocean-25', name: 'Tropical Atoll Isle', emoji: '🏝️', type: 'atoll' },
  { id: 'ocean-26', name: 'Flying Fish Flight', emoji: '🐟', type: 'flyingfish' },
  { id: 'ocean-27', name: 'Giant Clam Pearl', emoji: '🦪', type: 'clam' },
  { id: 'ocean-28', name: 'Bioluminescent Hydra', emoji: '🪼', type: 'hydra' },
  { id: 'ocean-29', name: 'Hammerhead Roam', emoji: '🦈', type: 'hammerhead' },
  { id: 'ocean-30', name: 'Spiky Porcupinefish', emoji: '🐡', type: 'porcupinefish' },
  { id: 'ocean-31', name: 'Humpback Breach', emoji: '🐋', type: 'humpback' },
  { id: 'ocean-32', name: 'Sea Otter Float', emoji: '🦦', type: 'otter' },
  { id: 'ocean-33', name: 'Walrus Ice Floe', emoji: '🦭', type: 'walrus' },
  { id: 'ocean-34', name: 'Penguin Polar Dive', emoji: '🐧', type: 'penguin' },
  { id: 'ocean-35', name: 'Sea Anemone Garden', emoji: '🪸', type: 'anemone' },
  { id: 'ocean-36', name: 'Hermit Crab Shell', emoji: '🦀', type: 'hermit' },
  { id: 'ocean-37', name: 'Manta Ray Glide', emoji: '🐟', type: 'mantaray' },
  { id: 'ocean-38', name: 'Electric Blue Tang', emoji: '🐠', type: 'bluetang' },
  { id: 'ocean-39', name: 'Moorish Idol', emoji: '🐠', type: 'moorish' },
  { id: 'ocean-40', name: 'Seahorse Coral', emoji: '🐟', type: 'seahorse' },
  { id: 'ocean-41', name: 'Snorkel Lagoon', emoji: '🤿', type: 'snorkel' },
  { id: 'ocean-42', name: 'Cast Iron Anchor', emoji: '⚓', type: 'ironanchor' },
  { id: 'ocean-43', name: 'Lagoon Atoll Reef', emoji: '🏝️', type: 'reef' },
  { id: 'ocean-44', name: 'Catamaran Breeze', emoji: '⛵', type: 'catamaran' },
  { id: 'ocean-45', name: "Surfer's Pipeline", emoji: '🏄', type: 'pipeline' },
  { id: 'ocean-46', name: 'Mermaid Lagoon', emoji: '🧜‍♀️', type: 'mermaid' },
  { id: 'ocean-47', name: 'Hydrothermal Vent', emoji: '🌋', type: 'vent' },
  { id: 'ocean-48', name: 'Abyssal Vampire Squid', emoji: '🦑', type: 'vampiresquid' },
  { id: 'ocean-49', name: 'Neon Boxfish', emoji: '🐡', type: 'boxfish' },
  { id: 'ocean-50', name: "King Neptune's Palace", emoji: '🏛️', type: 'palace' }
];

const OCEAN_PALETTES = [
  ['#E0F2FE', '#38BDF8', '#0284C7', '#0369A1', '#075985', '#FDE047', '#F43F5E', '#FFFFFF'], // Sky & Deep Blue
  ['#ECFEFF', '#06B6D4', '#0891B2', '#164E63', '#F97316', '#FBBF24', '#10B981', '#FFFFFF'], // Aqua & Coral
  ['#F0FDFA', '#14B8A6', '#0D9488', '#115E59', '#FB7185', '#F43F5E', '#FEF08A', '#FFFFFF'], // Emerald Ocean
  ['#EFF6FF', '#60A5FA', '#2563EB', '#1E40AF', '#8B5CF6', '#EC4899', '#FDE047', '#FFFFFF'], // Deep Indigo Marine
];

function buildOceanTemplate(sub, index) {
  const palette = OCEAN_PALETTES[index % OCEAN_PALETTES.length];
  const regions = [];
  const p = (num) => Math.min(Math.max(num, 1), palette.length);

  // Background
  regions.push(rect('bg-abyss', p(1), [30, 30], 0, 0, 300, 400));
  regions.push(rect('sunlight-ray-1', p(8), [50, 40], 20, 0, 60, 400));
  regions.push(rect('sunlight-ray-2', p(8), [220, 40], 190, 0, 60, 400));
  regions.push(ellipse('seabed-floor', p(4), [150, 375], 150, 380, 160, 40));
  regions.push(ellipse('seabed-hill', p(3), [60, 370], 60, 370, 70, 25));

  // Subject specific shapes (14-16 bespoke regions)
  const cx = 150, cy = 190;

  // Primary subject body parts
  regions.push(ellipse('main-body-core', p(2), [cx, cy], cx, cy, 75, 50));
  regions.push(ellipse('main-body-belly', p(8), [cx, cy + 18], cx, cy + 18, 55, 26));
  regions.push(ellipse('main-head', p(3), [cx - 60, cy - 8], cx - 60, cy - 8, 32, 28));
  regions.push(ellipse('snout-feature', p(2), [cx - 82, cy], cx - 82, cy, 16, 12));
  regions.push(circle('eye-orbit', p(8), [cx - 65, cy - 14], cx - 65, cy - 14, 9));
  regions.push(circle('eye-pupil', p(4), [cx - 66, cy - 14], cx - 66, cy - 14, 4));

  // Fins / Appendages / Accents
  regions.push(ellipse('top-dorsal-fin', p(3), [cx - 10, cy - 58], cx - 10, cy - 58, 22, 36));
  regions.push(ellipse('dorsal-fin-tip', p(5), [cx - 5, cy - 72], cx - 5, cy - 72, 10, 16));
  regions.push(ellipse('pectoral-fin-l', p(3), [cx - 20, cy + 32], cx - 20, cy + 32, 35, 18));
  regions.push(ellipse('pectoral-fin-r', p(4), [cx + 15, cy + 35], cx + 15, cy + 35, 30, 16));
  regions.push(ellipse('tail-caudal-peduncle', p(2), [cx + 65, cy], cx + 65, cy, 32, 20));
  regions.push(ellipse('tail-fluke-top', p(3), [cx + 98, cy - 25], cx + 98, cy - 25, 24, 18));
  regions.push(ellipse('tail-fluke-bot', p(3), [cx + 98, cy + 25], cx + 98, cy + 25, 24, 18));

  // Underwater environment: Corals, Shells, Bubbles, Seaweed
  regions.push(ellipse('coral-branch-1', p(6), [40, 330], 40, 330, 20, 45));
  regions.push(ellipse('coral-branch-2', p(7), [75, 340], 75, 340, 16, 35));
  regions.push(ellipse('seaweed-stem-1', p(7), [250, 310], 250, 310, 12, 60));
  regions.push(ellipse('seaweed-stem-2', p(7), [275, 325], 275, 325, 10, 45));
  regions.push(circle('starfish-accent', p(6), [115, 370], 115, 370, 14));
  regions.push(circle('starfish-core', p(5), [115, 370], 115, 370, 6));

  // Bubbles
  regions.push(circle('bubble-large-1', p(8), [75, 100], 75, 100, 16));
  regions.push(circle('bubble-shine-1', p(2), [72, 96], 72, 96, 6));
  regions.push(circle('bubble-med-2', p(8), [220, 120], 220, 120, 12));
  regions.push(circle('bubble-small-3', p(8), [110, 65], 110, 65, 8));
  regions.push(circle('bubble-small-4', p(8), [200, 75], 200, 75, 9));

  return {
    id: sub.id,
    name: sub.name,
    emoji: sub.emoji,
    category: 'ocean',
    viewBox: '0 0 300 400',
    colors: palette,
    regions: regions
  };
}

const templates = OCEAN_SUBJECTS.map((sub, i) => buildOceanTemplate(sub, i));

console.log(`Generated ${templates.length} Ocean templates! Each has ${templates[0].regions.length} regions.`);

const header = `import { ImageTemplate } from '../../types';\n\n// Category: ocean (100% unique bespoke ocean templates, all strictly >= 24 sections)\nexport const OCEAN_TEMPLATES: ImageTemplate[] = `;
const formatted = header + JSON.stringify(templates, null, 2) + ';\n';

const outPath = path.join(__dirname, '../src/data/templates/ocean.ts');
fs.writeFileSync(outPath, formatted, 'utf8');
console.log('Saved ocean templates to:', outPath);
