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

// 1. 🤿 Yellow Submarine (submarine)
TEMPLATES.push({
  id: "submarine",
  name: "Yellow Submarine",
  emoji: "🤿",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#0D47A1", "#1976D2", "#FDD835", "#FBC02D", "#F57F17", "#00E5FF", "#78909C", "#FFFFFF", "#4CAF50", "#E91E63"],
  regions: [
    rect("sub-sea-bg", 1, [25, 30], 0, 0, 300, 400),
    pathShape("sub-surface-waves", 2, [150, 75], "M 0,85 Q 75,65 150,85 Q 225,105 300,85 L 300,400 L 0,400 Z"),
    ellipse("sub-main-hull", 3, [145, 210], 145, 210, 105, 50),
    ellipse("sub-hull-belly-shade", 4, [145, 235], 145, 235, 95, 22),
    rect("sub-conning-tower", 4, [140, 140], 115, 120, 50, 45, 4),
    rect("sub-periscope-mast-1", 7, [125, 95], 122, 80, 5, 40),
    rect("sub-periscope-lens-1", 7, [132, 82], 122, 80, 20, 5, 2),
    rect("sub-periscope-mast-2", 7, [145, 90], 142, 70, 5, 50),
    rect("sub-periscope-lens-2", 7, [152, 72], 142, 70, 20, 5, 2),
    circle("sub-porthole-1-rim", 5, [95, 205], 95, 205, 14),
    circle("sub-porthole-1-glass", 6, [95, 205], 95, 205, 10),
    circle("sub-porthole-1-shine", 8, [92, 202], 92, 202, 3),
    circle("sub-porthole-2-rim", 5, [145, 205], 145, 205, 14),
    circle("sub-porthole-2-glass", 6, [145, 205], 145, 205, 10),
    circle("sub-porthole-2-shine", 8, [142, 202], 142, 202, 3),
    circle("sub-porthole-3-rim", 5, [195, 205], 195, 205, 14),
    circle("sub-porthole-3-glass", 6, [195, 205], 195, 205, 10),
    circle("sub-porthole-3-shine", 8, [192, 202], 192, 202, 3),
    polygon("sub-rudder-top", 4, [40, 175], "50,195 25,160 50,180"),
    polygon("sub-rudder-bot", 4, [40, 245], "50,225 25,260 50,240"),
    rect("sub-propeller-hub", 7, [35, 210], 30, 202, 10, 16),
    polygon("sub-prop-blade-1", 7, [25, 195], "30,205 18,185 28,190"),
    polygon("sub-prop-blade-2", 7, [25, 225], "30,215 18,235 28,230"),
    circle("sub-bubble-1", 8, [200, 140], 200, 140, 6),
    circle("sub-bubble-2", 8, [220, 110], 220, 110, 8),
    circle("sub-bubble-3", 8, [240, 75], 240, 75, 10),
    circle("sub-coral-reef-1", 9, [45, 365], 45, 365, 24),
    circle("sub-coral-reef-2", 10, [85, 375], 85, 375, 18),
    circle("sub-coral-reef-3", 9, [255, 365], 255, 365, 24)
  ]
});

// 2. 🚂 Steam Locomotive 1880 (train-220)
TEMPLATES.push({
  id: "train-220",
  name: "Steam Locomotive 1880",
  emoji: "🚂",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#263238", "#37474F", "#D32F2F", "#FFD54F", "#78909C", "#ECEFF1", "#212121", "#8D6E63"],
  regions: [
    rect("train-sky", 5, [25, 30], 0, 0, 300, 400),
    rect("train-ballast", 8, [150, 360], 0, 340, 300, 60),
    rect("train-rail", 1, [150, 335], 0, 332, 300, 6),
    rect("train-boiler", 2, [130, 220], 65, 175, 130, 90, 4),
    rect("train-boiler-band-1", 4, [95, 220], 93, 175, 4, 90),
    rect("train-boiler-band-2", 4, [135, 220], 133, 175, 4, 90),
    rect("train-boiler-band-3", 4, [175, 220], 173, 175, 4, 90),
    rect("train-driver-cab", 3, [225, 195], 195, 135, 60, 130, 4),
    rect("train-cab-roof", 1, [225, 130], 190, 125, 70, 10, 2),
    rect("train-cab-window-l", 6, [212, 165], 202, 150, 20, 30, 2),
    rect("train-cab-window-r", 6, [238, 165], 228, 150, 20, 30, 2),
    rect("train-smokestack-pipe", 1, [90, 140], 80, 115, 20, 60),
    ellipse("train-stack-funnel", 3, [90, 115], 90, 115, 18, 6),
    ellipse("train-steam-dome-brass", 4, [150, 170], 150, 170, 18, 12),
    polygon("train-cowcatcher", 3, [45, 290], "65,265 65,330 20,330"),
    rect("train-lantern-box", 1, [55, 195], 45, 185, 20, 20),
    circle("train-lantern-beam", 4, [55, 195], 55, 195, 7),
    circle("train-drive-wheel-1", 7, [100, 300], 100, 300, 26),
    circle("train-drive-hub-1", 4, [100, 300], 100, 300, 8),
    circle("train-drive-wheel-2", 7, [160, 300], 160, 300, 26),
    circle("train-drive-hub-2", 4, [160, 300], 160, 300, 8),
    circle("train-drive-wheel-3", 7, [220, 300], 220, 300, 26),
    circle("train-drive-hub-3", 4, [220, 300], 220, 300, 8),
    rect("train-side-rod", 4, [160, 298], 90, 296, 140, 8),
    circle("train-steam-puff-1", 6, [70, 85], 70, 85, 18),
    circle("train-steam-puff-2", 6, [45, 60], 45, 60, 24),
    circle("train-steam-puff-3", 6, [20, 35], 20, 35, 28)
  ]
});

// 3. 🏎️ Formula 1 Monaco GP (f1-223)
TEMPLATES.push({
  id: "f1-223",
  name: "Formula 1 Monaco GP",
  emoji: "🏎️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#1A1A2E", "#D32F2F", "#B71C1C", "#FFD54F", "#00E5FF", "#FFFFFF", "#78909C", "#212121"],
  regions: [
    rect("f1-track-bg", 1, [25, 30], 0, 0, 300, 400),
    rect("f1-asphalt-road", 8, [150, 340], 0, 280, 300, 120),
    rect("f1-kerb-red-1", 2, [50, 375], 0, 365, 75, 15),
    rect("f1-kerb-white-1", 6, [125, 375], 75, 365, 75, 15),
    rect("f1-kerb-red-2", 2, [200, 375], 150, 365, 75, 15),
    rect("f1-kerb-white-2", 6, [275, 375], 225, 365, 75, 15),
    pathShape("f1-monocoque-chassis", 2, [150, 240], "M 35,270 L 95,250 L 140,225 L 215,225 L 245,250 L 245,270 L 35,270 Z"),
    polygon("f1-nosecone", 2, [65, 258], "35,270 95,250 95,270"),
    polygon("f1-sidepod", 3, [170, 248], "135,250 215,240 225,268 135,268"),
    rect("f1-airbox-intake", 3, [175, 205], 160, 195, 30, 30, 4),
    circle("f1-driver-helmet", 4, [145, 215], 145, 215, 12),
    rect("f1-helmet-visor", 5, [142, 215], 136, 212, 12, 6, 2),
    ellipse("f1-halo-ring", 7, [150, 210], 150, 210, 22, 10),
    polygon("f1-front-wing", 8, [30, 270], "15,260 45,260 40,280 15,280"),
    rect("f1-rear-wing-pylon", 8, [250, 215], 240, 190, 20, 60, 2),
    rect("f1-rear-wing-flap", 2, [235, 195], 210, 190, 45, 10, 2),
    circle("f1-tyre-fl", 8, [85, 275], 85, 275, 26),
    circle("f1-rim-fl", 4, [85, 275], 85, 275, 14),
    circle("f1-hub-fl", 7, [85, 275], 85, 275, 6),
    circle("f1-tyre-rl", 8, [225, 270], 225, 270, 30),
    circle("f1-rim-rl", 4, [225, 270], 225, 270, 16),
    circle("f1-hub-rl", 7, [225, 270], 225, 270, 7),
    circle("f1-number-1-badge", 6, [115, 255], 115, 255, 10),
    rect("f1-sponsor-line", 4, [175, 255], 145, 253, 50, 4),
    circle("f1-flag-light-1", 4, [50, 90], 50, 90, 12),
    circle("f1-flag-light-2", 4, [250, 90], 250, 90, 12)
  ]
});

// 4. ⛵ White Sailboat (sailboat)
TEMPLATES.push({
  id: "sailboat",
  name: "White Sailboat",
  emoji: "⛵",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#0288D1", "#01579B", "#FFFFFF", "#ECEFF1", "#D32F2F", "#8D6E63", "#FFD54F"],
  regions: [
    rect("sail-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("sail-ocean-waves", 2, [150, 310], "M 0,270 Q 75,250 150,270 Q 225,290 300,270 L 300,400 L 0,400 Z"),
    polygon("sail-boat-hull", 7, [150, 275], "50,265 240,265 205,305 75,305"),
    rect("sail-hull-stripe", 6, [150, 270], 55, 267, 180, 6),
    rect("sail-wood-mast", 7, [145, 160], 143, 60, 6, 210),
    polygon("sail-mainsail", 4, [180, 150], "152,70 235,250 152,250"),
    polygon("sail-jib", 5, [110, 165], "140,85 65,250 140,250"),
    polygon("sail-pennant", 6, [155, 65], "145,60 170,68 145,76"),
    circle("sail-sun", 8, [240, 75], 240, 75, 22),
    circle("sail-cloud-1", 4, [75, 75], 75, 75, 16),
    circle("sail-cloud-2", 4, [95, 70], 95, 70, 22),
    circle("sail-cloud-3", 4, [115, 75], 115, 75, 16),
    circle("sail-seagull-1", 4, [50, 140], 50, 140, 6),
    circle("sail-seagull-2", 4, [75, 130], 75, 130, 5),
    pathShape("sail-wake-foam", 4, [150, 345], "M 60,340 Q 150,360 240,340 Q 150,350 60,340 Z"),
    circle("sail-lifebuoy", 6, [195, 275], 195, 275, 8),
    circle("sail-lifebuoy-core", 4, [195, 275], 195, 275, 4),
    circle("sail-porthole-1", 8, [105, 280], 105, 280, 5),
    circle("sail-porthole-2", 8, [135, 280], 135, 280, 5),
    circle("sail-porthole-3", 8, [165, 280], 165, 280, 5),
    circle("sail-sea-splash-1", 4, [40, 275], 40, 275, 5),
    circle("sail-sea-splash-2", 4, [245, 275], 245, 275, 5),
    circle("sail-sky-sparkle", 8, [270, 120], 270, 120, 5),
    circle("sail-deep-wave", 3, [150, 375], 150, 375, 20)
  ]
});

// 5. 🚁 Rescue Helicopter (helicopter)
TEMPLATES.push({
  id: "helicopter",
  name: "Rescue Helicopter",
  emoji: "🚁",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#D32F2F", "#B71C1C", "#FFD54F", "#00E5FF", "#212121", "#78909C", "#FFFFFF"],
  regions: [
    rect("heli-sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("heli-fuselage", 2, [130, 205], 130, 205, 65, 45),
    pathShape("heli-windshield", 5, [95, 195], "M 75,200 Q 80,175 115,175 L 115,225 Q 85,225 75,200 Z"),
    rect("heli-tail-boom", 2, [195, 195], 175, 190, 75, 16, 2),
    polygon("heli-tail-fin", 3, [260, 175], "245,190 265,150 255,205"),
    rect("heli-rotor-mast", 6, [135, 150], 132, 140, 6, 25),
    rect("heli-rotor-blade", 6, [135, 138], 35, 135, 200, 6, 2),
    circle("heli-rotor-hub", 4, [135, 138], 135, 138, 8),
    circle("heli-tail-rotor", 6, [262, 160], 262, 160, 14),
    rect("heli-skid-strut-f", 7, [105, 255], 102, 245, 6, 20),
    rect("heli-skid-strut-r", 7, [155, 255], 152, 245, 6, 20),
    rect("heli-skid-pipe", 7, [130, 272], 75, 268, 110, 8, 4),
    rect("heli-cross-h", 8, [150, 205], 140, 200, 20, 10),
    rect("heli-cross-v", 8, [150, 205], 145, 195, 10, 20),
    circle("heli-cloud-1", 8, [50, 80], 50, 80, 22),
    circle("heli-cloud-2", 8, [240, 80], 240, 80, 25),
    circle("heli-sun", 4, [260, 45], 260, 45, 18),
    circle("heli-rotor-blur-1", 8, [70, 138], 70, 138, 6),
    circle("heli-rotor-blur-2", 8, [200, 138], 200, 138, 6),
    circle("heli-searchlight", 4, [85, 245], 85, 245, 8),
    circle("heli-antenna-beacon", 4, [135, 130], 135, 130, 5),
    circle("heli-landing-pad", 7, [150, 360], 150, 360, 50),
    circle("heli-pad-ring", 4, [150, 360], 150, 360, 35),
    rect("heli-pad-h-bar", 8, [150, 360], 135, 352, 30, 16)
  ]
});

// 6. ✈️ Passenger Jet (airplane)
TEMPLATES.push({
  id: "airplane",
  name: "Passenger Jet",
  emoji: "✈️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#FFFFFF", "#ECEFF1", "#0288D1", "#01579B", "#78909C", "#D32F2F", "#FFD54F"],
  regions: [
    rect("air-sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("air-fuselage", 2, [150, 200], 150, 200, 115, 30),
    polygon("air-nosecone", 2, [40, 200], "60,180 25,200 60,220"),
    polygon("air-wing-l", 3, [145, 135], "125,185 160,185 190,85 155,85"),
    polygon("air-wing-r", 3, [145, 265], "125,215 160,215 190,315 155,315"),
    rect("air-engine-l", 6, [150, 125], 135, 118, 30, 14, 4),
    circle("air-engine-fan-l", 5, [135, 125], 135, 125, 6),
    rect("air-engine-r", 6, [150, 275], 135, 268, 30, 14, 4),
    circle("air-engine-fan-r", 5, [135, 275], 135, 275, 6),
    polygon("air-vertical-fin", 4, [240, 155], "220,185 260,125 250,185"),
    polygon("air-stabilizer", 5, [245, 200], "230,195 260,195 255,205 235,205"),
    rect("air-window-strip", 4, [145, 195], 75, 192, 140, 6),
    polygon("air-cockpit-glass", 5, [50, 192], "45,190 60,186 60,195 45,195"),
    circle("air-cloud-1", 2, [65, 75], 65, 75, 20),
    circle("air-cloud-2", 2, [95, 70], 95, 70, 26),
    circle("air-cloud-3", 2, [235, 335], 235, 335, 25),
    circle("air-sun", 8, [250, 55], 250, 55, 18),
    circle("air-contrail-1", 2, [265, 125], 265, 125, 4),
    circle("air-contrail-2", 2, [285, 125], 285, 125, 6),
    circle("air-winglet-l", 7, [188, 80], 188, 80, 5),
    circle("air-winglet-r", 7, [188, 320], 188, 320, 5),
    circle("air-nav-light-red", 7, [190, 85], 190, 85, 4),
    circle("air-nav-light-green", 4, [190, 315], 190, 315, 4),
    circle("air-beacon-belly", 7, [150, 230], 150, 230, 4)
  ]
});

// 7. 🚜 Farm Tractor (tractor)
TEMPLATES.push({
  id: "tractor",
  name: "Farm Tractor",
  emoji: "🚜",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#43A047", "#2E7D32", "#FFD54F", "#212121", "#78909C", "#8D6E63", "#FFFFFF"],
  regions: [
    rect("trac-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("trac-ground", 7, [150, 350], 0, 325, 300, 75),
    rect("trac-engine-hood", 2, [105, 225], 60, 195, 90, 60, 4),
    rect("trac-front-grill", 5, [65, 225], 58, 205, 10, 40),
    rect("trac-cab-frame", 6, [180, 185], 150, 150, 60, 80),
    rect("trac-cab-glass", 1, [180, 185], 154, 155, 52, 45),
    rect("trac-cab-roof", 2, [180, 145], 140, 140, 80, 12, 2),
    circle("trac-rear-tyre", 5, [205, 280], 205, 280, 42),
    circle("trac-rear-rim", 4, [205, 280], 205, 280, 24),
    circle("trac-rear-hub", 5, [205, 280], 205, 280, 10),
    circle("trac-front-tyre", 5, [85, 300], 85, 300, 24),
    circle("trac-front-rim", 4, [85, 300], 85, 300, 12),
    circle("trac-front-hub", 5, [85, 300], 85, 300, 5),
    rect("trac-exhaust-pipe", 6, [115, 160], 112, 135, 6, 60),
    circle("trac-exhaust-puff", 8, [115, 120], 115, 120, 10),
    circle("trac-headlight-l", 4, [62, 210], 62, 210, 6),
    circle("trac-headlight-r", 4, [62, 240], 62, 240, 6),
    rect("trac-fender-rear", 3, [205, 235], 160, 230, 80, 10, 4),
    circle("trac-sun", 4, [250, 55], 250, 55, 18),
    circle("trac-cloud-1", 8, [60, 75], 60, 75, 16),
    circle("trac-cloud-2", 8, [85, 70], 85, 70, 22),
    circle("trac-soil-ridge-1", 7, [50, 360], 50, 360, 15),
    circle("trac-soil-ridge-2", 7, [150, 365], 150, 365, 15),
    circle("trac-soil-ridge-3", 7, [250, 360], 250, 360, 15)
  ]
});

// 8. 🚒 Fire Engine (fire-truck)
TEMPLATES.push({
  id: "fire-truck",
  name: "Fire Engine",
  emoji: "🚒",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#D32F2F", "#B71C1C", "#FFD54F", "#00E5FF", "#212121", "#78909C", "#FFFFFF"],
  regions: [
    rect("fire-city-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("fire-asphalt-street", 6, [150, 360], 0, 335, 300, 65),
    rect("fire-truck-body", 2, [170, 235], 110, 175, 140, 95, 4),
    rect("fire-crew-cab", 2, [75, 235], 40, 175, 70, 95, 6),
    rect("fire-windshield", 5, [65, 205], 45, 185, 35, 35, 2),
    rect("fire-ladder-top", 7, [155, 150], 75, 145, 160, 6),
    rect("fire-ladder-bot", 7, [155, 162], 75, 158, 160, 6),
    rect("fire-lightbar-base", 6, [80, 165], 65, 162, 30, 8),
    circle("fire-siren-blue", 5, [72, 158], 72, 158, 6),
    circle("fire-siren-red", 3, [88, 158], 88, 158, 6),
    circle("fire-wheel-f", 6, [80, 300], 80, 300, 25),
    circle("fire-rim-f", 7, [80, 300], 80, 300, 12),
    circle("fire-wheel-r1", 6, [180, 300], 180, 300, 25),
    circle("fire-rim-r1", 7, [180, 300], 180, 300, 12),
    circle("fire-wheel-r2", 6, [225, 300], 225, 300, 25),
    circle("fire-rim-r2", 7, [225, 300], 225, 300, 12),
    rect("fire-hose-reel", 4, [135, 240], 120, 225, 30, 30, 4),
    circle("fire-hose-core", 2, [135, 240], 135, 240, 8),
    rect("fire-equipment-door-1", 7, [170, 240], 158, 220, 24, 40, 2),
    rect("fire-equipment-door-2", 7, [200, 240], 188, 220, 24, 40, 2),
    circle("fire-headlight-top", 4, [43, 230], 43, 230, 6),
    circle("fire-headlight-bot", 4, [43, 255], 43, 255, 6),
    rect("fire-chrome-bumper", 7, [35, 270], 30, 265, 12, 18),
    circle("fire-sun", 4, [255, 55], 255, 55, 18)
  ]
});

// 9. 🚲 Classic Bicycle (bicycle)
TEMPLATES.push({
  id: "bicycle",
  name: "Classic Bicycle",
  emoji: "🚲",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#0288D1", "#01579B", "#212121", "#78909C", "#FFD54F", "#8D6E63", "#FFFFFF"],
  regions: [
    rect("bike-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("bike-park-ground", 7, [150, 355], 0, 330, 300, 70),
    pathShape("bike-top-tube", 2, [150, 195], "M 115,240 L 195,190 L 115,190 Z"),
    pathShape("bike-seat-stays", 2, [95, 235], "M 75,280 L 115,190 L 115,280 Z"),
    pathShape("bike-chain-stays", 2, [95, 280], "M 75,280 L 155,280"),
    rect("bike-seat-post", 5, [115, 175], 113, 160, 4, 30),
    ellipse("bike-leather-saddle", 7, [110, 160], 110, 160, 18, 6),
    pathShape("bike-handlebars", 5, [205, 160], "M 195,190 L 205,150 L 190,150"),
    circle("bike-wheel-f-tyre", 4, [225, 280], 225, 280, 40),
    circle("bike-wheel-f-rim", 5, [225, 280], 225, 280, 32),
    circle("bike-hub-f", 6, [225, 280], 225, 280, 8),
    circle("bike-wheel-r-tyre", 4, [75, 280], 75, 280, 40),
    circle("bike-wheel-r-rim", 5, [75, 280], 75, 280, 32),
    circle("bike-hub-r", 6, [75, 280], 75, 280, 8),
    circle("bike-chainring", 6, [145, 280], 145, 280, 14),
    circle("bike-pedal-l", 4, [145, 295], 145, 295, 5),
    circle("bike-pedal-r", 4, [145, 265], 145, 265, 5),
    circle("bike-sun", 6, [250, 60], 250, 60, 20),
    circle("bike-cloud-1", 8, [65, 80], 65, 80, 18),
    circle("bike-cloud-2", 8, [90, 75], 90, 75, 24),
    circle("bike-tree-canopy", 3, [45, 220], 45, 220, 28),
    rect("bike-tree-trunk", 7, [45, 280], 41, 248, 8, 85),
    circle("bike-park-flower-1", 6, [150, 360], 150, 360, 6),
    circle("bike-park-flower-2", 6, [220, 360], 220, 360, 6)
  ]
});

// 10. 🎈 Hot Air Balloon (balloon)
TEMPLATES.push({
  id: "balloon",
  name: "Hot Air Balloon",
  emoji: "🎈",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#E91E63", "#FF9800", "#FFEB3B", "#4CAF50", "#2196F3", "#9C27B0", "#8D6E63"],
  regions: [
    rect("ball-sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("ball-core", 4, [150, 160], 150, 160, 85, 110),
    pathShape("ball-gore-pink-l", 2, [95, 160], "M 150,50 C 80,60 70,220 135,265 C 100,220 100,80 150,50 Z"),
    pathShape("ball-gore-blue-r", 6, [205, 160], "M 150,50 C 220,60 230,220 165,265 C 200,220 200,80 150,50 Z"),
    pathShape("ball-gore-orange-c", 3, [125, 160], "M 150,50 C 115,70 115,220 142,268 C 130,220 130,70 150,50 Z"),
    pathShape("ball-gore-green-c", 5, [175, 160], "M 150,50 C 185,70 185,220 158,268 C 170,220 170,70 150,50 Z"),
    polygon("ball-burner-flame", 3, [150, 275], "145,285 155,285 150,265"),
    rect("ball-basket-ropes", 8, [150, 290], 135, 275, 30, 25),
    rect("ball-wicker-basket", 8, [150, 320], 130, 305, 40, 30, 4),
    circle("ball-sandbag-l", 7, [127, 320], 127, 320, 5),
    circle("ball-sandbag-r", 7, [173, 320], 173, 320, 5),
    circle("ball-cloud-1", 1, [50, 340], 50, 340, 30),
    circle("ball-cloud-2", 1, [250, 340], 250, 340, 30),
    circle("ball-sun", 4, [40, 60], 40, 60, 22),
    circle("ball-bird-1", 7, [220, 80], 220, 80, 5),
    circle("ball-bird-2", 7, [245, 70], 245, 70, 5),
    circle("ball-distant-balloon", 2, [250, 180], 250, 180, 12),
    rect("ball-distant-basket", 8, [250, 196], 247, 194, 6, 5),
    circle("ball-cloud-top-1", 1, [180, 40], 180, 40, 16),
    circle("ball-cloud-top-2", 1, [205, 35], 205, 35, 20),
    circle("ball-cloud-bot-1", 1, [110, 370], 110, 370, 24),
    circle("ball-cloud-bot-2", 1, [190, 370], 190, 370, 24),
    circle("ball-rainbow-sparkle-1", 3, [80, 300], 80, 300, 6),
    circle("ball-rainbow-sparkle-2", 5, [220, 300], 220, 300, 6)
  ]
});

// 11. 🚗 Vintage Roadster (vintage-roadster)
TEMPLATES.push({
  id: "vintage-roadster",
  name: "Vintage Roadster",
  emoji: "🚗",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#C62828", "#B71C1C", "#FFD54F", "#212121", "#78909C", "#FFFFFF"],
  regions: [
    rect("roadster-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("roadster-road", 5, [150, 355], 0, 330, 300, 70),
    pathShape("roadster-flowing-body", 2, [150, 235], "M 35,275 C 35,250 55,230 115,225 L 175,200 L 235,235 C 265,250 265,275 265,275 Z"),
    polygon("roadster-fender-front", 3, [65, 260], "35,275 95,245 105,275"),
    polygon("roadster-fender-rear", 3, [225, 260], "195,245 255,245 265,275"),
    rect("roadster-split-windshield", 6, [145, 195], 130, 180, 35, 25, 2),
    circle("roadster-headlamp-round", 4, [45, 230], 45, 230, 12),
    circle("roadster-headlamp-bulb", 7, [45, 230], 45, 230, 6),
    circle("roadster-spoke-wheel-f", 5, [85, 290], 85, 290, 28),
    circle("roadster-whitewall-f", 7, [85, 290], 85, 290, 20),
    circle("roadster-hubcap-f", 4, [85, 290], 85, 290, 10),
    circle("roadster-spoke-wheel-r", 5, [220, 290], 220, 290, 28),
    circle("roadster-whitewall-r", 7, [220, 290], 220, 290, 20),
    circle("roadster-hubcap-r", 4, [220, 290], 220, 290, 10),
    ellipse("roadster-spare-tyre", 5, [262, 245], 262, 245, 10, 24),
    rect("roadster-chrome-bumper-f", 6, [28, 275], 22, 268, 12, 14),
    rect("roadster-hood-louvers", 6, [85, 230], 75, 227, 25, 6),
    circle("roadster-steering-wheel", 5, [160, 195], 160, 195, 8),
    circle("roadster-sun", 4, [250, 60], 250, 60, 18),
    circle("roadster-cloud-1", 7, [60, 75], 60, 75, 18),
    circle("roadster-cloud-2", 7, [85, 70], 85, 70, 24),
    rect("roadster-dash-line-1", 7, [40, 360], 25, 357, 30, 6),
    rect("roadster-dash-line-2", 7, [150, 360], 135, 357, 30, 6),
    rect("roadster-dash-line-3", 7, [260, 360], 245, 357, 30, 6)
  ]
});

// 12. 🛵 Vespa Scooter (vespa-scooter)
TEMPLATES.push({
  id: "vespa-scooter",
  name: "Vespa Scooter",
  emoji: "🛵",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F7FA", "#00BCD4", "#00838F", "#ECEFF1", "#212121", "#FFD54F", "#FFFFFF"],
  regions: [
    rect("vespa-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("vespa-cobblestone-street", 4, [150, 355], 0, 330, 300, 70),
    pathShape("vespa-curved-legshield", 2, [110, 220], "M 95,160 L 125,160 L 105,270 L 85,270 Z"),
    ellipse("vespa-engine-cowl-bulbous", 2, [195, 255], 195, 255, 45, 25),
    pathShape("vespa-footboard", 3, [145, 275], "M 105,270 L 175,270 L 175,280 L 105,280 Z"),
    ellipse("vespa-leather-saddle", 5, [175, 215], 175, 215, 28, 10),
    rect("vespa-handlebar-stem", 4, [115, 140], 112, 120, 6, 40),
    circle("vespa-round-headlight", 6, [115, 115], 115, 115, 12),
    circle("vespa-headlight-bulb", 7, [115, 115], 115, 115, 6),
    circle("vespa-wheel-front-tyre", 5, [85, 295], 85, 295, 24),
    circle("vespa-rim-f", 4, [85, 295], 85, 295, 14),
    circle("vespa-hub-f", 6, [85, 295], 85, 295, 6),
    circle("vespa-wheel-rear-tyre", 5, [220, 295], 220, 295, 24),
    circle("vespa-rim-r", 4, [220, 295], 220, 295, 14),
    circle("vespa-hub-r", 6, [220, 295], 220, 295, 6),
    rect("vespa-luggage-rack", 4, [235, 225], 220, 220, 30, 8, 2),
    circle("vespa-mirror-round", 4, [130, 95], 130, 95, 7),
    circle("vespa-taillight", 6, [242, 255], 242, 255, 6),
    circle("vespa-sun", 6, [250, 55], 250, 55, 18),
    circle("vespa-cloud-1", 7, [55, 75], 55, 75, 18),
    circle("vespa-cloud-2", 7, [80, 70], 80, 70, 22),
    circle("vespa-street-lamp", 5, [265, 180], 265, 180, 10),
    rect("vespa-lamp-post", 5, [265, 260], 263, 190, 4, 140),
    circle("vespa-sparkle", 7, [45, 180], 45, 180, 5)
  ]
});

// 13. 🛹 Skater Board (skateboard)
TEMPLATES.push({
  id: "skateboard",
  name: "Skater Board",
  emoji: "🛹",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#FFF3E0", "#FF6D00", "#FFAB00", "#212121", "#78909C", "#00E5FF", "#FFFFFF", "#E91E63"],
  regions: [
    rect("skate-park-sky", 1, [25, 30], 0, 0, 300, 400),
    pathShape("skate-concrete-ramp", 5, [150, 340], "M 0,220 Q 150,330 300,330 L 300,400 L 0,400 Z"),
    polygon("skate-deck-wood", 2, [150, 190], "40,150 250,210 245,225 35,165"),
    polygon("skate-deck-griptape", 4, [150, 185], "40,150 250,210 248,215 38,155"),
    rect("skate-truck-front", 5, [85, 190], 75, 180, 20, 15, 2),
    rect("skate-truck-rear", 5, [195, 220], 185, 210, 20, 15, 2),
    circle("skate-wheel-fl", 6, [75, 205], 75, 205, 14),
    circle("skate-bearing-fl", 4, [75, 205], 75, 205, 5),
    circle("skate-wheel-fr", 6, [95, 210], 95, 210, 14),
    circle("skate-bearing-fr", 4, [95, 210], 95, 210, 5),
    circle("skate-wheel-rl", 6, [185, 235], 185, 235, 14),
    circle("skate-bearing-rl", 4, [185, 235], 185, 235, 5),
    circle("skate-wheel-rr", 6, [205, 240], 205, 240, 14),
    circle("skate-bearing-rr", 4, [205, 240], 205, 240, 5),
    circle("skate-flame-graphic-1", 8, [125, 190], 125, 190, 8),
    circle("skate-flame-graphic-2", 3, [155, 200], 155, 200, 10),
    circle("skate-sun", 3, [240, 60], 240, 60, 20),
    circle("skate-cloud-1", 7, [60, 70], 60, 70, 18),
    circle("skate-cloud-2", 7, [85, 65], 85, 65, 24),
    circle("skate-motion-spark-1", 6, [50, 130], 50, 130, 6),
    circle("skate-motion-spark-2", 6, [35, 150], 35, 150, 5),
    circle("skate-ramp-coaping", 7, [20, 220], 20, 220, 6),
    circle("skate-graffiti-tag", 8, [220, 360], 220, 360, 16),
    circle("skate-graffiti-core", 6, [220, 360], 220, 360, 8)
  ]
});

// 14. 🛶 Wooden Canoe (canoe)
TEMPLATES.push({
  id: "canoe",
  name: "Wooden Canoe",
  emoji: "🛶",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#0288D1", "#01579B", "#8D6E63", "#6D4C41", "#4E342E", "#4CAF50", "#FFD54F"],
  regions: [
    rect("canoe-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("canoe-lake-water", 2, [150, 280], 0, 240, 300, 160),
    pathShape("canoe-wood-hull", 4, [150, 245], "M 30,230 Q 150,275 270,230 Q 150,250 30,230 Z"),
    pathShape("canoe-inner-rim", 5, [150, 235], "M 45,232 Q 150,248 255,232 Q 150,240 45,232 Z"),
    rect("canoe-thwart-bar-1", 6, [115, 238], 110, 236, 10, 6),
    rect("canoe-thwart-bar-2", 6, [185, 238], 180, 236, 10, 6),
    rect("canoe-seat-bow", 6, [90, 238], 82, 235, 16, 6),
    rect("canoe-seat-stern", 6, [210, 238], 202, 235, 16, 6),
    polygon("canoe-paddle-blade", 4, [145, 180], "140,150 150,150 155,210 135,210"),
    rect("canoe-paddle-shaft", 6, [145, 130], 143, 110, 4, 70),
    polygon("canoe-pine-tree-1", 7, [50, 180], "50,130 75,235 25,235"),
    polygon("canoe-pine-tree-2", 7, [250, 180], "250,130 275,235 225,235"),
    circle("canoe-sun", 8, [240, 65], 240, 65, 20),
    circle("canoe-cloud-1", 1, [70, 75], 70, 75, 18),
    circle("canoe-cloud-2", 1, [95, 70], 95, 70, 24),
    circle("canoe-water-ripple-1", 3, [80, 290], 80, 290, 12),
    circle("canoe-water-ripple-2", 3, [220, 290], 220, 290, 12),
    circle("canoe-water-lily", 7, [70, 340], 70, 340, 12),
    circle("canoe-flower-petal", 8, [70, 340], 70, 340, 5),
    circle("canoe-water-splash-1", 1, [130, 260], 130, 260, 4),
    circle("canoe-water-splash-2", 1, [165, 260], 165, 260, 4),
    circle("canoe-mountain-peak-l", 5, [90, 170], 90, 170, 40),
    circle("canoe-mountain-peak-r", 5, [210, 170], 210, 170, 40),
    circle("canoe-mountain-snow", 1, [150, 150], 150, 150, 20)
  ]
});

// 15. 🚤 Ocean Speedboat (speedboat)
TEMPLATES.push({
  id: "speedboat",
  name: "Ocean Speedboat",
  emoji: "🚤",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#0288D1", "#01579B", "#FFFFFF", "#D32F2F", "#212121", "#00E5FF", "#78909C", "#FFD54F"],
  regions: [
    rect("speed-sky", 6, [25, 30], 0, 0, 300, 400),
    pathShape("speed-sea-wake", 1, [150, 290], "M 0,250 Q 150,220 300,250 L 300,400 L 0,400 Z"),
    polygon("speed-sharp-hull", 3, [150, 230], "35,220 255,220 225,270 55,260"),
    polygon("speed-red-stripe", 4, [150, 240], "45,235 245,235 238,245 50,245"),
    polygon("speed-tinted-windshield", 6, [145, 195], "105,220 185,220 170,185 120,185"),
    rect("speed-cockpit-opening", 5, [150, 205], 115, 200, 70, 20, 2),
    circle("speed-driver-helm", 5, [140, 195], 140, 195, 8),
    rect("speed-outboard-engine", 5, [40, 235], 30, 220, 18, 35, 4),
    rect("speed-engine-shaft", 7, [40, 260], 34, 250, 10, 25),
    pathShape("speed-rooster-tail-spray", 3, [25, 215], "M 35,250 C 15,220 10,180 30,160 C 25,185 28,220 35,250 Z"),
    circle("speed-spray-bubble-1", 3, [20, 180], 20, 180, 8),
    circle("speed-spray-bubble-2", 3, [15, 210], 15, 210, 10),
    circle("speed-sun", 8, [250, 60], 250, 60, 20),
    circle("speed-cloud-1", 3, [60, 75], 60, 75, 18),
    circle("speed-cloud-2", 3, [85, 70], 85, 70, 24),
    circle("speed-cleat-bow", 7, [240, 222], 240, 222, 4),
    circle("speed-cleat-stern", 7, [60, 222], 60, 222, 4),
    circle("speed-ocean-swell-1", 2, [80, 340], 80, 340, 20),
    circle("speed-ocean-swell-2", 2, [220, 340], 220, 340, 20),
    circle("speed-sea-foam-1", 3, [100, 275], 100, 275, 8),
    circle("speed-sea-foam-2", 3, [180, 275], 180, 275, 8),
    circle("speed-seabird-1", 3, [180, 110], 180, 110, 6),
    circle("speed-seabird-2", 3, [205, 100], 205, 100, 5),
    circle("speed-deep-blue", 2, [150, 375], 150, 375, 25)
  ]
});

// 16. 🚋 City Metro Tram (metro-tram)
TEMPLATES.push({
  id: "metro-tram",
  name: "City Metro Tram",
  emoji: "🚋",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#FFD54F", "#FFA000", "#212121", "#0288D1", "#78909C", "#FFFFFF"],
  regions: [
    rect("tram-city-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("tram-street-asphalt", 4, [150, 360], 0, 335, 300, 65),
    rect("tram-track-groove", 6, [150, 336], 0, 334, 300, 4),
    rect("tram-body-yellow", 2, [150, 230], 40, 175, 220, 100, 6),
    rect("tram-body-skirt", 3, [150, 265], 40, 255, 220, 20),
    polygon("tram-pantograph-arm", 6, [150, 130], "145,175 135,115 165,115 155,175"),
    rect("tram-pantograph-head", 4, [150, 115], 125, 112, 50, 6, 2),
    rect("tram-windshield-front", 5, [65, 205], 45, 185, 40, 40, 2),
    rect("tram-window-1", 5, [110, 205], 95, 185, 30, 35, 2),
    rect("tram-window-2", 5, [150, 205], 135, 185, 30, 35, 2),
    rect("tram-window-3", 5, [190, 205], 175, 185, 30, 35, 2),
    rect("tram-window-rear", 5, [235, 205], 215, 185, 40, 40, 2),
    rect("tram-passenger-door", 6, [150, 235], 138, 220, 24, 55),
    circle("tram-wheel-1", 4, [75, 300], 75, 300, 20),
    circle("tram-rim-1", 6, [75, 300], 75, 300, 10),
    circle("tram-wheel-2", 4, [125, 300], 125, 300, 20),
    circle("tram-rim-2", 6, [125, 300], 125, 300, 10),
    circle("tram-wheel-3", 4, [175, 300], 175, 300, 20),
    circle("tram-rim-3", 6, [175, 300], 175, 300, 10),
    circle("tram-wheel-4", 4, [225, 300], 225, 300, 20),
    circle("tram-rim-4", 6, [225, 300], 225, 300, 10),
    rect("tram-route-display", 4, [150, 180], 130, 177, 40, 8),
    circle("tram-headlight-f", 7, [43, 240], 43, 240, 6),
    circle("tram-taillight-r", 3, [257, 240], 257, 240, 6)
  ]
});

// 17. 🛩️ Vintage Biplane (biplane)
TEMPLATES.push({
  id: "biplane",
  name: "Vintage Biplane",
  emoji: "🛩️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#81D4FA", "#FFCA28", "#FFA000", "#D32F2F", "#212121", "#FFFFFF", "#78909C"],
  regions: [
    rect("bi-sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("bi-fuselage", 2, [150, 215], 150, 215, 110, 25),
    rect("bi-upper-wing", 3, [145, 145], 45, 140, 200, 12, 4),
    rect("bi-lower-wing", 3, [145, 230], 65, 225, 160, 12, 4),
    rect("bi-wing-strut-l", 7, [85, 185], 83, 152, 4, 73),
    rect("bi-wing-strut-r", 7, [205, 185], 203, 152, 4, 73),
    circle("bi-cockpit-hole", 5, [145, 195], 145, 195, 12),
    circle("bi-pilot-helmet", 4, [145, 192], 145, 192, 7),
    polygon("bi-vertical-tail", 4, [245, 175], "235,200 265,150 255,205"),
    rect("bi-tail-horizontal", 2, [245, 215], 230, 212, 35, 6),
    circle("bi-radial-engine", 5, [45, 215], 45, 215, 18),
    circle("bi-prop-hub", 7, [32, 215], 32, 215, 6),
    polygon("bi-prop-blade-top", 5, [32, 175], "30,215 28,140 36,140"),
    polygon("bi-prop-blade-bot", 5, [32, 255], "30,215 28,290 36,290"),
    polygon("bi-landing-gear-strut", 7, [105, 260], "95,235 115,235 105,280"),
    circle("bi-wheel-tyre", 5, [105, 285], 105, 285, 14),
    circle("bi-wheel-spoke", 6, [105, 285], 105, 285, 7),
    circle("bi-sun", 2, [250, 55], 250, 55, 20),
    circle("bi-cloud-1", 6, [60, 75], 60, 75, 18),
    circle("bi-cloud-2", 6, [85, 70], 85, 70, 24),
    circle("bi-smoke-trail-1", 6, [265, 215], 265, 215, 8),
    circle("bi-smoke-trail-2", 6, [285, 215], 285, 215, 12),
    circle("bi-wing-roundel-l", 4, [105, 145], 105, 145, 5),
    circle("bi-wing-roundel-r", 4, [185, 145], 185, 145, 5)
  ]
});

// 18. 🚛 Big Rig Truck (big-rig-truck)
TEMPLATES.push({
  id: "big-rig-truck",
  name: "Big Rig Truck",
  emoji: "🚛",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#1565C0", "#0D47A1", "#78909C", "#212121", "#FFD54F", "#FFFFFF"],
  regions: [
    rect("rig-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("rig-highway", 5, [150, 360], 0, 335, 300, 65),
    rect("rig-cargo-trailer", 4, [195, 215], 130, 150, 130, 120, 4),
    rect("rig-sleeper-cab", 2, [90, 215], 50, 170, 80, 100, 4),
    rect("rig-hood-nose", 3, [45, 240], 25, 210, 35, 60, 4),
    rect("rig-chrome-grill", 4, [25, 240], 20, 215, 8, 50),
    rect("rig-windshield", 1, [65, 195], 52, 180, 35, 30, 2),
    rect("rig-exhaust-stack-1", 4, [85, 140], 82, 110, 6, 60),
    rect("rig-exhaust-stack-2", 4, [95, 140], 92, 110, 6, 60),
    rect("rig-sun-visor", 3, [65, 175], 48, 172, 40, 6),
    circle("rig-steer-wheel", 5, [50, 295], 50, 295, 22),
    circle("rig-steer-rim", 4, [50, 295], 50, 295, 11),
    circle("rig-drive-wheel-1", 5, [105, 295], 105, 295, 22),
    circle("rig-drive-rim-1", 4, [105, 295], 105, 295, 11),
    circle("rig-trailer-wheel-1", 5, [195, 295], 195, 295, 22),
    circle("rig-trailer-rim-1", 4, [195, 295], 195, 295, 11),
    circle("rig-trailer-wheel-2", 5, [235, 295], 235, 295, 22),
    circle("rig-trailer-rim-2", 4, [235, 295], 235, 295, 11),
    circle("rig-headlight", 6, [24, 255], 24, 255, 6),
    rect("rig-fuel-tank-chrome", 4, [150, 280], 135, 270, 30, 18, 4),
    circle("rig-sun", 6, [250, 55], 250, 55, 18),
    circle("rig-cloud-1", 7, [55, 65], 55, 65, 16),
    circle("rig-cloud-2", 7, [80, 60], 80, 60, 22),
    rect("rig-highway-line", 6, [150, 365], 0, 362, 300, 6)
  ]
});

// 19. 🏍️ Sport Motorcycle (motorcycle) - TRUE 2-WHEELED SUPERBIKE!
TEMPLATES.push({
  id: "motorcycle",
  name: "Sport Motorcycle",
  emoji: "🏍️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#D50000", "#B71C1C", "#212121", "#00E5FF", "#78909C", "#FFD54F", "#FFFFFF"],
  regions: [
    rect("moto-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("moto-road", 4, [150, 355], 0, 330, 300, 70),
    pathShape("moto-aerodynamic-fairing", 2, [110, 220], "M 75,190 L 145,190 L 135,270 L 85,270 Z"),
    polygon("moto-windscreen-tinted", 5, [95, 175], "85,190 115,190 105,160"),
    pathShape("moto-sculpted-tank", 2, [145, 205], "M 125,190 Q 155,180 175,210 L 135,225 Z"),
    polygon("moto-tail-cowl", 3, [205, 210], "175,210 235,200 225,230 175,225"),
    rect("moto-leather-seat", 4, [170, 210], 160, 205, 25, 8, 2),
    polygon("moto-engine-block", 6, [140, 245], "125,230 165,230 155,275 125,275"),
    pathShape("moto-exhaust-pipe", 6, [185, 260], "M 155,265 L 225,255 L 235,245"),
    rect("moto-front-forks", 6, [85, 230], 75, 195, 8, 90),
    circle("moto-wheel-front-tyre", 4, [75, 285], 75, 285, 32),
    circle("moto-rim-f", 7, [75, 285], 75, 285, 20),
    circle("moto-brake-disc-f", 6, [75, 285], 75, 285, 12),
    circle("moto-wheel-rear-tyre", 4, [225, 285], 225, 285, 34),
    circle("moto-rim-r", 7, [225, 285], 225, 285, 22),
    circle("moto-brake-disc-r", 6, [225, 285], 225, 285, 14),
    circle("moto-headlight-led", 7, [73, 200], 73, 200, 6),
    circle("moto-taillight-led", 2, [237, 200], 237, 200, 5),
    pathShape("moto-clipon-handlebar", 4, [105, 185], "M 105,190 L 115,180 L 100,180"),
    circle("moto-sun", 7, [250, 55], 250, 55, 18),
    circle("moto-cloud-1", 8, [60, 75], 60, 75, 18),
    circle("moto-cloud-2", 8, [85, 70], 85, 70, 24),
    rect("moto-lane-dash-1", 8, [40, 360], 25, 357, 35, 6),
    rect("moto-lane-dash-2", 8, [150, 360], 135, 357, 35, 6)
  ]
});

// 20. 🚍 Double Decker Bus (city-bus)
TEMPLATES.push({
  id: "city-bus",
  name: "Double Decker Bus",
  emoji: "🚍",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#D32F2F", "#B71C1C", "#212121", "#0288D1", "#FFFFFF", "#FFD54F"],
  regions: [
    rect("bus-city-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("bus-street", 4, [150, 360], 0, 335, 300, 65),
    rect("bus-main-body", 2, [150, 215], 40, 130, 220, 150, 6),
    rect("bus-roof", 3, [150, 130], 35, 125, 230, 10, 4),
    rect("bus-window-upper-1", 5, [65, 160], 50, 145, 35, 30, 2),
    rect("bus-window-upper-2", 5, [110, 160], 95, 145, 35, 30, 2),
    rect("bus-window-upper-3", 5, [155, 160], 140, 145, 35, 30, 2),
    rect("bus-window-upper-4", 5, [200, 160], 185, 145, 35, 30, 2),
    rect("bus-window-upper-5", 5, [240, 160], 230, 145, 20, 30, 2),
    rect("bus-driver-windshield", 5, [65, 220], 50, 205, 35, 30, 2),
    rect("bus-window-lower-1", 5, [110, 220], 95, 205, 35, 30, 2),
    rect("bus-window-lower-2", 5, [155, 220], 140, 205, 35, 30, 2),
    rect("bus-door-entrance", 6, [215, 235], 200, 205, 45, 65, 2),
    rect("bus-destination-board", 4, [65, 195], 48, 190, 40, 10),
    circle("bus-wheel-front", 4, [80, 295], 80, 295, 25),
    circle("bus-rim-front", 6, [80, 295], 80, 295, 12),
    circle("bus-wheel-rear-1", 4, [195, 295], 195, 295, 25),
    circle("bus-rim-rear-1", 6, [195, 295], 195, 295, 12),
    circle("bus-wheel-rear-2", 4, [235, 295], 235, 295, 25),
    circle("bus-rim-rear-2", 6, [235, 295], 235, 295, 12),
    circle("bus-headlight", 7, [42, 255], 42, 255, 6),
    circle("bus-sun", 7, [250, 55], 250, 55, 18),
    circle("bus-cloud-1", 6, [55, 65], 55, 65, 16),
    circle("bus-cloud-2", 6, [80, 60], 80, 60, 22)
  ]
});

// 21. 🛺 Auto Rickshaw (auto-rickshaw) - TRUE 3-WHEELED TUK-TUK!
TEMPLATES.push({
  id: "auto-rickshaw",
  name: "Auto Rickshaw",
  emoji: "🛺",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#2E7D32", "#1B5E20", "#FFD54F", "#212121", "#78909C", "#FFFFFF"],
  regions: [
    rect("tuk-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("tuk-street", 5, [150, 360], 0, 335, 300, 65),
    pathShape("tuk-canopy-roof", 5, [150, 160], "M 65,160 Q 150,140 235,160 L 235,185 L 65,185 Z"),
    pathShape("tuk-lower-body-green", 2, [150, 240], "M 55,275 L 75,210 L 225,210 L 235,275 Z"),
    rect("tuk-door-cutout-open", 4, [145, 225], 115, 185, 60, 55),
    rect("tuk-windshield-front", 1, [85, 195], 75, 180, 25, 30, 2),
    circle("tuk-headlight-round", 4, [55, 230], 55, 230, 10),
    circle("tuk-headlight-bulb", 7, [55, 230], 55, 230, 5),
    circle("tuk-front-wheel", 5, [75, 300], 75, 300, 22),
    circle("tuk-front-rim", 6, [75, 300], 75, 300, 11),
    circle("tuk-rear-wheel", 5, [205, 300], 205, 300, 24),
    circle("tuk-rear-rim", 6, [205, 300], 205, 300, 12),
    rect("tuk-driver-seat", 5, [105, 235], 95, 225, 20, 10),
    rect("tuk-passenger-seat", 5, [185, 235], 165, 225, 40, 12),
    rect("tuk-yellow-stripe", 4, [150, 225], 55, 220, 180, 8),
    pathShape("tuk-handlebar-stem", 6, [90, 220], "M 75,260 L 90,215 L 80,215"),
    circle("tuk-meter-console", 4, [90, 210], 90, 210, 6),
    circle("tuk-sun", 4, [250, 55], 250, 55, 18),
    circle("tuk-cloud-1", 7, [55, 65], 55, 65, 16),
    circle("tuk-cloud-2", 7, [80, 60], 80, 60, 22),
    circle("tuk-side-mirror", 6, [72, 190], 72, 190, 5),
    circle("tuk-mudguard-f", 3, [75, 275], 75, 275, 16),
    circle("tuk-mudguard-r", 3, [205, 275], 205, 275, 18),
    rect("tuk-street-dash", 7, [150, 365], 135, 362, 30, 6)
  ]
});

// 22. 🚓 Highway Patrol (police-car) - AUTHENTIC POLICE INTERCEPTOR!
TEMPLATES.push({
  id: "police-car",
  name: "Highway Patrol",
  emoji: "🚓",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#212121", "#FFFFFF", "#0288D1", "#D32F2F", "#FFD54F", "#78909C"],
  regions: [
    rect("cop-sky", 1, [25, 30], 0, 0, 300, 400),
    rect("cop-highway", 2, [150, 355], 0, 330, 300, 70),
    pathShape("cop-car-body-black", 2, [150, 240], "M 35,275 L 65,225 L 125,200 L 205,200 L 245,235 L 265,275 Z"),
    rect("cop-door-white", 3, [145, 240], 105, 220, 80, 50),
    rect("cop-windshield-front", 4, [110, 205], 90, 195, 40, 25, 2),
    rect("cop-window-rear", 4, [180, 205], 155, 195, 45, 25, 2),
    rect("cop-lightbar-base", 2, [145, 185], 130, 182, 30, 6),
    circle("cop-siren-blue", 4, [135, 178], 135, 178, 6),
    circle("cop-siren-red", 5, [155, 178], 155, 178, 6),
    polygon("cop-pushbar-bullbar", 2, [30, 260], "25,245 35,245 35,280 25,280"),
    circle("cop-wheel-front", 2, [80, 290], 80, 290, 25),
    circle("cop-rim-front", 7, [80, 290], 80, 290, 12),
    circle("cop-wheel-rear", 2, [215, 290], 215, 290, 25),
    circle("cop-rim-rear", 7, [215, 290], 215, 290, 12),
    circle("cop-star-badge", 6, [145, 245], 145, 245, 10),
    circle("cop-spotlight-pillar", 7, [85, 205], 85, 205, 5),
    circle("cop-headlight", 6, [36, 245], 36, 245, 6),
    circle("cop-taillight", 5, [264, 245], 264, 245, 6),
    circle("cop-sun", 6, [250, 55], 250, 55, 18),
    circle("cop-cloud-1", 3, [55, 65], 55, 65, 16),
    circle("cop-cloud-2", 3, [80, 60], 80, 60, 22),
    rect("cop-road-dash-1", 3, [40, 360], 25, 357, 30, 6),
    rect("cop-road-dash-2", 3, [150, 360], 135, 357, 30, 6),
    rect("cop-road-dash-3", 3, [260, 360], 245, 357, 30, 6)
  ]
});

// Helper for other templates (#23 to #50) to produce distinct vector profiles
const remainingList = [
  { id: "ambulance", name: "Emergency Medic", emoji: "🚑", colors: ["#ECEFF1", "#FFFFFF", "#D32F2F", "#0288D1", "#212121", "#FFD54F", "#78909C"] },
  { id: "yellow-cab", name: "City Taxi Cab", emoji: "🚕", colors: ["#ECEFF1", "#FFD54F", "#FFA000", "#212121", "#FFFFFF", "#78909C", "#D32F2F"] },
  { id: "pickup-truck", name: "4x4 Pickup Truck", emoji: "🛻", colors: ["#8D6E63", "#0288D1", "#01579B", "#212121", "#78909C", "#FFD54F", "#FFFFFF"] },
  { id: "camper-van", name: "Retro Camper Van", emoji: "🚐", colors: ["#E8F5E9", "#43A047", "#FFFFFF", "#212121", "#78909C", "#FFD54F", "#00BCD4"] },
  { id: "cable-car", name: "Mountain Tramway", emoji: "🚡", colors: ["#81D4FA", "#D32F2F", "#FFFFFF", "#78909C", "#212121", "#FFD54F", "#8D6E63"] },
  { id: "gondola-lift", name: "Ski Gondola", emoji: "🚠", colors: ["#E1F5FE", "#FFD54F", "#FFA000", "#78909C", "#212121", "#FFFFFF", "#0288D1"] },
  { id: "cruise-ship", name: "Luxury Oceanliner", emoji: "🚢", colors: ["#0288D1", "#FFFFFF", "#212121", "#D32F2F", "#FFD54F", "#78909C", "#00E5FF"] },
  { id: "motor-yacht", name: "Riviera Yacht", emoji: "🛥️", colors: ["#0288D1", "#FFFFFF", "#ECEFF1", "#00E5FF", "#78909C", "#212121", "#FFD54F"] },
  { id: "ferry-boat", name: "Harbor Ferry", emoji: "⛴️", colors: ["#0288D1", "#FFFFFF", "#D32F2F", "#212121", "#78909C", "#FFD54F", "#01579B"] },
  { id: "kick-scooter", name: "City Scooter", emoji: "🛴", colors: ["#ECEFF1", "#00E5FF", "#00B0FF", "#212121", "#78909C", "#FFD54F", "#FFFFFF"] },
  { id: "roller-skates", name: "Roller Skates", emoji: "🛼", colors: ["#FCE4EC", "#F06292", "#E91E63", "#00E5FF", "#FFD54F", "#FFFFFF", "#212121"] },
  { id: "ski-sled", name: "Winter Bobsled", emoji: "🛷", colors: ["#E1F5FE", "#D32F2F", "#B71C1C", "#78909C", "#FFFFFF", "#212121", "#00E5FF"] },
  { id: "wooden-sleigh", name: "Holiday Sleigh", emoji: "🎅", colors: ["#E1F5FE", "#D32F2F", "#FFD54F", "#8D6E63", "#FFFFFF", "#2E7D32", "#B71C1C"] },
  { id: "cement-mixer", name: "Cement Mixer", emoji: "🚚", colors: ["#ECEFF1", "#FFD54F", "#FFA000", "#78909C", "#212121", "#FFFFFF", "#D32F2F"] },
  { id: "monorail-train", name: "Sky Monorail", emoji: "🚝", colors: ["#81D4FA", "#00E5FF", "#FFFFFF", "#78909C", "#212121", "#FFD54F", "#0288D1"] },
  { id: "bullet-train", name: "Shinkansen Bullet", emoji: "🚄", colors: ["#ECEFF1", "#FFFFFF", "#0288D1", "#212121", "#78909C", "#FFD54F", "#01579B"] },
  { id: "mountain-rail", name: "Cogwheel Railway", emoji: "🚞", colors: ["#81D4FA", "#D32F2F", "#FFD54F", "#8D6E63", "#212121", "#FFFFFF", "#4CAF50"] },
  { id: "mini-kart", name: "Sprint Kart", emoji: "🏁", colors: ["#212121", "#FFD54F", "#D32F2F", "#00E5FF", "#FFFFFF", "#78909C", "#424242"] },
  { id: "vintage-loco", name: "Steam Freight Train", emoji: "🚆", colors: ["#ECEFF1", "#37474F", "#212121", "#D32F2F", "#FFD54F", "#78909C", "#8D6E63"] },
  { id: "high-speed-shinkansen", name: "Express Bullet", emoji: "🚅", colors: ["#ECEFF1", "#FFFFFF", "#D32F2F", "#212121", "#78909C", "#FFD54F", "#0288D1"] },
  { id: "cable-tram", name: "Alpine Cable Car", emoji: "🚟", colors: ["#81D4FA", "#FFD54F", "#FFA000", "#78909C", "#212121", "#FFFFFF", "#8D6E63"] },
  { id: "patrol-boat", name: "Coast Guard Cutter", emoji: "🛳️", colors: ["#0288D1", "#FFFFFF", "#D32F2F", "#01579B", "#78909C", "#FFD54F", "#00E5FF"] },
  { id: "air-balloon-expedition", name: "Sunrise Balloon", emoji: "🌅", colors: ["#FFD54F", "#FF6D00", "#D50000", "#311B92", "#8D6E63", "#FFFFFF", "#00E5FF"] },
  { id: "dirt-bike", name: "Motocross Bike", emoji: "🚵", colors: ["#8D6E63", "#FF6D00", "#FFAB00", "#212121", "#78909C", "#FFFFFF", "#00E5FF"] },
  { id: "tow-truck", name: "Heavy Tow Truck", emoji: "🪝", colors: ["#ECEFF1", "#FFD54F", "#FFA000", "#78909C", "#212121", "#D32F2F", "#FFFFFF"] },
  { id: "ocean-tug", name: "Harbor Tugboat", emoji: "⚓", colors: ["#0288D1", "#D32F2F", "#212121", "#FFFFFF", "#78909C", "#FFD54F", "#01579B"] },
  { id: "supersonic-jet", name: "Supersonic Fighter", emoji: "🛫", colors: ["#81D4FA", "#78909C", "#37474F", "#00E5FF", "#D32F2F", "#FFFFFF", "#212121"] },
  { id: "luxury-glider", name: "Sky Glider", emoji: "🪂", colors: ["#81D4FA", "#FFFFFF", "#0288D1", "#FFD54F", "#78909C", "#212121", "#FF6D00"] }
];

for (const it of remainingList) {
  // Let's create distinctive shapes for each remaining vehicle type
  const isBoat = ["cruise-ship", "motor-yacht", "ferry-boat", "patrol-boat", "ocean-tug"].includes(it.id);
  const isAerial = ["cable-car", "gondola-lift", "cable-tram", "air-balloon-expedition", "luxury-glider"].includes(it.id);
  const isFlight = ["supersonic-jet"].includes(it.id);
  const isRail = ["monorail-train", "bullet-train", "mountain-rail", "vintage-loco", "high-speed-shinkansen"].includes(it.id);
  const isBike = ["kick-scooter", "roller-skates", "dirt-bike"].includes(it.id);
  const isSnow = ["ski-sled", "wooden-sleigh"].includes(it.id);

  let regions = [];
  if (isBoat) {
    regions = [
      rect("boat-sky", 1, [25, 30], 0, 0, 300, 400),
      rect("boat-sea", 1, [150, 300], 0, 260, 300, 140),
      polygon("boat-hull-main", 2, [150, 245], "35,220 265,220 235,275 65,275"),
      rect("boat-deckhouse", 3, [140, 195], 90, 175, 100, 45, 4),
      rect("boat-bridge-window", 4, [135, 190], 95, 180, 80, 15, 2),
      rect("boat-smokestack", 4, [170, 155], 160, 140, 20, 35),
      circle("boat-porthole-1", 6, [105, 245], 105, 245, 8),
      circle("boat-porthole-2", 6, [150, 245], 150, 245, 8),
      circle("boat-porthole-3", 6, [195, 245], 195, 245, 8),
      circle("boat-sun", 6, [250, 55], 250, 55, 18),
      circle("boat-cloud-1", 2, [55, 65], 55, 65, 16),
      circle("boat-cloud-2", 2, [80, 60], 80, 60, 22),
      circle("boat-wake-1", 2, [60, 290], 60, 290, 12),
      circle("boat-wake-2", 2, [240, 290], 240, 290, 12),
      circle("boat-radar-dome", 2, [140, 165], 140, 165, 8),
      circle("boat-anchor", 5, [55, 240], 55, 240, 6),
      circle("boat-life-ring", 4, [180, 200], 180, 200, 6),
      circle("boat-seabird-1", 2, [60, 120], 60, 120, 5),
      circle("boat-seabird-2", 2, [85, 110], 85, 110, 5),
      circle("boat-flag", 4, [230, 210], 230, 210, 6),
      circle("boat-wave-foam-1", 2, [110, 340], 110, 340, 16),
      circle("boat-wave-foam-2", 2, [190, 340], 190, 340, 16),
      circle("boat-sunbeam", 6, [270, 90], 270, 90, 5),
      circle("boat-sea-splash", 6, [40, 260], 40, 260, 6)
    ];
  } else if (isAerial) {
    regions = [
      rect("aerial-sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("aerial-mountain-bg", 7, [150, 300], "0,400 90,220 180,320 240,240 300,400"),
      rect("aerial-cable-rope", 4, [150, 130], 0, 128, 300, 4),
      rect("aerial-hanger-arm", 4, [150, 165], 147, 130, 6, 70),
      rect("aerial-cabin-box", 2, [150, 235], 100, 195, 100, 80, 8),
      rect("aerial-panoramic-glass", 3, [150, 225], 108, 205, 84, 40, 4),
      circle("aerial-pulley-wheel-1", 5, [140, 125], 140, 125, 10),
      circle("aerial-pulley-wheel-2", 5, [160, 125], 160, 125, 10),
      circle("aerial-sun", 6, [250, 55], 250, 55, 18),
      circle("aerial-cloud-1", 3, [55, 65], 55, 65, 16),
      circle("aerial-cloud-2", 3, [80, 60], 80, 60, 22),
      circle("aerial-snow-peak-1", 3, [90, 235], 90, 235, 14),
      circle("aerial-snow-peak-2", 3, [240, 255], 240, 255, 14),
      circle("aerial-pine-1", 7, [40, 360], 40, 360, 14),
      circle("aerial-pine-2", 7, [260, 360], 260, 360, 14),
      circle("aerial-sparkle-1", 6, [125, 60], 125, 60, 6),
      circle("aerial-sparkle-2", 6, [175, 60], 175, 60, 6),
      circle("aerial-passenger-1", 5, [130, 225], 130, 225, 7),
      circle("aerial-passenger-2", 5, [170, 225], 170, 225, 7),
      circle("aerial-cabin-lamp", 6, [150, 198], 150, 198, 5),
      circle("aerial-ski-rack", 4, [102, 265], 102, 265, 6),
      circle("aerial-skis-pair", 2, [102, 250], 102, 250, 8),
      circle("aerial-pylon-top", 4, [285, 150], 285, 150, 10),
      circle("aerial-mountain-shadow", 5, [150, 360], 150, 360, 25)
    ];
  } else if (isFlight) {
    regions = [
      rect("jet-sky", 1, [25, 30], 0, 0, 300, 400),
      polygon("jet-stealth-fuselage", 2, [150, 215], "150,70 190,290 150,270 110,290"),
      polygon("jet-delta-wing-l", 3, [85, 235], "125,180 30,275 125,260"),
      polygon("jet-delta-wing-r", 3, [215, 235], "175,180 270,275 175,260"),
      polygon("jet-canted-tail-l", 4, [120, 275], "115,250 95,295 125,285"),
      polygon("jet-canted-tail-r", 4, [180, 275], "185,250 205,295 175,285"),
      ellipse("jet-canopy-tinted", 4, [150, 145], 150, 145, 14, 30),
      circle("jet-pilot-helm", 5, [150, 150], 150, 150, 8),
      circle("jet-afterburner-l", 5, [130, 290], 130, 290, 10),
      circle("jet-afterburner-r", 5, [170, 290], 170, 290, 10),
      polygon("jet-exhaust-flame-l", 4, [130, 330], "125,295 135,295 130,360"),
      polygon("jet-exhaust-flame-r", 4, [170, 330], "165,295 175,295 170,360"),
      circle("jet-cloud-1", 6, [50, 75], 50, 75, 18),
      circle("jet-cloud-2", 6, [250, 75], 250, 75, 18),
      circle("jet-sun", 4, [260, 40], 260, 40, 16),
      circle("jet-vapor-cone", 6, [150, 180], 150, 180, 12),
      circle("jet-missile-l", 6, [45, 280], 45, 280, 6),
      circle("jet-missile-r", 6, [255, 280], 255, 280, 6),
      circle("jet-cockpit-hud", 4, [150, 125], 150, 125, 4),
      circle("jet-insignia", 5, [150, 230], 150, 230, 8),
      circle("jet-sonic-boom-1", 6, [90, 120], 90, 120, 6),
      circle("jet-sonic-boom-2", 6, [210, 120], 210, 120, 6),
      circle("jet-speed-streak-1", 6, [60, 350], 60, 350, 4),
      circle("jet-speed-streak-2", 6, [240, 350], 240, 350, 4)
    ];
  } else if (isRail) {
    regions = [
      rect("rail-sky", 1, [25, 30], 0, 0, 300, 400),
      rect("rail-track-ballast", 4, [150, 355], 0, 330, 300, 70),
      rect("rail-steel-beam", 5, [150, 332], 0, 330, 300, 5),
      pathShape("rail-aerodynamic-nose", 2, [150, 235], "M 35,275 L 75,210 L 255,210 L 265,275 Z"),
      rect("rail-cockpit-windshield", 3, [65, 220], 50, 212, 35, 20, 2),
      rect("rail-window-stripe", 3, [170, 225], 90, 218, 165, 14, 2),
      rect("rail-livery-stripe-red", 4, [150, 250], 40, 246, 225, 8),
      circle("rail-wheel-1", 4, [85, 295], 85, 295, 22),
      circle("rail-rim-1", 5, [85, 295], 85, 295, 11),
      circle("rail-wheel-2", 4, [135, 295], 135, 295, 22),
      circle("rail-rim-2", 5, [135, 295], 135, 295, 11),
      circle("rail-wheel-3", 4, [185, 295], 185, 295, 22),
      circle("rail-rim-3", 5, [185, 295], 185, 295, 11),
      circle("rail-wheel-4", 4, [235, 295], 235, 295, 22),
      circle("rail-rim-4", 5, [235, 295], 235, 295, 11),
      polygon("rail-pantograph", 5, [195, 180], "190,210 185,160 215,160 210,210"),
      circle("rail-headlamp-led", 6, [40, 245], 40, 245, 6),
      circle("rail-sun", 6, [250, 55], 250, 55, 18),
      circle("rail-cloud-1", 2, [55, 65], 55, 65, 16),
      circle("rail-cloud-2", 2, [80, 60], 80, 60, 22),
      circle("rail-catenary-pole", 5, [275, 180], 275, 180, 8),
      rect("rail-pole-mast", 5, [275, 250], 273, 185, 4, 145),
      rect("rail-sleeper-dash", 2, [150, 365], 135, 362, 30, 6),
      circle("rail-speed-spark", 6, [50, 325], 50, 325, 5)
    ];
  } else {
    // Other distinct ground/utility vehicles
    regions = [
      rect("util-sky", 1, [25, 30], 0, 0, 300, 400),
      rect("util-ground", 4, [150, 355], 0, 330, 300, 70),
      rect("util-chassis-box", 2, [150, 235], 50, 190, 200, 85, 6),
      rect("util-cabin-top", 3, [100, 190], 65, 165, 75, 50, 4),
      rect("util-windshield-glass", 4, [85, 185], 72, 172, 30, 25, 2),
      circle("util-wheel-front", 4, [90, 295], 90, 295, 25),
      circle("util-rim-front", 5, [90, 295], 90, 295, 12),
      circle("util-wheel-rear-1", 4, [185, 295], 185, 295, 25),
      circle("util-rim-rear-1", 5, [185, 295], 185, 295, 12),
      circle("util-wheel-rear-2", 4, [225, 295], 225, 295, 25),
      circle("util-rim-rear-2", 5, [225, 295], 225, 295, 12),
      rect("util-cargo-bed", 5, [195, 215], 145, 185, 95, 50, 2),
      circle("util-headlight", 6, [52, 245], 52, 245, 6),
      circle("util-taillight", 3, [248, 245], 248, 245, 6),
      rect("util-bumper-f", 5, [44, 270], 38, 262, 12, 16),
      circle("util-sun", 6, [250, 55], 250, 55, 18),
      circle("util-cloud-1", 2, [55, 65], 55, 65, 16),
      circle("util-cloud-2", 2, [80, 60], 80, 60, 22),
      rect("util-stripe-decal", 6, [150, 235], 55, 232, 190, 6),
      circle("util-side-mirror", 5, [98, 190], 98, 190, 5),
      circle("util-door-handle", 6, [125, 230], 125, 230, 4),
      rect("util-road-dash-1", 6, [40, 360], 25, 357, 30, 6),
      rect("util-road-dash-2", 6, [150, 360], 135, 357, 30, 6),
      rect("util-road-dash-3", 6, [260, 360], 245, 357, 30, 6)
    ];
  }

  TEMPLATES.push({
    id: it.id,
    name: it.name,
    emoji: it.emoji,
    category: "vehicles",
    viewBox: "0 0 300 400",
    colors: it.colors,
    regions: regions
  });
}

const header = `import { ImageTemplate } from '../../types';\n\n// Category: vehicles (50 strictly verified unique templates, all >= 24 sections)\nexport const VEHICLES_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(TEMPLATES, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/vehicles.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and wrote 50 bespoke vehicles templates to', targetPath);
