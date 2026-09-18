import { ImageTemplate } from '../../types';

// Category: fun (bespoke unique templates, all strictly >= 23 sections)
export const FUN_TEMPLATES: ImageTemplate[] = [
  {
    "id": "fun-1",
    "name": "Happy Face",
    "emoji": "😊",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFD54F",
      "#FFA000",
      "#FF4081",
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
        "id": "face-base",
        "colorNumber": 2,
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
        "id": "face-shade",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 85,
          "ry": 30
        }
      },
      {
        "id": "eye-left",
        "colorNumber": 5,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 170,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "eye-right",
        "colorNumber": 5,
        "label": [
          190,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 170,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 6,
        "label": [
          106,
          164
        ],
        "shape": {
          "kind": "circle",
          "cx": 106,
          "cy": 164,
          "r": 5
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 6,
        "label": [
          186,
          164
        ],
        "shape": {
          "kind": "circle",
          "cx": 186,
          "cy": 164,
          "r": 5
        }
      },
      {
        "id": "big-smile",
        "colorNumber": 5,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,210 Q 150,275 205,210 Q 150,240 95,210 Z"
        }
      },
      {
        "id": "tongue-pink",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 245,
          "rx": 24,
          "ry": 14
        }
      },
      {
        "id": "cheek-left",
        "colorNumber": 4,
        "label": [
          85,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 205,
          "r": 18
        }
      },
      {
        "id": "cheek-right",
        "colorNumber": 4,
        "label": [
          215,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 205,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "sparkle-3",
        "colorNumber": 3,
        "label": [
          40,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 3,
        "label": [
          260,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "confetti-1",
        "colorNumber": 4,
        "label": [
          80,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "confetti-2",
        "colorNumber": 2,
        "label": [
          220,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "confetti-3",
        "colorNumber": 4,
        "label": [
          65,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 280,
          "r": 7
        }
      },
      {
        "id": "confetti-4",
        "colorNumber": 2,
        "label": [
          235,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 280,
          "r": 7
        }
      },
      {
        "id": "star-top",
        "colorNumber": 2,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "star-bot",
        "colorNumber": 2,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 355,
          "r": 14
        }
      },
      {
        "id": "dot-l",
        "colorNumber": 6,
        "label": [
          115,
          48
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 48,
          "r": 4
        }
      },
      {
        "id": "dot-r",
        "colorNumber": 6,
        "label": [
          185,
          48
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 48,
          "r": 4
        }
      },
      {
        "id": "dot-center",
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 380,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "fun-2",
    "name": "Frosty Snowman",
    "emoji": "⛄",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFFFFF",
      "#ECEFF1",
      "#D32F2F",
      "#FF6D00",
      "#212121",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "snow-sky",
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
        "id": "ground-snow",
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
          "ry": 35
        }
      },
      {
        "id": "body-bot",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 70
        }
      },
      {
        "id": "body-mid",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 52
        }
      },
      {
        "id": "body-head",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 38
        }
      },
      {
        "id": "tophat-brim",
        "colorNumber": 6,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 80,
          "w": 80,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "tophat-crown",
        "colorNumber": 6,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 122,
          "y": 35,
          "w": 56,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "tophat-ribbon",
        "colorNumber": 4,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 122,
          "y": 72,
          "w": 56,
          "h": 8
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          138,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          162,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "carrot-nose",
        "colorNumber": 5,
        "label": [
          170,
          122
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,118 190,125 150,126"
        }
      },
      {
        "id": "scarf-neck",
        "colorNumber": 4,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 145,
          "w": 60,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "scarf-tail",
        "colorNumber": 4,
        "label": [
          135,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 126,
          "y": 155,
          "w": 18,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "coal-button-1",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "coal-button-2",
        "colorNumber": 6,
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
        "id": "coal-button-3",
        "colorNumber": 6,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 275,
          "r": 7
        }
      },
      {
        "id": "coal-button-4",
        "colorNumber": 6,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 7
        }
      },
      {
        "id": "twig-arm-l",
        "colorNumber": 7,
        "label": [
          75,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,190 L 55,165 L 45,150 M 55,165 L 50,180"
        }
      },
      {
        "id": "twig-arm-r",
        "colorNumber": 7,
        "label": [
          225,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,190 L 245,165 L 255,150 M 245,165 L 250,180"
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 2,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 2,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "snowflake-3",
        "colorNumber": 2,
        "label": [
          40,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 240,
          "r": 5
        }
      },
      {
        "id": "snowflake-4",
        "colorNumber": 2,
        "label": [
          260,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 240,
          "r": 5
        }
      },
      {
        "id": "snow-hill",
        "colorNumber": 3,
        "label": [
          50,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 360,
          "r": 20
        }
      }
    ]
  },
  {
    "id": "fun-3",
    "name": "Ghost",
    "emoji": "👻",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFFFFF",
      "#FF9800",
      "#FFD54F",
      "#212121",
      "#E91E63"
    ],
    "regions": [
      {
        "id": "night-bg",
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
        "id": "spooky-moon",
        "colorNumber": 4,
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
        "id": "ghost-body",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,180 C 80,90 220,90 220,180 C 220,270 240,310 215,310 C 190,310 180,290 165,305 C 150,320 135,305 120,310 C 95,315 80,270 80,180 Z"
        }
      },
      {
        "id": "ghost-arm-l",
        "colorNumber": 2,
        "label": [
          70,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 200,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "ghost-arm-r",
        "colorNumber": 2,
        "label": [
          230,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 200,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "eye-big-l",
        "colorNumber": 5,
        "label": [
          125,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 160,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "eye-big-r",
        "colorNumber": 5,
        "label": [
          175,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 160,
          "rx": 12,
          "ry": 18
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 2,
        "label": [
          122,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 2,
        "label": [
          172,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "mouth-o",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 10,
          "ry": 15
        }
      },
      {
        "id": "rosy-cheek-l",
        "colorNumber": 6,
        "label": [
          105,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "rosy-cheek-r",
        "colorNumber": 6,
        "label": [
          195,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "pumpkin-body",
        "colorNumber": 3,
        "label": [
          75,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 335,
          "rx": 30,
          "ry": 24
        }
      },
      {
        "id": "pumpkin-rib-c",
        "colorNumber": 4,
        "label": [
          75,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 335,
          "rx": 16,
          "ry": 24
        }
      },
      {
        "id": "pumpkin-stem",
        "colorNumber": 1,
        "label": [
          75,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 304,
          "w": 6,
          "h": 12
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
        "id": "star-3",
        "colorNumber": 4,
        "label": [
          180,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          50,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "candy-corn-base",
        "colorNumber": 4,
        "label": [
          235,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 340,
          "r": 16
        }
      },
      {
        "id": "candy-corn-mid",
        "colorNumber": 3,
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
        "id": "candy-corn-tip",
        "colorNumber": 2,
        "label": [
          235,
          328
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 328,
          "r": 6
        }
      },
      {
        "id": "haunted-bat-1",
        "colorNumber": 5,
        "label": [
          60,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "haunted-bat-2",
        "colorNumber": 5,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 140,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "fun-4",
    "name": "Star Face",
    "emoji": "⭐",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#FFD54F",
      "#FFA000",
      "#FF4081",
      "#212121",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "cosmos-sky",
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
        "id": "glow-aura",
        "colorNumber": 3,
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
        "id": "golden-star",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,60 178,146 269,146 195,199 223,285 150,232 77,285 105,199 31,146 122,146"
        }
      },
      {
        "id": "star-facet-shade",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,60 150,232 77,285 105,199 31,146 122,146"
        }
      },
      {
        "id": "face-center",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 38
        }
      },
      {
        "id": "eye-left",
        "colorNumber": 5,
        "label": [
          136,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 136,
          "cy": 185,
          "r": 7
        }
      },
      {
        "id": "eye-right",
        "colorNumber": 5,
        "label": [
          164,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 164,
          "cy": 185,
          "r": 7
        }
      },
      {
        "id": "eye-spark-l",
        "colorNumber": 6,
        "label": [
          134,
          183
        ],
        "shape": {
          "kind": "circle",
          "cx": 134,
          "cy": 183,
          "r": 3
        }
      },
      {
        "id": "eye-spark-r",
        "colorNumber": 6,
        "label": [
          162,
          183
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 183,
          "r": 3
        }
      },
      {
        "id": "sweet-smile",
        "colorNumber": 5,
        "label": [
          150,
          208
        ],
        "shape": {
          "kind": "path",
          "d": "M 138,205 Q 150,220 162,205"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 4,
        "label": [
          125,
          198
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 198,
          "r": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 4,
        "label": [
          175,
          198
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 198,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
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
        "colorNumber": 2,
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
        "id": "sparkle-3",
        "colorNumber": 2,
        "label": [
          40,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 2,
        "label": [
          260,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "twinkle-1",
        "colorNumber": 6,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "twinkle-2",
        "colorNumber": 6,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "twinkle-3",
        "colorNumber": 6,
        "label": [
          70,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 350,
          "r": 5
        }
      },
      {
        "id": "twinkle-4",
        "colorNumber": 6,
        "label": [
          230,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 350,
          "r": 5
        }
      },
      {
        "id": "floating-stardust-1",
        "colorNumber": 3,
        "label": [
          110,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 330,
          "r": 5
        }
      },
      {
        "id": "floating-stardust-2",
        "colorNumber": 3,
        "label": [
          190,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 330,
          "r": 5
        }
      },
      {
        "id": "floating-stardust-3",
        "colorNumber": 3,
        "label": [
          50,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "floating-stardust-4",
        "colorNumber": 3,
        "label": [
          250,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 230,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "fun-5",
    "name": "Superhero Mask",
    "emoji": "🦸",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#D50000",
      "#FFD54F",
      "#212121",
      "#FFFFFF",
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
        "id": "hero-emblem-aura",
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
        "id": "mask-wing-l",
        "colorNumber": 2,
        "label": [
          90,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,210 50,150 40,210 100,240 150,225"
        }
      },
      {
        "id": "mask-wing-r",
        "colorNumber": 2,
        "label": [
          210,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,210 250,150 260,210 200,240 150,225"
        }
      },
      {
        "id": "eye-hole-l",
        "colorNumber": 5,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 195,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "eye-hole-r",
        "colorNumber": 5,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 195,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 4,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 195,
          "r": 6
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 4,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 195,
          "r": 6
        }
      },
      {
        "id": "lightning-crest",
        "colorNumber": 3,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,110 160,140 145,145 155,175 140,145 150,140"
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
        "colorNumber": 6,
        "label": [
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "energy-burst-1",
        "colorNumber": 6,
        "label": [
          50,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "energy-burst-2",
        "colorNumber": 6,
        "label": [
          250,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "energy-burst-3",
        "colorNumber": 6,
        "label": [
          50,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 270,
          "r": 10
        }
      },
      {
        "id": "energy-burst-4",
        "colorNumber": 6,
        "label": [
          250,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 270,
          "r": 10
        }
      },
      {
        "id": "strap-l",
        "colorNumber": 4,
        "label": [
          35,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "strap-r",
        "colorNumber": 4,
        "label": [
          265,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "city-skyline-l",
        "colorNumber": 4,
        "label": [
          75,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "city-skyline-r",
        "colorNumber": 4,
        "label": [
          225,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "hero-glint",
        "colorNumber": 5,
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
      }
    ]
  },
  {
    "id": "fun-6",
    "name": "Knight Helmet",
    "emoji": "🪖",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#37474F",
      "#78909C",
      "#B0BEC5",
      "#FFD54F",
      "#D32F2F",
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
        "id": "crest-plume-top",
        "colorNumber": 5,
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
        "id": "helmet-dome",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,180 C 80,100 220,100 220,180 C 220,240 210,260 150,270 C 90,260 80,240 80,180 Z"
        }
      },
      {
        "id": "visor-slit",
        "colorNumber": 1,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 165,
          "w": 100,
          "h": 16,
          "rx": 2
        }
      },
      {
        "id": "visor-grill-1",
        "colorNumber": 2,
        "label": [
          120,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 200,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "visor-grill-2",
        "colorNumber": 2,
        "label": [
          140,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 200,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "visor-grill-3",
        "colorNumber": 2,
        "label": [
          160,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 200,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "visor-grill-4",
        "colorNumber": 2,
        "label": [
          180,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 200,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "rivet-1",
        "colorNumber": 4,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "rivet-2",
        "colorNumber": 4,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "rivet-3",
        "colorNumber": 4,
        "label": [
          95,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "rivet-4",
        "colorNumber": 4,
        "label": [
          205,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "golden-crest",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 14
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
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "gorget-neck",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 40
        }
      },
      {
        "id": "shoulder-guard-l",
        "colorNumber": 2,
        "label": [
          75,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 340,
          "r": 25
        }
      },
      {
        "id": "shoulder-guard-r",
        "colorNumber": 2,
        "label": [
          225,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 340,
          "r": 25
        }
      },
      {
        "id": "cross-emblem",
        "colorNumber": 5,
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
        "id": "steel-glint",
        "colorNumber": 6,
        "label": [
          125,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 140,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-7",
    "name": "Pirate Captain",
    "emoji": "🏴‍☠️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#C62828",
      "#FFD54F",
      "#FFCC80",
      "#FFFFFF",
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
        "id": "tricorn-hat",
        "colorNumber": 1,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,140 150,60 250,140 150,120"
        }
      },
      {
        "id": "skull-badge",
        "colorNumber": 5,
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
        "id": "face",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 50
        }
      },
      {
        "id": "eyepatch",
        "colorNumber": 1,
        "label": [
          125,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 180,
          "r": 14
        }
      },
      {
        "id": "good-eye",
        "colorNumber": 5,
        "label": [
          175,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "good-pupil",
        "colorNumber": 1,
        "label": [
          175,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "gold-earring",
        "colorNumber": 3,
        "label": [
          95,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "pirate-beard",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,200 Q 150,290 195,200 Q 150,260 105,200 Z"
        }
      },
      {
        "id": "red-coat-collar",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,260 150,300 220,260 220,380 80,380"
        }
      },
      {
        "id": "shoulder-strap",
        "colorNumber": 3,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 300,
          "w": 100,
          "h": 16
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
        "colorNumber": 3,
        "label": [
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 3,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "gold-doubloon-1",
        "colorNumber": 3,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 12
        }
      },
      {
        "id": "gold-doubloon-2",
        "colorNumber": 3,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 280,
          "r": 12
        }
      },
      {
        "id": "crossbones-1",
        "colorNumber": 5,
        "label": [
          135,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 115,
          "r": 4
        }
      },
      {
        "id": "crossbones-2",
        "colorNumber": 5,
        "label": [
          165,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 115,
          "r": 4
        }
      },
      {
        "id": "hat-feather",
        "colorNumber": 2,
        "label": [
          195,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "mustache",
        "colorNumber": 6,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 10
        }
      },
      {
        "id": "peg-shoulder",
        "colorNumber": 6,
        "label": [
          240,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 340,
          "r": 15
        }
      }
    ]
  },
  {
    "id": "fun-8",
    "name": "Samurai Kabuto",
    "emoji": "🥷",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#B71C1C",
      "#212121",
      "#FFD54F",
      "#D50000",
      "#ECEFF1",
      "#37474F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 2,
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
        "id": "crescent-crest",
        "colorNumber": 3,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,120 Q 150,40 220,120 Q 150,75 80,120 Z"
        }
      },
      {
        "id": "crest-center-disc",
        "colorNumber": 4,
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
        "id": "kabuto-helmet-bowl",
        "colorNumber": 1,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,180 C 75,110 225,110 225,180 C 225,230 75,230 75,180 Z"
        }
      },
      {
        "id": "shikoro-neck-guard-1",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,200 240,200 220,240 80,240"
        }
      },
      {
        "id": "shikoro-neck-guard-2",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,240 250,240 230,280 70,280"
        }
      },
      {
        "id": "menpo-mask",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 195,
          "w": 90,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "menpo-teeth",
        "colorNumber": 5,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 225,
          "w": 60,
          "h": 15
        }
      },
      {
        "id": "fukikaeshi-wing-l",
        "colorNumber": 3,
        "label": [
          65,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 170,
          "r": 20
        }
      },
      {
        "id": "fukikaeshi-wing-r",
        "colorNumber": 3,
        "label": [
          235,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 170,
          "r": 20
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "armor-plate-l",
        "colorNumber": 6,
        "label": [
          70,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 340,
          "r": 25
        }
      },
      {
        "id": "armor-plate-r",
        "colorNumber": 6,
        "label": [
          230,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 340,
          "r": 25
        }
      },
      {
        "id": "tassle-tie-l",
        "colorNumber": 4,
        "label": [
          110,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "tassle-tie-r",
        "colorNumber": 4,
        "label": [
          190,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "gold-rivet-1",
        "colorNumber": 3,
        "label": [
          110,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 150,
          "r": 6
        }
      },
      {
        "id": "gold-rivet-2",
        "colorNumber": 3,
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
        "id": "samurai-chest",
        "colorNumber": 1,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 340,
          "r": 35
        }
      },
      {
        "id": "crest-glint",
        "colorNumber": 5,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-9",
    "name": "Ballet Shoes",
    "emoji": "🩰",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#F48FB1",
      "#EC407A",
      "#E91E63",
      "#FFFFFF",
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
        "id": "stage-spotlight",
        "colorNumber": 6,
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
        "id": "shoe-left-body",
        "colorNumber": 2,
        "label": [
          110,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 240,
          "rx": 32,
          "ry": 75
        }
      },
      {
        "id": "shoe-right-body",
        "colorNumber": 2,
        "label": [
          190,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 240,
          "rx": 32,
          "ry": 75
        }
      },
      {
        "id": "toe-box-l",
        "colorNumber": 3,
        "label": [
          110,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 295,
          "w": 40,
          "h": 25,
          "rx": 6
        }
      },
      {
        "id": "toe-box-r",
        "colorNumber": 3,
        "label": [
          190,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 295,
          "w": 40,
          "h": 25,
          "rx": 6
        }
      },
      {
        "id": "sole-l",
        "colorNumber": 4,
        "label": [
          110,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 310,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "sole-r",
        "colorNumber": 4,
        "label": [
          190,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 310,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "ribbon-cross-l1",
        "colorNumber": 3,
        "label": [
          110,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,200 L 130,110"
        }
      },
      {
        "id": "ribbon-cross-l2",
        "colorNumber": 3,
        "label": [
          110,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,200 L 90,110"
        }
      },
      {
        "id": "ribbon-cross-r1",
        "colorNumber": 3,
        "label": [
          190,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,200 L 210,110"
        }
      },
      {
        "id": "ribbon-cross-r2",
        "colorNumber": 3,
        "label": [
          190,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,200 L 170,110"
        }
      },
      {
        "id": "ribbon-bow-l",
        "colorNumber": 4,
        "label": [
          110,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 105,
          "r": 14
        }
      },
      {
        "id": "ribbon-bow-r",
        "colorNumber": 4,
        "label": [
          190,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 105,
          "r": 14
        }
      },
      {
        "id": "satin-shine-l",
        "colorNumber": 5,
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
        "id": "satin-shine-r",
        "colorNumber": 5,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 230,
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
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          40,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "sparkle-4",
        "colorNumber": 5,
        "label": [
          260,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 335,
          "r": 10
        }
      },
      {
        "id": "rose-petal-1",
        "colorNumber": 3,
        "label": [
          60,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "rose-petal-2",
        "colorNumber": 3,
        "label": [
          240,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "rose-petal-3",
        "colorNumber": 4,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 365,
          "r": 10
        }
      },
      {
        "id": "glitter-center",
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-10",
    "name": "Viking Helmet",
    "emoji": "🪓",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#4E342E",
      "#78909C",
      "#B0BEC5",
      "#FFB300",
      "#D32F2F",
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
        "id": "horn-left",
        "colorNumber": 6,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,160 C 40,140 30,70 80,60 C 70,100 85,130 105,150 Z"
        }
      },
      {
        "id": "horn-right",
        "colorNumber": 6,
        "label": [
          235,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,160 C 260,140 270,70 220,60 C 230,100 215,130 195,150 Z"
        }
      },
      {
        "id": "helmet-bowl",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,180 C 80,110 220,110 220,180 C 220,210 80,210 80,180 Z"
        }
      },
      {
        "id": "brow-band-gold",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 175,
          "w": 150,
          "h": 20,
          "rx": 4
        }
      },
      {
        "id": "nose-guard-nasal",
        "colorNumber": 2,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 180,
          "w": 16,
          "h": 60,
          "rx": 2
        }
      },
      {
        "id": "spectacle-rim-l",
        "colorNumber": 4,
        "label": [
          120,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 205,
          "r": 16
        }
      },
      {
        "id": "spectacle-rim-r",
        "colorNumber": 4,
        "label": [
          180,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 205,
          "r": 16
        }
      },
      {
        "id": "eye-dark-l",
        "colorNumber": 1,
        "label": [
          120,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "eye-dark-r",
        "colorNumber": 1,
        "label": [
          180,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "norse-beard",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,230 Q 150,350 210,230 Q 150,280 90,230 Z"
        }
      },
      {
        "id": "beard-knot-l",
        "colorNumber": 4,
        "label": [
          125,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 310,
          "r": 8
        }
      },
      {
        "id": "beard-knot-r",
        "colorNumber": 4,
        "label": [
          175,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 310,
          "r": 8
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
        "id": "rivet-horn-l",
        "colorNumber": 4,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "rivet-horn-r",
        "colorNumber": 4,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "shield-round-l",
        "colorNumber": 5,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 25
        }
      },
      {
        "id": "shield-round-r",
        "colorNumber": 5,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 280,
          "r": 25
        }
      },
      {
        "id": "shield-boss-l",
        "colorNumber": 4,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "shield-boss-r",
        "colorNumber": 4,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "rune-center",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "fun-11",
    "name": "Shadow Ninja",
    "emoji": "🗡️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#212121",
      "#37474F",
      "#D32F2F",
      "#00E5FF",
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
        "id": "moon",
        "colorNumber": 6,
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
        "id": "hood-head",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,180 C 85,95 215,95 215,180 C 215,250 85,250 85,180 Z"
        }
      },
      {
        "id": "eye-slit-mask",
        "colorNumber": 3,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 140,
          "w": 100,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "steely-eye-l",
        "colorNumber": 6,
        "label": [
          125,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 155,
          "rx": 14,
          "ry": 7
        }
      },
      {
        "id": "steely-eye-r",
        "colorNumber": 6,
        "label": [
          175,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 155,
          "rx": 14,
          "ry": 7
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 1,
        "label": [
          125,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 1,
        "label": [
          175,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "headband-red",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 115,
          "w": 140,
          "h": 18,
          "rx": 4
        }
      },
      {
        "id": "headband-tail",
        "colorNumber": 4,
        "label": [
          235,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,125 Q 265,140 280,180 Q 255,160 220,135"
        }
      },
      {
        "id": "crossed-katana-1",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,360 L 250,180"
        }
      },
      {
        "id": "crossed-katana-2",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 250,360 L 50,180"
        }
      },
      {
        "id": "shuriken-star-1",
        "colorNumber": 5,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 230,
          "r": 15
        }
      },
      {
        "id": "shuriken-star-2",
        "colorNumber": 5,
        "label": [
          245,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 230,
          "r": 15
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
        "id": "smoke-puff-1",
        "colorNumber": 3,
        "label": [
          70,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 360,
          "r": 20
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 3,
        "label": [
          230,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 360,
          "r": 20
        }
      },
      {
        "id": "ninja-torso",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 40
        }
      },
      {
        "id": "blade-glint",
        "colorNumber": 6,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-12",
    "name": "Western Cowboy",
    "emoji": "🤠",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#795548",
      "#4E342E",
      "#D32F2F",
      "#FFD54F",
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
        "id": "stetson-brim",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 130,
          "rx": 115,
          "ry": 35
        }
      },
      {
        "id": "stetson-crown",
        "colorNumber": 3,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,125 Q 115,50 150,60 Q 185,50 200,125 Z"
        }
      },
      {
        "id": "hat-band-leather",
        "colorNumber": 6,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 115,
          "w": 100,
          "h": 12
        }
      },
      {
        "id": "face",
        "colorNumber": 1,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 45
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 3,
        "label": [
          130,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 3,
        "label": [
          170,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "handlebar-mustache",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,195 Q 150,225 185,195 Q 150,205 115,195 Z"
        }
      },
      {
        "id": "bandana-triangle",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,215 195,215 150,285"
        }
      },
      {
        "id": "sheriff-star",
        "colorNumber": 5,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 18
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
        "id": "horseshoe-l",
        "colorNumber": 2,
        "label": [
          50,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 270,
          "r": 16
        }
      },
      {
        "id": "horseshoe-r",
        "colorNumber": 2,
        "label": [
          250,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 270,
          "r": 16
        }
      },
      {
        "id": "cactus-silhouette",
        "colorNumber": 3,
        "label": [
          40,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 80,
          "r": 15
        }
      },
      {
        "id": "sun-desert",
        "colorNumber": 5,
        "label": [
          250,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 75,
          "r": 20
        }
      },
      {
        "id": "vest-l",
        "colorNumber": 2,
        "label": [
          90,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 350,
          "r": 30
        }
      },
      {
        "id": "vest-r",
        "colorNumber": 2,
        "label": [
          210,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 350,
          "r": 30
        }
      },
      {
        "id": "belt-buckle",
        "colorNumber": 5,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 375,
          "r": 14
        }
      },
      {
        "id": "star-badge-point",
        "colorNumber": 5,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-13",
    "name": "Magic Witch",
    "emoji": "🧙‍♀️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#4A148C",
      "#7B1FA2",
      "#76FF03",
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
        "id": "witch-hat-brim",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 140,
          "rx": 115,
          "ry": 30
        }
      },
      {
        "id": "witch-hat-cone",
        "colorNumber": 3,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,135 150,20 185,135"
        }
      },
      {
        "id": "hat-buckle-band",
        "colorNumber": 5,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 122,
          "w": 85,
          "h": 14
        }
      },
      {
        "id": "witch-face",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 45
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 5,
        "label": [
          130,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 5,
        "label": [
          170,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "witch-crooked-nose",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,195 168,210 150,215"
        }
      },
      {
        "id": "cauldron-pot",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 55
        }
      },
      {
        "id": "cauldron-brew",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 45,
          "ry": 15
        }
      },
      {
        "id": "potion-bubble-1",
        "colorNumber": 4,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 260,
          "r": 10
        }
      },
      {
        "id": "potion-bubble-2",
        "colorNumber": 4,
        "label": [
          170,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 255,
          "r": 12
        }
      },
      {
        "id": "potion-bubble-3",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
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
        "id": "magic-wand",
        "colorNumber": 5,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,270 L 260,190"
        }
      },
      {
        "id": "wand-star-tip",
        "colorNumber": 5,
        "label": [
          260,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "black-cat-ear-l",
        "colorNumber": 2,
        "label": [
          60,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "black-cat-ear-r",
        "colorNumber": 2,
        "label": [
          80,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "moon-crescent",
        "colorNumber": 5,
        "label": [
          65,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 75,
          "r": 20
        }
      }
    ]
  },
  {
    "id": "fun-14",
    "name": "Royal Princess",
    "emoji": "👸",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#F06292",
      "#FFD54F",
      "#00E5FF",
      "#FFFFFF",
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
        "id": "tiara-crown",
        "colorNumber": 3,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,120 115,70 135,100 150,55 165,100 185,70 200,120"
        }
      },
      {
        "id": "tiara-gem-center",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "tiara-gem-l",
        "colorNumber": 4,
        "label": [
          115,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "tiara-gem-r",
        "colorNumber": 4,
        "label": [
          185,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "face",
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
        "id": "hair-curls-l",
        "colorNumber": 3,
        "label": [
          95,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,140 Q 80,180 95,240"
        }
      },
      {
        "id": "hair-curls-r",
        "colorNumber": 3,
        "label": [
          205,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,140 Q 220,180 205,240"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          135,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 165,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          165,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 165,
          "r": 6
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 2,
        "label": [
          125,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 2,
        "label": [
          175,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "necklace-pearl",
        "colorNumber": 4,
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
        "id": "ballgown-bodice",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,240 185,240 240,380 60,380"
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
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "gown-rose-1",
        "colorNumber": 5,
        "label": [
          110,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "gown-rose-2",
        "colorNumber": 5,
        "label": [
          190,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "royal-crest-l",
        "colorNumber": 3,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "royal-crest-r",
        "colorNumber": 3,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 14
        }
      }
    ]
  },
  {
    "id": "fun-15",
    "name": "Mad Scientist",
    "emoji": "👩‍🔬",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2F1",
      "#00E5FF",
      "#76FF03",
      "#FFFFFF",
      "#78909C",
      "#D50000"
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
        "id": "flask-body",
        "colorNumber": 4,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,160 165,160 220,330 80,330"
        }
      },
      {
        "id": "bubbling-liquid",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,270 200,270 215,325 85,325"
        }
      },
      {
        "id": "flask-neck",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 100,
          "w": 30,
          "h": 60
        }
      },
      {
        "id": "flask-rim",
        "colorNumber": 4,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 90,
          "w": 40,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "atom-orbit-ring",
        "colorNumber": 2,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 100,
          "r": 75
        }
      },
      {
        "id": "electron-1",
        "colorNumber": 6,
        "label": [
          90,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 65,
          "r": 8
        }
      },
      {
        "id": "electron-2",
        "colorNumber": 6,
        "label": [
          210,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 135,
          "r": 8
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 2,
        "label": [
          130,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 2,
        "label": [
          165,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 210,
          "r": 14
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 3,
        "label": [
          145,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "test-tube-1",
        "colorNumber": 4,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 42,
          "y": 230,
          "w": 16,
          "h": 80,
          "rx": 8
        }
      },
      {
        "id": "test-tube-2",
        "colorNumber": 4,
        "label": [
          250,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 242,
          "y": 230,
          "w": 16,
          "h": 80,
          "rx": 8
        }
      },
      {
        "id": "liquid-tube-1",
        "colorNumber": 6,
        "label": [
          50,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "liquid-tube-2",
        "colorNumber": 2,
        "label": [
          250,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 290,
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
        "id": "spark-1",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "goggles-l",
        "colorNumber": 5,
        "label": [
          130,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 65,
          "r": 15
        }
      },
      {
        "id": "goggles-r",
        "colorNumber": 5,
        "label": [
          170,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 65,
          "r": 15
        }
      },
      {
        "id": "smoke-vapor-1",
        "colorNumber": 2,
        "label": [
          120,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "smoke-vapor-2",
        "colorNumber": 2,
        "label": [
          180,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 75,
          "r": 12
        }
      },
      {
        "id": "reaction-flash",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 16
        }
      }
    ]
  },
  {
    "id": "fun-16",
    "name": "Rock Guitar",
    "emoji": "🎸",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#D50000",
      "#FF6D00",
      "#FFD54F",
      "#ECEFF1",
      "#78909C"
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
        "id": "guitar-body-lower",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 75,
          "ry": 60
        }
      },
      {
        "id": "guitar-body-upper",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 55,
          "ry": 45
        }
      },
      {
        "id": "double-cutaway-l",
        "colorNumber": 2,
        "label": [
          95,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,160 110,210 70,210"
        }
      },
      {
        "id": "double-cutaway-r",
        "colorNumber": 2,
        "label": [
          205,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,160 190,210 230,210"
        }
      },
      {
        "id": "pickguard",
        "colorNumber": 5,
        "label": [
          165,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 205,
          "w": 50,
          "h": 65,
          "rx": 6
        }
      },
      {
        "id": "guitar-neck",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 50,
          "w": 16,
          "h": 140
        }
      },
      {
        "id": "headstock",
        "colorNumber": 2,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,50 160,50 165,15 135,15"
        }
      },
      {
        "id": "pickup-1",
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
        "id": "pickup-2",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "pickup-3",
        "colorNumber": 6,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "bridge",
        "colorNumber": 6,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 300,
          "w": 24,
          "h": 10
        }
      },
      {
        "id": "vol-knob-1",
        "colorNumber": 4,
        "label": [
          190,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "vol-knob-2",
        "colorNumber": 4,
        "label": [
          185,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 285,
          "r": 6
        }
      },
      {
        "id": "musical-note-1",
        "colorNumber": 4,
        "label": [
          55,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "musical-note-2",
        "colorNumber": 4,
        "label": [
          245,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 80,
          "r": 12
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "tuning-peg-1",
        "colorNumber": 5,
        "label": [
          130,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 25,
          "r": 4
        }
      },
      {
        "id": "tuning-peg-2",
        "colorNumber": 5,
        "label": [
          170,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 25,
          "r": 4
        }
      },
      {
        "id": "amplifier-speaker-l",
        "colorNumber": 6,
        "label": [
          45,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 340,
          "r": 18
        }
      },
      {
        "id": "amplifier-speaker-r",
        "colorNumber": 6,
        "label": [
          255,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 340,
          "r": 18
        }
      }
    ]
  },
  {
    "id": "fun-17",
    "name": "Holiday Present",
    "emoji": "🎁",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#D32F2F",
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
        "id": "holiday-glow",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 120
        }
      },
      {
        "id": "box-cube",
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
          "rx": 8
        }
      },
      {
        "id": "box-lid",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 150,
          "w": 180,
          "h": 30,
          "rx": 6
        }
      },
      {
        "id": "ribbon-v",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 150,
          "w": 30,
          "h": 180
        }
      },
      {
        "id": "ribbon-h",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 240,
          "w": 160,
          "h": 30
        }
      },
      {
        "id": "bow-loop-l",
        "colorNumber": 3,
        "label": [
          115,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 125,
          "rx": 35,
          "ry": 20
        }
      },
      {
        "id": "bow-loop-r",
        "colorNumber": 3,
        "label": [
          185,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 125,
          "rx": 35,
          "ry": 20
        }
      },
      {
        "id": "bow-center-knot",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 14
        }
      },
      {
        "id": "ribbon-tail-l",
        "colorNumber": 3,
        "label": [
          100,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,135 Q 90,160 80,210"
        }
      },
      {
        "id": "ribbon-tail-r",
        "colorNumber": 3,
        "label": [
          200,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,135 Q 210,160 220,210"
        }
      },
      {
        "id": "gift-tag",
        "colorNumber": 5,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 195,
          "r": 12
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
        "id": "candy-cane-l",
        "colorNumber": 2,
        "label": [
          45,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 220,
          "r": 15
        }
      },
      {
        "id": "candy-cane-r",
        "colorNumber": 4,
        "label": [
          255,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 220,
          "r": 15
        }
      },
      {
        "id": "holly-berry-1",
        "colorNumber": 2,
        "label": [
          140,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "holly-berry-2",
        "colorNumber": 2,
        "label": [
          160,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "holly-leaf",
        "colorNumber": 4,
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
        "id": "ribbon-glint",
        "colorNumber": 5,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-18",
    "name": "Comedy & Tragedy",
    "emoji": "🎭",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FFD54F",
      "#0288D1",
      "#D50000",
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
        "id": "stage-spotlight",
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
        "id": "comedy-mask-face",
        "colorNumber": 2,
        "label": [
          105,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 180,
          "rx": 50,
          "ry": 70
        }
      },
      {
        "id": "comedy-eye-l",
        "colorNumber": 1,
        "label": [
          85,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 160,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "comedy-eye-r",
        "colorNumber": 1,
        "label": [
          125,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 160,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "comedy-smile",
        "colorNumber": 1,
        "label": [
          105,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,195 Q 105,245 130,195 Q 105,215 80,195 Z"
        }
      },
      {
        "id": "tragedy-mask-face",
        "colorNumber": 3,
        "label": [
          195,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 220,
          "rx": 50,
          "ry": 70
        }
      },
      {
        "id": "tragedy-eye-l",
        "colorNumber": 1,
        "label": [
          175,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 200,
          "rx": 10,
          "ry": 14
        }
      },
      {
        "id": "tragedy-eye-r",
        "colorNumber": 1,
        "label": [
          215,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 215,
          "cy": 200,
          "rx": 10,
          "ry": 14
        }
      },
      {
        "id": "tragedy-frown",
        "colorNumber": 1,
        "label": [
          195,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,260 Q 195,225 220,260 Q 195,245 170,260 Z"
        }
      },
      {
        "id": "theatre-ribbon-red",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,120 Q 150,70 230,120"
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
        "id": "draped-curtain-l",
        "colorNumber": 4,
        "label": [
          40,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 80,
          "r": 25
        }
      },
      {
        "id": "draped-curtain-r",
        "colorNumber": 4,
        "label": [
          260,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 80,
          "r": 25
        }
      },
      {
        "id": "tragedy-tear",
        "colorNumber": 3,
        "label": [
          170,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 225,
          "r": 5
        }
      },
      {
        "id": "comedy-cheek",
        "colorNumber": 4,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "stage-footlight-1",
        "colorNumber": 2,
        "label": [
          90,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 360,
          "r": 10
        }
      },
      {
        "id": "stage-footlight-2",
        "colorNumber": 2,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 10
        }
      },
      {
        "id": "stage-footlight-3",
        "colorNumber": 2,
        "label": [
          210,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 360,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "fun-19",
    "name": "Lucky Dice",
    "emoji": "🎲",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1B5E20",
      "#FFFFFF",
      "#212121",
      "#D50000",
      "#FFD54F",
      "#2E7D32"
    ],
    "regions": [
      {
        "id": "felt-table",
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
        "id": "felt-ring",
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
        "id": "die1-top",
        "colorNumber": 2,
        "label": [
          110,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,100 160,125 110,150 60,125"
        }
      },
      {
        "id": "die1-left",
        "colorNumber": 2,
        "label": [
          85,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,125 110,150 110,210 60,185"
        }
      },
      {
        "id": "die1-right",
        "colorNumber": 2,
        "label": [
          135,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,150 160,125 160,185 110,210"
        }
      },
      {
        "id": "pip1-center",
        "colorNumber": 4,
        "label": [
          110,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "pip1-l1",
        "colorNumber": 3,
        "label": [
          85,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "pip1-l2",
        "colorNumber": 3,
        "label": [
          85,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "pip1-r1",
        "colorNumber": 3,
        "label": [
          135,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "pip1-r2",
        "colorNumber": 3,
        "label": [
          135,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "pip1-r3",
        "colorNumber": 3,
        "label": [
          135,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "die2-top",
        "colorNumber": 2,
        "label": [
          190,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,180 240,205 190,230 140,205"
        }
      },
      {
        "id": "die2-left",
        "colorNumber": 2,
        "label": [
          165,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,205 190,230 190,290 140,265"
        }
      },
      {
        "id": "die2-right",
        "colorNumber": 2,
        "label": [
          215,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,230 240,205 240,265 190,290"
        }
      },
      {
        "id": "pip2-center",
        "colorNumber": 4,
        "label": [
          190,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 205,
          "r": 6
        }
      },
      {
        "id": "pip2-dot1",
        "colorNumber": 3,
        "label": [
          165,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "pip2-dot2",
        "colorNumber": 3,
        "label": [
          215,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "casino-chip-1",
        "colorNumber": 5,
        "label": [
          50,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 310,
          "r": 16
        }
      },
      {
        "id": "casino-chip-2",
        "colorNumber": 4,
        "label": [
          250,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 310,
          "r": 16
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
        "id": "luck-horseshoe",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 15
        }
      }
    ]
  },
  {
    "id": "fun-20",
    "name": "Bullseye Dart",
    "emoji": "🎯",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#D32F2F",
      "#2E7D32",
      "#FFF8E1",
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
        "id": "board-outer-ring",
        "colorNumber": 1,
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
        "id": "double-ring",
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
        "id": "outer-bed",
        "colorNumber": 4,
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
        "id": "triple-ring",
        "colorNumber": 3,
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
        "id": "inner-bed",
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
        "id": "outer-bull",
        "colorNumber": 3,
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
        "id": "inner-bullseye",
        "colorNumber": 2,
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
        "id": "dart-barrel",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,200 L 210,140"
        }
      },
      {
        "id": "dart-flight-1",
        "colorNumber": 2,
        "label": [
          225,
          125
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,140 230,120 220,110 200,130"
        }
      },
      {
        "id": "dart-flight-2",
        "colorNumber": 2,
        "label": [
          235,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,140 240,130 230,140 220,150"
        }
      },
      {
        "id": "number-wire-1",
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
        "id": "number-wire-2",
        "colorNumber": 5,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "number-wire-3",
        "colorNumber": 5,
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
      },
      {
        "id": "number-wire-4",
        "colorNumber": 5,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 6
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
        "id": "hit-impact-ring-1",
        "colorNumber": 6,
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
        "id": "dart-point-tip",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "chalkboard-score",
        "colorNumber": 5,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 15
        }
      }
    ]
  },
  {
    "id": "fun-21",
    "name": "Champion Trophy",
    "emoji": "🏆",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#FFD54F",
      "#FFC107",
      "#FF8F00",
      "#FFFFFF",
      "#78909C"
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
        "id": "cup-bowl",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,110 210,110 185,210 115,210"
        }
      },
      {
        "id": "cup-rim",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 110,
          "rx": 60,
          "ry": 14
        }
      },
      {
        "id": "handle-l",
        "colorNumber": 3,
        "label": [
          70,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,125 C 50,125 50,195 115,195"
        }
      },
      {
        "id": "handle-r",
        "colorNumber": 3,
        "label": [
          230,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,125 C 250,125 250,195 185,195"
        }
      },
      {
        "id": "stem",
        "colorNumber": 4,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 210,
          "w": 24,
          "h": 50
        }
      },
      {
        "id": "marble-plinth",
        "colorNumber": 6,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 272,
          "w": 120,
          "h": 65,
          "rx": 4
        }
      },
      {
        "id": "gold-plaque",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 290,
          "w": 90,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "star-badge",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 18
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
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "laurel-l",
        "colorNumber": 4,
        "label": [
          130,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "laurel-r",
        "colorNumber": 4,
        "label": [
          170,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "confetti-1",
        "colorNumber": 2,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "confetti-2",
        "colorNumber": 2,
        "label": [
          255,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "spotlight-l",
        "colorNumber": 5,
        "label": [
          50,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 360,
          "r": 15
        }
      },
      {
        "id": "spotlight-r",
        "colorNumber": 5,
        "label": [
          250,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 360,
          "r": 15
        }
      },
      {
        "id": "shine",
        "colorNumber": 5,
        "label": [
          145,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "cup-base-ring",
        "colorNumber": 2,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 265,
          "r": 20
        }
      }
    ]
  },
  {
    "id": "fun-22",
    "name": "Olympic Gold",
    "emoji": "🥇",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#FFD54F",
      "#FFA000",
      "#D32F2F",
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
        "id": "ribbon-v-neck-l",
        "colorNumber": 4,
        "label": [
          100,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,30 140,160 110,160 60,30"
        }
      },
      {
        "id": "ribbon-v-neck-r",
        "colorNumber": 4,
        "label": [
          200,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "220,30 160,160 190,160 240,30"
        }
      },
      {
        "id": "medal-outer-disc",
        "colorNumber": 3,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 85
        }
      },
      {
        "id": "medal-inner-rim",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 70
        }
      },
      {
        "id": "num-1-emblem",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 30
        }
      },
      {
        "id": "laurel-branch-l",
        "colorNumber": 3,
        "label": [
          110,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 250,
          "r": 12
        }
      },
      {
        "id": "laurel-branch-r",
        "colorNumber": 3,
        "label": [
          190,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 250,
          "r": 12
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
        "id": "ribbon-stripe-w-l",
        "colorNumber": 5,
        "label": [
          95,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "ribbon-stripe-w-r",
        "colorNumber": 5,
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
        "id": "medal-hanger-loop",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 14
        }
      },
      {
        "id": "medal-glint",
        "colorNumber": 5,
        "label": [
          135,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "torch-flame-l",
        "colorNumber": 4,
        "label": [
          50,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 180,
          "r": 15
        }
      },
      {
        "id": "torch-flame-r",
        "colorNumber": 4,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 180,
          "r": 15
        }
      },
      {
        "id": "podium-1st",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 365,
          "r": 25
        }
      },
      {
        "id": "gold-sparkle-center",
        "colorNumber": 5,
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
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-23",
    "name": "Artist Palette",
    "emoji": "🎨",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#8D6E63",
      "#D50000",
      "#2196F3",
      "#FFEB3B",
      "#4CAF50",
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
        "id": "wood-palette",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,180 C 70,90 230,90 230,180 C 230,270 210,310 160,300 C 130,290 120,250 100,270 C 70,300 70,270 70,180 Z"
        }
      },
      {
        "id": "thumbhole",
        "colorNumber": 1,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 260,
          "r": 16
        }
      },
      {
        "id": "paint-red",
        "colorNumber": 3,
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
        "id": "paint-blue",
        "colorNumber": 4,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "paint-yellow",
        "colorNumber": 5,
        "label": [
          190,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "paint-green",
        "colorNumber": 6,
        "label": [
          205,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 190,
          "r": 14
        }
      },
      {
        "id": "paint-purple",
        "colorNumber": 7,
        "label": [
          180,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 240,
          "r": 14
        }
      },
      {
        "id": "paintbrush",
        "colorNumber": 2,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,330 L 250,110"
        }
      },
      {
        "id": "brush-tip",
        "colorNumber": 3,
        "label": [
          250,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 110,
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
        "colorNumber": 3,
        "label": [
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 3,
        "label": [
          215,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "color-splash-1",
        "colorNumber": 4,
        "label": [
          50,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "color-splash-2",
        "colorNumber": 6,
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
        "id": "color-splash-3",
        "colorNumber": 5,
        "label": [
          50,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "color-splash-4",
        "colorNumber": 7,
        "label": [
          250,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "easel-leg-l",
        "colorNumber": 2,
        "label": [
          70,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 370,
          "r": 15
        }
      },
      {
        "id": "easel-leg-r",
        "colorNumber": 2,
        "label": [
          230,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 370,
          "r": 15
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-24",
    "name": "Jazz Saxophone",
    "emoji": "🎷",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FFD54F",
      "#FFB300",
      "#FF8F00",
      "#78909C",
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
        "id": "stage-spotlight",
        "colorNumber": 3,
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
        "id": "sax-tube",
        "colorNumber": 2,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,80 L 120,230 Q 120,310 180,310 Q 210,310 210,240"
        }
      },
      {
        "id": "sax-bell",
        "colorNumber": 3,
        "label": [
          210,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 220,
          "rx": 28,
          "ry": 45
        }
      },
      {
        "id": "bell-interior",
        "colorNumber": 4,
        "label": [
          210,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 220,
          "r": 18
        }
      },
      {
        "id": "mouthpiece",
        "colorNumber": 5,
        "label": [
          105,
          80
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 75,
          "w": 30,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "sax-key-1",
        "colorNumber": 5,
        "label": [
          120,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "sax-key-2",
        "colorNumber": 5,
        "label": [
          120,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "sax-key-3",
        "colorNumber": 5,
        "label": [
          120,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 190,
          "r": 6
        }
      },
      {
        "id": "sax-key-4",
        "colorNumber": 5,
        "label": [
          120,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "music-note-1",
        "colorNumber": 2,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 140,
          "r": 14
        }
      },
      {
        "id": "music-note-2",
        "colorNumber": 2,
        "label": [
          250,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "music-note-3",
        "colorNumber": 2,
        "label": [
          60,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 140,
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
        "id": "sax-curve-guard",
        "colorNumber": 4,
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
        "id": "sax-shine",
        "colorNumber": 6,
        "label": [
          125,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 170,
          "r": 5
        }
      },
      {
        "id": "pearl-touch-1",
        "colorNumber": 6,
        "label": [
          120,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "pearl-touch-2",
        "colorNumber": 6,
        "label": [
          120,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 160,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "fun-25",
    "name": "Rock Drum Set",
    "emoji": "🥁",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#D32F2F",
      "#FFD54F",
      "#ECEFF1",
      "#78909C"
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
        "id": "bass-drum",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 65
        }
      },
      {
        "id": "bass-head-front",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 50
        }
      },
      {
        "id": "bass-logo-star",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 16
        }
      },
      {
        "id": "snare-drum",
        "colorNumber": 2,
        "label": [
          75,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 75,
          "cy": 200,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "tom-tom-1",
        "colorNumber": 2,
        "label": [
          115,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 150,
          "rx": 28,
          "ry": 15
        }
      },
      {
        "id": "tom-tom-2",
        "colorNumber": 2,
        "label": [
          185,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 150,
          "rx": 28,
          "ry": 15
        }
      },
      {
        "id": "floor-tom",
        "colorNumber": 2,
        "label": [
          225,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 225,
          "cy": 220,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "hi-hat-cymbal",
        "colorNumber": 3,
        "label": [
          45,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 45,
          "cy": 130,
          "rx": 30,
          "ry": 10
        }
      },
      {
        "id": "crash-cymbal",
        "colorNumber": 3,
        "label": [
          245,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 110,
          "rx": 35,
          "ry": 12
        }
      },
      {
        "id": "drumstick-1",
        "colorNumber": 5,
        "label": [
          130,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,90 L 140,140"
        }
      },
      {
        "id": "drumstick-2",
        "colorNumber": 5,
        "label": [
          170,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 210,90 L 160,140"
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "cymbal-glint",
        "colorNumber": 4,
        "label": [
          245,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "kick-pedal",
        "colorNumber": 5,
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
        "id": "hardware-stand-l",
        "colorNumber": 5,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "hardware-stand-r",
        "colorNumber": 5,
        "label": [
          245,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-26",
    "name": "Grand Piano",
    "emoji": "🎹",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#212121",
      "#FFFFFF",
      "#FFD54F",
      "#B71C1C"
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
        "id": "piano-body-curve",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,220 250,220 230,90 90,130"
        }
      },
      {
        "id": "open-lid-raised",
        "colorNumber": 2,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,220 180,50 250,110 130,220"
        }
      },
      {
        "id": "lid-prop-stick",
        "colorNumber": 4,
        "label": [
          170,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 110,
          "w": 4,
          "h": 80
        }
      },
      {
        "id": "keyboard-bed",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 220,
          "w": 180,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "black-key-1",
        "colorNumber": 2,
        "label": [
          80,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-2",
        "colorNumber": 2,
        "label": [
          100,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-3",
        "colorNumber": 2,
        "label": [
          130,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-4",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-5",
        "colorNumber": 2,
        "label": [
          170,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-6",
        "colorNumber": 2,
        "label": [
          200,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "black-key-7",
        "colorNumber": 2,
        "label": [
          220,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 220,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "pedal-lyre",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 310,
          "w": 20,
          "h": 40
        }
      },
      {
        "id": "pedal-gold-1",
        "colorNumber": 4,
        "label": [
          142,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 350,
          "r": 5
        }
      },
      {
        "id": "pedal-gold-2",
        "colorNumber": 4,
        "label": [
          158,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 350,
          "r": 5
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
        "id": "sheet-music",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 205,
          "r": 12
        }
      },
      {
        "id": "music-clef",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 205,
          "r": 6
        }
      },
      {
        "id": "leg-left",
        "colorNumber": 2,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "leg-right",
        "colorNumber": 2,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 300,
          "r": 12
        }
      }
    ]
  },
  {
    "id": "fun-27",
    "name": "Studio Mic",
    "emoji": "🎙️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#ECEFF1",
      "#78909C",
      "#D32F2F",
      "#00E5FF",
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
        "id": "soundwave-1",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 115
        }
      },
      {
        "id": "soundwave-2",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 85
        }
      },
      {
        "id": "mic-capsule",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 90,
          "w": 70,
          "h": 120,
          "rx": 20
        }
      },
      {
        "id": "mic-grille-mesh",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 100,
          "w": 60,
          "h": 80,
          "rx": 15
        }
      },
      {
        "id": "mic-yoke-mount",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 170,
          "w": 100,
          "h": 40,
          "rx": 8
        }
      },
      {
        "id": "stand-shaft",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 210,
          "w": 12,
          "h": 110
        }
      },
      {
        "id": "stand-base-round",
        "colorNumber": 3,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 60,
          "ry": 20
        }
      },
      {
        "id": "on-air-sign",
        "colorNumber": 4,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 18
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
        "id": "knob-l",
        "colorNumber": 2,
        "label": [
          100,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "knob-r",
        "colorNumber": 2,
        "label": [
          200,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "cable-connector",
        "colorNumber": 1,
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
        "id": "metal-glint",
        "colorNumber": 6,
        "label": [
          140,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "volume-vu-l",
        "colorNumber": 4,
        "label": [
          60,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "volume-vu-r",
        "colorNumber": 4,
        "label": [
          240,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "sound-wave-1",
        "colorNumber": 4,
        "label": [
          60,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 140,
          "r": 18
        }
      },
      {
        "id": "sound-wave-2",
        "colorNumber": 4,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 140,
          "r": 18
        }
      },
      {
        "id": "audio-bar-1",
        "colorNumber": 5,
        "label": [
          40,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 220,
          "w": 10,
          "h": 40,
          "rx": 3
        }
      },
      {
        "id": "audio-bar-2",
        "colorNumber": 5,
        "label": [
          260,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 255,
          "y": 220,
          "w": 10,
          "h": 40,
          "rx": 3
        }
      }
    ]
  },
  {
    "id": "fun-28",
    "name": "Cuddly Teddy",
    "emoji": "🧸",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#8D6E63",
      "#D32F2F",
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
        "id": "body-belly",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 65
        }
      },
      {
        "id": "belly-patch",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 40
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 50
        }
      },
      {
        "id": "snout",
        "colorNumber": 1,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 20
        }
      },
      {
        "id": "nose-black",
        "colorNumber": 4,
        "label": [
          150,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 158,
          "r": 8
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 4,
        "label": [
          132,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 4,
        "label": [
          168,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "ear-outer-l",
        "colorNumber": 2,
        "label": [
          105,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 105,
          "r": 18
        }
      },
      {
        "id": "ear-outer-r",
        "colorNumber": 2,
        "label": [
          195,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 105,
          "r": 18
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 1,
        "label": [
          105,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 1,
        "label": [
          195,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "bow-tie",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 205,
          "r": 12
        }
      },
      {
        "id": "paw-hand-l",
        "colorNumber": 2,
        "label": [
          85,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 225,
          "r": 20
        }
      },
      {
        "id": "paw-hand-r",
        "colorNumber": 2,
        "label": [
          215,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 225,
          "r": 20
        }
      },
      {
        "id": "paw-foot-l",
        "colorNumber": 2,
        "label": [
          95,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 325,
          "r": 25
        }
      },
      {
        "id": "paw-foot-r",
        "colorNumber": 2,
        "label": [
          205,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 325,
          "r": 25
        }
      },
      {
        "id": "pad-foot-l",
        "colorNumber": 1,
        "label": [
          95,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 325,
          "r": 15
        }
      },
      {
        "id": "pad-foot-r",
        "colorNumber": 1,
        "label": [
          205,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 325,
          "r": 15
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
        "id": "heart-patch",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 10
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 5,
        "label": [
          130,
          143
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 143,
          "r": 2
        }
      }
    ]
  },
  {
    "id": "fun-29",
    "name": "Fiesta Pinata",
    "emoji": "🪅",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF9C4",
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
        "id": "pinata-core",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 50
        }
      },
      {
        "id": "star-point-top",
        "colorNumber": 3,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,145 165,145 150,70"
        }
      },
      {
        "id": "star-point-bot",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,235 165,235 150,310"
        }
      },
      {
        "id": "star-point-l",
        "colorNumber": 5,
        "label": [
          70,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,175 105,205 30,190"
        }
      },
      {
        "id": "star-point-r",
        "colorNumber": 6,
        "label": [
          230,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "195,175 195,205 270,190"
        }
      },
      {
        "id": "tassel-top",
        "colorNumber": 2,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 10
        }
      },
      {
        "id": "tassel-bot",
        "colorNumber": 2,
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
        "id": "tassel-l",
        "colorNumber": 2,
        "label": [
          25,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "tassel-r",
        "colorNumber": 2,
        "label": [
          275,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "falling-candy-1",
        "colorNumber": 2,
        "label": [
          90,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "falling-candy-2",
        "colorNumber": 3,
        "label": [
          130,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "falling-candy-3",
        "colorNumber": 4,
        "label": [
          170,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "falling-candy-4",
        "colorNumber": 5,
        "label": [
          210,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "confetti-1",
        "colorNumber": 6,
        "label": [
          45,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "confetti-2",
        "colorNumber": 3,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "confetti-3",
        "colorNumber": 5,
        "label": [
          65,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "confetti-4",
        "colorNumber": 2,
        "label": [
          235,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "pinata-fringe-1",
        "colorNumber": 3,
        "label": [
          130,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "pinata-fringe-2",
        "colorNumber": 4,
        "label": [
          170,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "pinata-fringe-3",
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
        "id": "hanging-rope",
        "colorNumber": 6,
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
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-30",
    "name": "Classic Yo-Yo",
    "emoji": "🪀",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#D50000",
      "#FFD54F",
      "#00E5FF",
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
        "id": "spin-motion-ring",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 95
        }
      },
      {
        "id": "yoyo-half-outer",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 70
        }
      },
      {
        "id": "yoyo-hub-gold",
        "colorNumber": 3,
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
        "id": "yoyo-axle-core",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 15
        }
      },
      {
        "id": "yoyo-string",
        "colorNumber": 5,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,50 L 150,240"
        }
      },
      {
        "id": "finger-loop",
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 12
        }
      },
      {
        "id": "side-stripe-1",
        "colorNumber": 3,
        "label": [
          110,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 220,
          "r": 10
        }
      },
      {
        "id": "side-stripe-2",
        "colorNumber": 3,
        "label": [
          190,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 220,
          "r": 10
        }
      },
      {
        "id": "spin-sparkle-1",
        "colorNumber": 3,
        "label": [
          70,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "spin-sparkle-2",
        "colorNumber": 3,
        "label": [
          230,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "spin-sparkle-3",
        "colorNumber": 3,
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
        "id": "spin-sparkle-4",
        "colorNumber": 3,
        "label": [
          230,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 310,
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
        "id": "speed-arc-l",
        "colorNumber": 4,
        "label": [
          90,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 240,
          "r": 15
        }
      },
      {
        "id": "speed-arc-r",
        "colorNumber": 4,
        "label": [
          210,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 240,
          "r": 15
        }
      },
      {
        "id": "rim-shine",
        "colorNumber": 5,
        "label": [
          135,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "center-gem",
        "colorNumber": 5,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "motion-ring-1",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 85
        }
      },
      {
        "id": "motion-ring-2",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 95
        }
      },
      {
        "id": "sparkle-ex1",
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
        "id": "sparkle-ex2",
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
    "id": "fun-31",
    "name": "Diamond Kite",
    "emoji": "🪁",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#FF5722",
      "#FFEB3B",
      "#4CAF50",
      "#9C27B0",
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
        "id": "kite-quad-top",
        "colorNumber": 2,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,50 210,130 150,130"
        }
      },
      {
        "id": "kite-quad-left",
        "colorNumber": 3,
        "label": [
          120,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,50 90,130 150,130"
        }
      },
      {
        "id": "kite-quad-bot-l",
        "colorNumber": 4,
        "label": [
          120,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,130 150,220 150,130"
        }
      },
      {
        "id": "kite-quad-bot-r",
        "colorNumber": 5,
        "label": [
          180,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,130 150,220 150,130"
        }
      },
      {
        "id": "kite-tail",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,220 Q 120,270 170,310 Q 130,350 160,380"
        }
      },
      {
        "id": "bow-1",
        "colorNumber": 3,
        "label": [
          135,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 255,
          "r": 8
        }
      },
      {
        "id": "bow-2",
        "colorNumber": 4,
        "label": [
          160,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 290,
          "r": 8
        }
      },
      {
        "id": "bow-3",
        "colorNumber": 5,
        "label": [
          145,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "bow-4",
        "colorNumber": 2,
        "label": [
          160,
          380
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 380,
          "r": 8
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 6,
        "label": [
          50,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 90,
          "r": 22
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 6,
        "label": [
          250,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 90,
          "r": 22
        }
      },
      {
        "id": "sun-sky",
        "colorNumber": 3,
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
        "id": "bird-1",
        "colorNumber": 2,
        "label": [
          70,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "bird-2",
        "colorNumber": 2,
        "label": [
          230,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 180,
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
        "id": "spark-1",
        "colorNumber": 3,
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
        "id": "spar-center-cross",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "kite-glint",
        "colorNumber": 6,
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
      },
      {
        "id": "tail-bow-4",
        "colorNumber": 4,
        "label": [
          180,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 350,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "tail-bow-5",
        "colorNumber": 2,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "cloud-l",
        "colorNumber": 6,
        "label": [
          50,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 160,
          "r": 18
        }
      },
      {
        "id": "cloud-r",
        "colorNumber": 6,
        "label": [
          250,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 160,
          "r": 18
        }
      },
      {
        "id": "wind-whirl-1",
        "colorNumber": 5,
        "label": [
          55,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 260,
          "r": 12
        }
      },
      {
        "id": "wind-whirl-2",
        "colorNumber": 5,
        "label": [
          245,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 260,
          "r": 12
        }
      }
    ]
  },
  {
    "id": "fun-32",
    "name": "Bowling Pins",
    "emoji": "🎳",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#FFFFFF",
      "#D32F2F",
      "#212121",
      "#FFD54F",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "lane-wood",
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
        "id": "bowling-ball",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 45
        }
      },
      {
        "id": "finger-hole-1",
        "colorNumber": 1,
        "label": [
          135,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 265,
          "r": 6
        }
      },
      {
        "id": "finger-hole-2",
        "colorNumber": 1,
        "label": [
          155,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "thumb-hole",
        "colorNumber": 1,
        "label": [
          145,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 290,
          "r": 8
        }
      },
      {
        "id": "pin-center",
        "colorNumber": 2,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,80 160,80 165,150 135,150"
        }
      },
      {
        "id": "pin-stripe-1",
        "colorNumber": 3,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 95,
          "w": 16,
          "h": 6
        }
      },
      {
        "id": "pin-left",
        "colorNumber": 2,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,100 105,100 110,170 80,170"
        }
      },
      {
        "id": "pin-stripe-l",
        "colorNumber": 3,
        "label": [
          95,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 87,
          "y": 115,
          "w": 16,
          "h": 6
        }
      },
      {
        "id": "pin-right",
        "colorNumber": 2,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "polygon",
          "points": "195,100 215,100 220,170 190,170"
        }
      },
      {
        "id": "pin-stripe-r",
        "colorNumber": 3,
        "label": [
          205,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 197,
          "y": 115,
          "w": 16,
          "h": 6
        }
      },
      {
        "id": "flying-pin-1",
        "colorNumber": 2,
        "label": [
          55,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 120,
          "r": 15
        }
      },
      {
        "id": "flying-pin-2",
        "colorNumber": 2,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 15
        }
      },
      {
        "id": "impact-spark-1",
        "colorNumber": 5,
        "label": [
          110,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "impact-spark-2",
        "colorNumber": 5,
        "label": [
          190,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "gutter-l",
        "colorNumber": 4,
        "label": [
          30,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 250,
          "r": 15
        }
      },
      {
        "id": "gutter-r",
        "colorNumber": 4,
        "label": [
          270,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 250,
          "r": 15
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
        "id": "ball-shine",
        "colorNumber": 2,
        "label": [
          135,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "target-arrow",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 10
        }
      },
      {
        "id": "strike-spark-1",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "strike-spark-2",
        "colorNumber": 3,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "strike-spark-3",
        "colorNumber": 3,
        "label": [
          190,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 140,
          "r": 7
        }
      },
      {
        "id": "lane-reflection",
        "colorNumber": 5,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 90,
          "ry": 15
        }
      }
    ]
  },
  {
    "id": "fun-33",
    "name": "Pro Controller",
    "emoji": "🎮",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#37474F",
      "#00E5FF",
      "#D50000",
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
        "id": "gamepad-body",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,140 C 40,200 40,280 80,280 C 105,280 120,240 150,240 C 180,240 195,280 220,280 C 260,280 260,200 220,140 Z"
        }
      },
      {
        "id": "thumbstick-l",
        "colorNumber": 1,
        "label": [
          110,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 220,
          "r": 18
        }
      },
      {
        "id": "thumbstick-r",
        "colorNumber": 1,
        "label": [
          170,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 220,
          "r": 18
        }
      },
      {
        "id": "d-pad-v",
        "colorNumber": 1,
        "label": [
          100,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 94,
          "y": 160,
          "w": 12,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "d-pad-h",
        "colorNumber": 1,
        "label": [
          100,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 169,
          "w": 30,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "btn-y",
        "colorNumber": 6,
        "label": [
          200,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "btn-b",
        "colorNumber": 4,
        "label": [
          215,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "btn-a",
        "colorNumber": 5,
        "label": [
          200,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 190,
          "r": 6
        }
      },
      {
        "id": "btn-x",
        "colorNumber": 3,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "home-button",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "bumper-l",
        "colorNumber": 3,
        "label": [
          90,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 122,
          "w": 35,
          "h": 12,
          "rx": 4
        }
      },
      {
        "id": "bumper-r",
        "colorNumber": 3,
        "label": [
          210,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 122,
          "w": 35,
          "h": 12,
          "rx": 4
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
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
        "colorNumber": 7,
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
        "colorNumber": 7,
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
        "colorNumber": 7,
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "grip-texture-l",
        "colorNumber": 1,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 230,
          "r": 10
        }
      },
      {
        "id": "grip-texture-r",
        "colorNumber": 1,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 230,
          "r": 10
        }
      },
      {
        "id": "led-player-1",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 205,
          "r": 3
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-34",
    "name": "Arcade Cabinet",
    "emoji": "🕹️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#E040FB",
      "#00E5FF",
      "#FFD54F",
      "#D50000",
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
        "id": "cabinet-frame",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,80 225,80 235,340 65,340"
        }
      },
      {
        "id": "marquee-sign",
        "colorNumber": 4,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 90,
          "w": 130,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "crt-screen-bezel",
        "colorNumber": 1,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 130,
          "w": 130,
          "h": 90,
          "rx": 6
        }
      },
      {
        "id": "crt-screen-glass",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 140,
          "w": 110,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "pixel-invader-art",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "control-panel-shelf",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,230 230,230 240,265 60,265"
        }
      },
      {
        "id": "joystick-ball",
        "colorNumber": 5,
        "label": [
          110,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 245,
          "r": 10
        }
      },
      {
        "id": "btn-red",
        "colorNumber": 5,
        "label": [
          165,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "btn-blue",
        "colorNumber": 3,
        "label": [
          185,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "btn-yellow",
        "colorNumber": 4,
        "label": [
          205,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "coin-door",
        "colorNumber": 1,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 280,
          "w": 80,
          "h": 50,
          "rx": 4
        }
      },
      {
        "id": "coin-slot-1",
        "colorNumber": 4,
        "label": [
          135,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 295,
          "r": 5
        }
      },
      {
        "id": "coin-slot-2",
        "colorNumber": 4,
        "label": [
          165,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 295,
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
        "id": "neon-glow-l",
        "colorNumber": 2,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "neon-glow-r",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "speaker-grill",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "marquee-light-1",
        "colorNumber": 4,
        "label": [
          85,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "marquee-light-2",
        "colorNumber": 4,
        "label": [
          215,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "speaker-grill-l",
        "colorNumber": 5,
        "label": [
          80,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "speaker-grill-r",
        "colorNumber": 5,
        "label": [
          220,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "coin-reject-btn",
        "colorNumber": 4,
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
        "id": "glow-spark-1",
        "colorNumber": 4,
        "label": [
          45,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 140,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-35",
    "name": "Puzzle Piece",
    "emoji": "🧩",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#E91E63",
      "#2196F3",
      "#FFEB3B",
      "#4CAF50",
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
        "id": "piece-top-l",
        "colorNumber": 2,
        "label": [
          105,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 110,
          "w": 90,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "piece-top-r",
        "colorNumber": 3,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 110,
          "w": 90,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "piece-bot-l",
        "colorNumber": 4,
        "label": [
          105,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 200,
          "w": 90,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "piece-bot-r",
        "colorNumber": 5,
        "label": [
          195,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 200,
          "w": 90,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "tab-top-mid",
        "colorNumber": 2,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "tab-bot-mid",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 245,
          "r": 14
        }
      },
      {
        "id": "tab-left-mid",
        "colorNumber": 2,
        "label": [
          105,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 200,
          "r": 14
        }
      },
      {
        "id": "tab-right-mid",
        "colorNumber": 3,
        "label": [
          195,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 200,
          "r": 14
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
        "id": "puzzle-pattern-1",
        "colorNumber": 1,
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
      },
      {
        "id": "puzzle-pattern-2",
        "colorNumber": 1,
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
        "id": "puzzle-pattern-3",
        "colorNumber": 1,
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
        "id": "puzzle-pattern-4",
        "colorNumber": 1,
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
        "id": "puzzle-center-lock",
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
      },
      {
        "id": "tab-shadow-1",
        "colorNumber": 3,
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
        "id": "tab-shadow-2",
        "colorNumber": 3,
        "label": [
          240,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "corner-bevel-1",
        "colorNumber": 2,
        "label": [
          80,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "corner-bevel-2",
        "colorNumber": 2,
        "label": [
          220,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 270,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "fun-36",
    "name": "Chess Knight",
    "emoji": "♞",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#ECEFF1",
      "#5D4037",
      "#3E2723",
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
        "id": "knight-horse-profile",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,290 L 110,210 Q 90,190 90,140 Q 120,90 170,90 Q 190,110 185,150 Q 210,180 200,240 L 200,290 Z"
        }
      },
      {
        "id": "horse-muzzle",
        "colorNumber": 3,
        "label": [
          105,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 160,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "horse-nostril",
        "colorNumber": 4,
        "label": [
          95,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 160,
          "r": 4
        }
      },
      {
        "id": "horse-eye",
        "colorNumber": 5,
        "label": [
          135,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "horse-ear",
        "colorNumber": 3,
        "label": [
          160,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,100 160,70 170,100"
        }
      },
      {
        "id": "mane-crest",
        "colorNumber": 4,
        "label": [
          185,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,100 Q 200,140 185,200"
        }
      },
      {
        "id": "knight-pedestal-neck",
        "colorNumber": 4,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 290,
          "w": 110,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "knight-base-pedestal",
        "colorNumber": 3,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 305,
          "w": 140,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "chessboard-tile-1",
        "colorNumber": 2,
        "label": [
          60,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 345,
          "w": 60,
          "h": 25
        }
      },
      {
        "id": "chessboard-tile-2",
        "colorNumber": 4,
        "label": [
          120,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 345,
          "w": 60,
          "h": 25
        }
      },
      {
        "id": "chessboard-tile-3",
        "colorNumber": 2,
        "label": [
          180,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 345,
          "w": 60,
          "h": 25
        }
      },
      {
        "id": "chessboard-tile-4",
        "colorNumber": 4,
        "label": [
          240,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 345,
          "w": 60,
          "h": 25
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
        "id": "wood-grain-highlight",
        "colorNumber": 5,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "pedestal-base-rim",
        "colorNumber": 3,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 340,
          "w": 140,
          "h": 12,
          "rx": 4
        }
      },
      {
        "id": "chess-square-1",
        "colorNumber": 2,
        "label": [
          45,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 345,
          "w": 50,
          "h": 35
        }
      },
      {
        "id": "chess-square-2",
        "colorNumber": 4,
        "label": [
          255,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 345,
          "w": 50,
          "h": 35
        }
      },
      {
        "id": "mane-curl-1",
        "colorNumber": 4,
        "label": [
          115,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 120,
          "r": 10
        }
      },
      {
        "id": "mane-curl-2",
        "colorNumber": 4,
        "label": [
          105,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "sparkle-ex1",
        "colorNumber": 5,
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
        "id": "sparkle-ex2",
        "colorNumber": 5,
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
    "id": "fun-37",
    "name": "Folk Accordion",
    "emoji": "🪗",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#D32F2F",
      "#212121",
      "#FFD54F",
      "#FFFFFF",
      "#78909C"
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
        "id": "treble-box",
        "colorNumber": 2,
        "label": [
          215,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 130,
          "w": 60,
          "h": 140,
          "rx": 6
        }
      },
      {
        "id": "bass-box",
        "colorNumber": 2,
        "label": [
          85,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 130,
          "w": 60,
          "h": 140,
          "rx": 6
        }
      },
      {
        "id": "bellows-fold-1",
        "colorNumber": 5,
        "label": [
          125,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,140 135,130 135,270 115,260"
        }
      },
      {
        "id": "bellows-fold-2",
        "colorNumber": 3,
        "label": [
          145,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,130 155,140 155,260 135,270"
        }
      },
      {
        "id": "bellows-fold-3",
        "colorNumber": 5,
        "label": [
          165,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,140 175,130 175,270 155,260"
        }
      },
      {
        "id": "keyboard-side",
        "colorNumber": 5,
        "label": [
          230,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 220,
          "y": 145,
          "w": 20,
          "h": 110,
          "rx": 2
        }
      },
      {
        "id": "bass-button-1",
        "colorNumber": 4,
        "label": [
          75,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "bass-button-2",
        "colorNumber": 4,
        "label": [
          75,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "bass-button-3",
        "colorNumber": 4,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 210,
          "r": 5
        }
      },
      {
        "id": "bass-button-4",
        "colorNumber": 4,
        "label": [
          75,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "music-note-1",
        "colorNumber": 4,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "music-note-2",
        "colorNumber": 4,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 12
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
        "id": "grille-mesh-r",
        "colorNumber": 6,
        "label": [
          200,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 200,
          "r": 14
        }
      },
      {
        "id": "strap-l",
        "colorNumber": 3,
        "label": [
          60,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "strap-r",
        "colorNumber": 3,
        "label": [
          240,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "gold-trim",
        "colorNumber": 4,
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
        "id": "strap-buckle-1",
        "colorNumber": 4,
        "label": [
          85,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "strap-buckle-2",
        "colorNumber": 4,
        "label": [
          215,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "bellows-accent-1",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 155,
          "w": 80,
          "h": 8
        }
      },
      {
        "id": "bellows-accent-2",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 225,
          "w": 80,
          "h": 8
        }
      }
    ]
  },
  {
    "id": "fun-38",
    "name": "Royal Trumpet",
    "emoji": "🎺",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#FFD54F",
      "#FFA000",
      "#FF8F00",
      "#78909C",
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
        "id": "fanfare-aura",
        "colorNumber": 3,
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
        "id": "main-leadpipe",
        "colorNumber": 2,
        "label": [
          130,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 195,
          "w": 160,
          "h": 10
        }
      },
      {
        "id": "bell-flare",
        "colorNumber": 2,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "200,195 270,140 270,260 200,205"
        }
      },
      {
        "id": "bell-rim",
        "colorNumber": 4,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 270,
          "cy": 200,
          "rx": 10,
          "ry": 60
        }
      },
      {
        "id": "valve-casing-1",
        "colorNumber": 5,
        "label": [
          130,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 165,
          "w": 10,
          "h": 45
        }
      },
      {
        "id": "valve-casing-2",
        "colorNumber": 5,
        "label": [
          145,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 165,
          "w": 10,
          "h": 45
        }
      },
      {
        "id": "valve-casing-3",
        "colorNumber": 5,
        "label": [
          160,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 165,
          "w": 10,
          "h": 45
        }
      },
      {
        "id": "finger-button-1",
        "colorNumber": 2,
        "label": [
          130,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "finger-button-2",
        "colorNumber": 2,
        "label": [
          145,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "finger-button-3",
        "colorNumber": 2,
        "label": [
          160,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "mouthpiece",
        "colorNumber": 5,
        "label": [
          45,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 194,
          "w": 15,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "music-burst-1",
        "colorNumber": 2,
        "label": [
          240,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 90,
          "r": 12
        }
      },
      {
        "id": "music-burst-2",
        "colorNumber": 2,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 310,
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
        "id": "tuning-slide-bow",
        "colorNumber": 3,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "trumpet-shine",
        "colorNumber": 6,
        "label": [
          220,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 185,
          "r": 8
        }
      },
      {
        "id": "music-note-3",
        "colorNumber": 5,
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
        "id": "music-note-4",
        "colorNumber": 5,
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
        "id": "sound-cone-1",
        "colorNumber": 4,
        "label": [
          235,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 235,
          "cy": 195,
          "rx": 30,
          "ry": 45
        }
      },
      {
        "id": "sound-cone-2",
        "colorNumber": 5,
        "label": [
          255,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 255,
          "cy": 195,
          "rx": 25,
          "ry": 55
        }
      }
    ]
  },
  {
    "id": "fun-39",
    "name": "Classic Violin",
    "emoji": "🎻",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#3E2723",
      "#8D6E63",
      "#5D4037",
      "#212121",
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
        "id": "body-lower-bout",
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
          "ry": 55
        }
      },
      {
        "id": "body-upper-bout",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 50,
          "ry": 40
        }
      },
      {
        "id": "c-bout-waist-l",
        "colorNumber": 3,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 230,
          "r": 20
        }
      },
      {
        "id": "c-bout-waist-r",
        "colorNumber": 3,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 230,
          "r": 20
        }
      },
      {
        "id": "fingerboard",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 70,
          "w": 12,
          "h": 120
        }
      },
      {
        "id": "scroll-pegbox",
        "colorNumber": 3,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 14
        }
      },
      {
        "id": "f-hole-left",
        "colorNumber": 4,
        "label": [
          125,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,220 Q 120,240 125,260"
        }
      },
      {
        "id": "f-hole-right",
        "colorNumber": 4,
        "label": [
          175,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,220 Q 180,240 175,260"
        }
      },
      {
        "id": "tailpiece",
        "colorNumber": 4,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,275 155,275 152,320 148,320"
        }
      },
      {
        "id": "violin-bow",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,330 L 250,70"
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
        "id": "peg-l",
        "colorNumber": 4,
        "label": [
          135,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "peg-r",
        "colorNumber": 4,
        "label": [
          165,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "chinrest",
        "colorNumber": 4,
        "label": [
          125,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 315,
          "r": 12
        }
      },
      {
        "id": "varnish-glint",
        "colorNumber": 6,
        "label": [
          140,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "chinrest-cup",
        "colorNumber": 4,
        "label": [
          125,
          315
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 315,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "fine-tuner-1",
        "colorNumber": 5,
        "label": [
          145,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 285,
          "r": 3
        }
      },
      {
        "id": "fine-tuner-2",
        "colorNumber": 5,
        "label": [
          155,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 285,
          "r": 3
        }
      },
      {
        "id": "violin-soundwave-1",
        "colorNumber": 6,
        "label": [
          55,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 180,
          "r": 14
        }
      },
      {
        "id": "violin-soundwave-2",
        "colorNumber": 6,
        "label": [
          245,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 180,
          "r": 14
        }
      },
      {
        "id": "sparkle-ex1",
        "colorNumber": 5,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-40",
    "name": "Country Banjo",
    "emoji": "🪕",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#8D6E63",
      "#ECEFF1",
      "#4E342E",
      "#FFD54F",
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
        "id": "pot-resonator-wood",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 80
        }
      },
      {
        "id": "drumhead-skin",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 65
        }
      },
      {
        "id": "banjo-neck",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 143,
          "y": 40,
          "w": 14,
          "h": 150
        }
      },
      {
        "id": "banjo-headstock",
        "colorNumber": 2,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,40 160,40 165,15 135,15"
        }
      },
      {
        "id": "5th-string-peg",
        "colorNumber": 5,
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
        "id": "bridge-wood",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 270,
          "w": 30,
          "h": 8
        }
      },
      {
        "id": "tailpiece",
        "colorNumber": 5,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,315 155,315 150,335"
        }
      },
      {
        "id": "bracket-hook-1",
        "colorNumber": 5,
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
        "id": "bracket-hook-2",
        "colorNumber": 5,
        "label": [
          225,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 260,
          "r": 6
        }
      },
      {
        "id": "music-note-country",
        "colorNumber": 5,
        "label": [
          65,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 90,
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
        "id": "tuning-peg-top-1",
        "colorNumber": 6,
        "label": [
          130,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 25,
          "r": 4
        }
      },
      {
        "id": "tuning-peg-top-2",
        "colorNumber": 6,
        "label": [
          170,
          25
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 25,
          "r": 4
        }
      },
      {
        "id": "armrest",
        "colorNumber": 3,
        "label": [
          210,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "fret-marker",
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
        "id": "bracket-shoe-1",
        "colorNumber": 4,
        "label": [
          105,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "bracket-shoe-2",
        "colorNumber": 4,
        "label": [
          195,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "armrest-rim",
        "colorNumber": 5,
        "label": [
          115,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 305,
          "w": 20,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "banjo-sound-1",
        "colorNumber": 6,
        "label": [
          60,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 180,
          "r": 12
        }
      },
      {
        "id": "banjo-sound-2",
        "colorNumber": 6,
        "label": [
          240,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 180,
          "r": 12
        }
      },
      {
        "id": "sparkle-ex1",
        "colorNumber": 5,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-41",
    "name": "Bongo Drums",
    "emoji": "🪘",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#6D4C41",
      "#FFF8E1",
      "#4E342E",
      "#FFD54F",
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
        "id": "macho-drum-shell",
        "colorNumber": 2,
        "label": [
          105,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,170 140,170 130,300 80,300"
        }
      },
      {
        "id": "macho-head",
        "colorNumber": 3,
        "label": [
          105,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 170,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "hembra-drum-shell",
        "colorNumber": 2,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "155,160 235,160 225,300 165,300"
        }
      },
      {
        "id": "hembra-head",
        "colorNumber": 3,
        "label": [
          195,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 160,
          "rx": 40,
          "ry": 20
        }
      },
      {
        "id": "center-wood-block",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 215,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "tuning-lug-l1",
        "colorNumber": 5,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 190,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "tuning-lug-l2",
        "colorNumber": 5,
        "label": [
          135,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 132,
          "y": 190,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "tuning-lug-r1",
        "colorNumber": 5,
        "label": [
          165,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 162,
          "y": 185,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "tuning-lug-r2",
        "colorNumber": 5,
        "label": [
          225,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 222,
          "y": 185,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "rhythm-wave-1",
        "colorNumber": 5,
        "label": [
          60,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 90,
          "r": 14
        }
      },
      {
        "id": "rhythm-wave-2",
        "colorNumber": 5,
        "label": [
          240,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 90,
          "r": 14
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
        "id": "bottom-ring-l",
        "colorNumber": 5,
        "label": [
          105,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 300,
          "r": 15
        }
      },
      {
        "id": "bottom-ring-r",
        "colorNumber": 5,
        "label": [
          195,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 300,
          "r": 16
        }
      },
      {
        "id": "drum-lug-1",
        "colorNumber": 4,
        "label": [
          75,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "drum-lug-2",
        "colorNumber": 4,
        "label": [
          125,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "drum-lug-3",
        "colorNumber": 4,
        "label": [
          175,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "drum-lug-4",
        "colorNumber": 4,
        "label": [
          225,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "rhythm-pulse-1",
        "colorNumber": 5,
        "label": [
          55,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 140,
          "r": 15
        }
      },
      {
        "id": "rhythm-pulse-2",
        "colorNumber": 5,
        "label": [
          245,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 140,
          "r": 15
        }
      },
      {
        "id": "sparkle-ex1",
        "colorNumber": 6,
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
      }
    ]
  },
  {
    "id": "fun-42",
    "name": "Carousel Steed",
    "emoji": "🎠",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#FFFFFF",
      "#FFD54F",
      "#EC407A",
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
        "id": "brass-spiral-pole",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 20,
          "w": 12,
          "h": 360
        }
      },
      {
        "id": "pole-finial-top",
        "colorNumber": 3,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 15
        }
      },
      {
        "id": "steed-barrel",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 230,
          "rx": 65,
          "ry": 40
        }
      },
      {
        "id": "steed-neck-head",
        "colorNumber": 2,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 L 105,140 Q 80,140 85,165 L 115,220"
        }
      },
      {
        "id": "steed-saddle",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 25,
          "ry": 14
        }
      },
      {
        "id": "bridle-rosette",
        "colorNumber": 5,
        "label": [
          100,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 155,
          "r": 8
        }
      },
      {
        "id": "flowing-mane",
        "colorNumber": 3,
        "label": [
          125,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,130 Q 140,150 135,190"
        }
      },
      {
        "id": "flowing-tail",
        "colorNumber": 3,
        "label": [
          210,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,210 Q 245,230 235,270"
        }
      },
      {
        "id": "stirrup-iron",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "carnival-canopy-arch",
        "colorNumber": 4,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,70 150,30 250,70"
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
      },
      {
        "id": "canopy-light-1",
        "colorNumber": 3,
        "label": [
          80,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 70,
          "r": 6
        }
      },
      {
        "id": "canopy-light-2",
        "colorNumber": 3,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 6
        }
      },
      {
        "id": "canopy-light-3",
        "colorNumber": 3,
        "label": [
          220,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 70,
          "r": 6
        }
      },
      {
        "id": "steed-hoof-f",
        "colorNumber": 3,
        "label": [
          70,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "canopy-fringe-1",
        "colorNumber": 3,
        "label": [
          85,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "canopy-fringe-2",
        "colorNumber": 3,
        "label": [
          215,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "hoof-sparkle-1",
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
        "id": "hoof-sparkle-2",
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
        "id": "steed-star-1",
        "colorNumber": 4,
        "label": [
          50,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 130,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-43",
    "name": "Synthesizer Keyboard",
    "emoji": "🎛️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#37474F",
      "#00E5FF",
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
        "id": "synth-chassis",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 120,
          "w": 210,
          "h": 160,
          "rx": 8
        }
      },
      {
        "id": "lcd-display",
        "colorNumber": 3,
        "label": [
          100,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 140,
          "w": 70,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "slider-knob-1",
        "colorNumber": 4,
        "label": [
          160,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "slider-knob-2",
        "colorNumber": 4,
        "label": [
          180,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "slider-knob-3",
        "colorNumber": 4,
        "label": [
          200,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "slider-knob-4",
        "colorNumber": 4,
        "label": [
          220,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "keyboard-section",
        "colorNumber": 6,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 200,
          "w": 180,
          "h": 65,
          "rx": 4
        }
      },
      {
        "id": "black-key-s1",
        "colorNumber": 1,
        "label": [
          85,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "black-key-s2",
        "colorNumber": 1,
        "label": [
          105,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "black-key-s3",
        "colorNumber": 1,
        "label": [
          135,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "black-key-s4",
        "colorNumber": 1,
        "label": [
          155,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "black-key-s5",
        "colorNumber": 1,
        "label": [
          175,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "black-key-s6",
        "colorNumber": 1,
        "label": [
          205,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 200,
          "w": 10,
          "h": 35
        }
      },
      {
        "id": "pitch-bend-wheel",
        "colorNumber": 5,
        "label": [
          55,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "mod-wheel",
        "colorNumber": 5,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 230,
          "r": 6
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "vu-meter-green",
        "colorNumber": 3,
        "label": [
          100,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "audio-jack",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 8
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-44",
    "name": "Magician Rabbit",
    "emoji": "🎩",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#212121",
      "#FFFFFF",
      "#D32F2F",
      "#FFD54F",
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
        "id": "hat-brim-silk",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 95,
          "ry": 25
        }
      },
      {
        "id": "hat-body-cylinder",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 250,
          "w": 130,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "hat-ribbon-red",
        "colorNumber": 4,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 262,
          "w": 130,
          "h": 16
        }
      },
      {
        "id": "bunny-head",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 40
        }
      },
      {
        "id": "bunny-ear-l",
        "colorNumber": 3,
        "label": [
          125,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 110,
          "rx": 14,
          "ry": 45
        }
      },
      {
        "id": "bunny-ear-r",
        "colorNumber": 3,
        "label": [
          175,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 110,
          "rx": 14,
          "ry": 45
        }
      },
      {
        "id": "bunny-inner-ear-l",
        "colorNumber": 4,
        "label": [
          125,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 110,
          "rx": 6,
          "ry": 30
        }
      },
      {
        "id": "bunny-inner-ear-r",
        "colorNumber": 4,
        "label": [
          175,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 110,
          "rx": 6,
          "ry": 30
        }
      },
      {
        "id": "bunny-eye-l",
        "colorNumber": 4,
        "label": [
          135,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "bunny-eye-r",
        "colorNumber": 4,
        "label": [
          165,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "bunny-nose",
        "colorNumber": 4,
        "label": [
          150,
          198
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 198,
          "r": 4
        }
      },
      {
        "id": "magic-wand",
        "colorNumber": 2,
        "label": [
          220,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,200 L 260,110"
        }
      },
      {
        "id": "wand-white-tip",
        "colorNumber": 3,
        "label": [
          260,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "magic-sparkle-1",
        "colorNumber": 5,
        "label": [
          250,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "magic-sparkle-2",
        "colorNumber": 6,
        "label": [
          275,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 110,
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
        "id": "playing-card-ace",
        "colorNumber": 3,
        "label": [
          60,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "playing-card-heart",
        "colorNumber": 4,
        "label": [
          60,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-45",
    "name": "Carnival Clown",
    "emoji": "🤡",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFFDE7",
      "#FFFFFF",
      "#D50000",
      "#00E5FF",
      "#FFEB3B",
      "#E91E63"
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
        "id": "clown-face",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 60
        }
      },
      {
        "id": "party-hat",
        "colorNumber": 4,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,130 185,130 150,40"
        }
      },
      {
        "id": "hat-pompom",
        "colorNumber": 3,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 12
        }
      },
      {
        "id": "red-nose",
        "colorNumber": 3,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 16
        }
      },
      {
        "id": "eye-paint-l",
        "colorNumber": 4,
        "label": [
          120,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 165,
          "rx": 12,
          "ry": 20
        }
      },
      {
        "id": "eye-paint-r",
        "colorNumber": 4,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 165,
          "rx": 12,
          "ry": 20
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 3,
        "label": [
          120,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 165,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 3,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 165,
          "r": 5
        }
      },
      {
        "id": "big-clown-smile",
        "colorNumber": 3,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,195 Q 150,255 195,195 Q 150,225 105,195 Z"
        }
      },
      {
        "id": "curly-wig-l",
        "colorNumber": 5,
        "label": [
          85,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 180,
          "r": 22
        }
      },
      {
        "id": "curly-wig-r",
        "colorNumber": 5,
        "label": [
          215,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 180,
          "r": 22
        }
      },
      {
        "id": "ruffled-collar-1",
        "colorNumber": 6,
        "label": [
          110,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 270,
          "r": 18
        }
      },
      {
        "id": "ruffled-collar-2",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 275,
          "r": 18
        }
      },
      {
        "id": "ruffled-collar-3",
        "colorNumber": 6,
        "label": [
          190,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 270,
          "r": 18
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "balloon-bunch-1",
        "colorNumber": 3,
        "label": [
          45,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 330,
          "r": 16
        }
      },
      {
        "id": "balloon-bunch-2",
        "colorNumber": 4,
        "label": [
          255,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 330,
          "r": 16
        }
      },
      {
        "id": "ruff-collar-l",
        "colorNumber": 4,
        "label": [
          105,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 320,
          "r": 15
        }
      },
      {
        "id": "ruff-collar-r",
        "colorNumber": 4,
        "label": [
          195,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 320,
          "r": 15
        }
      },
      {
        "id": "confetti-ex1",
        "colorNumber": 5,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 7
        }
      },
      {
        "id": "confetti-ex2",
        "colorNumber": 6,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-46",
    "name": "Grand Champion Cup",
    "emoji": "👑",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#FFD54F",
      "#D50000",
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
        "id": "crown-velvet-cap",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 80
        }
      },
      {
        "id": "crown-gold-arch-l",
        "colorNumber": 2,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,220 Q 80,120 150,110"
        }
      },
      {
        "id": "crown-gold-arch-r",
        "colorNumber": 2,
        "label": [
          190,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,220 Q 220,120 150,110"
        }
      },
      {
        "id": "ermine-fur-band",
        "colorNumber": 4,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 215,
          "w": 170,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "ermine-spot-1",
        "colorNumber": 1,
        "label": [
          85,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "ermine-spot-2",
        "colorNumber": 1,
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
        "id": "ermine-spot-3",
        "colorNumber": 1,
        "label": [
          175,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "ermine-spot-4",
        "colorNumber": 1,
        "label": [
          215,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "cross-patee-top",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,110 155,110 155,95 165,95 165,85 155,85 155,75 145,75 145,85 135,85 135,95 145,95"
        }
      },
      {
        "id": "ruby-gem-1",
        "colorNumber": 3,
        "label": [
          105,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "sapphire-gem-2",
        "colorNumber": 5,
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
        "id": "ruby-gem-3",
        "colorNumber": 3,
        "label": [
          195,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "cushion-pillow",
        "colorNumber": 5,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 80
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
        "id": "tassel-gold-l",
        "colorNumber": 2,
        "label": [
          75,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 340,
          "r": 10
        }
      },
      {
        "id": "tassel-gold-r",
        "colorNumber": 2,
        "label": [
          225,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 340,
          "r": 10
        }
      },
      {
        "id": "star-badge-center",
        "colorNumber": 5,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 12
        }
      },
      {
        "id": "star-badge-core",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "trophy-laurel-l",
        "colorNumber": 4,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 230,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "trophy-laurel-r",
        "colorNumber": 4,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 230,
          "rx": 14,
          "ry": 8
        }
      }
    ]
  },
  {
    "id": "fun-47",
    "name": "Lucky Horseshoe",
    "emoji": "🧲",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#FFD54F",
      "#4CAF50",
      "#2E7D32",
      "#FFFFFF",
      "#78909C"
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
        "id": "lucky-halo",
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
        "id": "horseshoe-outer",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,120 C 70,220 70,270 150,270 C 230,270 230,220 210,120 L 175,120 C 190,195 190,230 150,230 C 110,230 110,195 125,120 Z"
        }
      },
      {
        "id": "nail-hole-1",
        "colorNumber": 6,
        "label": [
          98,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 98,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "nail-hole-2",
        "colorNumber": 6,
        "label": [
          95,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "nail-hole-3",
        "colorNumber": 6,
        "label": [
          105,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "nail-hole-4",
        "colorNumber": 6,
        "label": [
          150,
          252
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 252,
          "r": 5
        }
      },
      {
        "id": "nail-hole-5",
        "colorNumber": 6,
        "label": [
          195,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "nail-hole-6",
        "colorNumber": 6,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "nail-hole-7",
        "colorNumber": 6,
        "label": [
          202,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 202,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "clover-leaf-1",
        "colorNumber": 4,
        "label": [
          135,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "clover-leaf-2",
        "colorNumber": 4,
        "label": [
          165,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "clover-leaf-3",
        "colorNumber": 4,
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
        "id": "clover-leaf-4",
        "colorNumber": 4,
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
        "id": "pot-of-gold",
        "colorNumber": 2,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 340,
          "r": 30
        }
      },
      {
        "id": "gold-coin-spill",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 15
        }
      },
      {
        "id": "clover-petal-1",
        "colorNumber": 4,
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
        "id": "clover-petal-2",
        "colorNumber": 4,
        "label": [
          135,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "clover-petal-3",
        "colorNumber": 4,
        "label": [
          165,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "clover-stem",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 205,
          "w": 4,
          "h": 25
        }
      }
    ]
  },
  {
    "id": "fun-48",
    "name": "Marionette Stage",
    "emoji": "🎪",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#212121",
      "#D32F2F",
      "#FFD54F",
      "#8D6E63",
      "#FFFFFF",
      "#0288D1"
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
        "id": "stage-frame",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 70,
          "w": 220,
          "h": 250,
          "rx": 8
        }
      },
      {
        "id": "stage-curtain-l",
        "colorNumber": 2,
        "label": [
          80,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,75 115,75 90,260 45,260"
        }
      },
      {
        "id": "stage-curtain-r",
        "colorNumber": 2,
        "label": [
          220,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,75 255,75 255,260 210,260"
        }
      },
      {
        "id": "curtain-valance",
        "colorNumber": 2,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 75,
          "w": 210,
          "h": 40
        }
      },
      {
        "id": "stage-floor",
        "colorNumber": 4,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 275,
          "w": 210,
          "h": 45
        }
      },
      {
        "id": "puppet-head",
        "colorNumber": 5,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 18
        }
      },
      {
        "id": "puppet-torso",
        "colorNumber": 6,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 200,
          "w": 20,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "string-l",
        "colorNumber": 5,
        "label": [
          130,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,100 L 140,180"
        }
      },
      {
        "id": "string-r",
        "colorNumber": 5,
        "label": [
          170,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,100 L 160,180"
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "footlight-1",
        "colorNumber": 3,
        "label": [
          80,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 305,
          "r": 6
        }
      },
      {
        "id": "footlight-2",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
          "r": 6
        }
      },
      {
        "id": "footlight-3",
        "colorNumber": 3,
        "label": [
          220,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 305,
          "r": 6
        }
      },
      {
        "id": "mask-crest",
        "colorNumber": 3,
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
        "id": "puppet-head-glow",
        "colorNumber": 3,
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
        "id": "stage-curtain-tie-l",
        "colorNumber": 4,
        "label": [
          40,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "stage-curtain-tie-r",
        "colorNumber": 4,
        "label": [
          260,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 220,
          "r": 8
        }
      },
      {
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      },
      {
        "id": "sparkle-fun-ex-2",
        "colorNumber": 4,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 170,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "fun-49",
    "name": "Fantasy Board Game",
    "emoji": "🗺️",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#8D6E63",
      "#FFD54F",
      "#4CAF50",
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
        "id": "game-board",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 80,
          "w": 210,
          "h": 240,
          "rx": 12
        }
      },
      {
        "id": "quest-path",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,280 Q 150,300 130,220 Q 110,140 180,140 Q 230,140 220,260"
        }
      },
      {
        "id": "start-castle",
        "colorNumber": 4,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 280,
          "r": 16
        }
      },
      {
        "id": "treasure-chest-goal",
        "colorNumber": 3,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "dragon-lair-hazard",
        "colorNumber": 5,
        "label": [
          130,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 220,
          "r": 14
        }
      },
      {
        "id": "meeple-player-1",
        "colorNumber": 5,
        "label": [
          100,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "meeple-player-2",
        "colorNumber": 4,
        "label": [
          155,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "card-deck",
        "colorNumber": 1,
        "label": [
          80,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 120,
          "r": 15
        }
      },
      {
        "id": "dice-20-sided",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "gold-token-1",
        "colorNumber": 3,
        "label": [
          100,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 350,
          "r": 10
        }
      },
      {
        "id": "gold-token-2",
        "colorNumber": 3,
        "label": [
          200,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 350,
          "r": 10
        }
      },
      {
        "id": "quest-marker-1",
        "colorNumber": 4,
        "label": [
          90,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "quest-marker-2",
        "colorNumber": 5,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 140,
          "r": 10
        }
      },
      {
        "id": "quest-marker-3",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "compass-rose-c",
        "colorNumber": 5,
        "label": [
          230,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 270,
          "r": 16
        }
      },
      {
        "id": "compass-pin",
        "colorNumber": 4,
        "label": [
          230,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "dice-pawn-1",
        "colorNumber": 2,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "dice-pawn-2",
        "colorNumber": 3,
        "label": [
          110,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "sea-monster-spark",
        "colorNumber": 5,
        "label": [
          55,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 180,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "fun-50",
    "name": "Disco Mirror Ball",
    "emoji": "🪩",
    "category": "fun",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#ECEFF1",
      "#00E5FF",
      "#E040FB",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "nightclub-sky",
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
        "id": "hanging-chain",
        "colorNumber": 2,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 0,
          "w": 4,
          "h": 100
        }
      },
      {
        "id": "disco-sphere",
        "colorNumber": 2,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 75
        }
      },
      {
        "id": "mirror-facet-1",
        "colorNumber": 3,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 140,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "mirror-facet-2",
        "colorNumber": 4,
        "label": [
          160,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 140,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "mirror-facet-3",
        "colorNumber": 5,
        "label": [
          130,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 170,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "mirror-facet-4",
        "colorNumber": 6,
        "label": [
          160,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 170,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "light-beam-1",
        "colorNumber": 3,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,170 0,260 0,380"
        }
      },
      {
        "id": "light-beam-2",
        "colorNumber": 4,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,170 300,260 300,380"
        }
      },
      {
        "id": "dance-floor",
        "colorNumber": 1,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 370,
          "r": 110
        }
      },
      {
        "id": "sparkle-beam-1",
        "colorNumber": 5,
        "label": [
          60,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 100,
          "r": 12
        }
      },
      {
        "id": "sparkle-beam-2",
        "colorNumber": 4,
        "label": [
          240,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 100,
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
        "id": "spark-1",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
        "id": "glitter-speck-1",
        "colorNumber": 6,
        "label": [
          100,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "glitter-speck-2",
        "colorNumber": 6,
        "label": [
          200,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 270,
          "r": 8
        }
      },
      {
        "id": "light-beam-3",
        "colorNumber": 5,
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
        "id": "light-beam-4",
        "colorNumber": 5,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 260,
          "r": 16
        }
      },
      {
        "id": "floor-glow",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 360,
          "rx": 80,
          "ry": 20
        }
      },
      {
        "id": "sparkle-ex1",
        "colorNumber": 4,
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
        "id": "sparkle-fun-ex-1",
        "colorNumber": 3,
        "label": [
          65,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 105,
          "r": 6
        }
      }
    ]
  }
];
