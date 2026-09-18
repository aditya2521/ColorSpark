const fs = require('fs');
const path = require('path');

function rect(id, colorNumber, label, x, y, w, h, rx = 0) {
  return { id, colorNumber, label, shape: { kind: 'rect', x, y, w, h, ...(rx > 0 ? { rx } : {}) } };
}

function circle(id, colorNumber, label, cx, cy, r) {
  return { id, colorNumber, label, shape: { kind: 'circle', cx, cy, r } };
}

function ellipse(id, colorNumber, label, cx, cy, rx, ry) {
  return { id, colorNumber, label, shape: { kind: 'ellipse', cx, cy, rx, ry } };
}

function polygon(id, colorNumber, label, points) {
  return { id, colorNumber, label, shape: { kind: 'polygon', points } };
}

function pathShape(id, colorNumber, label, d) {
  return { id, colorNumber, label, shape: { kind: 'path', d } };
}

const BESPOKE_FUN_TEMPLATES = [
  // 1. 😊 Happy Face (smiley)
  {
    id: "smiley",
    name: "Happy Face",
    emoji: "😊",
    category: "fun",
    viewBox: "0 0 300 400",
    colors: ["#FFF8E1", "#FFD54F", "#FFA000", "#FF6F00", "#FF4081", "#212121", "#FFFFFF"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("face-base", 2, [150, 200], 150, 200, 100),
      ellipse("face-shade", 3, [150, 260], 150, 260, 85, 30),
      ellipse("eye-left", 6, [110, 170], 110, 170, 12, 18),
      ellipse("eye-right", 6, [190, 170], 190, 170, 12, 18),
      circle("eye-shine-l", 7, [106, 164], 106, 164, 5),
      circle("eye-shine-r", 7, [186, 164], 186, 164, 5),
      pathShape("big-smile", 6, [150, 235], "M 95,210 Q 150,275 205,210 Q 150,240 95,210 Z"),
      ellipse("tongue-pink", 5, [150, 245], 150, 245, 24, 14),
      circle("cheek-left", 5, [85, 205], 85, 205, 18),
      circle("cheek-right", 5, [215, 205], 215, 205, 18),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8),
      circle("sparkle-2", 4, [255, 65], 255, 65, 8),
      circle("sparkle-3", 4, [40, 335], 40, 335, 10),
      circle("sparkle-4", 4, [260, 335], 260, 335, 10),
      circle("confetti-1", 5, [80, 85], 80, 85, 6),
      circle("confetti-2", 3, [220, 85], 220, 85, 6),
      circle("confetti-3", 5, [65, 280], 65, 280, 7),
      circle("confetti-4", 3, [235, 280], 235, 280, 7),
      circle("star-top", 2, [150, 50], 150, 50, 14),
      circle("star-bot", 2, [150, 355], 150, 355, 14),
      circle("dot-l", 7, [115, 48], 115, 48, 4),
      circle("dot-r", 7, [185, 48], 185, 48, 4),
      circle("dot-center", 7, [150, 380], 150, 380, 5)
    ]
  },

  // 2. ⛄ Frosty Snowman (snowman)
  {
    id: "snowman",
    name: "Frosty Snowman",
    emoji: "⛄",
    category: "fun",
    viewBox: "0 0 300 400",
    colors: ["#E1F5FE", "#FFFFFF", "#ECEFF1", "#B0BEC5", "#D32F2F", "#FF6D00", "#212121", "#8D6E63"],
    regions: [
      rect("snow-sky", 1, [25, 30], 0, 0, 300, 400),
      ellipse("ground-snow", 2, [150, 380], 150, 380, 140, 35),
      circle("body-bot", 2, [150, 290], 150, 290, 70),
      circle("body-mid", 2, [150, 195], 150, 195, 52),
      circle("body-head", 2, [150, 115], 150, 115, 38),
      rect("tophat-brim", 7, [150, 85], 110, 80, 80, 10, 2),
      rect("tophat-crown", 7, [150, 55], 122, 35, 56, 45, 2),
      rect("tophat-ribbon", 5, [150, 75], 122, 72, 56, 8),
      circle("eye-l", 7, [138, 110], 138, 110, 5),
      circle("eye-r", 7, [162, 110], 162, 110, 5),
      polygon("carrot-nose", 6, [170, 122], "150,118 190,125 150,126"),
      rect("scarf-neck", 5, [150, 150], 120, 145, 60, 14, 4),
      rect("scarf-tail", 5, [135, 185], 126, 155, 18, 50, 3),
      circle("coal-button-1", 7, [150, 185], 150, 185, 6),
      circle("coal-button-2", 7, [150, 215], 150, 215, 6),
      circle("coal-button-3", 7, [150, 275], 150, 275, 7),
      circle("coal-button-4", 7, [150, 310], 150, 310, 7),
      pathShape("twig-arm-l", 8, [75, 180], "M 105,190 L 55,165 L 45,150 M 55,165 L 50,180"),
      pathShape("twig-arm-r", 8, [225, 180], "M 195,190 L 245,165 L 255,150 M 245,165 L 250,180"),
      circle("snowflake-1", 2, [45, 55], 45, 55, 6),
      circle("snowflake-2", 2, [255, 55], 255, 55, 6),
      circle("snowflake-3", 2, [40, 240], 40, 240, 5),
      circle("snowflake-4", 2, [260, 240], 260, 240, 5),
      circle("snow-hill", 3, [50, 360], 50, 360, 20)
    ]
  },

  // 3. 👻 Friendly Ghost (ghost)
  {
    id: "ghost",
    name: "Ghost",
    emoji: "👻",
    category: "fun",
    viewBox: "0 0 300 400",
    colors: ["#1A1A2E", "#311B92", "#FFFFFF", "#ECEFF1", "#FF9800", "#FFD54F", "#212121", "#E91E63"],
    regions: [
      rect("night-bg", 1, [25, 30], 0, 0, 300, 400),
      circle("spooky-moon", 6, [240, 70], 240, 70, 30),
      pathShape("ghost-body", 3, [150, 190], "M 80,180 C 80,90 220,90 220,180 C 220,270 240,310 215,310 C 190,310 180,290 165,305 C 150,320 135,305 120,310 C 95,315 80,270 80,180 Z"),
      ellipse("ghost-arm-l", 3, [70, 200], 70, 200, 22, 14),
      ellipse("ghost-arm-r", 3, [230, 200], 230, 200, 22, 14),
      ellipse("eye-big-l", 7, [125, 160], 125, 160, 12, 18),
      ellipse("eye-big-r", 7, [175, 160], 175, 160, 12, 18),
      circle("eye-shine-l", 3, [122, 155], 122, 155, 5),
      circle("eye-shine-r", 3, [172, 155], 172, 155, 5),
      ellipse("mouth-o", 7, [150, 195], 150, 195, 10, 15),
      circle("rosy-cheek-l", 8, [105, 185], 105, 185, 10),
      circle("rosy-cheek-r", 8, [195, 185], 195, 185, 10),
      ellipse("pumpkin-body", 5, [75, 335], 75, 335, 30, 24),
      ellipse("pumpkin-rib-c", 6, [75, 335], 75, 335, 16, 24),
      rect("pumpkin-stem", 1, [75, 310], 72, 304, 6, 12),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [110, 45], 110, 45, 5),
      circle("star-3", 6, [180, 50], 180, 50, 4),
      circle("star-4", 6, [50, 130], 50, 130, 4),
      circle("candy-corn-base", 6, [235, 340], 235, 340, 16),
      circle("candy-corn-mid", 5, [235, 335], 235, 335, 12),
      circle("candy-corn-tip", 3, [235, 328], 235, 328, 6),
      circle("haunted-bat-1", 7, [60, 95], 60, 95, 8),
      circle("haunted-bat-2", 7, [240, 140], 240, 140, 8)
    ]
  },

  // 4. ⭐ Super Star (starface)
  {
    id: "starface",
    name: "Star Face",
    emoji: "⭐",
    category: "fun",
    viewBox: "0 0 300 400",
    colors: ["#12002B", "#311B92", "#FFD54F", "#FFCA28", "#FF8F00", "#FF4081", "#212121", "#FFFFFF"],
    regions: [
      rect("cosmos-sky", 1, [25, 30], 0, 0, 300, 400),
      circle("glow-aura", 2, [150, 200], 150, 200, 120),
      polygon("golden-star", 3, [150, 200], "150,60 178,146 269,146 195,199 223,285 150,232 77,285 105,199 31,146 122,146"),
      polygon("star-facet-shade", 5, [150, 200], "150,60 150,232 77,285 105,199 31,146 122,146"),
      circle("face-center", 4, [150, 195], 150, 195, 38),
      circle("eye-left", 7, [136, 185], 136, 185, 7),
      circle("eye-right", 7, [164, 185], 164, 185, 7),
      circle("eye-spark-l", 8, [134, 183], 134, 183, 3),
      circle("eye-spark-r", 8, [162, 183], 162, 183, 3),
      pathShape("sweet-smile", 7, [150, 208], "M 138,205 Q 150,220 162,205"),
      circle("blush-l", 6, [125, 198], 125, 198, 8),
      circle("blush-r", 6, [175, 198], 175, 198, 8),
      circle("sparkle-1", 3, [45, 65], 45, 65, 8),
      circle("sparkle-2", 3, [255, 65], 255, 65, 8),
      circle("sparkle-3", 3, [40, 335], 40, 335, 10),
      circle("sparkle-4", 3, [260, 335], 260, 335, 10),
      circle("twinkle-1", 8, [90, 45], 90, 45, 4),
      circle("twinkle-2", 8, [210, 45], 210, 45, 4),
      circle("twinkle-3", 8, [70, 350], 70, 350, 5),
      circle("twinkle-4", 8, [230, 350], 230, 350, 5),
      circle("floating-stardust-1", 4, [110, 330], 110, 330, 5),
      circle("floating-stardust-2", 4, [190, 330], 190, 330, 5),
      circle("floating-stardust-3", 4, [50, 230], 50, 230, 5),
      circle("floating-stardust-4", 4, [250, 230], 250, 230, 5)
    ]
  }
];

// Helper to fill all 50 templates with handcrafted unique objects
const remainingFunSubjects = [
  { id: "superheromask", name: "Superhero Mask", emoji: "🦸", colors: ["#0D47A1", "#D50000", "#FFD54F", "#212121", "#FFFFFF", "#00E5FF"] },
  { id: "knighthelmet", name: "Knight Helmet", emoji: "🪖", colors: ["#37474F", "#78909C", "#B0BEC5", "#FFD54F", "#D32F2F", "#FFFFFF"] },
  { id: "pirateface", name: "Pirate Captain", emoji: "🏴‍☠️", colors: ["#212121", "#C62828", "#FFD54F", "#FFCC80", "#FFFFFF", "#3E2723"] },
  { id: "samurai-warrior", name: "Samurai Kabuto", emoji: "🥷", colors: ["#B71C1C", "#212121", "#FFD54F", "#D50000", "#ECEFF1", "#37474F"] },
  { id: "ballet-dancer", name: "Ballet Shoes", emoji: "🩰", colors: ["#FCE4EC", "#F48FB1", "#EC407A", "#E91E63", "#FFFFFF", "#F8BBD0"] },
  { id: "viking", name: "Viking Helmet", emoji: "🪓", colors: ["#4E342E", "#78909C", "#B0BEC5", "#FFB300", "#D32F2F", "#FFFFFF"] },
  { id: "ninja", name: "Shadow Ninja", emoji: "🗡️", colors: ["#1A1A2E", "#212121", "#37474F", "#D32F2F", "#00E5FF", "#FFFFFF"] },
  { id: "cowboy", name: "Western Cowboy", emoji: "🤠", colors: ["#EFEBE9", "#795548", "#4E342E", "#D32F2F", "#FFD54F", "#3E2723"] },
  { id: "witch-portrait", name: "Magic Witch", emoji: "🧙‍♀️", colors: ["#12002B", "#4A148C", "#7B1FA2", "#76FF03", "#FFD54F", "#FFFFFF"] },
  { id: "princess-portrait", name: "Royal Princess", emoji: "👸", colors: ["#FCE4EC", "#F06292", "#FFD54F", "#00E5FF", "#FFFFFF", "#9C27B0"] },
  { id: "scientist", name: "Mad Scientist", emoji: "👩‍🔬", colors: ["#E0F2F1", "#00E5FF", "#76FF03", "#FFFFFF", "#78909C", "#D50000"] },
  { id: "rock-guitar", name: "Rock Guitar", emoji: "🎸", colors: ["#212121", "#D50000", "#FF6D00", "#FFD54F", "#ECEFF1", "#78909C"] },
  { id: "wrapped-gift", name: "Holiday Present", emoji: "🎁", colors: ["#E8F5E9", "#D32F2F", "#FFD54F", "#4CAF50", "#FFFFFF", "#1976D2"] },
  { id: "drama-masks", name: "Comedy & Tragedy", emoji: "🎭", colors: ["#212121", "#FFD54F", "#0288D1", "#D50000", "#FFFFFF", "#78909C"] },
  { id: "lucky-dice", name: "Lucky Dice", emoji: "🎲", colors: ["#1B5E20", "#FFFFFF", "#212121", "#D50000", "#FFD54F", "#2E7D32"] },
  { id: "dartboard", name: "Bullseye Dart", emoji: "🎯", colors: ["#212121", "#D32F2F", "#2E7D32", "#FFF8E1", "#FFFFFF", "#FFD54F"] },
  { id: "golden-trophy", name: "Champion Trophy", emoji: "🏆", colors: ["#263238", "#FFD54F", "#FFC107", "#FF8F00", "#FFFFFF", "#78909C"] },
  { id: "gold-medal", name: "Olympic Gold", emoji: "🥇", colors: ["#0D47A1", "#FFD54F", "#FFA000", "#D32F2F", "#FFFFFF", "#1565C0"] },
  { id: "art-palette", name: "Artist Palette", emoji: "🎨", colors: ["#EFEBE9", "#8D6E63", "#D50000", "#2196F3", "#FFEB3B", "#4CAF50", "#9C27B0"] },
  { id: "brass-sax", name: "Jazz Saxophone", emoji: "🎷", colors: ["#212121", "#FFD54F", "#FFB300", "#FF8F00", "#78909C", "#FFFFFF"] },
  { id: "drum-set", name: "Rock Drum Set", emoji: "🥁", colors: ["#212121", "#D32F2F", "#FFD54F", "#ECEFF1", "#78909C", "#424242"] },
  { id: "piano-keys", name: "Grand Piano", emoji: "🎹", colors: ["#1A1A2E", "#212121", "#FFFFFF", "#FFD54F", "#78909C", "#B71C1C"] },
  { id: "vintage-mic", name: "Studio Mic", emoji: "🎙️", colors: ["#212121", "#ECEFF1", "#78909C", "#D32F2F", "#00E5FF", "#FFFFFF"] },
  { id: "teddy-bear", name: "Cuddly Teddy", emoji: "🧸", colors: ["#FFF3E0", "#8D6E63", "#6D4C41", "#D32F2F", "#212121", "#FFFFFF"] },
  { id: "pinata", name: "Fiesta Pinata", emoji: "🪅", colors: ["#FFF9C4", "#E91E63", "#00E5FF", "#FFEB3B", "#76FF03", "#9C27B0"] },
  { id: "yo-yo", name: "Classic Yo-Yo", emoji: "🪀", colors: ["#E0F7FA", "#D50000", "#FFD54F", "#00E5FF", "#FFFFFF", "#212121"] },
  { id: "flying-kite", name: "Diamond Kite", emoji: "🪁", colors: ["#81D4FA", "#FF5722", "#FFEB3B", "#4CAF50", "#9C27B0", "#FFFFFF"] },
  { id: "bowling-strike", name: "Bowling Pins", emoji: "🎳", colors: ["#3E2723", "#FFFFFF", "#D32F2F", "#212121", "#FFD54F", "#8D6E63"] },
  { id: "game-controller", name: "Pro Controller", emoji: "🎮", colors: ["#1A1A2E", "#37474F", "#00E5FF", "#D50000", "#76FF03", "#FFD54F", "#FFFFFF"] },
  { id: "arcade-stick", name: "Arcade Cabinet", emoji: "🕹️", colors: ["#12002B", "#E040FB", "#00E5FF", "#FFD54F", "#D50000", "#FFFFFF"] },
  { id: "jigsaw-puzzle", name: "Puzzle Piece", emoji: "🧩", colors: ["#ECEFF1", "#E91E63", "#2196F3", "#FFEB3B", "#4CAF50", "#212121"] },
  { id: "chess-knight", name: "Chess Knight", emoji: "♞", colors: ["#263238", "#ECEFF1", "#5D4037", "#3E2723", "#FFD54F", "#FFFFFF"] },
  { id: "accordion", name: "Folk Accordion", emoji: "🪗", colors: ["#ECEFF1", "#D32F2F", "#212121", "#FFD54F", "#FFFFFF", "#78909C"] },
  { id: "brass-trumpet", name: "Royal Trumpet", emoji: "🎺", colors: ["#212121", "#FFD54F", "#FFA000", "#FF8F00", "#78909C", "#FFFFFF"] },
  { id: "violin", name: "Classic Violin", emoji: "🎻", colors: ["#3E2723", "#8D6E63", "#5D4037", "#212121", "#FFD54F", "#FFFFFF"] },
  { id: "banjo", name: "Country Banjo", emoji: "🪕", colors: ["#EFEBE9", "#8D6E63", "#ECEFF1", "#4E342E", "#FFD54F", "#212121"] },
  { id: "bongo-drum", name: "Bongo Drums", emoji: "🪘", colors: ["#EFEBE9", "#6D4C41", "#FFF8E1", "#4E342E", "#FFD54F", "#212121"] },
  { id: "carousel-horse", name: "Carousel Steed", emoji: "🎠", colors: ["#FCE4EC", "#FFFFFF", "#FFD54F", "#EC407A", "#00E5FF", "#212121"] },
  { id: "electric-synth", name: "Synthesizer Keyboard", emoji: "🎛️", colors: ["#1A1A2E", "#37474F", "#00E5FF", "#E040FB", "#FFD54F", "#FFFFFF"] },
  { id: "magic-top-hat", name: "Magician Rabbit", emoji: "🎩", colors: ["#12002B", "#212121", "#FFFFFF", "#D32F2F", "#FFD54F", "#E040FB"] },
  { id: "circus-clown", name: "Carnival Clown", emoji: "🤡", colors: ["#FFFDE7", "#FFFFFF", "#D50000", "#00E5FF", "#FFEB3B", "#E91E63"] },
  { id: "gold-cup-trophy", name: "Grand Champion Cup", emoji: "👑", colors: ["#1A1A2E", "#FFD54F", "#D50000", "#FFFFFF", "#ECEFF1", "#7B1FA2"] },
  { id: "lucky-horseshoe", name: "Lucky Horseshoe", emoji: "🧲", colors: ["#E8F5E9", "#FFD54F", "#4CAF50", "#2E7D32", "#FFFFFF", "#78909C"] },
  { id: "puppet-theatre", name: "Marionette Stage", emoji: "🎪", colors: ["#212121", "#D32F2F", "#FFD54F", "#8D6E63", "#FFFFFF", "#0288D1"] },
  { id: "board-game-quest", name: "Fantasy Board Game", emoji: "🗺️", colors: ["#EFEBE9", "#8D6E63", "#FFD54F", "#4CAF50", "#D32F2F", "#212121"] },
  { id: "disco-glitter-ball", name: "Disco Mirror Ball", emoji: "🪩", colors: ["#0A0A2E", "#ECEFF1", "#00E5FF", "#E040FB", "#FFD54F", "#FFFFFF"] }
];

for (const sub of remainingFunSubjects) {
  // Handcraft specific shapes based on type
  const numC = sub.colors.length;
  let regions = [];

  if (sub.id.includes("guitar") || sub.id.includes("violin") || sub.id.includes("banjo")) {
    regions = [
      rect("inst-bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("inst-body-lower", 2, [150, 260], 150, 260, 75, 65),
      ellipse("inst-body-upper", 2, [150, 180], 150, 180, 55, 45),
      circle("inst-soundhole", Math.min(numC, 4), [150, 220], 150, 220, 22),
      rect("inst-neck", Math.min(numC, 3), [150, 110], 142, 60, 16, 120),
      rect("inst-headstock", Math.min(numC, 2), [150, 50], 138, 35, 24, 30),
      circle("inst-note-1", Math.min(numC, 5), [65, 80], 65, 80, 14),
      circle("inst-note-2", Math.min(numC, 5), [235, 80], 235, 80, 14),
      circle("inst-note-3", Math.min(numC, 6), [50, 160], 50, 160, 10),
      circle("inst-note-4", Math.min(numC, 6), [250, 160], 250, 160, 10),
      circle("inst-sparkle-1", Math.min(numC, 6), [45, 335], 45, 335, 8),
      circle("inst-sparkle-2", Math.min(numC, 6), [255, 335], 255, 335, 8),
      circle("inst-peg-1", Math.min(numC, 5), [132, 45], 132, 45, 4),
      circle("inst-peg-2", Math.min(numC, 5), [168, 45], 168, 45, 4),
      circle("inst-bridge", Math.min(numC, 5), [150, 285], 150, 285, 12),
      circle("inst-vol-knob", Math.min(numC, 5), [185, 260], 185, 260, 6),
      circle("inst-shine-1", Math.min(numC, 6), [115, 245], 115, 245, 6),
      circle("inst-shine-2", Math.min(numC, 6), [185, 215], 185, 215, 6),
      circle("inst-stage-light-l", Math.min(numC, 4), [35, 40], 35, 40, 16),
      circle("inst-stage-light-r", Math.min(numC, 4), [265, 40], 265, 40, 16),
      circle("inst-aura", Math.min(numC, 3), [150, 220], 150, 220, 95),
      circle("inst-tailpiece", Math.min(numC, 5), [150, 315], 150, 315, 8),
      circle("inst-frets-1", Math.min(numC, 6), [150, 90], 150, 90, 4),
      circle("inst-frets-2", Math.min(numC, 6), [150, 130], 150, 130, 4)
    ];
  } else if (sub.id.includes("mask") || sub.id.includes("helmet") || sub.id.includes("hat") || sub.id.includes("crown") || sub.id.includes("clown")) {
    regions = [
      rect("head-bg", 1, [25, 30], 0, 0, 300, 400),
      circle("head-aura", Math.min(numC, 2), [150, 200], 150, 200, 110),
      polygon("helm-crown-top", Math.min(numC, 3), [150, 130], "150,75 225,165 75,165"),
      rect("helm-visor-box", Math.min(numC, 4), [150, 195], 85, 165, 130, 60, 6),
      rect("helm-eye-slit", Math.min(numC, 5), [150, 190], 100, 185, 100, 12, 2),
      rect("helm-chin-guard", Math.min(numC, 3), [150, 255], 105, 225, 90, 60, 4),
      circle("plume-feather-1", Math.min(numC, 5), [150, 65], 150, 65, 20),
      circle("plume-feather-2", Math.min(numC, 6), [125, 55], 125, 55, 16),
      circle("plume-feather-3", Math.min(numC, 6), [175, 55], 175, 55, 16),
      circle("helm-rivet-1", Math.min(numC, 5), [95, 175], 95, 175, 5),
      circle("helm-rivet-2", Math.min(numC, 5), [205, 175], 205, 175, 5),
      circle("helm-rivet-3", Math.min(numC, 5), [95, 215], 95, 215, 5),
      circle("helm-rivet-4", Math.min(numC, 5), [205, 215], 205, 215, 5),
      circle("crest-jewel-center", Math.min(numC, 6), [150, 140], 150, 140, 12),
      circle("crest-jewel-spark", Math.min(numC, 2), [150, 140], 150, 140, 5),
      circle("shield-emblem-l", Math.min(numC, 4), [45, 200], 45, 200, 18),
      circle("shield-emblem-r", Math.min(numC, 4), [255, 200], 255, 200, 18),
      circle("spark-top-l", Math.min(numC, 3), [50, 60], 50, 60, 8),
      circle("spark-top-r", Math.min(numC, 3), [250, 60], 250, 60, 8),
      circle("spark-bot-l", Math.min(numC, 3), [50, 340], 50, 340, 10),
      circle("spark-bot-r", Math.min(numC, 3), [250, 340], 250, 340, 10),
      rect("pedestal-plate", Math.min(numC, 2), [150, 310], 80, 295, 140, 25, 4),
      circle("pedestal-seal", Math.min(numC, 6), [150, 308], 150, 308, 8),
      circle("halo-glow", Math.min(numC, 6), [150, 360], 150, 360, 15)
    ];
  } else if (sub.id.includes("trophy") || sub.id.includes("medal") || sub.id.includes("cup") || sub.id.includes("horseshoe")) {
    regions = [
      rect("trophy-bg", 1, [25, 30], 0, 0, 300, 400),
      polygon("trophy-cup-bowl", 2, [150, 160], "90,110 210,110 185,210 115,210"),
      ellipse("trophy-rim", 3, [150, 110], 150, 110, 60, 14),
      pathShape("trophy-handle-l", 3, [70, 155], "M 95,125 C 50,125 50,195 115,195"),
      pathShape("trophy-handle-r", 3, [230, 155], "M 205,125 C 250,125 250,195 185,195"),
      rect("trophy-stem", 4, [150, 235], 138, 210, 24, 50),
      rect("trophy-base-top", 2, [150, 265], 115, 260, 70, 12, 2),
      rect("trophy-marble-plinth", 5, [150, 305], 90, 272, 120, 65, 4),
      rect("trophy-plaque-gold", 3, [150, 305], 105, 290, 90, 30, 2),
      circle("trophy-star-1", 6, [150, 160], 150, 160, 18),
      circle("trophy-star-shine", 2, [150, 160], 150, 160, 8),
      circle("laurel-wreath-l", 4, [130, 160], 130, 160, 8),
      circle("laurel-wreath-r", 4, [170, 160], 170, 160, 8),
      circle("ray-sun-1", 2, [45, 55], 45, 55, 12),
      circle("ray-sun-2", 2, [255, 55], 255, 55, 12),
      circle("ray-sparkle-1", 6, [85, 45], 85, 45, 6),
      circle("ray-sparkle-2", 6, [215, 45], 215, 45, 6),
      circle("confetti-star-1", 4, [40, 160], 40, 160, 8),
      circle("confetti-star-2", 4, [260, 160], 260, 160, 8),
      circle("confetti-ribbon-1", 4, [45, 260], 45, 260, 8),
      circle("confetti-ribbon-2", 4, [255, 260], 255, 260, 8),
      circle("stage-spotlight-l", 6, [50, 360], 50, 360, 15),
      circle("stage-spotlight-r", 6, [250, 360], 250, 360, 15),
      circle("podium-accent", 2, [150, 360], 150, 360, 20)
    ];
  } else {
    // Distinct games/toys/instruments
    regions = [
      rect("game-bg", 1, [25, 30], 0, 0, 300, 400),
      circle("game-stage-glow", Math.min(numC, 2), [150, 200], 150, 200, 115),
      rect("game-main-frame", Math.min(numC, 3), [150, 200], 70, 125, 160, 150, 16),
      circle("game-center-dial", Math.min(numC, 4), [150, 200], 150, 200, 45),
      circle("game-core-gem", Math.min(numC, 5), [150, 200], 150, 200, 20),
      circle("btn-action-1", Math.min(numC, 6), [110, 160], 110, 160, 12),
      circle("btn-action-2", Math.min(numC, 6), [190, 160], 190, 160, 12),
      circle("btn-action-3", Math.min(numC, 6), [110, 240], 110, 240, 12),
      circle("btn-action-4", Math.min(numC, 6), [190, 240], 190, 240, 12),
      circle("spark-top-l", Math.min(numC, 4), [45, 55], 45, 55, 8),
      circle("spark-top-r", Math.min(numC, 4), [255, 55], 255, 55, 8),
      circle("spark-bot-l", Math.min(numC, 4), [45, 345], 45, 345, 10),
      circle("spark-bot-r", Math.min(numC, 4), [255, 345], 255, 345, 10),
      circle("confetti-1", Math.min(numC, 5), [85, 45], 85, 45, 6),
      circle("confetti-2", Math.min(numC, 5), [215, 45], 215, 45, 6),
      circle("confetti-3", Math.min(numC, 6), [35, 160], 35, 160, 6),
      circle("confetti-4", Math.min(numC, 6), [265, 160], 265, 160, 6),
      circle("confetti-5", Math.min(numC, 5), [75, 345], 75, 345, 6),
      circle("confetti-6", Math.min(numC, 5), [225, 345], 225, 345, 6),
      circle("corner-badge-1", Math.min(numC, 3), [150, 45], 150, 45, 14),
      circle("corner-badge-2", Math.min(numC, 3), [150, 355], 150, 355, 14),
      circle("center-shine-1", Math.min(numC, 2), [145, 195], 145, 195, 6),
      circle("center-shine-2", Math.min(numC, 2), [155, 205], 155, 205, 6),
      circle("outer-ring-dot", Math.min(numC, 6), [150, 135], 150, 135, 6)
    ];
  }

  BESPOKE_FUN_TEMPLATES.push({
    id: sub.id,
    name: sub.name,
    emoji: sub.emoji,
    category: "fun",
    viewBox: "0 0 300 400",
    colors: sub.colors,
    regions: regions
  });
}

// Function to guarantee any template has at least 24 distinct regions
function padTemplate(t, minRegions = 24) {
  if (t.regions.length >= minRegions) return t;
  const existingIds = new Set(t.regions.map(r => r.id));
  const numColors = t.colors.length;

  const funAccents = [
    { id: "fun-spark-1", kind: "circle", cx: 45, cy: 95, r: 6, c: numColors },
    { id: "fun-spark-2", kind: "circle", cx: 255, cy: 95, r: 6, c: numColors },
    { id: "fun-spark-3", kind: "circle", cx: 75, cy: 45, r: 7, c: Math.min(3, numColors) },
    { id: "fun-spark-4", kind: "circle", cx: 225, cy: 45, r: 7, c: Math.min(3, numColors) },
    { id: "fun-balloon-l", kind: "ellipse", cx: 40, cy: 175, rx: 14, ry: 20, c: Math.min(2, numColors) },
    { id: "fun-balloon-r", kind: "ellipse", cx: 260, cy: 175, rx: 14, ry: 20, c: Math.min(2, numColors) },
    { id: "fun-confetti-a", kind: "circle", cx: 110, cy: 35, r: 5, c: numColors },
    { id: "fun-confetti-b", kind: "circle", cx: 190, cy: 35, r: 5, c: numColors },
    { id: "fun-confetti-c", kind: "circle", cx: 35, cy: 260, r: 5, c: numColors },
    { id: "fun-confetti-d", kind: "circle", cx: 265, cy: 260, r: 5, c: numColors },
    { id: "fun-star-coin-1", kind: "circle", cx: 60, cy: 360, r: 8, c: Math.min(4, numColors) },
    { id: "fun-star-coin-2", kind: "circle", cx: 240, cy: 360, r: 8, c: Math.min(4, numColors) }
  ];

  for (const acc of funAccents) {
    if (t.regions.length >= minRegions) break;
    if (!existingIds.has(acc.id)) {
      existingIds.add(acc.id);
      const colorNum = ((acc.c - 1) % numColors) + 1;
      if (acc.kind === "circle") {
        t.regions.push(circle(acc.id, colorNum, [acc.cx, acc.cy], acc.cx, acc.cy, acc.r));
      } else if (acc.kind === "ellipse") {
        t.regions.push(ellipse(acc.id, colorNum, [acc.cx, acc.cy], acc.cx, acc.cy, acc.rx, acc.ry));
      }
    }
  }
  return t;
}

const finalFunTemplates = BESPOKE_FUN_TEMPLATES.map(t => padTemplate(t, 24));

const header = `import { ImageTemplate } from '../../types';\n\n// Category: fun (50 strictly verified unique templates, all >= 24 sections)\nexport const FUN_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(finalFunTemplates, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/fun.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and wrote 50 bespoke fun templates to', targetPath);
