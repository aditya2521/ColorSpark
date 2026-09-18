import { ImageTemplate } from '../../types';

// Category: mythical / fantasy (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)
export const MYTHICAL_TEMPLATES: ImageTemplate[] = [
  {
    "id": "dino",
    "name": "Friendly Dino",
    "emoji": "🦕",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#26A69A",
      "#00897B",
      "#80CBC4",
      "#FFD54F",
      "#8D6E63",
      "#FFFFFF",
      "#212121",
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
        "id": "ground",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "tail",
        "colorNumber": 2,
        "label": [
          50,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,290 C 40,290 20,250 15,210 C 35,240 65,260 95,280 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          140,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 280,
          "rx": 72,
          "ry": 52
        }
      },
      {
        "id": "belly",
        "colorNumber": 4,
        "label": [
          140,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,295 C 110,328 170,328 195,295 C 165,305 115,305 85,295 Z"
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          205,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,260 C 190,185 220,125 235,85 L 255,90 C 240,135 215,195 205,265 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          250,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 80,
          "rx": 28,
          "ry": 20
        }
      },
      {
        "id": "snout",
        "colorNumber": 4,
        "label": [
          268,
          84
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 268,
          "cy": 84,
          "rx": 14,
          "ry": 14
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          245,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 8,
        "label": [
          245,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 75,
          "r": 4
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 5,
        "label": [
          254,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 254,
          "cy": 90,
          "r": 5
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 2,
        "label": [
          180,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 305,
          "w": 18,
          "h": 70,
          "rx": 8
        }
      },
      {
        "id": "leg-fr",
        "colorNumber": 3,
        "label": [
          202,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 194,
          "y": 305,
          "w": 16,
          "h": 65,
          "rx": 8
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 2,
        "label": [
          98,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 305,
          "w": 18,
          "h": 70,
          "rx": 8
        }
      },
      {
        "id": "leg-br",
        "colorNumber": 3,
        "label": [
          120,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 305,
          "w": 16,
          "h": 65,
          "rx": 8
        }
      },
      {
        "id": "spot-1",
        "colorNumber": 5,
        "label": [
          115,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 255,
          "r": 9
        }
      },
      {
        "id": "spot-2",
        "colorNumber": 5,
        "label": [
          145,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 250,
          "r": 11
        }
      },
      {
        "id": "spot-3",
        "colorNumber": 5,
        "label": [
          175,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 255,
          "r": 9
        }
      },
      {
        "id": "spine-1",
        "colorNumber": 3,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "spine-2",
        "colorNumber": 3,
        "label": [
          185,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "fern-l",
        "colorNumber": 9,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,370 C 15,335 45,325 55,360 Z"
        }
      },
      {
        "id": "prehistoric-flower",
        "colorNumber": 5,
        "label": [
          255,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 365,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
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
      }
    ]
  },
  {
    "id": "dragon",
    "name": "Friendly Dragon",
    "emoji": "🐲",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#00C853",
      "#2E7D32",
      "#FFD600",
      "#FF6D00",
      "#D50000",
      "#FFFFFF",
      "#212121",
      "#69F0AE"
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
        "id": "ground",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 9,
        "label": [
          60,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,210 25,120 70,220"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 9,
        "label": [
          240,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,210 275,120 230,220"
        }
      },
      {
        "id": "dragon-body",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 60,
          "ry": 65
        }
      },
      {
        "id": "dragon-belly",
        "colorNumber": 4,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 285,
          "rx": 40,
          "ry": 48
        }
      },
      {
        "id": "belly-groove-1",
        "colorNumber": 5,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,270 Q 150,285 180,270"
        }
      },
      {
        "id": "belly-groove-2",
        "colorNumber": 5,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,295 Q 150,310 180,295"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 52,
          "ry": 45
        }
      },
      {
        "id": "snout",
        "colorNumber": 9,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 165,
          "rx": 36,
          "ry": 24
        }
      },
      {
        "id": "eye-l-white",
        "colorNumber": 7,
        "label": [
          130,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 125,
          "r": 12
        }
      },
      {
        "id": "eye-l-pupil",
        "colorNumber": 8,
        "label": [
          130,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "eye-r-white",
        "colorNumber": 7,
        "label": [
          170,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 125,
          "r": 12
        }
      },
      {
        "id": "eye-r-pupil",
        "colorNumber": 8,
        "label": [
          170,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "nostril-l",
        "colorNumber": 8,
        "label": [
          140,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 165,
          "r": 4
        }
      },
      {
        "id": "nostril-r",
        "colorNumber": 8,
        "label": [
          160,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 165,
          "r": 4
        }
      },
      {
        "id": "horn-l",
        "colorNumber": 4,
        "label": [
          105,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,110 90,60 130,95"
        }
      },
      {
        "id": "horn-r",
        "colorNumber": 4,
        "label": [
          195,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,110 210,60 170,95"
        }
      },
      {
        "id": "whisker-l",
        "colorNumber": 5,
        "label": [
          85,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,170 Q 75,175 60,195"
        }
      },
      {
        "id": "whisker-r",
        "colorNumber": 5,
        "label": [
          215,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,170 Q 225,175 240,195"
        }
      },
      {
        "id": "fire-puff",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,180 Q 150,225 160,180 Z"
        }
      },
      {
        "id": "cheek-l",
        "colorNumber": 5,
        "label": [
          105,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "cheek-r",
        "colorNumber": 5,
        "label": [
          195,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "unicorn",
    "name": "Magic Unicorn",
    "emoji": "🦄",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FDF4FF",
      "#FFFFFF",
      "#F3E8FF",
      "#FFD700",
      "#F472B6",
      "#60A5FA",
      "#A78BFA",
      "#34D399",
      "#FBBF24"
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
        "id": "rainbow-meadow",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          130,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 275,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          185,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,240 C 160,170 190,130 205,95 L 230,105 C 215,150 190,210 180,250 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          225,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 105,
          "rx": 30,
          "ry": 24
        }
      },
      {
        "id": "snout",
        "colorNumber": 3,
        "label": [
          248,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 248,
          "cy": 115,
          "rx": 14,
          "ry": 14
        }
      },
      {
        "id": "nostril",
        "colorNumber": 7,
        "label": [
          252,
          114
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 114,
          "r": 3
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          220,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 6,
        "label": [
          220,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 5,
        "label": [
          232,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 232,
          "cy": 118,
          "r": 5
        }
      },
      {
        "id": "horn",
        "colorNumber": 4,
        "label": [
          230,
          55
        ],
        "shape": {
          "kind": "polygon",
          "points": "218,85 240,25 235,85"
        }
      },
      {
        "id": "horn-groove",
        "colorNumber": 9,
        "label": [
          230,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 224,70 L 234,60 M 228,50 L 238,40"
        }
      },
      {
        "id": "ear",
        "colorNumber": 2,
        "label": [
          205,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "200,90 205,65 215,90"
        }
      },
      {
        "id": "mane-lock-pink",
        "colorNumber": 5,
        "label": [
          180,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,90 C 185,90 170,120 180,150 C 190,125 210,110 205,90 Z"
        }
      },
      {
        "id": "mane-lock-purple",
        "colorNumber": 7,
        "label": [
          160,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,120 C 165,130 150,165 160,195 C 175,165 195,150 195,120 Z"
        }
      },
      {
        "id": "mane-lock-blue",
        "colorNumber": 6,
        "label": [
          145,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,160 C 150,170 135,210 145,240 C 160,210 185,190 185,160 Z"
        }
      },
      {
        "id": "mane-lock-green",
        "colorNumber": 8,
        "label": [
          130,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,200 C 140,210 120,250 130,280 C 145,250 175,230 175,200 Z"
        }
      },
      {
        "id": "tail",
        "colorNumber": 5,
        "label": [
          65,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,260 C 40,260 25,290 35,330 C 50,300 70,290 85,280 Z"
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 2,
        "label": [
          170,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 162,
          "y": 305,
          "w": 14,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 2,
        "label": [
          95,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 87,
          "y": 305,
          "w": 14,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "hoof-fl",
        "colorNumber": 4,
        "label": [
          170,
          365
        ],
        "shape": {
          "kind": "polygon",
          "points": "162,360 176,360 176,375 162,375"
        }
      },
      {
        "id": "hoof-bl",
        "colorNumber": 4,
        "label": [
          95,
          365
        ],
        "shape": {
          "kind": "polygon",
          "points": "87,360 101,360 101,375 87,375"
        }
      },
      {
        "id": "star-spark-1",
        "colorNumber": 4,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 9
        }
      },
      {
        "id": "star-spark-2",
        "colorNumber": 4,
        "label": [
          260,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 60,
          "r": 9
        }
      }
    ]
  },
  {
    "id": "mermaid",
    "name": "Little Mermaid",
    "emoji": "🧜‍♀️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#00897B",
      "#4DB6AC",
      "#80CBC4",
      "#AB47BC",
      "#FFB74D",
      "#FFE0B2",
      "#212121",
      "#FF4081"
    ],
    "regions": [
      {
        "id": "ocean-bg",
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
        "id": "rock-perch",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "tail-curve",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,225 Q 170,260 150,310 Q 120,340 85,350 L 80,340 Q 110,330 135,300 Q 150,260 120,225 Z"
        }
      },
      {
        "id": "tail-fin-l",
        "colorNumber": 3,
        "label": [
          65,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,350 45,340 60,375"
        }
      },
      {
        "id": "tail-fin-r",
        "colorNumber": 3,
        "label": [
          105,
          365
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,350 90,385 125,360"
        }
      },
      {
        "id": "scale-1",
        "colorNumber": 4,
        "label": [
          140,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "scale-2",
        "colorNumber": 4,
        "label": [
          160,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "scale-3",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "torso",
        "colorNumber": 7,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 190,
          "rx": 18,
          "ry": 30
        }
      },
      {
        "id": "shell-bra-l",
        "colorNumber": 5,
        "label": [
          140,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 185,
          "r": 9
        }
      },
      {
        "id": "shell-bra-r",
        "colorNumber": 5,
        "label": [
          160,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 185,
          "r": 9
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 20
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          143,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 143,
          "cy": 122,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          157,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 157,
          "cy": 122,
          "r": 3
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 9,
        "label": [
          138,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 132,
          "r": 4
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 9,
        "label": [
          162,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 132,
          "r": 4
        }
      },
      {
        "id": "hair-top",
        "colorNumber": 6,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 125,90 175,90 175,120 C 160,110 140,110 125,120 Z"
        }
      },
      {
        "id": "hair-flow-l",
        "colorNumber": 6,
        "label": [
          115,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,120 C 105,140 105,190 120,210 C 110,180 120,140 130,120 Z"
        }
      },
      {
        "id": "hair-flow-r",
        "colorNumber": 6,
        "label": [
          185,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,120 C 195,140 205,210 180,240 C 190,190 180,140 170,120 Z"
        }
      },
      {
        "id": "starfish-clip",
        "colorNumber": 9,
        "label": [
          172,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 4,
        "label": [
          60,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 90,
          "r": 10
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 4,
        "label": [
          230,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 90,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 220,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          255,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 220,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fairyhouse",
    "name": "Fairy Mushroom House",
    "emoji": "🍄",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F3E5F5",
      "#E53935",
      "#C62828",
      "#FFFFFF",
      "#ECEFF1",
      "#CFD8DC",
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
        "id": "moss-ground",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 22
        }
      },
      {
        "id": "house-walls",
        "colorNumber": 5,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,200 C 85,290 85,340 90,370 L 210,370 C 215,340 215,290 210,200 Z"
        }
      },
      {
        "id": "door",
        "colorNumber": 7,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,370 L 130,300 C 130,285 170,285 170,300 L 170,370 Z"
        }
      },
      {
        "id": "doorknob",
        "colorNumber": 9,
        "label": [
          162,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 325,
          "r": 3
        }
      },
      {
        "id": "window-l-frame",
        "colorNumber": 7,
        "label": [
          118,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 255,
          "r": 16
        }
      },
      {
        "id": "window-l-glass",
        "colorNumber": 9,
        "label": [
          118,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 255,
          "r": 12
        }
      },
      {
        "id": "window-r-frame",
        "colorNumber": 7,
        "label": [
          182,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 255,
          "r": 16
        }
      },
      {
        "id": "window-r-glass",
        "colorNumber": 9,
        "label": [
          182,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 255,
          "r": 12
        }
      },
      {
        "id": "chimney",
        "colorNumber": 7,
        "label": [
          200,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 60,
          "w": 20,
          "h": 40
        }
      },
      {
        "id": "chimney-smoke-1",
        "colorNumber": 4,
        "label": [
          205,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "chimney-smoke-2",
        "colorNumber": 4,
        "label": [
          215,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 30,
          "r": 12
        }
      },
      {
        "id": "cap-dome",
        "colorNumber": 2,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,190 C 35,70 265,70 265,190 C 265,205 35,205 35,190 Z"
        }
      },
      {
        "id": "cap-bottom",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 190,
          "rx": 115,
          "ry": 16
        }
      },
      {
        "id": "dot-big",
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
        "id": "dot-l",
        "colorNumber": 4,
        "label": [
          85,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 135,
          "r": 16
        }
      },
      {
        "id": "dot-r",
        "colorNumber": 4,
        "label": [
          215,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 135,
          "r": 16
        }
      },
      {
        "id": "dot-t",
        "colorNumber": 4,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 12
        }
      },
      {
        "id": "dot-sub-l",
        "colorNumber": 4,
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
        "id": "dot-sub-r",
        "colorNumber": 4,
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
        "id": "flower-l",
        "colorNumber": 9,
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
        "id": "flower-r",
        "colorNumber": 9,
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
      }
    ]
  },
  {
    "id": "wizard",
    "name": "Magic Wizard",
    "emoji": "🧙‍♂️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#311B92",
      "#512DA8",
      "#7E57C2",
      "#FFD700",
      "#FFFFFF",
      "#FFE0B2",
      "#212121",
      "#00E5FF"
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
        "id": "floor-magic",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "robe-body",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,190 185,190 220,370 80,370"
        }
      },
      {
        "id": "robe-trim",
        "colorNumber": 5,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,370 L 220,370 L 215,360 L 85,360 Z"
        }
      },
      {
        "id": "beard",
        "colorNumber": 6,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,160 175,160 150,265"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
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
        "id": "nose",
        "colorNumber": 7,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 135,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 135,
          "r": 3
        }
      },
      {
        "id": "mustache-l",
        "colorNumber": 6,
        "label": [
          138,
          152
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 138,
          "cy": 152,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "mustache-r",
        "colorNumber": 6,
        "label": [
          162,
          152
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 162,
          "cy": 152,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "hat-cone",
        "colorNumber": 3,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,115 195,115 150,20"
        }
      },
      {
        "id": "hat-brim",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 115,
          "rx": 65,
          "ry": 14
        }
      },
      {
        "id": "hat-band",
        "colorNumber": 5,
        "label": [
          150,
          108
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 102,
          "w": 80,
          "h": 10,
          "rx": 3
        }
      },
      {
        "id": "hat-star",
        "colorNumber": 5,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,55 153,62 160,62 155,67 157,74 150,70 143,74 145,67 140,62 147,62"
        }
      },
      {
        "id": "wand-staff",
        "colorNumber": 5,
        "label": [
          230,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 226,
          "y": 150,
          "w": 8,
          "h": 220,
          "rx": 4
        }
      },
      {
        "id": "wand-orb-glow",
        "colorNumber": 9,
        "label": [
          230,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 140,
          "r": 20
        }
      },
      {
        "id": "wand-orb-core",
        "colorNumber": 6,
        "label": [
          230,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "magic-spark-1",
        "colorNumber": 9,
        "label": [
          210,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "magic-spark-2",
        "colorNumber": 9,
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
      },
      {
        "id": "magic-spark-3",
        "colorNumber": 9,
        "label": [
          240,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 170,
          "r": 6
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
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          45,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 300,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "dragonhead",
    "name": "Dragon Head",
    "emoji": "🐉",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#00C853",
      "#2E7D32",
      "#FFD600",
      "#FF6D00",
      "#D50000",
      "#FFFFFF",
      "#212121",
      "#69F0AE"
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
        "id": "dragon-neck-serpent",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,200 Q 80,310 130,370 L 170,370 Q 120,310 140,200 Z"
        }
      },
      {
        "id": "neck-belly-plates",
        "colorNumber": 4,
        "label": [
          115,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,220 Q 85,310 135,370 L 150,370 Q 105,310 120,220 Z"
        }
      },
      {
        "id": "dorsal-spike-1",
        "colorNumber": 5,
        "label": [
          75,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,250 60,265 90,280"
        }
      },
      {
        "id": "dorsal-spike-2",
        "colorNumber": 5,
        "label": [
          85,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,300 70,315 100,330"
        }
      },
      {
        "id": "head-base",
        "colorNumber": 2,
        "label": [
          160,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 145,
          "rx": 60,
          "ry": 45
        }
      },
      {
        "id": "snout-jaw",
        "colorNumber": 9,
        "label": [
          215,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,130 L 260,140 C 270,165 240,185 180,180 Z"
        }
      },
      {
        "id": "teeth-top-1",
        "colorNumber": 7,
        "label": [
          220,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "215,160 225,160 220,172"
        }
      },
      {
        "id": "teeth-top-2",
        "colorNumber": 7,
        "label": [
          240,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,160 245,160 240,172"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          155,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 8,
        "label": [
          155,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "nostril",
        "colorNumber": 8,
        "label": [
          245,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 145,
          "r": 5
        }
      },
      {
        "id": "main-horn-top",
        "colorNumber": 4,
        "label": [
          110,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,115 80,45 125,100"
        }
      },
      {
        "id": "main-horn-bot",
        "colorNumber": 5,
        "label": [
          95,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,130 70,105 120,140"
        }
      },
      {
        "id": "whisker",
        "colorNumber": 4,
        "label": [
          235,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,170 Q 255,195 270,220"
        }
      },
      {
        "id": "cheek-scale",
        "colorNumber": 3,
        "label": [
          165,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "fire-breath-1",
        "colorNumber": 6,
        "label": [
          270,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 255,155 Q 295,140 285,165 Q 295,190 255,175 Z"
        }
      },
      {
        "id": "fire-breath-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 255,158 Q 280,150 275,165 Q 280,180 255,172 Z"
        }
      },
      {
        "id": "smoke-puff-1",
        "colorNumber": 8,
        "label": [
          260,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 8,
        "label": [
          280,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 100,
          "r": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
        "colorNumber": 4,
        "label": [
          45,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 4,
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
        "id": "cloud-base",
        "colorNumber": 7,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      }
    ]
  },
  {
    "id": "witchbroom",
    "name": "Witch on Broom",
    "emoji": "🧙‍♀️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#283593",
      "#FFD700",
      "#795548",
      "#D7CCC8",
      "#212121",
      "#7E57C2",
      "#C2185B",
      "#FFFFFF"
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
        "id": "full-moon",
        "colorNumber": 3,
        "label": [
          220,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 90,
          "r": 50
        }
      },
      {
        "id": "moon-crater-1",
        "colorNumber": 5,
        "label": [
          205,
          75
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 75,
          "rx": 10,
          "ry": 8
        }
      },
      {
        "id": "moon-crater-2",
        "colorNumber": 5,
        "label": [
          240,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 105,
          "rx": 12,
          "ry": 10
        }
      },
      {
        "id": "broom-handle",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 235,
          "w": 240,
          "h": 10,
          "rx": 5
        }
      },
      {
        "id": "broom-straw",
        "colorNumber": 5,
        "label": [
          55,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,230 L 15,205 L 10,275 L 60,250 Z"
        }
      },
      {
        "id": "broom-band",
        "colorNumber": 8,
        "label": [
          55,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 230,
          "w": 8,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "witch-cape",
        "colorNumber": 6,
        "label": [
          125,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,170 85,260 145,260"
        }
      },
      {
        "id": "witch-skirt",
        "colorNumber": 6,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,210 165,210 185,265 125,265"
        }
      },
      {
        "id": "head",
        "colorNumber": 9,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 18
        }
      },
      {
        "id": "witch-nose",
        "colorNumber": 9,
        "label": [
          166,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "eye",
        "colorNumber": 6,
        "label": [
          156,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 156,
          "cy": 150,
          "r": 3
        }
      },
      {
        "id": "witch-hair",
        "colorNumber": 7,
        "label": [
          130,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,145 C 120,165 120,205 130,225 C 135,195 135,165 140,145 Z"
        }
      },
      {
        "id": "hat-cone",
        "colorNumber": 6,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,135 185,135 150,35"
        }
      },
      {
        "id": "hat-brim",
        "colorNumber": 6,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 135,
          "rx": 55,
          "ry": 12
        }
      },
      {
        "id": "hat-band",
        "colorNumber": 8,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 124,
          "w": 60,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "hat-buckle",
        "colorNumber": 3,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,122 156,122 156,134 144,134"
        }
      },
      {
        "id": "magic-orb",
        "colorNumber": 7,
        "label": [
          185,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 215,
          "r": 8
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
          "r": 7
        }
      },
      {
        "id": "star-2",
        "colorNumber": 3,
        "label": [
          105,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 3,
        "label": [
          55,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "star-4",
        "colorNumber": 3,
        "label": [
          85,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 330,
          "r": 6
        }
      },
      {
        "id": "star-5",
        "colorNumber": 3,
        "label": [
          245,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 330,
          "r": 7
        }
      },
      {
        "id": "cloud-mist",
        "colorNumber": 2,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 130,
          "ry": 20
        }
      }
    ]
  },
  {
    "id": "princess",
    "name": "Royal Princess",
    "emoji": "👸",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#FF80AB",
      "#F50057",
      "#C51162",
      "#FFD700",
      "#FFA000",
      "#FFE0B2",
      "#212121",
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
        "id": "palace-carpet",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "ballgown-skirt",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,210 185,210 240,370 60,370"
        }
      },
      {
        "id": "skirt-drape-l",
        "colorNumber": 3,
        "label": [
          105,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,210 Q 90,300 60,370 L 105,370 Q 125,300 135,210 Z"
        }
      },
      {
        "id": "skirt-drape-r",
        "colorNumber": 3,
        "label": [
          195,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,210 Q 210,300 240,370 L 195,370 Q 175,300 165,210 Z"
        }
      },
      {
        "id": "gown-bodice",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,175 170,175 160,215 140,215"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 24
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 2,
        "label": [
          134,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 134,
          "cy": 142,
          "r": 5
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 2,
        "label": [
          166,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 142,
          "r": 5
        }
      },
      {
        "id": "smile",
        "colorNumber": 3,
        "label": [
          150,
          146
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,146 Q 150,154 156,146"
        }
      },
      {
        "id": "hair-back",
        "colorNumber": 9,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,135 C 95,200 95,260 115,290 L 185,290 C 205,260 205,200 190,135 Z"
        }
      },
      {
        "id": "hair-front-l",
        "colorNumber": 9,
        "label": [
          125,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,115 C 130,115 120,135 125,165 C 135,140 145,130 150,115 Z"
        }
      },
      {
        "id": "hair-front-r",
        "colorNumber": 9,
        "label": [
          175,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,115 C 170,115 180,135 175,165 C 165,140 155,130 150,115 Z"
        }
      },
      {
        "id": "crown-base",
        "colorNumber": 5,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,115 175,115 180,85 162,100 150,75 138,100 120,85"
        }
      },
      {
        "id": "crown-gem-c",
        "colorNumber": 3,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 4
        }
      },
      {
        "id": "crown-gem-l",
        "colorNumber": 3,
        "label": [
          130,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 95,
          "r": 3
        }
      },
      {
        "id": "crown-gem-r",
        "colorNumber": 3,
        "label": [
          170,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 95,
          "r": 3
        }
      },
      {
        "id": "pearl-necklace",
        "colorNumber": 5,
        "label": [
          150,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 168,
          "r": 5
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
        "colorNumber": 5,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 7
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 5,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "phoenix",
    "name": "Phoenix",
    "emoji": "🔥",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#210900",
      "#FF3D00",
      "#FF6D00",
      "#FF9100",
      "#FFD600",
      "#FFFF00",
      "#FFFFFF",
      "#BF360C"
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
        "id": "fire-altar",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "wing-l-out",
        "colorNumber": 2,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 60,180 15,100 25,60 C 45,110 85,150 130,190 Z"
        }
      },
      {
        "id": "wing-l-mid",
        "colorNumber": 3,
        "label": [
          75,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 75,195 40,140 50,105 C 70,140 100,175 130,205 Z"
        }
      },
      {
        "id": "wing-l-in",
        "colorNumber": 4,
        "label": [
          90,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 90,205 65,170 75,145 C 90,170 115,195 130,215 Z"
        }
      },
      {
        "id": "wing-r-out",
        "colorNumber": 2,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 240,180 285,100 275,60 C 255,110 215,150 170,190 Z"
        }
      },
      {
        "id": "wing-r-mid",
        "colorNumber": 3,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 225,195 260,140 250,105 C 230,140 200,175 170,205 Z"
        }
      },
      {
        "id": "wing-r-in",
        "colorNumber": 4,
        "label": [
          210,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 210,205 235,170 225,145 C 210,170 185,195 170,215 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 26,
          "ry": 45
        }
      },
      {
        "id": "chest-gold",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 18,
          "ry": 30
        }
      },
      {
        "id": "chest-sun-core",
        "colorNumber": 6,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "head",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 18
        }
      },
      {
        "id": "beak",
        "colorNumber": 5,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,158 156,158 150,175"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          143,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 143,
          "cy": 148,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          157,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 157,
          "cy": 148,
          "r": 3
        }
      },
      {
        "id": "crest-top",
        "colorNumber": 2,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,135 150,90 155,135"
        }
      },
      {
        "id": "crest-l",
        "colorNumber": 3,
        "label": [
          135,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,138 120,105 148,135"
        }
      },
      {
        "id": "crest-r",
        "colorNumber": 3,
        "label": [
          165,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "158,138 180,105 152,135"
        }
      },
      {
        "id": "tail-c",
        "colorNumber": 4,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,265 C 135,310 150,355 150,370 C 150,355 165,310 155,265 Z"
        }
      },
      {
        "id": "tail-l",
        "colorNumber": 5,
        "label": [
          115,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,265 C 110,290 85,330 90,360 C 105,330 130,300 145,265 Z"
        }
      },
      {
        "id": "tail-r",
        "colorNumber": 5,
        "label": [
          185,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,265 C 190,290 215,330 210,360 C 195,330 170,300 155,265 Z"
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          60,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 45,
          "r": 6
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
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
        "id": "spark-3",
        "colorNumber": 6,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "fairygodmother",
    "name": "Fairy Godmother",
    "emoji": "🧚‍♀️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F0FDF4",
      "#4ADE80",
      "#22C55E",
      "#15803D",
      "#A7F3D0",
      "#FFD700",
      "#FFE0B2",
      "#212121",
      "#EC4899"
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
        "id": "magic-circle",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "wing-tl",
        "colorNumber": 5,
        "label": [
          85,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 140,
          "rx": 45,
          "ry": 26
        }
      },
      {
        "id": "wing-bl",
        "colorNumber": 5,
        "label": [
          95,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 195,
          "rx": 35,
          "ry": 20
        }
      },
      {
        "id": "wing-tr",
        "colorNumber": 5,
        "label": [
          215,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 140,
          "rx": 45,
          "ry": 26
        }
      },
      {
        "id": "wing-br",
        "colorNumber": 5,
        "label": [
          205,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 195,
          "rx": 35,
          "ry": 20
        }
      },
      {
        "id": "fairy-dress",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,185 165,185 205,330 95,330"
        }
      },
      {
        "id": "dress-petal-l",
        "colorNumber": 3,
        "label": [
          125,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,185 Q 110,260 95,330 L 135,330 Q 145,260 145,185 Z"
        }
      },
      {
        "id": "dress-petal-r",
        "colorNumber": 3,
        "label": [
          175,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,185 Q 190,260 205,330 L 165,330 Q 155,260 155,185 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 20
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          143,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 143,
          "cy": 128,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          157,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 157,
          "cy": 128,
          "r": 3
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 9,
        "label": [
          138,
          136
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 136,
          "r": 4
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 9,
        "label": [
          162,
          136
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 136,
          "r": 4
        }
      },
      {
        "id": "hair-bun",
        "colorNumber": 6,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 14
        }
      },
      {
        "id": "hair-fringe",
        "colorNumber": 6,
        "label": [
          150,
          118
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,122 C 130,105 170,105 170,122 C 155,115 145,115 130,122 Z"
        }
      },
      {
        "id": "flower-tiara",
        "colorNumber": 9,
        "label": [
          150,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 108,
          "r": 6
        }
      },
      {
        "id": "wand-shaft",
        "colorNumber": 6,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 208,
          "y": 145,
          "w": 4,
          "h": 120,
          "rx": 2
        }
      },
      {
        "id": "wand-star",
        "colorNumber": 6,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,128 213,136 222,136 215,142 218,150 210,145 202,150 205,142 198,136 207,136"
        }
      },
      {
        "id": "wand-glow",
        "colorNumber": 5,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 140,
          "r": 18
        }
      },
      {
        "id": "pixie-dust-1",
        "colorNumber": 6,
        "label": [
          230,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "pixie-dust-2",
        "colorNumber": 6,
        "label": [
          245,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "pixie-dust-3",
        "colorNumber": 6,
        "label": [
          195,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 175,
          "r": 5
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
      }
    ]
  },
  {
    "id": "mermaidface2",
    "name": "Mermaid Portrait",
    "emoji": "🐚",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#FF80AB",
      "#F48FB1",
      "#80DEEA",
      "#00ACC1",
      "#FFD54F",
      "#FFFFFF",
      "#212121",
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
        "id": "sea-floor",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "shell-outer-whorl",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 220,
          "rx": 95,
          "ry": 115
        }
      },
      {
        "id": "shell-mid-whorl",
        "colorNumber": 2,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 75,
          "ry": 95
        }
      },
      {
        "id": "shell-inner-whorl",
        "colorNumber": 9,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 230,
          "rx": 55,
          "ry": 75
        }
      },
      {
        "id": "shell-core-spiral",
        "colorNumber": 3,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 235,
          "rx": 35,
          "ry": 50
        }
      },
      {
        "id": "shell-center-pearl",
        "colorNumber": 7,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 16
        }
      },
      {
        "id": "pearl-highlight",
        "colorNumber": 7,
        "label": [
          146,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 146,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "ridge-1",
        "colorNumber": 7,
        "label": [
          105,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 115,190 90,160"
        }
      },
      {
        "id": "ridge-2",
        "colorNumber": 7,
        "label": [
          130,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 130,165 120,125"
        }
      },
      {
        "id": "ridge-3",
        "colorNumber": 7,
        "label": [
          170,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 170,165 180,125"
        }
      },
      {
        "id": "ridge-4",
        "colorNumber": 7,
        "label": [
          195,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 185,190 210,160"
        }
      },
      {
        "id": "ridge-5",
        "colorNumber": 7,
        "label": [
          210,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 195,225 235,225"
        }
      },
      {
        "id": "ridge-6",
        "colorNumber": 7,
        "label": [
          90,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,235 Q 105,225 65,225"
        }
      },
      {
        "id": "starfish-1",
        "colorNumber": 6,
        "label": [
          70,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 320,
          "r": 14
        }
      },
      {
        "id": "starfish-2",
        "colorNumber": 6,
        "label": [
          230,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 320,
          "r": 14
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 5,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 5,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 80,
          "r": 14
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 10
        }
      },
      {
        "id": "bubble-4",
        "colorNumber": 5,
        "label": [
          105,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 60,
          "r": 6
        }
      },
      {
        "id": "bubble-5",
        "colorNumber": 5,
        "label": [
          195,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 60,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          40,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          260,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 140,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "elf-archer",
    "name": "Elf Archer",
    "emoji": "🧝‍♂️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#2E7D32",
      "#1B5E20",
      "#795548",
      "#8D6E63",
      "#FFD700",
      "#FFE0B2",
      "#212121",
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
        "id": "ground",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "elf-tunic",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 175,185 200,340 100,340"
        }
      },
      {
        "id": "elf-belt",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 250,
          "w": 70,
          "h": 12,
          "rx": 3
        }
      },
      {
        "id": "belt-buckle",
        "colorNumber": 6,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,248 156,248 156,262 144,262"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 24
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "elf-ear-l",
        "colorNumber": 7,
        "label": [
          115,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "128,135 100,115 128,120"
        }
      },
      {
        "id": "elf-ear-r",
        "colorNumber": 7,
        "label": [
          185,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "172,135 200,115 172,120"
        }
      },
      {
        "id": "elf-hair-back",
        "colorNumber": 6,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 110,180 110,230 125,260 L 175,260 C 190,230 190,180 175,120 Z"
        }
      },
      {
        "id": "elf-hair-front",
        "colorNumber": 6,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,125 C 135,100 165,100 175,125 C 160,112 140,112 125,125 Z"
        }
      },
      {
        "id": "circlet",
        "colorNumber": 6,
        "label": [
          150,
          112
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 108,
          "w": 40,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "circlet-gem",
        "colorNumber": 9,
        "label": [
          150,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 112,
          "r": 4
        }
      },
      {
        "id": "bow-wood",
        "colorNumber": 4,
        "label": [
          65,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,110 Q 30,220 85,330 L 90,325 Q 40,220 90,115 Z"
        }
      },
      {
        "id": "bow-string",
        "colorNumber": 7,
        "label": [
          85,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 88,112 L 88,328"
        }
      },
      {
        "id": "arrow-shaft",
        "colorNumber": 5,
        "label": [
          125,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 218,
          "w": 120,
          "h": 4
        }
      },
      {
        "id": "arrow-head",
        "colorNumber": 6,
        "label": [
          60,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,214 50,220 65,226"
        }
      },
      {
        "id": "arrow-fletch",
        "colorNumber": 9,
        "label": [
          185,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,214 185,210 185,230 175,226"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          240,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 60,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
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
        "id": "leaf-1",
        "colorNumber": 9,
        "label": [
          230,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "leaf-2",
        "colorNumber": 9,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "castle-knight",
    "name": "Castle Knight",
    "emoji": "🛡️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#CFD8DC",
      "#90A4AE",
      "#546E7A",
      "#37474F",
      "#D32F2F",
      "#FFD700",
      "#FFFFFF",
      "#212121"
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
        "id": "stone-plinth",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "shield-outer",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,90 L 235,90 L 235,240 C 235,320 150,360 150,360 C 150,360 65,320 65,240 Z"
        }
      },
      {
        "id": "shield-inner",
        "colorNumber": 8,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,105 L 220,105 L 220,235 C 220,305 150,340 150,340 C 150,340 80,305 80,235 Z"
        }
      },
      {
        "id": "cross-vert",
        "colorNumber": 6,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 105,
          "w": 30,
          "h": 235
        }
      },
      {
        "id": "cross-horiz",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 170,
          "w": 140,
          "h": 30
        }
      },
      {
        "id": "shield-boss-center",
        "colorNumber": 7,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 20
        }
      },
      {
        "id": "shield-boss-core",
        "colorNumber": 9,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "knight-helm",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 80,
          "rx": 38,
          "ry": 42
        }
      },
      {
        "id": "helm-visor",
        "colorNumber": 5,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "rect",
          "x": 122,
          "y": 72,
          "w": 56,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "visor-slit",
        "colorNumber": 9,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "rect",
          "x": 128,
          "y": 77,
          "w": 44,
          "h": 4,
          "rx": 1
        }
      },
      {
        "id": "helm-plume",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,55 C 130,20 170,20 160,55 Z"
        }
      },
      {
        "id": "sword-blade",
        "colorNumber": 8,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 10,
          "w": 10,
          "h": 70
        }
      },
      {
        "id": "sword-tip",
        "colorNumber": 8,
        "label": [
          150,
          10
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,15 150,5 155,15"
        }
      },
      {
        "id": "sword-guard",
        "colorNumber": 7,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 80,
          "w": 70,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "sword-pommel",
        "colorNumber": 7,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 8
        }
      },
      {
        "id": "rivet-1",
        "colorNumber": 7,
        "label": [
          90,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 115,
          "r": 4
        }
      },
      {
        "id": "rivet-2",
        "colorNumber": 7,
        "label": [
          210,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 115,
          "r": 4
        }
      },
      {
        "id": "rivet-3",
        "colorNumber": 7,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 325,
          "r": 4
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
      },
      {
        "id": "sparkle-3",
        "colorNumber": 7,
        "label": [
          40,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 280,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 7,
        "label": [
          260,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 280,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "crystal-palace",
    "name": "Crystal Palace",
    "emoji": "🏰",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#E1BEE7",
      "#BA68C8",
      "#8E24AA",
      "#00E5FF",
      "#FFD700",
      "#FFFFFF",
      "#4A148C",
      "#4CAF50"
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
        "id": "hill-meadow",
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
          "ry": 20
        }
      },
      {
        "id": "keep-base",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 190,
          "w": 100,
          "h": 180
        }
      },
      {
        "id": "drawbridge",
        "colorNumber": 8,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,370 L 130,290 C 130,270 170,270 170,290 L 170,370 Z"
        }
      },
      {
        "id": "keep-spire",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,190 185,190 150,50"
        }
      },
      {
        "id": "flag-center",
        "colorNumber": 6,
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
          "h": 210
        }
      },
      {
        "id": "roof-l",
        "colorNumber": 4,
        "label": [
          65,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,160 95,160 65,70"
        }
      },
      {
        "id": "flag-l",
        "colorNumber": 6,
        "label": [
          65,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,50 90,60 65,70"
        }
      },
      {
        "id": "window-l",
        "colorNumber": 5,
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
          "h": 210
        }
      },
      {
        "id": "roof-r",
        "colorNumber": 4,
        "label": [
          235,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "205,160 265,160 235,70"
        }
      },
      {
        "id": "flag-r",
        "colorNumber": 6,
        "label": [
          235,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,50 260,60 235,70"
        }
      },
      {
        "id": "window-r",
        "colorNumber": 5,
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
        "colorNumber": 3,
        "label": [
          115,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 175,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "crenel-2",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 175,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "crenel-3",
        "colorNumber": 3,
        "label": [
          185,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 175,
          "w": 20,
          "h": 15
        }
      },
      {
        "id": "rose-window",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 16
        }
      },
      {
        "id": "magic-gem",
        "colorNumber": 6,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "star-1",
        "colorNumber": 6,
        "label": [
          40,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 40,
          "r": 7
        }
      },
      {
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          260,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 40,
          "r": 7
        }
      },
      {
        "id": "star-3",
        "colorNumber": 6,
        "label": [
          105,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 35,
          "r": 5
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          195,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 35,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "centaur",
    "name": "Centaur",
    "emoji": "🏹",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#795548",
      "#4E342E",
      "#3E2723",
      "#FFE0B2",
      "#2E7D32",
      "#FFD700",
      "#FFFFFF",
      "#212121"
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
        "id": "ground",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "horse-body",
        "colorNumber": 2,
        "label": [
          130,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 290,
          "rx": 75,
          "ry": 45
        }
      },
      {
        "id": "horse-tail",
        "colorNumber": 4,
        "label": [
          50,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,275 C 30,285 25,330 35,360 C 45,330 55,305 65,295 Z"
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 3,
        "label": [
          165,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 158,
          "y": 305,
          "w": 14,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "leg-fr",
        "colorNumber": 4,
        "label": [
          185,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 305,
          "w": 14,
          "h": 65,
          "rx": 6
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 3,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 305,
          "w": 14,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "leg-br",
        "colorNumber": 4,
        "label": [
          105,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 305,
          "w": 14,
          "h": 65,
          "rx": 6
        }
      },
      {
        "id": "human-torso",
        "colorNumber": 5,
        "label": [
          175,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,175 195,175 190,265 160,265"
        }
      },
      {
        "id": "head",
        "colorNumber": 5,
        "label": [
          175,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 135,
          "r": 20
        }
      },
      {
        "id": "eye",
        "colorNumber": 9,
        "label": [
          182,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "hair-beard",
        "colorNumber": 4,
        "label": [
          165,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,120 C 150,165 150,195 170,195 C 160,170 160,140 165,120 Z"
        }
      },
      {
        "id": "bow-curve",
        "colorNumber": 3,
        "label": [
          235,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,70 Q 275,150 220,230 L 215,225 Q 265,150 215,75 Z"
        }
      },
      {
        "id": "bow-string",
        "colorNumber": 8,
        "label": [
          220,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 218,72 L 180,150 L 218,228"
        }
      },
      {
        "id": "arrow",
        "colorNumber": 7,
        "label": [
          210,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 148,
          "w": 80,
          "h": 4
        }
      },
      {
        "id": "arrow-tip",
        "colorNumber": 7,
        "label": [
          255,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,144 262,150 250,156"
        }
      },
      {
        "id": "hoof-fl",
        "colorNumber": 4,
        "label": [
          165,
          372
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 372,
          "r": 7
        }
      },
      {
        "id": "hoof-fr",
        "colorNumber": 4,
        "label": [
          185,
          368
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 368,
          "r": 7
        }
      },
      {
        "id": "hoof-bl",
        "colorNumber": 4,
        "label": [
          85,
          372
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 372,
          "r": 7
        }
      },
      {
        "id": "hoof-br",
        "colorNumber": 4,
        "label": [
          105,
          368
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 368,
          "r": 7
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
        "id": "leaf-1",
        "colorNumber": 6,
        "label": [
          250,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "leaf-2",
        "colorNumber": 6,
        "label": [
          270,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 360,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "kraken",
    "name": "Kraken",
    "emoji": "🐙",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#7B1FA2",
      "#8E24AA",
      "#AB47BC",
      "#CE93D8",
      "#FFD700",
      "#FFFFFF",
      "#212121",
      "#0288D1"
    ],
    "regions": [
      {
        "id": "ocean-abyss",
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
        "id": "water-swell",
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
        "id": "kraken-mantle",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 130,
          "rx": 70,
          "ry": 85
        }
      },
      {
        "id": "mantle-highlight",
        "colorNumber": 4,
        "label": [
          130,
          100
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 100,
          "rx": 35,
          "ry": 45
        }
      },
      {
        "id": "eye-l-white",
        "colorNumber": 7,
        "label": [
          115,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 185,
          "r": 18
        }
      },
      {
        "id": "eye-l-iris",
        "colorNumber": 6,
        "label": [
          115,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 185,
          "r": 12
        }
      },
      {
        "id": "eye-l-pupil",
        "colorNumber": 8,
        "label": [
          115,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "eye-r-white",
        "colorNumber": 7,
        "label": [
          185,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 185,
          "r": 18
        }
      },
      {
        "id": "eye-r-iris",
        "colorNumber": 6,
        "label": [
          185,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 185,
          "r": 12
        }
      },
      {
        "id": "eye-r-pupil",
        "colorNumber": 8,
        "label": [
          185,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "tentacle-1",
        "colorNumber": 3,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,210 Q 30,220 30,290 Q 60,340 90,300 Q 60,260 115,225 Z"
        }
      },
      {
        "id": "tentacle-2",
        "colorNumber": 2,
        "label": [
          65,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,225 Q 70,300 70,360 Q 95,380 120,330 Q 110,280 125,230 Z"
        }
      },
      {
        "id": "tentacle-3",
        "colorNumber": 3,
        "label": [
          135,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,230 Q 130,320 140,370 Q 160,370 155,310 Q 145,260 145,230 Z"
        }
      },
      {
        "id": "tentacle-4",
        "colorNumber": 2,
        "label": [
          165,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,230 Q 155,260 145,310 Q 140,370 160,370 Q 170,320 175,230 Z"
        }
      },
      {
        "id": "tentacle-5",
        "colorNumber": 3,
        "label": [
          235,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,230 Q 190,280 180,330 Q 205,380 230,360 Q 230,300 185,225 Z"
        }
      },
      {
        "id": "tentacle-6",
        "colorNumber": 2,
        "label": [
          255,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,225 Q 240,260 210,300 Q 240,340 270,290 Q 270,220 195,210 Z"
        }
      },
      {
        "id": "sucker-1",
        "colorNumber": 5,
        "label": [
          35,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 275,
          "r": 7
        }
      },
      {
        "id": "sucker-2",
        "colorNumber": 5,
        "label": [
          265,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 275,
          "r": 7
        }
      },
      {
        "id": "sucker-3",
        "colorNumber": 5,
        "label": [
          65,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 340,
          "r": 7
        }
      },
      {
        "id": "sucker-4",
        "colorNumber": 5,
        "label": [
          235,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 340,
          "r": 7
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 7,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 12
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 7,
        "label": [
          245,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 75,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 150,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 150,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "hippogriff",
    "name": "Hippogriff",
    "emoji": "🦅",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#5D4037",
      "#8D6E63",
      "#D7CCC8",
      "#FFD700",
      "#FFA000",
      "#FFFFFF",
      "#212121",
      "#3E2723"
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
        "id": "mountain-crag",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "horse-body",
        "colorNumber": 3,
        "label": [
          120,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 280,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "horse-tail",
        "colorNumber": 9,
        "label": [
          50,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,260 C 35,270 25,320 35,350 C 45,315 55,290 65,280 Z"
        }
      },
      {
        "id": "hind-leg-l",
        "colorNumber": 2,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 305,
          "w": 14,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "hind-leg-r",
        "colorNumber": 9,
        "label": [
          105,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 305,
          "w": 14,
          "h": 65,
          "rx": 6
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 4,
        "label": [
          65,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,230 C 50,180 15,100 35,60 C 55,110 95,160 140,210 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 4,
        "label": [
          215,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,230 C 220,180 270,100 255,60 C 235,110 195,160 150,210 Z"
        }
      },
      {
        "id": "eagle-chest",
        "colorNumber": 4,
        "label": [
          160,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 210,
          "rx": 35,
          "ry": 45
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          195,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 130,
          "r": 26
        }
      },
      {
        "id": "eagle-beak",
        "colorNumber": 5,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "215,125 255,138 215,152"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          195,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 122,
          "r": 7
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 8,
        "label": [
          195,
          122
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 122,
          "r": 4
        }
      },
      {
        "id": "crest-1",
        "colorNumber": 3,
        "label": [
          180,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,110 170,80 195,105"
        }
      },
      {
        "id": "crest-2",
        "colorNumber": 3,
        "label": [
          165,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,118 150,100 185,122"
        }
      },
      {
        "id": "talon-leg-l",
        "colorNumber": 5,
        "label": [
          165,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 158,
          "y": 305,
          "w": 12,
          "h": 60,
          "rx": 4
        }
      },
      {
        "id": "talon-leg-r",
        "colorNumber": 6,
        "label": [
          185,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 305,
          "w": 12,
          "h": 55,
          "rx": 4
        }
      },
      {
        "id": "talon-claw-l",
        "colorNumber": 9,
        "label": [
          165,
          370
        ],
        "shape": {
          "kind": "polygon",
          "points": "158,365 170,365 164,378"
        }
      },
      {
        "id": "talon-claw-r",
        "colorNumber": 9,
        "label": [
          185,
          365
        ],
        "shape": {
          "kind": "polygon",
          "points": "178,360 190,360 184,373"
        }
      },
      {
        "id": "hoof-l",
        "colorNumber": 9,
        "label": [
          85,
          372
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 372,
          "r": 7
        }
      },
      {
        "id": "hoof-r",
        "colorNumber": 9,
        "label": [
          105,
          368
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 368,
          "r": 7
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
        "id": "cloud-p",
        "colorNumber": 7,
        "label": [
          110,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 75,
          "r": 18
        }
      }
    ]
  },
  {
    "id": "selkie",
    "name": "Selkie",
    "emoji": "🦭",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#546E7A",
      "#37474F",
      "#78909C",
      "#B0BEC5",
      "#FFE0B2",
      "#FFD54F",
      "#FFFFFF",
      "#00838F"
    ],
    "regions": [
      {
        "id": "ocean-bg",
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
        "id": "coastal-rock",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 22
        }
      },
      {
        "id": "seal-body",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 65,
          "ry": 80
        }
      },
      {
        "id": "seal-belly",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 45,
          "ry": 60
        }
      },
      {
        "id": "flipper-l",
        "colorNumber": 2,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 290,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "flipper-r",
        "colorNumber": 2,
        "label": [
          220,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 290,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "tail-fluke-l",
        "colorNumber": 2,
        "label": [
          130,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,340 115,370 145,365"
        }
      },
      {
        "id": "tail-fluke-r",
        "colorNumber": 2,
        "label": [
          170,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,340 185,370 155,365"
        }
      },
      {
        "id": "maiden-head",
        "colorNumber": 6,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 26
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 135,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 135,
          "r": 4
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          134,
          144
        ],
        "shape": {
          "kind": "circle",
          "cx": 134,
          "cy": 144,
          "r": 5
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          166,
          144
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 144,
          "r": 5
        }
      },
      {
        "id": "maiden-hair",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,135 C 110,80 190,80 180,135 C 190,165 175,200 170,210 C 160,185 140,185 130,210 Z"
        }
      },
      {
        "id": "seal-pelt-hood",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 105,
          "rx": 38,
          "ry": 22
        }
      },
      {
        "id": "pelt-ear-l",
        "colorNumber": 2,
        "label": [
          120,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "pelt-ear-r",
        "colorNumber": 2,
        "label": [
          180,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "pearl-pendant",
        "colorNumber": 7,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "wave-splash-1",
        "colorNumber": 8,
        "label": [
          60,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,360 Q 65,345 90,360"
        }
      },
      {
        "id": "wave-splash-2",
        "colorNumber": 8,
        "label": [
          240,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,360 Q 235,345 260,360"
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 9,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 9,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 10
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
    "id": "chimera",
    "name": "Chimera",
    "emoji": "🦁",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FFB74D",
      "#FFA000",
      "#E65100",
      "#2E7D32",
      "#4CAF50",
      "#FFD700",
      "#212121",
      "#D32F2F"
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
        "id": "volcano-rock",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "lion-body",
        "colorNumber": 3,
        "label": [
          140,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 275,
          "rx": 70,
          "ry": 45
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 2,
        "label": [
          180,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 300,
          "w": 16,
          "h": 75,
          "rx": 6
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 2,
        "label": [
          95,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 87,
          "y": 300,
          "w": 16,
          "h": 75,
          "rx": 6
        }
      },
      {
        "id": "snake-tail",
        "colorNumber": 5,
        "label": [
          65,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,260 Q 30,220 40,160 Q 55,120 75,140 Q 60,180 85,250 Z"
        }
      },
      {
        "id": "snake-head",
        "colorNumber": 6,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 140,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "snake-eye",
        "colorNumber": 8,
        "label": [
          78,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 78,
          "cy": 138,
          "r": 2
        }
      },
      {
        "id": "snake-tongue",
        "colorNumber": 9,
        "label": [
          88,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,138 95,140 85,142"
        }
      },
      {
        "id": "lion-mane",
        "colorNumber": 4,
        "label": [
          180,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 145,
          "r": 52
        }
      },
      {
        "id": "lion-face",
        "colorNumber": 2,
        "label": [
          180,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 145,
          "r": 32
        }
      },
      {
        "id": "lion-muzzle",
        "colorNumber": 7,
        "label": [
          192,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 155,
          "rx": 14,
          "ry": 12
        }
      },
      {
        "id": "lion-nose",
        "colorNumber": 8,
        "label": [
          198,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 152,
          "r": 4
        }
      },
      {
        "id": "lion-eye",
        "colorNumber": 8,
        "label": [
          178,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 138,
          "r": 4
        }
      },
      {
        "id": "lion-ear-t",
        "colorNumber": 3,
        "label": [
          160,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "goat-head",
        "colorNumber": 1,
        "label": [
          125,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 180,
          "rx": 20,
          "ry": 16
        }
      },
      {
        "id": "goat-horn-l",
        "colorNumber": 8,
        "label": [
          110,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "118,170 100,135 125,165"
        }
      },
      {
        "id": "goat-horn-r",
        "colorNumber": 8,
        "label": [
          135,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,170 145,135 138,165"
        }
      },
      {
        "id": "goat-eye",
        "colorNumber": 8,
        "label": [
          120,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 178,
          "r": 3
        }
      },
      {
        "id": "fire-puff",
        "colorNumber": 9,
        "label": [
          240,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,155 Q 245,140 235,165 Q 245,190 205,175 Z"
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
      },
      {
        "id": "fire-spark-1",
        "colorNumber": 7,
        "label": [
          260,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 125,
          "r": 5
        }
      },
      {
        "id": "fire-spark-2",
        "colorNumber": 7,
        "label": [
          265,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 185,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "basilisk",
    "name": "Basilisk",
    "emoji": "🐍",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#1B5E20",
      "#2E7D32",
      "#4CAF50",
      "#81C784",
      "#FFD700",
      "#D50000",
      "#212121",
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
        "id": "dungeon-stone",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "coil-outer",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 95,
          "ry": 60
        }
      },
      {
        "id": "coil-mid",
        "colorNumber": 4,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 75,
          "ry": 45
        }
      },
      {
        "id": "coil-inner",
        "colorNumber": 5,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 50,
          "ry": 30
        }
      },
      {
        "id": "neck-hood",
        "colorNumber": 3,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,260 C 95,180 110,140 150,120 C 190,140 205,180 190,260 Z"
        }
      },
      {
        "id": "hood-chest",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 25,
          "ry": 45
        }
      },
      {
        "id": "crown-crest",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,95 175,95 180,70 162,80 150,60 138,80 120,70"
        }
      },
      {
        "id": "head-base",
        "colorNumber": 3,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 115,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "snout",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 125,
          "rx": 26,
          "ry": 18
        }
      },
      {
        "id": "eye-l-gold",
        "colorNumber": 6,
        "label": [
          132,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 108,
          "r": 10
        }
      },
      {
        "id": "eye-l-pupil",
        "colorNumber": 8,
        "label": [
          132,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 108,
          "r": 3
        }
      },
      {
        "id": "eye-r-gold",
        "colorNumber": 6,
        "label": [
          168,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 108,
          "r": 10
        }
      },
      {
        "id": "eye-r-pupil",
        "colorNumber": 8,
        "label": [
          168,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 108,
          "r": 3
        }
      },
      {
        "id": "fang-l",
        "colorNumber": 9,
        "label": [
          138,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,130 142,130 138,142"
        }
      },
      {
        "id": "fang-r",
        "colorNumber": 9,
        "label": [
          162,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "158,130 165,130 162,142"
        }
      },
      {
        "id": "forked-tongue",
        "colorNumber": 7,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,135 L 150,155 L 142,165 M 150,155 L 158,165"
        }
      },
      {
        "id": "scale-spot-1",
        "colorNumber": 5,
        "label": [
          130,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "scale-spot-2",
        "colorNumber": 5,
        "label": [
          170,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "scale-spot-3",
        "colorNumber": 5,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 7
        }
      },
      {
        "id": "toxic-bubble-1",
        "colorNumber": 5,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "toxic-bubble-2",
        "colorNumber": 5,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 80,
          "r": 8
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
    "id": "pirate-221",
    "name": "Pirate Galleon High Seas",
    "emoji": "🏴‍☠️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#795548",
      "#4E342E",
      "#FFFFFF",
      "#212121",
      "#D32F2F",
      "#FFD700",
      "#0288D1",
      "#B0BEC5"
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
        "id": "ocean-waves",
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
          "ry": 30
        }
      },
      {
        "id": "hull-body",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,270 L 265,270 L 235,350 L 65,350 Z"
        }
      },
      {
        "id": "hull-plank-1",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,290 L 255,290 L 245,315 L 55,315 Z"
        }
      },
      {
        "id": "porthole-1",
        "colorNumber": 7,
        "label": [
          90,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 330,
          "r": 8
        }
      },
      {
        "id": "porthole-2",
        "colorNumber": 7,
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
        "id": "porthole-3",
        "colorNumber": 7,
        "label": [
          210,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 330,
          "r": 8
        }
      },
      {
        "id": "mast-main",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 50,
          "w": 8,
          "h": 220
        }
      },
      {
        "id": "mast-fore",
        "colorNumber": 3,
        "label": [
          80,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 76,
          "y": 90,
          "w": 8,
          "h": 180
        }
      },
      {
        "id": "mast-mizzen",
        "colorNumber": 3,
        "label": [
          220,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 216,
          "y": 90,
          "w": 8,
          "h": 180
        }
      },
      {
        "id": "sail-main-top",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,80 Q 150,105 185,80 L 180,140 Q 150,120 120,140 Z"
        }
      },
      {
        "id": "sail-main-bot",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,150 Q 150,185 195,150 L 190,240 Q 150,210 110,240 Z"
        }
      },
      {
        "id": "sail-fore",
        "colorNumber": 4,
        "label": [
          80,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,120 Q 80,145 105,120 L 100,230 Q 80,205 60,230 Z"
        }
      },
      {
        "id": "sail-mizzen",
        "colorNumber": 4,
        "label": [
          220,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,120 Q 220,145 245,120 L 240,230 Q 220,205 200,230 Z"
        }
      },
      {
        "id": "jolly-roger-flag",
        "colorNumber": 5,
        "label": [
          168,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 154,
          "y": 42,
          "w": 28,
          "h": 18
        }
      },
      {
        "id": "skull-symbol",
        "colorNumber": 4,
        "label": [
          168,
          51
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 51,
          "r": 4
        }
      },
      {
        "id": "bowsprit",
        "colorNumber": 3,
        "label": [
          270,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,270 295,240 255,275"
        }
      },
      {
        "id": "cresting-wave-1",
        "colorNumber": 4,
        "label": [
          60,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,360 Q 65,345 95,360"
        }
      },
      {
        "id": "cresting-wave-2",
        "colorNumber": 4,
        "label": [
          220,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,360 Q 225,345 255,360"
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
          "r": 7
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
          "r": 7
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 4,
        "label": [
          110,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 45,
          "r": 14
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 4,
        "label": [
          200,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 45,
          "r": 14
        }
      }
    ]
  },
  {
    "id": "trex-dino",
    "name": "T-Rex Dinosaur",
    "emoji": "🦖",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#2E7D32",
      "#1B5E20",
      "#4CAF50",
      "#81C784",
      "#FFD54F",
      "#FFFFFF",
      "#212121",
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
        "id": "ground",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 260,
          "rx": 60,
          "ry": 50
        }
      },
      {
        "id": "belly",
        "colorNumber": 4,
        "label": [
          135,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,270 C 115,295 155,295 175,270 C 155,280 115,280 95,270 Z"
        }
      },
      {
        "id": "tail",
        "colorNumber": 2,
        "label": [
          50,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,270 C 35,280 15,250 10,220 C 30,240 60,255 85,265 Z"
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          170,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,230 C 165,180 185,140 200,105 L 225,115 C 210,150 190,195 180,235 Z"
        }
      },
      {
        "id": "head-top",
        "colorNumber": 2,
        "label": [
          220,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 95,
          "rx": 35,
          "ry": 25
        }
      },
      {
        "id": "jaw-bot",
        "colorNumber": 3,
        "label": [
          220,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,110 L 255,115 L 235,140 L 195,120 Z"
        }
      },
      {
        "id": "teeth-1",
        "colorNumber": 7,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "215,108 225,108 220,118"
        }
      },
      {
        "id": "teeth-2",
        "colorNumber": 7,
        "label": [
          240,
          112
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,110 245,110 240,120"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          205,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 88,
          "r": 8
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 8,
        "label": [
          205,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 88,
          "r": 4
        }
      },
      {
        "id": "nostril",
        "colorNumber": 8,
        "label": [
          245,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 95,
          "r": 3
        }
      },
      {
        "id": "arm-tiny",
        "colorNumber": 3,
        "label": [
          180,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,205 Q 195,210 190,225"
        }
      },
      {
        "id": "thigh-l",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 300,
          "rx": 25,
          "ry": 35
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 3,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 335,
          "w": 20,
          "h": 35,
          "rx": 5
        }
      },
      {
        "id": "claws-l",
        "colorNumber": 6,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,370 165,370 150,385"
        }
      },
      {
        "id": "thigh-r",
        "colorNumber": 3,
        "label": [
          175,
          295
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 295,
          "rx": 20,
          "ry": 30
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 3,
        "label": [
          175,
          350
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 330,
          "w": 16,
          "h": 30,
          "rx": 5
        }
      },
      {
        "id": "claws-r",
        "colorNumber": 6,
        "label": [
          175,
          368
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,365 188,365 175,378"
        }
      },
      {
        "id": "back-spot-1",
        "colorNumber": 5,
        "label": [
          115,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "back-spot-2",
        "colorNumber": 5,
        "label": [
          145,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 235,
          "r": 10
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
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "red-gargoyle",
    "name": "Stone Gargoyle",
    "emoji": "🗿",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#78909C",
      "#546E7A",
      "#37474F",
      "#263238",
      "#FFD700",
      "#D32F2F",
      "#B0BEC5"
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
        "id": "stone-pedestal",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 340,
          "w": 200,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "pedestal-top",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 110,
          "ry": 15
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 3,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,220 C 50,170 15,90 25,50 C 45,100 85,140 125,180 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 3,
        "label": [
          235,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,220 C 250,170 285,90 275,50 C 255,100 215,140 175,180 Z"
        }
      },
      {
        "id": "wing-bone-l",
        "colorNumber": 4,
        "label": [
          55,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 120,
          "rx": 8,
          "ry": 30
        }
      },
      {
        "id": "wing-bone-r",
        "colorNumber": 4,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 120,
          "rx": 8,
          "ry": 30
        }
      },
      {
        "id": "gargoyle-body",
        "colorNumber": 3,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 45,
          "ry": 55
        }
      },
      {
        "id": "chest-muscle",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 30,
          "ry": 35
        }
      },
      {
        "id": "head",
        "colorNumber": 3,
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
        "id": "snout-beast",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 22,
          "ry": 15
        }
      },
      {
        "id": "horn-l",
        "colorNumber": 5,
        "label": [
          125,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,125 110,85 142,118"
        }
      },
      {
        "id": "horn-r",
        "colorNumber": 5,
        "label": [
          175,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,125 190,85 158,118"
        }
      },
      {
        "id": "eye-l-glow",
        "colorNumber": 7,
        "label": [
          138,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "eye-r-glow",
        "colorNumber": 7,
        "label": [
          162,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "fang-l",
        "colorNumber": 8,
        "label": [
          142,
          168
        ],
        "shape": {
          "kind": "polygon",
          "points": "139,162 145,162 142,172"
        }
      },
      {
        "id": "fang-r",
        "colorNumber": 8,
        "label": [
          158,
          168
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,162 161,162 158,172"
        }
      },
      {
        "id": "claw-foot-l",
        "colorNumber": 5,
        "label": [
          115,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 335,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "claw-foot-r",
        "colorNumber": 5,
        "label": [
          185,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 335,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "stone-crack-1",
        "colorNumber": 5,
        "label": [
          80,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,355 L 90,375"
        }
      },
      {
        "id": "stone-crack-2",
        "colorNumber": 5,
        "label": [
          210,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,355 L 220,375"
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
      },
      {
        "id": "moon-orb",
        "colorNumber": 6,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 16
        }
      }
    ]
  },
  {
    "id": "genie-lamp",
    "name": "Genie of Lamp",
    "emoji": "🧞‍♂️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#311B92",
      "#00B0FF",
      "#0288D1",
      "#01579B",
      "#FFD700",
      "#FFA000",
      "#FFFFFF",
      "#212121",
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
        "id": "carpet",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 18
        }
      },
      {
        "id": "lamp-body",
        "colorNumber": 5,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 38,
          "ry": 22
        }
      },
      {
        "id": "lamp-spout",
        "colorNumber": 5,
        "label": [
          195,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,345 220,325 175,355"
        }
      },
      {
        "id": "lamp-handle",
        "colorNumber": 6,
        "label": [
          110,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,340 C 95,335 95,365 125,360"
        }
      },
      {
        "id": "lamp-lid",
        "colorNumber": 6,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "smoke-tail",
        "colorNumber": 2,
        "label": [
          170,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,325 C 230,290 170,270 180,225 L 145,225 C 135,270 190,290 210,325 Z"
        }
      },
      {
        "id": "genie-torso",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,155 185,155 175,230 125,230"
        }
      },
      {
        "id": "chest-pec-l",
        "colorNumber": 3,
        "label": [
          135,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 180,
          "rx": 16,
          "ry": 14
        }
      },
      {
        "id": "chest-pec-r",
        "colorNumber": 3,
        "label": [
          165,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 180,
          "rx": 16,
          "ry": 14
        }
      },
      {
        "id": "gold-wristband-l",
        "colorNumber": 5,
        "label": [
          95,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "gold-wristband-r",
        "colorNumber": 5,
        "label": [
          205,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 190,
          "r": 8
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
          "r": 24
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          140,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          160,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "goatee",
        "colorNumber": 4,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 135,
          "rx": 8,
          "ry": 14
        }
      },
      {
        "id": "turban-base",
        "colorNumber": 9,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 95,
          "rx": 34,
          "ry": 18
        }
      },
      {
        "id": "turban-gem",
        "colorNumber": 5,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "turban-feather",
        "colorNumber": 7,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "146,85 150,45 154,85"
        }
      },
      {
        "id": "gold-earring",
        "colorNumber": 5,
        "label": [
          122,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 118,
          "r": 5
        }
      },
      {
        "id": "magic-spark-1",
        "colorNumber": 5,
        "label": [
          80,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 80,
          "r": 7
        }
      },
      {
        "id": "magic-spark-2",
        "colorNumber": 5,
        "label": [
          220,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 80,
          "r": 7
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
      }
    ]
  },
  {
    "id": "cave-troll",
    "name": "Cave Troll",
    "emoji": "🧌",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#689F38",
      "#33691E",
      "#558B2F",
      "#8D6E63",
      "#4E342E",
      "#FFD54F",
      "#FFFFFF",
      "#212121"
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
        "id": "cave-floor",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "troll-body",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 70,
          "ry": 65
        }
      },
      {
        "id": "troll-belly",
        "colorNumber": 4,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 285,
          "rx": 48,
          "ry": 45
        }
      },
      {
        "id": "troll-loincloth",
        "colorNumber": 5,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 325,
          "w": 70,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "leg-l",
        "colorNumber": 3,
        "label": [
          115,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 325,
          "w": 20,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "leg-r",
        "colorNumber": 3,
        "label": [
          185,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 325,
          "w": 20,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "troll-head",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 42
        }
      },
      {
        "id": "huge-nose",
        "colorNumber": 3,
        "label": [
          150,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 148,
          "r": 14
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          130,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 128,
          "r": 8
        }
      },
      {
        "id": "eye-l-pupil",
        "colorNumber": 9,
        "label": [
          130,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 128,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          170,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 128,
          "r": 8
        }
      },
      {
        "id": "eye-r-pupil",
        "colorNumber": 9,
        "label": [
          170,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 128,
          "r": 4
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 3,
        "label": [
          95,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 135,
          "rx": 20,
          "ry": 14
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 3,
        "label": [
          205,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 135,
          "rx": 20,
          "ry": 14
        }
      },
      {
        "id": "tusk-l",
        "colorNumber": 7,
        "label": [
          138,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "134,172 142,172 138,158"
        }
      },
      {
        "id": "tusk-r",
        "colorNumber": 7,
        "label": [
          162,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "158,172 166,172 162,158"
        }
      },
      {
        "id": "club-handle",
        "colorNumber": 6,
        "label": [
          240,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 236,
          "y": 140,
          "w": 10,
          "h": 180,
          "rx": 4
        }
      },
      {
        "id": "club-head",
        "colorNumber": 5,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 240,
          "cy": 140,
          "rx": 24,
          "ry": 38
        }
      },
      {
        "id": "club-knot-1",
        "colorNumber": 6,
        "label": [
          235,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "club-knot-2",
        "colorNumber": 6,
        "label": [
          245,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "wart-1",
        "colorNumber": 3,
        "label": [
          140,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 110,
          "r": 4
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
    "id": "wood-elf",
    "name": "Woodland Elf",
    "emoji": "🧝",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#4CAF50",
      "#2E7D32",
      "#795548",
      "#8D6E63",
      "#FFD700",
      "#FFE0B2",
      "#212121",
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
        "id": "moss-ground",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "leaf-cloak",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,175 180,175 215,350 85,350"
        }
      },
      {
        "id": "cloak-clasp",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,185 Q 150,195 165,185"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 120,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 120,
          "r": 3
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 7,
        "label": [
          118,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,130 105,110 130,115"
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 7,
        "label": [
          182,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,130 195,110 170,115"
        }
      },
      {
        "id": "hair-back",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 115,160 115,210 130,240 L 170,240 C 185,210 185,160 175,120 Z"
        }
      },
      {
        "id": "hair-front",
        "colorNumber": 6,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 128,118 C 138,98 162,98 172,118 C 160,106 140,106 128,118 Z"
        }
      },
      {
        "id": "circlet-leaf",
        "colorNumber": 9,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 6
        }
      },
      {
        "id": "druid-staff",
        "colorNumber": 4,
        "label": [
          225,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 222,
          "y": 120,
          "w": 6,
          "h": 240,
          "rx": 3
        }
      },
      {
        "id": "staff-crystal",
        "colorNumber": 9,
        "label": [
          225,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "crystal-glow",
        "colorNumber": 6,
        "label": [
          225,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "floating-orb-1",
        "colorNumber": 9,
        "label": [
          205,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "floating-orb-2",
        "colorNumber": 9,
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
        "id": "floating-orb-3",
        "colorNumber": 9,
        "label": [
          225,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 75,
          "r": 5
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
          65,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 150,
          "r": 6
        }
      },
      {
        "id": "forest-spore-1",
        "colorNumber": 9,
        "label": [
          40,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "forest-spore-2",
        "colorNumber": 9,
        "label": [
          260,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "mushroom-cap",
        "colorNumber": 6,
        "label": [
          70,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 365,
          "r": 10
        }
      },
      {
        "id": "mushroom-stem",
        "colorNumber": 1,
        "label": [
          70,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 68,
          "y": 368,
          "w": 4,
          "h": 12,
          "rx": 1
        }
      }
    ]
  },
  {
    "id": "vampire-lord",
    "name": "Vampire Count",
    "emoji": "🧛‍♂️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A002C",
      "#212121",
      "#D32F2F",
      "#B71C1C",
      "#FFFFFF",
      "#FFD700",
      "#E0E0E0",
      "#7B1FA2"
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
        "id": "blood-moon",
        "colorNumber": 3,
        "label": [
          230,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 80,
          "r": 45
        }
      },
      {
        "id": "castle-terrace",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "cape-collar-l",
        "colorNumber": 3,
        "label": [
          105,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 85,100 135,170"
        }
      },
      {
        "id": "cape-collar-r",
        "colorNumber": 3,
        "label": [
          195,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,185 215,100 165,170"
        }
      },
      {
        "id": "cape-lining",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,185 180,185 235,370 65,370"
        }
      },
      {
        "id": "cape-outer-black",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,185 170,185 215,370 85,370"
        }
      },
      {
        "id": "vest-red",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,185 165,185 170,270 130,270"
        }
      },
      {
        "id": "white-cravat",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,185 158,185 150,215"
        }
      },
      {
        "id": "ruby-medallion",
        "colorNumber": 6,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 22
        }
      },
      {
        "id": "eye-l-red",
        "colorNumber": 3,
        "label": [
          140,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "eye-r-red",
        "colorNumber": 3,
        "label": [
          160,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "fang-l",
        "colorNumber": 5,
        "label": [
          143,
          146
        ],
        "shape": {
          "kind": "polygon",
          "points": "141,142 145,142 143,150"
        }
      },
      {
        "id": "fang-r",
        "colorNumber": 5,
        "label": [
          157,
          146
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,142 159,142 157,150"
        }
      },
      {
        "id": "widow-peak-hair",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 128,125 C 135,100 165,100 172,125 C 160,118 150,128 150,128 C 150,128 140,118 128,125 Z"
        }
      },
      {
        "id": "bat-body",
        "colorNumber": 2,
        "label": [
          75,
          90
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 90,
          "rx": 8,
          "ry": 12
        }
      },
      {
        "id": "bat-wing-l",
        "colorNumber": 2,
        "label": [
          50,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,85 C 50,75 35,90 35,90 C 45,95 55,95 70,95 Z"
        }
      },
      {
        "id": "bat-wing-r",
        "colorNumber": 2,
        "label": [
          100,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,85 C 100,75 115,90 115,90 C 105,95 95,95 80,95 Z"
        }
      },
      {
        "id": "star-1",
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
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          105,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 40,
          "r": 4
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
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          45,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 250,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "magic-sorceress",
    "name": "Sorceress",
    "emoji": "🔮",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12005E",
      "#4A148C",
      "#7B1FA2",
      "#BA68C8",
      "#00E5FF",
      "#FFD700",
      "#FFE0B2",
      "#212121",
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
        "id": "altar-pedestal",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "crystal-ball-glow",
        "colorNumber": 9,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 52
        }
      },
      {
        "id": "crystal-ball-body",
        "colorNumber": 5,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 40
        }
      },
      {
        "id": "crystal-ball-core",
        "colorNumber": 7,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 22
        }
      },
      {
        "id": "crystal-stand",
        "colorNumber": 6,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,310 175,310 190,360 110,360"
        }
      },
      {
        "id": "rune-swirl-1",
        "colorNumber": 6,
        "label": [
          140,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,270 Q 150,250 170,270"
        }
      },
      {
        "id": "rune-swirl-2",
        "colorNumber": 6,
        "label": [
          160,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,280 Q 150,290 165,280"
        }
      },
      {
        "id": "sorceress-robe",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,130 175,130 205,250 95,250"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 90,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 90,
          "r": 3
        }
      },
      {
        "id": "sorceress-hair",
        "colorNumber": 4,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,95 C 110,135 110,185 125,215 L 175,215 C 190,185 190,135 175,95 Z"
        }
      },
      {
        "id": "tiara",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,85 165,85 150,65"
        }
      },
      {
        "id": "tiara-gem",
        "colorNumber": 5,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 4
        }
      },
      {
        "id": "rune-spark-1",
        "colorNumber": 5,
        "label": [
          65,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "rune-spark-2",
        "colorNumber": 5,
        "label": [
          235,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "rune-spark-3",
        "colorNumber": 5,
        "label": [
          60,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "rune-spark-4",
        "colorNumber": 5,
        "label": [
          240,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "star-1",
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
        "id": "star-2",
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
        "id": "sparkle-center",
        "colorNumber": 7,
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
    "id": "paladin-shield",
    "name": "Paladin Knight",
    "emoji": "⚔️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#CFD8DC",
      "#90A4AE",
      "#37474F",
      "#FFD700",
      "#FFA000",
      "#D32F2F",
      "#FFFFFF",
      "#212121"
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
        "id": "temple-ground",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "sword-blade-1",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,80 L 240,320 L 230,328 L 50,88 Z"
        }
      },
      {
        "id": "sword-blade-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 240,80 L 60,320 L 70,328 L 250,88 Z"
        }
      },
      {
        "id": "sword-guard-1",
        "colorNumber": 5,
        "label": [
          75,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 80,
          "w": 40,
          "h": 10,
          "rx": 3
        }
      },
      {
        "id": "sword-guard-2",
        "colorNumber": 5,
        "label": [
          225,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 80,
          "w": 40,
          "h": 10,
          "rx": 3
        }
      },
      {
        "id": "pommel-1",
        "colorNumber": 5,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "pommel-2",
        "colorNumber": 5,
        "label": [
          245,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "paladin-shield-body",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,140 L 215,140 L 215,260 C 215,330 150,360 150,360 C 150,360 85,330 85,260 Z"
        }
      },
      {
        "id": "shield-inner-gold",
        "colorNumber": 5,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,150 L 205,150 L 205,255 C 205,315 150,345 150,345 C 150,345 95,315 95,255 Z"
        }
      },
      {
        "id": "sun-emblem-core",
        "colorNumber": 7,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 24
        }
      },
      {
        "id": "sun-emblem-in",
        "colorNumber": 8,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 12
        }
      },
      {
        "id": "sun-ray-1",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,205 156,205 150,185"
        }
      },
      {
        "id": "sun-ray-2",
        "colorNumber": 6,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,265 156,265 150,285"
        }
      },
      {
        "id": "sun-ray-3",
        "colorNumber": 6,
        "label": [
          110,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,229 120,241 100,235"
        }
      },
      {
        "id": "sun-ray-4",
        "colorNumber": 6,
        "label": [
          190,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,229 180,241 200,235"
        }
      },
      {
        "id": "winged-helm",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 110,
          "rx": 30,
          "ry": 35
        }
      },
      {
        "id": "helm-wing-l",
        "colorNumber": 8,
        "label": [
          115,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,110 95,65 125,95"
        }
      },
      {
        "id": "helm-wing-r",
        "colorNumber": 8,
        "label": [
          185,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,110 205,65 175,95"
        }
      },
      {
        "id": "visor-slit",
        "colorNumber": 9,
        "label": [
          150,
          112
        ],
        "shape": {
          "kind": "rect",
          "x": 132,
          "y": 110,
          "w": 36,
          "h": 4,
          "rx": 1
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
      }
    ]
  },
  {
    "id": "king-arthur",
    "name": "King Arthur",
    "emoji": "👑",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D32F2F",
      "#B71C1C",
      "#FFD700",
      "#FFA000",
      "#FFFFFF",
      "#FFE0B2",
      "#212121",
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
        "id": "throne-dais",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "royal-robe",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,185 185,185 230,370 70,370"
        }
      },
      {
        "id": "ermine-cape-collar",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,185 Q 150,215 190,185 L 180,240 Q 150,260 120,240 Z"
        }
      },
      {
        "id": "tunic-gold",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,240 170,240 175,370 125,370"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 24
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "beard-gold",
        "colorNumber": 9,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,135 170,135 150,175"
        }
      },
      {
        "id": "hair",
        "colorNumber": 9,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 110,160 110,190 120,205 L 180,205 C 190,190 190,160 175,120 Z"
        }
      },
      {
        "id": "crown-body",
        "colorNumber": 4,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,110 180,110 185,75 165,95 150,60 135,95 115,75"
        }
      },
      {
        "id": "crown-rim",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 100,
          "w": 60,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "crown-gem-c",
        "colorNumber": 3,
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
        "id": "crown-gem-l",
        "colorNumber": 3,
        "label": [
          130,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 90,
          "r": 4
        }
      },
      {
        "id": "crown-gem-r",
        "colorNumber": 3,
        "label": [
          170,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 90,
          "r": 4
        }
      },
      {
        "id": "excalibur-blade",
        "colorNumber": 6,
        "label": [
          220,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 216,
          "y": 120,
          "w": 8,
          "h": 200
        }
      },
      {
        "id": "excalibur-tip",
        "colorNumber": 6,
        "label": [
          220,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "216,120 220,105 224,120"
        }
      },
      {
        "id": "excalibur-guard",
        "colorNumber": 4,
        "label": [
          220,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 316,
          "w": 50,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "excalibur-pommel",
        "colorNumber": 5,
        "label": [
          220,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
        "colorNumber": 4,
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
        "colorNumber": 4,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 4,
        "label": [
          255,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 200,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "pharaoh-mummy",
    "name": "Pharaoh Mummy",
    "emoji": "🏺",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFD700",
      "#FFA000",
      "#0288D1",
      "#01579B",
      "#D32F2F",
      "#FFE0B2",
      "#212121",
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
        "id": "tomb-base",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "nemes-headdress-l",
        "colorNumber": 4,
        "label": [
          95,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,95 L 75,160 L 95,250 L 125,230 Z"
        }
      },
      {
        "id": "nemes-headdress-r",
        "colorNumber": 4,
        "label": [
          205,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,95 L 225,160 L 205,250 L 175,230 Z"
        }
      },
      {
        "id": "nemes-stripe-l1",
        "colorNumber": 2,
        "label": [
          90,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,150 L 115,140 L 115,160 L 80,170 Z"
        }
      },
      {
        "id": "nemes-stripe-r1",
        "colorNumber": 2,
        "label": [
          210,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,150 L 185,140 L 185,160 L 220,170 Z"
        }
      },
      {
        "id": "pharaoh-face",
        "colorNumber": 7,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 35,
          "ry": 42
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          135,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          165,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "kohl-tail-l",
        "colorNumber": 8,
        "label": [
          125,
          132
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,130 L 120,135"
        }
      },
      {
        "id": "kohl-tail-r",
        "colorNumber": 8,
        "label": [
          175,
          132
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,130 L 180,135"
        }
      },
      {
        "id": "royal-beard",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 175,
          "w": 12,
          "h": 45,
          "rx": 3
        }
      },
      {
        "id": "uraeus-hood",
        "colorNumber": 6,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 85,
          "rx": 8,
          "ry": 12
        }
      },
      {
        "id": "uraeus-head",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 4
        }
      },
      {
        "id": "chest-bandages",
        "colorNumber": 1,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 55,
          "ry": 60
        }
      },
      {
        "id": "crook-staff",
        "colorNumber": 2,
        "label": [
          130,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 220,
          "w": 6,
          "h": 100
        }
      },
      {
        "id": "crook-hook",
        "colorNumber": 3,
        "label": [
          100,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 103,220 C 90,195 125,195 115,225"
        }
      },
      {
        "id": "flail-handle",
        "colorNumber": 2,
        "label": [
          170,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 194,
          "y": 220,
          "w": 6,
          "h": 100
        }
      },
      {
        "id": "flail-head",
        "colorNumber": 3,
        "label": [
          195,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "197,220 215,195 190,195"
        }
      },
      {
        "id": "hieroglyph-1",
        "colorNumber": 3,
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
        "id": "hieroglyph-2",
        "colorNumber": 3,
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
    "id": "dark-sorcerer",
    "name": "Dark Sorcerer",
    "emoji": "🧙",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0017",
      "#311B92",
      "#4A148C",
      "#7B1FA2",
      "#BA68C8",
      "#00E5FF",
      "#FFFFFF",
      "#212121",
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
        "id": "rune-circle",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "sorcerer-robe",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,175 185,175 225,370 75,370"
        }
      },
      {
        "id": "robe-trim",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,370 L 225,370 L 220,355 L 80,355 Z"
        }
      },
      {
        "id": "hood-cape",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,165 200,165 150,45"
        }
      },
      {
        "id": "hood-opening",
        "colorNumber": 8,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 125,
          "rx": 32,
          "ry": 38
        }
      },
      {
        "id": "glowing-eye-l",
        "colorNumber": 6,
        "label": [
          138,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "glowing-eye-r",
        "colorNumber": 6,
        "label": [
          162,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "book-cover",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 205,
          "w": 70,
          "h": 50,
          "rx": 4
        }
      },
      {
        "id": "book-pages-l",
        "colorNumber": 7,
        "label": [
          132,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,210 150,218 150,250 120,242"
        }
      },
      {
        "id": "book-pages-r",
        "colorNumber": 7,
        "label": [
          168,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,218 180,210 180,242 150,250"
        }
      },
      {
        "id": "book-rune-gem",
        "colorNumber": 6,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "flame-orb-1",
        "colorNumber": 5,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "flame-core-1",
        "colorNumber": 6,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "flame-orb-2",
        "colorNumber": 5,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "flame-core-2",
        "colorNumber": 6,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "arcane-spark-1",
        "colorNumber": 6,
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
        "id": "arcane-spark-2",
        "colorNumber": 6,
        "label": [
          255,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 95,
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
        "id": "star-1",
        "colorNumber": 9,
        "label": [
          105,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 35,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 9,
        "label": [
          195,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 35,
          "r": 4
        }
      },
      {
        "id": "rune-dot-1",
        "colorNumber": 6,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "rune-dot-2",
        "colorNumber": 6,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 280,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "archangel",
    "name": "Celestial Angel",
    "emoji": "🪽",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFFDE7",
      "#FFFFFF",
      "#FFF9C4",
      "#FFD700",
      "#FFA000",
      "#FFE0B2",
      "#212121",
      "#80D8FF",
      "#F8BBD0"
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
        "id": "cloud-pedestal",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 22
        }
      },
      {
        "id": "wing-l-out",
        "colorNumber": 2,
        "label": [
          55,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 40,170 10,70 20,40 C 40,90 85,150 135,190 Z"
        }
      },
      {
        "id": "wing-l-mid",
        "colorNumber": 3,
        "label": [
          65,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 65,185 35,115 45,85 C 65,120 100,165 135,205 Z"
        }
      },
      {
        "id": "wing-l-in",
        "colorNumber": 2,
        "label": [
          80,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 80,195 55,145 65,125 C 80,150 110,185 130,215 Z"
        }
      },
      {
        "id": "wing-r-out",
        "colorNumber": 2,
        "label": [
          245,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 260,170 290,70 280,40 C 260,90 215,150 165,190 Z"
        }
      },
      {
        "id": "wing-r-mid",
        "colorNumber": 3,
        "label": [
          235,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 235,185 265,115 255,85 C 235,120 200,165 165,205 Z"
        }
      },
      {
        "id": "wing-r-in",
        "colorNumber": 2,
        "label": [
          220,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,220 C 220,195 245,145 235,125 C 220,150 190,185 170,215 Z"
        }
      },
      {
        "id": "angel-gown",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 175,185 215,360 85,360"
        }
      },
      {
        "id": "golden-sash",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 118,
          "y": 235,
          "w": 64,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "head",
        "colorNumber": 6,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          142,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          158,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 9,
        "label": [
          136,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 136,
          "cy": 138,
          "r": 4
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 9,
        "label": [
          164,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 164,
          "cy": 138,
          "r": 4
        }
      },
      {
        "id": "hair-gold",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,130 C 115,80 185,80 175,130 C 185,160 175,190 170,200 C 160,180 140,180 130,200 Z"
        }
      },
      {
        "id": "halo-outer",
        "colorNumber": 4,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 65,
          "rx": 34,
          "ry": 12
        }
      },
      {
        "id": "halo-inner",
        "colorNumber": 1,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 65,
          "rx": 24,
          "ry": 7
        }
      },
      {
        "id": "halo-star",
        "colorNumber": 5,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 65,
          "r": 6
        }
      },
      {
        "id": "starlight-1",
        "colorNumber": 4,
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
        "id": "starlight-2",
        "colorNumber": 4,
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
      },
      {
        "id": "starlight-3",
        "colorNumber": 8,
        "label": [
          50,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "starlight-4",
        "colorNumber": 8,
        "label": [
          250,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 270,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "dwarf-blacksmith",
    "name": "Dwarf Smith",
    "emoji": "🔨",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#4E342E",
      "#795548",
      "#8D6E63",
      "#D84315",
      "#FF8F00",
      "#FFD700",
      "#37474F",
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
        "id": "forge-stone",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "anvil-top",
        "colorNumber": 8,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,305 L 225,305 L 205,335 L 95,335 Z"
        }
      },
      {
        "id": "anvil-horn",
        "colorNumber": 8,
        "label": [
          240,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "225,305 260,315 205,335"
        }
      },
      {
        "id": "anvil-base",
        "colorNumber": 8,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 335,
          "w": 80,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "dwarf-tunic",
        "colorNumber": 2,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,165 185,165 200,300 100,300"
        }
      },
      {
        "id": "leather-apron",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 185,
          "w": 50,
          "h": 110,
          "rx": 4
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 24
        }
      },
      {
        "id": "round-nose",
        "colorNumber": 4,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 128,
          "r": 8
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          140,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 118,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          160,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 118,
          "r": 3
        }
      },
      {
        "id": "braided-beard",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,135 180,135 150,225"
        }
      },
      {
        "id": "beard-clasp-1",
        "colorNumber": 7,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "beard-clasp-2",
        "colorNumber": 7,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "iron-helmet",
        "colorNumber": 8,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 95,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "helmet-horn-l",
        "colorNumber": 7,
        "label": [
          115,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,100 105,75 130,90"
        }
      },
      {
        "id": "helmet-horn-r",
        "colorNumber": 7,
        "label": [
          185,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,100 195,75 170,90"
        }
      },
      {
        "id": "hammer-handle",
        "colorNumber": 3,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 110,
          "w": 10,
          "h": 160,
          "rx": 4
        }
      },
      {
        "id": "hammer-head",
        "colorNumber": 8,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 95,
          "w": 60,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "hammer-runic-core",
        "colorNumber": 7,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 110,
          "r": 8
        }
      },
      {
        "id": "forge-spark-1",
        "colorNumber": 6,
        "label": [
          140,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "forge-spark-2",
        "colorNumber": 6,
        "label": [
          160,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 285,
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
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "elf-princess",
    "name": "Elf Princess",
    "emoji": "🧝‍♀️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F0FDF4",
      "#A7F3D0",
      "#34D399",
      "#059669",
      "#FFD700",
      "#F472B6",
      "#FFE0B2",
      "#212121",
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
        "id": "meadow-floor",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "gown",
        "colorNumber": 2,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 175,185 225,370 75,370"
        }
      },
      {
        "id": "gown-petticoat",
        "colorNumber": 3,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,185 Q 110,270 95,370 L 135,370 Q 145,270 145,185 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
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
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          136,
          134
        ],
        "shape": {
          "kind": "circle",
          "cx": 136,
          "cy": 134,
          "r": 4
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          164,
          134
        ],
        "shape": {
          "kind": "circle",
          "cx": 164,
          "cy": 134,
          "r": 4
        }
      },
      {
        "id": "elf-ear-l",
        "colorNumber": 7,
        "label": [
          118,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,135 105,115 130,120"
        }
      },
      {
        "id": "elf-ear-r",
        "colorNumber": 7,
        "label": [
          182,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,135 195,115 170,120"
        }
      },
      {
        "id": "flowing-hair",
        "colorNumber": 5,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 105,170 100,230 115,280 L 185,280 C 200,230 195,170 175,120 Z"
        }
      },
      {
        "id": "flower-tiara",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,115 165,115 150,90"
        }
      },
      {
        "id": "tiara-gem",
        "colorNumber": 6,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 5
        }
      },
      {
        "id": "harp-frame",
        "colorNumber": 5,
        "label": [
          220,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,160 Q 255,190 240,290 L 210,285 Q 225,210 195,185 Z"
        }
      },
      {
        "id": "harp-string-1",
        "colorNumber": 9,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,185 L 215,285"
        }
      },
      {
        "id": "harp-string-2",
        "colorNumber": 9,
        "label": [
          220,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,195 L 225,285"
        }
      },
      {
        "id": "harp-string-3",
        "colorNumber": 9,
        "label": [
          230,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,210 L 235,285"
        }
      },
      {
        "id": "butterfly-wing-l",
        "colorNumber": 6,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 140,
          "r": 12
        }
      },
      {
        "id": "butterfly-wing-r",
        "colorNumber": 6,
        "label": [
          85,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 140,
          "r": 12
        }
      },
      {
        "id": "butterfly-body",
        "colorNumber": 8,
        "label": [
          75,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 145,
          "rx": 3,
          "ry": 10
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
    "id": "witch-queen",
    "name": "Witch Queen",
    "emoji": "🦹‍♀️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#120024",
      "#212121",
      "#4A148C",
      "#7B1FA2",
      "#D50000",
      "#FFD700",
      "#FFE0B2",
      "#00E676",
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
        "id": "palace-floor",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "queen-gown",
        "colorNumber": 2,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,185 185,185 235,370 65,370"
        }
      },
      {
        "id": "gown-collar-l",
        "colorNumber": 3,
        "label": [
          105,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 85,90 135,165"
        }
      },
      {
        "id": "gown-collar-r",
        "colorNumber": 3,
        "label": [
          195,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,185 215,90 165,165"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
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
        "id": "eye-l-green",
        "colorNumber": 8,
        "label": [
          142,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "eye-r-green",
        "colorNumber": 8,
        "label": [
          158,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "smile",
        "colorNumber": 5,
        "label": [
          150,
          138
        ],
        "shape": {
          "kind": "path",
          "d": "M 144,138 Q 150,146 156,138"
        }
      },
      {
        "id": "black-hair",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 110,170 110,230 120,270 L 180,270 C 190,230 190,170 175,120 Z"
        }
      },
      {
        "id": "spiked-crown",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,110 180,110 185,60 165,85 150,45 135,85 115,60"
        }
      },
      {
        "id": "crown-gem",
        "colorNumber": 5,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "poison-apple",
        "colorNumber": 5,
        "label": [
          75,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "poison-slime",
        "colorNumber": 8,
        "label": [
          75,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,220 C 65,235 85,235 85,220 C 85,240 65,240 65,220 Z"
        }
      },
      {
        "id": "apple-stem",
        "colorNumber": 6,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 73,
          "y": 205,
          "w": 4,
          "h": 10
        }
      },
      {
        "id": "raven-body",
        "colorNumber": 2,
        "label": [
          230,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 190,
          "rx": 14,
          "ry": 22
        }
      },
      {
        "id": "raven-head",
        "colorNumber": 2,
        "label": [
          230,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 165,
          "r": 10
        }
      },
      {
        "id": "raven-beak",
        "colorNumber": 6,
        "label": [
          245,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,162 250,165 235,168"
        }
      },
      {
        "id": "raven-eye",
        "colorNumber": 9,
        "label": [
          232,
          163
        ],
        "shape": {
          "kind": "circle",
          "cx": 232,
          "cy": 163,
          "r": 2
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
      },
      {
        "id": "poison-bubble-1",
        "colorNumber": 8,
        "label": [
          65,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "poison-bubble-2",
        "colorNumber": 8,
        "label": [
          90,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 205,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "grand-alchemist",
    "name": "Alchemist",
    "emoji": "🧪",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#311B92",
      "#00E676",
      "#76FF03",
      "#FFD700",
      "#FF6D00",
      "#FFE0B2",
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
        "id": "lab-table",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 350,
          "w": 220,
          "h": 40,
          "rx": 6
        }
      },
      {
        "id": "flask-body",
        "colorNumber": 8,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,210 165,210 205,330 95,330"
        }
      },
      {
        "id": "flask-neck",
        "colorNumber": 8,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 180,
          "w": 30,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "potion-liquid",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 290,
          "rx": 45,
          "ry": 32
        }
      },
      {
        "id": "potion-bubble-1",
        "colorNumber": 4,
        "label": [
          135,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 275,
          "r": 10
        }
      },
      {
        "id": "potion-bubble-2",
        "colorNumber": 4,
        "label": [
          165,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 285,
          "r": 8
        }
      },
      {
        "id": "potion-bubble-3",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "smoke-puff-1",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 12
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 4,
        "label": [
          160,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 135,
          "r": 16
        }
      },
      {
        "id": "smoke-puff-3",
        "colorNumber": 4,
        "label": [
          140,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 110,
          "r": 20
        }
      },
      {
        "id": "robe",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,115 185,115 205,220 95,220"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 20
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 1,
        "label": [
          142,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 80,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 1,
        "label": [
          158,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 80,
          "r": 3
        }
      },
      {
        "id": "goggles-l",
        "colorNumber": 5,
        "label": [
          140,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 80,
          "rx": 8,
          "ry": 6
        }
      },
      {
        "id": "goggles-r",
        "colorNumber": 5,
        "label": [
          160,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 80,
          "rx": 8,
          "ry": 6
        }
      },
      {
        "id": "goggles-strap",
        "colorNumber": 5,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 78,
          "w": 50,
          "h": 4
        }
      },
      {
        "id": "philosopher-stone",
        "colorNumber": 6,
        "label": [
          70,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 310,
          "r": 16
        }
      },
      {
        "id": "stone-glow",
        "colorNumber": 5,
        "label": [
          70,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 310,
          "r": 8
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
        "colorNumber": 3,
        "label": [
          230,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 250,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "ancient-beholder",
    "name": "Mystic Eye",
    "emoji": "👁️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D1B2A",
      "#1B263B",
      "#00E5FF",
      "#7C4DFF",
      "#651FFF",
      "#FFD700",
      "#FFFFFF",
      "#212121",
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
        "id": "cosmic-orbit-1",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 135,
          "ry": 65
        }
      },
      {
        "id": "cosmic-orbit-2",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 65,
          "ry": 135
        }
      },
      {
        "id": "eye-sclera-outer",
        "colorNumber": 7,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,200 C 75,120 225,120 270,200 C 225,280 75,280 30,200 Z"
        }
      },
      {
        "id": "eye-iris-ring",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 52,
          "ry": 52
        }
      },
      {
        "id": "eye-iris-mid",
        "colorNumber": 9,
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
        "id": "eye-pupil",
        "colorNumber": 8,
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
        "id": "eye-shine-1",
        "colorNumber": 7,
        "label": [
          140,
          188
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 188,
          "r": 8
        }
      },
      {
        "id": "eye-shine-2",
        "colorNumber": 7,
        "label": [
          160,
          212
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 212,
          "r": 5
        }
      },
      {
        "id": "ray-n",
        "colorNumber": 6,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 95,
          "w": 6,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "ray-s",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 280,
          "w": 6,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "ray-ne",
        "colorNumber": 6,
        "label": [
          215,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 118,
          "w": 20,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "ray-nw",
        "colorNumber": 6,
        "label": [
          85,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 118,
          "w": 20,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "ray-se",
        "colorNumber": 6,
        "label": [
          215,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 276,
          "w": 20,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "ray-sw",
        "colorNumber": 6,
        "label": [
          85,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 276,
          "w": 20,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "mini-eye-1",
        "colorNumber": 7,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 14
        }
      },
      {
        "id": "mini-pupil-1",
        "colorNumber": 8,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 6
        }
      },
      {
        "id": "mini-eye-2",
        "colorNumber": 7,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 80,
          "r": 14
        }
      },
      {
        "id": "mini-pupil-2",
        "colorNumber": 8,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 80,
          "r": 6
        }
      },
      {
        "id": "stardust-1",
        "colorNumber": 6,
        "label": [
          40,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 330,
          "r": 8
        }
      },
      {
        "id": "stardust-2",
        "colorNumber": 6,
        "label": [
          260,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 330,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 355,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "magic-sprite",
    "name": "Glow Sprite",
    "emoji": "🧚",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12005E",
      "#00E5FF",
      "#69F0AE",
      "#B9F6CA",
      "#FFD700",
      "#FFE0B2",
      "#FFFFFF",
      "#212121",
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
        "id": "forest-floor",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "sprite-aura-outer",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 85
        }
      },
      {
        "id": "sprite-aura-mid",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 65
        }
      },
      {
        "id": "sprite-aura-in",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 45
        }
      },
      {
        "id": "wing-tl",
        "colorNumber": 4,
        "label": [
          95,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 145,
          "rx": 42,
          "ry": 24
        }
      },
      {
        "id": "wing-bl",
        "colorNumber": 3,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 195,
          "rx": 32,
          "ry": 18
        }
      },
      {
        "id": "wing-tr",
        "colorNumber": 4,
        "label": [
          205,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 145,
          "rx": 42,
          "ry": 24
        }
      },
      {
        "id": "wing-br",
        "colorNumber": 3,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 195,
          "rx": 32,
          "ry": 18
        }
      },
      {
        "id": "sprite-dress",
        "colorNumber": 3,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,180 160,180 170,240 130,240"
        }
      },
      {
        "id": "head",
        "colorNumber": 6,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 16
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          144,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 144,
          "cy": 158,
          "r": 2
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          156,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 156,
          "cy": 158,
          "r": 2
        }
      },
      {
        "id": "hair-bun",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "magic-wand",
        "colorNumber": 5,
        "label": [
          185,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "wand-sparkle",
        "colorNumber": 7,
        "label": [
          185,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 185,
          "r": 3
        }
      },
      {
        "id": "spore-1",
        "colorNumber": 5,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "spore-2",
        "colorNumber": 5,
        "label": [
          235,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "spore-3",
        "colorNumber": 5,
        "label": [
          55,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 270,
          "r": 7
        }
      },
      {
        "id": "spore-4",
        "colorNumber": 5,
        "label": [
          245,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 270,
          "r": 7
        }
      },
      {
        "id": "pixie-dust-1",
        "colorNumber": 7,
        "label": [
          110,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "pixie-dust-2",
        "colorNumber": 7,
        "label": [
          190,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 80,
          "r": 5
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
    "id": "hydra-beast",
    "name": "Multi-Head Hydra",
    "emoji": "🐊",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#004D40",
      "#00796B",
      "#00897B",
      "#26A69A",
      "#80CBC4",
      "#FFD700",
      "#D50000",
      "#FFFFFF",
      "#212121"
    ],
    "regions": [
      {
        "id": "swamp-bg",
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
        "id": "swamp-water",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "hydra-body",
        "colorNumber": 3,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 300,
          "rx": 75,
          "ry": 50
        }
      },
      {
        "id": "neck-center",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,260 Q 135,170 145,110 L 155,110 Q 165,170 160,260 Z"
        }
      },
      {
        "id": "head-c",
        "colorNumber": 4,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 95,
          "rx": 24,
          "ry": 18
        }
      },
      {
        "id": "eye-c",
        "colorNumber": 6,
        "label": [
          145,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 90,
          "r": 4
        }
      },
      {
        "id": "fang-c",
        "colorNumber": 8,
        "label": [
          150,
          108
        ],
        "shape": {
          "kind": "polygon",
          "points": "146,104 154,104 150,116"
        }
      },
      {
        "id": "neck-left",
        "colorNumber": 3,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,260 Q 75,190 70,120 L 80,115 Q 95,190 145,260 Z"
        }
      },
      {
        "id": "head-l",
        "colorNumber": 4,
        "label": [
          75,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 105,
          "rx": 22,
          "ry": 16
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          70,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "fang-l",
        "colorNumber": 8,
        "label": [
          75,
          118
        ],
        "shape": {
          "kind": "polygon",
          "points": "71,114 79,114 75,124"
        }
      },
      {
        "id": "neck-right",
        "colorNumber": 3,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,260 Q 225,190 230,120 L 220,115 Q 205,190 155,260 Z"
        }
      },
      {
        "id": "head-r",
        "colorNumber": 4,
        "label": [
          225,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 105,
          "rx": 22,
          "ry": 16
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          230,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "fang-r",
        "colorNumber": 8,
        "label": [
          225,
          118
        ],
        "shape": {
          "kind": "polygon",
          "points": "221,114 229,114 225,124"
        }
      },
      {
        "id": "spine-c1",
        "colorNumber": 7,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,135 155,135 150,120"
        }
      },
      {
        "id": "spine-c2",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,170 155,170 150,155"
        }
      },
      {
        "id": "spine-l1",
        "colorNumber": 7,
        "label": [
          85,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,145 90,145 85,130"
        }
      },
      {
        "id": "spine-r1",
        "colorNumber": 7,
        "label": [
          215,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,145 220,145 215,130"
        }
      },
      {
        "id": "scale-1",
        "colorNumber": 5,
        "label": [
          130,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "scale-2",
        "colorNumber": 5,
        "label": [
          170,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 300,
          "r": 8
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
    "id": "frost-giant",
    "name": "Frost Titan",
    "emoji": "❄️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#1976D2",
      "#42A5F5",
      "#90CAF9",
      "#E3F2FD",
      "#FFFFFF",
      "#80D8FF",
      "#00E5FF"
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
        "id": "glacier-ground",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "titan-body",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,185 195,185 235,370 65,370"
        }
      },
      {
        "id": "chest-glacier",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 45,
          "ry": 40
        }
      },
      {
        "id": "icicle-beard-c",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,160 165,160 150,250"
        }
      },
      {
        "id": "icicle-beard-l",
        "colorNumber": 6,
        "label": [
          125,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,160 135,160 120,230"
        }
      },
      {
        "id": "icicle-beard-r",
        "colorNumber": 6,
        "label": [
          175,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,160 185,160 180,230"
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 28
        }
      },
      {
        "id": "frost-eye-l",
        "colorNumber": 8,
        "label": [
          138,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "frost-eye-r",
        "colorNumber": 8,
        "label": [
          162,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "crown-spire-1",
        "colorNumber": 6,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,98 158,98 150,45"
        }
      },
      {
        "id": "crown-spire-2",
        "colorNumber": 7,
        "label": [
          125,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,100 135,100 120,60"
        }
      },
      {
        "id": "crown-spire-3",
        "colorNumber": 7,
        "label": [
          175,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,100 185,100 180,60"
        }
      },
      {
        "id": "ice-handle",
        "colorNumber": 2,
        "label": [
          235,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 231,
          "y": 110,
          "w": 8,
          "h": 220,
          "rx": 4
        }
      },
      {
        "id": "ice-block-head",
        "colorNumber": 5,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 95,
          "w": 60,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "ice-core",
        "colorNumber": 8,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 6,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 6,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "snowflake-3",
        "colorNumber": 6,
        "label": [
          50,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "snowflake-4",
        "colorNumber": 6,
        "label": [
          250,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
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
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          195,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 45,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "golden-sphinx",
    "name": "Winged Sphinx",
    "emoji": "🏛️",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFD700",
      "#FFA000",
      "#FF8F00",
      "#0288D1",
      "#D32F2F",
      "#FFE0B2",
      "#212121",
      "#8D6E63"
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
        "colorNumber": 4,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 70,
          "r": 35
        }
      },
      {
        "id": "temple-pedestal",
        "colorNumber": 9,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "lion-body",
        "colorNumber": 3,
        "label": [
          140,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 280,
          "rx": 75,
          "ry": 45
        }
      },
      {
        "id": "paw-fl",
        "colorNumber": 2,
        "label": [
          170,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 310,
          "w": 20,
          "h": 65,
          "rx": 8
        }
      },
      {
        "id": "paw-bl",
        "colorNumber": 2,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 310,
          "w": 20,
          "h": 65,
          "rx": 8
        }
      },
      {
        "id": "lion-tail",
        "colorNumber": 4,
        "label": [
          45,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,275 C 30,285 25,330 35,355"
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 2,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,230 C 45,180 15,95 25,60 C 45,110 85,160 135,210 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 2,
        "label": [
          215,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,230 C 225,180 275,95 265,60 C 245,110 205,160 145,210 Z"
        }
      },
      {
        "id": "nemes-l",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,120 L 95,170 L 115,225 L 130,210 Z"
        }
      },
      {
        "id": "nemes-r",
        "colorNumber": 5,
        "label": [
          190,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,120 L 205,170 L 185,225 L 170,210 Z"
        }
      },
      {
        "id": "pharaoh-head",
        "colorNumber": 7,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "pharaoh-beard",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 160,
          "w": 10,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "uraeus-crest",
        "colorNumber": 6,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "146,110 150,85 154,110"
        }
      },
      {
        "id": "temple-column-l",
        "colorNumber": 9,
        "label": [
          45,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 260,
          "r": 12
        }
      },
      {
        "id": "temple-column-r",
        "colorNumber": 9,
        "label": [
          255,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 260,
          "r": 12
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
        "id": "hieroglyph-1",
        "colorNumber": 3,
        "label": [
          60,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 100,
          "r": 7
        }
      },
      {
        "id": "hieroglyph-2",
        "colorNumber": 3,
        "label": [
          240,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 100,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "pegasus-flight",
    "name": "Winged Pegasus",
    "emoji": "🐎",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFFFFF",
      "#ECEFF1",
      "#FFD700",
      "#80D8FF",
      "#40C4FF",
      "#FFE0B2",
      "#212121"
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
        "id": "cloud-bank-1",
        "colorNumber": 2,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 135,
          "ry": 25
        }
      },
      {
        "id": "cloud-bank-2",
        "colorNumber": 3,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 385,
          "rx": 110,
          "ry": 16
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 260,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 C 160,165 185,125 205,90 L 230,100 C 215,145 190,205 180,240 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          225,
          95
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 95,
          "rx": 28,
          "ry": 22
        }
      },
      {
        "id": "snout",
        "colorNumber": 3,
        "label": [
          248,
          105
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 248,
          "cy": 105,
          "rx": 14,
          "ry": 14
        }
      },
      {
        "id": "eye",
        "colorNumber": 8,
        "label": [
          220,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 90,
          "r": 4
        }
      },
      {
        "id": "nostril",
        "colorNumber": 7,
        "label": [
          252,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 105,
          "r": 3
        }
      },
      {
        "id": "wing-left-span",
        "colorNumber": 2,
        "label": [
          65,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 50,170 15,85 25,50 C 45,100 90,150 140,195 Z"
        }
      },
      {
        "id": "wing-left-feathers",
        "colorNumber": 5,
        "label": [
          75,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 65,180 35,115 45,85 C 65,120 100,165 135,205 Z"
        }
      },
      {
        "id": "wing-right-span",
        "colorNumber": 2,
        "label": [
          215,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,220 C 235,170 275,85 265,50 C 245,100 205,150 150,195 Z"
        }
      },
      {
        "id": "wing-right-feathers",
        "colorNumber": 5,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,220 C 225,180 255,115 245,85 C 225,120 190,165 150,205 Z"
        }
      },
      {
        "id": "flowing-mane",
        "colorNumber": 4,
        "label": [
          195,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,85 C 185,85 165,120 175,160 C 185,130 205,110 205,85 Z"
        }
      },
      {
        "id": "flowing-tail",
        "colorNumber": 4,
        "label": [
          60,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,250 C 35,250 20,290 30,330 C 45,295 65,280 85,270 Z"
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 2,
        "label": [
          175,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 285,
          "w": 14,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "hoof-fl",
        "colorNumber": 4,
        "label": [
          175,
          345
        ],
        "shape": {
          "kind": "polygon",
          "points": "168,340 182,340 182,352 168,352"
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 2,
        "label": [
          95,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 88,
          "y": 285,
          "w": 14,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "hoof-bl",
        "colorNumber": 4,
        "label": [
          95,
          345
        ],
        "shape": {
          "kind": "polygon",
          "points": "88,340 102,340 102,352 88,352"
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
          "r": 8
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
          "r": 8
        }
      },
      {
        "id": "cloud-puff-1",
        "colorNumber": 2,
        "label": [
          60,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 320,
          "r": 20
        }
      },
      {
        "id": "cloud-puff-2",
        "colorNumber": 2,
        "label": [
          240,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 320,
          "r": 20
        }
      },
      {
        "id": "magic-stardust",
        "colorNumber": 6,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "leviathan-sea",
    "name": "Abyssal Leviathan",
    "emoji": "🐋",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#00102A",
      "#002171",
      "#0D47A1",
      "#1976D2",
      "#00E5FF",
      "#69F0AE",
      "#FFFFFF",
      "#212121"
    ],
    "regions": [
      {
        "id": "abyss-depths",
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
        "id": "ocean-trench",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 135,
          "ry": 20
        }
      },
      {
        "id": "leviathan-body",
        "colorNumber": 3,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,240 C 30,120 180,90 245,150 C 275,185 245,260 150,270 C 85,275 55,265 45,240 Z"
        }
      },
      {
        "id": "leviathan-belly",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,255 C 120,265 190,265 235,210 C 205,240 135,245 75,255 Z"
        }
      },
      {
        "id": "fluke-top",
        "colorNumber": 3,
        "label": [
          45,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,185 15,120 50,140"
        }
      },
      {
        "id": "fluke-bot",
        "colorNumber": 3,
        "label": [
          45,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,185 15,250 50,230"
        }
      },
      {
        "id": "dorsal-fin",
        "colorNumber": 4,
        "label": [
          175,
          120
        ],
        "shape": {
          "kind": "polygon",
          "points": "160,135 180,90 195,135"
        }
      },
      {
        "id": "dorsal-fin-2",
        "colorNumber": 4,
        "label": [
          135,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,150 140,110 155,150"
        }
      },
      {
        "id": "pectoral-flipper",
        "colorNumber": 4,
        "label": [
          160,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,250 170,310 180,250"
        }
      },
      {
        "id": "eye-bioluminescent",
        "colorNumber": 5,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 8,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 160,
          "r": 3
        }
      },
      {
        "id": "glow-stripe-1",
        "colorNumber": 5,
        "label": [
          110,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,190 Q 115,170 135,190"
        }
      },
      {
        "id": "glow-stripe-2",
        "colorNumber": 5,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,195 Q 155,175 175,195"
        }
      },
      {
        "id": "glow-stripe-3",
        "colorNumber": 5,
        "label": [
          190,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,195 Q 195,175 215,195"
        }
      },
      {
        "id": "whirlpool-1",
        "colorNumber": 5,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 330,
          "rx": 110,
          "ry": 30
        }
      },
      {
        "id": "whirlpool-2",
        "colorNumber": 6,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 75,
          "ry": 18
        }
      },
      {
        "id": "deep-bubble-1",
        "colorNumber": 5,
        "label": [
          65,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "deep-bubble-2",
        "colorNumber": 5,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 12
        }
      },
      {
        "id": "deep-bubble-3",
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 8
        }
      },
      {
        "id": "biolum-spot-1",
        "colorNumber": 6,
        "label": [
          85,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "biolum-spot-2",
        "colorNumber": 6,
        "label": [
          125,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "biolum-spot-3",
        "colorNumber": 6,
        "label": [
          165,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 300,
          "r": 6
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 300,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "valkyrie-warrior",
    "name": "Valkyrie Maiden",
    "emoji": "🪓",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A237E",
      "#00C853",
      "#69F0AE",
      "#CFD8DC",
      "#90A4AE",
      "#FFD700",
      "#FFE0B2",
      "#212121",
      "#D32F2F"
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
        "id": "bifrost-bridge",
        "colorNumber": 2,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "aurora-streak",
        "colorNumber": 3,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,80 Q 150,40 300,80 L 300,110 Q 150,70 0,110 Z"
        }
      },
      {
        "id": "armor-body",
        "colorNumber": 4,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 175,185 210,350 90,350"
        }
      },
      {
        "id": "golden-corslet",
        "colorNumber": 6,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 210,
          "w": 50,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "braided-hair",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,130 C 110,180 110,240 120,270 L 180,270 C 190,240 190,180 175,130 Z"
        }
      },
      {
        "id": "winged-helm",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 115,
          "rx": 28,
          "ry": 18
        }
      },
      {
        "id": "helm-wing-l",
        "colorNumber": 4,
        "label": [
          115,
          90
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,115 95,70 125,100"
        }
      },
      {
        "id": "helm-wing-r",
        "colorNumber": 4,
        "label": [
          185,
          90
        ],
        "shape": {
          "kind": "polygon",
          "points": "170,115 205,70 175,100"
        }
      },
      {
        "id": "axe-shaft",
        "colorNumber": 5,
        "label": [
          220,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 216,
          "y": 120,
          "w": 8,
          "h": 220,
          "rx": 4
        }
      },
      {
        "id": "axe-blade-l",
        "colorNumber": 4,
        "label": [
          195,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 216,130 C 180,120 180,160 216,150 Z"
        }
      },
      {
        "id": "axe-blade-r",
        "colorNumber": 4,
        "label": [
          245,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 224,130 C 260,120 260,160 224,150 Z"
        }
      },
      {
        "id": "round-shield",
        "colorNumber": 6,
        "label": [
          85,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 240,
          "r": 34
        }
      },
      {
        "id": "shield-boss",
        "colorNumber": 9,
        "label": [
          85,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 240,
          "r": 14
        }
      },
      {
        "id": "shield-rim-1",
        "colorNumber": 4,
        "label": [
          85,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 210,
          "r": 4
        }
      },
      {
        "id": "shield-rim-2",
        "colorNumber": 4,
        "label": [
          85,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 270,
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
      },
      {
        "id": "star-1",
        "colorNumber": 6,
        "label": [
          105,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "star-2",
        "colorNumber": 6,
        "label": [
          195,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "bifrost-spark",
        "colorNumber": 3,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 340,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "woodland-nymph",
    "name": "Forest Nymph",
    "emoji": "🌿",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#4CAF50",
      "#2E7D32",
      "#1B5E20",
      "#81C784",
      "#F48FB1",
      "#FFE0B2",
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
        "id": "mossy-knoll",
        "colorNumber": 3,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "leaf-dress",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 175,185 215,350 85,350"
        }
      },
      {
        "id": "vine-wrap-1",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,220 Q 150,240 175,220"
        }
      },
      {
        "id": "vine-wrap-2",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,270 Q 150,290 190,270"
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
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
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          142,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          158,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 125,
          "r": 3
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          136,
          134
        ],
        "shape": {
          "kind": "circle",
          "cx": 136,
          "cy": 134,
          "r": 4
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          164,
          134
        ],
        "shape": {
          "kind": "circle",
          "cx": 164,
          "cy": 134,
          "r": 4
        }
      },
      {
        "id": "leaf-hair-back",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 105,170 100,240 115,290 L 185,290 C 200,240 195,170 175,120 Z"
        }
      },
      {
        "id": "crown-leaves",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,115 165,115 150,90"
        }
      },
      {
        "id": "flower-in-hair-1",
        "colorNumber": 6,
        "label": [
          135,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 105,
          "r": 7
        }
      },
      {
        "id": "flower-in-hair-2",
        "colorNumber": 6,
        "label": [
          165,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 105,
          "r": 7
        }
      },
      {
        "id": "butterfly-1-l",
        "colorNumber": 6,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "butterfly-1-r",
        "colorNumber": 6,
        "label": [
          80,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "butterfly-2-l",
        "colorNumber": 6,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "butterfly-2-r",
        "colorNumber": 6,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "firefly-spark-1",
        "colorNumber": 9,
        "label": [
          50,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "firefly-spark-2",
        "colorNumber": 9,
        "label": [
          250,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "firefly-spark-3",
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
      },
      {
        "id": "sprout-1",
        "colorNumber": 5,
        "label": [
          75,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 360,
          "r": 6
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
      }
    ]
  },
  {
    "id": "djinni-lamp",
    "name": "Desert Efreet",
    "emoji": "🪔",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#210900",
      "#D84315",
      "#FF5722",
      "#FF9800",
      "#FFD54F",
      "#3E2723",
      "#FFFFFF",
      "#212121"
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
        "id": "sand-dune",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "lamp-body",
        "colorNumber": 5,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 40,
          "ry": 22
        }
      },
      {
        "id": "lamp-spout",
        "colorNumber": 5,
        "label": [
          195,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,345 220,325 175,355"
        }
      },
      {
        "id": "lamp-handle",
        "colorNumber": 5,
        "label": [
          110,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,340 C 95,335 95,365 125,360"
        }
      },
      {
        "id": "lamp-lid",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "fire-vortex",
        "colorNumber": 3,
        "label": [
          170,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,325 C 240,280 160,260 180,215 L 145,215 C 125,260 180,280 210,325 Z"
        }
      },
      {
        "id": "efreet-torso",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,145 185,145 175,220 125,220"
        }
      },
      {
        "id": "chest-pec-l",
        "colorNumber": 3,
        "label": [
          135,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 170,
          "rx": 16,
          "ry": 14
        }
      },
      {
        "id": "chest-pec-r",
        "colorNumber": 3,
        "label": [
          165,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 170,
          "rx": 16,
          "ry": 14
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 24
        }
      },
      {
        "id": "eye-l-flame",
        "colorNumber": 5,
        "label": [
          140,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 100,
          "r": 5
        }
      },
      {
        "id": "eye-r-flame",
        "colorNumber": 5,
        "label": [
          160,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 100,
          "r": 5
        }
      },
      {
        "id": "efreet-horn-l",
        "colorNumber": 6,
        "label": [
          125,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,95 110,55 142,88"
        }
      },
      {
        "id": "efreet-horn-r",
        "colorNumber": 6,
        "label": [
          175,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "165,95 190,55 158,88"
        }
      },
      {
        "id": "flame-crown",
        "colorNumber": 4,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,85 C 130,45 170,45 160,85 Z"
        }
      },
      {
        "id": "flame-spark-1",
        "colorNumber": 4,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "flame-spark-2",
        "colorNumber": 4,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "fireball-1",
        "colorNumber": 5,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "fireball-2",
        "colorNumber": 5,
        "label": [
          245,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "smoke-particle-1",
        "colorNumber": 4,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "smoke-particle-2",
        "colorNumber": 4,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
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
        "colorNumber": 5,
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
    "id": "crystal-golem",
    "name": "Crystal Golem",
    "emoji": "💎",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0017",
      "#00E5FF",
      "#00B0FF",
      "#2979FF",
      "#7C4DFF",
      "#651FFF",
      "#FFFFFF",
      "#212121"
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
        "id": "crystal-cavern-floor",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "crystal-torso-top",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,160 185,160 210,250 90,250"
        }
      },
      {
        "id": "crystal-torso-bot",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,250 210,250 175,320 125,320"
        }
      },
      {
        "id": "crystal-facet-c",
        "colorNumber": 7,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,210 165,210 150,260"
        }
      },
      {
        "id": "crystal-head",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,70 185,115 150,160 115,115"
        }
      },
      {
        "id": "head-facet-t",
        "colorNumber": 7,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,70 170,110 150,110 130,110"
        }
      },
      {
        "id": "glowing-eye-l",
        "colorNumber": 2,
        "label": [
          138,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "glowing-eye-r",
        "colorNumber": 2,
        "label": [
          162,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "arm-l-top",
        "colorNumber": 3,
        "label": [
          85,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,160 65,190 90,225 115,200"
        }
      },
      {
        "id": "arm-l-fist",
        "colorNumber": 4,
        "label": [
          65,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,190 40,245 80,265 90,225"
        }
      },
      {
        "id": "arm-r-top",
        "colorNumber": 3,
        "label": [
          215,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,160 235,190 210,225 185,200"
        }
      },
      {
        "id": "arm-r-fist",
        "colorNumber": 4,
        "label": [
          235,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,190 260,245 220,265 210,225"
        }
      },
      {
        "id": "leg-l",
        "colorNumber": 4,
        "label": [
          115,
          345
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,320 90,370 135,370"
        }
      },
      {
        "id": "leg-r",
        "colorNumber": 4,
        "label": [
          185,
          345
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,320 165,370 210,370"
        }
      },
      {
        "id": "shard-1",
        "colorNumber": 2,
        "label": [
          55,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,75 70,95 55,115 40,95"
        }
      },
      {
        "id": "shard-2",
        "colorNumber": 2,
        "label": [
          245,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "245,75 260,95 245,115 230,95"
        }
      },
      {
        "id": "shard-3",
        "colorNumber": 3,
        "label": [
          45,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,145 58,160 45,175 32,160"
        }
      },
      {
        "id": "shard-4",
        "colorNumber": 3,
        "label": [
          255,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "255,145 268,160 255,175 242,160"
        }
      },
      {
        "id": "crystal-core",
        "colorNumber": 6,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 8
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
      },
      {
        "id": "sparkle-3",
        "colorNumber": 7,
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
    "id": "manticore-beast",
    "name": "Scorpion Manticore",
    "emoji": "🦂",
    "category": "mythical",
    "viewBox": "0 0 300 400",
    "colors": [
      "#210900",
      "#FF8F00",
      "#E65100",
      "#BF360C",
      "#D50000",
      "#FFD700",
      "#FFE0B2",
      "#212121"
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
        "id": "desert-rock",
        "colorNumber": 4,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 130,
          "ry": 20
        }
      },
      {
        "id": "lion-body",
        "colorNumber": 2,
        "label": [
          140,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 280,
          "rx": 70,
          "ry": 45
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 3,
        "label": [
          175,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 305,
          "w": 16,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 3,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 88,
          "y": 305,
          "w": 16,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 4,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,230 C 50,170 15,90 25,50 C 45,100 85,150 135,200 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 4,
        "label": [
          215,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,230 C 225,170 265,90 255,50 C 235,100 195,150 145,200 Z"
        }
      },
      {
        "id": "scorpion-tail-curve",
        "colorNumber": 3,
        "label": [
          75,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,270 C 25,230 20,120 75,80 C 115,50 135,100 115,120"
        }
      },
      {
        "id": "tail-segment-1",
        "colorNumber": 4,
        "label": [
          60,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "tail-segment-2",
        "colorNumber": 4,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "tail-segment-3",
        "colorNumber": 4,
        "label": [
          55,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 120,
          "r": 10
        }
      },
      {
        "id": "tail-segment-4",
        "colorNumber": 4,
        "label": [
          85,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 85,
          "r": 10
        }
      },
      {
        "id": "stinger-barb",
        "colorNumber": 5,
        "label": [
          115,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,90 130,80 115,110"
        }
      },
      {
        "id": "poison-drip",
        "colorNumber": 5,
        "label": [
          130,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 80,
          "r": 4
        }
      },
      {
        "id": "mane",
        "colorNumber": 3,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 165,
          "r": 48
        }
      },
      {
        "id": "head",
        "colorNumber": 7,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 165,
          "r": 30
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          172,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 158,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          192,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 158,
          "r": 4
        }
      },
      {
        "id": "fang-l",
        "colorNumber": 6,
        "label": [
          174,
          176
        ],
        "shape": {
          "kind": "polygon",
          "points": "172,172 178,172 175,182"
        }
      },
      {
        "id": "fang-r",
        "colorNumber": 6,
        "label": [
          190,
          176
        ],
        "shape": {
          "kind": "polygon",
          "points": "188,172 194,172 191,182"
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
          "r": 8
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
          "r": 8
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 6,
        "label": [
          260,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 280,
          "r": 6
        }
      }
    ]
  }
];
