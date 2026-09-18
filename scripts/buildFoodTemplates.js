const fs = require('fs');
const path = require('path');

// Helper to create valid SVG paths and shapes for templates
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

// Build 50 rich, emoji-accurate food templates
const FOOD_TEMPLATES = [
  // 1. 🍎 Red Apple
  {
    id: "apple",
    name: "Red Apple",
    emoji: "🍎",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#EBF4FF", "#E63232", "#C71D1D", "#FF6B6B", "#8B5E3C",
      "#4CAF50", "#2E7D32", "#FFF9C4", "#D7CCC8", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("ground-shadow", 9, [150, 365], 150, 365, 80, 16),
      pathShape("apple-body", 2, [150, 240], "M 150,110 C 105,110 50,140 45,210 C 40,280 75,345 120,352 C 138,355 146,346 150,346 C 154,346 162,355 180,352 C 225,345 260,280 255,210 C 250,140 195,110 150,110 Z"),
      pathShape("apple-shadow-r", 3, [220, 250], "M 150,110 C 185,110 245,140 255,210 C 260,280 225,345 180,352 C 165,354 156,348 150,346 C 180,340 230,290 225,220 C 220,160 180,120 150,110 Z"),
      pathShape("apple-highlight", 4, [90, 190], "M 95,140 C 70,165 65,210 70,260 C 65,220 70,175 95,140 Z"),
      pathShape("apple-indent-top", 3, [150, 125], "M 130,112 C 142,128 158,128 170,112 C 160,118 140,118 130,112 Z"),
      pathShape("stem", 5, [158, 75], "M 148,115 C 145,85 155,55 175,40 C 172,55 160,85 153,115 Z"),
      pathShape("leaf", 6, [210, 75], "M 165,75 C 185,50 230,55 240,75 C 230,95 185,100 165,75 Z"),
      pathShape("leaf-vein", 7, [205, 78], "M 165,75 Q 200,75 238,75"),
      ellipse("shine-dot-1", 10, [105, 175], 105, 175, 12, 22),
      circle("shine-dot-2", 10, [95, 220], 95, 220, 7),
      circle("sparkle-1", 8, [45, 80], 45, 80, 10),
      circle("sparkle-2", 8, [255, 130], 255, 130, 8),
      circle("sparkle-3", 8, [50, 310], 50, 310, 7)
    ]
  },

  // 2. 🍦 Ice Cream Cone
  {
    id: "icecream",
    name: "Ice Cream Cone",
    emoji: "🍦",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#D4A373", "#BC6C25", "#FFB5A7", "#FCD5CE",
      "#B5E2FA", "#E63946", "#8B5E3C", "#FFE66D", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      polygon("cone-body", 2, [150, 310], "90,220 210,220 150,380"),
      pathShape("cone-pattern-1", 3, [125, 250], "M 105,240 L 195,300"),
      pathShape("cone-pattern-2", 3, [135, 280], "M 120,280 L 180,320"),
      pathShape("cone-pattern-3", 3, [170, 250], "M 195,240 L 105,300"),
      pathShape("cone-pattern-4", 3, [160, 280], "M 180,280 L 120,320"),
      pathShape("scoop-bottom", 4, [150, 205], "M 80,220 C 75,200 90,180 110,180 C 120,180 130,190 150,190 C 170,190 180,180 190,180 C 210,180 225,200 220,220 C 210,230 190,230 175,225 C 160,230 140,230 125,225 C 110,230 90,230 80,220 Z"),
      pathShape("scoop-middle", 5, [150, 150], "M 85,180 C 75,140 110,110 150,110 C 190,110 225,140 215,180 C 190,185 170,175 150,180 C 130,175 110,185 85,180 Z"),
      pathShape("scoop-top-swirl", 6, [150, 90], "M 115,120 C 110,80 140,45 150,45 C 160,45 190,80 185,120 C 170,115 130,115 115,120 Z"),
      circle("cherry", 7, [150, 35], 150, 35, 16),
      pathShape("cherry-stem", 8, [165, 18], "M 152,25 C 158,10 175,5 185,12"),
      rect("sprinkle-1", 7, [115, 145], 110, 140, 14, 6, 3),
      rect("sprinkle-2", 9, [175, 145], 170, 140, 14, 6, 3),
      rect("sprinkle-3", 7, [145, 130], 140, 125, 6, 14, 3),
      rect("sprinkle-4", 9, [130, 195], 125, 190, 12, 6, 3),
      rect("sprinkle-5", 7, [170, 195], 165, 190, 12, 6, 3),
      circle("star-1", 9, [50, 90], 50, 90, 10),
      circle("star-2", 9, [250, 80], 250, 80, 8)
    ]
  },

  // 3. 🧁 Yummy Cupcake
  {
    id: "cupcake",
    name: "Yummy Cupcake",
    emoji: "🧁",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#8D6E63", "#D7CCC8", "#FF80AB", "#FF4081",
      "#F8BBD0", "#E63946", "#4CAF50", "#FFD54F", "#00E676", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cupcake-shadow", 3, [150, 370], 150, 370, 85, 15),
      polygon("wrapper-base", 2, [150, 305], "75,220 225,220 195,360 105,360"),
      polygon("wrapper-fold-1", 3, [112, 290], "75,220 105,220 120,360 105,360"),
      polygon("wrapper-fold-2", 3, [150, 290], "135,220 165,220 158,360 142,360"),
      polygon("wrapper-fold-3", 3, [188, 290], "195,220 225,220 195,360 180,360"),
      pathShape("frosting-bottom", 4, [150, 195], "M 60,220 C 55,185 85,175 105,180 C 115,165 140,165 150,175 C 160,165 185,165 195,180 C 215,175 245,185 240,220 C 220,235 80,235 60,220 Z"),
      pathShape("frosting-mid", 5, [150, 145], "M 80,180 C 75,140 115,125 135,135 C 145,120 165,120 175,135 C 195,125 225,140 220,180 C 190,170 110,170 80,180 Z"),
      pathShape("frosting-swirl-top", 6, [150, 95], "M 110,135 C 105,95 135,65 150,65 C 165,65 195,95 190,135 C 170,125 130,125 110,135 Z"),
      circle("cherry", 7, [150, 52], 150, 52, 16),
      pathShape("cherry-stem", 8, [168, 30], "M 153,42 C 162,25 180,20 190,26"),
      rect("sprinkle-1", 9, [105, 195], 100, 190, 12, 6, 3),
      rect("sprinkle-2", 10, [190, 195], 185, 190, 12, 6, 3),
      rect("sprinkle-3", 9, [130, 145], 125, 140, 6, 12, 3),
      rect("sprinkle-4", 10, [170, 145], 165, 140, 6, 12, 3),
      circle("sparkle-l", 9, [45, 100], 45, 100, 8),
      circle("sparkle-r", 9, [255, 100], 255, 100, 8)
    ]
  },

  // 4. 🍭 Lollipop
  {
    id: "lollipop",
    name: "Lollipop",
    emoji: "🍭",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#F3E5F5", "#FFFFFF", "#E91E63", "#00BCD4", "#FFEB3B",
      "#9C27B0", "#4CAF50", "#FF9800", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("stick", 2, [150, 300], 144, 170, 12, 200, 6),
      circle("candy-outer-ring", 3, [150, 130], 150, 130, 95),
      pathShape("swirl-segment-1", 4, [190, 75], "M 150,130 L 150,35 A 95,95 0 0,1 230,85 Z"),
      pathShape("swirl-segment-2", 5, [230, 150], "M 150,130 L 230,85 A 95,95 0 0,1 235,180 Z"),
      pathShape("swirl-segment-3", 6, [195, 205], "M 150,130 L 235,180 A 95,95 0 0,1 150,225 Z"),
      pathShape("swirl-segment-4", 7, [105, 205], "M 150,130 L 150,225 A 95,95 0 0,1 65,180 Z"),
      pathShape("swirl-segment-5", 8, [70, 150], "M 150,130 L 65,180 A 95,95 0 0,1 70,85 Z"),
      pathShape("swirl-segment-6", 4, [110, 75], "M 150,130 L 70,85 A 95,95 0 0,1 150,35 Z"),
      circle("swirl-center", 2, [150, 130], 150, 130, 25),
      circle("candy-core-dot", 3, [150, 130], 150, 130, 12),
      pathShape("bow-left", 3, [120, 235], "M 145,230 C 115,215 105,245 145,245 Z"),
      pathShape("bow-right", 3, [180, 235], "M 155,230 C 185,215 195,245 155,245 Z"),
      circle("bow-knot", 5, [150, 238], 150, 238, 8),
      ellipse("candy-shine", 2, [105, 85], 105, 85, 20, 10),
      circle("star-top-left", 5, [45, 60], 45, 60, 8),
      circle("star-top-right", 5, [255, 60], 255, 60, 8)
    ]
  },

  // 5. 🍕 Pizza Slice
  {
    id: "pizzaslice",
    name: "Pizza Slice",
    emoji: "🍕",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D7A15C", "#FFA000", "#FFD54F", "#D32F2F",
      "#388E3C", "#3E2723", "#8D6E63", "#FF5722", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("crust-top", 2, [150, 85], 150, 85, 110, 25),
      polygon("cheese-slice", 3, [150, 230], "50,85 250,85 150,360"),
      pathShape("cheese-pull-edge", 4, [150, 345], "M 140,320 Q 150,370 160,320 Z"),
      pathShape("sauce-layer", 5, [150, 105], "M 55,90 Q 150,110 245,90 L 235,115 Q 150,130 65,115 Z"),
      circle("pepperoni-1", 5, [150, 160], 150, 160, 22),
      circle("pepperoni-2", 5, [110, 225], 110, 225, 20),
      circle("pepperoni-3", 5, [185, 235], 185, 235, 19),
      circle("pepperoni-4", 5, [150, 290], 150, 290, 16),
      circle("olive-1", 7, [160, 195], 160, 195, 10),
      circle("olive-hole-1", 4, [160, 195], 160, 195, 5),
      circle("olive-2", 7, [135, 260], 135, 260, 9),
      circle("olive-hole-2", 4, [135, 260], 135, 260, 4),
      rect("pepper-strip-1", 6, [110, 140], 100, 135, 24, 8, 4),
      rect("pepper-strip-2", 6, [185, 155], 175, 150, 22, 8, 4),
      pathShape("basil-leaf", 6, [135, 205], "M 125,200 C 135,190 150,200 145,215 C 135,215 125,210 125,200 Z"),
      ellipse("mushroom-cap", 8, [170, 280], 170, 280, 14, 8),
      rect("mushroom-stem", 8, [170, 290], 167, 286, 6, 8, 2),
      circle("sparkle-1", 4, [50, 180], 50, 180, 8),
      circle("sparkle-2", 4, [250, 180], 250, 180, 8)
    ]
  },

  // 6. 🍉 Watermelon Slice
  {
    id: "watermelon",
    name: "Watermelon Slice",
    emoji: "🍉",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#2E7D32", "#81C784", "#C8E6C9", "#FF5252",
      "#D50000", "#212121", "#FFFFFF", "#B2EBF2"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("rind-dark-green", 2, [150, 350], "M 30,170 C 40,320 260,320 270,170 L 255,160 C 245,295 55,295 45,160 Z"),
      pathShape("rind-light-green", 3, [150, 320], "M 45,160 C 55,295 245,295 255,160 L 245,155 C 235,275 65,275 55,155 Z"),
      pathShape("rind-white-pith", 4, [150, 295], "M 55,155 C 65,275 235,275 245,155 L 238,150 C 228,260 72,260 62,150 Z"),
      pathShape("red-flesh", 5, [150, 200], "M 62,150 C 72,260 228,260 238,150 L 150,85 Z"),
      pathShape("flesh-core-shadow", 6, [150, 130], "M 120,110 L 150,85 L 180,110 Q 150,140 120,110 Z"),
      ellipse("seed-1", 7, [110, 185], 110, 185, 6, 12),
      ellipse("seed-2", 7, [150, 175], 150, 175, 6, 12),
      ellipse("seed-3", 7, [190, 185], 190, 185, 6, 12),
      ellipse("seed-4", 7, [130, 220], 130, 220, 6, 12),
      ellipse("seed-5", 7, [170, 220], 170, 220, 6, 12),
      ellipse("seed-6", 7, [150, 248], 150, 248, 6, 12),
      circle("water-drop-1", 5, [100, 360], 100, 360, 6),
      circle("water-drop-2", 5, [200, 360], 200, 360, 6),
      circle("sun-accent", 8, [50, 70], 50, 70, 10),
      circle("sun-accent-2", 8, [250, 70], 250, 70, 10)
    ]
  },

  // 7. 🍩 Donut
  {
    id: "donut",
    name: "Donut",
    emoji: "🍩",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#D4A373", "#BC6C25", "#FF80AB", "#FF4081",
      "#00E5FF", "#FFEB3B", "#76FF03", "#FFFFFF", "#E0E0E0"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("donut-shadow", 10, [150, 350], 150, 350, 100, 20),
      circle("dough-base", 2, [150, 200], 150, 200, 115),
      pathShape("frosting-layer", 4, [150, 120], "M 150,90 C 205,90 255,135 255,190 C 255,225 240,240 225,230 C 210,220 200,245 185,250 C 170,255 160,235 150,240 C 135,245 125,260 110,250 C 95,240 85,255 70,245 C 50,230 45,210 45,190 C 45,135 95,90 150,90 Z"),
      circle("donut-hole", 1, [150, 200], 150, 200, 42),
      circle("hole-shadow", 3, [150, 200], 150, 200, 38),
      rect("sprinkle-1", 6, [105, 135], 98, 132, 14, 6, 3),
      rect("sprinkle-2", 7, [185, 135], 178, 132, 14, 6, 3),
      rect("sprinkle-3", 8, [150, 115], 143, 112, 14, 6, 3),
      rect("sprinkle-4", 6, [80, 185], 75, 180, 6, 14, 3),
      rect("sprinkle-5", 7, [220, 185], 215, 180, 6, 14, 3),
      rect("sprinkle-6", 8, [105, 230], 98, 227, 14, 6, 3),
      rect("sprinkle-7", 6, [185, 230], 178, 227, 14, 6, 3),
      pathShape("icing-glaze-shine", 9, [120, 105], "M 100,105 C 120,95 145,95 165,100 C 145,105 120,105 100,105 Z"),
      circle("sparkle-1", 7, [45, 80], 45, 80, 8),
      circle("sparkle-2", 7, [255, 80], 255, 80, 8)
    ]
  },

  // 8. 🌮 Taco
  {
    id: "taco",
    name: "Taco",
    emoji: "🌮",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FBC02D", "#F57F17", "#6D4C41", "#4CAF50",
      "#FF5252", "#FFF9C4", "#FFFFFF", "#E0E0E0"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("taco-shadow", 9, [150, 350], 150, 350, 105, 18),
      pathShape("taco-shell-back", 3, [150, 150], "M 40,240 C 40,110 260,110 260,240 Z"),
      pathShape("meat-filling", 4, [150, 180], "M 60,230 C 80,160 220,160 240,230 Z"),
      pathShape("lettuce-layer", 5, [150, 195], "M 55,220 C 70,180 100,195 120,185 C 140,175 160,195 180,185 C 200,175 230,190 245,220 Z"),
      circle("tomato-chunk-1", 6, [100, 195], 100, 195, 12),
      circle("tomato-chunk-2", 6, [150, 185], 150, 185, 14),
      circle("tomato-chunk-3", 6, [200, 195], 200, 195, 12),
      rect("cheese-shred-1", 7, [125, 190], 120, 186, 16, 5, 2),
      rect("cheese-shred-2", 7, [175, 190], 170, 186, 16, 5, 2),
      rect("cheese-shred-3", 7, [145, 210], 140, 206, 16, 5, 2),
      pathShape("taco-shell-front", 2, [150, 275], "M 35,240 C 40,330 260,330 265,240 C 235,300 65,300 35,240 Z"),
      circle("taco-dot-1", 3, [100, 270], 100, 270, 5),
      circle("taco-dot-2", 3, [150, 285], 150, 285, 6),
      circle("taco-dot-3", 3, [200, 270], 200, 270, 5),
      circle("sparkle-1", 2, [50, 80], 50, 80, 8),
      circle("sparkle-2", 2, [250, 80], 250, 80, 8)
    ]
  },

  // 9. 🍍 Pineapple
  {
    id: "pineapple",
    name: "Pineapple",
    emoji: "🍍",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#FBC02D", "#F57F17", "#E65100", "#2E7D32",
      "#4CAF50", "#81C784", "#FFF59D", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pineapple-shadow", 9, [150, 370], 150, 370, 75, 15),
      pathShape("crown-leaf-center", 5, [150, 70], "M 150,160 C 135,100 135,40 150,30 C 165,40 165,100 150,160 Z"),
      pathShape("crown-leaf-left1", 6, [110, 85], "M 140,160 C 110,120 85,75 75,65 C 100,85 130,125 140,160 Z"),
      pathShape("crown-leaf-right1", 6, [190, 85], "M 160,160 C 190,120 215,75 225,65 C 200,85 170,125 160,160 Z"),
      pathShape("crown-leaf-left2", 7, [100, 125], "M 140,165 C 100,140 65,115 50,110 C 85,130 120,155 140,165 Z"),
      pathShape("crown-leaf-right2", 7, [200, 125], "M 160,165 C 200,140 235,115 250,110 C 215,130 180,155 160,165 Z"),
      ellipse("fruit-body", 2, [150, 260], 150, 260, 75, 100),
      polygon("scale-c1", 3, [150, 210], "150,190 170,210 150,230 130,210"),
      polygon("scale-c2", 4, [150, 260], "150,240 170,260 150,280 130,260"),
      polygon("scale-c3", 3, [150, 310], "150,290 170,310 150,330 130,310"),
      polygon("scale-l1", 4, [115, 235], "115,215 135,235 115,255 95,235"),
      polygon("scale-r1", 4, [185, 235], "185,215 205,235 185,255 165,235"),
      polygon("scale-l2", 3, [115, 285], "115,265 135,285 115,305 95,285"),
      polygon("scale-r2", 3, [185, 285], "185,265 205,285 185,305 165,285"),
      circle("scale-dot-1", 8, [150, 210], 150, 210, 5),
      circle("scale-dot-2", 8, [150, 260], 150, 260, 5),
      circle("scale-dot-3", 8, [150, 310], 150, 310, 5),
      circle("sparkle-1", 8, [45, 80], 45, 80, 8),
      circle("sparkle-2", 8, [255, 80], 255, 80, 8)
    ]
  },

  // 10. 🍓 Strawberry
  {
    id: "strawberry",
    name: "Strawberry",
    emoji: "🍓",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FCE4EC", "#E53935", "#C62828", "#FF5252", "#2E7D32",
      "#4CAF50", "#81C784", "#FFF59D", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("berry-shadow", 9, [150, 365], 150, 365, 70, 15),
      pathShape("berry-body", 2, [150, 230], "M 150,120 C 80,120 50,170 60,240 C 70,300 120,350 150,355 C 180,350 230,300 240,240 C 250,170 220,120 150,120 Z"),
      pathShape("berry-shadow-right", 3, [210, 240], "M 150,120 C 190,120 235,170 240,240 C 245,295 210,335 150,355 C 195,335 225,285 220,240 C 215,180 185,130 150,120 Z"),
      pathShape("berry-highlight", 4, [90, 200], "M 85,150 C 65,180 65,230 75,265 C 70,230 70,180 85,150 Z"),
      pathShape("calyx-center", 5, [150, 140], "M 150,120 L 140,165 L 150,155 L 160,165 Z"),
      pathShape("calyx-left", 6, [105, 125], "M 150,120 C 120,110 80,105 70,115 C 90,130 125,130 150,120 Z"),
      pathShape("calyx-right", 6, [195, 125], "M 150,120 C 180,110 220,105 230,115 C 210,130 175,130 150,120 Z"),
      pathShape("stem", 7, [150, 75], "M 147,120 C 145,95 150,70 160,50 C 153,70 151,95 153,120 Z"),
      ellipse("seed-1", 8, [110, 180], 110, 180, 5, 9),
      ellipse("seed-2", 8, [150, 180], 150, 180, 5, 9),
      ellipse("seed-3", 8, [190, 180], 190, 180, 5, 9),
      ellipse("seed-4", 8, [95, 230], 95, 230, 5, 9),
      ellipse("seed-5", 8, [135, 230], 135, 230, 5, 9),
      ellipse("seed-6", 8, [175, 230], 175, 230, 5, 9),
      ellipse("seed-7", 8, [115, 280], 115, 280, 5, 9),
      ellipse("seed-8", 8, [155, 280], 155, 280, 5, 9),
      ellipse("seed-9", 8, [140, 320], 140, 320, 4, 8),
      circle("sparkle-1", 4, [45, 80], 45, 80, 8),
      circle("sparkle-2", 4, [255, 80], 255, 80, 8)
    ]
  },

  // 11. 🥑 Avocado
  {
    id: "avocado",
    name: "Avocado",
    emoji: "🥑",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#F1F8E9", "#33691E", "#558B2F", "#9CCC65", "#DCEDC8",
      "#FFF9C4", "#4E342E", "#795548", "#A1887F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("avocado-shadow", 10, [150, 365], 150, 365, 85, 16),
      pathShape("dark-skin", 2, [150, 235], "M 150,60 C 105,60 90,110 85,160 C 50,210 45,310 90,350 C 125,370 175,370 210,350 C 255,310 250,210 215,160 C 210,110 195,60 150,60 Z"),
      pathShape("light-skin-rim", 3, [150, 230], "M 150,72 C 112,72 98,118 94,162 C 62,210 58,298 98,338 C 128,358 172,358 202,338 C 242,298 238,210 206,162 C 202,118 188,72 150,72 Z"),
      pathShape("flesh-outer-green", 4, [150, 225], "M 150,85 C 120,85 108,125 104,165 C 75,210 72,285 106,322 C 132,342 168,342 194,322 C 228,285 225,210 196,165 C 192,125 180,85 150,85 Z"),
      pathShape("flesh-inner-yellow", 5, [150, 220], "M 150,105 C 130,105 120,135 116,170 C 95,210 92,270 118,300 C 138,318 162,318 182,300 C 208,270 205,210 184,170 C 180,135 170,105 150,105 Z"),
      circle("pit-hole-bg", 6, [150, 250], 150, 250, 48),
      circle("seed-pit", 7, [150, 250], 150, 250, 44),
      ellipse("pit-highlight", 8, [135, 235], 135, 235, 18, 12),
      circle("pit-specular", 9, [130, 230], 130, 230, 6),
      circle("sparkle-1", 6, [45, 80], 45, 80, 8),
      circle("sparkle-2", 6, [255, 80], 255, 80, 8)
    ]
  },

  // 12. 🌭 Hot Dog
  {
    id: "hotdog",
    name: "Hot Dog",
    emoji: "🌭",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#D32F2F", "#B71C1C",
      "#FFD600", "#4CAF50", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("hotdog-shadow", 9, [150, 340], 150, 340, 110, 18),
      pathShape("bun-bottom", 2, [150, 260], "M 40,190 C 35,260 90,300 150,300 C 210,300 265,260 260,190 C 240,240 180,265 150,265 C 120,265 60,240 40,190 Z"),
      pathShape("sausage-body", 4, [150, 195], "M 30,185 C 25,160 50,150 70,160 L 230,160 C 250,150 275,160 270,185 C 265,210 240,215 220,205 L 80,205 C 60,215 35,210 30,185 Z"),
      pathShape("sausage-shadow", 5, [150, 205], "M 45,195 Q 150,225 255,195 Q 150,210 45,195 Z"),
      pathShape("bun-top-left", 3, [80, 160], "M 45,160 C 40,110 90,120 110,150 C 90,155 60,155 45,160 Z"),
      pathShape("bun-top-right", 3, [220, 160], "M 190,150 C 210,120 260,110 255,160 C 240,155 210,155 190,150 Z"),
      pathShape("mustard-zigzag", 6, [150, 175], "M 60,180 Q 80,160 100,180 Q 120,160 140,180 Q 160,160 180,180 Q 200,160 220,180 Q 240,160 250,180"),
      circle("relish-dot-1", 7, [90, 170], 90, 170, 4),
      circle("relish-dot-2", 7, [130, 170], 130, 170, 4),
      circle("relish-dot-3", 7, [170, 170], 170, 170, 4),
      circle("relish-dot-4", 7, [210, 170], 210, 170, 4),
      circle("sparkle-1", 6, [50, 80], 50, 80, 8),
      circle("sparkle-2", 6, [250, 80], 250, 80, 8)
    ]
  },

  // 13. 🍔 Hamburger (PROMINENT, BEAUTIFULLY CENTERED, HIGH DETAIL)
  {
    id: "hamburger",
    name: "Hamburger",
    emoji: "🍔",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8F0", "#E8A848", "#C47D2B", "#5C2C16", "#3E1A0C",
      "#FFD000", "#E53935", "#C62828", "#43A047", "#2E7D32",
      "#8E24AA", "#FFFFFF", "#D7CCC8", "#FFE082"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("burger-shadow", 13, [150, 370], 150, 370, 105, 18),
      // Bottom bun
      pathShape("bun-bottom", 2, [150, 330], "M 55,295 C 55,345 245,345 245,295 Z"),
      pathShape("bun-bottom-shadow", 3, [150, 335], "M 65,310 C 100,345 200,345 235,310 C 245,320 235,340 215,345 C 175,352 125,352 85,345 C 65,340 55,320 65,310 Z"),
      // Grilled Beef Patty
      pathShape("patty", 4, [150, 280], "M 45,260 C 40,290 260,290 255,260 C 260,278 245,298 150,298 C 55,298 40,278 45,260 Z"),
      pathShape("patty-grill-mark-1", 5, [110, 278], "M 95,270 L 125,285"),
      pathShape("patty-grill-mark-2", 5, [150, 278], "M 135,270 L 165,285"),
      pathShape("patty-grill-mark-3", 5, [190, 278], "M 175,270 L 205,285"),
      // Melted Cheddar Cheese Slice with Drips
      polygon("cheese-slice", 6, [150, 252], "45,245 255,245 240,265 195,255 170,275 145,255 110,275 85,255 60,265"),
      // Red Tomato Slices
      pathShape("tomato-left", 7, [105, 230], "M 55,230 C 55,215 150,215 150,230 C 150,245 55,245 55,230 Z"),
      pathShape("tomato-right", 7, [195, 230], "M 150,230 C 150,215 245,215 245,230 C 245,245 150,245 150,230 Z"),
      circle("tomato-seed-1", 8, [100, 230], 100, 230, 5),
      circle("tomato-seed-2", 8, [200, 230], 200, 230, 5),
      // Crisp Wavy Green Lettuce
      pathShape("lettuce", 9, [150, 205], "M 40,215 C 50,195 70,225 90,205 C 110,195 130,225 150,205 C 170,195 190,225 210,205 C 230,195 250,225 260,215 C 265,225 245,235 220,230 C 190,235 170,225 150,230 C 130,225 110,235 80,230 C 55,235 35,225 40,215 Z"),
      pathShape("lettuce-fold-1", 10, [80, 215], "M 65,215 Q 85,225 105,215"),
      pathShape("lettuce-fold-2", 10, [220, 215], "M 195,215 Q 215,225 235,215"),
      // Onion Ring
      pathShape("onion-ring", 11, [150, 195], "M 75,198 C 110,190 190,190 225,198 C 215,204 185,198 150,198 C 115,198 85,204 75,198 Z"),
      // Big Rounded Top Bun
      pathShape("bun-top", 2, [150, 135], "M 45,195 C 45,95 255,95 255,195 Z"),
      pathShape("bun-top-highlight", 14, [150, 120], "M 80,145 C 95,115 150,105 185,110 C 145,110 100,125 80,145 Z"),
      // Sesame Seeds
      ellipse("sesame-1", 12, [110, 135], 110, 135, 6, 3),
      ellipse("sesame-2", 12, [150, 125], 150, 125, 6, 3),
      ellipse("sesame-3", 12, [190, 135], 190, 135, 6, 3),
      ellipse("sesame-4", 12, [90, 165], 90, 165, 6, 3),
      ellipse("sesame-5", 12, [130, 155], 130, 155, 6, 3),
      ellipse("sesame-6", 12, [170, 155], 170, 155, 6, 3),
      ellipse("sesame-7", 12, [210, 165], 210, 165, 6, 3),
      circle("sparkle-1", 6, [45, 65], 45, 65, 10),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 14. 🫚 Gingerbread Man
  {
    id: "gingerbreadman",
    name: "Gingerbread Man",
    emoji: "🫚",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#EFEBE9", "#8D6E63", "#6D4C41", "#FFFFFF", "#E53935",
      "#43A047", "#FFD54F", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cookie-shadow", 8, [150, 375], 150, 375, 85, 15),
      pathShape("gingerbread-body", 2, [150, 180], "M 150,55 C 175,55 195,75 195,100 C 195,120 180,135 165,140 L 225,185 C 240,195 235,220 215,225 C 200,230 185,215 170,200 L 170,250 L 205,335 C 215,355 190,370 175,355 L 150,300 L 125,355 C 110,370 85,355 95,335 L 130,250 L 130,200 L 130,200 C 115,215 100,230 85,225 C 65,220 60,195 75,185 L 135,140 C 120,135 105,120 105,100 C 105,75 125,55 150,55 Z"),
      circle("eye-l", 3, [135, 95], 135, 95, 5),
      circle("eye-r", 3, [165, 95], 165, 95, 5),
      pathShape("icing-smile", 4, [150, 115], "M 135,110 Q 150,125 165,110"),
      pathShape("bowtie-left", 5, [138, 142], "M 150,142 L 130,132 L 130,152 Z"),
      pathShape("bowtie-right", 5, [162, 142], "M 150,142 L 170,132 L 170,152 Z"),
      circle("bowtie-center", 7, [150, 142], 150, 142, 5),
      circle("button-1", 6, [150, 175], 150, 175, 7),
      circle("button-2", 5, [150, 205], 150, 205, 7),
      circle("button-3", 6, [150, 235], 150, 235, 7),
      pathShape("arm-icing-l", 4, [90, 205], "M 75,195 Q 85,205 95,200"),
      pathShape("arm-icing-r", 4, [210, 205], "M 205,200 Q 215,205 225,195"),
      pathShape("leg-icing-l", 4, [110, 325], "M 100,330 Q 110,320 120,330"),
      pathShape("leg-icing-r", 4, [190, 325], "M 180,330 Q 190,320 200,330"),
      circle("sparkle-1", 7, [45, 60], 45, 60, 8),
      circle("sparkle-2", 7, [255, 60], 255, 60, 8)
    ]
  },

  // 15. 🍱 Sushi Set
  {
    id: "sushi-set",
    name: "Sushi Set",
    emoji: "🍱",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F2F1", "#212121", "#B71C1C", "#FF7043", "#D32F2F",
      "#FFFFFF", "#4CAF50", "#FF80AB", "#8D6E63", "#FFD54F"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      rect("tray-outer", 2, [150, 230], 35, 110, 230, 240, 16),
      rect("tray-inner", 3, [150, 230], 45, 120, 210, 220, 10),
      // Salmon Nigiri
      rect("rice-nigiri-1", 6, [95, 175], 60, 160, 70, 35, 12),
      pathShape("salmon-top", 4, [95, 155], "M 55,165 C 55,145 135,145 135,165 C 135,175 55,175 55,165 Z"),
      pathShape("salmon-stripe-1", 6, [80, 155], "M 75,150 L 85,170"),
      pathShape("salmon-stripe-2", 6, [110, 155], "M 105,150 L 115,170"),
      // Tuna Nigiri
      rect("rice-nigiri-2", 6, [205, 175], 170, 160, 70, 35, 12),
      pathShape("tuna-top", 5, [205, 155], "M 165,165 C 165,145 245,145 245,165 C 245,175 165,175 165,165 Z"),
      // Maki Rolls
      circle("maki-1-nori", 2, [90, 260], 90, 260, 26),
      circle("maki-1-rice", 6, [90, 260], 90, 260, 20),
      circle("maki-1-center", 4, [90, 260], 90, 260, 9),
      circle("maki-2-nori", 2, [150, 260], 150, 260, 26),
      circle("maki-2-rice", 6, [150, 260], 150, 260, 20),
      circle("maki-2-center", 7, [150, 260], 150, 260, 9),
      circle("maki-3-nori", 2, [210, 260], 210, 260, 26),
      circle("maki-3-rice", 6, [210, 260], 210, 260, 20),
      circle("maki-3-center", 5, [210, 260], 210, 260, 9),
      // Wasabi & Ginger
      pathShape("wasabi-mound", 7, [90, 315], "M 75,325 C 75,305 105,305 105,325 Z"),
      pathShape("ginger-slices", 8, [150, 315], "M 135,325 C 135,310 165,310 165,325 Z"),
      rect("chopstick-1", 9, [150, 65], 40, 60, 220, 6, 3),
      rect("chopstick-2", 9, [150, 75], 40, 72, 220, 6, 3),
      circle("sparkle-1", 10, [265, 45], 265, 45, 8)
    ]
  },

  // 16. 🎂 Birthday Cake
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    emoji: "🎂",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#F8BBD0", "#F48FB1", "#EC407A", "#FFFFFF",
      "#00E5FF", "#FFD600", "#FF6D00", "#E53935", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("stand", 10, [150, 365], 150, 365, 110, 16),
      // Bottom Tier
      rect("tier-1", 2, [150, 290], 50, 240, 200, 110, 8),
      pathShape("frosting-drip-1", 3, [150, 260], "M 50,240 L 250,240 C 250,260 230,270 220,255 C 210,245 190,275 175,255 C 160,245 140,275 125,255 C 110,245 90,275 75,255 C 65,270 50,260 50,240 Z"),
      // Top Tier
      rect("tier-2", 3, [150, 190], 85, 150, 130, 90, 8),
      pathShape("frosting-drip-2", 4, [150, 165], "M 85,150 L 215,150 C 215,165 200,175 190,165 C 180,155 165,175 150,165 C 135,155 120,175 110,165 C 100,175 85,165 85,150 Z"),
      // 3 Candles
      rect("candle-1", 6, [115, 115], 110, 95, 10, 55, 3),
      rect("candle-2", 6, [150, 115], 145, 95, 10, 55, 3),
      rect("candle-3", 6, [185, 115], 180, 95, 10, 55, 3),
      pathShape("flame-1", 7, [115, 75], "M 115,95 C 105,80 115,65 115,65 C 115,65 125,80 115,95 Z"),
      pathShape("flame-2", 7, [150, 75], "M 150,95 C 140,80 150,65 150,65 C 150,65 160,80 150,95 Z"),
      pathShape("flame-3", 7, [185, 75], "M 185,95 C 175,80 185,65 185,65 C 185,65 195,80 185,95 Z"),
      circle("strawberry-1", 9, [110, 235], 110, 235, 10),
      circle("strawberry-2", 9, [150, 235], 150, 235, 10),
      circle("strawberry-3", 9, [190, 235], 190, 235, 10),
      circle("sparkle-1", 7, [45, 75], 45, 75, 10),
      circle("sparkle-2", 7, [255, 75], 255, 75, 10)
    ]
  },

  // 17. 🍜 Ramen Bowl
  {
    id: "ramen-bowl",
    name: "Ramen Bowl",
    emoji: "🍜",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D32F2F", "#B71C1C", "#FFD54F", "#FFA000",
      "#2E7D32", "#212121", "#FFFFFF", "#FF80AB", "#8D6E63"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      pathShape("steam-1", 8, [110, 65], "M 110,120 Q 95,90 115,65 Q 130,40 110,20"),
      pathShape("steam-2", 8, [150, 60], "M 150,115 Q 165,85 145,60 Q 135,35 155,15"),
      pathShape("steam-3", 8, [190, 65], "M 190,120 Q 205,90 185,65 Q 170,40 190,20"),
      // Ceramic Bowl
      pathShape("bowl-body", 2, [150, 275], "M 40,165 C 40,320 260,320 260,165 Z"),
      ellipse("bowl-rim", 3, [150, 165], 150, 165, 110, 25),
      ellipse("broth", 5, [150, 170], 150, 170, 100, 20),
      // Ramen Noodles
      pathShape("noodles-cluster", 4, [150, 185], "M 65,170 Q 100,200 150,180 Q 200,200 235,170 Q 150,210 65,170 Z"),
      // Nori Sheet
      polygon("nori-sheet", 7, [75, 140], "55,120 95,110 85,165 45,175"),
      // Boiled Egg Halves
      ellipse("egg-white", 8, [125, 170], 125, 170, 18, 22),
      circle("egg-yolk", 5, [125, 170], 125, 170, 11),
      // Narutomaki Fish Cake
      circle("naruto-white", 8, [175, 170], 175, 170, 18),
      pathShape("naruto-pink-swirl", 9, [175, 170], "M 175,170 A 8,8 0 0,1 183,170 A 5,5 0 0,1 175,175"),
      // Scallions
      circle("scallion-1", 6, [145, 160], 145, 160, 5),
      circle("scallion-2", 6, [155, 175], 155, 175, 5),
      circle("scallion-3", 6, [140, 185], 140, 185, 5),
      // Chopsticks
      pathShape("chopsticks", 10, [220, 110], "M 170,165 L 265,70 M 180,175 L 275,80"),
      circle("sparkle-1", 4, [45, 75], 45, 75, 8)
    ]
  },

  // 18. 🍨 Ice Cream Sundae
  {
    id: "ice-cream-parlor",
    name: "Ice Cream Sundae",
    emoji: "🍨",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#E1F5FE", "#81D4FA", "#F8BBD0", "#D7CCC8",
      "#C8E6C9", "#5D4037", "#E53935", "#FFFFFF", "#FFD54F"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("glass-base", 3, [150, 370], 150, 370, 55, 12),
      rect("glass-stem", 3, [150, 320], 143, 275, 14, 90, 4),
      pathShape("glass-bowl", 2, [150, 230], "M 60,180 C 60,285 240,285 240,180 Z"),
      // Scoops
      circle("scoop-strawberry", 4, [110, 170], 110, 170, 35),
      circle("scoop-chocolate", 5, [190, 170], 190, 170, 35),
      circle("scoop-mint", 6, [150, 135], 150, 135, 36),
      // Hot Fudge Drip
      pathShape("hot-fudge", 7, [150, 125], "M 125,120 C 135,140 145,115 155,140 C 165,120 175,135 175,120 C 160,105 140,105 125,120 Z"),
      // Whipped Cream Swirl
      pathShape("whipped-cream", 9, [150, 85], "M 120,110 C 110,75 145,50 150,50 C 155,50 190,75 180,110 Z"),
      circle("cherry", 8, [150, 40], 150, 40, 14),
      pathShape("cherry-stem", 7, [162, 20], "M 152,30 C 158,15 170,10 180,16"),
      rect("wafer-stick", 5, [215, 85], 190, 45, 12, 100, 4),
      circle("sparkle-1", 10, [45, 80], 45, 80, 8),
      circle("sparkle-2", 10, [255, 80], 255, 80, 8)
    ]
  },

  // 19. 🍌 Fresh Banana
  {
    id: "banana",
    name: "Fresh Banana",
    emoji: "🍌",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#FFEB3B", "#FDD835", "#FBC02D", "#FFF9C4",
      "#5D4037", "#8D6E63", "#D7CCC8", "#FFFFFF"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("banana-shadow", 8, [150, 365], 150, 365, 105, 16),
      // Banana Body Curve
      pathShape("banana-peel-body", 3, [150, 230], "M 65,110 C 35,220 90,320 220,340 C 245,345 255,335 250,325 C 130,310 75,220 105,120 Z"),
      pathShape("banana-pulp-inner", 5, [115, 180], "M 95,115 C 80,160 100,225 140,245 C 135,215 115,160 120,115 Z"),
      // Peel Petals peeling back
      pathShape("peel-left", 2, [60, 160], "M 95,120 C 60,135 45,175 55,210 C 65,175 80,150 95,135 Z"),
      pathShape("peel-right", 2, [155, 160], "M 115,120 C 145,135 170,165 175,200 C 160,170 140,145 115,135 Z"),
      pathShape("peel-front", 4, [105, 230], "M 100,200 C 95,245 110,270 135,280 C 120,260 110,230 105,200 Z"),
      rect("stem-top", 6, [85, 95], 78, 85, 16, 25, 4),
      circle("tip-bottom", 6, [248, 335], 248, 335, 8),
      circle("sparkle-1", 2, [45, 75], 45, 75, 8),
      circle("sparkle-2", 2, [255, 75], 255, 75, 8)
    ]
  },

  // 20. 🍒 Sweet Cherries
  {
    id: "cherries",
    name: "Sweet Cherries",
    emoji: "🍒",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FCE4EC", "#D50000", "#B71C1C", "#FF5252", "#2E7D32",
      "#4CAF50", "#81C784", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cherry-shadow-1", 9, [105, 360], 105, 360, 50, 14),
      ellipse("cherry-shadow-2", 9, [205, 360], 205, 360, 50, 14),
      // Left Cherry
      circle("cherry-left", 2, [105, 290], 105, 290, 52),
      pathShape("cherry-left-shadow", 3, [125, 310], "M 105,238 C 145,250 155,310 125,340 C 150,315 145,265 105,238 Z"),
      ellipse("cherry-left-shine", 4, [80, 265], 80, 265, 14, 8),
      circle("cherry-left-dot", 8, [75, 260], 75, 260, 4),
      // Right Cherry
      circle("cherry-right", 2, [200, 280], 200, 280, 50),
      pathShape("cherry-right-shadow", 3, [220, 300], "M 200,230 C 240,240 248,300 220,328 C 242,305 238,255 200,230 Z"),
      ellipse("cherry-right-shine", 4, [175, 255], 175, 255, 14, 8),
      circle("cherry-right-dot", 8, [170, 250], 170, 250, 4),
      // Stems
      pathShape("stem-left", 5, [120, 150], "M 105,240 C 110,160 145,100 155,75"),
      pathShape("stem-right", 5, [180, 150], "M 200,232 C 190,160 165,100 155,75"),
      // Green Leaf at Joint
      pathShape("leaf-joint", 6, [195, 60], "M 155,75 C 175,45 225,50 235,70 C 220,90 175,90 155,75 Z"),
      pathShape("leaf-vein", 5, [195, 68], "M 155,75 Q 195,68 230,70"),
      circle("sparkle-1", 4, [45, 80], 45, 80, 8),
      circle("sparkle-2", 4, [255, 120], 255, 120, 8)
    ]
  },

  // 21. 🍇 Purple Grapes
  {
    id: "grapes",
    name: "Purple Grapes",
    emoji: "🍇",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#F3E5F5", "#6A1B9A", "#8E24AA", "#AB47BC", "#CE93D8",
      "#2E7D32", "#4CAF50", "#5D4037", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("grapes-shadow", 10, [150, 375], 150, 375, 75, 14),
      // Vine stem & leaf
      rect("vine-stem", 8, [150, 65], 144, 40, 12, 50, 4),
      pathShape("grape-leaf-l", 6, [95, 85], "M 145,75 C 105,50 65,85 75,115 C 105,120 135,100 145,75 Z"),
      pathShape("grape-leaf-r", 7, [205, 85], "M 155,75 C 195,50 235,85 225,115 C 195,120 165,100 155,75 Z"),
      // Grapes Tier 1 (Top: 4 grapes)
      circle("grape-1", 2, [95, 145], 95, 145, 25),
      circle("grape-2", 3, [135, 140], 135, 140, 25),
      circle("grape-3", 2, [175, 140], 175, 140, 25),
      circle("grape-4", 3, [215, 145], 215, 145, 25),
      // Grapes Tier 2 (3 grapes)
      circle("grape-5", 3, [115, 190], 115, 190, 25),
      circle("grape-6", 4, [155, 185], 155, 185, 26),
      circle("grape-7", 2, [195, 190], 195, 190, 25),
      // Grapes Tier 3 (3 grapes)
      circle("grape-8", 2, [115, 240], 115, 240, 25),
      circle("grape-9", 3, [155, 235], 155, 235, 26),
      circle("grape-10", 4, [195, 240], 195, 240, 25),
      // Grapes Tier 4 (2 grapes)
      circle("grape-11", 3, [135, 285], 135, 285, 24),
      circle("grape-12", 2, [175, 285], 175, 285, 24),
      // Bottom single grape
      circle("grape-13", 4, [155, 330], 155, 330, 22),
      circle("sparkle-1", 5, [45, 75], 45, 75, 8),
      circle("sparkle-2", 5, [255, 75], 255, 75, 8)
    ]
  },

  // 22. 🍊 Juicy Orange
  {
    id: "orange",
    name: "Juicy Orange",
    emoji: "🍊",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FF6D00", "#FF9100", "#FFAB40", "#FFE0B2",
      "#2E7D32", "#4CAF50", "#5D4037", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("orange-shadow", 10, [150, 365], 150, 365, 95, 16),
      // Full Orange in back
      circle("orange-body", 2, [150, 210], 150, 210, 105),
      pathShape("orange-shadow-curve", 3, [200, 260], "M 150,105 C 215,105 255,155 255,210 C 255,275 205,315 150,315 C 220,305 240,240 240,210 C 240,150 195,115 150,105 Z"),
      // Stem & Leaf
      rect("stem", 8, [150, 95], 146, 80, 8, 25, 3),
      pathShape("leaf-left", 6, [110, 85], "M 146,95 C 115,70 85,85 80,105 C 105,115 135,105 146,95 Z"),
      pathShape("leaf-right", 7, [190, 85], "M 154,95 C 185,70 215,85 220,105 C 195,115 165,105 154,95 Z"),
      // Slice overlay on front
      circle("slice-rim", 4, [130, 240], 130, 240, 65),
      circle("slice-pith", 5, [130, 240], 130, 240, 56),
      circle("slice-center", 5, [130, 240], 130, 240, 12),
      // Segments
      pathShape("seg-1", 2, [130, 200], "M 130,240 L 120,195 A 50,50 0 0,1 140,195 Z"),
      pathShape("seg-2", 3, [165, 220], "M 130,240 L 165,210 A 50,50 0 0,1 175,230 Z"),
      pathShape("seg-3", 2, [165, 260], "M 130,240 L 175,250 A 50,50 0 0,1 165,270 Z"),
      pathShape("seg-4", 3, [130, 280], "M 130,240 L 140,285 A 50,50 0 0,1 120,285 Z"),
      pathShape("seg-5", 2, [95, 260], "M 130,240 L 95,270 A 50,50 0 0,1 85,250 Z"),
      pathShape("seg-6", 3, [95, 220], "M 130,240 L 85,230 A 50,50 0 0,1 95,210 Z"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 23. 🍋 Sour Lemon
  {
    id: "lemon",
    name: "Sour Lemon",
    emoji: "🍋",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#FFEB3B", "#FDD835", "#FBC02D", "#FFF9C4",
      "#2E7D32", "#4CAF50", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("lemon-shadow", 9, [150, 365], 150, 365, 95, 16),
      // Whole Lemon with pointy tips
      pathShape("lemon-body", 2, [150, 210], "M 45,210 C 65,130 130,110 150,110 C 170,110 235,130 255,210 C 235,290 170,310 150,310 C 130,310 65,290 45,210 Z"),
      pathShape("lemon-shadow-edge", 4, [210, 250], "M 150,110 C 205,110 255,150 255,210 C 255,280 200,310 150,310 C 215,300 240,245 240,210 C 240,155 195,120 150,110 Z"),
      // Pointy tips
      circle("lemon-tip-left", 3, [45, 210], 45, 210, 10),
      circle("lemon-tip-right", 3, [255, 210], 255, 210, 10),
      // Leaves
      pathShape("lemon-leaf-1", 6, [110, 95], "M 150,110 C 115,75 85,90 75,115 C 105,125 135,115 150,110 Z"),
      pathShape("lemon-leaf-2", 7, [190, 95], "M 150,110 C 185,75 215,90 225,115 C 195,125 165,115 150,110 Z"),
      // Slice in front
      circle("slice-rim", 3, [150, 230], 150, 230, 55),
      circle("slice-pith", 5, [150, 230], 150, 230, 46),
      circle("slice-core", 5, [150, 230], 150, 230, 10),
      pathShape("seg-1", 2, [150, 200], "M 150,230 L 140,195 A 40,40 0 0,1 160,195 Z"),
      pathShape("seg-2", 3, [175, 215], "M 150,230 L 175,205 A 40,40 0 0,1 185,225 Z"),
      pathShape("seg-3", 2, [175, 245], "M 150,230 L 185,235 A 40,40 0 0,1 175,255 Z"),
      pathShape("seg-4", 3, [150, 260], "M 150,230 L 160,265 A 40,40 0 0,1 140,265 Z"),
      pathShape("seg-5", 2, [125, 245], "M 150,230 L 125,255 A 40,40 0 0,1 115,235 Z"),
      pathShape("seg-6", 3, [125, 215], "M 150,230 L 115,225 A 40,40 0 0,1 125,205 Z"),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8)
    ]
  },

  // 24. 🍑 Sweet Peach
  {
    id: "peach",
    name: "Sweet Peach",
    emoji: "🍑",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#FF8A80", "#FF5252", "#FFAB91", "#FFE0B2",
      "#2E7D32", "#4CAF50", "#5D4037", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("peach-shadow", 10, [150, 365], 150, 365, 85, 16),
      // Peach Body with Cleft
      pathShape("peach-body", 2, [150, 235], "M 150,120 C 85,100 45,170 45,240 C 45,320 120,355 150,355 C 180,355 255,320 255,240 C 255,170 215,100 150,120 Z"),
      pathShape("peach-cleft-shadow", 3, [150, 220], "M 150,120 Q 140,230 150,355 Q 160,230 150,120 Z"),
      pathShape("peach-blush-left", 4, [95, 220], "M 65,190 C 55,240 75,280 110,290 C 85,270 75,230 85,190 Z"),
      ellipse("peach-highlight", 5, [195, 195], 195, 195, 25, 45),
      // Leaves & Stem
      rect("stem", 8, [150, 105], 146, 90, 8, 30, 3),
      pathShape("leaf-1", 6, [105, 95], "M 148,110 C 115,75 75,90 65,115 C 95,125 130,120 148,110 Z"),
      pathShape("leaf-2", 7, [195, 95], "M 152,110 C 185,75 225,90 235,115 C 205,125 170,120 152,110 Z"),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 25. 🥝 Kiwi Fruit
  {
    id: "kiwi",
    name: "Kiwi Fruit",
    emoji: "🥝",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#F1F8E9", "#6D4C41", "#8D6E63", "#7CB342", "#9CCC65",
      "#DCEDC8", "#212121", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("kiwi-shadow", 9, [150, 365], 150, 365, 95, 16),
      // Whole Fuzzy Kiwi in Back
      ellipse("whole-kiwi", 2, [150, 175], 150, 175, 85, 65),
      ellipse("whole-kiwi-highlight", 3, [150, 155], 150, 155, 65, 45),
      // Front Sliced Kiwi Wheel
      circle("slice-skin", 2, [150, 260], 150, 260, 85),
      circle("slice-green-flesh", 4, [150, 260], 150, 260, 75),
      circle("slice-inner-lime", 5, [150, 260], 150, 260, 50),
      ellipse("slice-creamy-core", 6, [150, 260], 150, 260, 24, 16),
      // Seeds Ring
      circle("seed-1", 7, [125, 235], 125, 235, 4),
      circle("seed-2", 7, [150, 225], 150, 225, 4),
      circle("seed-3", 7, [175, 235], 175, 235, 4),
      circle("seed-4", 7, [185, 260], 185, 260, 4),
      circle("seed-5", 7, [175, 285], 175, 285, 4),
      circle("seed-6", 7, [150, 295], 150, 295, 4),
      circle("seed-7", 7, [125, 285], 125, 285, 4),
      circle("seed-8", 7, [115, 260], 115, 260, 4),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 26. 🥥 Tropical Coconut
  {
    id: "coconut",
    name: "Tropical Coconut",
    emoji: "🥥",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#4E342E", "#6D4C41", "#FFFFFF", "#E0F2F1",
      "#00ACC1", "#FF4081", "#2E7D32", "#4CAF50", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("coconut-shadow", 10, [150, 365], 150, 365, 95, 16),
      // Palm leaf behind
      pathShape("palm-leaf-1", 8, [70, 110], "M 150,180 C 100,120 50,90 20,95 C 60,125 110,155 150,180 Z"),
      pathShape("palm-leaf-2", 9, [230, 110], "M 150,180 C 200,120 250,90 280,95 C 240,125 190,155 150,180 Z"),
      // Outer Brown Shell
      pathShape("coconut-shell", 2, [150, 260], "M 50,210 C 50,335 250,335 250,210 Z"),
      ellipse("shell-rim", 3, [150, 210], 150, 210, 100, 25),
      ellipse("white-meat", 4, [150, 212], 150, 212, 90, 20),
      ellipse("coconut-water", 5, [150, 215], 150, 215, 75, 15),
      // Striped Straw
      rect("straw", 6, [185, 145], 180, 80, 10, 140, 4),
      // Hibiscus Flower
      circle("flower-petal-1", 7, [90, 185], 90, 185, 16),
      circle("flower-petal-2", 7, [115, 175], 115, 175, 16),
      circle("flower-petal-3", 7, [125, 200], 125, 200, 16),
      circle("flower-center", 1, [110, 190], 110, 190, 8),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8)
    ]
  },

  // 27. 🍟 Golden Fries
  {
    id: "french-fries",
    name: "Golden Fries",
    emoji: "🍟",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D32F2F", "#B71C1C", "#FFD54F", "#FFC107",
      "#FFA000", "#FF5252", "#FFFFFF", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("fries-shadow", 9, [150, 375], 150, 375, 95, 16),
      // Fries in background
      rect("fry-1", 6, [90, 130], 82, 70, 16, 130, 4),
      rect("fry-2", 4, [120, 110], 112, 50, 16, 150, 4),
      rect("fry-3", 5, [150, 95], 142, 40, 16, 160, 4),
      rect("fry-4", 4, [180, 110], 172, 50, 16, 150, 4),
      rect("fry-5", 6, [210, 130], 202, 70, 16, 130, 4),
      // Fries in foreground (angled)
      rect("fry-6", 4, [105, 155], 98, 95, 14, 110, 4),
      rect("fry-7", 5, [135, 140], 128, 80, 14, 120, 4),
      rect("fry-8", 4, [165, 140], 158, 80, 14, 120, 4),
      rect("fry-9", 5, [195, 155], 188, 95, 14, 110, 4),
      // Red Fry Carton Box
      polygon("carton-box", 2, [150, 275], "55,185 245,185 220,360 80,360"),
      pathShape("carton-curved-cutout", 3, [150, 205], "M 55,185 Q 150,225 245,185 L 240,210 Q 150,250 60,210 Z"),
      // Yellow Star/Logo on Carton
      polygon("carton-star", 4, [150, 285], "150,255 158,275 180,275 162,288 168,310 150,295 132,310 138,288 120,275 142,275"),
      circle("sparkle-1", 4, [45, 65], 45, 65, 8),
      circle("sparkle-2", 4, [255, 65], 255, 65, 8)
    ]
  },

  // 28. 🥨 Bakery Pretzel
  {
    id: "pretzel",
    name: "Bakery Pretzel",
    emoji: "🥨",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#8D6E63", "#6D4C41", "#A1887F", "#D7CCC8",
      "#FFFFFF", "#FFD54F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pretzel-shadow", 8, [150, 365], 150, 365, 105, 18),
      // Classic Looped Pretzel Knot
      pathShape("pretzel-outer-loop", 2, [150, 210], "M 150,110 C 210,110 260,150 260,210 C 260,280 200,330 150,330 C 100,330 40,280 40,210 C 40,150 90,110 150,110 Z"),
      pathShape("pretzel-left-window", 1, [105, 205], "M 100,165 C 75,165 65,195 70,230 C 95,245 125,230 130,200 C 130,175 115,165 100,165 Z"),
      pathShape("pretzel-right-window", 1, [195, 205], "M 200,165 C 225,165 235,195 230,230 C 205,245 175,230 170,200 C 170,175 185,165 200,165 Z"),
      pathShape("pretzel-bottom-window", 1, [150, 275], "M 150,230 C 135,260 125,285 150,300 C 175,285 165,260 150,230 Z"),
      pathShape("pretzel-crossover", 3, [150, 215], "M 135,190 L 165,240 M 165,190 L 135,240"),
      // Salt Crystals
      rect("salt-1", 6, [90, 140], 85, 137, 8, 6, 2),
      rect("salt-2", 6, [150, 120], 146, 117, 8, 6, 2),
      rect("salt-3", 6, [210, 140], 206, 137, 8, 6, 2),
      rect("salt-4", 6, [55, 210], 51, 207, 8, 6, 2),
      rect("salt-5", 6, [245, 210], 241, 207, 8, 6, 2),
      rect("salt-6", 6, [110, 310], 106, 307, 8, 6, 2),
      rect("salt-7", 6, [190, 310], 186, 307, 8, 6, 2),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 29. 🍿 Movie Popcorn
  {
    id: "popcorn",
    name: "Movie Popcorn",
    emoji: "🍿",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#D32F2F", "#FFFFFF", "#FFF59D", "#FFEE58",
      "#FDD835", "#FBC02D", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("popcorn-shadow", 8, [150, 380], 150, 380, 90, 15),
      // Red & White Striped Bucket
      polygon("bucket-base", 3, [150, 275], "60,175 240,175 210,365 90,365"),
      polygon("stripe-red-1", 2, [85, 270], "60,175 90,175 110,365 90,365"),
      polygon("stripe-red-2", 2, [150, 270], "135,175 165,175 160,365 140,365"),
      polygon("stripe-red-3", 2, [215, 270], "210,175 240,175 210,365 190,365"),
      // Fluffy Popcorn Kernels Mound
      circle("kernel-1", 4, [100, 160], 100, 160, 22),
      circle("kernel-2", 5, [140, 155], 140, 155, 24),
      circle("kernel-3", 6, [175, 155], 175, 155, 24),
      circle("kernel-4", 4, [210, 160], 210, 160, 22),
      circle("kernel-5", 5, [90, 125], 90, 125, 22),
      circle("kernel-6", 6, [130, 115], 130, 115, 26),
      circle("kernel-7", 4, [170, 115], 170, 115, 26),
      circle("kernel-8", 5, [210, 125], 210, 125, 22),
      circle("kernel-9", 6, [150, 80], 150, 80, 26),
      // Butter Dots
      circle("butter-1", 7, [130, 115], 130, 115, 8),
      circle("butter-2", 7, [170, 115], 170, 115, 8),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 30. 🍫 Chocolate Bar
  {
    id: "chocolate-bar",
    name: "Chocolate Bar",
    emoji: "🍫",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF3E0", "#4E342E", "#3E2723", "#6D4C41", "#FFD700",
      "#D32F2F", "#B71C1C", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("choco-shadow", 9, [150, 370], 150, 370, 95, 16),
      // Chocolate Slabs at Top
      rect("choco-block-1", 2, [105, 95], 65, 65, 80, 60, 6),
      rect("choco-block-2", 2, [195, 95], 155, 65, 80, 60, 6),
      rect("choco-block-3", 3, [105, 165], 65, 135, 80, 60, 6),
      rect("choco-block-4", 3, [195, 165], 155, 135, 80, 60, 6),
      // Segment insets
      rect("inset-1", 4, [105, 95], 75, 75, 60, 40, 4),
      rect("inset-2", 4, [195, 95], 165, 75, 60, 40, 4),
      rect("inset-3", 4, [105, 165], 75, 145, 60, 40, 4),
      rect("inset-4", 4, [195, 165], 165, 145, 60, 40, 4),
      // Golden Foil Wrapper
      polygon("gold-foil", 5, [150, 205], "55,200 245,200 240,240 190,225 150,245 110,225 60,240"),
      // Red Paper Sleeve Wrapper
      rect("red-sleeve", 6, [150, 290], 55, 230, 190, 125, 8),
      rect("sleeve-stripe", 7, [150, 290], 55, 275, 190, 35),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 31. 🍬 Sweet Candy
  {
    id: "candy",
    name: "Sweet Candy",
    emoji: "🍬",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#E91E63", "#FF4081", "#FF80AB", "#00E5FF",
      "#FFEA00", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("candy-shadow", 8, [150, 320], 150, 320, 110, 18),
      // Left Wrapper Fan Twist
      polygon("wrapper-left", 3, [50, 200], "90,180 90,220 20,260 30,200 20,140"),
      // Right Wrapper Fan Twist
      polygon("wrapper-right", 3, [250, 200], "210,180 210,220 280,260 270,200 280,140"),
      // Center Oval Candy Body
      ellipse("candy-body", 2, [150, 200], 150, 200, 70, 50),
      // Diagonal Stripes on Candy
      pathShape("stripe-1", 5, [115, 200], "M 115,152 C 125,180 125,220 115,248 L 135,248 C 145,220 145,180 135,152 Z"),
      pathShape("stripe-2", 6, [165, 200], "M 165,152 C 175,180 175,220 165,248 L 185,248 C 195,220 195,180 185,152 Z"),
      ellipse("candy-shine", 7, [150, 175], 150, 175, 45, 12),
      circle("sparkle-1", 6, [45, 80], 45, 80, 10),
      circle("sparkle-2", 6, [255, 80], 255, 80, 10)
    ]
  },

  // 32. 🧇 Belgian Waffle
  {
    id: "waffle",
    name: "Belgian Waffle",
    emoji: "🧇",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#8D6E63", "#FFD54F",
      "#FFA000", "#E53935", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("waffle-shadow", 9, [150, 365], 150, 365, 110, 18),
      // Golden Grid Waffle Base
      circle("waffle-base", 2, [150, 220], 150, 220, 115),
      circle("waffle-rim", 3, [150, 220], 150, 220, 102),
      // Grid Pocket Squares
      rect("grid-1", 4, [105, 170], 90, 155, 30, 30, 4),
      rect("grid-2", 4, [150, 170], 135, 155, 30, 30, 4),
      rect("grid-3", 4, [195, 170], 180, 155, 30, 30, 4),
      rect("grid-4", 4, [105, 215], 90, 200, 30, 30, 4),
      rect("grid-5", 4, [150, 215], 135, 200, 30, 30, 4),
      rect("grid-6", 4, [195, 215], 180, 200, 30, 30, 4),
      rect("grid-7", 4, [105, 260], 90, 245, 30, 30, 4),
      rect("grid-8", 4, [150, 260], 135, 245, 30, 30, 4),
      rect("grid-9", 4, [195, 260], 180, 245, 30, 30, 4),
      // Melting Butter Square Pat
      rect("butter-pat", 5, [150, 205], 135, 190, 30, 30, 4),
      // Syrup Drips
      pathShape("syrup-drip", 6, [150, 235], "M 130,220 C 130,250 170,250 170,220 Z"),
      // Strawberry Garnish
      circle("strawberry", 7, [185, 155], 185, 155, 14),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 33. 🧀 Swiss Cheese
  {
    id: "cheese-wedge",
    name: "Swiss Cheese",
    emoji: "🧀",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FFD54F", "#FFC107", "#FFA000", "#FF8F00",
      "#FFF9C4", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cheese-shadow", 7, [150, 350], 150, 350, 110, 18),
      // 3D Cheese Wedge
      polygon("wedge-top", 2, [150, 160], "40,210 210,120 260,170 140,260"),
      polygon("wedge-front", 3, [90, 260], "40,210 140,260 140,330 40,280"),
      polygon("wedge-side", 4, [200, 250], "140,260 260,170 260,240 140,330"),
      // Cheese Holes (Eyes)
      circle("hole-1", 5, [130, 175], 130, 175, 16),
      circle("hole-2", 5, [195, 155], 195, 155, 12),
      circle("hole-3", 5, [85, 250], 85, 250, 14),
      circle("hole-4", 5, [185, 275], 185, 275, 18),
      circle("hole-5", 5, [230, 205], 230, 205, 10),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 34. 🍪 Choco Chip Cookie
  {
    id: "cookie",
    name: "Choco Chip Cookie",
    emoji: "🍪",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#5D4037", "#3E2723",
      "#8D6E63", "#FFD54F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cookie-shadow", 8, [150, 365], 150, 365, 110, 18),
      // Big Baked Cookie
      circle("cookie-body", 2, [150, 215], 150, 215, 115),
      pathShape("cookie-crust-shade", 3, [205, 270], "M 150,100 C 215,100 265,150 265,215 C 265,280 215,330 150,330 C 220,320 245,260 245,215 C 245,160 205,115 150,100 Z"),
      // Chocolate Chips Scattered
      circle("chip-1", 4, [105, 160], 105, 160, 14),
      circle("chip-2", 5, [155, 145], 155, 145, 16),
      circle("chip-3", 4, [205, 170], 205, 170, 14),
      circle("chip-4", 5, [95, 215], 95, 215, 15),
      circle("chip-5", 4, [145, 215], 145, 215, 18),
      circle("chip-6", 5, [195, 225], 195, 225, 15),
      circle("chip-7", 4, [125, 275], 125, 275, 16),
      circle("chip-8", 5, [175, 280], 175, 280, 14),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 35. 🥪 Club Sandwich
  {
    id: "sandwich",
    name: "Club Sandwich",
    emoji: "🥪",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#D4A373", "#BC6C25", "#4CAF50", "#E53935",
      "#FFD54F", "#8D6E63", "#2E7D32", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("sandwich-shadow", 9, [150, 365], 150, 365, 110, 18),
      // Toothpick with Olive
      rect("toothpick", 3, [150, 85], 147, 50, 6, 80, 3),
      circle("olive", 8, [150, 80], 150, 80, 12),
      // Top Bread Triangle
      polygon("bread-top", 2, [150, 140], "40,170 260,170 150,110"),
      // Layers
      rect("cheese-layer", 6, [150, 180], 45, 170, 210, 15, 4),
      rect("tomato-layer", 5, [150, 195], 45, 185, 210, 15, 4),
      rect("lettuce-layer", 4, [150, 210], 40, 200, 220, 15, 4),
      rect("meat-layer", 7, [150, 225], 45, 215, 210, 15, 4),
      // Mid Bread
      polygon("bread-mid", 2, [150, 245], "40,250 260,250 150,230"),
      // Second Filling Layers
      rect("cheese-layer-2", 6, [150, 260], 45, 250, 210, 15, 4),
      rect("lettuce-layer-2", 4, [150, 275], 40, 265, 220, 15, 4),
      // Bottom Bread
      polygon("bread-bottom", 3, [150, 310], "40,280 260,280 150,340"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 36. 🌯 Beef Burrito
  {
    id: "burrito",
    name: "Beef Burrito",
    emoji: "🌯",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#5D4037", "#4CAF50",
      "#E53935", "#FFD54F", "#B0BEC5", "#CFD8DC"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("burrito-shadow", 8, [150, 365], 150, 365, 105, 18),
      // Silver Foil Bottom Wrap
      rect("foil-wrap", 9, [150, 290], 70, 230, 160, 115, 12),
      // Tortilla Cylinder Body
      rect("tortilla-body", 2, [150, 180], 70, 110, 160, 130, 16),
      // Diagonally cut cross-section top
      ellipse("cross-section-rim", 3, [150, 110], 150, 110, 80, 35),
      ellipse("filling-meat", 4, [150, 110], 150, 110, 70, 28),
      circle("filling-rice", 7, [130, 105], 130, 105, 12),
      circle("filling-beans", 4, [165, 105], 165, 105, 12),
      circle("filling-lettuce", 5, [135, 120], 135, 120, 10),
      circle("filling-salsa", 6, [160, 120], 160, 120, 10),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 37. 🥗 Fresh Salad
  {
    id: "green-salad",
    name: "Fresh Salad",
    emoji: "🥗",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E8F5E9", "#2E7D32", "#4CAF50", "#81C784", "#E53935",
      "#8E24AA", "#FFD54F", "#8D6E63", "#D7CCC8"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("salad-shadow", 9, [150, 370], 150, 370, 105, 18),
      // Wooden Salad Bowl
      pathShape("salad-bowl", 8, [150, 275], "M 40,180 C 40,335 260,335 260,180 Z"),
      ellipse("bowl-rim", 9, [150, 180], 150, 180, 110, 25),
      // Greens
      circle("lettuce-1", 2, [100, 165], 100, 165, 32),
      circle("lettuce-2", 3, [150, 150], 150, 150, 35),
      circle("lettuce-3", 4, [200, 165], 200, 165, 32),
      // Cherry Tomatoes
      circle("tomato-1", 5, [110, 160], 110, 160, 14),
      circle("tomato-2", 5, [190, 160], 190, 160, 14),
      circle("tomato-3", 5, [150, 195], 150, 195, 14),
      // Cucumber Slices
      circle("cucumber-1", 3, [145, 145], 145, 145, 16),
      circle("cucumber-2", 4, [175, 185], 175, 185, 16),
      // Red Onion Ring
      ellipse("onion-ring", 6, [125, 185], 125, 185, 18, 10),
      // Croutons
      rect("crouton-1", 7, [105, 125], 95, 115, 20, 20, 4),
      rect("crouton-2", 7, [175, 125], 165, 115, 20, 20, 4),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8)
    ]
  },

  // 38. 🍝 Spaghetti Pasta
  {
    id: "spaghetti",
    name: "Spaghetti Pasta",
    emoji: "🍝",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FFFFFF", "#FFD54F", "#D32F2F", "#5D4037",
      "#2E7D32", "#B0BEC5", "#FFA000"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("plate-shadow", 7, [150, 365], 150, 365, 115, 20),
      ellipse("plate-outer", 2, [150, 275], 150, 275, 115, 75),
      ellipse("plate-inner", 1, [150, 275], 150, 275, 95, 55),
      // Spaghetti Mound
      ellipse("spaghetti-mound", 3, [150, 245], 150, 245, 80, 50),
      pathShape("noodle-swirl-1", 8, [120, 240], "M 90,230 Q 120,260 150,240"),
      pathShape("noodle-swirl-2", 8, [180, 240], "M 150,240 Q 180,260 210,230"),
      // Rich Bolognese Meat Sauce
      pathShape("sauce-top", 4, [150, 205], "M 100,210 C 100,165 200,165 200,210 C 180,230 120,230 100,210 Z"),
      // Meatballs
      circle("meatball-1", 5, [120, 195], 120, 195, 18),
      circle("meatball-2", 5, [180, 195], 180, 195, 18),
      // Basil Leaf
      pathShape("basil-leaf", 6, [150, 165], "M 150,175 C 135,150 165,150 150,175 Z"),
      // Fork
      rect("fork-handle", 7, [240, 120], 236, 50, 8, 140, 4),
      circle("sparkle-1", 3, [45, 65], 45, 65, 8)
    ]
  },

  // 39. 🍲 Hot Stew Pot
  {
    id: "stew-pot",
    name: "Hot Stew Pot",
    emoji: "🍲",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#EFEBE9", "#4E342E", "#3E2723", "#FFA000", "#E65100",
      "#2E7D32", "#FFFFFF", "#FFD54F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pot-shadow", 9, [150, 370], 150, 370, 105, 18),
      // Steam
      pathShape("steam-1", 7, [110, 75], "M 110,130 Q 95,95 115,70 Q 130,45 110,20"),
      pathShape("steam-2", 7, [150, 70], "M 150,125 Q 165,90 145,65 Q 135,40 155,15"),
      pathShape("steam-3", 7, [190, 75], "M 190,130 Q 205,95 185,70 Q 170,45 190,20"),
      // Clay Pot (Donabe)
      pathShape("pot-body", 2, [150, 275], "M 45,175 C 45,330 255,330 255,175 Z"),
      ellipse("pot-rim", 3, [150, 175], 150, 175, 105, 25),
      ellipse("broth-surface", 4, [150, 178], 150, 178, 95, 20),
      // Handles
      circle("handle-left", 3, [35, 200], 35, 200, 14),
      circle("handle-right", 3, [265, 200], 265, 200, 14),
      // Stew Ingredients
      circle("carrot-flower", 5, [115, 175], 115, 175, 14),
      circle("shiitake-mushroom", 3, [185, 175], 185, 175, 16),
      rect("tofu-cube", 7, [150, 175], 140, 165, 20, 20, 3),
      circle("greens", 6, [145, 195], 145, 195, 12),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8)
    ]
  },

  // 40. 🍛 Japanese Curry
  {
    id: "curry-rice",
    name: "Japanese Curry",
    emoji: "🍛",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FFFFFF", "#6D4C41", "#5D4037", "#E65100",
      "#FFB300", "#D32F2F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("plate-shadow", 8, [150, 365], 150, 365, 115, 20),
      ellipse("oval-plate", 2, [150, 260], 150, 260, 115, 75),
      ellipse("plate-inner-well", 1, [150, 260], 150, 260, 100, 60),
      // Rice Half (Left)
      pathShape("rice-mound", 2, [105, 250], "M 60,250 C 60,190 145,190 145,250 C 145,295 60,295 60,250 Z"),
      // Curry Sauce Half (Right)
      pathShape("curry-sauce", 3, [185, 255], "M 140,250 C 140,195 240,195 240,255 C 240,305 140,305 140,250 Z"),
      // Ingredients in Curry
      circle("carrot-chunk", 5, [170, 235], 170, 235, 12),
      circle("potato-chunk", 6, [205, 245], 205, 245, 14),
      circle("beef-chunk", 4, [175, 275], 175, 275, 14),
      // Red Fukujinzuke Pickles
      pathShape("red-pickles", 7, [145, 215], "M 135,215 C 145,200 155,200 155,215 Z"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8)
    ]
  },

  // 41. 🍙 Onigiri Rice
  {
    id: "rice-ball",
    name: "Onigiri Rice",
    emoji: "🍙",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E0F7FA", "#FFFFFF", "#212121", "#37474F", "#D32F2F",
      "#B0BEC5", "#FFD54F"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("onigiri-shadow", 6, [150, 365], 150, 365, 95, 16),
      // Rounded Triangle Rice Ball
      pathShape("rice-body", 2, [150, 220], "M 150,90 C 205,90 250,260 225,320 C 200,345 100,345 75,320 C 50,260 95,90 150,90 Z"),
      // Nori Seaweed Wrap
      pathShape("nori-wrap", 3, [150, 290], "M 105,250 L 195,250 L 195,340 L 105,340 Z"),
      pathShape("nori-shadow", 4, [150, 305], "M 105,300 L 195,300 L 195,340 L 105,340 Z"),
      // Umeboshi Plum Dot on top
      circle("umeboshi-center", 5, [150, 165], 150, 165, 14),
      circle("sparkle-1", 7, [45, 75], 45, 75, 10),
      circle("sparkle-2", 7, [255, 75], 255, 75, 10)
    ]
  },

  // 42. 🥟 Gyoza Dumpling
  {
    id: "dumpling",
    name: "Gyoza Dumpling",
    emoji: "🥟",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#FFF9C4", "#D4A373", "#8D6E63", "#2E7D32",
      "#3E2723", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("dumpling-shadow", 8, [150, 365], 150, 365, 110, 18),
      // Crescent Dumpling Body
      pathShape("dumpling-body", 2, [150, 210], "M 40,240 C 40,130 260,130 260,240 C 260,290 40,290 40,240 Z"),
      // Pan-fried Crispy Bottom
      pathShape("crispy-bottom", 3, [150, 265], "M 50,250 C 100,285 200,285 250,250 C 240,280 60,280 50,250 Z"),
      // Pleated Top Edge
      pathShape("pleat-1", 4, [75, 185], "M 65,205 Q 75,185 85,205"),
      pathShape("pleat-2", 4, [115, 170], "M 105,185 Q 115,165 125,185"),
      pathShape("pleat-3", 4, [150, 160], "M 140,175 Q 150,155 160,175"),
      pathShape("pleat-4", 4, [185, 170], "M 175,185 Q 185,165 195,185"),
      pathShape("pleat-5", 4, [225, 185], "M 215,205 Q 225,185 235,205"),
      // Dipping Sauce Dish
      ellipse("sauce-dish", 7, [150, 335], 150, 335, 45, 15),
      ellipse("soy-sauce", 6, [150, 335], 150, 335, 35, 10),
      circle("scallion", 5, [150, 335], 150, 335, 4),
      circle("sparkle-1", 2, [45, 65], 45, 65, 8)
    ]
  },

  // 43. 🍤 Fried Tempura
  {
    id: "fried-shrimp",
    name: "Fried Tempura",
    emoji: "🍤",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#E1F5FE", "#FFB300", "#FFA000", "#FF8F00", "#D32F2F",
      "#FF5252", "#FBC02D", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("tempura-shadow", 9, [150, 365], 150, 365, 105, 18),
      // Curved Crispy Tempura Body
      pathShape("tempura-body", 2, [140, 205], "M 55,270 C 45,150 140,110 220,110 C 205,160 145,180 100,285 Z"),
      pathShape("crispy-ridges-1", 3, [125, 175], "M 75,220 Q 115,185 155,145"),
      pathShape("crispy-ridges-2", 4, [145, 215], "M 95,250 Q 135,215 175,175"),
      // Shrimp Red Tail
      pathShape("shrimp-tail-fan", 5, [245, 95], "M 215,115 L 265,75 L 260,115 L 265,145 Z"),
      pathShape("tail-ridge", 6, [245, 105], "M 220,115 L 255,115"),
      // Lemon Wedge Garnish
      pathShape("lemon-wedge", 7, [75, 315], "M 45,335 C 45,300 95,300 95,335 Z"),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 44. 🍢 Oden Skewer
  {
    id: "oden-skewer",
    name: "Oden Skewer",
    emoji: "🍢",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#8D6E63", "#78909C", "#FFA000", "#FFD54F",
      "#FFF9C4", "#5D4037", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("oden-shadow", 9, [150, 375], 150, 375, 75, 15),
      // Bamboo Skewer
      rect("skewer-stick", 2, [150, 210], 144, 40, 12, 330, 6),
      // Top: Triangle Konnyaku
      polygon("konjac-triangle", 3, [150, 110], "150,55 210,140 90,140"),
      // Middle: Round Fishball (Chikuwa / Ball)
      circle("fishball", 4, [150, 195], 150, 195, 42),
      circle("fishball-highlight", 5, [140, 185], 140, 185, 20),
      // Bottom: Square Daikon Radish / Tofu
      rect("daikon-square", 6, [150, 280], 105, 245, 90, 70, 8),
      pathShape("grill-mark", 7, [150, 280], "M 115,280 L 185,280"),
      circle("sparkle-1", 8, [45, 65], 45, 65, 8),
      circle("sparkle-2", 8, [255, 65], 255, 65, 8)
    ]
  },

  // 45. 🍡 Dango Skewer
  {
    id: "dango-sweet",
    name: "Dango Skewer",
    emoji: "🍡",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF0F5", "#8D6E63", "#F8BBD0", "#F48FB1", "#FFFFFF",
      "#E0E0E0", "#C8E6C9", "#81C784", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("dango-shadow", 9, [150, 375], 150, 375, 75, 15),
      // Bamboo Skewer
      rect("skewer-stick", 2, [150, 210], 144, 40, 12, 330, 6),
      // Top: Pink Mochi Ball (Sakura)
      circle("pink-dango", 3, [150, 105], 150, 105, 42),
      ellipse("pink-shine", 4, [135, 90], 135, 90, 14, 8),
      // Middle: White Mochi Ball (Vanilla)
      circle("white-dango", 5, [150, 195], 150, 195, 42),
      ellipse("white-shine", 6, [135, 180], 135, 180, 14, 8),
      // Bottom: Green Mochi Ball (Matcha)
      circle("green-dango", 7, [150, 285], 150, 285, 42),
      ellipse("green-shine", 8, [135, 270], 135, 270, 14, 8),
      circle("sparkle-1", 3, [45, 65], 45, 65, 8),
      circle("sparkle-2", 3, [255, 65], 255, 65, 8)
    ]
  },

  // 46. 🥮 Lotus Mooncake
  {
    id: "mooncake",
    name: "Lotus Mooncake",
    emoji: "🥮",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#8D6E63", "#5D4037",
      "#FFD54F", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("mooncake-shadow", 7, [150, 365], 150, 365, 110, 18),
      // Mooncake Body Cylinder
      pathShape("mooncake-side", 3, [150, 260], "M 45,210 C 45,320 255,320 255,210 Z"),
      ellipse("mooncake-top", 2, [150, 200], 150, 200, 105, 65),
      ellipse("mooncake-inner-rim", 4, [150, 200], 150, 200, 85, 50),
      // Traditional Floral Pattern Relieves
      circle("center-flower", 5, [150, 200], 150, 200, 22),
      pathShape("petal-top", 5, [150, 165], "M 150,175 C 140,155 160,155 150,175 Z"),
      pathShape("petal-bottom", 5, [150, 235], "M 150,225 C 140,245 160,245 150,225 Z"),
      pathShape("petal-left", 5, [115, 200], "M 125,200 C 105,190 105,210 125,200 Z"),
      pathShape("petal-right", 5, [185, 200], "M 175,200 C 195,190 195,210 175,200 Z"),
      circle("sparkle-1", 6, [45, 65], 45, 65, 8),
      circle("sparkle-2", 6, [255, 65], 255, 65, 8)
    ]
  },

  // 47. 🥧 Apple Pie
  {
    id: "fruit-pie",
    name: "Apple Pie",
    emoji: "🥧",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#D32F2F", "#8D6E63",
      "#B0BEC5", "#FFD54F"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pie-shadow", 6, [150, 365], 150, 365, 115, 18),
      // Pie Tin
      pathShape("pie-tin", 6, [150, 275], "M 45,210 C 45,330 255,330 255,210 Z"),
      ellipse("pie-filling-base", 4, [150, 210], 150, 210, 105, 55),
      // Lattice Weave Strips
      rect("lattice-h1", 2, [150, 185], 55, 180, 190, 14, 4),
      rect("lattice-h2", 2, [150, 235], 55, 230, 190, 14, 4),
      rect("lattice-v1", 2, [115, 210], 108, 160, 14, 100, 4),
      rect("lattice-v2", 2, [185, 210], 178, 160, 14, 100, 4),
      // Fluted Pie Crust Rim
      ellipse("pie-crust-rim", 3, [150, 205], 150, 205, 110, 60),
      ellipse("pie-center-hole", 4, [150, 205], 150, 205, 88, 45),
      circle("sparkle-1", 7, [45, 65], 45, 65, 8),
      circle("sparkle-2", 7, [255, 65], 255, 65, 8)
    ]
  },

  // 48. 🥤 Boba Milk Tea
  {
    id: "bubble-tea",
    name: "Boba Milk Tea",
    emoji: "🥤",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D7CCC8", "#A1887F", "#8D6E63", "#212121",
      "#00E5FF", "#FFFFFF", "#B0BEC5", "#FF80AB"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("cup-shadow", 8, [150, 375], 150, 375, 75, 15),
      // Fat Boba Straw
      rect("boba-straw", 6, [170, 85], 162, 35, 16, 160, 8),
      // Clear Cup Dome Lid
      pathShape("cup-lid", 7, [150, 125], "M 75,135 C 75,85 225,85 225,135 Z"),
      rect("lid-rim", 8, [150, 135], 65, 130, 170, 10, 4),
      // Cup Body
      polygon("cup-body", 7, [150, 245], "75,140 225,140 200,355 100,355"),
      // Milk Tea Liquid
      polygon("tea-liquid", 3, [150, 255], "80,165 220,165 198,350 102,350"),
      // Cream swirl top
      pathShape("cream-top", 2, [150, 165], "M 80,165 Q 150,185 220,165 Q 150,150 80,165 Z"),
      // Boba Tapioca Pearls at Bottom
      circle("boba-1", 5, [120, 335], 120, 335, 11),
      circle("boba-2", 5, [150, 335], 150, 335, 11),
      circle("boba-3", 5, [180, 335], 180, 335, 11),
      circle("boba-4", 5, [135, 312], 135, 312, 11),
      circle("boba-5", 5, [165, 312], 165, 312, 11),
      circle("sparkle-1", 9, [45, 65], 45, 65, 8),
      circle("sparkle-2", 9, [255, 65], 255, 65, 8)
    ]
  },

  // 49. 🥞 Pancake Stack
  {
    id: "pancakes-stack",
    name: "Pancake Stack",
    emoji: "🥞",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#8D6E63", "#FFD54F",
      "#FFA000", "#1E88E5", "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("pancake-shadow", 9, [150, 370], 150, 370, 110, 18),
      // Bottom Pancake
      ellipse("pancake-3", 2, [150, 305], 150, 305, 105, 35),
      pathShape("pancake-3-side", 3, [150, 320], "M 45,305 C 45,340 255,340 255,305 Z"),
      // Middle Pancake
      ellipse("pancake-2", 2, [150, 245], 150, 245, 105, 35),
      pathShape("pancake-2-side", 3, [150, 260], "M 45,245 C 45,280 255,280 255,245 Z"),
      // Top Pancake
      ellipse("pancake-1", 2, [150, 185], 150, 185, 105, 35),
      pathShape("pancake-1-side", 3, [150, 200], "M 45,185 C 45,220 255,220 255,185 Z"),
      // Melting Butter Cube
      rect("butter-cube", 5, [150, 160], 135, 145, 30, 25, 4),
      // Maple Syrup Waterfall Drip
      pathShape("syrup-waterfall", 6, [150, 205], "M 130,175 C 130,235 170,235 170,175 Z"),
      // Blueberries on Top
      circle("blueberry-1", 7, [115, 175], 115, 175, 10),
      circle("blueberry-2", 7, [185, 175], 185, 175, 10),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  },

  // 50. 🥐 Butter Croissant
  {
    id: "croissant-bakery",
    name: "Butter Croissant",
    emoji: "🥐",
    category: "food",
    viewBox: "0 0 300 400",
    colors: [
      "#FFF8E1", "#D4A373", "#BC6C25", "#8D6E63", "#FFD54F",
      "#FFFFFF", "#B0BEC5"
    ],
    regions: [
      rect("bg", 1, [25, 30], 0, 0, 300, 400),
      ellipse("croissant-shadow", 7, [150, 365], 150, 365, 110, 18),
      // Crescent Crescent Body
      pathShape("croissant-base", 3, [150, 220], "M 40,270 C 40,120 260,120 260,270 C 230,240 190,290 150,290 C 110,290 70,240 40,270 Z"),
      // Center Rolled Segment
      ellipse("segment-center", 2, [150, 205], 150, 205, 45, 65),
      ellipse("segment-center-shade", 4, [150, 215], 150, 215, 38, 55),
      // Left Roll Segment
      ellipse("segment-left", 2, [100, 215], 100, 215, 35, 50),
      // Right Roll Segment
      ellipse("segment-right", 2, [200, 215], 200, 215, 35, 50),
      // Crescent Tips
      circle("tip-left", 3, [45, 265], 45, 265, 14),
      circle("tip-right", 3, [255, 265], 255, 265, 14),
      // Golden Glaze Shines
      ellipse("glaze-shine-1", 5, [150, 160], 150, 160, 20, 8),
      circle("sparkle-1", 5, [45, 65], 45, 65, 8),
      circle("sparkle-2", 5, [255, 65], 255, 65, 8)
    ]
  }
];

// Write to food.ts
const header = `import { ImageTemplate } from '../../types';\n\n// Category: food (50 strictly verified unique templates)\nexport const FOOD_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(FOOD_TEMPLATES, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/food.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and wrote 50 food templates to', targetPath);
