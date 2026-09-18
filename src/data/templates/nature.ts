import { ImageTemplate } from '../../types';

// Category: nature (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)
export const NATURE_TEMPLATES: ImageTemplate[] = [
  {
    "id": "underwater-garden",
    "name": "Coral Reef Garden",
    "emoji": "🪸",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#00ACC1",
      "#FF7043",
      "#FF4081",
      "#7E57C2",
      "#26A69A",
      "#FFCA28",
      "#FFFFFF",
      "#D7CCC8",
      "#80DEEA",
      "#FFAB91",
      "#CE93D8",
      "#B2DFDB"
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
        "id": "sea-floor",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 120,
          "ry": 18
        }
      },
      {
        "id": "sea-floor-layer",
        "colorNumber": 13,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 360,
          "rx": 100,
          "ry": 12
        }
      },
      {
        "id": "brain-coral-body",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 55
        }
      },
      {
        "id": "brain-ridge-1",
        "colorNumber": 11,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,240 Q 135,225 150,240 Q 165,255 185,240"
        }
      },
      {
        "id": "brain-ridge-2",
        "colorNumber": 11,
        "label": [
          130,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,270 Q 135,255 150,270 Q 165,285 185,270"
        }
      },
      {
        "id": "staghorn-left",
        "colorNumber": 4,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,360 L 45,260 C 45,210 25,190 15,180 C 40,180 60,205 60,240 C 60,195 85,180 100,190 C 85,210 75,240 75,280 L 75,360 Z"
        }
      },
      {
        "id": "staghorn-tip-l1",
        "colorNumber": 11,
        "label": [
          20,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "staghorn-tip-l2",
        "colorNumber": 11,
        "label": [
          95,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "tube-coral-right",
        "colorNumber": 5,
        "label": [
          235,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,360 L 225,270 C 225,210 245,190 260,180 C 240,200 240,230 240,260 C 255,220 280,210 290,225 C 275,245 260,270 260,300 L 260,360 Z"
        }
      },
      {
        "id": "tube-tip-r1",
        "colorNumber": 12,
        "label": [
          255,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "tube-tip-r2",
        "colorNumber": 12,
        "label": [
          285,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 225,
          "r": 8
        }
      },
      {
        "id": "anemone-1",
        "colorNumber": 6,
        "label": [
          100,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,360 Q 100,310 110,360"
        }
      },
      {
        "id": "anemone-2",
        "colorNumber": 6,
        "label": [
          200,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,360 Q 200,310 210,360"
        }
      },
      {
        "id": "seagrass-l",
        "colorNumber": 6,
        "label": [
          40,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,360 Q 25,290 45,250 Q 55,300 45,360"
        }
      },
      {
        "id": "seagrass-r",
        "colorNumber": 6,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 265,360 Q 275,290 255,250 Q 245,300 255,360"
        }
      },
      {
        "id": "starfish",
        "colorNumber": 7,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,332 154,344 167,344 157,352 161,364 150,356 139,364 143,352 133,344 146,344"
        }
      },
      {
        "id": "swimming-fish",
        "colorNumber": 7,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,95 C 100,80 125,80 135,95 C 125,110 100,110 85,95 L 75,85 L 75,105 Z"
        }
      },
      {
        "id": "fish-eye",
        "colorNumber": 8,
        "label": [
          125,
          93
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 93,
          "r": 3
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 8,
        "label": [
          75,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 8,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 8,
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
        "id": "bubble-4",
        "colorNumber": 10,
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
        "id": "bubble-5",
        "colorNumber": 10,
        "label": [
          195,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 65,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          255,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 65,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "sunny",
    "name": "Sunny Day",
    "emoji": "☀️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#81D4FA",
      "#FFD600",
      "#FF6D00",
      "#FFAB00",
      "#FFFFFF",
      "#81C784",
      "#4CAF50",
      "#2E7D32",
      "#FFF9C4"
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
        "id": "hill-back",
        "colorNumber": 9,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,300 Q 150,250 300,300 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "hill-mid",
        "colorNumber": 8,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,290 300,335 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "hill-front",
        "colorNumber": 7,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,365 Q 150,330 300,365 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "sun-halo",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 72
        }
      },
      {
        "id": "sun-body",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 52
        }
      },
      {
        "id": "sun-core",
        "colorNumber": 10,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 32
        }
      },
      {
        "id": "ray-n",
        "colorNumber": 4,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 40,
          "w": 12,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "ray-s",
        "colorNumber": 4,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 245,
          "w": 12,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "ray-w",
        "colorNumber": 4,
        "label": [
          45,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 154,
          "w": 35,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "ray-e",
        "colorNumber": 4,
        "label": [
          255,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 235,
          "y": 154,
          "w": 35,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "ray-nw",
        "colorNumber": 4,
        "label": [
          75,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 75,
          "w": 25,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "ray-ne",
        "colorNumber": 4,
        "label": [
          225,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 75,
          "w": 25,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "ray-sw",
        "colorNumber": 4,
        "label": [
          75,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 225,
          "w": 25,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "ray-se",
        "colorNumber": 4,
        "label": [
          225,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 225,
          "w": 25,
          "h": 12,
          "rx": 6
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 6,
        "label": [
          45,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 275,
          "r": 22
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 6,
        "label": [
          75,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 265,
          "r": 28
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 6,
        "label": [
          105,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 275,
          "r": 20
        }
      },
      {
        "id": "cloud-r1",
        "colorNumber": 6,
        "label": [
          195,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 275,
          "r": 20
        }
      },
      {
        "id": "cloud-r2",
        "colorNumber": 6,
        "label": [
          225,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 265,
          "r": 28
        }
      },
      {
        "id": "cloud-r3",
        "colorNumber": 6,
        "label": [
          255,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 275,
          "r": 22
        }
      },
      {
        "id": "flower-1",
        "colorNumber": 3,
        "label": [
          60,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 365,
          "r": 8
        }
      },
      {
        "id": "flower-2",
        "colorNumber": 3,
        "label": [
          240,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 365,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          270,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 50,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "daisy",
    "name": "Daisy Flower",
    "emoji": "🌼",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#2E7D32",
      "#FFFFFF",
      "#FFF9C4",
      "#FFD600",
      "#FF6D00",
      "#A5D6A7"
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
        "id": "ground-soil",
        "colorNumber": 2,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 130,
          "ry": 25
        }
      },
      {
        "id": "stem",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 190,
          "w": 12,
          "h": 190,
          "rx": 6
        }
      },
      {
        "id": "leaf-l",
        "colorNumber": 3,
        "label": [
          90,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 310,
          "rx": 45,
          "ry": 20
        }
      },
      {
        "id": "leaf-l-vein",
        "colorNumber": 8,
        "label": [
          90,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,315 Q 100,310 60,310"
        }
      },
      {
        "id": "leaf-r",
        "colorNumber": 3,
        "label": [
          210,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 280,
          "rx": 45,
          "ry": 20
        }
      },
      {
        "id": "leaf-r-vein",
        "colorNumber": 8,
        "label": [
          210,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 156,285 Q 200,280 240,280"
        }
      },
      {
        "id": "petal-1",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 80,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-2",
        "colorNumber": 4,
        "label": [
          195,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 95,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-3",
        "colorNumber": 4,
        "label": [
          225,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 135,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-4",
        "colorNumber": 4,
        "label": [
          230,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 180,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-5",
        "colorNumber": 4,
        "label": [
          205,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 220,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-6",
        "colorNumber": 4,
        "label": [
          170,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 240,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-7",
        "colorNumber": 4,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 240,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-8",
        "colorNumber": 4,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 220,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-9",
        "colorNumber": 4,
        "label": [
          70,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 180,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-10",
        "colorNumber": 4,
        "label": [
          75,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 135,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "petal-11",
        "colorNumber": 4,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 95,
          "rx": 18,
          "ry": 42
        }
      },
      {
        "id": "center-halo",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 44
        }
      },
      {
        "id": "center-disk",
        "colorNumber": 6,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 34
        }
      },
      {
        "id": "center-core",
        "colorNumber": 7,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 20
        }
      },
      {
        "id": "ladybug-body",
        "colorNumber": 7,
        "label": [
          80,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 295,
          "r": 9
        }
      },
      {
        "id": "ladybug-head",
        "colorNumber": 3,
        "label": [
          74,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 74,
          "cy": 290,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
    "id": "rainbow",
    "name": "Rainbow Sky",
    "emoji": "🌈",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FF4444",
      "#FF9800",
      "#FFEB3B",
      "#4CAF50",
      "#2196F3",
      "#9C27B0",
      "#FFFFFF",
      "#FFD700"
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
        "id": "arc-red",
        "colorNumber": 2,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 10,310 A 140,140 0 0,1 290,310 L 275,310 A 125,125 0 0,0 25,310 Z"
        }
      },
      {
        "id": "arc-orange",
        "colorNumber": 3,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 25,310 A 125,125 0 0,1 275,310 L 260,310 A 110,110 0 0,0 40,310 Z"
        }
      },
      {
        "id": "arc-yellow",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,310 A 110,110 0 0,1 260,310 L 245,310 A 95,95 0 0,0 55,310 Z"
        }
      },
      {
        "id": "arc-green",
        "colorNumber": 5,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,310 A 95,95 0 0,1 245,310 L 230,310 A 80,80 0 0,0 70,310 Z"
        }
      },
      {
        "id": "arc-blue",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,310 A 80,80 0 0,1 230,310 L 215,310 A 65,65 0 0,0 85,310 Z"
        }
      },
      {
        "id": "arc-purple",
        "colorNumber": 7,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,310 A 65,65 0 0,1 215,310 L 200,310 A 50,50 0 0,0 100,310 Z"
        }
      },
      {
        "id": "cloud-l1",
        "colorNumber": 8,
        "label": [
          45,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 320,
          "r": 28
        }
      },
      {
        "id": "cloud-l2",
        "colorNumber": 8,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 32
        }
      },
      {
        "id": "cloud-l3",
        "colorNumber": 8,
        "label": [
          105,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 325,
          "r": 26
        }
      },
      {
        "id": "cloud-l4",
        "colorNumber": 8,
        "label": [
          65,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 345,
          "r": 24
        }
      },
      {
        "id": "cloud-l5",
        "colorNumber": 8,
        "label": [
          30,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "cloud-r1",
        "colorNumber": 8,
        "label": [
          195,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 325,
          "r": 26
        }
      },
      {
        "id": "cloud-r2",
        "colorNumber": 8,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 300,
          "r": 32
        }
      },
      {
        "id": "cloud-r3",
        "colorNumber": 8,
        "label": [
          255,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 320,
          "r": 28
        }
      },
      {
        "id": "cloud-r4",
        "colorNumber": 8,
        "label": [
          235,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 345,
          "r": 24
        }
      },
      {
        "id": "cloud-r5",
        "colorNumber": 8,
        "label": [
          270,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "sun-peek",
        "colorNumber": 9,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 26
        }
      },
      {
        "id": "star-1",
        "colorNumber": 9,
        "label": [
          35,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 60,
          "r": 9
        }
      },
      {
        "id": "star-2",
        "colorNumber": 9,
        "label": [
          265,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 60,
          "r": 9
        }
      },
      {
        "id": "star-3",
        "colorNumber": 9,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 11
        }
      },
      {
        "id": "star-4",
        "colorNumber": 9,
        "label": [
          100,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 220,
          "r": 7
        }
      },
      {
        "id": "star-5",
        "colorNumber": 9,
        "label": [
          200,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 220,
          "r": 7
        }
      },
      {
        "id": "meadow-base",
        "colorNumber": 5,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 370,
          "w": 300,
          "h": 30
        }
      }
    ]
  },
  {
    "id": "cactus",
    "name": "Desert Cactus",
    "emoji": "🌵",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FFB74D",
      "#FF9800",
      "#4CAF50",
      "#2E7D32",
      "#1B5E20",
      "#E91E63",
      "#FFD54F",
      "#D7CCC8"
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
        "id": "desert-sun",
        "colorNumber": 8,
        "label": [
          230,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 80,
          "r": 42
        }
      },
      {
        "id": "dune-back",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,310 Q 150,270 300,310 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "dune-front",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,350 Q 150,310 300,350 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "trunk-body",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 110,
          "w": 60,
          "h": 240,
          "rx": 30
        }
      },
      {
        "id": "trunk-rib-1",
        "colorNumber": 5,
        "label": [
          135,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 115,
          "w": 12,
          "h": 230,
          "rx": 6
        }
      },
      {
        "id": "trunk-rib-2",
        "colorNumber": 6,
        "label": [
          165,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 158,
          "y": 115,
          "w": 12,
          "h": 230,
          "rx": 6
        }
      },
      {
        "id": "arm-left",
        "colorNumber": 4,
        "label": [
          75,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,230 L 65,230 C 50,230 45,215 45,195 L 45,150 C 45,135 65,135 65,150 L 65,195 C 65,205 75,210 95,210 L 125,210 Z"
        }
      },
      {
        "id": "arm-l-rib",
        "colorNumber": 5,
        "label": [
          55,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 51,
          "y": 150,
          "w": 8,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "arm-right",
        "colorNumber": 4,
        "label": [
          225,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,210 L 235,210 C 250,210 255,195 255,175 L 255,130 C 255,115 235,115 235,130 L 235,175 C 235,185 225,190 205,190 L 175,190 Z"
        }
      },
      {
        "id": "arm-r-rib",
        "colorNumber": 5,
        "label": [
          245,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 241,
          "y": 130,
          "w": 8,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "flower-top",
        "colorNumber": 7,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 100,
          "r": 16
        }
      },
      {
        "id": "flower-core-t",
        "colorNumber": 8,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 100,
          "r": 7
        }
      },
      {
        "id": "flower-l",
        "colorNumber": 7,
        "label": [
          55,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 135,
          "r": 12
        }
      },
      {
        "id": "flower-r",
        "colorNumber": 7,
        "label": [
          245,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 115,
          "r": 12
        }
      },
      {
        "id": "rock-1",
        "colorNumber": 9,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 360,
          "r": 16
        }
      },
      {
        "id": "rock-2",
        "colorNumber": 9,
        "label": [
          70,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 370,
          "r": 12
        }
      },
      {
        "id": "rock-3",
        "colorNumber": 9,
        "label": [
          260,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 365,
          "r": 18
        }
      },
      {
        "id": "spine-1",
        "colorNumber": 8,
        "label": [
          122,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "spine-2",
        "colorNumber": 8,
        "label": [
          178,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "spine-3",
        "colorNumber": 8,
        "label": [
          122,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "spine-4",
        "colorNumber": 8,
        "label": [
          178,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          105,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 50,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "sunflower",
    "name": "Golden Sunflower",
    "emoji": "🌻",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#388E3C",
      "#1B5E20",
      "#FFD600",
      "#FFAB00",
      "#5D4037",
      "#3E2723",
      "#FF6D00"
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
        "id": "soil-mound",
        "colorNumber": 2,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 130,
          "ry": 25
        }
      },
      {
        "id": "stalk",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 180,
          "w": 16,
          "h": 200,
          "rx": 8
        }
      },
      {
        "id": "leaf-left",
        "colorNumber": 2,
        "label": [
          80,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 300,
          "rx": 50,
          "ry": 22
        }
      },
      {
        "id": "leaf-l-vein",
        "colorNumber": 3,
        "label": [
          80,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 142,305 Q 90,300 45,300"
        }
      },
      {
        "id": "leaf-right",
        "colorNumber": 2,
        "label": [
          220,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 280,
          "rx": 50,
          "ry": 22
        }
      },
      {
        "id": "leaf-r-vein",
        "colorNumber": 3,
        "label": [
          220,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 158,285 Q 210,280 255,280"
        }
      },
      {
        "id": "petal-1",
        "colorNumber": 4,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 60,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-2",
        "colorNumber": 5,
        "label": [
          185,
          75
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 75,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-3",
        "colorNumber": 4,
        "label": [
          215,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 105,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-4",
        "colorNumber": 5,
        "label": [
          230,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 145,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-5",
        "colorNumber": 4,
        "label": [
          225,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 185,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-6",
        "colorNumber": 5,
        "label": [
          200,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 220,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-7",
        "colorNumber": 4,
        "label": [
          165,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 235,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-8",
        "colorNumber": 5,
        "label": [
          135,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 235,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-9",
        "colorNumber": 4,
        "label": [
          100,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 220,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-10",
        "colorNumber": 5,
        "label": [
          75,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 185,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-11",
        "colorNumber": 4,
        "label": [
          70,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 145,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-12",
        "colorNumber": 5,
        "label": [
          85,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 105,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "petal-13",
        "colorNumber": 4,
        "label": [
          115,
          75
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 75,
          "rx": 16,
          "ry": 45
        }
      },
      {
        "id": "seed-rim",
        "colorNumber": 5,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 52
        }
      },
      {
        "id": "seed-mid",
        "colorNumber": 6,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 40
        }
      },
      {
        "id": "seed-center",
        "colorNumber": 7,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 24
        }
      },
      {
        "id": "sun-spark-1",
        "colorNumber": 8,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 8
        }
      },
      {
        "id": "sun-spark-2",
        "colorNumber": 8,
        "label": [
          260,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 50,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "northern-lights",
    "name": "Northern Lights",
    "emoji": "🌌",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0B1021",
      "#00E676",
      "#1DE9B6",
      "#00B0FF",
      "#7C4DFF",
      "#E040FB",
      "#FFFFFF",
      "#1E293B",
      "#334155"
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
        "id": "aurora-wave-1",
        "colorNumber": 2,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,60 Q 75,120 150,70 T 300,100 L 300,140 Q 225,100 150,130 T 0,100 Z"
        }
      },
      {
        "id": "aurora-wave-2",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,110 Q 75,160 150,115 T 300,145 L 300,185 Q 225,145 150,175 T 0,145 Z"
        }
      },
      {
        "id": "aurora-wave-3",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,155 Q 75,200 150,160 T 300,190 L 300,225 Q 225,185 150,215 T 0,185 Z"
        }
      },
      {
        "id": "aurora-wave-4",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,195 Q 75,235 150,200 T 300,230 L 300,260 Q 225,225 150,250 T 0,225 Z"
        }
      },
      {
        "id": "aurora-wave-5",
        "colorNumber": 6,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,230 Q 75,265 150,235 T 300,260 L 300,285 Q 225,255 150,275 T 0,255 Z"
        }
      },
      {
        "id": "mountain-l",
        "colorNumber": 8,
        "label": [
          70,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,340 L 70,270 L 140,340 Z"
        }
      },
      {
        "id": "mountain-r",
        "colorNumber": 8,
        "label": [
          230,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,340 L 230,270 L 300,340 Z"
        }
      },
      {
        "id": "mountain-c",
        "colorNumber": 9,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,340 L 150,260 L 210,340 Z"
        }
      },
      {
        "id": "frozen-lake",
        "colorNumber": 4,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "lake-refl",
        "colorNumber": 2,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,365 Q 150,355 250,365 Q 150,375 50,365"
        }
      },
      {
        "id": "tree-1",
        "colorNumber": 1,
        "label": [
          30,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,305 15,345 45,345"
        }
      },
      {
        "id": "tree-2",
        "colorNumber": 1,
        "label": [
          60,
          330
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,295 45,340 75,340"
        }
      },
      {
        "id": "tree-3",
        "colorNumber": 1,
        "label": [
          240,
          330
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,295 225,340 255,340"
        }
      },
      {
        "id": "tree-4",
        "colorNumber": 1,
        "label": [
          270,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "270,305 255,345 285,345"
        }
      },
      {
        "id": "moon",
        "colorNumber": 7,
        "label": [
          50,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          100,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 45,
          "r": 3
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          200,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 40,
          "r": 3
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          260,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 50,
          "r": 3
        }
      },
      {
        "id": "star-4",
        "colorNumber": 7,
        "label": [
          150,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 40,
          "r": 2
        }
      },
      {
        "id": "star-5",
        "colorNumber": 7,
        "label": [
          80,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 90,
          "r": 2
        }
      },
      {
        "id": "star-6",
        "colorNumber": 7,
        "label": [
          220,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 85,
          "r": 2
        }
      },
      {
        "id": "lake-shine",
        "colorNumber": 7,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 385,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "autumn-tree",
    "name": "Autumn Tree",
    "emoji": "🍁",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#795548",
      "#4E342E",
      "#FF5722",
      "#FF9800",
      "#FFC107",
      "#8D6E63",
      "#D84315",
      "#81C784"
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
        "id": "hill",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "trunk",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,370 L 135,240 L 115,190 L 130,195 L 145,230 L 155,230 L 170,195 L 185,190 L 165,240 L 170,370 Z"
        }
      },
      {
        "id": "branch-l",
        "colorNumber": 2,
        "label": [
          100,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 190,
          "rx": 28,
          "ry": 8
        }
      },
      {
        "id": "branch-r",
        "colorNumber": 2,
        "label": [
          200,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 190,
          "rx": 28,
          "ry": 8
        }
      },
      {
        "id": "foliage-top",
        "colorNumber": 4,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 44
        }
      },
      {
        "id": "foliage-tl",
        "colorNumber": 5,
        "label": [
          110,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 120,
          "r": 38
        }
      },
      {
        "id": "foliage-tr",
        "colorNumber": 6,
        "label": [
          190,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 120,
          "r": 38
        }
      },
      {
        "id": "foliage-ml",
        "colorNumber": 8,
        "label": [
          80,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 160,
          "r": 35
        }
      },
      {
        "id": "foliage-mr",
        "colorNumber": 4,
        "label": [
          220,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 160,
          "r": 35
        }
      },
      {
        "id": "foliage-c",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 42
        }
      },
      {
        "id": "foliage-bl",
        "colorNumber": 6,
        "label": [
          105,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 185,
          "r": 32
        }
      },
      {
        "id": "foliage-br",
        "colorNumber": 8,
        "label": [
          195,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 185,
          "r": 32
        }
      },
      {
        "id": "foliage-sub-1",
        "colorNumber": 4,
        "label": [
          130,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 110,
          "r": 20
        }
      },
      {
        "id": "foliage-sub-2",
        "colorNumber": 6,
        "label": [
          170,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 110,
          "r": 20
        }
      },
      {
        "id": "falling-1",
        "colorNumber": 4,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 230,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "falling-2",
        "colorNumber": 5,
        "label": [
          75,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 270,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "falling-3",
        "colorNumber": 8,
        "label": [
          240,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 240,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "falling-4",
        "colorNumber": 6,
        "label": [
          225,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 290,
          "rx": 11,
          "ry": 5
        }
      },
      {
        "id": "ground-leaf-1",
        "colorNumber": 4,
        "label": [
          80,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 370,
          "rx": 16,
          "ry": 7
        }
      },
      {
        "id": "ground-leaf-2",
        "colorNumber": 5,
        "label": [
          110,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 375,
          "rx": 14,
          "ry": 6
        }
      },
      {
        "id": "ground-leaf-3",
        "colorNumber": 6,
        "label": [
          190,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 375,
          "rx": 15,
          "ry": 6
        }
      },
      {
        "id": "ground-leaf-4",
        "colorNumber": 8,
        "label": [
          220,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 370,
          "rx": 16,
          "ry": 7
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          40,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          260,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 60,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "waterfall-valley",
    "name": "Waterfall Valley",
    "emoji": "🌊",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#0288D1",
      "#29B6F6",
      "#4FC3F7",
      "#546E7A",
      "#37474F",
      "#388E3C",
      "#2E7D32",
      "#FFFFFF",
      "#FFD54F"
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
        "id": "mountain-far-l",
        "colorNumber": 5,
        "label": [
          65,
          90
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,140 65,60 130,140"
        }
      },
      {
        "id": "mountain-far-r",
        "colorNumber": 5,
        "label": [
          235,
          90
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,140 235,60 300,140"
        }
      },
      {
        "id": "sun",
        "colorNumber": 10,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 22
        }
      },
      {
        "id": "cliff-left",
        "colorNumber": 6,
        "label": [
          60,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,120 L 120,120 L 110,310 L 0,330 Z"
        }
      },
      {
        "id": "cliff-right",
        "colorNumber": 6,
        "label": [
          240,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,120 L 300,120 L 300,330 L 190,310 Z"
        }
      },
      {
        "id": "cliff-ledge-l",
        "colorNumber": 7,
        "label": [
          60,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,120 L 120,120 L 115,145 L 0,145 Z"
        }
      },
      {
        "id": "cliff-ledge-r",
        "colorNumber": 7,
        "label": [
          240,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,120 L 300,120 L 300,145 L 185,145 Z"
        }
      },
      {
        "id": "pine-l1",
        "colorNumber": 8,
        "label": [
          40,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,80 25,120 55,120"
        }
      },
      {
        "id": "pine-l2",
        "colorNumber": 8,
        "label": [
          80,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,85 65,120 95,120"
        }
      },
      {
        "id": "pine-r1",
        "colorNumber": 8,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "220,85 205,120 235,120"
        }
      },
      {
        "id": "pine-r2",
        "colorNumber": 8,
        "label": [
          260,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "260,80 245,120 275,120"
        }
      },
      {
        "id": "falls-tier-1",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 120,
          "w": 60,
          "h": 60
        }
      },
      {
        "id": "falls-tier-2",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 180,
          "w": 70,
          "h": 70
        }
      },
      {
        "id": "falls-tier-3",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 250,
          "w": 80,
          "h": 65
        }
      },
      {
        "id": "falls-foam-1",
        "colorNumber": 9,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,180 Q 150,195 180,180"
        }
      },
      {
        "id": "falls-foam-2",
        "colorNumber": 9,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,250 Q 150,268 185,250"
        }
      },
      {
        "id": "pool",
        "colorNumber": 2,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 140,
          "ry": 45
        }
      },
      {
        "id": "pool-wave-1",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 95,
          "ry": 20
        }
      },
      {
        "id": "pool-wave-2",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 75,
          "ry": 14
        }
      },
      {
        "id": "splash-1",
        "colorNumber": 9,
        "label": [
          105,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 315,
          "r": 9
        }
      },
      {
        "id": "splash-2",
        "colorNumber": 9,
        "label": [
          195,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 315,
          "r": 9
        }
      },
      {
        "id": "splash-3",
        "colorNumber": 9,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 10,
        "label": [
          265,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 45,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "tulip",
    "name": "Spring Tulip",
    "emoji": "🌷",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#F48FB1",
      "#E91E63",
      "#C2185B",
      "#4CAF50",
      "#2E7D32",
      "#1B5E20",
      "#FFFFFF",
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
        "id": "garden-bed",
        "colorNumber": 6,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 130,
          "ry": 22
        }
      },
      {
        "id": "tulip-stem",
        "colorNumber": 5,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,180 Q 140,280 144,380 L 156,380 Q 152,280 156,180 Z"
        }
      },
      {
        "id": "leaf-left",
        "colorNumber": 5,
        "label": [
          85,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,370 Q 50,330 65,240 Q 100,270 144,320 Z"
        }
      },
      {
        "id": "leaf-l-midrib",
        "colorNumber": 7,
        "label": [
          95,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,370 Q 75,320 65,240"
        }
      },
      {
        "id": "leaf-right",
        "colorNumber": 5,
        "label": [
          215,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 156,360 Q 250,300 235,210 Q 200,250 156,300 Z"
        }
      },
      {
        "id": "leaf-r-midrib",
        "colorNumber": 7,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 156,360 Q 225,290 235,210"
        }
      },
      {
        "id": "petal-back-l",
        "colorNumber": 4,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 140,
          "rx": 24,
          "ry": 45
        }
      },
      {
        "id": "petal-back-r",
        "colorNumber": 4,
        "label": [
          185,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 140,
          "rx": 24,
          "ry": 45
        }
      },
      {
        "id": "petal-center-cup",
        "colorNumber": 3,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,165 C 120,105 150,80 150,80 C 150,80 180,105 180,165 C 180,195 120,195 120,165 Z"
        }
      },
      {
        "id": "petal-front-l",
        "colorNumber": 2,
        "label": [
          125,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,155 C 105,100 140,90 140,90 C 140,120 145,170 145,185 C 120,185 105,175 105,155 Z"
        }
      },
      {
        "id": "petal-front-r",
        "colorNumber": 2,
        "label": [
          175,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,155 C 195,100 160,90 160,90 C 160,120 155,170 155,185 C 180,185 195,175 195,155 Z"
        }
      },
      {
        "id": "petal-highlight",
        "colorNumber": 8,
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
        "id": "dew-1",
        "colorNumber": 8,
        "label": [
          75,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 255,
          "r": 5
        }
      },
      {
        "id": "dew-2",
        "colorNumber": 8,
        "label": [
          225,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "dew-3",
        "colorNumber": 8,
        "label": [
          130,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 160,
          "r": 4
        }
      },
      {
        "id": "butterfly-wing-tl",
        "colorNumber": 9,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 80,
          "r": 14
        }
      },
      {
        "id": "butterfly-wing-bl",
        "colorNumber": 3,
        "label": [
          62,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 62,
          "cy": 100,
          "r": 10
        }
      },
      {
        "id": "butterfly-wing-tr",
        "colorNumber": 9,
        "label": [
          80,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 80,
          "r": 14
        }
      },
      {
        "id": "butterfly-wing-br",
        "colorNumber": 3,
        "label": [
          78,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 78,
          "cy": 100,
          "r": 10
        }
      },
      {
        "id": "butterfly-body",
        "colorNumber": 7,
        "label": [
          70,
          90
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 90,
          "rx": 3,
          "ry": 12
        }
      },
      {
        "id": "sun-orb",
        "colorNumber": 9,
        "label": [
          245,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          35,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 50,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          265,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 120,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "rose",
    "name": "Red Rose",
    "emoji": "🌹",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#D32F2F",
      "#B71C1C",
      "#FF5252",
      "#388E3C",
      "#1B5E20",
      "#2E7D32",
      "#FFFFFF",
      "#FFD700"
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
        "id": "rose-stem",
        "colorNumber": 6,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 210,
          "w": 12,
          "h": 170,
          "rx": 6
        }
      },
      {
        "id": "thorn-l",
        "colorNumber": 6,
        "label": [
          135,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,270 128,278 144,285"
        }
      },
      {
        "id": "thorn-r",
        "colorNumber": 6,
        "label": [
          165,
          325
        ],
        "shape": {
          "kind": "polygon",
          "points": "156,320 172,328 156,335"
        }
      },
      {
        "id": "leaf-left",
        "colorNumber": 5,
        "label": [
          85,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 280,
          "rx": 45,
          "ry": 22
        }
      },
      {
        "id": "leaf-l-vein",
        "colorNumber": 6,
        "label": [
          85,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,280 Q 95,275 45,280"
        }
      },
      {
        "id": "leaf-right",
        "colorNumber": 5,
        "label": [
          215,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 310,
          "rx": 45,
          "ry": 22
        }
      },
      {
        "id": "leaf-r-vein",
        "colorNumber": 6,
        "label": [
          215,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 156,310 Q 205,305 255,310"
        }
      },
      {
        "id": "sepal-l",
        "colorNumber": 7,
        "label": [
          125,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 220,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "sepal-r",
        "colorNumber": 7,
        "label": [
          175,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 220,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "petal-outer-b",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 55
        }
      },
      {
        "id": "petal-wrap-l",
        "colorNumber": 2,
        "label": [
          115,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 145,
          "rx": 34,
          "ry": 48
        }
      },
      {
        "id": "petal-wrap-r",
        "colorNumber": 2,
        "label": [
          185,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 145,
          "rx": 34,
          "ry": 48
        }
      },
      {
        "id": "petal-mid-l",
        "colorNumber": 4,
        "label": [
          130,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 135,
          "rx": 25,
          "ry": 38
        }
      },
      {
        "id": "petal-mid-r",
        "colorNumber": 4,
        "label": [
          170,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 135,
          "rx": 25,
          "ry": 38
        }
      },
      {
        "id": "petal-cup",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 32
        }
      },
      {
        "id": "petal-inner-fold",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 22
        }
      },
      {
        "id": "rose-core",
        "colorNumber": 4,
        "label": [
          150,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 122,
          "r": 12
        }
      },
      {
        "id": "dew-drop-1",
        "colorNumber": 8,
        "label": [
          105,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "dew-drop-2",
        "colorNumber": 8,
        "label": [
          185,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "dew-drop-3",
        "colorNumber": 8,
        "label": [
          70,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 275,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
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
        "colorNumber": 9,
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
        "id": "ground-shadow",
        "colorNumber": 6,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 110,
          "ry": 15
        }
      }
    ]
  },
  {
    "id": "clover",
    "name": "Four Leaf Clover",
    "emoji": "🍀",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F0FDF4",
      "#22C55E",
      "#15803D",
      "#166534",
      "#86EFAC",
      "#FEF08A",
      "#EAB308",
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
        "id": "curved-stem",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,175 Q 160,280 120,360 L 130,365 Q 172,280 158,175 Z"
        }
      },
      {
        "id": "leaf-top-l",
        "colorNumber": 2,
        "label": [
          135,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 95,
          "rx": 28,
          "ry": 38
        }
      },
      {
        "id": "leaf-top-r",
        "colorNumber": 2,
        "label": [
          165,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 95,
          "rx": 28,
          "ry": 38
        }
      },
      {
        "id": "top-inner-pale",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,110 Q 150,85 170,110 Q 150,125 130,110"
        }
      },
      {
        "id": "leaf-bot-l",
        "colorNumber": 2,
        "label": [
          135,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 245,
          "rx": 28,
          "ry": 38
        }
      },
      {
        "id": "leaf-bot-r",
        "colorNumber": 2,
        "label": [
          165,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 245,
          "rx": 28,
          "ry": 38
        }
      },
      {
        "id": "bot-inner-pale",
        "colorNumber": 5,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,230 Q 150,255 170,230 Q 150,215 130,230"
        }
      },
      {
        "id": "leaf-left-t",
        "colorNumber": 2,
        "label": [
          75,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 155,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "leaf-left-b",
        "colorNumber": 2,
        "label": [
          75,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 185,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "left-inner-pale",
        "colorNumber": 5,
        "label": [
          85,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,150 Q 65,170 90,190 Q 105,170 90,150"
        }
      },
      {
        "id": "leaf-right-t",
        "colorNumber": 2,
        "label": [
          225,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 155,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "leaf-right-b",
        "colorNumber": 2,
        "label": [
          225,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 185,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "right-inner-pale",
        "colorNumber": 5,
        "label": [
          215,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,150 Q 235,170 210,190 Q 195,170 210,150"
        }
      },
      {
        "id": "clover-core-1",
        "colorNumber": 4,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 20
        }
      },
      {
        "id": "clover-core-2",
        "colorNumber": 5,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 10
        }
      },
      {
        "id": "ladybug-body",
        "colorNumber": 7,
        "label": [
          220,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "ladybug-head",
        "colorNumber": 4,
        "label": [
          226,
          134
        ],
        "shape": {
          "kind": "circle",
          "cx": 226,
          "cy": 134,
          "r": 4
        }
      },
      {
        "id": "lucky-star-1",
        "colorNumber": 6,
        "label": [
          50,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 50,
          "r": 10
        }
      },
      {
        "id": "lucky-star-2",
        "colorNumber": 6,
        "label": [
          250,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 50,
          "r": 10
        }
      },
      {
        "id": "lucky-star-3",
        "colorNumber": 6,
        "label": [
          40,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "lucky-star-4",
        "colorNumber": 6,
        "label": [
          260,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "sparkle-center",
        "colorNumber": 8,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "ground-meadow",
        "colorNumber": 3,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 120,
          "ry": 20
        }
      }
    ]
  },
  {
    "id": "palm-island",
    "name": "Tropical Island",
    "emoji": "🌴",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#00ACC1",
      "#00838F",
      "#FFD54F",
      "#FFA000",
      "#795548",
      "#4E342E",
      "#4CAF50",
      "#2E7D32",
      "#FF6D00"
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
        "id": "tropical-sun",
        "colorNumber": 10,
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
        "id": "ocean-deep",
        "colorNumber": 3,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 150,
          "ry": 60
        }
      },
      {
        "id": "ocean-shallow",
        "colorNumber": 2,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 140,
          "ry": 45
        }
      },
      {
        "id": "sandbar-back",
        "colorNumber": 5,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 120,
          "ry": 28
        }
      },
      {
        "id": "sandbar-front",
        "colorNumber": 4,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 105,
          "ry": 20
        }
      },
      {
        "id": "palm-trunk-l",
        "colorNumber": 6,
        "label": [
          115,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,340 Q 95,240 115,145 L 128,148 Q 110,240 142,340 Z"
        }
      },
      {
        "id": "trunk-ring-1",
        "colorNumber": 7,
        "label": [
          115,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 108,180 L 122,183"
        }
      },
      {
        "id": "trunk-ring-2",
        "colorNumber": 7,
        "label": [
          118,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 112,230 L 128,233"
        }
      },
      {
        "id": "trunk-ring-3",
        "colorNumber": 7,
        "label": [
          125,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,280 L 136,283"
        }
      },
      {
        "id": "frond-tl",
        "colorNumber": 8,
        "label": [
          50,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 60,95 20,120 Q 65,135 120,145"
        }
      },
      {
        "id": "frond-t",
        "colorNumber": 9,
        "label": [
          110,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 110,50 120,30 Q 135,65 120,145"
        }
      },
      {
        "id": "frond-tr",
        "colorNumber": 8,
        "label": [
          180,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 175,85 220,105 Q 170,130 120,145"
        }
      },
      {
        "id": "frond-ml",
        "colorNumber": 9,
        "label": [
          40,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 50,150 25,185 Q 65,175 120,145"
        }
      },
      {
        "id": "frond-mr",
        "colorNumber": 8,
        "label": [
          195,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 185,150 215,180 Q 170,170 120,145"
        }
      },
      {
        "id": "frond-bl",
        "colorNumber": 9,
        "label": [
          75,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 75,185 60,225 Q 95,195 120,145"
        }
      },
      {
        "id": "frond-br",
        "colorNumber": 8,
        "label": [
          165,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,145 Q 165,185 180,220 Q 145,190 120,145"
        }
      },
      {
        "id": "coconut-1",
        "colorNumber": 7,
        "label": [
          115,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 152,
          "r": 9
        }
      },
      {
        "id": "coconut-2",
        "colorNumber": 7,
        "label": [
          127,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 127,
          "cy": 152,
          "r": 9
        }
      },
      {
        "id": "coconut-3",
        "colorNumber": 7,
        "label": [
          121,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 121,
          "cy": 162,
          "r": 8
        }
      },
      {
        "id": "wave-crest-1",
        "colorNumber": 1,
        "label": [
          70,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,360 Q 70,350 90,360"
        }
      },
      {
        "id": "wave-crest-2",
        "colorNumber": 1,
        "label": [
          210,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,365 Q 210,355 230,365"
        }
      },
      {
        "id": "seabird-1",
        "colorNumber": 7,
        "label": [
          70,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,70 Q 70,60 85,70 Q 100,60 115,70"
        }
      },
      {
        "id": "seabird-2",
        "colorNumber": 7,
        "label": [
          170,
          55
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,55 Q 170,47 180,55 Q 190,47 200,55"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 270,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mushroom",
    "name": "Magic Forest Mushroom",
    "emoji": "🍄",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F3E5F5",
      "#E53935",
      "#C62828",
      "#FFFFFF",
      "#ECEFF1",
      "#CFD8DC",
      "#4CAF50",
      "#2E7D32",
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
        "id": "moss-ground",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "grass-patch-l",
        "colorNumber": 8,
        "label": [
          70,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,380 L 65,345 L 75,380 L 85,340 L 95,380 Z"
        }
      },
      {
        "id": "grass-patch-r",
        "colorNumber": 8,
        "label": [
          230,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,380 L 225,345 L 235,380 L 245,340 L 255,380 Z"
        }
      },
      {
        "id": "stem-body",
        "colorNumber": 5,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 185,
          "w": 70,
          "h": 180,
          "rx": 25
        }
      },
      {
        "id": "stem-shade-l",
        "colorNumber": 6,
        "label": [
          125,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 280,
          "rx": 12,
          "ry": 80
        }
      },
      {
        "id": "stem-skirt",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 230,
          "rx": 44,
          "ry": 14
        }
      },
      {
        "id": "cap-dome",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,185 C 35,80 265,80 265,185 C 265,200 35,200 35,185 Z"
        }
      },
      {
        "id": "cap-bottom-gills",
        "colorNumber": 3,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 115,
          "ry": 20
        }
      },
      {
        "id": "dot-big-c",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 24
        }
      },
      {
        "id": "dot-l1",
        "colorNumber": 4,
        "label": [
          85,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 130,
          "r": 18
        }
      },
      {
        "id": "dot-r1",
        "colorNumber": 4,
        "label": [
          215,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 130,
          "r": 18
        }
      },
      {
        "id": "dot-l2",
        "colorNumber": 4,
        "label": [
          65,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 170,
          "r": 14
        }
      },
      {
        "id": "dot-r2",
        "colorNumber": 4,
        "label": [
          235,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 170,
          "r": 14
        }
      },
      {
        "id": "dot-top",
        "colorNumber": 4,
        "label": [
          150,
          68
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 68,
          "r": 12
        }
      },
      {
        "id": "dot-sub-1",
        "colorNumber": 4,
        "label": [
          115,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "dot-sub-2",
        "colorNumber": 4,
        "label": [
          185,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "baby-cap",
        "colorNumber": 2,
        "label": [
          60,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,320 C 40,290 80,290 80,320 Z"
        }
      },
      {
        "id": "baby-stem",
        "colorNumber": 4,
        "label": [
          60,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 52,
          "y": 320,
          "w": 16,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "baby-dot",
        "colorNumber": 4,
        "label": [
          60,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 305,
          "r": 5
        }
      },
      {
        "id": "spore-glow-1",
        "colorNumber": 9,
        "label": [
          50,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "spore-glow-2",
        "colorNumber": 9,
        "label": [
          250,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "spore-glow-3",
        "colorNumber": 9,
        "label": [
          30,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "spore-glow-4",
        "colorNumber": 9,
        "label": [
          270,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 240,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "pine-forest",
    "name": "Pine Forest",
    "emoji": "🌲",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#2E7D32",
      "#1B5E20",
      "#388E3C",
      "#795548",
      "#4E342E",
      "#81C784",
      "#FFFFFF",
      "#FFD54F"
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
        "id": "full-moon",
        "colorNumber": 8,
        "label": [
          230,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 70,
          "r": 30
        }
      },
      {
        "id": "mountain-silhouette",
        "colorNumber": 7,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,170 150,70 300,170"
        }
      },
      {
        "id": "hill-back",
        "colorNumber": 2,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 140,
          "ry": 45
        }
      },
      {
        "id": "hill-front",
        "colorNumber": 3,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 130,
          "ry": 30
        }
      },
      {
        "id": "tree-c-top",
        "colorNumber": 2,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 120,145 180,145"
        }
      },
      {
        "id": "tree-c-mid",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,130 105,200 195,200"
        }
      },
      {
        "id": "tree-c-bot",
        "colorNumber": 4,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,180 90,265 210,265"
        }
      },
      {
        "id": "tree-c-trunk",
        "colorNumber": 5,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 260,
          "w": 20,
          "h": 60,
          "rx": 4
        }
      },
      {
        "id": "tree-l-top",
        "colorNumber": 4,
        "label": [
          75,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,130 50,180 100,180"
        }
      },
      {
        "id": "tree-l-mid",
        "colorNumber": 2,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,170 40,230 110,230"
        }
      },
      {
        "id": "tree-l-bot",
        "colorNumber": 3,
        "label": [
          75,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,215 25,285 125,285"
        }
      },
      {
        "id": "tree-l-trunk",
        "colorNumber": 6,
        "label": [
          75,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 68,
          "y": 280,
          "w": 14,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "tree-r-top",
        "colorNumber": 3,
        "label": [
          225,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,130 200,180 250,180"
        }
      },
      {
        "id": "tree-r-mid",
        "colorNumber": 4,
        "label": [
          225,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,170 190,230 260,230"
        }
      },
      {
        "id": "tree-r-bot",
        "colorNumber": 2,
        "label": [
          225,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,215 175,285 275,285"
        }
      },
      {
        "id": "tree-r-trunk",
        "colorNumber": 6,
        "label": [
          225,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 218,
          "y": 280,
          "w": 14,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "star-1",
        "colorNumber": 9,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 3
        }
      },
      {
        "id": "star-2",
        "colorNumber": 9,
        "label": [
          90,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 40,
          "r": 2
        }
      },
      {
        "id": "star-3",
        "colorNumber": 9,
        "label": [
          140,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 45,
          "r": 3
        }
      },
      {
        "id": "star-4",
        "colorNumber": 9,
        "label": [
          170,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 35,
          "r": 2
        }
      },
      {
        "id": "fallen-cone",
        "colorNumber": 5,
        "label": [
          110,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 370,
          "rx": 10,
          "ry": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          45,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          270,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 110,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "snowy-mountain",
    "name": "Snow Mountain",
    "emoji": "🏔️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#0288D1",
      "#B0BEC5",
      "#78909C",
      "#37474F",
      "#FFFFFF",
      "#2E7D32",
      "#FFD54F"
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
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 70,
          "r": 30
        }
      },
      {
        "id": "mountain-bg-l",
        "colorNumber": 3,
        "label": [
          60,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,230 60,110 120,230"
        }
      },
      {
        "id": "mountain-bg-r",
        "colorNumber": 3,
        "label": [
          240,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,230 240,110 300,230"
        }
      },
      {
        "id": "snow-bg-l",
        "colorNumber": 6,
        "label": [
          60,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,110 40,150 80,150"
        }
      },
      {
        "id": "snow-bg-r",
        "colorNumber": 6,
        "label": [
          240,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,110 220,150 260,150"
        }
      },
      {
        "id": "main-peak-body",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,270 150,80 280,270"
        }
      },
      {
        "id": "main-peak-shadow",
        "colorNumber": 5,
        "label": [
          185,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 280,270 150,270"
        }
      },
      {
        "id": "glacier-cap",
        "colorNumber": 6,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 110,140 135,130 150,150 165,130 190,140"
        }
      },
      {
        "id": "glacier-left",
        "colorNumber": 6,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,140 85,195 105,185 125,210"
        }
      },
      {
        "id": "glacier-right",
        "colorNumber": 3,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,140 170,210 190,185 215,195"
        }
      },
      {
        "id": "valley-base",
        "colorNumber": 7,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 330,
          "rx": 145,
          "ry": 55
        }
      },
      {
        "id": "glacial-lake",
        "colorNumber": 2,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 355,
          "rx": 120,
          "ry": 30
        }
      },
      {
        "id": "lake-ripple",
        "colorNumber": 6,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,350 Q 150,340 230,350"
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 7,
        "label": [
          40,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,280 25,330 55,330"
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 7,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,270 60,320 90,320"
        }
      },
      {
        "id": "pine-3",
        "colorNumber": 7,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,270 210,320 240,320"
        }
      },
      {
        "id": "pine-4",
        "colorNumber": 7,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "260,280 245,330 275,330"
        }
      },
      {
        "id": "eagle",
        "colorNumber": 5,
        "label": [
          95,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,65 Q 95,55 110,65 Q 125,55 140,65"
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 6,
        "label": [
          60,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 90,
          "r": 18
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 6,
        "label": [
          85,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 80,
          "r": 24
        }
      },
      {
        "id": "cloud-3",
        "colorNumber": 6,
        "label": [
          110,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 90,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          270,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 130,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "ocean-wave",
    "name": "Ocean Wave",
    "emoji": "🌊",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#0277BD",
      "#0288D1",
      "#03A9F4",
      "#4FC3F7",
      "#FFFFFF",
      "#FFD54F",
      "#B2EBF2"
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
        "id": "sun",
        "colorNumber": 7,
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
        "id": "sea-horizon",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,190 L 300,190 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "wave-body-deep",
        "colorNumber": 2,
        "label": [
          120,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,330 Q 130,330 180,240 Q 230,150 150,150 Q 80,150 40,210 L 0,250 Z"
        }
      },
      {
        "id": "wave-body-mid",
        "colorNumber": 3,
        "label": [
          135,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 10,340 Q 140,340 190,230 Q 220,165 160,165 Q 100,165 60,225 Z"
        }
      },
      {
        "id": "wave-barrel-curl",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,350 Q 150,350 200,220 Q 210,180 170,180 Q 120,180 80,240 Z"
        }
      },
      {
        "id": "wave-crest-curl",
        "colorNumber": 6,
        "label": [
          170,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,150 C 230,140 230,200 180,220 C 140,220 120,190 150,150 Z"
        }
      },
      {
        "id": "spray-1",
        "colorNumber": 6,
        "label": [
          195,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "spray-2",
        "colorNumber": 6,
        "label": [
          220,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "spray-3",
        "colorNumber": 6,
        "label": [
          240,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 175,
          "r": 10
        }
      },
      {
        "id": "spray-4",
        "colorNumber": 6,
        "label": [
          210,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 120,
          "r": 9
        }
      },
      {
        "id": "spray-5",
        "colorNumber": 6,
        "label": [
          170,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 125,
          "r": 8
        }
      },
      {
        "id": "spray-6",
        "colorNumber": 6,
        "label": [
          255,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "foam-base-1",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 360,
          "rx": 140,
          "ry": 25
        }
      },
      {
        "id": "foam-base-2",
        "colorNumber": 6,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 120,
          "ry": 18
        }
      },
      {
        "id": "foam-base-3",
        "colorNumber": 8,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 90,
          "ry": 10
        }
      },
      {
        "id": "seabird-l",
        "colorNumber": 2,
        "label": [
          70,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,70 Q 70,60 85,70 Q 100,60 115,70"
        }
      },
      {
        "id": "seabird-r",
        "colorNumber": 2,
        "label": [
          140,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,95 Q 140,87 150,95 Q 160,87 170,95"
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 6,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 7
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 6,
        "label": [
          90,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 310,
          "r": 6
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 6,
        "label": [
          240,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 310,
          "r": 7
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          270,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          190,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 250,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "volcano-peak",
    "name": "Volcano Island",
    "emoji": "🌋",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFE0B2",
      "#D84315",
      "#BF360C",
      "#FF5722",
      "#FF9800",
      "#FFD54F",
      "#3E2723",
      "#00838F",
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
        "id": "ocean",
        "colorNumber": 8,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 360,
          "rx": 150,
          "ry": 50
        }
      },
      {
        "id": "volcano-slope-l",
        "colorNumber": 7,
        "label": [
          80,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,350 110,190 150,350"
        }
      },
      {
        "id": "volcano-slope-r",
        "colorNumber": 7,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,350 190,190 280,350"
        }
      },
      {
        "id": "volcano-center",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,190 190,190 220,350 80,350"
        }
      },
      {
        "id": "crater-rim",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 190,
          "rx": 40,
          "ry": 12
        }
      },
      {
        "id": "crater-magma",
        "colorNumber": 5,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 190,
          "rx": 28,
          "ry": 7
        }
      },
      {
        "id": "lava-channel-1",
        "colorNumber": 4,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,195 Q 120,260 105,340"
        }
      },
      {
        "id": "lava-channel-2",
        "colorNumber": 5,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,195 Q 155,270 150,345"
        }
      },
      {
        "id": "lava-channel-3",
        "colorNumber": 4,
        "label": [
          170,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,195 Q 180,260 195,340"
        }
      },
      {
        "id": "smoke-plume-1",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 32
        }
      },
      {
        "id": "smoke-plume-2",
        "colorNumber": 4,
        "label": [
          125,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 115,
          "r": 28
        }
      },
      {
        "id": "smoke-plume-3",
        "colorNumber": 5,
        "label": [
          175,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 115,
          "r": 28
        }
      },
      {
        "id": "smoke-plume-4",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 35
        }
      },
      {
        "id": "smoke-plume-5",
        "colorNumber": 4,
        "label": [
          110,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 65,
          "r": 22
        }
      },
      {
        "id": "smoke-plume-6",
        "colorNumber": 5,
        "label": [
          190,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 65,
          "r": 22
        }
      },
      {
        "id": "firebomb-1",
        "colorNumber": 6,
        "label": [
          80,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "firebomb-2",
        "colorNumber": 6,
        "label": [
          220,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "firebomb-3",
        "colorNumber": 6,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 8
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          60,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
        "label": [
          240,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "ocean-wave-l",
        "colorNumber": 9,
        "label": [
          70,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,370 Q 70,360 95,370"
        }
      },
      {
        "id": "ocean-wave-r",
        "colorNumber": 9,
        "label": [
          230,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,370 Q 230,360 255,370"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          270,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "golden-sunset",
    "name": "Golden Sunset",
    "emoji": "🌅",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#311B92",
      "#7B1FA2",
      "#C2185B",
      "#E64A19",
      "#F57C00",
      "#FFB300",
      "#FFF176",
      "#212121",
      "#0D47A1"
    ],
    "regions": [
      {
        "id": "sky-top",
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
          "h": 70
        }
      },
      {
        "id": "sky-mid-1",
        "colorNumber": 2,
        "label": [
          25,
          90
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 70,
          "w": 300,
          "h": 60
        }
      },
      {
        "id": "sky-mid-2",
        "colorNumber": 3,
        "label": [
          25,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 130,
          "w": 300,
          "h": 50
        }
      },
      {
        "id": "sky-bot-1",
        "colorNumber": 4,
        "label": [
          25,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 180,
          "w": 300,
          "h": 40
        }
      },
      {
        "id": "sky-bot-2",
        "colorNumber": 5,
        "label": [
          25,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 220,
          "w": 300,
          "h": 30
        }
      },
      {
        "id": "sun-body",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 55
        }
      },
      {
        "id": "sun-core",
        "colorNumber": 7,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 35
        }
      },
      {
        "id": "ocean-base",
        "colorNumber": 9,
        "label": [
          25,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 250,
          "w": 300,
          "h": 150
        }
      },
      {
        "id": "refl-1",
        "colorNumber": 6,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,260 L 190,260 L 180,270 L 120,270 Z"
        }
      },
      {
        "id": "refl-2",
        "colorNumber": 7,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,275 L 205,275 L 195,285 L 105,285 Z"
        }
      },
      {
        "id": "refl-3",
        "colorNumber": 6,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,290 L 215,290 L 205,305 L 95,305 Z"
        }
      },
      {
        "id": "refl-4",
        "colorNumber": 7,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,310 L 225,310 L 210,330 L 90,330 Z"
        }
      },
      {
        "id": "refl-5",
        "colorNumber": 5,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,335 L 240,335 L 220,360 L 80,360 Z"
        }
      },
      {
        "id": "cliff-l",
        "colorNumber": 8,
        "label": [
          45,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,240 Q 60,250 50,380 L 0,380 Z"
        }
      },
      {
        "id": "cliff-r",
        "colorNumber": 8,
        "label": [
          255,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 300,240 Q 240,250 250,380 L 300,380 Z"
        }
      },
      {
        "id": "palm-l",
        "colorNumber": 8,
        "label": [
          40,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,200 20,250 60,250"
        }
      },
      {
        "id": "palm-r",
        "colorNumber": 8,
        "label": [
          260,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "260,200 240,250 280,250"
        }
      },
      {
        "id": "cloud-l1",
        "colorNumber": 3,
        "label": [
          60,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,140 Q 60,120 100,140"
        }
      },
      {
        "id": "cloud-r1",
        "colorNumber": 3,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,140 Q 240,120 280,140"
        }
      },
      {
        "id": "gull-1",
        "colorNumber": 8,
        "label": [
          80,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,80 Q 80,70 95,80 Q 110,70 125,80"
        }
      },
      {
        "id": "gull-2",
        "colorNumber": 8,
        "label": [
          190,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,95 Q 190,87 200,95 Q 210,87 220,95"
        }
      },
      {
        "id": "star-spark-1",
        "colorNumber": 7,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-spark-2",
        "colorNumber": 7,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "star-spark-3",
        "colorNumber": 7,
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
      }
    ]
  },
  {
    "id": "sacred-lotus",
    "name": "Water Lotus",
    "emoji": "🪷",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2F1",
      "#00897B",
      "#004D40",
      "#F8BBD0",
      "#EC407A",
      "#C2185B",
      "#FFD54F",
      "#FFA000",
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
        "id": "pond-water",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 140,
          "ry": 80
        }
      },
      {
        "id": "pond-ripple-1",
        "colorNumber": 1,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 320,
          "rx": 115,
          "ry": 60
        }
      },
      {
        "id": "pond-ripple-2",
        "colorNumber": 9,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 85,
          "ry": 40
        }
      },
      {
        "id": "pad-l",
        "colorNumber": 2,
        "label": [
          80,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 270,
          "rx": 65,
          "ry": 30
        }
      },
      {
        "id": "pad-l-cleft",
        "colorNumber": 3,
        "label": [
          80,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,270 L 130,260"
        }
      },
      {
        "id": "pad-r",
        "colorNumber": 2,
        "label": [
          220,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 280,
          "rx": 65,
          "ry": 30
        }
      },
      {
        "id": "pad-r-cleft",
        "colorNumber": 3,
        "label": [
          220,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,280 L 170,270"
        }
      },
      {
        "id": "petal-out-l",
        "colorNumber": 4,
        "label": [
          100,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 200,
          "rx": 32,
          "ry": 50
        }
      },
      {
        "id": "petal-out-r",
        "colorNumber": 4,
        "label": [
          200,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 200,
          "rx": 32,
          "ry": 50
        }
      },
      {
        "id": "petal-out-b",
        "colorNumber": 5,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 45,
          "ry": 35
        }
      },
      {
        "id": "petal-mid-l",
        "colorNumber": 5,
        "label": [
          125,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 170,
          "rx": 26,
          "ry": 52
        }
      },
      {
        "id": "petal-mid-r",
        "colorNumber": 5,
        "label": [
          175,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 170,
          "rx": 26,
          "ry": 52
        }
      },
      {
        "id": "petal-center-top",
        "colorNumber": 6,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 24,
          "ry": 55
        }
      },
      {
        "id": "petal-in-l",
        "colorNumber": 4,
        "label": [
          138,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 138,
          "cy": 185,
          "rx": 18,
          "ry": 40
        }
      },
      {
        "id": "petal-in-r",
        "colorNumber": 4,
        "label": [
          162,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 162,
          "cy": 185,
          "rx": 18,
          "ry": 40
        }
      },
      {
        "id": "seed-pod",
        "colorNumber": 7,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 18
        }
      },
      {
        "id": "seed-pod-core",
        "colorNumber": 8,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 9
        }
      },
      {
        "id": "dew-1",
        "colorNumber": 9,
        "label": [
          75,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "dew-2",
        "colorNumber": 9,
        "label": [
          225,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "dragonfly-body",
        "colorNumber": 8,
        "label": [
          70,
          100
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 100,
          "rx": 3,
          "ry": 16
        }
      },
      {
        "id": "dragonfly-wing-l",
        "colorNumber": 9,
        "label": [
          50,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 50,
          "cy": 95,
          "rx": 18,
          "ry": 5
        }
      },
      {
        "id": "dragonfly-wing-r",
        "colorNumber": 9,
        "label": [
          90,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 95,
          "rx": 18,
          "ry": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "maple-leaf",
    "name": "Maple Leaf",
    "emoji": "🍁",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D84315",
      "#BF360C",
      "#FF5722",
      "#FF8A65",
      "#795548",
      "#FFB300",
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
        "id": "leaf-stem",
        "colorNumber": 6,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 260,
          "w": 10,
          "h": 110,
          "rx": 5
        }
      },
      {
        "id": "lobe-center-mid",
        "colorNumber": 2,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,170 L 150,60 L 170,170 Z"
        }
      },
      {
        "id": "lobe-center-l",
        "colorNumber": 4,
        "label": [
          118,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,140 100,105 135,130"
        }
      },
      {
        "id": "lobe-center-r",
        "colorNumber": 4,
        "label": [
          182,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,140 200,105 165,130"
        }
      },
      {
        "id": "lobe-left-mid",
        "colorNumber": 3,
        "label": [
          90,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,195 L 45,150 L 130,225 Z"
        }
      },
      {
        "id": "lobe-left-t",
        "colorNumber": 5,
        "label": [
          75,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,140 60,105 95,135"
        }
      },
      {
        "id": "lobe-left-b",
        "colorNumber": 5,
        "label": [
          75,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,185 55,210 105,210"
        }
      },
      {
        "id": "lobe-right-mid",
        "colorNumber": 3,
        "label": [
          210,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,195 L 255,150 L 170,225 Z"
        }
      },
      {
        "id": "lobe-right-t",
        "colorNumber": 5,
        "label": [
          225,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,140 240,105 205,135"
        }
      },
      {
        "id": "lobe-right-b",
        "colorNumber": 5,
        "label": [
          225,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "215,185 245,210 195,210"
        }
      },
      {
        "id": "lobe-basal-l",
        "colorNumber": 4,
        "label": [
          95,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,240 75,260 130,265"
        }
      },
      {
        "id": "lobe-basal-r",
        "colorNumber": 4,
        "label": [
          205,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "160,240 225,260 170,265"
        }
      },
      {
        "id": "leaf-center-body",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 36
        }
      },
      {
        "id": "vein-center",
        "colorNumber": 7,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 150,75"
        }
      },
      {
        "id": "vein-left",
        "colorNumber": 7,
        "label": [
          95,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 55,155"
        }
      },
      {
        "id": "vein-right",
        "colorNumber": 7,
        "label": [
          205,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 245,155"
        }
      },
      {
        "id": "vein-basal-l",
        "colorNumber": 7,
        "label": [
          110,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 85,260"
        }
      },
      {
        "id": "vein-basal-r",
        "colorNumber": 7,
        "label": [
          190,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 215,260"
        }
      },
      {
        "id": "mini-leaf-1",
        "colorNumber": 4,
        "label": [
          55,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 330,
          "rx": 16,
          "ry": 9
        }
      },
      {
        "id": "mini-leaf-2",
        "colorNumber": 3,
        "label": [
          245,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 330,
          "rx": 16,
          "ry": 9
        }
      },
      {
        "id": "dew-drop",
        "colorNumber": 8,
        "label": [
          135,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
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
        "colorNumber": 7,
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
    "id": "flower-bouquet",
    "name": "Flower Bouquet",
    "emoji": "💐",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#E91E63",
      "#9C27B0",
      "#FF9800",
      "#FFD54F",
      "#4CAF50",
      "#2E7D32",
      "#FFE082",
      "#FF4081"
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
        "id": "wrap-cone-l",
        "colorNumber": 8,
        "label": [
          115,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,230 150,380 150,230"
        }
      },
      {
        "id": "wrap-cone-r",
        "colorNumber": 8,
        "label": [
          185,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,230 150,380 150,230"
        }
      },
      {
        "id": "ribbon-knot",
        "colorNumber": 2,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 330,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "ribbon-tail-l",
        "colorNumber": 2,
        "label": [
          130,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,335 Q 125,360 115,385"
        }
      },
      {
        "id": "ribbon-tail-r",
        "colorNumber": 2,
        "label": [
          170,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,335 Q 175,360 185,385"
        }
      },
      {
        "id": "fern-l",
        "colorNumber": 6,
        "label": [
          70,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 170,
          "rx": 35,
          "ry": 14
        }
      },
      {
        "id": "fern-r",
        "colorNumber": 6,
        "label": [
          230,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 170,
          "rx": 35,
          "ry": 14
        }
      },
      {
        "id": "fern-t",
        "colorNumber": 7,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 70,
          "rx": 14,
          "ry": 35
        }
      },
      {
        "id": "rose-out",
        "colorNumber": 2,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 36
        }
      },
      {
        "id": "rose-mid",
        "colorNumber": 9,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 24
        }
      },
      {
        "id": "rose-in",
        "colorNumber": 2,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 12
        }
      },
      {
        "id": "tulip-l-b",
        "colorNumber": 3,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 140,
          "rx": 24,
          "ry": 32
        }
      },
      {
        "id": "tulip-l-petal",
        "colorNumber": 3,
        "label": [
          95,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 130,
          "rx": 14,
          "ry": 26
        }
      },
      {
        "id": "daisy-r-petal-1",
        "colorNumber": 4,
        "label": [
          200,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 115,
          "r": 14
        }
      },
      {
        "id": "daisy-r-petal-2",
        "colorNumber": 4,
        "label": [
          220,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 135,
          "r": 14
        }
      },
      {
        "id": "daisy-r-petal-3",
        "colorNumber": 4,
        "label": [
          200,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "daisy-r-petal-4",
        "colorNumber": 4,
        "label": [
          180,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 135,
          "r": 14
        }
      },
      {
        "id": "daisy-r-core",
        "colorNumber": 5,
        "label": [
          200,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 135,
          "r": 12
        }
      },
      {
        "id": "top-blossom-1",
        "colorNumber": 5,
        "label": [
          135,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 110,
          "r": 12
        }
      },
      {
        "id": "top-blossom-2",
        "colorNumber": 5,
        "label": [
          165,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 110,
          "r": 12
        }
      },
      {
        "id": "top-blossom-c",
        "colorNumber": 4,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
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
        "id": "sparkle-3",
        "colorNumber": 9,
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
    "id": "succulent-pot",
    "name": "Green Succulent",
    "emoji": "🪴",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFFDE7",
      "#E65100",
      "#FFB74D",
      "#2E7D32",
      "#4CAF50",
      "#81C784",
      "#A5D6A7",
      "#E91E63",
      "#5D4037"
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
        "id": "pot-rim",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 85,
          "ry": 20
        }
      },
      {
        "id": "pot-body",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,245 225,245 205,375 95,375"
        }
      },
      {
        "id": "pot-soil",
        "colorNumber": 9,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 72,
          "ry": 14
        }
      },
      {
        "id": "leaf-out-1",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 125,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-out-2",
        "colorNumber": 4,
        "label": [
          195,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 145,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-out-3",
        "colorNumber": 4,
        "label": [
          205,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 195,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-out-4",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-out-5",
        "colorNumber": 4,
        "label": [
          95,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 195,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-out-6",
        "colorNumber": 4,
        "label": [
          105,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 145,
          "rx": 20,
          "ry": 38
        }
      },
      {
        "id": "leaf-mid-1",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 145,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-mid-2",
        "colorNumber": 5,
        "label": [
          180,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 160,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-mid-3",
        "colorNumber": 5,
        "label": [
          180,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 190,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-mid-4",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-mid-5",
        "colorNumber": 5,
        "label": [
          120,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 190,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-mid-6",
        "colorNumber": 5,
        "label": [
          120,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 160,
          "rx": 16,
          "ry": 30
        }
      },
      {
        "id": "leaf-core-1",
        "colorNumber": 6,
        "label": [
          140,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 168,
          "r": 12
        }
      },
      {
        "id": "leaf-core-2",
        "colorNumber": 6,
        "label": [
          160,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 168,
          "r": 12
        }
      },
      {
        "id": "leaf-core-3",
        "colorNumber": 7,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "pink-tip-1",
        "colorNumber": 8,
        "label": [
          150,
          92
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 92,
          "r": 4
        }
      },
      {
        "id": "pink-tip-2",
        "colorNumber": 8,
        "label": [
          210,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 120,
          "r": 4
        }
      },
      {
        "id": "pink-tip-3",
        "colorNumber": 8,
        "label": [
          90,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 120,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
    "id": "lightning-storm",
    "name": "Lightning Storm",
    "emoji": "⚡",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D1B2A",
      "#1B263B",
      "#415A77",
      "#FFD600",
      "#FFEA00",
      "#FFFFFF",
      "#00B0FF",
      "#388E3C"
    ],
    "regions": [
      {
        "id": "storm-sky",
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
        "id": "storm-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,365 Q 150,335 300,365 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 2,
        "label": [
          60,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 90,
          "r": 40
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 3,
        "label": [
          110,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 70,
          "r": 52
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 2,
        "label": [
          165,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 65,
          "r": 56
        }
      },
      {
        "id": "cloud-p4",
        "colorNumber": 3,
        "label": [
          225,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 75,
          "r": 48
        }
      },
      {
        "id": "cloud-p5",
        "colorNumber": 2,
        "label": [
          265,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 105,
          "r": 36
        }
      },
      {
        "id": "cloud-base",
        "colorNumber": 3,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 95,
          "w": 240,
          "h": 45,
          "rx": 15
        }
      },
      {
        "id": "bolt-main",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "160,115 130,200 155,200 120,310 185,185 155,185"
        }
      },
      {
        "id": "bolt-core",
        "colorNumber": 6,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "158,125 135,195 152,195 128,295 175,188 152,188"
        }
      },
      {
        "id": "bolt-branch-l",
        "colorNumber": 5,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,190 100,230 115,230 85,285 118,225 105,225"
        }
      },
      {
        "id": "bolt-branch-r",
        "colorNumber": 5,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,195 210,235 195,235 225,285 190,230 202,230"
        }
      },
      {
        "id": "rain-1",
        "colorNumber": 7,
        "label": [
          45,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,170 L 35,270"
        }
      },
      {
        "id": "rain-2",
        "colorNumber": 7,
        "label": [
          75,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,200 L 65,300"
        }
      },
      {
        "id": "rain-3",
        "colorNumber": 7,
        "label": [
          105,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,230 L 95,330"
        }
      },
      {
        "id": "rain-4",
        "colorNumber": 7,
        "label": [
          195,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,230 L 185,330"
        }
      },
      {
        "id": "rain-5",
        "colorNumber": 7,
        "label": [
          225,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,200 L 215,300"
        }
      },
      {
        "id": "rain-6",
        "colorNumber": 7,
        "label": [
          255,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 255,170 L 245,270"
        }
      },
      {
        "id": "flash-glow-1",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 14
        }
      },
      {
        "id": "flash-glow-2",
        "colorNumber": 4,
        "label": [
          120,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 310,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "rain-drop-1",
        "colorNumber": 7,
        "label": [
          50,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 330,
          "r": 4
        }
      },
      {
        "id": "rain-drop-2",
        "colorNumber": 7,
        "label": [
          250,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 330,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "wheat-field",
    "name": "Wheat Field",
    "emoji": "🌾",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFD54F",
      "#FFA000",
      "#FF8F00",
      "#FF6F00",
      "#5D4037",
      "#4CAF50",
      "#FF5252"
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
        "id": "harvest-sun",
        "colorNumber": 2,
        "label": [
          230,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 80,
          "r": 40
        }
      },
      {
        "id": "hill-back",
        "colorNumber": 7,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,290 Q 150,250 300,290 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "hill-front",
        "colorNumber": 4,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,295 300,335 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "stalk-c",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,370 Q 148,250 150,110"
        }
      },
      {
        "id": "grain-c1",
        "colorNumber": 4,
        "label": [
          138,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 138,
          "cy": 120,
          "rx": 8,
          "ry": 16
        }
      },
      {
        "id": "grain-c2",
        "colorNumber": 4,
        "label": [
          162,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 162,
          "cy": 120,
          "rx": 8,
          "ry": 16
        }
      },
      {
        "id": "grain-c3",
        "colorNumber": 5,
        "label": [
          136,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 150,
          "rx": 9,
          "ry": 16
        }
      },
      {
        "id": "grain-c4",
        "colorNumber": 5,
        "label": [
          164,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 150,
          "rx": 9,
          "ry": 16
        }
      },
      {
        "id": "grain-c5",
        "colorNumber": 4,
        "label": [
          136,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 136,
          "cy": 180,
          "rx": 9,
          "ry": 16
        }
      },
      {
        "id": "grain-c6",
        "colorNumber": 4,
        "label": [
          164,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 164,
          "cy": 180,
          "rx": 9,
          "ry": 16
        }
      },
      {
        "id": "grain-c-top",
        "colorNumber": 3,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 95,
          "rx": 7,
          "ry": 18
        }
      },
      {
        "id": "stalk-l",
        "colorNumber": 3,
        "label": [
          85,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,370 Q 75,260 70,140"
        }
      },
      {
        "id": "grain-l1",
        "colorNumber": 5,
        "label": [
          60,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 60,
          "cy": 155,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-l2",
        "colorNumber": 5,
        "label": [
          80,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 155,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-l3",
        "colorNumber": 4,
        "label": [
          58,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 58,
          "cy": 185,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-l4",
        "colorNumber": 4,
        "label": [
          82,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 185,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "stalk-r",
        "colorNumber": 3,
        "label": [
          215,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,370 Q 225,260 230,140"
        }
      },
      {
        "id": "grain-r1",
        "colorNumber": 5,
        "label": [
          220,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 155,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-r2",
        "colorNumber": 5,
        "label": [
          240,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 155,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-r3",
        "colorNumber": 4,
        "label": [
          218,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 185,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "grain-r4",
        "colorNumber": 4,
        "label": [
          242,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 242,
          "cy": 185,
          "rx": 8,
          "ry": 15
        }
      },
      {
        "id": "field-poppy-1",
        "colorNumber": 8,
        "label": [
          45,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 345,
          "r": 10
        }
      },
      {
        "id": "field-poppy-2",
        "colorNumber": 8,
        "label": [
          255,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 350,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "bamboo-grove",
    "name": "Bamboo Grove",
    "emoji": "🎋",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#4CAF50",
      "#2E7D32",
      "#1B5E20",
      "#81C784",
      "#DCEDC8",
      "#5D4037",
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
        "id": "moss-ground",
        "colorNumber": 3,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "stalk-c1",
        "colorNumber": 2,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 285,
          "w": 24,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "stalk-c2",
        "colorNumber": 4,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 195,
          "w": 20,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "stalk-c3",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 105,
          "w": 16,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "stalk-c4",
        "colorNumber": 4,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 20,
          "w": 12,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-l1",
        "colorNumber": 3,
        "label": [
          75,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 290,
          "w": 20,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-l2",
        "colorNumber": 5,
        "label": [
          75,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 67,
          "y": 205,
          "w": 16,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-l3",
        "colorNumber": 3,
        "label": [
          75,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 69,
          "y": 120,
          "w": 12,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-l4",
        "colorNumber": 5,
        "label": [
          75,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 71,
          "y": 35,
          "w": 8,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-r1",
        "colorNumber": 3,
        "label": [
          225,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 290,
          "w": 20,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-r2",
        "colorNumber": 5,
        "label": [
          225,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 217,
          "y": 205,
          "w": 16,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-r3",
        "colorNumber": 3,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 219,
          "y": 120,
          "w": 12,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "stalk-r4",
        "colorNumber": 5,
        "label": [
          225,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 221,
          "y": 35,
          "w": 8,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "leaf-c-l",
        "colorNumber": 2,
        "label": [
          105,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 150,
          "rx": 35,
          "ry": 8
        }
      },
      {
        "id": "leaf-c-r",
        "colorNumber": 2,
        "label": [
          195,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 130,
          "rx": 35,
          "ry": 8
        }
      },
      {
        "id": "leaf-top-l",
        "colorNumber": 5,
        "label": [
          115,
          65
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 65,
          "rx": 30,
          "ry": 7
        }
      },
      {
        "id": "leaf-top-r",
        "colorNumber": 5,
        "label": [
          185,
          60
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 60,
          "rx": 30,
          "ry": 7
        }
      },
      {
        "id": "leaf-l-l",
        "colorNumber": 4,
        "label": [
          35,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 35,
          "cy": 180,
          "rx": 28,
          "ry": 7
        }
      },
      {
        "id": "leaf-r-r",
        "colorNumber": 4,
        "label": [
          265,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 265,
          "cy": 180,
          "rx": 28,
          "ry": 7
        }
      },
      {
        "id": "bamboo-shoot",
        "colorNumber": 6,
        "label": [
          110,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,335 100,375 120,375"
        }
      },
      {
        "id": "zen-stone-1",
        "colorNumber": 7,
        "label": [
          190,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 370,
          "r": 12
        }
      },
      {
        "id": "zen-stone-2",
        "colorNumber": 7,
        "label": [
          210,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 375,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          40,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 55,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fern-gully",
    "name": "Green Fern",
    "emoji": "🌿",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#2E7D32",
      "#1B5E20",
      "#388E3C",
      "#4CAF50",
      "#81C784",
      "#A5D6A7",
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
        "id": "soil-base",
        "colorNumber": 3,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 120,
          "ry": 20
        }
      },
      {
        "id": "fern-rachis",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,380 Q 140,200 170,50"
        }
      },
      {
        "id": "pinna-l1",
        "colorNumber": 4,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 95,
          "rx": 32,
          "ry": 9
        }
      },
      {
        "id": "pinna-r1",
        "colorNumber": 4,
        "label": [
          205,
          90
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 90,
          "rx": 32,
          "ry": 9
        }
      },
      {
        "id": "pinna-l2",
        "colorNumber": 5,
        "label": [
          95,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 135,
          "rx": 38,
          "ry": 10
        }
      },
      {
        "id": "pinna-r2",
        "colorNumber": 5,
        "label": [
          215,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 130,
          "rx": 38,
          "ry": 10
        }
      },
      {
        "id": "pinna-l3",
        "colorNumber": 4,
        "label": [
          85,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 175,
          "rx": 44,
          "ry": 11
        }
      },
      {
        "id": "pinna-r3",
        "colorNumber": 4,
        "label": [
          225,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 170,
          "rx": 44,
          "ry": 11
        }
      },
      {
        "id": "pinna-l4",
        "colorNumber": 5,
        "label": [
          75,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 215,
          "rx": 48,
          "ry": 12
        }
      },
      {
        "id": "pinna-r4",
        "colorNumber": 5,
        "label": [
          235,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 235,
          "cy": 210,
          "rx": 48,
          "ry": 12
        }
      },
      {
        "id": "pinna-l5",
        "colorNumber": 4,
        "label": [
          70,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 255,
          "rx": 50,
          "ry": 13
        }
      },
      {
        "id": "pinna-r5",
        "colorNumber": 4,
        "label": [
          240,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 250,
          "rx": 50,
          "ry": 13
        }
      },
      {
        "id": "pinna-l6",
        "colorNumber": 5,
        "label": [
          75,
          295
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 295,
          "rx": 48,
          "ry": 13
        }
      },
      {
        "id": "pinna-r6",
        "colorNumber": 5,
        "label": [
          235,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 235,
          "cy": 290,
          "rx": 48,
          "ry": 13
        }
      },
      {
        "id": "pinna-l7",
        "colorNumber": 6,
        "label": [
          90,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 335,
          "rx": 42,
          "ry": 12
        }
      },
      {
        "id": "pinna-r7",
        "colorNumber": 6,
        "label": [
          220,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 330,
          "rx": 42,
          "ry": 12
        }
      },
      {
        "id": "crozier-curl",
        "colorNumber": 6,
        "label": [
          172,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 45,
          "r": 14
        }
      },
      {
        "id": "crozier-in",
        "colorNumber": 7,
        "label": [
          172,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "forest-spore-1",
        "colorNumber": 8,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 65,
          "r": 8
        }
      },
      {
        "id": "forest-spore-2",
        "colorNumber": 8,
        "label": [
          255,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 65,
          "r": 8
        }
      },
      {
        "id": "forest-spore-3",
        "colorNumber": 8,
        "label": [
          35,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "forest-spore-4",
        "colorNumber": 8,
        "label": [
          265,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 130,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "golden-marigold",
    "name": "Golden Marigold",
    "emoji": "🏵️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFFDE7",
      "#FF6F00",
      "#FF8F00",
      "#FFA000",
      "#FFB300",
      "#FFC107",
      "#4CAF50",
      "#2E7D32",
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
        "id": "marigold-stem",
        "colorNumber": 8,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 210,
          "w": 12,
          "h": 170,
          "rx": 6
        }
      },
      {
        "id": "leaf-l",
        "colorNumber": 7,
        "label": [
          90,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 280,
          "rx": 45,
          "ry": 18
        }
      },
      {
        "id": "leaf-r",
        "colorNumber": 7,
        "label": [
          210,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 310,
          "rx": 45,
          "ry": 18
        }
      },
      {
        "id": "petal-out-1",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 26
        }
      },
      {
        "id": "petal-out-2",
        "colorNumber": 3,
        "label": [
          195,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 95,
          "r": 26
        }
      },
      {
        "id": "petal-out-3",
        "colorNumber": 2,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 140,
          "r": 26
        }
      },
      {
        "id": "petal-out-4",
        "colorNumber": 3,
        "label": [
          215,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 185,
          "r": 26
        }
      },
      {
        "id": "petal-out-5",
        "colorNumber": 2,
        "label": [
          170,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 215,
          "r": 26
        }
      },
      {
        "id": "petal-out-6",
        "colorNumber": 3,
        "label": [
          130,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 215,
          "r": 26
        }
      },
      {
        "id": "petal-out-7",
        "colorNumber": 2,
        "label": [
          85,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 185,
          "r": 26
        }
      },
      {
        "id": "petal-out-8",
        "colorNumber": 3,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 140,
          "r": 26
        }
      },
      {
        "id": "petal-out-9",
        "colorNumber": 2,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 95,
          "r": 26
        }
      },
      {
        "id": "petal-mid-1",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 110,
          "r": 22
        }
      },
      {
        "id": "petal-mid-2",
        "colorNumber": 5,
        "label": [
          180,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 125,
          "r": 22
        }
      },
      {
        "id": "petal-mid-3",
        "colorNumber": 4,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 165,
          "r": 22
        }
      },
      {
        "id": "petal-mid-4",
        "colorNumber": 5,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 22
        }
      },
      {
        "id": "petal-mid-5",
        "colorNumber": 4,
        "label": [
          120,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 165,
          "r": 22
        }
      },
      {
        "id": "petal-mid-6",
        "colorNumber": 5,
        "label": [
          120,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 125,
          "r": 22
        }
      },
      {
        "id": "core-pom-1",
        "colorNumber": 6,
        "label": [
          140,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 140,
          "r": 15
        }
      },
      {
        "id": "core-pom-2",
        "colorNumber": 6,
        "label": [
          160,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 140,
          "r": 15
        }
      },
      {
        "id": "core-center",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 14
        }
      },
      {
        "id": "honeybee-body",
        "colorNumber": 2,
        "label": [
          60,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 85,
          "r": 8
        }
      },
      {
        "id": "honeybee-wing",
        "colorNumber": 9,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 75,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
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
      }
    ]
  },
  {
    "id": "wood-logs",
    "name": "Birch Wood Logs",
    "emoji": "🪵",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F5F5F5",
      "#FFFFFF",
      "#E0E0E0",
      "#BDBDBD",
      "#4E342E",
      "#795548",
      "#8D6E63",
      "#4CAF50",
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
        "id": "ground-soil",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "log-1-bark",
        "colorNumber": 2,
        "label": [
          130,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 290,
          "w": 170,
          "h": 60,
          "rx": 8
        }
      },
      {
        "id": "log-1-face",
        "colorNumber": 3,
        "label": [
          80,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 320,
          "rx": 24,
          "ry": 30
        }
      },
      {
        "id": "log-1-ring",
        "colorNumber": 4,
        "label": [
          80,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 320,
          "rx": 14,
          "ry": 18
        }
      },
      {
        "id": "log-1-knot",
        "colorNumber": 5,
        "label": [
          80,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 320,
          "r": 6
        }
      },
      {
        "id": "log-1-bark-mark1",
        "colorNumber": 5,
        "label": [
          140,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,295 L 150,295"
        }
      },
      {
        "id": "log-1-bark-mark2",
        "colorNumber": 5,
        "label": [
          190,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,330 L 200,330"
        }
      },
      {
        "id": "log-2-bark",
        "colorNumber": 2,
        "label": [
          170,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 325,
          "w": 160,
          "h": 50,
          "rx": 8
        }
      },
      {
        "id": "log-2-bark-mark",
        "colorNumber": 5,
        "label": [
          160,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,345 L 170,345"
        }
      },
      {
        "id": "log-3-bark",
        "colorNumber": 2,
        "label": [
          160,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 210,
          "w": 160,
          "h": 60,
          "rx": 8
        }
      },
      {
        "id": "log-3-face",
        "colorNumber": 3,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 240,
          "rx": 24,
          "ry": 30
        }
      },
      {
        "id": "log-3-ring",
        "colorNumber": 4,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 240,
          "rx": 14,
          "ry": 18
        }
      },
      {
        "id": "log-3-knot",
        "colorNumber": 5,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "log-3-bark-mark1",
        "colorNumber": 5,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,220 L 160,220"
        }
      },
      {
        "id": "log-3-bark-mark2",
        "colorNumber": 5,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,250 L 220,250"
        }
      },
      {
        "id": "moss-patch",
        "colorNumber": 8,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,210 Q 150,195 170,210"
        }
      },
      {
        "id": "mushroom-cap",
        "colorNumber": 9,
        "label": [
          75,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 205,
          "r": 14
        }
      },
      {
        "id": "mushroom-stem",
        "colorNumber": 2,
        "label": [
          75,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 215,
          "w": 6,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "leaf-sprout-1",
        "colorNumber": 8,
        "label": [
          225,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 195,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "leaf-sprout-2",
        "colorNumber": 8,
        "label": [
          245,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 205,
          "rx": 16,
          "ry": 7
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          255,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 9,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "river-stones",
    "name": "River Zen Stones",
    "emoji": "🪨",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2F1",
      "#00897B",
      "#78909C",
      "#546E7A",
      "#37474F",
      "#263238",
      "#FFFFFF",
      "#FFD54F",
      "#F06292"
    ],
    "regions": [
      {
        "id": "water-bg",
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
        "id": "river-pool",
        "colorNumber": 2,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 140,
          "ry": 60
        }
      },
      {
        "id": "ripple-1",
        "colorNumber": 1,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 345,
          "rx": 120,
          "ry": 45
        }
      },
      {
        "id": "ripple-2",
        "colorNumber": 7,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 355,
          "rx": 95,
          "ry": 30
        }
      },
      {
        "id": "stone-1-base",
        "colorNumber": 5,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 330,
          "rx": 95,
          "ry": 32
        }
      },
      {
        "id": "stone-1-hi",
        "colorNumber": 3,
        "label": [
          140,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 320,
          "rx": 80,
          "ry": 22
        }
      },
      {
        "id": "stone-2-base",
        "colorNumber": 6,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 80,
          "ry": 28
        }
      },
      {
        "id": "stone-2-hi",
        "colorNumber": 4,
        "label": [
          142,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 142,
          "cy": 268,
          "rx": 68,
          "ry": 18
        }
      },
      {
        "id": "stone-3-base",
        "colorNumber": 5,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 65,
          "ry": 24
        }
      },
      {
        "id": "stone-3-hi",
        "colorNumber": 3,
        "label": [
          145,
          218
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 218,
          "rx": 52,
          "ry": 16
        }
      },
      {
        "id": "stone-4-base",
        "colorNumber": 6,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 180,
          "rx": 50,
          "ry": 20
        }
      },
      {
        "id": "stone-4-hi",
        "colorNumber": 4,
        "label": [
          146,
          174
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 146,
          "cy": 174,
          "rx": 38,
          "ry": 14
        }
      },
      {
        "id": "stone-5-base",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 34,
          "ry": 16
        }
      },
      {
        "id": "stone-5-hi",
        "colorNumber": 3,
        "label": [
          148,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 148,
          "cy": 135,
          "rx": 24,
          "ry": 10
        }
      },
      {
        "id": "petal-1",
        "colorNumber": 9,
        "label": [
          65,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "petal-2",
        "colorNumber": 9,
        "label": [
          235,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "petal-3",
        "colorNumber": 9,
        "label": [
          195,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 360,
          "r": 10
        }
      },
      {
        "id": "bed-rock-l",
        "colorNumber": 4,
        "label": [
          45,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 45,
          "cy": 365,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "bed-rock-r",
        "colorNumber": 4,
        "label": [
          255,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 255,
          "cy": 365,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "zen-spark-1",
        "colorNumber": 8,
        "label": [
          50,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "zen-spark-2",
        "colorNumber": 8,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "zen-spark-3",
        "colorNumber": 8,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "water-drop-1",
        "colorNumber": 7,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "water-drop-2",
        "colorNumber": 7,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "hibiscus-bloom",
    "name": "Tropical Hibiscus",
    "emoji": "🌺",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#E91E63",
      "#C2185B",
      "#FF4081",
      "#FF80AB",
      "#FFD54F",
      "#4CAF50",
      "#2E7D32",
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
        "id": "foliage-l",
        "colorNumber": 7,
        "label": [
          55,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 280,
          "rx": 45,
          "ry": 24
        }
      },
      {
        "id": "foliage-l-vein",
        "colorNumber": 8,
        "label": [
          55,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,280 L 15,280"
        }
      },
      {
        "id": "foliage-r",
        "colorNumber": 7,
        "label": [
          245,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 280,
          "rx": 45,
          "ry": 24
        }
      },
      {
        "id": "foliage-r-vein",
        "colorNumber": 8,
        "label": [
          245,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,280 L 285,280"
        }
      },
      {
        "id": "petal-top",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 90,
          "rx": 50,
          "ry": 45
        }
      },
      {
        "id": "petal-tr",
        "colorNumber": 4,
        "label": [
          215,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 140,
          "rx": 48,
          "ry": 44
        }
      },
      {
        "id": "petal-br",
        "colorNumber": 2,
        "label": [
          195,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 225,
          "rx": 48,
          "ry": 44
        }
      },
      {
        "id": "petal-bl",
        "colorNumber": 4,
        "label": [
          105,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 225,
          "rx": 48,
          "ry": 44
        }
      },
      {
        "id": "petal-tl",
        "colorNumber": 2,
        "label": [
          85,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 140,
          "rx": 48,
          "ry": 44
        }
      },
      {
        "id": "eye-halo",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 44
        }
      },
      {
        "id": "eye-core",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 26
        }
      },
      {
        "id": "stamen-stalk",
        "colorNumber": 6,
        "label": [
          165,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 65,
          "w": 10,
          "h": 100,
          "rx": 5
        }
      },
      {
        "id": "anther-1",
        "colorNumber": 6,
        "label": [
          145,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 60,
          "r": 7
        }
      },
      {
        "id": "anther-2",
        "colorNumber": 6,
        "label": [
          160,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 50,
          "r": 7
        }
      },
      {
        "id": "anther-3",
        "colorNumber": 6,
        "label": [
          175,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 55,
          "r": 7
        }
      },
      {
        "id": "anther-4",
        "colorNumber": 6,
        "label": [
          155,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "anther-5",
        "colorNumber": 6,
        "label": [
          170,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 70,
          "r": 6
        }
      },
      {
        "id": "stigma-1",
        "colorNumber": 3,
        "label": [
          160,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 40,
          "r": 5
        }
      },
      {
        "id": "stigma-2",
        "colorNumber": 3,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "stigma-3",
        "colorNumber": 3,
        "label": [
          170,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "dew-drop-1",
        "colorNumber": 9,
        "label": [
          115,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "dew-drop-2",
        "colorNumber": 9,
        "label": [
          205,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
    "id": "tornado-valley",
    "name": "Wild Wind Valley",
    "emoji": "🌪️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#37474F",
      "#546E7A",
      "#78909C",
      "#90A4AE",
      "#CFD8DC",
      "#ECEFF1",
      "#2E7D32",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "storm-sky",
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
        "id": "canyon-left",
        "colorNumber": 7,
        "label": [
          50,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,270 L 90,290 L 80,400 L 0,400 Z"
        }
      },
      {
        "id": "canyon-right",
        "colorNumber": 7,
        "label": [
          250,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,290 L 300,270 L 300,400 L 220,400 Z"
        }
      },
      {
        "id": "funnel-tier-1",
        "colorNumber": 6,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 80,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "funnel-tier-2",
        "colorNumber": 5,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 115,
          "rx": 95,
          "ry": 22
        }
      },
      {
        "id": "funnel-tier-3",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 155,
          "rx": 80,
          "ry": 20
        }
      },
      {
        "id": "funnel-tier-4",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 65,
          "ry": 18
        }
      },
      {
        "id": "funnel-tier-5",
        "colorNumber": 4,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 235,
          "rx": 50,
          "ry": 16
        }
      },
      {
        "id": "funnel-tier-6",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 35,
          "ry": 14
        }
      },
      {
        "id": "funnel-tier-7",
        "colorNumber": 2,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 315,
          "rx": 22,
          "ry": 12
        }
      },
      {
        "id": "funnel-tip",
        "colorNumber": 1,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 345,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "debris-puff-1",
        "colorNumber": 4,
        "label": [
          125,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 345,
          "r": 18
        }
      },
      {
        "id": "debris-puff-2",
        "colorNumber": 4,
        "label": [
          175,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 345,
          "r": 18
        }
      },
      {
        "id": "debris-puff-3",
        "colorNumber": 5,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 355,
          "r": 16
        }
      },
      {
        "id": "wind-ribbon-1",
        "colorNumber": 6,
        "label": [
          50,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,130 Q 70,80 130,95"
        }
      },
      {
        "id": "wind-ribbon-2",
        "colorNumber": 6,
        "label": [
          250,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 280,130 Q 230,80 170,95"
        }
      },
      {
        "id": "wind-ribbon-3",
        "colorNumber": 5,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 15,225 Q 75,190 125,215"
        }
      },
      {
        "id": "wind-ribbon-4",
        "colorNumber": 5,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 285,225 Q 225,190 175,215"
        }
      },
      {
        "id": "debris-1",
        "colorNumber": 8,
        "label": [
          70,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "debris-2",
        "colorNumber": 8,
        "label": [
          230,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 165,
          "r": 5
        }
      },
      {
        "id": "debris-3",
        "colorNumber": 8,
        "label": [
          100,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 250,
          "r": 4
        }
      },
      {
        "id": "debris-4",
        "colorNumber": 8,
        "label": [
          200,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 250,
          "r": 4
        }
      },
      {
        "id": "lightning-flash",
        "colorNumber": 8,
        "label": [
          260,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 60,
          "r": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "crystal-snowflake",
    "name": "Frost Snowflake",
    "emoji": "❄️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#1976D2",
      "#42A5F5",
      "#90CAF9",
      "#E3F2FD",
      "#FFFFFF",
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
        "id": "outer-frost-halo",
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
        "id": "inner-frost-halo",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 90
        }
      },
      {
        "id": "arm-vert",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 75,
          "w": 10,
          "h": 250,
          "rx": 5
        }
      },
      {
        "id": "arm-diag-1",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,148 L 240,252 L 235,260 L 55,156 Z"
        }
      },
      {
        "id": "arm-diag-2",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,252 L 240,148 L 245,156 L 65,260 Z"
        }
      },
      {
        "id": "point-n",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,60 162,75 150,90 138,75"
        }
      },
      {
        "id": "point-s",
        "colorNumber": 6,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,310 162,325 150,340 138,325"
        }
      },
      {
        "id": "point-ne",
        "colorNumber": 6,
        "label": [
          240,
          148
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,135 252,148 240,161 228,148"
        }
      },
      {
        "id": "point-sw",
        "colorNumber": 6,
        "label": [
          60,
          252
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,239 72,252 60,265 48,252"
        }
      },
      {
        "id": "point-nw",
        "colorNumber": 6,
        "label": [
          60,
          148
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,135 72,148 60,161 48,148"
        }
      },
      {
        "id": "point-se",
        "colorNumber": 6,
        "label": [
          240,
          252
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,239 252,252 240,265 228,252"
        }
      },
      {
        "id": "hex-core-outer",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,165 180,182 180,218 150,235 120,218 120,182"
        }
      },
      {
        "id": "hex-core-inner",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,175 172,187 172,213 150,225 128,213 128,187"
        }
      },
      {
        "id": "center-crystal",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 14
        }
      },
      {
        "id": "barb-n",
        "colorNumber": 5,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,120 L 150,105 L 170,120"
        }
      },
      {
        "id": "barb-s",
        "colorNumber": 5,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,280 L 150,295 L 170,280"
        }
      },
      {
        "id": "frost-sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "frost-sparkle-2",
        "colorNumber": 7,
        "label": [
          255,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "frost-sparkle-3",
        "colorNumber": 7,
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
        "id": "frost-sparkle-4",
        "colorNumber": 7,
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
        "id": "micro-flake-1",
        "colorNumber": 6,
        "label": [
          90,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 75,
          "r": 4
        }
      },
      {
        "id": "micro-flake-2",
        "colorNumber": 6,
        "label": [
          210,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 75,
          "r": 4
        }
      },
      {
        "id": "micro-flake-3",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 365,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "rainy-cloud",
    "name": "Spring Rain",
    "emoji": "🌧️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#78909C",
      "#546E7A",
      "#37474F",
      "#0288D1",
      "#29B6F6",
      "#4CAF50",
      "#2E7D32"
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
        "id": "rain-puddle",
        "colorNumber": 5,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 130,
          "ry": 24
        }
      },
      {
        "id": "puddle-ripple-1",
        "colorNumber": 6,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "puddle-ripple-2",
        "colorNumber": 1,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 60,
          "ry": 8
        }
      },
      {
        "id": "sprout-stem",
        "colorNumber": 8,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 330,
          "w": 4,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "sprout-leaf-l",
        "colorNumber": 7,
        "label": [
          140,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 335,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "sprout-leaf-r",
        "colorNumber": 7,
        "label": [
          160,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 335,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 3,
        "label": [
          65,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 115,
          "r": 34
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 4,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 95,
          "r": 42
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 2,
        "label": [
          155,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 80,
          "r": 52
        }
      },
      {
        "id": "cloud-p4",
        "colorNumber": 3,
        "label": [
          205,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 95,
          "r": 44
        }
      },
      {
        "id": "cloud-p5",
        "colorNumber": 4,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 32
        }
      },
      {
        "id": "cloud-flat-bottom",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 110,
          "w": 210,
          "h": 40,
          "rx": 15
        }
      },
      {
        "id": "drop-1",
        "colorNumber": 5,
        "label": [
          65,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,175 C 60,190 70,195 65,200 C 60,195 70,190 65,175 Z"
        }
      },
      {
        "id": "drop-2",
        "colorNumber": 6,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,215 C 100,230 110,235 105,240 C 100,235 110,230 105,215 Z"
        }
      },
      {
        "id": "drop-3",
        "colorNumber": 5,
        "label": [
          145,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,170 C 140,185 150,190 145,195 C 140,190 150,185 145,170 Z"
        }
      },
      {
        "id": "drop-4",
        "colorNumber": 6,
        "label": [
          185,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,210 C 180,225 190,230 185,235 C 180,230 190,225 185,210 Z"
        }
      },
      {
        "id": "drop-5",
        "colorNumber": 5,
        "label": [
          225,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,175 C 220,190 230,195 225,200 C 220,195 230,190 225,175 Z"
        }
      },
      {
        "id": "drop-6",
        "colorNumber": 6,
        "label": [
          85,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,265 C 80,280 90,285 85,290 C 80,285 90,280 85,265 Z"
        }
      },
      {
        "id": "drop-7",
        "colorNumber": 5,
        "label": [
          165,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,265 C 160,280 170,285 165,290 C 160,285 170,280 165,265 Z"
        }
      },
      {
        "id": "drop-8",
        "colorNumber": 6,
        "label": [
          215,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,265 C 210,280 220,285 215,290 C 210,285 220,280 215,265 Z"
        }
      },
      {
        "id": "splash-l",
        "colorNumber": 6,
        "label": [
          110,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 360,
          "r": 5
        }
      },
      {
        "id": "splash-r",
        "colorNumber": 6,
        "label": [
          190,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 360,
          "r": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          260,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 50,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "floating-leaves",
    "name": "Forest Leaves",
    "emoji": "🍃",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#4CAF50",
      "#2E7D32",
      "#81C784",
      "#FF9800",
      "#FF5722",
      "#FFC107",
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
        "id": "wind-swirl-1",
        "colorNumber": 4,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,120 Q 150,60 270,110"
        }
      },
      {
        "id": "wind-swirl-2",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,220 Q 150,160 270,210"
        }
      },
      {
        "id": "wind-swirl-3",
        "colorNumber": 4,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,320 Q 150,260 270,310"
        }
      },
      {
        "id": "leaf-1-oak",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,260 C 100,240 100,180 130,160 C 110,140 140,110 150,110 C 160,110 190,140 170,160 C 200,180 200,240 170,260 Z"
        }
      },
      {
        "id": "leaf-1-vein",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,260 L 150,120"
        }
      },
      {
        "id": "leaf-2-maple",
        "colorNumber": 7,
        "label": [
          75,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,60 55,85 40,75 55,105 45,120 75,115 105,120 95,105 110,75 95,85"
        }
      },
      {
        "id": "leaf-2-vein",
        "colorNumber": 5,
        "label": [
          75,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,120 L 75,70"
        }
      },
      {
        "id": "leaf-3-blade",
        "colorNumber": 6,
        "label": [
          225,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 95,
          "rx": 30,
          "ry": 16
        }
      },
      {
        "id": "leaf-3-stem",
        "colorNumber": 8,
        "label": [
          245,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 235,100 L 255,120"
        }
      },
      {
        "id": "leaf-4-blade",
        "colorNumber": 2,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 230,
          "rx": 26,
          "ry": 14
        }
      },
      {
        "id": "leaf-4-vein",
        "colorNumber": 3,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,230 L 85,230"
        }
      },
      {
        "id": "leaf-5-ginkgo",
        "colorNumber": 7,
        "label": [
          230,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 230,245 L 210,195 Q 230,185 250,195 Z"
        }
      },
      {
        "id": "leaf-5-stem",
        "colorNumber": 8,
        "label": [
          230,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 229,
          "y": 245,
          "w": 2,
          "h": 20
        }
      },
      {
        "id": "leaf-6-willow",
        "colorNumber": 4,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 335,
          "rx": 36,
          "ry": 10
        }
      },
      {
        "id": "leaf-6-stem",
        "colorNumber": 8,
        "label": [
          115,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,340 L 125,350"
        }
      },
      {
        "id": "leaf-7-aspen",
        "colorNumber": 5,
        "label": [
          220,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 330,
          "r": 20
        }
      },
      {
        "id": "leaf-7-stem",
        "colorNumber": 8,
        "label": [
          235,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,345 L 245,355"
        }
      },
      {
        "id": "spore-1",
        "colorNumber": 7,
        "label": [
          110,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 60,
          "r": 6
        }
      },
      {
        "id": "spore-2",
        "colorNumber": 7,
        "label": [
          180,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 70,
          "r": 6
        }
      },
      {
        "id": "spore-3",
        "colorNumber": 7,
        "label": [
          110,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "spore-4",
        "colorNumber": 7,
        "label": [
          190,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          260,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 50,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "desert-island",
    "name": "Treasure Atoll",
    "emoji": "🏝️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#00ACC1",
      "#00838F",
      "#FFD54F",
      "#FFA000",
      "#795548",
      "#4CAF50",
      "#2E7D32",
      "#FF6D00",
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
        "id": "sun",
        "colorNumber": 9,
        "label": [
          235,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 70,
          "r": 32
        }
      },
      {
        "id": "ocean-deep",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 150,
          "ry": 85
        }
      },
      {
        "id": "outer-reef-ring",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 135,
          "ry": 70
        }
      },
      {
        "id": "sand-atoll",
        "colorNumber": 4,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 115,
          "ry": 55
        }
      },
      {
        "id": "inner-lagoon",
        "colorNumber": 2,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 315,
          "rx": 60,
          "ry": 25
        }
      },
      {
        "id": "palm-trunk",
        "colorNumber": 6,
        "label": [
          140,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,300 Q 130,210 145,130 L 157,133 Q 145,210 162,300 Z"
        }
      },
      {
        "id": "frond-1",
        "colorNumber": 7,
        "label": [
          85,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 Q 95,80 50,105 Q 95,120 150,130"
        }
      },
      {
        "id": "frond-2",
        "colorNumber": 8,
        "label": [
          145,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 Q 145,45 150,25 Q 165,55 150,130"
        }
      },
      {
        "id": "frond-3",
        "colorNumber": 7,
        "label": [
          215,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 Q 205,75 250,95 Q 200,120 150,130"
        }
      },
      {
        "id": "frond-4",
        "colorNumber": 8,
        "label": [
          70,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 Q 80,140 55,175 Q 95,165 150,130"
        }
      },
      {
        "id": "frond-5",
        "colorNumber": 7,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 Q 215,140 245,170 Q 200,160 150,130"
        }
      },
      {
        "id": "coconut-1",
        "colorNumber": 6,
        "label": [
          145,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 138,
          "r": 8
        }
      },
      {
        "id": "coconut-2",
        "colorNumber": 6,
        "label": [
          157,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 157,
          "cy": 138,
          "r": 8
        }
      },
      {
        "id": "chest-box",
        "colorNumber": 6,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 285,
          "w": 30,
          "h": 20,
          "rx": 3
        }
      },
      {
        "id": "chest-lid",
        "colorNumber": 5,
        "label": [
          85,
          285
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 285,
          "rx": 15,
          "ry": 8
        }
      },
      {
        "id": "gold-glow",
        "colorNumber": 4,
        "label": [
          85,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 280,
          "r": 8
        }
      },
      {
        "id": "wave-1",
        "colorNumber": 10,
        "label": [
          60,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,355 Q 60,345 80,355"
        }
      },
      {
        "id": "wave-2",
        "colorNumber": 10,
        "label": [
          220,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,355 Q 220,345 240,355"
        }
      },
      {
        "id": "seagull-1",
        "colorNumber": 6,
        "label": [
          65,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,60 Q 65,50 80,60 Q 95,50 110,60"
        }
      },
      {
        "id": "seagull-2",
        "colorNumber": 6,
        "label": [
          185,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,50 Q 185,42 195,50 Q 205,42 215,50"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          255,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 240,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mountain-ridge",
    "name": "Alpine Ridge",
    "emoji": "⛰️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#78909C",
      "#546E7A",
      "#37474F",
      "#263238",
      "#FFFFFF",
      "#2E7D32",
      "#FFD54F"
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
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 70,
          "r": 30
        }
      },
      {
        "id": "peak-far-l",
        "colorNumber": 2,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,210 75,95 150,210"
        }
      },
      {
        "id": "peak-far-r",
        "colorNumber": 2,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,210 225,95 300,210"
        }
      },
      {
        "id": "ridge-left-face",
        "colorNumber": 3,
        "label": [
          100,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,310 150,110 150,310"
        }
      },
      {
        "id": "ridge-right-shadow",
        "colorNumber": 4,
        "label": [
          200,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,110 300,310 150,310"
        }
      },
      {
        "id": "snow-crest-top",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,110 120,150 150,140 180,150"
        }
      },
      {
        "id": "snow-slope-l",
        "colorNumber": 6,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,150 80,230 105,210 135,190"
        }
      },
      {
        "id": "snow-slope-r",
        "colorNumber": 6,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,150 220,230 195,210 165,190"
        }
      },
      {
        "id": "scree-left",
        "colorNumber": 5,
        "label": [
          65,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,290 L 130,290 L 110,400 L 0,400 Z"
        }
      },
      {
        "id": "scree-right",
        "colorNumber": 5,
        "label": [
          235,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,290 L 300,290 L 300,400 L 190,400 Z"
        }
      },
      {
        "id": "alpine-meadow",
        "colorNumber": 7,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 130,
          "ry": 25
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 7,
        "label": [
          40,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,265 25,310 55,310"
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 7,
        "label": [
          80,
          295
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,270 65,315 95,315"
        }
      },
      {
        "id": "pine-3",
        "colorNumber": 7,
        "label": [
          220,
          295
        ],
        "shape": {
          "kind": "polygon",
          "points": "220,270 205,315 235,315"
        }
      },
      {
        "id": "pine-4",
        "colorNumber": 7,
        "label": [
          260,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "260,265 245,310 275,310"
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 6,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,75 Q 60,65 100,75"
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 6,
        "label": [
          130,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,60 Q 135,50 170,60"
        }
      },
      {
        "id": "hawk",
        "colorNumber": 5,
        "label": [
          95,
          45
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,45 Q 95,38 105,45 Q 115,38 125,45"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          270,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "wildflower-1",
        "colorNumber": 8,
        "label": [
          125,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 375,
          "r": 5
        }
      },
      {
        "id": "wildflower-2",
        "colorNumber": 8,
        "label": [
          175,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 375,
          "r": 5
        }
      },
      {
        "id": "scree-rock",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "national-park",
    "name": "Emerald Canyon",
    "emoji": "🌄",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FFB74D",
      "#D84315",
      "#BF360C",
      "#8D6E63",
      "#5D4037",
      "#00897B",
      "#004D40",
      "#FFD54F"
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
        "id": "sunrise",
        "colorNumber": 9,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 65,
          "r": 36
        }
      },
      {
        "id": "canyon-l-top",
        "colorNumber": 2,
        "label": [
          50,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,90 L 110,90 L 105,140 L 0,140 Z"
        }
      },
      {
        "id": "canyon-l-m1",
        "colorNumber": 3,
        "label": [
          50,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,140 L 105,140 L 100,190 L 0,190 Z"
        }
      },
      {
        "id": "canyon-l-m2",
        "colorNumber": 4,
        "label": [
          50,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,190 L 100,190 L 95,240 L 0,240 Z"
        }
      },
      {
        "id": "canyon-l-bot",
        "colorNumber": 5,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,240 L 95,240 L 85,340 L 0,340 Z"
        }
      },
      {
        "id": "canyon-r-top",
        "colorNumber": 2,
        "label": [
          250,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,90 L 300,90 L 300,140 L 195,140 Z"
        }
      },
      {
        "id": "canyon-r-m1",
        "colorNumber": 3,
        "label": [
          250,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,140 L 300,140 L 300,190 L 200,190 Z"
        }
      },
      {
        "id": "canyon-r-m2",
        "colorNumber": 4,
        "label": [
          250,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,190 L 300,190 L 300,240 L 205,240 Z"
        }
      },
      {
        "id": "canyon-r-bot",
        "colorNumber": 5,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,240 L 300,240 L 300,340 L 215,340 Z"
        }
      },
      {
        "id": "river-top",
        "colorNumber": 7,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,100 L 175,100 L 165,180 L 135,180 Z"
        }
      },
      {
        "id": "river-mid",
        "colorNumber": 8,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,180 L 165,180 L 180,280 L 120,280 Z"
        }
      },
      {
        "id": "river-bot",
        "colorNumber": 7,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,280 L 180,280 L 220,400 L 80,400 Z"
        }
      },
      {
        "id": "bank-l",
        "colorNumber": 6,
        "label": [
          45,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,340 L 80,400 L 0,400 Z"
        }
      },
      {
        "id": "bank-r",
        "colorNumber": 6,
        "label": [
          255,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 300,340 L 220,400 L 300,400 Z"
        }
      },
      {
        "id": "rim-pine",
        "colorNumber": 8,
        "label": [
          95,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,50 80,90 110,90"
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 6,
        "label": [
          60,
          45
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,45 Q 60,38 70,45 Q 80,38 90,45"
        }
      },
      {
        "id": "bird-2",
        "colorNumber": 6,
        "label": [
          210,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,50 Q 210,42 220,50 Q 230,42 240,50"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          40,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          260,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "sunbeam-1",
        "colorNumber": 2,
        "label": [
          115,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 65,
          "r": 8
        }
      },
      {
        "id": "sunbeam-2",
        "colorNumber": 2,
        "label": [
          185,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 65,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "lavender-field",
    "name": "Lavender Valley",
    "emoji": "🪻",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#CE93D8",
      "#BA68C8",
      "#AB47BC",
      "#8E24AA",
      "#6A1B9A",
      "#4CAF50",
      "#2E7D32",
      "#FFD54F"
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
        "id": "provence-sun",
        "colorNumber": 9,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 35
        }
      },
      {
        "id": "distant-hills",
        "colorNumber": 7,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,140 Q 150,105 300,140 L 300,170 L 0,170 Z"
        }
      },
      {
        "id": "furrow-1",
        "colorNumber": 5,
        "label": [
          30,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,170 50,170 80,400 0,400"
        }
      },
      {
        "id": "furrow-2",
        "colorNumber": 4,
        "label": [
          95,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,170 110,170 145,400 85,400"
        }
      },
      {
        "id": "furrow-3",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,170 180,170 215,400 150,400"
        }
      },
      {
        "id": "furrow-4",
        "colorNumber": 4,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,170 240,170 275,400 220,400"
        }
      },
      {
        "id": "furrow-5",
        "colorNumber": 5,
        "label": [
          270,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,170 300,170 300,400 280,400"
        }
      },
      {
        "id": "spike-stalk-1",
        "colorNumber": 8,
        "label": [
          50,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 48,
          "y": 220,
          "w": 4,
          "h": 120,
          "rx": 2
        }
      },
      {
        "id": "spike-blossom-1a",
        "colorNumber": 2,
        "label": [
          50,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 50,
          "cy": 220,
          "rx": 10,
          "ry": 20
        }
      },
      {
        "id": "spike-blossom-1b",
        "colorNumber": 6,
        "label": [
          50,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 50,
          "cy": 240,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "spike-stalk-2",
        "colorNumber": 8,
        "label": [
          120,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 118,
          "y": 200,
          "w": 4,
          "h": 140,
          "rx": 2
        }
      },
      {
        "id": "spike-blossom-2a",
        "colorNumber": 3,
        "label": [
          120,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 200,
          "rx": 10,
          "ry": 20
        }
      },
      {
        "id": "spike-blossom-2b",
        "colorNumber": 6,
        "label": [
          120,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 220,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "spike-stalk-3",
        "colorNumber": 8,
        "label": [
          180,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 200,
          "w": 4,
          "h": 140,
          "rx": 2
        }
      },
      {
        "id": "spike-blossom-3a",
        "colorNumber": 2,
        "label": [
          180,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 200,
          "rx": 10,
          "ry": 20
        }
      },
      {
        "id": "spike-blossom-3b",
        "colorNumber": 6,
        "label": [
          180,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 220,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "spike-stalk-4",
        "colorNumber": 8,
        "label": [
          250,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 248,
          "y": 220,
          "w": 4,
          "h": 120,
          "rx": 2
        }
      },
      {
        "id": "spike-blossom-4a",
        "colorNumber": 3,
        "label": [
          250,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 220,
          "rx": 10,
          "ry": 20
        }
      },
      {
        "id": "spike-blossom-4b",
        "colorNumber": 6,
        "label": [
          250,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 240,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "bumblebee-body",
        "colorNumber": 9,
        "label": [
          145,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 125,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          100,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 40,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "oak-tree",
    "name": "Mighty Oak",
    "emoji": "🌳",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#2E7D32",
      "#1B5E20",
      "#388E3C",
      "#4CAF50",
      "#81C784",
      "#5D4037",
      "#3E2723",
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
        "id": "meadow-soil",
        "colorNumber": 3,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 135,
          "ry": 24
        }
      },
      {
        "id": "oak-trunk-body",
        "colorNumber": 7,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,380 L 130,240 L 105,190 L 120,195 L 140,230 L 160,230 L 180,195 L 195,190 L 170,240 L 180,380 Z"
        }
      },
      {
        "id": "bark-groove-1",
        "colorNumber": 8,
        "label": [
          140,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 138,260 L 135,360"
        }
      },
      {
        "id": "bark-groove-2",
        "colorNumber": 8,
        "label": [
          160,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 162,260 L 165,360"
        }
      },
      {
        "id": "branch-l",
        "colorNumber": 7,
        "label": [
          95,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 195,
          "rx": 30,
          "ry": 8
        }
      },
      {
        "id": "branch-r",
        "colorNumber": 7,
        "label": [
          205,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 195,
          "rx": 30,
          "ry": 8
        }
      },
      {
        "id": "canopy-top",
        "colorNumber": 2,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 48
        }
      },
      {
        "id": "canopy-tl",
        "colorNumber": 4,
        "label": [
          105,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 105,
          "r": 42
        }
      },
      {
        "id": "canopy-tr",
        "colorNumber": 5,
        "label": [
          195,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 105,
          "r": 42
        }
      },
      {
        "id": "canopy-ml",
        "colorNumber": 2,
        "label": [
          70,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 150,
          "r": 40
        }
      },
      {
        "id": "canopy-mr",
        "colorNumber": 4,
        "label": [
          230,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 150,
          "r": 40
        }
      },
      {
        "id": "canopy-c",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 46
        }
      },
      {
        "id": "canopy-bl",
        "colorNumber": 5,
        "label": [
          95,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 185,
          "r": 36
        }
      },
      {
        "id": "canopy-br",
        "colorNumber": 2,
        "label": [
          205,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 185,
          "r": 36
        }
      },
      {
        "id": "canopy-sub-l",
        "colorNumber": 6,
        "label": [
          130,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 110,
          "r": 22
        }
      },
      {
        "id": "canopy-sub-r",
        "colorNumber": 6,
        "label": [
          170,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 110,
          "r": 22
        }
      },
      {
        "id": "acorn-1",
        "colorNumber": 8,
        "label": [
          110,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 215,
          "rx": 6,
          "ry": 9
        }
      },
      {
        "id": "acorn-cap-1",
        "colorNumber": 7,
        "label": [
          110,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 210,
          "r": 7
        }
      },
      {
        "id": "acorn-2",
        "colorNumber": 8,
        "label": [
          190,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 215,
          "rx": 6,
          "ry": 9
        }
      },
      {
        "id": "acorn-cap-2",
        "colorNumber": 7,
        "label": [
          190,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 210,
          "r": 7
        }
      },
      {
        "id": "bird-perched",
        "colorNumber": 9,
        "label": [
          100,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          260,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 50,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "desert-dunes",
    "name": "Sahara Dunes",
    "emoji": "🏜️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FFB74D",
      "#FFA726",
      "#FF9800",
      "#FB8C00",
      "#F57C00",
      "#E65100",
      "#795548",
      "#2E7D32",
      "#FFD54F"
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
        "id": "scorching-sun",
        "colorNumber": 10,
        "label": [
          230,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 70,
          "r": 38
        }
      },
      {
        "id": "sun-halo",
        "colorNumber": 2,
        "label": [
          230,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 70,
          "r": 55
        }
      },
      {
        "id": "dune-1-sun",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,150 Q 150,110 300,160 L 300,210 L 0,210 Z"
        }
      },
      {
        "id": "dune-1-shad",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,150 Q 150,135 300,160 L 300,190 L 0,190 Z"
        }
      },
      {
        "id": "dune-2-sun",
        "colorNumber": 3,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,200 Q 140,160 300,210 L 300,260 L 0,260 Z"
        }
      },
      {
        "id": "dune-2-shad",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,200 Q 140,185 300,210 L 300,240 L 0,240 Z"
        }
      },
      {
        "id": "dune-3-sun",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,250 Q 160,210 300,260 L 300,310 L 0,310 Z"
        }
      },
      {
        "id": "dune-3-shad",
        "colorNumber": 6,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,250 Q 160,235 300,260 L 300,290 L 0,290 Z"
        }
      },
      {
        "id": "dune-4-sun",
        "colorNumber": 5,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,300 Q 130,260 300,310 L 300,360 L 0,360 Z"
        }
      },
      {
        "id": "dune-4-shad",
        "colorNumber": 7,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,300 Q 130,285 300,310 L 300,340 L 0,340 Z"
        }
      },
      {
        "id": "dune-5-foreground",
        "colorNumber": 6,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,350 Q 150,320 300,350 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "oasis-palm-trunk",
        "colorNumber": 8,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,155 Q 60,130 65,115"
        }
      },
      {
        "id": "oasis-palm-fronds",
        "colorNumber": 9,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 110,
          "r": 15
        }
      },
      {
        "id": "oasis-water",
        "colorNumber": 9,
        "label": [
          95,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 150,
          "r": 12
        }
      },
      {
        "id": "camel-body",
        "colorNumber": 8,
        "label": [
          200,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 195,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "camel-hump",
        "colorNumber": 8,
        "label": [
          200,
          188
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 188,
          "r": 6
        }
      },
      {
        "id": "camel-head",
        "colorNumber": 8,
        "label": [
          212,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 212,
          "cy": 190,
          "r": 4
        }
      },
      {
        "id": "heat-spark-1",
        "colorNumber": 10,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 6
        }
      },
      {
        "id": "heat-spark-2",
        "colorNumber": 10,
        "label": [
          100,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 40,
          "r": 6
        }
      },
      {
        "id": "heat-spark-3",
        "colorNumber": 10,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "sand-ripple-1",
        "colorNumber": 7,
        "label": [
          80,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 370,
          "r": 4
        }
      },
      {
        "id": "sand-ripple-2",
        "colorNumber": 7,
        "label": [
          220,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 370,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "misty-valley",
    "name": "Misty Mountains",
    "emoji": "🌫️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#CFD8DC",
      "#B0BEC5",
      "#78909C",
      "#546E7A",
      "#37474F",
      "#263238",
      "#FFFFFF",
      "#FFD54F"
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
        "id": "pale-sun",
        "colorNumber": 8,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 28
        }
      },
      {
        "id": "peak-far-1",
        "colorNumber": 2,
        "label": [
          60,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,160 60,80 120,160"
        }
      },
      {
        "id": "peak-far-2",
        "colorNumber": 2,
        "label": [
          240,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,160 240,80 300,160"
        }
      },
      {
        "id": "peak-mid-1",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,210 150,110 240,210"
        }
      },
      {
        "id": "peak-mid-2",
        "colorNumber": 4,
        "label": [
          60,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,270 60,160 140,270"
        }
      },
      {
        "id": "peak-mid-3",
        "colorNumber": 4,
        "label": [
          240,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "160,270 240,160 300,270"
        }
      },
      {
        "id": "peak-fore-1",
        "colorNumber": 5,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,340 150,210 270,340"
        }
      },
      {
        "id": "ridge-dark-l",
        "colorNumber": 6,
        "label": [
          60,
          340
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,400 60,280 130,400"
        }
      },
      {
        "id": "ridge-dark-r",
        "colorNumber": 6,
        "label": [
          240,
          340
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,400 240,280 300,400"
        }
      },
      {
        "id": "ridge-center",
        "colorNumber": 7,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,400 150,330 210,400"
        }
      },
      {
        "id": "mist-ribbon-1",
        "colorNumber": 8,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 130,
          "rx": 140,
          "ry": 14
        }
      },
      {
        "id": "mist-ribbon-2",
        "colorNumber": 8,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 140,
          "ry": 16
        }
      },
      {
        "id": "mist-ribbon-3",
        "colorNumber": 8,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 140,
          "ry": 18
        }
      },
      {
        "id": "mist-ribbon-4",
        "colorNumber": 8,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 140,
          "ry": 20
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 7,
        "label": [
          40,
          350
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,325 25,370 55,370"
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 7,
        "label": [
          260,
          350
        ],
        "shape": {
          "kind": "polygon",
          "points": "260,325 245,370 275,370"
        }
      },
      {
        "id": "bird-soar",
        "colorNumber": 7,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,50 Q 150,42 160,50"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "mist-orb-1",
        "colorNumber": 8,
        "label": [
          90,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "mist-orb-2",
        "colorNumber": 8,
        "label": [
          210,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 180,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "sun-behind-cloud",
    "name": "Morning Sun Cloud",
    "emoji": "⛅",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFD54F",
      "#FFB300",
      "#FF8F00",
      "#FFFFFF",
      "#ECEFF1",
      "#4CAF50",
      "#2E7D32",
      "#FF6D00"
    ],
    "regions": [
      {
        "id": "dawn-sky",
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
        "id": "hill-back",
        "colorNumber": 7,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,320 Q 150,280 300,320 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "hill-front",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,355 Q 150,320 300,355 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "sun-halo",
        "colorNumber": 4,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 140,
          "r": 68
        }
      },
      {
        "id": "sun-body",
        "colorNumber": 2,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 140,
          "r": 50
        }
      },
      {
        "id": "sun-core",
        "colorNumber": 3,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 140,
          "r": 30
        }
      },
      {
        "id": "sun-ray-1",
        "colorNumber": 9,
        "label": [
          115,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 111,
          "y": 40,
          "w": 8,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "sun-ray-2",
        "colorNumber": 9,
        "label": [
          40,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 136,
          "w": 30,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "sun-ray-3",
        "colorNumber": 9,
        "label": [
          60,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 75,
          "w": 20,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "sun-ray-4",
        "colorNumber": 9,
        "label": [
          170,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 75,
          "w": 20,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 5,
        "label": [
          110,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 210,
          "r": 35
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 45
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 5,
        "label": [
          205,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 170,
          "r": 48
        }
      },
      {
        "id": "cloud-p4",
        "colorNumber": 5,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 35
        }
      },
      {
        "id": "cloud-flat",
        "colorNumber": 5,
        "label": [
          180,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 195,
          "w": 180,
          "h": 45,
          "rx": 15
        }
      },
      {
        "id": "cloud-shade",
        "colorNumber": 6,
        "label": [
          180,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 235,
          "rx": 75,
          "ry": 12
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 9,
        "label": [
          65,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,75 Q 65,65 80,75 Q 95,65 110,75"
        }
      },
      {
        "id": "bird-2",
        "colorNumber": 9,
        "label": [
          230,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,65 Q 230,57 240,65 Q 250,57 260,65"
        }
      },
      {
        "id": "wildflower-1",
        "colorNumber": 2,
        "label": [
          70,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 370,
          "r": 6
        }
      },
      {
        "id": "wildflower-2",
        "colorNumber": 2,
        "label": [
          230,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 370,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 9,
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
        "id": "sparkle-3",
        "colorNumber": 3,
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
    "id": "partly-cloudy",
    "name": "Breezy Sky",
    "emoji": "🌤️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#81D4FA",
      "#FFD54F",
      "#FFB300",
      "#FFFFFF",
      "#ECEFF1",
      "#4CAF50",
      "#2E7D32",
      "#FF6D00"
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
        "id": "rolling-meadow",
        "colorNumber": 7,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,340 Q 150,300 300,340 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "sun-halo",
        "colorNumber": 3,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 48
        }
      },
      {
        "id": "sun-core",
        "colorNumber": 4,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 30
        }
      },
      {
        "id": "ray-1",
        "colorNumber": 9,
        "label": [
          235,
          15
        ],
        "shape": {
          "kind": "rect",
          "x": 231,
          "y": 5,
          "w": 8,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "ray-2",
        "colorNumber": 9,
        "label": [
          285,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 275,
          "y": 71,
          "w": 25,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "ray-3",
        "colorNumber": 9,
        "label": [
          175,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 71,
          "w": 25,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "ray-4",
        "colorNumber": 9,
        "label": [
          195,
          35
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 25,
          "w": 20,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 5,
        "label": [
          65,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 185,
          "r": 34
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 44
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 5,
        "label": [
          165,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 150,
          "r": 50
        }
      },
      {
        "id": "cloud-p4",
        "colorNumber": 5,
        "label": [
          220,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 175,
          "r": 38
        }
      },
      {
        "id": "cloud-flat",
        "colorNumber": 5,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 175,
          "w": 190,
          "h": 40,
          "rx": 15
        }
      },
      {
        "id": "cloud-shade",
        "colorNumber": 6,
        "label": [
          145,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 210,
          "rx": 80,
          "ry": 10
        }
      },
      {
        "id": "breeze-trail-1",
        "colorNumber": 2,
        "label": [
          60,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,260 Q 75,230 130,250"
        }
      },
      {
        "id": "breeze-trail-2",
        "colorNumber": 2,
        "label": [
          190,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,255 Q 210,225 270,245"
        }
      },
      {
        "id": "breeze-trail-3",
        "colorNumber": 2,
        "label": [
          120,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,300 Q 130,270 190,290"
        }
      },
      {
        "id": "tuft-1",
        "colorNumber": 5,
        "label": [
          75,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "tuft-2",
        "colorNumber": 5,
        "label": [
          145,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "tuft-3",
        "colorNumber": 5,
        "label": [
          215,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "wildflower",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 370,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 3,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 3,
        "label": [
          120,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 60,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "sun-shower",
    "name": "Sun Shower",
    "emoji": "🌦️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFD54F",
      "#FFB300",
      "#FF5252",
      "#4CAF50",
      "#2196F3",
      "#9C27B0",
      "#FFFFFF",
      "#4FC3F7"
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
        "id": "rainbow-r",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,200 A 120,120 0 0,1 270,200 L 255,200 A 105,105 0 0,0 45,200 Z"
        }
      },
      {
        "id": "rainbow-g",
        "colorNumber": 5,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,200 A 105,105 0 0,1 255,200 L 240,200 A 90,90 0 0,0 60,200 Z"
        }
      },
      {
        "id": "rainbow-b",
        "colorNumber": 6,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,200 A 90,90 0 0,1 240,200 L 225,200 A 75,75 0 0,0 75,200 Z"
        }
      },
      {
        "id": "rainbow-p",
        "colorNumber": 7,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,200 A 75,75 0 0,1 225,200 L 210,200 A 60,60 0 0,0 90,200 Z"
        }
      },
      {
        "id": "sun-halo",
        "colorNumber": 2,
        "label": [
          75,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 75,
          "r": 46
        }
      },
      {
        "id": "sun-core",
        "colorNumber": 3,
        "label": [
          75,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 75,
          "r": 28
        }
      },
      {
        "id": "sun-ray-1",
        "colorNumber": 2,
        "label": [
          75,
          15
        ],
        "shape": {
          "kind": "rect",
          "x": 71,
          "y": 5,
          "w": 8,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "sun-ray-2",
        "colorNumber": 2,
        "label": [
          15,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 5,
          "y": 71,
          "w": 25,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 8,
        "label": [
          155,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 95,
          "r": 32
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 8,
        "label": [
          195,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 75,
          "r": 40
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 8,
        "label": [
          245,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 90,
          "r": 34
        }
      },
      {
        "id": "cloud-flat",
        "colorNumber": 8,
        "label": [
          200,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 90,
          "w": 125,
          "h": 35,
          "rx": 12
        }
      },
      {
        "id": "rain-1",
        "colorNumber": 9,
        "label": [
          140,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 170,
          "r": 7
        }
      },
      {
        "id": "rain-2",
        "colorNumber": 9,
        "label": [
          180,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 200,
          "r": 7
        }
      },
      {
        "id": "rain-3",
        "colorNumber": 9,
        "label": [
          220,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 170,
          "r": 7
        }
      },
      {
        "id": "rain-4",
        "colorNumber": 9,
        "label": [
          160,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 240,
          "r": 7
        }
      },
      {
        "id": "rain-5",
        "colorNumber": 9,
        "label": [
          200,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 270,
          "r": 7
        }
      },
      {
        "id": "rain-6",
        "colorNumber": 9,
        "label": [
          240,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 230,
          "r": 7
        }
      },
      {
        "id": "meadow-soil",
        "colorNumber": 5,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "sun-puddle",
        "colorNumber": 9,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 85,
          "ry": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          255,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 35,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
        "label": [
          35,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "thunderstorm",
    "name": "Thunderstorm",
    "emoji": "⛈️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0B132B",
      "#1C2541",
      "#3A506B",
      "#FFD600",
      "#FFEA00",
      "#FFFFFF",
      "#00B4D8",
      "#2E7D32"
    ],
    "regions": [
      {
        "id": "storm-sky",
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
        "id": "storm-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,360 Q 150,330 300,360 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "cloud-p1",
        "colorNumber": 2,
        "label": [
          60,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 95,
          "r": 42
        }
      },
      {
        "id": "cloud-p2",
        "colorNumber": 3,
        "label": [
          115,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 75,
          "r": 54
        }
      },
      {
        "id": "cloud-p3",
        "colorNumber": 2,
        "label": [
          175,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 70,
          "r": 56
        }
      },
      {
        "id": "cloud-p4",
        "colorNumber": 3,
        "label": [
          235,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 85,
          "r": 48
        }
      },
      {
        "id": "cloud-flat-1",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 90,
          "w": 240,
          "h": 50,
          "rx": 15
        }
      },
      {
        "id": "cloud-flat-2",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 110,
          "ry": 20
        }
      },
      {
        "id": "bolt-left",
        "colorNumber": 4,
        "label": [
          100,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,140 85,210 105,210 75,300 125,195 105,195"
        }
      },
      {
        "id": "bolt-left-core",
        "colorNumber": 6,
        "label": [
          100,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "112,148 88,205 102,205 82,285 118,198 102,198"
        }
      },
      {
        "id": "bolt-right",
        "colorNumber": 5,
        "label": [
          200,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,140 215,210 195,210 225,300 175,195 195,195"
        }
      },
      {
        "id": "bolt-right-core",
        "colorNumber": 6,
        "label": [
          200,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "188,148 212,205 198,205 218,285 182,198 198,198"
        }
      },
      {
        "id": "rain-band-1",
        "colorNumber": 7,
        "label": [
          40,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,165 L 25,320"
        }
      },
      {
        "id": "rain-band-2",
        "colorNumber": 7,
        "label": [
          70,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,185 L 55,340"
        }
      },
      {
        "id": "rain-band-3",
        "colorNumber": 7,
        "label": [
          135,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,195 L 120,350"
        }
      },
      {
        "id": "rain-band-4",
        "colorNumber": 7,
        "label": [
          165,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,195 L 150,350"
        }
      },
      {
        "id": "rain-band-5",
        "colorNumber": 7,
        "label": [
          230,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 230,185 L 215,340"
        }
      },
      {
        "id": "rain-band-6",
        "colorNumber": 7,
        "label": [
          260,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 260,165 L 245,320"
        }
      },
      {
        "id": "ground-splash-1",
        "colorNumber": 7,
        "label": [
          75,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 340,
          "r": 6
        }
      },
      {
        "id": "ground-splash-2",
        "colorNumber": 7,
        "label": [
          225,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 340,
          "r": 6
        }
      },
      {
        "id": "flash-center",
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
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          40,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
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
      }
    ]
  },
  {
    "id": "snowstorm",
    "name": "Arctic Blizzard",
    "emoji": "🌨️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#CFD8DC",
      "#B0BEC5",
      "#78909C",
      "#37474F",
      "#FFFFFF",
      "#90CAF9",
      "#E3F2FD"
    ],
    "regions": [
      {
        "id": "tundra-sky",
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
        "id": "snow-drift-back",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,300 Q 150,260 300,300 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "snow-drift-mid",
        "colorNumber": 3,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,295 300,335 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "snow-drift-front",
        "colorNumber": 6,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,365 Q 150,330 300,365 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "snow-cloud-1",
        "colorNumber": 4,
        "label": [
          65,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 95,
          "r": 36
        }
      },
      {
        "id": "snow-cloud-2",
        "colorNumber": 5,
        "label": [
          115,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 75,
          "r": 46
        }
      },
      {
        "id": "snow-cloud-3",
        "colorNumber": 4,
        "label": [
          175,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 70,
          "r": 50
        }
      },
      {
        "id": "snow-cloud-4",
        "colorNumber": 5,
        "label": [
          235,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 90,
          "r": 40
        }
      },
      {
        "id": "snow-cloud-base",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 95,
          "w": 230,
          "h": 40,
          "rx": 15
        }
      },
      {
        "id": "howling-wind-1",
        "colorNumber": 7,
        "label": [
          80,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,200 Q 90,160 160,185"
        }
      },
      {
        "id": "howling-wind-2",
        "colorNumber": 7,
        "label": [
          210,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,225 Q 210,185 280,210"
        }
      },
      {
        "id": "howling-wind-3",
        "colorNumber": 7,
        "label": [
          90,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,285 Q 100,245 170,270"
        }
      },
      {
        "id": "snow-clump-1",
        "colorNumber": 6,
        "label": [
          55,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 160,
          "r": 9
        }
      },
      {
        "id": "snow-clump-2",
        "colorNumber": 6,
        "label": [
          105,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 205,
          "r": 11
        }
      },
      {
        "id": "snow-clump-3",
        "colorNumber": 6,
        "label": [
          175,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 165,
          "r": 9
        }
      },
      {
        "id": "snow-clump-4",
        "colorNumber": 6,
        "label": [
          235,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "snow-clump-5",
        "colorNumber": 6,
        "label": [
          75,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "snow-clump-6",
        "colorNumber": 6,
        "label": [
          135,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 295,
          "r": 8
        }
      },
      {
        "id": "snow-clump-7",
        "colorNumber": 6,
        "label": [
          205,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 255,
          "r": 11
        }
      },
      {
        "id": "snow-clump-8",
        "colorNumber": 6,
        "label": [
          255,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 285,
          "r": 9
        }
      },
      {
        "id": "arctic-sun-dog",
        "colorNumber": 8,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 20
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
    "id": "wind-gust",
    "name": "Gentle Breeze",
    "emoji": "🌬️",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#80DEEA",
      "#4DD0E1",
      "#26C6DA",
      "#00ACC1",
      "#FFFFFF",
      "#4CAF50",
      "#2E7D32"
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
        "id": "grass-meadow",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "dandelion-stem",
        "colorNumber": 8,
        "label": [
          80,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 260,
          "w": 4,
          "h": 110,
          "rx": 2
        }
      },
      {
        "id": "dandelion-leaf-l",
        "colorNumber": 7,
        "label": [
          55,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 340,
          "rx": 22,
          "ry": 9
        }
      },
      {
        "id": "dandelion-leaf-r",
        "colorNumber": 7,
        "label": [
          105,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 350,
          "rx": 22,
          "ry": 9
        }
      },
      {
        "id": "dandelion-head",
        "colorNumber": 6,
        "label": [
          80,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 260,
          "r": 16
        }
      },
      {
        "id": "wind-loop-1",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,110 C 90,60 170,60 210,100 C 230,120 210,150 180,140 C 150,130 150,90 200,80 L 270,80"
        }
      },
      {
        "id": "wind-loop-2",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,165 C 80,120 160,120 200,160 C 220,180 200,210 170,200 C 140,190 140,150 190,140 L 280,140"
        }
      },
      {
        "id": "wind-loop-3",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,225 C 90,180 170,180 210,220 C 230,240 210,270 180,260 L 270,260"
        }
      },
      {
        "id": "seed-1",
        "colorNumber": 6,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "seed-2",
        "colorNumber": 6,
        "label": [
          145,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "seed-3",
        "colorNumber": 6,
        "label": [
          185,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 165,
          "r": 8
        }
      },
      {
        "id": "seed-4",
        "colorNumber": 6,
        "label": [
          225,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "seed-5",
        "colorNumber": 6,
        "label": [
          255,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "seed-6",
        "colorNumber": 6,
        "label": [
          160,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 245,
          "r": 7
        }
      },
      {
        "id": "seed-7",
        "colorNumber": 6,
        "label": [
          210,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 215,
          "r": 7
        }
      },
      {
        "id": "seed-8",
        "colorNumber": 6,
        "label": [
          245,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 175,
          "r": 7
        }
      },
      {
        "id": "pollen-1",
        "colorNumber": 5,
        "label": [
          50,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 60,
          "r": 5
        }
      },
      {
        "id": "pollen-2",
        "colorNumber": 5,
        "label": [
          100,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "pollen-3",
        "colorNumber": 5,
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
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          40,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 300,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          260,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 300,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "mossy-boulder",
    "name": "Cherry Blossom",
    "emoji": "🌸",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#795548",
      "#4E342E",
      "#F8BBD0",
      "#F48FB1",
      "#EC407A",
      "#FFD54F",
      "#FFFFFF",
      "#81C784"
    ],
    "regions": [
      {
        "id": "spring-sky",
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
        "id": "branch-main",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,110 Q 120,130 180,210 Q 240,290 300,320 L 300,345 Q 230,310 170,230 Q 110,150 0,135 Z"
        }
      },
      {
        "id": "twig-top",
        "colorNumber": 2,
        "label": [
          140,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,135 Q 140,110 170,105 L 165,115 Q 140,120 115,142 Z"
        }
      },
      {
        "id": "twig-bot",
        "colorNumber": 2,
        "label": [
          210,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,235 Q 210,270 245,285 L 240,295 Q 205,280 185,245 Z"
        }
      },
      {
        "id": "fl-1-p1",
        "colorNumber": 4,
        "label": [
          140,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "fl-1-p2",
        "colorNumber": 5,
        "label": [
          160,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "fl-1-p3",
        "colorNumber": 4,
        "label": [
          170,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 180,
          "r": 14
        }
      },
      {
        "id": "fl-1-p4",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 14
        }
      },
      {
        "id": "fl-1-p5",
        "colorNumber": 4,
        "label": [
          130,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 180,
          "r": 14
        }
      },
      {
        "id": "fl-1-core",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 8
        }
      },
      {
        "id": "fl-2-p1",
        "colorNumber": 5,
        "label": [
          75,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 95,
          "r": 12
        }
      },
      {
        "id": "fl-2-p2",
        "colorNumber": 4,
        "label": [
          95,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 95,
          "r": 12
        }
      },
      {
        "id": "fl-2-p3",
        "colorNumber": 5,
        "label": [
          105,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 115,
          "r": 12
        }
      },
      {
        "id": "fl-2-p4",
        "colorNumber": 4,
        "label": [
          85,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 125,
          "r": 12
        }
      },
      {
        "id": "fl-2-p5",
        "colorNumber": 5,
        "label": [
          65,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 115,
          "r": 12
        }
      },
      {
        "id": "fl-2-core",
        "colorNumber": 7,
        "label": [
          85,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 110,
          "r": 7
        }
      },
      {
        "id": "fl-3-p1",
        "colorNumber": 4,
        "label": [
          235,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "fl-3-p2",
        "colorNumber": 5,
        "label": [
          255,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "fl-3-p3",
        "colorNumber": 4,
        "label": [
          265,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 295,
          "r": 12
        }
      },
      {
        "id": "fl-3-p4",
        "colorNumber": 5,
        "label": [
          245,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 305,
          "r": 12
        }
      },
      {
        "id": "fl-3-p5",
        "colorNumber": 4,
        "label": [
          225,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 295,
          "r": 12
        }
      },
      {
        "id": "fl-3-core",
        "colorNumber": 7,
        "label": [
          245,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 290,
          "r": 7
        }
      },
      {
        "id": "falling-petal-1",
        "colorNumber": 6,
        "label": [
          90,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 220,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "falling-petal-2",
        "colorNumber": 6,
        "label": [
          125,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 290,
          "rx": 9,
          "ry": 5
        }
      },
      {
        "id": "falling-petal-3",
        "colorNumber": 6,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 140,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          255,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 60,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "water-lily-pond",
    "name": "Lily Pad Pond",
    "emoji": "🪷",
    "category": "nature",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2F1",
      "#00897B",
      "#004D40",
      "#2E7D32",
      "#4CAF50",
      "#F48FB1",
      "#EC407A",
      "#FFD54F",
      "#FF5722",
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
        "id": "pond-water-outer",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 140,
          "ry": 110
        }
      },
      {
        "id": "pond-water-inner",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 115,
          "ry": 85
        }
      },
      {
        "id": "pond-ripple",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 85,
          "ry": 60
        }
      },
      {
        "id": "pad-1",
        "colorNumber": 4,
        "label": [
          90,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 270,
          "rx": 55,
          "ry": 28
        }
      },
      {
        "id": "pad-1-cleft",
        "colorNumber": 3,
        "label": [
          90,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,270 L 45,260"
        }
      },
      {
        "id": "pad-2",
        "colorNumber": 5,
        "label": [
          210,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 275,
          "rx": 55,
          "ry": 28
        }
      },
      {
        "id": "pad-2-cleft",
        "colorNumber": 3,
        "label": [
          210,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,275 L 255,265"
        }
      },
      {
        "id": "pad-3",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 50,
          "ry": 24
        }
      },
      {
        "id": "lily-petal-top",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 28
        }
      },
      {
        "id": "lily-petal-tl",
        "colorNumber": 7,
        "label": [
          125,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 170,
          "r": 28
        }
      },
      {
        "id": "lily-petal-tr",
        "colorNumber": 7,
        "label": [
          175,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 170,
          "r": 28
        }
      },
      {
        "id": "lily-petal-l",
        "colorNumber": 6,
        "label": [
          110,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 200,
          "r": 26
        }
      },
      {
        "id": "lily-petal-r",
        "colorNumber": 6,
        "label": [
          190,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 200,
          "r": 26
        }
      },
      {
        "id": "lily-petal-bl",
        "colorNumber": 7,
        "label": [
          125,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 230,
          "r": 26
        }
      },
      {
        "id": "lily-petal-br",
        "colorNumber": 7,
        "label": [
          175,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 230,
          "r": 26
        }
      },
      {
        "id": "lily-center-halo",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 24
        }
      },
      {
        "id": "lily-core-stamen",
        "colorNumber": 8,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 14
        }
      },
      {
        "id": "koi-fish-body",
        "colorNumber": 9,
        "label": [
          75,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,170 C 70,160 90,160 100,170 C 90,180 70,180 55,170 L 45,160 L 45,180 Z"
        }
      },
      {
        "id": "koi-eye",
        "colorNumber": 10,
        "label": [
          92,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 168,
          "r": 2
        }
      },
      {
        "id": "dragonfly-body",
        "colorNumber": 8,
        "label": [
          225,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 120,
          "rx": 3,
          "ry": 15
        }
      },
      {
        "id": "dragonfly-wing-l",
        "colorNumber": 10,
        "label": [
          205,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 115,
          "rx": 16,
          "ry": 5
        }
      },
      {
        "id": "dragonfly-wing-r",
        "colorNumber": 10,
        "label": [
          245,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 115,
          "rx": 16,
          "ry": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 65,
          "r": 8
        }
      }
    ]
  }
];
