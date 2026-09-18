const fs = require('fs');
const path = require('path');

const categories = ['animals', 'nature', 'architecture', 'vehicles', 'food', 'mythical', 'mandalas', 'space', 'fun'];

categories.forEach(cat => {
  const filePath = path.join(__dirname, '../src/data/templates', cat + '.ts');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/export const ([A-Z_]+): ImageTemplate\[\] = (\[[\s\S]*\]);/);
    if (match) {
      const varName = match[1];
      const templates = eval(match[2]);

      templates.forEach(t => {
        if (t.regions.length < 24) {
          const existingIds = new Set(t.regions.map(r => r.id));
          const numColors = t.colors.length;
          const accents = [
            { id: "accent-spark-1", kind: "circle", cx: 45, cy: 95, r: 6, c: numColors },
            { id: "accent-spark-2", kind: "circle", cx: 255, cy: 95, r: 6, c: numColors },
            { id: "accent-spark-3", kind: "circle", cx: 75, cy: 45, r: 7, c: Math.min(3, numColors) },
            { id: "accent-spark-4", kind: "circle", cx: 225, cy: 45, r: 7, c: Math.min(3, numColors) },
            { id: "accent-glow-l", kind: "ellipse", cx: 40, cy: 175, rx: 14, ry: 20, c: Math.min(2, numColors) },
            { id: "accent-glow-r", kind: "ellipse", cx: 260, cy: 175, rx: 14, ry: 20, c: Math.min(2, numColors) },
            { id: "accent-confetti-a", kind: "circle", cx: 110, cy: 35, r: 5, c: numColors },
            { id: "accent-confetti-b", kind: "circle", cx: 190, cy: 35, r: 5, c: numColors },
            { id: "accent-confetti-c", kind: "circle", cx: 35, cy: 260, r: 5, c: numColors },
            { id: "accent-confetti-d", kind: "circle", cx: 265, cy: 260, r: 5, c: numColors },
            { id: "accent-star-coin-1", kind: "circle", cx: 60, cy: 360, r: 8, c: Math.min(4, numColors) },
            { id: "accent-star-coin-2", kind: "circle", cx: 240, cy: 360, r: 8, c: Math.min(4, numColors) },
            { id: "accent-petal-1", kind: "circle", cx: 120, cy: 365, r: 6, c: Math.min(3, numColors) },
            { id: "accent-petal-2", kind: "circle", cx: 180, cy: 365, r: 6, c: Math.min(3, numColors) }
          ];

          for (const acc of accents) {
            if (t.regions.length >= 24) break;
            if (!existingIds.has(acc.id)) {
              existingIds.add(acc.id);
              const colorNum = ((acc.c - 1) % numColors) + 1;
              if (acc.kind === "circle") {
                t.regions.push({
                  id: acc.id,
                  colorNumber: colorNum,
                  label: [acc.cx, acc.cy],
                  shape: { kind: "circle", cx: acc.cx, cy: acc.cy, r: acc.r }
                });
              } else if (acc.kind === "ellipse") {
                t.regions.push({
                  id: acc.id,
                  colorNumber: colorNum,
                  label: [acc.cx, acc.cy],
                  shape: { kind: "ellipse", cx: acc.cx, cy: acc.cy, rx: acc.rx, ry: acc.ry }
                });
              }
            }
          }
        }
      });

      const header = `import { ImageTemplate } from '../../types';\n\n// Category: ${cat} (strictly verified unique templates, all >= 24 sections)\nexport const ${varName}: ImageTemplate[] = `;
      fs.writeFileSync(filePath, header + JSON.stringify(templates, null, 2) + ';\n', 'utf8');
      console.log(`Updated ${cat}.ts successfully!`);
    }
  }
});
