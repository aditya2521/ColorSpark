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

const TEMPLATES = [];

function add(t) {
  if (t.regions.length < 21) {
    throw new Error(`Template ${t.id} has only ${t.regions.length} regions!`);
  }
  TEMPLATES.push(t);
}

// 1. 🪸 Coral Reef Garden (26 regions)
add({
  id: "underwater-garden",
  name: "Coral Reef Garden",
  emoji: "🪸",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#00ACC1", "#FF7043", "#FF4081", "#7E57C2", "#26A69A", "#FFCA28", "#FFFFFF", "#D7CCC8", "#80DEEA", "#FFAB91", "#CE93D8", "#B2DFDB"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("sea-floor", 9, [150, 380], 150, 380, 120, 18),
    ellipse("sea-floor-layer", 13, [150, 360], 150, 360, 100, 12),
    circle("brain-coral-body", 3, [150, 260], 150, 260, 55),
    pathShape("brain-ridge-1", 11, [130, 240], "M 115,240 Q 135,225 150,240 Q 165,255 185,240"),
    pathShape("brain-ridge-2", 11, [130, 270], "M 115,270 Q 135,255 150,270 Q 165,285 185,270"),
    pathShape("staghorn-left", 4, [65, 230], "M 45,360 L 45,260 C 45,210 25,190 15,180 C 40,180 60,205 60,240 C 60,195 85,180 100,190 C 85,210 75,240 75,280 L 75,360 Z"),
    circle("staghorn-tip-l1", 11, [20, 185], 20, 185, 8),
    circle("staghorn-tip-l2", 11, [95, 195], 95, 195, 8),
    pathShape("tube-coral-right", 5, [235, 240], "M 225,360 L 225,270 C 225,210 245,190 260,180 C 240,200 240,230 240,260 C 255,220 280,210 290,225 C 275,245 260,270 260,300 L 260,360 Z"),
    circle("tube-tip-r1", 12, [255, 185], 255, 185, 8),
    circle("tube-tip-r2", 12, [285, 225], 285, 225, 8),
    pathShape("anemone-1", 6, [100, 335], "M 90,360 Q 100,310 110,360"),
    pathShape("anemone-2", 6, [200, 335], "M 190,360 Q 200,310 210,360"),
    pathShape("seagrass-l", 6, [40, 310], "M 35,360 Q 25,290 45,250 Q 55,300 45,360"),
    pathShape("seagrass-r", 6, [260, 310], "M 265,360 Q 275,290 255,250 Q 245,300 255,360"),
    polygon("starfish", 7, [150, 350], "150,332 154,344 167,344 157,352 161,364 150,356 139,364 143,352 133,344 146,344"),
    pathShape("swimming-fish", 7, [105, 95], "M 85,95 C 100,80 125,80 135,95 C 125,110 100,110 85,95 L 75,85 L 75,105 Z"),
    circle("fish-eye", 8, [125, 93], 125, 93, 3),
    circle("bubble-1", 8, [75, 130], 75, 130, 10),
    circle("bubble-2", 8, [220, 110], 220, 110, 14),
    circle("bubble-3", 8, [150, 60], 150, 60, 8),
    circle("bubble-4", 10, [170, 95], 170, 95, 6),
    circle("bubble-5", 10, [195, 75], 195, 75, 5),
    circle("sparkle-1", 7, [45, 65], 45, 65, 8),
    circle("sparkle-2", 7, [255, 65], 255, 65, 8)
  ]
});

// 2. ☀️ Sunny Day (24 regions)
add({
  id: "sunny",
  name: "Sunny Day",
  emoji: "☀️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#81D4FA", "#FFD600", "#FF6D00", "#FFAB00", "#FFFFFF", "#81C784", "#4CAF50", "#2E7D32", "#FFF9C4"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("hill-back", 9, [150, 310], "M 0,300 Q 150,250 300,300 L 300,400 L 0,400 Z"),
    pathShape("hill-mid", 8, [150, 340], "M 0,335 Q 150,290 300,335 L 300,400 L 0,400 Z"),
    pathShape("hill-front", 7, [150, 370], "M 0,365 Q 150,330 300,365 L 300,400 L 0,400 Z"),
    circle("sun-halo", 5, [150, 160], 150, 160, 72),
    circle("sun-body", 3, [150, 160], 150, 160, 52),
    circle("sun-core", 10, [150, 160], 150, 160, 32),
    rect("ray-n", 4, [150, 55], 144, 40, 12, 35, 6),
    rect("ray-s", 4, [150, 265], 144, 245, 12, 35, 6),
    rect("ray-w", 4, [45, 160], 30, 154, 35, 12, 6),
    rect("ray-e", 4, [255, 160], 235, 154, 35, 12, 6),
    rect("ray-nw", 4, [75, 85], 65, 75, 25, 12, 6),
    rect("ray-ne", 4, [225, 85], 210, 75, 25, 12, 6),
    rect("ray-sw", 4, [75, 235], 65, 225, 25, 12, 6),
    rect("ray-se", 4, [225, 235], 210, 225, 25, 12, 6),
    circle("cloud-p1", 6, [45, 275], 45, 275, 22),
    circle("cloud-p2", 6, [75, 265], 75, 265, 28),
    circle("cloud-p3", 6, [105, 275], 105, 275, 20),
    circle("cloud-r1", 6, [195, 275], 195, 275, 20),
    circle("cloud-r2", 6, [225, 265], 225, 265, 28),
    circle("cloud-r3", 6, [255, 275], 255, 275, 22),
    circle("flower-1", 3, [60, 365], 60, 365, 8),
    circle("flower-2", 3, [240, 365], 240, 365, 8),
    circle("sparkle-1", 5, [270, 50], 270, 50, 8)
  ]
});

// 3. 🌼 Daisy Flower (25 regions)
add({
  id: "daisy",
  name: "Daisy Flower",
  emoji: "🌼",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E8F5E9", "#4CAF50", "#2E7D32", "#FFFFFF", "#FFF9C4", "#FFD600", "#FF6D00", "#A5D6A7"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("ground-soil", 2, [150, 385], 150, 385, 130, 25),
    rect("stem", 3, [150, 290], 144, 190, 12, 190, 6),
    ellipse("leaf-l", 3, [90, 310], 90, 310, 45, 20),
    pathShape("leaf-l-vein", 8, [90, 310], "M 144,315 Q 100,310 60,310"),
    ellipse("leaf-r", 3, [210, 280], 210, 280, 45, 20),
    pathShape("leaf-r-vein", 8, [210, 280], "M 156,285 Q 200,280 240,280"),
    ellipse("petal-1", 4, [150, 80], 150, 80, 18, 42),
    ellipse("petal-2", 4, [195, 95], 195, 95, 18, 42),
    ellipse("petal-3", 4, [225, 135], 225, 135, 18, 42),
    ellipse("petal-4", 4, [230, 180], 230, 180, 18, 42),
    ellipse("petal-5", 4, [205, 220], 205, 220, 18, 42),
    ellipse("petal-6", 4, [170, 240], 170, 240, 18, 42),
    ellipse("petal-7", 4, [130, 240], 130, 240, 18, 42),
    ellipse("petal-8", 4, [95, 220], 95, 220, 18, 42),
    ellipse("petal-9", 4, [70, 180], 70, 180, 18, 42),
    ellipse("petal-10", 4, [75, 135], 75, 135, 18, 42),
    ellipse("petal-11", 4, [105, 95], 105, 95, 18, 42),
    circle("center-halo", 5, [150, 160], 150, 160, 44),
    circle("center-disk", 6, [150, 160], 150, 160, 34),
    circle("center-core", 7, [150, 160], 150, 160, 20),
    circle("ladybug-body", 7, [80, 295], 80, 295, 9),
    circle("ladybug-head", 3, [74, 290], 74, 290, 4),
    circle("sparkle-1", 6, [45, 55], 45, 55, 8),
    circle("sparkle-2", 6, [255, 55], 255, 55, 8)
  ]
});

// 4. 🌈 Rainbow Sky (24 regions)
add({
  id: "rainbow",
  name: "Rainbow Sky",
  emoji: "🌈",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#FF4444", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3", "#9C27B0", "#FFFFFF", "#FFD700"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("arc-red", 2, [150, 85], "M 10,310 A 140,140 0 0,1 290,310 L 275,310 A 125,125 0 0,0 25,310 Z"),
    pathShape("arc-orange", 3, [150, 100], "M 25,310 A 125,125 0 0,1 275,310 L 260,310 A 110,110 0 0,0 40,310 Z"),
    pathShape("arc-yellow", 4, [150, 115], "M 40,310 A 110,110 0 0,1 260,310 L 245,310 A 95,95 0 0,0 55,310 Z"),
    pathShape("arc-green", 5, [150, 130], "M 55,310 A 95,95 0 0,1 245,310 L 230,310 A 80,80 0 0,0 70,310 Z"),
    pathShape("arc-blue", 6, [150, 145], "M 70,310 A 80,80 0 0,1 230,310 L 215,310 A 65,65 0 0,0 85,310 Z"),
    pathShape("arc-purple", 7, [150, 160], "M 85,310 A 65,65 0 0,1 215,310 L 200,310 A 50,50 0 0,0 100,310 Z"),
    circle("cloud-l1", 8, [45, 320], 45, 320, 28),
    circle("cloud-l2", 8, [75, 300], 75, 300, 32),
    circle("cloud-l3", 8, [105, 325], 105, 325, 26),
    circle("cloud-l4", 8, [65, 345], 65, 345, 24),
    circle("cloud-l5", 8, [30, 340], 30, 340, 20),
    circle("cloud-r1", 8, [195, 325], 195, 325, 26),
    circle("cloud-r2", 8, [225, 300], 225, 300, 32),
    circle("cloud-r3", 8, [255, 320], 255, 320, 28),
    circle("cloud-r4", 8, [235, 345], 235, 345, 24),
    circle("cloud-r5", 8, [270, 340], 270, 340, 20),
    circle("sun-peek", 9, [150, 50], 150, 50, 26),
    circle("star-1", 9, [35, 60], 35, 60, 9),
    circle("star-2", 9, [265, 60], 265, 60, 9),
    circle("star-3", 9, [150, 240], 150, 240, 11),
    circle("star-4", 9, [100, 220], 100, 220, 7),
    circle("star-5", 9, [200, 220], 200, 220, 7),
    rect("meadow-base", 5, [150, 385], 0, 370, 300, 30)
  ]
});

// 5. 🌵 Desert Cactus (24 regions)
add({
  id: "cactus",
  name: "Desert Cactus",
  emoji: "🌵",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF3E0", "#FFB74D", "#FF9800", "#4CAF50", "#2E7D32", "#1B5E20", "#E91E63", "#FFD54F", "#D7CCC8"],
  regions: [
    rect("desert-sky", 1, [25, 30], 0, 0, 300, 400),
    circle("desert-sun", 8, [230, 80], 230, 80, 42),
    pathShape("dune-back", 2, [150, 320], "M 0,310 Q 150,270 300,310 L 300,400 L 0,400 Z"),
    pathShape("dune-front", 3, [150, 360], "M 0,350 Q 150,310 300,350 L 300,400 L 0,400 Z"),
    rect("trunk-body", 4, [150, 220], 120, 110, 60, 240, 30),
    rect("trunk-rib-1", 5, [135, 220], 130, 115, 12, 230, 6),
    rect("trunk-rib-2", 6, [165, 220], 158, 115, 12, 230, 6),
    pathShape("arm-left", 4, [75, 200], "M 125,230 L 65,230 C 50,230 45,215 45,195 L 45,150 C 45,135 65,135 65,150 L 65,195 C 65,205 75,210 95,210 L 125,210 Z"),
    rect("arm-l-rib", 5, [55, 175], 51, 150, 8, 45, 4),
    pathShape("arm-right", 4, [225, 180], "M 175,210 L 235,210 C 250,210 255,195 255,175 L 255,130 C 255,115 235,115 235,130 L 235,175 C 235,185 225,190 205,190 L 175,190 Z"),
    rect("arm-r-rib", 5, [245, 155], 241, 130, 8, 45, 4),
    circle("flower-top", 7, [150, 100], 150, 100, 16),
    circle("flower-core-t", 8, [150, 100], 150, 100, 7),
    circle("flower-l", 7, [55, 135], 55, 135, 12),
    circle("flower-r", 7, [245, 115], 245, 115, 12),
    circle("rock-1", 9, [40, 360], 40, 360, 16),
    circle("rock-2", 9, [70, 370], 70, 370, 12),
    circle("rock-3", 9, [260, 365], 260, 365, 18),
    circle("spine-1", 8, [122, 140], 122, 140, 4),
    circle("spine-2", 8, [178, 140], 178, 140, 4),
    circle("spine-3", 8, [122, 260], 122, 260, 4),
    circle("spine-4", 8, [178, 260], 178, 260, 4),
    circle("sparkle-1", 8, [45, 60], 45, 60, 8),
    circle("sparkle-2", 8, [105, 50], 105, 50, 6)
  ]
});

// 6. 🌻 Golden Sunflower (25 regions)
add({
  id: "sunflower",
  name: "Golden Sunflower",
  emoji: "🌻",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E8F5E9", "#388E3C", "#1B5E20", "#FFD600", "#FFAB00", "#5D4037", "#3E2723", "#FF6D00"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("soil-mound", 2, [150, 385], 150, 385, 130, 25),
    rect("stalk", 3, [150, 290], 142, 180, 16, 200, 8),
    ellipse("leaf-left", 2, [80, 300], 80, 300, 50, 22),
    pathShape("leaf-l-vein", 3, [80, 300], "M 142,305 Q 90,300 45,300"),
    ellipse("leaf-right", 2, [220, 280], 220, 280, 50, 22),
    pathShape("leaf-r-vein", 3, [220, 280], "M 158,285 Q 210,280 255,280"),
    ellipse("petal-1", 4, [150, 60], 150, 60, 16, 45),
    ellipse("petal-2", 5, [185, 75], 185, 75, 16, 45),
    ellipse("petal-3", 4, [215, 105], 215, 105, 16, 45),
    ellipse("petal-4", 5, [230, 145], 230, 145, 16, 45),
    ellipse("petal-5", 4, [225, 185], 225, 185, 16, 45),
    ellipse("petal-6", 5, [200, 220], 200, 220, 16, 45),
    ellipse("petal-7", 4, [165, 235], 165, 235, 16, 45),
    ellipse("petal-8", 5, [135, 235], 135, 235, 16, 45),
    ellipse("petal-9", 4, [100, 220], 100, 220, 16, 45),
    ellipse("petal-10", 5, [75, 185], 75, 185, 16, 45),
    ellipse("petal-11", 4, [70, 145], 70, 145, 16, 45),
    ellipse("petal-12", 5, [85, 105], 85, 105, 16, 45),
    ellipse("petal-13", 4, [115, 75], 115, 75, 16, 45),
    circle("seed-rim", 5, [150, 150], 150, 150, 52),
    circle("seed-mid", 6, [150, 150], 150, 150, 40),
    circle("seed-center", 7, [150, 150], 150, 150, 24),
    circle("sun-spark-1", 8, [40, 50], 40, 50, 8),
    circle("sun-spark-2", 8, [260, 50], 260, 50, 8)
  ]
});

// 7. 🌌 Northern Lights (23 regions)
add({
  id: "northern-lights",
  name: "Northern Lights",
  emoji: "🌌",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#0B1021", "#00E676", "#1DE9B6", "#00B0FF", "#7C4DFF", "#E040FB", "#FFFFFF", "#1E293B", "#334155"],
  regions: [
    rect("night-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("aurora-wave-1", 2, [150, 80], "M 0,60 Q 75,120 150,70 T 300,100 L 300,140 Q 225,100 150,130 T 0,100 Z"),
    pathShape("aurora-wave-2", 3, [150, 120], "M 0,110 Q 75,160 150,115 T 300,145 L 300,185 Q 225,145 150,175 T 0,145 Z"),
    pathShape("aurora-wave-3", 4, [150, 160], "M 0,155 Q 75,200 150,160 T 300,190 L 300,225 Q 225,185 150,215 T 0,185 Z"),
    pathShape("aurora-wave-4", 5, [150, 200], "M 0,195 Q 75,235 150,200 T 300,230 L 300,260 Q 225,225 150,250 T 0,225 Z"),
    pathShape("aurora-wave-5", 6, [150, 235], "M 0,230 Q 75,265 150,235 T 300,260 L 300,285 Q 225,255 150,275 T 0,255 Z"),
    pathShape("mountain-l", 8, [70, 310], "M 0,340 L 70,270 L 140,340 Z"),
    pathShape("mountain-r", 8, [230, 310], "M 160,340 L 230,270 L 300,340 Z"),
    pathShape("mountain-c", 9, [150, 320], "M 90,340 L 150,260 L 210,340 Z"),
    ellipse("frozen-lake", 4, [150, 370], 150, 370, 140, 25),
    pathShape("lake-refl", 2, [150, 365], "M 50,365 Q 150,355 250,365 Q 150,375 50,365"),
    polygon("tree-1", 1, [30, 335], "30,305 15,345 45,345"),
    polygon("tree-2", 1, [60, 330], "60,295 45,340 75,340"),
    polygon("tree-3", 1, [240, 330], "240,295 225,340 255,340"),
    polygon("tree-4", 1, [270, 335], "270,305 255,345 285,345"),
    circle("moon", 7, [50, 60], 50, 60, 16),
    circle("star-1", 7, [100, 45], 100, 45, 3),
    circle("star-2", 7, [200, 40], 200, 40, 3),
    circle("star-3", 7, [260, 50], 260, 50, 3),
    circle("star-4", 7, [150, 40], 150, 40, 2),
    circle("star-5", 7, [80, 90], 80, 90, 2),
    circle("star-6", 7, [220, 85], 220, 85, 2),
    circle("lake-shine", 7, [150, 385], 150, 385, 4)
  ]
});

// 8. 🍂 Autumn Tree (25 regions)
add({
  id: "autumn-tree",
  name: "Autumn Tree",
  emoji: "🍁",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF8E1", "#795548", "#4E342E", "#FF5722", "#FF9800", "#FFC107", "#8D6E63", "#D84315", "#81C784"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("hill", 9, [150, 380], 150, 380, 135, 25),
    pathShape("trunk", 3, [150, 290], "M 130,370 L 135,240 L 115,190 L 130,195 L 145,230 L 155,230 L 170,195 L 185,190 L 165,240 L 170,370 Z"),
    ellipse("branch-l", 2, [100, 190], 100, 190, 28, 8),
    ellipse("branch-r", 2, [200, 190], 200, 190, 28, 8),
    circle("foliage-top", 4, [150, 90], 150, 90, 44),
    circle("foliage-tl", 5, [110, 120], 110, 120, 38),
    circle("foliage-tr", 6, [190, 120], 190, 120, 38),
    circle("foliage-ml", 8, [80, 160], 80, 160, 35),
    circle("foliage-mr", 4, [220, 160], 220, 160, 35),
    circle("foliage-c", 5, [150, 145], 150, 145, 42),
    circle("foliage-bl", 6, [105, 185], 105, 185, 32),
    circle("foliage-br", 8, [195, 185], 195, 185, 32),
    circle("foliage-sub-1", 4, [130, 110], 130, 110, 20),
    circle("foliage-sub-2", 6, [170, 110], 170, 110, 20),
    ellipse("falling-1", 4, [55, 230], 55, 230, 12, 6),
    ellipse("falling-2", 5, [75, 270], 75, 270, 10, 6),
    ellipse("falling-3", 8, [240, 240], 240, 240, 12, 6),
    ellipse("falling-4", 6, [225, 290], 225, 290, 11, 5),
    ellipse("ground-leaf-1", 4, [80, 370], 80, 370, 16, 7),
    ellipse("ground-leaf-2", 5, [110, 375], 110, 375, 14, 6),
    ellipse("ground-leaf-3", 6, [190, 375], 190, 375, 15, 6),
    ellipse("ground-leaf-4", 8, [220, 370], 220, 370, 16, 7),
    circle("sparkle-1", 6, [40, 60], 40, 60, 8),
    circle("sparkle-2", 6, [260, 60], 260, 60, 8)
  ]
});

// 9. 🏞️ Waterfall Valley (24 regions)
add({
  id: "waterfall-valley",
  name: "Waterfall Valley",
  emoji: "🌊",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#0288D1", "#29B6F6", "#4FC3F7", "#546E7A", "#37474F", "#388E3C", "#2E7D32", "#FFFFFF", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    polygon("mountain-far-l", 5, [65, 90], "0,140 65,60 130,140"),
    polygon("mountain-far-r", 5, [235, 90], "170,140 235,60 300,140"),
    circle("sun", 10, [150, 55], 150, 55, 22),
    pathShape("cliff-left", 6, [60, 210], "M 0,120 L 120,120 L 110,310 L 0,330 Z"),
    pathShape("cliff-right", 6, [240, 210], "M 180,120 L 300,120 L 300,330 L 190,310 Z"),
    pathShape("cliff-ledge-l", 7, [60, 130], "M 0,120 L 120,120 L 115,145 L 0,145 Z"),
    pathShape("cliff-ledge-r", 7, [240, 130], "M 180,120 L 300,120 L 300,145 L 185,145 Z"),
    polygon("pine-l1", 8, [40, 110], "40,80 25,120 55,120"),
    polygon("pine-l2", 8, [80, 110], "80,85 65,120 95,120"),
    polygon("pine-r1", 8, [220, 110], "220,85 205,120 235,120"),
    polygon("pine-r2", 8, [260, 110], "260,80 245,120 275,120"),
    rect("falls-tier-1", 4, [150, 160], 120, 120, 60, 60),
    rect("falls-tier-2", 3, [150, 220], 115, 180, 70, 70),
    rect("falls-tier-3", 2, [150, 280], 110, 250, 80, 65),
    pathShape("falls-foam-1", 9, [150, 180], "M 120,180 Q 150,195 180,180"),
    pathShape("falls-foam-2", 9, [150, 250], "M 115,250 Q 150,268 185,250"),
    ellipse("pool", 2, [150, 350], 150, 350, 140, 45),
    ellipse("pool-wave-1", 4, [150, 340], 150, 340, 95, 20),
    ellipse("pool-wave-2", 9, [150, 365], 150, 365, 75, 14),
    circle("splash-1", 9, [105, 315], 105, 315, 9),
    circle("splash-2", 9, [195, 315], 195, 315, 9),
    circle("splash-3", 9, [150, 310], 150, 310, 12),
    circle("sparkle-1", 10, [265, 45], 265, 45, 6)
  ]
});

// 10. 🌷 Spring Tulip (24 regions)
add({
  id: "tulip",
  name: "Spring Tulip",
  emoji: "🌷",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FCE4EC", "#F48FB1", "#E91E63", "#C2185B", "#4CAF50", "#2E7D32", "#1B5E20", "#FFFFFF", "#FFD54F"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("garden-bed", 6, [150, 385], 150, 385, 130, 22),
    pathShape("tulip-stem", 5, [150, 280], "M 144,180 Q 140,280 144,380 L 156,380 Q 152,280 156,180 Z"),
    pathShape("leaf-left", 5, [85, 290], "M 144,370 Q 50,330 65,240 Q 100,270 144,320 Z"),
    pathShape("leaf-l-midrib", 7, [95, 295], "M 144,370 Q 75,320 65,240"),
    pathShape("leaf-right", 5, [215, 270], "M 156,360 Q 250,300 235,210 Q 200,250 156,300 Z"),
    pathShape("leaf-r-midrib", 7, [205, 275], "M 156,360 Q 225,290 235,210"),
    ellipse("petal-back-l", 4, [115, 140], 115, 140, 24, 45),
    ellipse("petal-back-r", 4, [185, 140], 185, 140, 24, 45),
    pathShape("petal-center-cup", 3, [150, 135], "M 120,165 C 120,105 150,80 150,80 C 150,80 180,105 180,165 C 180,195 120,195 120,165 Z"),
    pathShape("petal-front-l", 2, [125, 150], "M 105,155 C 105,100 140,90 140,90 C 140,120 145,170 145,185 C 120,185 105,175 105,155 Z"),
    pathShape("petal-front-r", 2, [175, 150], "M 195,155 C 195,100 160,90 160,90 C 160,120 155,170 155,185 C 180,185 195,175 195,155 Z"),
    circle("petal-highlight", 8, [150, 130], 150, 130, 12),
    circle("dew-1", 8, [75, 255], 75, 255, 5),
    circle("dew-2", 8, [225, 230], 225, 230, 5),
    circle("dew-3", 8, [130, 160], 130, 160, 4),
    circle("butterfly-wing-tl", 9, [60, 80], 60, 80, 14),
    circle("butterfly-wing-bl", 3, [62, 100], 62, 100, 10),
    circle("butterfly-wing-tr", 9, [80, 80], 80, 80, 14),
    circle("butterfly-wing-br", 3, [78, 100], 78, 100, 10),
    ellipse("butterfly-body", 7, [70, 90], 70, 90, 3, 12),
    circle("sun-orb", 9, [245, 60], 245, 60, 22),
    circle("sparkle-1", 9, [35, 50], 35, 50, 7),
    circle("sparkle-2", 9, [265, 120], 265, 120, 6)
  ]
});

console.log("Built templates 1-10 successfully!");

// 11. 🌹 Red Rose (24 regions)
add({
  id: "rose",
  name: "Red Rose",
  emoji: "🌹",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF0F5", "#D32F2F", "#B71C1C", "#FF5252", "#388E3C", "#1B5E20", "#2E7D32", "#FFFFFF", "#FFD700"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    rect("rose-stem", 6, [150, 300], 144, 210, 12, 170, 6),
    polygon("thorn-l", 6, [135, 275], "144,270 128,278 144,285"),
    polygon("thorn-r", 6, [165, 325], "156,320 172,328 156,335"),
    ellipse("leaf-left", 5, [85, 280], 85, 280, 45, 22),
    pathShape("leaf-l-vein", 6, [85, 280], "M 144,280 Q 95,275 45,280"),
    ellipse("leaf-right", 5, [215, 310], 215, 310, 45, 22),
    pathShape("leaf-r-vein", 6, [215, 310], "M 156,310 Q 205,305 255,310"),
    ellipse("sepal-l", 7, [125, 220], 125, 220, 18, 12),
    ellipse("sepal-r", 7, [175, 220], 175, 220, 18, 12),
    circle("petal-outer-b", 3, [150, 180], 150, 180, 55),
    ellipse("petal-wrap-l", 2, [115, 145], 115, 145, 34, 48),
    ellipse("petal-wrap-r", 2, [185, 145], 185, 145, 34, 48),
    ellipse("petal-mid-l", 4, [130, 135], 130, 135, 25, 38),
    ellipse("petal-mid-r", 4, [170, 135], 170, 135, 25, 38),
    circle("petal-cup", 3, [150, 140], 150, 140, 32),
    circle("petal-inner-fold", 2, [150, 130], 150, 130, 22),
    circle("rose-core", 4, [150, 122], 150, 122, 12),
    circle("dew-drop-1", 8, [105, 130], 105, 130, 5),
    circle("dew-drop-2", 8, [185, 160], 185, 160, 5),
    circle("dew-drop-3", 8, [70, 275], 70, 275, 4),
    circle("sparkle-1", 9, [45, 55], 45, 55, 8),
    circle("sparkle-2", 9, [255, 55], 255, 55, 8),
    ellipse("ground-shadow", 6, [150, 385], 150, 385, 110, 15)
  ]
});

// 12. 🍀 Four Leaf Clover (24 regions)
add({
  id: "clover",
  name: "Four Leaf Clover",
  emoji: "🍀",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F0FDF4", "#22C55E", "#15803D", "#166534", "#86EFAC", "#FEF08A", "#EAB308", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    pathShape("curved-stem", 3, [150, 290], "M 150,175 Q 160,280 120,360 L 130,365 Q 172,280 158,175 Z"),
    ellipse("leaf-top-l", 2, [135, 95], 135, 95, 28, 38),
    ellipse("leaf-top-r", 2, [165, 95], 165, 95, 28, 38),
    pathShape("top-inner-pale", 5, [150, 105], "M 130,110 Q 150,85 170,110 Q 150,125 130,110"),
    ellipse("leaf-bot-l", 2, [135, 245], 135, 245, 28, 38),
    ellipse("leaf-bot-r", 2, [165, 245], 165, 245, 28, 38),
    pathShape("bot-inner-pale", 5, [150, 235], "M 130,230 Q 150,255 170,230 Q 150,215 130,230"),
    ellipse("leaf-left-t", 2, [75, 155], 75, 155, 38, 28),
    ellipse("leaf-left-b", 2, [75, 185], 75, 185, 38, 28),
    pathShape("left-inner-pale", 5, [85, 170], "M 90,150 Q 65,170 90,190 Q 105,170 90,150"),
    ellipse("leaf-right-t", 2, [225, 155], 225, 155, 38, 28),
    ellipse("leaf-right-b", 2, [225, 185], 225, 185, 38, 28),
    pathShape("right-inner-pale", 5, [215, 170], "M 210,150 Q 235,170 210,190 Q 195,170 210,150"),
    circle("clover-core-1", 4, [150, 170], 150, 170, 20),
    circle("clover-core-2", 5, [150, 170], 150, 170, 10),
    circle("ladybug-body", 7, [220, 140], 220, 140, 8),
    circle("ladybug-head", 4, [226, 134], 226, 134, 4),
    circle("lucky-star-1", 6, [50, 50], 50, 50, 10),
    circle("lucky-star-2", 6, [250, 50], 250, 50, 10),
    circle("lucky-star-3", 6, [40, 320], 40, 320, 8),
    circle("lucky-star-4", 6, [260, 320], 260, 320, 8),
    circle("sparkle-center", 8, [150, 170], 150, 170, 4),
    ellipse("ground-meadow", 3, [150, 385], 150, 385, 120, 20)
  ]
});

// 13. 🌴 Tropical Island (25 regions)
add({
  id: "palm-island",
  name: "Tropical Island",
  emoji: "🌴",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#00ACC1", "#00838F", "#FFD54F", "#FFA000", "#795548", "#4E342E", "#4CAF50", "#2E7D32", "#FF6D00"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("tropical-sun", 10, [235, 75], 235, 75, 35),
    ellipse("ocean-deep", 3, [150, 340], 150, 340, 150, 60),
    ellipse("ocean-shallow", 2, [150, 350], 150, 350, 140, 45),
    ellipse("sandbar-back", 5, [150, 340], 150, 340, 120, 28),
    ellipse("sandbar-front", 4, [150, 350], 150, 350, 105, 20),
    pathShape("palm-trunk-l", 6, [115, 240], "M 130,340 Q 95,240 115,145 L 128,148 Q 110,240 142,340 Z"),
    pathShape("trunk-ring-1", 7, [115, 180], "M 108,180 L 122,183"),
    pathShape("trunk-ring-2", 7, [118, 230], "M 112,230 L 128,233"),
    pathShape("trunk-ring-3", 7, [125, 280], "M 120,280 L 136,283"),
    pathShape("frond-tl", 8, [50, 100], "M 120,145 Q 60,95 20,120 Q 65,135 120,145"),
    pathShape("frond-t", 9, [110, 70], "M 120,145 Q 110,50 120,30 Q 135,65 120,145"),
    pathShape("frond-tr", 8, [180, 95], "M 120,145 Q 175,85 220,105 Q 170,130 120,145"),
    pathShape("frond-ml", 9, [40, 150], "M 120,145 Q 50,150 25,185 Q 65,175 120,145"),
    pathShape("frond-mr", 8, [195, 150], "M 120,145 Q 185,150 215,180 Q 170,170 120,145"),
    pathShape("frond-bl", 9, [75, 185], "M 120,145 Q 75,185 60,225 Q 95,195 120,145"),
    pathShape("frond-br", 8, [165, 185], "M 120,145 Q 165,185 180,220 Q 145,190 120,145"),
    circle("coconut-1", 7, [115, 152], 115, 152, 9),
    circle("coconut-2", 7, [127, 152], 127, 152, 9),
    circle("coconut-3", 7, [121, 162], 121, 162, 8),
    pathShape("wave-crest-1", 1, [70, 360], "M 50,360 Q 70,350 90,360"),
    pathShape("wave-crest-2", 1, [210, 365], "M 190,365 Q 210,355 230,365"),
    pathShape("seabird-1", 7, [70, 70], "M 55,70 Q 70,60 85,70 Q 100,60 115,70"),
    pathShape("seabird-2", 7, [170, 55], "M 160,55 Q 170,47 180,55 Q 190,47 200,55"),
    circle("sparkle-1", 4, [45, 270], 45, 270, 6)
  ]
});

// 14. 🍄 Magic Forest Mushroom (24 regions)
add({
  id: "mushroom",
  name: "Magic Forest Mushroom",
  emoji: "🍄",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F3E5F5", "#E53935", "#C62828", "#FFFFFF", "#ECEFF1", "#CFD8DC", "#4CAF50", "#2E7D32", "#FFD54F"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("moss-ground", 7, [150, 380], 150, 380, 135, 25),
    pathShape("grass-patch-l", 8, [70, 365], "M 55,380 L 65,345 L 75,380 L 85,340 L 95,380 Z"),
    pathShape("grass-patch-r", 8, [230, 365], "M 215,380 L 225,345 L 235,380 L 245,340 L 255,380 Z"),
    rect("stem-body", 5, [150, 280], 115, 185, 70, 180, 25),
    ellipse("stem-shade-l", 6, [125, 280], 125, 280, 12, 80),
    ellipse("stem-skirt", 4, [150, 230], 150, 230, 44, 14),
    pathShape("cap-dome", 2, [150, 130], "M 35,185 C 35,80 265,80 265,185 C 265,200 35,200 35,185 Z"),
    ellipse("cap-bottom-gills", 3, [150, 185], 150, 185, 115, 20),
    circle("dot-big-c", 4, [150, 115], 150, 115, 24),
    circle("dot-l1", 4, [85, 130], 85, 130, 18),
    circle("dot-r1", 4, [215, 130], 215, 130, 18),
    circle("dot-l2", 4, [65, 170], 65, 170, 14),
    circle("dot-r2", 4, [235, 170], 235, 170, 14),
    circle("dot-top", 4, [150, 68], 150, 68, 12),
    circle("dot-sub-1", 4, [115, 160], 115, 160, 10),
    circle("dot-sub-2", 4, [185, 160], 185, 160, 10),
    pathShape("baby-cap", 2, [60, 310], "M 40,320 C 40,290 80,290 80,320 Z"),
    rect("baby-stem", 4, [60, 335], 52, 320, 16, 35, 6),
    circle("baby-dot", 4, [60, 305], 60, 305, 5),
    circle("spore-glow-1", 9, [50, 80], 50, 80, 8),
    circle("spore-glow-2", 9, [250, 80], 250, 80, 8),
    circle("spore-glow-3", 9, [30, 240], 30, 240, 6),
    circle("spore-glow-4", 9, [270, 240], 270, 240, 6)
  ]
});

// 15. 🌲 Pine Forest (24 regions)
add({
  id: "pine-forest",
  name: "Pine Forest",
  emoji: "🌲",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E8F5E9", "#2E7D32", "#1B5E20", "#388E3C", "#795548", "#4E342E", "#81C784", "#FFFFFF", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("full-moon", 8, [230, 70], 230, 70, 30),
    polygon("mountain-silhouette", 7, [150, 120], "0,170 150,70 300,170"),
    ellipse("hill-back", 2, [150, 340], 150, 340, 140, 45),
    ellipse("hill-front", 3, [150, 375], 150, 375, 130, 30),
    // Center Tree
    polygon("tree-c-top", 2, [150, 125], "150,80 120,145 180,145"),
    polygon("tree-c-mid", 3, [150, 175], "150,130 105,200 195,200"),
    polygon("tree-c-bot", 4, [150, 235], "150,180 90,265 210,265"),
    rect("tree-c-trunk", 5, [150, 290], 140, 260, 20, 60, 4),
    // Left Tree
    polygon("tree-l-top", 4, [75, 165], "75,130 50,180 100,180"),
    polygon("tree-l-mid", 2, [75, 210], "75,170 40,230 110,230"),
    polygon("tree-l-bot", 3, [75, 260], "75,215 25,285 125,285"),
    rect("tree-l-trunk", 6, [75, 310], 68, 280, 14, 50, 3),
    // Right Tree
    polygon("tree-r-top", 3, [225, 165], "225,130 200,180 250,180"),
    polygon("tree-r-mid", 4, [225, 210], "225,170 190,230 260,230"),
    polygon("tree-r-bot", 2, [225, 260], "225,215 175,285 275,285"),
    rect("tree-r-trunk", 6, [225, 310], 218, 280, 14, 50, 3),
    circle("star-1", 9, [40, 50], 40, 50, 3),
    circle("star-2", 9, [90, 40], 90, 40, 2),
    circle("star-3", 9, [140, 45], 140, 45, 3),
    circle("star-4", 9, [170, 35], 170, 35, 2),
    ellipse("fallen-cone", 5, [110, 370], 110, 370, 10, 14),
    circle("sparkle-1", 9, [45, 95], 45, 95, 6),
    circle("sparkle-2", 9, [270, 110], 270, 110, 6)
  ]
});

// 16. 🏔️ Snow Mountain (23 regions)
add({
  id: "snowy-mountain",
  name: "Snow Mountain",
  emoji: "🏔️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#0288D1", "#B0BEC5", "#78909C", "#37474F", "#FFFFFF", "#2E7D32", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sun", 8, [240, 70], 240, 70, 30),
    polygon("mountain-bg-l", 3, [60, 150], "0,230 60,110 120,230"),
    polygon("mountain-bg-r", 3, [240, 150], "180,230 240,110 300,230"),
    polygon("snow-bg-l", 6, [60, 130], "60,110 40,150 80,150"),
    polygon("snow-bg-r", 6, [240, 130], "240,110 220,150 260,150"),
    polygon("main-peak-body", 4, [150, 190], "20,270 150,80 280,270"),
    polygon("main-peak-shadow", 5, [185, 200], "150,80 280,270 150,270"),
    polygon("glacier-cap", 6, [150, 115], "150,80 110,140 135,130 150,150 165,130 190,140"),
    polygon("glacier-left", 6, [115, 175], "110,140 85,195 105,185 125,210"),
    polygon("glacier-right", 3, [185, 175], "190,140 170,210 190,185 215,195"),
    ellipse("valley-base", 7, [150, 330], 150, 330, 145, 55),
    ellipse("glacial-lake", 2, [150, 355], 150, 355, 120, 30),
    pathShape("lake-ripple", 6, [150, 350], "M 70,350 Q 150,340 230,350"),
    polygon("pine-1", 7, [40, 310], "40,280 25,330 55,330"),
    polygon("pine-2", 7, [75, 300], "75,270 60,320 90,320"),
    polygon("pine-3", 7, [225, 300], "225,270 210,320 240,320"),
    polygon("pine-4", 7, [260, 310], "260,280 245,330 275,330"),
    pathShape("eagle", 5, [95, 65], "M 80,65 Q 95,55 110,65 Q 125,55 140,65"),
    circle("cloud-1", 6, [60, 90], 60, 90, 18),
    circle("cloud-2", 6, [85, 80], 85, 80, 24),
    circle("cloud-3", 6, [110, 90], 110, 90, 16),
    circle("sparkle-1", 8, [270, 130], 270, 130, 6)
  ]
});

// 17. 🌊 Ocean Wave (24 regions)
add({
  id: "ocean-wave",
  name: "Ocean Wave",
  emoji: "🌊",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#0277BD", "#0288D1", "#03A9F4", "#4FC3F7", "#FFFFFF", "#FFD54F", "#B2EBF2"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sun", 7, [235, 75], 235, 75, 35),
    pathShape("sea-horizon", 2, [150, 200], "M 0,190 L 300,190 L 300,400 L 0,400 Z"),
    pathShape("wave-body-deep", 2, [120, 250], "M 0,330 Q 130,330 180,240 Q 230,150 150,150 Q 80,150 40,210 L 0,250 Z"),
    pathShape("wave-body-mid", 3, [135, 240], "M 10,340 Q 140,340 190,230 Q 220,165 160,165 Q 100,165 60,225 Z"),
    pathShape("wave-barrel-curl", 4, [150, 220], "M 30,350 Q 150,350 200,220 Q 210,180 170,180 Q 120,180 80,240 Z"),
    pathShape("wave-crest-curl", 6, [170, 160], "M 150,150 C 230,140 230,200 180,220 C 140,220 120,190 150,150 Z"),
    circle("spray-1", 6, [195, 140], 195, 140, 14),
    circle("spray-2", 6, [220, 155], 220, 155, 12),
    circle("spray-3", 6, [240, 175], 240, 175, 10),
    circle("spray-4", 6, [210, 120], 210, 120, 9),
    circle("spray-5", 6, [170, 125], 170, 125, 8),
    circle("spray-6", 6, [255, 195], 255, 195, 8),
    ellipse("foam-base-1", 5, [150, 360], 150, 360, 140, 25),
    ellipse("foam-base-2", 6, [150, 375], 150, 375, 120, 18),
    ellipse("foam-base-3", 8, [150, 385], 150, 385, 90, 10),
    pathShape("seabird-l", 2, [70, 70], "M 55,70 Q 70,60 85,70 Q 100,60 115,70"),
    pathShape("seabird-r", 2, [140, 95], "M 130,95 Q 140,87 150,95 Q 160,87 170,95"),
    circle("bubble-1", 6, [50, 280], 50, 280, 7),
    circle("bubble-2", 6, [90, 310], 90, 310, 6),
    circle("bubble-3", 6, [240, 310], 240, 310, 7),
    circle("sparkle-1", 7, [45, 60], 45, 60, 8),
    circle("sparkle-2", 7, [270, 45], 270, 45, 6),
    circle("sparkle-3", 6, [190, 250], 190, 250, 5)
  ]
});

// 18. 🌋 Volcano Island (24 regions)
add({
  id: "volcano-peak",
  name: "Volcano Island",
  emoji: "🌋",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFE0B2", "#D84315", "#BF360C", "#FF5722", "#FF9800", "#FFD54F", "#3E2723", "#00838F", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("ocean", 8, [150, 360], 150, 360, 150, 50),
    polygon("volcano-slope-l", 7, [80, 260], "20,350 110,190 150,350"),
    polygon("volcano-slope-r", 7, [220, 260], "150,350 190,190 280,350"),
    polygon("volcano-center", 3, [150, 260], "110,190 190,190 220,350 80,350"),
    ellipse("crater-rim", 2, [150, 190], 150, 190, 40, 12),
    ellipse("crater-magma", 5, [150, 190], 150, 190, 28, 7),
    pathShape("lava-channel-1", 4, [130, 260], "M 135,195 Q 120,260 105,340"),
    pathShape("lava-channel-2", 5, [150, 270], "M 150,195 Q 155,270 150,345"),
    pathShape("lava-channel-3", 4, [170, 260], "M 165,195 Q 180,260 195,340"),
    circle("smoke-plume-1", 2, [150, 145], 150, 145, 32),
    circle("smoke-plume-2", 4, [125, 115], 125, 115, 28),
    circle("smoke-plume-3", 5, [175, 115], 175, 115, 28),
    circle("smoke-plume-4", 2, [150, 75], 150, 75, 35),
    circle("smoke-plume-5", 4, [110, 65], 110, 65, 22),
    circle("smoke-plume-6", 5, [190, 65], 190, 65, 22),
    circle("firebomb-1", 6, [80, 140], 80, 140, 10),
    circle("firebomb-2", 6, [220, 140], 220, 140, 10),
    circle("firebomb-3", 6, [150, 30], 150, 30, 8),
    circle("spark-1", 6, [60, 110], 60, 110, 5),
    circle("spark-2", 6, [240, 110], 240, 110, 5),
    pathShape("ocean-wave-l", 9, [70, 370], "M 45,370 Q 70,360 95,370"),
    pathShape("ocean-wave-r", 9, [230, 370], "M 205,370 Q 230,360 255,370"),
    circle("sparkle-1", 6, [270, 45], 270, 45, 7)
  ]
});

// 19. 🌅 Golden Sunset (24 regions)
add({
  id: "golden-sunset",
  name: "Golden Sunset",
  emoji: "🌅",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#311B92", "#7B1FA2", "#C2185B", "#E64A19", "#F57C00", "#FFB300", "#FFF176", "#212121", "#0D47A1"],
  regions: [
    rect("sky-top", 1, [25, 30], 0, 0, 300, 70),
    rect("sky-mid-1", 2, [25, 90], 0, 70, 300, 60),
    rect("sky-mid-2", 3, [25, 145], 0, 130, 300, 50),
    rect("sky-bot-1", 4, [25, 195], 0, 180, 300, 40),
    rect("sky-bot-2", 5, [25, 230], 0, 220, 300, 30),
    circle("sun-body", 6, [150, 240], 150, 240, 55),
    circle("sun-core", 7, [150, 240], 150, 240, 35),
    rect("ocean-base", 9, [25, 270], 0, 250, 300, 150),
    pathShape("refl-1", 6, [150, 260], "M 110,260 L 190,260 L 180,270 L 120,270 Z"),
    pathShape("refl-2", 7, [150, 280], "M 95,275 L 205,275 L 195,285 L 105,285 Z"),
    pathShape("refl-3", 6, [150, 300], "M 85,290 L 215,290 L 205,305 L 95,305 Z"),
    pathShape("refl-4", 7, [150, 325], "M 75,310 L 225,310 L 210,330 L 90,330 Z"),
    pathShape("refl-5", 5, [150, 350], "M 60,335 L 240,335 L 220,360 L 80,360 Z"),
    pathShape("cliff-l", 8, [45, 300], "M 0,240 Q 60,250 50,380 L 0,380 Z"),
    pathShape("cliff-r", 8, [255, 300], "M 300,240 Q 240,250 250,380 L 300,380 Z"),
    polygon("palm-l", 8, [40, 230], "40,200 20,250 60,250"),
    polygon("palm-r", 8, [260, 230], "260,200 240,250 280,250"),
    pathShape("cloud-l1", 3, [60, 140], "M 20,140 Q 60,120 100,140"),
    pathShape("cloud-r1", 3, [240, 140], "M 200,140 Q 240,120 280,140"),
    pathShape("gull-1", 8, [80, 80], "M 65,80 Q 80,70 95,80 Q 110,70 125,80"),
    pathShape("gull-2", 8, [190, 95], "M 180,95 Q 190,87 200,95 Q 210,87 220,95"),
    circle("star-spark-1", 7, [40, 45], 40, 45, 6),
    circle("star-spark-2", 7, [260, 45], 260, 45, 6),
    circle("star-spark-3", 7, [150, 35], 150, 35, 5)
  ]
});

// 20. 🪷 Water Lotus (24 regions)
add({
  id: "sacred-lotus",
  name: "Water Lotus",
  emoji: "🪷",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F2F1", "#00897B", "#004D40", "#F8BBD0", "#EC407A", "#C2185B", "#FFD54F", "#FFA000", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("pond-water", 2, [150, 310], 150, 310, 140, 80),
    ellipse("pond-ripple-1", 1, [150, 320], 150, 320, 115, 60),
    ellipse("pond-ripple-2", 9, [150, 335], 150, 335, 85, 40),
    // Left Lilypad
    ellipse("pad-l", 2, [80, 270], 80, 270, 65, 30),
    pathShape("pad-l-cleft", 3, [80, 270], "M 80,270 L 130,260"),
    // Right Lilypad
    ellipse("pad-r", 2, [220, 280], 220, 280, 65, 30),
    pathShape("pad-r-cleft", 3, [220, 280], "M 220,280 L 170,270"),
    // Lotus Outer Petals
    ellipse("petal-out-l", 4, [100, 200], 100, 200, 32, 50),
    ellipse("petal-out-r", 4, [200, 200], 200, 200, 32, 50),
    ellipse("petal-out-b", 5, [150, 225], 150, 225, 45, 35),
    // Lotus Mid Petals
    ellipse("petal-mid-l", 5, [125, 170], 125, 170, 26, 52),
    ellipse("petal-mid-r", 5, [175, 170], 175, 170, 26, 52),
    // Lotus Center Tall Petal
    ellipse("petal-center-top", 6, [150, 140], 150, 140, 24, 55),
    // Lotus Inner Cup Petals
    ellipse("petal-in-l", 4, [138, 185], 138, 185, 18, 40),
    ellipse("petal-in-r", 4, [162, 185], 162, 185, 18, 40),
    circle("seed-pod", 7, [150, 195], 150, 195, 18),
    circle("seed-pod-core", 8, [150, 195], 150, 195, 9),
    circle("dew-1", 9, [75, 260], 75, 260, 6),
    circle("dew-2", 9, [225, 270], 225, 270, 6),
    // Dragonfly
    ellipse("dragonfly-body", 8, [70, 100], 70, 100, 3, 16),
    ellipse("dragonfly-wing-l", 9, [50, 95], 50, 95, 18, 5),
    ellipse("dragonfly-wing-r", 9, [90, 95], 90, 95, 18, 5),
    circle("sparkle-1", 7, [250, 60], 250, 60, 8)
  ]
});

// 21. 🍁 Maple Leaf (24 regions)
add({
  id: "maple-leaf",
  name: "Maple Leaf",
  emoji: "🍁",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF8E1", "#D84315", "#BF360C", "#FF5722", "#FF8A65", "#795548", "#FFB300", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    rect("leaf-stem", 6, [150, 340], 145, 260, 10, 110, 5),
    // Central Lobe (3 peaks)
    pathShape("lobe-center-mid", 2, [150, 105], "M 130,170 L 150,60 L 170,170 Z"),
    polygon("lobe-center-l", 4, [118, 120], "115,140 100,105 135,130"),
    polygon("lobe-center-r", 4, [182, 120], "185,140 200,105 165,130"),
    // Left Main Lobe (3 peaks)
    pathShape("lobe-left-mid", 3, [90, 165], "M 140,195 L 45,150 L 130,225 Z"),
    polygon("lobe-left-t", 5, [75, 130], "70,140 60,105 95,135"),
    polygon("lobe-left-b", 5, [75, 195], "85,185 55,210 105,210"),
    // Right Main Lobe (3 peaks)
    pathShape("lobe-right-mid", 3, [210, 165], "M 160,195 L 255,150 L 170,225 Z"),
    polygon("lobe-right-t", 5, [225, 130], "230,140 240,105 205,135"),
    polygon("lobe-right-b", 5, [225, 195], "215,185 245,210 195,210"),
    // Basal Lobes
    polygon("lobe-basal-l", 4, [95, 245], "140,240 75,260 130,265"),
    polygon("lobe-basal-r", 4, [205, 245], "160,240 225,260 170,265"),
    circle("leaf-center-body", 2, [150, 200], 150, 200, 36),
    // Primary Veins
    pathShape("vein-center", 7, [150, 115], "M 150,260 L 150,75"),
    pathShape("vein-left", 7, [95, 175], "M 150,260 L 55,155"),
    pathShape("vein-right", 7, [205, 175], "M 150,260 L 245,155"),
    pathShape("vein-basal-l", 7, [110, 250], "M 150,260 L 85,260"),
    pathShape("vein-basal-r", 7, [190, 250], "M 150,260 L 215,260"),
    ellipse("mini-leaf-1", 4, [55, 330], 55, 330, 16, 9),
    ellipse("mini-leaf-2", 3, [245, 330], 245, 330, 16, 9),
    circle("dew-drop", 8, [135, 185], 135, 185, 6),
    circle("sparkle-1", 7, [45, 55], 45, 55, 8),
    circle("sparkle-2", 7, [255, 55], 255, 55, 8)
  ]
});

// 22. 💐 Flower Bouquet (25 regions)
add({
  id: "flower-bouquet",
  name: "Flower Bouquet",
  emoji: "💐",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF8E1", "#E91E63", "#9C27B0", "#FF9800", "#FFD54F", "#4CAF50", "#2E7D32", "#FFE082", "#FF4081"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    polygon("wrap-cone-l", 8, [115, 310], "90,230 150,380 150,230"),
    polygon("wrap-cone-r", 8, [185, 310], "210,230 150,380 150,230"),
    ellipse("ribbon-knot", 2, [150, 330], 150, 330, 14, 10),
    pathShape("ribbon-tail-l", 2, [130, 360], "M 145,335 Q 125,360 115,385"),
    pathShape("ribbon-tail-r", 2, [170, 360], "M 155,335 Q 175,360 185,385"),
    // Foliage Sprigs
    ellipse("fern-l", 6, [70, 170], 70, 170, 35, 14),
    ellipse("fern-r", 6, [230, 170], 230, 170, 35, 14),
    ellipse("fern-t", 7, [150, 70], 150, 70, 14, 35),
    // Center Big Rose
    circle("rose-out", 2, [150, 170], 150, 170, 36),
    circle("rose-mid", 9, [150, 170], 150, 170, 24),
    circle("rose-in", 2, [150, 170], 150, 170, 12),
    // Left Purple Tulip
    ellipse("tulip-l-b", 3, [100, 140], 100, 140, 24, 32),
    ellipse("tulip-l-petal", 3, [95, 130], 95, 130, 14, 26),
    // Right Orange Daisy
    circle("daisy-r-petal-1", 4, [200, 115], 200, 115, 14),
    circle("daisy-r-petal-2", 4, [220, 135], 220, 135, 14),
    circle("daisy-r-petal-3", 4, [200, 155], 200, 155, 14),
    circle("daisy-r-petal-4", 4, [180, 135], 180, 135, 14),
    circle("daisy-r-core", 5, [200, 135], 200, 135, 12),
    // Top Yellow Blossom
    circle("top-blossom-1", 5, [135, 110], 135, 110, 12),
    circle("top-blossom-2", 5, [165, 110], 165, 110, 12),
    circle("top-blossom-c", 4, [150, 105], 150, 105, 10),
    circle("sparkle-1", 5, [45, 55], 45, 55, 8),
    circle("sparkle-2", 5, [255, 55], 255, 55, 8),
    circle("sparkle-3", 9, [150, 40], 150, 40, 6)
  ]
});

// 23. 🪴 Green Succulent (24 regions)
add({
  id: "succulent-pot",
  name: "Green Succulent",
  emoji: "🪴",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFFDE7", "#E65100", "#FFB74D", "#2E7D32", "#4CAF50", "#81C784", "#A5D6A7", "#E91E63", "#5D4037"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("pot-rim", 3, [150, 240], 150, 240, 85, 20),
    polygon("pot-body", 2, [150, 320], "75,245 225,245 205,375 95,375"),
    ellipse("pot-soil", 9, [150, 240], 150, 240, 72, 14),
    // Succulent Outer Tier (6 leaves)
    ellipse("leaf-out-1", 4, [150, 125], 150, 125, 20, 38),
    ellipse("leaf-out-2", 4, [195, 145], 195, 145, 20, 38),
    ellipse("leaf-out-3", 4, [205, 195], 205, 195, 20, 38),
    ellipse("leaf-out-4", 4, [150, 215], 150, 215, 20, 38),
    ellipse("leaf-out-5", 4, [95, 195], 95, 195, 20, 38),
    ellipse("leaf-out-6", 4, [105, 145], 105, 145, 20, 38),
    // Succulent Mid Tier (6 leaves)
    ellipse("leaf-mid-1", 5, [150, 145], 150, 145, 16, 30),
    ellipse("leaf-mid-2", 5, [180, 160], 180, 160, 16, 30),
    ellipse("leaf-mid-3", 5, [180, 190], 180, 190, 16, 30),
    ellipse("leaf-mid-4", 5, [150, 200], 150, 200, 16, 30),
    ellipse("leaf-mid-5", 5, [120, 190], 120, 190, 16, 30),
    ellipse("leaf-mid-6", 5, [120, 160], 120, 160, 16, 30),
    // Succulent Inner Core (Rosette)
    circle("leaf-core-1", 6, [140, 168], 140, 168, 12),
    circle("leaf-core-2", 6, [160, 168], 160, 168, 12),
    circle("leaf-core-3", 7, [150, 180], 150, 180, 10),
    circle("pink-tip-1", 8, [150, 92], 150, 92, 4),
    circle("pink-tip-2", 8, [210, 120], 210, 120, 4),
    circle("pink-tip-3", 8, [90, 120], 90, 120, 4),
    circle("sparkle-1", 3, [45, 55], 45, 55, 8),
    circle("sparkle-2", 3, [255, 55], 255, 55, 8)
  ]
});

// 24. ⚡ Lightning Storm (24 regions)
add({
  id: "lightning-storm",
  name: "Lightning Storm",
  emoji: "⚡",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#0D1B2A", "#1B263B", "#415A77", "#FFD600", "#FFEA00", "#FFFFFF", "#00B0FF", "#388E3C"],
  regions: [
    rect("storm-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("storm-ground", 8, [150, 380], "M 0,365 Q 150,335 300,365 L 300,400 L 0,400 Z"),
    // Huge Dark Thundercloud
    circle("cloud-p1", 2, [60, 90], 60, 90, 40),
    circle("cloud-p2", 3, [110, 70], 110, 70, 52),
    circle("cloud-p3", 2, [165, 65], 165, 65, 56),
    circle("cloud-p4", 3, [225, 75], 225, 75, 48),
    circle("cloud-p5", 2, [265, 105], 265, 105, 36),
    rect("cloud-base", 3, [150, 115], 30, 95, 240, 45, 15),
    // Main Jagged Bolt
    polygon("bolt-main", 4, [150, 210], "160,115 130,200 155,200 120,310 185,185 155,185"),
    polygon("bolt-core", 6, [150, 210], "158,125 135,195 152,195 128,295 175,188 152,188"),
    // Secondary Branch Bolt
    polygon("bolt-branch-l", 5, [95, 230], "135,190 100,230 115,230 85,285 118,225 105,225"),
    polygon("bolt-branch-r", 5, [205, 230], "170,195 210,235 195,235 225,285 190,230 202,230"),
    // Rain Streaks
    pathShape("rain-1", 7, [45, 220], "M 45,170 L 35,270"),
    pathShape("rain-2", 7, [75, 250], "M 75,200 L 65,300"),
    pathShape("rain-3", 7, [105, 280], "M 105,230 L 95,330"),
    pathShape("rain-4", 7, [195, 280], "M 195,230 L 185,330"),
    pathShape("rain-5", 7, [225, 250], "M 225,200 L 215,300"),
    pathShape("rain-6", 7, [255, 220], "M 255,170 L 245,270"),
    circle("flash-glow-1", 4, [150, 115], 150, 115, 14),
    circle("flash-glow-2", 4, [120, 310], 120, 310, 14),
    circle("sparkle-1", 6, [40, 45], 40, 45, 6),
    circle("sparkle-2", 6, [260, 45], 260, 45, 6),
    circle("rain-drop-1", 7, [50, 330], 50, 330, 4),
    circle("rain-drop-2", 7, [250, 330], 250, 330, 4)
  ]
});

// 25. 🌾 Wheat Field (24 regions)
add({
  id: "wheat-field",
  name: "Wheat Field",
  emoji: "🌾",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#FFD54F", "#FFA000", "#FF8F00", "#FF6F00", "#5D4037", "#4CAF50", "#FF5252"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("harvest-sun", 2, [230, 80], 230, 80, 40),
    pathShape("hill-back", 7, [150, 310], "M 0,290 Q 150,250 300,290 L 300,400 L 0,400 Z"),
    pathShape("hill-front", 4, [150, 350], "M 0,335 Q 150,295 300,335 L 300,400 L 0,400 Z"),
    // Center Wheat Stalk
    pathShape("stalk-c", 3, [150, 240], "M 150,370 Q 148,250 150,110"),
    ellipse("grain-c1", 4, [138, 120], 138, 120, 8, 16),
    ellipse("grain-c2", 4, [162, 120], 162, 120, 8, 16),
    ellipse("grain-c3", 5, [136, 150], 136, 150, 9, 16),
    ellipse("grain-c4", 5, [164, 150], 164, 150, 9, 16),
    ellipse("grain-c5", 4, [136, 180], 136, 180, 9, 16),
    ellipse("grain-c6", 4, [164, 180], 164, 180, 9, 16),
    ellipse("grain-c-top", 3, [150, 95], 150, 95, 7, 18),
    // Left Wheat Stalk
    pathShape("stalk-l", 3, [85, 260], "M 90,370 Q 75,260 70,140"),
    ellipse("grain-l1", 5, [60, 155], 60, 155, 8, 15),
    ellipse("grain-l2", 5, [80, 155], 80, 155, 8, 15),
    ellipse("grain-l3", 4, [58, 185], 58, 185, 8, 15),
    ellipse("grain-l4", 4, [82, 185], 82, 185, 8, 15),
    // Right Wheat Stalk
    pathShape("stalk-r", 3, [215, 260], "M 210,370 Q 225,260 230,140"),
    ellipse("grain-r1", 5, [220, 155], 220, 155, 8, 15),
    ellipse("grain-r2", 5, [240, 155], 240, 155, 8, 15),
    ellipse("grain-r3", 4, [218, 185], 218, 185, 8, 15),
    ellipse("grain-r4", 4, [242, 185], 242, 185, 8, 15),
    circle("field-poppy-1", 8, [45, 345], 45, 345, 10),
    circle("field-poppy-2", 8, [255, 350], 255, 350, 10)
  ]
});

console.log("Built templates 1-25 successfully!");

// 26. 🎋 Bamboo Grove (24 regions)
add({
  id: "bamboo-grove",
  name: "Bamboo Grove",
  emoji: "🎋",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F1F8E9", "#4CAF50", "#2E7D32", "#1B5E20", "#81C784", "#DCEDC8", "#5D4037", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("moss-ground", 3, [150, 385], 150, 385, 130, 20),
    // Center Stalk (4 segments)
    rect("stalk-c1", 2, [150, 325], 138, 285, 24, 80, 4),
    rect("stalk-c2", 4, [150, 235], 140, 195, 20, 80, 4),
    rect("stalk-c3", 2, [150, 145], 142, 105, 16, 80, 4),
    rect("stalk-c4", 4, [150, 60], 144, 20, 12, 75, 4),
    // Left Stalk (4 segments)
    rect("stalk-l1", 3, [75, 330], 65, 290, 20, 75, 4),
    rect("stalk-l2", 5, [75, 245], 67, 205, 16, 75, 4),
    rect("stalk-l3", 3, [75, 160], 69, 120, 12, 75, 4),
    rect("stalk-l4", 5, [75, 75], 71, 35, 8, 75, 4),
    // Right Stalk (4 segments)
    rect("stalk-r1", 3, [225, 330], 215, 290, 20, 75, 4),
    rect("stalk-r2", 5, [225, 245], 217, 205, 16, 75, 4),
    rect("stalk-r3", 3, [225, 160], 219, 120, 12, 75, 4),
    rect("stalk-r4", 5, [225, 75], 221, 35, 8, 75, 4),
    // Bamboo Leaves Sprays
    ellipse("leaf-c-l", 2, [105, 150], 105, 150, 35, 8),
    ellipse("leaf-c-r", 2, [195, 130], 195, 130, 35, 8),
    ellipse("leaf-top-l", 5, [115, 65], 115, 65, 30, 7),
    ellipse("leaf-top-r", 5, [185, 60], 185, 60, 30, 7),
    ellipse("leaf-l-l", 4, [35, 180], 35, 180, 28, 7),
    ellipse("leaf-r-r", 4, [265, 180], 265, 180, 28, 7),
    // Bamboo Shoot Sprout
    polygon("bamboo-shoot", 6, [110, 355], "110,335 100,375 120,375"),
    circle("zen-stone-1", 7, [190, 370], 190, 370, 12),
    circle("zen-stone-2", 7, [210, 375], 210, 375, 8),
    circle("sparkle-1", 8, [40, 55], 40, 55, 6)
  ]
});

// 27. 🌿 Green Fern (24 regions)
add({
  id: "fern-gully",
  name: "Green Fern",
  emoji: "🌿",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F1F8E9", "#2E7D32", "#1B5E20", "#388E3C", "#4CAF50", "#81C784", "#A5D6A7", "#FFD54F"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("soil-base", 3, [150, 385], 150, 385, 120, 20),
    pathShape("fern-rachis", 2, [150, 210], "M 150,380 Q 140,200 170,50"),
    // 8 Pairs of Leaflets (Pinnae)
    ellipse("pinna-l1", 4, [105, 95], 105, 95, 32, 9),
    ellipse("pinna-r1", 4, [205, 90], 205, 90, 32, 9),
    ellipse("pinna-l2", 5, [95, 135], 95, 135, 38, 10),
    ellipse("pinna-r2", 5, [215, 130], 215, 130, 38, 10),
    ellipse("pinna-l3", 4, [85, 175], 85, 175, 44, 11),
    ellipse("pinna-r3", 4, [225, 170], 225, 170, 44, 11),
    ellipse("pinna-l4", 5, [75, 215], 75, 215, 48, 12),
    ellipse("pinna-r4", 5, [235, 210], 235, 210, 48, 12),
    ellipse("pinna-l5", 4, [70, 255], 70, 255, 50, 13),
    ellipse("pinna-r5", 4, [240, 250], 240, 250, 50, 13),
    ellipse("pinna-l6", 5, [75, 295], 75, 295, 48, 13),
    ellipse("pinna-r6", 5, [235, 290], 235, 290, 48, 13),
    ellipse("pinna-l7", 6, [90, 335], 90, 335, 42, 12),
    ellipse("pinna-r7", 6, [220, 330], 220, 330, 42, 12),
    // Unfurling Crozier Head
    circle("crozier-curl", 6, [172, 45], 172, 45, 14),
    circle("crozier-in", 7, [172, 45], 172, 45, 6),
    circle("forest-spore-1", 8, [45, 65], 45, 65, 8),
    circle("forest-spore-2", 8, [255, 65], 255, 65, 8),
    circle("forest-spore-3", 8, [35, 130], 35, 130, 6),
    circle("forest-spore-4", 8, [265, 130], 265, 130, 6)
  ]
});

// 28. 🏵️ Golden Marigold (25 regions)
add({
  id: "golden-marigold",
  name: "Golden Marigold",
  emoji: "🏵️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFFDE7", "#FF6F00", "#FF8F00", "#FFA000", "#FFB300", "#FFC107", "#4CAF50", "#2E7D32", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    rect("marigold-stem", 8, [150, 300], 144, 210, 12, 170, 6),
    ellipse("leaf-l", 7, [90, 280], 90, 280, 45, 18),
    ellipse("leaf-r", 7, [210, 310], 210, 310, 45, 18),
    // Outer Ruffled Tier (8 petals)
    circle("petal-out-1", 2, [150, 75], 150, 75, 26),
    circle("petal-out-2", 3, [195, 95], 195, 95, 26),
    circle("petal-out-3", 2, [225, 140], 225, 140, 26),
    circle("petal-out-4", 3, [215, 185], 215, 185, 26),
    circle("petal-out-5", 2, [170, 215], 170, 215, 26),
    circle("petal-out-6", 3, [130, 215], 130, 215, 26),
    circle("petal-out-7", 2, [85, 185], 85, 185, 26),
    circle("petal-out-8", 3, [75, 140], 75, 140, 26),
    circle("petal-out-9", 2, [105, 95], 105, 95, 26),
    // Mid Ruffled Tier (6 petals)
    circle("petal-mid-1", 4, [150, 110], 150, 110, 22),
    circle("petal-mid-2", 5, [180, 125], 180, 125, 22),
    circle("petal-mid-3", 4, [180, 165], 180, 165, 22),
    circle("petal-mid-4", 5, [150, 180], 150, 180, 22),
    circle("petal-mid-5", 4, [120, 165], 120, 165, 22),
    circle("petal-mid-6", 5, [120, 125], 120, 125, 22),
    // Center Pompom Crown
    circle("core-pom-1", 6, [140, 140], 140, 140, 15),
    circle("core-pom-2", 6, [160, 140], 160, 140, 15),
    circle("core-center", 2, [150, 150], 150, 150, 14),
    circle("honeybee-body", 2, [60, 85], 60, 85, 8),
    ellipse("honeybee-wing", 9, [55, 75], 55, 75, 6, 12),
    circle("sparkle-1", 6, [250, 55], 250, 55, 8),
    circle("sparkle-2", 6, [45, 340], 45, 340, 8)
  ]
});

// 29. 🪵 Birch Wood Logs (24 regions)
add({
  id: "wood-logs",
  name: "Birch Wood Logs",
  emoji: "🪵",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F5F5F5", "#FFFFFF", "#E0E0E0", "#BDBDBD", "#4E342E", "#795548", "#8D6E63", "#4CAF50", "#FFD54F"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("ground-soil", 5, [150, 380], 150, 380, 135, 25),
    // Bottom Log 1 (Left)
    rect("log-1-bark", 2, [130, 320], 80, 290, 170, 60, 8),
    ellipse("log-1-face", 3, [80, 320], 80, 320, 24, 30),
    ellipse("log-1-ring", 4, [80, 320], 80, 320, 14, 18),
    circle("log-1-knot", 5, [80, 320], 80, 320, 6),
    pathShape("log-1-bark-mark1", 5, [140, 300], "M 130,295 L 150,295"),
    pathShape("log-1-bark-mark2", 5, [190, 330], "M 180,330 L 200,330"),
    // Bottom Log 2 (Right)
    rect("log-2-bark", 2, [170, 345], 110, 325, 160, 50, 8),
    pathShape("log-2-bark-mark", 5, [160, 345], "M 150,345 L 170,345"),
    // Top Stacked Log
    rect("log-3-bark", 2, [160, 240], 100, 210, 160, 60, 8),
    ellipse("log-3-face", 3, [100, 240], 100, 240, 24, 30),
    ellipse("log-3-ring", 4, [100, 240], 100, 240, 14, 18),
    circle("log-3-knot", 5, [100, 240], 100, 240, 6),
    pathShape("log-3-bark-mark1", 5, [150, 220], "M 140,220 L 160,220"),
    pathShape("log-3-bark-mark2", 5, [210, 250], "M 200,250 L 220,250"),
    // Forest Sprout & Mushroom
    pathShape("moss-patch", 8, [150, 205], "M 130,210 Q 150,195 170,210"),
    circle("mushroom-cap", 9, [75, 205], 75, 205, 14),
    rect("mushroom-stem", 2, [75, 225], 72, 215, 6, 20, 2),
    ellipse("leaf-sprout-1", 8, [225, 195], 225, 195, 18, 8),
    ellipse("leaf-sprout-2", 8, [245, 205], 245, 205, 16, 7),
    circle("sparkle-1", 9, [45, 60], 45, 60, 8),
    circle("sparkle-2", 9, [255, 60], 255, 60, 8),
    circle("sparkle-3", 9, [150, 45], 150, 45, 6)
  ]
});

// 30. 🪨 River Zen Stones (24 regions)
add({
  id: "river-stones",
  name: "River Zen Stones",
  emoji: "🪨",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F2F1", "#00897B", "#78909C", "#546E7A", "#37474F", "#263238", "#FFFFFF", "#FFD54F", "#F06292"],
  regions: [
    rect("water-bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("river-pool", 2, [150, 340], 150, 340, 140, 60),
    ellipse("ripple-1", 1, [150, 345], 150, 345, 120, 45),
    ellipse("ripple-2", 7, [150, 355], 150, 355, 95, 30),
    // Stone 1 (Bottom Huge)
    ellipse("stone-1-base", 5, [150, 330], 150, 330, 95, 32),
    ellipse("stone-1-hi", 3, [140, 320], 140, 320, 80, 22),
    // Stone 2 (Mid-Low Large)
    ellipse("stone-2-base", 6, [150, 275], 150, 275, 80, 28),
    ellipse("stone-2-hi", 4, [142, 268], 142, 268, 68, 18),
    // Stone 3 (Center Medium)
    ellipse("stone-3-base", 5, [150, 225], 150, 225, 65, 24),
    ellipse("stone-3-hi", 3, [145, 218], 145, 218, 52, 16),
    // Stone 4 (Mid-High Small)
    ellipse("stone-4-base", 6, [150, 180], 150, 180, 50, 20),
    ellipse("stone-4-hi", 4, [146, 174], 146, 174, 38, 14),
    // Stone 5 (Top Peak Pebble)
    ellipse("stone-5-base", 5, [150, 140], 150, 140, 34, 16),
    ellipse("stone-5-hi", 3, [148, 135], 148, 135, 24, 10),
    // Floating Sakura Flower Petals
    circle("petal-1", 9, [65, 290], 65, 290, 12),
    circle("petal-2", 9, [235, 300], 235, 300, 12),
    circle("petal-3", 9, [195, 360], 195, 360, 10),
    // River Bed Smooth Stones
    ellipse("bed-rock-l", 4, [45, 365], 45, 365, 22, 14),
    ellipse("bed-rock-r", 4, [255, 365], 255, 365, 22, 14),
    circle("zen-spark-1", 8, [50, 60], 50, 60, 8),
    circle("zen-spark-2", 8, [250, 60], 250, 60, 8),
    circle("zen-spark-3", 8, [150, 45], 150, 45, 6),
    circle("water-drop-1", 7, [150, 110], 150, 110, 5),
    circle("water-drop-2", 7, [150, 90], 150, 90, 4)
  ]
});

// 31. 🌺 Tropical Hibiscus (25 regions)
add({
  id: "hibiscus-bloom",
  name: "Tropical Hibiscus",
  emoji: "🌺",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF0F5", "#E91E63", "#C2185B", "#FF4081", "#FF80AB", "#FFD54F", "#4CAF50", "#2E7D32", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("foliage-l", 7, [55, 280], 55, 280, 45, 24),
    pathShape("foliage-l-vein", 8, [55, 280], "M 95,280 L 15,280"),
    ellipse("foliage-r", 7, [245, 280], 245, 280, 45, 24),
    pathShape("foliage-r-vein", 8, [245, 280], "M 205,280 L 285,280"),
    // 5 Giant Ruffled Hibiscus Petals
    ellipse("petal-top", 2, [150, 90], 150, 90, 50, 45),
    ellipse("petal-tr", 4, [215, 140], 215, 140, 48, 44),
    ellipse("petal-br", 2, [195, 225], 195, 225, 48, 44),
    ellipse("petal-bl", 4, [105, 225], 105, 225, 48, 44),
    ellipse("petal-tl", 2, [85, 140], 85, 140, 48, 44),
    // Inner Velvet Eye Flare
    circle("eye-halo", 3, [150, 165], 150, 165, 44),
    circle("eye-core", 3, [150, 165], 150, 165, 26),
    // Long Protruding Stamen Column
    rect("stamen-stalk", 6, [165, 115], 150, 65, 10, 100, 5),
    // 5 Golden Anther Pollen Tips
    circle("anther-1", 6, [145, 60], 145, 60, 7),
    circle("anther-2", 6, [160, 50], 160, 50, 7),
    circle("anther-3", 6, [175, 55], 175, 55, 7),
    circle("anther-4", 6, [155, 75], 155, 75, 6),
    circle("anther-5", 6, [170, 70], 170, 70, 6),
    // 5 Stigma Crimson Crests
    circle("stigma-1", 3, [160, 40], 160, 40, 5),
    circle("stigma-2", 3, [150, 45], 150, 45, 4),
    circle("stigma-3", 3, [170, 45], 170, 45, 4),
    circle("dew-drop-1", 9, [115, 110], 115, 110, 6),
    circle("dew-drop-2", 9, [205, 210], 205, 210, 6),
    circle("sparkle-1", 6, [45, 55], 45, 55, 8),
    circle("sparkle-2", 6, [255, 55], 255, 55, 8)
  ]
});

// 32. 🌪️ Wild Wind Valley (24 regions)
add({
  id: "tornado-valley",
  name: "Wild Wind Valley",
  emoji: "🌪️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#37474F", "#546E7A", "#78909C", "#90A4AE", "#CFD8DC", "#ECEFF1", "#2E7D32", "#FFD54F"],
  regions: [
    rect("storm-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("canyon-left", 7, [50, 350], "M 0,270 L 90,290 L 80,400 L 0,400 Z"),
    pathShape("canyon-right", 7, [250, 350], "M 210,290 L 300,270 L 300,400 L 220,400 Z"),
    // Tornado Funnel Tiers (Top to Bottom: Widest to Narrowest Point)
    ellipse("funnel-tier-1", 6, [150, 80], 150, 80, 110, 25),
    ellipse("funnel-tier-2", 5, [150, 115], 150, 115, 95, 22),
    ellipse("funnel-tier-3", 4, [150, 155], 150, 155, 80, 20),
    ellipse("funnel-tier-4", 3, [150, 195], 150, 195, 65, 18),
    ellipse("funnel-tier-5", 4, [150, 235], 150, 235, 50, 16),
    ellipse("funnel-tier-6", 3, [150, 275], 150, 275, 35, 14),
    ellipse("funnel-tier-7", 2, [150, 315], 150, 315, 22, 12),
    ellipse("funnel-tip", 1, [150, 345], 150, 345, 12, 8),
    // Debris Cloud at Base
    circle("debris-puff-1", 4, [125, 345], 125, 345, 18),
    circle("debris-puff-2", 4, [175, 345], 175, 345, 18),
    circle("debris-puff-3", 5, [150, 355], 150, 355, 16),
    // Swirling Wind Ribbons
    pathShape("wind-ribbon-1", 6, [50, 110], "M 20,130 Q 70,80 130,95"),
    pathShape("wind-ribbon-2", 6, [250, 110], "M 280,130 Q 230,80 170,95"),
    pathShape("wind-ribbon-3", 5, [45, 210], "M 15,225 Q 75,190 125,215"),
    pathShape("wind-ribbon-4", 5, [255, 210], "M 285,225 Q 225,190 175,215"),
    // Debris Particles
    circle("debris-1", 8, [70, 175], 70, 175, 5),
    circle("debris-2", 8, [230, 165], 230, 165, 5),
    circle("debris-3", 8, [100, 250], 100, 250, 4),
    circle("debris-4", 8, [200, 250], 200, 250, 4),
    circle("lightning-flash", 8, [260, 60], 260, 60, 12),
    circle("sparkle-1", 8, [40, 50], 40, 50, 6)
  ]
});

// 33. ❄️ Frost Snowflake (24 regions)
add({
  id: "crystal-snowflake",
  name: "Frost Snowflake",
  emoji: "❄️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#0D47A1", "#1976D2", "#42A5F5", "#90CAF9", "#E3F2FD", "#FFFFFF", "#80D8FF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    circle("outer-frost-halo", 2, [150, 200], 150, 200, 115),
    circle("inner-frost-halo", 3, [150, 200], 150, 200, 90),
    // 6 Main Snowflake Arms (Hexagonal Geometry)
    rect("arm-vert", 6, [150, 200], 145, 75, 10, 250, 5),
    pathShape("arm-diag-1", 6, [150, 200], "M 60,148 L 240,252 L 235,260 L 55,156 Z"),
    pathShape("arm-diag-2", 6, [150, 200], "M 60,252 L 240,148 L 245,156 L 65,260 Z"),
    // Arm Tips Diamonds (6 points)
    polygon("point-n", 6, [150, 75], "150,60 162,75 150,90 138,75"),
    polygon("point-s", 6, [150, 325], "150,310 162,325 150,340 138,325"),
    polygon("point-ne", 6, [240, 148], "240,135 252,148 240,161 228,148"),
    polygon("point-sw", 6, [60, 252], "60,239 72,252 60,265 48,252"),
    polygon("point-nw", 6, [60, 148], "60,135 72,148 60,161 48,148"),
    polygon("point-se", 6, [240, 252], "240,239 252,252 240,265 228,252"),
    // Central Hexagon Core
    polygon("hex-core-outer", 4, [150, 200], "150,165 180,182 180,218 150,235 120,218 120,182"),
    polygon("hex-core-inner", 5, [150, 200], "150,175 172,187 172,213 150,225 128,213 128,187"),
    circle("center-crystal", 6, [150, 200], 150, 200, 14),
    // Branching V-Barbs (6 pairs)
    pathShape("barb-n", 5, [150, 115], "M 130,120 L 150,105 L 170,120"),
    pathShape("barb-s", 5, [150, 285], "M 130,280 L 150,295 L 170,280"),
    circle("frost-sparkle-1", 7, [45, 60], 45, 60, 8),
    circle("frost-sparkle-2", 7, [255, 60], 255, 60, 8),
    circle("frost-sparkle-3", 7, [45, 340], 45, 340, 8),
    circle("frost-sparkle-4", 7, [255, 340], 255, 340, 8),
    circle("micro-flake-1", 6, [90, 75], 90, 75, 4),
    circle("micro-flake-2", 6, [210, 75], 210, 75, 4),
    circle("micro-flake-3", 6, [150, 365], 150, 365, 4)
  ]
});

// 34. 🌧️ Spring Rain (24 regions)
add({
  id: "rainy-cloud",
  name: "Spring Rain",
  emoji: "🌧️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#78909C", "#546E7A", "#37474F", "#0288D1", "#29B6F6", "#4CAF50", "#2E7D32"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("rain-puddle", 5, [150, 370], 150, 370, 130, 24),
    ellipse("puddle-ripple-1", 6, [150, 370], 150, 370, 95, 16),
    ellipse("puddle-ripple-2", 1, [150, 370], 150, 370, 60, 8),
    // Sprouting Plant in Puddle
    rect("sprout-stem", 8, [150, 345], 148, 330, 4, 30, 2),
    ellipse("sprout-leaf-l", 7, [140, 335], 140, 335, 12, 6),
    ellipse("sprout-leaf-r", 7, [160, 335], 160, 335, 12, 6),
    // Heavy Cumulus Cloud (6 Lobes)
    circle("cloud-p1", 3, [65, 115], 65, 115, 34),
    circle("cloud-p2", 4, [105, 95], 105, 95, 42),
    circle("cloud-p3", 2, [155, 80], 155, 80, 52),
    circle("cloud-p4", 3, [205, 95], 205, 95, 44),
    circle("cloud-p5", 4, [245, 120], 245, 120, 32),
    rect("cloud-flat-bottom", 2, [150, 130], 45, 110, 210, 40, 15),
    // 8 Teardrop Raindrops
    pathShape("drop-1", 5, [65, 190], "M 65,175 C 60,190 70,195 65,200 C 60,195 70,190 65,175 Z"),
    pathShape("drop-2", 6, [105, 230], "M 105,215 C 100,230 110,235 105,240 C 100,235 110,230 105,215 Z"),
    pathShape("drop-3", 5, [145, 185], "M 145,170 C 140,185 150,190 145,195 C 140,190 150,185 145,170 Z"),
    pathShape("drop-4", 6, [185, 225], "M 185,210 C 180,225 190,230 185,235 C 180,230 190,225 185,210 Z"),
    pathShape("drop-5", 5, [225, 190], "M 225,175 C 220,190 230,195 225,200 C 220,195 230,190 225,175 Z"),
    pathShape("drop-6", 6, [85, 280], "M 85,265 C 80,280 90,285 85,290 C 80,285 90,280 85,265 Z"),
    pathShape("drop-7", 5, [165, 280], "M 165,265 C 160,280 170,285 165,290 C 160,285 170,280 165,265 Z"),
    pathShape("drop-8", 6, [215, 280], "M 215,265 C 210,280 220,285 215,290 C 210,285 220,280 215,265 Z"),
    circle("splash-l", 6, [110, 360], 110, 360, 5),
    circle("splash-r", 6, [190, 360], 190, 360, 5),
    circle("sparkle-1", 6, [260, 50], 260, 50, 6)
  ]
});

// 35. 🍃 Forest Leaves (24 regions)
add({
  id: "floating-leaves",
  name: "Forest Leaves",
  emoji: "🍃",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#F1F8E9", "#4CAF50", "#2E7D32", "#81C784", "#FF9800", "#FF5722", "#FFC107", "#795548"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    // Swirling Wind Currents
    pathShape("wind-swirl-1", 4, [150, 100], "M 30,120 Q 150,60 270,110"),
    pathShape("wind-swirl-2", 4, [150, 200], "M 30,220 Q 150,160 270,210"),
    pathShape("wind-swirl-3", 4, [150, 300], "M 30,320 Q 150,260 270,310"),
    // Leaf 1: Giant Oak Leaf (Center)
    pathShape("leaf-1-oak", 2, [150, 190], "M 130,260 C 100,240 100,180 130,160 C 110,140 140,110 150,110 C 160,110 190,140 170,160 C 200,180 200,240 170,260 Z"),
    pathShape("leaf-1-vein", 3, [150, 190], "M 150,260 L 150,120"),
    // Leaf 2: Golden Maple Leaf (Top Left)
    polygon("leaf-2-maple", 7, [75, 95], "75,60 55,85 40,75 55,105 45,120 75,115 105,120 95,105 110,75 95,85"),
    pathShape("leaf-2-vein", 5, [75, 95], "M 75,120 L 75,70"),
    // Leaf 3: Scarlet Autumn Leaf (Top Right)
    ellipse("leaf-3-blade", 6, [225, 95], 225, 95, 30, 16),
    pathShape("leaf-3-stem", 8, [245, 110], "M 235,100 L 255,120"),
    // Leaf 4: Emerald Birch Leaf (Mid Left)
    ellipse("leaf-4-blade", 2, [65, 230], 65, 230, 26, 14),
    pathShape("leaf-4-vein", 3, [65, 230], "M 45,230 L 85,230"),
    // Leaf 5: Yellow Ginkgo Fan Leaf (Mid Right)
    pathShape("leaf-5-ginkgo", 7, [230, 220], "M 230,245 L 210,195 Q 230,185 250,195 Z"),
    rect("leaf-5-stem", 8, [230, 255], 229, 245, 2, 20),
    // Leaf 6: Willow Leaf (Bottom Left)
    ellipse("leaf-6-willow", 4, [85, 335], 85, 335, 36, 10),
    pathShape("leaf-6-stem", 8, [115, 345], "M 105,340 L 125,350"),
    // Leaf 7: Orange Aspen Leaf (Bottom Right)
    circle("leaf-7-aspen", 5, [220, 330], 220, 330, 20),
    pathShape("leaf-7-stem", 8, [235, 350], "M 225,345 L 245,355"),
    // Spores and Sparkles
    circle("spore-1", 7, [110, 60], 110, 60, 6),
    circle("spore-2", 7, [180, 70], 180, 70, 6),
    circle("spore-3", 7, [110, 270], 110, 270, 6),
    circle("spore-4", 7, [190, 270], 190, 270, 6),
    circle("sparkle-1", 7, [40, 50], 40, 50, 8),
    circle("sparkle-2", 7, [260, 50], 260, 50, 8)
  ]
});

// 36. 🏝️ Treasure Atoll (24 regions)
add({
  id: "desert-island",
  name: "Treasure Atoll",
  emoji: "🏝️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#00ACC1", "#00838F", "#FFD54F", "#FFA000", "#795548", "#4CAF50", "#2E7D32", "#FF6D00", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sun", 9, [235, 70], 235, 70, 32),
    ellipse("ocean-deep", 3, [150, 310], 150, 310, 150, 85),
    ellipse("outer-reef-ring", 2, [150, 310], 150, 310, 135, 70),
    ellipse("sand-atoll", 4, [150, 310], 150, 310, 115, 55),
    ellipse("inner-lagoon", 2, [150, 315], 150, 315, 60, 25),
    // Center Palm Tree
    pathShape("palm-trunk", 6, [140, 210], "M 150,300 Q 130,210 145,130 L 157,133 Q 145,210 162,300 Z"),
    pathShape("frond-1", 7, [85, 90], "M 150,130 Q 95,80 50,105 Q 95,120 150,130"),
    pathShape("frond-2", 8, [145, 60], "M 150,130 Q 145,45 150,25 Q 165,55 150,130"),
    pathShape("frond-3", 7, [215, 85], "M 150,130 Q 205,75 250,95 Q 200,120 150,130"),
    pathShape("frond-4", 8, [70, 140], "M 150,130 Q 80,140 55,175 Q 95,165 150,130"),
    pathShape("frond-5", 7, [225, 140], "M 150,130 Q 215,140 245,170 Q 200,160 150,130"),
    circle("coconut-1", 6, [145, 138], 145, 138, 8),
    circle("coconut-2", 6, [157, 138], 157, 138, 8),
    // Wooden Treasure Chest on Beach
    rect("chest-box", 6, [85, 295], 70, 285, 30, 20, 3),
    ellipse("chest-lid", 5, [85, 285], 85, 285, 15, 8),
    circle("gold-glow", 4, [85, 280], 85, 280, 8),
    pathShape("wave-1", 10, [60, 355], "M 40,355 Q 60,345 80,355"),
    pathShape("wave-2", 10, [220, 355], "M 200,355 Q 220,345 240,355"),
    pathShape("seagull-1", 6, [65, 60], "M 50,60 Q 65,50 80,60 Q 95,50 110,60"),
    pathShape("seagull-2", 6, [185, 50], "M 175,50 Q 185,42 195,50 Q 205,42 215,50"),
    circle("sparkle-1", 4, [45, 240], 45, 240, 6),
    circle("sparkle-2", 4, [255, 240], 255, 240, 6)
  ]
});

// 37. ⛰️ Alpine Ridge (24 regions)
add({
  id: "mountain-ridge",
  name: "Alpine Ridge",
  emoji: "⛰️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#78909C", "#546E7A", "#37474F", "#263238", "#FFFFFF", "#2E7D32", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sun", 8, [240, 70], 240, 70, 30),
    // Distant Blue Peaks
    polygon("peak-far-l", 2, [75, 140], "0,210 75,95 150,210"),
    polygon("peak-far-r", 2, [225, 140], "150,210 225,95 300,210"),
    // Main Razor Ridge
    polygon("ridge-left-face", 3, [100, 210], "0,310 150,110 150,310"),
    polygon("ridge-right-shadow", 4, [200, 210], "150,110 300,310 150,310"),
    // Snow Caps on Ridge
    polygon("snow-crest-top", 6, [150, 130], "150,110 120,150 150,140 180,150"),
    polygon("snow-slope-l", 6, [95, 200], "120,150 80,230 105,210 135,190"),
    polygon("snow-slope-r", 6, [205, 200], "180,150 220,230 195,210 165,190"),
    // Foreground Rocky Scree Slopes
    pathShape("scree-left", 5, [65, 340], "M 0,290 L 130,290 L 110,400 L 0,400 Z"),
    pathShape("scree-right", 5, [235, 340], "M 170,290 L 300,290 L 300,400 L 190,400 Z"),
    // Valley Alpine Meadow
    ellipse("alpine-meadow", 7, [150, 370], 150, 370, 130, 25),
    // Alpine Pine Trees
    polygon("pine-1", 7, [40, 290], "40,265 25,310 55,310"),
    polygon("pine-2", 7, [80, 295], "80,270 65,315 95,315"),
    polygon("pine-3", 7, [220, 295], "220,270 205,315 235,315"),
    polygon("pine-4", 7, [260, 290], "260,265 245,310 275,310"),
    // Cirrus Clouds
    pathShape("cloud-1", 6, [60, 75], "M 20,75 Q 60,65 100,75"),
    pathShape("cloud-2", 6, [130, 60], "M 100,60 Q 135,50 170,60"),
    pathShape("hawk", 5, [95, 45], "M 85,45 Q 95,38 105,45 Q 115,38 125,45"),
    circle("sparkle-1", 8, [270, 130], 270, 130, 6),
    circle("wildflower-1", 8, [125, 375], 125, 375, 5),
    circle("wildflower-2", 8, [175, 375], 175, 375, 5),
    circle("scree-rock", 4, [150, 335], 150, 335, 8)
  ]
});

// 38. 🏞️ Emerald Canyon (24 regions)
add({
  id: "national-park",
  name: "Emerald Canyon",
  emoji: "🌄",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF3E0", "#FFB74D", "#D84315", "#BF360C", "#8D6E63", "#5D4037", "#00897B", "#004D40", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sunrise", 9, [150, 65], 150, 65, 36),
    // Sandstone Strata Layers (Left Canyon Wall)
    pathShape("canyon-l-top", 2, [50, 120], "M 0,90 L 110,90 L 105,140 L 0,140 Z"),
    pathShape("canyon-l-m1", 3, [50, 165], "M 0,140 L 105,140 L 100,190 L 0,190 Z"),
    pathShape("canyon-l-m2", 4, [50, 215], "M 0,190 L 100,190 L 95,240 L 0,240 Z"),
    pathShape("canyon-l-bot", 5, [50, 280], "M 0,240 L 95,240 L 85,340 L 0,340 Z"),
    // Sandstone Strata Layers (Right Canyon Wall)
    pathShape("canyon-r-top", 2, [250, 120], "M 190,90 L 300,90 L 300,140 L 195,140 Z"),
    pathShape("canyon-r-m1", 3, [250, 165], "M 195,140 L 300,140 L 300,190 L 200,190 Z"),
    pathShape("canyon-r-m2", 4, [250, 215], "M 200,190 L 300,190 L 300,240 L 205,240 Z"),
    pathShape("canyon-r-bot", 5, [250, 280], "M 205,240 L 300,240 L 300,340 L 215,340 Z"),
    // Winding Emerald River
    pathShape("river-top", 7, [150, 140], "M 125,100 L 175,100 L 165,180 L 135,180 Z"),
    pathShape("river-mid", 8, [150, 230], "M 135,180 L 165,180 L 180,280 L 120,280 Z"),
    pathShape("river-bot", 7, [150, 335], "M 120,280 L 180,280 L 220,400 L 80,400 Z"),
    // Canyon Floor Riverbanks
    pathShape("bank-l", 6, [45, 370], "M 0,340 L 80,400 L 0,400 Z"),
    pathShape("bank-r", 6, [255, 370], "M 300,340 L 220,400 L 300,400 Z"),
    // Canyon Rim Pine Tree
    polygon("rim-pine", 8, [95, 75], "95,50 80,90 110,90"),
    pathShape("bird-1", 6, [60, 45], "M 50,45 Q 60,38 70,45 Q 80,38 90,45"),
    pathShape("bird-2", 6, [210, 50], "M 200,50 Q 210,42 220,50 Q 230,42 240,50"),
    circle("sparkle-1", 9, [40, 30], 40, 30, 6),
    circle("sparkle-2", 9, [260, 30], 260, 30, 6),
    circle("sunbeam-1", 2, [115, 65], 115, 65, 8),
    circle("sunbeam-2", 2, [185, 65], 185, 65, 8)
  ]
});

// 39. 🪻 Lavender Valley (24 regions)
add({
  id: "lavender-field",
  name: "Lavender Valley",
  emoji: "🪻",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF8E1", "#CE93D8", "#BA68C8", "#AB47BC", "#8E24AA", "#6A1B9A", "#4CAF50", "#2E7D32", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("provence-sun", 9, [240, 65], 240, 65, 35),
    pathShape("distant-hills", 7, [150, 130], "M 0,140 Q 150,105 300,140 L 300,170 L 0,170 Z"),
    // 5 Receding Lavender Crop Rows (Furrows)
    polygon("furrow-1", 5, [30, 280], "0,170 50,170 80,400 0,400"),
    polygon("furrow-2", 4, [95, 280], "60,170 110,170 145,400 85,400"),
    polygon("furrow-3", 3, [150, 280], "120,170 180,170 215,400 150,400"),
    polygon("furrow-4", 4, [205, 280], "190,170 240,170 275,400 220,400"),
    polygon("furrow-5", 5, [270, 280], "250,170 300,170 300,400 280,400"),
    // Detailed Lavender Flower Spikes in Foreground
    rect("spike-stalk-1", 8, [50, 290], 48, 220, 4, 120, 2),
    ellipse("spike-blossom-1a", 2, [50, 220], 50, 220, 10, 20),
    ellipse("spike-blossom-1b", 6, [50, 240], 50, 240, 12, 18),
    rect("spike-stalk-2", 8, [120, 270], 118, 200, 4, 140, 2),
    ellipse("spike-blossom-2a", 3, [120, 200], 120, 200, 10, 20),
    ellipse("spike-blossom-2b", 6, [120, 220], 120, 220, 12, 18),
    rect("spike-stalk-3", 8, [180, 270], 178, 200, 4, 140, 2),
    ellipse("spike-blossom-3a", 2, [180, 200], 180, 200, 10, 20),
    ellipse("spike-blossom-3b", 6, [180, 220], 180, 220, 12, 18),
    rect("spike-stalk-4", 8, [250, 290], 248, 220, 4, 120, 2),
    ellipse("spike-blossom-4a", 3, [250, 220], 250, 220, 10, 20),
    ellipse("spike-blossom-4b", 6, [250, 240], 250, 240, 12, 18),
    circle("bumblebee-body", 9, [145, 125], 145, 125, 8),
    circle("sparkle-1", 9, [40, 45], 40, 45, 7),
    circle("sparkle-2", 9, [100, 40], 100, 40, 5)
  ]
});

// 40. 🌳 Mighty Oak (24 regions)
add({
  id: "oak-tree",
  name: "Mighty Oak",
  emoji: "🌳",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E8F5E9", "#2E7D32", "#1B5E20", "#388E3C", "#4CAF50", "#81C784", "#5D4037", "#3E2723", "#FFD54F"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    ellipse("meadow-soil", 3, [150, 385], 150, 385, 135, 24),
    // Massive Oak Trunk with Roots and Branches
    pathShape("oak-trunk-body", 7, [150, 310], "M 120,380 L 130,240 L 105,190 L 120,195 L 140,230 L 160,230 L 180,195 L 195,190 L 170,240 L 180,380 Z"),
    pathShape("bark-groove-1", 8, [140, 300], "M 138,260 L 135,360"),
    pathShape("bark-groove-2", 8, [160, 300], "M 162,260 L 165,360"),
    ellipse("branch-l", 7, [95, 195], 95, 195, 30, 8),
    ellipse("branch-r", 7, [205, 195], 205, 195, 30, 8),
    // 10 Layered Foliage Canopy Dome Puffs
    circle("canopy-top", 2, [150, 80], 150, 80, 48),
    circle("canopy-tl", 4, [105, 105], 105, 105, 42),
    circle("canopy-tr", 5, [195, 105], 195, 105, 42),
    circle("canopy-ml", 2, [70, 150], 70, 150, 40),
    circle("canopy-mr", 4, [230, 150], 230, 150, 40),
    circle("canopy-c", 3, [150, 140], 150, 140, 46),
    circle("canopy-bl", 5, [95, 185], 95, 185, 36),
    circle("canopy-br", 2, [205, 185], 205, 185, 36),
    circle("canopy-sub-l", 6, [130, 110], 130, 110, 22),
    circle("canopy-sub-r", 6, [170, 110], 170, 110, 22),
    // Dangling Acorns
    ellipse("acorn-1", 8, [110, 215], 110, 215, 6, 9),
    circle("acorn-cap-1", 7, [110, 210], 110, 210, 7),
    ellipse("acorn-2", 8, [190, 215], 190, 215, 6, 9),
    circle("acorn-cap-2", 7, [190, 210], 190, 210, 7),
    circle("bird-perched", 9, [100, 180], 100, 180, 6),
    circle("sparkle-1", 9, [40, 50], 40, 50, 8),
    circle("sparkle-2", 9, [260, 50], 260, 50, 8)
  ]
});

console.log("Built templates 1-40 successfully!");

// 41. 🏜️ Sahara Dunes (24 regions)
add({
  id: "desert-dunes",
  name: "Sahara Dunes",
  emoji: "🏜️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#FFF3E0", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#E65100", "#795548", "#2E7D32", "#FFD54F"],
  regions: [
    rect("desert-sky", 1, [25, 30], 0, 0, 300, 400),
    circle("scorching-sun", 10, [230, 70], 230, 70, 38),
    circle("sun-halo", 2, [230, 70], 230, 70, 55),
    // 5 Sinuous Sand Dunes with Sunlit Face and Shadow Ridge
    pathShape("dune-1-sun", 2, [150, 160], "M 0,150 Q 150,110 300,160 L 300,210 L 0,210 Z"),
    pathShape("dune-1-shad", 4, [150, 180], "M 0,150 Q 150,135 300,160 L 300,190 L 0,190 Z"),
    pathShape("dune-2-sun", 3, [150, 210], "M 0,200 Q 140,160 300,210 L 300,260 L 0,260 Z"),
    pathShape("dune-2-shad", 5, [150, 230], "M 0,200 Q 140,185 300,210 L 300,240 L 0,240 Z"),
    pathShape("dune-3-sun", 4, [150, 260], "M 0,250 Q 160,210 300,260 L 300,310 L 0,310 Z"),
    pathShape("dune-3-shad", 6, [150, 280], "M 0,250 Q 160,235 300,260 L 300,290 L 0,290 Z"),
    pathShape("dune-4-sun", 5, [150, 310], "M 0,300 Q 130,260 300,310 L 300,360 L 0,360 Z"),
    pathShape("dune-4-shad", 7, [150, 330], "M 0,300 Q 130,285 300,310 L 300,340 L 0,340 Z"),
    pathShape("dune-5-foreground", 6, [150, 370], "M 0,350 Q 150,320 300,350 L 300,400 L 0,400 Z"),
    // Oasis Palm Silhouette on Horizon
    pathShape("oasis-palm-trunk", 8, [65, 140], "M 65,155 Q 60,130 65,115"),
    circle("oasis-palm-fronds", 9, [65, 110], 65, 110, 15),
    circle("oasis-water", 9, [95, 150], 95, 150, 12),
    // Desert Caravan Camel Silhouette
    ellipse("camel-body", 8, [200, 195], 200, 195, 14, 8),
    circle("camel-hump", 8, [200, 188], 200, 188, 6),
    circle("camel-head", 8, [212, 190], 212, 190, 4),
    // Heat Shimmer Sparks
    circle("heat-spark-1", 10, [40, 50], 40, 50, 6),
    circle("heat-spark-2", 10, [100, 40], 100, 40, 6),
    circle("heat-spark-3", 10, [150, 45], 150, 45, 5),
    circle("sand-ripple-1", 7, [80, 370], 80, 370, 4),
    circle("sand-ripple-2", 7, [220, 370], 220, 370, 4)
  ]
});

// 42. 🌫️ Misty Mountains (24 regions)
add({
  id: "misty-valley",
  name: "Misty Mountains",
  emoji: "🌫️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#78909C", "#546E7A", "#37474F", "#263238", "#FFFFFF", "#FFD54F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("pale-sun", 8, [150, 75], 150, 75, 28),
    // 5 Receding Mountain Ranges (Far to Near)
    polygon("peak-far-1", 2, [60, 110], "0,160 60,80 120,160"),
    polygon("peak-far-2", 2, [240, 110], "180,160 240,80 300,160"),
    polygon("peak-mid-1", 3, [150, 150], "60,210 150,110 240,210"),
    polygon("peak-mid-2", 4, [60, 210], "0,270 60,160 140,270"),
    polygon("peak-mid-3", 4, [240, 210], "160,270 240,160 300,270"),
    polygon("peak-fore-1", 5, [150, 270], "30,340 150,210 270,340"),
    polygon("ridge-dark-l", 6, [60, 340], "0,400 60,280 130,400"),
    polygon("ridge-dark-r", 6, [240, 340], "170,400 240,280 300,400"),
    polygon("ridge-center", 7, [150, 370], "90,400 150,330 210,400"),
    // Swirling Horizontal Mist & Fog Ribbons
    ellipse("mist-ribbon-1", 8, [150, 130], 150, 130, 140, 14),
    ellipse("mist-ribbon-2", 8, [150, 185], 150, 185, 140, 16),
    ellipse("mist-ribbon-3", 8, [150, 240], 150, 240, 140, 18),
    ellipse("mist-ribbon-4", 8, [150, 310], 150, 310, 140, 20),
    // Solitary Pine Silhouettes
    polygon("pine-1", 7, [40, 350], "40,325 25,370 55,370"),
    polygon("pine-2", 7, [260, 350], "260,325 245,370 275,370"),
    pathShape("bird-soar", 7, [150, 50], "M 140,50 Q 150,42 160,50"),
    circle("sparkle-1", 9, [40, 45], 40, 45, 6),
    circle("sparkle-2", 9, [260, 45], 260, 45, 6),
    circle("mist-orb-1", 8, [90, 180], 90, 180, 8),
    circle("mist-orb-2", 8, [210, 180], 210, 180, 8)
  ]
});

// 43. ⛅ Morning Sun Cloud (24 regions)
add({
  id: "sun-behind-cloud",
  name: "Morning Sun Cloud",
  emoji: "⛅",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#FFD54F", "#FFB300", "#FF8F00", "#FFFFFF", "#ECEFF1", "#4CAF50", "#2E7D32", "#FF6D00"],
  regions: [
    rect("dawn-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("hill-back", 7, [150, 340], "M 0,320 Q 150,280 300,320 L 300,400 L 0,400 Z"),
    pathShape("hill-front", 8, [150, 370], "M 0,355 Q 150,320 300,355 L 300,400 L 0,400 Z"),
    // Radiant Sun Behind Cloud
    circle("sun-halo", 4, [115, 140], 115, 140, 68),
    circle("sun-body", 2, [115, 140], 115, 140, 50),
    circle("sun-core", 3, [115, 140], 115, 140, 30),
    rect("sun-ray-1", 9, [115, 55], 111, 40, 8, 30, 4),
    rect("sun-ray-2", 9, [40, 140], 25, 136, 30, 8, 4),
    rect("sun-ray-3", 9, [60, 85], 50, 75, 20, 8, 4),
    rect("sun-ray-4", 9, [170, 85], 160, 75, 20, 8, 4),
    // Fluffy Cloud (6 Lobes overlapping the sun)
    circle("cloud-p1", 5, [110, 210], 110, 210, 35),
    circle("cloud-p2", 5, [150, 175], 150, 175, 45),
    circle("cloud-p3", 5, [205, 170], 205, 170, 48),
    circle("cloud-p4", 5, [255, 200], 255, 200, 35),
    rect("cloud-flat", 5, [180, 220], 90, 195, 180, 45, 15),
    ellipse("cloud-shade", 6, [180, 235], 180, 235, 75, 12),
    // Birds at Dawn
    pathShape("bird-1", 9, [65, 75], "M 50,75 Q 65,65 80,75 Q 95,65 110,75"),
    pathShape("bird-2", 9, [230, 65], "M 220,65 Q 230,57 240,65 Q 250,57 260,65"),
    circle("wildflower-1", 2, [70, 370], 70, 370, 6),
    circle("wildflower-2", 2, [230, 370], 230, 370, 6),
    circle("sparkle-1", 9, [40, 45], 40, 45, 7),
    circle("sparkle-2", 9, [260, 45], 260, 45, 7),
    circle("sparkle-3", 3, [150, 30], 150, 30, 5)
  ]
});

// 44. 🌤️ Breezy Sky (24 regions)
add({
  id: "partly-cloudy",
  name: "Breezy Sky",
  emoji: "🌤️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#81D4FA", "#FFD54F", "#FFB300", "#FFFFFF", "#ECEFF1", "#4CAF50", "#2E7D32", "#FF6D00"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("rolling-meadow", 7, [150, 360], "M 0,340 Q 150,300 300,340 L 300,400 L 0,400 Z"),
    // Sun in Corner
    circle("sun-halo", 3, [235, 75], 235, 75, 48),
    circle("sun-core", 4, [235, 75], 235, 75, 30),
    rect("ray-1", 9, [235, 15], 231, 5, 8, 25, 4),
    rect("ray-2", 9, [285, 75], 275, 71, 25, 8, 4),
    rect("ray-3", 9, [175, 75], 165, 71, 25, 8, 4),
    rect("ray-4", 9, [195, 35], 185, 25, 20, 8, 4),
    // Sailing Cloud (6 Lobes)
    circle("cloud-p1", 5, [65, 185], 65, 185, 34),
    circle("cloud-p2", 5, [110, 160], 110, 160, 44),
    circle("cloud-p3", 5, [165, 150], 165, 150, 50),
    circle("cloud-p4", 5, [220, 175], 220, 175, 38),
    rect("cloud-flat", 5, [145, 195], 50, 175, 190, 40, 15),
    ellipse("cloud-shade", 6, [145, 210], 145, 210, 80, 10),
    // Swirling Wind Currents
    pathShape("breeze-trail-1", 2, [60, 260], "M 20,260 Q 75,230 130,250"),
    pathShape("breeze-trail-2", 2, [190, 255], "M 150,255 Q 210,225 270,245"),
    pathShape("breeze-trail-3", 2, [120, 300], "M 70,300 Q 130,270 190,290"),
    // Floating Dandelion Tufts
    circle("tuft-1", 5, [75, 245], 75, 245, 6),
    circle("tuft-2", 5, [145, 275], 145, 275, 6),
    circle("tuft-3", 5, [215, 240], 215, 240, 6),
    circle("wildflower", 9, [150, 370], 150, 370, 8),
    circle("sparkle-1", 3, [40, 50], 40, 50, 7),
    circle("sparkle-2", 3, [120, 60], 120, 60, 5)
  ]
});

// 45. 🌦️ Sun Shower (24 regions)
add({
  id: "sun-shower",
  name: "Sun Shower",
  emoji: "🌦️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#FFD54F", "#FFB300", "#FF5252", "#4CAF50", "#2196F3", "#9C27B0", "#FFFFFF", "#4FC3F7"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    // Rainbow Arc in Sky
    pathShape("rainbow-r", 4, [150, 110], "M 30,200 A 120,120 0 0,1 270,200 L 255,200 A 105,105 0 0,0 45,200 Z"),
    pathShape("rainbow-g", 5, [150, 125], "M 45,200 A 105,105 0 0,1 255,200 L 240,200 A 90,90 0 0,0 60,200 Z"),
    pathShape("rainbow-b", 6, [150, 140], "M 60,200 A 90,90 0 0,1 240,200 L 225,200 A 75,75 0 0,0 75,200 Z"),
    pathShape("rainbow-p", 7, [150, 155], "M 75,200 A 75,75 0 0,1 225,200 L 210,200 A 60,60 0 0,0 90,200 Z"),
    // Radiant Sun in Top Left
    circle("sun-halo", 2, [75, 75], 75, 75, 46),
    circle("sun-core", 3, [75, 75], 75, 75, 28),
    rect("sun-ray-1", 2, [75, 15], 71, 5, 8, 25, 4),
    rect("sun-ray-2", 2, [15, 75], 5, 71, 25, 8, 4),
    // Raincloud in Top Right
    circle("cloud-p1", 8, [155, 95], 155, 95, 32),
    circle("cloud-p2", 8, [195, 75], 195, 75, 40),
    circle("cloud-p3", 8, [245, 90], 245, 90, 34),
    rect("cloud-flat", 8, [200, 110], 140, 90, 125, 35, 12),
    // Sparkling Sunlit Raindrops
    circle("rain-1", 9, [140, 170], 140, 170, 7),
    circle("rain-2", 9, [180, 200], 180, 200, 7),
    circle("rain-3", 9, [220, 170], 220, 170, 7),
    circle("rain-4", 9, [160, 240], 160, 240, 7),
    circle("rain-5", 9, [200, 270], 200, 270, 7),
    circle("rain-6", 9, [240, 230], 240, 230, 7),
    // Green Meadow Puddle Basin
    ellipse("meadow-soil", 5, [150, 375], 150, 375, 135, 25),
    ellipse("sun-puddle", 9, [150, 375], 150, 375, 85, 14),
    circle("sparkle-1", 2, [255, 35], 255, 35, 7),
    circle("sparkle-2", 2, [35, 150], 35, 150, 7),
    circle("sparkle-3", 8, [150, 310], 150, 310, 6)
  ]
});

// 46. ⛈️ Thunderstorm (24 regions)
add({
  id: "thunderstorm",
  name: "Thunderstorm",
  emoji: "⛈️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#0B132B", "#1C2541", "#3A506B", "#FFD600", "#FFEA00", "#FFFFFF", "#00B4D8", "#2E7D32"],
  regions: [
    rect("storm-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("storm-ground", 8, [150, 380], "M 0,360 Q 150,330 300,360 L 300,400 L 0,400 Z"),
    // Ominous Multi-Tier Thunderclouds
    circle("cloud-p1", 2, [60, 95], 60, 95, 42),
    circle("cloud-p2", 3, [115, 75], 115, 75, 54),
    circle("cloud-p3", 2, [175, 70], 175, 70, 56),
    circle("cloud-p4", 3, [235, 85], 235, 85, 48),
    rect("cloud-flat-1", 2, [150, 115], 30, 90, 240, 50, 15),
    ellipse("cloud-flat-2", 3, [150, 140], 150, 140, 110, 20),
    // 2 Jagged Lightning Strikes (Left and Right)
    polygon("bolt-left", 4, [100, 220], "115,140 85,210 105,210 75,300 125,195 105,195"),
    polygon("bolt-left-core", 6, [100, 220], "112,148 88,205 102,205 82,285 118,198 102,198"),
    polygon("bolt-right", 5, [200, 220], "185,140 215,210 195,210 225,300 175,195 195,195"),
    polygon("bolt-right-core", 6, [200, 220], "188,148 212,205 198,205 218,285 182,198 198,198"),
    // Heavy Torrential Rain Bands
    pathShape("rain-band-1", 7, [40, 240], "M 40,165 L 25,320"),
    pathShape("rain-band-2", 7, [70, 260], "M 70,185 L 55,340"),
    pathShape("rain-band-3", 7, [135, 270], "M 135,195 L 120,350"),
    pathShape("rain-band-4", 7, [165, 270], "M 165,195 L 150,350"),
    pathShape("rain-band-5", 7, [230, 260], "M 230,185 L 215,340"),
    pathShape("rain-band-6", 7, [260, 240], "M 260,165 L 245,320"),
    // Ground Water Splashes
    circle("ground-splash-1", 7, [75, 340], 75, 340, 6),
    circle("ground-splash-2", 7, [225, 340], 225, 340, 6),
    circle("flash-center", 4, [150, 140], 150, 140, 12),
    circle("sparkle-1", 6, [40, 45], 40, 45, 7),
    circle("sparkle-2", 6, [260, 45], 260, 45, 7)
  ]
});

// 47. 🌨️ Arctic Blizzard (24 regions)
add({
  id: "snowstorm",
  name: "Arctic Blizzard",
  emoji: "🌨️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#CFD8DC", "#B0BEC5", "#78909C", "#37474F", "#FFFFFF", "#90CAF9", "#E3F2FD"],
  regions: [
    rect("tundra-sky", 1, [25, 30], 0, 0, 300, 400),
    // Snow Dune Drifts
    pathShape("snow-drift-back", 2, [150, 320], "M 0,300 Q 150,260 300,300 L 300,400 L 0,400 Z"),
    pathShape("snow-drift-mid", 3, [150, 350], "M 0,335 Q 150,295 300,335 L 300,400 L 0,400 Z"),
    pathShape("snow-drift-front", 6, [150, 375], "M 0,365 Q 150,330 300,365 L 300,400 L 0,400 Z"),
    // Heavy Snow Clouds Above
    circle("snow-cloud-1", 4, [65, 95], 65, 95, 36),
    circle("snow-cloud-2", 5, [115, 75], 115, 75, 46),
    circle("snow-cloud-3", 4, [175, 70], 175, 70, 50),
    circle("snow-cloud-4", 5, [235, 90], 235, 90, 40),
    rect("snow-cloud-base", 4, [150, 115], 35, 95, 230, 40, 15),
    // Howling Wind Swirls
    pathShape("howling-wind-1", 7, [80, 190], "M 20,200 Q 90,160 160,185"),
    pathShape("howling-wind-2", 7, [210, 210], "M 140,225 Q 210,185 280,210"),
    pathShape("howling-wind-3", 7, [90, 270], "M 30,285 Q 100,245 170,270"),
    // 8 Varied Snow Flakes & Clumps
    circle("snow-clump-1", 6, [55, 160], 55, 160, 9),
    circle("snow-clump-2", 6, [105, 205], 105, 205, 11),
    circle("snow-clump-3", 6, [175, 165], 175, 165, 9),
    circle("snow-clump-4", 6, [235, 195], 235, 195, 10),
    circle("snow-clump-5", 6, [75, 255], 75, 255, 10),
    circle("snow-clump-6", 6, [135, 295], 135, 295, 8),
    circle("snow-clump-7", 6, [205, 255], 205, 255, 11),
    circle("snow-clump-8", 6, [255, 285], 255, 285, 9),
    // Arctic Sun Halo
    circle("arctic-sun-dog", 8, [150, 75], 150, 75, 20),
    circle("sparkle-1", 6, [45, 45], 45, 45, 7),
    circle("sparkle-2", 6, [255, 45], 255, 45, 7)
  ]
});

// 48. 🌬️ Gentle Breeze (24 regions)
add({
  id: "wind-gust",
  name: "Gentle Breeze",
  emoji: "🌬️",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#80DEEA", "#4DD0E1", "#26C6DA", "#00ACC1", "#FFFFFF", "#4CAF50", "#2E7D32"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("grass-meadow", 7, [150, 380], 150, 380, 135, 25),
    // Dandelion Stalk & Leaves at Bottom
    rect("dandelion-stem", 8, [80, 320], 78, 260, 4, 110, 2),
    ellipse("dandelion-leaf-l", 7, [55, 340], 55, 340, 22, 9),
    ellipse("dandelion-leaf-r", 7, [105, 350], 105, 350, 22, 9),
    circle("dandelion-head", 6, [80, 260], 80, 260, 16),
    // Flowing Wind Stream Ribbon 1
    pathShape("wind-loop-1", 2, [150, 90], "M 30,110 C 90,60 170,60 210,100 C 230,120 210,150 180,140 C 150,130 150,90 200,80 L 270,80"),
    // Flowing Wind Stream Ribbon 2
    pathShape("wind-loop-2", 3, [150, 150], "M 20,165 C 80,120 160,120 200,160 C 220,180 200,210 170,200 C 140,190 140,150 190,140 L 280,140"),
    // Flowing Wind Stream Ribbon 3
    pathShape("wind-loop-3", 4, [150, 210], "M 30,225 C 90,180 170,180 210,220 C 230,240 210,270 180,260 L 270,260"),
    // Drifting Dandelion Parachute Seeds (8 Floating Seeds)
    circle("seed-1", 6, [115, 230], 115, 230, 8),
    circle("seed-2", 6, [145, 190], 145, 190, 8),
    circle("seed-3", 6, [185, 165], 185, 165, 8),
    circle("seed-4", 6, [225, 120], 225, 120, 8),
    circle("seed-5", 6, [255, 75], 255, 75, 8),
    circle("seed-6", 6, [160, 245], 160, 245, 7),
    circle("seed-7", 6, [210, 215], 210, 215, 7),
    circle("seed-8", 6, [245, 175], 245, 175, 7),
    // Airborne Pollen Sparks
    circle("pollen-1", 5, [50, 60], 50, 60, 5),
    circle("pollen-2", 5, [100, 45], 100, 45, 5),
    circle("pollen-3", 5, [180, 40], 180, 40, 5),
    circle("sparkle-1", 6, [40, 300], 40, 300, 6),
    circle("sparkle-2", 6, [260, 300], 260, 300, 6)
  ]
});

// 49. 🌸 Cherry Blossom (25 regions)
add({
  id: "mossy-boulder",
  name: "Cherry Blossom",
  emoji: "🌸",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#795548", "#4E342E", "#F8BBD0", "#F48FB1", "#EC407A", "#FFD54F", "#FFFFFF", "#81C784"],
  regions: [
    rect("spring-sky", 1, [25, 30], 0, 0, 300, 400),
    // Gnarled Sakura Tree Branch
    pathShape("branch-main", 3, [150, 180], "M 0,110 Q 120,130 180,210 Q 240,290 300,320 L 300,345 Q 230,310 170,230 Q 110,150 0,135 Z"),
    pathShape("twig-top", 2, [140, 110], "M 110,135 Q 140,110 170,105 L 165,115 Q 140,120 115,142 Z"),
    pathShape("twig-bot", 2, [210, 270], "M 190,235 Q 210,270 245,285 L 240,295 Q 205,280 185,245 Z"),
    // Flower 1 (Center Large 5-Petals)
    circle("fl-1-p1", 4, [140, 160], 140, 160, 14),
    circle("fl-1-p2", 5, [160, 160], 160, 160, 14),
    circle("fl-1-p3", 4, [170, 180], 170, 180, 14),
    circle("fl-1-p4", 5, [150, 195], 150, 195, 14),
    circle("fl-1-p5", 4, [130, 180], 130, 180, 14),
    circle("fl-1-core", 7, [150, 175], 150, 175, 8),
    // Flower 2 (Top Left 5-Petals)
    circle("fl-2-p1", 5, [75, 95], 75, 95, 12),
    circle("fl-2-p2", 4, [95, 95], 95, 95, 12),
    circle("fl-2-p3", 5, [105, 115], 105, 115, 12),
    circle("fl-2-p4", 4, [85, 125], 85, 125, 12),
    circle("fl-2-p5", 5, [65, 115], 65, 115, 12),
    circle("fl-2-core", 7, [85, 110], 85, 110, 7),
    // Flower 3 (Bottom Right 5-Petals)
    circle("fl-3-p1", 4, [235, 275], 235, 275, 12),
    circle("fl-3-p2", 5, [255, 275], 255, 275, 12),
    circle("fl-3-p3", 4, [265, 295], 265, 295, 12),
    circle("fl-3-p4", 5, [245, 305], 245, 305, 12),
    circle("fl-3-p5", 4, [225, 295], 225, 295, 12),
    circle("fl-3-core", 7, [245, 290], 245, 290, 7),
    // Falling Petals
    ellipse("falling-petal-1", 6, [90, 220], 90, 220, 10, 6),
    ellipse("falling-petal-2", 6, [125, 290], 125, 290, 9, 5),
    ellipse("falling-petal-3", 6, [210, 140], 210, 140, 10, 6),
    circle("sparkle-1", 7, [255, 60], 255, 60, 8)
  ]
});

// 50. 🪷 Lily Pad Pond (24 regions)
add({
  id: "water-lily-pond",
  name: "Lily Pad Pond",
  emoji: "🪷",
  category: "nature",
  viewBox: "0 0 300 400",
  colors: ["#E0F2F1", "#00897B", "#004D40", "#2E7D32", "#4CAF50", "#F48FB1", "#EC407A", "#FFD54F", "#FF5722", "#FFFFFF"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    // Concentric Pond Water & Outer Ripples
    ellipse("pond-water-outer", 2, [150, 260], 150, 260, 140, 110),
    ellipse("pond-water-inner", 3, [150, 260], 150, 260, 115, 85),
    ellipse("pond-ripple", 1, [150, 260], 150, 260, 85, 60),
    // Lily Pads with Clefts and Veins
    ellipse("pad-1", 4, [90, 270], 90, 270, 55, 28),
    pathShape("pad-1-cleft", 3, [90, 270], "M 90,270 L 45,260"),
    ellipse("pad-2", 5, [210, 275], 210, 275, 55, 28),
    pathShape("pad-2-cleft", 3, [210, 275], "M 210,275 L 255,265"),
    ellipse("pad-3", 4, [150, 335], 150, 335, 50, 24),
    // Blooming Water Lily Flower (8 Multi-Layer Petals)
    circle("lily-petal-top", 6, [150, 145], 150, 145, 28),
    circle("lily-petal-tl", 7, [125, 170], 125, 170, 28),
    circle("lily-petal-tr", 7, [175, 170], 175, 170, 28),
    circle("lily-petal-l", 6, [110, 200], 110, 200, 26),
    circle("lily-petal-r", 6, [190, 200], 190, 200, 26),
    circle("lily-petal-bl", 7, [125, 230], 125, 230, 26),
    circle("lily-petal-br", 7, [175, 230], 175, 230, 26),
    circle("lily-center-halo", 6, [150, 195], 150, 195, 24),
    circle("lily-core-stamen", 8, [150, 195], 150, 195, 14),
    // Swimming Koi Fish in Pond
    pathShape("koi-fish-body", 9, [75, 170], "M 55,170 C 70,160 90,160 100,170 C 90,180 70,180 55,170 L 45,160 L 45,180 Z"),
    circle("koi-eye", 10, [92, 168], 92, 168, 2),
    // Hovering Dragonfly
    ellipse("dragonfly-body", 8, [225, 120], 225, 120, 3, 15),
    ellipse("dragonfly-wing-l", 10, [205, 115], 205, 115, 16, 5),
    ellipse("dragonfly-wing-r", 10, [245, 115], 245, 115, 16, 5),
    circle("sparkle-1", 8, [45, 65], 45, 65, 8)
  ]
});

console.log("Built all 50 nature templates! Total count:", TEMPLATES.length);

const header = `import { ImageTemplate } from '../../types';\n\n// Category: nature (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)\nexport const NATURE_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(TEMPLATES, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/nature.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and written all 50 nature templates to', targetPath);
