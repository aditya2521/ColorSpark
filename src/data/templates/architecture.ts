import { ImageTemplate } from '../../types';

// Category: architecture / places (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)
export const ARCHITECTURE_TEMPLATES: ImageTemplate[] = [
  {
    "id": "simple-house",
    "name": "Cozy Cottage House",
    "emoji": "🏠",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#EF4444",
      "#B91C1C",
      "#FFFBEB",
      "#F59E0B",
      "#78350F",
      "#10B981",
      "#059669",
      "#FFFFFF"
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
        "id": "lawn-garden",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "house-wall",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 180,
          "w": 170,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "roof-main",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,190 150,85 260,190"
        }
      },
      {
        "id": "roof-fascia",
        "colorNumber": 3,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,190 150,95 255,190 260,195 150,105 40,195"
        }
      },
      {
        "id": "chimney",
        "colorNumber": 3,
        "label": [
          205,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 70,
          "w": 20,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "smoke-1",
        "colorNumber": 9,
        "label": [
          205,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "smoke-2",
        "colorNumber": 9,
        "label": [
          215,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 35,
          "r": 12
        }
      },
      {
        "id": "door-wood",
        "colorNumber": 6,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 245,
          "w": 40,
          "h": 85,
          "rx": 3
        }
      },
      {
        "id": "doorknob",
        "colorNumber": 5,
        "label": [
          162,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 290,
          "r": 4
        }
      },
      {
        "id": "window-l-frame",
        "colorNumber": 6,
        "label": [
          95,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 215,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "window-l-glass",
        "colorNumber": 1,
        "label": [
          95,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 84,
          "y": 219,
          "w": 22,
          "h": 27
        }
      },
      {
        "id": "window-r-frame",
        "colorNumber": 6,
        "label": [
          205,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 215,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "window-r-glass",
        "colorNumber": 1,
        "label": [
          205,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 194,
          "y": 219,
          "w": 22,
          "h": 27
        }
      },
      {
        "id": "attic-window-frame",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 16
        }
      },
      {
        "id": "attic-window-glass",
        "colorNumber": 1,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 12
        }
      },
      {
        "id": "cobblestone-path",
        "colorNumber": 5,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,330 L 110,380 L 190,380 L 170,330 Z"
        }
      },
      {
        "id": "garden-bush-l",
        "colorNumber": 8,
        "label": [
          55,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "garden-bush-r",
        "colorNumber": 8,
        "label": [
          245,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "flower-1",
        "colorNumber": 5,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "flower-2",
        "colorNumber": 5,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 9,
        "label": [
          140,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          260,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 55,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "castle",
    "name": "Medieval Castle",
    "emoji": "🏰",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#94A3B8",
      "#64748B",
      "#475569",
      "#DC2626",
      "#F59E0B",
      "#FFFFFF",
      "#15803D",
      "#3B82F6"
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
        "id": "hill",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "keep-main",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 185,
          "w": 100,
          "h": 145,
          "rx": 3
        }
      },
      {
        "id": "gate-arch",
        "colorNumber": 4,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,330 L 130,270 C 130,250 170,250 170,270 L 170,330 Z"
        }
      },
      {
        "id": "center-spire",
        "colorNumber": 5,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,185 185,185 150,55"
        }
      },
      {
        "id": "flag-center",
        "colorNumber": 5,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,30 175,40 150,50"
        }
      },
      {
        "id": "tower-l",
        "colorNumber": 3,
        "label": [
          65,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 160,
          "w": 50,
          "h": 170,
          "rx": 3
        }
      },
      {
        "id": "roof-l",
        "colorNumber": 5,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,160 95,160 65,65"
        }
      },
      {
        "id": "flag-l",
        "colorNumber": 5,
        "label": [
          65,
          55
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,40 90,50 65,60"
        }
      },
      {
        "id": "window-l",
        "colorNumber": 9,
        "label": [
          65,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "tower-r",
        "colorNumber": 3,
        "label": [
          235,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 160,
          "w": 50,
          "h": 170,
          "rx": 3
        }
      },
      {
        "id": "roof-r",
        "colorNumber": 5,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "205,160 265,160 235,65"
        }
      },
      {
        "id": "flag-r",
        "colorNumber": 5,
        "label": [
          235,
          55
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,40 260,50 235,60"
        }
      },
      {
        "id": "window-r",
        "colorNumber": 9,
        "label": [
          235,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "crenel-1",
        "colorNumber": 4,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 170,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "crenel-2",
        "colorNumber": 4,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 170,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "crenel-3",
        "colorNumber": 4,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 170,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "rose-window",
        "colorNumber": 6,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 14
        }
      },
      {
        "id": "rose-core",
        "colorNumber": 9,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 6
        }
      },
      {
        "id": "moat-spark-1",
        "colorNumber": 9,
        "label": [
          90,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 360,
          "r": 7
        }
      },
      {
        "id": "moat-spark-2",
        "colorNumber": 9,
        "label": [
          210,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 360,
          "r": 7
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "eiffel",
    "name": "Eiffel Tower",
    "emoji": "🗼",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#78350F",
      "#92400E",
      "#B45309",
      "#D97706",
      "#F59E0B",
      "#FBBF24",
      "#15803D",
      "#FFFFFF"
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
        "id": "champ-de-mars",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "base-arch",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,340 C 95,275 205,275 235,340 L 255,340 C 235,245 65,245 45,340 Z"
        }
      },
      {
        "id": "leg-left",
        "colorNumber": 2,
        "label": [
          75,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,340 75,340 105,260 85,260"
        }
      },
      {
        "id": "leg-right",
        "colorNumber": 2,
        "label": [
          225,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,340 225,340 195,260 215,260"
        }
      },
      {
        "id": "tier-1-deck",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 248,
          "w": 140,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "mid-tower",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,248 115,160 185,160 205,248"
        }
      },
      {
        "id": "tier-2-deck",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 150,
          "w": 80,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "upper-spire",
        "colorNumber": 2,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,150 142,45 158,45 175,150"
        }
      },
      {
        "id": "top-dome",
        "colorNumber": 5,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 35,
          "w": 12,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "spire-beacon",
        "colorNumber": 6,
        "label": [
          150,
          25
        ],
        "shape": {
          "kind": "polygon",
          "points": "148,35 150,15 152,35"
        }
      },
      {
        "id": "beacon-light",
        "colorNumber": 7,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 20,
          "r": 6
        }
      },
      {
        "id": "tree-l1",
        "colorNumber": 8,
        "label": [
          35,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "tree-l2",
        "colorNumber": 8,
        "label": [
          55,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "tree-r1",
        "colorNumber": 8,
        "label": [
          265,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "tree-r2",
        "colorNumber": 8,
        "label": [
          245,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          60,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 9,
        "label": [
          230,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 9,
        "label": [
          140,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 45,
          "r": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          80,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 50,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 6,
        "label": [
          220,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 50,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "circus",
    "name": "Circus Big Top",
    "emoji": "🎪",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#DC2626",
      "#FFFFFF",
      "#F59E0B",
      "#FBBF24",
      "#2563EB",
      "#1D4ED8",
      "#78350F"
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
        "id": "fairground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tent-wall",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 220,
          "w": 220,
          "h": 120,
          "rx": 6
        }
      },
      {
        "id": "curtain-entrance",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,340 C 130,250 170,250 180,340 Z"
        }
      },
      {
        "id": "tent-roof",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,220 150,60 280,220"
        }
      },
      {
        "id": "stripe-white-1",
        "colorNumber": 3,
        "label": [
          75,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,220 150,60 95,220"
        }
      },
      {
        "id": "stripe-white-2",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,220 150,60 170,220"
        }
      },
      {
        "id": "stripe-white-3",
        "colorNumber": 3,
        "label": [
          225,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "205,220 150,60 245,220"
        }
      },
      {
        "id": "valance-trim",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,220 Q 65,235 110,220 Q 150,235 190,220 Q 235,235 280,220"
        }
      },
      {
        "id": "tent-pole",
        "colorNumber": 4,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 25,
          "w": 4,
          "h": 40
        }
      },
      {
        "id": "big-flag",
        "colorNumber": 2,
        "label": [
          170,
          35
        ],
        "shape": {
          "kind": "polygon",
          "points": "152,25 185,35 152,45"
        }
      },
      {
        "id": "bunting-l",
        "colorNumber": 6,
        "label": [
          70,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,80 Q 85,120 150,60"
        }
      },
      {
        "id": "bunting-r",
        "colorNumber": 6,
        "label": [
          230,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,60 Q 215,120 280,80"
        }
      },
      {
        "id": "pennant-1",
        "colorNumber": 5,
        "label": [
          55,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "pennant-2",
        "colorNumber": 2,
        "label": [
          95,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 105,
          "r": 6
        }
      },
      {
        "id": "pennant-3",
        "colorNumber": 5,
        "label": [
          205,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 105,
          "r": 6
        }
      },
      {
        "id": "pennant-4",
        "colorNumber": 2,
        "label": [
          245,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "spotlight-l",
        "colorNumber": 5,
        "label": [
          70,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "spotlight-r",
        "colorNumber": 5,
        "label": [
          230,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          50,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          45,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          255,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 160,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "cathedral",
    "name": "Gothic Cathedral",
    "emoji": "⛪",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#94A3B8",
      "#64748B",
      "#475569",
      "#7C3AED",
      "#F59E0B",
      "#FFFFFF",
      "#15803D",
      "#0284C7"
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
        "id": "stone-plaza",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "cathedral-nave",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 160,
          "w": 100,
          "h": 170,
          "rx": 3
        }
      },
      {
        "id": "portal-arch",
        "colorNumber": 4,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,260 C 125,235 175,235 175,260 L 175,330 Z"
        }
      },
      {
        "id": "center-gable",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,160 150,90 205,160"
        }
      },
      {
        "id": "gable-cross",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "148,65 152,65 152,90 148,90"
        }
      },
      {
        "id": "rose-window-outer",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 24
        }
      },
      {
        "id": "rose-window-glass",
        "colorNumber": 5,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 18
        }
      },
      {
        "id": "rose-core",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "tower-l",
        "colorNumber": 3,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 140,
          "w": 60,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "spire-l",
        "colorNumber": 4,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,140 100,140 65,30"
        }
      },
      {
        "id": "belfry-window-l",
        "colorNumber": 9,
        "label": [
          65,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 175,
          "r": 12
        }
      },
      {
        "id": "tower-r",
        "colorNumber": 3,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 140,
          "w": 60,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "spire-r",
        "colorNumber": 4,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "200,140 270,140 235,30"
        }
      },
      {
        "id": "belfry-window-r",
        "colorNumber": 9,
        "label": [
          235,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 175,
          "r": 12
        }
      },
      {
        "id": "buttress-l",
        "colorNumber": 4,
        "label": [
          90,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,220 Q 75,240 100,270"
        }
      },
      {
        "id": "buttress-r",
        "colorNumber": 4,
        "label": [
          210,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 265,220 Q 225,240 200,270"
        }
      },
      {
        "id": "tree-l",
        "colorNumber": 8,
        "label": [
          25,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "tree-r",
        "colorNumber": 8,
        "label": [
          275,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 40,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "lighthouse",
    "name": "Seaside Lighthouse",
    "emoji": "🚨",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#DC2626",
      "#FFFFFF",
      "#334155",
      "#FBBF24",
      "#0284C7",
      "#0369A1",
      "#78350F"
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
        "id": "rocky-cliff",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "ocean-waves",
        "colorNumber": 7,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,340 Q 150,370 300,340 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "tower-body-white",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,330 185,330 170,130 130,130"
        }
      },
      {
        "id": "red-stripe-1",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "118,300 182,300 180,260 120,260"
        }
      },
      {
        "id": "red-stripe-2",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "124,220 176,220 172,175 128,175"
        }
      },
      {
        "id": "cottage-base",
        "colorNumber": 3,
        "label": [
          75,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 280,
          "w": 60,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "cottage-roof",
        "colorNumber": 2,
        "label": [
          75,
          265
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,280 75,250 110,280"
        }
      },
      {
        "id": "cottage-door",
        "colorNumber": 4,
        "label": [
          65,
          315
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 295,
          "w": 20,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "cottage-window",
        "colorNumber": 5,
        "label": [
          92,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 305,
          "r": 7
        }
      },
      {
        "id": "gallery-deck",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 120,
          "w": 70,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "lantern-glass",
        "colorNumber": 5,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 75,
          "w": 50,
          "h": 45,
          "rx": 3
        }
      },
      {
        "id": "lantern-dome",
        "colorNumber": 2,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,75 180,75 150,45"
        }
      },
      {
        "id": "spire-ball",
        "colorNumber": 5,
        "label": [
          150,
          42
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 42,
          "r": 5
        }
      },
      {
        "id": "light-beam-l",
        "colorNumber": 5,
        "label": [
          70,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,95 0,40 0,130"
        }
      },
      {
        "id": "light-beam-r",
        "colorNumber": 5,
        "label": [
          230,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,95 300,40 300,130"
        }
      },
      {
        "id": "seagull-1",
        "colorNumber": 3,
        "label": [
          50,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "seagull-2",
        "colorNumber": 3,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 3,
        "label": [
          75,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "taj-mahal",
    "name": "Taj Mahal",
    "emoji": "🕌",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#64748B",
      "#F59E0B",
      "#10B981",
      "#0284C7"
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
        "id": "plinth-base",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 320,
          "w": 260,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "reflecting-pool",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 340,
          "w": 200,
          "h": 60
        }
      },
      {
        "id": "tomb-main-cube",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 185,
          "w": 130,
          "h": 135,
          "rx": 3
        }
      },
      {
        "id": "center-iwan-arch",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,320 L 115,225 C 115,195 185,195 185,225 L 185,320 Z"
        }
      },
      {
        "id": "inner-door-arch",
        "colorNumber": 5,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,320 L 130,250 C 130,230 170,230 170,250 L 170,320 Z"
        }
      },
      {
        "id": "central-onion-dome",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,185 C 100,120 150,75 150,75 C 150,75 200,120 190,185 Z"
        }
      },
      {
        "id": "dome-drum",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 175,
          "w": 70,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "dome-finial",
        "colorNumber": 6,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "polygon",
          "points": "147,75 153,75 150,45"
        }
      },
      {
        "id": "chhatri-l",
        "colorNumber": 2,
        "label": [
          95,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 150,
          "w": 20,
          "h": 35
        }
      },
      {
        "id": "chhatri-dome-l",
        "colorNumber": 2,
        "label": [
          95,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,150 110,150 95,130"
        }
      },
      {
        "id": "chhatri-r",
        "colorNumber": 2,
        "label": [
          205,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 150,
          "w": 20,
          "h": 35
        }
      },
      {
        "id": "chhatri-dome-r",
        "colorNumber": 2,
        "label": [
          205,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,150 220,150 205,130"
        }
      },
      {
        "id": "minaret-l",
        "colorNumber": 2,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 140,
          "w": 20,
          "h": 180,
          "rx": 2
        }
      },
      {
        "id": "minaret-dome-l",
        "colorNumber": 2,
        "label": [
          45,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,140 60,140 45,110"
        }
      },
      {
        "id": "minaret-r",
        "colorNumber": 2,
        "label": [
          255,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 245,
          "y": 140,
          "w": 20,
          "h": 180,
          "rx": 2
        }
      },
      {
        "id": "minaret-dome-r",
        "colorNumber": 2,
        "label": [
          255,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,140 270,140 255,110"
        }
      },
      {
        "id": "tree-l",
        "colorNumber": 7,
        "label": [
          25,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "tree-r",
        "colorNumber": 7,
        "label": [
          275,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          70,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "colosseum",
    "name": "Roman Colosseum",
    "emoji": "🏛️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#451A03",
      "#15803D",
      "#FFFFFF"
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
        "id": "arena-ground",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "colosseum-outer-wall",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 130,
          "ry": 95
        }
      },
      {
        "id": "colosseum-interior-arena",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 95,
          "ry": 65
        }
      },
      {
        "id": "arena-sand-floor",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 65,
          "ry": 40
        }
      },
      {
        "id": "attic-wall-top",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 160,
          "w": 220,
          "h": 28,
          "rx": 4
        }
      },
      {
        "id": "arch-3-1",
        "colorNumber": 6,
        "label": [
          70,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-2",
        "colorNumber": 6,
        "label": [
          110,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-3",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-4",
        "colorNumber": 6,
        "label": [
          190,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-5",
        "colorNumber": 6,
        "label": [
          230,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-2-1",
        "colorNumber": 6,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-2",
        "colorNumber": 6,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-3",
        "colorNumber": 6,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-4",
        "colorNumber": 6,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-5",
        "colorNumber": 6,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-1-1",
        "colorNumber": 6,
        "label": [
          65,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "arch-1-2",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 14
        }
      },
      {
        "id": "arch-1-3",
        "colorNumber": 6,
        "label": [
          235,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "cypress-1",
        "colorNumber": 7,
        "label": [
          25,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "cypress-2",
        "colorNumber": 7,
        "label": [
          275,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 2,
        "label": [
          60,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 8,
        "label": [
          220,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "windmill",
    "name": "Dutch Windmill",
    "emoji": "🌬️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#78350F",
      "#92400E",
      "#F59E0B",
      "#DC2626",
      "#15803D",
      "#FFFFFF",
      "#38BDF8"
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
        "id": "tulip-field",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "canal-stream",
        "colorNumber": 8,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,360 Q 150,330 300,360 L 300,390 Q 150,360 0,390 Z"
        }
      },
      {
        "id": "windmill-tower",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,330 195,330 175,150 125,150"
        }
      },
      {
        "id": "cap-roof",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,150 185,150 150,110"
        }
      },
      {
        "id": "gallery-deck",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 235,
          "w": 110,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "door",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 280,
          "w": 30,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "window-top",
        "colorNumber": 7,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "sail-hub-center",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 12
        }
      },
      {
        "id": "sail-blade-top",
        "colorNumber": 7,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,130 155,130 162,10 138,10"
        }
      },
      {
        "id": "sail-blade-bot",
        "colorNumber": 7,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,150 155,150 162,270 138,270"
        }
      },
      {
        "id": "sail-blade-left",
        "colorNumber": 7,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,135 135,145 20,152 20,128"
        }
      },
      {
        "id": "sail-blade-right",
        "colorNumber": 7,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,135 165,145 280,152 280,128"
        }
      },
      {
        "id": "tulip-1",
        "colorNumber": 5,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "tulip-2",
        "colorNumber": 4,
        "label": [
          75,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "tulip-3",
        "colorNumber": 5,
        "label": [
          110,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 345,
          "r": 8
        }
      },
      {
        "id": "tulip-4",
        "colorNumber": 4,
        "label": [
          190,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 345,
          "r": 8
        }
      },
      {
        "id": "tulip-5",
        "colorNumber": 5,
        "label": [
          225,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "tulip-6",
        "colorNumber": 4,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          60,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          230,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "bridge",
    "name": "Golden Gate Bridge",
    "emoji": "🌉",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#EA580C",
      "#C2410C",
      "#9A3412",
      "#0284C7",
      "#0369A1",
      "#FFFFFF",
      "#F59E0B"
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
        "id": "bay-water",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "ocean-waves",
        "colorNumber": 6,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,330 Q 150,360 300,330 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "tower-north",
        "colorNumber": 2,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 80,
          "w": 30,
          "h": 240,
          "rx": 3
        }
      },
      {
        "id": "tower-south",
        "colorNumber": 2,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 80,
          "w": 30,
          "h": 240,
          "rx": 3
        }
      },
      {
        "id": "tower-n-cut-1",
        "colorNumber": 1,
        "label": [
          95,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 95,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-n-cut-2",
        "colorNumber": 1,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 140,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-n-cut-3",
        "colorNumber": 1,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 185,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-1",
        "colorNumber": 1,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 95,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-2",
        "colorNumber": 1,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 140,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-3",
        "colorNumber": 1,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 185,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "roadway-deck",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 232,
          "w": 300,
          "h": 16
        }
      },
      {
        "id": "main-cable",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,160 Q 95,80 95,80 Q 150,230 205,80 Q 205,80 300,160"
        }
      },
      {
        "id": "suspender-1",
        "colorNumber": 4,
        "label": [
          130,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 128,
          "y": 160,
          "w": 4,
          "h": 72
        }
      },
      {
        "id": "suspender-2",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 195,
          "w": 4,
          "h": 37
        }
      },
      {
        "id": "suspender-3",
        "colorNumber": 4,
        "label": [
          170,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 160,
          "w": 4,
          "h": 72
        }
      },
      {
        "id": "beacon-n",
        "colorNumber": 8,
        "label": [
          95,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "beacon-s",
        "colorNumber": 8,
        "label": [
          205,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 22
        }
      },
      {
        "id": "fog-cloud-1",
        "colorNumber": 7,
        "label": [
          50,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "fog-cloud-2",
        "colorNumber": 7,
        "label": [
          250,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "pagoda",
    "name": "Japanese Pagoda",
    "emoji": "⛩️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#DC2626",
      "#B91C1C",
      "#1E293B",
      "#F59E0B",
      "#15803D",
      "#FFFFFF",
      "#F472B6"
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
        "id": "zen-garden",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tier-1-walls",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 270,
          "w": 130,
          "h": 60,
          "rx": 3
        }
      },
      {
        "id": "door-wood",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 280,
          "w": 30,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "roof-1-curve",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,270 Q 150,230 255,270 L 235,255 Q 150,225 65,255 Z"
        }
      },
      {
        "id": "tier-2-walls",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 195,
          "w": 110,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "window-2",
        "colorNumber": 5,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "roof-2-curve",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,195 Q 150,160 240,195 L 225,180 Q 150,155 75,180 Z"
        }
      },
      {
        "id": "tier-3-walls",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 125,
          "w": 90,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "window-3",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 7
        }
      },
      {
        "id": "roof-3-curve",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,125 Q 150,95 225,125 L 210,110 Q 150,90 90,110 Z"
        }
      },
      {
        "id": "sorin-spire",
        "colorNumber": 5,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 35,
          "w": 4,
          "h": 70
        }
      },
      {
        "id": "sorin-orb-1",
        "colorNumber": 5,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "sorin-orb-2",
        "colorNumber": 5,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "sorin-orb-3",
        "colorNumber": 5,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "sakura-l1",
        "colorNumber": 8,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "sakura-l2",
        "colorNumber": 8,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "sakura-r1",
        "colorNumber": 8,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "sakura-r2",
        "colorNumber": 8,
        "label": [
          235,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 2,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 20,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "cabin",
    "name": "Log Cabin",
    "emoji": "🏡",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#78350F",
      "#92400E",
      "#B45309",
      "#15803D",
      "#166534",
      "#FFFFFF",
      "#F59E0B",
      "#38BDF8"
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
        "id": "forest-clearing",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "log-1",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 280,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-2",
        "colorNumber": 2,
        "label": [
          150,
          274
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 264,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-3",
        "colorNumber": 3,
        "label": [
          150,
          258
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 248,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-4",
        "colorNumber": 2,
        "label": [
          150,
          242
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 232,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-5",
        "colorNumber": 3,
        "label": [
          150,
          226
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 216,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-6",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 200,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "a-frame-roof",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,205 150,85 260,205"
        }
      },
      {
        "id": "roof-underhang",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,200 150,95 245,200"
        }
      },
      {
        "id": "stone-chimney",
        "colorNumber": 2,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 75,
          "w": 20,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "smoke-1",
        "colorNumber": 7,
        "label": [
          205,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "smoke-2",
        "colorNumber": 7,
        "label": [
          215,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 35,
          "r": 12
        }
      },
      {
        "id": "front-door",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 245,
          "w": 30,
          "h": 60,
          "rx": 2
        }
      },
      {
        "id": "door-porch-light",
        "colorNumber": 8,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "window-l",
        "colorNumber": 9,
        "label": [
          95,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 230,
          "w": 25,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "window-r",
        "colorNumber": 9,
        "label": [
          205,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 230,
          "w": 25,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 6,
        "label": [
          35,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 310,
          "r": 18
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 6,
        "label": [
          265,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 310,
          "r": 18
        }
      },
      {
        "id": "pine-3",
        "colorNumber": 6,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "pine-4",
        "colorNumber": 6,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "skyscraper",
    "name": "City Skyscraper",
    "emoji": "🏢",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#0284C7",
      "#0369A1",
      "#38BDF8",
      "#F59E0B",
      "#1E293B",
      "#FFFFFF",
      "#10B981"
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
        "id": "city-street",
        "colorNumber": 6,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 340,
          "w": 300,
          "h": 60
        }
      },
      {
        "id": "tower-body",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 65,
          "w": 120,
          "h": 280,
          "rx": 4
        }
      },
      {
        "id": "tower-crown-spire",
        "colorNumber": 2,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,65 195,65 150,20"
        }
      },
      {
        "id": "spire-beacon",
        "colorNumber": 5,
        "label": [
          150,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 25,
          "r": 5
        }
      },
      {
        "id": "win-row-1-l",
        "colorNumber": 4,
        "label": [
          115,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 85,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-1-r",
        "colorNumber": 4,
        "label": [
          185,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 85,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-2-l",
        "colorNumber": 7,
        "label": [
          115,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 120,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-2-r",
        "colorNumber": 7,
        "label": [
          185,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 120,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-3-l",
        "colorNumber": 4,
        "label": [
          115,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 155,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-3-r",
        "colorNumber": 4,
        "label": [
          185,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 155,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-4-l",
        "colorNumber": 7,
        "label": [
          115,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 190,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-4-r",
        "colorNumber": 7,
        "label": [
          185,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 190,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-5-l",
        "colorNumber": 4,
        "label": [
          115,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 225,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-5-r",
        "colorNumber": 4,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 225,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "lobby-glass",
        "colorNumber": 7,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 285,
          "w": 100,
          "h": 55,
          "rx": 2
        }
      },
      {
        "id": "building-l",
        "colorNumber": 6,
        "label": [
          45,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 15,
          "y": 150,
          "w": 60,
          "h": 195,
          "rx": 3
        }
      },
      {
        "id": "building-r",
        "colorNumber": 6,
        "label": [
          255,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 150,
          "w": 60,
          "h": 195,
          "rx": 3
        }
      },
      {
        "id": "street-tree-1",
        "colorNumber": 8,
        "label": [
          75,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 345,
          "r": 12
        }
      },
      {
        "id": "street-tree-2",
        "colorNumber": 8,
        "label": [
          225,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 345,
          "r": 12
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          255,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 110,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          45,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 110,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "tent",
    "name": "Camping Tent",
    "emoji": "⛺",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1E1B4B",
      "#2563EB",
      "#1D4ED8",
      "#F59E0B",
      "#EF4444",
      "#15803D",
      "#FFFFFF",
      "#78350F"
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
        "id": "campsite-meadow",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tent-canopy-main",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,310 150,140 260,310"
        }
      },
      {
        "id": "tent-front-opening",
        "colorNumber": 3,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,310 150,170 225,310"
        }
      },
      {
        "id": "tent-inner-entry",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,310 L 150,205 L 195,310 Z"
        }
      },
      {
        "id": "tent-pole-center",
        "colorNumber": 7,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 140,
          "w": 4,
          "h": 170
        }
      },
      {
        "id": "guy-line-l",
        "colorNumber": 7,
        "label": [
          60,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,140 L 15,335"
        }
      },
      {
        "id": "guy-line-r",
        "colorNumber": 7,
        "label": [
          240,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,140 L 285,335"
        }
      },
      {
        "id": "tent-peg-l",
        "colorNumber": 8,
        "label": [
          15,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 15,
          "cy": 335,
          "r": 4
        }
      },
      {
        "id": "tent-peg-r",
        "colorNumber": 8,
        "label": [
          285,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 335,
          "r": 4
        }
      },
      {
        "id": "fire-pit-stones",
        "colorNumber": 8,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 355,
          "rx": 30,
          "ry": 12
        }
      },
      {
        "id": "fire-log-1",
        "colorNumber": 8,
        "label": [
          135,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,350 150,360 148,365 118,355"
        }
      },
      {
        "id": "fire-log-2",
        "colorNumber": 8,
        "label": [
          165,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,360 180,350 182,355 152,365"
        }
      },
      {
        "id": "flame-orange",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,350 150,305 165,350"
        }
      },
      {
        "id": "flame-red",
        "colorNumber": 5,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,350 150,320 158,350"
        }
      },
      {
        "id": "moon",
        "colorNumber": 4,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          65,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          130,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          180,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 70,
          "r": 5
        }
      },
      {
        "id": "star-4",
        "colorNumber": 7,
        "label": [
          50,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "pine-l",
        "colorNumber": 6,
        "label": [
          35,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "pine-r",
        "colorNumber": 6,
        "label": [
          265,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "ferris",
    "name": "Ferris Wheel",
    "emoji": "🎡",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#DC2626",
      "#2563EB",
      "#F59E0B",
      "#10B981",
      "#8B5CF6",
      "#FFFFFF",
      "#78350F"
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
        "id": "carnival-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "support-leg-l",
        "colorNumber": 2,
        "label": [
          105,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,350 90,350 155,175 145,175"
        }
      },
      {
        "id": "support-leg-r",
        "colorNumber": 2,
        "label": [
          195,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,350 210,350 145,175 155,175"
        }
      },
      {
        "id": "outer-wheel-rim",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 115
        }
      },
      {
        "id": "inner-wheel-rim",
        "colorNumber": 4,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 85
        }
      },
      {
        "id": "center-hub",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 20
        }
      },
      {
        "id": "spoke-vert",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 65,
          "w": 4,
          "h": 220
        }
      },
      {
        "id": "spoke-horiz",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 173,
          "w": 220,
          "h": 4
        }
      },
      {
        "id": "spoke-diag-1",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 100,
          "w": 150,
          "h": 150
        }
      },
      {
        "id": "pod-top",
        "colorNumber": 2,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 14
        }
      },
      {
        "id": "pod-bot",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 14
        }
      },
      {
        "id": "pod-left",
        "colorNumber": 5,
        "label": [
          35,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "pod-right",
        "colorNumber": 5,
        "label": [
          265,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "pod-tl",
        "colorNumber": 6,
        "label": [
          70,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 95,
          "r": 14
        }
      },
      {
        "id": "pod-tr",
        "colorNumber": 6,
        "label": [
          230,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 95,
          "r": 14
        }
      },
      {
        "id": "pod-bl",
        "colorNumber": 3,
        "label": [
          70,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 255,
          "r": 14
        }
      },
      {
        "id": "pod-br",
        "colorNumber": 3,
        "label": [
          230,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 255,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          50,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "bunting-spark-1",
        "colorNumber": 4,
        "label": [
          110,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "bunting-spark-2",
        "colorNumber": 4,
        "label": [
          190,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "pyramid",
    "name": "Giza Pyramid",
    "emoji": "🏜️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#F59E0B",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#451A03",
      "#0284C7"
    ],
    "regions": [
      {
        "id": "desert-sky",
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
        "id": "blazing-sun",
        "colorNumber": 2,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 35
        }
      },
      {
        "id": "desert-sand-dunes",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "pyramid-lit-face",
        "colorNumber": 2,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,310 150,110 170,310"
        }
      },
      {
        "id": "pyramid-shadow-face",
        "colorNumber": 4,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,110 270,310 170,310"
        }
      },
      {
        "id": "gold-capstone",
        "colorNumber": 2,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "138,130 150,110 162,130"
        }
      },
      {
        "id": "tier-ridge-1",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,230 L 150,165 L 225,230"
        }
      },
      {
        "id": "tier-ridge-2",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,280 L 150,215 L 250,280"
        }
      },
      {
        "id": "dist-pyramid-lit",
        "colorNumber": 3,
        "label": [
          65,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "10,290 65,205 85,290"
        }
      },
      {
        "id": "dist-pyramid-shadow",
        "colorNumber": 5,
        "label": [
          100,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,205 125,290 85,290"
        }
      },
      {
        "id": "camel-body",
        "colorNumber": 6,
        "label": [
          75,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 345,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "camel-hump",
        "colorNumber": 6,
        "label": [
          75,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 335,
          "r": 6
        }
      },
      {
        "id": "camel-head",
        "colorNumber": 6,
        "label": [
          92,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 330,
          "r": 4
        }
      },
      {
        "id": "camel-leg-1",
        "colorNumber": 6,
        "label": [
          70,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 68,
          "y": 350,
          "w": 3,
          "h": 16
        }
      },
      {
        "id": "camel-leg-2",
        "colorNumber": 6,
        "label": [
          80,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 350,
          "w": 3,
          "h": 16
        }
      },
      {
        "id": "oasis-pool",
        "colorNumber": 8,
        "label": [
          230,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 355,
          "rx": 35,
          "ry": 12
        }
      },
      {
        "id": "palm-fronds-1",
        "colorNumber": 6,
        "label": [
          220,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "palm-fronds-2",
        "colorNumber": 6,
        "label": [
          245,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "palm-trunk",
        "colorNumber": 7,
        "label": [
          230,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 228,
          "y": 320,
          "w": 4,
          "h": 25
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
        "label": [
          105,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 2,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 40,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "statue-liberty",
    "name": "Statue of Liberty",
    "emoji": "🗽",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#34D399",
      "#10B981",
      "#059669",
      "#047857",
      "#F59E0B",
      "#FFFFFF",
      "#334155"
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
        "id": "harbor-water",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "star-fort-base",
        "colorNumber": 8,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,340 150,320 235,340 195,370 105,370"
        }
      },
      {
        "id": "pedestal-body",
        "colorNumber": 7,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 250,
          "w": 90,
          "h": 80,
          "rx": 3
        }
      },
      {
        "id": "pedestal-cornice",
        "colorNumber": 8,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 240,
          "w": 110,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "liberty-gown",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,140 180,140 195,245 105,245"
        }
      },
      {
        "id": "gown-drapes-l",
        "colorNumber": 3,
        "label": [
          125,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,140 Q 110,195 105,245 L 135,245 Q 140,195 135,140 Z"
        }
      },
      {
        "id": "gown-drapes-r",
        "colorNumber": 3,
        "label": [
          175,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,140 Q 190,195 195,245 L 165,245 Q 160,195 165,140 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 16
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 5,
        "label": [
          145,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 112,
          "r": 2
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 5,
        "label": [
          155,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 112,
          "r": 2
        }
      },
      {
        "id": "crown-diadem",
        "colorNumber": 4,
        "label": [
          150,
          102
        ],
        "shape": {
          "kind": "rect",
          "x": 136,
          "y": 98,
          "w": 28,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "crown-ray-c",
        "colorNumber": 4,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "148,98 152,98 150,75"
        }
      },
      {
        "id": "crown-ray-l1",
        "colorNumber": 4,
        "label": [
          140,
          88
        ],
        "shape": {
          "kind": "polygon",
          "points": "138,99 143,101 135,80"
        }
      },
      {
        "id": "crown-ray-l2",
        "colorNumber": 4,
        "label": [
          130,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "132,102 136,105 120,88"
        }
      },
      {
        "id": "crown-ray-r1",
        "colorNumber": 4,
        "label": [
          160,
          88
        ],
        "shape": {
          "kind": "polygon",
          "points": "157,101 162,99 165,80"
        }
      },
      {
        "id": "crown-ray-r2",
        "colorNumber": 4,
        "label": [
          170,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "164,105 168,102 180,88"
        }
      },
      {
        "id": "arm-raised",
        "colorNumber": 3,
        "label": [
          205,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 75,
          "w": 45,
          "h": 12
        }
      },
      {
        "id": "torch-handle",
        "colorNumber": 4,
        "label": [
          215,
          65
        ],
        "shape": {
          "kind": "rect",
          "x": 212,
          "y": 55,
          "w": 6,
          "h": 25
        }
      },
      {
        "id": "torch-flame",
        "colorNumber": 6,
        "label": [
          215,
          40
        ],
        "shape": {
          "kind": "polygon",
          "points": "208,55 222,55 215,25"
        }
      },
      {
        "id": "flame-glow",
        "colorNumber": 6,
        "label": [
          215,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 40,
          "r": 14
        }
      },
      {
        "id": "tablet-july-4",
        "colorNumber": 4,
        "label": [
          105,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 145,
          "w": 20,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "big-ben",
    "name": "Big Ben",
    "emoji": "🕰️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#D97706",
      "#B45309",
      "#78350F",
      "#451A03",
      "#F59E0B",
      "#FFFFFF",
      "#1E293B"
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
        "id": "westminster-bridge",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 340,
          "w": 300,
          "h": 60
        }
      },
      {
        "id": "tower-shaft",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 140,
          "w": 90,
          "h": 200,
          "rx": 3
        }
      },
      {
        "id": "panel-stripe-1",
        "colorNumber": 3,
        "label": [
          125,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 145,
          "w": 10,
          "h": 190
        }
      },
      {
        "id": "panel-stripe-2",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 145,
          "w": 10,
          "h": 190
        }
      },
      {
        "id": "panel-stripe-3",
        "colorNumber": 3,
        "label": [
          175,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 145,
          "w": 10,
          "h": 190
        }
      },
      {
        "id": "belfry-cube",
        "colorNumber": 4,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 70,
          "w": 110,
          "h": 70,
          "rx": 3
        }
      },
      {
        "id": "clock-dial-white",
        "colorNumber": 7,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 26
        }
      },
      {
        "id": "clock-rim-gold",
        "colorNumber": 6,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 28
        }
      },
      {
        "id": "clock-hand-hour",
        "colorNumber": 8,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 92,
          "w": 4,
          "h": 15
        }
      },
      {
        "id": "clock-hand-min",
        "colorNumber": 8,
        "label": [
          155,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 103,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "clock-center-pin",
        "colorNumber": 6,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 4
        }
      },
      {
        "id": "belfry-roof",
        "colorNumber": 5,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,70 205,70 150,15"
        }
      },
      {
        "id": "lantern-spire",
        "colorNumber": 6,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 5,
          "w": 4,
          "h": 25
        }
      },
      {
        "id": "spire-finial",
        "colorNumber": 6,
        "label": [
          150,
          5
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 5,
          "r": 4
        }
      },
      {
        "id": "pinnacle-l",
        "colorNumber": 6,
        "label": [
          95,
          60
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,70 100,70 95,45"
        }
      },
      {
        "id": "pinnacle-r",
        "colorNumber": 6,
        "label": [
          205,
          60
        ],
        "shape": {
          "kind": "polygon",
          "points": "200,70 210,70 205,45"
        }
      },
      {
        "id": "street-lamp-1",
        "colorNumber": 6,
        "label": [
          65,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "street-lamp-2",
        "colorNumber": 6,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          260,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "igloo",
    "name": "Ice Igloo",
    "emoji": "🧊",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0C4A6E",
      "#0284C7",
      "#38BDF8",
      "#7DD3FC",
      "#BAE6FD",
      "#E0F2FE",
      "#FFFFFF",
      "#F59E0B"
    ],
    "regions": [
      {
        "id": "aurora-sky",
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
        "id": "arctic-snowfield",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "aurora-green",
        "colorNumber": 3,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,60 Q 150,20 300,60 L 300,90 Q 150,50 0,90 Z"
        }
      },
      {
        "id": "igloo-dome",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,330 C 40,160 260,160 250,330 Z"
        }
      },
      {
        "id": "entry-tunnel",
        "colorNumber": 5,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,335 C 110,255 190,255 185,335 Z"
        }
      },
      {
        "id": "entry-hole",
        "colorNumber": 1,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,335 C 128,275 172,275 170,335 Z"
        }
      },
      {
        "id": "block-tier-1",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,290 C 100,270 200,270 240,290"
        }
      },
      {
        "id": "block-tier-2",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,240 C 115,220 185,220 220,240"
        }
      },
      {
        "id": "block-tier-3",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,195 C 130,185 170,185 190,195"
        }
      },
      {
        "id": "seam-1",
        "colorNumber": 4,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 103,
          "y": 245,
          "w": 4,
          "h": 35
        }
      },
      {
        "id": "seam-2",
        "colorNumber": 4,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 193,
          "y": 245,
          "w": 4,
          "h": 35
        }
      },
      {
        "id": "seam-3",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 190,
          "w": 4,
          "h": 30
        }
      },
      {
        "id": "penguin-body",
        "colorNumber": 1,
        "label": [
          65,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 340,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "penguin-belly",
        "colorNumber": 7,
        "label": [
          65,
          342
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 342,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "lantern-glow",
        "colorNumber": 8,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 12
        }
      },
      {
        "id": "lantern-core",
        "colorNumber": 8,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 6
        }
      },
      {
        "id": "moon",
        "colorNumber": 7,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          55,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          120,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          185,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 7,
        "label": [
          45,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 7,
        "label": [
          255,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "treehouse",
    "name": "Tree House",
    "emoji": "🌳",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#15803D",
      "#166534",
      "#78350F",
      "#92400E",
      "#F59E0B",
      "#FFFFFF",
      "#DC2626"
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
        "id": "grassy-knoll",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "trunk",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 200,
          "w": 50,
          "h": 160,
          "rx": 6
        }
      },
      {
        "id": "branch-l",
        "colorNumber": 4,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,250 60,200 75,190 135,230"
        }
      },
      {
        "id": "branch-r",
        "colorNumber": 4,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,230 225,190 240,200 170,250"
        }
      },
      {
        "id": "cabin-walls",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 130,
          "w": 120,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "cabin-roof",
        "colorNumber": 8,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,135 150,60 225,135"
        }
      },
      {
        "id": "porch-deck",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 215,
          "w": 140,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "porch-railing",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 195,
          "w": 140,
          "h": 6,
          "rx": 1
        }
      },
      {
        "id": "door",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 150,
          "w": 30,
          "h": 65,
          "rx": 2
        }
      },
      {
        "id": "window-l",
        "colorNumber": 7,
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
        "id": "window-r",
        "colorNumber": 7,
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
        "id": "rope-ladder-rails",
        "colorNumber": 4,
        "label": [
          105,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,225 L 100,340 M 112,225 L 112,340"
        }
      },
      {
        "id": "rung-1",
        "colorNumber": 5,
        "label": [
          106,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 248,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "rung-2",
        "colorNumber": 5,
        "label": [
          106,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 278,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "rung-3",
        "colorNumber": 5,
        "label": [
          106,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 308,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "foliage-top",
        "colorNumber": 2,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 45
        }
      },
      {
        "id": "foliage-l",
        "colorNumber": 3,
        "label": [
          55,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 120,
          "r": 40
        }
      },
      {
        "id": "foliage-r",
        "colorNumber": 3,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 40
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 4,
        "label": [
          240,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "barn",
    "name": "Red Barn",
    "emoji": "🚜",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#DC2626",
      "#B91C1C",
      "#FFFFFF",
      "#15803D",
      "#F59E0B",
      "#78350F",
      "#334155"
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
        "id": "farm-pasture",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "barn-wall",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 180,
          "w": 170,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "roof-gambrel-top",
        "colorNumber": 3,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,120 150,65 200,120"
        }
      },
      {
        "id": "roof-gambrel-slope-l",
        "colorNumber": 3,
        "label": [
          75,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,185 100,120 115,185 55,185"
        }
      },
      {
        "id": "roof-gambrel-slope-r",
        "colorNumber": 3,
        "label": [
          225,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,185 200,120 185,185 245,185"
        }
      },
      {
        "id": "door-l",
        "colorNumber": 4,
        "label": [
          125,
          285
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 240,
          "w": 50,
          "h": 90,
          "rx": 2
        }
      },
      {
        "id": "door-r",
        "colorNumber": 4,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 240,
          "w": 50,
          "h": 90,
          "rx": 2
        }
      },
      {
        "id": "door-x-l",
        "colorNumber": 2,
        "label": [
          125,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,245 L 145,325 M 145,245 L 105,325"
        }
      },
      {
        "id": "door-x-r",
        "colorNumber": 2,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,245 L 195,325 M 195,245 L 155,325"
        }
      },
      {
        "id": "loft-window",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 140,
          "w": 30,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "loft-x",
        "colorNumber": 2,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 137,142 L 163,168 M 163,142 L 137,168"
        }
      },
      {
        "id": "silo-cyl",
        "colorNumber": 4,
        "label": [
          245,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 130,
          "w": 30,
          "h": 200,
          "rx": 3
        }
      },
      {
        "id": "silo-dome",
        "colorNumber": 8,
        "label": [
          245,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,130 265,130 245,95"
        }
      },
      {
        "id": "cupola",
        "colorNumber": 4,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 45,
          "w": 20,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "rooster-vane",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "polygon",
          "points": "146,45 154,45 150,25"
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 4,
        "label": [
          220,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "hay-bale-1",
        "colorNumber": 6,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "hay-bale-2",
        "colorNumber": 6,
        "label": [
          70,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 355,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "temple",
    "name": "Greek Temple",
    "emoji": "🛕",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#F59E0B",
      "#15803D",
      "#334155",
      "#0284C7"
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
        "id": "acropolis-hill",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "step-1",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 325,
          "w": 250,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "step-2",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 310,
          "w": 230,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "step-3",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 295,
          "w": 210,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "column-1",
        "colorNumber": 2,
        "label": [
          60,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 54,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-2",
        "colorNumber": 2,
        "label": [
          95,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 89,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-3",
        "colorNumber": 2,
        "label": [
          130,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 124,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-4",
        "colorNumber": 2,
        "label": [
          170,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 164,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-5",
        "colorNumber": 2,
        "label": [
          205,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 199,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-6",
        "colorNumber": 2,
        "label": [
          240,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 234,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "architrave-beam",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 115,
          "w": 210,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "pediment-triangle",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,115 150,35 260,115"
        }
      },
      {
        "id": "tympanum-inner",
        "colorNumber": 3,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,110 150,45 245,110"
        }
      },
      {
        "id": "acroterion-peak",
        "colorNumber": 5,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 8
        }
      },
      {
        "id": "acroterion-l",
        "colorNumber": 5,
        "label": [
          40,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "acroterion-r",
        "colorNumber": 5,
        "label": [
          260,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "olive-tree-l",
        "colorNumber": 6,
        "label": [
          25,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "olive-tree-r",
        "colorNumber": 6,
        "label": [
          275,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          70,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "mosque",
    "name": "Blue Mosque",
    "emoji": "🕋",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#0284C7",
      "#0369A1",
      "#38BDF8",
      "#FFFFFF",
      "#F59E0B",
      "#15803D",
      "#475569"
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
        "id": "stone-square",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "central-dome",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,190 C 85,100 215,100 205,190 Z"
        }
      },
      {
        "id": "dome-finial-c",
        "colorNumber": 6,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "147,110 153,110 150,80"
        }
      },
      {
        "id": "semi-dome-l",
        "colorNumber": 3,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,225 C 60,165 150,165 145,225 Z"
        }
      },
      {
        "id": "semi-dome-r",
        "colorNumber": 3,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,225 C 150,165 240,165 235,225 Z"
        }
      },
      {
        "id": "mosque-cube",
        "colorNumber": 5,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 220,
          "w": 150,
          "h": 110,
          "rx": 4
        }
      },
      {
        "id": "portal-arch-center",
        "colorNumber": 3,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,250 C 125,230 175,230 175,250 L 175,330 Z"
        }
      },
      {
        "id": "window-l1",
        "colorNumber": 4,
        "label": [
          95,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 255,
          "r": 8
        }
      },
      {
        "id": "window-r1",
        "colorNumber": 4,
        "label": [
          205,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 255,
          "r": 8
        }
      },
      {
        "id": "minaret-fl",
        "colorNumber": 5,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 38,
          "y": 100,
          "w": 14,
          "h": 230,
          "rx": 2
        }
      },
      {
        "id": "minaret-cap-fl",
        "colorNumber": 2,
        "label": [
          45,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,100 55,100 45,70"
        }
      },
      {
        "id": "minaret-balcony-fl",
        "colorNumber": 6,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "minaret-fr",
        "colorNumber": 5,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 248,
          "y": 100,
          "w": 14,
          "h": 230,
          "rx": 2
        }
      },
      {
        "id": "minaret-cap-fr",
        "colorNumber": 2,
        "label": [
          255,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "245,100 265,100 255,70"
        }
      },
      {
        "id": "minaret-balcony-fr",
        "colorNumber": 6,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "cypress-1",
        "colorNumber": 7,
        "label": [
          20,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "cypress-2",
        "colorNumber": 7,
        "label": [
          280,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "crescent-moon",
        "colorNumber": 6,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          60,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fort",
    "name": "Sandstone Fort",
    "emoji": "🧱",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#F59E0B",
      "#15803D",
      "#FFFFFF"
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
        "id": "desert-ground",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "curtain-wall",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 180,
          "w": 200,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "fort-archway",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,250 C 125,230 175,230 175,250 L 175,330 Z"
        }
      },
      {
        "id": "merlon-1",
        "colorNumber": 3,
        "label": [
          70,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-2",
        "colorNumber": 3,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-3",
        "colorNumber": 3,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-4",
        "colorNumber": 3,
        "label": [
          190,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-5",
        "colorNumber": 3,
        "label": [
          230,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "bastion-l",
        "colorNumber": 3,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 140,
          "w": 45,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-l",
        "colorNumber": 6,
        "label": [
          45,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,140 70,140 45,110"
        }
      },
      {
        "id": "arrow-slit-l",
        "colorNumber": 5,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "bastion-r",
        "colorNumber": 3,
        "label": [
          255,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 140,
          "w": 45,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-r",
        "colorNumber": 6,
        "label": [
          255,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,140 280,140 255,110"
        }
      },
      {
        "id": "arrow-slit-r",
        "colorNumber": 5,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "flag-l",
        "colorNumber": 6,
        "label": [
          45,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,85 70,95 45,105"
        }
      },
      {
        "id": "flag-r",
        "colorNumber": 6,
        "label": [
          255,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,85 280,95 255,105"
        }
      },
      {
        "id": "palm-tree-1",
        "colorNumber": 7,
        "label": [
          25,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "palm-tree-2",
        "colorNumber": 7,
        "label": [
          275,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 8,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 8,
        "label": [
          250,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "observatory",
    "name": "Observatory",
    "emoji": "🔭",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0F172A",
      "#1E293B",
      "#334155",
      "#64748B",
      "#F59E0B",
      "#38BDF8",
      "#FFFFFF",
      "#8B5CF6"
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
        "id": "mountain-summit",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "observatory-base",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 210,
          "w": 150,
          "h": 120,
          "rx": 4
        }
      },
      {
        "id": "base-cornice",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 200,
          "w": 160,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "doorway",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 255,
          "w": 30,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "dome-outer",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,200 C 60,80 240,80 230,200 Z"
        }
      },
      {
        "id": "shutter-slit-open",
        "colorNumber": 1,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,200 L 140,90 L 160,90 L 165,200 Z"
        }
      },
      {
        "id": "telescope-barrel",
        "colorNumber": 5,
        "label": [
          160,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,150 185,85 195,90 155,155"
        }
      },
      {
        "id": "telescope-lens",
        "colorNumber": 6,
        "label": [
          190,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 88,
          "r": 8
        }
      },
      {
        "id": "crescent-moon",
        "colorNumber": 5,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 24
        }
      },
      {
        "id": "nebula-glow",
        "colorNumber": 8,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 25
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          95,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 35,
          "r": 6
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 7
        }
      },
      {
        "id": "star-4",
        "colorNumber": 7,
        "label": [
          205,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "star-5",
        "colorNumber": 7,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "star-6",
        "colorNumber": 7,
        "label": [
          260,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "star-7",
        "colorNumber": 7,
        "label": [
          60,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 220,
          "r": 5
        }
      },
      {
        "id": "star-8",
        "colorNumber": 7,
        "label": [
          245,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 220,
          "r": 5
        }
      },
      {
        "id": "pine-l",
        "colorNumber": 2,
        "label": [
          35,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "pine-r",
        "colorNumber": 2,
        "label": [
          265,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          150,
          15
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 15,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          270,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 70,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "japanese-castle",
    "name": "Japanese Castle",
    "emoji": "🏯",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#FFFFFF",
      "#334155",
      "#1E293B",
      "#F59E0B",
      "#DC2626",
      "#15803D",
      "#F472B6"
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
        "id": "stone-mound",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "ishigaki-wall",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,340 80,285 220,285 250,340"
        }
      },
      {
        "id": "tier-1-walls",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 230,
          "w": 130,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "roof-1",
        "colorNumber": 3,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,235 Q 150,195 255,235 L 235,220 Q 150,190 65,220 Z"
        }
      },
      {
        "id": "tier-2-walls",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 155,
          "w": 110,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "roof-2",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,160 Q 150,125 240,160 L 225,145 Q 150,120 75,145 Z"
        }
      },
      {
        "id": "tier-3-walls",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 90,
          "w": 90,
          "h": 45,
          "rx": 3
        }
      },
      {
        "id": "roof-top-gable",
        "colorNumber": 3,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,95 150,45 225,95"
        }
      },
      {
        "id": "shachi-l",
        "colorNumber": 5,
        "label": [
          75,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,95 85,75 80,95"
        }
      },
      {
        "id": "shachi-r",
        "colorNumber": 5,
        "label": [
          225,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,95 215,75 220,95"
        }
      },
      {
        "id": "win-1",
        "colorNumber": 4,
        "label": [
          115,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 245,
          "w": 20,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "win-2",
        "colorNumber": 4,
        "label": [
          185,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 245,
          "w": 20,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "win-3",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 170,
          "w": 20,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "sakura-1",
        "colorNumber": 8,
        "label": [
          40,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 220,
          "r": 18
        }
      },
      {
        "id": "sakura-2",
        "colorNumber": 8,
        "label": [
          260,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 220,
          "r": 18
        }
      },
      {
        "id": "pine-l",
        "colorNumber": 7,
        "label": [
          25,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "pine-r",
        "colorNumber": 7,
        "label": [
          275,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          150,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 25,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "synagogue",
    "name": "Synagogue",
    "emoji": "🕍",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#FFFFFF",
      "#0284C7",
      "#0369A1",
      "#F59E0B",
      "#64748B",
      "#334155",
      "#15803D"
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
        "id": "plaza-ground",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "facade-body",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 180,
          "w": 160,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "portal-arch",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,250 C 125,230 175,230 175,250 L 175,330 Z"
        }
      },
      {
        "id": "facade-gable",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,180 150,95 235,180"
        }
      },
      {
        "id": "star-triangle-up",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,115 168,148 132,148"
        }
      },
      {
        "id": "star-triangle-down",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,155 168,122 132,122"
        }
      },
      {
        "id": "star-ring",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 24
        }
      },
      {
        "id": "tower-l",
        "colorNumber": 6,
        "label": [
          50,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 140,
          "w": 40,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-l",
        "colorNumber": 3,
        "label": [
          50,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 25,140 C 20,95 80,95 75,140 Z"
        }
      },
      {
        "id": "tower-r",
        "colorNumber": 6,
        "label": [
          250,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 140,
          "w": 40,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-r",
        "colorNumber": 3,
        "label": [
          250,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,140 C 220,95 280,95 275,140 Z"
        }
      },
      {
        "id": "tablets",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,95 L 135,70 C 135,60 165,60 165,70 L 165,95 Z"
        }
      },
      {
        "id": "win-l1",
        "colorNumber": 3,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "win-r1",
        "colorNumber": 3,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "tree-l",
        "colorNumber": 8,
        "label": [
          20,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "tree-r",
        "colorNumber": 8,
        "label": [
          280,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          60,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          220,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "roller-coaster",
    "name": "Roller Coaster",
    "emoji": "🎢",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#DC2626",
      "#2563EB",
      "#F59E0B",
      "#10B981",
      "#8B5CF6",
      "#FFFFFF",
      "#78350F"
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
        "id": "amusement-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "coaster-track-top",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,220 Q 75,50 150,180 Q 225,50 300,240"
        }
      },
      {
        "id": "coaster-loop-circle",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,310 C 70,160 230,160 190,310"
        }
      },
      {
        "id": "support-pylon-1",
        "colorNumber": 7,
        "label": [
          75,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 130,
          "w": 6,
          "h": 210
        }
      },
      {
        "id": "support-pylon-2",
        "colorNumber": 7,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 180,
          "w": 6,
          "h": 160
        }
      },
      {
        "id": "support-pylon-3",
        "colorNumber": 7,
        "label": [
          225,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 222,
          "y": 130,
          "w": 6,
          "h": 210
        }
      },
      {
        "id": "train-car-1",
        "colorNumber": 4,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 95,
          "w": 30,
          "h": 20,
          "rx": 4
        }
      },
      {
        "id": "rider-head-1",
        "colorNumber": 5,
        "label": [
          65,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 85,
          "r": 7
        }
      },
      {
        "id": "train-car-2",
        "colorNumber": 6,
        "label": [
          95,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 110,
          "w": 30,
          "h": 20,
          "rx": 4
        }
      },
      {
        "id": "rider-head-2",
        "colorNumber": 5,
        "label": [
          95,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 100,
          "r": 7
        }
      },
      {
        "id": "train-car-3",
        "colorNumber": 4,
        "label": [
          125,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 135,
          "w": 30,
          "h": 20,
          "rx": 4
        }
      },
      {
        "id": "rider-head-3",
        "colorNumber": 5,
        "label": [
          125,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 125,
          "r": 7
        }
      },
      {
        "id": "pennant-1",
        "colorNumber": 4,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "pennant-2",
        "colorNumber": 6,
        "label": [
          255,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "tree-l",
        "colorNumber": 5,
        "label": [
          30,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "tree-r",
        "colorNumber": 5,
        "label": [
          270,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          60,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 40,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 4,
        "label": [
          190,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 4,
        "label": [
          110,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "moai-statue",
    "name": "Moai Statue",
    "emoji": "🗿",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#64748B",
      "#475569",
      "#334155",
      "#1E293B",
      "#15803D",
      "#0284C7",
      "#F59E0B"
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
        "id": "easter-island-hill",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "pacific-ocean",
        "colorNumber": 7,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,320 Q 150,350 300,320 L 300,370 Q 150,390 0,370 Z"
        }
      },
      {
        "id": "moai-monolith-body",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,100 195,100 205,330 95,330"
        }
      },
      {
        "id": "moai-prominent-brow",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,120 195,120 190,140 110,140"
        }
      },
      {
        "id": "moai-long-nose",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,135 160,135 168,230 132,230"
        }
      },
      {
        "id": "eye-socket-l",
        "colorNumber": 5,
        "label": [
          125,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 150,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "eye-socket-r",
        "colorNumber": 5,
        "label": [
          175,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 150,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "pukao-topknot",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 60,
          "w": 60,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "pukao-dome",
        "colorNumber": 4,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "chiseled-lips",
        "colorNumber": 5,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 240,
          "w": 30,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "broad-chin",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 260,
          "w": 70,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "earlobe-l",
        "colorNumber": 4,
        "label": [
          98,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 92,
          "y": 140,
          "w": 10,
          "h": 75,
          "rx": 3
        }
      },
      {
        "id": "earlobe-r",
        "colorNumber": 4,
        "label": [
          202,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 198,
          "y": 140,
          "w": 10,
          "h": 75,
          "rx": 3
        }
      },
      {
        "id": "arm-carve-l",
        "colorNumber": 5,
        "label": [
          115,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,250 L 105,310 L 135,310"
        }
      },
      {
        "id": "arm-carve-r",
        "colorNumber": 5,
        "label": [
          185,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,250 L 195,310 L 165,310"
        }
      },
      {
        "id": "palm-tree-l",
        "colorNumber": 6,
        "label": [
          35,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 320,
          "r": 16
        }
      },
      {
        "id": "palm-tree-r",
        "colorNumber": 6,
        "label": [
          265,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 320,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "tropical-cloud",
        "colorNumber": 1,
        "label": [
          70,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 8,
        "label": [
          185,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "stadium",
    "name": "Stadium",
    "emoji": "🏟️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#94A3B8",
      "#64748B",
      "#475569",
      "#15803D",
      "#166534",
      "#FFFFFF",
      "#F59E0B"
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
        "id": "parking-plaza",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 345,
          "w": 300,
          "h": 55
        }
      },
      {
        "id": "stadium-outer-bowl",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 135,
          "ry": 95
        }
      },
      {
        "id": "stadium-inner-stands",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 110,
          "ry": 70
        }
      },
      {
        "id": "stadium-pitch-turf",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 80,
          "ry": 45
        }
      },
      {
        "id": "center-circle",
        "colorNumber": 7,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "canopy-roof-top",
        "colorNumber": 7,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,195 Q 150,115 280,195 L 265,180 Q 150,105 35,180 Z"
        }
      },
      {
        "id": "light-tower-l1",
        "colorNumber": 4,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 42,
          "y": 90,
          "w": 6,
          "h": 100
        }
      },
      {
        "id": "light-head-l1",
        "colorNumber": 7,
        "label": [
          45,
          90
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 80,
          "w": 30,
          "h": 18,
          "rx": 3
        }
      },
      {
        "id": "light-tower-r1",
        "colorNumber": 4,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 252,
          "y": 90,
          "w": 6,
          "h": 100
        }
      },
      {
        "id": "light-head-r1",
        "colorNumber": 7,
        "label": [
          255,
          90
        ],
        "shape": {
          "kind": "rect",
          "x": 240,
          "y": 80,
          "w": 30,
          "h": 18,
          "rx": 3
        }
      },
      {
        "id": "light-bulb-l1",
        "colorNumber": 8,
        "label": [
          36,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 36,
          "cy": 88,
          "r": 4
        }
      },
      {
        "id": "light-bulb-l2",
        "colorNumber": 8,
        "label": [
          54,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 54,
          "cy": 88,
          "r": 4
        }
      },
      {
        "id": "light-bulb-r1",
        "colorNumber": 8,
        "label": [
          246,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 246,
          "cy": 88,
          "r": 4
        }
      },
      {
        "id": "light-bulb-r2",
        "colorNumber": 8,
        "label": [
          264,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 264,
          "cy": 88,
          "r": 4
        }
      },
      {
        "id": "tree-l",
        "colorNumber": 5,
        "label": [
          25,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "tree-r",
        "colorNumber": 5,
        "label": [
          275,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          70,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          230,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 30,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          255,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 30,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          110,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 8,
        "label": [
          190,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "colosseum-ruins",
    "name": "Roman Colosseum",
    "emoji": "🏺",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#451A03",
      "#15803D",
      "#FFFFFF"
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
        "id": "arena-ground",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "colosseum-outer-wall",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 130,
          "ry": 95
        }
      },
      {
        "id": "colosseum-interior-arena",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 95,
          "ry": 65
        }
      },
      {
        "id": "arena-sand-floor",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 65,
          "ry": 40
        }
      },
      {
        "id": "attic-wall-top",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 160,
          "w": 220,
          "h": 28,
          "rx": 4
        }
      },
      {
        "id": "arch-3-1",
        "colorNumber": 6,
        "label": [
          70,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-2",
        "colorNumber": 6,
        "label": [
          110,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-3",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-4",
        "colorNumber": 6,
        "label": [
          190,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-3-5",
        "colorNumber": 6,
        "label": [
          230,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "arch-2-1",
        "colorNumber": 6,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-2",
        "colorNumber": 6,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-3",
        "colorNumber": 6,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-4",
        "colorNumber": 6,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "arch-2-5",
        "colorNumber": 6,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "cypress-1",
        "colorNumber": 7,
        "label": [
          25,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "cypress-2",
        "colorNumber": 7,
        "label": [
          275,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 2,
        "label": [
          60,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 8,
        "label": [
          220,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 2,
        "label": [
          110,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 2,
        "label": [
          190,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "opera-house",
    "name": "Opera House",
    "emoji": "🎭",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#0284C7",
      "#0369A1",
      "#F59E0B",
      "#1E293B"
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
        "id": "sydney-harbor",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "harbor-wake",
        "colorNumber": 6,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,365 300,335 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "podium-base",
        "colorNumber": 8,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 305,
          "w": 230,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "sail-shell-1",
        "colorNumber": 2,
        "label": [
          120,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,305 C 50,140 160,120 185,250 C 145,280 85,300 60,305 Z"
        }
      },
      {
        "id": "sail-shell-1-ridge",
        "colorNumber": 4,
        "label": [
          120,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,305 C 50,140 160,120 185,250"
        }
      },
      {
        "id": "sail-shell-2",
        "colorNumber": 3,
        "label": [
          160,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,305 C 105,170 210,150 235,270 C 195,290 135,300 110,305 Z"
        }
      },
      {
        "id": "sail-shell-3",
        "colorNumber": 2,
        "label": [
          200,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,305 C 155,200 250,190 265,285 C 235,300 185,305 160,305 Z"
        }
      },
      {
        "id": "glass-curtain-1",
        "colorNumber": 1,
        "label": [
          140,
          265
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,305 155,240 170,305"
        }
      },
      {
        "id": "glass-curtain-2",
        "colorNumber": 1,
        "label": [
          200,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,305 210,255 230,305"
        }
      },
      {
        "id": "seagull-1",
        "colorNumber": 2,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "seagull-2",
        "colorNumber": 2,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 7,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          70,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 2,
        "label": [
          160,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 7,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 7,
        "label": [
          110,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "sparkle-5",
        "colorNumber": 7,
        "label": [
          190,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "harbor-light-1",
        "colorNumber": 7,
        "label": [
          40,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 335,
          "r": 5
        }
      },
      {
        "id": "harbor-light-2",
        "colorNumber": 7,
        "label": [
          260,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 335,
          "r": 5
        }
      },
      {
        "id": "wake-sparkle-1",
        "colorNumber": 2,
        "label": [
          90,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 365,
          "r": 6
        }
      },
      {
        "id": "wake-sparkle-2",
        "colorNumber": 2,
        "label": [
          210,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 365,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "leaning-tower",
    "name": "Leaning Tower",
    "emoji": "🔔",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#F59E0B",
      "#15803D",
      "#475569",
      "#78350F"
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
        "id": "piazza-lawn",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tower-shaft-leaning",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,340 180,340 215,80 135,80"
        }
      },
      {
        "id": "tier-1-base",
        "colorNumber": 3,
        "label": [
          135,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 310,
          "w": 90,
          "h": 30
        }
      },
      {
        "id": "arch-1",
        "colorNumber": 7,
        "label": [
          115,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 325,
          "r": 8
        }
      },
      {
        "id": "arch-2",
        "colorNumber": 7,
        "label": [
          155,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 325,
          "r": 8
        }
      },
      {
        "id": "tier-2",
        "colorNumber": 4,
        "label": [
          145,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 265,
          "w": 88,
          "h": 20
        }
      },
      {
        "id": "tier-3",
        "colorNumber": 3,
        "label": [
          155,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 108,
          "y": 225,
          "w": 86,
          "h": 20
        }
      },
      {
        "id": "tier-4",
        "colorNumber": 4,
        "label": [
          165,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 116,
          "y": 185,
          "w": 84,
          "h": 20
        }
      },
      {
        "id": "tier-5",
        "colorNumber": 3,
        "label": [
          175,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 124,
          "y": 145,
          "w": 82,
          "h": 20
        }
      },
      {
        "id": "tier-6",
        "colorNumber": 4,
        "label": [
          185,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 132,
          "y": 105,
          "w": 80,
          "h": 20
        }
      },
      {
        "id": "belfry-top",
        "colorNumber": 2,
        "label": [
          190,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 60,
          "w": 70,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "bell",
        "colorNumber": 5,
        "label": [
          175,
          72
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 72,
          "r": 8
        }
      },
      {
        "id": "cypress-l",
        "colorNumber": 6,
        "label": [
          35,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "cypress-r",
        "colorNumber": 6,
        "label": [
          265,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "tourist-1",
        "colorNumber": 7,
        "label": [
          70,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 350,
          "r": 6
        }
      },
      {
        "id": "tourist-2",
        "colorNumber": 7,
        "label": [
          230,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 350,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          220,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          45,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 5,
        "label": [
          110,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "sparkle-5",
        "colorNumber": 5,
        "label": [
          190,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "wind-mill-tulip",
    "name": "Dutch Windmill",
    "emoji": "🌷",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#78350F",
      "#92400E",
      "#F59E0B",
      "#DC2626",
      "#15803D",
      "#FFFFFF",
      "#38BDF8"
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
        "id": "tulip-field",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "canal-stream",
        "colorNumber": 8,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,360 Q 150,330 300,360 L 300,390 Q 150,360 0,390 Z"
        }
      },
      {
        "id": "windmill-tower",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,330 195,330 175,150 125,150"
        }
      },
      {
        "id": "cap-roof",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,150 185,150 150,110"
        }
      },
      {
        "id": "gallery-deck",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 235,
          "w": 110,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "door",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 280,
          "w": 30,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "window-top",
        "colorNumber": 7,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "sail-hub-center",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 12
        }
      },
      {
        "id": "sail-blade-top",
        "colorNumber": 7,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,130 155,130 162,10 138,10"
        }
      },
      {
        "id": "sail-blade-bot",
        "colorNumber": 7,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,150 155,150 162,270 138,270"
        }
      },
      {
        "id": "sail-blade-left",
        "colorNumber": 7,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,135 135,145 20,152 20,128"
        }
      },
      {
        "id": "sail-blade-right",
        "colorNumber": 7,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,135 165,145 280,152 280,128"
        }
      },
      {
        "id": "tulip-1",
        "colorNumber": 5,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "tulip-2",
        "colorNumber": 4,
        "label": [
          75,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "tulip-3",
        "colorNumber": 5,
        "label": [
          110,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 345,
          "r": 8
        }
      },
      {
        "id": "tulip-4",
        "colorNumber": 4,
        "label": [
          190,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 345,
          "r": 8
        }
      },
      {
        "id": "tulip-5",
        "colorNumber": 5,
        "label": [
          225,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "tulip-6",
        "colorNumber": 4,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          60,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          230,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 4,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "dome-mosque",
    "name": "Blue Dome",
    "emoji": "🪬",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#0284C7",
      "#0369A1",
      "#38BDF8",
      "#FFFFFF",
      "#F59E0B",
      "#15803D",
      "#475569"
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
        "id": "stone-square",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "central-dome",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,190 C 85,100 215,100 205,190 Z"
        }
      },
      {
        "id": "dome-finial-c",
        "colorNumber": 6,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "147,110 153,110 150,80"
        }
      },
      {
        "id": "semi-dome-l",
        "colorNumber": 3,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,225 C 60,165 150,165 145,225 Z"
        }
      },
      {
        "id": "semi-dome-r",
        "colorNumber": 3,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,225 C 150,165 240,165 235,225 Z"
        }
      },
      {
        "id": "mosque-cube",
        "colorNumber": 5,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 220,
          "w": 150,
          "h": 110,
          "rx": 4
        }
      },
      {
        "id": "portal-arch-center",
        "colorNumber": 3,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,250 C 125,230 175,230 175,250 L 175,330 Z"
        }
      },
      {
        "id": "window-l1",
        "colorNumber": 4,
        "label": [
          95,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 255,
          "r": 8
        }
      },
      {
        "id": "window-r1",
        "colorNumber": 4,
        "label": [
          205,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 255,
          "r": 8
        }
      },
      {
        "id": "minaret-fl",
        "colorNumber": 5,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 38,
          "y": 100,
          "w": 14,
          "h": 230,
          "rx": 2
        }
      },
      {
        "id": "minaret-cap-fl",
        "colorNumber": 2,
        "label": [
          45,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,100 55,100 45,70"
        }
      },
      {
        "id": "minaret-balcony-fl",
        "colorNumber": 6,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "minaret-fr",
        "colorNumber": 5,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 248,
          "y": 100,
          "w": 14,
          "h": 230,
          "rx": 2
        }
      },
      {
        "id": "minaret-cap-fr",
        "colorNumber": 2,
        "label": [
          255,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "245,100 265,100 255,70"
        }
      },
      {
        "id": "minaret-balcony-fr",
        "colorNumber": 6,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "cypress-1",
        "colorNumber": 7,
        "label": [
          20,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "cypress-2",
        "colorNumber": 7,
        "label": [
          280,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 345,
          "r": 14
        }
      },
      {
        "id": "crescent-moon",
        "colorNumber": 6,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          60,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 6,
        "label": [
          110,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 35,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "great-wall",
    "name": "Great Wall",
    "emoji": "🐲",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#78350F",
      "#92400E",
      "#D97706",
      "#15803D",
      "#F59E0B",
      "#FFFFFF",
      "#334155"
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
        "id": "mountain-ridge-1",
        "colorNumber": 5,
        "label": [
          80,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,260 100,120 200,260"
        }
      },
      {
        "id": "mountain-ridge-2",
        "colorNumber": 5,
        "label": [
          220,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,280 240,140 300,240 300,350 0,350"
        }
      },
      {
        "id": "great-wall-ramparts",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,310 Q 90,260 150,210 Q 210,160 300,210 L 300,245 Q 210,195 150,245 Q 90,295 0,345 Z"
        }
      },
      {
        "id": "watchtower-1-body",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 160,
          "w": 50,
          "h": 65,
          "rx": 3
        }
      },
      {
        "id": "watchtower-1-roof",
        "colorNumber": 4,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,165 150,130 185,165"
        }
      },
      {
        "id": "arrow-slit-1",
        "colorNumber": 8,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 6
        }
      },
      {
        "id": "watchtower-2-body",
        "colorNumber": 3,
        "label": [
          240,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 115,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "watchtower-2-roof",
        "colorNumber": 4,
        "label": [
          240,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "220,118 240,95 260,118"
        }
      },
      {
        "id": "crenel-1",
        "colorNumber": 3,
        "label": [
          40,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 280,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "crenel-2",
        "colorNumber": 3,
        "label": [
          90,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 245,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "crenel-3",
        "colorNumber": 3,
        "label": [
          210,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 180,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "crenel-4",
        "colorNumber": 3,
        "label": [
          270,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 260,
          "y": 210,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "pine-tree-1",
        "colorNumber": 5,
        "label": [
          45,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 335,
          "r": 16
        }
      },
      {
        "id": "pine-tree-2",
        "colorNumber": 5,
        "label": [
          255,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 335,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          70,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          160,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 45,
          "r": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          110,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 6,
        "label": [
          190,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 8,
        "label": [
          60,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 100,
          "r": 5
        }
      },
      {
        "id": "bird-2",
        "colorNumber": 8,
        "label": [
          220,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 100,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "inuit-igloo",
    "name": "Ice Igloo",
    "emoji": "❄️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0C4A6E",
      "#0284C7",
      "#38BDF8",
      "#7DD3FC",
      "#BAE6FD",
      "#E0F2FE",
      "#FFFFFF",
      "#F59E0B"
    ],
    "regions": [
      {
        "id": "aurora-sky",
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
        "id": "arctic-snowfield",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "aurora-green",
        "colorNumber": 3,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,60 Q 150,20 300,60 L 300,90 Q 150,50 0,90 Z"
        }
      },
      {
        "id": "igloo-dome",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,330 C 40,160 260,160 250,330 Z"
        }
      },
      {
        "id": "entry-tunnel",
        "colorNumber": 5,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,335 C 110,255 190,255 185,335 Z"
        }
      },
      {
        "id": "entry-hole",
        "colorNumber": 1,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,335 C 128,275 172,275 170,335 Z"
        }
      },
      {
        "id": "block-tier-1",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,290 C 100,270 200,270 240,290"
        }
      },
      {
        "id": "block-tier-2",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,240 C 115,220 185,220 220,240"
        }
      },
      {
        "id": "block-tier-3",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,195 C 130,185 170,185 190,195"
        }
      },
      {
        "id": "seam-1",
        "colorNumber": 4,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 103,
          "y": 245,
          "w": 4,
          "h": 35
        }
      },
      {
        "id": "seam-2",
        "colorNumber": 4,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 193,
          "y": 245,
          "w": 4,
          "h": 35
        }
      },
      {
        "id": "seam-3",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 190,
          "w": 4,
          "h": 30
        }
      },
      {
        "id": "penguin-body",
        "colorNumber": 1,
        "label": [
          65,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 340,
          "rx": 10,
          "ry": 16
        }
      },
      {
        "id": "penguin-belly",
        "colorNumber": 7,
        "label": [
          65,
          342
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 342,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "lantern-glow",
        "colorNumber": 8,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 12
        }
      },
      {
        "id": "lantern-core",
        "colorNumber": 8,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 6
        }
      },
      {
        "id": "moon",
        "colorNumber": 7,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          55,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          120,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          185,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 7,
        "label": [
          45,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 7,
        "label": [
          255,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          200,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "woodland-treehouse",
    "name": "Tree House",
    "emoji": "🌲",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#15803D",
      "#166534",
      "#78350F",
      "#92400E",
      "#F59E0B",
      "#FFFFFF",
      "#DC2626"
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
        "id": "grassy-knoll",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "trunk",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 200,
          "w": 50,
          "h": 160,
          "rx": 6
        }
      },
      {
        "id": "branch-l",
        "colorNumber": 4,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,250 60,200 75,190 135,230"
        }
      },
      {
        "id": "branch-r",
        "colorNumber": 4,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,230 225,190 240,200 170,250"
        }
      },
      {
        "id": "cabin-walls",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 130,
          "w": 120,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "cabin-roof",
        "colorNumber": 8,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,135 150,60 225,135"
        }
      },
      {
        "id": "porch-deck",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 215,
          "w": 140,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "porch-railing",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 195,
          "w": 140,
          "h": 6,
          "rx": 1
        }
      },
      {
        "id": "door",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 150,
          "w": 30,
          "h": 65,
          "rx": 2
        }
      },
      {
        "id": "window-l",
        "colorNumber": 7,
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
        "id": "window-r",
        "colorNumber": 7,
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
        "id": "rope-ladder-rails",
        "colorNumber": 4,
        "label": [
          105,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,225 L 100,340 M 112,225 L 112,340"
        }
      },
      {
        "id": "rung-1",
        "colorNumber": 5,
        "label": [
          106,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 248,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "rung-2",
        "colorNumber": 5,
        "label": [
          106,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 278,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "rung-3",
        "colorNumber": 5,
        "label": [
          106,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 308,
          "w": 16,
          "h": 4
        }
      },
      {
        "id": "foliage-top",
        "colorNumber": 2,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 45
        }
      },
      {
        "id": "foliage-l",
        "colorNumber": 3,
        "label": [
          55,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 120,
          "r": 40
        }
      },
      {
        "id": "foliage-r",
        "colorNumber": 3,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 40
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 18
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 4,
        "label": [
          240,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 20,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "alpine-cabin",
    "name": "Log Cabin",
    "emoji": "🪵",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#78350F",
      "#92400E",
      "#B45309",
      "#15803D",
      "#166534",
      "#FFFFFF",
      "#F59E0B",
      "#38BDF8"
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
        "id": "forest-clearing",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "log-1",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 280,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-2",
        "colorNumber": 2,
        "label": [
          150,
          274
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 264,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-3",
        "colorNumber": 3,
        "label": [
          150,
          258
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 248,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-4",
        "colorNumber": 2,
        "label": [
          150,
          242
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 232,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-5",
        "colorNumber": 3,
        "label": [
          150,
          226
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 216,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "log-6",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 200,
          "w": 170,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "a-frame-roof",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,205 150,85 260,205"
        }
      },
      {
        "id": "roof-underhang",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,200 150,95 245,200"
        }
      },
      {
        "id": "stone-chimney",
        "colorNumber": 2,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 75,
          "w": 20,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "smoke-1",
        "colorNumber": 7,
        "label": [
          205,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "smoke-2",
        "colorNumber": 7,
        "label": [
          215,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 35,
          "r": 12
        }
      },
      {
        "id": "front-door",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 245,
          "w": 30,
          "h": 60,
          "rx": 2
        }
      },
      {
        "id": "door-porch-light",
        "colorNumber": 8,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "window-l",
        "colorNumber": 9,
        "label": [
          95,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 230,
          "w": 25,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "window-r",
        "colorNumber": 9,
        "label": [
          205,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 230,
          "w": 25,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 6,
        "label": [
          35,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 310,
          "r": 18
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 6,
        "label": [
          265,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 310,
          "r": 18
        }
      },
      {
        "id": "pine-3",
        "colorNumber": 6,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "pine-4",
        "colorNumber": 6,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "city-tower",
    "name": "City Tower",
    "emoji": "🏙️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#0284C7",
      "#0369A1",
      "#38BDF8",
      "#F59E0B",
      "#1E293B",
      "#FFFFFF",
      "#10B981"
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
        "id": "city-street",
        "colorNumber": 6,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 340,
          "w": 300,
          "h": 60
        }
      },
      {
        "id": "tower-body",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 65,
          "w": 120,
          "h": 280,
          "rx": 4
        }
      },
      {
        "id": "tower-crown-spire",
        "colorNumber": 2,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,65 195,65 150,20"
        }
      },
      {
        "id": "spire-beacon",
        "colorNumber": 5,
        "label": [
          150,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 25,
          "r": 5
        }
      },
      {
        "id": "win-row-1-l",
        "colorNumber": 4,
        "label": [
          115,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 85,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-1-r",
        "colorNumber": 4,
        "label": [
          185,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 85,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-2-l",
        "colorNumber": 7,
        "label": [
          115,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 120,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-2-r",
        "colorNumber": 7,
        "label": [
          185,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 120,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-3-l",
        "colorNumber": 4,
        "label": [
          115,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 155,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-3-r",
        "colorNumber": 4,
        "label": [
          185,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 155,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-4-l",
        "colorNumber": 7,
        "label": [
          115,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 190,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-4-r",
        "colorNumber": 7,
        "label": [
          185,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 190,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-5-l",
        "colorNumber": 4,
        "label": [
          115,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 225,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "win-row-5-r",
        "colorNumber": 4,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 225,
          "w": 25,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "lobby-glass",
        "colorNumber": 7,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 285,
          "w": 100,
          "h": 55,
          "rx": 2
        }
      },
      {
        "id": "building-l",
        "colorNumber": 6,
        "label": [
          45,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 15,
          "y": 150,
          "w": 60,
          "h": 195,
          "rx": 3
        }
      },
      {
        "id": "building-r",
        "colorNumber": 6,
        "label": [
          255,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 150,
          "w": 60,
          "h": 195,
          "rx": 3
        }
      },
      {
        "id": "street-tree-1",
        "colorNumber": 8,
        "label": [
          75,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 345,
          "r": 12
        }
      },
      {
        "id": "street-tree-2",
        "colorNumber": 8,
        "label": [
          225,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 345,
          "r": 12
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          255,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 110,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          45,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 110,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "wilderness-camp",
    "name": "Camping Tent",
    "emoji": "🏕️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1E1B4B",
      "#2563EB",
      "#1D4ED8",
      "#F59E0B",
      "#EF4444",
      "#15803D",
      "#FFFFFF",
      "#78350F"
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
        "id": "campsite-meadow",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tent-canopy-main",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,310 150,140 260,310"
        }
      },
      {
        "id": "tent-front-opening",
        "colorNumber": 3,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,310 150,170 225,310"
        }
      },
      {
        "id": "tent-inner-entry",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,310 L 150,205 L 195,310 Z"
        }
      },
      {
        "id": "tent-pole-center",
        "colorNumber": 7,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 140,
          "w": 4,
          "h": 170
        }
      },
      {
        "id": "guy-line-l",
        "colorNumber": 7,
        "label": [
          60,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,140 L 15,335"
        }
      },
      {
        "id": "guy-line-r",
        "colorNumber": 7,
        "label": [
          240,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,140 L 285,335"
        }
      },
      {
        "id": "tent-peg-l",
        "colorNumber": 8,
        "label": [
          15,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 15,
          "cy": 335,
          "r": 4
        }
      },
      {
        "id": "tent-peg-r",
        "colorNumber": 8,
        "label": [
          285,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 335,
          "r": 4
        }
      },
      {
        "id": "fire-pit-stones",
        "colorNumber": 8,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 355,
          "rx": 30,
          "ry": 12
        }
      },
      {
        "id": "fire-log-1",
        "colorNumber": 8,
        "label": [
          135,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,350 150,360 148,365 118,355"
        }
      },
      {
        "id": "fire-log-2",
        "colorNumber": 8,
        "label": [
          165,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,360 180,350 182,355 152,365"
        }
      },
      {
        "id": "flame-orange",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,350 150,305 165,350"
        }
      },
      {
        "id": "flame-red",
        "colorNumber": 5,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,350 150,320 158,350"
        }
      },
      {
        "id": "moon",
        "colorNumber": 4,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          65,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          130,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          180,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 70,
          "r": 5
        }
      },
      {
        "id": "star-4",
        "colorNumber": 7,
        "label": [
          50,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "pine-l",
        "colorNumber": 6,
        "label": [
          35,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "pine-r",
        "colorNumber": 6,
        "label": [
          265,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "carnival-wheel",
    "name": "Ferris Wheel",
    "emoji": "🎠",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#DC2626",
      "#2563EB",
      "#F59E0B",
      "#10B981",
      "#8B5CF6",
      "#FFFFFF",
      "#78350F"
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
        "id": "carnival-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "support-leg-l",
        "colorNumber": 2,
        "label": [
          105,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,350 90,350 155,175 145,175"
        }
      },
      {
        "id": "support-leg-r",
        "colorNumber": 2,
        "label": [
          195,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,350 210,350 145,175 155,175"
        }
      },
      {
        "id": "outer-wheel-rim",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 115
        }
      },
      {
        "id": "inner-wheel-rim",
        "colorNumber": 4,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 85
        }
      },
      {
        "id": "center-hub",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 20
        }
      },
      {
        "id": "spoke-vert",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 65,
          "w": 4,
          "h": 220
        }
      },
      {
        "id": "spoke-horiz",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 173,
          "w": 220,
          "h": 4
        }
      },
      {
        "id": "spoke-diag-1",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 100,
          "w": 150,
          "h": 150
        }
      },
      {
        "id": "pod-top",
        "colorNumber": 2,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 14
        }
      },
      {
        "id": "pod-bot",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 14
        }
      },
      {
        "id": "pod-left",
        "colorNumber": 5,
        "label": [
          35,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "pod-right",
        "colorNumber": 5,
        "label": [
          265,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "pod-tl",
        "colorNumber": 6,
        "label": [
          70,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 95,
          "r": 14
        }
      },
      {
        "id": "pod-tr",
        "colorNumber": 6,
        "label": [
          230,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 95,
          "r": 14
        }
      },
      {
        "id": "pod-bl",
        "colorNumber": 3,
        "label": [
          70,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 255,
          "r": 14
        }
      },
      {
        "id": "pod-br",
        "colorNumber": 3,
        "label": [
          230,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 255,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
        "label": [
          50,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "bunting-spark-1",
        "colorNumber": 4,
        "label": [
          110,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "bunting-spark-2",
        "colorNumber": 4,
        "label": [
          190,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 4,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "desert-pyramids",
    "name": "Giza Pyramid",
    "emoji": "🐪",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#F59E0B",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#451A03",
      "#0284C7"
    ],
    "regions": [
      {
        "id": "desert-sky",
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
        "id": "blazing-sun",
        "colorNumber": 2,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 35
        }
      },
      {
        "id": "desert-sand-dunes",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "pyramid-lit-face",
        "colorNumber": 2,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,310 150,110 170,310"
        }
      },
      {
        "id": "pyramid-shadow-face",
        "colorNumber": 4,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,110 270,310 170,310"
        }
      },
      {
        "id": "gold-capstone",
        "colorNumber": 2,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "138,130 150,110 162,130"
        }
      },
      {
        "id": "tier-ridge-1",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,230 L 150,165 L 225,230"
        }
      },
      {
        "id": "tier-ridge-2",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,280 L 150,215 L 250,280"
        }
      },
      {
        "id": "dist-pyramid-lit",
        "colorNumber": 3,
        "label": [
          65,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "10,290 65,205 85,290"
        }
      },
      {
        "id": "dist-pyramid-shadow",
        "colorNumber": 5,
        "label": [
          100,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,205 125,290 85,290"
        }
      },
      {
        "id": "camel-body",
        "colorNumber": 6,
        "label": [
          75,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 345,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "camel-hump",
        "colorNumber": 6,
        "label": [
          75,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 335,
          "r": 6
        }
      },
      {
        "id": "camel-head",
        "colorNumber": 6,
        "label": [
          92,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 330,
          "r": 4
        }
      },
      {
        "id": "camel-leg-1",
        "colorNumber": 6,
        "label": [
          70,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 68,
          "y": 350,
          "w": 3,
          "h": 16
        }
      },
      {
        "id": "camel-leg-2",
        "colorNumber": 6,
        "label": [
          80,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 350,
          "w": 3,
          "h": 16
        }
      },
      {
        "id": "oasis-pool",
        "colorNumber": 8,
        "label": [
          230,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 355,
          "rx": 35,
          "ry": 12
        }
      },
      {
        "id": "palm-fronds-1",
        "colorNumber": 6,
        "label": [
          220,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "palm-fronds-2",
        "colorNumber": 6,
        "label": [
          245,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "palm-trunk",
        "colorNumber": 7,
        "label": [
          230,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 228,
          "y": 320,
          "w": 4,
          "h": 25
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
        "label": [
          105,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 2,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 40,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 2,
        "label": [
          180,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 40,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "suspension-bridge",
    "name": "Suspension Bridge",
    "emoji": "🛳️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#EA580C",
      "#C2410C",
      "#9A3412",
      "#0284C7",
      "#0369A1",
      "#FFFFFF",
      "#F59E0B"
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
        "id": "bay-water",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "ocean-waves",
        "colorNumber": 6,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,330 Q 150,360 300,330 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "tower-north",
        "colorNumber": 2,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 80,
          "w": 30,
          "h": 240,
          "rx": 3
        }
      },
      {
        "id": "tower-south",
        "colorNumber": 2,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 80,
          "w": 30,
          "h": 240,
          "rx": 3
        }
      },
      {
        "id": "tower-n-cut-1",
        "colorNumber": 1,
        "label": [
          95,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 95,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-n-cut-2",
        "colorNumber": 1,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 140,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-n-cut-3",
        "colorNumber": 1,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 86,
          "y": 185,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-1",
        "colorNumber": 1,
        "label": [
          205,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 95,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-2",
        "colorNumber": 1,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 140,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "tower-s-cut-3",
        "colorNumber": 1,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 196,
          "y": 185,
          "w": 18,
          "h": 25
        }
      },
      {
        "id": "roadway-deck",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 232,
          "w": 300,
          "h": 16
        }
      },
      {
        "id": "main-cable",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,160 Q 95,80 95,80 Q 150,230 205,80 Q 205,80 300,160"
        }
      },
      {
        "id": "suspender-1",
        "colorNumber": 4,
        "label": [
          130,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 128,
          "y": 160,
          "w": 4,
          "h": 72
        }
      },
      {
        "id": "suspender-2",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 195,
          "w": 4,
          "h": 37
        }
      },
      {
        "id": "suspender-3",
        "colorNumber": 4,
        "label": [
          170,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 160,
          "w": 4,
          "h": 72
        }
      },
      {
        "id": "beacon-n",
        "colorNumber": 8,
        "label": [
          95,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "beacon-s",
        "colorNumber": 8,
        "label": [
          205,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 22
        }
      },
      {
        "id": "fog-cloud-1",
        "colorNumber": 7,
        "label": [
          50,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "fog-cloud-2",
        "colorNumber": 7,
        "label": [
          250,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          190,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 35,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "torii-shrine",
    "name": "Torii Gate",
    "emoji": "🌊",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#DC2626",
      "#B91C1C",
      "#1E293B",
      "#0284C7",
      "#0369A1",
      "#FFFFFF",
      "#F59E0B"
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
        "id": "sacred-sea",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "water-ripples",
        "colorNumber": 6,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,330 Q 150,360 300,330 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "pillar-left",
        "colorNumber": 2,
        "label": [
          90,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 100,
          "w": 24,
          "h": 230,
          "rx": 4
        }
      },
      {
        "id": "pillar-right",
        "colorNumber": 2,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 198,
          "y": 100,
          "w": 24,
          "h": 230,
          "rx": 4
        }
      },
      {
        "id": "nemaki-l",
        "colorNumber": 4,
        "label": [
          90,
          315
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 300,
          "w": 40,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "nemaki-r",
        "colorNumber": 4,
        "label": [
          210,
          315
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 300,
          "w": 40,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "kasagi-top-beam",
        "colorNumber": 2,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,95 Q 150,60 270,95 L 265,80 Q 150,45 35,80 Z"
        }
      },
      {
        "id": "shimaki-beam",
        "colorNumber": 3,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 88,
          "w": 200,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "nuki-tie-beam",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 138,
          "w": 180,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "gakuzuka-plaque",
        "colorNumber": 4,
        "label": [
          150,
          116
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 102,
          "w": 16,
          "h": 36,
          "rx": 2
        }
      },
      {
        "id": "reflection-l",
        "colorNumber": 6,
        "label": [
          90,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "reflection-r",
        "colorNumber": 6,
        "label": [
          210,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "sun-disc",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 26
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          60,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 45,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          240,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 45,
          "r": 16
        }
      },
      {
        "id": "seagull-1",
        "colorNumber": 7,
        "label": [
          55,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "seagull-2",
        "colorNumber": 7,
        "label": [
          245,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          110,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 8,
        "label": [
          190,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "water-spark-1",
        "colorNumber": 7,
        "label": [
          60,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 365,
          "r": 5
        }
      },
      {
        "id": "water-spark-2",
        "colorNumber": 7,
        "label": [
          240,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 365,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "tier-pagoda",
    "name": "Five Story Pagoda",
    "emoji": "🎋",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF2F2",
      "#DC2626",
      "#B91C1C",
      "#1E293B",
      "#F59E0B",
      "#15803D",
      "#FFFFFF",
      "#F472B6"
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
        "id": "zen-garden",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "tier-1-walls",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 270,
          "w": 130,
          "h": 60,
          "rx": 3
        }
      },
      {
        "id": "door-wood",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 280,
          "w": 30,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "roof-1-curve",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,270 Q 150,230 255,270 L 235,255 Q 150,225 65,255 Z"
        }
      },
      {
        "id": "tier-2-walls",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 195,
          "w": 110,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "window-2",
        "colorNumber": 5,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "roof-2-curve",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,195 Q 150,160 240,195 L 225,180 Q 150,155 75,180 Z"
        }
      },
      {
        "id": "tier-3-walls",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 125,
          "w": 90,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "window-3",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 7
        }
      },
      {
        "id": "roof-3-curve",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,125 Q 150,95 225,125 L 210,110 Q 150,90 90,110 Z"
        }
      },
      {
        "id": "sorin-spire",
        "colorNumber": 5,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 35,
          "w": 4,
          "h": 70
        }
      },
      {
        "id": "sorin-orb-1",
        "colorNumber": 5,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "sorin-orb-2",
        "colorNumber": 5,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "sorin-orb-3",
        "colorNumber": 5,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "sakura-l1",
        "colorNumber": 8,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "sakura-l2",
        "colorNumber": 8,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "sakura-r1",
        "colorNumber": 8,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "sakura-r2",
        "colorNumber": 8,
        "label": [
          235,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "sun",
        "colorNumber": 2,
        "label": [
          240,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 20,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 5,
        "label": [
          110,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 20,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "country-barn",
    "name": "Red Barn",
    "emoji": "🌾",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#DC2626",
      "#B91C1C",
      "#FFFFFF",
      "#15803D",
      "#F59E0B",
      "#78350F",
      "#334155"
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
        "id": "farm-pasture",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "barn-wall",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 180,
          "w": 170,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "roof-gambrel-top",
        "colorNumber": 3,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,120 150,65 200,120"
        }
      },
      {
        "id": "roof-gambrel-slope-l",
        "colorNumber": 3,
        "label": [
          75,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,185 100,120 115,185 55,185"
        }
      },
      {
        "id": "roof-gambrel-slope-r",
        "colorNumber": 3,
        "label": [
          225,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,185 200,120 185,185 245,185"
        }
      },
      {
        "id": "door-l",
        "colorNumber": 4,
        "label": [
          125,
          285
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 240,
          "w": 50,
          "h": 90,
          "rx": 2
        }
      },
      {
        "id": "door-r",
        "colorNumber": 4,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 240,
          "w": 50,
          "h": 90,
          "rx": 2
        }
      },
      {
        "id": "door-x-l",
        "colorNumber": 2,
        "label": [
          125,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,245 L 145,325 M 145,245 L 105,325"
        }
      },
      {
        "id": "door-x-r",
        "colorNumber": 2,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,245 L 195,325 M 195,245 L 155,325"
        }
      },
      {
        "id": "loft-window",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 140,
          "w": 30,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "loft-x",
        "colorNumber": 2,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 137,142 L 163,168 M 163,142 L 137,168"
        }
      },
      {
        "id": "silo-cyl",
        "colorNumber": 4,
        "label": [
          245,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 130,
          "w": 30,
          "h": 200,
          "rx": 3
        }
      },
      {
        "id": "silo-dome",
        "colorNumber": 8,
        "label": [
          245,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,130 265,130 245,95"
        }
      },
      {
        "id": "cupola",
        "colorNumber": 4,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 45,
          "w": 20,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "rooster-vane",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "polygon",
          "points": "146,45 154,45 150,25"
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          55,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 4,
        "label": [
          220,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "hay-bale-1",
        "colorNumber": 6,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "hay-bale-2",
        "colorNumber": 6,
        "label": [
          70,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 355,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          150,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 25,
          "r": 5
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 6,
        "label": [
          110,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 25,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "parthenon",
    "name": "Greek Temple",
    "emoji": "🕊️",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#FFFFFF",
      "#F1F5F9",
      "#CBD5E1",
      "#F59E0B",
      "#15803D",
      "#334155",
      "#0284C7"
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
        "id": "acropolis-hill",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "step-1",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 325,
          "w": 250,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "step-2",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 310,
          "w": 230,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "step-3",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 295,
          "w": 210,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "column-1",
        "colorNumber": 2,
        "label": [
          60,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 54,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-2",
        "colorNumber": 2,
        "label": [
          95,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 89,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-3",
        "colorNumber": 2,
        "label": [
          130,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 124,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-4",
        "colorNumber": 2,
        "label": [
          170,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 164,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-5",
        "colorNumber": 2,
        "label": [
          205,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 199,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "column-6",
        "colorNumber": 2,
        "label": [
          240,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 234,
          "y": 135,
          "w": 12,
          "h": 160,
          "rx": 2
        }
      },
      {
        "id": "architrave-beam",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 115,
          "w": 210,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "pediment-triangle",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,115 150,35 260,115"
        }
      },
      {
        "id": "tympanum-inner",
        "colorNumber": 3,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,110 150,45 245,110"
        }
      },
      {
        "id": "acroterion-peak",
        "colorNumber": 5,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 8
        }
      },
      {
        "id": "acroterion-l",
        "colorNumber": 5,
        "label": [
          40,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "acroterion-r",
        "colorNumber": 5,
        "label": [
          260,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "olive-tree-l",
        "colorNumber": 6,
        "label": [
          25,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "olive-tree-r",
        "colorNumber": 6,
        "label": [
          275,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 5,
        "label": [
          240,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 50,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          70,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 50,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          150,
          20
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 20,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "desert-fortress",
    "name": "Sandstone Fort",
    "emoji": "🌴",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#F59E0B",
      "#15803D",
      "#FFFFFF"
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
        "id": "desert-ground",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "curtain-wall",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 180,
          "w": 200,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "fort-archway",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,330 L 125,250 C 125,230 175,230 175,250 L 175,330 Z"
        }
      },
      {
        "id": "merlon-1",
        "colorNumber": 3,
        "label": [
          70,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-2",
        "colorNumber": 3,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-3",
        "colorNumber": 3,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-4",
        "colorNumber": 3,
        "label": [
          190,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "merlon-5",
        "colorNumber": 3,
        "label": [
          230,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 160,
          "w": 25,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "bastion-l",
        "colorNumber": 3,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 140,
          "w": 45,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-l",
        "colorNumber": 6,
        "label": [
          45,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,140 70,140 45,110"
        }
      },
      {
        "id": "arrow-slit-l",
        "colorNumber": 5,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "bastion-r",
        "colorNumber": 3,
        "label": [
          255,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 140,
          "w": 45,
          "h": 190,
          "rx": 3
        }
      },
      {
        "id": "dome-r",
        "colorNumber": 6,
        "label": [
          255,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,140 280,140 255,110"
        }
      },
      {
        "id": "arrow-slit-r",
        "colorNumber": 5,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "flag-l",
        "colorNumber": 6,
        "label": [
          45,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,85 70,95 45,105"
        }
      },
      {
        "id": "flag-r",
        "colorNumber": 6,
        "label": [
          255,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,85 280,95 255,105"
        }
      },
      {
        "id": "palm-tree-1",
        "colorNumber": 7,
        "label": [
          25,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "palm-tree-2",
        "colorNumber": 7,
        "label": [
          275,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 345,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 8,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 8,
        "label": [
          250,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "star-observatory",
    "name": "Observatory Dome",
    "emoji": "🌌",
    "category": "architecture",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0F172A",
      "#1E293B",
      "#334155",
      "#64748B",
      "#F59E0B",
      "#38BDF8",
      "#FFFFFF",
      "#8B5CF6"
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
        "id": "mountain-summit",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "observatory-base",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 210,
          "w": 150,
          "h": 120,
          "rx": 4
        }
      },
      {
        "id": "base-cornice",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 200,
          "w": 160,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "doorway",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 255,
          "w": 30,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "dome-outer",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,200 C 60,80 240,80 230,200 Z"
        }
      },
      {
        "id": "shutter-slit-open",
        "colorNumber": 1,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,200 L 140,90 L 160,90 L 165,200 Z"
        }
      },
      {
        "id": "telescope-barrel",
        "colorNumber": 5,
        "label": [
          160,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,150 185,85 195,90 155,155"
        }
      },
      {
        "id": "telescope-lens",
        "colorNumber": 6,
        "label": [
          190,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 88,
          "r": 8
        }
      },
      {
        "id": "crescent-moon",
        "colorNumber": 5,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 24
        }
      },
      {
        "id": "nebula-glow",
        "colorNumber": 8,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 25
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          95,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 35,
          "r": 6
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 7
        }
      },
      {
        "id": "star-4",
        "colorNumber": 7,
        "label": [
          205,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "star-5",
        "colorNumber": 7,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "star-6",
        "colorNumber": 7,
        "label": [
          260,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "star-7",
        "colorNumber": 7,
        "label": [
          60,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 220,
          "r": 5
        }
      },
      {
        "id": "star-8",
        "colorNumber": 7,
        "label": [
          245,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 220,
          "r": 5
        }
      },
      {
        "id": "pine-l",
        "colorNumber": 2,
        "label": [
          35,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "pine-r",
        "colorNumber": 2,
        "label": [
          265,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          150,
          15
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 15,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          270,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 70,
          "r": 6
        }
      }
    ]
  }
];
