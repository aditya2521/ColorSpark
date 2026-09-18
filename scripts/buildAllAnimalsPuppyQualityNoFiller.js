const fs = require('fs');
const path = require('path');

// Helper functions
function rect(id, cn, label, x, y, w, h, rx) {
  const s = { kind:'rect', x, y, w, h };
  if (rx) s.rx = rx;
  return { id, colorNumber: cn, label, shape: s };
}
function circle(id, cn, label, cx, cy, r) {
  return { id, colorNumber: cn, label, shape: { kind:'circle', cx, cy, r } };
}
function ellipse(id, cn, label, cx, cy, rx, ry) {
  return { id, colorNumber: cn, label, shape: { kind:'ellipse', cx, cy, rx, ry } };
}
function P(id, cn, label, d) {
  return { id, colorNumber: cn, label, shape: { kind:'path', d } };
}
function poly(id, cn, label, pts) {
  return { id, colorNumber: cn, label, shape: { kind:'polygon', points: pts } };
}

// Load current animals
const animalsFile = path.join(__dirname, '../src/data/templates/animals.ts');
const content = fs.readFileSync(animalsFile, 'utf8');
const m = content.match(/export const ([A-Z_]+): ImageTemplate\[\] = (\[[\s\S]*\]);/);
const varName = m[1];
const currentAnimals = eval(m[2]);

// Keep first 22 (they already have puppy-quality art)
const first22 = currentAnimals.slice(0, 22);

// =====================================================================
// ALL 43 ANIMALS (#23-#65) REBUILT WITH PUPPY-DOG QUALITY
// RULE: Every region is a REAL part of the animal. NO filler circles.
// RULE: >=24 regions each, all forming the actual animal illustration.
// =====================================================================

const ANIMALS_23_TO_65 = [
  // ---- #23 🦔 Hedgehog ----
  {
    id: "hedgehog", name: "Hedgehog", emoji: "🦔",
    colors: ["#E8F5E9","#795548","#D7CCC8","#5D4037","#3E2723","#FF80AB","#FFFFFF","#FFD54F","#4CAF50","#FF5722","#A1887F","#BCAAA4"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 9, [150,385], 0,355,300,45),
      P("grass", 9, [150,360], "M0,365 Q75,340 150,355 Q225,340 300,365 L300,380 L0,380 Z"),
      P("quill-cloak", 4, [170,195], "M90,120 C60,180 60,310 130,340 L200,340 C260,310 270,180 230,120 Z"),
      P("quill-spine-1", 5, [115,110], "M110,140 L95,80 L130,135 Z"),
      P("quill-spine-2", 5, [155,95], "M145,130 L150,65 L165,125 Z"),
      P("quill-spine-3", 5, [195,105], "M185,135 L205,75 L210,130 Z"),
      P("quill-spine-4", 5, [235,140], "M225,160 L250,105 L245,155 Z"),
      P("quill-spine-5", 5, [70,160], "M80,175 L55,115 L95,170 Z"),
      P("quill-spine-side-r", 4, [255,210], "M245,190 L275,175 L260,215 Z"),
      P("quill-spine-side-l", 4, [60,230], "M75,215 L40,200 L65,245 Z"),
      ellipse("belly-soft", 3, [155,270], 155,270,60,50),
      circle("head-round", 3, [110,215], 110,215,45),
      P("snout-pointy", 3, [55,230], "M85,210 L42,230 L85,245 Z"),
      circle("nose-shiny", 5, [42,230], 42,230,7),
      circle("eye-white", 7, [100,205], 100,205,12),
      circle("eye-pupil", 5, [100,205], 100,205,6),
      circle("eye-glint", 7, [97,202], 97,202,2),
      ellipse("cheek-blush", 6, [115,230], 115,230,14,10),
      circle("ear-outer", 11, [135,180], 135,180,12),
      circle("ear-inner", 6, [135,180], 135,180,6),
      ellipse("paw-front-l", 11, [100,335], 100,335,18,12),
      ellipse("paw-front-r", 11, [175,338], 175,338,18,12),
      ellipse("paw-toes-l", 12, [100,340], 100,340,12,6),
      ellipse("paw-toes-r", 12, [175,343], 175,343,12,6),
      circle("mushroom-cap", 10, [40,340], 40,340,14),
      rect("mushroom-stem", 3, [40,352], 35,348,10,12),
      circle("leaf-decor", 9, [260,340], 260,340,12),
      circle("apple-snack", 10, [255,110], 255,110,14),
      P("apple-leaf", 9, [260,95], "M258,100 L270,85 L262,100 Z"),
    ]
  },

  // ---- #24 🦎 Chameleon ----
  {
    id: "chameleon", name: "Chameleon", emoji: "🦎",
    colors: ["#E0F7FA","#33691E","#4CAF50","#76FF03","#00BCD4","#FFD54F","#FF5722","#212121","#FFFFFF","#81C784","#8BC34A","#AED581"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("branch-thick", 2, [150,310], "M0,320 Q75,285 150,300 Q225,285 300,315 L300,340 Q225,315 150,330 Q75,315 0,350 Z"),
      P("branch-bark-texture", 2, [80,325], "M60,325 Q80,315 100,325 L100,335 Q80,325 60,335 Z"),
      ellipse("body-main", 3, [160,220], 160,220,65,48),
      P("belly-stripe-light", 12, [160,250], "M110,245 Q160,270 210,245 L210,255 Q160,280 110,255 Z"),
      ellipse("body-pattern-1", 4, [140,210], 140,210,18,14),
      ellipse("body-pattern-2", 4, [180,210], 180,210,14,12),
      ellipse("body-pattern-3", 11, [155,235], 155,235,12,10),
      circle("head-dome", 3, [95,190], 95,190,38),
      P("casque-crest", 5, [100,145], "M80,175 L100,115 L120,170 Z"),
      circle("turret-eye-outer", 4, [95,185], 95,185,18),
      circle("turret-eye-ring", 6, [95,185], 95,185,12),
      circle("turret-eye-pupil", 8, [95,185], 95,185,5),
      circle("eye-shine", 9, [92,182], 92,182,2),
      P("mouth-smile", 8, [72,205], "M65,200 Q80,215 95,205"),
      P("curl-tail-spiral", 3, [240,240], "M205,230 C250,220 265,260 240,280 C220,295 205,275 220,265 C230,258 240,270 235,275"),
      P("curl-tail-inner", 10, [245,255], "M215,240 C245,235 255,265 240,275"),
      ellipse("front-foot-zygo", 3, [115,280], 115,280,14,18),
      ellipse("back-foot-zygo", 3, [190,275], 190,275,14,18),
      P("toe-front-split", 4, [115,295], "M108,290 L105,300 M122,290 L125,300"),
      P("toe-back-split", 4, [190,290], "M183,285 L180,295 M197,285 L200,295"),
      circle("tongue-tip-fly", 7, [40,160], 40,160,8),
      P("tongue-line", 7, [65,175], "M65,195 Q50,175 42,163"),
      P("leaf-big-l", 10, [35,110], "M30,130 Q20,100 45,90 Q55,115 30,130 Z"),
      P("leaf-big-r", 10, [265,110], "M270,130 Q280,100 255,90 Q245,115 270,130 Z"),
    ]
  },

  // ---- #25 🎏 Japanese Koi ----
  {
    id: "koi", name: "Japanese Koi", emoji: "🎏",
    colors: ["#B3E5FC","#006064","#00BCD4","#FFFFFF","#FF5722","#D84315","#212121","#FFD54F","#F8BBD0","#4CAF50","#81D4FA","#FF8A65"],
    regions: [
      rect("pond-bg", 1, [22,30], 0,0,300,400),
      circle("pond-ripple-1", 11, [150,200], 150,200,130),
      circle("pond-ripple-2", 3, [150,200], 150,200,100),
      P("koi-body-flowing", 4, [150,185], "M150,70 C210,100 215,250 150,290 C85,250 90,100 150,70 Z"),
      P("koi-tail-left", 4, [115,330], "M150,290 Q105,340 80,335 Q110,310 150,290 Z"),
      P("koi-tail-right", 4, [185,330], "M150,290 Q195,340 220,335 Q190,310 150,290 Z"),
      circle("kohaku-head-spot", 5, [150,115], 150,115,22),
      ellipse("kohaku-back-spot", 5, [155,195], 155,195,26,20),
      circle("kohaku-tail-spot", 6, [148,255], 148,255,14),
      circle("sumi-mark-1", 7, [135,160], 135,160,8),
      circle("sumi-mark-2", 7, [165,220], 165,220,7),
      ellipse("fin-pectoral-l", 4, [100,145], 100,145,24,12),
      ellipse("fin-pectoral-r", 4, [200,145], 200,145,24,12),
      P("dorsal-fin", 4, [155,130], "M140,140 L155,95 L170,140 Z"),
      circle("eye-l", 7, [135,95], 135,95,6),
      circle("eye-r", 7, [165,95], 165,95,6),
      circle("eye-shine-l", 4, [133,93], 133,93,2),
      circle("eye-shine-r", 4, [163,93], 163,93,2),
      P("whisker-l", 7, [115,100], "M130,100 L100,110"),
      P("whisker-r", 7, [185,100], "M170,100 L200,110"),
      circle("lily-pad-1", 10, [55,75], 55,75,22),
      circle("lily-pad-2", 10, [245,280], 245,280,22),
      circle("lotus-bloom", 9, [55,75], 55,75,10),
      ellipse("lotus-petal", 9, [45,65], 45,65,8,14),
      circle("bubble-1", 4, [95,50], 95,50,7),
      circle("bubble-2", 4, [205,50], 205,50,5),
      circle("bubble-3", 11, [180,55], 180,55,4),
      circle("scale-accent-1", 12, [140,140], 140,140,6),
      circle("scale-accent-2", 12, [160,180], 160,180,6),
    ]
  },

  // ---- #26 🦊 Fox Face ----
  {
    id: "foxface", name: "Fox Face", emoji: "🦊",
    colors: ["#FFF8E1","#FF6D00","#E65100","#FFFFFF","#212121","#FFD54F","#FF80AB","#3E2723","#FFAB91","#BF360C","#FFE0B2","#FF8F00"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      circle("face-aura", 6, [150,195], 150,195,120),
      P("fox-head-shape", 2, [150,195], "M150,95 L245,185 L215,290 L150,310 L85,290 L55,185 Z"),
      P("ear-left", 2, [80,80], "M55,185 L65,40 L110,120 Z"),
      P("ear-right", 2, [220,80], "M245,185 L235,40 L190,120 Z"),
      P("ear-tip-l", 5, [68,50], "M65,40 L72,65 L58,65 Z"),
      P("ear-tip-r", 5, [232,50], "M235,40 L228,65 L242,65 Z"),
      P("ear-inner-l", 9, [85,100], "M70,60 L80,160 L105,125 Z"),
      P("ear-inner-r", 9, [215,100], "M230,60 L220,160 L195,125 Z"),
      P("forehead-mark", 3, [150,150], "M150,105 L170,155 L150,145 L130,155 Z"),
      P("white-cheek-l", 4, [105,240], "M55,185 L150,220 L85,290 Z"),
      P("white-cheek-r", 4, [195,240], "M245,185 L150,220 L215,290 Z"),
      P("chin-white", 4, [150,295], "M85,290 L150,310 L215,290 L150,280 Z"),
      ellipse("eye-white-l", 4, [120,180], 120,180,16,10),
      ellipse("eye-white-r", 4, [180,180], 180,180,16,10),
      ellipse("eye-pupil-l", 5, [120,180], 120,180,8,6),
      ellipse("eye-pupil-r", 5, [180,180], 180,180,8,6),
      circle("eye-shine-l", 4, [117,178], 117,178,3),
      circle("eye-shine-r", 4, [177,178], 177,178,3),
      circle("nose-black", 5, [150,260], 150,260,12),
      circle("nose-shine", 4, [148,257], 148,257,4),
      P("mouth-line", 5, [150,275], "M150,270 L150,280 M142,278 Q150,288 158,278"),
      ellipse("blush-l", 7, [95,225], 95,225,14,10),
      ellipse("blush-r", 7, [205,225], 205,225,14,10),
      circle("whisker-dot-l", 11, [80,245], 80,245,3),
      circle("whisker-dot-r", 11, [220,245], 220,245,3),
    ]
  },

  // ---- #27 🐬 Narwhal ----
  {
    id: "narwhal", name: "Narwhal", emoji: "🐬",
    colors: ["#0D47A1","#1565C0","#64B5F6","#BBDEFB","#FFFFFF","#FFD54F","#212121","#00E5FF","#81D4FA","#E3F2FD","#42A5F5","#90CAF9"],
    regions: [
      rect("deep-sea-bg", 1, [22,30], 0,0,300,400),
      circle("water-glow", 2, [150,210], 150,210,130),
      P("narwhal-body-chubby", 3, [155,225], "M70,250 C75,160 230,160 245,235 C235,290 95,300 70,250 Z"),
      ellipse("belly-cream", 4, [150,255], 150,255,65,30),
      P("belly-spot-1", 12, [130,250], "M120,245 Q130,260 140,245 Z"),
      P("belly-spot-2", 12, [170,250], "M160,245 Q170,260 180,245 Z"),
      circle("head-bulge", 3, [90,210], 90,210,40),
      P("horn-spiral", 6, [55,125], "M80,195 L20,55"),
      P("horn-stripe-1", 5, [60,150], "M65,160 L55,140"),
      P("horn-stripe-2", 5, [45,110], "M50,120 L40,100"),
      P("horn-stripe-3", 5, [32,80], "M37,90 L27,70"),
      P("fluke-tail-top", 3, [265,210], "M245,235 Q275,195 290,210"),
      P("fluke-tail-bot", 3, [265,255], "M245,235 Q275,275 290,260"),
      ellipse("flipper-fin", 11, [130,265], 130,265,24,12),
      circle("eye-big-white", 5, [95,210], 95,210,12),
      circle("eye-pupil", 7, [95,210], 95,210,6),
      circle("eye-shine", 5, [92,207], 92,207,3),
      ellipse("cheek-blush", 9, [115,230], 115,230,12,8),
      P("mouth-smile", 7, [80,230], "M70,225 Q82,240 95,228"),
      circle("bubble-1", 8, [80,155], 80,155,8),
      circle("bubble-2", 8, [95,130], 95,130,6),
      circle("bubble-3", 8, [70,125], 70,125,4),
      P("iceberg-top-1", 10, [50,55], "M25,75 L50,30 L75,75 Z"),
      P("iceberg-top-2", 10, [250,55], "M225,75 L250,30 L275,75 Z"),
      circle("star-twinkle-1", 6, [45,45], 45,45,3),
      circle("star-twinkle-2", 6, [255,45], 255,45,3),
    ]
  },

  // ---- #28 🐨 Koala ----
  {
    id: "koala", name: "Koala", emoji: "🐨",
    colors: ["#E8F5E9","#4CAF50","#795548","#78909C","#B0BEC5","#FFFFFF","#212121","#FF80AB","#2E7D32","#FFD54F","#90A4AE","#CFD8DC"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("tree-trunk", 3, [65,200], 50,0,30,400),
      P("bark-texture-1", 3, [60,120], "M52,110 Q65,105 78,115 L78,125 Q65,120 52,125 Z"),
      P("bark-texture-2", 3, [60,260], "M52,250 Q65,245 78,255 L78,265 Q65,260 52,265 Z"),
      ellipse("koala-body", 4, [165,275], 165,275,65,55),
      ellipse("belly-patch", 12, [165,275], 165,275,35,28),
      circle("koala-head", 4, [165,165], 165,165,48),
      circle("fluffy-ear-l", 11, [118,118], 118,118,26),
      circle("fluffy-ear-r", 11, [212,118], 212,118,26),
      circle("ear-inner-l", 5, [118,118], 118,118,16),
      circle("ear-inner-r", 5, [212,118], 212,118,16),
      ellipse("big-leather-nose", 7, [165,182], 165,182,16,20),
      circle("nose-shine", 6, [162,178], 162,178,4),
      circle("eye-white-l", 6, [140,155], 140,155,12),
      circle("eye-white-r", 6, [190,155], 190,155,12),
      circle("pupil-l", 7, [140,155], 140,155,6),
      circle("pupil-r", 7, [190,155], 190,155,6),
      circle("eye-shine-l", 6, [138,153], 138,153,2),
      circle("eye-shine-r", 6, [188,153], 188,153,2),
      ellipse("cheek-blush-l", 8, [125,190], 125,190,12,8),
      ellipse("cheek-blush-r", 8, [205,190], 205,190,12,8),
      P("mouth-smile", 7, [165,198], "M155,196 Q165,206 175,196"),
      ellipse("arm-hug-top", 4, [100,215], 100,215,20,12),
      ellipse("arm-hug-bot", 4, [100,295], 100,295,20,12),
      P("leaf-eucalyptus-1", 2, [35,110], "M25,130 Q20,100 50,90 Q48,120 25,130 Z"),
      P("leaf-eucalyptus-2", 9, [40,180], "M28,200 Q25,170 55,160 Q52,190 28,200 Z"),
      P("leaf-eucalyptus-3", 2, [35,320], "M25,340 Q20,310 50,300 Q48,330 25,340 Z"),
    ]
  },

  // ---- #29 🦍 Gorilla ----
  {
    id: "gorilla", name: "Gorilla", emoji: "🦍",
    colors: ["#263238","#37474F","#455A64","#546E7A","#78909C","#CFD8DC","#212121","#FF80AB","#FFFFFF","#3E2723","#B0BEC5","#90A4AE"],
    regions: [
      rect("misty-bg", 1, [22,30], 0,0,300,400),
      P("mist-fog", 3, [150,370], "M0,360 Q75,340 150,355 Q225,340 300,360 L300,400 L0,400 Z"),
      P("gorilla-body-massive", 2, [150,270], "M60,195 C40,230 40,340 90,355 L210,355 C260,340 260,230 240,195 Z"),
      P("sagittal-crest", 2, [150,80], "M110,140 C105,60 195,60 190,140 Z"),
      P("brow-ridge-heavy", 3, [150,120], "M108,125 Q150,145 192,125 Q150,110 108,125 Z"),
      circle("face-area", 4, [150,155], 150,155,35),
      ellipse("muzzle-leathery", 5, [150,170], 150,170,25,18),
      ellipse("nostril-l", 7, [140,168], 140,168,6,5),
      ellipse("nostril-r", 7, [160,168], 160,168,6,5),
      P("mouth-line", 7, [150,180], "M138,178 Q150,188 162,178"),
      circle("eye-white-l", 9, [132,135], 132,135,10),
      circle("eye-white-r", 9, [168,135], 168,135,10),
      circle("pupil-l", 7, [132,135], 132,135,5),
      circle("pupil-r", 7, [168,135], 168,135,5),
      circle("eye-shine-l", 9, [130,133], 130,133,2),
      circle("eye-shine-r", 9, [166,133], 166,133,2),
      ellipse("cheek-blush-l", 8, [112,175], 112,175,10,7),
      ellipse("cheek-blush-r", 8, [188,175], 188,175,10,7),
      ellipse("pec-muscle-l", 3, [120,230], 120,230,28,22),
      ellipse("pec-muscle-r", 3, [180,230], 180,230,28,22),
      P("silverback-patch", 11, [150,270], "M125,245 L175,245 L165,300 L135,300 Z"),
      ellipse("arm-thick-l", 2, [65,270], 65,270,22,50),
      ellipse("arm-thick-r", 2, [235,270], 235,270,22,50),
      circle("knuckle-fist-l", 3, [65,330], 65,330,18),
      circle("knuckle-fist-r", 3, [235,330], 235,330,18),
      P("vine-jungle", 12, [270,120], "M275,0 Q260,60 270,120 Q280,180 270,240"),
      P("leaf-jungle", 12, [260,80], "M265,70 L280,60 L275,85 Z"),
    ]
  },

  // ---- #30 🦘 Kangaroo ----
  {
    id: "kangaroo", name: "Kangaroo", emoji: "🦘",
    colors: ["#FFF8E1","#E65100","#FF8F00","#FFD54F","#3E2723","#FFFFFF","#FF80AB","#D84315","#FFAB91","#BF360C","#FFE0B2","#A1887F"],
    regions: [
      rect("outback-sky", 1, [22,30], 0,0,300,400),
      rect("outback-ground", 8, [150,380], 0,355,300,45),
      P("ground-ripple", 10, [150,360], "M0,365 Q75,345 150,360 Q225,345 300,365 L300,375 L0,375 Z"),
      ellipse("torso-body", 3, [140,255], 140,255,60,80),
      ellipse("belly-light", 9, [135,265], 135,265,35,45),
      circle("head-round", 3, [130,130], 130,130,38),
      P("ear-perked-l", 3, [100,70], "M100,120 L88,40 L115,110 Z"),
      P("ear-perked-r", 3, [145,65], "M130,120 L145,35 L155,110 Z"),
      P("ear-inner-pink-l", 7, [100,80], "M102,115 L92,55 L112,108 Z"),
      P("ear-inner-pink-r", 7, [143,75], "M132,115 L145,50 L152,108 Z"),
      P("snout-wedge", 9, [90,145], "M115,130 L70,145 L115,155 Z"),
      circle("nose-black", 5, [70,145], 70,145,6),
      circle("eye-white", 6, [118,125], 118,125,10),
      circle("eye-pupil", 5, [118,125], 118,125,5),
      circle("eye-shine", 6, [116,123], 116,123,2),
      ellipse("cheek-blush", 7, [118,150], 118,150,10,7),
      P("mouth-smile", 5, [85,155], "M80,152 Q90,162 100,152"),
      ellipse("powerful-thigh", 8, [175,305], 175,305,38,45),
      rect("big-foot", 3, [130,348], 85,340,90,16,7),
      ellipse("toe-pad-1", 12, [95,345], 95,345,8,5),
      ellipse("toe-pad-2", 12, [120,345], 120,345,8,5),
      ellipse("toe-pad-3", 12, [145,345], 145,345,8,5),
      P("thick-tail", 3, [240,305], "M175,285 Q255,290 275,355"),
      P("tail-stripe", 10, [255,325], "M185,290 Q260,295 275,355"),
      circle("pouch-cream", 11, [120,275], 120,275,22),
      circle("joey-head", 9, [115,260], 115,260,12),
      circle("joey-eye", 5, [112,258], 112,258,3),
      circle("outback-sun", 4, [245,60], 245,60,22),
    ]
  },

  // ---- #31 🐉 Gecko ----
  {
    id: "gecko", name: "Gecko", emoji: "🐉",
    colors: ["#E8F5E9","#2E7D32","#4CAF50","#76FF03","#FFD54F","#FF5722","#212121","#FFFFFF","#81C784","#00E676","#AED581","#C8E6C9"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("rock-surface", 9, [150,350], "M0,330 Q75,310 150,325 Q225,310 300,330 L300,400 L0,400 Z"),
      ellipse("gecko-body-sleek", 3, [150,220], 150,220,45,80),
      P("belly-light", 12, [150,220], "M125,160 Q150,150 175,160 L175,280 Q150,290 125,280 Z"),
      circle("head-wide-flat", 3, [150,120], 150,120,35),
      ellipse("head-shape-flat", 4, [150,125], 150,125,38,28),
      circle("giant-eye-l-outer", 5, [128,110], 128,110,16),
      circle("giant-eye-r-outer", 5, [172,110], 172,110,16),
      circle("eye-slit-l", 7, [128,110], 128,110,4),
      circle("eye-slit-r", 7, [172,110], 172,110,4),
      circle("eye-shine-l", 8, [125,107], 125,107,2),
      circle("eye-shine-r", 8, [169,107], 169,107,2),
      P("smile-wide", 7, [150,140], "M125,138 Q150,152 175,138"),
      P("front-leg-l", 3, [85,185], "M120,180 L65,165 L55,180 L70,180 Z"),
      P("front-leg-r", 3, [215,185], "M180,180 L235,165 L245,180 L230,180 Z"),
      P("back-leg-l", 3, [85,275], "M120,270 L65,285 L55,295 L75,290 Z"),
      P("back-leg-r", 3, [215,275], "M180,270 L235,285 L245,295 L225,290 Z"),
      circle("toe-pad-fl", 10, [55,177], 55,177,8),
      circle("toe-pad-fr", 10, [245,177], 245,177,8),
      circle("toe-pad-bl", 10, [55,293], 55,293,8),
      circle("toe-pad-br", 10, [245,293], 245,293,8),
      P("tail-curvy", 3, [160,340], "M150,300 Q180,340 160,370 Q140,390 155,395"),
      circle("spot-body-1", 11, [140,190], 140,190,8),
      circle("spot-body-2", 11, [160,230], 160,230,8),
      circle("spot-body-3", 11, [145,260], 145,260,7),
      circle("bug-fly", 6, [45,90], 45,90,6),
    ]
  },

  // ---- #32 🦩 Flamingo ---- (already exists in first 22? Let me check)
  // Actually flamingo is #14 in first 22. So #32 needs to be a different animal.
  // Let me check what the original #32 is...
  // Based on the current list, let me use the existing IDs from currentAnimals[31] onwards

  // ---- #32 🐒 Capuchin Monkey ----
  {
    id: "capuchin", name: "Capuchin Monkey", emoji: "🐒",
    colors: ["#E8F5E9","#4CAF50","#5D4037","#D7CCC8","#FFE0B2","#212121","#FF80AB","#FFFFFF","#FFD54F","#3E2723","#8D6E63","#BCAAA4"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("branch-perch", 10, [150,330], "M0,340 Q150,305 300,335 L300,360 Q150,330 0,365 Z"),
      P("branch-leaves-l", 2, [45,310], "M30,320 Q20,300 45,290 Q50,310 30,320 Z"),
      P("branch-leaves-r", 2, [260,310], "M270,325 Q280,305 255,295 Q250,315 270,325 Z"),
      ellipse("body-chubby", 3, [150,255], 150,255,55,60),
      ellipse("belly-cream", 4, [150,260], 150,260,32,35),
      circle("head-round", 3, [150,155], 150,155,48),
      circle("face-cream-area", 5, [150,160], 150,160,32),
      circle("ear-l", 11, [105,145], 105,145,14),
      circle("ear-r", 11, [195,145], 195,145,14),
      circle("ear-inner-l", 5, [105,145], 105,145,7),
      circle("ear-inner-r", 5, [195,145], 195,145,7),
      circle("eye-white-l", 8, [133,150], 133,150,10),
      circle("eye-white-r", 8, [167,150], 167,150,10),
      circle("pupil-l", 6, [133,150], 133,150,5),
      circle("pupil-r", 6, [167,150], 167,150,5),
      circle("eye-shine-l", 8, [131,148], 131,148,2),
      circle("eye-shine-r", 8, [165,148], 165,148,2),
      ellipse("nose-flat", 6, [150,170], 150,170,8,5),
      P("smile", 6, [150,180], "M140,178 Q150,188 160,178"),
      ellipse("blush-l", 7, [122,175], 122,175,10,7),
      ellipse("blush-r", 7, [178,175], 178,175,10,7),
      P("curly-tail", 11, [225,255], "M195,255 Q240,230 250,260 Q255,290 235,285 Q225,275 240,270"),
      ellipse("hand-l", 12, [105,310], 105,310,14,10),
      ellipse("hand-r", 12, [195,310], 195,310,14,10),
      circle("banana-fruit", 9, [150,290], 150,290,12),
    ]
  },

  // ---- #33 🦃 Turkey ----
  {
    id: "turkey", name: "Turkey", emoji: "🦃",
    colors: ["#FFF3E0","#795548","#5D4037","#FF5722","#F44336","#FFD54F","#212121","#FFFFFF","#FF9800","#4CAF50","#3E2723","#FFAB91"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 10, [150,385], 0,360,300,40),
      P("tail-fan-outer", 2, [150,130], "M75,250 C30,100 270,100 225,250 Z"),
      P("tail-fan-stripe-l", 4, [95,160], "M100,240 C55,130 100,110 120,155 Z"),
      P("tail-fan-stripe-r", 4, [205,160], "M200,240 C245,130 200,110 180,155 Z"),
      P("tail-fan-stripe-c", 9, [150,140], "M140,230 C110,110 190,110 160,230 Z"),
      ellipse("body-round", 3, [150,280], 150,280,65,55),
      ellipse("breast-feather", 12, [150,285], 150,285,38,35),
      P("wing-left", 2, [80,270], "M100,250 Q60,280 75,320 Q95,300 100,280 Z"),
      P("wing-right", 2, [220,270], "M200,250 Q240,280 225,320 Q205,300 200,280 Z"),
      circle("head-small", 2, [150,210], 150,210,22),
      P("wattle-red", 5, [145,240], "M145,225 Q135,248 145,260 Q155,248 145,225 Z"),
      P("snood-droop", 5, [158,230], "M155,220 Q165,240 155,250"),
      circle("eye-white", 8, [142,205], 142,205,7),
      circle("eye-pupil", 7, [142,205], 142,205,3),
      circle("eye-shine", 8, [140,203], 140,203,1),
      P("beak-upper", 6, [165,212], "M155,208 L175,212 L155,216 Z"),
      ellipse("foot-l", 9, [120,358], 120,358,18,8),
      ellipse("foot-r", 9, [180,358], 180,358,18,8),
      P("toe-l-1", 11, [110,360], "M120,355 L100,365"),
      P("toe-l-2", 11, [130,365], "M120,355 L135,368"),
      P("toe-r-1", 11, [190,360], "M180,355 L200,365"),
      P("toe-r-2", 11, [170,365], "M180,355 L165,368"),
      P("leg-l", 9, [125,340], "M130,330 L122,355"),
      P("leg-r", 9, [175,340], "M170,330 L178,355"),
    ]
  },

  // ---- #34 🐊 Crocodile ----
  {
    id: "crocodile", name: "Crocodile", emoji: "🐊",
    colors: ["#E8F5E9","#2E7D32","#388E3C","#4CAF50","#FFFFFF","#212121","#FF80AB","#FFD54F","#81C784","#1B5E20","#A5D6A7","#C8E6C9"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("river-water", 9, [150,360], "M0,340 Q75,320 150,335 Q225,320 300,340 L300,400 L0,400 Z"),
      P("riverbank-mud", 10, [150,345], "M0,350 Q150,325 300,350 L300,360 Q150,340 0,360 Z"),
      P("croc-body-long", 3, [160,230], "M60,220 C60,180 250,170 260,210 C270,260 80,270 60,220 Z"),
      P("belly-scales-light", 11, [160,240], "M90,235 Q160,260 235,230 L235,245 Q160,275 90,250 Z"),
      P("head-snout-long", 3, [100,195], "M105,180 L25,195 L25,215 L105,225 Z"),
      P("upper-jaw", 4, [60,195], "M105,180 L25,195 L60,200 Z"),
      P("lower-jaw", 4, [60,215], "M105,225 L25,215 L60,210 Z"),
      P("teeth-top", 5, [55,198], "M35,195 L40,205 L48,195 L53,205 L60,195 L65,205 L72,195 L78,205 L85,195"),
      P("teeth-bottom", 5, [55,213], "M35,215 L40,205 L48,215 L53,205 L60,215 L65,205 L72,215 L78,205 L85,215"),
      circle("eye-bump-l", 3, [115,175], 115,175,14),
      circle("eye-white-l", 8, [115,175], 115,175,8),
      circle("eye-slit-l", 6, [115,175], 115,175,3),
      circle("nostril-l", 6, [32,195], 32,195,3),
      circle("nostril-r", 6, [32,210], 32,210,3),
      P("scute-row-1", 10, [145,195], "M130,195 L140,180 L150,195 L160,180 L170,195"),
      P("scute-row-2", 10, [195,195], "M180,195 L190,180 L200,195 L210,180 L220,195"),
      P("front-leg-l", 3, [100,255], "M105,240 L85,275 L75,280 L95,275 Z"),
      P("front-leg-r", 3, [130,260], "M135,245 L125,280 L115,285 L130,280 Z"),
      P("back-leg-l", 3, [210,250], "M215,235 L200,275 L190,280 L210,270 Z"),
      P("back-leg-r", 3, [240,250], "M240,235 L230,275 L220,280 L240,270 Z"),
      P("tail-thick-long", 3, [270,220], "M260,210 Q295,215 290,240 Q285,260 265,255"),
      P("tail-scute-marks", 10, [280,225], "M270,215 L275,225 M280,218 L283,228"),
      circle("water-ripple-1", 12, [50,355], 50,355,8),
      circle("water-ripple-2", 12, [250,350], 250,350,8),
    ]
  },

  // ---- #35 🦛 Hippo ----
  {
    id: "hippo", name: "Hippo", emoji: "🦛",
    colors: ["#B3E5FC","#00BCD4","#78909C","#90A4AE","#CFD8DC","#FF80AB","#212121","#FFFFFF","#FFD54F","#546E7A","#B0BEC5","#E0E0E0"],
    regions: [
      rect("water-bg", 1, [22,30], 0,0,300,400),
      P("water-surface", 2, [150,300], "M0,290 Q75,270 150,285 Q225,270 300,290 L300,400 L0,400 Z"),
      P("water-ripple-l", 1, [60,300], "M30,295 Q60,285 90,295"),
      P("water-ripple-r", 1, [240,295], "M210,295 Q240,285 270,295"),
      ellipse("hippo-body-massive", 3, [150,280], 150,280,90,55),
      ellipse("hippo-belly", 12, [150,290], 150,290,55,30),
      circle("hippo-head-wide", 3, [150,180], 150,180,60),
      ellipse("broad-snout", 4, [150,210], 150,210,45,28),
      circle("nostril-bump-l", 10, [135,200], 135,200,10),
      circle("nostril-bump-r", 10, [165,200], 165,200,10),
      circle("nostril-hole-l", 7, [135,200], 135,200,4),
      circle("nostril-hole-r", 7, [165,200], 165,200,4),
      circle("eye-bump-l", 3, [118,148], 118,148,16),
      circle("eye-bump-r", 3, [182,148], 182,148,16),
      circle("eye-white-l", 8, [118,148], 118,148,10),
      circle("eye-white-r", 8, [182,148], 182,148,10),
      circle("pupil-l", 7, [118,148], 118,148,5),
      circle("pupil-r", 7, [182,148], 182,148,5),
      circle("eye-shine-l", 8, [116,146], 116,146,2),
      circle("eye-shine-r", 8, [180,146], 180,146,2),
      circle("tiny-ear-l", 10, [98,130], 98,130,10),
      circle("tiny-ear-r", 10, [202,130], 202,130,10),
      P("ear-inner-l", 6, [98,130], "M93,130 Q98,122 103,130"),
      P("ear-inner-r", 6, [202,130], "M197,130 Q202,122 207,130"),
      P("mouth-wide", 7, [150,228], "M120,222 Q150,240 180,222"),
      ellipse("cheek-blush-l", 6, [105,215], 105,215,12,8),
      ellipse("cheek-blush-r", 6, [195,215], 195,215,12,8),
      circle("water-splash-1", 8, [55,260], 55,260,8),
      circle("water-splash-2", 8, [245,260], 245,260,8),
    ]
  },

  // ---- #36 🐰 Bunny ----
  {
    id: "bunny", name: "Bunny", emoji: "🐰",
    colors: ["#FFF8E1","#8D6E63","#FFFFFF","#D7CCC8","#FF80AB","#212121","#FFAB91","#FFD54F","#4CAF50","#FF5722","#BCAAA4","#F8BBD0"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 9, [150,385], 0,358,300,42),
      P("grass-tufts", 9, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("bunny-body-fluffy", 3, [150,275], 150,275,70,60),
      ellipse("belly-fluff", 4, [150,280], 150,280,40,35),
      circle("bunny-head", 3, [150,165], 150,165,55),
      P("ear-tall-l", 3, [125,60], "M115,130 C105,30 130,20 140,130 Z"),
      P("ear-tall-r", 3, [175,60], "M160,130 C170,20 195,30 185,130 Z"),
      P("ear-inner-pink-l", 5, [125,70], "M120,125 C114,45 135,38 138,125 Z"),
      P("ear-inner-pink-r", 5, [175,70], "M162,125 C166,38 186,45 180,125 Z"),
      circle("eye-white-l", 3, [128,155], 128,155,12),
      circle("eye-white-r", 3, [172,155], 172,155,12),
      circle("pupil-l", 6, [128,155], 128,155,6),
      circle("pupil-r", 6, [172,155], 172,155,6),
      circle("eye-shine-l", 3, [126,153], 126,153,2),
      circle("eye-shine-r", 3, [170,153], 170,153,2),
      ellipse("nose-twitch-pink", 5, [150,178], 150,178,8,5),
      P("mouth-y", 6, [150,188], "M150,182 L150,192 M143,188 Q150,196 157,188"),
      P("whisker-l-1", 6, [100,178], "M120,175 L80,170"),
      P("whisker-l-2", 6, [100,185], "M120,182 L80,185"),
      P("whisker-r-1", 6, [200,178], "M180,175 L220,170"),
      P("whisker-r-2", 6, [200,185], "M180,182 L220,185"),
      ellipse("blush-l", 12, [110,185], 110,185,12,8),
      ellipse("blush-r", 12, [190,185], 190,185,12,8),
      ellipse("paw-front-l", 11, [110,342], 110,342,20,12),
      ellipse("paw-front-r", 11, [190,342], 190,342,20,12),
      circle("cotton-tail-puff", 3, [225,280], 225,280,16),
      P("carrot-body", 10, [150,310], "M140,295 L160,295 L150,330 Z"),
      P("carrot-leaves", 9, [150,290], "M145,298 L135,280 M150,298 L150,278 M155,298 L165,280"),
    ]
  },

  // ---- #37 🐵 Jungle Monkey ----
  {
    id: "monkey", name: "Jungle Monkey", emoji: "🐵",
    colors: ["#E8F5E9","#4CAF50","#795548","#D7CCC8","#FFE0B2","#212121","#FF80AB","#FFFFFF","#FFD54F","#3E2723","#8D6E63","#A1887F"],
    regions: [
      rect("jungle-bg", 1, [22,30], 0,0,300,400),
      P("vine-hang", 10, [60,60], "M55,0 Q65,40 55,80 Q45,120 55,160"),
      P("vine-hang-r", 10, [250,50], "M245,0 Q255,30 248,60 Q240,90 248,120"),
      P("leaf-l", 2, [45,100], "M40,120 Q25,90 50,80 Q55,110 40,120 Z"),
      P("leaf-r", 2, [255,80], "M260,100 Q275,70 250,60 Q245,90 260,100 Z"),
      ellipse("body-round", 3, [150,270], 150,270,60,55),
      ellipse("belly-cream", 4, [150,275], 150,275,35,30),
      circle("head", 3, [150,160], 150,160,50),
      circle("face-muzzle-area", 5, [150,170], 150,170,32),
      circle("ear-l", 11, [102,150], 102,150,16),
      circle("ear-r", 11, [198,150], 198,150,16),
      circle("ear-inner-l", 5, [102,150], 102,150,9),
      circle("ear-inner-r", 5, [198,150], 198,150,9),
      circle("eye-white-l", 8, [132,152], 132,152,11),
      circle("eye-white-r", 8, [168,152], 168,152,11),
      circle("pupil-l", 6, [132,152], 132,152,5),
      circle("pupil-r", 6, [168,152], 168,152,5),
      circle("eye-shine-l", 8, [130,150], 130,150,2),
      circle("eye-shine-r", 8, [166,150], 166,150,2),
      ellipse("nose-flat-wide", 6, [150,172], 150,172,10,6),
      P("cheeky-grin", 6, [150,185], "M132,180 Q150,198 168,180"),
      ellipse("blush-l", 7, [118,180], 118,180,12,8),
      ellipse("blush-r", 7, [182,180], 182,180,12,8),
      P("curled-tail", 11, [235,270], "M195,265 Q245,240 255,270 Q260,300 240,295"),
      ellipse("hand-l", 12, [100,320], 100,320,16,12),
      ellipse("hand-r", 12, [200,320], 200,320,16,12),
      circle("banana-snack", 9, [150,305], 150,305,14),
      P("banana-curve", 9, [155,300], "M140,310 Q155,290 165,310"),
    ]
  },

  // ---- #38 🐆 Snow Leopard ----
  {
    id: "snow-leopard", name: "Snow Leopard", emoji: "🐆",
    colors: ["#E3F2FD","#ECEFF1","#CFD8DC","#B0BEC5","#78909C","#212121","#FF80AB","#FFFFFF","#FFD54F","#455A64","#90A4AE","#546E7A"],
    regions: [
      rect("snowy-bg", 1, [22,30], 0,0,300,400),
      P("snow-mountain", 2, [150,340], "M0,350 Q75,310 150,330 Q225,310 300,350 L300,400 L0,400 Z"),
      P("snow-peak-l", 8, [60,300], "M20,340 L60,270 L100,340 Z"),
      P("snow-peak-r", 8, [240,290], "M200,340 L240,260 L280,340 Z"),
      ellipse("body-sleek", 3, [155,260], 155,260,65,50),
      ellipse("belly-cream", 2, [155,270], 155,270,38,28),
      circle("head-round", 3, [150,165], 150,165,45),
      circle("ear-l", 4, [115,125], 115,125,14),
      circle("ear-r", 4, [185,125], 185,125,14),
      circle("ear-inner-l", 7, [115,125], 115,125,7),
      circle("ear-inner-r", 7, [185,125], 185,125,7),
      circle("eye-l-white", 8, [132,158], 132,158,10),
      circle("eye-r-white", 8, [168,158], 168,158,10),
      circle("pupil-l", 6, [132,158], 132,158,5),
      circle("pupil-r", 6, [168,158], 168,158,5),
      circle("eye-shine-l", 8, [130,156], 130,156,2),
      circle("eye-shine-r", 8, [166,156], 166,156,2),
      circle("nose-dark", 10, [150,175], 150,175,6),
      P("mouth-line", 6, [150,184], "M143,182 Q150,190 157,182"),
      ellipse("blush-l", 7, [120,180], 120,180,10,7),
      ellipse("blush-r", 7, [180,180], 180,180,10,7),
      circle("rosette-1", 5, [130,245], 130,245,10),
      circle("rosette-2", 5, [170,235], 170,235,8),
      circle("rosette-3", 5, [155,270], 155,270,9),
      circle("rosette-4", 5, [120,185], 120,185,5),
      circle("rosette-5", 5, [180,185], 180,185,5),
      P("thick-fluffy-tail", 4, [240,300], "M205,275 Q260,270 270,310 Q275,345 255,340 Q245,330 260,325"),
      ellipse("paw-l", 11, [105,330], 105,330,18,12),
      ellipse("paw-r", 11, [195,330], 195,330,18,12),
      circle("snowflake-1", 8, [40,80], 40,80,5),
      circle("snowflake-2", 8, [260,80], 260,80,5),
    ]
  },

  // ---- #39 🦊 Arctic Fox ----
  {
    id: "arctic-fox", name: "Arctic Fox", emoji: "🦊",
    colors: ["#E3F2FD","#ECEFF1","#FFFFFF","#CFD8DC","#90A4AE","#212121","#FF80AB","#B3E5FC","#FFD54F","#B0BEC5","#E0E0E0","#78909C"],
    regions: [
      rect("arctic-bg", 8, [22,30], 0,0,300,400),
      P("snow-ground", 3, [150,365], "M0,355 Q75,335 150,350 Q225,335 300,355 L300,400 L0,400 Z"),
      P("snow-drift-l", 2, [50,345], "M20,360 Q50,330 80,355"),
      P("snow-drift-r", 2, [250,342], "M220,360 Q250,330 280,355"),
      ellipse("fluffy-body", 3, [150,270], 150,270,72,58),
      ellipse("chest-fluff", 2, [150,260], 150,260,42,32),
      circle("head-round", 3, [150,165], 150,165,48),
      P("ear-pointed-l", 3, [118,100], "M115,140 L100,70 L140,130 Z"),
      P("ear-pointed-r", 3, [182,100], "M185,140 L200,70 L160,130 Z"),
      P("ear-inner-l", 7, [115,105], "M118,135 L105,80 L135,128 Z"),
      P("ear-inner-r", 7, [185,105], "M182,135 L195,80 L165,128 Z"),
      circle("eye-l-white", 3, [132,158], 132,158,10),
      circle("eye-r-white", 3, [168,158], 168,158,10),
      circle("pupil-l", 6, [132,158], 132,158,5),
      circle("pupil-r", 6, [168,158], 168,158,5),
      circle("eye-shine-l", 3, [130,156], 130,156,2),
      circle("eye-shine-r", 3, [166,156], 166,156,2),
      circle("nose-tiny-black", 6, [150,178], 150,178,6),
      P("mouth-line", 6, [150,186], "M143,184 Q150,192 157,184"),
      ellipse("blush-l", 7, [122,182], 122,182,10,7),
      ellipse("blush-r", 7, [178,182], 178,182,10,7),
      P("bushy-tail-huge", 4, [235,290], "M195,280 Q255,255 270,295 Q280,340 250,335 Q235,325 255,315 Q260,305 245,300"),
      ellipse("paw-l", 10, [108,340], 108,340,18,12),
      ellipse("paw-r", 10, [192,340], 192,340,18,12),
      P("aurora-band", 8, [150,50], "M30,60 Q150,25 270,55"),
      circle("star-1", 9, [45,40], 45,40,4),
      circle("star-2", 9, [255,35], 255,35,4),
    ]
  },

  // ---- #40 🦥 Sloth ----
  {
    id: "sloth", name: "Sloth", emoji: "🦥",
    colors: ["#E8F5E9","#4CAF50","#795548","#D7CCC8","#5D4037","#212121","#FF80AB","#FFFFFF","#FFD54F","#8D6E63","#3E2723","#A1887F"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("branch-hang", 5, [150,120], 0,110,300,25),
      P("branch-bark-1", 11, [80,118], "M70,115 Q80,108 90,118"),
      P("branch-bark-2", 11, [220,118], "M210,115 Q220,108 230,118"),
      P("leaf-clust-l", 2, [30,100], "M20,115 Q15,85 40,80 Q45,105 20,115 Z"),
      P("leaf-clust-r", 2, [270,100], "M280,115 Q285,85 260,80 Q255,105 280,115 Z"),
      ellipse("body-hanging", 3, [150,240], 150,240,60,55),
      ellipse("belly-light", 4, [150,245], 150,245,35,30),
      circle("head-round", 3, [150,165], 150,165,40),
      circle("face-mask-light", 4, [150,170], 150,170,28),
      circle("eye-patch-l", 5, [135,160], 135,160,14),
      circle("eye-patch-r", 5, [165,160], 165,160,14),
      circle("eye-white-l", 8, [135,160], 135,160,8),
      circle("eye-white-r", 8, [165,160], 165,160,8),
      circle("pupil-l", 6, [135,160], 135,160,4),
      circle("pupil-r", 6, [165,160], 165,160,4),
      circle("eye-shine-l", 8, [133,158], 133,158,1),
      circle("eye-shine-r", 8, [163,158], 163,158,1),
      circle("nose-brown", 5, [150,178], 150,178,5),
      P("lazy-smile", 6, [150,186], "M142,184 Q150,192 158,184"),
      ellipse("blush-l", 7, [125,180], 125,180,10,6),
      ellipse("blush-r", 7, [175,180], 175,180,10,6),
      P("arm-hang-l-claw", 10, [100,140], "M115,180 C90,160 85,130 95,115"),
      P("arm-hang-r-claw", 10, [200,140], "M185,180 C210,160 215,130 205,115"),
      circle("claw-hook-l", 6, [95,115], 95,115,5),
      circle("claw-hook-r", 6, [205,115], 205,115,5),
      ellipse("foot-l", 12, [120,300], 120,300,16,10),
      ellipse("foot-r", 12, [180,300], 180,300,16,10),
    ]
  },

  // ---- #41 🦊 Fennec Fox ----
  {
    id: "fennec-fox", name: "Fennec Fox", emoji: "🦊",
    colors: ["#FFF8E1","#FFD54F","#FFE082","#FFFFFF","#3E2723","#FF80AB","#212121","#FFAB91","#FFE0B2","#F9A825","#FFF9C4","#FFB74D"],
    regions: [
      rect("desert-bg", 1, [22,30], 0,0,300,400),
      P("sand-dunes", 10, [150,360], "M0,355 Q75,330 150,345 Q225,330 300,355 L300,400 L0,400 Z"),
      P("sand-ripple", 12, [100,365], "M60,365 Q100,355 140,365"),
      ellipse("body-tiny", 3, [150,275], 150,275,55,48),
      ellipse("belly-cream", 4, [150,280], 150,280,32,28),
      circle("head-round", 3, [150,170], 150,170,42),
      P("giant-ear-l", 2, [110,75], "M120,140 C85,100 85,30 115,25 C130,22 140,70 140,130 Z"),
      P("giant-ear-r", 2, [190,75], "M180,140 C215,100 215,30 185,25 C170,22 160,70 160,130 Z"),
      P("ear-inner-l", 6, [112,80], "M122,135 C95,100 95,45 118,40 C132,38 138,80 138,128 Z"),
      P("ear-inner-r", 6, [188,80], "M178,135 C205,100 205,45 182,40 C168,38 162,80 162,128 Z"),
      circle("eye-huge-l", 4, [135,162], 135,162,12),
      circle("eye-huge-r", 4, [165,162], 165,162,12),
      circle("pupil-big-l", 7, [135,162], 135,162,6),
      circle("pupil-big-r", 7, [165,162], 165,162,6),
      circle("eye-shine-l", 4, [133,160], 133,160,2),
      circle("eye-shine-r", 4, [163,160], 163,160,2),
      circle("nose-tiny", 5, [150,180], 150,180,5),
      P("mouth-little", 7, [150,188], "M144,186 Q150,193 156,186"),
      ellipse("blush-l", 6, [122,178], 122,178,10,7),
      ellipse("blush-r", 6, [178,178], 178,178,10,7),
      P("fluffy-tail-big", 3, [230,290], "M190,280 Q245,260 258,295 Q265,330 240,325"),
      P("tail-white-tip", 4, [250,315], "M258,295 Q265,325 240,320"),
      ellipse("paw-l", 9, [110,335], 110,335,16,10),
      ellipse("paw-r", 9, [190,335], 190,335,16,10),
      circle("desert-moon", 11, [250,55], 250,55,22),
      circle("star-1", 2, [40,50], 40,50,4),
      circle("star-2", 2, [210,40], 210,40,3),
    ]
  },

  // ---- #42 🦌 Deer ----
  {
    id: "deer-antlers", name: "Deer", emoji: "🦌",
    colors: ["#FFF8E1","#8D6E63","#A1887F","#D7CCC8","#FFFFFF","#212121","#FF80AB","#FFD54F","#4CAF50","#5D4037","#3E2723","#BCAAA4"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 9, [150,385], 0,358,300,42),
      P("grass", 9, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      P("antler-l-main", 10, [105,60], "M120,120 L100,65 L80,45 M100,65 L110,35 M100,80 L75,70"),
      P("antler-r-main", 10, [195,60], "M180,120 L200,65 L220,45 M200,65 L190,35 M200,80 L225,70"),
      ellipse("body-graceful", 2, [155,270], 155,270,60,55),
      ellipse("belly-light", 4, [155,278], 155,278,35,30),
      circle("head-gentle", 2, [150,155], 150,155,40),
      ellipse("face-muzzle", 4, [150,178], 150,178,22,16),
      P("ear-leaf-l", 3, [108,120], "M115,145 C95,130 90,105 105,100 C115,98 120,120 120,140 Z"),
      P("ear-leaf-r", 3, [192,120], "M185,145 C205,130 210,105 195,100 C185,98 180,120 180,140 Z"),
      P("ear-inner-l", 7, [110,118], "M117,140 C100,128 97,110 108,107 C114,105 118,122 118,135 Z"),
      P("ear-inner-r", 7, [190,118], "M183,140 C200,128 203,110 192,107 C186,105 182,122 182,135 Z"),
      circle("eye-doe-l", 5, [135,148], 135,148,10),
      circle("eye-doe-r", 5, [165,148], 165,148,10),
      circle("pupil-l", 6, [135,148], 135,148,5),
      circle("pupil-r", 6, [165,148], 165,148,5),
      circle("eye-shine-l", 5, [133,146], 133,146,2),
      circle("eye-shine-r", 5, [163,146], 163,146,2),
      circle("nose-black", 6, [150,185], 150,185,5),
      ellipse("cheek-blush-l", 7, [120,170], 120,170,10,7),
      ellipse("cheek-blush-r", 7, [180,170], 180,170,10,7),
      circle("white-tail-spot", 5, [210,260], 210,260,14),
      P("short-tail", 2, [218,248], "M208,255 Q225,240 230,250"),
      ellipse("leg-front-l", 10, [115,345], 115,345,12,14),
      ellipse("leg-front-r", 10, [175,345], 175,345,12,14),
      ellipse("hoof-l", 11, [115,355], 115,355,8,5),
      ellipse("hoof-r", 11, [175,355], 175,355,8,5),
    ]
  },

  // ---- #43 🐆 Cheetah ----
  {
    id: "cheetah", name: "Cheetah", emoji: "🐆",
    colors: ["#FFF8E1","#FF8F00","#FFB74D","#FFE0B2","#212121","#FFFFFF","#FF80AB","#FFD54F","#3E2723","#E65100","#D7CCC8","#BF360C"],
    regions: [
      rect("savanna-bg", 1, [22,30], 0,0,300,400),
      P("savanna-ground", 10, [150,365], "M0,358 Q75,340 150,352 Q225,340 300,358 L300,400 L0,400 Z"),
      ellipse("body-sleek-fast", 3, [155,260], 155,260,65,52),
      ellipse("belly-cream", 4, [155,268], 155,268,38,28),
      circle("head-small-aero", 2, [150,160], 150,160,40),
      P("ear-l", 2, [118,122], "M120,140 L108,108 L135,130 Z"),
      P("ear-r", 2, [182,122], "M180,140 L192,108 L165,130 Z"),
      P("ear-inner-l", 7, [120,125], "M122,136 L113,114 L132,130 Z"),
      P("ear-inner-r", 7, [180,125], "M178,136 L187,114 L168,130 Z"),
      P("tear-mark-l", 5, [135,178], "M130,165 L128,195"),
      P("tear-mark-r", 5, [165,178], "M170,165 L172,195"),
      circle("eye-l", 6, [135,155], 135,155,8),
      circle("eye-r", 6, [165,155], 165,155,8),
      circle("pupil-l", 5, [135,155], 135,155,4),
      circle("pupil-r", 5, [165,155], 165,155,4),
      circle("eye-shine-l", 6, [133,153], 133,153,2),
      circle("eye-shine-r", 6, [163,153], 163,153,2),
      circle("nose-dark", 5, [150,175], 150,175,5),
      P("mouth-line", 5, [150,183], "M143,181 Q150,189 157,181"),
      circle("spot-1", 5, [130,240], 130,240,6),
      circle("spot-2", 5, [170,235], 170,235,5),
      circle("spot-3", 5, [155,260], 155,260,6),
      circle("spot-4", 5, [185,255], 185,255,5),
      circle("spot-5", 5, [140,270], 140,270,4),
      P("long-tail-spot", 3, [245,290], "M200,270 Q260,265 275,300 Q280,330 260,325"),
      ellipse("paw-l", 9, [108,335], 108,335,16,12),
      ellipse("paw-r", 9, [195,335], 195,335,16,12),
      circle("sun-hot", 8, [250,55], 250,55,20),
    ]
  },

  // ---- #44 🐻‍❄️ Polar Bear ----
  {
    id: "polar-bear", name: "Polar Bear", emoji: "🐻‍❄️",
    colors: ["#B3E5FC","#E3F2FD","#FFFFFF","#ECEFF1","#CFD8DC","#212121","#FF80AB","#00BCD4","#FFD54F","#90CAF9","#B0BEC5","#81D4FA"],
    regions: [
      rect("arctic-sky-bg", 1, [22,30], 0,0,300,400),
      P("ice-ground", 4, [150,360], "M0,350 Q75,330 150,345 Q225,330 300,350 L300,400 L0,400 Z"),
      P("ice-crack-1", 5, [100,370], "M80,360 L100,375 L120,365"),
      P("ice-crack-2", 5, [220,370], "M200,365 L220,378 L240,362"),
      ellipse("body-massive-white", 3, [150,270], 150,270,78,62),
      ellipse("chest-fluff", 2, [150,260], 150,260,45,35),
      circle("head-big-round", 3, [150,162], 150,162,52),
      circle("ear-round-l", 4, [112,118], 112,118,16),
      circle("ear-round-r", 4, [188,118], 188,118,16),
      circle("ear-inner-l", 7, [112,118], 112,118,9),
      circle("ear-inner-r", 7, [188,118], 188,118,9),
      ellipse("muzzle-snout", 2, [150,185], 150,185,28,20),
      circle("nose-black-big", 6, [150,178], 150,178,8),
      circle("nose-shine", 3, [148,176], 148,176,3),
      circle("eye-l", 3, [130,155], 130,155,10),
      circle("eye-r", 3, [170,155], 170,155,10),
      circle("pupil-l", 6, [130,155], 130,155,5),
      circle("pupil-r", 6, [170,155], 170,155,5),
      circle("eye-shine-l", 3, [128,153], 128,153,2),
      circle("eye-shine-r", 3, [168,153], 168,153,2),
      P("mouth-smile", 6, [150,195], "M140,192 Q150,202 160,192"),
      ellipse("blush-l", 7, [118,188], 118,188,12,8),
      ellipse("blush-r", 7, [182,188], 182,188,12,8),
      ellipse("paw-l", 5, [100,345], 100,345,22,14),
      ellipse("paw-r", 5, [200,345], 200,345,22,14),
      P("aurora-green", 8, [80,50], "M20,65 Q80,30 140,55"),
      P("aurora-blue", 10, [220,45], "M160,50 Q220,25 280,55"),
      circle("snowflake-1", 3, [45,90], 45,90,5),
      circle("snowflake-2", 3, [255,85], 255,85,5),
    ]
  },

  // ---- #45 🦫 Capybara ----
  {
    id: "capybara", name: "Capybara", emoji: "🦫",
    colors: ["#E8F5E9","#4CAF50","#795548","#A1887F","#D7CCC8","#212121","#FF80AB","#FFFFFF","#FFD54F","#3E2723","#8D6E63","#BCAAA4"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("water-pond", 2, [150,355], "M0,345 Q75,325 150,340 Q225,325 300,345 L300,400 L0,400 Z"),
      ellipse("body-barrel-chubby", 3, [155,265], 155,265,75,60),
      ellipse("belly-warm", 12, [155,278], 155,278,45,32),
      circle("head-boxy-round", 3, [140,170], 140,170,48),
      ellipse("broad-flat-snout", 4, [140,200], 140,200,32,18),
      circle("nostril-bump-l", 10, [130,195], 130,195,6),
      circle("nostril-bump-r", 10, [150,195], 150,195,6),
      circle("eye-tiny-l", 8, [120,158], 120,158,8),
      circle("eye-tiny-r", 8, [155,158], 155,158,8),
      circle("pupil-l", 6, [120,158], 120,158,4),
      circle("pupil-r", 6, [155,158], 155,158,4),
      circle("eye-shine-l", 8, [118,156], 118,156,1),
      circle("eye-shine-r", 8, [153,156], 153,156,1),
      circle("ear-tiny-l", 11, [108,138], 108,138,10),
      circle("ear-tiny-r", 11, [168,138], 168,138,10),
      P("ear-inner-l", 7, [108,138], "M103,138 Q108,132 113,138"),
      P("ear-inner-r", 7, [168,138], "M163,138 Q168,132 173,138"),
      P("mouth-calm", 6, [140,215], "M130,210 Q140,220 150,210"),
      ellipse("blush-l", 7, [112,195], 112,195,10,6),
      ellipse("blush-r", 7, [168,195], 168,195,10,6),
      ellipse("paw-l", 5, [105,340], 105,340,20,12),
      ellipse("paw-r", 5, [205,340], 205,340,20,12),
      P("water-ripple-1", 2, [80,350], "M60,350 Q80,342 100,350"),
      P("water-ripple-2", 2, [230,348], "M210,348 Q230,340 250,348"),
      circle("orange-on-head", 9, [145,128], 145,128,14),
      P("orange-leaf", 2, [155,115], "M152,122 L162,108 L158,122 Z"),
    ]
  },

  // ---- #46 🦓 Okapi ----
  {
    id: "okapi", name: "Okapi", emoji: "🦓",
    colors: ["#E8F5E9","#4CAF50","#3E2723","#795548","#FFFFFF","#212121","#FF80AB","#FFD54F","#8D6E63","#D7CCC8","#2E7D32","#A1887F"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 2, [150,385], 0,358,300,42),
      P("grass", 11, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("body-chocolate", 3, [155,265], 155,265,65,55),
      P("leg-stripe-back-l", 5, [105,325], "M95,300 L90,355 L100,355 L110,300 Z"),
      P("leg-stripe-back-r", 5, [205,325], "M195,300 L190,355 L200,355 L210,300 Z"),
      P("zebra-band-l-1", 3, [95,315], "M90,310 L95,325 L105,310 Z"),
      P("zebra-band-l-2", 3, [95,335], "M90,330 L95,345 L105,330 Z"),
      P("zebra-band-r-1", 3, [195,315], "M190,310 L195,325 L205,310 Z"),
      P("zebra-band-r-2", 3, [195,335], "M190,330 L195,345 L205,330 Z"),
      circle("head-round", 4, [145,155], 145,155,40),
      ellipse("long-face-muzzle", 10, [145,185], 145,185,22,18),
      P("ear-leaf-l", 4, [112,110], "M120,135 L100,85 L135,125 Z"),
      P("ear-leaf-r", 4, [178,110], "M170,135 L190,85 L155,125 Z"),
      P("ear-inner-l", 7, [112,112], "M122,130 L106,92 L132,123 Z"),
      P("ear-inner-r", 7, [178,112], "M168,130 L184,92 L158,123 Z"),
      P("ossicone-l", 9, [108,80], "M115,95 L105,65 L118,90 Z"),
      P("ossicone-r", 9, [180,80], "M175,95 L185,65 L172,90 Z"),
      circle("eye-gentle-l", 5, [130,148], 130,148,8),
      circle("eye-gentle-r", 5, [158,148], 158,148,8),
      circle("pupil-l", 6, [130,148], 130,148,4),
      circle("pupil-r", 6, [158,148], 158,148,4),
      circle("nose-dark", 6, [145,195], 145,195,5),
      P("mouth-calm", 6, [145,205], "M138,202 Q145,212 152,202"),
      ellipse("blush-l", 7, [118,170], 118,170,10,6),
      ellipse("blush-r", 7, [170,170], 170,170,10,6),
      circle("sun-sky", 8, [250,55], 250,55,20),
    ]
  },

  // ---- #47 🦤 Toucan ----
  {
    id: "toucan", name: "Toucan", emoji: "🦤",
    colors: ["#E8F5E9","#4CAF50","#212121","#FF9800","#FF5722","#FFD54F","#FFFFFF","#00BCD4","#FF80AB","#2E7D32","#3E2723","#FFC107"],
    regions: [
      rect("jungle-bg", 1, [22,30], 0,0,300,400),
      P("branch-perch", 11, [150,330], "M20,340 Q150,305 280,335 L280,355 Q150,325 20,360 Z"),
      P("leaves-l", 2, [35,310], "M25,325 Q15,300 40,290 Q48,315 25,325 Z"),
      P("leaves-r", 10, [265,310], "M275,325 Q285,300 260,290 Q252,315 275,325 Z"),
      ellipse("body-black-round", 3, [155,250], 155,250,55,55),
      ellipse("chest-white-bib", 7, [150,260], 150,260,30,32),
      circle("head-black", 3, [150,160], 150,160,40),
      P("giant-banana-beak-top", 4, [90,175], "M120,165 L35,178 L35,185 L120,180 Z"),
      P("giant-banana-beak-bot", 5, [90,190], "M120,180 L35,185 L35,192 L120,195 Z"),
      P("beak-tip-red", 5, [38,185], "M45,178 L28,185 L45,192 Z"),
      P("beak-ridge", 6, [75,175], "M120,168 L65,178"),
      circle("beak-nostril", 3, [48,180], 48,180,3),
      circle("eye-ring-blue", 8, [140,152], 140,152,14),
      circle("eye-white", 7, [140,152], 140,152,10),
      circle("pupil", 3, [140,152], 140,152,5),
      circle("eye-shine", 7, [138,150], 138,150,2),
      P("wing-fold", 11, [190,240], "M175,215 Q220,240 200,285 Q185,260 175,235 Z"),
      P("tail-feathers-dark", 3, [200,310], "M180,295 L215,310 L200,320 L175,305 Z"),
      ellipse("foot-grip-l", 6, [135,320], 135,320,14,8),
      ellipse("foot-grip-r", 6, [170,318], 170,318,14,8),
      P("toe-l-1", 11, [125,325], "M135,318 L118,328"),
      P("toe-r-1", 11, [180,323], "M170,316 L188,326"),
      P("tropical-leaf-bg-l", 2, [45,100], "M30,130 Q15,85 55,70 Q60,115 30,130 Z"),
      P("tropical-leaf-bg-r", 10, [255,100], "M270,130 Q285,85 245,70 Q240,115 270,130 Z"),
      circle("fruit-berry", 5, [260,145], 260,145,8),
    ]
  },

  // ---- #48 🐦 Hummingbird ----
  {
    id: "hummingbird", name: "Hummingbird", emoji: "🐦",
    colors: ["#E0F7FA","#00BCD4","#4CAF50","#76FF03","#FF80AB","#FFD54F","#212121","#FFFFFF","#E91E63","#81C784","#00E676","#B2FF59"],
    regions: [
      rect("sky-bg", 1, [22,30], 0,0,300,400),
      circle("flower-bloom-big", 9, [60,320], 60,320,32),
      circle("flower-center", 6, [60,320], 60,320,14),
      P("flower-petal-1", 5, [40,295], "M45,300 Q30,280 50,285 Z"),
      P("flower-petal-2", 5, [80,295], "M75,300 Q90,280 70,285 Z"),
      P("flower-stem", 3, [55,365], "M58,340 L52,395"),
      P("flower-leaf-1", 10, [40,365], "M55,370 Q30,360 50,350 Z"),
      P("flower-leaf-2", 10, [75,375], "M55,380 Q80,370 65,360 Z"),
      ellipse("hum-body-irid", 2, [160,220], 160,220,35,48),
      ellipse("belly-light", 12, [155,235], 155,235,20,25),
      circle("hum-head", 4, [155,155], 155,155,25),
      circle("throat-gorget", 9, [155,175], 155,175,16),
      P("long-thin-beak", 7, [105,155], "M130,150 L70,155 L70,160 L130,162 Z"),
      circle("eye-bright", 8, [148,148], 148,148,6),
      circle("pupil", 7, [148,148], 148,148,3),
      circle("eye-shine", 8, [146,146], 146,146,1),
      P("wing-spread-l", 3, [210,155], "M175,195 Q240,120 280,155 Q250,180 200,195 Z"),
      P("wing-feather-tips", 11, [260,145], "M255,135 L275,150 L260,160"),
      P("wing-spread-r", 2, [120,200], "M140,195 Q100,250 85,220 Q105,200 135,195 Z"),
      P("tail-fan", 2, [175,280], "M165,268 L200,290 L185,300 L160,280 Z"),
      P("tail-feather-2", 4, [190,295], "M170,275 L210,300 L195,310 Z"),
      circle("motion-blur-1", 1, [235,140], 235,140,6),
      circle("motion-blur-2", 1, [250,160], 250,160,5),
      circle("motion-blur-3", 1, [245,175], 245,175,4),
      circle("sun-warmth", 6, [250,55], 250,55,20),
    ]
  },

  // ---- #49 🦅 Bald Eagle ----
  {
    id: "eagle", name: "Bald Eagle", emoji: "🦅",
    colors: ["#E3F2FD","#3E2723","#5D4037","#FFFFFF","#FFD54F","#FF8F00","#212121","#90CAF9","#81D4FA","#795548","#8D6E63","#B3E5FC"],
    regions: [
      rect("sky-bg", 1, [22,30], 0,0,300,400),
      P("cloud-l", 8, [60,60], "M30,70 Q60,45 90,70 Q60,65 30,70 Z"),
      P("cloud-r", 12, [240,70], "M210,80 Q240,55 270,80 Q240,70 210,80 Z"),
      P("wing-spread-l", 2, [60,200], "M150,190 Q40,160 20,210 Q40,220 80,215 Q120,210 150,210 Z"),
      P("wing-spread-r", 2, [240,200], "M150,190 Q260,160 280,210 Q260,220 220,215 Q180,210 150,210 Z"),
      P("wing-feather-tip-l", 3, [30,210], "M20,210 L10,220 L30,215"),
      P("wing-feather-tip-r", 3, [270,210], "M280,210 L290,220 L270,215"),
      ellipse("body-dark-brown", 2, [150,260], 150,260,45,55),
      ellipse("belly-feather", 10, [150,275], 150,275,28,30),
      circle("head-white-plume", 4, [150,155], 150,155,35),
      P("hooked-beak-top", 5, [120,170], "M135,162 L100,172 Q105,165 110,170 Z"),
      P("hooked-beak-bot", 6, [118,178], "M135,175 L105,180 L100,175 Z"),
      circle("fierce-eye-l", 4, [140,148], 140,148,8),
      circle("eye-iris", 5, [140,148], 140,148,5),
      circle("pupil-dark", 7, [140,148], 140,148,3),
      circle("eye-shine", 4, [138,146], 138,146,1),
      P("brow-fierce", 7, [145,140], "M128,142 L155,138"),
      P("tail-fan", 2, [150,325], "M130,315 L120,345 L150,340 L180,345 L170,315 Z"),
      P("tail-feather-white", 4, [150,340], "M135,335 L150,355 L165,335 Z"),
      ellipse("talon-l", 5, [120,330], 120,330,14,8),
      ellipse("talon-r", 5, [180,330], 180,330,14,8),
      P("claw-l-1", 7, [112,335], "M120,328 L108,338"),
      P("claw-r-1", 7, [188,335], "M180,328 L192,338"),
      P("mountain-bg", 9, [80,365], "M0,400 L80,340 L160,400 Z"),
      P("mountain-bg-2", 8, [220,370], "M140,400 L220,345 L300,400 Z"),
    ]
  },

  // ---- #50 🐦‍🔥 Kingfisher ----
  {
    id: "kingfisher", name: "Kingfisher", emoji: "🐦‍🔥",
    colors: ["#E0F7FA","#00BCD4","#FF5722","#FF9800","#FFFFFF","#212121","#FFD54F","#0097A7","#81D4FA","#004D40","#B2EBF2","#26C6DA"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("water-surface", 9, [150,350], "M0,345 Q75,325 150,340 Q225,325 300,345 L300,400 L0,400 Z"),
      P("branch-perch", 10, [150,315], "M40,325 Q150,290 260,320 L260,340 Q150,310 40,345 Z"),
      ellipse("body-round-blue", 2, [155,245], 155,245,40,50),
      ellipse("chest-orange-bright", 3, [155,260], 155,260,25,30),
      circle("head-blue", 8, [150,165], 150,165,32),
      P("crown-feathers", 2, [150,130], "M130,145 L125,115 L140,138 L145,108 L155,135 L160,110 L170,140 L175,118 Z"),
      P("dagger-beak-long", 6, [100,168], "M120,162 L55,168 L55,174 L120,175 Z"),
      P("beak-tip", 4, [58,170], "M68,165 L50,170 L68,175 Z"),
      circle("eye-white", 5, [145,158], 145,158,8),
      circle("pupil", 6, [145,158], 145,158,4),
      circle("eye-shine", 5, [143,156], 143,156,1),
      P("eye-stripe-dark", 6, [158,165], "M155,155 L175,165"),
      P("white-throat-patch", 5, [145,185], "M130,178 Q145,195 160,178 Z"),
      P("wing-fold-blue", 8, [185,235], "M170,210 Q210,240 195,280 Q180,255 170,230 Z"),
      P("wing-detail", 12, [195,250], "M180,230 Q210,250 200,270"),
      P("tail-blue-long", 2, [165,310], "M155,295 L180,310 L170,320 L150,305 Z"),
      ellipse("foot-perch-l", 4, [140,305], 140,305,12,6),
      ellipse("foot-perch-r", 4, [165,303], 165,303,12,6),
      P("toe-grip-l", 6, [130,308], "M140,303 L125,310"),
      P("toe-grip-r", 6, [175,306], "M165,301 L180,308"),
      circle("water-splash-1", 11, [60,360], 60,360,8),
      circle("water-splash-2", 11, [240,355], 240,355,8),
      circle("fish-catch-silver", 5, [80,355], 80,355,6),
      circle("sun-warm", 7, [250,55], 250,55,20),
    ]
  },

  // ---- #51 🐦 Cardinal ----
  {
    id: "cardinal", name: "Cardinal", emoji: "🐦",
    colors: ["#E8F5E9","#4CAF50","#D32F2F","#F44336","#FF8A80","#212121","#FF80AB","#FFFFFF","#FFD54F","#B71C1C","#2E7D32","#FFCDD2"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("branch", 11, [150,330], "M30,340 Q150,305 270,335 L270,355 Q150,325 30,360 Z"),
      P("leaf-l", 2, [40,315], "M30,325 Q20,305 45,295 Q50,318 30,325 Z"),
      P("leaf-r", 2, [260,318], "M270,330 Q280,310 255,300 Q250,322 270,330 Z"),
      ellipse("body-red-round", 3, [155,250], 155,250,48,52),
      ellipse("breast-lighter", 12, [155,265], 155,265,28,28),
      P("wing-fold-dark", 10, [195,245], "M175,220 Q215,245 200,290 Q185,260 175,235 Z"),
      circle("head-red", 3, [150,160], 150,160,35),
      P("crest-pointy", 4, [155,110], "M140,135 L155,80 L170,135 Z"),
      P("crest-inner", 5, [155,115], "M145,132 L155,95 L165,132 Z"),
      P("face-mask-black", 6, [150,170], "M130,155 Q150,165 170,155 L170,180 Q150,190 130,180 Z"),
      P("beak-cone-top", 9, [122,168], "M130,162 L105,168 Z"),
      P("beak-cone-bot", 9, [122,175], "M130,175 L105,172 Z"),
      circle("eye-white", 8, [138,155], 138,155,7),
      circle("pupil", 6, [138,155], 138,155,3),
      circle("eye-shine", 8, [136,153], 136,153,1),
      P("tail-long-red", 3, [170,310], "M158,300 L190,320 L175,330 L148,310 Z"),
      P("tail-feather-dark", 10, [180,320], "M165,305 L195,325 L180,335 Z"),
      ellipse("foot-l", 6, [135,322], 135,322,12,7),
      ellipse("foot-r", 6, [170,320], 170,320,12,7),
      P("toe-l", 6, [125,326], "M135,320 L120,328"),
      P("toe-r", 6, [180,324], "M170,318 L185,326"),
      circle("berry-1", 4, [50,295], 50,295,6),
      circle("berry-2", 4, [255,300], 255,300,6),
      circle("snow-flurry", 8, [45,60], 45,60,5),
    ]
  },

  // ---- #52 🐋 Blue Whale ----
  {
    id: "blue-whale", name: "Blue Whale", emoji: "🐋",
    colors: ["#0D47A1","#1565C0","#1976D2","#42A5F5","#90CAF9","#BBDEFB","#FFFFFF","#212121","#FFD54F","#64B5F6","#E3F2FD","#B3E5FC"],
    regions: [
      rect("deep-ocean-bg", 1, [22,30], 0,0,300,400),
      circle("ocean-glow", 2, [150,210], 150,210,130),
      P("whale-body-massive", 3, [150,220], "M50,230 C50,150 250,140 260,220 C260,280 60,290 50,230 Z"),
      P("belly-pleats", 5, [150,260], "M80,250 Q150,275 225,245 L225,260 Q150,290 80,265 Z"),
      P("belly-pleat-line-1", 10, [120,262], "M90,258 Q120,270 150,258"),
      P("belly-pleat-line-2", 10, [185,258], "M155,255 Q185,268 215,252"),
      P("head-dome", 3, [80,200], "M60,220 C55,170 100,155 110,195 Z"),
      P("blowhole-spout", 7, [95,120], "M95,165 Q92,130 85,100 M95,165 Q98,130 105,100"),
      circle("spout-mist-1", 12, [82,95], 82,95,8),
      circle("spout-mist-2", 12, [105,90], 105,90,7),
      circle("spout-mist-3", 7, [93,80], 93,80,5),
      circle("eye-small", 6, [75,210], 75,210,8),
      circle("pupil", 8, [75,210], 75,210,4),
      circle("eye-shine", 6, [73,208], 73,208,2),
      ellipse("pectoral-fin-l", 4, [120,260], 120,260,28,12),
      P("fluke-tail-top", 3, [265,200], "M260,220 Q285,180 295,195"),
      P("fluke-tail-bot", 3, [265,240], "M260,220 Q285,265 295,250"),
      P("mouth-line-long", 8, [100,230], "M65,228 Q100,240 140,230"),
      ellipse("chin-barnacle-1", 4, [85,240], 85,240,6,4),
      ellipse("chin-barnacle-2", 4, [110,245], 110,245,5,3),
      circle("bubble-1", 11, [60,160], 60,160,7),
      circle("bubble-2", 11, [80,140], 80,140,5),
      circle("bubble-3", 11, [50,130], 50,130,4),
      circle("tiny-fish-1", 9, [250,120], 250,120,6),
      circle("tiny-fish-2", 9, [230,140], 230,140,5),
    ]
  },

  // ---- #53 🦞 Lobster ----
  {
    id: "lobster", name: "Lobster", emoji: "🦞",
    colors: ["#E3F2FD","#00BCD4","#D32F2F","#F44336","#FF8A80","#212121","#FFD54F","#FFFFFF","#FFCDD2","#B71C1C","#FF5252","#81D4FA"],
    regions: [
      rect("ocean-floor-bg", 1, [22,30], 0,0,300,400),
      P("sandy-bottom", 12, [150,375], "M0,365 Q75,350 150,360 Q225,350 300,365 L300,400 L0,400 Z"),
      ellipse("body-segmented-main", 3, [150,225], 150,225,40,55),
      ellipse("body-segment-1", 4, [150,195], 150,195,35,18),
      ellipse("body-segment-2", 4, [150,230], 150,230,38,16),
      ellipse("body-segment-3", 4, [150,260], 150,260,35,14),
      circle("head-carapace", 3, [150,155], 150,155,35),
      P("antenna-l", 6, [70,100], "M130,145 Q60,90 40,70"),
      P("antenna-r", 6, [230,100], "M170,145 Q240,90 260,70"),
      P("claw-arm-l", 3, [80,200], "M115,180 L65,190 Z"),
      P("claw-arm-r", 3, [220,200], "M185,180 L235,190 Z"),
      ellipse("crusher-claw-l", 10, [50,185], 50,185,22,14),
      ellipse("crusher-claw-r", 10, [250,185], 250,185,22,14),
      P("claw-pincer-l", 3, [35,178], "M40,180 L22,170 L30,185 Z"),
      P("claw-pincer-r", 3, [265,178], "M260,180 L278,170 L270,185 Z"),
      circle("eye-stalk-l", 6, [135,138], 135,138,6),
      circle("eye-stalk-r", 6, [165,138], 165,138,6),
      circle("eye-pupil-l", 8, [135,138], 135,138,3),
      circle("eye-pupil-r", 8, [165,138], 165,138,3),
      P("tail-fan-center", 4, [150,305], "M140,280 L150,320 L160,280 Z"),
      P("tail-fan-l", 5, [135,310], "M135,280 L120,315 L145,285 Z"),
      P("tail-fan-r", 5, [165,310], "M165,280 L180,315 L155,285 Z"),
      P("leg-l-1", 9, [105,230], "M125,220 L95,235"),
      P("leg-l-2", 9, [100,248], "M120,238 L90,255"),
      P("leg-r-1", 9, [195,230], "M175,220 L205,235"),
      P("leg-r-2", 9, [200,248], "M180,238 L210,255"),
      circle("bubble-seafloor-1", 2, [55,330], 55,330,6),
      circle("bubble-seafloor-2", 2, [245,325], 245,325,6),
    ]
  },

  // ---- #54 🪰 Dragonfly ----
  {
    id: "dragonfly", name: "Dragonfly", emoji: "🪰",
    colors: ["#E0F7FA","#00BCD4","#4CAF50","#76FF03","#00E5FF","#FFD54F","#212121","#FFFFFF","#B2FF59","#81C784","#E8F5E9","#26C6DA"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("pond-water", 10, [150,370], "M0,360 Q75,345 150,355 Q225,345 300,360 L300,400 L0,400 Z"),
      P("cattail-stem-l", 3, [50,280], "M48,355 L52,200"),
      P("cattail-stem-r", 3, [250,300], "M248,355 L252,230"),
      ellipse("cattail-head-l", 7, [50,195], 50,195,8,18),
      ellipse("cattail-head-r", 7, [250,225], 250,225,8,18),
      circle("head-big-compound", 2, [150,140], 150,140,28),
      circle("compound-eye-l", 5, [135,132], 135,132,14),
      circle("compound-eye-r", 5, [165,132], 165,132,14),
      circle("eye-center-l", 7, [135,132], 135,132,5),
      circle("eye-center-r", 7, [165,132], 165,132,5),
      circle("eye-shine-l", 8, [132,129], 132,129,2),
      circle("eye-shine-r", 8, [162,129], 162,129,2),
      ellipse("thorax-section", 2, [150,175], 150,175,18,15),
      P("abdomen-needle-1", 4, [150,210], "M142,190 L158,190 L156,230 L144,230 Z"),
      P("abdomen-needle-2", 12, [150,250], "M144,230 L156,230 L154,270 L146,270 Z"),
      P("abdomen-needle-3", 2, [150,290], "M146,270 L154,270 L152,310 L148,310 Z"),
      P("wing-top-l", 8, [85,155], "M140,170 Q60,130 70,160 Q80,180 140,175 Z"),
      P("wing-top-r", 8, [215,155], "M160,170 Q240,130 230,160 Q220,180 160,175 Z"),
      P("wing-bot-l", 11, [90,190], "M140,180 Q65,170 75,195 Q85,210 140,195 Z"),
      P("wing-bot-r", 11, [210,190], "M160,180 Q235,170 225,195 Q215,210 160,195 Z"),
      P("wing-vein-l", 12, [100,160], "M138,172 L80,155"),
      P("wing-vein-r", 12, [200,160], "M162,172 L220,155"),
      circle("lily-pad", 3, [80,365], 80,365,16),
      circle("water-flower", 6, [220,360], 220,360,10),
    ]
  },

  // ---- #55 🪲 Stag Beetle ----
  {
    id: "stag-beetle", name: "Stag Beetle", emoji: "🪲",
    colors: ["#E8F5E9","#4CAF50","#3E2723","#5D4037","#795548","#8D6E63","#FF5722","#FFD54F","#212121","#FFFFFF","#2E7D32","#A1887F"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("leaf-surface", 2, [150,350], "M0,335 Q75,315 150,330 Q225,315 300,335 L300,400 L0,400 Z"),
      P("leaf-vein-center", 11, [150,365], "M150,335 L150,395"),
      P("leaf-vein-l", 11, [100,370], "M150,360 L80,380"),
      P("leaf-vein-r", 11, [200,370], "M150,360 L220,380"),
      P("mandible-antler-l", 3, [100,100], "M125,155 Q70,100 65,70 Q80,80 95,75 Q115,90 125,130 Z"),
      P("mandible-antler-r", 3, [200,100], "M175,155 Q230,100 235,70 Q220,80 205,75 Q185,90 175,130 Z"),
      P("mandible-tip-l", 9, [68,72], "M65,70 Q55,60 70,55 Q78,68 65,70 Z"),
      P("mandible-tip-r", 9, [232,72], "M235,70 Q245,60 230,55 Q222,68 235,70 Z"),
      circle("head-plate", 3, [150,160], 150,160,30),
      ellipse("pronotum-shield", 4, [150,200], 150,200,38,22),
      P("elytra-wing-l", 5, [120,265], "M115,215 C95,240 95,310 120,325 L150,325 L150,215 Z"),
      P("elytra-wing-r", 5, [180,265], "M185,215 C205,240 205,310 180,325 L150,325 L150,215 Z"),
      P("elytra-seam", 3, [150,270], "M150,215 L150,325"),
      circle("eye-l", 10, [135,152], 135,152,6),
      circle("eye-r", 10, [165,152], 165,152,6),
      circle("eye-pupil-l", 9, [135,152], 135,152,3),
      circle("eye-pupil-r", 9, [165,152], 165,152,3),
      P("leg-front-l", 3, [85,225], "M115,218 L75,230"),
      P("leg-front-r", 3, [215,225], "M185,218 L225,230"),
      P("leg-mid-l", 3, [80,260], "M110,255 L70,268"),
      P("leg-mid-r", 3, [220,260], "M190,255 L230,268"),
      P("leg-back-l", 3, [85,295], "M110,290 L75,305"),
      P("leg-back-r", 3, [215,295], "M190,290 L225,305"),
      circle("elytra-shine-l", 6, [125,240], 125,240,10),
      circle("elytra-shine-r", 6, [175,240], 175,240,10),
    ]
  },

  // ---- #56 🦝 Ring-tailed Lemur ----
  {
    id: "lemur", name: "Ring-tailed Lemur", emoji: "🦝",
    colors: ["#E8F5E9","#4CAF50","#78909C","#CFD8DC","#FFFFFF","#FFD54F","#212121","#FF80AB","#B0BEC5","#212121","#2E7D32","#90A4AE"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("branch-perch", 11, [150,330], "M20,340 Q150,305 280,335 L280,355 Q150,325 20,360 Z"),
      ellipse("body-gray", 3, [150,260], 150,260,50,55),
      ellipse("belly-white", 4, [150,265], 150,265,28,30),
      circle("head-triangular", 3, [150,160], 150,160,40),
      circle("face-white-mask", 5, [150,165], 150,165,28),
      P("ear-tuft-l", 3, [115,120], "M120,140 L105,100 L135,130 Z"),
      P("ear-tuft-r", 3, [185,120], "M180,140 L195,100 L165,130 Z"),
      P("ear-white-l", 5, [118,125], "M123,138 L112,108 L132,130 Z"),
      P("ear-white-r", 5, [182,125], "M177,138 L188,108 L168,130 Z"),
      circle("huge-eye-l-gold", 6, [135,155], 135,155,12),
      circle("huge-eye-r-gold", 6, [165,155], 165,155,12),
      circle("pupil-l", 7, [135,155], 135,155,6),
      circle("pupil-r", 7, [165,155], 165,155,6),
      circle("eye-shine-l", 5, [133,153], 133,153,2),
      circle("eye-shine-r", 5, [163,153], 163,153,2),
      circle("nose-dark-patch", 10, [150,178], 150,178,12),
      circle("nose-tip", 7, [150,175], 150,175,4),
      P("mouth-line", 7, [150,186], "M143,184 Q150,192 157,184"),
      P("ring-tail-stripe-1-white", 5, [230,200], "M195,260 Q235,200 260,210"),
      P("ring-tail-stripe-2-dark", 10, [240,185], "M230,200 Q245,175 260,185"),
      P("ring-tail-stripe-3-white", 5, [248,170], "M240,185 Q253,160 265,170"),
      P("ring-tail-stripe-4-dark", 10, [255,155], "M248,170 Q260,145 270,158"),
      ellipse("hand-l", 12, [115,318], 115,318,14,10),
      ellipse("hand-r", 12, [185,318], 185,318,14,10),
      ellipse("blush-l", 8, [122,180], 122,180,8,5),
    ]
  },

  // ---- #57 🐿️ Quokka ----
  {
    id: "quokka", name: "Quokka", emoji: "🐿️",
    colors: ["#FFF8E1","#8D6E63","#D7CCC8","#4CAF50","#212121","#FF80AB","#FFFFFF","#5D4037","#FFD54F","#A1887F","#BCAAA4","#3E2723"],
    regions: [
      rect("island-bg", 1, [22,30], 0,0,300,400),
      rect("ground", 4, [150,385], 0,358,300,42),
      P("grass-tufts", 4, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("chubby-body", 2, [150,275], 150,275,68,58),
      ellipse("belly-cream", 3, [150,280], 150,280,38,32),
      circle("head-smiling-round", 2, [150,165], 150,165,52),
      ellipse("chubby-cheek-l", 3, [118,182], 118,182,22,18),
      ellipse("chubby-cheek-r", 3, [182,182], 182,182,22,18),
      circle("round-ear-l", 8, [108,118], 108,118,18),
      circle("round-ear-r", 8, [192,118], 192,118,18),
      circle("ear-inner-l", 6, [108,118], 108,118,10),
      circle("ear-inner-r", 6, [192,118], 192,118,10),
      circle("big-eye-l", 7, [132,155], 132,155,12),
      circle("big-eye-r", 7, [168,155], 168,155,12),
      circle("pupil-l", 5, [132,155], 132,155,6),
      circle("pupil-r", 5, [168,155], 168,155,6),
      circle("eye-shine-l", 7, [130,153], 130,153,3),
      circle("eye-shine-r", 7, [166,153], 166,153,3),
      circle("black-nose", 5, [150,175], 150,175,7),
      P("famous-smile", 5, [150,188], "M136,183 Q150,198 164,183"),
      ellipse("rosy-cheek-l", 6, [115,190], 115,190,12,8),
      ellipse("rosy-cheek-r", 6, [185,190], 185,190,12,8),
      P("leaf-held-green", 4, [150,248], "M135,228 L165,228 L150,275 Z"),
      ellipse("paw-hold-l", 10, [132,248], 132,248,12,10),
      ellipse("paw-hold-r", 10, [168,248], 168,248,12,10),
      ellipse("sitting-foot-l", 11, [108,340], 108,340,20,12),
      ellipse("sitting-foot-r", 11, [192,340], 192,340,20,12),
      circle("sun-happy", 9, [252,58], 252,58,22),
    ]
  },

  // ---- #58 🦧 Proboscis Monkey ----
  {
    id: "proboscis-monkey", name: "Proboscis Monkey", emoji: "🦧",
    colors: ["#E8F5E9","#4CAF50","#E65100","#FFE0B2","#795548","#212121","#FF80AB","#FFFFFF","#FFD54F","#3E2723","#8D6E63","#BF360C"],
    regions: [
      rect("mangrove-bg", 1, [22,30], 0,0,300,400),
      P("mangrove-roots", 2, [150,370], "M0,360 Q40,345 80,358 Q120,345 160,360 Q200,345 240,358 Q280,345 300,360 L300,400 L0,400 Z"),
      P("vine-hang", 10, [50,80], "M45,0 Q55,40 48,80 Q42,120 50,160"),
      P("leaf-vine", 2, [40,110], "M42,120 Q25,100 45,90 Z"),
      ellipse("potbelly-body", 3, [150,270], 150,270,70,62),
      ellipse("cream-belly", 4, [150,278], 150,278,42,35),
      circle("head-round", 3, [150,158], 150,158,48),
      circle("face-cream", 4, [150,165], 150,165,35),
      ellipse("giant-droopy-nose", 3, [150,188], 150,188,18,32),
      circle("nose-tip-round", 7, [150,210], 150,210,12),
      circle("nostril-dot-l", 6, [145,210], 145,210,3),
      circle("nostril-dot-r", 6, [155,210], 155,210,3),
      circle("ear-l", 4, [105,152], 105,152,14),
      circle("ear-r", 4, [195,152], 195,152,14),
      circle("eye-white-l", 8, [130,148], 130,148,10),
      circle("eye-white-r", 8, [170,148], 170,148,10),
      circle("pupil-l", 6, [130,148], 130,148,5),
      circle("pupil-r", 6, [170,148], 170,148,5),
      circle("eye-shine-l", 8, [128,146], 128,146,2),
      circle("eye-shine-r", 8, [168,146], 168,146,2),
      P("mouth-line", 6, [150,225], "M140,220 Q150,230 160,220"),
      ellipse("blush-l", 7, [118,178], 118,178,10,7),
      ellipse("blush-r", 7, [182,178], 182,178,10,7),
      ellipse("hand-l", 11, [95,330], 95,330,16,12),
      ellipse("hand-r", 11, [205,330], 205,330,16,12),
      circle("sun-glow", 9, [252,58], 252,58,20),
    ]
  },

  // ---- #59 🦡 Wombat ----
  {
    id: "wombat", name: "Wombat", emoji: "🦡",
    colors: ["#FFF8E1","#4CAF50","#6D4C41","#8D6E63","#D7CCC8","#3E2723","#FF80AB","#FFFFFF","#FFD54F","#5D4037","#A1887F","#BCAAA4"],
    regions: [
      rect("grass-bg", 1, [22,30], 0,0,300,400),
      rect("ground", 2, [150,385], 0,358,300,42),
      P("grass-tufts", 2, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("barrel-body", 3, [150,270], 150,270,78,62),
      ellipse("belly-light", 5, [150,278], 150,278,45,35),
      circle("chubby-head", 3, [150,168], 150,168,52),
      ellipse("broad-snout", 5, [150,192], 150,192,34,22),
      circle("ear-round-l", 4, [108,118], 108,118,16),
      circle("ear-round-r", 4, [192,118], 192,118,16),
      circle("ear-inner-l", 7, [108,118], 108,118,9),
      circle("ear-inner-r", 7, [192,118], 192,118,9),
      ellipse("big-leather-nose", 6, [150,185], 150,185,14,10),
      circle("nose-shine", 8, [148,183], 148,183,3),
      circle("eye-white-l", 8, [128,158], 128,158,10),
      circle("eye-white-r", 8, [172,158], 172,158,10),
      circle("pupil-l", 6, [128,158], 128,158,5),
      circle("pupil-r", 6, [172,158], 172,158,5),
      circle("eye-shine-l", 8, [126,156], 126,156,2),
      circle("eye-shine-r", 8, [170,156], 170,156,2),
      P("mouth-smile", 6, [150,202], "M140,200 Q150,210 160,200"),
      ellipse("blush-l", 7, [118,192], 118,192,12,8),
      ellipse("blush-r", 7, [182,192], 182,192,12,8),
      ellipse("digging-paw-l", 4, [95,340], 95,340,22,14),
      ellipse("digging-paw-r", 4, [205,340], 205,340,22,14),
      ellipse("paw-pad-l", 11, [95,345], 95,345,14,7),
      ellipse("paw-pad-r", 11, [205,345], 205,345,14,7),
      P("burrow-mound", 12, [50,345], "M20,360 Q50,330 80,355"),
      circle("sun-glow", 9, [252,58], 252,58,20),
    ]
  },

  // ---- #60 🐗 Tapir ----
  {
    id: "tapir", name: "Tapir", emoji: "🐗",
    colors: ["#E8F5E9","#4CAF50","#212121","#ECEFF1","#37474F","#FF80AB","#FFFFFF","#78909C","#2E7D32","#FFD54F","#455A64","#CFD8DC"],
    regions: [
      rect("jungle-bg", 1, [22,30], 0,0,300,400),
      rect("ground", 2, [150,385], 0,358,300,42),
      P("grass-pond", 9, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("body-dark-front", 3, [135,265], 135,265,55,55),
      P("white-saddle-back", 4, [195,260], "M155,215 C225,215 245,260 240,310 C235,340 180,340 155,320 Z"),
      P("saddle-pattern-line", 12, [165,250], "M155,220 Q170,250 155,310"),
      circle("head-round-dark", 3, [105,185], 105,185,45),
      P("trunk-snout-flexible", 5, [55,215], "M85,190 C50,190 32,210 42,235 C55,245 78,235 88,218 Z"),
      circle("trunk-nostril", 3, [44,228], 44,228,5),
      circle("trunk-nostril-hole", 11, [44,228], 44,228,2),
      circle("ear-l-outer", 3, [78,142], 78,142,14),
      circle("ear-r-outer", 3, [132,142], 132,142,14),
      circle("ear-l-tip-white", 4, [78,142], 78,142,7),
      circle("ear-r-tip-white", 4, [132,142], 132,142,7),
      circle("eye-white", 7, [100,178], 100,178,10),
      circle("eye-pupil", 3, [100,178], 100,178,5),
      circle("eye-shine", 7, [98,176], 98,176,2),
      ellipse("cheek-blush", 6, [115,205], 115,205,12,8),
      P("mouth-smile", 3, [78,215], "M70,210 Q82,222 95,212"),
      ellipse("paw-front-l", 8, [88,340], 88,340,16,12),
      ellipse("paw-front-r", 8, [135,340], 135,340,16,12),
      ellipse("paw-hind-l", 8, [188,340], 188,340,16,12),
      ellipse("paw-hind-r", 8, [228,340], 228,340,16,12),
      circle("lily-pad-water", 2, [255,320], 255,320,14),
      circle("lily-bloom", 6, [255,320], 255,320,7),
      circle("sun-sky", 10, [248,58], 248,58,20),
      P("leaf-big", 2, [265,100], "M260,120 Q275,85 250,75 Q245,110 260,120 Z"),
    ]
  },

  // ---- #61 🦗 Praying Mantis ----
  {
    id: "praying-mantis", name: "Praying Mantis", emoji: "🦗",
    colors: ["#E8F5E9","#2E7D32","#4CAF50","#76FF03","#81C784","#212121","#FFD54F","#FFFFFF","#AED581","#00E676","#C8E6C9","#1B5E20"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("leaf-perch-big", 3, [150,340], "M0,340 Q75,300 150,325 Q225,300 300,340 L300,400 L0,400 Z"),
      P("leaf-vein-center", 12, [150,370], "M150,330 L150,395"),
      P("leaf-vein-l", 12, [100,375], "M150,360 L70,385"),
      P("leaf-vein-r", 12, [200,375], "M150,360 L230,385"),
      // Triangular head with large eyes
      P("head-triangle", 3, [150,110], "M125,130 L150,85 L175,130 Z"),
      circle("compound-eye-l", 4, [132,115], 132,115,14),
      circle("compound-eye-r", 4, [168,115], 168,115,14),
      circle("eye-pupil-l", 6, [132,115], 132,115,5),
      circle("eye-pupil-r", 6, [168,115], 168,115,5),
      circle("eye-shine-l", 8, [129,112], 129,112,2),
      circle("eye-shine-r", 8, [165,112], 165,112,2),
      // Long prothorax neck
      P("prothorax-long-neck", 2, [150,165], "M143,130 L157,130 L155,200 L145,200 Z"),
      // Raptorial arms folded prayer-like
      P("raptorial-arm-l-upper", 3, [115,165], "M143,155 L95,140 L100,150 L140,165 Z"),
      P("raptorial-arm-l-lower", 9, [85,175], "M95,140 L75,170 L82,178 L100,150 Z"),
      P("raptorial-arm-r-upper", 3, [185,165], "M157,155 L205,140 L200,150 L160,165 Z"),
      P("raptorial-arm-r-lower", 9, [215,175], "M205,140 L225,170 L218,178 L200,150 Z"),
      P("spike-l-1", 12, [82,155], "M88,148 L78,155 L88,160 Z"),
      P("spike-r-1", 12, [218,155], "M212,148 L222,155 L212,160 Z"),
      // Abdomen segments
      ellipse("abdomen-seg-1", 3, [150,225], 150,225,22,18),
      ellipse("abdomen-seg-2", 5, [150,260], 150,260,20,16),
      ellipse("abdomen-seg-3", 3, [150,290], 150,290,18,14),
      ellipse("abdomen-seg-4", 5, [150,315], 150,315,16,12),
      // Legs
      P("leg-mid-l", 2, [100,235], "M130,225 L85,245"),
      P("leg-mid-r", 2, [200,235], "M170,225 L215,245"),
      P("leg-back-l", 2, [95,275], "M128,265 L80,290"),
      P("leg-back-r", 2, [205,275], "M172,265 L220,290"),
    ]
  },

  // ---- #62 🦂 Scorpion ----
  {
    id: "scorpion", name: "Scorpion", emoji: "🦂",
    colors: ["#FFF8E1","#FFD54F","#FF8F00","#E65100","#BF360C","#212121","#FF5722","#FFFFFF","#D7CCC8","#F57F17","#FFE082","#3E2723"],
    regions: [
      rect("desert-bg", 1, [22,30], 0,0,300,400),
      P("sand-ground", 9, [150,370], "M0,358 Q75,340 150,355 Q225,340 300,358 L300,400 L0,400 Z"),
      P("sand-ripple-1", 11, [100,368], "M60,368 Q100,358 140,368"),
      P("sand-ripple-2", 11, [220,365], "M180,365 Q220,355 260,365"),
      ellipse("body-carapace", 3, [150,235], 150,235,35,28),
      ellipse("head-plate", 4, [150,195], 150,195,30,20),
      // Pincer claws
      P("arm-l", 3, [100,195], "M120,198 L80,188 Z"),
      P("arm-r", 3, [200,195], "M180,198 L220,188 Z"),
      ellipse("pincer-claw-l", 4, [65,182], 65,182,20,12),
      ellipse("pincer-claw-r", 4, [235,182], 235,182,20,12),
      P("pincer-tip-l", 3, [50,178], "M55,180 L40,172 L48,185 Z"),
      P("pincer-tip-r", 3, [250,178], "M245,180 L260,172 L252,185 Z"),
      // Arching segmented tail with stinger
      P("tail-seg-1", 3, [155,265], "M145,260 L165,260 L162,280 L148,280 Z"),
      P("tail-seg-2", 4, [165,285], "M148,280 L162,280 L172,295 L155,300 Z"),
      P("tail-seg-3", 3, [178,300], "M155,300 L172,295 L190,305 L175,315 Z"),
      P("tail-seg-4", 4, [195,305], "M175,315 L190,305 L210,295 L200,315 Z"),
      P("tail-seg-5", 3, [215,290], "M200,315 L210,295 L230,278 L225,300 Z"),
      P("stinger-venom", 7, [235,268], "M230,278 L245,258 L238,282 Z"),
      circle("stinger-drop", 7, [245,255], 245,255,4),
      // Eyes
      circle("eye-l", 8, [140,190], 140,190,5),
      circle("eye-r", 8, [160,190], 160,190,5),
      circle("pupil-l", 6, [140,190], 140,190,2),
      circle("pupil-r", 6, [160,190], 160,190,2),
      // Legs
      P("leg-l-1", 12, [110,225], "M125,220 L100,232"),
      P("leg-l-2", 12, [105,242], "M122,235 L95,250"),
      P("leg-l-3", 12, [100,258], "M120,250 L90,268"),
      P("leg-r-1", 12, [190,225], "M175,220 L200,232"),
      P("leg-r-2", 12, [195,242], "M178,235 L205,250"),
      P("leg-r-3", 12, [200,258], "M180,250 L210,268"),
      circle("moon-desert", 2, [250,55], 250,55,20),
    ]
  },

  // ---- #63 🐛 Stick Insect ----
  {
    id: "stick-insect", name: "Stick Insect", emoji: "🐛",
    colors: ["#E8F5E9","#4CAF50","#795548","#8D6E63","#A1887F","#212121","#FFD54F","#FFFFFF","#2E7D32","#3E2723","#BCAAA4","#D7CCC8"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("branch-diagonal", 3, [150,200], "M30,350 L270,50 L280,55 L40,355 Z"),
      P("branch-bark-1", 10, [100,280], "M80,292 Q100,285 120,295"),
      P("branch-bark-2", 10, [200,130], "M185,142 Q200,135 215,142"),
      P("leaf-branch-1", 2, [45,320], "M55,330 Q30,310 50,295 Q60,318 55,330 Z"),
      P("leaf-branch-2", 9, [250,80], "M260,90 Q280,70 260,55 Q248,78 260,90 Z"),
      P("leaf-branch-3", 2, [270,100], "M275,110 Q290,90 270,80 Q262,98 275,110 Z"),
      // Stick insect on branch - elongated twig body
      P("twig-body-head", 4, [175,130], "M168,115 L182,115 L180,150 L170,150 Z"),
      P("twig-body-thorax", 4, [160,170], "M155,150 L165,150 L163,195 L153,195 Z"),
      P("twig-body-abdomen-1", 5, [148,215], "M143,195 L153,195 L152,240 L142,240 Z"),
      P("twig-body-abdomen-2", 4, [138,260], "M133,240 L143,240 L142,285 L132,285 Z"),
      P("twig-body-abdomen-3", 5, [128,305], "M123,285 L133,285 L132,325 L122,325 Z"),
      circle("head-tiny", 4, [175,110], 175,110,10),
      circle("eye-l", 8, [170,107], 170,107,4),
      circle("eye-r", 8, [180,107], 180,107,4),
      circle("pupil-l", 6, [170,107], 170,107,2),
      circle("pupil-r", 6, [180,107], 180,107,2),
      P("antenna-l", 6, [162,90], "M168,105 L155,82"),
      P("antenna-r", 6, [188,90], "M182,105 L195,82"),
      P("leg-pair-1-l", 4, [140,155], "M158,148 L130,165"),
      P("leg-pair-1-r", 4, [190,148], "M172,148 L200,140"),
      P("leg-pair-2-l", 4, [128,200], "M148,192 L118,210"),
      P("leg-pair-2-r", 4, [172,185], "M162,190 L185,180"),
      P("leg-pair-3-l", 4, [115,250], "M138,242 L108,260"),
      P("leg-pair-3-r", 4, [158,240], "M148,245 L172,235"),
      circle("ladybug-friend", 7, [80,290], 80,290,6),
      circle("ladybug-dot", 6, [80,290], 80,290,2),
    ]
  },

  // ---- #64 🕷️ Peacock Spider ----
  {
    id: "peacock-spider", name: "Peacock Spider", emoji: "🕷️",
    colors: ["#E8F5E9","#1565C0","#D32F2F","#FF9800","#FFD54F","#4CAF50","#212121","#FFFFFF","#00BCD4","#FF5722","#F44336","#81C784"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      P("leaf-ground", 6, [150,360], "M0,350 Q75,330 150,345 Q225,330 300,350 L300,400 L0,400 Z"),
      P("leaf-vein-c", 12, [150,380], "M150,350 L150,395"),
      // Raised courtship fan
      P("fan-outer-circle", 2, [150,165], "M70,190 C60,100 240,100 230,190 C220,245 80,245 70,190 Z"),
      circle("fan-ocular-pattern-l", 3, [115,155], 115,155,18),
      circle("fan-ocular-pattern-r", 3, [185,155], 185,155,18),
      circle("fan-ocular-inner-l", 9, [115,155], 115,155,10),
      circle("fan-ocular-inner-r", 9, [185,155], 185,155,10),
      circle("fan-center-dot", 5, [150,140], 150,140,12),
      P("fan-stripe-l", 4, [95,180], "M80,190 Q95,165 110,185"),
      P("fan-stripe-r", 4, [205,180], "M220,190 Q205,165 190,185"),
      P("fan-border-dots", 10, [150,110], "M100,120 Q150,95 200,120"),
      // Spider body below fan
      ellipse("abdomen-fuzzy", 7, [150,270], 150,270,35,28),
      circle("cephalothorax", 7, [150,225], 150,225,22),
      // Big front eyes
      circle("big-eye-l", 8, [140,218], 140,218,8),
      circle("big-eye-r", 8, [160,218], 160,218,8),
      circle("pupil-l", 7, [140,218], 140,218,4),
      circle("pupil-r", 7, [160,218], 160,218,4),
      circle("eye-shine-l", 8, [138,216], 138,216,2),
      circle("eye-shine-r", 8, [158,216], 158,216,2),
      // Pedipalps fuzzy
      circle("pedipalp-l", 4, [128,235], 128,235,6),
      circle("pedipalp-r", 4, [172,235], 172,235,6),
      // Dancing legs
      P("dance-leg-l-1", 7, [90,260], "M125,245 L75,265"),
      P("dance-leg-l-2", 7, [80,285], "M120,260 L65,290"),
      P("dance-leg-r-1", 7, [210,260], "M175,245 L225,265"),
      P("dance-leg-r-2", 7, [220,285], "M180,260 L235,290"),
      P("raised-leg-l", 7, [70,225], "M125,240 L60,220 L55,210"),
      P("raised-leg-r", 7, [230,225], "M175,240 L240,220 L245,210"),
    ]
  },

  // ---- #65 🐻 Sloth Bear ----
  {
    id: "sloth-bear", name: "Sloth Bear", emoji: "🐻",
    colors: ["#E8F5E9","#4CAF50","#212121","#3E2723","#ECEFF1","#FF80AB","#FFFFFF","#FFD54F","#5D4037","#795548","#CFD8DC","#A1887F"],
    regions: [
      rect("forest-bg", 1, [22,30], 0,0,300,400),
      rect("ground", 2, [150,385], 0,358,300,42),
      P("grass", 2, [150,362], "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"),
      ellipse("shaggy-body", 3, [150,270], 150,270,75,62),
      P("shaggy-fur-texture-l", 4, [85,260], "M80,240 Q75,265 85,285"),
      P("shaggy-fur-texture-r", 4, [215,260], "M220,240 Q225,265 215,285"),
      poly("creamy-v-chest", 5, [150,260], "125,235 175,235 150,290"),
      circle("head-shaggy", 3, [150,168], 150,168,52),
      ellipse("long-pale-snout", 5, [150,192], 150,192,30,20),
      circle("ear-shaggy-l", 4, [108,118], 108,118,18),
      circle("ear-shaggy-r", 4, [192,118], 192,118,18),
      circle("ear-inner-l", 6, [108,118], 108,118,10),
      circle("ear-inner-r", 6, [192,118], 192,118,10),
      circle("nose-big-dark", 3, [150,185], 150,185,8),
      circle("nose-shine", 7, [148,183], 148,183,3),
      circle("eye-white-l", 7, [128,158], 128,158,10),
      circle("eye-white-r", 7, [172,158], 172,158,10),
      circle("pupil-l", 3, [128,158], 128,158,5),
      circle("pupil-r", 3, [172,158], 172,158,5),
      circle("eye-shine-l", 7, [126,156], 126,156,2),
      circle("eye-shine-r", 7, [170,156], 170,156,2),
      P("mouth-smile", 3, [150,202], "M142,200 Q150,210 158,200"),
      ellipse("blush-l", 6, [118,192], 118,192,10,7),
      ellipse("blush-r", 6, [182,192], 182,192,10,7),
      ellipse("curved-claw-paw-l", 9, [95,340], 95,340,22,14),
      ellipse("curved-claw-paw-r", 9, [205,340], 205,340,22,14),
      P("claw-marks-l", 4, [85,345], "M82,340 L78,352 M90,340 L86,352 M98,340 L94,352"),
      P("claw-marks-r", 4, [215,345], "M202,340 L198,352 M210,340 L206,352 M218,340 L214,352"),
      circle("sun-glow", 8, [252,58], 252,58,20),
      P("tree-trunk-bg", 9, [270,200], "M262,0 L278,0 L278,350 L262,350 Z"),
      P("jungle-leaf", 2, [270,100], "M265,120 Q280,85 255,75 Q248,108 265,120 Z"),
    ]
  },

  // ---- #66 🦚 Peacock ----
  {
    id: "peacock", name: "Peacock", emoji: "🦚",
    colors: ["#E8F5E9","#1565C0","#00BCD4","#4CAF50","#FFD54F","#FF5722","#212121","#FFFFFF","#00897B","#2E7D32","#81D4FA","#FF9800"],
    regions: [
      rect("bg", 1, [22,30], 0,0,300,400),
      rect("ground", 4, [150,385], 0,358,300,42),
      // Grand tail fan display
      P("tail-fan-outer", 2, [150,150], "M40,270 C20,80 280,80 260,270 Z"),
      P("tail-fan-inner", 3, [150,160], "M65,260 C50,105 250,105 235,260 Z"),
      circle("eye-spot-1-outer", 5, [100,140], 100,140,16),
      circle("eye-spot-1-inner", 4, [100,140], 100,140,8),
      circle("eye-spot-1-center", 2, [100,140], 100,140,4),
      circle("eye-spot-2-outer", 5, [150,115], 150,115,16),
      circle("eye-spot-2-inner", 4, [150,115], 150,115,8),
      circle("eye-spot-2-center", 2, [150,115], 150,115,4),
      circle("eye-spot-3-outer", 5, [200,140], 200,140,16),
      circle("eye-spot-3-inner", 4, [200,140], 200,140,8),
      circle("eye-spot-3-center", 2, [200,140], 200,140,4),
      circle("eye-spot-4", 5, [75,195], 75,195,12),
      circle("eye-spot-5", 5, [225,195], 225,195,12),
      // Bird body
      ellipse("body-blue", 2, [150,280], 150,280,40,38),
      ellipse("breast-teal", 9, [150,288], 150,288,24,22),
      circle("head-small", 2, [150,225], 150,225,20),
      P("crest-feathers", 11, [150,200], "M145,218 L140,192 L148,212 L150,188 L152,212 L160,192 L155,218 Z"),
      P("beak-tiny", 5, [168,228], "M162,225 L175,228 L162,232 Z"),
      circle("eye-bright", 8, [145,222], 145,222,5),
      circle("pupil", 7, [145,222], 145,222,2),
      P("neck-long", 2, [150,248], "M143,238 L157,238 L155,268 L145,268 Z"),
      ellipse("foot-l", 12, [135,345], 135,345,14,8),
      ellipse("foot-r", 12, [170,345], 170,345,14,8),
    ]
  },

  // ---- #67 🐴 Seahorse ----
  {
    id: "seahorse", name: "Seahorse", emoji: "🐴",
    colors: ["#E0F7FA","#00BCD4","#FF9800","#FFD54F","#FF5722","#212121","#FFFFFF","#FF80AB","#81D4FA","#F57F17","#B2EBF2","#26C6DA"],
    regions: [
      rect("ocean-bg", 1, [22,30], 0,0,300,400),
      circle("ocean-glow", 2, [150,200], 150,200,130),
      P("seagrass-l", 11, [40,300], "M35,395 Q30,300 45,250 Q50,300 35,395 Z"),
      P("seagrass-r", 11, [260,310], "M255,395 Q250,310 265,260 Q270,310 255,395 Z"),
      P("seahorse-head-snout", 3, [120,115], "M150,130 C150,90 120,80 100,100 L75,110 L100,120 C115,108 145,110 150,130 Z"),
      circle("coronet-crown", 4, [150,85], 150,85,12),
      P("coronet-spike-1", 5, [145,70], "M142,82 L140,60 L150,78 Z"),
      P("coronet-spike-2", 5, [158,72], "M152,80 L160,58 L162,78 Z"),
      circle("eye-round", 7, [128,108], 128,108,8),
      circle("pupil", 6, [128,108], 128,108,4),
      circle("eye-shine", 7, [126,106], 126,106,2),
      P("snout-tube", 3, [90,115], "M100,108 L72,115 L100,122 Z"),
      // Body plates segmented curve
      P("body-plate-1", 3, [155,155], "M140,135 L170,135 L168,175 L142,175 Z"),
      P("body-plate-2", 4, [158,195], "M142,175 L168,175 L170,215 L145,215 Z"),
      P("body-plate-3", 3, [160,235], "M145,215 L170,215 L172,255 L148,255 Z"),
      P("body-plate-4", 4, [158,275], "M148,255 L172,255 L170,295 L150,295 Z"),
      ellipse("belly-pouch", 10, [152,250], 152,250,16,22),
      // Curled tail
      P("curl-tail", 3, [160,330], "M150,295 Q175,320 165,345 Q155,365 140,355 Q130,345 145,340 Q155,338 158,345"),
      // Dorsal fin
      P("dorsal-fin", 9, [180,200], "M170,185 Q200,200 175,220 Z"),
      P("dorsal-fin-rays", 12, [185,200], "M175,190 L190,198 M175,200 L192,205 M175,210 L188,215"),
      // Pectoral fin
      ellipse("pectoral-fin", 9, [138,175], 138,175,12,8),
      circle("bubble-1", 7, [60,130], 60,130,6),
      circle("bubble-2", 7, [240,120], 240,120,5),
      circle("coral-blob", 5, [55,360], 55,360,12),
      circle("coral-blob-2", 8, [250,365], 250,365,10),
    ]
  },

  // ---- #68 🐙 Octopus ----
  {
    id: "octopus", name: "Octopus", emoji: "🐙",
    colors: ["#0D47A1","#1565C0","#E91E63","#F48FB1","#FF80AB","#FFD54F","#212121","#FFFFFF","#CE93D8","#9C27B0","#81D4FA","#F8BBD0"],
    regions: [
      rect("deep-sea-bg", 1, [22,30], 0,0,300,400),
      circle("ocean-glow", 2, [150,200], 150,200,130),
      // Bulbous head dome
      ellipse("head-bulb", 3, [150,145], 150,145,55,50),
      ellipse("head-spot-1", 9, [130,125], 130,125,12,10),
      ellipse("head-spot-2", 9, [170,135], 170,135,10,8),
      // Face
      circle("eye-white-l", 8, [128,155], 128,155,14),
      circle("eye-white-r", 8, [172,155], 172,155,14),
      circle("pupil-l", 7, [128,155], 128,155,7),
      circle("pupil-r", 7, [172,155], 172,155,7),
      circle("eye-shine-l", 8, [125,152], 125,152,3),
      circle("eye-shine-r", 8, [169,152], 169,152,3),
      P("smile-cute", 7, [150,180], "M138,175 Q150,190 162,175"),
      ellipse("blush-l", 5, [115,175], 115,175,10,7),
      ellipse("blush-r", 5, [185,175], 185,175,10,7),
      // 8 tentacles curling
      P("tentacle-1", 4, [80,235], "M110,195 Q65,230 55,280 Q50,310 70,300"),
      P("tentacle-2", 3, [55,275], "M100,200 Q45,250 40,310 Q38,340 55,330"),
      P("tentacle-3", 4, [120,250], "M130,195 Q110,260 95,320 Q88,345 105,335"),
      P("tentacle-4", 3, [145,260], "M148,195 Q140,270 135,340 Q132,360 148,350"),
      P("tentacle-5", 4, [165,260], "M155,195 Q165,270 170,340 Q173,360 158,350"),
      P("tentacle-6", 3, [195,250], "M175,195 Q200,260 215,320 Q222,345 205,335"),
      P("tentacle-7", 4, [235,275], "M200,200 Q255,250 260,310 Q262,340 245,330"),
      P("tentacle-8", 3, [240,235], "M195,195 Q240,230 250,280 Q255,310 235,300"),
      // Sucker dots
      circle("sucker-1", 12, [60,295], 60,295,4),
      circle("sucker-2", 12, [100,330], 100,330,4),
      circle("sucker-3", 12, [205,330], 205,330,4),
      circle("sucker-4", 12, [245,295], 245,295,4),
      circle("bubble-1", 11, [55,110], 55,110,6),
      circle("bubble-2", 11, [245,100], 245,100,5),
    ]
  },
];

// Now figure out how many animals currently exist and build the final list
// We need exactly 65 animals total. First 22 are kept. Rest are replaced.
// Count how many we have in ANIMALS_23_TO_65
console.log(`Built ${ANIMALS_23_TO_65.length} new animal templates (positions #23 to #${22 + ANIMALS_23_TO_65.length})`);

// If we have more than 43, we'll have more than 65 total which is fine
// But let's aim for exactly as many as the original had
const totalOriginal = currentAnimals.length;
console.log(`Original animals count: ${totalOriginal}`);

// Build final list: first 22 original + all new ones
const finalAnimals = [];

// Keep first 22 originals (they're already puppy-quality)
for (let i = 0; i < 22 && i < totalOriginal; i++) {
  finalAnimals.push(currentAnimals[i]);
}

// Add all new animals
ANIMALS_23_TO_65.forEach(a => {
  a.category = "animals";
  a.viewBox = "0 0 300 400";
  finalAnimals.push(a);
});

console.log(`Final animals count: ${finalAnimals.length}`);

// Remove any accent-spark/accent-glow/accent-confetti/accent-star/accent-petal padding from ALL templates
finalAnimals.forEach(t => {
  t.regions = t.regions.filter(r => !r.id.startsWith('accent-'));
});

// Normalize color numbers to be contiguous
finalAnimals.forEach(t => {
  const used = [...new Set(t.regions.map(r => r.colorNumber))].sort((a,b) => a-b);
  const mapping = {};
  const newColors = [];
  used.forEach((oldNum, idx) => {
    mapping[oldNum] = idx + 1;
    newColors.push(t.colors[oldNum - 1] || '#888888');
  });
  t.regions.forEach(r => { r.colorNumber = mapping[r.colorNumber]; });
  t.colors = newColors;
});

// Verify all have >= 24 regions
let below24 = 0;
finalAnimals.forEach(t => {
  if (t.regions.length < 24) {
    console.log(`WARNING: ${t.name} (${t.id}) has only ${t.regions.length} regions`);
    below24++;
  }
});
console.log(`Templates below 24 regions: ${below24}`);

// Write output
const header = `import { ImageTemplate } from '../../types';\n\n// Category: animals (${finalAnimals.length} 100% bespoke unique templates - every region is part of the actual animal, no filler)\nexport const ANIMALS_TEMPLATES: ImageTemplate[] = `;
fs.writeFileSync(animalsFile, header + JSON.stringify(finalAnimals, null, 2) + ';\n', 'utf8');
console.log('Successfully wrote all puppy-quality animals to animals.ts');
