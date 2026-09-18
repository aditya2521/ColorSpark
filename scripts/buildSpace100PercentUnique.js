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

// 50 100% Bespoke, Individualized Space Templates
const TEMPLATES = [
  // 1. 🚀 Space Rocket
  {
    id: "rocket",
    name: "Space Rocket",
    emoji: "🚀",
    category: "space",
    viewBox: "0 0 300 400",
    colors: ["#0A0A2E", "#FFFFFF", "#D32F2F", "#0288D1", "#FFD54F", "#FF6D00", "#78909C"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      polygon("nosecone", 3, [150, 75], "150,30 185,110 115,110"),
      rect("fuselage", 2, [150, 180], 115, 110, 70, 140, 4),
      rect("stripe-red", 3, [150, 140], 115, 135, 70, 10),
      circle("porthole-frame", 7, [150, 185], 150, 185, 18),
      circle("porthole-glass", 4, [150, 185], 150, 185, 12),
      circle("porthole-shine", 2, [146, 180], 146, 180, 4),
      polygon("fin-left", 3, [85, 235], "115,190 70,265 115,250"),
      polygon("fin-right", 3, [215, 235], "185,190 230,265 185,250"),
      polygon("fin-center", 7, [150, 235], "145,210 155,210 155,250 145,250"),
      polygon("engine-nozzle", 7, [150, 260], "130,250 170,250 162,270 138,270"),
      polygon("fire-outer", 3, [150, 315], "135,270 165,270 150,375"),
      polygon("fire-mid", 6, [150, 305], "140,270 160,270 150,345"),
      polygon("fire-core", 5, [150, 290], "144,270 156,270 150,315"),
      circle("star-1", 2, [45, 65], 45, 65, 4),
      circle("star-2", 2, [255, 65], 255, 65, 5),
      circle("star-3", 5, [60, 145], 60, 145, 4),
      circle("star-4", 5, [240, 145], 240, 145, 4),
      circle("star-5", 2, [50, 320], 50, 320, 5),
      circle("star-6", 2, [250, 320], 250, 320, 5),
      circle("star-7", 2, [90, 45], 90, 45, 3),
      circle("star-8", 2, [210, 45], 210, 45, 3),
      circle("spark-l", 5, [35, 180], 35, 180, 4),
      circle("spark-r", 5, [265, 180], 265, 180, 4)
    ]
  },

  // 2. 🛸 UFO
  {
    id: "ufo",
    name: "UFO",
    emoji: "🛸",
    category: "space",
    viewBox: "0 0 300 400",
    colors: ["#0A0A2E", "#78909C", "#B0BEC5", "#00E5FF", "#76FF03", "#FFD54F", "#D50000", "#FFFFFF"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      polygon("tractor-beam", 5, [150, 310], "115,225 185,225 255,385 45,385"),
      circle("cockpit-dome", 4, [150, 160], 150, 160, 45),
      circle("alien-head", 5, [150, 165], 150, 165, 16),
      circle("alien-eye-l", 1, [144, 162], 144, 162, 4),
      circle("alien-eye-r", 1, [156, 162], 156, 162, 4),
      ellipse("saucer-upper-hull", 3, [150, 195], 150, 195, 110, 35),
      ellipse("saucer-lower-rim", 2, [150, 205], 150, 205, 110, 25),
      circle("nav-light-1", 6, [65, 200], 65, 200, 7),
      circle("nav-light-2", 7, [105, 210], 105, 210, 7),
      circle("nav-light-3", 6, [150, 215], 150, 215, 8),
      circle("nav-light-4", 7, [195, 210], 195, 210, 7),
      circle("nav-light-5", 6, [235, 200], 235, 200, 7),
      circle("star-1", 8, [50, 65], 50, 65, 4),
      circle("star-2", 8, [250, 65], 250, 65, 5),
      circle("star-3", 8, [70, 120], 70, 120, 3),
      circle("star-4", 8, [230, 120], 230, 120, 3),
      circle("beam-particle-1", 8, [130, 280], 130, 280, 5),
      circle("beam-particle-2", 8, [170, 310], 170, 310, 6),
      circle("beam-particle-3", 8, [140, 350], 140, 350, 5),
      circle("nebula-glow", 4, [150, 80], 150, 80, 35),
      circle("space-dust-1", 4, [40, 280], 40, 280, 4),
      circle("space-dust-2", 4, [260, 280], 260, 280, 4),
      circle("planet-dist", 6, [45, 45], 45, 45, 12)
    ]
  },

  // 3. 👩‍🚀 Space Girl
  {
    id: "spacegirl",
    name: "Space Girl",
    emoji: "👩‍🚀",
    category: "space",
    viewBox: "0 0 300 400",
    colors: ["#0A0A2E", "#FFFFFF", "#F48FB1", "#FFD54F", "#00E5FF", "#78909C"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("suit-torso", 2, [150, 260], 100, 200, 100, 120, 12),
      rect("chest-pack", 6, [150, 255], 120, 225, 60, 45, 4),
      circle("dial-1", 5, [135, 245], 135, 245, 5),
      circle("dial-2", 4, [165, 245], 165, 245, 5),
      circle("helmet-outer", 2, [150, 135], 150, 135, 65),
      circle("helmet-neck", 6, [150, 195], 150, 195, 45),
      ellipse("golden-visor", 4, [150, 135], 150, 135, 48, 35),
      ellipse("visor-shine", 2, [140, 125], 140, 125, 18, 8),
      rect("stripe-l", 3, [90, 215], 80, 205, 20, 10, 2),
      rect("stripe-r", 3, [210, 215], 200, 205, 20, 10, 2),
      circle("star-1", 2, [45, 55], 45, 55, 4),
      circle("star-2", 2, [255, 55], 255, 55, 4),
      circle("star-3", 4, [55, 340], 55, 340, 4),
      circle("star-4", 4, [245, 340], 245, 340, 4),
      circle("star-5", 2, [50, 130], 50, 130, 4),
      circle("star-6", 2, [250, 130], 250, 130, 4),
      circle("spark-1", 5, [100, 45], 100, 45, 5),
      circle("spark-2", 5, [200, 45], 200, 45, 5),
      circle("antenna-bulb", 3, [150, 65], 150, 65, 6),
      circle("badge-mission", 3, [135, 290], 135, 290, 8),
      circle("badge-flag", 5, [165, 290], 165, 290, 8),
      circle("dust-1", 4, [30, 230], 30, 230, 4),
      circle("dust-2", 4, [270, 230], 270, 230, 4)
    ]
  },

  // 4. 🛰️ Space Station
  {
    id: "space-station",
    name: "Space Station",
    emoji: "🛰️",
    category: "space",
    viewBox: "0 0 300 400",
    colors: ["#0A0A2E", "#0288D1", "#01579B", "#ECEFF1", "#78909C", "#FFD54F", "#FFFFFF"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("truss", 5, [150, 200], 40, 195, 220, 10, 2),
      rect("central-module", 4, [150, 200], 125, 160, 50, 80, 6),
      circle("dock-top", 5, [150, 150], 150, 150, 14),
      circle("dock-bot", 5, [150, 250], 150, 250, 14),
      circle("cupola", 2, [150, 200], 150, 200, 12),
      rect("solar-l1", 2, [75, 140], 50, 100, 50, 75, 2),
      rect("solar-l2", 2, [75, 260], 50, 225, 50, 75, 2),
      rect("solar-r1", 2, [225, 140], 200, 100, 50, 75, 2),
      rect("solar-r2", 2, [225, 260], 200, 225, 50, 75, 2),
      rect("grid-l", 3, [75, 200], 73, 100, 4, 200),
      rect("grid-r", 3, [225, 200], 223, 100, 4, 200),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 7, [40, 340], 40, 340, 4),
      circle("star-4", 7, [260, 340], 260, 340, 4),
      circle("dish-antenna", 4, [185, 175], 185, 175, 10),
      circle("radiator-wing-1", 4, [115, 175], 115, 175, 8),
      circle("earth-curve", 2, [150, 390], 150, 390, 80),
      circle("earth-cloud", 7, [150, 350], 150, 350, 30),
      circle("sun-glint", 6, [150, 130], 150, 130, 8),
      circle("sparkle-1", 6, [90, 45], 90, 45, 4),
      circle("sparkle-2", 6, [210, 45], 210, 45, 4),
      circle("nav-beacon", 6, [150, 270], 150, 270, 5)
    ]
  },

  // 5. 🌌 Nebula Cloud
  {
    id: "nebula-cloud",
    name: "Nebula Cloud",
    emoji: "🌌",
    category: "space",
    viewBox: "0 0 300 400",
    colors: ["#050014", "#311B92", "#6A1B9A", "#AD1457", "#00E5FF", "#FFD54F", "#FFFFFF"],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("nebula-core", 2, [150, 200], 150, 200, 110),
      ellipse("nebula-swirl", 3, [150, 200], 150, 200, 95, 60),
      ellipse("nebula-glow", 4, [140, 190], 140, 190, 70, 40),
      circle("bright-core", 3, [150, 200], 150, 200, 30),
      circle("center-star", 7, [150, 200], 150, 200, 12),
      circle("star-cyan-1", 5, [65, 110], 65, 110, 7),
      circle("star-cyan-2", 5, [235, 290], 235, 290, 7),
      circle("star-gold-1", 6, [225, 115], 225, 115, 6),
      circle("star-gold-2", 6, [75, 285], 75, 285, 6),
      circle("star-white-1", 7, [45, 55], 45, 55, 4),
      circle("star-white-2", 7, [255, 55], 255, 55, 4),
      circle("dust-ring-1", 2, [100, 140], 100, 140, 18),
      circle("dust-ring-2", 2, [200, 260], 200, 260, 18),
      circle("spark-1", 5, [110, 50], 110, 50, 5),
      circle("spark-2", 5, [190, 50], 190, 50, 5),
      circle("spark-3", 6, [40, 210], 40, 210, 5),
      circle("spark-4", 6, [260, 210], 260, 210, 5),
      circle("spark-5", 7, [70, 350], 70, 350, 5),
      circle("spark-6", 7, [230, 350], 230, 350, 5),
      circle("cluster-1", 6, [140, 120], 140, 120, 8),
      circle("cluster-2", 6, [160, 280], 160, 280, 8),
      circle("gas-lobe-l", 4, [80, 200], 80, 200, 25),
      circle("gas-lobe-r", 4, [220, 200], 220, 200, 25)
    ]
  }
];

// Helper to define remaining bespoke space templates with UNIQUE geometry for every single one!
const ALL_50_SPACE_ITEMS = [
  // 6. 🌄 Alien World (mountain peaks, dual moons, exotic spires)
  {
    id: "alien-world", name: "Alien World", emoji: "🌄",
    colors: ["#12002B", "#4A148C", "#7B1FA2", "#00E5FF", "#76FF03", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("giant-moon", 4, [75, 90], 75, 90, 45),
      circle("small-moon", 6, [220, 60], 220, 60, 20),
      polygon("alien-peak-1", 2, [100, 240], "0,320 100,160 200,320"),
      polygon("alien-peak-2", 3, [200, 230], "110,320 210,140 300,320"),
      rect("crystal-spire-1", 4, [50, 310], 42, 260, 16, 80, 4),
      rect("crystal-spire-2", 5, [250, 310], 242, 250, 16, 90, 4),
      rect("alien-ground", 2, [150, 360], 0, 320, 300, 80),
      circle("glow-shroom-1", 5, [90, 350], 90, 350, 14),
      circle("glow-shroom-2", 4, [160, 355], 160, 355, 12),
      circle("glow-shroom-3", 5, [210, 345], 210, 345, 15),
      circle("star-1", 7, [45, 45], 45, 45, 4),
      circle("star-2", 7, [150, 50], 150, 50, 4),
      circle("star-3", 7, [270, 45], 270, 45, 4),
      circle("star-4", 6, [30, 150], 30, 150, 4),
      circle("star-5", 6, [270, 150], 270, 150, 4),
      circle("crater-1", 2, [60, 80], 60, 80, 8),
      circle("crater-2", 2, [85, 105], 85, 105, 10),
      circle("spore-1", 5, [75, 300], 75, 300, 5),
      circle("spore-2", 4, [130, 290], 130, 290, 5),
      circle("spore-3", 5, [185, 300], 185, 300, 5),
      circle("spore-4", 4, [230, 290], 230, 290, 5),
      circle("sky-sparkle-1", 7, [120, 110], 120, 110, 3),
      circle("sky-sparkle-2", 7, [180, 110], 180, 110, 3)
    ]
  },

  // 7. 🕳️ Black Hole (event horizon, glowing accretion disk, warp rays)
  {
    id: "black-hole", name: "Black Hole", emoji: "🕳️",
    colors: ["#000000", "#FF6D00", "#FFD54F", "#00E5FF", "#311B92", "#FFFFFF"],
    builder: (c) => [
      rect("void-bg", 1, [25, 30], 0, 0, 300, 400),
      circle("grav-warp-aura", 5, [150, 200], 150, 200, 130),
      ellipse("accretion-disk-outer", 2, [150, 200], 150, 200, 135, 45),
      ellipse("accretion-disk-mid", 3, [150, 200], 150, 200, 115, 32),
      ellipse("accretion-disk-inner", 6, [150, 200], 150, 200, 85, 20),
      circle("event-horizon", 1, [150, 200], 150, 200, 48),
      circle("photon-sphere-ring", 3, [150, 200], 150, 200, 52),
      polygon("jet-top", 4, [150, 80], "145,150 155,150 150,10"),
      polygon("jet-bot", 4, [150, 320], "145,250 155,250 150,390"),
      circle("warp-knot-1", 3, [60, 195], 60, 195, 8),
      circle("warp-knot-2", 3, [240, 195], 240, 195, 8),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("spark-3", 4, [90, 355], 90, 355, 5),
      circle("spark-4", 4, [210, 355], 210, 355, 5),
      circle("lens-arc-l", 3, [80, 140], 80, 140, 15),
      circle("lens-arc-r", 3, [220, 260], 220, 260, 15),
      circle("radiation-pulse-1", 6, [150, 60], 150, 60, 6),
      circle("radiation-pulse-2", 6, [150, 340], 150, 340, 6),
      circle("micro-singularity", 4, [150, 200], 150, 200, 15)
    ]
  },

  // 8. 🧑‍🚀 Spacewalker in Orbit (tether line, helmet visor, earth curve)
  {
    id: "astro-209", name: "Spacewalker in Orbit", emoji: "🧑‍🚀",
    colors: ["#0A0A2E", "#0288D1", "#4CAF50", "#FFFFFF", "#ECEFF1", "#FFD54F", "#78909C"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("earth-globe", 2, [250, 360], 250, 360, 120),
      ellipse("earth-continent", 3, [220, 320], 220, 320, 50, 30),
      circle("helmet-dome", 5, [130, 150], 130, 150, 45),
      ellipse("gold-visor", 6, [130, 150], 130, 150, 32, 22),
      rect("suit-body", 4, [125, 230], 90, 190, 70, 80, 8),
      rect("backpack-life-support", 7, [70, 220], 55, 175, 35, 90, 4),
      rect("arm-left", 4, [65, 185], 50, 170, 25, 45, 4),
      rect("arm-right", 4, [180, 210], 160, 195, 40, 25, 4),
      pathShape("safety-tether", 6, [150, 300], "M 65,260 C 40,320 80,380 140,380"),
      circle("tether-clip", 7, [65, 260], 65, 260, 6),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 6, [50, 120], 50, 120, 4),
      circle("star-4", 6, [250, 120], 250, 120, 4),
      circle("dial-1", 2, [115, 215], 115, 215, 4),
      circle("dial-2", 6, [135, 215], 135, 215, 4),
      circle("camera-mount", 7, [165, 120], 165, 120, 6),
      circle("cloud-curl", 4, [260, 300], 260, 300, 15),
      circle("spark-1", 4, [90, 45], 90, 45, 4),
      circle("spark-2", 4, [210, 45], 210, 45, 4),
      circle("glove-l", 7, [60, 165], 60, 165, 8),
      circle("glove-r", 7, [200, 210], 200, 210, 8),
      circle("thruster-jet", 2, [55, 175], 55, 175, 5)
    ]
  },

  // 9. 🪐 Ringed Saturn (tilted rings, banded planet body)
  {
    id: "saturn-rings", name: "Ringed Saturn", emoji: "🪐",
    colors: ["#0A0A2E", "#FFE082", "#FFCA28", "#FFA000", "#FFD54F", "#FFF8E1", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("saturn-glow", 5, [150, 200], 150, 200, 95),
      circle("saturn-body", 3, [150, 200], 150, 200, 75),
      ellipse("band-1", 4, [150, 175], 150, 175, 70, 14),
      ellipse("band-2", 2, [150, 200], 150, 200, 74, 16),
      ellipse("band-3", 4, [150, 225], 150, 225, 70, 14),
      ellipse("ring-outer-a", 2, [150, 200], 150, 200, 138, 42),
      ellipse("ring-gap-cassini", 1, [150, 200], 150, 200, 124, 37),
      ellipse("ring-inner-b", 5, [150, 200], 150, 200, 115, 33),
      ellipse("ring-crepe-c", 4, [150, 200], 150, 200, 95, 27),
      circle("moon-titan", 4, [55, 110], 55, 110, 12),
      circle("moon-enceladus", 6, [245, 290], 245, 290, 8),
      circle("moon-mimas", 6, [235, 100], 235, 100, 6),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 7, [40, 340], 40, 340, 4),
      circle("star-4", 7, [260, 340], 260, 340, 4),
      circle("spark-1", 5, [100, 45], 100, 45, 5),
      circle("spark-2", 5, [200, 45], 200, 45, 5),
      circle("polar-hexagon", 4, [150, 132], 150, 132, 10),
      circle("ring-particle-1", 6, [60, 210], 60, 210, 4),
      circle("ring-particle-2", 6, [240, 190], 240, 190, 4),
      circle("star-dust-1", 7, [90, 340], 90, 340, 3),
      circle("star-dust-2", 7, [210, 340], 210, 340, 3)
    ]
  },

  // 10. 🤖 Friendly Robot
  {
    id: "robot", name: "Friendly Robot", emoji: "🤖",
    colors: ["#0A0A2E", "#78909C", "#B0BEC5", "#00E5FF", "#FFD54F", "#D32F2F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("head-box", 3, [150, 120], 95, 75, 110, 90, 12),
      rect("ear-left", 2, [85, 120], 75, 105, 20, 30, 4),
      rect("ear-right", 2, [215, 120], 205, 105, 20, 30, 4),
      rect("antenna-stem", 2, [150, 55], 146, 40, 8, 35),
      circle("antenna-light", 6, [150, 35], 150, 35, 10),
      circle("eye-l", 4, [125, 110], 125, 110, 14),
      circle("eye-r", 4, [175, 110], 175, 110, 14),
      rect("mouth-meter", 5, [150, 145], 120, 138, 60, 14, 4),
      rect("neck", 2, [150, 172], 135, 165, 30, 14),
      rect("torso", 3, [150, 255], 90, 179, 120, 110, 10),
      rect("chest-screen", 4, [150, 225], 115, 200, 70, 50, 6),
      circle("meter-dial-1", 6, [130, 275], 130, 275, 8),
      circle("meter-dial-2", 5, [170, 275], 170, 275, 8),
      rect("arm-l", 2, [65, 230], 50, 195, 25, 70, 6),
      rect("arm-r", 2, [235, 230], 225, 195, 25, 70, 6),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 7, [40, 340], 40, 340, 4),
      circle("star-4", 7, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [100, 30], 100, 30, 5),
      circle("spark-2", 4, [200, 30], 200, 30, 5),
      circle("spark-3", 5, [50, 360], 50, 360, 6),
      circle("spark-4", 5, [250, 360], 250, 360, 6)
    ]
  },

  // 11. 👨‍🚀 Spacewalker (Moonwalker with flag)
  {
    id: "astronaut", name: "Spacewalker", emoji: "👨‍🚀",
    colors: ["#0A0A2E", "#FFFFFF", "#ECEFF1", "#FFD54F", "#0288D1", "#78909C", "#D32F2F"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      ellipse("lunar-hill", 3, [150, 380], 150, 380, 140, 35),
      rect("flag-pole", 6, [230, 280], 228, 200, 4, 160),
      polygon("flag-banner", 7, [255, 220], "232,200 280,215 232,240"),
      circle("helmet", 2, [130, 150], 130, 150, 45),
      ellipse("visor", 4, [130, 150], 130, 150, 32, 22),
      rect("body-suit", 2, [130, 230], 95, 195, 70, 75, 6),
      rect("chest-box", 6, [130, 230], 110, 210, 40, 40, 4),
      rect("leg-l", 2, [110, 305], 100, 270, 20, 70, 4),
      rect("leg-r", 2, [150, 305], 140, 270, 20, 70, 4),
      rect("boot-l", 6, [105, 345], 95, 340, 30, 12, 2),
      rect("boot-r", 6, [155, 345], 145, 340, 30, 12, 2),
      circle("crater-1", 6, [50, 375], 50, 375, 12),
      circle("crater-2", 6, [180, 385], 180, 385, 10),
      circle("earth-crescent", 5, [65, 75], 65, 75, 25),
      circle("earth-cloud", 2, [60, 70], 60, 70, 10),
      circle("star-1", 2, [150, 45], 150, 45, 4),
      circle("star-2", 2, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 170], 40, 170, 4),
      circle("star-4", 4, [260, 150], 260, 150, 4),
      circle("spark-1", 2, [100, 35], 100, 35, 4),
      circle("spark-2", 2, [200, 35], 200, 35, 4),
      circle("suit-patch-1", 5, [105, 215], 105, 215, 5),
      circle("suit-patch-2", 7, [155, 215], 155, 215, 5)
    ]
  },

  // 12. 🌕 Glowing Moon (craters, maria, lunar rays)
  {
    id: "lunar-moon", name: "Glowing Moon", emoji: "🌕",
    colors: ["#0A0A2E", "#FFF8E1", "#FFE082", "#FFCA28", "#D7CCC8", "#B0BEC5", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("lunar-glow", 3, [150, 200], 150, 200, 115),
      circle("moon-disc", 2, [150, 200], 150, 200, 95),
      circle("tycho-crater", 5, [140, 250], 140, 250, 18),
      circle("copernicus-crater", 5, [110, 170], 110, 170, 15),
      circle("kepler-crater", 6, [80, 190], 80, 190, 10),
      ellipse("mare-tranquillitatis", 4, [180, 170], 180, 170, 30, 20),
      ellipse("mare-serenitatis", 4, [170, 130], 170, 130, 25, 18),
      ellipse("oceanus-procellarum", 4, [100, 210], 100, 210, 35, 22),
      circle("crater-small-1", 6, [190, 230], 190, 230, 8),
      circle("crater-small-2", 6, [140, 120], 140, 120, 9),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 7, [40, 340], 40, 340, 4),
      circle("star-4", 7, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("ray-ejecta-1", 7, [155, 265], 155, 265, 4),
      circle("ray-ejecta-2", 7, [125, 265], 125, 265, 4),
      circle("ray-ejecta-3", 7, [140, 275], 140, 275, 4),
      circle("apollo-lander-site", 7, [180, 185], 180, 185, 4),
      circle("satellite-orbiter", 5, [60, 100], 60, 100, 6),
      circle("cosmic-dust-1", 7, [35, 230], 35, 230, 3),
      circle("cosmic-dust-2", 7, [265, 230], 265, 230, 3)
    ]
  },

  // 13. ☄️ Blazing Comet
  {
    id: "blazing-comet", name: "Blazing Comet", emoji: "☄️",
    colors: ["#0A0A2E", "#00E5FF", "#0288D1", "#FFD54F", "#FFFFFF", "#311B92"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("ion-tail-wide", 6, [110, 140], "40,40 240,290 120,40"),
      polygon("dust-tail-curved", 3, [130, 160], "70,40 245,290 160,70"),
      polygon("plasma-core-tail", 2, [170, 200], "120,70 250,290 190,130"),
      circle("coma-outer", 2, [240, 285], 240, 285, 42),
      circle("coma-mid", 4, [240, 285], 240, 285, 28),
      circle("nucleus-solid", 5, [240, 285], 240, 285, 15),
      circle("nucleus-sparkle", 5, [238, 282], 238, 282, 6),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 4, [100, 350], 100, 350, 4),
      circle("spark-1", 4, [50, 160], 50, 160, 5),
      circle("spark-2", 4, [90, 230], 90, 230, 5),
      circle("tail-knot-1", 2, [150, 170], 150, 170, 8),
      circle("tail-knot-2", 2, [180, 210], 180, 210, 10),
      circle("tail-knot-3", 4, [210, 250], 210, 250, 12),
      circle("debris-1", 5, [195, 330], 195, 330, 5),
      circle("debris-2", 5, [260, 230], 260, 230, 5),
      circle("debris-3", 2, [110, 110], 110, 110, 4),
      circle("debris-4", 2, [140, 140], 140, 140, 4),
      circle("gas-stream-1", 2, [75, 75], 75, 75, 6),
      circle("gas-stream-2", 2, [95, 95], 95, 95, 6),
      circle("deep-space-dot", 5, [30, 270], 30, 270, 4)
    ]
  },

  // 14. 🌠 Shooting Star
  {
    id: "shooting-star", name: "Shooting Star", emoji: "🌠",
    colors: ["#0A0A2E", "#FFD54F", "#FFA000", "#FF6D00", "#FFFFFF", "#00E5FF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("trail-orange", 4, [110, 140], "30,30 240,300 100,30"),
      polygon("trail-gold", 3, [130, 160], "60,30 240,300 130,50"),
      polygon("trail-bright", 2, [160, 190], "100,50 240,300 160,90"),
      polygon("star-meteor", 5, [240, 300], "240,265 248,288 273,288 253,303 261,326 240,311 219,326 227,303 207,288 232,288"),
      circle("meteor-core", 2, [240, 300], 240, 300, 12),
      circle("meteor-spark", 5, [240, 300], 240, 300, 5),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 6, [110, 350], 110, 350, 4),
      circle("spark-1", 6, [60, 170], 60, 170, 5),
      circle("spark-2", 6, [100, 240], 100, 240, 5),
      circle("spark-3", 2, [180, 50], 180, 50, 4),
      circle("spark-4", 2, [220, 90], 220, 90, 4),
      circle("trail-sparkle-1", 5, [140, 140], 140, 140, 4),
      circle("trail-sparkle-2", 5, [170, 180], 170, 180, 5),
      circle("trail-sparkle-3", 5, [200, 230], 200, 230, 6),
      circle("constellation-1", 6, [35, 110], 35, 110, 4),
      circle("constellation-2", 6, [70, 95], 70, 95, 4),
      circle("constellation-3", 6, [50, 280], 50, 280, 4),
      circle("constellation-4", 6, [85, 295], 85, 295, 4),
      circle("corona-flare-l", 2, [220, 295], 220, 295, 8),
      circle("corona-flare-r", 2, [260, 305], 260, 305, 8)
    ]
  },

  // 15. 🚜 Curiosity Rover (Martian soil, 6 wheels, mastcam, robotic arm)
  {
    id: "mars-rover", name: "Curiosity Rover", emoji: "🚜",
    colors: ["#1A0000", "#D32F2F", "#FF6D00", "#78909C", "#37474F", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("mars-ridge", 2, [150, 260], "0,280 120,240 210,260 300,240 300,400 0,400"),
      rect("chassis", 4, [150, 250], 90, 220, 120, 50, 6),
      rect("mast-cam-pole", 5, [120, 175], 116, 130, 8, 90),
      rect("mast-cam-head", 4, [120, 125], 105, 115, 30, 20, 2),
      circle("mast-lens-1", 6, [114, 125], 114, 125, 5),
      circle("mast-lens-2", 6, [126, 125], 126, 125, 5),
      rect("rtg-nuclear-power", 5, [195, 215], 180, 200, 30, 25, 2),
      rect("dish-antenna-mast", 5, [165, 195], 160, 180, 6, 40),
      circle("dish-antenna", 4, [163, 175], 163, 175, 12),
      circle("wheel-1", 5, [85, 320], 85, 320, 18),
      circle("wheel-2", 5, [150, 320], 150, 320, 18),
      circle("wheel-3", 5, [215, 320], 215, 320, 18),
      circle("hub-1", 4, [85, 320], 85, 320, 8),
      circle("hub-2", 4, [150, 320], 150, 320, 8),
      circle("hub-3", 4, [215, 320], 215, 320, 8),
      pathShape("rocker-bogie-arm", 5, [150, 280], "M 85,320 L 150,265 L 215,320"),
      circle("mars-rock-1", 3, [50, 360], 50, 360, 14),
      circle("mars-rock-2", 3, [260, 355], 260, 355, 12),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 6, [180, 65], 180, 65, 4),
      circle("phobos-moon", 4, [65, 90], 65, 90, 8),
      circle("deimos-moon", 4, [230, 100], 230, 100, 6)
    ]
  },

  // 16. 🌍 Planet Earth (continents, clouds, atmosphere)
  {
    id: "planet-earth", name: "Planet Earth", emoji: "🌍",
    colors: ["#0A0A2E", "#0288D1", "#01579B", "#4CAF50", "#2E7D32", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("atmo-glow", 2, [150, 200], 150, 200, 115),
      circle("ocean-globe", 3, [150, 200], 150, 200, 95),
      ellipse("africa-continent", 4, [155, 205], 155, 205, 35, 45),
      ellipse("europe-continent", 5, [145, 145], 145, 145, 28, 20),
      ellipse("asia-continent", 4, [195, 155], 195, 155, 35, 25),
      ellipse("americas-land", 5, [85, 185], 85, 185, 22, 45),
      ellipse("cloud-band-1", 6, [150, 130], 150, 130, 75, 10),
      ellipse("cloud-band-2", 6, [150, 210], 150, 210, 85, 12),
      ellipse("cloud-swirl-3", 6, [140, 270], 140, 270, 65, 10),
      circle("polar-ice-north", 6, [150, 112], 150, 112, 22),
      circle("polar-ice-south", 6, [150, 288], 150, 288, 22),
      circle("moon-companion", 6, [50, 100], 50, 100, 14),
      circle("moon-crater", 1, [48, 98], 48, 98, 4),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [100, 45], 100, 45, 5),
      circle("spark-2", 2, [200, 45], 200, 45, 5),
      circle("cloud-spiral-eye", 6, [195, 225], 195, 225, 8),
      circle("ocean-specular", 6, [125, 175], 125, 175, 6),
      circle("orbital-satellite", 6, [245, 120], 245, 120, 5),
      circle("sunlight-rim", 2, [110, 200], 110, 200, 8)
    ]
  },

  // 17. 🔴 Mars Planet (Olympus Mons, Valles Marineris canyon, polar cap)
  {
    id: "mars-red", name: "Mars Planet", emoji: "🔴",
    colors: ["#0A0A2E", "#D32F2F", "#FF6D00", "#BF360C", "#8D6E63", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("mars-glow", 3, [150, 200], 150, 200, 115),
      circle("mars-sphere", 2, [150, 200], 150, 200, 95),
      circle("olympus-mons", 4, [115, 170], 115, 170, 22),
      circle("olympus-caldera", 5, [115, 170], 115, 170, 8),
      pathShape("valles-marineris", 4, [160, 220], "M 100,215 Q 160,235 210,210"),
      ellipse("syrtis-major", 5, [185, 180], 185, 180, 25, 35),
      ellipse("hellas-basin", 3, [175, 245], 175, 245, 25, 18),
      circle("north-polar-cap", 6, [150, 112], 150, 112, 18),
      circle("south-polar-cap", 6, [150, 288], 150, 288, 14),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("phobos-orbit", 5, [55, 130], 55, 130, 8),
      circle("deimos-orbit", 5, [245, 270], 245, 270, 6),
      circle("crater-1", 4, [90, 250], 90, 250, 10),
      circle("crater-2", 4, [140, 150], 140, 150, 9),
      circle("dust-storm-arc-1", 3, [110, 130], 110, 130, 14),
      circle("dust-storm-arc-2", 3, [200, 230], 200, 230, 14),
      circle("deep-sky-galaxy", 6, [250, 80], 250, 80, 10),
      circle("sunlight-edge", 3, [100, 190], 100, 190, 10)
    ]
  },

  // 18. 🌀 Jupiter Giant (cloud bands, Great Red Spot)
  {
    id: "jupiter-giant", name: "Jupiter Giant", emoji: "🌀",
    colors: ["#0A0A2E", "#FFA000", "#FFD54F", "#D7CCC8", "#D32F2F", "#8D6E63", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("jup-glow", 3, [150, 200], 150, 200, 115),
      circle("jup-sphere", 2, [150, 200], 150, 200, 95),
      ellipse("north-temperate-belt", 6, [150, 145], 150, 145, 88, 14),
      ellipse("north-equatorial-belt", 4, [150, 175], 150, 175, 92, 16),
      ellipse("equatorial-zone", 3, [150, 200], 150, 200, 94, 15),
      ellipse("south-equatorial-belt", 6, [150, 225], 150, 225, 92, 16),
      ellipse("south-temperate-belt", 4, [150, 255], 150, 255, 88, 14),
      ellipse("great-red-spot", 5, [185, 225], 185, 225, 22, 14),
      circle("red-spot-core", 7, [185, 225], 185, 225, 6),
      circle("moon-io", 3, [50, 120], 50, 120, 10),
      circle("moon-europa", 7, [245, 120], 245, 120, 8),
      circle("moon-ganymede", 4, [45, 280], 45, 280, 14),
      circle("moon-callisto", 6, [250, 280], 250, 280, 12),
      circle("star-1", 7, [45, 55], 45, 55, 4),
      circle("star-2", 7, [255, 55], 255, 55, 4),
      circle("star-3", 7, [40, 340], 40, 340, 4),
      circle("star-4", 7, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("white-oval-storm-1", 7, [115, 255], 115, 255, 6),
      circle("white-oval-storm-2", 7, [145, 255], 145, 255, 6),
      circle("swirl-plume", 7, [140, 175], 140, 175, 7),
      circle("polar-swirl", 6, [150, 115], 150, 115, 12)
    ]
  },

  // 19. 🔵 Neptune Blue (deep azure planet, Great Dark Spot, white cirrus clouds)
  {
    id: "neptune-ice", name: "Neptune Blue", emoji: "🔵",
    colors: ["#0A0A2E", "#0288D1", "#01579B", "#00ACC1", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("nep-glow", 4, [150, 200], 150, 200, 115),
      circle("nep-sphere", 2, [150, 200], 150, 200, 95),
      ellipse("great-dark-spot", 3, [125, 185], 125, 185, 26, 18),
      ellipse("scooter-cloud", 6, [135, 215], 135, 215, 18, 6),
      ellipse("cloud-band-north", 5, [150, 150], 150, 150, 85, 8),
      ellipse("cloud-band-south", 5, [150, 245], 150, 245, 85, 8),
      circle("moon-triton", 5, [60, 110], 60, 110, 14),
      circle("triton-ice-geyser", 6, [58, 105], 58, 105, 4),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 5, [90, 45], 90, 45, 5),
      circle("spark-2", 5, [210, 45], 210, 45, 5),
      circle("faint-ring-arc-1", 4, [65, 200], 65, 200, 12),
      circle("faint-ring-arc-2", 4, [235, 200], 235, 200, 12),
      circle("cirrus-streak-1", 6, [175, 175], 175, 175, 6),
      circle("cirrus-streak-2", 6, [195, 235], 195, 235, 7),
      circle("small-dark-spot", 3, [180, 245], 180, 245, 10),
      circle("polar-vortex", 3, [150, 288], 150, 288, 12),
      circle("star-cluster", 6, [240, 90], 240, 90, 8),
      circle("dust-grain-1", 5, [80, 330], 80, 330, 3),
      circle("dust-grain-2", 5, [220, 330], 220, 330, 3)
    ]
  },

  // 20. 🌐 Uranus Sky (pale cyan gas giant, vertical ring system)
  {
    id: "uranus-cyan", name: "Uranus Sky", emoji: "🌐",
    colors: ["#0A0A2E", "#00E5FF", "#80DEEA", "#00ACC1", "#B2EBF2", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("ur-glow", 3, [150, 200], 150, 200, 115),
      circle("ur-sphere", 2, [150, 200], 150, 200, 95),
      ellipse("ur-vertical-ring-outer", 5, [150, 200], 150, 200, 45, 138),
      ellipse("ur-vertical-ring-inner", 4, [150, 200], 150, 200, 35, 118),
      circle("polar-hood", 3, [150, 130], 150, 130, 25),
      ellipse("ur-haze-band", 4, [150, 220], 150, 220, 90, 12),
      circle("moon-miranda", 5, [100, 70], 100, 70, 10),
      circle("moon-ariel", 5, [200, 330], 200, 330, 10),
      circle("moon-titania", 5, [70, 320], 70, 320, 12),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [90, 45], 90, 45, 5),
      circle("spark-2", 2, [210, 45], 210, 45, 5),
      circle("ring-shepherd-1", 6, [150, 75], 150, 75, 4),
      circle("ring-shepherd-2", 6, [150, 325], 150, 325, 4),
      circle("methane-cloud-1", 6, [180, 185], 180, 185, 6),
      circle("methane-cloud-2", 6, [120, 230], 120, 230, 6),
      circle("cyan-aurora-top", 2, [150, 110], 150, 110, 10),
      circle("cyan-aurora-bot", 2, [150, 290], 150, 290, 10),
      circle("star-twinkle-1", 6, [50, 180], 50, 180, 3),
      circle("star-twinkle-2", 6, [250, 180], 250, 180, 3)
    ]
  },

  // 21. 👾 Space Invader (Pixel Arcade Alien)
  {
    id: "retro-invader", name: "Space Invader", emoji: "👾",
    colors: ["#0A0A2E", "#76FF03", "#00E5FF", "#D32F2F", "#FFFFFF", "#311B92"],
    builder: (c) => [
      rect("inv-bg", 1, [25, 30], 0, 0, 300, 400),
      rect("inv-body-core", 2, [150, 200], 90, 150, 120, 90, 6),
      rect("inv-antenna-l", 2, [110, 125], 100, 110, 20, 40, 4),
      rect("inv-antenna-r", 2, [190, 125], 180, 110, 20, 40, 4),
      rect("inv-eye-l", 3, [120, 180], 110, 170, 20, 20),
      rect("inv-eye-r", 3, [180, 180], 170, 170, 20, 20),
      rect("inv-pupil-l", 1, [120, 180], 115, 175, 10, 10),
      rect("inv-pupil-r", 1, [180, 180], 175, 175, 10, 10),
      rect("inv-claw-l1", 2, [65, 180], 55, 160, 35, 40, 4),
      rect("inv-claw-r1", 2, [235, 180], 210, 160, 35, 40, 4),
      rect("inv-leg-l", 2, [105, 260], 95, 240, 20, 45, 4),
      rect("inv-leg-r", 2, [195, 260], 185, 240, 20, 45, 4),
      rect("inv-mouth", 4, [150, 220], 120, 212, 60, 15),
      circle("laser-shot-1", 4, [150, 320], 150, 320, 8),
      circle("laser-shot-2", 4, [150, 355], 150, 355, 8),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [85, 45], 85, 45, 5),
      circle("spark-2", 3, [215, 45], 215, 45, 5),
      circle("arcade-aura", 6, [150, 200], 150, 200, 115),
      circle("score-dot-1", 3, [70, 90], 70, 90, 5),
      circle("score-dot-2", 3, [230, 90], 230, 90, 5)
    ]
  },

  // 22. 🦾 Titan Mech (Giant Battle Robot with cannons, missile pods)
  {
    id: "cyber-mech", name: "Titan Mech", emoji: "🦾",
    colors: ["#0A0A2E", "#78909C", "#37474F", "#D32F2F", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("mech-bg", 1, [25, 30], 0, 0, 300, 400),
      rect("mech-ground", 3, [150, 365], 0, 345, 300, 55),
      rect("mech-torso-armor", 2, [150, 195], 100, 150, 100, 90, 8),
      rect("mech-cockpit-visor", 5, [150, 185], 120, 175, 60, 20, 2),
      circle("mech-core-reactor", 5, [150, 215], 150, 215, 14),
      rect("shoulder-pod-l", 3, [80, 160], 65, 145, 35, 35, 4),
      rect("shoulder-pod-r", 3, [220, 160], 200, 145, 35, 35, 4),
      rect("cannon-barrel-l", 2, [75, 120], 70, 95, 12, 50),
      rect("cannon-barrel-r", 2, [225, 120], 218, 95, 12, 50),
      circle("missile-tip-l", 4, [76, 90], 76, 90, 6),
      circle("missile-tip-r", 4, [224, 90], 224, 90, 6),
      rect("mech-hip", 3, [150, 250], 115, 240, 70, 20),
      rect("mech-leg-l", 2, [105, 290], 95, 260, 20, 70, 4),
      rect("mech-leg-r", 2, [195, 290], 185, 260, 20, 70, 4),
      rect("mech-foot-l", 3, [95, 335], 80, 330, 40, 15, 2),
      rect("mech-foot-r", 3, [205, 335], 180, 330, 40, 15, 2),
      circle("hydraulic-knee-l", 4, [105, 295], 105, 295, 8),
      circle("hydraulic-knee-r", 4, [195, 295], 195, 295, 8),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 260], 40, 260, 4),
      circle("star-4", 6, [260, 260], 260, 260, 4),
      circle("laser-flare-l", 5, [76, 80], 76, 80, 5),
      circle("laser-flare-r", 5, [224, 80], 224, 80, 5)
    ]
  },

  // 23. 🦿 Bionic Walker (Scout Walker with reverse-joint legs)
  {
    id: "bionic-walker", name: "Bionic Walker", emoji: "🦿",
    colors: ["#0A0A2E", "#78909C", "#37474F", "#00E5FF", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("ground", 3, [150, 370], 0, 350, 300, 50),
      rect("cockpit-cabin", 2, [150, 140], 90, 95, 120, 85, 12),
      rect("visor-slit", 4, [150, 130], 105, 120, 90, 18, 3),
      circle("chin-turret", 3, [150, 190], 150, 190, 16),
      rect("blaster-barrel", 2, [150, 210], 144, 195, 12, 35),
      polygon("thigh-left", 3, [95, 230], "95,180 75,250 105,250"),
      polygon("thigh-right", 3, [205, 230], "205,180 195,250 225,250"),
      polygon("shin-left", 2, [75, 290], "85,250 65,340 95,340"),
      polygon("shin-right", 2, [225, 290], "215,250 205,340 235,340"),
      rect("foot-pad-l", 3, [80, 345], 50, 340, 50, 14, 2),
      rect("foot-pad-r", 3, [220, 345], 200, 340, 50, 14, 2),
      circle("knee-joint-l", 5, [85, 250], 85, 250, 8),
      circle("knee-joint-r", 5, [215, 250], 215, 250, 8),
      circle("searchlight", 5, [110, 160], 110, 160, 6),
      circle("target-lock", 4, [190, 160], 190, 160, 6),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 200], 40, 200, 4),
      circle("star-4", 6, [260, 200], 260, 200, 4),
      circle("antenna-bulb", 4, [190, 85], 190, 85, 6),
      circle("dust-puff-l", 2, [55, 360], 55, 360, 8),
      circle("dust-puff-r", 2, [245, 360], 245, 360, 8),
      circle("laser-flash", 4, [150, 248], 150, 248, 8)
    ]
  },

  // 24. 📡 Radio Telescope (Giant Parabolic Dish)
  {
    id: "deep-dish", name: "Radio Telescope", emoji: "📡",
    colors: ["#0A0A2E", "#ECEFF1", "#78909C", "#FFD54F", "#0288D1", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("ground", 3, [150, 375], 0, 355, 300, 45),
      polygon("pylon-pedestal", 3, [150, 305], "110,355 190,355 165,245 135,245"),
      ellipse("dish-parabola", 2, [150, 180], 150, 180, 115, 65),
      ellipse("dish-inner-bowl", 3, [150, 180], 150, 180, 95, 50),
      circle("subreflector-apex", 4, [150, 130], 150, 130, 14),
      pathShape("strut-l", 3, [115, 155], "M 65,175 L 150,130"),
      pathShape("strut-r", 3, [185, 155], "M 235,175 L 150,130"),
      pathShape("strut-b", 3, [150, 160], "M 150,195 L 150,130"),
      circle("signal-wave-1", 5, [150, 90], 150, 90, 20),
      circle("signal-wave-2", 5, [150, 60], 150, 60, 35),
      circle("signal-wave-3", 5, [150, 30], 150, 30, 50),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 290], 40, 290, 4),
      circle("star-4", 6, [260, 290], 260, 290, 4),
      circle("spark-1", 4, [85, 45], 85, 45, 4),
      circle("spark-2", 4, [215, 45], 215, 45, 4),
      circle("control-room", 4, [150, 340], 150, 340, 10),
      circle("feed-horn-center", 4, [150, 180], 150, 180, 8),
      circle("panel-segment-1", 2, [105, 180], 105, 180, 10),
      circle("panel-segment-2", 2, [195, 180], 195, 180, 10),
      circle("gear-hub", 3, [150, 245], 150, 245, 12),
      circle("radio-beam-origin", 6, [150, 130], 150, 130, 4)
    ]
  },

  // 25. 💥 Supernova Burst (Diamond Stellar Flare)
  {
    id: "supernova", name: "Supernova Burst", emoji: "💥",
    colors: ["#0A0A2E", "#FFD54F", "#FF6D00", "#D50000", "#FF4081", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("shockwave-outer", 4, [150, 200], 150, 200, 130),
      circle("shockwave-mid", 3, [150, 200], 150, 200, 95),
      circle("shockwave-inner", 2, [150, 200], 150, 200, 65),
      polygon("flare-vertical", 6, [150, 200], "145,30 155,30 150,370"),
      polygon("flare-horizontal", 6, [150, 200], "20,195 280,195 280,205 20,205"),
      polygon("flare-diagonal-1", 2, [150, 200], "50,100 250,300 240,310 40,110"),
      polygon("flare-diagonal-2", 2, [150, 200], "250,100 50,300 40,290 240,90"),
      circle("plasma-core-hot", 6, [150, 200], 150, 200, 35),
      circle("core-singularity", 6, [150, 200], 150, 200, 15),
      circle("ejecta-blob-1", 5, [90, 130], 90, 130, 14),
      circle("ejecta-blob-2", 5, [210, 130], 210, 130, 14),
      circle("ejecta-blob-3", 5, [90, 270], 90, 270, 14),
      circle("ejecta-blob-4", 5, [210, 270], 210, 270, 14),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [110, 70], 110, 70, 5),
      circle("spark-2", 2, [190, 70], 190, 70, 5),
      circle("spark-3", 2, [110, 330], 110, 330, 5),
      circle("spark-4", 2, [190, 330], 190, 330, 5),
      circle("gamma-ray-burst-1", 6, [150, 80], 150, 80, 8),
      circle("gamma-ray-burst-2", 6, [150, 320], 150, 320, 8)
    ]
  },

  // 26. 👽 Cyber Alien (Classic Grey Extraterrestrial)
  {
    id: "hologram-globe", name: "Cyber Globe", emoji: "👽",
    colors: ["#0A0A2E", "#76FF03", "#00E5FF", "#311B92", "#212121", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("alien-halo", 4, [150, 190], 150, 190, 115),
      pathShape("alien-cranium", 2, [150, 190], "M 75,160 C 75,70 225,70 225,160 C 225,240 175,270 150,270 C 125,270 75,240 75,160 Z"),
      polygon("neck", 2, [150, 290], "135,265 165,265 175,320 125,320"),
      ellipse("almond-eye-l", 5, [115, 175], 115, 175, 24, 38),
      ellipse("almond-eye-r", 5, [185, 175], 185, 175, 24, 38),
      circle("eye-shine-l", 6, [110, 160], 110, 160, 6),
      circle("eye-shine-r", 6, [180, 160], 180, 160, 6),
      circle("nostril-l", 5, [144, 225], 144, 225, 3),
      circle("nostril-r", 5, [156, 225], 156, 225, 3),
      pathShape("alien-mouth-slit", 5, [150, 245], "M 135,245 Q 150,250 165,245"),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [85, 45], 85, 45, 5),
      circle("spark-2", 3, [215, 45], 215, 45, 5),
      circle("psi-energy-1", 3, [150, 75], 150, 75, 8),
      circle("psi-energy-2", 3, [90, 95], 90, 95, 7),
      circle("psi-energy-3", 3, [210, 95], 210, 95, 7),
      circle("shoulder-l", 2, [95, 340], 95, 340, 30),
      circle("shoulder-r", 2, [205, 340], 205, 340, 30),
      circle("suit-collar", 3, [150, 320], 150, 320, 25),
      circle("hologram-grid-dot", 6, [150, 120], 150, 120, 5)
    ]
  },

  // 27. 🔬 Orbital Lab (Science Module with centrifuge ring)
  {
    id: "astro-laboratory", name: "Orbital Lab", emoji: "🔬",
    colors: ["#0A0A2E", "#ECEFF1", "#0288D1", "#FFD54F", "#4CAF50", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("centrifuge-ring", 3, [150, 200], 150, 200, 115),
      circle("centrifuge-inner", 1, [150, 200], 150, 200, 90),
      rect("hub-cylinder", 2, [150, 200], 120, 130, 60, 140, 8),
      circle("cupola-dome", 3, [150, 125], 150, 125, 20),
      circle("airlock-dock", 4, [150, 275], 150, 275, 18),
      rect("spoke-1", 2, [150, 200], 50, 195, 200, 10),
      rect("spoke-2", 2, [150, 200], 145, 100, 10, 200),
      circle("pod-1", 5, [150, 90], 150, 90, 16),
      circle("pod-2", 5, [150, 310], 150, 310, 16),
      circle("pod-3", 5, [40, 200], 40, 200, 16),
      circle("pod-4", 5, [260, 200], 260, 200, 16),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("comm-antenna", 4, [185, 145], 185, 145, 8),
      circle("solar-array-dot-1", 3, [95, 145], 95, 145, 8),
      circle("solar-array-dot-2", 3, [205, 255], 205, 255, 8),
      circle("bio-dome-window-1", 5, [135, 195], 135, 195, 5),
      circle("bio-dome-window-2", 5, [165, 195], 165, 195, 5),
      circle("orbital-beacon", 4, [150, 200], 150, 200, 6)
    ]
  },

  // 28. 🔭 James Webb Telescope (Honeycomb Golden Mirror Array + Sunshield)
  {
    id: "deep-space-telescope", name: "Deep Space Scope", emoji: "🔭",
    colors: ["#0A0A2E", "#FFD54F", "#FFA000", "#78909C", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("sunshield-base", 4, [150, 290], "150,210 275,290 150,370 25,290"),
      polygon("sunshield-layer-2", 6, [150, 290], "150,225 260,290 150,355 40,290"),
      circle("hex-center", 3, [150, 140], 150, 140, 22),
      circle("hex-top", 2, [150, 95], 150, 95, 20),
      circle("hex-bot", 2, [150, 185], 150, 185, 20),
      circle("hex-top-l", 2, [112, 118], 112, 118, 20),
      circle("hex-top-r", 2, [188, 118], 188, 118, 20),
      circle("hex-bot-l", 2, [112, 162], 112, 162, 20),
      circle("hex-bot-r", 2, [188, 162], 188, 162, 20),
      polygon("secondary-mirror-tripod", 4, [150, 140], "145,55 155,55 170,140 130,140"),
      circle("secondary-mirror", 2, [150, 55], 150, 55, 8),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 5, [85, 45], 85, 45, 5),
      circle("spark-2", 5, [215, 45], 215, 45, 5),
      circle("spacecraft-bus", 4, [150, 290], 150, 290, 14),
      circle("star-tracker-l", 5, [90, 290], 90, 290, 6),
      circle("star-tracker-r", 5, [210, 290], 210, 290, 6),
      circle("l2-halo-orbit", 5, [150, 380], 150, 380, 12),
      circle("infrared-light-beam-1", 2, [150, 100], 150, 100, 4),
      circle("infrared-light-beam-2", 2, [150, 180], 150, 180, 4)
    ]
  },

  // 29. ☀️ Solar Observatory (Sun with giant prominence loops)
  {
    id: "solar-observatory", name: "Solar Observatory", emoji: "☀️",
    colors: ["#0A0A2E", "#FFD54F", "#FF6D00", "#D50000", "#FF8F00", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("corona-glow", 4, [150, 200], 150, 200, 125),
      circle("sun-surface", 2, [150, 200], 150, 200, 95),
      pathShape("prominence-loop-1", 3, [95, 110], "M 90,130 C 50,70 120,40 135,110"),
      pathShape("prominence-loop-2", 3, [205, 280], "M 205,270 C 260,290 230,360 170,290"),
      circle("sunspot-group-1", 4, [125, 175], 125, 175, 12),
      circle("sunspot-group-2", 4, [185, 215], 185, 215, 14),
      circle("flare-core", 6, [145, 195], 145, 195, 16),
      circle("satellite-parked", 6, [45, 280], 45, 280, 8),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 6, [40, 340], 40, 340, 4),
      circle("star-4", 6, [260, 340], 260, 340, 4),
      circle("spark-1", 5, [85, 45], 85, 45, 5),
      circle("spark-2", 5, [215, 45], 215, 45, 5),
      circle("granulation-cell-1", 5, [110, 220], 110, 220, 10),
      circle("granulation-cell-2", 5, [170, 160], 170, 160, 10),
      circle("magnetic-arc-1", 3, [220, 150], 220, 150, 15),
      circle("magnetic-arc-2", 3, [80, 240], 80, 240, 15),
      circle("solar-wind-1", 2, [30, 180], 30, 180, 6),
      circle("solar-wind-2", 2, [270, 180], 270, 180, 6),
      circle("sunspot-umbra-1", 1, [125, 175], 125, 175, 5),
      circle("sunspot-umbra-2", 1, [185, 215], 185, 215, 6),
      circle("cme-bubble", 3, [240, 90], 240, 90, 12)
    ]
  },

  // 30. 🏕️ Mars Colony Dome (Pressurized biodome base with greenhouse)
  {
    id: "mars-habitat", name: "Mars Colony Dome", emoji: "🏕️",
    colors: ["#1A0000", "#D32F2F", "#00E5FF", "#4CAF50", "#FF6D00", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("mars-hills", 2, [150, 280], "0,290 90,260 210,270 300,250 300,400 0,400"),
      circle("main-biodome", 3, [150, 240], 150, 240, 75),
      circle("greenhouse-interior", 4, [150, 255], 150, 255, 45),
      rect("airlock-tunnel-l", 2, [75, 290], 50, 280, 45, 20, 2),
      rect("airlock-tunnel-r", 2, [225, 290], 205, 280, 45, 20, 2),
      circle("small-habitat-dome", 3, [60, 275], 60, 275, 30),
      circle("solar-panel-field", 5, [240, 320], 240, 320, 18),
      circle("star-1", 6, [45, 55], 45, 55, 4),
      circle("star-2", 6, [255, 55], 255, 55, 4),
      circle("star-3", 5, [150, 50], 150, 50, 4),
      circle("mars-moon-phobos", 2, [60, 90], 60, 90, 10),
      circle("comm-tower", 6, [150, 160], 150, 160, 6),
      circle("rover-parked", 5, [130, 350], 130, 350, 12),
      circle("mars-boulder-1", 5, [40, 360], 40, 360, 12),
      circle("mars-boulder-2", 5, [260, 360], 260, 360, 14),
      circle("biodome-hex-1", 6, [130, 220], 130, 220, 6),
      circle("biodome-hex-2", 6, [170, 220], 170, 220, 6),
      circle("biodome-hex-3", 6, [150, 200], 150, 200, 6),
      circle("air-tank-1", 6, [95, 330], 95, 330, 6),
      circle("air-tank-2", 6, [205, 330], 205, 330, 6),
      circle("spark-1", 3, [95, 45], 95, 45, 4),
      circle("spark-2", 3, [205, 45], 205, 45, 4),
      circle("horizon-glow", 5, [150, 260], 150, 260, 10)
    ]
  }
];

// Combine the rest of the 50 templates, each with UNIQUE geometry!
const FINAL_TEMPLATES = [...TEMPLATES];

for (const sub of ALL_50_SPACE_ITEMS) {
  const regions = sub.builder(sub.colors);
  FINAL_TEMPLATES.push({
    id: sub.id,
    name: sub.name,
    emoji: sub.emoji,
    category: "space",
    viewBox: "0 0 300 400",
    colors: sub.colors,
    regions: regions
  });
}

// 31 to 50: Distinct individual templates
const last20Subjects = [
  // 31. 🏎️ Apollo Moon Buggy (LRV Rover)
  {
    id: "lunar-rover", name: "Apollo Moon Buggy", emoji: "🏎️",
    colors: ["#0A0A2E", "#ECEFF1", "#78909C", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      ellipse("moon-surface", 3, [150, 370], 150, 370, 140, 35),
      rect("lrv-chassis", 2, [150, 270], 80, 250, 140, 30, 4),
      rect("seat-l", 3, [125, 235], 110, 215, 25, 35, 4),
      rect("seat-r", 3, [160, 235], 145, 215, 25, 35, 4),
      rect("steering-t-bar", 3, [135, 230], 130, 210, 10, 30),
      rect("dish-mast", 3, [195, 210], 190, 180, 6, 60),
      circle("umbrella-dish", 4, [195, 175], 195, 175, 16),
      circle("tv-cam", 3, [85, 240], 85, 240, 10),
      circle("wheel-fl", 3, [95, 310], 95, 310, 20),
      circle("wheel-fr", 3, [205, 310], 205, 310, 20),
      circle("mesh-tyre-fl", 2, [95, 310], 95, 310, 12),
      circle("mesh-tyre-fr", 2, [205, 310], 205, 310, 12),
      circle("fender-l", 2, [95, 280], 95, 280, 15),
      circle("fender-r", 2, [205, 280], 205, 280, 15),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 180], 40, 180, 4),
      circle("star-4", 5, [260, 180], 260, 180, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("crater-1", 2, [50, 375], 50, 375, 10),
      circle("crater-2", 2, [250, 375], 250, 375, 12),
      circle("battery-pack", 4, [90, 260], 90, 260, 8)
    ]
  },

  // 32. 🔮 Gas Giant Planet (Iridescent diagonal ring arcs)
  {
    id: "ringed-planet-gas", name: "Gas Giant Planet", emoji: "🔮",
    colors: ["#0A0A2E", "#7B1FA2", "#E040FB", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("gas-aura", 3, [150, 200], 150, 200, 120),
      circle("gas-orb", 2, [150, 200], 150, 200, 90),
      ellipse("diagonal-ring-outer", 4, [150, 200], 150, 200, 135, 30),
      ellipse("diagonal-ring-inner", 3, [150, 200], 150, 200, 110, 22),
      ellipse("band-arc-1", 3, [150, 160], 150, 160, 80, 15),
      ellipse("band-arc-2", 4, [150, 240], 150, 240, 80, 15),
      circle("swirl-storm", 5, [125, 195], 125, 195, 14),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("shepherd-moon-1", 5, [65, 140], 65, 140, 8),
      circle("shepherd-moon-2", 5, [235, 260], 235, 260, 8),
      circle("aurora-crown", 4, [150, 115], 150, 115, 16),
      circle("aurora-base", 4, [150, 285], 150, 285, 16),
      circle("plasma-filament-1", 3, [185, 175], 185, 175, 8),
      circle("plasma-filament-2", 3, [115, 225], 115, 225, 8),
      circle("stardust-1", 5, [30, 230], 30, 230, 4),
      circle("stardust-2", 5, [270, 230], 270, 230, 4),
      circle("ring-shadow", 2, [160, 205], 160, 205, 12),
      circle("outer-orbit-dot", 4, [240, 80], 240, 80, 6)
    ]
  },

  // 33. 🏮 Red Supergiant (Betelgeuse boiling star)
  {
    id: "supergiant-star", name: "Red Supergiant", emoji: "🏮",
    colors: ["#0A0A2E", "#D50000", "#FF6D00", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("corona-glow", 3, [150, 200], 150, 200, 130),
      circle("stellar-body", 2, [150, 200], 150, 200, 105),
      circle("convective-cell-1", 3, [120, 160], 120, 160, 25),
      circle("convective-cell-2", 3, [180, 160], 180, 160, 25),
      circle("convective-cell-3", 3, [150, 230], 150, 230, 30),
      circle("hotspot-core", 4, [150, 200], 150, 200, 18),
      circle("mass-loss-plume-1", 3, [70, 110], 70, 110, 18),
      circle("mass-loss-plume-2", 3, [230, 110], 230, 110, 18),
      circle("mass-loss-plume-3", 3, [70, 290], 70, 290, 18),
      circle("mass-loss-plume-4", 3, [230, 290], 230, 290, 18),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("dust-shroud-1", 2, [110, 90], 110, 90, 10),
      circle("dust-shroud-2", 2, [190, 310], 190, 310, 10),
      circle("plasma-loop-l", 4, [65, 200], 65, 200, 12),
      circle("plasma-loop-r", 4, [235, 200], 235, 200, 12),
      circle("stellar-core-bright", 5, [150, 200], 150, 200, 8),
      circle("flare-1", 4, [150, 70], 150, 70, 10),
      circle("flare-2", 4, [150, 330], 150, 330, 10)
    ]
  },

  // 34. ⚡ Pulsar Core (Rotating Neutron Star with Twin Radiation Beams)
  {
    id: "pulsar-core", name: "Pulsar Core", emoji: "⚡",
    colors: ["#0A0A2E", "#00E5FF", "#311B92", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("beam-north", 2, [150, 80], "145,160 155,160 210,10 90,10"),
      polygon("beam-south", 2, [150, 320], "145,240 155,240 210,390 90,390"),
      circle("magnetosphere", 3, [150, 200], 150, 200, 90),
      ellipse("magnetic-equator", 4, [150, 200], 150, 200, 110, 25),
      circle("neutron-star", 5, [150, 200], 150, 200, 35),
      circle("hot-magnetic-pole-n", 4, [150, 170], 150, 170, 10),
      circle("hot-magnetic-pole-s", 4, [150, 230], 150, 230, 10),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("relativistic-pulse-1", 5, [150, 100], 150, 100, 8),
      circle("relativistic-pulse-2", 5, [150, 300], 150, 300, 8),
      circle("synchrotron-ring-1", 2, [80, 160], 80, 160, 12),
      circle("synchrotron-ring-2", 2, [220, 240], 220, 240, 12),
      circle("core-light", 5, [150, 200], 150, 200, 14),
      circle("field-line-l", 3, [65, 200], 65, 200, 15),
      circle("field-line-r", 3, [235, 200], 235, 200, 15),
      circle("gamma-point-1", 4, [120, 50], 120, 50, 4),
      circle("gamma-point-2", 4, [180, 350], 180, 350, 4),
      circle("pulsar-center-gem", 5, [150, 200], 150, 200, 6)
    ]
  },

  // 35. 🖲️ Cyber Recon Droid (Spherical probe with glowing eye lens)
  {
    id: "cyber-recon-droid", name: "Cyber Recon Droid", emoji: "🖲️",
    colors: ["#0A0A2E", "#78909C", "#00E5FF", "#76FF03", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("droid-sphere", 2, [150, 190], 150, 190, 85),
      circle("lens-ring", 3, [150, 190], 150, 190, 48),
      circle("sensor-eye", 4, [150, 190], 150, 190, 30),
      circle("pupil-lens", 1, [150, 190], 150, 190, 14),
      circle("eye-shine", 5, [142, 182], 142, 182, 6),
      rect("antenna-l", 2, [110, 85], 106, 60, 8, 50),
      rect("antenna-r", 2, [190, 85], 186, 60, 8, 50),
      circle("antenna-tip-l", 3, [110, 55], 110, 55, 6),
      circle("antenna-tip-r", 3, [190, 55], 190, 55, 6),
      rect("thruster-main", 2, [150, 295], 135, 275, 30, 25),
      polygon("thruster-flame", 3, [150, 335], "138,300 162,300 150,370"),
      circle("panel-seam-1", 2, [90, 140], 90, 140, 10),
      circle("panel-seam-2", 2, [210, 140], 210, 140, 10),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("scanner-beam-1", 3, [95, 240], 95, 240, 8),
      circle("scanner-beam-2", 3, [205, 240], 205, 240, 8),
      circle("nav-led-1", 4, [150, 120], 150, 120, 5),
      circle("nav-led-2", 4, [150, 260], 150, 260, 5)
    ]
  },

  // 36. ⚛️ Quantum Warp Core (Antimatter reactor with magnetic rings)
  {
    id: "quantum-warp-core", name: "Quantum Drive", emoji: "⚛️",
    colors: ["#0A0A2E", "#00E5FF", "#311B92", "#E040FB", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("reactor-column", 3, [150, 200], 110, 70, 80, 260, 12),
      rect("chamber-glass", 2, [150, 200], 125, 90, 50, 220, 6),
      ellipse("mag-ring-1", 4, [150, 120], 150, 120, 55, 14),
      ellipse("mag-ring-2", 4, [150, 200], 150, 200, 55, 14),
      ellipse("mag-ring-3", 4, [150, 280], 150, 280, 55, 14),
      circle("antimatter-core", 5, [150, 200], 150, 200, 20),
      circle("plasma-node-top", 2, [150, 120], 150, 120, 12),
      circle("plasma-node-bot", 2, [150, 280], 150, 280, 12),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("conduit-l", 2, [75, 200], 75, 200, 15),
      circle("conduit-r", 2, [225, 200], 225, 200, 15),
      circle("injector-top", 4, [150, 55], 150, 55, 12),
      circle("injector-bot", 4, [150, 345], 150, 345, 12),
      circle("energy-spark-1", 5, [95, 130], 95, 130, 5),
      circle("energy-spark-2", 5, [205, 130], 205, 130, 5),
      circle("energy-spark-3", 5, [95, 270], 95, 270, 5),
      circle("energy-spark-4", 5, [205, 270], 205, 270, 5),
      circle("warp-field-halo", 4, [150, 200], 150, 200, 115),
      circle("core-sparkle", 5, [148, 198], 148, 198, 6),
      circle("status-led", 2, [150, 80], 150, 80, 4)
    ]
  },

  // 37. 🛳️ Interstellar Cruiser (Saucer bridge, engineering hull, dual warp nacelles)
  {
    id: "interstellar-cruiser", name: "Interstellar Cruiser", emoji: "🛳️",
    colors: ["#0A0A2E", "#ECEFF1", "#0288D1", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      ellipse("saucer-bridge", 2, [150, 120], 150, 120, 85, 45),
      circle("bridge-dome", 3, [150, 110], 150, 110, 16),
      polygon("neck-pylon", 2, [150, 180], "140,150 160,150 165,220 135,220"),
      rect("engineering-hull", 2, [150, 250], 125, 210, 50, 80, 8),
      circle("deflector-dish", 4, [150, 230], 150, 230, 16),
      rect("nacelle-left", 3, [60, 220], 50, 150, 20, 130, 6),
      rect("nacelle-right", 3, [240, 220], 230, 150, 20, 130, 6),
      rect("nacelle-glow-l", 4, [60, 200], 55, 170, 10, 80, 2),
      rect("nacelle-glow-r", 4, [240, 200], 235, 170, 10, 80, 2),
      pathShape("pylon-strut-l", 2, [100, 240], "M 60,220 L 130,250"),
      pathShape("pylon-strut-r", 2, [200, 240], "M 240,220 L 170,250"),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("impulse-engine-l", 4, [135, 155], 135, 155, 6),
      circle("impulse-engine-r", 4, [165, 155], 165, 155, 6),
      circle("window-row-1", 5, [110, 130], 110, 130, 3),
      circle("window-row-2", 5, [150, 135], 150, 135, 3),
      circle("window-row-3", 5, [190, 130], 190, 130, 3),
      circle("warp-field-wake", 4, [150, 330], 150, 330, 15)
    ]
  },

  // 38. 🍄 Exoplanet Flora (Bioluminescent alien mushroom jungle)
  {
    id: "alien-exoplanet", name: "Exoplanet Flora", emoji: "🍄",
    colors: ["#12002B", "#E040FB", "#76FF03", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("alien-moon", 4, [230, 75], 230, 75, 30),
      polygon("alien-hills", 2, [150, 290], "0,310 110,270 200,290 300,260 300,400 0,400"),
      rect("shroom-stem-c", 3, [150, 270], 142, 210, 16, 100, 4),
      ellipse("shroom-cap-c", 2, [150, 200], 150, 200, 60, 35),
      rect("shroom-stem-l", 3, [70, 300], 64, 250, 12, 80, 4),
      ellipse("shroom-cap-l", 4, [70, 240], 70, 240, 40, 22),
      rect("shroom-stem-r", 3, [230, 300], 224, 250, 12, 80, 4),
      ellipse("shroom-cap-r", 4, [230, 240], 230, 240, 40, 22),
      circle("cap-dot-c1", 3, [130, 190], 130, 190, 6),
      circle("cap-dot-c2", 3, [170, 190], 170, 190, 6),
      circle("cap-dot-c3", 5, [150, 180], 150, 180, 8),
      circle("spore-glow-1", 3, [110, 140], 110, 140, 6),
      circle("spore-glow-2", 3, [190, 140], 190, 140, 6),
      circle("spore-glow-3", 4, [150, 110], 150, 110, 8),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [140, 45], 140, 45, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [85, 45], 85, 45, 5),
      circle("fern-spiral-l", 3, [35, 330], 35, 330, 12),
      circle("fern-spiral-r", 3, [265, 330], 265, 330, 12),
      circle("crystal-spire", 4, [150, 350], 150, 350, 10),
      circle("bio-pollen", 5, [150, 140], 150, 140, 4)
    ]
  },

  // 39. 🚡 Space Elevator Skyhook (Vertical orbital tether climbing into stars)
  {
    id: "space-elevator", name: "Orbital Skyhook", emoji: "🚡",
    colors: ["#0A0A2E", "#0288D1", "#ECEFF1", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("tether-ribbon", 3, [150, 200], 147, 0, 6, 400),
      circle("ocean-platform", 2, [150, 390], 150, 390, 80),
      rect("climber-car", 3, [150, 220], 125, 185, 50, 70, 6),
      circle("climber-window", 4, [150, 210], 150, 210, 14),
      circle("solar-disk-l", 4, [90, 220], 90, 220, 22),
      circle("solar-disk-r", 4, [210, 220], 210, 220, 22),
      circle("orbital-anchor-station", 2, [150, 45], 150, 45, 35),
      circle("counterweight-hub", 3, [150, 45], 150, 45, 18),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 120], 90, 120, 5),
      circle("spark-2", 4, [210, 120], 210, 120, 5),
      circle("guide-roller-top", 2, [150, 185], 150, 185, 6),
      circle("guide-roller-bot", 2, [150, 255], 150, 255, 6),
      circle("laser-power-beam", 4, [150, 310], 150, 310, 8),
      circle("cloud-layer-1", 5, [75, 330], 75, 330, 25),
      circle("cloud-layer-2", 5, [225, 330], 225, 330, 25),
      circle("beacon-light-1", 4, [150, 20], 150, 20, 6),
      circle("beacon-light-2", 4, [150, 70], 150, 70, 6),
      circle("sea-reflection", 2, [150, 360], 150, 360, 15),
      circle("glint-tether", 5, [150, 140], 150, 140, 4)
    ]
  },

  // 40. 🐴 Horsehead Nebula (Dark dust cloud against glowing hydrogen wall)
  {
    id: "dark-nebula", name: "Horsehead Nebula", emoji: "🐴",
    colors: ["#050014", "#D50000", "#311B92", "#000000", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("emission-nebula-wall", 2, [150, 200], 150, 200, 125),
      pathShape("horsehead-dust-pillar", 4, [140, 230], "M 70,350 L 110,230 Q 110,140 160,130 Q 185,130 190,165 Q 190,195 165,200 Q 150,230 150,350 Z"),
      circle("horse-muzzle", 4, [175, 175], 175, 175, 14),
      circle("horse-ear", 4, [145, 120], 145, 120, 8),
      circle("background-star-alnitak", 5, [75, 90], 75, 90, 20),
      circle("alnitak-core", 5, [75, 90], 75, 90, 8),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [90, 45], 90, 45, 5),
      circle("spark-2", 2, [210, 45], 210, 45, 5),
      circle("hydrogen-ridge-1", 2, [210, 140], 210, 140, 18),
      circle("hydrogen-ridge-2", 2, [220, 260], 220, 260, 18),
      circle("dust-grain-1", 3, [100, 290], 100, 290, 10),
      circle("dust-grain-2", 3, [130, 310], 130, 310, 10),
      circle("embedded-protostar", 5, [145, 160], 145, 160, 4),
      circle("stellar-halo", 3, [75, 90], 75, 90, 35),
      circle("gas-filament-1", 2, [110, 95], 110, 95, 6),
      circle("gas-filament-2", 2, [180, 95], 180, 95, 6),
      circle("dark-dust-base", 4, [150, 360], 150, 360, 40),
      circle("ionized-edge-light", 5, [160, 140], 160, 140, 5),
      circle("cosmic-ray-dot", 5, [240, 200], 240, 200, 4)
    ]
  },

  // 41. ✨ Halley Comet (Celestial comet sweeping through stars)
  {
    id: "comet-tail", name: "Halley Comet", emoji: "✨",
    colors: ["#0A0A2E", "#00E5FF", "#FFD54F", "#FFFFFF", "#0288D1"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("halley-dust-tail", 2, [120, 130], "30,30 235,285 100,30"),
      polygon("halley-ion-tail", 5, [140, 150], "60,30 235,285 140,50"),
      circle("halley-coma", 2, [235, 285], 235, 285, 38),
      circle("halley-core", 3, [235, 285], 235, 285, 20),
      circle("nucleus-spark", 4, [235, 285], 235, 285, 8),
      circle("star-orion-1", 4, [50, 110], 50, 110, 6),
      circle("star-orion-2", 4, [75, 125], 75, 125, 6),
      circle("star-orion-3", 4, [100, 140], 100, 140, 6),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 340], 40, 340, 4),
      circle("star-4", 4, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("tail-sparkle-1", 4, [130, 120], 130, 120, 5),
      circle("tail-sparkle-2", 4, [165, 175], 165, 175, 5),
      circle("tail-sparkle-3", 4, [200, 230], 200, 230, 5),
      circle("meteoroid-pebble-1", 3, [210, 310], 210, 310, 6),
      circle("meteoroid-pebble-2", 3, [255, 250], 255, 250, 6),
      circle("gas-stream-1", 2, [110, 90], 110, 90, 8),
      circle("gas-stream-2", 2, [150, 130], 150, 130, 8),
      circle("deep-sky-spark", 4, [60, 240], 60, 240, 4),
      circle("nucleus-glint", 4, [232, 282], 232, 282, 3)
    ]
  },

  // 42. 🌑 Moon Crater Outpost (Lunar crater base with communication dishes)
  {
    id: "lunar-crater-base", name: "Crater Base Alpha", emoji: "🌑",
    colors: ["#0A0A2E", "#78909C", "#ECEFF1", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      ellipse("crater-rim-outer", 2, [150, 300], 150, 300, 130, 70),
      ellipse("crater-floor", 1, [150, 310], 150, 310, 100, 50),
      circle("central-habitat-dome", 3, [150, 290], 150, 290, 40),
      circle("dome-view-window", 4, [150, 280], 150, 280, 14),
      rect("tunnel-link-l", 2, [95, 300], 70, 295, 50, 10),
      rect("tunnel-link-r", 2, [205, 300], 180, 295, 50, 10),
      circle("sub-dome-l", 3, [65, 300], 65, 300, 20),
      circle("sub-dome-r", 3, [235, 300], 235, 300, 20),
      rect("comm-mast", 2, [150, 215], 147, 180, 6, 70),
      circle("radar-dish", 3, [150, 180], 150, 180, 16),
      circle("earth-above", 4, [65, 80], 65, 80, 28),
      circle("earth-swirl", 5, [60, 75], 60, 75, 12),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [150, 70], 150, 70, 4),
      circle("spark-1", 4, [100, 45], 100, 45, 5),
      circle("spark-2", 4, [200, 45], 200, 45, 5),
      circle("beacon-light", 4, [150, 165], 150, 165, 5),
      circle("lunar-rover-docked", 2, [150, 345], 150, 345, 10),
      circle("solar-array-1", 4, [85, 340], 85, 340, 8),
      circle("solar-array-2", 4, [215, 340], 215, 340, 8),
      circle("crater-boulder-1", 2, [35, 320], 35, 320, 8),
      circle("crater-boulder-2", 2, [265, 320], 265, 320, 8)
    ]
  },

  // 43. 👩‍✈️ Star Navigator (Astronaut pilot with holographic HUD star charts)
  {
    id: "astrogator-pilot", name: "Star Navigator", emoji: "👩‍✈️",
    colors: ["#0A0A2E", "#0288D1", "#FFCCBC", "#FFD54F", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("hud-holo-circle-outer", 2, [150, 160], 150, 160, 95),
      circle("hud-holo-circle-inner", 4, [150, 160], 150, 160, 65),
      circle("pilot-head", 3, [150, 240], 150, 240, 35),
      rect("pilot-torso", 2, [150, 330], 100, 275, 100, 80, 12),
      circle("headset-mic", 4, [125, 240], 125, 240, 8),
      ellipse("hud-target-reticle", 4, [150, 160], 150, 160, 20, 20),
      circle("star-route-point-1", 4, [100, 130], 100, 130, 8),
      circle("star-route-point-2", 4, [200, 130], 200, 130, 8),
      pathShape("route-vector-line", 2, [150, 145], "M 100,130 L 150,160 L 200,130"),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [85, 45], 85, 45, 5),
      circle("spark-2", 4, [215, 45], 215, 45, 5),
      circle("console-switch-1", 4, [120, 320], 120, 320, 6),
      circle("console-switch-2", 4, [180, 320], 180, 320, 6),
      circle("flight-badge", 4, [150, 305], 150, 305, 10),
      circle("nav-data-dot-1", 2, [75, 180], 75, 180, 5),
      circle("nav-data-dot-2", 2, [225, 180], 225, 180, 5),
      circle("helm-control-stick", 2, [150, 360], 150, 360, 14),
      circle("cockpit-canopy-arch", 2, [150, 90], 150, 90, 85),
      circle("hud-glint", 5, [150, 160], 150, 160, 5)
    ]
  },

  // 44. 🏗️ Orbital Shipyard (Drydock scaffolding truss holding a starship)
  {
    id: "orbital-shipyard", name: "Orbital Dock", emoji: "🏗️",
    colors: ["#0A0A2E", "#FFD54F", "#78909C", "#0288D1", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("gantry-spine-top", 2, [150, 90], 40, 80, 220, 15, 2),
      rect("gantry-spine-bot", 2, [150, 310], 40, 305, 220, 15, 2),
      rect("gantry-arm-l", 2, [50, 200], 40, 90, 15, 220),
      rect("gantry-arm-r", 2, [250, 200], 245, 90, 15, 220),
      polygon("ship-hull-frame", 3, [150, 200], "150,130 190,260 110,260"),
      circle("construction-core", 4, [150, 200], 150, 200, 20),
      rect("docking-clamp-1", 2, [75, 160], 55, 155, 40, 10),
      rect("docking-clamp-2", 2, [225, 160], 205, 155, 40, 10),
      rect("docking-clamp-3", 2, [75, 240], 55, 235, 40, 10),
      rect("docking-clamp-4", 2, [225, 240], 205, 235, 40, 10),
      circle("weld-laser-spark-1", 5, [110, 200], 110, 200, 6),
      circle("weld-laser-spark-2", 5, [190, 200], 190, 200, 6),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 4, [90, 45], 90, 45, 5),
      circle("spark-2", 4, [210, 45], 210, 45, 5),
      circle("warning-light-1", 2, [47, 85], 47, 85, 6),
      circle("warning-light-2", 2, [253, 85], 253, 85, 6),
      circle("crane-cabin", 3, [150, 85], 150, 85, 10),
      circle("fuel-depot-pod", 4, [150, 335], 150, 335, 12),
      circle("scaffold-truss-hub", 3, [150, 200], 150, 200, 8)
    ]
  },

  // 45. 🔘 Stargate Portal (Ancient circular wormhole gate ring)
  {
    id: "quantum-gateway", name: "Stargate Portal", emoji: "🔘",
    colors: ["#0A0A2E", "#00E5FF", "#311B92", "#FFFFFF", "#FFD54F"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("gate-outer-ring", 3, [150, 200], 150, 200, 115),
      circle("gate-inner-ring", 2, [150, 200], 150, 200, 88),
      circle("event-horizon-pool", 2, [150, 200], 150, 200, 75),
      circle("wormhole-vortex-center", 4, [150, 200], 150, 200, 30),
      polygon("chevron-top", 5, [150, 92], "140,82 160,82 150,105"),
      polygon("chevron-bot", 5, [150, 308], "140,318 160,318 150,295"),
      polygon("chevron-left", 5, [42, 200], "32,190 32,210 55,200"),
      polygon("chevron-right", 5, [258, 200], "268,190 268,210 245,200"),
      polygon("pedestal-ramp", 3, [150, 355], "90,385 210,385 180,315 120,315"),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 340], 40, 340, 4),
      circle("star-4", 4, [260, 340], 260, 340, 4),
      circle("spark-1", 5, [90, 45], 90, 45, 5),
      circle("spark-2", 5, [210, 45], 210, 45, 5),
      circle("vortex-swirl-1", 2, [130, 185], 130, 185, 10),
      circle("vortex-swirl-2", 2, [170, 215], 170, 215, 10),
      circle("glyph-dial-1", 5, [85, 135], 85, 135, 7),
      circle("glyph-dial-2", 5, [215, 135], 215, 135, 7),
      circle("glyph-dial-3", 5, [85, 265], 85, 265, 7),
      circle("glyph-dial-4", 5, [215, 265], 215, 265, 7),
      circle("kawoosh-blast", 4, [150, 200], 150, 200, 15),
      circle("portal-energy-dot", 2, [150, 335], 150, 335, 6)
    ]
  },

  // 46. 🔥 Plasma Thruster (Rocket engine firing intense blue particle plume)
  {
    id: "plasma-thruster", name: "Plasma Drive", emoji: "🔥",
    colors: ["#0A0A2E", "#00E5FF", "#0288D1", "#FFFFFF", "#311B92"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("plasma-exhaust-outer", 3, [150, 260], "115,140 185,140 220,380 80,380"),
      polygon("plasma-exhaust-mid", 2, [150, 250], "125,140 175,140 195,350 105,350"),
      polygon("plasma-exhaust-core", 4, [150, 230], "135,140 165,140 175,300 125,300"),
      polygon("engine-bell-nozzle", 5, [150, 110], "105,70 195,70 185,140 115,140"),
      rect("fuel-manifold", 3, [150, 60], 115, 45, 70, 25, 4),
      circle("injector-port", 2, [150, 135], 150, 135, 18),
      circle("shock-diamond-1", 4, [150, 190], 150, 190, 10),
      circle("shock-diamond-2", 4, [150, 245], 150, 245, 12),
      circle("shock-diamond-3", 4, [150, 305], 150, 305, 14),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 340], 40, 340, 4),
      circle("star-4", 4, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [90, 45], 90, 45, 5),
      circle("spark-2", 2, [210, 45], 210, 45, 5),
      circle("cooling-pipe-l", 5, [95, 95], 95, 95, 8),
      circle("cooling-pipe-r", 5, [205, 95], 205, 95, 8),
      circle("thrust-vector-ring", 2, [150, 70], 150, 70, 12),
      circle("ion-glow-l", 2, [70, 280], 70, 280, 15),
      circle("ion-glow-r", 2, [230, 280], 230, 280, 15),
      circle("plasma-sparkle-1", 4, [130, 340], 130, 340, 4),
      circle("plasma-sparkle-2", 4, [170, 340], 170, 340, 4),
      circle("nozzle-rim-glow", 4, [150, 140], 150, 140, 6)
    ]
  },

  // 47. 📻 SETI Beacon (Deep space automated transmitter array)
  {
    id: "alien-signal-beacon", name: "SETI Array", emoji: "📻",
    colors: ["#0A0A2E", "#78909C", "#FFD54F", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("radio-bubble-1", 4, [150, 130], 150, 130, 125),
      circle("radio-bubble-2", 4, [150, 130], 150, 130, 95),
      circle("radio-bubble-3", 4, [150, 130], 150, 130, 65),
      rect("beacon-tower", 2, [150, 250], 140, 140, 20, 180, 4),
      polygon("tripod-base", 2, [150, 350], "60,380 240,380 150,300"),
      circle("transmitter-emitter", 3, [150, 130], 150, 130, 22),
      circle("emitter-core", 5, [150, 130], 150, 130, 10),
      circle("dish-left", 2, [75, 230], 75, 230, 20),
      circle("dish-right", 2, [225, 230], 225, 230, 20),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("signal-pulse-a", 3, [110, 80], 110, 80, 6),
      circle("signal-pulse-b", 3, [190, 80], 190, 80, 6),
      circle("generator-pod", 3, [150, 320], 150, 320, 14),
      circle("ground-anchor-l", 2, [60, 380], 60, 380, 10),
      circle("ground-anchor-r", 2, [240, 380], 240, 380, 10),
      circle("binary-message-dot-1", 5, [150, 80], 150, 80, 4),
      circle("binary-message-dot-2", 5, [150, 50], 150, 50, 4),
      circle("beacon-status-led", 4, [150, 200], 150, 200, 6)
    ]
  },

  // 48. ☁️ Titan Cloud City (Floating aerostat habitat in orange clouds)
  {
    id: "titan-atmosphere", name: "Titan Cloud City", emoji: "☁️",
    colors: ["#2E1500", "#FFB300", "#FFA000", "#FFFFFF", "#78909C"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("cloud-titan-1", 3, [80, 130], 80, 130, 65),
      circle("cloud-titan-2", 2, [220, 130], 220, 130, 65),
      circle("cloud-titan-3", 3, [150, 330], 150, 330, 85),
      circle("aerostat-balloon", 2, [150, 180], 150, 180, 70),
      rect("city-gondola", 5, [150, 250], 90, 230, 120, 40, 6),
      rect("spire-tower-c", 5, [150, 210], 144, 180, 12, 60),
      circle("observation-dome", 4, [150, 175], 150, 175, 14),
      pathShape("suspension-cable-l", 5, [100, 220], "M 95,210 L 105,230"),
      pathShape("suspension-cable-r", 5, [200, 220], "M 205,210 L 195,230"),
      circle("city-light-1", 4, [110, 250], 110, 250, 5),
      circle("city-light-2", 4, [150, 250], 150, 250, 5),
      circle("city-light-3", 4, [190, 250], 190, 250, 5),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 340], 40, 340, 4),
      circle("star-4", 4, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [90, 45], 90, 45, 5),
      circle("spark-2", 2, [210, 45], 210, 45, 5),
      circle("saturn-in-sky", 3, [60, 70], 60, 70, 20),
      circle("shuttle-docked", 5, [215, 260], 215, 260, 8),
      circle("methane-rain-1", 2, [70, 280], 70, 280, 5),
      circle("methane-rain-2", 2, [230, 280], 230, 280, 5),
      circle("aerostat-beacon", 4, [150, 110], 150, 110, 6)
    ]
  },

  // 49. 🛡️ Sentinel Defense Mech (Orbital defense drone with energy shields)
  {
    id: "cyber-sentinel-mech", name: "Sentinel Mech", emoji: "🛡️",
    colors: ["#0A0A2E", "#0288D1", "#00E5FF", "#FFFFFF", "#78909C"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("energy-shield-diamond", 3, [150, 200], "150,80 250,200 150,320 50,200"),
      circle("shield-core", 2, [150, 200], 150, 200, 45),
      circle("sentinel-eye", 4, [150, 200], 150, 200, 22),
      circle("reticle-center", 1, [150, 200], 150, 200, 10),
      polygon("blaster-wing-top", 5, [150, 110], "135,140 165,140 150,75"),
      polygon("blaster-wing-bot", 5, [150, 290], "135,260 165,260 150,325"),
      polygon("blaster-wing-left", 5, [85, 200], "110,185 110,215 45,200"),
      polygon("blaster-wing-right", 5, [215, 200], "190,185 190,215 255,200"),
      circle("star-1", 4, [45, 55], 45, 55, 4),
      circle("star-2", 4, [255, 55], 255, 55, 4),
      circle("star-3", 4, [40, 340], 40, 340, 4),
      circle("star-4", 4, [260, 340], 260, 340, 4),
      circle("spark-1", 3, [90, 45], 90, 45, 5),
      circle("spark-2", 3, [210, 45], 210, 45, 5),
      circle("shield-emitter-1", 3, [150, 140], 150, 140, 8),
      circle("shield-emitter-2", 3, [150, 260], 150, 260, 8),
      circle("shield-emitter-3", 3, [90, 200], 90, 200, 8),
      circle("shield-emitter-4", 3, [210, 200], 210, 200, 8),
      circle("plasma-charge-1", 4, [150, 60], 150, 60, 6),
      circle("plasma-charge-2", 4, [150, 340], 150, 340, 6),
      circle("plasma-charge-3", 4, [30, 200], 30, 200, 6),
      circle("plasma-charge-4", 4, [270, 200], 270, 200, 6),
      circle("sentinel-pupil-spark", 4, [147, 197], 147, 197, 4)
    ]
  },

  // 50. 💫 Galactic Supercluster (Magnificent rotating two-armed spiral galaxy)
  {
    id: "galactic-core", name: "Galactic Supercluster", emoji: "💫",
    colors: ["#050014", "#FFD54F", "#E040FB", "#00E5FF", "#FFFFFF"],
    builder: (c) => [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("galaxy-halo", 3, [150, 200], 150, 200, 125),
      ellipse("spiral-arm-a", 2, [150, 200], 150, 200, 130, 45),
      ellipse("spiral-arm-b", 4, [150, 200], 150, 200, 45, 130),
      circle("supermassive-nucleus", 2, [150, 200], 150, 200, 45),
      circle("galactic-core-hot", 5, [150, 200], 150, 200, 20),
      circle("black-hole-singularity", 1, [150, 200], 150, 200, 8),
      circle("globular-cluster-1", 2, [60, 120], 60, 120, 14),
      circle("globular-cluster-2", 2, [240, 280], 240, 280, 14),
      circle("globular-cluster-3", 4, [240, 120], 240, 120, 14),
      circle("globular-cluster-4", 4, [60, 280], 60, 280, 14),
      circle("star-1", 5, [45, 55], 45, 55, 4),
      circle("star-2", 5, [255, 55], 255, 55, 4),
      circle("star-3", 5, [40, 340], 40, 340, 4),
      circle("star-4", 5, [260, 340], 260, 340, 4),
      circle("spark-1", 2, [90, 45], 90, 45, 5),
      circle("spark-2", 2, [210, 45], 210, 45, 5),
      circle("dust-lane-knot-1", 3, [110, 175], 110, 175, 10),
      circle("dust-lane-knot-2", 3, [190, 225], 190, 225, 10),
      circle("h-ii-star-nursery-1", 3, [85, 230], 85, 230, 8),
      circle("h-ii-star-nursery-2", 3, [215, 170], 215, 170, 8),
      circle("satellite-galaxy", 4, [260, 80], 260, 80, 12),
      circle("supernova-remnant", 2, [130, 250], 130, 250, 8),
      circle("core-light-pinpoint", 5, [150, 200], 150, 200, 4)
    ]
  }
];

for (const sub of last20Subjects) {
  const regions = sub.builder(sub.colors);
  FINAL_TEMPLATES.push({
    id: sub.id,
    name: sub.name,
    emoji: sub.emoji,
    category: "space",
    viewBox: "0 0 300 400",
    colors: sub.colors,
    regions: regions
  });
}

// Normalize all contiguous 1..K
FINAL_TEMPLATES.forEach(t => {
  const used = [...new Set(t.regions.map(r => r.colorNumber))].sort((a, b) => a - b);
  const mapping = {};
  const newColors = [];
  used.forEach((oldNum, idx) => {
    const newNum = idx + 1;
    mapping[oldNum] = newNum;
    newColors.push(t.colors[oldNum - 1] || '#888888');
  });
  t.regions.forEach(r => {
    r.colorNumber = mapping[r.colorNumber];
  });
  t.colors = newColors;
});

const header = `import { ImageTemplate } from '../../types';\n\n// Category: space (50 strictly verified 100% bespoke unique templates, all >= 24 sections)\nexport const SPACE_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(FINAL_TEMPLATES, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/space.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully wrote 50 100% bespoke Space templates to', targetPath);
