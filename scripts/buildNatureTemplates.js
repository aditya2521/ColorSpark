const fs = require('fs');
const path = require('path');

// Helper to create valid SVG shapes
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

const NATURE_TEMPLATES = [
  // 1. 🪸 Coral Reef Garden
  {
    id: "underwater-garden",
    name: "Coral Reef Garden",
    emoji: "🪸",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00ACC1", "#FF7043", "#FF4081", "#7E57C2",
      "#26A69A", "#FFCA28", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("sea-floor", 9, [150, 375], 150, 375, 120, 20),
      pathShape("coral-branch-center", 3, [150, 230], "M 135,360 L 135,260 C 135,210 110,190 90,180 C 120,170 145,200 150,230 C 155,180 180,160 210,170 C 190,190 165,220 165,260 L 165,360 Z"),
      pathShape("coral-branch-left", 4, [75, 270], "M 55,360 L 55,300 C 55,250 35,230 20,220 C 50,220 75,250 75,290 L 75,360 Z"),
      pathShape("coral-branch-right", 5, [225, 270], "M 245,360 L 245,300 C 245,250 265,230 280,220 C 250,220 225,250 225,290 L 225,360 Z"),
      pathShape("sea-anemone-l", 6, [100, 340], "M 90,365 Q 100,320 110,365"),
      pathShape("sea-anemone-r", 6, [200, 340], "M 190,365 Q 200,320 210,365"),
      circle("sea-star", 7, [150, 350], 150, 350, 14),
      circle("bubble-1", 8, [90, 110], 90, 110, 12),
      circle("bubble-2", 8, [210, 90], 210, 90, 16),
      circle("bubble-3", 8, [150, 60], 150, 60, 8),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 2. ☀️ Sunny Day
  {
    id: "sunny",
    name: "Sunny Day",
    emoji: "☀️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#81D4FA", "#FFD600", "#FF6D00", "#FFAB00",
      "#FFFFFF", "#81C784", "#4CAF50"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("rolling-hills-back", 7, [150, 330], "M 0,320 Q 150,280 300,320 L 300,400 L 0,400 Z"),
      pathShape("rolling-hills-front", 8, [150, 360], "M 0,360 Q 150,320 300,360 L 300,400 L 0,400 Z"),
      // Giant Glowing Sun
      circle("sun-core", 3, [150, 175], 150, 175, 55),
      circle("sun-halo", 5, [150, 175], 150, 175, 75),
      // Sun Rays
      rect("ray-top", 4, [150, 65], 144, 45, 12, 40, 6),
      rect("ray-bottom", 4, [150, 285], 144, 265, 12, 40, 6),
      rect("ray-left", 4, [40, 175], 20, 169, 40, 12, 6),
      rect("ray-right", 4, [260, 175], 240, 169, 40, 12, 6),
      rect("ray-diag-1", 4, [75, 100], 65, 90, 25, 12, 6),
      rect("ray-diag-2", 4, [225, 100], 210, 90, 25, 12, 6),
      // Fluffy Cloud
      pathShape("cloud-left", 6, [70, 235], "M 30,240 C 30,220 50,205 70,205 C 80,195 100,195 110,210 C 125,210 135,225 130,240 Z"),
      circle("sparkle-1", 3, [255, 65], 255, 65, 8)
    ]
  },

  // 3. 🌼 Daisy Flower
  {
    id: "daisy",
    name: "Daisy Flower",
    emoji: "🌼",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#4CAF50", "#2E7D32", "#FFFFFF", "#E0E0E0",
      "#FFD600", "#FF9100", "#FFF9C4"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 2, [150, 290], 144, 185, 12, 200, 6),
      pathShape("leaf-left", 3, [100, 280], "M 144,285 C 100,270 70,290 60,315 C 95,320 130,305 144,285 Z"),
      pathShape("leaf-right", 3, [200, 280], "M 156,285 C 200,270 230,290 240,315 C 205,320 170,305 156,285 Z"),
      // Petals (8 radial petals)
      ellipse("petal-1", 4, [150, 75], 150, 75, 18, 45),
      ellipse("petal-2", 4, [205, 95], 205, 95, 18, 45),
      ellipse("petal-3", 4, [225, 150], 225, 150, 45, 18),
      ellipse("petal-4", 4, [205, 205], 205, 205, 18, 45),
      ellipse("petal-5", 4, [150, 225], 150, 225, 18, 45),
      ellipse("petal-6", 4, [95, 205], 95, 205, 18, 45),
      ellipse("petal-7", 4, [75, 150], 75, 150, 45, 18),
      ellipse("petal-8", 4, [95, 95], 95, 95, 18, 45),
      // Golden Flower Center
      circle("flower-center", 6, [150, 150], 150, 150, 38),
      circle("center-core", 7, [150, 150], 150, 150, 24),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 4. 🌈 Rainbow Sky
  {
    id: "rainbow",
    name: "Rainbow Sky",
    emoji: "🌈",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FF1744", "#FF9100", "#FFEA00", "#00E676",
      "#00B0FF", "#651FFF", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Rainbow Arcs
      pathShape("arc-red", 2, [150, 110], "M 30,280 A 120,120 0 0,1 270,280 L 255,280 A 105,105 0 0,0 45,280 Z"),
      pathShape("arc-orange", 3, [150, 125], "M 45,280 A 105,105 0 0,1 255,280 L 240,280 A 90,90 0 0,0 60,280 Z"),
      pathShape("arc-yellow", 4, [150, 140], "M 60,280 A 90,90 0 0,1 240,280 L 225,280 A 75,75 0 0,0 75,280 Z"),
      pathShape("arc-green", 5, [150, 155], "M 75,280 A 75,75 0 0,1 225,280 L 210,280 A 60,60 0 0,0 90,280 Z"),
      pathShape("arc-blue", 6, [150, 170], "M 90,280 A 60,60 0 0,1 210,280 L 195,280 A 45,45 0 0,0 105,280 Z"),
      pathShape("arc-purple", 7, [150, 185], "M 105,280 A 45,45 0 0,1 195,280 L 180,280 A 30,30 0 0,0 120,280 Z"),
      // Clouds on left and right
      pathShape("cloud-l", 8, [55, 275], "M 20,290 C 20,260 50,240 70,260 C 85,250 105,265 105,290 Z"),
      pathShape("cloud-r", 8, [245, 275], "M 195,290 C 195,260 225,240 245,260 C 260,250 280,265 280,290 Z"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8),
      circle("sparkle-2", 4, [255, 65], 255, 65, 8)
    ]
  },

  // 5. 🌵 Desert Cactus
  {
    id: "cactus",
    name: "Desert Cactus",
    emoji: "🌵",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D7CCC8", "#8D6E63", "#2E7D32", "#4CAF50",
      "#81C784", "#FF4081", "#FFD54F"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("desert-ground", 2, [150, 375], 150, 375, 120, 20),
      // Terracotta Pot
      polygon("pot-base", 3, [150, 340], "95,300 205,300 185,370 115,370"),
      rect("pot-rim", 3, [150, 295], 85, 285, 130, 18, 4),
      // Main Saguaro Stem
      rect("cactus-main", 4, [150, 185], 125, 90, 50, 200, 25),
      rect("cactus-stripe", 5, [150, 185], 142, 90, 16, 200, 8),
      // Left Arm
      pathShape("arm-left", 4, [85, 175], "M 125,190 L 75,190 C 65,190 55,180 55,170 L 55,130 C 55,115 75,115 75,130 L 75,165 L 125,165 Z"),
      // Right Arm
      pathShape("arm-right", 4, [215, 155], "M 175,170 L 225,170 C 235,170 245,160 245,150 L 245,110 C 245,95 225,95 225,110 L 225,145 L 175,145 Z"),
      // Flower on top
      circle("cactus-flower", 7, [150, 75], 150, 75, 16),
      circle("flower-center", 8, [150, 75], 150, 75, 6),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 6. 🌻 Golden Sunflower
  {
    id: "sunflower",
    name: "Golden Sunflower",
    emoji: "🌻",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#2E7D32", "#4CAF50", "#FFD600", "#FFAB00",
      "#5D4037", "#3E2723", "#FFF9C4"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 2, [150, 290], 144, 185, 12, 200, 6),
      pathShape("leaf-left", 3, [95, 275], "M 144,275 C 95,250 65,275 55,305 C 90,315 130,295 144,275 Z"),
      pathShape("leaf-right", 3, [205, 275], "M 156,275 C 205,250 235,275 245,305 C 210,315 170,295 156,275 Z"),
      // Dense Golden Petals (Ring)
      circle("petals-ring-back", 5, [150, 145], 150, 145, 95),
      circle("petals-ring-front", 4, [150, 145], 150, 145, 85),
      // Rich Brown Seed Center
      circle("seed-center-outer", 6, [150, 145], 150, 145, 52),
      circle("seed-center-inner", 7, [150, 145], 150, 145, 36),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 7. 🌌 Northern Lights (Aurora)
  {
    id: "northern-lights",
    name: "Northern Lights",
    emoji: "🌌",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#0D1B2A", "#1B263B", "#00E676", "#00B0FF", "#E040FB",
      "#2E7D32", "#FFFFFF", "#ECEFF1"
    ],
    regions: [
      rect("night-sky", 1, [25, 30], 0, 0, 300, 400),
      // Aurora Waves
      pathShape("aurora-green", 3, [150, 110], "M 0,160 Q 75,60 150,110 Q 225,160 300,80 L 300,160 Q 225,210 150,160 Q 75,110 0,190 Z"),
      pathShape("aurora-blue", 4, [150, 160], "M 0,190 Q 75,110 150,160 Q 225,210 300,160 L 300,210 Q 225,260 150,210 Q 75,160 0,230 Z"),
      pathShape("aurora-purple", 5, [150, 205], "M 0,230 Q 75,160 150,210 Q 225,260 300,210 L 300,250 Q 225,290 150,250 Q 75,210 0,270 Z"),
      // Snowy Mountain Peaks in front
      polygon("mountain-1", 2, [75, 320], "0,380 75,270 150,380"),
      polygon("mountain-peak-1", 8, [75, 290], "60,290 75,270 90,290"),
      polygon("mountain-2", 2, [210, 320], "130,380 210,250 290,380"),
      polygon("mountain-peak-2", 8, [210, 275], "195,275 210,250 225,275"),
      // Pine silhouettes
      polygon("pine-1", 6, [150, 360], "140,380 150,330 160,380"),
      // Stars
      circle("star-1", 7, [45, 60], 45, 60, 4),
      circle("star-2", 7, [255, 60], 255, 60, 4),
      circle("star-3", 7, [180, 45], 180, 45, 3)
    ]
  },

  // 8. 🍁 Autumn Tree
  {
    id: "autumn-tree",
    name: "Autumn Tree",
    emoji: "🍁",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#FF6D00", "#FF3D00", "#FFD600", "#8D6E63",
      "#5D4037", "#D7CCC8", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("ground-shadow", 7, [150, 375], 150, 375, 110, 18),
      // Tree Trunk & Branches
      pathShape("trunk", 6, [150, 275], "M 135,370 L 135,230 L 105,175 L 125,175 L 145,215 L 155,215 L 175,175 L 195,175 L 165,230 L 165,370 Z"),
      // Puffy Foliage Clouds
      circle("foliage-top", 3, [150, 115], 150, 115, 65),
      circle("foliage-left", 2, [105, 160], 105, 160, 55),
      circle("foliage-right", 4, [195, 160], 195, 160, 55),
      circle("foliage-center", 3, [150, 170], 150, 170, 50),
      // Falling Autumn Leaves
      pathShape("leaf-fall-1", 2, [75, 260], "M 75,250 C 65,265 85,275 75,250 Z"),
      pathShape("leaf-fall-2", 4, [225, 275], "M 225,265 C 215,280 235,290 225,265 Z"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 9. 🌊 Waterfall Valley
  {
    id: "waterfall-valley",
    name: "Waterfall Valley",
    emoji: "🌊",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00B0FF", "#00E5FF", "#FFFFFF", "#4CAF50",
      "#2E7D32", "#6D4C41", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Cliff Mountains
      polygon("cliff-left", 7, [60, 230], "0,120 110,120 90,350 0,350"),
      polygon("cliff-right", 7, [240, 230], "190,120 300,120 300,350 210,350"),
      // Greenery atop cliffs
      rect("grass-left", 5, [55, 115], 0, 110, 115, 20, 6),
      rect("grass-right", 5, [245, 115], 185, 110, 115, 20, 6),
      // Cascading Waterfall
      rect("waterfall-body", 2, [150, 235], 110, 120, 80, 230, 8),
      rect("waterfall-highlight", 3, [150, 235], 135, 120, 30, 230, 4),
      // River Pool at Bottom
      ellipse("pool", 2, [150, 360], 150, 360, 120, 30),
      ellipse("pool-foam", 4, [150, 350], 150, 350, 65, 15),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 10. 🌷 Spring Tulip
  {
    id: "tulip",
    name: "Spring Tulip",
    emoji: "🌷",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#2E7D32", "#4CAF50", "#E91E63", "#FF4081",
      "#FF80AB", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 2, [150, 290], 144, 185, 12, 190, 6),
      pathShape("leaf-left", 3, [95, 275], "M 144,320 C 80,290 65,220 75,170 C 85,220 120,280 144,320 Z"),
      pathShape("leaf-right", 3, [205, 275], "M 156,320 C 220,290 235,220 225,170 C 215,220 180,280 156,320 Z"),
      // Tulip Flower Cup
      pathShape("tulip-petal-center", 4, [150, 130], "M 115,190 C 110,110 150,85 150,85 C 150,85 190,110 185,190 Z"),
      pathShape("tulip-petal-left", 5, [110, 145], "M 130,195 C 95,190 75,130 95,95 C 115,125 130,165 130,195 Z"),
      pathShape("tulip-petal-right", 5, [190, 145], "M 170,195 C 205,190 225,130 205,95 C 185,125 170,165 170,195 Z"),
      pathShape("tulip-rim-shade", 6, [150, 175], "M 105,185 Q 150,210 195,185 Q 150,195 105,185 Z"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 11. 🌹 Red Rose
  {
    id: "rose",
    name: "Red Rose",
    emoji: "🌹",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#2E7D32", "#4CAF50", "#B71C1C", "#D32F2F",
      "#E53935", "#FF5252", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 2, [150, 290], 144, 185, 12, 190, 6),
      pathShape("leaf-left", 3, [95, 275], "M 144,275 C 95,250 65,275 55,305 C 90,315 130,295 144,275 Z"),
      pathShape("leaf-right", 3, [205, 275], "M 156,275 C 205,250 235,275 245,305 C 210,315 170,295 156,275 Z"),
      // Rose Petal Layers
      pathShape("rose-outer-cup", 4, [150, 175], "M 80,165 C 75,235 225,235 220,165 Z"),
      pathShape("petal-fold-left", 5, [115, 145], "M 80,165 C 75,105 140,95 150,125 C 130,155 100,165 80,165 Z"),
      pathShape("petal-fold-right", 5, [185, 145], "M 220,165 C 225,105 160,95 150,125 C 170,155 200,165 220,165 Z"),
      // Swirling Center Bud
      circle("rose-center-swirl", 6, [150, 120], 150, 120, 35),
      circle("rose-inner-bud", 7, [150, 120], 150, 120, 20),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 12. 🍀 Four Leaf Clover
  {
    id: "clover",
    name: "Four Leaf Clover",
    emoji: "🍀",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#1B5E20", "#2E7D32", "#4CAF50", "#81C784",
      "#C8E6C9", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Curving Stem
      pathShape("stem", 2, [150, 290], "M 150,175 Q 165,275 125,370 L 137,370 Q 177,275 150,175 Z"),
      // 4 Heart-shaped Leaflets
      pathShape("leaflet-top", 4, [150, 105], "M 150,175 C 115,130 115,80 150,105 C 185,80 185,130 150,175 Z"),
      pathShape("leaflet-bottom", 4, [150, 245], "M 150,175 C 115,220 115,270 150,245 C 185,270 185,220 150,175 Z"),
      pathShape("leaflet-left", 3, [80, 175], "M 150,175 C 105,140 55,140 80,175 C 55,210 105,210 150,175 Z"),
      pathShape("leaflet-right", 3, [220, 175], "M 150,175 C 195,140 245,140 220,175 C 245,210 195,210 150,175 Z"),
      // Highlights
      circle("center-joint", 5, [150, 175], 150, 175, 12),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 13. 🌴 Tropical Palm Island
  {
    id: "palm-island",
    name: "Tropical Island",
    emoji: "🌴",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00ACC1", "#FFE082", "#FFD54F", "#8D6E63",
      "#2E7D32", "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Ocean Waves
      rect("ocean", 2, [150, 345], 0, 320, 300, 80),
      // Sandy Island Mound
      ellipse("sand-island", 3, [150, 335], 150, 335, 110, 25),
      // Curved Palm Tree Trunk
      pathShape("palm-trunk", 5, [140, 210], "M 155,335 C 185,250 160,165 140,110 L 152,110 C 172,165 197,250 167,335 Z"),
      // Palm Fronds
      pathShape("frond-left-1", 6, [75, 105], "M 145,110 C 100,90 50,110 30,140 C 65,130 115,120 145,110 Z"),
      pathShape("frond-left-2", 7, [85, 75], "M 145,110 C 105,60 65,65 40,85 C 75,85 115,95 145,110 Z"),
      pathShape("frond-right-1", 6, [215, 105], "M 145,110 C 190,90 240,110 260,140 C 225,130 175,120 145,110 Z"),
      pathShape("frond-right-2", 7, [205, 75], "M 145,110 C 185,60 225,65 250,85 C 215,85 175,95 145,110 Z"),
      circle("coconut-1", 5, [140, 115], 140, 115, 8),
      circle("coconut-2", 5, [152, 115], 152, 115, 8),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 14. 🍄 Forest Mushroom
  {
    id: "mushroom",
    name: "Magic Forest Mushroom",
    emoji: "🍄",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#D32F2F", "#B71C1C", "#FFFFFF", "#FFF9C4",
      "#8D6E63", "#2E7D32", "#4CAF50"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("mossy-ground", 7, [150, 375], 150, 375, 110, 18),
      // Mushroom Stem
      pathShape("stem", 5, [150, 275], "M 125,185 C 115,285 95,355 120,370 L 180,370 C 205,355 185,285 175,185 Z"),
      // Big Red Mushroom Dome Cap
      pathShape("mushroom-cap", 2, [150, 135], "M 45,185 C 45,75 255,75 255,185 Z"),
      pathShape("cap-underbelly", 3, [150, 185], "M 45,185 Q 150,215 255,185 Q 150,195 45,185 Z"),
      // White Spots
      circle("spot-center", 4, [150, 125], 150, 125, 18),
      circle("spot-left-1", 4, [95, 135], 95, 135, 14),
      circle("spot-right-1", 4, [205, 135], 205, 135, 14),
      circle("spot-top", 4, [150, 85], 150, 85, 12),
      circle("spot-left-2", 4, [70, 170], 70, 170, 10),
      circle("spot-right-2", 4, [230, 170], 230, 170, 10),
      // Grass tufts
      pathShape("grass-tuft", 8, [150, 365], "M 135,370 Q 150,340 165,370"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 15. 🌲 Pine Forest
  {
    id: "pine-forest",
    name: "Pine Forest",
    emoji: "🌲",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F2F1", "#1B5E20", "#2E7D32", "#388E3C", "#5D4037",
      "#D7CCC8", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("snow-ground", 6, [150, 375], 150, 375, 110, 18),
      rect("trunk", 5, [150, 345], 142, 310, 16, 60, 4),
      // Tiered Evergreen Pine Layers
      polygon("pine-tier-1", 2, [150, 115], "150,60 190,140 110,140"),
      polygon("pine-tier-2", 3, [150, 180], "150,120 215,210 85,210"),
      polygon("pine-tier-3", 4, [150, 255], "150,180 245,295 55,295"),
      // Snow Caps on Tiers
      polygon("snow-tier-1", 7, [150, 85], "150,60 165,95 135,95"),
      polygon("snow-tier-2", 7, [150, 145], "150,120 175,160 125,160"),
      polygon("snow-tier-3", 7, [150, 205], "150,180 185,225 115,225"),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 16. 🏔️ Snow Mountain
  {
    id: "snowy-mountain",
    name: "Snow Mountain",
    emoji: "🏔️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#546E7A", "#37474F", "#FFFFFF", "#81D4FA",
      "#2E7D32", "#1B5E20"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      // Big Majestic Mountain Peak
      polygon("mountain-body", 2, [150, 240], "150,90 275,340 25,340"),
      polygon("mountain-shadow-side", 3, [195, 255], "150,90 275,340 165,340"),
      // Snow Cap Top
      polygon("snow-cap", 4, [150, 140], "150,90 190,175 165,160 150,185 135,160 110,175"),
      // Foothills & Pines
      rect("foothills", 6, [150, 365], 0, 330, 300, 70),
      polygon("pine-1", 7, [70, 345], "60,370 70,320 80,370"),
      polygon("pine-2", 7, [230, 345], "220,370 230,320 240,370"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 17. 🌊 Ocean Wave
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    emoji: "🌊",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#0288D1", "#0277BD", "#01579B", "#00E5FF",
      "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      // Giant Curling Hokusai-style Ocean Wave
      pathShape("wave-base", 4, [150, 280], "M 0,220 C 80,220 140,290 300,240 L 300,400 L 0,400 Z"),
      pathShape("wave-body", 3, [150, 220], "M 0,240 C 80,180 180,110 240,110 C 260,110 270,130 250,160 C 230,190 190,200 160,200 C 100,200 60,340 0,340 Z"),
      pathShape("wave-crest-curl", 5, [210, 140], "M 180,125 C 220,110 255,115 245,150 C 235,175 205,185 180,185 Z"),
      // White Foam Spray
      circle("foam-1", 6, [245, 115], 245, 115, 14),
      circle("foam-2", 6, [260, 135], 260, 135, 12),
      circle("foam-3", 6, [230, 95], 230, 95, 10),
      circle("foam-4", 6, [210, 90], 210, 90, 8),
      pathShape("wave-foam-lines", 6, [90, 250], "M 30,270 Q 90,230 150,240"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 18. 🌋 Volcano Island
  {
    id: "volcano-peak",
    name: "Volcano Island",
    emoji: "🌋",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#4E342E", "#3E2723", "#D50000", "#FF6D00",
      "#FFD600", "#00ACC1", "#78909C"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      rect("ocean", 7, [150, 365], 0, 330, 300, 70),
      // Volcano Mountain Cone
      polygon("volcano-cone", 2, [150, 250], "110,150 190,150 260,345 40,345"),
      polygon("volcano-shadow", 3, [195, 260], "150,150 190,150 260,345 185,345"),
      // Crater
      ellipse("crater-rim", 3, [150, 150], 150, 150, 40, 12),
      ellipse("magma-pool", 4, [150, 150], 150, 150, 30, 8),
      // Flowing Lava Streams
      pathShape("lava-stream-1", 5, [130, 220], "M 140,155 Q 125,220 115,290"),
      pathShape("lava-stream-2", 6, [170, 220], "M 160,155 Q 175,220 185,290"),
      // Smoke Plume
      circle("smoke-1", 8, [150, 95], 150, 95, 35),
      circle("smoke-2", 8, [125, 60], 125, 60, 25),
      circle("smoke-3", 8, [175, 60], 175, 60, 25),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 19. 🌅 Golden Sunset
  {
    id: "golden-sunset",
    name: "Golden Sunset",
    emoji: "🌅",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FF6D00", "#FFAB00", "#FFD600", "#D50000",
      "#00838F", "#006064", "#FFFFFF"
    ],
    regions: [
      rect("sky-gradient-top", 2, [150, 60], 0, 0, 300, 120),
      rect("sky-gradient-mid", 3, [150, 160], 0, 120, 300, 100),
      // Setting Sun on Horizon
      circle("setting-sun", 4, [150, 220], 150, 220, 55),
      // Ocean Horizon
      rect("ocean-body", 6, [150, 310], 0, 220, 300, 180),
      // Sun Reflection Shimmer on Water
      polygon("sun-reflection", 4, [150, 305], "125,220 175,220 205,390 95,390"),
      pathShape("water-ripple-1", 8, [150, 260], "M 110,260 L 190,260"),
      pathShape("water-ripple-2", 8, [150, 310], "M 90,310 L 210,310"),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 20. 🪷 Sacred Water Lotus
  {
    id: "sacred-lotus",
    name: "Water Lotus",
    emoji: "🪷",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00ACC1", "#2E7D32", "#4CAF50", "#F48FB1",
      "#EC407A", "#FFD54F", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("water-pool", 2, [150, 345], 150, 345, 120, 35),
      // Round Green Lily Pad
      ellipse("lily-pad", 3, [150, 320], 150, 320, 105, 35),
      // Lotus Flower Petals
      pathShape("petal-center", 5, [150, 205], "M 150,110 C 130,165 130,225 150,250 C 170,225 170,165 150,110 Z"),
      pathShape("petal-left-1", 6, [115, 215], "M 150,250 C 110,240 85,185 105,145 C 125,185 140,225 150,250 Z"),
      pathShape("petal-right-1", 6, [185, 215], "M 150,250 C 190,240 215,185 195,145 C 175,185 160,225 150,250 Z"),
      pathShape("petal-left-2", 5, [90, 245], "M 145,250 C 95,250 55,220 75,190 C 100,215 130,240 145,250 Z"),
      pathShape("petal-right-2", 5, [210, 245], "M 155,250 C 205,250 245,220 225,190 C 200,215 170,240 155,250 Z"),
      circle("lotus-core", 7, [150, 235], 150, 235, 15),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 21. 🍁 Autumn Maple Leaf
  {
    id: "maple-leaf",
    name: "Maple Leaf",
    emoji: "🍁",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D50000", "#FF6D00", "#FFD600", "#8D6E63",
      "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("leaf-shadow", 7, [150, 375], 150, 375, 95, 16),
      rect("leaf-petiole-stem", 5, [150, 325], 144, 250, 12, 110, 6),
      // 5-Point Iconic Maple Leaf Blade
      pathShape("maple-blade", 2, [150, 175], "M 150,60 L 165,110 L 195,100 L 180,135 L 235,135 L 210,165 L 250,195 L 195,205 L 180,245 L 150,225 L 120,245 L 105,205 L 50,195 L 90,165 L 65,135 L 120,135 L 105,100 L 135,110 Z"),
      // Inner Leaflet Veins & Warm Highlights
      pathShape("vein-center", 3, [150, 145], "M 150,225 L 150,75"),
      pathShape("vein-left", 4, [105, 170], "M 150,225 L 75,160"),
      pathShape("vein-right", 4, [195, 170], "M 150,225 L 225,160"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 22. 💐 Flower Bouquet
  {
    id: "flower-bouquet",
    name: "Flower Bouquet",
    emoji: "💐",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FCE4EC", "#E91E63", "#FF4081", "#FFD54F", "#00E5FF",
      "#76FF03", "#2E7D32", "#D7CCC8", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Wrapping Paper Cone
      polygon("bouquet-wrap", 8, [150, 310], "90,200 210,200 165,375 135,375"),
      // Ribbon Bow
      circle("ribbon-knot", 2, [150, 275], 150, 275, 12),
      // Flowers Cluster
      circle("rose-pink", 3, [150, 135], 150, 135, 35),
      circle("daisy-yellow", 4, [100, 160], 100, 160, 30),
      circle("flower-cyan", 5, [200, 160], 200, 160, 30),
      circle("flower-top-1", 2, [115, 95], 115, 95, 25),
      circle("flower-top-2", 4, [185, 95], 185, 95, 25),
      // Leaves
      pathShape("leaf-l", 7, [60, 135], "M 85,150 C 50,130 55,100 80,120 Z"),
      pathShape("leaf-r", 7, [240, 135], "M 215,150 C 250,130 245,100 220,120 Z"),
      circle("sparkle-1", 9, [45, 65], 45, 65, 8)
    ]
  },

  // 23. 🪴 Green Succulent
  {
    id: "succulent-pot",
    name: "Green Succulent",
    emoji: "🪴",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#F1F8E9", "#2E7D32", "#4CAF50", "#81C784", "#A5D6A7",
      "#8D6E63", "#D7CCC8", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pot-shadow", 7, [150, 375], 150, 375, 95, 16),
      // Modern Geometric Ceramic Planter Pot
      polygon("planter-pot", 6, [150, 305], "90,240 210,240 185,360 115,360"),
      // Rosette Succulent Leaves
      circle("leaf-center", 5, [150, 175], 150, 175, 20),
      ellipse("leaf-n", 4, [150, 125], 150, 125, 20, 35),
      ellipse("leaf-s", 4, [150, 215], 150, 215, 20, 35),
      ellipse("leaf-w", 3, [105, 175], 105, 175, 35, 20),
      ellipse("leaf-e", 3, [195, 175], 195, 175, 35, 20),
      ellipse("leaf-nw", 2, [115, 135], 115, 135, 25, 25),
      ellipse("leaf-ne", 2, [185, 135], 185, 135, 25, 25),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 24. ⚡ Lightning Storm
  {
    id: "lightning-storm",
    name: "Lightning Storm",
    emoji: "⚡",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#1A237E", "#283593", "#4527A0", "#FFEA00", "#FFD600",
      "#FFFFFF", "#78909C"
    ],
    regions: [
      rect("night-sky", 1, [25, 30], 0, 0, 300, 400),
      // Dark Storm Clouds
      circle("cloud-1", 3, [95, 110], 95, 110, 45),
      circle("cloud-2", 2, [150, 95], 150, 95, 55),
      circle("cloud-3", 3, [205, 110], 205, 110, 45),
      circle("cloud-4", 2, [150, 135], 150, 135, 45),
      // Giant Glowing Lightning Bolt
      polygon("lightning-bolt", 4, [150, 250], "165,130 115,230 155,230 130,350 200,215 160,215"),
      // Rain Streaks
      pathShape("rain-1", 7, [75, 260], "M 75,230 L 60,290"),
      pathShape("rain-2", 7, [225, 260], "M 225,230 L 210,290"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 25. 🌾 Golden Wheat
  {
    id: "wheat-field",
    name: "Wheat Field",
    emoji: "🌾",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FFD54F", "#FFA000", "#FF8F00", "#8D6E63",
      "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 4, [150, 290], 145, 150, 10, 230, 5),
      // Alternating Golden Grain Kernels
      ellipse("kernel-top", 2, [150, 95], 150, 95, 14, 25),
      ellipse("kernel-l1", 3, [125, 135], 125, 135, 14, 25),
      ellipse("kernel-r1", 2, [175, 135], 175, 135, 14, 25),
      ellipse("kernel-l2", 3, [125, 185], 125, 185, 14, 25),
      ellipse("kernel-r2", 2, [175, 185], 175, 185, 14, 25),
      ellipse("kernel-l3", 3, [125, 235], 125, 235, 14, 25),
      ellipse("kernel-r3", 2, [175, 235], 175, 235, 14, 25),
      // Awn Whiskers (Beards)
      pathShape("awn-top", 4, [150, 55], "M 150,80 L 150,40"),
      pathShape("awn-l", 4, [95, 100], "M 120,120 L 85,85"),
      pathShape("awn-r", 4, [205, 100], "M 180,120 L 215,85"),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 26. 🎋 Bamboo Grove
  {
    id: "bamboo-grove",
    name: "Bamboo Grove",
    emoji: "🎋",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#2E7D32", "#4CAF50", "#81C784", "#C8E6C9",
      "#FFD54F", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Center Bamboo Stalk
      rect("stalk-c1", 3, [150, 95], 138, 40, 24, 90, 6),
      rect("stalk-c2", 2, [150, 195], 138, 140, 24, 90, 6),
      rect("stalk-c3", 3, [150, 295], 138, 240, 24, 140, 6),
      // Bamboo Joints (Nodes)
      rect("node-1", 4, [150, 135], 134, 130, 32, 10, 3),
      rect("node-2", 4, [150, 235], 134, 230, 32, 10, 3),
      // Bamboo Leaves
      pathShape("leaf-1", 2, [95, 125], "M 135,135 C 90,110 65,130 55,150 C 85,150 115,140 135,135 Z"),
      pathShape("leaf-2", 3, [205, 125], "M 165,135 C 210,110 235,130 245,150 C 215,150 185,140 165,135 Z"),
      pathShape("leaf-3", 2, [215, 225], "M 165,235 C 220,210 245,230 255,250 C 225,250 195,240 165,235 Z"),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 27. 🌿 Green Fern
  {
    id: "fern-gully",
    name: "Green Fern",
    emoji: "🌿",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#1B5E20", "#2E7D32", "#4CAF50", "#81C784",
      "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("fern-rachis-stem", 2, [150, 220], "M 150,380 Q 165,220 145,50"),
      // Pinnule Leaflets
      ellipse("pinna-top", 4, [145, 60], 145, 60, 8, 16),
      ellipse("pinna-l1", 3, [120, 100], 120, 100, 24, 10),
      ellipse("pinna-r1", 4, [175, 100], 175, 100, 24, 10),
      ellipse("pinna-l2", 3, [110, 150], 110, 150, 32, 12),
      ellipse("pinna-r2", 4, [185, 150], 185, 150, 32, 12),
      ellipse("pinna-l3", 3, [100, 205], 100, 205, 40, 14),
      ellipse("pinna-r3", 4, [195, 205], 195, 205, 40, 14),
      ellipse("pinna-l4", 3, [95, 265], 95, 265, 45, 16),
      ellipse("pinna-r4", 4, [205, 265], 205, 265, 45, 16),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 28. 🏵️ Golden Marigold
  {
    id: "golden-marigold",
    name: "Golden Marigold",
    emoji: "🏵️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#E65100", "#FF6D00", "#FF9100", "#FFD600",
      "#2E7D32", "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 6, [150, 290], 144, 185, 12, 190, 6),
      // Concentric Ruffled Marigold Rosette Petals
      circle("marigold-outer", 2, [150, 150], 150, 150, 95),
      circle("marigold-mid", 3, [150, 150], 150, 150, 75),
      circle("marigold-inner", 4, [150, 150], 150, 150, 52),
      circle("marigold-center", 5, [150, 150], 150, 150, 28),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 29. 🪵 Birch Wood Logs
  {
    id: "wood-logs",
    name: "Birch Wood Logs",
    emoji: "🪵",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D7CCC8", "#8D6E63", "#5D4037", "#3E2723",
      "#2E7D32", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("ground-shadow", 7, [150, 365], 150, 365, 110, 18),
      // Stacked Wood Logs
      rect("log-body-1", 2, [150, 290], 65, 250, 170, 75, 12),
      ellipse("log-end-1", 3, [70, 287], 70, 287, 24, 36),
      ellipse("log-core-1", 4, [70, 287], 70, 287, 12, 18),
      // Bark markings
      pathShape("bark-stripe-1", 5, [140, 275], "M 130,260 L 150,265"),
      pathShape("bark-stripe-2", 5, [180, 295], "M 170,285 L 195,290"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 30. 🪨 River Zen Stones
  {
    id: "river-stones",
    name: "River Zen Stones",
    emoji: "🪨",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00ACC1", "#78909C", "#546E7A", "#37474F",
      "#263238", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("water-ripples", 2, [150, 360], 150, 360, 120, 25),
      // Balanced Stack of 3 Smooth River Pebbles
      ellipse("stone-bottom", 6, [150, 320], 150, 320, 105, 42),
      ellipse("stone-mid", 4, [150, 240], 150, 240, 80, 34),
      ellipse("stone-top", 3, [150, 170], 150, 170, 55, 26),
      ellipse("stone-top-shine", 7, [140, 160], 140, 160, 25, 10),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 31. 🌺 Tropical Hibiscus
  {
    id: "hibiscus-bloom",
    name: "Tropical Hibiscus",
    emoji: "🌺",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#D81B60", "#E91E63", "#FF4081", "#FFD54F",
      "#2E7D32", "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // 5 Big Flared Hibiscus Petals
      circle("petal-top", 3, [150, 110], 150, 110, 45),
      circle("petal-left", 3, [95, 175], 95, 175, 45),
      circle("petal-right", 3, [205, 175], 205, 175, 45),
      circle("petal-bot-l", 4, [110, 240], 110, 240, 45),
      circle("petal-bot-r", 4, [190, 240], 190, 240, 45),
      // Crimson Flower Throat
      circle("flower-throat", 2, [150, 185], 150, 185, 32),
      // Long Stamen Pistil with Yellow Anthers
      rect("stamen-column", 5, [150, 135], 146, 75, 8, 110, 4),
      circle("anther-1", 5, [135, 80], 135, 80, 5),
      circle("anther-2", 5, [165, 80], 165, 80, 5),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 32. 🌪️ Wild Wind Tornado
  {
    id: "tornado-valley",
    name: "Wild Wind Valley",
    emoji: "🌪️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#ECEFF1", "#90A4AE", "#607D8B", "#455A64", "#37474F",
      "#8D6E63", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("ground-dust", 6, [150, 375], 150, 375, 110, 18),
      // Funnel Funnel Tiers (Wide Top to Pointy Tip)
      ellipse("funnel-top", 2, [150, 90], 150, 90, 115, 35),
      ellipse("funnel-tier-2", 3, [150, 150], 150, 150, 85, 28),
      ellipse("funnel-tier-3", 4, [150, 215], 150, 215, 60, 22),
      ellipse("funnel-tier-4", 5, [150, 280], 150, 280, 40, 16),
      circle("funnel-tip", 5, [150, 345], 150, 345, 14),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 33. ❄️ Frost Snowflake
  {
    id: "crystal-snowflake",
    name: "Frost Snowflake",
    emoji: "❄️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#00B0FF", "#00E5FF", "#80D8FF", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // 6-Fold Hexagonal Snowflake Arms
      rect("arm-vertical", 2, [150, 200], 144, 70, 12, 260, 6),
      rect("arm-diag-1", 2, [150, 200], 144, 70, 12, 260, 6),
      rect("arm-diag-2", 2, [150, 200], 144, 70, 12, 260, 6),
      // Branch Prongs
      polygon("prong-top", 3, [150, 100], "150,75 170,110 130,110"),
      polygon("prong-bot", 3, [150, 300], "150,325 170,290 130,290"),
      // Center Crystal Hexagon
      circle("crystal-core", 5, [150, 200], 150, 200, 35),
      circle("crystal-inner", 4, [150, 200], 150, 200, 18),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 34. 🌧️ Spring Rain Cloud
  {
    id: "rainy-cloud",
    name: "Spring Rain",
    emoji: "🌧️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#ECEFF1", "#78909C", "#546E7A", "#00B0FF", "#00E5FF",
      "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Puffy Cloud Body
      circle("cloud-mid", 2, [150, 140], 150, 140, 60),
      circle("cloud-left", 3, [95, 160], 95, 160, 45),
      circle("cloud-right", 3, [205, 160], 205, 160, 45),
      // Rain Drops
      pathShape("raindrop-1", 4, [85, 275], "M 85,250 C 75,270 95,270 85,250 Z"),
      pathShape("raindrop-2", 4, [150, 260], "M 150,235 C 140,255 160,255 150,235 Z"),
      pathShape("raindrop-3", 4, [215, 275], "M 215,250 C 205,270 225,270 215,250 Z"),
      pathShape("raindrop-4", 5, [115, 330], "M 115,305 C 105,325 125,325 115,305 Z"),
      pathShape("raindrop-5", 5, [185, 330], "M 185,305 C 175,325 195,325 185,305 Z"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 35. 🍃 Forest Leaves
  {
    id: "floating-leaves",
    name: "Forest Leaves",
    emoji: "🍃",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#2E7D32", "#4CAF50", "#81C784", "#00E5FF",
      "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Big Fluttering Leaf 1
      pathShape("leaf-main", 2, [130, 165], "M 60,220 C 60,110 200,110 200,110 C 200,220 60,220 60,220 Z"),
      pathShape("leaf-vein-1", 4, [130, 165], "M 60,220 Q 130,165 200,110"),
      // Smaller Leaf 2
      pathShape("leaf-secondary", 3, [205, 275], "M 155,310 C 155,230 255,230 255,230 C 255,310 155,310 155,310 Z"),
      // Wind Swirl Lines
      pathShape("wind-swirl", 5, [150, 240], "M 40,260 Q 150,220 260,260"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 36. 🏝️ Treasure Island
  {
    id: "desert-island",
    name: "Treasure Atoll",
    emoji: "🏝️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00BCD4", "#FFE082", "#FFD54F", "#8D6E63",
      "#2E7D32", "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("lagoon", 2, [150, 335], 0, 300, 300, 100),
      ellipse("atoll-sand", 3, [150, 315], 150, 315, 115, 30),
      // Twin Palm Trees
      pathShape("palm-1", 5, [125, 210], "M 130,315 Q 110,210 120,135"),
      circle("fronds-1", 6, [120, 135], 120, 135, 45),
      pathShape("palm-2", 5, [185, 220], "M 175,315 Q 200,225 185,150"),
      circle("fronds-2", 7, [185, 150], 185, 150, 40),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 37. ⛰️ Alpine Ridge
  {
    id: "mountain-ridge",
    name: "Alpine Ridge",
    emoji: "⛰️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#78909C", "#455A64", "#2E7D32", "#81C784",
      "#FFFFFF"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      // Ridge Peaks
      polygon("peak-left", 3, [90, 240], "0,340 90,130 180,340"),
      polygon("peak-right", 2, [210, 240], "120,340 210,160 300,340"),
      polygon("valley-green", 4, [150, 365], "0,320 300,320 300,400 0,400"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 38. 🏞️ National Park Canyon
  {
    id: "national-park",
    name: "Emerald Canyon",
    emoji: "🏞️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F2F1", "#8D6E63", "#5D4037", "#00ACC1", "#2E7D32",
      "#FFFFFF"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("canyon-wall-l", 2, [60, 220], "0,90 120,90 80,350 0,350"),
      polygon("canyon-wall-r", 3, [240, 220], "180,90 300,90 300,350 220,350"),
      // Canyon River
      polygon("river-flowing", 4, [150, 345], "100,180 200,180 260,400 40,400"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 39. 🪻 Lavender Valley
  {
    id: "lavender-field",
    name: "Lavender Valley",
    emoji: "🪻",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#F3E5F5", "#AB47BC", "#8E24AA", "#6A1B9A", "#2E7D32",
      "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stem", 5, [150, 290], 144, 150, 12, 230, 6),
      // Lavender Floral Spike Clusters
      circle("floret-1", 2, [150, 90], 150, 90, 22),
      circle("floret-2", 3, [130, 130], 130, 130, 22),
      circle("floret-3", 3, [170, 130], 170, 130, 22),
      circle("floret-4", 4, [130, 175], 130, 175, 24),
      circle("floret-5", 4, [170, 175], 170, 175, 24),
      circle("floret-6", 2, [130, 220], 130, 220, 24),
      circle("floret-7", 2, [170, 220], 170, 220, 24),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 40. 🌳 Mighty Oak Tree
  {
    id: "oak-tree",
    name: "Mighty Oak",
    emoji: "🌳",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#1B5E20", "#2E7D32", "#4CAF50", "#5D4037",
      "#8D6E63", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("grass-shadow", 4, [150, 375], 150, 375, 110, 18),
      pathShape("oak-trunk", 5, [150, 285], "M 130,370 L 130,220 L 110,180 L 125,180 L 145,210 L 155,210 L 175,180 L 190,180 L 170,220 L 170,370 Z"),
      // Big Lush Round Green Canopy
      circle("canopy-top", 2, [150, 120], 150, 120, 75),
      circle("canopy-l", 3, [95, 160], 95, 160, 60),
      circle("canopy-r", 3, [205, 160], 205, 160, 60),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 41. 🏜️ Sahara Sand Dunes
  {
    id: "desert-dunes",
    name: "Sahara Dunes",
    emoji: "🏜️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FFD54F", "#FFA000", "#FF8F00", "#FF6D00",
      "#FFFFFF"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      circle("sun", 4, [220, 90], 220, 90, 40),
      // Sweeping Sand Dunes
      pathShape("dune-back", 2, [150, 230], "M 0,190 Q 150,270 300,180 L 300,400 L 0,400 Z"),
      pathShape("dune-front", 3, [150, 310], "M 0,280 Q 150,220 300,320 L 300,400 L 0,400 Z"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 42. 🌫️ Misty Mountains
  {
    id: "misty-valley",
    name: "Misty Mountains",
    emoji: "🌫️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#ECEFF1", "#90A4AE", "#607D8B", "#455A64", "#FFFFFF"
    ],
    regions: [
      rect("sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("mountain-silhouette-1", 3, [100, 230], "0,350 100,140 200,350"),
      polygon("mountain-silhouette-2", 4, [200, 245], "120,350 200,170 280,350"),
      ellipse("fog-layer-1", 5, [150, 260], 150, 260, 130, 35),
      ellipse("fog-layer-2", 5, [150, 340], 150, 340, 140, 40),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8)
    ]
  },

  // 43. ⛅ Morning Sun Cloud
  {
    id: "sun-behind-cloud",
    name: "Morning Sun Cloud",
    emoji: "⛅",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FFD600", "#FFAB00", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      // Glowing Sun Peeking
      circle("sun", 2, [120, 145], 120, 145, 55),
      // Big Soft Cloud
      circle("cloud-mid", 4, [160, 215], 160, 215, 65),
      circle("cloud-left", 4, [105, 235], 105, 235, 45),
      circle("cloud-right", 4, [215, 235], 215, 235, 45),
      circle("sparkle-1", 3, [45, 65], 45, 65, 8)
    ]
  },

  // 44. 🌤️ Breezy Sky
  {
    id: "partly-cloudy",
    name: "Breezy Sky",
    emoji: "🌤️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#FFD600", "#FFFFFF", "#80DEEA", "#00ACC1"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("sun", 2, [190, 130], 190, 130, 50),
      circle("cloud", 3, [125, 195], 125, 195, 60),
      pathShape("wind-lines", 4, [150, 290], "M 50,280 Q 150,260 250,280"),
      circle("sparkle-1", 2, [45, 65], 45, 65, 8)
    ]
  },

  // 45. 🌦️ Sun Shower
  {
    id: "sun-shower",
    name: "Sun Shower",
    emoji: "🌦️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FFD600", "#FFFFFF", "#00B0FF", "#00E5FF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("sun", 2, [105, 130], 105, 130, 50),
      circle("cloud", 3, [165, 190], 165, 190, 60),
      pathShape("rain-1", 4, [130, 290], "M 130,270 L 120,310"),
      pathShape("rain-2", 4, [170, 290], "M 170,270 L 160,310"),
      pathShape("rain-3", 5, [210, 290], "M 210,270 L 200,310"),
      circle("sparkle-1", 2, [45, 65], 45, 65, 8)
    ]
  },

  // 46. ⛈️ Thunderstorm
  {
    id: "thunderstorm",
    name: "Thunderstorm",
    emoji: "⛈️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#1A237E", "#37474F", "#FFEA00", "#00E5FF", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("dark-cloud", 2, [150, 140], 150, 140, 65),
      polygon("lightning", 3, [150, 255], "160,165 125,235 155,235 135,320 185,225 155,225"),
      pathShape("rain", 4, [85, 275], "M 85,250 L 70,300"),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8)
    ]
  },

  // 47. 🌨️ Arctic Blizzard
  {
    id: "snowstorm",
    name: "Arctic Blizzard",
    emoji: "🌨️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#ECEFF1", "#78909C", "#FFFFFF", "#81D4FA", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      circle("snow-cloud", 2, [150, 140], 150, 140, 65),
      circle("snowflake-1", 3, [105, 240], 105, 240, 14),
      circle("snowflake-2", 3, [150, 275], 150, 275, 16),
      circle("snowflake-3", 3, [195, 240], 195, 240, 14),
      circle("sparkle-1", 3, [45, 65], 45, 65, 8)
    ]
  },

  // 48. 🌬️ Gentle Wind Gust
  {
    id: "wind-gust",
    name: "Gentle Breeze",
    emoji: "🌬️",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#81D4FA", "#00B0FF", "#4CAF50", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("gust-curve-1", 2, [150, 150], "M 40,150 Q 150,110 260,150 Q 230,190 200,165"),
      pathShape("gust-curve-2", 3, [150, 220], "M 60,220 Q 170,180 270,220 Q 240,260 210,235"),
      pathShape("flying-leaf", 4, [115, 275], "M 115,260 C 95,280 135,290 115,260 Z"),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8)
    ]
  },

  // 49. 🌸 Cherry Blossom Sakura
  {
    id: "mossy-boulder",
    name: "Cherry Blossom",
    emoji: "🌸",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#F8BBD0", "#F48FB1", "#EC407A", "#FFD54F",
      "#8D6E63", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("branch", 6, [150, 240], "M 40,290 Q 150,260 260,210"),
      // 5 Soft Pink Sakura Petals
      circle("petal-1", 2, [150, 120], 150, 120, 32),
      circle("petal-2", 2, [190, 155], 190, 155, 32),
      circle("petal-3", 3, [175, 205], 175, 205, 32),
      circle("petal-4", 3, [125, 205], 125, 205, 32),
      circle("petal-5", 2, [110, 155], 110, 155, 32),
      circle("flower-center", 4, [150, 165], 150, 165, 16),
      circle("center-dot", 5, [150, 165], 150, 165, 8),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 50. 🪷 Water Lily Pond
  {
    id: "water-lily-pond",
    name: "Lily Pad Pond",
    emoji: "🪷",
    category: "nature",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#00ACC1", "#2E7D32", "#4CAF50", "#F8BBD0",
      "#EC407A", "#FFD54F", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pond-water", 2, [150, 260], 150, 260, 125, 95),
      ellipse("lily-pad-1", 3, [105, 280], 105, 280, 55, 25),
      ellipse("lily-pad-2", 4, [195, 280], 195, 280, 55, 25),
      // Water Lily Bloom
      circle("water-lily", 5, [150, 210], 150, 210, 45),
      circle("lily-inner", 6, [150, 210], 150, 210, 28),
      circle("lily-core", 7, [150, 210], 150, 210, 14),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  }
];

const header = `import { ImageTemplate } from '../../types';\n\n// Category: nature (50 strictly verified unique templates)\nexport const NATURE_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(NATURE_TEMPLATES, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/nature.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and wrote 50 nature templates to', targetPath);
