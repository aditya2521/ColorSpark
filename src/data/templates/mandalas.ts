import { ImageTemplate } from '../../types';

// Category: mandalas (bespoke unique templates, no filler regions)
export const MANDALAS_TEMPLATES: ImageTemplate[] = [
  {
    "id": "mandala-1",
    "name": "Moroccan Star Medallion",
    "emoji": "🇲🇦",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#004D40",
      "#00897B",
      "#D32F2F",
      "#FFD54F",
      "#FFFFFF",
      "#E0F2F1"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "outer-border-ring",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "inner-border-ring",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 115
        }
      },
      {
        "id": "star-square-1",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,115 235,115 235,285 65,285"
        }
      },
      {
        "id": "star-square-2",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 270,200 150,320 30,200"
        }
      },
      {
        "id": "center-octagram-disc",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 55
        }
      },
      {
        "id": "inner-star-gold",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,160 162,188 190,200 162,212 150,240 138,212 110,200 138,188"
        }
      },
      {
        "id": "bindu-gem",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "corner-tile-tl",
        "colorNumber": 4,
        "label": [
          40,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 40,
          "r": 20
        }
      },
      {
        "id": "corner-tile-tr",
        "colorNumber": 4,
        "label": [
          260,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 40,
          "r": 20
        }
      },
      {
        "id": "corner-tile-bl",
        "colorNumber": 4,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 360,
          "r": 20
        }
      },
      {
        "id": "corner-tile-br",
        "colorNumber": 4,
        "label": [
          260,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 360,
          "r": 20
        }
      },
      {
        "id": "arabesque-node-n",
        "colorNumber": 5,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "arabesque-node-s",
        "colorNumber": 5,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 8
        }
      },
      {
        "id": "arabesque-node-e",
        "colorNumber": 5,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "arabesque-node-w",
        "colorNumber": 5,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "petal-ne",
        "colorNumber": 6,
        "label": [
          205,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 145,
          "r": 10
        }
      },
      {
        "id": "petal-nw",
        "colorNumber": 6,
        "label": [
          95,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 145,
          "r": 10
        }
      },
      {
        "id": "petal-se",
        "colorNumber": 6,
        "label": [
          205,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "petal-sw",
        "colorNumber": 6,
        "label": [
          95,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 255,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "mandala-2",
    "name": "Moroccan Zellige Tile",
    "emoji": "💠",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#00BCD4",
      "#E0F7FA",
      "#FFD54F",
      "#FFFFFF",
      "#1565C0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "outer-tile-frame",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 85,
          "w": 230,
          "h": 230,
          "rx": 8
        }
      },
      {
        "id": "center-diamond",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,100 250,200 150,300 50,200"
        }
      },
      {
        "id": "inner-cross-diamond",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,130 220,200 150,270 80,200"
        }
      },
      {
        "id": "core-star-diamond",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,165 185,200 150,235 115,200"
        }
      },
      {
        "id": "zellige-gem",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "corner-tri-tl",
        "colorNumber": 4,
        "label": [
          75,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,100 100,100 50,150"
        }
      },
      {
        "id": "corner-tri-tr",
        "colorNumber": 4,
        "label": [
          225,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,100 200,100 250,150"
        }
      },
      {
        "id": "corner-tri-bl",
        "colorNumber": 4,
        "label": [
          75,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,300 100,300 50,250"
        }
      },
      {
        "id": "corner-tri-br",
        "colorNumber": 4,
        "label": [
          225,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,300 200,300 250,250"
        }
      },
      {
        "id": "outer-dot-n",
        "colorNumber": 5,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "outer-dot-s",
        "colorNumber": 5,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "outer-dot-w",
        "colorNumber": 5,
        "label": [
          15,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 15,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "outer-dot-e",
        "colorNumber": 5,
        "label": [
          285,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "mosaic-chip-1",
        "colorNumber": 2,
        "label": [
          100,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "mosaic-chip-2",
        "colorNumber": 2,
        "label": [
          200,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "mosaic-chip-3",
        "colorNumber": 2,
        "label": [
          100,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 250,
          "r": 7
        }
      },
      {
        "id": "mosaic-chip-4",
        "colorNumber": 2,
        "label": [
          200,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 250,
          "r": 7
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-3",
    "name": "Andalusian Palace Tile",
    "emoji": "🏛️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#D7CCC8",
      "#8D6E63",
      "#FFD54F",
      "#00897B",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "arch-courtyard-circle",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "arcade-ring",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "central-octagon",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,115 185,115 235,165 235,235 185,285 115,285 65,235 65,165"
        }
      },
      {
        "id": "fountain-basin",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 45
        }
      },
      {
        "id": "fountain-jet",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 16
        }
      },
      {
        "id": "column-capital-1",
        "colorNumber": 4,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 12
        }
      },
      {
        "id": "column-capital-2",
        "colorNumber": 4,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "column-capital-3",
        "colorNumber": 4,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "column-capital-4",
        "colorNumber": 4,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "horseshoe-arch-1",
        "colorNumber": 5,
        "label": [
          75,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "horseshoe-arch-2",
        "colorNumber": 5,
        "label": [
          225,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "horseshoe-arch-3",
        "colorNumber": 5,
        "label": [
          75,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 275,
          "r": 14
        }
      },
      {
        "id": "horseshoe-arch-4",
        "colorNumber": 5,
        "label": [
          225,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 275,
          "r": 14
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "palace-pillar-1",
        "colorNumber": 3,
        "label": [
          85,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "palace-pillar-2",
        "colorNumber": 3,
        "label": [
          215,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "water-ripple-1",
        "colorNumber": 6,
        "label": [
          130,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "water-ripple-2",
        "colorNumber": 6,
        "label": [
          170,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 200,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mandala-4",
    "name": "Persian Blue Rosette",
    "emoji": "🧿",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A192F",
      "#0D47A1",
      "#00BCD4",
      "#FFFFFF",
      "#212121",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "protective-halo",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "nazar-deep-blue",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 110
        }
      },
      {
        "id": "nazar-cyan-ring",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 80
        }
      },
      {
        "id": "nazar-white-disc",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 50
        }
      },
      {
        "id": "nazar-black-pupil",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "nazar-spark-glint",
        "colorNumber": 4,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 190,
          "r": 6
        }
      },
      {
        "id": "petal-bead-1",
        "colorNumber": 6,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "petal-bead-2",
        "colorNumber": 6,
        "label": [
          235,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 115,
          "r": 10
        }
      },
      {
        "id": "petal-bead-3",
        "colorNumber": 6,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "petal-bead-4",
        "colorNumber": 6,
        "label": [
          235,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 285,
          "r": 10
        }
      },
      {
        "id": "petal-bead-5",
        "colorNumber": 6,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 10
        }
      },
      {
        "id": "petal-bead-6",
        "colorNumber": 6,
        "label": [
          65,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 285,
          "r": 10
        }
      },
      {
        "id": "petal-bead-7",
        "colorNumber": 6,
        "label": [
          30,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "petal-bead-8",
        "colorNumber": 6,
        "label": [
          65,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 115,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 3,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 3,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 3,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 4,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "cyan-drop-1",
        "colorNumber": 3,
        "label": [
          100,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 150,
          "r": 8
        }
      },
      {
        "id": "cyan-drop-2",
        "colorNumber": 3,
        "label": [
          200,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 150,
          "r": 8
        }
      },
      {
        "id": "cyan-drop-3",
        "colorNumber": 3,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "mandala-5",
    "name": "Arabian Star Medallion",
    "emoji": "✨",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFD54F",
      "#FFA000",
      "#FF8F00",
      "#FFFFFF",
      "#7E57C2"
    ],
    "regions": [
      {
        "id": "night-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "celestial-halo",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "astronomy-star-1",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 165,165 250,150 175,185 240,240 165,215 150,300 135,215 60,240 125,185 50,150 135,165"
        }
      },
      {
        "id": "astronomy-star-2",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,105 160,170 225,160 170,185 220,225 160,210 150,275 140,210 80,225 130,185 75,160 140,170"
        }
      },
      {
        "id": "astrolabe-inner-ring",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 45
        }
      },
      {
        "id": "central-sun-gem",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "orbit-planet-1",
        "colorNumber": 5,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "orbit-planet-2",
        "colorNumber": 5,
        "label": [
          230,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "orbit-planet-3",
        "colorNumber": 5,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 6
        }
      },
      {
        "id": "orbit-planet-4",
        "colorNumber": 5,
        "label": [
          70,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "star-1",
        "colorNumber": 2,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 2,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 2,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-3",
        "colorNumber": 5,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "spark-4",
        "colorNumber": 5,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "constellation-dot-1",
        "colorNumber": 2,
        "label": [
          50,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "constellation-dot-2",
        "colorNumber": 2,
        "label": [
          250,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "constellation-dot-3",
        "colorNumber": 2,
        "label": [
          50,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 300,
          "r": 4
        }
      },
      {
        "id": "constellation-dot-4",
        "colorNumber": 2,
        "label": [
          250,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 300,
          "r": 4
        }
      },
      {
        "id": "astrolabe-pointer-n",
        "colorNumber": 5,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 4
        }
      },
      {
        "id": "astrolabe-pointer-s",
        "colorNumber": 5,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "mandala-6",
    "name": "Sacred Lotus Mandala",
    "emoji": "🪷",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1B5E20",
      "#F48FB1",
      "#EC407A",
      "#E91E63",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "pond-aura",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "outer-petal-n",
        "colorNumber": 2,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 110,
          "rx": 25,
          "ry": 50
        }
      },
      {
        "id": "outer-petal-s",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 290,
          "rx": 25,
          "ry": 50
        }
      },
      {
        "id": "outer-petal-e",
        "colorNumber": 2,
        "label": [
          240,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 200,
          "rx": 50,
          "ry": 25
        }
      },
      {
        "id": "outer-petal-w",
        "colorNumber": 2,
        "label": [
          60,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 60,
          "cy": 200,
          "rx": 50,
          "ry": 25
        }
      },
      {
        "id": "outer-petal-ne",
        "colorNumber": 2,
        "label": [
          215,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 135,
          "rx": 35,
          "ry": 35
        }
      },
      {
        "id": "outer-petal-nw",
        "colorNumber": 2,
        "label": [
          85,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 135,
          "rx": 35,
          "ry": 35
        }
      },
      {
        "id": "outer-petal-se",
        "colorNumber": 2,
        "label": [
          215,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 265,
          "rx": 35,
          "ry": 35
        }
      },
      {
        "id": "outer-petal-sw",
        "colorNumber": 2,
        "label": [
          85,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 265,
          "rx": 35,
          "ry": 35
        }
      },
      {
        "id": "inner-petal-n",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 18,
          "ry": 35
        }
      },
      {
        "id": "inner-petal-s",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 18,
          "ry": 35
        }
      },
      {
        "id": "inner-petal-e",
        "colorNumber": 3,
        "label": [
          210,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 200,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "inner-petal-w",
        "colorNumber": 3,
        "label": [
          90,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 200,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "lotus-core-bud",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "golden-seed-pod",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 20
        }
      },
      {
        "id": "seed-center",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "dew-drop-1",
        "colorNumber": 6,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 5
        }
      },
      {
        "id": "dew-drop-2",
        "colorNumber": 6,
        "label": [
          245,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "dew-drop-3",
        "colorNumber": 6,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 315,
          "r": 5
        }
      },
      {
        "id": "dew-drop-4",
        "colorNumber": 6,
        "label": [
          55,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-7",
    "name": "Sahasrara Crown Lotus",
    "emoji": "👑",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#7B1FA2",
      "#BA68C8",
      "#FFD54F",
      "#FFFFFF",
      "#E1BEE7"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "cosmic-crown-aura",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "crown-yantra-star",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,90 190,130 250,150 210,190 240,250 180,240 150,300 120,240 60,250 90,190 50,150 110,130"
        }
      },
      {
        "id": "chakra-radiance-ring",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "inner-triangle-up",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,140 200,230 100,230"
        }
      },
      {
        "id": "inner-triangle-down",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,260 200,170 100,170"
        }
      },
      {
        "id": "sahasrara-bindu-core",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 16
        }
      },
      {
        "id": "ray-bead-1",
        "colorNumber": 6,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "ray-bead-2",
        "colorNumber": 6,
        "label": [
          230,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "ray-bead-3",
        "colorNumber": 6,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "ray-bead-4",
        "colorNumber": 6,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 280,
          "r": 6
        }
      },
      {
        "id": "ray-bead-5",
        "colorNumber": 6,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 315,
          "r": 6
        }
      },
      {
        "id": "ray-bead-6",
        "colorNumber": 6,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 280,
          "r": 6
        }
      },
      {
        "id": "ray-bead-7",
        "colorNumber": 6,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "ray-bead-8",
        "colorNumber": 6,
        "label": [
          70,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "crown-jewel-1",
        "colorNumber": 4,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "crown-jewel-2",
        "colorNumber": 4,
        "label": [
          190,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "bindu-glint",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "mandala-8",
    "name": "Thousand Petal Lotus",
    "emoji": "🌺",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#880E4F",
      "#D81B60",
      "#FF4081",
      "#FFD54F",
      "#FFFFFF",
      "#4A148C"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 6,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "bloom-halo",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "petal-tier-3",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "petal-tier-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "petal-tier-1",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 45
        }
      },
      {
        "id": "stamen-center",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 20
        }
      },
      {
        "id": "pollen-pip-1",
        "colorNumber": 5,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 4
        }
      },
      {
        "id": "pollen-pip-2",
        "colorNumber": 5,
        "label": [
          160,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "pollen-pip-3",
        "colorNumber": 5,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 4
        }
      },
      {
        "id": "pollen-pip-4",
        "colorNumber": 5,
        "label": [
          140,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "petal-tip-n",
        "colorNumber": 3,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 15
        }
      },
      {
        "id": "petal-tip-ne",
        "colorNumber": 3,
        "label": [
          225,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 125,
          "r": 15
        }
      },
      {
        "id": "petal-tip-e",
        "colorNumber": 3,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "petal-tip-se",
        "colorNumber": 3,
        "label": [
          225,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 275,
          "r": 15
        }
      },
      {
        "id": "petal-tip-s",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 15
        }
      },
      {
        "id": "petal-tip-sw",
        "colorNumber": 3,
        "label": [
          75,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 275,
          "r": 15
        }
      },
      {
        "id": "petal-tip-w",
        "colorNumber": 3,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "petal-tip-nw",
        "colorNumber": 3,
        "label": [
          75,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 125,
          "r": 15
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-9",
    "name": "Serene Waterlily",
    "emoji": "🌸",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#004D40",
      "#00897B",
      "#F8BBD0",
      "#F48FB1",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "zen-pond",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ripple-ring-large",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "ripple-ring-mid",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 95
        }
      },
      {
        "id": "lilypad-leaf-1",
        "colorNumber": 2,
        "label": [
          80,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 140,
          "rx": 40,
          "ry": 30
        }
      },
      {
        "id": "lilypad-leaf-2",
        "colorNumber": 2,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 260,
          "rx": 40,
          "ry": 30
        }
      },
      {
        "id": "waterlily-petal-1",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 20,
          "ry": 45
        }
      },
      {
        "id": "waterlily-petal-2",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 20,
          "ry": 45
        }
      },
      {
        "id": "waterlily-petal-3",
        "colorNumber": 3,
        "label": [
          210,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 200,
          "rx": 45,
          "ry": 20
        }
      },
      {
        "id": "waterlily-petal-4",
        "colorNumber": 3,
        "label": [
          90,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 200,
          "rx": 45,
          "ry": 20
        }
      },
      {
        "id": "waterlily-inner-1",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 14,
          "ry": 30
        }
      },
      {
        "id": "waterlily-inner-2",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 14,
          "ry": 30
        }
      },
      {
        "id": "golden-anther-center",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 22
        }
      },
      {
        "id": "anther-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "water-drop-1",
        "colorNumber": 6,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "water-drop-2",
        "colorNumber": 6,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "water-drop-3",
        "colorNumber": 6,
        "label": [
          60,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "water-drop-4",
        "colorNumber": 6,
        "label": [
          240,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "gold-dust-1",
        "colorNumber": 5,
        "label": [
          125,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 175,
          "r": 4
        }
      },
      {
        "id": "gold-dust-2",
        "colorNumber": 5,
        "label": [
          175,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 175,
          "r": 4
        }
      },
      {
        "id": "gold-dust-3",
        "colorNumber": 5,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 225,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "mandala-10",
    "name": "Anahata Heart Lotus",
    "emoji": "💚",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1B5E20",
      "#4CAF50",
      "#81C784",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "anahata-outer-circle",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "twelve-petal-ring",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "shiva-triangle-up",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,120 220,240 80,240"
        }
      },
      {
        "id": "shakti-triangle-down",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,280 220,160 80,160"
        }
      },
      {
        "id": "inner-yantra-bindu",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "petal-node-1",
        "colorNumber": 3,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 10
        }
      },
      {
        "id": "petal-node-2",
        "colorNumber": 3,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "petal-node-3",
        "colorNumber": 3,
        "label": [
          245,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "petal-node-4",
        "colorNumber": 3,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "petal-node-5",
        "colorNumber": 3,
        "label": [
          245,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "petal-node-6",
        "colorNumber": 3,
        "label": [
          205,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "petal-node-7",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 10
        }
      },
      {
        "id": "petal-node-8",
        "colorNumber": 3,
        "label": [
          95,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "petal-node-9",
        "colorNumber": 3,
        "label": [
          55,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "petal-node-10",
        "colorNumber": 3,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "petal-node-11",
        "colorNumber": 3,
        "label": [
          55,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "petal-node-12",
        "colorNumber": 3,
        "label": [
          95,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 4,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-11",
    "name": "Aztec Sun Stone",
    "emoji": "☀️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#FF6F00",
      "#FFD54F",
      "#D84315",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "aztec-stone-rim",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "glyph-band",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "ray-band",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "tonatiuh-face-disc",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 45
        }
      },
      {
        "id": "sun-ray-tri-n",
        "colorNumber": 3,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,95 165,95 150,60"
        }
      },
      {
        "id": "sun-ray-tri-s",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,305 165,305 150,340"
        }
      },
      {
        "id": "sun-ray-tri-e",
        "colorNumber": 3,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,185 255,215 290,200"
        }
      },
      {
        "id": "sun-ray-tri-w",
        "colorNumber": 3,
        "label": [
          30,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,185 45,215 10,200"
        }
      },
      {
        "id": "glyph-dot-1",
        "colorNumber": 5,
        "label": [
          185,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-2",
        "colorNumber": 5,
        "label": [
          235,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 165,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-3",
        "colorNumber": 5,
        "label": [
          235,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 235,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-4",
        "colorNumber": 5,
        "label": [
          185,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 285,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-5",
        "colorNumber": 5,
        "label": [
          115,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 285,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-6",
        "colorNumber": 5,
        "label": [
          65,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 235,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-7",
        "colorNumber": 5,
        "label": [
          65,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 165,
          "r": 8
        }
      },
      {
        "id": "glyph-dot-8",
        "colorNumber": 5,
        "label": [
          115,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "eye-tonatiuh-l",
        "colorNumber": 1,
        "label": [
          135,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 190,
          "r": 5
        }
      },
      {
        "id": "eye-tonatiuh-r",
        "colorNumber": 1,
        "label": [
          165,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 190,
          "r": 5
        }
      },
      {
        "id": "sacred-tongue",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,205 160,205 150,230"
        }
      },
      {
        "id": "star-1",
        "colorNumber": 3,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 3,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-12",
    "name": "Surya Sun God Wheel",
    "emoji": "🌞",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FFD54F",
      "#FF8F00",
      "#D32F2F",
      "#ECEFF1",
      "#FF6F00"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "chariot-wheel-rim",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "wheel-inner-rim",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 110
        }
      },
      {
        "id": "spoke-v",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 90,
          "w": 12,
          "h": 220
        }
      },
      {
        "id": "spoke-h",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 194,
          "w": 220,
          "h": 12
        }
      },
      {
        "id": "spoke-diag-1",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,120 80,110 230,280 220,290"
        }
      },
      {
        "id": "spoke-diag-2",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,120 220,110 70,280 80,290"
        }
      },
      {
        "id": "hub-axle-boss",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "solar-bindu",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "flame-prong-1",
        "colorNumber": 6,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 65,
          "r": 10
        }
      },
      {
        "id": "flame-prong-2",
        "colorNumber": 6,
        "label": [
          245,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "flame-prong-3",
        "colorNumber": 6,
        "label": [
          285,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "flame-prong-4",
        "colorNumber": 6,
        "label": [
          245,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 295,
          "r": 10
        }
      },
      {
        "id": "flame-prong-5",
        "colorNumber": 6,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "flame-prong-6",
        "colorNumber": 6,
        "label": [
          55,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 295,
          "r": 10
        }
      },
      {
        "id": "flame-prong-7",
        "colorNumber": 6,
        "label": [
          15,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 15,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "flame-prong-8",
        "colorNumber": 6,
        "label": [
          55,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 2,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spoke-bead-1",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "spoke-bead-2",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "spoke-bead-3",
        "colorNumber": 2,
        "label": [
          210,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 200,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mandala-13",
    "name": "Helios Sunburst Wheel",
    "emoji": "🌅",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#311B92",
      "#FF6F00",
      "#FFD54F",
      "#FFAB00",
      "#FFFFFF",
      "#FF3D00"
    ],
    "regions": [
      {
        "id": "twilight-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "helios-corona",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "corona-ray-1",
        "colorNumber": 3,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,75 160,140 140,140"
        }
      },
      {
        "id": "corona-ray-2",
        "colorNumber": 3,
        "label": [
          230,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,115 190,165 175,150"
        }
      },
      {
        "id": "corona-ray-3",
        "colorNumber": 3,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "275,200 210,190 210,210"
        }
      },
      {
        "id": "corona-ray-4",
        "colorNumber": 3,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,285 175,250 190,235"
        }
      },
      {
        "id": "corona-ray-5",
        "colorNumber": 3,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,325 140,260 160,260"
        }
      },
      {
        "id": "corona-ray-6",
        "colorNumber": 3,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,285 110,235 125,250"
        }
      },
      {
        "id": "corona-ray-7",
        "colorNumber": 3,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "25,200 90,210 90,190"
        }
      },
      {
        "id": "corona-ray-8",
        "colorNumber": 3,
        "label": [
          70,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,115 125,150 110,165"
        }
      },
      {
        "id": "solar-core-disk",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 60
        }
      },
      {
        "id": "inner-solar-core",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "flare-1",
        "colorNumber": 6,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "flare-2",
        "colorNumber": 6,
        "label": [
          190,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "flare-3",
        "colorNumber": 6,
        "label": [
          110,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "flare-4",
        "colorNumber": 6,
        "label": [
          190,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 3,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 3,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 3,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "radiance-dot-1",
        "colorNumber": 4,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 6
        }
      },
      {
        "id": "radiance-dot-2",
        "colorNumber": 4,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mandala-14",
    "name": "Solar Corona Wheel",
    "emoji": "🔆",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFD54F",
      "#FF6D00",
      "#FF1744",
      "#FFFFFF",
      "#00E5FF"
    ],
    "regions": [
      {
        "id": "sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "corona-flare-outer",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "corona-flame-mid",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 95
        }
      },
      {
        "id": "eclipse-shadow-disk",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 65
        }
      },
      {
        "id": "diamond-ring-flare",
        "colorNumber": 5,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 155,
          "r": 16
        }
      },
      {
        "id": "prominence-1",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 12
        }
      },
      {
        "id": "prominence-2",
        "colorNumber": 4,
        "label": [
          220,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "prominence-3",
        "colorNumber": 4,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 12
        }
      },
      {
        "id": "prominence-4",
        "colorNumber": 4,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "magnetic-loop-1",
        "colorNumber": 6,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "magnetic-loop-2",
        "colorNumber": 6,
        "label": [
          190,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 260,
          "r": 14
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 5,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 5,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 2,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "plasma-jet-1",
        "colorNumber": 3,
        "label": [
          60,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "plasma-jet-2",
        "colorNumber": 3,
        "label": [
          240,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "plasma-jet-3",
        "colorNumber": 3,
        "label": [
          60,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "plasma-jet-4",
        "colorNumber": 3,
        "label": [
          240,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "corona-core-glow",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "sun-glare",
        "colorNumber": 5,
        "label": [
          190,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 150,
          "r": 6
        }
      },
      {
        "id": "outer-orbit",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 115
        }
      }
    ]
  },
  {
    "id": "mandala-15",
    "name": "Tonatiuh Sun Calendar",
    "emoji": "🔱",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#FFD54F",
      "#D84315",
      "#00897B",
      "#FFFFFF",
      "#795548"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "calendar-dial-outer",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "calendar-glyph-track",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "inner-dial-ring",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "sun-trident-n",
        "colorNumber": 2,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 160,140 140,140"
        }
      },
      {
        "id": "sun-trident-s",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,320 160,260 140,260"
        }
      },
      {
        "id": "sun-trident-e",
        "colorNumber": 2,
        "label": [
          225,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "270,200 210,190 210,210"
        }
      },
      {
        "id": "sun-trident-w",
        "colorNumber": 2,
        "label": [
          75,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,200 90,190 90,210"
        }
      },
      {
        "id": "calendar-hub",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "sacred-sun-face",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "trident-orb-1",
        "colorNumber": 3,
        "label": [
          130,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "trident-orb-2",
        "colorNumber": 3,
        "label": [
          170,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "trident-orb-3",
        "colorNumber": 3,
        "label": [
          130,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 305,
          "r": 6
        }
      },
      {
        "id": "trident-orb-4",
        "colorNumber": 3,
        "label": [
          170,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 305,
          "r": 6
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 5,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 5,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 2,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "dial-marker-1",
        "colorNumber": 6,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "dial-marker-2",
        "colorNumber": 6,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "dial-marker-3",
        "colorNumber": 6,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "dial-marker-4",
        "colorNumber": 6,
        "label": [
          90,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 140,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "mandala-16",
    "name": "Cathedral Rose Window",
    "emoji": "🌹",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#D50000",
      "#0D47A1",
      "#FFD54F",
      "#4CAF50",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "stone-tracery-rim",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "lancet-ring-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 110
        }
      },
      {
        "id": "lancet-ring-mid",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 80
        }
      },
      {
        "id": "rose-petal-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 50
        }
      },
      {
        "id": "central-oculus-gold",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 22
        }
      },
      {
        "id": "oculus-center-gem",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "petal-foil-1",
        "colorNumber": 2,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 12
        }
      },
      {
        "id": "petal-foil-2",
        "colorNumber": 3,
        "label": [
          225,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 125,
          "r": 12
        }
      },
      {
        "id": "petal-foil-3",
        "colorNumber": 2,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "petal-foil-4",
        "colorNumber": 3,
        "label": [
          225,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "petal-foil-5",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 12
        }
      },
      {
        "id": "petal-foil-6",
        "colorNumber": 3,
        "label": [
          75,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "petal-foil-7",
        "colorNumber": 2,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "petal-foil-8",
        "colorNumber": 3,
        "label": [
          75,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 125,
          "r": 12
        }
      },
      {
        "id": "star-1",
        "colorNumber": 6,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 6,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 4,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "glass-shine-1",
        "colorNumber": 6,
        "label": [
          135,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 185,
          "r": 4
        }
      },
      {
        "id": "glass-shine-2",
        "colorNumber": 6,
        "label": [
          165,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 215,
          "r": 4
        }
      },
      {
        "id": "arch-top-crest",
        "colorNumber": 4,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 65,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "mandala-17",
    "name": "Notre Dame Rosette",
    "emoji": "⛪",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#1565C0",
      "#C2185B",
      "#FFD54F",
      "#00897B",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "stone-oculus-rim",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "trefoil-ring",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 110
        }
      },
      {
        "id": "lancet-spokes",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 80
        }
      },
      {
        "id": "madonna-medallion",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 45
        }
      },
      {
        "id": "madonna-gem-center",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "spoke-lancet-1",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-2",
        "colorNumber": 3,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-3",
        "colorNumber": 2,
        "label": [
          245,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-4",
        "colorNumber": 3,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-5",
        "colorNumber": 2,
        "label": [
          245,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-6",
        "colorNumber": 3,
        "label": [
          205,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-7",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-8",
        "colorNumber": 3,
        "label": [
          95,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-9",
        "colorNumber": 2,
        "label": [
          55,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-10",
        "colorNumber": 3,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-11",
        "colorNumber": 2,
        "label": [
          55,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "spoke-lancet-12",
        "colorNumber": 3,
        "label": [
          95,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 6,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 4,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "light-beam-l",
        "colorNumber": 6,
        "label": [
          80,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 80,
          "r": 15
        }
      },
      {
        "id": "light-beam-r",
        "colorNumber": 6,
        "label": [
          220,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 80,
          "r": 15
        }
      }
    ]
  },
  {
    "id": "mandala-18",
    "name": "Stained Glass Sunburst",
    "emoji": "🪟",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#FFD54F",
      "#00BCD4",
      "#E91E63",
      "#4CAF50",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "timber-arch-frame",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "sunburst-facet-1",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 175,150 125,150"
        }
      },
      {
        "id": "sunburst-facet-2",
        "colorNumber": 4,
        "label": [
          210,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,115 190,175 165,150"
        }
      },
      {
        "id": "sunburst-facet-3",
        "colorNumber": 5,
        "label": [
          230,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "270,200 190,225 190,175"
        }
      },
      {
        "id": "sunburst-facet-4",
        "colorNumber": 3,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,285 165,250 190,225"
        }
      },
      {
        "id": "sunburst-facet-5",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,320 125,250 175,250"
        }
      },
      {
        "id": "sunburst-facet-6",
        "colorNumber": 5,
        "label": [
          90,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,285 110,225 135,250"
        }
      },
      {
        "id": "sunburst-facet-7",
        "colorNumber": 3,
        "label": [
          70,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,200 110,175 110,225"
        }
      },
      {
        "id": "sunburst-facet-8",
        "colorNumber": 4,
        "label": [
          90,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,115 135,150 110,175"
        }
      },
      {
        "id": "center-sun-jewel",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "glass-core-spark",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "lead-came-joint-1",
        "colorNumber": 1,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-2",
        "colorNumber": 1,
        "label": [
          235,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-3",
        "colorNumber": 1,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-4",
        "colorNumber": 1,
        "label": [
          235,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 285,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-5",
        "colorNumber": 1,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-6",
        "colorNumber": 1,
        "label": [
          65,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 285,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-7",
        "colorNumber": 1,
        "label": [
          30,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "lead-came-joint-8",
        "colorNumber": 1,
        "label": [
          65,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "star-1",
        "colorNumber": 6,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 2,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-19",
    "name": "Gothic Tracery Rosette",
    "emoji": "⚜️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#FFD54F",
      "#78909C",
      "#D32F2F",
      "#ECEFF1",
      "#37474F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "stone-moulding-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "quatrefoil-ring",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "tracery-foil-n",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 35
        }
      },
      {
        "id": "tracery-foil-s",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 35
        }
      },
      {
        "id": "tracery-foil-e",
        "colorNumber": 4,
        "label": [
          210,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "tracery-foil-w",
        "colorNumber": 4,
        "label": [
          90,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "fleur-de-lis-center",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "fleur-crest-gem",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "cusp-point-1",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "cusp-point-2",
        "colorNumber": 5,
        "label": [
          190,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "cusp-point-3",
        "colorNumber": 5,
        "label": [
          110,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "cusp-point-4",
        "colorNumber": 5,
        "label": [
          190,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "finial-n",
        "colorNumber": 2,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 8
        }
      },
      {
        "id": "finial-s",
        "colorNumber": 2,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 330,
          "r": 8
        }
      },
      {
        "id": "finial-e",
        "colorNumber": 2,
        "label": [
          280,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "finial-w",
        "colorNumber": 2,
        "label": [
          20,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 5,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 5,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 2,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "relief-shadow",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mandala-20",
    "name": "Victorian Lace Rosette",
    "emoji": "🕸️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#ECEFF1",
      "#B0BEC5",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "scalloped-lace-border",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 125
        }
      },
      {
        "id": "spiderweb-tier-3",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 100
        }
      },
      {
        "id": "spiderweb-tier-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 70
        }
      },
      {
        "id": "spiderweb-tier-1",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "doily-medallion-core",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "scallop-1",
        "colorNumber": 5,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "scallop-2",
        "colorNumber": 5,
        "label": [
          230,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "scallop-3",
        "colorNumber": 5,
        "label": [
          270,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 175,
          "r": 10
        }
      },
      {
        "id": "scallop-4",
        "colorNumber": 5,
        "label": [
          255,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "scallop-5",
        "colorNumber": 5,
        "label": [
          185,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 315,
          "r": 10
        }
      },
      {
        "id": "scallop-6",
        "colorNumber": 5,
        "label": [
          115,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 315,
          "r": 10
        }
      },
      {
        "id": "scallop-7",
        "colorNumber": 5,
        "label": [
          45,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "scallop-8",
        "colorNumber": 5,
        "label": [
          30,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 175,
          "r": 10
        }
      },
      {
        "id": "scallop-9",
        "colorNumber": 5,
        "label": [
          70,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "lace-knot-1",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "lace-knot-2",
        "colorNumber": 4,
        "label": [
          200,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "lace-knot-3",
        "colorNumber": 4,
        "label": [
          220,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "lace-knot-4",
        "colorNumber": 4,
        "label": [
          200,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "lace-knot-5",
        "colorNumber": 4,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "lace-knot-6",
        "colorNumber": 4,
        "label": [
          100,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "lace-knot-7",
        "colorNumber": 4,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "lace-knot-8",
        "colorNumber": 4,
        "label": [
          100,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "star-1",
        "colorNumber": 5,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "mandala-21",
    "name": "Diamond Frost Crystal",
    "emoji": "💎",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A192F",
      "#00E5FF",
      "#80D8FF",
      "#FFFFFF",
      "#00B0FF",
      "#E1F5FE"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 120
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 95
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 60
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          245,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          198,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 282,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          103,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 103,
          "cy": 282,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          55,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          102,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 102,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          198,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          202,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 202,
          "cy": 230,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          98,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 98,
          "cy": 230,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          98,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 98,
          "cy": 170,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          202,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 202,
          "cy": 170,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-22",
    "name": "Arctic Ice Crystal",
    "emoji": "❄️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#29B6F6",
      "#E1F5FE",
      "#FFFFFF",
      "#81D4FA",
      "#01579B"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 124
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 99
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 63
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          249,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 249,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          220,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 270,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          150,
          299
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 299,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          80,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 270,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          51,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 51,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          80,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 130,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          150,
          101
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 101,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          220,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 130,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          208,
          224
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 208,
          "cy": 224,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          174,
          258
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 174,
          "cy": 258,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          126,
          258
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 126,
          "cy": 258,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          92,
          224
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 92,
          "cy": 224,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          92,
          176
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 92,
          "cy": 176,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          126,
          142
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 126,
          "cy": 142,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          174,
          142
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 174,
          "cy": 142,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          208,
          176
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 208,
          "cy": 176,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-23",
    "name": "Prism Ice Rosette",
    "emoji": "🧊",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#00E5FF",
      "#7C4DFF",
      "#FFFFFF",
      "#B388FF",
      "#80D8FF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 128
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 103
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 66
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          253,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 253,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          233,
          261
        ],
        "shape": {
          "kind": "circle",
          "cx": 233,
          "cy": 261,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          182,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 298,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          118,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 298,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          67,
          261
        ],
        "shape": {
          "kind": "circle",
          "cx": 67,
          "cy": 261,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          47,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 47,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          67,
          139
        ],
        "shape": {
          "kind": "circle",
          "cx": 67,
          "cy": 139,
          "r": 12
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          118,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 102,
          "r": 12
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          182,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 102,
          "r": 12
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          233,
          139
        ],
        "shape": {
          "kind": "circle",
          "cx": 233,
          "cy": 139,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          213,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 213,
          "cy": 220,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          189,
          253
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 189,
          "cy": 253,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          150,
          266
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 266,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          111,
          253
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 111,
          "cy": 253,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          87,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 87,
          "cy": 220,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          87,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 87,
          "cy": 180,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          111,
          147
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 111,
          "cy": 147,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          150,
          134
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 134,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          189,
          147
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 189,
          "cy": 147,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          213,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 213,
          "cy": 180,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-24",
    "name": "Stellar Dendrite Crystal",
    "emoji": "⭐",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#FFD54F",
      "#FF8F00",
      "#FFFFFF",
      "#00E5FF",
      "#FFB300"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 132
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 107
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 69
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          257,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 257,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          243,
          254
        ],
        "shape": {
          "kind": "circle",
          "cx": 243,
          "cy": 254,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          204,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 204,
          "cy": 293,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          150,
          307
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 307,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          97,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 97,
          "cy": 293,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          57,
          254
        ],
        "shape": {
          "kind": "circle",
          "cx": 57,
          "cy": 254,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          43,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 43,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          57,
          147
        ],
        "shape": {
          "kind": "circle",
          "cx": 57,
          "cy": 147,
          "r": 13
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          96,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 96,
          "cy": 107,
          "r": 13
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          150,
          93
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 93,
          "r": 13
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          204,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 204,
          "cy": 107,
          "r": 13
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          243,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 243,
          "cy": 146,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          217,
          218
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 217,
          "cy": 218,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          199,
          249
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 199,
          "cy": 249,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          168,
          267
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 168,
          "cy": 267,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          132,
          267
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 132,
          "cy": 267,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          101,
          249
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 101,
          "cy": 249,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          83,
          218
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 83,
          "cy": 218,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          83,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 83,
          "cy": 182,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          101,
          151
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 101,
          "cy": 151,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          132,
          133
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 132,
          "cy": 133,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          168,
          133
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 168,
          "cy": 133,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          199,
          151
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 199,
          "cy": 151,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          217,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 217,
          "cy": 182,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-25",
    "name": "Glacier Star Medallion",
    "emoji": "🏔️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#006064",
      "#00ACC1",
      "#E0F7FA",
      "#FFFFFF",
      "#80DEEA",
      "#00838F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 136
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 111
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 72
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          261,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 261,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          250,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 248,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          219,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 219,
          "cy": 287,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          175,
          308
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 308,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          125,
          308
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 308,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          81,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 81,
          "cy": 287,
          "r": 10
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          50,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 248,
          "r": 10
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          39,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 39,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          50,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 152,
          "r": 10
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          81,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 81,
          "cy": 113,
          "r": 10
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          125,
          92
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 92,
          "r": 10
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          175,
          92
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 92,
          "r": 10
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          219,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 219,
          "cy": 113,
          "r": 10
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          250,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 152,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          220,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 216,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          206,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 245,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          181,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 181,
          "cy": 265,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          150,
          272
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 272,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          119,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 119,
          "cy": 265,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          94,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 245,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          80,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 216,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          80,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 184,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          94,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 155,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          119,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 119,
          "cy": 135,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 128,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          181,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 181,
          "cy": 135,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          206,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 155,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          220,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 184,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-26",
    "name": "Marrakech Star Mosaic",
    "emoji": "🏮",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#BF360C",
      "#FF6F00",
      "#FFD54F",
      "#FFFFFF",
      "#D84315",
      "#3E2723"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 140
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 115
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          256,
          244
        ],
        "shape": {
          "kind": "circle",
          "cx": 256,
          "cy": 244,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          231,
          281
        ],
        "shape": {
          "kind": "circle",
          "cx": 231,
          "cy": 281,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          194,
          306
        ],
        "shape": {
          "kind": "circle",
          "cx": 194,
          "cy": 306,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 315,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          106,
          306
        ],
        "shape": {
          "kind": "circle",
          "cx": 106,
          "cy": 306,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          69,
          281
        ],
        "shape": {
          "kind": "circle",
          "cx": 69,
          "cy": 281,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          44,
          244
        ],
        "shape": {
          "kind": "circle",
          "cx": 44,
          "cy": 244,
          "r": 11
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          44,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 44,
          "cy": 156,
          "r": 11
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          69,
          119
        ],
        "shape": {
          "kind": "circle",
          "cx": 69,
          "cy": 119,
          "r": 11
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          106,
          94
        ],
        "shape": {
          "kind": "circle",
          "cx": 106,
          "cy": 94,
          "r": 11
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 11
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          194,
          94
        ],
        "shape": {
          "kind": "circle",
          "cx": 194,
          "cy": 94,
          "r": 11
        }
      },
      {
        "id": "out-node-14",
        "colorNumber": 4,
        "label": [
          231,
          119
        ],
        "shape": {
          "kind": "circle",
          "cx": 231,
          "cy": 119,
          "r": 11
        }
      },
      {
        "id": "out-node-15",
        "colorNumber": 5,
        "label": [
          256,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 256,
          "cy": 156,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          224,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 224,
          "cy": 215,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          212,
          242
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 242,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          192,
          262
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 262,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          165,
          274
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 274,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          135,
          274
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 274,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          108,
          262
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 262,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          88,
          242
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 242,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          76,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 76,
          "cy": 215,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          76,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 76,
          "cy": 185,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          88,
          158
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 158,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          108,
          138
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 138,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          135,
          126
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 126,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          165,
          126
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 126,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          192,
          138
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 138,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-14",
        "colorNumber": 5,
        "label": [
          212,
          158
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 158,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-15",
        "colorNumber": 3,
        "label": [
          224,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 224,
          "cy": 185,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-27",
    "name": "Fes Ceramic Mosaic",
    "emoji": "🏺",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#00897B",
      "#FFD54F",
      "#FFFFFF",
      "#00ACC1",
      "#1565C0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 144
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 119
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 78
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          269,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 269,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          210,
          303
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 303,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          91,
          303
        ],
        "shape": {
          "kind": "circle",
          "cx": 91,
          "cy": 303,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          31,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 31,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          90,
          97
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 97,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          210,
          97
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 97,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          218,
          239
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 239,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 278,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          82,
          239
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 239,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          82,
          161
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 161,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          150,
          122
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 122,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          218,
          161
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 161,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-28",
    "name": "Alhambra Courtyard Rosette",
    "emoji": "🕌",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#004D40",
      "#00897B",
      "#FFD54F",
      "#FFFFFF",
      "#D32F2F",
      "#E0F2F1"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 148
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 123
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 61
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          273,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 273,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          237,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 237,
          "cy": 287,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          150,
          323
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 323,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          63,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 63,
          "cy": 287,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          27,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 27,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          63,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 63,
          "cy": 113,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          150,
          77
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 77,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          237,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 237,
          "cy": 113,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          206,
          223
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 223,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          173,
          256
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 173,
          "cy": 256,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          127,
          256
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 127,
          "cy": 256,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          94,
          223
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 223,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          94,
          177
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 177,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          127,
          144
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 127,
          "cy": 144,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          173,
          144
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 173,
          "cy": 144,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          206,
          177
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 177,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-29",
    "name": "Isfahan Turquoise Mandala",
    "emoji": "🔮",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#00B4D8",
      "#90E0EF",
      "#FFD54F",
      "#FFFFFF",
      "#03045E"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 122
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 97
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 64
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          247,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 247,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          228,
          257
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 257,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          180,
          292
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 292,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          120,
          292
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 292,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          72,
          257
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 257,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          53,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 53,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          72,
          143
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 143,
          "r": 10
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          120,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 108,
          "r": 10
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          180,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 108,
          "r": 10
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          228,
          143
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 143,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          211,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 220,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          188,
          252
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 252,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          150,
          264
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 264,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          112,
          252
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 252,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          89,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 220,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          89,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 180,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          112,
          148
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 148,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          150,
          136
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 136,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          188,
          148
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 148,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          211,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 180,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-30",
    "name": "Dubai Gold Medallion",
    "emoji": "🪙",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FFD54F",
      "#FFC107",
      "#FFA000",
      "#FFFFFF",
      "#37474F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 126
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 101
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 67
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          251,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 251,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          237,
          251
        ],
        "shape": {
          "kind": "circle",
          "cx": 237,
          "cy": 251,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          201,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 201,
          "cy": 287,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          150,
          301
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 301,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          100,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 287,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          63,
          251
        ],
        "shape": {
          "kind": "circle",
          "cx": 63,
          "cy": 251,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          49,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 49,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          63,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 63,
          "cy": 150,
          "r": 11
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          99,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 99,
          "cy": 113,
          "r": 11
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          150,
          99
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 99,
          "r": 11
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          201,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 201,
          "cy": 113,
          "r": 11
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          237,
          149
        ],
        "shape": {
          "kind": "circle",
          "cx": 237,
          "cy": 149,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          215,
          217
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 217,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          197,
          247
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 197,
          "cy": 247,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          167,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 167,
          "cy": 265,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          133,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 133,
          "cy": 265,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          103,
          247
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 103,
          "cy": 247,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          85,
          217
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 217,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          85,
          183
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 183,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          103,
          153
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 103,
          "cy": 153,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          133,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 133,
          "cy": 135,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          167,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 167,
          "cy": 135,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          197,
          153
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 197,
          "cy": 153,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          215,
          183
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 183,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-31",
    "name": "Enlightened Lotus Wheel",
    "emoji": "☸️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#FF6F00",
      "#FFD54F",
      "#FFFFFF",
      "#795548",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 130
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 70
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          245,
          246
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 246,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          215,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 282,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          173,
          302
        ],
        "shape": {
          "kind": "circle",
          "cx": 173,
          "cy": 302,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          127,
          302
        ],
        "shape": {
          "kind": "circle",
          "cx": 127,
          "cy": 302,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          85,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 282,
          "r": 12
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          55,
          246
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 246,
          "r": 12
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          55,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 154,
          "r": 12
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          85,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 118,
          "r": 12
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          127,
          98
        ],
        "shape": {
          "kind": "circle",
          "cx": 127,
          "cy": 98,
          "r": 12
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          173,
          98
        ],
        "shape": {
          "kind": "circle",
          "cx": 173,
          "cy": 98,
          "r": 12
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          215,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 118,
          "r": 12
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          245,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 154,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          218,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 216,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          205,
          244
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 244,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          180,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 263,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          120,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 263,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          95,
          244
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 244,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          82,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 216,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          82,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 184,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          95,
          156
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 156,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          120,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 137,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 130,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          180,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 137,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          205,
          156
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 156,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          218,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 184,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-32",
    "name": "Cosmic Chakra Wheel",
    "emoji": "🧘",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#7B1FA2",
      "#00E5FF",
      "#76FF03",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 134
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 109
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 73
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          259,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 259,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          251,
          242
        ],
        "shape": {
          "kind": "circle",
          "cx": 251,
          "cy": 242,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          227,
          277
        ],
        "shape": {
          "kind": "circle",
          "cx": 227,
          "cy": 277,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          192,
          301
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 301,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          150,
          309
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 309,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          108,
          301
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 301,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          73,
          277
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 277,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          49,
          242
        ],
        "shape": {
          "kind": "circle",
          "cx": 49,
          "cy": 242,
          "r": 13
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          41,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 41,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          49,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 49,
          "cy": 158,
          "r": 13
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          73,
          123
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 123,
          "r": 13
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          108,
          99
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 99,
          "r": 13
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          150,
          91
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 91,
          "r": 13
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          192,
          99
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 99,
          "r": 13
        }
      },
      {
        "id": "out-node-14",
        "colorNumber": 4,
        "label": [
          227,
          123
        ],
        "shape": {
          "kind": "circle",
          "cx": 227,
          "cy": 123,
          "r": 13
        }
      },
      {
        "id": "out-node-15",
        "colorNumber": 5,
        "label": [
          251,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 251,
          "cy": 158,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          222,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 222,
          "cy": 214,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          211,
          241
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 241,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          191,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 191,
          "cy": 261,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          164,
          272
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 272,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          136,
          272
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 272,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          109,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 109,
          "cy": 261,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          89,
          241
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 241,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          78,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 78,
          "cy": 214,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          78,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 78,
          "cy": 186,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          89,
          159
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 159,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          109,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 109,
          "cy": 139,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          136,
          128
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 128,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          164,
          128
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 128,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          191,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 191,
          "cy": 139,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-14",
        "colorNumber": 5,
        "label": [
          211,
          159
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 159,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-15",
        "colorNumber": 3,
        "label": [
          222,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 222,
          "cy": 186,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-33",
    "name": "Infinite Bloom Mandala",
    "emoji": "💮",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#880E4F",
      "#F06292",
      "#F8BBD0",
      "#FFD54F",
      "#FFFFFF",
      "#4A148C"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 138
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 113
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 76
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          263,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 263,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          207,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 207,
          "cy": 298,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          94,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 94,
          "cy": 298,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          37,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 37,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          93,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 93,
          "cy": 102,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          207,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 207,
          "cy": 102,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          216,
          238
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 238,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          150,
          276
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 276,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          84,
          238
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 238,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          84,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 162,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          150,
          124
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 124,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          216,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 162,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-34",
    "name": "Zen Pond Rosette",
    "emoji": "🎋",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1B5E20",
      "#4CAF50",
      "#81C784",
      "#FFD54F",
      "#FFFFFF",
      "#004D40"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 142
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 117
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 79
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          267,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 267,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          233,
          283
        ],
        "shape": {
          "kind": "circle",
          "cx": 233,
          "cy": 283,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          150,
          317
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 317,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          67,
          283
        ],
        "shape": {
          "kind": "circle",
          "cx": 67,
          "cy": 283,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          33,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 33,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          67,
          117
        ],
        "shape": {
          "kind": "circle",
          "cx": 67,
          "cy": 117,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          150,
          83
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 83,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          233,
          117
        ],
        "shape": {
          "kind": "circle",
          "cx": 233,
          "cy": 117,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          223,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 223,
          "cy": 230,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          180,
          273
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 273,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          120,
          273
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 273,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          77,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 77,
          "cy": 230,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          77,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 77,
          "cy": 170,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          120,
          127
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 127,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          180,
          127
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 127,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          223,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 223,
          "cy": 170,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-35",
    "name": "Sacred Harmony Medallion",
    "emoji": "🕊️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A192F",
      "#00BCD4",
      "#B2EBF2",
      "#FFFFFF",
      "#FFD54F",
      "#1565C0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 146
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 121
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 62
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          271,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 271,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          248,
          271
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 271,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          187,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 187,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          113,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 113,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          52,
          271
        ],
        "shape": {
          "kind": "circle",
          "cx": 52,
          "cy": 271,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          29,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 29,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          52,
          129
        ],
        "shape": {
          "kind": "circle",
          "cx": 52,
          "cy": 129,
          "r": 12
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          113,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 113,
          "cy": 85,
          "r": 12
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          187,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 187,
          "cy": 85,
          "r": 12
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          248,
          129
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 129,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          209,
          219
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 219,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          186,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 186,
          "cy": 250,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          150,
          262
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 262,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          114,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 114,
          "cy": 250,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          91,
          219
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 219,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          91,
          181
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 181,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          114,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 114,
          "cy": 150,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          150,
          138
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 138,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          186,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 186,
          "cy": 150,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          209,
          181
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 181,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-36",
    "name": "Mayan Cosmic Disk",
    "emoji": "🗿",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#00897B",
      "#FFD54F",
      "#D84315",
      "#FFFFFF",
      "#4E342E"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 120
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 95
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 65
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          245,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          232,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 232,
          "cy": 248,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          198,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 282,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 295,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          103,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 103,
          "cy": 282,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          68,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 68,
          "cy": 248,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          55,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          68,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 68,
          "cy": 153,
          "r": 13
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          102,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 102,
          "cy": 118,
          "r": 13
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 13
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          198,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 118,
          "r": 13
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          232,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 232,
          "cy": 152,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          213,
          217
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 213,
          "cy": 217,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          196,
          246
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 196,
          "cy": 246,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          167,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 167,
          "cy": 263,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          133,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 133,
          "cy": 263,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          104,
          246
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 104,
          "cy": 246,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          87,
          217
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 87,
          "cy": 217,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          87,
          183
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 87,
          "cy": 183,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          104,
          154
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 104,
          "cy": 154,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          133,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 133,
          "cy": 137,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          167,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 167,
          "cy": 137,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          196,
          154
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 196,
          "cy": 154,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          213,
          183
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 213,
          "cy": 183,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-37",
    "name": "Vedic Sun Chariot Wheel",
    "emoji": "🛞",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FF8F00",
      "#FFD54F",
      "#D32F2F",
      "#FFFFFF",
      "#FF6F00"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 124
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 99
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 68
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          249,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 249,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          239,
          243
        ],
        "shape": {
          "kind": "circle",
          "cx": 239,
          "cy": 243,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          212,
          277
        ],
        "shape": {
          "kind": "circle",
          "cx": 212,
          "cy": 277,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          172,
          297
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 297,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          128,
          297
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 297,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          88,
          277
        ],
        "shape": {
          "kind": "circle",
          "cx": 88,
          "cy": 277,
          "r": 10
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          61,
          243
        ],
        "shape": {
          "kind": "circle",
          "cx": 61,
          "cy": 243,
          "r": 10
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          51,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 51,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          61,
          157
        ],
        "shape": {
          "kind": "circle",
          "cx": 61,
          "cy": 157,
          "r": 10
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          88,
          123
        ],
        "shape": {
          "kind": "circle",
          "cx": 88,
          "cy": 123,
          "r": 10
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          128,
          103
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 103,
          "r": 10
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          172,
          103
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 103,
          "r": 10
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          212,
          123
        ],
        "shape": {
          "kind": "circle",
          "cx": 212,
          "cy": 123,
          "r": 10
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          239,
          157
        ],
        "shape": {
          "kind": "circle",
          "cx": 239,
          "cy": 157,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          216,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 215,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          203,
          242
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 203,
          "cy": 242,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          180,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 261,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          150,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 268,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          120,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 261,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          97,
          242
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 97,
          "cy": 242,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          84,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 215,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          84,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 185,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          97,
          158
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 97,
          "cy": 158,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          120,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 139,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          150,
          132
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 132,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          180,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 139,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          203,
          158
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 203,
          "cy": 158,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          216,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 185,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-38",
    "name": "Apollo Solar Radiance",
    "emoji": "🪐",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFD54F",
      "#FF6D00",
      "#00E5FF",
      "#FFFFFF",
      "#E040FB"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 128
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 103
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 71
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          253,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 253,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          245,
          239
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 239,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          223,
          273
        ],
        "shape": {
          "kind": "circle",
          "cx": 223,
          "cy": 273,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          189,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 189,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          150,
          303
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 303,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          111,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 111,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          77,
          273
        ],
        "shape": {
          "kind": "circle",
          "cx": 77,
          "cy": 273,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          55,
          239
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 239,
          "r": 11
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          47,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 47,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          55,
          161
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 161,
          "r": 11
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          77,
          127
        ],
        "shape": {
          "kind": "circle",
          "cx": 77,
          "cy": 127,
          "r": 11
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          111,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 111,
          "cy": 105,
          "r": 11
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          150,
          97
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 97,
          "r": 11
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          189,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 189,
          "cy": 105,
          "r": 11
        }
      },
      {
        "id": "out-node-14",
        "colorNumber": 4,
        "label": [
          223,
          127
        ],
        "shape": {
          "kind": "circle",
          "cx": 223,
          "cy": 127,
          "r": 11
        }
      },
      {
        "id": "out-node-15",
        "colorNumber": 5,
        "label": [
          245,
          161
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 161,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          220,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 214,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          209,
          239
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 239,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          189,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 189,
          "cy": 259,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          164,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 270,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          136,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 270,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          111,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 111,
          "cy": 259,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          91,
          239
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 239,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          80,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 214,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          80,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 186,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          91,
          161
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 161,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          111,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 111,
          "cy": 141,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          136,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 130,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          164,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 130,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          189,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 189,
          "cy": 141,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-14",
        "colorNumber": 5,
        "label": [
          209,
          161
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 161,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-15",
        "colorNumber": 3,
        "label": [
          220,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 186,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-39",
    "name": "Equinox Solar Compass",
    "emoji": "🧭",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#00BCD4",
      "#FFD54F",
      "#D32F2F",
      "#FFFFFF",
      "#37474F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 132
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 107
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 74
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          257,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 257,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          204,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 204,
          "cy": 293,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          97,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 97,
          "cy": 293,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          43,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 43,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          96,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 96,
          "cy": 107,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          204,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 204,
          "cy": 107,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          214,
          237
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 214,
          "cy": 237,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          150,
          274
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 274,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          86,
          237
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 86,
          "cy": 237,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          86,
          163
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 86,
          "cy": 163,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          150,
          126
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 126,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          214,
          163
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 214,
          "cy": 163,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-40",
    "name": "Zodiac Celestial Dial",
    "emoji": "🌌",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0B0C10",
      "#1F2833",
      "#66FCF1",
      "#45A29E",
      "#FFFFFF",
      "#C5C6C7"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 136
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 111
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 77
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          261,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 261,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          228,
          278
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 278,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          150,
          311
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 311,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          72,
          278
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 278,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          39,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 39,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          72,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 122,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          150,
          89
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 89,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          228,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 122,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          221,
          229
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 221,
          "cy": 229,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          179,
          271
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 271,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          121,
          271
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 271,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          79,
          229
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 79,
          "cy": 229,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          79,
          171
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 79,
          "cy": 171,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          121,
          129
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 129,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          179,
          129
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 129,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          221,
          171
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 221,
          "cy": 171,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-41",
    "name": "Chartres Stained Rosette",
    "emoji": "🕯️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#D50000",
      "#0D47A1",
      "#FFD54F",
      "#FFFFFF",
      "#4CAF50"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 140
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 115
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 60
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          243,
          268
        ],
        "shape": {
          "kind": "circle",
          "cx": 243,
          "cy": 268,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          186,
          309
        ],
        "shape": {
          "kind": "circle",
          "cx": 186,
          "cy": 309,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          114,
          309
        ],
        "shape": {
          "kind": "circle",
          "cx": 114,
          "cy": 309,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          57,
          268
        ],
        "shape": {
          "kind": "circle",
          "cx": 57,
          "cy": 268,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          57,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 57,
          "cy": 132,
          "r": 10
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          114,
          91
        ],
        "shape": {
          "kind": "circle",
          "cx": 114,
          "cy": 91,
          "r": 10
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          186,
          91
        ],
        "shape": {
          "kind": "circle",
          "cx": 186,
          "cy": 91,
          "r": 10
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          243,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 243,
          "cy": 132,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          207,
          219
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 207,
          "cy": 219,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          185,
          249
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 249,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          115,
          249
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 249,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          93,
          219
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 93,
          "cy": 219,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          93,
          181
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 93,
          "cy": 181,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          115,
          151
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 151,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          185,
          151
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 151,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          207,
          181
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 207,
          "cy": 181,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-42",
    "name": "Sainte-Chapelle Kaleido",
    "emoji": "🎨",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#C2185B",
      "#FFD54F",
      "#00897B",
      "#FFFFFF",
      "#1565C0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 144
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 119
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 63
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          269,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 269,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          253,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 253,
          "cy": 260,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          210,
          303
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 303,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          150,
          319
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 319,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          91,
          303
        ],
        "shape": {
          "kind": "circle",
          "cx": 91,
          "cy": 303,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          47,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 47,
          "cy": 260,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          31,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 31,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          47,
          141
        ],
        "shape": {
          "kind": "circle",
          "cx": 47,
          "cy": 141,
          "r": 11
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          90,
          97
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 97,
          "r": 11
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          150,
          81
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 81,
          "r": 11
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          210,
          97
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 97,
          "r": 11
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          253,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 253,
          "cy": 140,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          211,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 216,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          195,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 245,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          166,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 166,
          "cy": 261,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          134,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 134,
          "cy": 261,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          105,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 245,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          89,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 216,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          89,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 89,
          "cy": 184,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          105,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 155,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          134,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 134,
          "cy": 139,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          166,
          139
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 166,
          "cy": 139,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 155,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          211,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 211,
          "cy": 184,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-43",
    "name": "Gothic Prism Window",
    "emoji": "🌈",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#E91E63",
      "#00E5FF",
      "#FFEB3B",
      "#76FF03",
      "#9C27B0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 148
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 123
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 66
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          273,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 273,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          261,
          253
        ],
        "shape": {
          "kind": "circle",
          "cx": 261,
          "cy": 253,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          227,
          296
        ],
        "shape": {
          "kind": "circle",
          "cx": 227,
          "cy": 296,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          177,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 177,
          "cy": 320,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          123,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 123,
          "cy": 320,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          73,
          296
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 296,
          "r": 12
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          39,
          253
        ],
        "shape": {
          "kind": "circle",
          "cx": 39,
          "cy": 253,
          "r": 12
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          27,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 27,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          39,
          147
        ],
        "shape": {
          "kind": "circle",
          "cx": 39,
          "cy": 147,
          "r": 12
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          73,
          104
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 104,
          "r": 12
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          123,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 123,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          177,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 177,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          227,
          104
        ],
        "shape": {
          "kind": "circle",
          "cx": 227,
          "cy": 104,
          "r": 12
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          261,
          147
        ],
        "shape": {
          "kind": "circle",
          "cx": 261,
          "cy": 147,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          214,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 214,
          "cy": 215,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          202,
          241
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 202,
          "cy": 241,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          179,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 259,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          150,
          266
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 266,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          121,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 259,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          98,
          241
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 98,
          "cy": 241,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          86,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 86,
          "cy": 215,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          86,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 86,
          "cy": 185,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          98,
          159
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 98,
          "cy": 159,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          121,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 141,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          150,
          134
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 134,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          179,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 141,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          202,
          159
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 202,
          "cy": 159,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          214,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 214,
          "cy": 185,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-44",
    "name": "Basilica Floral Tracery",
    "emoji": "🏰",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#FFD54F",
      "#78909C",
      "#D32F2F",
      "#FFFFFF",
      "#37474F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 122
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 97
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 69
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          247,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 247,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          240,
          237
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 237,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          219,
          269
        ],
        "shape": {
          "kind": "circle",
          "cx": 219,
          "cy": 269,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          187,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 187,
          "cy": 290,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          150,
          297
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 297,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          113,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 113,
          "cy": 290,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          81,
          269
        ],
        "shape": {
          "kind": "circle",
          "cx": 81,
          "cy": 269,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          60,
          237
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 237,
          "r": 13
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          53,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 53,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          60,
          163
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 163,
          "r": 13
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          81,
          131
        ],
        "shape": {
          "kind": "circle",
          "cx": 81,
          "cy": 131,
          "r": 13
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          113,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 113,
          "cy": 110,
          "r": 13
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          150,
          103
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 103,
          "r": 13
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          187,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 187,
          "cy": 110,
          "r": 13
        }
      },
      {
        "id": "out-node-14",
        "colorNumber": 4,
        "label": [
          219,
          131
        ],
        "shape": {
          "kind": "circle",
          "cx": 219,
          "cy": 131,
          "r": 13
        }
      },
      {
        "id": "out-node-15",
        "colorNumber": 5,
        "label": [
          240,
          163
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 163,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          218,
          213
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 213,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          207,
          238
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 207,
          "cy": 238,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          188,
          257
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 257,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          163,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 163,
          "cy": 268,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          137,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 137,
          "cy": 268,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          112,
          257
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 257,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          93,
          238
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 93,
          "cy": 238,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          82,
          213
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 213,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          82,
          187
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 187,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          93,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 93,
          "cy": 162,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          112,
          143
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 143,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          137,
          132
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 137,
          "cy": 132,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          163,
          132
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 163,
          "cy": 132,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          188,
          143
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 143,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-14",
        "colorNumber": 5,
        "label": [
          207,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 207,
          "cy": 162,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-15",
        "colorNumber": 3,
        "label": [
          218,
          187
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 187,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-45",
    "name": "Baroque Filigree Rosette",
    "emoji": "🪡",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFD54F",
      "#FFA000",
      "#ECEFF1",
      "#FFFFFF",
      "#7B1FA2"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 126
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 101
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 72
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          251,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 251,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          201,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 201,
          "cy": 287,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          100,
          287
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 287,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          49,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 49,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          99,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 99,
          "cy": 113,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          201,
          113
        ],
        "shape": {
          "kind": "circle",
          "cx": 201,
          "cy": 113,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          212,
          236
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 236,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          150,
          272
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 272,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          88,
          236
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 236,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          88,
          164
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 164,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 128,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          212,
          164
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 164,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-46",
    "name": "Crystalline Snowflake",
    "emoji": "🌨️",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A192F",
      "#00E5FF",
      "#80D8FF",
      "#FFFFFF",
      "#00B0FF",
      "#E1F5FE"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 130
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 105
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 75
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          224,
          274
        ],
        "shape": {
          "kind": "circle",
          "cx": 224,
          "cy": 274,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          76,
          274
        ],
        "shape": {
          "kind": "circle",
          "cx": 76,
          "cy": 274,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          76,
          126
        ],
        "shape": {
          "kind": "circle",
          "cx": 76,
          "cy": 126,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          224,
          126
        ],
        "shape": {
          "kind": "circle",
          "cx": 224,
          "cy": 126,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          219,
          229
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 219,
          "cy": 229,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          179,
          269
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 269,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          121,
          269
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 269,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          81,
          229
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 81,
          "cy": 229,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          81,
          171
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 81,
          "cy": 171,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          121,
          131
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 121,
          "cy": 131,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          179,
          131
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 179,
          "cy": 131,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          219,
          171
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 219,
          "cy": 171,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-47",
    "name": "Polar Ice Blossom",
    "emoji": "💧",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#29B6F6",
      "#E1F5FE",
      "#FFFFFF",
      "#81D4FA",
      "#01579B"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 134
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 109
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 78
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          259,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 259,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          238,
          264
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 264,
          "r": 12
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          184,
          304
        ],
        "shape": {
          "kind": "circle",
          "cx": 184,
          "cy": 304,
          "r": 12
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          116,
          304
        ],
        "shape": {
          "kind": "circle",
          "cx": 116,
          "cy": 304,
          "r": 12
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          62,
          264
        ],
        "shape": {
          "kind": "circle",
          "cx": 62,
          "cy": 264,
          "r": 12
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          41,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 41,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          62,
          136
        ],
        "shape": {
          "kind": "circle",
          "cx": 62,
          "cy": 136,
          "r": 12
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          116,
          96
        ],
        "shape": {
          "kind": "circle",
          "cx": 116,
          "cy": 96,
          "r": 12
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          184,
          96
        ],
        "shape": {
          "kind": "circle",
          "cx": 184,
          "cy": 96,
          "r": 12
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          238,
          136
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 136,
          "r": 12
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          224,
          224
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 224,
          "cy": 224,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          196,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 196,
          "cy": 263,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 278,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          104,
          263
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 104,
          "cy": 263,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          76,
          224
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 76,
          "cy": 224,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          76,
          176
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 76,
          "cy": 176,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          104,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 104,
          "cy": 137,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          150,
          122
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 122,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          196,
          137
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 196,
          "cy": 137,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          224,
          176
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 224,
          "cy": 176,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-48",
    "name": "Kaleidoscopic Ice Star",
    "emoji": "🎇",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#00E5FF",
      "#7C4DFF",
      "#FFFFFF",
      "#B388FF",
      "#80D8FF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 138
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 113
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 61
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 40
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          263,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 263,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          248,
          257
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 257,
          "r": 13
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          207,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 207,
          "cy": 298,
          "r": 13
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          150,
          313
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 313,
          "r": 13
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          94,
          298
        ],
        "shape": {
          "kind": "circle",
          "cx": 94,
          "cy": 298,
          "r": 13
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          52,
          257
        ],
        "shape": {
          "kind": "circle",
          "cx": 52,
          "cy": 257,
          "r": 13
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          37,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 37,
          "cy": 200,
          "r": 13
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          52,
          144
        ],
        "shape": {
          "kind": "circle",
          "cx": 52,
          "cy": 144,
          "r": 13
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          93,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 93,
          "cy": 102,
          "r": 13
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          150,
          87
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 87,
          "r": 13
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          207,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 207,
          "cy": 102,
          "r": 13
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          248,
          143
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 143,
          "r": 13
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          209,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 216,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          193,
          243
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 193,
          "cy": 243,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          166,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 166,
          "cy": 259,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          134,
          259
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 134,
          "cy": 259,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          107,
          243
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 107,
          "cy": 243,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          91,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 216,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          91,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 91,
          "cy": 184,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          107,
          157
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 107,
          "cy": 157,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          134,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 134,
          "cy": 141,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          166,
          141
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 166,
          "cy": 141,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          193,
          157
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 193,
          "cy": 157,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          209,
          184
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 209,
          "cy": 184,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-49",
    "name": "Hexagonal Frost Mandala",
    "emoji": "💫",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#FFD54F",
      "#FF8F00",
      "#FFFFFF",
      "#00E5FF",
      "#FFB300"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 142
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 117
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 64
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          267,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 267,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          255,
          251
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 251,
          "r": 10
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          223,
          291
        ],
        "shape": {
          "kind": "circle",
          "cx": 223,
          "cy": 291,
          "r": 10
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          176,
          314
        ],
        "shape": {
          "kind": "circle",
          "cx": 176,
          "cy": 314,
          "r": 10
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          124,
          314
        ],
        "shape": {
          "kind": "circle",
          "cx": 124,
          "cy": 314,
          "r": 10
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          77,
          291
        ],
        "shape": {
          "kind": "circle",
          "cx": 77,
          "cy": 291,
          "r": 10
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          45,
          251
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 251,
          "r": 10
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          33,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 33,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          45,
          149
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 149,
          "r": 10
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          77,
          109
        ],
        "shape": {
          "kind": "circle",
          "cx": 77,
          "cy": 109,
          "r": 10
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          124,
          86
        ],
        "shape": {
          "kind": "circle",
          "cx": 124,
          "cy": 86,
          "r": 10
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          176,
          86
        ],
        "shape": {
          "kind": "circle",
          "cx": 176,
          "cy": 86,
          "r": 10
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          223,
          109
        ],
        "shape": {
          "kind": "circle",
          "cx": 223,
          "cy": 109,
          "r": 10
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          255,
          149
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 149,
          "r": 10
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          212,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 214,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          200,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 240,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          178,
          258
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 258,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          150,
          264
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 264,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          122,
          258
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 258,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 240,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          88,
          214
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 214,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          88,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 186,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          100,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 160,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          122,
          142
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 142,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          150,
          136
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 136,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          178,
          142
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 142,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          200,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 160,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          212,
          186
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 186,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mandala-50",
    "name": "Aurora Glacial Medallion",
    "emoji": "🎆",
    "category": "mandalas",
    "viewBox": "0 0 300 400",
    "colors": [
      "#004D40",
      "#00E5FF",
      "#76FF03",
      "#E040FB",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mandala-outer-halo",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 146
        }
      },
      {
        "id": "mandala-track-outer",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 121
        }
      },
      {
        "id": "mandala-track-mid",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 67
        }
      },
      {
        "id": "mandala-core-disc",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 30
        }
      },
      {
        "id": "mandala-bindu-gem",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "out-node-0",
        "colorNumber": 2,
        "label": [
          271,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 271,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-1",
        "colorNumber": 3,
        "label": [
          262,
          246
        ],
        "shape": {
          "kind": "circle",
          "cx": 262,
          "cy": 246,
          "r": 11
        }
      },
      {
        "id": "out-node-2",
        "colorNumber": 4,
        "label": [
          236,
          286
        ],
        "shape": {
          "kind": "circle",
          "cx": 236,
          "cy": 286,
          "r": 11
        }
      },
      {
        "id": "out-node-3",
        "colorNumber": 5,
        "label": [
          196,
          312
        ],
        "shape": {
          "kind": "circle",
          "cx": 196,
          "cy": 312,
          "r": 11
        }
      },
      {
        "id": "out-node-4",
        "colorNumber": 2,
        "label": [
          150,
          321
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 321,
          "r": 11
        }
      },
      {
        "id": "out-node-5",
        "colorNumber": 3,
        "label": [
          104,
          312
        ],
        "shape": {
          "kind": "circle",
          "cx": 104,
          "cy": 312,
          "r": 11
        }
      },
      {
        "id": "out-node-6",
        "colorNumber": 4,
        "label": [
          64,
          286
        ],
        "shape": {
          "kind": "circle",
          "cx": 64,
          "cy": 286,
          "r": 11
        }
      },
      {
        "id": "out-node-7",
        "colorNumber": 5,
        "label": [
          38,
          246
        ],
        "shape": {
          "kind": "circle",
          "cx": 38,
          "cy": 246,
          "r": 11
        }
      },
      {
        "id": "out-node-8",
        "colorNumber": 2,
        "label": [
          29,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 29,
          "cy": 200,
          "r": 11
        }
      },
      {
        "id": "out-node-9",
        "colorNumber": 3,
        "label": [
          38,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 38,
          "cy": 154,
          "r": 11
        }
      },
      {
        "id": "out-node-10",
        "colorNumber": 4,
        "label": [
          64,
          114
        ],
        "shape": {
          "kind": "circle",
          "cx": 64,
          "cy": 114,
          "r": 11
        }
      },
      {
        "id": "out-node-11",
        "colorNumber": 5,
        "label": [
          104,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 104,
          "cy": 88,
          "r": 11
        }
      },
      {
        "id": "out-node-12",
        "colorNumber": 2,
        "label": [
          150,
          79
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 79,
          "r": 11
        }
      },
      {
        "id": "out-node-13",
        "colorNumber": 3,
        "label": [
          196,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 196,
          "cy": 88,
          "r": 11
        }
      },
      {
        "id": "out-node-14",
        "colorNumber": 4,
        "label": [
          236,
          114
        ],
        "shape": {
          "kind": "circle",
          "cx": 236,
          "cy": 114,
          "r": 11
        }
      },
      {
        "id": "out-node-15",
        "colorNumber": 5,
        "label": [
          262,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 262,
          "cy": 154,
          "r": 11
        }
      },
      {
        "id": "mid-petal-0",
        "colorNumber": 3,
        "label": [
          216,
          213
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 213,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-1",
        "colorNumber": 4,
        "label": [
          206,
          237
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 237,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-2",
        "colorNumber": 5,
        "label": [
          187,
          256
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 187,
          "cy": 256,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-3",
        "colorNumber": 3,
        "label": [
          163,
          266
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 163,
          "cy": 266,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-4",
        "colorNumber": 4,
        "label": [
          137,
          266
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 137,
          "cy": 266,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-5",
        "colorNumber": 5,
        "label": [
          113,
          256
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 113,
          "cy": 256,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-6",
        "colorNumber": 3,
        "label": [
          94,
          237
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 237,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-7",
        "colorNumber": 4,
        "label": [
          84,
          213
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 213,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-8",
        "colorNumber": 5,
        "label": [
          84,
          187
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 84,
          "cy": 187,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-9",
        "colorNumber": 3,
        "label": [
          94,
          163
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 94,
          "cy": 163,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-10",
        "colorNumber": 4,
        "label": [
          113,
          144
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 113,
          "cy": 144,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-11",
        "colorNumber": 5,
        "label": [
          137,
          134
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 137,
          "cy": 134,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-12",
        "colorNumber": 3,
        "label": [
          163,
          134
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 163,
          "cy": 134,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-13",
        "colorNumber": 4,
        "label": [
          187,
          144
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 187,
          "cy": 144,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-14",
        "colorNumber": 5,
        "label": [
          206,
          163
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 206,
          "cy": 163,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "mid-petal-15",
        "colorNumber": 3,
        "label": [
          216,
          187
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 216,
          "cy": 187,
          "rx": 11,
          "ry": 17
        }
      },
      {
        "id": "corner-spark-0",
        "colorNumber": 1,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-1",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "corner-spark-2",
        "colorNumber": 3,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-3",
        "colorNumber": 4,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "corner-spark-4",
        "colorNumber": 5,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-5",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "corner-spark-6",
        "colorNumber": 1,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 355,
          "r": 5
        }
      },
      {
        "id": "corner-spark-7",
        "colorNumber": 2,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 355,
          "r": 5
        }
      }
    ]
  }
];
