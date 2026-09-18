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

// Gorgeous, highly detailed Statue of Liberty
const detailedStatueOfLiberty = {
  id: "statue-liberty",
  name: "Statue of Liberty",
  emoji: "🗽",
  category: "architecture",
  viewBox: "0 0 300 400",
  colors: [
    "#E0F7FA", // 1 Sky Blue
    "#80CBC4", // 2 Light Verdigris Green
    "#4DB6AC", // 3 Mid Verdigris Green
    "#26A69A", // 4 Rich Verdigris Green
    "#00796B", // 5 Deep Verdigris Green
    "#FFD54F", // 6 Golden Torch Flame
    "#FF8F00", // 7 Vivid Orange Flame Core
    "#ECEFF1", // 8 Light Granite
    "#78909C", // 9 Dark Granite Pedestal
    "#0277BD", // 10 Harbor Bay Water
    "#FFFFFF"  // 11 Cloud White
  ],
  regions: [
    rect("sky-bg", 1, [25, 30], 0, 0, 300, 400),
    rect("harbor-water", 10, [150, 385], 0, 370, 300, 30),
    
    // Fort Wood & Classical Granite Pedestal
    polygon("pedestal-base", 9, [150, 355], "75,370 225,370 215,340 85,340"),
    rect("pedestal-cornice", 8, [150, 335], 90, 330, 120, 10, 2),
    rect("pedestal-shaft", 9, [150, 305], 100, 280, 100, 50, 2),
    rect("pedestal-balcony", 8, [150, 275], 95, 270, 110, 10, 2),
    rect("statue-plinth", 5, [150, 265], 110, 260, 80, 10, 2),

    // Flowing Greco-Roman Draped Toga Robes
    pathShape("robe-skirt", 3, [150, 215], "M 125,150 L 175,150 L 190,260 L 110,260 Z"),
    pathShape("robe-fold-left", 4, [120, 210], "M 125,150 C 115,190 110,230 115,260 L 135,260 C 130,230 128,190 135,150 Z"),
    pathShape("robe-fold-right", 4, [178, 210], "M 165,150 C 172,190 175,230 170,260 L 190,260 C 185,230 180,190 175,150 Z"),
    pathShape("stola-chest", 2, [150, 140], "M 130,120 L 170,120 L 165,155 L 135,155 Z"),
    pathShape("mantle-drape", 5, [150, 150], "M 135,125 Q 150,155 165,125 Q 150,145 135,125 Z"),

    // Left Arm & Tabula Ansata (Tablet of Law)
    pathShape("arm-left", 3, [108, 145], "M 130,120 L 95,145 L 105,175 L 125,150 Z"),
    polygon("tablet-body", 2, [95, 160], "85,135 110,135 110,185 85,185"),
    rect("tablet-inset", 5, [97, 160], 88, 140, 19, 40, 1),

    // Right Arm Raised High with Torch
    pathShape("arm-right", 3, [195, 85], "M 168,120 L 210,65 L 222,70 L 178,125 Z"),
    pathShape("torch-hand", 2, [215, 60], "M 208,68 L 216,55 L 224,58 L 218,70 Z"),
    polygon("torch-gallery", 4, [218, 50], "205,55 230,55 225,46 210,46"),
    polygon("torch-flame-outer", 6, [218, 25], "210,46 230,46 226,20 218,8 210,25"),
    polygon("torch-flame-core", 7, [218, 30], "214,46 224,46 220,28 216,28"),

    // Classical Head, Profile & Hair
    circle("neck", 2, [150, 115], 150, 115, 12),
    ellipse("face-profile", 2, [150, 100], 150, 100, 14, 16),
    pathShape("hair-chignon", 4, [150, 95], "M 136,105 C 132,85 168,85 164,105 Z"),
    
    // Iconic 7-Pointed Radiate Crown & Headband
    ellipse("crown-headband", 4, [150, 92], 150, 92, 18, 5),
    polygon("crown-ray-1", 2, [122, 78], "136,92 118,72 138,88"), // Leftmost spike
    polygon("crown-ray-2", 2, [130, 72], "140,90 128,62 143,87"),
    polygon("crown-ray-3", 2, [140, 68], "144,89 139,56 148,87"),
    polygon("crown-ray-4", 2, [150, 65], "148,88 150,52 152,88"), // Center vertical spike
    polygon("crown-ray-5", 2, [160, 68], "152,87 161,56 156,89"),
    polygon("crown-ray-6", 2, [170, 72], "157,87 172,62 160,90"),
    polygon("crown-ray-7", 2, [178, 78], "162,88 182,72 164,92"), // Rightmost spike

    // Atmospheric Sky Elements
    circle("sun-glory", 6, [45, 55], 45, 55, 18),
    ellipse("cloud-l", 11, [65, 95], 65, 95, 25, 12),
    ellipse("cloud-r", 11, [245, 110], 245, 110, 22, 10)
  ]
};

// Load current architecture.ts
const archPath = path.join(__dirname, '../src/data/templates/architecture.ts');
const content = fs.readFileSync(archPath, 'utf8');
const match = content.match(/export const ARCHITECTURE_TEMPLATES: ImageTemplate\[\] = (\[[\s\S]*\]);/);
if (!match) {
  console.error("Could not parse ARCHITECTURE_TEMPLATES!");
  process.exit(1);
}

let templates = eval(match[1]);
const index = templates.findIndex(t => t.id === "statue-liberty");
if (index !== -1) {
  templates[index] = detailedStatueOfLiberty;
  console.log(`Replaced template #${index + 1} (${templates[index].name}) with ultra-detailed Statue of Liberty!`);
}

const header = `import { ImageTemplate } from '../../types';\n\n// Category: architecture (50 strictly verified unique templates)\nexport const ARCHITECTURE_TEMPLATES: ImageTemplate[] = `;
fs.writeFileSync(archPath, header + JSON.stringify(templates, null, 2) + ';\n', 'utf8');
console.log('Successfully saved to', archPath);
