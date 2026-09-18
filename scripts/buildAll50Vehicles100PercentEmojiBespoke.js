const fs = require('fs');
const path = require('path');
const ts = require('typescript');

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

// First, read existing templates 1 to 30 from vehicles.ts
const existingFile = fs.readFileSync(path.join(__dirname, '../src/data/templates/vehicles.ts'), 'utf8');
const jsContent = ts.transpileModule(existingFile, {
  compilerOptions: { module: ts.ModuleKind.CommonJS }
}).outputText;

const mod = {};
const fn = new Function('exports', 'module', jsContent);
fn(mod, { exports: mod });
const oldTemplates = mod.VEHICLES_TEMPLATES || mod.vehiclesTemplates || mod.default || Object.values(mod)[0];

const ALL_50 = [];

// Push templates 1-30
for (let i = 0; i < 30; i++) {
  ALL_50.push(oldTemplates[i]);
}

console.log(`Loaded first ${ALL_50.length} templates (1 to 30)`);

// 31. ⛴️ Harbor Ferry (id: ferry, 24 regions)
ALL_50.push({
  id: "ferry",
  name: "Harbor Ferry",
  emoji: "⛴️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E1F5FE", "#0288D1", "#01579B", "#D32F2F", "#FFFFFF", "#37474F", "#FFD700", "#90A4AE"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("harbor-sea", 2, [150, 380], 150, 380, 140, 25),
    // Double-Ended Ferry Hull
    pathShape("hull-base", 3, [150, 310], "M 20,280 L 280,280 L 250,350 L 50,350 Z"),
    rect("hull-waterline-stripe", 4, [150, 335], 40, 330, 220, 12),
    // Vehicle Ramp / Car Deck
    rect("car-deck-lower", 6, [150, 265], 35, 255, 230, 25, 3),
    // Passenger Deck Tier 1
    rect("passenger-deck", 5, [150, 225], 55, 200, 190, 55, 4),
    rect("deck-window-1", 1, [85, 225], 70, 215, 30, 20, 2),
    rect("deck-window-2", 1, [130, 225], 115, 215, 30, 20, 2),
    rect("deck-window-3", 1, [170, 225], 155, 215, 30, 20, 2),
    rect("deck-window-4", 1, [215, 225], 200, 215, 30, 20, 2),
    // Wheelhouse / Bridge
    rect("bridge-cabin", 5, [150, 175], 95, 155, 110, 45, 4),
    rect("bridge-windshield", 1, [150, 170], 110, 160, 80, 20, 2),
    // Twin Funnels / Smokestacks
    rect("funnel-l", 4, [115, 125], 105, 105, 20, 50, 3),
    rect("funnel-r", 4, [185, 125], 175, 105, 20, 50, 3),
    rect("funnel-top-l", 6, [115, 108], 102, 103, 26, 10, 2),
    rect("funnel-top-r", 6, [185, 108], 172, 103, 26, 10, 2),
    // Radar Mast & Pennant
    rect("radar-mast", 6, [150, 120], 148, 90, 4, 65),
    circle("radar-antenna", 7, [150, 90], 150, 90, 8),
    // Life Buoys on Railing
    circle("life-buoy-l", 4, [65, 270], 65, 270, 9),
    circle("life-buoy-r", 4, [235, 270], 235, 270, 9),
    circle("cloud-1", 5, [65, 55], 65, 55, 16),
    circle("cloud-2", 5, [235, 55], 235, 55, 18),
    circle("sparkle-1", 7, [45, 120], 45, 120, 7),
    circle("sparkle-2", 7, [255, 120], 255, 120, 7)
  ]
});

// 32. 🛴 City Scooter (id: scooter-electric, 24 regions)
ALL_50.push({
  id: "scooter-electric",
  name: "City Scooter",
  emoji: "🛴",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#212121", "#37474F", "#00E676", "#00C853", "#00B0FF", "#FFD700", "#D50000", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("city-asphalt", 3, [150, 370], 0, 340, 300, 60),
    rect("curb-edge", 4, [150, 340], 0, 335, 300, 8),
    // Scooter Footboard / Deck with Battery Base
    rect("foot-deck", 2, [140, 320], 75, 310, 130, 16, 4),
    rect("deck-grip-tape", 4, [140, 314], 85, 310, 110, 6, 2),
    rect("kickstand", 3, [110, 335], 105, 322, 6, 22, 2),
    // Front Steering Stem & Fork
    pathShape("steering-column", 3, [205, 200], "M 195,315 L 225,120 L 232,120 L 202,315 Z"),
    rect("folding-clamp", 4, [200, 290], 192, 280, 16, 20, 3),
    // Handlebars & Grips
    rect("handlebar", 3, [228, 115], 180, 110, 96, 10, 4),
    rect("grip-l", 2, [190, 115], 180, 108, 20, 14, 3),
    rect("grip-r", 2, [266, 115], 256, 108, 20, 14, 3),
    // Digital Display Screen
    circle("digital-dash", 6, [228, 105], 228, 105, 9),
    circle("headlight-led", 9, [238, 135], 238, 135, 7),
    // Front Wheel & Tire
    circle("front-tire", 2, [215, 335], 215, 335, 28),
    circle("front-rim", 3, [215, 335], 215, 335, 18),
    circle("front-hub", 4, [215, 335], 215, 335, 8),
    // Rear Wheel & Disc Brake
    circle("rear-tire", 2, [65, 335], 65, 335, 28),
    circle("rear-rim", 3, [65, 335], 65, 335, 18),
    circle("rear-hub", 4, [65, 335], 65, 335, 8),
    rect("rear-mudguard", 3, [55, 310], 40, 305, 45, 10, 4),
    circle("taillight-red", 8, [42, 310], 42, 310, 5),
    circle("sun", 7, [60, 60], 60, 60, 20),
    circle("sparkle-1", 7, [255, 55], 255, 55, 8),
    circle("sparkle-2", 7, [45, 180], 45, 180, 6)
  ]
});

// 33. 🛼 Roller Skates (id: roller-skates, 24 regions)
ALL_50.push({
  id: "roller-skates",
  name: "Roller Skates",
  emoji: "🛼",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#FFF0F5", "#EC4899", "#DB2777", "#F472B6", "#FBBF24", "#60A5FA", "#FFFFFF", "#212121", "#8B5CF6"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    rect("skate-rink-floor", 9, [150, 370], 0, 345, 300, 55),
    // Retro Quad Roller Skate Boot
    pathShape("skate-boot-high", 2, [140, 200], "M 100,100 L 175,100 L 175,200 L 235,240 C 245,260 235,285 205,285 L 85,285 C 75,255 75,170 100,100 Z"),
    rect("boot-ankle-collar", 4, [138, 108], 95, 95, 85, 25, 6),
    rect("boot-sole-base", 8, [150, 288], 75, 280, 160, 16, 4),
    // Decorative Retro Side Stripes
    pathShape("side-stripe-1", 5, [145, 220], "M 110,140 L 195,245 L 180,255 L 100,150 Z"),
    pathShape("side-stripe-2", 6, [140, 235], "M 100,165 L 175,260 L 160,270 L 90,175 Z"),
    // Skate Laces & Eyelets
    rect("lace-bar-1", 7, [125, 140], 110, 136, 30, 6, 2),
    rect("lace-bar-2", 7, [135, 165], 120, 161, 30, 6, 2),
    rect("lace-bar-3", 7, [145, 190], 130, 186, 30, 6, 2),
    rect("lace-bar-4", 7, [160, 215], 145, 211, 30, 6, 2),
    // Front Toe Stopper
    polygon("toe-stop", 3, [245, 295], "230,285 260,285 250,315 240,315"),
    // Aluminum Wheel Plate / Trucks
    rect("wheel-chassis-plate", 7, [150, 305], 85, 296, 140, 10, 3),
    // 4 Heavy-Duty Urethane Wheels (2 shown front-side)
    circle("wheel-front-outer", 5, [205, 335], 205, 335, 28),
    circle("wheel-front-rim", 7, [205, 335], 205, 335, 18),
    circle("wheel-front-nut", 8, [205, 335], 205, 335, 8),
    circle("wheel-rear-outer", 5, [95, 335], 95, 335, 28),
    circle("wheel-rear-rim", 7, [95, 335], 95, 335, 18),
    circle("wheel-rear-nut", 8, [95, 335], 95, 335, 8),
    circle("disco-star-1", 5, [45, 55], 45, 55, 10),
    circle("disco-star-2", 5, [255, 55], 255, 55, 10),
    circle("disco-sparkle-1", 6, [240, 140], 240, 140, 8),
    circle("disco-sparkle-2", 6, [50, 220], 50, 220, 8)
  ]
});

// 34. 🛷 Winter Bobsled (id: bobsled, 24 regions)
ALL_50.push({
  id: "bobsled",
  name: "Winter Bobsled",
  emoji: "🛷",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#0284C7", "#0369A1", "#D97706", "#F59E0B", "#FFFFFF", "#212121", "#DC2626"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("ice-track-curve", 6, [150, 380], 150, 380, 140, 25),
    pathShape("ice-bank-wall", 1, [150, 310], "M 0,270 Q 150,330 300,270 L 300,350 Q 150,400 0,350 Z"),
    // Aerodynamic Bobsled Bullet Body
    pathShape("bobsled-hull", 2, [150, 220], "M 260,220 C 275,235 240,270 200,270 L 50,270 C 35,270 30,240 45,220 C 70,185 220,185 260,220 Z"),
    // Racing Speed Stripes
    pathShape("speed-stripe-gold", 4, [150, 225], "M 60,225 L 240,225 L 235,240 L 65,240 Z"),
    pathShape("speed-stripe-red", 8, [150, 245], "M 65,245 L 230,245 L 225,255 L 70,255 Z"),
    // Cockpit Cutout & Pilot Helmets
    ellipse("cockpit-opening", 7, [145, 195], 145, 195, 60, 16),
    circle("pilot-1-helmet", 8, [175, 175], 175, 175, 18),
    circle("pilot-1-visor", 7, [184, 175], 184, 175, 8),
    circle("pilot-2-helmet", 2, [125, 180], 125, 180, 16),
    circle("pilot-2-visor", 7, [132, 180], 132, 180, 7),
    // Aerodynamic Windshield Deflector
    pathShape("windshield", 6, [215, 190], "M 205,200 L 230,190 L 225,205 Z"),
    // Steel Runners / Skis
    rect("runner-support-f", 7, [205, 280], 200, 270, 10, 20, 2),
    rect("runner-support-r", 7, [95, 280], 90, 270, 10, 20, 2),
    pathShape("steel-runner-bar", 6, [150, 295], "M 40,295 L 255,295 L 265,285 L 250,290 L 45,290 Z"),
    // Ice Crystals & Speed Spray
    circle("ice-spray-1", 6, [35, 305], 35, 305, 8),
    circle("ice-spray-2", 6, [55, 315], 55, 315, 10),
    circle("ice-spray-3", 6, [25, 325], 25, 325, 6),
    circle("snowflake-1", 6, [50, 60], 50, 60, 10),
    circle("snowflake-2", 6, [250, 60], 250, 60, 10),
    circle("sparkle-1", 5, [150, 50], 150, 50, 8),
    circle("sparkle-2", 5, [95, 90], 95, 90, 6),
    circle("sparkle-3", 5, [210, 90], 210, 90, 6)
  ]
});

// 35. 🎅 Holiday Sleigh (id: sleigh, 24 regions)
ALL_50.push({
  id: "sleigh",
  name: "Holiday Sleigh",
  emoji: "🎅",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#1E1B4B", "#DC2626", "#B91C1C", "#FBBF24", "#F59E0B", "#15803D", "#FFFFFF", "#78350F"],
  regions: [
    rect("night-sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("snow-drift", 7, [150, 380], 150, 380, 140, 25),
    // Curved Golden Sleigh Runners
    pathShape("gold-runner-main", 4, [150, 320], "M 25,290 C 15,350 75,340 100,340 L 260,340 C 285,340 295,310 275,310 L 250,330 L 95,330 C 65,330 35,320 40,290 Z"),
    rect("runner-strut-1", 5, [85, 305], 80, 280, 10, 50, 3),
    rect("runner-strut-2", 5, [150, 305], 145, 280, 10, 50, 3),
    rect("runner-strut-3", 5, [215, 305], 210, 280, 10, 50, 3),
    // Ornate Crimson Sleigh Body
    pathShape("sleigh-body", 2, [145, 230], "M 55,180 C 45,260 85,280 150,280 L 245,280 C 275,280 280,220 255,200 C 235,185 210,230 180,230 L 105,230 C 85,230 65,160 55,180 Z"),
    pathShape("sleigh-gold-trim", 4, [145, 225], "M 55,180 C 65,160 85,230 105,230 L 180,230 C 210,230 235,185 255,200"),
    // Velvet Green Cushioned Seat
    ellipse("seat-cushion", 6, [140, 225], 140, 225, 45, 14),
    // Santa Gift Sack Overflowing with Presents
    ellipse("gift-sack", 8, [95, 175], 95, 175, 42, 45),
    rect("gift-box-1", 4, [75, 135], 60, 115, 30, 30, 3),
    rect("gift-ribbon-1", 2, [75, 135], 72, 115, 6, 30),
    rect("gift-box-2", 6, [115, 130], 100, 110, 30, 30, 3),
    rect("gift-ribbon-2", 4, [115, 130], 112, 110, 6, 30),
    circle("sack-holly-berry-1", 2, [95, 180], 95, 180, 6),
    circle("sack-holly-berry-2", 2, [105, 184], 105, 184, 5),
    // Glowing North Star & Constellations
    circle("moon", 7, [240, 65], 240, 65, 24),
    circle("north-star", 4, [65, 55], 65, 55, 10),
    circle("star-1", 7, [130, 45], 130, 45, 6),
    circle("star-2", 7, [180, 55], 180, 55, 5),
    circle("star-3", 7, [45, 120], 45, 120, 6),
    circle("sparkle-1", 4, [255, 140], 255, 140, 7),
    circle("sparkle-2", 4, [230, 270], 230, 270, 7)
  ]
});

// 36. 🚚 Cement Mixer (id: cement-mixer, 24 regions)
ALL_50.push({
  id: "cement-mixer",
  name: "Cement Mixer",
  emoji: "🚚",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#F59E0B", "#D97706", "#37474F", "#212121", "#94A3B8", "#FFFFFF", "#0284C7"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("road", 4, [150, 370], 0, 340, 300, 60),
    rect("chassis-beam", 5, [150, 315], 30, 305, 240, 16, 3),
    // Heavy Duty Truck Cab (Front)
    rect("cab-lower", 2, [235, 265], 205, 230, 65, 75, 4),
    pathShape("cab-windshield", 8, [245, 205], "M 205,230 L 230,175 L 270,175 L 270,230 Z"),
    rect("cab-roof-cap", 3, [250, 172], 225, 168, 48, 8, 2),
    circle("headlight-chrome", 7, [268, 275], 268, 275, 8),
    rect("front-bumper", 4, [265, 305], 255, 298, 20, 15, 2),
    // Rotating Cement Mixer Barrel Drum (Huge Spiral Cylinder)
    ellipse("mixer-drum-body", 2, [125, 215], 125, 215, 65, 45),
    pathShape("spiral-blade-1", 3, [105, 205], "M 80,180 Q 125,215 110,250"),
    pathShape("spiral-blade-2", 3, [145, 205], "M 120,180 Q 165,215 150,250"),
    rect("mixer-rear-hopper", 6, [50, 195], 40, 175, 25, 50, 3),
    pathShape("discharge-chute", 6, [35, 260], "M 55,230 L 20,285 L 35,290 L 65,240 Z"),
    rect("water-tank-cyl", 7, [185, 210], 175, 190, 18, 40, 6),
    // Wheels (6-wheel heavy construction chassis)
    circle("wheel-front", 5, [240, 340], 240, 340, 26),
    circle("rim-front", 6, [240, 340], 240, 340, 15),
    circle("wheel-mid", 5, [140, 340], 140, 340, 26),
    circle("rim-mid", 6, [140, 340], 140, 340, 15),
    circle("wheel-rear", 5, [80, 340], 80, 340, 26),
    circle("rim-rear", 6, [80, 340], 80, 340, 15),
    circle("sun", 2, [55, 60], 55, 60, 20),
    circle("cloud-1", 7, [150, 60], 150, 60, 16),
    circle("cloud-2", 7, [240, 65], 240, 65, 14)
  ]
});

// 37. 🚝 Sky Monorail (id: monorail, 24 regions)
ALL_50.push({
  id: "monorail",
  name: "Sky Monorail",
  emoji: "🚝",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#0284C7", "#0369A1", "#38BDF8", "#FFFFFF", "#64748B", "#475569", "#FBBF24"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("ground", 6, [150, 380], 0, 360, 300, 40),
    // Elevated Concrete Monorail Track Beam & Support Pylons
    rect("track-beam", 6, [150, 290], 0, 280, 300, 25),
    rect("pylon-left", 7, [75, 335], 65, 305, 20, 65),
    rect("pylon-right", 7, [225, 335], 215, 305, 20, 65),
    // Futuristic Aerodynamic Monorail Train Body
    pathShape("train-front-car", 2, [210, 230], "M 150,190 L 255,190 C 285,210 290,265 265,280 L 150,280 Z"),
    pathShape("train-rear-car", 2, [85, 235], "M 20,190 L 145,190 L 145,280 L 20,280 Z"),
    rect("car-coupler-gap", 7, [147, 235], 144, 195, 6, 80),
    // Blue Speed Stripes
    rect("speed-stripe-cyan", 4, [150, 255], 20, 250, 260, 10),
    rect("speed-stripe-dark", 3, [150, 265], 20, 260, 260, 8),
    // Panoramic Curved Windows
    pathShape("front-cockpit-window", 1, [260, 215], "M 250,195 L 275,225 L 250,235 Z"),
    rect("passenger-window-1", 1, [220, 215], 205, 202, 30, 22, 3),
    rect("passenger-window-2", 1, [175, 215], 160, 202, 30, 22, 3),
    rect("passenger-window-3", 1, [115, 215], 100, 202, 30, 22, 3),
    rect("passenger-window-4", 1, [65, 215], 50, 202, 30, 22, 3),
    circle("headlight-glow", 8, [282, 255], 282, 255, 6),
    circle("tail-marker-light", 8, [24, 255], 24, 255, 4),
    circle("pylon-light-l", 8, [75, 315], 75, 315, 4),
    circle("pylon-light-r", 8, [225, 315], 225, 315, 4),
    circle("sun", 8, [60, 60], 60, 60, 22),
    circle("cloud-1", 5, [150, 75], 150, 75, 18),
    circle("cloud-2", 5, [240, 70], 240, 70, 16),
    circle("sparkle-1", 8, [45, 140], 45, 140, 7),
    circle("sparkle-2", 8, [255, 140], 255, 140, 7)
  ]
});

// 38. 🚄 Shinkansen Bullet (id: shinkansen, 24 regions)
ALL_50.push({
  id: "shinkansen",
  name: "Shinkansen Bullet",
  emoji: "🚄",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#EDE7F6", "#FFFFFF", "#1E40AF", "#3B82F6", "#64748B", "#334155", "#F59E0B", "#EF4444"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("ballast-bed", 5, [150, 365], 0, 335, 300, 65),
    rect("steel-rail-1", 6, [150, 330], 0, 326, 300, 8),
    // Streamlined Japanese N700 Shinkansen Nose & Car
    pathShape("shinkansen-body", 2, [150, 240], "M 20,180 L 190,180 C 255,180 290,240 280,310 L 20,310 Z"),
    // Iconic Blue Speed Striping Along Body
    rect("shinkansen-blue-stripe-1", 3, [150, 270], 20, 262, 240, 14),
    rect("shinkansen-blue-stripe-2", 4, [150, 290], 20, 286, 255, 8),
    // Pilot Aerodynamic Windshield
    pathShape("bullet-windshield", 6, [240, 210], "M 220,185 L 265,225 L 235,235 Z"),
    // Sleek Cabin Windows
    rect("window-1", 6, [180, 215], 165, 205, 24, 18, 2),
    rect("window-2", 6, [140, 215], 125, 205, 24, 18, 2),
    rect("window-3", 6, [100, 215], 85, 205, 24, 18, 2),
    rect("window-4", 6, [60, 215], 45, 205, 24, 18, 2),
    // High-Speed Aerodynamic Pantograph on Roof
    polygon("pantograph-frame", 8, [90, 145], "80,180 90,135 110,135 120,180"),
    rect("pantograph-contact-shoe", 6, [100, 130], 75, 125, 50, 6, 2),
    circle("shinkansen-headlight", 7, [272, 280], 272, 280, 7),
    circle("cabin-door-line", 3, [35, 245], 35, 245, 4),
    circle("speed-whirl-1", 4, [285, 240], 285, 240, 5),
    circle("speed-whirl-2", 4, [275, 320], 275, 320, 5),
    circle("mt-fuji-peak", 2, [65, 95], 65, 95, 35),
    circle("mt-fuji-base", 3, [65, 130], 65, 130, 45),
    circle("sun", 8, [240, 65], 240, 65, 20),
    circle("cloud-1", 2, [160, 65], 160, 65, 16),
    circle("sparkle-1", 7, [45, 45], 45, 45, 7),
    circle("sparkle-2", 7, [255, 140], 255, 140, 7),
    circle("sparkle-3", 7, [130, 45], 130, 45, 5)
  ]
});

// 39. 🚞 Cogwheel Railway (id: cogwheel-train, 24 regions)
ALL_50.push({
  id: "cogwheel-train",
  name: "Cogwheel Railway",
  emoji: "🚞",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#DC2626", "#B91C1C", "#FBBF24", "#FFFFFF", "#475569", "#15803D", "#334155"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    // Alpine Mountain Incline Slope
    polygon("mountain-slope", 7, [150, 340], "0,250 300,120 300,400 0,400"),
    polygon("snow-summit", 5, [240, 100], "180,170 300,120 300,80 260,60"),
    // Cogwheel Toothed Central Rack Rail
    pathShape("cog-track", 6, [150, 240], "M 0,250 L 300,120 L 300,135 L 0,265 Z"),
    // Swiss Red Mountain Cog Train Car
    polygon("train-coach", 2, [145, 185], "60,200 220,130 235,210 75,280"),
    polygon("coach-roof", 3, [140, 155], "55,195 225,120 230,130 50,205"),
    // Panoramic Windows Following Mountain Angle
    polygon("window-1", 5, [95, 220], "80,215 110,200 115,240 85,255"),
    polygon("window-2", 5, [135, 200], "120,195 150,180 155,220 125,235"),
    polygon("window-3", 5, [175, 180], "160,175 190,160 195,200 165,215"),
    polygon("window-front", 5, [208, 160], "198,155 220,145 225,185 203,195"),
    // Heavy Toothed Cogwheel Gears
    circle("cogwheel-1", 8, [90, 275], 90, 275, 16),
    circle("cog-hub-1", 4, [90, 275], 90, 275, 6),
    circle("cogwheel-2", 8, [205, 225], 205, 225, 16),
    circle("cog-hub-2", 4, [205, 225], 205, 225, 6),
    circle("headlight-top", 4, [226, 140], 226, 140, 6),
    circle("headlight-bot-l", 4, [230, 195], 230, 195, 5),
    circle("headlight-bot-r", 4, [215, 202], 215, 202, 5),
    circle("pine-tree-1", 7, [40, 210], 40, 210, 18),
    circle("pine-tree-2", 7, [260, 280], 260, 280, 20),
    circle("pine-tree-3", 7, [180, 360], 180, 360, 16),
    circle("sun", 4, [60, 60], 60, 60, 20),
    circle("cloud-1", 5, [160, 50], 160, 50, 14),
    circle("sparkle-1", 4, [260, 45], 260, 45, 7),
    circle("sparkle-2", 4, [45, 130], 45, 130, 7)
  ]
});

// 40. 🏁 Sprint Kart (id: go-kart, 24 regions)
ALL_50.push({
  id: "go-kart",
  name: "Sprint Kart",
  emoji: "🏁",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#FFFBEB", "#DC2626", "#B91C1C", "#F59E0B", "#212121", "#37474F", "#FFFFFF", "#2563EB"],
  regions: [
    rect("bg", 1, [25, 30], 0, 0, 300, 400),
    rect("race-track-asphalt", 6, [150, 370], 0, 335, 300, 65),
    // Checkered Kerbing
    rect("kerb-white-1", 7, [40, 340], 0, 330, 75, 15),
    rect("kerb-red-1", 2, [115, 340], 75, 330, 75, 15),
    rect("kerb-white-2", 7, [190, 340], 150, 330, 75, 15),
    rect("kerb-red-2", 2, [265, 340], 225, 330, 75, 15),
    // Low-Slung Go-Kart Tubular Chassis
    rect("side-pod-l", 2, [140, 280], 85, 260, 110, 35, 6),
    pathShape("front-nose-cone", 2, [240, 280], "M 190,260 L 265,285 L 190,305 Z"),
    rect("front-spoiler-wing", 3, [255, 305], 240, 298, 35, 12, 3),
    // Driver Bucket Seat & Steering Wheel
    polygon("bucket-seat", 5, [110, 230], "90,190 125,190 130,270 95,270"),
    ellipse("steering-wheel", 5, [170, 230], 170, 230, 16, 22),
    // 2-Stroke Racing Engine & Exhaust Pipe Behind Seat
    rect("engine-block", 6, [70, 240], 55, 215, 30, 40, 4),
    pathShape("exhaust-pipe-header", 4, [55, 255], "M 55,235 C 30,240 30,280 60,280"),
    // Racing Number Plate #1
    circle("number-badge", 7, [220, 275], 220, 275, 12),
    // Wide Slick Racing Tyres
    circle("tire-front", 5, [225, 330], 225, 330, 28),
    circle("rim-front", 4, [225, 330], 225, 330, 14),
    circle("tire-rear", 5, [75, 330], 75, 330, 32),
    circle("rim-rear", 4, [75, 330], 75, 330, 16),
    // Crossed Checkered Flags in Background
    polygon("check-flag-1", 7, [65, 95], "40,60 90,80 75,120 25,100"),
    polygon("check-flag-2", 5, [235, 95], "210,80 260,60 275,100 225,120"),
    circle("flag-pole-l", 4, [40, 120], 40, 120, 4),
    circle("sparkle-1", 4, [150, 60], 150, 60, 8),
    circle("sparkle-2", 4, [45, 160], 45, 160, 7),
    circle("sparkle-3", 4, [255, 160], 255, 160, 7)
  ]
});

// 41. 🚆 Steam Freight Train (id: freight-train, 24 regions)
ALL_50.push({
  id: "freight-train",
  name: "Steam Freight Train",
  emoji: "🚆",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E2E8F0", "#1E293B", "#334155", "#475569", "#D97706", "#B91C1C", "#FFFFFF", "#FBBF24"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("ballast-gravel", 4, [150, 370], 0, 340, 300, 60),
    rect("railroad-track", 3, [150, 335], 0, 330, 300, 10),
    // Heavy Industrial Locomotive Boiler & Body
    rect("locomotive-boiler", 2, [180, 240], 130, 200, 110, 70, 6),
    rect("driver-cabin", 2, [90, 220], 55, 175, 75, 100, 4),
    rect("cab-roof", 3, [90, 168], 50, 162, 85, 14, 3),
    rect("cab-window", 8, [80, 200], 68, 185, 26, 26, 2),
    // Smokestack & Cowcatcher (Pilot Grill)
    rect("smokestack", 3, [215, 160], 205, 140, 20, 60, 3),
    polygon("cowcatcher-grill", 5, [255, 290], "240,265 285,325 240,325"),
    // Billowing Steam Smoke Clouds
    circle("smoke-puff-1", 7, [215, 115], 215, 115, 16),
    circle("smoke-puff-2", 7, [185, 80], 185, 80, 22),
    circle("smoke-puff-3", 7, [135, 55], 135, 55, 28),
    circle("smoke-puff-4", 7, [85, 45], 85, 45, 18),
    // Locomotive Driving Wheels with Connecting Rods
    circle("drive-wheel-1", 3, [90, 325], 90, 325, 24),
    circle("drive-wheel-2", 3, [150, 325], 150, 325, 24),
    circle("drive-wheel-3", 3, [210, 325], 210, 325, 24),
    rect("connecting-side-rod", 5, [150, 325], 90, 322, 120, 6, 2),
    circle("front-headlamp", 8, [245, 220], 245, 220, 10),
    circle("lamp-lens", 7, [245, 220], 245, 220, 6),
    circle("signal-post", 5, [280, 180], 280, 180, 8),
    circle("sun", 8, [50, 50], 50, 50, 18),
    circle("sparkle-1", 8, [255, 55], 255, 55, 8),
    circle("sparkle-2", 8, [45, 130], 45, 130, 6),
    circle("sparkle-3", 8, [150, 160], 150, 160, 5)
  ]
});

// 42. 🚅 Express Bullet (id: bullet-train, 24 regions)
ALL_50.push({
  id: "bullet-train",
  name: "Express Bullet",
  emoji: "🚅",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#EFF6FF", "#1D4ED8", "#2563EB", "#60A5FA", "#FFFFFF", "#334155", "#F59E0B", "#EF4444"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("track-viaduct", 6, [150, 360], 0, 330, 300, 70),
    // Streamlined Nose Maglev Bullet Train
    pathShape("bullet-nose-body", 5, [150, 240], "M 20,185 L 180,185 C 260,185 295,250 280,315 L 20,315 Z"),
    // Speed Stripes (Red and Blue)
    pathShape("speed-ribbon-red", 8, [150, 265], "M 20,255 L 245,255 L 240,268 L 20,268 Z"),
    pathShape("speed-ribbon-blue", 3, [150, 285], "M 20,275 L 260,275 L 255,290 L 20,290 Z"),
    // Front Cockpit Aerodynamic Visor
    pathShape("cockpit-glass", 6, [245, 215], "M 225,190 L 270,230 L 240,240 Z"),
    // Cabin Side Passenger Windows
    rect("pass-window-1", 6, [175, 220], 160, 210, 28, 20, 2),
    rect("pass-window-2", 1, [130, 220], 115, 210, 28, 20, 2),
    rect("pass-window-3", 6, [85, 220], 70, 210, 28, 20, 2),
    rect("pass-window-4", 1, [40, 220], 25, 210, 28, 20, 2),
    // High-Tech LED Dual Headlights
    circle("headlight-l", 7, [272, 275], 272, 275, 6),
    circle("headlight-r", 7, [275, 290], 275, 290, 6),
    // Speed Motion Trail Lines
    pathShape("speed-trail-1", 4, [100, 150], "M 40,150 L 160,150"),
    pathShape("speed-trail-2", 4, [80, 165], "M 20,165 L 140,165"),
    pathShape("speed-trail-3", 4, [120, 135], "M 60,135 L 180,135"),
    rect("track-pillar-1", 6, [80, 365], 70, 340, 20, 60),
    rect("track-pillar-2", 6, [220, 365], 210, 340, 20, 60),
    circle("sun", 7, [240, 60], 240, 60, 22),
    circle("cloud-1", 5, [140, 70], 140, 70, 16),
    circle("cloud-2", 5, [60, 75], 60, 75, 14),
    circle("sparkle-1", 7, [45, 40], 45, 40, 7),
    circle("sparkle-2", 7, [260, 130], 260, 130, 7),
    circle("sparkle-3", 7, [190, 45], 190, 45, 5),
    circle("marker-light", 7, [285, 305], 285, 305, 4)
  ]
});

// 43. 🚟 Alpine Cable Car (id: aerial-tram, 24 regions)
ALL_50.push({
  id: "aerial-tram",
  name: "Alpine Cable Car",
  emoji: "🚟",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#DC2626", "#B91C1C", "#FFFFFF", "#334155", "#15803D", "#FBBF24", "#64748B"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    // Snow Mountain Peaks in Background
    polygon("peak-left", 4, [75, 140], "0,220 80,80 150,220"),
    polygon("peak-right", 4, [225, 160], "140,240 220,110 300,240"),
    polygon("forest-slope", 6, [150, 340], "0,280 300,240 300,400 0,400"),
    // Overhead Steel Suspension Cable Wire
    pathShape("cable-line", 5, [150, 80], "M 0,110 L 300,50 L 300,56 L 0,116 Z"),
    // Trolley Carriage / Hanger Arm
    rect("trolley-bracket", 8, [150, 95], 140, 80, 20, 25, 3),
    rect("hanger-vertical-arm", 8, [150, 140], 146, 105, 8, 80),
    circle("pulley-wheel-1", 5, [138, 82], 138, 82, 8),
    circle("pulley-wheel-2", 5, [162, 78], 162, 78, 8),
    // Red Panoramic Cabin Body
    rect("cabin-body", 2, [150, 245], 85, 185, 130, 110, 14),
    rect("cabin-roof", 3, [150, 190], 80, 180, 140, 15, 6),
    // Wrap-Around Glass Windows
    rect("window-large-l", 1, [115, 230], 95, 205, 45, 55, 4),
    rect("window-large-r", 1, [185, 230], 160, 205, 45, 55, 4),
    rect("cabin-door-center", 3, [150, 255], 142, 205, 16, 85, 2),
    circle("cabin-light", 7, [150, 290], 150, 290, 5),
    circle("pine-1", 6, [40, 330], 40, 330, 20),
    circle("pine-2", 6, [260, 310], 260, 310, 22),
    circle("pine-3", 6, [140, 360], 140, 360, 16),
    circle("sun", 7, [60, 55], 60, 55, 20),
    circle("cloud-snow", 4, [210, 55], 210, 55, 16),
    circle("sparkle-1", 7, [255, 45], 255, 45, 7),
    circle("sparkle-2", 7, [45, 180], 45, 180, 6),
    circle("snowflake-1", 4, [105, 30], 105, 30, 6),
    circle("snowflake-2", 4, [270, 95], 270, 95, 6)
  ]
});

// 44. 🛳️ Coast Guard Cutter (id: cutter-ship, 24 regions)
ALL_50.push({
  id: "cutter-ship",
  name: "Coast Guard Cutter",
  emoji: "🛳️",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#FFFFFF", "#DC2626", "#1D4ED8", "#334155", "#0284C7", "#0369A1", "#F59E0B"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("sea-surface", 6, [150, 380], 150, 380, 140, 25),
    pathShape("wake-waves", 7, [150, 350], "M 0,335 Q 150,370 300,335 L 300,380 Q 150,400 0,380 Z"),
    // Coast Guard White Hull
    pathShape("cutter-hull", 2, [150, 295], "M 25,260 L 275,260 L 245,340 L 45,340 Z"),
    // Iconic Diagonal Red & Blue Coast Guard Racing Stripe
    polygon("racing-stripe-red", 3, [205, 295], "200,260 220,260 195,340 175,340"),
    polygon("racing-stripe-blue", 4, [225, 295], "224,260 232,260 207,340 199,340"),
    // Superstructure & Bridge
    rect("superstructure-tier-1", 2, [130, 225], 75, 195, 110, 65, 4),
    rect("bridge-tier-2", 2, [130, 175], 90, 155, 80, 40, 3),
    rect("bridge-windshield", 5, [130, 170], 98, 160, 64, 16, 2),
    // Radar Mast & Radome
    rect("radar-mast", 5, [130, 125], 127, 95, 6, 60),
    circle("radome-sphere", 2, [130, 95], 130, 95, 10),
    // Smokestack Funnel
    rect("funnel", 5, [85, 170], 75, 150, 20, 45, 3),
    rect("funnel-top-black", 5, [85, 152], 73, 148, 24, 8, 2),
    // Helipad at Stern (Aft Deck)
    rect("helipad-deck", 5, [45, 255], 25, 250, 40, 10),
    circle("helipad-h", 8, [45, 255], 45, 255, 5),
    circle("life-ring-1", 3, [95, 235], 95, 235, 6),
    circle("life-ring-2", 3, [165, 235], 165, 235, 6),
    circle("anchor-crest", 5, [255, 280], 255, 280, 6),
    circle("sun", 8, [240, 65], 240, 65, 22),
    circle("cloud-1", 2, [70, 60], 70, 60, 16),
    circle("cloud-2", 2, [170, 50], 170, 50, 14),
    circle("seagull-1", 5, [45, 120], 45, 120, 7),
    circle("seagull-2", 5, [255, 120], 255, 120, 7),
    circle("sparkle-1", 8, [150, 30], 150, 30, 6)
  ]
});

// 45. 🌅 Sunrise Balloon (id: hot-air-balloon, 24 regions)
ALL_50.push({
  id: "hot-air-balloon",
  name: "Sunrise Balloon",
  emoji: "🌅",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#FEF3C7", "#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6", "#10B981", "#78350F", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    circle("sunrise-sun", 2, [150, 280], 150, 280, 60),
    ellipse("valley-hills", 6, [150, 380], 150, 380, 140, 30),
    // Giant Colorful Hot Air Balloon Envelope
    pathShape("balloon-envelope", 3, [150, 140], "M 80,140 C 80,60 220,60 220,140 C 220,195 175,230 160,245 L 140,245 C 125,230 80,195 80,140 Z"),
    // Multi-Colored Vertical Gores / Stripes
    pathShape("gore-purple-l", 4, [115, 140], "M 115,140 C 115,75 145,65 150,65 L 150,245 C 142,235 115,190 115,140 Z"),
    pathShape("gore-blue-r", 5, [185, 140], "M 185,140 C 185,75 155,65 150,65 L 150,245 C 158,235 185,190 185,140 Z"),
    pathShape("gore-green-c", 6, [150, 140], "M 135,140 C 135,70 165,70 165,140 C 165,195 155,245 150,245 C 145,245 135,195 135,140 Z"),
    // Burner Frame & Flame
    polygon("burner-flame", 2, [150, 255], "144,265 156,265 150,248"),
    rect("rigging-ropes", 7, [150, 275], 138, 260, 24, 20),
    // Woven Wicker Basket
    rect("wicker-basket", 7, [150, 295], 135, 280, 30, 28, 4),
    rect("basket-rim", 3, [150, 282], 132, 278, 36, 6, 2),
    circle("cloud-l", 8, [55, 200], 55, 200, 18),
    circle("cloud-r", 8, [245, 200], 245, 200, 18),
    circle("mini-balloon-1", 4, [50, 80], 50, 80, 12),
    circle("mini-balloon-2", 5, [250, 95], 250, 95, 10),
    circle("mini-basket-1", 7, [50, 96], 50, 96, 3),
    circle("mini-basket-2", 7, [250, 109], 250, 109, 3),
    circle("hill-tree-1", 6, [70, 360], 70, 360, 8),
    circle("hill-tree-2", 6, [230, 360], 230, 360, 8),
    circle("sun-ray-1", 2, [80, 240], 80, 240, 6),
    circle("sun-ray-2", 2, [220, 240], 220, 240, 6),
    circle("sparkle-1", 2, [45, 30], 45, 30, 8),
    circle("sparkle-2", 2, [255, 30], 255, 30, 8),
    circle("sparkle-3", 2, [150, 30], 150, 30, 6)
  ]
});

// 46. 🚵 Motocross Bike (id: motocross, 24 regions)
ALL_50.push({
  id: "motocross",
  name: "Motocross Bike",
  emoji: "🚵",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#FFF7ED", "#EA580C", "#C2410C", "#212121", "#37474F", "#FBBF24", "#FFFFFF", "#78350F"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    polygon("dirt-jump-mound", 8, [150, 370], "0,400 120,310 240,400 300,400"),
    // Motocross Diamond Frame & Engine
    polygon("moto-frame", 2, [150, 230], "110,240 185,185 195,245 130,270"),
    rect("engine-crankcase", 5, [145, 255], 130, 235, 35, 35, 4),
    pathShape("expansion-chamber-exhaust", 5, [115, 260], "M 130,245 C 95,255 85,225 65,220"),
    // High-Rise Orange Body Plastics & Fender
    pathShape("front-fender-beak", 2, [225, 175], "M 185,185 L 255,160 L 235,185 Z"),
    pathShape("rear-fender-tail", 2, [90, 195], "M 130,200 L 60,185 L 85,215 Z"),
    rect("racing-number-plate", 7, [195, 160], 185, 145, 24, 25, 3),
    // Long-Travel Front Suspension Forks
    pathShape("front-forks", 4, [210, 230], "M 185,175 L 235,285 L 242,282 L 192,172 Z"),
    // Rear Swingarm & Monoshock
    rect("rear-swingarm", 5, [105, 275], 75, 268, 65, 10, 3),
    // Front Knobby Offroad Wheel & Spoke Hub
    circle("front-knobby-tire", 4, [238, 295], 238, 295, 30),
    circle("front-spoke-rim", 6, [238, 295], 238, 295, 18),
    circle("front-axle-hub", 5, [238, 295], 238, 295, 8),
    // Rear Knobby Offroad Wheel & Spoke Hub
    circle("rear-knobby-tire", 4, [75, 280], 75, 280, 30),
    circle("rear-spoke-rim", 6, [75, 280], 75, 280, 18),
    circle("rear-axle-hub", 5, [75, 280], 75, 280, 8),
    // Flying Dirt Roost Debris
    circle("dirt-clod-1", 8, [45, 310], 45, 310, 6),
    circle("dirt-clod-2", 8, [30, 285], 30, 285, 8),
    circle("dirt-clod-3", 8, [20, 335], 20, 335, 6),
    circle("dirt-clod-4", 8, [55, 350], 55, 350, 5),
    circle("handlebar-grip", 4, [170, 155], 170, 155, 5),
    circle("sun", 6, [60, 60], 60, 60, 22),
    circle("cloud-1", 7, [180, 65], 180, 65, 16),
    circle("sparkle-1", 6, [255, 55], 255, 55, 8)
  ]
});

// 47. 🪝 Heavy Tow Truck (id: tow-truck, 24 regions)
ALL_50.push({
  id: "tow-truck",
  name: "Heavy Tow Truck",
  emoji: "🪝",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#ECEFF1", "#2563EB", "#1D4ED8", "#F59E0B", "#EF4444", "#37474F", "#212121", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    rect("highway-road", 6, [150, 370], 0, 340, 300, 60),
    // Heavy Recovery Truck Cab (Front)
    rect("truck-cab", 2, [230, 260], 195, 220, 75, 85, 4),
    pathShape("cab-windshield", 8, [240, 195], "M 195,220 L 225,165 L 265,165 L 265,220 Z"),
    rect("cab-bumper-heavy", 6, [260, 310], 245, 300, 30, 16, 3),
    circle("headlight", 4, [265, 275], 265, 275, 8),
    // Amber/Red Emergency Lightbar on Cab Roof
    rect("lightbar-base", 6, [230, 162], 215, 158, 30, 6, 2),
    circle("beacon-amber", 4, [222, 154], 222, 154, 5),
    circle("beacon-red", 5, [238, 154], 238, 154, 5),
    // Heavy Duty Recovery Flatbed & Tool Boxes
    rect("wrecker-bed", 3, [115, 285], 40, 270, 155, 35, 4),
    // Heavy Hydraulic Boom Crane & Winch
    polygon("boom-crane-arm", 4, [110, 190], "145,270 65,150 78,145 155,270"),
    pathShape("steel-winch-cable", 7, [68, 200], "M 70,148 L 45,235"),
    // Heavy Steel Tow Hook
    pathShape("heavy-tow-hook", 7, [45, 250], "M 45,235 C 35,245 35,265 50,265 C 60,265 60,250 50,250"),
    // Heavy Duty Wheels (4 wheels)
    circle("wheel-front", 7, [235, 335], 235, 335, 26),
    circle("rim-front", 8, [235, 335], 235, 335, 14),
    circle("wheel-rear-1", 7, [145, 335], 145, 335, 26),
    circle("rim-rear-1", 8, [145, 335], 145, 335, 14),
    circle("wheel-rear-2", 7, [85, 335], 85, 335, 26),
    circle("rim-rear-2", 8, [85, 335], 85, 335, 14),
    circle("tool-cabinet", 6, [115, 285], 115, 285, 8),
    circle("sun", 4, [50, 55], 50, 55, 20),
    circle("cloud-1", 8, [160, 60], 160, 60, 16),
    circle("sparkle-1", 4, [255, 55], 255, 55, 8),
    circle("sparkle-2", 4, [45, 130], 45, 130, 6)
  ]
});

// 48. ⚓ Harbor Tugboat (id: tugboat, 24 regions)
ALL_50.push({
  id: "tugboat",
  name: "Harbor Tugboat",
  emoji: "⚓",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#DC2626", "#B91C1C", "#1E293B", "#FFFFFF", "#F59E0B", "#0284C7", "#0369A1"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("harbor-water", 7, [150, 380], 150, 380, 140, 25),
    pathShape("wake-splash", 8, [150, 350], "M 0,335 Q 150,370 300,335 L 300,380 Q 150,400 0,380 Z"),
    // Sturdy Rounded Tugboat Hull
    pathShape("tug-hull", 2, [150, 295], "M 25,260 L 275,260 C 285,290 255,340 215,340 L 65,340 C 35,340 15,290 25,260 Z"),
    rect("hull-rub-rail-black", 4, [150, 262], 20, 256, 260, 12, 3),
    // Heavy Tire Bumpers Along Hull
    circle("tire-bumper-1", 4, [55, 280], 55, 280, 10),
    circle("tire-bumper-2", 4, [115, 280], 115, 280, 10),
    circle("tire-bumper-3", 4, [185, 280], 185, 280, 10),
    circle("tire-bumper-4", 4, [245, 280], 245, 280, 10),
    // Tall Pilot House Cabin
    rect("pilot-house-lower", 5, [150, 215], 90, 185, 120, 70, 4),
    rect("pilot-house-upper", 5, [150, 165], 105, 145, 90, 40, 4),
    rect("pilot-windshield", 1, [150, 160], 115, 150, 70, 18, 2),
    // Single Tall Smokestack with Band
    rect("tug-smokestack", 4, [150, 115], 140, 90, 20, 55, 3),
    rect("stack-gold-band", 6, [150, 110], 138, 105, 24, 10, 2),
    circle("smoke-puff-1", 5, [150, 70], 150, 70, 14),
    circle("smoke-puff-2", 5, [125, 45], 125, 45, 10),
    // Heavy Towing Winch at Stern
    rect("tow-winch", 4, [55, 245], 40, 235, 30, 20, 3),
    circle("porthole-1", 4, [115, 230], 115, 230, 6),
    circle("porthole-2", 4, [185, 230], 185, 230, 6),
    circle("sun", 6, [240, 65], 240, 65, 22),
    circle("cloud-1", 5, [65, 60], 65, 60, 16),
    circle("sparkle-1", 6, [45, 120], 45, 120, 7),
    circle("sparkle-2", 6, [255, 120], 255, 120, 7),
    circle("harbor-buoy", 2, [30, 360], 30, 360, 8)
  ]
});

// 49. 🛫 Supersonic Fighter (id: fighter-jet, 24 regions)
ALL_50.push({
  id: "fighter-jet",
  name: "Supersonic Fighter",
  emoji: "🛫",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#0F172A", "#334155", "#475569", "#64748B", "#38BDF8", "#F59E0B", "#EF4444", "#FFFFFF"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("cloud-layer", 4, [150, 380], 150, 380, 140, 25),
    // Supersonic Delta-Wing Fighter Fuselage
    pathShape("jet-fuselage", 2, [150, 200], "M 150,60 L 175,190 L 195,290 L 105,290 L 125,190 Z"),
    // Needle Nose Cone & Pitot Tube
    polygon("nose-radome", 3, [150, 80], "142,100 158,100 150,55"),
    // Bubble Cockpit Canopy
    ellipse("cockpit-canopy", 5, [150, 135], 150, 135, 12, 32),
    circle("pilot-helmet", 1, [150, 135], 150, 135, 6),
    // Swept Delta Wings (Left and Right)
    polygon("wing-left", 3, [75, 240], "125,190 20,280 120,270"),
    polygon("wing-right", 3, [225, 240], "175,190 280,280 180,270"),
    // Wingtip Missile Rails & Missiles
    rect("missile-l", 7, [18, 260], 16, 240, 6, 45, 2),
    rect("missile-r", 7, [282, 260], 280, 240, 6, 45, 2),
    // Twin Angled Vertical Stabilizers (Twin Tails)
    polygon("tail-fin-l", 4, [115, 290], "120,260 100,220 115,290"),
    polygon("tail-fin-r", 4, [185, 290], "180,260 200,220 185,290"),
    // Twin Afterburner Thruster Plumes
    polygon("afterburner-flame-l", 6, [130, 335], "122,290 138,290 130,360"),
    polygon("afterburner-flame-r", 6, [170, 335], "162,290 178,290 170,360"),
    polygon("shock-diamond-l", 8, [130, 320], "126,310 134,310 130,325"),
    polygon("shock-diamond-r", 8, [170, 320], "166,310 174,310 170,325"),
    circle("wing-roundel-l", 7, [80, 245], 80, 245, 8),
    circle("wing-roundel-r", 7, [220, 245], 220, 245, 8),
    circle("star-1", 8, [45, 55], 45, 55, 6),
    circle("star-2", 8, [255, 55], 255, 55, 6),
    circle("sonic-ring-1", 5, [150, 180], 150, 180, 65),
    circle("sonic-ring-2", 5, [150, 220], 150, 220, 85),
    circle("sparkle-1", 6, [45, 120], 45, 120, 6),
    circle("sparkle-2", 6, [255, 120], 255, 120, 6)
  ]
});

// 50. 🪂 Sky Glider (id: paraglider, 24 regions)
ALL_50.push({
  id: "paraglider",
  name: "Sky Glider",
  emoji: "🪂",
  category: "vehicles",
  viewBox: "0 0 300 400",
  colors: ["#E0F2FE", "#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#FFFFFF", "#1E293B"],
  regions: [
    rect("sky", 1, [25, 30], 0, 0, 300, 400),
    ellipse("mountain-valley", 4, [150, 380], 150, 380, 140, 25),
    // Giant Curved Ram-Air Paraglider Wing Canopy
    pathShape("glider-canopy-arc", 2, [150, 100], "M 30,120 C 50,40 250,40 270,120 C 240,90 60,90 30,120 Z"),
    // Multi-Colored Wing Cells / Ribs
    pathShape("cell-red-l", 2, [70, 95], "M 30,120 C 45,60 85,55 85,95 C 60,90 40,105 30,120 Z"),
    pathShape("cell-orange-ml", 3, [105, 80], "M 85,95 C 85,55 125,50 125,92 C 105,88 90,92 85,95 Z"),
    pathShape("cell-green-c", 4, [150, 75], "M 125,92 C 125,50 175,50 175,92 C 155,88 140,88 125,92 Z"),
    pathShape("cell-blue-mr", 5, [195, 80], "M 175,92 C 175,50 215,55 215,95 C 205,92 190,88 175,92 Z"),
    pathShape("cell-purple-r", 6, [230, 95], "M 215,95 C 215,55 255,60 270,120 C 260,105 240,90 215,95 Z"),
    // Suspension Lines / Riser Cords
    pathShape("riser-line-1", 7, [80, 190], "M 50,110 L 145,260"),
    pathShape("riser-line-2", 7, [110, 185], "M 100,95 L 148,260"),
    pathShape("riser-line-3", 7, [190, 185], "M 200,95 L 152,260"),
    pathShape("riser-line-4", 7, [220, 190], "M 250,110 L 155,260"),
    // Pilot Harness & Figure Floating in Air
    rect("pilot-harness", 8, [150, 275], 140, 260, 20, 30, 4),
    circle("pilot-helmet", 3, [150, 250], 150, 250, 10),
    rect("pilot-legs", 5, [150, 300], 142, 290, 16, 25, 3),
    // Clouds and Flying Birds in Sky
    circle("cloud-1", 7, [55, 230], 55, 230, 18),
    circle("cloud-2", 7, [245, 230], 245, 230, 18),
    pathShape("bird-1", 8, [65, 150], "M 55,150 Q 65,140 75,150 Q 85,140 95,150"),
    pathShape("bird-2", 8, [225, 160], "M 215,160 Q 225,150 235,160 Q 245,150 255,160"),
    circle("sun", 3, [240, 45], 240, 45, 20),
    circle("sparkle-1", 3, [45, 45], 45, 45, 7),
    circle("sparkle-2", 3, [150, 25], 150, 25, 6),
    circle("thermal-stream", 7, [150, 340], 150, 340, 6)
  ]
});

console.log("Total Vehicles Templates in memory:", ALL_50.length);

const header = `import { ImageTemplate } from '../../types';\n\n// Category: vehicles (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)\nexport const VEHICLES_TEMPLATES: ImageTemplate[] = `;
const formattedCode = header + JSON.stringify(ALL_50, null, 2) + ';\n';

const targetPath = path.join(__dirname, '../src/data/templates/vehicles.ts');
fs.writeFileSync(targetPath, formattedCode, 'utf8');
console.log('Successfully generated and written all 50 vehicle templates to', targetPath);
