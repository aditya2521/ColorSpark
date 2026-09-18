import { ImageTemplate } from '../../types';

// Category: food (bespoke unique templates, no filler regions)
export const FOOD_TEMPLATES: ImageTemplate[] = [
  {
    "id": "apple",
    "name": "Red Apple",
    "emoji": "🍎",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EBF4FF",
      "#E63232",
      "#C71D1D",
      "#FF6B6B",
      "#8B5E3C",
      "#4CAF50",
      "#2E7D32",
      "#FFF9C4",
      "#D7CCC8",
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
        "id": "ground-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 80,
          "ry": 16
        }
      },
      {
        "id": "apple-body",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 105,110 50,140 45,210 C 40,280 75,345 120,352 C 138,355 146,346 150,346 C 154,346 162,355 180,352 C 225,345 260,280 255,210 C 250,140 195,110 150,110 Z"
        }
      },
      {
        "id": "apple-shadow-r",
        "colorNumber": 3,
        "label": [
          220,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 185,110 245,140 255,210 C 260,280 225,345 180,352 C 165,354 156,348 150,346 C 180,340 230,290 225,220 C 220,160 180,120 150,110 Z"
        }
      },
      {
        "id": "apple-highlight",
        "colorNumber": 4,
        "label": [
          90,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,140 C 70,165 65,210 70,260 C 65,220 70,175 95,140 Z"
        }
      },
      {
        "id": "apple-indent-top",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,112 C 142,128 158,128 170,112 C 160,118 140,118 130,112 Z"
        }
      },
      {
        "id": "stem",
        "colorNumber": 5,
        "label": [
          158,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 148,115 C 145,85 155,55 175,40 C 172,55 160,85 153,115 Z"
        }
      },
      {
        "id": "leaf",
        "colorNumber": 6,
        "label": [
          210,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,75 C 185,50 230,55 240,75 C 230,95 185,100 165,75 Z"
        }
      },
      {
        "id": "leaf-vein",
        "colorNumber": 7,
        "label": [
          205,
          78
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,75 Q 200,75 238,75"
        }
      },
      {
        "id": "shine-dot-1",
        "colorNumber": 10,
        "label": [
          105,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 175,
          "rx": 12,
          "ry": 22
        }
      },
      {
        "id": "shine-dot-2",
        "colorNumber": 10,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 220,
          "r": 7
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
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
        "id": "sparkle-3",
        "colorNumber": 8,
        "label": [
          50,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 310,
          "r": 7
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "icecream",
    "name": "Ice Cream Cone",
    "emoji": "🍦",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#D4A373",
      "#BC6C25",
      "#FFB5A7",
      "#FCD5CE",
      "#B5E2FA",
      "#E63946",
      "#8B5E3C",
      "#FFE66D",
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
        "id": "cone-body",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,220 210,220 150,380"
        }
      },
      {
        "id": "cone-pattern-1",
        "colorNumber": 3,
        "label": [
          125,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,240 L 195,300"
        }
      },
      {
        "id": "cone-pattern-2",
        "colorNumber": 3,
        "label": [
          135,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,280 L 180,320"
        }
      },
      {
        "id": "cone-pattern-3",
        "colorNumber": 3,
        "label": [
          170,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,240 L 105,300"
        }
      },
      {
        "id": "cone-pattern-4",
        "colorNumber": 3,
        "label": [
          160,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,280 L 120,320"
        }
      },
      {
        "id": "scoop-bottom",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,220 C 75,200 90,180 110,180 C 120,180 130,190 150,190 C 170,190 180,180 190,180 C 210,180 225,200 220,220 C 210,230 190,230 175,225 C 160,230 140,230 125,225 C 110,230 90,230 80,220 Z"
        }
      },
      {
        "id": "scoop-middle",
        "colorNumber": 5,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,180 C 75,140 110,110 150,110 C 190,110 225,140 215,180 C 190,185 170,175 150,180 C 130,175 110,185 85,180 Z"
        }
      },
      {
        "id": "scoop-top-swirl",
        "colorNumber": 6,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,120 C 110,80 140,45 150,45 C 160,45 190,80 185,120 C 170,115 130,115 115,120 Z"
        }
      },
      {
        "id": "cherry",
        "colorNumber": 7,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 16
        }
      },
      {
        "id": "cherry-stem",
        "colorNumber": 8,
        "label": [
          165,
          18
        ],
        "shape": {
          "kind": "path",
          "d": "M 152,25 C 158,10 175,5 185,12"
        }
      },
      {
        "id": "sprinkle-1",
        "colorNumber": 7,
        "label": [
          115,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 140,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-2",
        "colorNumber": 9,
        "label": [
          175,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 140,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-3",
        "colorNumber": 7,
        "label": [
          145,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 125,
          "w": 6,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-4",
        "colorNumber": 9,
        "label": [
          130,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 190,
          "w": 12,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-5",
        "colorNumber": 7,
        "label": [
          170,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 190,
          "w": 12,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "star-1",
        "colorNumber": 9,
        "label": [
          50,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 90,
          "r": 10
        }
      },
      {
        "id": "star-2",
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
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "cupcake",
    "name": "Yummy Cupcake",
    "emoji": "🧁",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#8D6E63",
      "#D7CCC8",
      "#FF80AB",
      "#FF4081",
      "#F8BBD0",
      "#E63946",
      "#4CAF50",
      "#FFD54F",
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
        "id": "cupcake-shadow",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 85,
          "ry": 15
        }
      },
      {
        "id": "wrapper-base",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,220 225,220 195,360 105,360"
        }
      },
      {
        "id": "wrapper-fold-1",
        "colorNumber": 3,
        "label": [
          112,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,220 105,220 120,360 105,360"
        }
      },
      {
        "id": "wrapper-fold-2",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,220 165,220 158,360 142,360"
        }
      },
      {
        "id": "wrapper-fold-3",
        "colorNumber": 3,
        "label": [
          188,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "195,220 225,220 195,360 180,360"
        }
      },
      {
        "id": "frosting-bottom",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,220 C 55,185 85,175 105,180 C 115,165 140,165 150,175 C 160,165 185,165 195,180 C 215,175 245,185 240,220 C 220,235 80,235 60,220 Z"
        }
      },
      {
        "id": "frosting-mid",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,180 C 75,140 115,125 135,135 C 145,120 165,120 175,135 C 195,125 225,140 220,180 C 190,170 110,170 80,180 Z"
        }
      },
      {
        "id": "frosting-swirl-top",
        "colorNumber": 6,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,135 C 105,95 135,65 150,65 C 165,65 195,95 190,135 C 170,125 130,125 110,135 Z"
        }
      },
      {
        "id": "cherry",
        "colorNumber": 7,
        "label": [
          150,
          52
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 52,
          "r": 16
        }
      },
      {
        "id": "cherry-stem",
        "colorNumber": 8,
        "label": [
          168,
          30
        ],
        "shape": {
          "kind": "path",
          "d": "M 153,42 C 162,25 180,20 190,26"
        }
      },
      {
        "id": "sprinkle-1",
        "colorNumber": 9,
        "label": [
          105,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 190,
          "w": 12,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-2",
        "colorNumber": 10,
        "label": [
          190,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 190,
          "w": 12,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-3",
        "colorNumber": 9,
        "label": [
          130,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 140,
          "w": 6,
          "h": 12,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-4",
        "colorNumber": 10,
        "label": [
          170,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 140,
          "w": 6,
          "h": 12,
          "rx": 3
        }
      },
      {
        "id": "sparkle-l",
        "colorNumber": 9,
        "label": [
          45,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "sparkle-r",
        "colorNumber": 9,
        "label": [
          255,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 11,
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
        "id": "food-spark-2",
        "colorNumber": 11,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "lollipop",
    "name": "Lollipop",
    "emoji": "🍭",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F3E5F5",
      "#FFFFFF",
      "#E91E63",
      "#00BCD4",
      "#FFEB3B",
      "#9C27B0",
      "#4CAF50",
      "#FF9800",
      "#B0BEC5"
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
        "id": "stick",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 170,
          "w": 12,
          "h": 200,
          "rx": 6
        }
      },
      {
        "id": "candy-outer-ring",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 95
        }
      },
      {
        "id": "swirl-segment-1",
        "colorNumber": 4,
        "label": [
          190,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 150,35 A 95,95 0 0,1 230,85 Z"
        }
      },
      {
        "id": "swirl-segment-2",
        "colorNumber": 5,
        "label": [
          230,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 230,85 A 95,95 0 0,1 235,180 Z"
        }
      },
      {
        "id": "swirl-segment-3",
        "colorNumber": 6,
        "label": [
          195,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 235,180 A 95,95 0 0,1 150,225 Z"
        }
      },
      {
        "id": "swirl-segment-4",
        "colorNumber": 7,
        "label": [
          105,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 150,225 A 95,95 0 0,1 65,180 Z"
        }
      },
      {
        "id": "swirl-segment-5",
        "colorNumber": 8,
        "label": [
          70,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 65,180 A 95,95 0 0,1 70,85 Z"
        }
      },
      {
        "id": "swirl-segment-6",
        "colorNumber": 4,
        "label": [
          110,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,130 L 70,85 A 95,95 0 0,1 150,35 Z"
        }
      },
      {
        "id": "swirl-center",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 25
        }
      },
      {
        "id": "candy-core-dot",
        "colorNumber": 3,
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
        "id": "bow-left",
        "colorNumber": 3,
        "label": [
          120,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,230 C 115,215 105,245 145,245 Z"
        }
      },
      {
        "id": "bow-right",
        "colorNumber": 3,
        "label": [
          180,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,230 C 185,215 195,245 155,245 Z"
        }
      },
      {
        "id": "bow-knot",
        "colorNumber": 5,
        "label": [
          150,
          238
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 238,
          "r": 8
        }
      },
      {
        "id": "candy-shine",
        "colorNumber": 2,
        "label": [
          105,
          85
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 85,
          "rx": 20,
          "ry": 10
        }
      },
      {
        "id": "star-top-left",
        "colorNumber": 5,
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
        "id": "star-top-right",
        "colorNumber": 5,
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "pizzaslice",
    "name": "Pizza Slice",
    "emoji": "🍕",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D7A15C",
      "#FFA000",
      "#FFD54F",
      "#D32F2F",
      "#388E3C",
      "#3E2723",
      "#8D6E63",
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
        "id": "crust-top",
        "colorNumber": 2,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 85,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "cheese-slice",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,85 250,85 150,360"
        }
      },
      {
        "id": "cheese-pull-edge",
        "colorNumber": 4,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,320 Q 150,370 160,320 Z"
        }
      },
      {
        "id": "sauce-layer",
        "colorNumber": 5,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,90 Q 150,110 245,90 L 235,115 Q 150,130 65,115 Z"
        }
      },
      {
        "id": "pepperoni-1",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 22
        }
      },
      {
        "id": "pepperoni-2",
        "colorNumber": 5,
        "label": [
          110,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 225,
          "r": 20
        }
      },
      {
        "id": "pepperoni-3",
        "colorNumber": 5,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 235,
          "r": 19
        }
      },
      {
        "id": "pepperoni-4",
        "colorNumber": 5,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 16
        }
      },
      {
        "id": "olive-1",
        "colorNumber": 7,
        "label": [
          160,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 195,
          "r": 10
        }
      },
      {
        "id": "olive-hole-1",
        "colorNumber": 4,
        "label": [
          160,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "olive-2",
        "colorNumber": 7,
        "label": [
          135,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 260,
          "r": 9
        }
      },
      {
        "id": "olive-hole-2",
        "colorNumber": 4,
        "label": [
          135,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "pepper-strip-1",
        "colorNumber": 6,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 135,
          "w": 24,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "pepper-strip-2",
        "colorNumber": 6,
        "label": [
          185,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 150,
          "w": 22,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "basil-leaf",
        "colorNumber": 6,
        "label": [
          135,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,200 C 135,190 150,200 145,215 C 135,215 125,210 125,200 Z"
        }
      },
      {
        "id": "mushroom-cap",
        "colorNumber": 8,
        "label": [
          170,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 280,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "mushroom-stem",
        "colorNumber": 8,
        "label": [
          170,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 167,
          "y": 286,
          "w": 6,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          50,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
      }
    ]
  },
  {
    "id": "watermelon",
    "name": "Watermelon Slice",
    "emoji": "🍉",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#2E7D32",
      "#81C784",
      "#C8E6C9",
      "#FF5252",
      "#D50000",
      "#212121",
      "#FFFFFF",
      "#B2EBF2"
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
        "id": "rind-dark-green",
        "colorNumber": 2,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,170 C 40,320 260,320 270,170 L 255,160 C 245,295 55,295 45,160 Z"
        }
      },
      {
        "id": "rind-light-green",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,160 C 55,295 245,295 255,160 L 245,155 C 235,275 65,275 55,155 Z"
        }
      },
      {
        "id": "rind-white-pith",
        "colorNumber": 4,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,155 C 65,275 235,275 245,155 L 238,150 C 228,260 72,260 62,150 Z"
        }
      },
      {
        "id": "red-flesh",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 62,150 C 72,260 228,260 238,150 L 150,85 Z"
        }
      },
      {
        "id": "flesh-core-shadow",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,110 L 150,85 L 180,110 Q 150,140 120,110 Z"
        }
      },
      {
        "id": "seed-1",
        "colorNumber": 7,
        "label": [
          110,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 185,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "seed-2",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "seed-3",
        "colorNumber": 7,
        "label": [
          190,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 185,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "seed-4",
        "colorNumber": 7,
        "label": [
          130,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 220,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "seed-5",
        "colorNumber": 7,
        "label": [
          170,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 220,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "seed-6",
        "colorNumber": 7,
        "label": [
          150,
          248
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 248,
          "rx": 6,
          "ry": 12
        }
      },
      {
        "id": "water-drop-1",
        "colorNumber": 5,
        "label": [
          100,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "water-drop-2",
        "colorNumber": 5,
        "label": [
          200,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "sun-accent",
        "colorNumber": 8,
        "label": [
          50,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 70,
          "r": 10
        }
      },
      {
        "id": "sun-accent-2",
        "colorNumber": 8,
        "label": [
          250,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 70,
          "r": 10
        }
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "donut",
    "name": "Donut",
    "emoji": "🍩",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#D4A373",
      "#BC6C25",
      "#FF80AB",
      "#00E5FF",
      "#FFEB3B",
      "#76FF03",
      "#FFFFFF",
      "#E0E0E0"
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
        "id": "donut-shadow",
        "colorNumber": 9,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 100,
          "ry": 20
        }
      },
      {
        "id": "dough-base",
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
        "id": "frosting-layer",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,90 C 205,90 255,135 255,190 C 255,225 240,240 225,230 C 210,220 200,245 185,250 C 170,255 160,235 150,240 C 135,245 125,260 110,250 C 95,240 85,255 70,245 C 50,230 45,210 45,190 C 45,135 95,90 150,90 Z"
        }
      },
      {
        "id": "donut-hole",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 42
        }
      },
      {
        "id": "hole-shadow",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 38
        }
      },
      {
        "id": "sprinkle-1",
        "colorNumber": 5,
        "label": [
          105,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 132,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-2",
        "colorNumber": 6,
        "label": [
          185,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 132,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-3",
        "colorNumber": 7,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 143,
          "y": 112,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-4",
        "colorNumber": 5,
        "label": [
          80,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 180,
          "w": 6,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-5",
        "colorNumber": 6,
        "label": [
          220,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 180,
          "w": 6,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-6",
        "colorNumber": 7,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 227,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "sprinkle-7",
        "colorNumber": 5,
        "label": [
          185,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 227,
          "w": 14,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "icing-glaze-shine",
        "colorNumber": 8,
        "label": [
          120,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,105 C 120,95 145,95 165,100 C 145,105 120,105 100,105 Z"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "taco",
    "name": "Taco",
    "emoji": "🌮",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FBC02D",
      "#F57F17",
      "#6D4C41",
      "#4CAF50",
      "#FF5252",
      "#FFF9C4",
      "#E0E0E0"
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
        "id": "taco-shadow",
        "colorNumber": 8,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "taco-shell-back",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,240 C 40,110 260,110 260,240 Z"
        }
      },
      {
        "id": "meat-filling",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,230 C 80,160 220,160 240,230 Z"
        }
      },
      {
        "id": "lettuce-layer",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,220 C 70,180 100,195 120,185 C 140,175 160,195 180,185 C 200,175 230,190 245,220 Z"
        }
      },
      {
        "id": "tomato-chunk-1",
        "colorNumber": 6,
        "label": [
          100,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 195,
          "r": 12
        }
      },
      {
        "id": "tomato-chunk-2",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 14
        }
      },
      {
        "id": "tomato-chunk-3",
        "colorNumber": 6,
        "label": [
          200,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 195,
          "r": 12
        }
      },
      {
        "id": "cheese-shred-1",
        "colorNumber": 7,
        "label": [
          125,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 186,
          "w": 16,
          "h": 5,
          "rx": 2
        }
      },
      {
        "id": "cheese-shred-2",
        "colorNumber": 7,
        "label": [
          175,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 186,
          "w": 16,
          "h": 5,
          "rx": 2
        }
      },
      {
        "id": "cheese-shred-3",
        "colorNumber": 7,
        "label": [
          145,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 206,
          "w": 16,
          "h": 5,
          "rx": 2
        }
      },
      {
        "id": "taco-shell-front",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,240 C 40,330 260,330 265,240 C 235,300 65,300 35,240 Z"
        }
      },
      {
        "id": "taco-dot-1",
        "colorNumber": 3,
        "label": [
          100,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "taco-dot-2",
        "colorNumber": 3,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 285,
          "r": 6
        }
      },
      {
        "id": "taco-dot-3",
        "colorNumber": 3,
        "label": [
          200,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
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
        "id": "sparkle-2",
        "colorNumber": 2,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "pineapple",
    "name": "Pineapple",
    "emoji": "🍍",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#FBC02D",
      "#F57F17",
      "#E65100",
      "#2E7D32",
      "#4CAF50",
      "#81C784",
      "#FFF59D",
      "#D7CCC8"
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
        "id": "pineapple-shadow",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 75,
          "ry": 15
        }
      },
      {
        "id": "crown-leaf-center",
        "colorNumber": 5,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,160 C 135,100 135,40 150,30 C 165,40 165,100 150,160 Z"
        }
      },
      {
        "id": "crown-leaf-left1",
        "colorNumber": 6,
        "label": [
          110,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,160 C 110,120 85,75 75,65 C 100,85 130,125 140,160 Z"
        }
      },
      {
        "id": "crown-leaf-right1",
        "colorNumber": 6,
        "label": [
          190,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,160 C 190,120 215,75 225,65 C 200,85 170,125 160,160 Z"
        }
      },
      {
        "id": "crown-leaf-left2",
        "colorNumber": 7,
        "label": [
          100,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,165 C 100,140 65,115 50,110 C 85,130 120,155 140,165 Z"
        }
      },
      {
        "id": "crown-leaf-right2",
        "colorNumber": 7,
        "label": [
          200,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 160,165 C 200,140 235,115 250,110 C 215,130 180,155 160,165 Z"
        }
      },
      {
        "id": "fruit-body",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 75,
          "ry": 100
        }
      },
      {
        "id": "scale-c1",
        "colorNumber": 3,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,190 170,210 150,230 130,210"
        }
      },
      {
        "id": "scale-c2",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,240 170,260 150,280 130,260"
        }
      },
      {
        "id": "scale-c3",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,290 170,310 150,330 130,310"
        }
      },
      {
        "id": "scale-l1",
        "colorNumber": 4,
        "label": [
          115,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,215 135,235 115,255 95,235"
        }
      },
      {
        "id": "scale-r1",
        "colorNumber": 4,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,215 205,235 185,255 165,235"
        }
      },
      {
        "id": "scale-l2",
        "colorNumber": 3,
        "label": [
          115,
          285
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,265 135,285 115,305 95,285"
        }
      },
      {
        "id": "scale-r2",
        "colorNumber": 3,
        "label": [
          185,
          285
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,265 205,285 185,305 165,285"
        }
      },
      {
        "id": "scale-dot-1",
        "colorNumber": 8,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 5
        }
      },
      {
        "id": "scale-dot-2",
        "colorNumber": 8,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "scale-dot-3",
        "colorNumber": 8,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 5
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
      }
    ]
  },
  {
    "id": "strawberry",
    "name": "Strawberry",
    "emoji": "🍓",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#E53935",
      "#C62828",
      "#FF5252",
      "#2E7D32",
      "#4CAF50",
      "#81C784",
      "#FFF59D",
      "#D7CCC8"
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
        "id": "berry-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 70,
          "ry": 15
        }
      },
      {
        "id": "berry-body",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 C 80,120 50,170 60,240 C 70,300 120,350 150,355 C 180,350 230,300 240,240 C 250,170 220,120 150,120 Z"
        }
      },
      {
        "id": "berry-shadow-right",
        "colorNumber": 3,
        "label": [
          210,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 C 190,120 235,170 240,240 C 245,295 210,335 150,355 C 195,335 225,285 220,240 C 215,180 185,130 150,120 Z"
        }
      },
      {
        "id": "berry-highlight",
        "colorNumber": 4,
        "label": [
          90,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,150 C 65,180 65,230 75,265 C 70,230 70,180 85,150 Z"
        }
      },
      {
        "id": "calyx-center",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 L 140,165 L 150,155 L 160,165 Z"
        }
      },
      {
        "id": "calyx-left",
        "colorNumber": 6,
        "label": [
          105,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 C 120,110 80,105 70,115 C 90,130 125,130 150,120 Z"
        }
      },
      {
        "id": "calyx-right",
        "colorNumber": 6,
        "label": [
          195,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 C 180,110 220,105 230,115 C 210,130 175,130 150,120 Z"
        }
      },
      {
        "id": "stem",
        "colorNumber": 7,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 147,120 C 145,95 150,70 160,50 C 153,70 151,95 153,120 Z"
        }
      },
      {
        "id": "seed-1",
        "colorNumber": 8,
        "label": [
          110,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 180,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-2",
        "colorNumber": 8,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 180,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-3",
        "colorNumber": 8,
        "label": [
          190,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 180,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-4",
        "colorNumber": 8,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 230,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-5",
        "colorNumber": 8,
        "label": [
          135,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 230,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-6",
        "colorNumber": 8,
        "label": [
          175,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 230,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-7",
        "colorNumber": 8,
        "label": [
          115,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 280,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-8",
        "colorNumber": 8,
        "label": [
          155,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 280,
          "rx": 5,
          "ry": 9
        }
      },
      {
        "id": "seed-9",
        "colorNumber": 8,
        "label": [
          140,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 320,
          "rx": 4,
          "ry": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
      }
    ]
  },
  {
    "id": "avocado",
    "name": "Avocado",
    "emoji": "🥑",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#33691E",
      "#558B2F",
      "#9CCC65",
      "#DCEDC8",
      "#FFF9C4",
      "#4E342E",
      "#795548",
      "#A1887F",
      "#B0BEC5"
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
        "id": "avocado-shadow",
        "colorNumber": 10,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 85,
          "ry": 16
        }
      },
      {
        "id": "dark-skin",
        "colorNumber": 2,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,60 C 105,60 90,110 85,160 C 50,210 45,310 90,350 C 125,370 175,370 210,350 C 255,310 250,210 215,160 C 210,110 195,60 150,60 Z"
        }
      },
      {
        "id": "light-skin-rim",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,72 C 112,72 98,118 94,162 C 62,210 58,298 98,338 C 128,358 172,358 202,338 C 242,298 238,210 206,162 C 202,118 188,72 150,72 Z"
        }
      },
      {
        "id": "flesh-outer-green",
        "colorNumber": 4,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,85 C 120,85 108,125 104,165 C 75,210 72,285 106,322 C 132,342 168,342 194,322 C 228,285 225,210 196,165 C 192,125 180,85 150,85 Z"
        }
      },
      {
        "id": "flesh-inner-yellow",
        "colorNumber": 5,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,105 C 130,105 120,135 116,170 C 95,210 92,270 118,300 C 138,318 162,318 182,300 C 208,270 205,210 184,170 C 180,135 170,105 150,105 Z"
        }
      },
      {
        "id": "pit-hole-bg",
        "colorNumber": 6,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 48
        }
      },
      {
        "id": "seed-pit",
        "colorNumber": 7,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 44
        }
      },
      {
        "id": "pit-highlight",
        "colorNumber": 8,
        "label": [
          135,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 235,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "pit-specular",
        "colorNumber": 9,
        "label": [
          130,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "hotdog",
    "name": "Hot Dog",
    "emoji": "🌭",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#D32F2F",
      "#B71C1C",
      "#FFD600",
      "#4CAF50",
      "#B0BEC5"
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
        "id": "hotdog-shadow",
        "colorNumber": 8,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 340,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "bun-bottom",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,190 C 35,260 90,300 150,300 C 210,300 265,260 260,190 C 240,240 180,265 150,265 C 120,265 60,240 40,190 Z"
        }
      },
      {
        "id": "sausage-body",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,185 C 25,160 50,150 70,160 L 230,160 C 250,150 275,160 270,185 C 265,210 240,215 220,205 L 80,205 C 60,215 35,210 30,185 Z"
        }
      },
      {
        "id": "sausage-shadow",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,195 Q 150,225 255,195 Q 150,210 45,195 Z"
        }
      },
      {
        "id": "bun-top-left",
        "colorNumber": 3,
        "label": [
          80,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,160 C 40,110 90,120 110,150 C 90,155 60,155 45,160 Z"
        }
      },
      {
        "id": "bun-top-right",
        "colorNumber": 3,
        "label": [
          220,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,150 C 210,120 260,110 255,160 C 240,155 210,155 190,150 Z"
        }
      },
      {
        "id": "mustard-zigzag",
        "colorNumber": 6,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,180 Q 80,160 100,180 Q 120,160 140,180 Q 160,160 180,180 Q 200,160 220,180 Q 240,160 250,180"
        }
      },
      {
        "id": "relish-dot-1",
        "colorNumber": 7,
        "label": [
          90,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "relish-dot-2",
        "colorNumber": 7,
        "label": [
          130,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "relish-dot-3",
        "colorNumber": 7,
        "label": [
          170,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "relish-dot-4",
        "colorNumber": 7,
        "label": [
          210,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "id": "sparkle-2",
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "hamburger",
    "name": "Hamburger",
    "emoji": "🍔",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8F0",
      "#E8A848",
      "#C47D2B",
      "#5C2C16",
      "#3E1A0C",
      "#FFD000",
      "#E53935",
      "#C62828",
      "#43A047",
      "#2E7D32",
      "#8E24AA",
      "#FFFFFF",
      "#D7CCC8",
      "#FFE082"
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
        "id": "burger-shadow",
        "colorNumber": 13,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "bun-bottom",
        "colorNumber": 2,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,295 C 55,345 245,345 245,295 Z"
        }
      },
      {
        "id": "bun-bottom-shadow",
        "colorNumber": 3,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,310 C 100,345 200,345 235,310 C 245,320 235,340 215,345 C 175,352 125,352 85,345 C 65,340 55,320 65,310 Z"
        }
      },
      {
        "id": "patty",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,260 C 40,290 260,290 255,260 C 260,278 245,298 150,298 C 55,298 40,278 45,260 Z"
        }
      },
      {
        "id": "patty-grill-mark-1",
        "colorNumber": 5,
        "label": [
          110,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,270 L 125,285"
        }
      },
      {
        "id": "patty-grill-mark-2",
        "colorNumber": 5,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,270 L 165,285"
        }
      },
      {
        "id": "patty-grill-mark-3",
        "colorNumber": 5,
        "label": [
          190,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,270 L 205,285"
        }
      },
      {
        "id": "cheese-slice",
        "colorNumber": 6,
        "label": [
          150,
          252
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,245 255,245 240,265 195,255 170,275 145,255 110,275 85,255 60,265"
        }
      },
      {
        "id": "tomato-left",
        "colorNumber": 7,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,230 C 55,215 150,215 150,230 C 150,245 55,245 55,230 Z"
        }
      },
      {
        "id": "tomato-right",
        "colorNumber": 7,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 C 150,215 245,215 245,230 C 245,245 150,245 150,230 Z"
        }
      },
      {
        "id": "tomato-seed-1",
        "colorNumber": 8,
        "label": [
          100,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "tomato-seed-2",
        "colorNumber": 8,
        "label": [
          200,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "lettuce",
        "colorNumber": 9,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,215 C 50,195 70,225 90,205 C 110,195 130,225 150,205 C 170,195 190,225 210,205 C 230,195 250,225 260,215 C 265,225 245,235 220,230 C 190,235 170,225 150,230 C 130,225 110,235 80,230 C 55,235 35,225 40,215 Z"
        }
      },
      {
        "id": "lettuce-fold-1",
        "colorNumber": 10,
        "label": [
          80,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,215 Q 85,225 105,215"
        }
      },
      {
        "id": "lettuce-fold-2",
        "colorNumber": 10,
        "label": [
          220,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,215 Q 215,225 235,215"
        }
      },
      {
        "id": "onion-ring",
        "colorNumber": 11,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,198 C 110,190 190,190 225,198 C 215,204 185,198 150,198 C 115,198 85,204 75,198 Z"
        }
      },
      {
        "id": "bun-top",
        "colorNumber": 2,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,195 C 45,95 255,95 255,195 Z"
        }
      },
      {
        "id": "bun-top-highlight",
        "colorNumber": 14,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,145 C 95,115 150,105 185,110 C 145,110 100,125 80,145 Z"
        }
      },
      {
        "id": "sesame-1",
        "colorNumber": 12,
        "label": [
          110,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 135,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-2",
        "colorNumber": 12,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 125,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-3",
        "colorNumber": 12,
        "label": [
          190,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 135,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-4",
        "colorNumber": 12,
        "label": [
          90,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 165,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-5",
        "colorNumber": 12,
        "label": [
          130,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 155,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-6",
        "colorNumber": 12,
        "label": [
          170,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 155,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sesame-7",
        "colorNumber": 12,
        "label": [
          210,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 165,
          "rx": 6,
          "ry": 3
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 65,
          "r": 10
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
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
    "id": "gingerbreadman",
    "name": "Gingerbread Man",
    "emoji": "🫚",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#8D6E63",
      "#6D4C41",
      "#FFFFFF",
      "#E53935",
      "#43A047",
      "#FFD54F",
      "#D7CCC8"
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
        "id": "cookie-shadow",
        "colorNumber": 8,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 85,
          "ry": 15
        }
      },
      {
        "id": "gingerbread-body",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,55 C 175,55 195,75 195,100 C 195,120 180,135 165,140 L 225,185 C 240,195 235,220 215,225 C 200,230 185,215 170,200 L 170,250 L 205,335 C 215,355 190,370 175,355 L 150,300 L 125,355 C 110,370 85,355 95,335 L 130,250 L 130,200 L 130,200 C 115,215 100,230 85,225 C 65,220 60,195 75,185 L 135,140 C 120,135 105,120 105,100 C 105,75 125,55 150,55 Z"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 3,
        "label": [
          135,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 95,
          "r": 5
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 3,
        "label": [
          165,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 95,
          "r": 5
        }
      },
      {
        "id": "icing-smile",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,110 Q 150,125 165,110"
        }
      },
      {
        "id": "bowtie-left",
        "colorNumber": 5,
        "label": [
          138,
          142
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,142 L 130,132 L 130,152 Z"
        }
      },
      {
        "id": "bowtie-right",
        "colorNumber": 5,
        "label": [
          162,
          142
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,142 L 170,132 L 170,152 Z"
        }
      },
      {
        "id": "bowtie-center",
        "colorNumber": 7,
        "label": [
          150,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 142,
          "r": 5
        }
      },
      {
        "id": "button-1",
        "colorNumber": 6,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 7
        }
      },
      {
        "id": "button-2",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 205,
          "r": 7
        }
      },
      {
        "id": "button-3",
        "colorNumber": 6,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 7
        }
      },
      {
        "id": "arm-icing-l",
        "colorNumber": 4,
        "label": [
          90,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,195 Q 85,205 95,200"
        }
      },
      {
        "id": "arm-icing-r",
        "colorNumber": 4,
        "label": [
          210,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,200 Q 215,205 225,195"
        }
      },
      {
        "id": "leg-icing-l",
        "colorNumber": 4,
        "label": [
          110,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,330 Q 110,320 120,330"
        }
      },
      {
        "id": "leg-icing-r",
        "colorNumber": 4,
        "label": [
          190,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M 180,330 Q 190,320 200,330"
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "sushi-set",
    "name": "Sushi Set",
    "emoji": "🍱",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2F1",
      "#212121",
      "#B71C1C",
      "#FF7043",
      "#D32F2F",
      "#FFFFFF",
      "#4CAF50",
      "#FF80AB",
      "#8D6E63",
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
        "id": "tray-outer",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 110,
          "w": 230,
          "h": 240,
          "rx": 16
        }
      },
      {
        "id": "tray-inner",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 120,
          "w": 210,
          "h": 220,
          "rx": 10
        }
      },
      {
        "id": "rice-nigiri-1",
        "colorNumber": 6,
        "label": [
          95,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 160,
          "w": 70,
          "h": 35,
          "rx": 12
        }
      },
      {
        "id": "salmon-top",
        "colorNumber": 4,
        "label": [
          95,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,165 C 55,145 135,145 135,165 C 135,175 55,175 55,165 Z"
        }
      },
      {
        "id": "salmon-stripe-1",
        "colorNumber": 6,
        "label": [
          80,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,150 L 85,170"
        }
      },
      {
        "id": "salmon-stripe-2",
        "colorNumber": 6,
        "label": [
          110,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,150 L 115,170"
        }
      },
      {
        "id": "rice-nigiri-2",
        "colorNumber": 6,
        "label": [
          205,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 160,
          "w": 70,
          "h": 35,
          "rx": 12
        }
      },
      {
        "id": "tuna-top",
        "colorNumber": 5,
        "label": [
          205,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,165 C 165,145 245,145 245,165 C 245,175 165,175 165,165 Z"
        }
      },
      {
        "id": "maki-1-nori",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 26
        }
      },
      {
        "id": "maki-1-rice",
        "colorNumber": 6,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 20
        }
      },
      {
        "id": "maki-1-center",
        "colorNumber": 4,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 9
        }
      },
      {
        "id": "maki-2-nori",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 26
        }
      },
      {
        "id": "maki-2-rice",
        "colorNumber": 6,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 20
        }
      },
      {
        "id": "maki-2-center",
        "colorNumber": 7,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 9
        }
      },
      {
        "id": "maki-3-nori",
        "colorNumber": 2,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 26
        }
      },
      {
        "id": "maki-3-rice",
        "colorNumber": 6,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 20
        }
      },
      {
        "id": "maki-3-center",
        "colorNumber": 5,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 9
        }
      },
      {
        "id": "wasabi-mound",
        "colorNumber": 7,
        "label": [
          90,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,325 C 75,305 105,305 105,325 Z"
        }
      },
      {
        "id": "ginger-slices",
        "colorNumber": 8,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,325 C 135,310 165,310 165,325 Z"
        }
      },
      {
        "id": "chopstick-1",
        "colorNumber": 9,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 60,
          "w": 220,
          "h": 6,
          "rx": 3
        }
      },
      {
        "id": "chopstick-2",
        "colorNumber": 9,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 72,
          "w": 220,
          "h": 6,
          "rx": 3
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
          "r": 8
        }
      }
    ]
  },
  {
    "id": "birthday-cake",
    "name": "Birthday Cake",
    "emoji": "🎂",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#F8BBD0",
      "#F48FB1",
      "#EC407A",
      "#00E5FF",
      "#FFD600",
      "#E53935",
      "#B0BEC5"
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
        "id": "stand",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 16
        }
      },
      {
        "id": "tier-1",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 240,
          "w": 200,
          "h": 110,
          "rx": 8
        }
      },
      {
        "id": "frosting-drip-1",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,240 L 250,240 C 250,260 230,270 220,255 C 210,245 190,275 175,255 C 160,245 140,275 125,255 C 110,245 90,275 75,255 C 65,270 50,260 50,240 Z"
        }
      },
      {
        "id": "tier-2",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 150,
          "w": 130,
          "h": 90,
          "rx": 8
        }
      },
      {
        "id": "frosting-drip-2",
        "colorNumber": 4,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,150 L 215,150 C 215,165 200,175 190,165 C 180,155 165,175 150,165 C 135,155 120,175 110,165 C 100,175 85,165 85,150 Z"
        }
      },
      {
        "id": "candle-1",
        "colorNumber": 5,
        "label": [
          115,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 95,
          "w": 10,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "candle-2",
        "colorNumber": 5,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 95,
          "w": 10,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "candle-3",
        "colorNumber": 5,
        "label": [
          185,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 95,
          "w": 10,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "flame-1",
        "colorNumber": 6,
        "label": [
          115,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,95 C 105,80 115,65 115,65 C 115,65 125,80 115,95 Z"
        }
      },
      {
        "id": "flame-2",
        "colorNumber": 6,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,95 C 140,80 150,65 150,65 C 150,65 160,80 150,95 Z"
        }
      },
      {
        "id": "flame-3",
        "colorNumber": 6,
        "label": [
          185,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,95 C 175,80 185,65 185,65 C 185,65 195,80 185,95 Z"
        }
      },
      {
        "id": "strawberry-1",
        "colorNumber": 7,
        "label": [
          110,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 235,
          "r": 10
        }
      },
      {
        "id": "strawberry-2",
        "colorNumber": 7,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 235,
          "r": 10
        }
      },
      {
        "id": "strawberry-3",
        "colorNumber": 7,
        "label": [
          190,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 235,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "ramen-bowl",
    "name": "Ramen Bowl",
    "emoji": "🍜",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D32F2F",
      "#B71C1C",
      "#FFD54F",
      "#FFA000",
      "#2E7D32",
      "#212121",
      "#FFFFFF",
      "#FF80AB",
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
        "id": "steam-1",
        "colorNumber": 8,
        "label": [
          110,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,120 Q 95,90 115,65 Q 130,40 110,20"
        }
      },
      {
        "id": "steam-2",
        "colorNumber": 8,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,115 Q 165,85 145,60 Q 135,35 155,15"
        }
      },
      {
        "id": "steam-3",
        "colorNumber": 8,
        "label": [
          190,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,120 Q 205,90 185,65 Q 170,40 190,20"
        }
      },
      {
        "id": "bowl-body",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,165 C 40,320 260,320 260,165 Z"
        }
      },
      {
        "id": "bowl-rim",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 165,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "broth",
        "colorNumber": 5,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 170,
          "rx": 100,
          "ry": 20
        }
      },
      {
        "id": "noodles-cluster",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,170 Q 100,200 150,180 Q 200,200 235,170 Q 150,210 65,170 Z"
        }
      },
      {
        "id": "nori-sheet",
        "colorNumber": 7,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,120 95,110 85,165 45,175"
        }
      },
      {
        "id": "egg-white",
        "colorNumber": 8,
        "label": [
          125,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 170,
          "rx": 18,
          "ry": 22
        }
      },
      {
        "id": "egg-yolk",
        "colorNumber": 5,
        "label": [
          125,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 170,
          "r": 11
        }
      },
      {
        "id": "naruto-white",
        "colorNumber": 8,
        "label": [
          175,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 170,
          "r": 18
        }
      },
      {
        "id": "naruto-pink-swirl",
        "colorNumber": 9,
        "label": [
          175,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,170 A 8,8 0 0,1 183,170 A 5,5 0 0,1 175,175"
        }
      },
      {
        "id": "scallion-1",
        "colorNumber": 6,
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
        "id": "scallion-2",
        "colorNumber": 6,
        "label": [
          155,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "scallion-3",
        "colorNumber": 6,
        "label": [
          140,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "chopsticks",
        "colorNumber": 10,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 170,165 L 265,70 M 180,175 L 275,80"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "ice-cream-parlor",
    "name": "Ice Cream Sundae",
    "emoji": "🍨",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#E1F5FE",
      "#81D4FA",
      "#F8BBD0",
      "#D7CCC8",
      "#C8E6C9",
      "#5D4037",
      "#E53935",
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
        "id": "glass-base",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 55,
          "ry": 12
        }
      },
      {
        "id": "glass-stem",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 143,
          "y": 275,
          "w": 14,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "glass-bowl",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,180 C 60,285 240,285 240,180 Z"
        }
      },
      {
        "id": "scoop-strawberry",
        "colorNumber": 4,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 170,
          "r": 35
        }
      },
      {
        "id": "scoop-chocolate",
        "colorNumber": 5,
        "label": [
          190,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 170,
          "r": 35
        }
      },
      {
        "id": "scoop-mint",
        "colorNumber": 6,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 36
        }
      },
      {
        "id": "hot-fudge",
        "colorNumber": 7,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,120 C 135,140 145,115 155,140 C 165,120 175,135 175,120 C 160,105 140,105 125,120 Z"
        }
      },
      {
        "id": "whipped-cream",
        "colorNumber": 9,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,110 C 110,75 145,50 150,50 C 155,50 190,75 180,110 Z"
        }
      },
      {
        "id": "cherry",
        "colorNumber": 8,
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
        "id": "cherry-stem",
        "colorNumber": 7,
        "label": [
          162,
          20
        ],
        "shape": {
          "kind": "path",
          "d": "M 152,30 C 158,15 170,10 180,16"
        }
      },
      {
        "id": "wafer-stick",
        "colorNumber": 5,
        "label": [
          215,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 45,
          "w": 12,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 10,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 10,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "banana",
    "name": "Fresh Banana",
    "emoji": "🍌",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#FFEB3B",
      "#FDD835",
      "#FBC02D",
      "#FFF9C4",
      "#5D4037",
      "#D7CCC8",
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
        "id": "banana-shadow",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 105,
          "ry": 16
        }
      },
      {
        "id": "banana-peel-body",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,110 C 35,220 90,320 220,340 C 245,345 255,335 250,325 C 130,310 75,220 105,120 Z"
        }
      },
      {
        "id": "banana-pulp-inner",
        "colorNumber": 5,
        "label": [
          115,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,115 C 80,160 100,225 140,245 C 135,215 115,160 120,115 Z"
        }
      },
      {
        "id": "peel-left",
        "colorNumber": 2,
        "label": [
          60,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,120 C 60,135 45,175 55,210 C 65,175 80,150 95,135 Z"
        }
      },
      {
        "id": "peel-right",
        "colorNumber": 2,
        "label": [
          155,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,120 C 145,135 170,165 175,200 C 160,170 140,145 115,135 Z"
        }
      },
      {
        "id": "peel-front",
        "colorNumber": 4,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,200 C 95,245 110,270 135,280 C 120,260 110,230 105,200 Z"
        }
      },
      {
        "id": "stem-top",
        "colorNumber": 6,
        "label": [
          85,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 85,
          "w": 16,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "tip-bottom",
        "colorNumber": 6,
        "label": [
          248,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          45,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "cherries",
    "name": "Sweet Cherries",
    "emoji": "🍒",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FCE4EC",
      "#D50000",
      "#B71C1C",
      "#FF5252",
      "#2E7D32",
      "#4CAF50",
      "#FFFFFF",
      "#D7CCC8"
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
        "id": "cherry-shadow-1",
        "colorNumber": 8,
        "label": [
          105,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 360,
          "rx": 50,
          "ry": 14
        }
      },
      {
        "id": "cherry-shadow-2",
        "colorNumber": 8,
        "label": [
          205,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 360,
          "rx": 50,
          "ry": 14
        }
      },
      {
        "id": "cherry-left",
        "colorNumber": 2,
        "label": [
          105,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 290,
          "r": 52
        }
      },
      {
        "id": "cherry-left-shadow",
        "colorNumber": 3,
        "label": [
          125,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,238 C 145,250 155,310 125,340 C 150,315 145,265 105,238 Z"
        }
      },
      {
        "id": "cherry-left-shine",
        "colorNumber": 4,
        "label": [
          80,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 265,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "cherry-left-dot",
        "colorNumber": 7,
        "label": [
          75,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "cherry-right",
        "colorNumber": 2,
        "label": [
          200,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 280,
          "r": 50
        }
      },
      {
        "id": "cherry-right-shadow",
        "colorNumber": 3,
        "label": [
          220,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,230 C 240,240 248,300 220,328 C 242,305 238,255 200,230 Z"
        }
      },
      {
        "id": "cherry-right-shine",
        "colorNumber": 4,
        "label": [
          175,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 255,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "cherry-right-dot",
        "colorNumber": 7,
        "label": [
          170,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 250,
          "r": 4
        }
      },
      {
        "id": "stem-left",
        "colorNumber": 5,
        "label": [
          120,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,240 C 110,160 145,100 155,75"
        }
      },
      {
        "id": "stem-right",
        "colorNumber": 5,
        "label": [
          180,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,232 C 190,160 165,100 155,75"
        }
      },
      {
        "id": "leaf-joint",
        "colorNumber": 6,
        "label": [
          195,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,75 C 175,45 225,50 235,70 C 220,90 175,90 155,75 Z"
        }
      },
      {
        "id": "leaf-vein",
        "colorNumber": 5,
        "label": [
          195,
          68
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,75 Q 195,68 230,70"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 4,
        "label": [
          255,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "grapes",
    "name": "Purple Grapes",
    "emoji": "🍇",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F3E5F5",
      "#6A1B9A",
      "#8E24AA",
      "#AB47BC",
      "#CE93D8",
      "#2E7D32",
      "#4CAF50",
      "#5D4037",
      "#D7CCC8"
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
        "id": "grapes-shadow",
        "colorNumber": 9,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 75,
          "ry": 14
        }
      },
      {
        "id": "vine-stem",
        "colorNumber": 8,
        "label": [
          150,
          65
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 40,
          "w": 12,
          "h": 50,
          "rx": 4
        }
      },
      {
        "id": "grape-leaf-l",
        "colorNumber": 6,
        "label": [
          95,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 145,75 C 105,50 65,85 75,115 C 105,120 135,100 145,75 Z"
        }
      },
      {
        "id": "grape-leaf-r",
        "colorNumber": 7,
        "label": [
          205,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,75 C 195,50 235,85 225,115 C 195,120 165,100 155,75 Z"
        }
      },
      {
        "id": "grape-1",
        "colorNumber": 2,
        "label": [
          95,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 145,
          "r": 25
        }
      },
      {
        "id": "grape-2",
        "colorNumber": 3,
        "label": [
          135,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 140,
          "r": 25
        }
      },
      {
        "id": "grape-3",
        "colorNumber": 2,
        "label": [
          175,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 140,
          "r": 25
        }
      },
      {
        "id": "grape-4",
        "colorNumber": 3,
        "label": [
          215,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 145,
          "r": 25
        }
      },
      {
        "id": "grape-5",
        "colorNumber": 3,
        "label": [
          115,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 190,
          "r": 25
        }
      },
      {
        "id": "grape-6",
        "colorNumber": 4,
        "label": [
          155,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 185,
          "r": 26
        }
      },
      {
        "id": "grape-7",
        "colorNumber": 2,
        "label": [
          195,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 190,
          "r": 25
        }
      },
      {
        "id": "grape-8",
        "colorNumber": 2,
        "label": [
          115,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 240,
          "r": 25
        }
      },
      {
        "id": "grape-9",
        "colorNumber": 3,
        "label": [
          155,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 235,
          "r": 26
        }
      },
      {
        "id": "grape-10",
        "colorNumber": 4,
        "label": [
          195,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 240,
          "r": 25
        }
      },
      {
        "id": "grape-11",
        "colorNumber": 3,
        "label": [
          135,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 285,
          "r": 24
        }
      },
      {
        "id": "grape-12",
        "colorNumber": 2,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 285,
          "r": 24
        }
      },
      {
        "id": "grape-13",
        "colorNumber": 4,
        "label": [
          155,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 330,
          "r": 22
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 5,
        "label": [
          45,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 5,
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
      }
    ]
  },
  {
    "id": "orange",
    "name": "Juicy Orange",
    "emoji": "🍊",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FF6D00",
      "#FF9100",
      "#FFAB40",
      "#FFE0B2",
      "#2E7D32",
      "#4CAF50",
      "#5D4037",
      "#D7CCC8"
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
        "id": "orange-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "orange-body",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 105
        }
      },
      {
        "id": "orange-shadow-curve",
        "colorNumber": 3,
        "label": [
          200,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,105 C 215,105 255,155 255,210 C 255,275 205,315 150,315 C 220,305 240,240 240,210 C 240,150 195,115 150,105 Z"
        }
      },
      {
        "id": "stem",
        "colorNumber": 8,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 80,
          "w": 8,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "leaf-left",
        "colorNumber": 6,
        "label": [
          110,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 146,95 C 115,70 85,85 80,105 C 105,115 135,105 146,95 Z"
        }
      },
      {
        "id": "leaf-right",
        "colorNumber": 7,
        "label": [
          190,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M 154,95 C 185,70 215,85 220,105 C 195,115 165,105 154,95 Z"
        }
      },
      {
        "id": "slice-rim",
        "colorNumber": 4,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 240,
          "r": 65
        }
      },
      {
        "id": "slice-pith",
        "colorNumber": 5,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 240,
          "r": 56
        }
      },
      {
        "id": "slice-center",
        "colorNumber": 5,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 240,
          "r": 12
        }
      },
      {
        "id": "seg-1",
        "colorNumber": 2,
        "label": [
          130,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 120,195 A 50,50 0 0,1 140,195 Z"
        }
      },
      {
        "id": "seg-2",
        "colorNumber": 3,
        "label": [
          165,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 165,210 A 50,50 0 0,1 175,230 Z"
        }
      },
      {
        "id": "seg-3",
        "colorNumber": 2,
        "label": [
          165,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 175,250 A 50,50 0 0,1 165,270 Z"
        }
      },
      {
        "id": "seg-4",
        "colorNumber": 3,
        "label": [
          130,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 140,285 A 50,50 0 0,1 120,285 Z"
        }
      },
      {
        "id": "seg-5",
        "colorNumber": 2,
        "label": [
          95,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 95,270 A 50,50 0 0,1 85,250 Z"
        }
      },
      {
        "id": "seg-6",
        "colorNumber": 3,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,240 L 85,230 A 50,50 0 0,1 95,210 Z"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "lemon",
    "name": "Sour Lemon",
    "emoji": "🍋",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#FFEB3B",
      "#FDD835",
      "#FBC02D",
      "#FFF9C4",
      "#2E7D32",
      "#4CAF50",
      "#D7CCC8"
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
        "id": "lemon-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "lemon-body",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,210 C 65,130 130,110 150,110 C 170,110 235,130 255,210 C 235,290 170,310 150,310 C 130,310 65,290 45,210 Z"
        }
      },
      {
        "id": "lemon-shadow-edge",
        "colorNumber": 4,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 205,110 255,150 255,210 C 255,280 200,310 150,310 C 215,300 240,245 240,210 C 240,155 195,120 150,110 Z"
        }
      },
      {
        "id": "lemon-tip-left",
        "colorNumber": 3,
        "label": [
          45,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "lemon-tip-right",
        "colorNumber": 3,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "lemon-leaf-1",
        "colorNumber": 6,
        "label": [
          110,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 115,75 85,90 75,115 C 105,125 135,115 150,110 Z"
        }
      },
      {
        "id": "lemon-leaf-2",
        "colorNumber": 7,
        "label": [
          190,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 185,75 215,90 225,115 C 195,125 165,115 150,110 Z"
        }
      },
      {
        "id": "slice-rim",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 55
        }
      },
      {
        "id": "slice-pith",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 46
        }
      },
      {
        "id": "slice-core",
        "colorNumber": 5,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 10
        }
      },
      {
        "id": "seg-1",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 140,195 A 40,40 0 0,1 160,195 Z"
        }
      },
      {
        "id": "seg-2",
        "colorNumber": 3,
        "label": [
          175,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 175,205 A 40,40 0 0,1 185,225 Z"
        }
      },
      {
        "id": "seg-3",
        "colorNumber": 2,
        "label": [
          175,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 185,235 A 40,40 0 0,1 175,255 Z"
        }
      },
      {
        "id": "seg-4",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 160,265 A 40,40 0 0,1 140,265 Z"
        }
      },
      {
        "id": "seg-5",
        "colorNumber": 2,
        "label": [
          125,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 125,255 A 40,40 0 0,1 115,235 Z"
        }
      },
      {
        "id": "seg-6",
        "colorNumber": 3,
        "label": [
          125,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 L 115,225 A 40,40 0 0,1 125,205 Z"
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "peach",
    "name": "Sweet Peach",
    "emoji": "🍑",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FF8A80",
      "#FF5252",
      "#FFAB91",
      "#FFE0B2",
      "#2E7D32",
      "#4CAF50",
      "#5D4037",
      "#D7CCC8"
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
        "id": "peach-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 85,
          "ry": 16
        }
      },
      {
        "id": "peach-body",
        "colorNumber": 2,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 C 85,100 45,170 45,240 C 45,320 120,355 150,355 C 180,355 255,320 255,240 C 255,170 215,100 150,120 Z"
        }
      },
      {
        "id": "peach-cleft-shadow",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,120 Q 140,230 150,355 Q 160,230 150,120 Z"
        }
      },
      {
        "id": "peach-blush-left",
        "colorNumber": 4,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,190 C 55,240 75,280 110,290 C 85,270 75,230 85,190 Z"
        }
      },
      {
        "id": "peach-highlight",
        "colorNumber": 5,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 195,
          "rx": 25,
          "ry": 45
        }
      },
      {
        "id": "stem",
        "colorNumber": 8,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 90,
          "w": 8,
          "h": 30,
          "rx": 3
        }
      },
      {
        "id": "leaf-1",
        "colorNumber": 6,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 148,110 C 115,75 75,90 65,115 C 95,125 130,120 148,110 Z"
        }
      },
      {
        "id": "leaf-2",
        "colorNumber": 7,
        "label": [
          195,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 152,110 C 185,75 225,90 235,115 C 205,125 170,120 152,110 Z"
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "kiwi",
    "name": "Kiwi Fruit",
    "emoji": "🥝",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#F1F8E9",
      "#6D4C41",
      "#8D6E63",
      "#7CB342",
      "#9CCC65",
      "#DCEDC8",
      "#212121",
      "#B0BEC5"
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
        "id": "kiwi-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "whole-kiwi",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 85,
          "ry": 65
        }
      },
      {
        "id": "whole-kiwi-highlight",
        "colorNumber": 3,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 155,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "slice-skin",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 85
        }
      },
      {
        "id": "slice-green-flesh",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 75
        }
      },
      {
        "id": "slice-inner-lime",
        "colorNumber": 5,
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
        "id": "slice-creamy-core",
        "colorNumber": 6,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 24,
          "ry": 16
        }
      },
      {
        "id": "seed-1",
        "colorNumber": 7,
        "label": [
          125,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 235,
          "r": 4
        }
      },
      {
        "id": "seed-2",
        "colorNumber": 7,
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
      },
      {
        "id": "seed-3",
        "colorNumber": 7,
        "label": [
          175,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 235,
          "r": 4
        }
      },
      {
        "id": "seed-4",
        "colorNumber": 7,
        "label": [
          185,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "seed-5",
        "colorNumber": 7,
        "label": [
          175,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 285,
          "r": 4
        }
      },
      {
        "id": "seed-6",
        "colorNumber": 7,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 295,
          "r": 4
        }
      },
      {
        "id": "seed-7",
        "colorNumber": 7,
        "label": [
          125,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 285,
          "r": 4
        }
      },
      {
        "id": "seed-8",
        "colorNumber": 7,
        "label": [
          115,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "coconut",
    "name": "Tropical Coconut",
    "emoji": "🥥",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#4E342E",
      "#6D4C41",
      "#FFFFFF",
      "#E0F2F1",
      "#00ACC1",
      "#FF4081",
      "#2E7D32",
      "#4CAF50",
      "#B0BEC5"
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
        "id": "coconut-shadow",
        "colorNumber": 10,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "palm-leaf-1",
        "colorNumber": 8,
        "label": [
          70,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,180 C 100,120 50,90 20,95 C 60,125 110,155 150,180 Z"
        }
      },
      {
        "id": "palm-leaf-2",
        "colorNumber": 9,
        "label": [
          230,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,180 C 200,120 250,90 280,95 C 240,125 190,155 150,180 Z"
        }
      },
      {
        "id": "coconut-shell",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,210 C 50,335 250,335 250,210 Z"
        }
      },
      {
        "id": "shell-rim",
        "colorNumber": 3,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 100,
          "ry": 25
        }
      },
      {
        "id": "white-meat",
        "colorNumber": 4,
        "label": [
          150,
          212
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 212,
          "rx": 90,
          "ry": 20
        }
      },
      {
        "id": "coconut-water",
        "colorNumber": 5,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 75,
          "ry": 15
        }
      },
      {
        "id": "straw",
        "colorNumber": 6,
        "label": [
          185,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 80,
          "w": 10,
          "h": 140,
          "rx": 4
        }
      },
      {
        "id": "flower-petal-1",
        "colorNumber": 7,
        "label": [
          90,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 185,
          "r": 16
        }
      },
      {
        "id": "flower-petal-2",
        "colorNumber": 7,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 175,
          "r": 16
        }
      },
      {
        "id": "flower-petal-3",
        "colorNumber": 7,
        "label": [
          125,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 200,
          "r": 16
        }
      },
      {
        "id": "flower-center",
        "colorNumber": 1,
        "label": [
          110,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
        "id": "food-spark-1",
        "colorNumber": 10,
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
        "id": "food-spark-2",
        "colorNumber": 10,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "french-fries",
    "name": "Golden Fries",
    "emoji": "🍟",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D32F2F",
      "#B71C1C",
      "#FFD54F",
      "#FFC107",
      "#FFA000",
      "#D7CCC8"
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
        "id": "fries-shadow",
        "colorNumber": 7,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "fry-1",
        "colorNumber": 6,
        "label": [
          90,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 82,
          "y": 70,
          "w": 16,
          "h": 130,
          "rx": 4
        }
      },
      {
        "id": "fry-2",
        "colorNumber": 4,
        "label": [
          120,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 50,
          "w": 16,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "fry-3",
        "colorNumber": 5,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 40,
          "w": 16,
          "h": 160,
          "rx": 4
        }
      },
      {
        "id": "fry-4",
        "colorNumber": 4,
        "label": [
          180,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 50,
          "w": 16,
          "h": 150,
          "rx": 4
        }
      },
      {
        "id": "fry-5",
        "colorNumber": 6,
        "label": [
          210,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 202,
          "y": 70,
          "w": 16,
          "h": 130,
          "rx": 4
        }
      },
      {
        "id": "fry-6",
        "colorNumber": 4,
        "label": [
          105,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 95,
          "w": 14,
          "h": 110,
          "rx": 4
        }
      },
      {
        "id": "fry-7",
        "colorNumber": 5,
        "label": [
          135,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 128,
          "y": 80,
          "w": 14,
          "h": 120,
          "rx": 4
        }
      },
      {
        "id": "fry-8",
        "colorNumber": 4,
        "label": [
          165,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 158,
          "y": 80,
          "w": 14,
          "h": 120,
          "rx": 4
        }
      },
      {
        "id": "fry-9",
        "colorNumber": 5,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 188,
          "y": 95,
          "w": 14,
          "h": 110,
          "rx": 4
        }
      },
      {
        "id": "carton-box",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,185 245,185 220,360 80,360"
        }
      },
      {
        "id": "carton-curved-cutout",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,185 Q 150,225 245,185 L 240,210 Q 150,250 60,210 Z"
        }
      },
      {
        "id": "carton-star",
        "colorNumber": 4,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,255 158,275 180,275 162,288 168,310 150,295 132,310 138,288 120,275 142,275"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
        "colorNumber": 4,
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
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "pretzel",
    "name": "Bakery Pretzel",
    "emoji": "🥨",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#8D6E63",
      "#6D4C41",
      "#FFFFFF",
      "#FFD54F",
      "#B0BEC5"
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
        "id": "pretzel-shadow",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "pretzel-outer-loop",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,110 C 210,110 260,150 260,210 C 260,280 200,330 150,330 C 100,330 40,280 40,210 C 40,150 90,110 150,110 Z"
        }
      },
      {
        "id": "pretzel-left-window",
        "colorNumber": 1,
        "label": [
          105,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,165 C 75,165 65,195 70,230 C 95,245 125,230 130,200 C 130,175 115,165 100,165 Z"
        }
      },
      {
        "id": "pretzel-right-window",
        "colorNumber": 1,
        "label": [
          195,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,165 C 225,165 235,195 230,230 C 205,245 175,230 170,200 C 170,175 185,165 200,165 Z"
        }
      },
      {
        "id": "pretzel-bottom-window",
        "colorNumber": 1,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,230 C 135,260 125,285 150,300 C 175,285 165,260 150,230 Z"
        }
      },
      {
        "id": "pretzel-crossover",
        "colorNumber": 3,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,190 L 165,240 M 165,190 L 135,240"
        }
      },
      {
        "id": "salt-1",
        "colorNumber": 4,
        "label": [
          90,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 137,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-2",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 117,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-3",
        "colorNumber": 4,
        "label": [
          210,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 206,
          "y": 137,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-4",
        "colorNumber": 4,
        "label": [
          55,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 51,
          "y": 207,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-5",
        "colorNumber": 4,
        "label": [
          245,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 241,
          "y": 207,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-6",
        "colorNumber": 4,
        "label": [
          110,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 106,
          "y": 307,
          "w": 8,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "salt-7",
        "colorNumber": 4,
        "label": [
          190,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 186,
          "y": 307,
          "w": 8,
          "h": 6,
          "rx": 2
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "popcorn",
    "name": "Movie Popcorn",
    "emoji": "🍿",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#D32F2F",
      "#FFFFFF",
      "#FFF59D",
      "#FFEE58",
      "#FDD835",
      "#FBC02D",
      "#B0BEC5"
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
        "id": "popcorn-shadow",
        "colorNumber": 8,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 380,
          "rx": 90,
          "ry": 15
        }
      },
      {
        "id": "bucket-base",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,175 240,175 210,365 90,365"
        }
      },
      {
        "id": "stripe-red-1",
        "colorNumber": 2,
        "label": [
          85,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,175 90,175 110,365 90,365"
        }
      },
      {
        "id": "stripe-red-2",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,175 165,175 160,365 140,365"
        }
      },
      {
        "id": "stripe-red-3",
        "colorNumber": 2,
        "label": [
          215,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,175 240,175 210,365 190,365"
        }
      },
      {
        "id": "kernel-1",
        "colorNumber": 4,
        "label": [
          100,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 160,
          "r": 22
        }
      },
      {
        "id": "kernel-2",
        "colorNumber": 5,
        "label": [
          140,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 155,
          "r": 24
        }
      },
      {
        "id": "kernel-3",
        "colorNumber": 6,
        "label": [
          175,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 155,
          "r": 24
        }
      },
      {
        "id": "kernel-4",
        "colorNumber": 4,
        "label": [
          210,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 160,
          "r": 22
        }
      },
      {
        "id": "kernel-5",
        "colorNumber": 5,
        "label": [
          90,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 125,
          "r": 22
        }
      },
      {
        "id": "kernel-6",
        "colorNumber": 6,
        "label": [
          130,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 115,
          "r": 26
        }
      },
      {
        "id": "kernel-7",
        "colorNumber": 4,
        "label": [
          170,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 115,
          "r": 26
        }
      },
      {
        "id": "kernel-8",
        "colorNumber": 5,
        "label": [
          210,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 125,
          "r": 22
        }
      },
      {
        "id": "kernel-9",
        "colorNumber": 6,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 26
        }
      },
      {
        "id": "butter-1",
        "colorNumber": 7,
        "label": [
          130,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "butter-2",
        "colorNumber": 7,
        "label": [
          170,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 115,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "chocolate-bar",
    "name": "Chocolate Bar",
    "emoji": "🍫",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#4E342E",
      "#3E2723",
      "#6D4C41",
      "#FFD700",
      "#D32F2F",
      "#B71C1C",
      "#B0BEC5"
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
        "id": "choco-shadow",
        "colorNumber": 8,
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
        "id": "choco-block-1",
        "colorNumber": 2,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 65,
          "w": 80,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "choco-block-2",
        "colorNumber": 2,
        "label": [
          195,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 65,
          "w": 80,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "choco-block-3",
        "colorNumber": 3,
        "label": [
          105,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 135,
          "w": 80,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "choco-block-4",
        "colorNumber": 3,
        "label": [
          195,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 135,
          "w": 80,
          "h": 60,
          "rx": 6
        }
      },
      {
        "id": "inset-1",
        "colorNumber": 4,
        "label": [
          105,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 75,
          "w": 60,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inset-2",
        "colorNumber": 4,
        "label": [
          195,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 75,
          "w": 60,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inset-3",
        "colorNumber": 4,
        "label": [
          105,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 145,
          "w": 60,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inset-4",
        "colorNumber": 4,
        "label": [
          195,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 145,
          "w": 60,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "gold-foil",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,200 245,200 240,240 190,225 150,245 110,225 60,240"
        }
      },
      {
        "id": "red-sleeve",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 230,
          "w": 190,
          "h": 125,
          "rx": 8
        }
      },
      {
        "id": "sleeve-stripe",
        "colorNumber": 7,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 275,
          "w": 190,
          "h": 35
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "candy",
    "name": "Sweet Candy",
    "emoji": "🍬",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#E91E63",
      "#FF4081",
      "#FF80AB",
      "#00E5FF",
      "#FFEA00",
      "#FFFFFF",
      "#B0BEC5"
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
        "id": "candy-shadow",
        "colorNumber": 8,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 320,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "wrapper-left",
        "colorNumber": 3,
        "label": [
          50,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,180 90,220 20,260 30,200 20,140"
        }
      },
      {
        "id": "wrapper-right",
        "colorNumber": 3,
        "label": [
          250,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,180 210,220 280,260 270,200 280,140"
        }
      },
      {
        "id": "candy-body",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 70,
          "ry": 50
        }
      },
      {
        "id": "stripe-1",
        "colorNumber": 5,
        "label": [
          115,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,152 C 125,180 125,220 115,248 L 135,248 C 145,220 145,180 135,152 Z"
        }
      },
      {
        "id": "stripe-2",
        "colorNumber": 6,
        "label": [
          165,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 165,152 C 175,180 175,220 165,248 L 185,248 C 195,220 195,180 185,152 Z"
        }
      },
      {
        "id": "candy-shine",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 45,
          "ry": 12
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
        "label": [
          45,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 6,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 80,
          "r": 10
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "food-drop-2",
        "colorNumber": 2,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "waffle",
    "name": "Belgian Waffle",
    "emoji": "🧇",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#8D6E63",
      "#FFD54F",
      "#FFA000",
      "#E53935",
      "#B0BEC5"
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
        "id": "waffle-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "waffle-base",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 115
        }
      },
      {
        "id": "waffle-rim",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 220,
          "r": 102
        }
      },
      {
        "id": "grid-1",
        "colorNumber": 4,
        "label": [
          105,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 155,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-2",
        "colorNumber": 4,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 155,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-3",
        "colorNumber": 4,
        "label": [
          195,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 155,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-4",
        "colorNumber": 4,
        "label": [
          105,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 200,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-5",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 200,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-6",
        "colorNumber": 4,
        "label": [
          195,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 200,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-7",
        "colorNumber": 4,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 245,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-8",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 245,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "grid-9",
        "colorNumber": 4,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 245,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "butter-pat",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 190,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "syrup-drip",
        "colorNumber": 6,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,220 C 130,250 170,250 170,220 Z"
        }
      },
      {
        "id": "strawberry",
        "colorNumber": 7,
        "label": [
          185,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 155,
          "r": 14
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "cheese-wedge",
    "name": "Swiss Cheese",
    "emoji": "🧀",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFD54F",
      "#FFC107",
      "#FFA000",
      "#FF8F00",
      "#FFF9C4",
      "#B0BEC5"
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
        "id": "cheese-shadow",
        "colorNumber": 7,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 350,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "wedge-top",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,210 210,120 260,170 140,260"
        }
      },
      {
        "id": "wedge-front",
        "colorNumber": 3,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,210 140,260 140,330 40,280"
        }
      },
      {
        "id": "wedge-side",
        "colorNumber": 4,
        "label": [
          200,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,260 260,170 260,240 140,330"
        }
      },
      {
        "id": "hole-1",
        "colorNumber": 5,
        "label": [
          130,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 175,
          "r": 16
        }
      },
      {
        "id": "hole-2",
        "colorNumber": 5,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "hole-3",
        "colorNumber": 5,
        "label": [
          85,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 250,
          "r": 14
        }
      },
      {
        "id": "hole-4",
        "colorNumber": 5,
        "label": [
          185,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 275,
          "r": 18
        }
      },
      {
        "id": "hole-5",
        "colorNumber": 5,
        "label": [
          230,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "cookie",
    "name": "Choco Chip Cookie",
    "emoji": "🍪",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#5D4037",
      "#3E2723",
      "#FFD54F",
      "#B0BEC5"
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
        "id": "cookie-shadow",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "cookie-body",
        "colorNumber": 2,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 115
        }
      },
      {
        "id": "cookie-crust-shade",
        "colorNumber": 3,
        "label": [
          205,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,100 C 215,100 265,150 265,215 C 265,280 215,330 150,330 C 220,320 245,260 245,215 C 245,160 205,115 150,100 Z"
        }
      },
      {
        "id": "chip-1",
        "colorNumber": 4,
        "label": [
          105,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "chip-2",
        "colorNumber": 5,
        "label": [
          155,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 145,
          "r": 16
        }
      },
      {
        "id": "chip-3",
        "colorNumber": 4,
        "label": [
          205,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 170,
          "r": 14
        }
      },
      {
        "id": "chip-4",
        "colorNumber": 5,
        "label": [
          95,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 215,
          "r": 15
        }
      },
      {
        "id": "chip-5",
        "colorNumber": 4,
        "label": [
          145,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 215,
          "r": 18
        }
      },
      {
        "id": "chip-6",
        "colorNumber": 5,
        "label": [
          195,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 225,
          "r": 15
        }
      },
      {
        "id": "chip-7",
        "colorNumber": 4,
        "label": [
          125,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 275,
          "r": 16
        }
      },
      {
        "id": "chip-8",
        "colorNumber": 5,
        "label": [
          175,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "sandwich",
    "name": "Club Sandwich",
    "emoji": "🥪",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#D4A373",
      "#BC6C25",
      "#4CAF50",
      "#E53935",
      "#FFD54F",
      "#8D6E63",
      "#2E7D32",
      "#B0BEC5"
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
        "id": "sandwich-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "toothpick",
        "colorNumber": 3,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 50,
          "w": 6,
          "h": 80,
          "rx": 3
        }
      },
      {
        "id": "olive",
        "colorNumber": 8,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "bread-top",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,170 260,170 150,110"
        }
      },
      {
        "id": "cheese-layer",
        "colorNumber": 6,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 170,
          "w": 210,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "tomato-layer",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 185,
          "w": 210,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "lettuce-layer",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 200,
          "w": 220,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "meat-layer",
        "colorNumber": 7,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 215,
          "w": 210,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "bread-mid",
        "colorNumber": 2,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,250 260,250 150,230"
        }
      },
      {
        "id": "cheese-layer-2",
        "colorNumber": 6,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 250,
          "w": 210,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "lettuce-layer-2",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 265,
          "w": 220,
          "h": 15,
          "rx": 4
        }
      },
      {
        "id": "bread-bottom",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,280 260,280 150,340"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "colorNumber": 6,
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "burrito",
    "name": "Beef Burrito",
    "emoji": "🌯",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#5D4037",
      "#4CAF50",
      "#E53935",
      "#FFD54F",
      "#B0BEC5",
      "#CFD8DC"
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
        "id": "burrito-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "foil-wrap",
        "colorNumber": 9,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 230,
          "w": 160,
          "h": 115,
          "rx": 12
        }
      },
      {
        "id": "tortilla-body",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 110,
          "w": 160,
          "h": 130,
          "rx": 16
        }
      },
      {
        "id": "cross-section-rim",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 110,
          "rx": 80,
          "ry": 35
        }
      },
      {
        "id": "filling-meat",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 110,
          "rx": 70,
          "ry": 28
        }
      },
      {
        "id": "filling-rice",
        "colorNumber": 7,
        "label": [
          130,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 105,
          "r": 12
        }
      },
      {
        "id": "filling-beans",
        "colorNumber": 4,
        "label": [
          165,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 105,
          "r": 12
        }
      },
      {
        "id": "filling-lettuce",
        "colorNumber": 5,
        "label": [
          135,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 120,
          "r": 10
        }
      },
      {
        "id": "filling-salsa",
        "colorNumber": 6,
        "label": [
          160,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 120,
          "r": 10
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
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "green-salad",
    "name": "Fresh Salad",
    "emoji": "🥗",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8F5E9",
      "#2E7D32",
      "#4CAF50",
      "#81C784",
      "#E53935",
      "#8E24AA",
      "#FFD54F",
      "#8D6E63",
      "#D7CCC8"
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
        "id": "salad-shadow",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "salad-bowl",
        "colorNumber": 8,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,180 C 40,335 260,335 260,180 Z"
        }
      },
      {
        "id": "bowl-rim",
        "colorNumber": 9,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 180,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "lettuce-1",
        "colorNumber": 2,
        "label": [
          100,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 165,
          "r": 32
        }
      },
      {
        "id": "lettuce-2",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 35
        }
      },
      {
        "id": "lettuce-3",
        "colorNumber": 4,
        "label": [
          200,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 165,
          "r": 32
        }
      },
      {
        "id": "tomato-1",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "tomato-2",
        "colorNumber": 5,
        "label": [
          190,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "tomato-3",
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
        "id": "cucumber-1",
        "colorNumber": 3,
        "label": [
          145,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 145,
          "r": 16
        }
      },
      {
        "id": "cucumber-2",
        "colorNumber": 4,
        "label": [
          175,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 185,
          "r": 16
        }
      },
      {
        "id": "onion-ring",
        "colorNumber": 6,
        "label": [
          125,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 185,
          "rx": 18,
          "ry": 10
        }
      },
      {
        "id": "crouton-1",
        "colorNumber": 7,
        "label": [
          105,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 115,
          "w": 20,
          "h": 20,
          "rx": 4
        }
      },
      {
        "id": "crouton-2",
        "colorNumber": 7,
        "label": [
          175,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 115,
          "w": 20,
          "h": 20,
          "rx": 4
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      }
    ]
  },
  {
    "id": "spaghetti",
    "name": "Spaghetti Pasta",
    "emoji": "🍝",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFFFFF",
      "#FFD54F",
      "#D32F2F",
      "#5D4037",
      "#2E7D32",
      "#B0BEC5",
      "#FFA000"
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
        "id": "plate-shadow",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 115,
          "ry": 20
        }
      },
      {
        "id": "plate-outer",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 115,
          "ry": 75
        }
      },
      {
        "id": "plate-inner",
        "colorNumber": 1,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 95,
          "ry": 55
        }
      },
      {
        "id": "spaghetti-mound",
        "colorNumber": 3,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 245,
          "rx": 80,
          "ry": 50
        }
      },
      {
        "id": "noodle-swirl-1",
        "colorNumber": 8,
        "label": [
          120,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,230 Q 120,260 150,240"
        }
      },
      {
        "id": "noodle-swirl-2",
        "colorNumber": 8,
        "label": [
          180,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,240 Q 180,260 210,230"
        }
      },
      {
        "id": "sauce-top",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,210 C 100,165 200,165 200,210 C 180,230 120,230 100,210 Z"
        }
      },
      {
        "id": "meatball-1",
        "colorNumber": 5,
        "label": [
          120,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 195,
          "r": 18
        }
      },
      {
        "id": "meatball-2",
        "colorNumber": 5,
        "label": [
          180,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 195,
          "r": 18
        }
      },
      {
        "id": "basil-leaf",
        "colorNumber": 6,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,175 C 135,150 165,150 150,175 Z"
        }
      },
      {
        "id": "fork-handle",
        "colorNumber": 7,
        "label": [
          240,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 236,
          "y": 50,
          "w": 8,
          "h": 140,
          "rx": 4
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "stew-pot",
    "name": "Hot Stew Pot",
    "emoji": "🍲",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFEBE9",
      "#4E342E",
      "#3E2723",
      "#FFA000",
      "#E65100",
      "#2E7D32",
      "#FFFFFF",
      "#FFD54F",
      "#B0BEC5"
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
        "id": "pot-shadow",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "steam-1",
        "colorNumber": 7,
        "label": [
          110,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,130 Q 95,95 115,70 Q 130,45 110,20"
        }
      },
      {
        "id": "steam-2",
        "colorNumber": 7,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,125 Q 165,90 145,65 Q 135,40 155,15"
        }
      },
      {
        "id": "steam-3",
        "colorNumber": 7,
        "label": [
          190,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,130 Q 205,95 185,70 Q 170,45 190,20"
        }
      },
      {
        "id": "pot-body",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,175 C 45,330 255,330 255,175 Z"
        }
      },
      {
        "id": "pot-rim",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 105,
          "ry": 25
        }
      },
      {
        "id": "broth-surface",
        "colorNumber": 4,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 178,
          "rx": 95,
          "ry": 20
        }
      },
      {
        "id": "handle-left",
        "colorNumber": 3,
        "label": [
          35,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 200,
          "r": 14
        }
      },
      {
        "id": "handle-right",
        "colorNumber": 3,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 200,
          "r": 14
        }
      },
      {
        "id": "carrot-flower",
        "colorNumber": 5,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "shiitake-mushroom",
        "colorNumber": 3,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 175,
          "r": 16
        }
      },
      {
        "id": "tofu-cube",
        "colorNumber": 7,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 165,
          "w": 20,
          "h": 20,
          "rx": 3
        }
      },
      {
        "id": "greens",
        "colorNumber": 6,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 195,
          "r": 12
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
      },
      {
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "curry-rice",
    "name": "Japanese Curry",
    "emoji": "🍛",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFFFFF",
      "#6D4C41",
      "#5D4037",
      "#E65100",
      "#FFB300",
      "#D32F2F",
      "#B0BEC5"
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
        "id": "plate-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 115,
          "ry": 20
        }
      },
      {
        "id": "oval-plate",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 115,
          "ry": 75
        }
      },
      {
        "id": "plate-inner-well",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 100,
          "ry": 60
        }
      },
      {
        "id": "rice-mound",
        "colorNumber": 2,
        "label": [
          105,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,250 C 60,190 145,190 145,250 C 145,295 60,295 60,250 Z"
        }
      },
      {
        "id": "curry-sauce",
        "colorNumber": 3,
        "label": [
          185,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,250 C 140,195 240,195 240,255 C 240,305 140,305 140,250 Z"
        }
      },
      {
        "id": "carrot-chunk",
        "colorNumber": 5,
        "label": [
          170,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 235,
          "r": 12
        }
      },
      {
        "id": "potato-chunk",
        "colorNumber": 6,
        "label": [
          205,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 245,
          "r": 14
        }
      },
      {
        "id": "beef-chunk",
        "colorNumber": 4,
        "label": [
          175,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 275,
          "r": 14
        }
      },
      {
        "id": "red-pickles",
        "colorNumber": 7,
        "label": [
          145,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,215 C 145,200 155,200 155,215 Z"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "rice-ball",
    "name": "Onigiri Rice",
    "emoji": "🍙",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#FFFFFF",
      "#212121",
      "#37474F",
      "#D32F2F",
      "#B0BEC5",
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
        "id": "onigiri-shadow",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 95,
          "ry": 16
        }
      },
      {
        "id": "rice-body",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,90 C 205,90 250,260 225,320 C 200,345 100,345 75,320 C 50,260 95,90 150,90 Z"
        }
      },
      {
        "id": "nori-wrap",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,250 L 195,250 L 195,340 L 105,340 Z"
        }
      },
      {
        "id": "nori-shadow",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,300 L 195,300 L 195,340 L 105,340 Z"
        }
      },
      {
        "id": "umeboshi-center",
        "colorNumber": 5,
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
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          255,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "food-drop-2",
        "colorNumber": 2,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "dumpling",
    "name": "Gyoza Dumpling",
    "emoji": "🥟",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#FFF9C4",
      "#D4A373",
      "#8D6E63",
      "#2E7D32",
      "#3E2723",
      "#FFFFFF",
      "#B0BEC5"
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
        "id": "dumpling-shadow",
        "colorNumber": 8,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "dumpling-body",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,240 C 40,130 260,130 260,240 C 260,290 40,290 40,240 Z"
        }
      },
      {
        "id": "crispy-bottom",
        "colorNumber": 3,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,250 C 100,285 200,285 250,250 C 240,280 60,280 50,250 Z"
        }
      },
      {
        "id": "pleat-1",
        "colorNumber": 4,
        "label": [
          75,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,205 Q 75,185 85,205"
        }
      },
      {
        "id": "pleat-2",
        "colorNumber": 4,
        "label": [
          115,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,185 Q 115,165 125,185"
        }
      },
      {
        "id": "pleat-3",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 140,175 Q 150,155 160,175"
        }
      },
      {
        "id": "pleat-4",
        "colorNumber": 4,
        "label": [
          185,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,185 Q 185,165 195,185"
        }
      },
      {
        "id": "pleat-5",
        "colorNumber": 4,
        "label": [
          225,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,205 Q 225,185 235,205"
        }
      },
      {
        "id": "sauce-dish",
        "colorNumber": 7,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 45,
          "ry": 15
        }
      },
      {
        "id": "soy-sauce",
        "colorNumber": 6,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 335,
          "rx": 35,
          "ry": 10
        }
      },
      {
        "id": "scallion",
        "colorNumber": 5,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 4
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "fried-shrimp",
    "name": "Fried Tempura",
    "emoji": "🍤",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#FFB300",
      "#FFA000",
      "#FF8F00",
      "#D32F2F",
      "#FF5252",
      "#FBC02D",
      "#FFFFFF",
      "#B0BEC5"
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
        "id": "tempura-shadow",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 105,
          "ry": 18
        }
      },
      {
        "id": "tempura-body",
        "colorNumber": 2,
        "label": [
          140,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,270 C 45,150 140,110 220,110 C 205,160 145,180 100,285 Z"
        }
      },
      {
        "id": "crispy-ridges-1",
        "colorNumber": 3,
        "label": [
          125,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,220 Q 115,185 155,145"
        }
      },
      {
        "id": "crispy-ridges-2",
        "colorNumber": 4,
        "label": [
          145,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,250 Q 135,215 175,175"
        }
      },
      {
        "id": "shrimp-tail-fan",
        "colorNumber": 5,
        "label": [
          245,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,115 L 265,75 L 260,115 L 265,145 Z"
        }
      },
      {
        "id": "tail-ridge",
        "colorNumber": 6,
        "label": [
          245,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,115 L 255,115"
        }
      },
      {
        "id": "lemon-wedge",
        "colorNumber": 7,
        "label": [
          75,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,335 C 45,300 95,300 95,335 Z"
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
      },
      {
        "id": "sparkle-2",
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "food-drop-2",
        "colorNumber": 2,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "oden-skewer",
    "name": "Oden Skewer",
    "emoji": "🍢",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#8D6E63",
      "#78909C",
      "#FFA000",
      "#FFD54F",
      "#FFF9C4",
      "#5D4037",
      "#FFFFFF",
      "#B0BEC5"
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
        "id": "oden-shadow",
        "colorNumber": 9,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 75,
          "ry": 15
        }
      },
      {
        "id": "skewer-stick",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 40,
          "w": 12,
          "h": 330,
          "rx": 6
        }
      },
      {
        "id": "konjac-triangle",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,55 210,140 90,140"
        }
      },
      {
        "id": "fishball",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 42
        }
      },
      {
        "id": "fishball-highlight",
        "colorNumber": 5,
        "label": [
          140,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 185,
          "r": 20
        }
      },
      {
        "id": "daikon-square",
        "colorNumber": 6,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 245,
          "w": 90,
          "h": 70,
          "rx": 8
        }
      },
      {
        "id": "grill-mark",
        "colorNumber": 7,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,280 L 185,280"
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
      },
      {
        "id": "sparkle-2",
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      },
      {
        "id": "food-drop-2",
        "colorNumber": 2,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "dango-sweet",
    "name": "Dango Skewer",
    "emoji": "🍡",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#8D6E63",
      "#F8BBD0",
      "#F48FB1",
      "#FFFFFF",
      "#E0E0E0",
      "#C8E6C9",
      "#81C784",
      "#B0BEC5"
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
        "id": "dango-shadow",
        "colorNumber": 9,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 75,
          "ry": 15
        }
      },
      {
        "id": "skewer-stick",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 40,
          "w": 12,
          "h": 330,
          "rx": 6
        }
      },
      {
        "id": "pink-dango",
        "colorNumber": 3,
        "label": [
          150,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 105,
          "r": 42
        }
      },
      {
        "id": "pink-shine",
        "colorNumber": 4,
        "label": [
          135,
          90
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 90,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "white-dango",
        "colorNumber": 5,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 42
        }
      },
      {
        "id": "white-shine",
        "colorNumber": 6,
        "label": [
          135,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 180,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "green-dango",
        "colorNumber": 7,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 285,
          "r": 42
        }
      },
      {
        "id": "green-shine",
        "colorNumber": 8,
        "label": [
          135,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 270,
          "rx": 14,
          "ry": 8
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-drop-1",
        "colorNumber": 2,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 260,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "mooncake",
    "name": "Lotus Mooncake",
    "emoji": "🥮",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#8D6E63",
      "#5D4037",
      "#FFD54F",
      "#B0BEC5"
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
        "id": "mooncake-shadow",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "mooncake-side",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,210 C 45,320 255,320 255,210 Z"
        }
      },
      {
        "id": "mooncake-top",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 105,
          "ry": 65
        }
      },
      {
        "id": "mooncake-inner-rim",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 85,
          "ry": 50
        }
      },
      {
        "id": "center-flower",
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
        "id": "petal-top",
        "colorNumber": 5,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,175 C 140,155 160,155 150,175 Z"
        }
      },
      {
        "id": "petal-bottom",
        "colorNumber": 5,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,225 C 140,245 160,245 150,225 Z"
        }
      },
      {
        "id": "petal-left",
        "colorNumber": 5,
        "label": [
          115,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,200 C 105,190 105,210 125,200 Z"
        }
      },
      {
        "id": "petal-right",
        "colorNumber": 5,
        "label": [
          185,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,200 C 195,190 195,210 175,200 Z"
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 6,
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
        "colorNumber": 6,
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
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "fruit-pie",
    "name": "Apple Pie",
    "emoji": "🥧",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#D32F2F",
      "#8D6E63",
      "#B0BEC5",
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
        "id": "pie-shadow",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 115,
          "ry": 18
        }
      },
      {
        "id": "pie-tin",
        "colorNumber": 6,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,210 C 45,330 255,330 255,210 Z"
        }
      },
      {
        "id": "pie-filling-base",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 105,
          "ry": 55
        }
      },
      {
        "id": "lattice-h1",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 180,
          "w": 190,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "lattice-h2",
        "colorNumber": 2,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 230,
          "w": 190,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "lattice-v1",
        "colorNumber": 2,
        "label": [
          115,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 108,
          "y": 160,
          "w": 14,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "lattice-v2",
        "colorNumber": 2,
        "label": [
          185,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 178,
          "y": 160,
          "w": 14,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "pie-crust-rim",
        "colorNumber": 3,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 110,
          "ry": 60
        }
      },
      {
        "id": "pie-center-hole",
        "colorNumber": 4,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 88,
          "ry": 45
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
      },
      {
        "id": "food-spark-1",
        "colorNumber": 7,
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
        "id": "food-spark-2",
        "colorNumber": 7,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "bubble-tea",
    "name": "Boba Milk Tea",
    "emoji": "🥤",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D7CCC8",
      "#A1887F",
      "#8D6E63",
      "#212121",
      "#00E5FF",
      "#FFFFFF",
      "#B0BEC5",
      "#FF80AB"
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
        "id": "cup-shadow",
        "colorNumber": 8,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 375,
          "rx": 75,
          "ry": 15
        }
      },
      {
        "id": "boba-straw",
        "colorNumber": 6,
        "label": [
          170,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 162,
          "y": 35,
          "w": 16,
          "h": 160,
          "rx": 8
        }
      },
      {
        "id": "cup-lid",
        "colorNumber": 7,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,135 C 75,85 225,85 225,135 Z"
        }
      },
      {
        "id": "lid-rim",
        "colorNumber": 8,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 130,
          "w": 170,
          "h": 10,
          "rx": 4
        }
      },
      {
        "id": "cup-body",
        "colorNumber": 7,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "75,140 225,140 200,355 100,355"
        }
      },
      {
        "id": "tea-liquid",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,165 220,165 198,350 102,350"
        }
      },
      {
        "id": "cream-top",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,165 Q 150,185 220,165 Q 150,150 80,165 Z"
        }
      },
      {
        "id": "boba-1",
        "colorNumber": 5,
        "label": [
          120,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 335,
          "r": 11
        }
      },
      {
        "id": "boba-2",
        "colorNumber": 5,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 11
        }
      },
      {
        "id": "boba-3",
        "colorNumber": 5,
        "label": [
          180,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 335,
          "r": 11
        }
      },
      {
        "id": "boba-4",
        "colorNumber": 5,
        "label": [
          135,
          312
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 312,
          "r": 11
        }
      },
      {
        "id": "boba-5",
        "colorNumber": 5,
        "label": [
          165,
          312
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 312,
          "r": 11
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 9,
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
        "colorNumber": 9,
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
        "colorNumber": 9,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "pancakes-stack",
    "name": "Pancake Stack",
    "emoji": "🥞",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#8D6E63",
      "#FFD54F",
      "#FFA000",
      "#1E88E5",
      "#B0BEC5"
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
        "id": "pancake-shadow",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "pancake-3",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 305,
          "rx": 105,
          "ry": 35
        }
      },
      {
        "id": "pancake-3-side",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,305 C 45,340 255,340 255,305 Z"
        }
      },
      {
        "id": "pancake-2",
        "colorNumber": 2,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 245,
          "rx": 105,
          "ry": 35
        }
      },
      {
        "id": "pancake-2-side",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,245 C 45,280 255,280 255,245 Z"
        }
      },
      {
        "id": "pancake-1",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 105,
          "ry": 35
        }
      },
      {
        "id": "pancake-1-side",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,185 C 45,220 255,220 255,185 Z"
        }
      },
      {
        "id": "butter-cube",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 145,
          "w": 30,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "syrup-waterfall",
        "colorNumber": 6,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,175 C 130,235 170,235 170,175 Z"
        }
      },
      {
        "id": "blueberry-1",
        "colorNumber": 7,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 175,
          "r": 10
        }
      },
      {
        "id": "blueberry-2",
        "colorNumber": 7,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 175,
          "r": 10
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
        "id": "food-spark-1",
        "colorNumber": 8,
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
        "id": "food-spark-2",
        "colorNumber": 8,
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "croissant-bakery",
    "name": "Butter Croissant",
    "emoji": "🥐",
    "category": "food",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF8E1",
      "#D4A373",
      "#BC6C25",
      "#8D6E63",
      "#FFD54F",
      "#B0BEC5"
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
        "id": "croissant-shadow",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 365,
          "rx": 110,
          "ry": 18
        }
      },
      {
        "id": "croissant-base",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,270 C 40,120 260,120 260,270 C 230,240 190,290 150,290 C 110,290 70,240 40,270 Z"
        }
      },
      {
        "id": "segment-center",
        "colorNumber": 2,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 45,
          "ry": 65
        }
      },
      {
        "id": "segment-center-shade",
        "colorNumber": 4,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 38,
          "ry": 55
        }
      },
      {
        "id": "segment-left",
        "colorNumber": 2,
        "label": [
          100,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 215,
          "rx": 35,
          "ry": 50
        }
      },
      {
        "id": "segment-right",
        "colorNumber": 2,
        "label": [
          200,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 215,
          "rx": 35,
          "ry": 50
        }
      },
      {
        "id": "tip-left",
        "colorNumber": 3,
        "label": [
          45,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 265,
          "r": 14
        }
      },
      {
        "id": "tip-right",
        "colorNumber": 3,
        "label": [
          255,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 265,
          "r": 14
        }
      },
      {
        "id": "glaze-shine-1",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 20,
          "ry": 8
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
        "id": "food-spark-1",
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
        "id": "food-spark-2",
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
        "id": "food-dot-1",
        "colorNumber": 2,
        "label": [
          65,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-dot-2",
        "colorNumber": 2,
        "label": [
          235,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 360,
          "r": 4
        }
      },
      {
        "id": "food-crumb-1",
        "colorNumber": 3,
        "label": [
          55,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-crumb-2",
        "colorNumber": 3,
        "label": [
          245,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 245,
          "cy": 345,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "food-star-1",
        "colorNumber": 4,
        "label": [
          75,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-star-2",
        "colorNumber": 4,
        "label": [
          225,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 45,
          "r": 7
        }
      },
      {
        "id": "food-deco-1",
        "colorNumber": 5,
        "label": [
          35,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "food-deco-2",
        "colorNumber": 5,
        "label": [
          265,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 160,
          "r": 5
        }
      }
    ]
  }
];
