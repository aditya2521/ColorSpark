import { ImageTemplate } from '../../types';

// Category: space (bespoke unique templates, no filler regions)
export const SPACE_TEMPLATES: ImageTemplate[] = [
  {
    "id": "rocket",
    "name": "Space Rocket",
    "emoji": "🚀",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFFFFF",
      "#D32F2F",
      "#0288D1",
      "#FFD54F",
      "#FF6D00",
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
        "id": "nosecone",
        "colorNumber": 3,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,30 185,110 115,110"
        }
      },
      {
        "id": "fuselage",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 110,
          "w": 70,
          "h": 140,
          "rx": 4
        }
      },
      {
        "id": "stripe-red",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 135,
          "w": 70,
          "h": 10
        }
      },
      {
        "id": "porthole-frame",
        "colorNumber": 7,
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
        "id": "porthole-glass",
        "colorNumber": 4,
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
        "id": "porthole-shine",
        "colorNumber": 2,
        "label": [
          146,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 146,
          "cy": 180,
          "r": 4
        }
      },
      {
        "id": "fin-left",
        "colorNumber": 3,
        "label": [
          85,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,190 70,265 115,250"
        }
      },
      {
        "id": "fin-right",
        "colorNumber": 3,
        "label": [
          215,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "185,190 230,265 185,250"
        }
      },
      {
        "id": "fin-center",
        "colorNumber": 7,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,210 155,210 155,250 145,250"
        }
      },
      {
        "id": "engine-nozzle",
        "colorNumber": 7,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "130,250 170,250 162,270 138,270"
        }
      },
      {
        "id": "fire-outer",
        "colorNumber": 3,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,270 165,270 150,375"
        }
      },
      {
        "id": "fire-mid",
        "colorNumber": 6,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,270 160,270 150,345"
        }
      },
      {
        "id": "fire-core",
        "colorNumber": 5,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,270 156,270 150,315"
        }
      },
      {
        "id": "star-1",
        "colorNumber": 2,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 65,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 2,
        "label": [
          255,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 65,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 5,
        "label": [
          60,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 145,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 5,
        "label": [
          240,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 145,
          "r": 4
        }
      },
      {
        "id": "star-5",
        "colorNumber": 2,
        "label": [
          50,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "star-6",
        "colorNumber": 2,
        "label": [
          250,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "star-7",
        "colorNumber": 2,
        "label": [
          90,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 45,
          "r": 3
        }
      },
      {
        "id": "star-8",
        "colorNumber": 2,
        "label": [
          210,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 45,
          "r": 3
        }
      },
      {
        "id": "spark-l",
        "colorNumber": 5,
        "label": [
          35,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 180,
          "r": 4
        }
      },
      {
        "id": "spark-r",
        "colorNumber": 5,
        "label": [
          265,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 180,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "ufo",
    "name": "UFO",
    "emoji": "🛸",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#B0BEC5",
      "#00E5FF",
      "#76FF03",
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
        "id": "tractor-beam",
        "colorNumber": 5,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,225 185,225 255,385 45,385"
        }
      },
      {
        "id": "cockpit-dome",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 45
        }
      },
      {
        "id": "alien-head",
        "colorNumber": 5,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 16
        }
      },
      {
        "id": "alien-eye-l",
        "colorNumber": 1,
        "label": [
          144,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 144,
          "cy": 162,
          "r": 4
        }
      },
      {
        "id": "alien-eye-r",
        "colorNumber": 1,
        "label": [
          156,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 156,
          "cy": 162,
          "r": 4
        }
      },
      {
        "id": "saucer-upper-hull",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 110,
          "ry": 35
        }
      },
      {
        "id": "saucer-lower-rim",
        "colorNumber": 2,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "nav-light-1",
        "colorNumber": 6,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 200,
          "r": 7
        }
      },
      {
        "id": "nav-light-2",
        "colorNumber": 7,
        "label": [
          105,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 210,
          "r": 7
        }
      },
      {
        "id": "nav-light-3",
        "colorNumber": 6,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 8
        }
      },
      {
        "id": "nav-light-4",
        "colorNumber": 7,
        "label": [
          195,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 210,
          "r": 7
        }
      },
      {
        "id": "nav-light-5",
        "colorNumber": 6,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 200,
          "r": 7
        }
      },
      {
        "id": "star-1",
        "colorNumber": 8,
        "label": [
          50,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 65,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 8,
        "label": [
          250,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 65,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 8,
        "label": [
          70,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 120,
          "r": 3
        }
      },
      {
        "id": "star-4",
        "colorNumber": 8,
        "label": [
          230,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 120,
          "r": 3
        }
      },
      {
        "id": "beam-particle-1",
        "colorNumber": 8,
        "label": [
          130,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "beam-particle-2",
        "colorNumber": 8,
        "label": [
          170,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 310,
          "r": 6
        }
      },
      {
        "id": "beam-particle-3",
        "colorNumber": 8,
        "label": [
          140,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 350,
          "r": 5
        }
      },
      {
        "id": "nebula-glow",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 80,
          "r": 35
        }
      },
      {
        "id": "space-dust-1",
        "colorNumber": 4,
        "label": [
          40,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 280,
          "r": 4
        }
      },
      {
        "id": "space-dust-2",
        "colorNumber": 4,
        "label": [
          260,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 280,
          "r": 4
        }
      },
      {
        "id": "planet-dist",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 12
        }
      }
    ]
  },
  {
    "id": "spacegirl",
    "name": "Space Girl",
    "emoji": "👩‍🚀",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFFFFF",
      "#F48FB1",
      "#FFD54F",
      "#00E5FF",
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
        "id": "suit-torso",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 200,
          "w": 100,
          "h": 120,
          "rx": 12
        }
      },
      {
        "id": "chest-pack",
        "colorNumber": 6,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 225,
          "w": 60,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "dial-1",
        "colorNumber": 5,
        "label": [
          135,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 245,
          "r": 5
        }
      },
      {
        "id": "dial-2",
        "colorNumber": 4,
        "label": [
          165,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 245,
          "r": 5
        }
      },
      {
        "id": "helmet-outer",
        "colorNumber": 2,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 65
        }
      },
      {
        "id": "helmet-neck",
        "colorNumber": 6,
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
        "id": "golden-visor",
        "colorNumber": 4,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 135,
          "rx": 48,
          "ry": 35
        }
      },
      {
        "id": "visor-shine",
        "colorNumber": 2,
        "label": [
          140,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 125,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "stripe-l",
        "colorNumber": 3,
        "label": [
          90,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 205,
          "w": 20,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "stripe-r",
        "colorNumber": 3,
        "label": [
          210,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 205,
          "w": 20,
          "h": 10,
          "rx": 2
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
        "colorNumber": 4,
        "label": [
          55,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          245,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "star-5",
        "colorNumber": 2,
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
        "id": "star-6",
        "colorNumber": 2,
        "label": [
          250,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 130,
          "r": 4
        }
      },
      {
        "id": "spark-1",
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
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          200,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "antenna-bulb",
        "colorNumber": 3,
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
        "id": "badge-mission",
        "colorNumber": 3,
        "label": [
          135,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 290,
          "r": 8
        }
      },
      {
        "id": "badge-flag",
        "colorNumber": 5,
        "label": [
          165,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 290,
          "r": 8
        }
      },
      {
        "id": "dust-1",
        "colorNumber": 4,
        "label": [
          30,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 230,
          "r": 4
        }
      },
      {
        "id": "dust-2",
        "colorNumber": 4,
        "label": [
          270,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 230,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "space-station",
    "name": "Space Station",
    "emoji": "🛰️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#01579B",
      "#ECEFF1",
      "#78909C",
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
        "id": "truss",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 195,
          "w": 220,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "central-module",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 160,
          "w": 50,
          "h": 80,
          "rx": 6
        }
      },
      {
        "id": "dock-top",
        "colorNumber": 5,
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
        "id": "dock-bot",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 14
        }
      },
      {
        "id": "cupola",
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
        "id": "solar-l1",
        "colorNumber": 2,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 100,
          "w": 50,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "solar-l2",
        "colorNumber": 2,
        "label": [
          75,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 225,
          "w": 50,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "solar-r1",
        "colorNumber": 2,
        "label": [
          225,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 100,
          "w": 50,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "solar-r2",
        "colorNumber": 2,
        "label": [
          225,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 225,
          "w": 50,
          "h": 75,
          "rx": 2
        }
      },
      {
        "id": "grid-l",
        "colorNumber": 3,
        "label": [
          75,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 73,
          "y": 100,
          "w": 4,
          "h": 200
        }
      },
      {
        "id": "grid-r",
        "colorNumber": 3,
        "label": [
          225,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 223,
          "y": 100,
          "w": 4,
          "h": 200
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
        "id": "dish-antenna",
        "colorNumber": 4,
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
        "id": "radiator-wing-1",
        "colorNumber": 4,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 175,
          "r": 8
        }
      },
      {
        "id": "earth-curve",
        "colorNumber": 2,
        "label": [
          150,
          390
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 390,
          "r": 80
        }
      },
      {
        "id": "earth-cloud",
        "colorNumber": 7,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 350,
          "r": 30
        }
      },
      {
        "id": "sun-glint",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "sparkle-1",
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
        "id": "sparkle-2",
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
        "id": "nav-beacon",
        "colorNumber": 6,
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
      }
    ]
  },
  {
    "id": "nebula-cloud",
    "name": "Nebula Cloud",
    "emoji": "🌌",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#050014",
      "#311B92",
      "#6A1B9A",
      "#AD1457",
      "#00E5FF",
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
        "id": "nebula-core",
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
        "id": "nebula-swirl",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 95,
          "ry": 60
        }
      },
      {
        "id": "nebula-glow",
        "colorNumber": 4,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 190,
          "rx": 70,
          "ry": 40
        }
      },
      {
        "id": "bright-core",
        "colorNumber": 3,
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
        "id": "center-star",
        "colorNumber": 7,
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
        "id": "star-cyan-1",
        "colorNumber": 5,
        "label": [
          65,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 110,
          "r": 7
        }
      },
      {
        "id": "star-cyan-2",
        "colorNumber": 5,
        "label": [
          235,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 290,
          "r": 7
        }
      },
      {
        "id": "star-gold-1",
        "colorNumber": 6,
        "label": [
          225,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "star-gold-2",
        "colorNumber": 6,
        "label": [
          75,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 285,
          "r": 6
        }
      },
      {
        "id": "star-white-1",
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
        "id": "star-white-2",
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
        "id": "dust-ring-1",
        "colorNumber": 2,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 140,
          "r": 18
        }
      },
      {
        "id": "dust-ring-2",
        "colorNumber": 2,
        "label": [
          200,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 260,
          "r": 18
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          110,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 50,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          190,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 50,
          "r": 5
        }
      },
      {
        "id": "spark-3",
        "colorNumber": 6,
        "label": [
          40,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 210,
          "r": 5
        }
      },
      {
        "id": "spark-4",
        "colorNumber": 6,
        "label": [
          260,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 210,
          "r": 5
        }
      },
      {
        "id": "spark-5",
        "colorNumber": 7,
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
        "id": "spark-6",
        "colorNumber": 7,
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
        "id": "cluster-1",
        "colorNumber": 6,
        "label": [
          140,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "cluster-2",
        "colorNumber": 6,
        "label": [
          160,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 280,
          "r": 8
        }
      },
      {
        "id": "gas-lobe-l",
        "colorNumber": 4,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 200,
          "r": 25
        }
      },
      {
        "id": "gas-lobe-r",
        "colorNumber": 4,
        "label": [
          220,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 200,
          "r": 25
        }
      }
    ]
  },
  {
    "id": "alien-world",
    "name": "Alien World",
    "emoji": "🌄",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#4A148C",
      "#7B1FA2",
      "#00E5FF",
      "#76FF03",
      "#FFD54F",
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
        "id": "giant-moon",
        "colorNumber": 4,
        "label": [
          75,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 90,
          "r": 45
        }
      },
      {
        "id": "small-moon",
        "colorNumber": 6,
        "label": [
          220,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "alien-peak-1",
        "colorNumber": 2,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,320 100,160 200,320"
        }
      },
      {
        "id": "alien-peak-2",
        "colorNumber": 3,
        "label": [
          200,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,320 210,140 300,320"
        }
      },
      {
        "id": "crystal-spire-1",
        "colorNumber": 4,
        "label": [
          50,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 42,
          "y": 260,
          "w": 16,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "crystal-spire-2",
        "colorNumber": 5,
        "label": [
          250,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 242,
          "y": 250,
          "w": 16,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "alien-ground",
        "colorNumber": 2,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 320,
          "w": 300,
          "h": 80
        }
      },
      {
        "id": "glow-shroom-1",
        "colorNumber": 5,
        "label": [
          90,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 350,
          "r": 14
        }
      },
      {
        "id": "glow-shroom-2",
        "colorNumber": 4,
        "label": [
          160,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 355,
          "r": 12
        }
      },
      {
        "id": "glow-shroom-3",
        "colorNumber": 5,
        "label": [
          210,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 345,
          "r": 15
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
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
        "label": [
          270,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          30,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 150,
          "r": 4
        }
      },
      {
        "id": "star-5",
        "colorNumber": 6,
        "label": [
          270,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 150,
          "r": 4
        }
      },
      {
        "id": "crater-1",
        "colorNumber": 2,
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
        "id": "crater-2",
        "colorNumber": 2,
        "label": [
          85,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 105,
          "r": 10
        }
      },
      {
        "id": "spore-1",
        "colorNumber": 5,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 5
        }
      },
      {
        "id": "spore-2",
        "colorNumber": 4,
        "label": [
          130,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 290,
          "r": 5
        }
      },
      {
        "id": "spore-3",
        "colorNumber": 5,
        "label": [
          185,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 300,
          "r": 5
        }
      },
      {
        "id": "spore-4",
        "colorNumber": 4,
        "label": [
          230,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 290,
          "r": 5
        }
      },
      {
        "id": "sky-sparkle-1",
        "colorNumber": 7,
        "label": [
          120,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 110,
          "r": 3
        }
      },
      {
        "id": "sky-sparkle-2",
        "colorNumber": 7,
        "label": [
          180,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 110,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "black-hole",
    "name": "Black Hole",
    "emoji": "🕳️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#000000",
      "#FF6D00",
      "#FFD54F",
      "#00E5FF",
      "#311B92",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "void-bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "grav-warp-aura",
        "colorNumber": 5,
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
        "id": "accretion-disk-outer",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 135,
          "ry": 45
        }
      },
      {
        "id": "accretion-disk-mid",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 115,
          "ry": 32
        }
      },
      {
        "id": "accretion-disk-inner",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 85,
          "ry": 20
        }
      },
      {
        "id": "event-horizon",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 48
        }
      },
      {
        "id": "photon-sphere-ring",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 52
        }
      },
      {
        "id": "jet-top",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,150 155,150 150,10"
        }
      },
      {
        "id": "jet-bot",
        "colorNumber": 4,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,250 155,250 150,390"
        }
      },
      {
        "id": "warp-knot-1",
        "colorNumber": 3,
        "label": [
          60,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "warp-knot-2",
        "colorNumber": 3,
        "label": [
          240,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 195,
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
        "id": "spark-3",
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
        "id": "spark-4",
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
        "id": "lens-arc-l",
        "colorNumber": 3,
        "label": [
          80,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 140,
          "r": 15
        }
      },
      {
        "id": "lens-arc-r",
        "colorNumber": 3,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 260,
          "r": 15
        }
      },
      {
        "id": "radiation-pulse-1",
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
      },
      {
        "id": "radiation-pulse-2",
        "colorNumber": 6,
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
      },
      {
        "id": "micro-singularity",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "astro-209",
    "name": "Spacewalker in Orbit",
    "emoji": "🧑‍🚀",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#4CAF50",
      "#FFFFFF",
      "#ECEFF1",
      "#FFD54F",
      "#78909C"
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
        "id": "earth-globe",
        "colorNumber": 2,
        "label": [
          250,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 360,
          "r": 120
        }
      },
      {
        "id": "earth-continent",
        "colorNumber": 3,
        "label": [
          220,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 320,
          "rx": 50,
          "ry": 30
        }
      },
      {
        "id": "helmet-dome",
        "colorNumber": 5,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 150,
          "r": 45
        }
      },
      {
        "id": "gold-visor",
        "colorNumber": 6,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 150,
          "rx": 32,
          "ry": 22
        }
      },
      {
        "id": "suit-body",
        "colorNumber": 4,
        "label": [
          125,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 190,
          "w": 70,
          "h": 80,
          "rx": 8
        }
      },
      {
        "id": "backpack-life-support",
        "colorNumber": 7,
        "label": [
          70,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 175,
          "w": 35,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "arm-left",
        "colorNumber": 4,
        "label": [
          65,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 170,
          "w": 25,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "arm-right",
        "colorNumber": 4,
        "label": [
          180,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 195,
          "w": 40,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "safety-tether",
        "colorNumber": 6,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,260 C 40,320 80,380 140,380"
        }
      },
      {
        "id": "tether-clip",
        "colorNumber": 7,
        "label": [
          65,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 260,
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
        "colorNumber": 6,
        "label": [
          50,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 120,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          250,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 120,
          "r": 4
        }
      },
      {
        "id": "dial-1",
        "colorNumber": 2,
        "label": [
          115,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 215,
          "r": 4
        }
      },
      {
        "id": "dial-2",
        "colorNumber": 6,
        "label": [
          135,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 215,
          "r": 4
        }
      },
      {
        "id": "camera-mount",
        "colorNumber": 7,
        "label": [
          165,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "cloud-curl",
        "colorNumber": 4,
        "label": [
          260,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 300,
          "r": 15
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
          "r": 4
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
          "r": 4
        }
      },
      {
        "id": "glove-l",
        "colorNumber": 7,
        "label": [
          60,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 165,
          "r": 8
        }
      },
      {
        "id": "glove-r",
        "colorNumber": 7,
        "label": [
          200,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "thruster-jet",
        "colorNumber": 2,
        "label": [
          55,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 175,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "saturn-rings",
    "name": "Ringed Saturn",
    "emoji": "🪐",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFE082",
      "#FFCA28",
      "#FFA000",
      "#FFD54F",
      "#FFF8E1",
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
        "id": "saturn-glow",
        "colorNumber": 5,
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
        "id": "saturn-body",
        "colorNumber": 3,
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
        "id": "band-1",
        "colorNumber": 4,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 70,
          "ry": 14
        }
      },
      {
        "id": "band-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 74,
          "ry": 16
        }
      },
      {
        "id": "band-3",
        "colorNumber": 4,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 70,
          "ry": 14
        }
      },
      {
        "id": "ring-outer-a",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 138,
          "ry": 42
        }
      },
      {
        "id": "ring-gap-cassini",
        "colorNumber": 1,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 124,
          "ry": 37
        }
      },
      {
        "id": "ring-inner-b",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 115,
          "ry": 33
        }
      },
      {
        "id": "ring-crepe-c",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 95,
          "ry": 27
        }
      },
      {
        "id": "moon-titan",
        "colorNumber": 4,
        "label": [
          55,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 110,
          "r": 12
        }
      },
      {
        "id": "moon-enceladus",
        "colorNumber": 6,
        "label": [
          245,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 290,
          "r": 8
        }
      },
      {
        "id": "moon-mimas",
        "colorNumber": 6,
        "label": [
          235,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 100,
          "r": 6
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
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          200,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "polar-hexagon",
        "colorNumber": 4,
        "label": [
          150,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 132,
          "r": 10
        }
      },
      {
        "id": "ring-particle-1",
        "colorNumber": 6,
        "label": [
          60,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 210,
          "r": 4
        }
      },
      {
        "id": "ring-particle-2",
        "colorNumber": 6,
        "label": [
          240,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 190,
          "r": 4
        }
      },
      {
        "id": "star-dust-1",
        "colorNumber": 7,
        "label": [
          90,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 340,
          "r": 3
        }
      },
      {
        "id": "star-dust-2",
        "colorNumber": 7,
        "label": [
          210,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 340,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "robot",
    "name": "Friendly Robot",
    "emoji": "🤖",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#B0BEC5",
      "#00E5FF",
      "#FFD54F",
      "#D32F2F",
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
        "id": "head-box",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 75,
          "w": 110,
          "h": 90,
          "rx": 12
        }
      },
      {
        "id": "ear-left",
        "colorNumber": 2,
        "label": [
          85,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 105,
          "w": 20,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "ear-right",
        "colorNumber": 2,
        "label": [
          215,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 105,
          "w": 20,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "antenna-stem",
        "colorNumber": 2,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 40,
          "w": 8,
          "h": 35
        }
      },
      {
        "id": "antenna-light",
        "colorNumber": 6,
        "label": [
          150,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 35,
          "r": 10
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 4,
        "label": [
          125,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 4,
        "label": [
          175,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "mouth-meter",
        "colorNumber": 5,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 138,
          "w": 60,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          150,
          172
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 165,
          "w": 30,
          "h": 14
        }
      },
      {
        "id": "torso",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 179,
          "w": 120,
          "h": 110,
          "rx": 10
        }
      },
      {
        "id": "chest-screen",
        "colorNumber": 4,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 200,
          "w": 70,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "meter-dial-1",
        "colorNumber": 6,
        "label": [
          130,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "meter-dial-2",
        "colorNumber": 5,
        "label": [
          170,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "arm-l",
        "colorNumber": 2,
        "label": [
          65,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 195,
          "w": 25,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "arm-r",
        "colorNumber": 2,
        "label": [
          235,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 195,
          "w": 25,
          "h": 70,
          "rx": 6
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
        "colorNumber": 4,
        "label": [
          100,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 30,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
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
      },
      {
        "id": "spark-3",
        "colorNumber": 5,
        "label": [
          50,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "spark-4",
        "colorNumber": 5,
        "label": [
          250,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 360,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "astronaut",
    "name": "Spacewalker",
    "emoji": "👨‍🚀",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFFFFF",
      "#ECEFF1",
      "#FFD54F",
      "#0288D1",
      "#78909C",
      "#D32F2F"
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
        "id": "lunar-hill",
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
          "ry": 35
        }
      },
      {
        "id": "flag-pole",
        "colorNumber": 6,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 228,
          "y": 200,
          "w": 4,
          "h": 160
        }
      },
      {
        "id": "flag-banner",
        "colorNumber": 7,
        "label": [
          255,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "232,200 280,215 232,240"
        }
      },
      {
        "id": "helmet",
        "colorNumber": 2,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 150,
          "r": 45
        }
      },
      {
        "id": "visor",
        "colorNumber": 4,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 150,
          "rx": 32,
          "ry": 22
        }
      },
      {
        "id": "body-suit",
        "colorNumber": 2,
        "label": [
          130,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 195,
          "w": 70,
          "h": 75,
          "rx": 6
        }
      },
      {
        "id": "chest-box",
        "colorNumber": 6,
        "label": [
          130,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 210,
          "w": 40,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "leg-l",
        "colorNumber": 2,
        "label": [
          110,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 270,
          "w": 20,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "leg-r",
        "colorNumber": 2,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 270,
          "w": 20,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "boot-l",
        "colorNumber": 6,
        "label": [
          105,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 340,
          "w": 30,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "boot-r",
        "colorNumber": 6,
        "label": [
          155,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 340,
          "w": 30,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "crater-1",
        "colorNumber": 6,
        "label": [
          50,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 375,
          "r": 12
        }
      },
      {
        "id": "crater-2",
        "colorNumber": 6,
        "label": [
          180,
          385
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 385,
          "r": 10
        }
      },
      {
        "id": "earth-crescent",
        "colorNumber": 5,
        "label": [
          65,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 75,
          "r": 25
        }
      },
      {
        "id": "earth-cloud",
        "colorNumber": 2,
        "label": [
          60,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 70,
          "r": 10
        }
      },
      {
        "id": "star-1",
        "colorNumber": 2,
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
        "colorNumber": 4,
        "label": [
          40,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 170,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 4,
        "label": [
          260,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 150,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 2,
        "label": [
          100,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 35,
          "r": 4
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          200,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 35,
          "r": 4
        }
      },
      {
        "id": "suit-patch-1",
        "colorNumber": 5,
        "label": [
          105,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 215,
          "r": 5
        }
      },
      {
        "id": "suit-patch-2",
        "colorNumber": 7,
        "label": [
          155,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 215,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "lunar-moon",
    "name": "Glowing Moon",
    "emoji": "🌕",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFF8E1",
      "#FFE082",
      "#FFCA28",
      "#D7CCC8",
      "#B0BEC5",
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
        "id": "lunar-glow",
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
        "id": "moon-disc",
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
        "id": "tycho-crater",
        "colorNumber": 5,
        "label": [
          140,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 250,
          "r": 18
        }
      },
      {
        "id": "copernicus-crater",
        "colorNumber": 5,
        "label": [
          110,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 170,
          "r": 15
        }
      },
      {
        "id": "kepler-crater",
        "colorNumber": 6,
        "label": [
          80,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "mare-tranquillitatis",
        "colorNumber": 4,
        "label": [
          180,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 170,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "mare-serenitatis",
        "colorNumber": 4,
        "label": [
          170,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 130,
          "rx": 25,
          "ry": 18
        }
      },
      {
        "id": "oceanus-procellarum",
        "colorNumber": 4,
        "label": [
          100,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 210,
          "rx": 35,
          "ry": 22
        }
      },
      {
        "id": "crater-small-1",
        "colorNumber": 6,
        "label": [
          190,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "crater-small-2",
        "colorNumber": 6,
        "label": [
          140,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 120,
          "r": 9
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
        "id": "ray-ejecta-1",
        "colorNumber": 7,
        "label": [
          155,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 265,
          "r": 4
        }
      },
      {
        "id": "ray-ejecta-2",
        "colorNumber": 7,
        "label": [
          125,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 265,
          "r": 4
        }
      },
      {
        "id": "ray-ejecta-3",
        "colorNumber": 7,
        "label": [
          140,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 275,
          "r": 4
        }
      },
      {
        "id": "apollo-lander-site",
        "colorNumber": 7,
        "label": [
          180,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 185,
          "r": 4
        }
      },
      {
        "id": "satellite-orbiter",
        "colorNumber": 5,
        "label": [
          60,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 100,
          "r": 6
        }
      },
      {
        "id": "cosmic-dust-1",
        "colorNumber": 7,
        "label": [
          35,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 230,
          "r": 3
        }
      },
      {
        "id": "cosmic-dust-2",
        "colorNumber": 7,
        "label": [
          265,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 230,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "blazing-comet",
    "name": "Blazing Comet",
    "emoji": "☄️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#0288D1",
      "#FFD54F",
      "#FFFFFF",
      "#311B92"
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
        "id": "ion-tail-wide",
        "colorNumber": 6,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,40 240,290 120,40"
        }
      },
      {
        "id": "dust-tail-curved",
        "colorNumber": 3,
        "label": [
          130,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "70,40 245,290 160,70"
        }
      },
      {
        "id": "plasma-core-tail",
        "colorNumber": 2,
        "label": [
          170,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,70 250,290 190,130"
        }
      },
      {
        "id": "coma-outer",
        "colorNumber": 2,
        "label": [
          240,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 285,
          "r": 42
        }
      },
      {
        "id": "coma-mid",
        "colorNumber": 4,
        "label": [
          240,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 285,
          "r": 28
        }
      },
      {
        "id": "nucleus-solid",
        "colorNumber": 5,
        "label": [
          240,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 285,
          "r": 15
        }
      },
      {
        "id": "nucleus-sparkle",
        "colorNumber": 5,
        "label": [
          238,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 282,
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
        "colorNumber": 4,
        "label": [
          100,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 350,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 4,
        "label": [
          50,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          90,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "tail-knot-1",
        "colorNumber": 2,
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
        "id": "tail-knot-2",
        "colorNumber": 2,
        "label": [
          180,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "tail-knot-3",
        "colorNumber": 4,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 250,
          "r": 12
        }
      },
      {
        "id": "debris-1",
        "colorNumber": 5,
        "label": [
          195,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 330,
          "r": 5
        }
      },
      {
        "id": "debris-2",
        "colorNumber": 5,
        "label": [
          260,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "debris-3",
        "colorNumber": 2,
        "label": [
          110,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "debris-4",
        "colorNumber": 2,
        "label": [
          140,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "gas-stream-1",
        "colorNumber": 2,
        "label": [
          75,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 75,
          "r": 6
        }
      },
      {
        "id": "gas-stream-2",
        "colorNumber": 2,
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
        "id": "deep-space-dot",
        "colorNumber": 5,
        "label": [
          30,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 270,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "shooting-star",
    "name": "Shooting Star",
    "emoji": "🌠",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFD54F",
      "#FFA000",
      "#FF6D00",
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
        "id": "trail-orange",
        "colorNumber": 4,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,30 240,300 100,30"
        }
      },
      {
        "id": "trail-gold",
        "colorNumber": 3,
        "label": [
          130,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,30 240,300 130,50"
        }
      },
      {
        "id": "trail-bright",
        "colorNumber": 2,
        "label": [
          160,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "100,50 240,300 160,90"
        }
      },
      {
        "id": "star-meteor",
        "colorNumber": 5,
        "label": [
          240,
          300
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,265 248,288 273,288 253,303 261,326 240,311 219,326 227,303 207,288 232,288"
        }
      },
      {
        "id": "meteor-core",
        "colorNumber": 2,
        "label": [
          240,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "meteor-spark",
        "colorNumber": 5,
        "label": [
          240,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 300,
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
        "colorNumber": 6,
        "label": [
          110,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 350,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 6,
        "label": [
          60,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 170,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 6,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 240,
          "r": 5
        }
      },
      {
        "id": "spark-3",
        "colorNumber": 2,
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
        "id": "spark-4",
        "colorNumber": 2,
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
        "id": "trail-sparkle-1",
        "colorNumber": 5,
        "label": [
          140,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "trail-sparkle-2",
        "colorNumber": 5,
        "label": [
          170,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "trail-sparkle-3",
        "colorNumber": 5,
        "label": [
          200,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "constellation-1",
        "colorNumber": 6,
        "label": [
          35,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "constellation-2",
        "colorNumber": 6,
        "label": [
          70,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 95,
          "r": 4
        }
      },
      {
        "id": "constellation-3",
        "colorNumber": 6,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 280,
          "r": 4
        }
      },
      {
        "id": "constellation-4",
        "colorNumber": 6,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 295,
          "r": 4
        }
      },
      {
        "id": "corona-flare-l",
        "colorNumber": 2,
        "label": [
          220,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 295,
          "r": 8
        }
      },
      {
        "id": "corona-flare-r",
        "colorNumber": 2,
        "label": [
          260,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 305,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "mars-rover",
    "name": "Curiosity Rover",
    "emoji": "🚜",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A0000",
      "#D32F2F",
      "#FF6D00",
      "#78909C",
      "#37474F",
      "#FFD54F",
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
        "id": "mars-ridge",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,280 120,240 210,260 300,240 300,400 0,400"
        }
      },
      {
        "id": "chassis",
        "colorNumber": 4,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 220,
          "w": 120,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "mast-cam-pole",
        "colorNumber": 5,
        "label": [
          120,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 116,
          "y": 130,
          "w": 8,
          "h": 90
        }
      },
      {
        "id": "mast-cam-head",
        "colorNumber": 4,
        "label": [
          120,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 115,
          "w": 30,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "mast-lens-1",
        "colorNumber": 6,
        "label": [
          114,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 114,
          "cy": 125,
          "r": 5
        }
      },
      {
        "id": "mast-lens-2",
        "colorNumber": 6,
        "label": [
          126,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 126,
          "cy": 125,
          "r": 5
        }
      },
      {
        "id": "rtg-nuclear-power",
        "colorNumber": 5,
        "label": [
          195,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 200,
          "w": 30,
          "h": 25,
          "rx": 2
        }
      },
      {
        "id": "dish-antenna-mast",
        "colorNumber": 5,
        "label": [
          165,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 180,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "dish-antenna",
        "colorNumber": 4,
        "label": [
          163,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 175,
          "r": 12
        }
      },
      {
        "id": "wheel-1",
        "colorNumber": 5,
        "label": [
          85,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 320,
          "r": 18
        }
      },
      {
        "id": "wheel-2",
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
        "id": "wheel-3",
        "colorNumber": 5,
        "label": [
          215,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 320,
          "r": 18
        }
      },
      {
        "id": "hub-1",
        "colorNumber": 4,
        "label": [
          85,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "hub-2",
        "colorNumber": 4,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "hub-3",
        "colorNumber": 4,
        "label": [
          215,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "rocker-bogie-arm",
        "colorNumber": 5,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,320 L 150,265 L 215,320"
        }
      },
      {
        "id": "mars-rock-1",
        "colorNumber": 3,
        "label": [
          50,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 360,
          "r": 14
        }
      },
      {
        "id": "mars-rock-2",
        "colorNumber": 3,
        "label": [
          260,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 355,
          "r": 12
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
        "colorNumber": 6,
        "label": [
          180,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 65,
          "r": 4
        }
      },
      {
        "id": "phobos-moon",
        "colorNumber": 4,
        "label": [
          65,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 90,
          "r": 8
        }
      },
      {
        "id": "deimos-moon",
        "colorNumber": 4,
        "label": [
          230,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 100,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "planet-earth",
    "name": "Planet Earth",
    "emoji": "🌍",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#01579B",
      "#4CAF50",
      "#2E7D32",
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
        "id": "atmo-glow",
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
        "id": "ocean-globe",
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
        "id": "africa-continent",
        "colorNumber": 4,
        "label": [
          155,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 205,
          "rx": 35,
          "ry": 45
        }
      },
      {
        "id": "europe-continent",
        "colorNumber": 5,
        "label": [
          145,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 145,
          "rx": 28,
          "ry": 20
        }
      },
      {
        "id": "asia-continent",
        "colorNumber": 4,
        "label": [
          195,
          155
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 155,
          "rx": 35,
          "ry": 25
        }
      },
      {
        "id": "americas-land",
        "colorNumber": 5,
        "label": [
          85,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 185,
          "rx": 22,
          "ry": 45
        }
      },
      {
        "id": "cloud-band-1",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 130,
          "rx": 75,
          "ry": 10
        }
      },
      {
        "id": "cloud-band-2",
        "colorNumber": 6,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 85,
          "ry": 12
        }
      },
      {
        "id": "cloud-swirl-3",
        "colorNumber": 6,
        "label": [
          140,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 270,
          "rx": 65,
          "ry": 10
        }
      },
      {
        "id": "polar-ice-north",
        "colorNumber": 6,
        "label": [
          150,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 112,
          "r": 22
        }
      },
      {
        "id": "polar-ice-south",
        "colorNumber": 6,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 288,
          "r": 22
        }
      },
      {
        "id": "moon-companion",
        "colorNumber": 6,
        "label": [
          50,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 100,
          "r": 14
        }
      },
      {
        "id": "moon-crater",
        "colorNumber": 1,
        "label": [
          48,
          98
        ],
        "shape": {
          "kind": "circle",
          "cx": 48,
          "cy": 98,
          "r": 4
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
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          200,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "cloud-spiral-eye",
        "colorNumber": 6,
        "label": [
          195,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 225,
          "r": 8
        }
      },
      {
        "id": "ocean-specular",
        "colorNumber": 6,
        "label": [
          125,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "orbital-satellite",
        "colorNumber": 6,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "sunlight-rim",
        "colorNumber": 2,
        "label": [
          110,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 200,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "mars-red",
    "name": "Mars Planet",
    "emoji": "🔴",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#D32F2F",
      "#FF6D00",
      "#BF360C",
      "#8D6E63",
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
        "id": "mars-glow",
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
        "id": "mars-sphere",
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
        "id": "olympus-mons",
        "colorNumber": 4,
        "label": [
          115,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 170,
          "r": 22
        }
      },
      {
        "id": "olympus-caldera",
        "colorNumber": 5,
        "label": [
          115,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "valles-marineris",
        "colorNumber": 4,
        "label": [
          160,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,215 Q 160,235 210,210"
        }
      },
      {
        "id": "syrtis-major",
        "colorNumber": 5,
        "label": [
          185,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 180,
          "rx": 25,
          "ry": 35
        }
      },
      {
        "id": "hellas-basin",
        "colorNumber": 3,
        "label": [
          175,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 245,
          "rx": 25,
          "ry": 18
        }
      },
      {
        "id": "north-polar-cap",
        "colorNumber": 6,
        "label": [
          150,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 112,
          "r": 18
        }
      },
      {
        "id": "south-polar-cap",
        "colorNumber": 6,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 288,
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
        "id": "phobos-orbit",
        "colorNumber": 5,
        "label": [
          55,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "deimos-orbit",
        "colorNumber": 5,
        "label": [
          245,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "crater-1",
        "colorNumber": 4,
        "label": [
          90,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "crater-2",
        "colorNumber": 4,
        "label": [
          140,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 150,
          "r": 9
        }
      },
      {
        "id": "dust-storm-arc-1",
        "colorNumber": 3,
        "label": [
          110,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 130,
          "r": 14
        }
      },
      {
        "id": "dust-storm-arc-2",
        "colorNumber": 3,
        "label": [
          200,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 230,
          "r": 14
        }
      },
      {
        "id": "deep-sky-galaxy",
        "colorNumber": 6,
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
        "id": "sunlight-edge",
        "colorNumber": 3,
        "label": [
          100,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 190,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "jupiter-giant",
    "name": "Jupiter Giant",
    "emoji": "🌀",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFA000",
      "#FFD54F",
      "#D7CCC8",
      "#D32F2F",
      "#8D6E63",
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
        "id": "jup-glow",
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
        "id": "jup-sphere",
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
        "id": "north-temperate-belt",
        "colorNumber": 6,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 145,
          "rx": 88,
          "ry": 14
        }
      },
      {
        "id": "north-equatorial-belt",
        "colorNumber": 4,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 92,
          "ry": 16
        }
      },
      {
        "id": "equatorial-zone",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 94,
          "ry": 15
        }
      },
      {
        "id": "south-equatorial-belt",
        "colorNumber": 6,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 92,
          "ry": 16
        }
      },
      {
        "id": "south-temperate-belt",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 255,
          "rx": 88,
          "ry": 14
        }
      },
      {
        "id": "great-red-spot",
        "colorNumber": 5,
        "label": [
          185,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 225,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "red-spot-core",
        "colorNumber": 7,
        "label": [
          185,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 225,
          "r": 6
        }
      },
      {
        "id": "moon-io",
        "colorNumber": 3,
        "label": [
          50,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 120,
          "r": 10
        }
      },
      {
        "id": "moon-europa",
        "colorNumber": 7,
        "label": [
          245,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "moon-ganymede",
        "colorNumber": 4,
        "label": [
          45,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "moon-callisto",
        "colorNumber": 6,
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
        "id": "white-oval-storm-1",
        "colorNumber": 7,
        "label": [
          115,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "white-oval-storm-2",
        "colorNumber": 7,
        "label": [
          145,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "swirl-plume",
        "colorNumber": 7,
        "label": [
          140,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 175,
          "r": 7
        }
      },
      {
        "id": "polar-swirl",
        "colorNumber": 6,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 12
        }
      }
    ]
  },
  {
    "id": "neptune-ice",
    "name": "Neptune Blue",
    "emoji": "🔵",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#01579B",
      "#00ACC1",
      "#00E5FF",
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
        "id": "nep-glow",
        "colorNumber": 4,
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
        "id": "nep-sphere",
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
        "id": "great-dark-spot",
        "colorNumber": 3,
        "label": [
          125,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 185,
          "rx": 26,
          "ry": 18
        }
      },
      {
        "id": "scooter-cloud",
        "colorNumber": 6,
        "label": [
          135,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 215,
          "rx": 18,
          "ry": 6
        }
      },
      {
        "id": "cloud-band-north",
        "colorNumber": 5,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 150,
          "rx": 85,
          "ry": 8
        }
      },
      {
        "id": "cloud-band-south",
        "colorNumber": 5,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 245,
          "rx": 85,
          "ry": 8
        }
      },
      {
        "id": "moon-triton",
        "colorNumber": 5,
        "label": [
          60,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "triton-ice-geyser",
        "colorNumber": 6,
        "label": [
          58,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 58,
          "cy": 105,
          "r": 4
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
        "id": "faint-ring-arc-1",
        "colorNumber": 4,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "faint-ring-arc-2",
        "colorNumber": 4,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "cirrus-streak-1",
        "colorNumber": 6,
        "label": [
          175,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "cirrus-streak-2",
        "colorNumber": 6,
        "label": [
          195,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 235,
          "r": 7
        }
      },
      {
        "id": "small-dark-spot",
        "colorNumber": 3,
        "label": [
          180,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 245,
          "r": 10
        }
      },
      {
        "id": "polar-vortex",
        "colorNumber": 3,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 288,
          "r": 12
        }
      },
      {
        "id": "star-cluster",
        "colorNumber": 6,
        "label": [
          240,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 90,
          "r": 8
        }
      },
      {
        "id": "dust-grain-1",
        "colorNumber": 5,
        "label": [
          80,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 330,
          "r": 3
        }
      },
      {
        "id": "dust-grain-2",
        "colorNumber": 5,
        "label": [
          220,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 330,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "uranus-cyan",
    "name": "Uranus Sky",
    "emoji": "🌐",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#80DEEA",
      "#00ACC1",
      "#B2EBF2",
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
        "id": "ur-glow",
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
        "id": "ur-sphere",
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
        "id": "ur-vertical-ring-outer",
        "colorNumber": 5,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 45,
          "ry": 138
        }
      },
      {
        "id": "ur-vertical-ring-inner",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 35,
          "ry": 118
        }
      },
      {
        "id": "polar-hood",
        "colorNumber": 3,
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
        "id": "ur-haze-band",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 220,
          "rx": 90,
          "ry": 12
        }
      },
      {
        "id": "moon-miranda",
        "colorNumber": 5,
        "label": [
          100,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 70,
          "r": 10
        }
      },
      {
        "id": "moon-ariel",
        "colorNumber": 5,
        "label": [
          200,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 330,
          "r": 10
        }
      },
      {
        "id": "moon-titania",
        "colorNumber": 5,
        "label": [
          70,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 320,
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
        "id": "ring-shepherd-1",
        "colorNumber": 6,
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
        "id": "ring-shepherd-2",
        "colorNumber": 6,
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
        "id": "methane-cloud-1",
        "colorNumber": 6,
        "label": [
          180,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 185,
          "r": 6
        }
      },
      {
        "id": "methane-cloud-2",
        "colorNumber": 6,
        "label": [
          120,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "cyan-aurora-top",
        "colorNumber": 2,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "cyan-aurora-bot",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "star-twinkle-1",
        "colorNumber": 6,
        "label": [
          50,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 180,
          "r": 3
        }
      },
      {
        "id": "star-twinkle-2",
        "colorNumber": 6,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 180,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "retro-invader",
    "name": "Space Invader",
    "emoji": "👾",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#76FF03",
      "#00E5FF",
      "#D32F2F",
      "#FFFFFF",
      "#311B92"
    ],
    "regions": [
      {
        "id": "inv-bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "inv-body-core",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 150,
          "w": 120,
          "h": 90,
          "rx": 6
        }
      },
      {
        "id": "inv-antenna-l",
        "colorNumber": 2,
        "label": [
          110,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 110,
          "w": 20,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inv-antenna-r",
        "colorNumber": 2,
        "label": [
          190,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 110,
          "w": 20,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inv-eye-l",
        "colorNumber": 3,
        "label": [
          120,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 170,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "inv-eye-r",
        "colorNumber": 3,
        "label": [
          180,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 170,
          "y": 170,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "inv-pupil-l",
        "colorNumber": 1,
        "label": [
          120,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 175,
          "w": 10,
          "h": 10
        }
      },
      {
        "id": "inv-pupil-r",
        "colorNumber": 1,
        "label": [
          180,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 175,
          "w": 10,
          "h": 10
        }
      },
      {
        "id": "inv-claw-l1",
        "colorNumber": 2,
        "label": [
          65,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 160,
          "w": 35,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inv-claw-r1",
        "colorNumber": 2,
        "label": [
          235,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 160,
          "w": 35,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "inv-leg-l",
        "colorNumber": 2,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 240,
          "w": 20,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "inv-leg-r",
        "colorNumber": 2,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 240,
          "w": 20,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "inv-mouth",
        "colorNumber": 4,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 212,
          "w": 60,
          "h": 15
        }
      },
      {
        "id": "laser-shot-1",
        "colorNumber": 4,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "laser-shot-2",
        "colorNumber": 4,
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
        "id": "arcade-aura",
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
      },
      {
        "id": "score-dot-1",
        "colorNumber": 3,
        "label": [
          70,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 90,
          "r": 5
        }
      },
      {
        "id": "score-dot-2",
        "colorNumber": 3,
        "label": [
          230,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 90,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "cyber-mech",
    "name": "Titan Mech",
    "emoji": "🦾",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#37474F",
      "#D32F2F",
      "#00E5FF",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "mech-bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mech-ground",
        "colorNumber": 3,
        "label": [
          150,
          365
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
        "id": "mech-torso-armor",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 150,
          "w": 100,
          "h": 90,
          "rx": 8
        }
      },
      {
        "id": "mech-cockpit-visor",
        "colorNumber": 5,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 175,
          "w": 60,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "mech-core-reactor",
        "colorNumber": 5,
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
        "id": "shoulder-pod-l",
        "colorNumber": 3,
        "label": [
          80,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 145,
          "w": 35,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "shoulder-pod-r",
        "colorNumber": 3,
        "label": [
          220,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 145,
          "w": 35,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "cannon-barrel-l",
        "colorNumber": 2,
        "label": [
          75,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 95,
          "w": 12,
          "h": 50
        }
      },
      {
        "id": "cannon-barrel-r",
        "colorNumber": 2,
        "label": [
          225,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 218,
          "y": 95,
          "w": 12,
          "h": 50
        }
      },
      {
        "id": "missile-tip-l",
        "colorNumber": 4,
        "label": [
          76,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 76,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "missile-tip-r",
        "colorNumber": 4,
        "label": [
          224,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 224,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "mech-hip",
        "colorNumber": 3,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 240,
          "w": 70,
          "h": 20
        }
      },
      {
        "id": "mech-leg-l",
        "colorNumber": 2,
        "label": [
          105,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 260,
          "w": 20,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "mech-leg-r",
        "colorNumber": 2,
        "label": [
          195,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 260,
          "w": 20,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "mech-foot-l",
        "colorNumber": 3,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 330,
          "w": 40,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "mech-foot-r",
        "colorNumber": 3,
        "label": [
          205,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 330,
          "w": 40,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "hydraulic-knee-l",
        "colorNumber": 4,
        "label": [
          105,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 295,
          "r": 8
        }
      },
      {
        "id": "hydraulic-knee-r",
        "colorNumber": 4,
        "label": [
          195,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 295,
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
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          260,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "laser-flare-l",
        "colorNumber": 5,
        "label": [
          76,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 76,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "laser-flare-r",
        "colorNumber": 5,
        "label": [
          224,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 224,
          "cy": 80,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "bionic-walker",
    "name": "Bionic Walker",
    "emoji": "🦿",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#37474F",
      "#00E5FF",
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
        "id": "ground",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 350,
          "w": 300,
          "h": 50
        }
      },
      {
        "id": "cockpit-cabin",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 95,
          "w": 120,
          "h": 85,
          "rx": 12
        }
      },
      {
        "id": "visor-slit",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 120,
          "w": 90,
          "h": 18,
          "rx": 3
        }
      },
      {
        "id": "chin-turret",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 16
        }
      },
      {
        "id": "blaster-barrel",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 195,
          "w": 12,
          "h": 35
        }
      },
      {
        "id": "thigh-left",
        "colorNumber": 3,
        "label": [
          95,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,180 75,250 105,250"
        }
      },
      {
        "id": "thigh-right",
        "colorNumber": 3,
        "label": [
          205,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "205,180 195,250 225,250"
        }
      },
      {
        "id": "shin-left",
        "colorNumber": 2,
        "label": [
          75,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,250 65,340 95,340"
        }
      },
      {
        "id": "shin-right",
        "colorNumber": 2,
        "label": [
          225,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "215,250 205,340 235,340"
        }
      },
      {
        "id": "foot-pad-l",
        "colorNumber": 3,
        "label": [
          80,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 340,
          "w": 50,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "foot-pad-r",
        "colorNumber": 3,
        "label": [
          220,
          345
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 340,
          "w": 50,
          "h": 14,
          "rx": 2
        }
      },
      {
        "id": "knee-joint-l",
        "colorNumber": 5,
        "label": [
          85,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 250,
          "r": 8
        }
      },
      {
        "id": "knee-joint-r",
        "colorNumber": 5,
        "label": [
          215,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 250,
          "r": 8
        }
      },
      {
        "id": "searchlight",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "target-lock",
        "colorNumber": 4,
        "label": [
          190,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 160,
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
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "antenna-bulb",
        "colorNumber": 4,
        "label": [
          190,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "dust-puff-l",
        "colorNumber": 2,
        "label": [
          55,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "dust-puff-r",
        "colorNumber": 2,
        "label": [
          245,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "laser-flash",
        "colorNumber": 4,
        "label": [
          150,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 248,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "deep-dish",
    "name": "Radio Telescope",
    "emoji": "📡",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#ECEFF1",
      "#78909C",
      "#FFD54F",
      "#0288D1",
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
        "id": "ground",
        "colorNumber": 3,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 355,
          "w": 300,
          "h": 45
        }
      },
      {
        "id": "pylon-pedestal",
        "colorNumber": 3,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,355 190,355 165,245 135,245"
        }
      },
      {
        "id": "dish-parabola",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 180,
          "rx": 115,
          "ry": 65
        }
      },
      {
        "id": "dish-inner-bowl",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 180,
          "rx": 95,
          "ry": 50
        }
      },
      {
        "id": "subreflector-apex",
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
        "id": "strut-l",
        "colorNumber": 3,
        "label": [
          115,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,175 L 150,130"
        }
      },
      {
        "id": "strut-r",
        "colorNumber": 3,
        "label": [
          185,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M 235,175 L 150,130"
        }
      },
      {
        "id": "strut-b",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,195 L 150,130"
        }
      },
      {
        "id": "signal-wave-1",
        "colorNumber": 5,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 20
        }
      },
      {
        "id": "signal-wave-2",
        "colorNumber": 5,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 35
        }
      },
      {
        "id": "signal-wave-3",
        "colorNumber": 5,
        "label": [
          150,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 30,
          "r": 50
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
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 290,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 6,
        "label": [
          260,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 290,
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
          "r": 4
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
          "r": 4
        }
      },
      {
        "id": "control-room",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 340,
          "r": 10
        }
      },
      {
        "id": "feed-horn-center",
        "colorNumber": 4,
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
        "id": "panel-segment-1",
        "colorNumber": 2,
        "label": [
          105,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "panel-segment-2",
        "colorNumber": 2,
        "label": [
          195,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "gear-hub",
        "colorNumber": 3,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 245,
          "r": 12
        }
      },
      {
        "id": "radio-beam-origin",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "supernova",
    "name": "Supernova Burst",
    "emoji": "💥",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFD54F",
      "#FF6D00",
      "#D50000",
      "#FF4081",
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
        "id": "shockwave-outer",
        "colorNumber": 4,
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
        "id": "shockwave-mid",
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
        "id": "shockwave-inner",
        "colorNumber": 2,
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
        "id": "flare-vertical",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,30 155,30 150,370"
        }
      },
      {
        "id": "flare-horizontal",
        "colorNumber": 6,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "20,195 280,195 280,205 20,205"
        }
      },
      {
        "id": "flare-diagonal-1",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,100 250,300 240,310 40,110"
        }
      },
      {
        "id": "flare-diagonal-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,100 50,300 40,290 240,90"
        }
      },
      {
        "id": "plasma-core-hot",
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
        "id": "core-singularity",
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
        "id": "ejecta-blob-1",
        "colorNumber": 5,
        "label": [
          90,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 130,
          "r": 14
        }
      },
      {
        "id": "ejecta-blob-2",
        "colorNumber": 5,
        "label": [
          210,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 130,
          "r": 14
        }
      },
      {
        "id": "ejecta-blob-3",
        "colorNumber": 5,
        "label": [
          90,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 270,
          "r": 14
        }
      },
      {
        "id": "ejecta-blob-4",
        "colorNumber": 5,
        "label": [
          210,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 270,
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
        "colorNumber": 2,
        "label": [
          110,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 70,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 2,
        "label": [
          190,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 70,
          "r": 5
        }
      },
      {
        "id": "spark-3",
        "colorNumber": 2,
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
        "id": "spark-4",
        "colorNumber": 2,
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
        "id": "gamma-ray-burst-1",
        "colorNumber": 6,
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
        "id": "gamma-ray-burst-2",
        "colorNumber": 6,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "hologram-globe",
    "name": "Cyber Globe",
    "emoji": "👽",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#76FF03",
      "#00E5FF",
      "#311B92",
      "#212121",
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
        "id": "alien-halo",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 115
        }
      },
      {
        "id": "alien-cranium",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,160 C 75,70 225,70 225,160 C 225,240 175,270 150,270 C 125,270 75,240 75,160 Z"
        }
      },
      {
        "id": "neck",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,265 165,265 175,320 125,320"
        }
      },
      {
        "id": "almond-eye-l",
        "colorNumber": 5,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 175,
          "rx": 24,
          "ry": 38
        }
      },
      {
        "id": "almond-eye-r",
        "colorNumber": 5,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 175,
          "rx": 24,
          "ry": 38
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 6,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 6,
        "label": [
          180,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "nostril-l",
        "colorNumber": 5,
        "label": [
          144,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 144,
          "cy": 225,
          "r": 3
        }
      },
      {
        "id": "nostril-r",
        "colorNumber": 5,
        "label": [
          156,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 156,
          "cy": 225,
          "r": 3
        }
      },
      {
        "id": "alien-mouth-slit",
        "colorNumber": 5,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,245 Q 150,250 165,245"
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
        "id": "psi-energy-1",
        "colorNumber": 3,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 8
        }
      },
      {
        "id": "psi-energy-2",
        "colorNumber": 3,
        "label": [
          90,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 95,
          "r": 7
        }
      },
      {
        "id": "psi-energy-3",
        "colorNumber": 3,
        "label": [
          210,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 95,
          "r": 7
        }
      },
      {
        "id": "shoulder-l",
        "colorNumber": 2,
        "label": [
          95,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 340,
          "r": 30
        }
      },
      {
        "id": "shoulder-r",
        "colorNumber": 2,
        "label": [
          205,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 340,
          "r": 30
        }
      },
      {
        "id": "suit-collar",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 25
        }
      },
      {
        "id": "hologram-grid-dot",
        "colorNumber": 6,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "astro-laboratory",
    "name": "Orbital Lab",
    "emoji": "🔬",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#ECEFF1",
      "#0288D1",
      "#FFD54F",
      "#4CAF50",
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
        "id": "centrifuge-ring",
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
        "id": "centrifuge-inner",
        "colorNumber": 1,
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
        "id": "hub-cylinder",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 130,
          "w": 60,
          "h": 140,
          "rx": 8
        }
      },
      {
        "id": "cupola-dome",
        "colorNumber": 3,
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
        "id": "airlock-dock",
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
        "id": "spoke-1",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 195,
          "w": 200,
          "h": 10
        }
      },
      {
        "id": "spoke-2",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 100,
          "w": 10,
          "h": 200
        }
      },
      {
        "id": "pod-1",
        "colorNumber": 5,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 16
        }
      },
      {
        "id": "pod-2",
        "colorNumber": 5,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 310,
          "r": 16
        }
      },
      {
        "id": "pod-3",
        "colorNumber": 5,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 200,
          "r": 16
        }
      },
      {
        "id": "pod-4",
        "colorNumber": 5,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 200,
          "r": 16
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
        "id": "comm-antenna",
        "colorNumber": 4,
        "label": [
          185,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 145,
          "r": 8
        }
      },
      {
        "id": "solar-array-dot-1",
        "colorNumber": 3,
        "label": [
          95,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 145,
          "r": 8
        }
      },
      {
        "id": "solar-array-dot-2",
        "colorNumber": 3,
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
        "id": "bio-dome-window-1",
        "colorNumber": 5,
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
        "id": "bio-dome-window-2",
        "colorNumber": 5,
        "label": [
          165,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "orbital-beacon",
        "colorNumber": 4,
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
    "id": "deep-space-telescope",
    "name": "Deep Space Scope",
    "emoji": "🔭",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFD54F",
      "#FFA000",
      "#78909C",
      "#00E5FF",
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
        "id": "sunshield-base",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,210 275,290 150,370 25,290"
        }
      },
      {
        "id": "sunshield-layer-2",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,225 260,290 150,355 40,290"
        }
      },
      {
        "id": "hex-center",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 22
        }
      },
      {
        "id": "hex-top",
        "colorNumber": 2,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 95,
          "r": 20
        }
      },
      {
        "id": "hex-bot",
        "colorNumber": 2,
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
        "id": "hex-top-l",
        "colorNumber": 2,
        "label": [
          112,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 118,
          "r": 20
        }
      },
      {
        "id": "hex-top-r",
        "colorNumber": 2,
        "label": [
          188,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 118,
          "r": 20
        }
      },
      {
        "id": "hex-bot-l",
        "colorNumber": 2,
        "label": [
          112,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 162,
          "r": 20
        }
      },
      {
        "id": "hex-bot-r",
        "colorNumber": 2,
        "label": [
          188,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 162,
          "r": 20
        }
      },
      {
        "id": "secondary-mirror-tripod",
        "colorNumber": 4,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,55 155,55 170,140 130,140"
        }
      },
      {
        "id": "secondary-mirror",
        "colorNumber": 2,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
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
        "id": "spacecraft-bus",
        "colorNumber": 4,
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
        "id": "star-tracker-l",
        "colorNumber": 5,
        "label": [
          90,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "star-tracker-r",
        "colorNumber": 5,
        "label": [
          210,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "l2-halo-orbit",
        "colorNumber": 5,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 380,
          "r": 12
        }
      },
      {
        "id": "infrared-light-beam-1",
        "colorNumber": 2,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 100,
          "r": 4
        }
      },
      {
        "id": "infrared-light-beam-2",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "solar-observatory",
    "name": "Solar Observatory",
    "emoji": "☀️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFD54F",
      "#FF6D00",
      "#D50000",
      "#FF8F00",
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
        "id": "corona-glow",
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
        "id": "sun-surface",
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
        "id": "prominence-loop-1",
        "colorNumber": 3,
        "label": [
          95,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M 90,130 C 50,70 120,40 135,110"
        }
      },
      {
        "id": "prominence-loop-2",
        "colorNumber": 3,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,270 C 260,290 230,360 170,290"
        }
      },
      {
        "id": "sunspot-group-1",
        "colorNumber": 4,
        "label": [
          125,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 175,
          "r": 12
        }
      },
      {
        "id": "sunspot-group-2",
        "colorNumber": 4,
        "label": [
          185,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 215,
          "r": 14
        }
      },
      {
        "id": "flare-core",
        "colorNumber": 6,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 195,
          "r": 16
        }
      },
      {
        "id": "satellite-parked",
        "colorNumber": 6,
        "label": [
          45,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 280,
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
        "id": "granulation-cell-1",
        "colorNumber": 5,
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
        "id": "granulation-cell-2",
        "colorNumber": 5,
        "label": [
          170,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 160,
          "r": 10
        }
      },
      {
        "id": "magnetic-arc-1",
        "colorNumber": 3,
        "label": [
          220,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 150,
          "r": 15
        }
      },
      {
        "id": "magnetic-arc-2",
        "colorNumber": 3,
        "label": [
          80,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 240,
          "r": 15
        }
      },
      {
        "id": "solar-wind-1",
        "colorNumber": 2,
        "label": [
          30,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "solar-wind-2",
        "colorNumber": 2,
        "label": [
          270,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "sunspot-umbra-1",
        "colorNumber": 1,
        "label": [
          125,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "sunspot-umbra-2",
        "colorNumber": 1,
        "label": [
          185,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 215,
          "r": 6
        }
      },
      {
        "id": "cme-bubble",
        "colorNumber": 3,
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
      }
    ]
  },
  {
    "id": "mars-habitat",
    "name": "Mars Colony Dome",
    "emoji": "🏕️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A0000",
      "#D32F2F",
      "#00E5FF",
      "#4CAF50",
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
        "id": "mars-hills",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,290 90,260 210,270 300,250 300,400 0,400"
        }
      },
      {
        "id": "main-biodome",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 240,
          "r": 75
        }
      },
      {
        "id": "greenhouse-interior",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 255,
          "r": 45
        }
      },
      {
        "id": "airlock-tunnel-l",
        "colorNumber": 2,
        "label": [
          75,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 280,
          "w": 45,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "airlock-tunnel-r",
        "colorNumber": 2,
        "label": [
          225,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 280,
          "w": 45,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "small-habitat-dome",
        "colorNumber": 3,
        "label": [
          60,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 275,
          "r": 30
        }
      },
      {
        "id": "solar-panel-field",
        "colorNumber": 5,
        "label": [
          240,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 320,
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
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "mars-moon-phobos",
        "colorNumber": 2,
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
        "id": "comm-tower",
        "colorNumber": 6,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 6
        }
      },
      {
        "id": "rover-parked",
        "colorNumber": 5,
        "label": [
          130,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 350,
          "r": 12
        }
      },
      {
        "id": "mars-boulder-1",
        "colorNumber": 5,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 360,
          "r": 12
        }
      },
      {
        "id": "mars-boulder-2",
        "colorNumber": 5,
        "label": [
          260,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 360,
          "r": 14
        }
      },
      {
        "id": "biodome-hex-1",
        "colorNumber": 6,
        "label": [
          130,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "biodome-hex-2",
        "colorNumber": 6,
        "label": [
          170,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "biodome-hex-3",
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
        "id": "air-tank-1",
        "colorNumber": 6,
        "label": [
          95,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 330,
          "r": 6
        }
      },
      {
        "id": "air-tank-2",
        "colorNumber": 6,
        "label": [
          205,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 330,
          "r": 6
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 3,
        "label": [
          95,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 3,
        "label": [
          205,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 45,
          "r": 4
        }
      },
      {
        "id": "horizon-glow",
        "colorNumber": 5,
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
      }
    ]
  },
  {
    "id": "lunar-rover",
    "name": "Apollo Moon Buggy",
    "emoji": "🏎️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#ECEFF1",
      "#78909C",
      "#FFD54F",
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
        "id": "moon-surface",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 370,
          "rx": 140,
          "ry": 35
        }
      },
      {
        "id": "lrv-chassis",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 250,
          "w": 140,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "seat-l",
        "colorNumber": 3,
        "label": [
          125,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 215,
          "w": 25,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "seat-r",
        "colorNumber": 3,
        "label": [
          160,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 215,
          "w": 25,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "steering-t-bar",
        "colorNumber": 3,
        "label": [
          135,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 210,
          "w": 10,
          "h": 30
        }
      },
      {
        "id": "dish-mast",
        "colorNumber": 3,
        "label": [
          195,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 180,
          "w": 6,
          "h": 60
        }
      },
      {
        "id": "umbrella-dish",
        "colorNumber": 4,
        "label": [
          195,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 175,
          "r": 16
        }
      },
      {
        "id": "tv-cam",
        "colorNumber": 3,
        "label": [
          85,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "wheel-fl",
        "colorNumber": 3,
        "label": [
          95,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 310,
          "r": 20
        }
      },
      {
        "id": "wheel-fr",
        "colorNumber": 3,
        "label": [
          205,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 310,
          "r": 20
        }
      },
      {
        "id": "mesh-tyre-fl",
        "colorNumber": 2,
        "label": [
          95,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 310,
          "r": 12
        }
      },
      {
        "id": "mesh-tyre-fr",
        "colorNumber": 2,
        "label": [
          205,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 310,
          "r": 12
        }
      },
      {
        "id": "fender-l",
        "colorNumber": 2,
        "label": [
          95,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 280,
          "r": 15
        }
      },
      {
        "id": "fender-r",
        "colorNumber": 2,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 280,
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
        "id": "star-3",
        "colorNumber": 5,
        "label": [
          40,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 180,
          "r": 4
        }
      },
      {
        "id": "star-4",
        "colorNumber": 5,
        "label": [
          260,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 180,
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
        "id": "crater-1",
        "colorNumber": 2,
        "label": [
          50,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 375,
          "r": 10
        }
      },
      {
        "id": "crater-2",
        "colorNumber": 2,
        "label": [
          250,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 375,
          "r": 12
        }
      },
      {
        "id": "battery-pack",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "ringed-planet-gas",
    "name": "Gas Giant Planet",
    "emoji": "🔮",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#7B1FA2",
      "#E040FB",
      "#00E5FF",
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
        "id": "gas-aura",
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
        "id": "gas-orb",
        "colorNumber": 2,
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
        "id": "diagonal-ring-outer",
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
          "ry": 30
        }
      },
      {
        "id": "diagonal-ring-inner",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 110,
          "ry": 22
        }
      },
      {
        "id": "band-arc-1",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 80,
          "ry": 15
        }
      },
      {
        "id": "band-arc-2",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 80,
          "ry": 15
        }
      },
      {
        "id": "swirl-storm",
        "colorNumber": 5,
        "label": [
          125,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 195,
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
        "id": "shepherd-moon-1",
        "colorNumber": 5,
        "label": [
          65,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "shepherd-moon-2",
        "colorNumber": 5,
        "label": [
          235,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "aurora-crown",
        "colorNumber": 4,
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
        "id": "aurora-base",
        "colorNumber": 4,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 285,
          "r": 16
        }
      },
      {
        "id": "plasma-filament-1",
        "colorNumber": 3,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 175,
          "r": 8
        }
      },
      {
        "id": "plasma-filament-2",
        "colorNumber": 3,
        "label": [
          115,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 225,
          "r": 8
        }
      },
      {
        "id": "stardust-1",
        "colorNumber": 5,
        "label": [
          30,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 230,
          "r": 4
        }
      },
      {
        "id": "stardust-2",
        "colorNumber": 5,
        "label": [
          270,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 230,
          "r": 4
        }
      },
      {
        "id": "ring-shadow",
        "colorNumber": 2,
        "label": [
          160,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 205,
          "r": 12
        }
      },
      {
        "id": "outer-orbit-dot",
        "colorNumber": 4,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "supergiant-star",
    "name": "Red Supergiant",
    "emoji": "🏮",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#D50000",
      "#FF6D00",
      "#FFD54F",
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
        "id": "corona-glow",
        "colorNumber": 3,
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
        "id": "stellar-body",
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
        "id": "convective-cell-1",
        "colorNumber": 3,
        "label": [
          120,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 160,
          "r": 25
        }
      },
      {
        "id": "convective-cell-2",
        "colorNumber": 3,
        "label": [
          180,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 160,
          "r": 25
        }
      },
      {
        "id": "convective-cell-3",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 30
        }
      },
      {
        "id": "hotspot-core",
        "colorNumber": 4,
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
        "id": "mass-loss-plume-1",
        "colorNumber": 3,
        "label": [
          70,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 110,
          "r": 18
        }
      },
      {
        "id": "mass-loss-plume-2",
        "colorNumber": 3,
        "label": [
          230,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 110,
          "r": 18
        }
      },
      {
        "id": "mass-loss-plume-3",
        "colorNumber": 3,
        "label": [
          70,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 290,
          "r": 18
        }
      },
      {
        "id": "mass-loss-plume-4",
        "colorNumber": 3,
        "label": [
          230,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 290,
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
        "id": "dust-shroud-1",
        "colorNumber": 2,
        "label": [
          110,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 90,
          "r": 10
        }
      },
      {
        "id": "dust-shroud-2",
        "colorNumber": 2,
        "label": [
          190,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 310,
          "r": 10
        }
      },
      {
        "id": "plasma-loop-l",
        "colorNumber": 4,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "plasma-loop-r",
        "colorNumber": 4,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 200,
          "r": 12
        }
      },
      {
        "id": "stellar-core-bright",
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
      },
      {
        "id": "flare-1",
        "colorNumber": 4,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 10
        }
      },
      {
        "id": "flare-2",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 330,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "pulsar-core",
    "name": "Pulsar Core",
    "emoji": "⚡",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#311B92",
      "#FFD54F",
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
        "id": "beam-north",
        "colorNumber": 2,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,160 155,160 210,10 90,10"
        }
      },
      {
        "id": "beam-south",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,240 155,240 210,390 90,390"
        }
      },
      {
        "id": "magnetosphere",
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
        "id": "magnetic-equator",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "neutron-star",
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
        "id": "hot-magnetic-pole-n",
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
        "id": "hot-magnetic-pole-s",
        "colorNumber": 4,
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
        "id": "relativistic-pulse-1",
        "colorNumber": 5,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 100,
          "r": 8
        }
      },
      {
        "id": "relativistic-pulse-2",
        "colorNumber": 5,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "synchrotron-ring-1",
        "colorNumber": 2,
        "label": [
          80,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 160,
          "r": 12
        }
      },
      {
        "id": "synchrotron-ring-2",
        "colorNumber": 2,
        "label": [
          220,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 240,
          "r": 12
        }
      },
      {
        "id": "core-light",
        "colorNumber": 5,
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
        "id": "field-line-l",
        "colorNumber": 3,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "field-line-r",
        "colorNumber": 3,
        "label": [
          235,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "gamma-point-1",
        "colorNumber": 4,
        "label": [
          120,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "gamma-point-2",
        "colorNumber": 4,
        "label": [
          180,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 350,
          "r": 4
        }
      },
      {
        "id": "pulsar-center-gem",
        "colorNumber": 5,
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
    "id": "cyber-recon-droid",
    "name": "Cyber Recon Droid",
    "emoji": "🖲️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#00E5FF",
      "#76FF03",
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
        "id": "droid-sphere",
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
        "id": "lens-ring",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 48
        }
      },
      {
        "id": "sensor-eye",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 30
        }
      },
      {
        "id": "pupil-lens",
        "colorNumber": 1,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 14
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 5,
        "label": [
          142,
          182
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 182,
          "r": 6
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 2,
        "label": [
          110,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 106,
          "y": 60,
          "w": 8,
          "h": 50
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 2,
        "label": [
          190,
          85
        ],
        "shape": {
          "kind": "rect",
          "x": 186,
          "y": 60,
          "w": 8,
          "h": 50
        }
      },
      {
        "id": "antenna-tip-l",
        "colorNumber": 3,
        "label": [
          110,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "antenna-tip-r",
        "colorNumber": 3,
        "label": [
          190,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 55,
          "r": 6
        }
      },
      {
        "id": "thruster-main",
        "colorNumber": 2,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 275,
          "w": 30,
          "h": 25
        }
      },
      {
        "id": "thruster-flame",
        "colorNumber": 3,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "138,300 162,300 150,370"
        }
      },
      {
        "id": "panel-seam-1",
        "colorNumber": 2,
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
        "id": "panel-seam-2",
        "colorNumber": 2,
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
        "id": "scanner-beam-1",
        "colorNumber": 3,
        "label": [
          95,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "scanner-beam-2",
        "colorNumber": 3,
        "label": [
          205,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "nav-led-1",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "nav-led-2",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "quantum-warp-core",
    "name": "Quantum Drive",
    "emoji": "⚛️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#311B92",
      "#E040FB",
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
        "id": "reactor-column",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 70,
          "w": 80,
          "h": 260,
          "rx": 12
        }
      },
      {
        "id": "chamber-glass",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 90,
          "w": 50,
          "h": 220,
          "rx": 6
        }
      },
      {
        "id": "mag-ring-1",
        "colorNumber": 4,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 120,
          "rx": 55,
          "ry": 14
        }
      },
      {
        "id": "mag-ring-2",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 55,
          "ry": 14
        }
      },
      {
        "id": "mag-ring-3",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 55,
          "ry": 14
        }
      },
      {
        "id": "antimatter-core",
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
        "id": "plasma-node-top",
        "colorNumber": 2,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 12
        }
      },
      {
        "id": "plasma-node-bot",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
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
        "id": "conduit-l",
        "colorNumber": 2,
        "label": [
          75,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "conduit-r",
        "colorNumber": 2,
        "label": [
          225,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 200,
          "r": 15
        }
      },
      {
        "id": "injector-top",
        "colorNumber": 4,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 12
        }
      },
      {
        "id": "injector-bot",
        "colorNumber": 4,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 345,
          "r": 12
        }
      },
      {
        "id": "energy-spark-1",
        "colorNumber": 5,
        "label": [
          95,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "energy-spark-2",
        "colorNumber": 5,
        "label": [
          205,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "energy-spark-3",
        "colorNumber": 5,
        "label": [
          95,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "energy-spark-4",
        "colorNumber": 5,
        "label": [
          205,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 270,
          "r": 5
        }
      },
      {
        "id": "warp-field-halo",
        "colorNumber": 4,
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
        "id": "core-sparkle",
        "colorNumber": 5,
        "label": [
          148,
          198
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 198,
          "r": 6
        }
      },
      {
        "id": "status-led",
        "colorNumber": 2,
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
      }
    ]
  },
  {
    "id": "interstellar-cruiser",
    "name": "Interstellar Cruiser",
    "emoji": "🛳️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#ECEFF1",
      "#0288D1",
      "#00E5FF",
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
        "id": "saucer-bridge",
        "colorNumber": 2,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 120,
          "rx": 85,
          "ry": 45
        }
      },
      {
        "id": "bridge-dome",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 110,
          "r": 16
        }
      },
      {
        "id": "neck-pylon",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,150 160,150 165,220 135,220"
        }
      },
      {
        "id": "engineering-hull",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 210,
          "w": 50,
          "h": 80,
          "rx": 8
        }
      },
      {
        "id": "deflector-dish",
        "colorNumber": 4,
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
        "id": "nacelle-left",
        "colorNumber": 3,
        "label": [
          60,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 150,
          "w": 20,
          "h": 130,
          "rx": 6
        }
      },
      {
        "id": "nacelle-right",
        "colorNumber": 3,
        "label": [
          240,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 150,
          "w": 20,
          "h": 130,
          "rx": 6
        }
      },
      {
        "id": "nacelle-glow-l",
        "colorNumber": 4,
        "label": [
          60,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 170,
          "w": 10,
          "h": 80,
          "rx": 2
        }
      },
      {
        "id": "nacelle-glow-r",
        "colorNumber": 4,
        "label": [
          240,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 235,
          "y": 170,
          "w": 10,
          "h": 80,
          "rx": 2
        }
      },
      {
        "id": "pylon-strut-l",
        "colorNumber": 2,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,220 L 130,250"
        }
      },
      {
        "id": "pylon-strut-r",
        "colorNumber": 2,
        "label": [
          200,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 240,220 L 170,250"
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
        "id": "impulse-engine-l",
        "colorNumber": 4,
        "label": [
          135,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "impulse-engine-r",
        "colorNumber": 4,
        "label": [
          165,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "window-row-1",
        "colorNumber": 5,
        "label": [
          110,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "window-row-2",
        "colorNumber": 5,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 3
        }
      },
      {
        "id": "window-row-3",
        "colorNumber": 5,
        "label": [
          190,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 130,
          "r": 3
        }
      },
      {
        "id": "warp-field-wake",
        "colorNumber": 4,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 330,
          "r": 15
        }
      }
    ]
  },
  {
    "id": "alien-exoplanet",
    "name": "Exoplanet Flora",
    "emoji": "🍄",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#12002B",
      "#E040FB",
      "#76FF03",
      "#00E5FF",
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
        "id": "alien-moon",
        "colorNumber": 4,
        "label": [
          230,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 75,
          "r": 30
        }
      },
      {
        "id": "alien-hills",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,310 110,270 200,290 300,260 300,400 0,400"
        }
      },
      {
        "id": "shroom-stem-c",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 210,
          "w": 16,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "shroom-cap-c",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 60,
          "ry": 35
        }
      },
      {
        "id": "shroom-stem-l",
        "colorNumber": 3,
        "label": [
          70,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 64,
          "y": 250,
          "w": 12,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "shroom-cap-l",
        "colorNumber": 4,
        "label": [
          70,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 240,
          "rx": 40,
          "ry": 22
        }
      },
      {
        "id": "shroom-stem-r",
        "colorNumber": 3,
        "label": [
          230,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 224,
          "y": 250,
          "w": 12,
          "h": 80,
          "rx": 4
        }
      },
      {
        "id": "shroom-cap-r",
        "colorNumber": 4,
        "label": [
          230,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 240,
          "rx": 40,
          "ry": 22
        }
      },
      {
        "id": "cap-dot-c1",
        "colorNumber": 3,
        "label": [
          130,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 190,
          "r": 6
        }
      },
      {
        "id": "cap-dot-c2",
        "colorNumber": 3,
        "label": [
          170,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 190,
          "r": 6
        }
      },
      {
        "id": "cap-dot-c3",
        "colorNumber": 5,
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
        "id": "spore-glow-1",
        "colorNumber": 3,
        "label": [
          110,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "spore-glow-2",
        "colorNumber": 3,
        "label": [
          190,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "spore-glow-3",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
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
          140,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 45,
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
        "id": "fern-spiral-l",
        "colorNumber": 3,
        "label": [
          35,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 330,
          "r": 12
        }
      },
      {
        "id": "fern-spiral-r",
        "colorNumber": 3,
        "label": [
          265,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 330,
          "r": 12
        }
      },
      {
        "id": "crystal-spire",
        "colorNumber": 4,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 350,
          "r": 10
        }
      },
      {
        "id": "bio-pollen",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "space-elevator",
    "name": "Orbital Skyhook",
    "emoji": "🚡",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#ECEFF1",
      "#FFD54F",
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
        "id": "tether-ribbon",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 0,
          "w": 6,
          "h": 400
        }
      },
      {
        "id": "ocean-platform",
        "colorNumber": 2,
        "label": [
          150,
          390
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 390,
          "r": 80
        }
      },
      {
        "id": "climber-car",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 185,
          "w": 50,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "climber-window",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 14
        }
      },
      {
        "id": "solar-disk-l",
        "colorNumber": 4,
        "label": [
          90,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 220,
          "r": 22
        }
      },
      {
        "id": "solar-disk-r",
        "colorNumber": 4,
        "label": [
          210,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 220,
          "r": 22
        }
      },
      {
        "id": "orbital-anchor-station",
        "colorNumber": 2,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
          "r": 35
        }
      },
      {
        "id": "counterweight-hub",
        "colorNumber": 3,
        "label": [
          150,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 45,
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
        "colorNumber": 4,
        "label": [
          90,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          210,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "guide-roller-top",
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
        "id": "guide-roller-bot",
        "colorNumber": 2,
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
        "id": "laser-power-beam",
        "colorNumber": 4,
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
        "id": "cloud-layer-1",
        "colorNumber": 5,
        "label": [
          75,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 330,
          "r": 25
        }
      },
      {
        "id": "cloud-layer-2",
        "colorNumber": 5,
        "label": [
          225,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 330,
          "r": 25
        }
      },
      {
        "id": "beacon-light-1",
        "colorNumber": 4,
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
        "id": "beacon-light-2",
        "colorNumber": 4,
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
        "id": "sea-reflection",
        "colorNumber": 2,
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
      },
      {
        "id": "glint-tether",
        "colorNumber": 5,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "dark-nebula",
    "name": "Horsehead Nebula",
    "emoji": "🐴",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#050014",
      "#D50000",
      "#311B92",
      "#000000",
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
        "id": "emission-nebula-wall",
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
        "id": "horsehead-dust-pillar",
        "colorNumber": 4,
        "label": [
          140,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,350 L 110,230 Q 110,140 160,130 Q 185,130 190,165 Q 190,195 165,200 Q 150,230 150,350 Z"
        }
      },
      {
        "id": "horse-muzzle",
        "colorNumber": 4,
        "label": [
          175,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 175,
          "r": 14
        }
      },
      {
        "id": "horse-ear",
        "colorNumber": 4,
        "label": [
          145,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "background-star-alnitak",
        "colorNumber": 5,
        "label": [
          75,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 90,
          "r": 20
        }
      },
      {
        "id": "alnitak-core",
        "colorNumber": 5,
        "label": [
          75,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 90,
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
        "id": "hydrogen-ridge-1",
        "colorNumber": 2,
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
        "id": "hydrogen-ridge-2",
        "colorNumber": 2,
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
        "id": "dust-grain-1",
        "colorNumber": 3,
        "label": [
          100,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "dust-grain-2",
        "colorNumber": 3,
        "label": [
          130,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 310,
          "r": 10
        }
      },
      {
        "id": "embedded-protostar",
        "colorNumber": 5,
        "label": [
          145,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 160,
          "r": 4
        }
      },
      {
        "id": "stellar-halo",
        "colorNumber": 3,
        "label": [
          75,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 90,
          "r": 35
        }
      },
      {
        "id": "gas-filament-1",
        "colorNumber": 2,
        "label": [
          110,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "gas-filament-2",
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
        "id": "dark-dust-base",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 40
        }
      },
      {
        "id": "ionized-edge-light",
        "colorNumber": 5,
        "label": [
          160,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 140,
          "r": 5
        }
      },
      {
        "id": "cosmic-ray-dot",
        "colorNumber": 5,
        "label": [
          240,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 200,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "comet-tail",
    "name": "Halley Comet",
    "emoji": "✨",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#FFD54F",
      "#FFFFFF",
      "#0288D1"
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
        "id": "halley-dust-tail",
        "colorNumber": 2,
        "label": [
          120,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,30 235,285 100,30"
        }
      },
      {
        "id": "halley-ion-tail",
        "colorNumber": 5,
        "label": [
          140,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,30 235,285 140,50"
        }
      },
      {
        "id": "halley-coma",
        "colorNumber": 2,
        "label": [
          235,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 285,
          "r": 38
        }
      },
      {
        "id": "halley-core",
        "colorNumber": 3,
        "label": [
          235,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 285,
          "r": 20
        }
      },
      {
        "id": "nucleus-spark",
        "colorNumber": 4,
        "label": [
          235,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 285,
          "r": 8
        }
      },
      {
        "id": "star-orion-1",
        "colorNumber": 4,
        "label": [
          50,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "star-orion-2",
        "colorNumber": 4,
        "label": [
          75,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "star-orion-3",
        "colorNumber": 4,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 140,
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
        "id": "tail-sparkle-1",
        "colorNumber": 4,
        "label": [
          130,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "tail-sparkle-2",
        "colorNumber": 4,
        "label": [
          165,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "tail-sparkle-3",
        "colorNumber": 4,
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
        "id": "meteoroid-pebble-1",
        "colorNumber": 3,
        "label": [
          210,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 310,
          "r": 6
        }
      },
      {
        "id": "meteoroid-pebble-2",
        "colorNumber": 3,
        "label": [
          255,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "gas-stream-1",
        "colorNumber": 2,
        "label": [
          110,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 90,
          "r": 8
        }
      },
      {
        "id": "gas-stream-2",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "deep-sky-spark",
        "colorNumber": 4,
        "label": [
          60,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 240,
          "r": 4
        }
      },
      {
        "id": "nucleus-glint",
        "colorNumber": 4,
        "label": [
          232,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 232,
          "cy": 282,
          "r": 3
        }
      }
    ]
  },
  {
    "id": "lunar-crater-base",
    "name": "Crater Base Alpha",
    "emoji": "🌑",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#ECEFF1",
      "#00E5FF",
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
        "id": "crater-rim-outer",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 300,
          "rx": 130,
          "ry": 70
        }
      },
      {
        "id": "crater-floor",
        "colorNumber": 1,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 310,
          "rx": 100,
          "ry": 50
        }
      },
      {
        "id": "central-habitat-dome",
        "colorNumber": 3,
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
        "id": "dome-view-window",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "tunnel-link-l",
        "colorNumber": 2,
        "label": [
          95,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 295,
          "w": 50,
          "h": 10
        }
      },
      {
        "id": "tunnel-link-r",
        "colorNumber": 2,
        "label": [
          205,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 295,
          "w": 50,
          "h": 10
        }
      },
      {
        "id": "sub-dome-l",
        "colorNumber": 3,
        "label": [
          65,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "sub-dome-r",
        "colorNumber": 3,
        "label": [
          235,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "comm-mast",
        "colorNumber": 2,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 180,
          "w": 6,
          "h": 70
        }
      },
      {
        "id": "radar-dish",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 16
        }
      },
      {
        "id": "earth-above",
        "colorNumber": 4,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 28
        }
      },
      {
        "id": "earth-swirl",
        "colorNumber": 5,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
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
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 4
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 4,
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
        "id": "spark-2",
        "colorNumber": 4,
        "label": [
          200,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "beacon-light",
        "colorNumber": 4,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 5
        }
      },
      {
        "id": "lunar-rover-docked",
        "colorNumber": 2,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 345,
          "r": 10
        }
      },
      {
        "id": "solar-array-1",
        "colorNumber": 4,
        "label": [
          85,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "solar-array-2",
        "colorNumber": 4,
        "label": [
          215,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "crater-boulder-1",
        "colorNumber": 2,
        "label": [
          35,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 320,
          "r": 8
        }
      },
      {
        "id": "crater-boulder-2",
        "colorNumber": 2,
        "label": [
          265,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 320,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "astrogator-pilot",
    "name": "Star Navigator",
    "emoji": "👩‍✈️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#FFCCBC",
      "#FFD54F",
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
        "id": "hud-holo-circle-outer",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 95
        }
      },
      {
        "id": "hud-holo-circle-inner",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 65
        }
      },
      {
        "id": "pilot-head",
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
        "id": "pilot-torso",
        "colorNumber": 2,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 275,
          "w": 100,
          "h": 80,
          "rx": 12
        }
      },
      {
        "id": "headset-mic",
        "colorNumber": 4,
        "label": [
          125,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "hud-target-reticle",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 20,
          "ry": 20
        }
      },
      {
        "id": "star-route-point-1",
        "colorNumber": 4,
        "label": [
          100,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "star-route-point-2",
        "colorNumber": 4,
        "label": [
          200,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "route-vector-line",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,130 L 150,160 L 200,130"
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
        "id": "console-switch-1",
        "colorNumber": 4,
        "label": [
          120,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 320,
          "r": 6
        }
      },
      {
        "id": "console-switch-2",
        "colorNumber": 4,
        "label": [
          180,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 320,
          "r": 6
        }
      },
      {
        "id": "flight-badge",
        "colorNumber": 4,
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
        "id": "nav-data-dot-1",
        "colorNumber": 2,
        "label": [
          75,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "nav-data-dot-2",
        "colorNumber": 2,
        "label": [
          225,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "helm-control-stick",
        "colorNumber": 2,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 14
        }
      },
      {
        "id": "cockpit-canopy-arch",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 85
        }
      },
      {
        "id": "hud-glint",
        "colorNumber": 5,
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
      }
    ]
  },
  {
    "id": "orbital-shipyard",
    "name": "Orbital Dock",
    "emoji": "🏗️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#FFD54F",
      "#78909C",
      "#0288D1",
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
        "id": "gantry-spine-top",
        "colorNumber": 2,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 80,
          "w": 220,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "gantry-spine-bot",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 305,
          "w": 220,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "gantry-arm-l",
        "colorNumber": 2,
        "label": [
          50,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 90,
          "w": 15,
          "h": 220
        }
      },
      {
        "id": "gantry-arm-r",
        "colorNumber": 2,
        "label": [
          250,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 245,
          "y": 90,
          "w": 15,
          "h": 220
        }
      },
      {
        "id": "ship-hull-frame",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,130 190,260 110,260"
        }
      },
      {
        "id": "construction-core",
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
        "id": "docking-clamp-1",
        "colorNumber": 2,
        "label": [
          75,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 155,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "docking-clamp-2",
        "colorNumber": 2,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 155,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "docking-clamp-3",
        "colorNumber": 2,
        "label": [
          75,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 235,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "docking-clamp-4",
        "colorNumber": 2,
        "label": [
          225,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 235,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "weld-laser-spark-1",
        "colorNumber": 5,
        "label": [
          110,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "weld-laser-spark-2",
        "colorNumber": 5,
        "label": [
          190,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 200,
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
        "id": "warning-light-1",
        "colorNumber": 2,
        "label": [
          47,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 47,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "warning-light-2",
        "colorNumber": 2,
        "label": [
          253,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 253,
          "cy": 85,
          "r": 6
        }
      },
      {
        "id": "crane-cabin",
        "colorNumber": 3,
        "label": [
          150,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 85,
          "r": 10
        }
      },
      {
        "id": "fuel-depot-pod",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 12
        }
      },
      {
        "id": "scaffold-truss-hub",
        "colorNumber": 3,
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
    "id": "quantum-gateway",
    "name": "Stargate Portal",
    "emoji": "🔘",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#311B92",
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
        "id": "gate-outer-ring",
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
        "id": "gate-inner-ring",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 200,
          "r": 88
        }
      },
      {
        "id": "event-horizon-pool",
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
        "id": "wormhole-vortex-center",
        "colorNumber": 4,
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
        "id": "chevron-top",
        "colorNumber": 5,
        "label": [
          150,
          92
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,82 160,82 150,105"
        }
      },
      {
        "id": "chevron-bot",
        "colorNumber": 5,
        "label": [
          150,
          308
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,318 160,318 150,295"
        }
      },
      {
        "id": "chevron-left",
        "colorNumber": 5,
        "label": [
          42,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "32,190 32,210 55,200"
        }
      },
      {
        "id": "chevron-right",
        "colorNumber": 5,
        "label": [
          258,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "268,190 268,210 245,200"
        }
      },
      {
        "id": "pedestal-ramp",
        "colorNumber": 3,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,385 210,385 180,315 120,315"
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
        "id": "vortex-swirl-1",
        "colorNumber": 2,
        "label": [
          130,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 185,
          "r": 10
        }
      },
      {
        "id": "vortex-swirl-2",
        "colorNumber": 2,
        "label": [
          170,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 215,
          "r": 10
        }
      },
      {
        "id": "glyph-dial-1",
        "colorNumber": 5,
        "label": [
          85,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 135,
          "r": 7
        }
      },
      {
        "id": "glyph-dial-2",
        "colorNumber": 5,
        "label": [
          215,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 135,
          "r": 7
        }
      },
      {
        "id": "glyph-dial-3",
        "colorNumber": 5,
        "label": [
          85,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 265,
          "r": 7
        }
      },
      {
        "id": "glyph-dial-4",
        "colorNumber": 5,
        "label": [
          215,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 265,
          "r": 7
        }
      },
      {
        "id": "kawoosh-blast",
        "colorNumber": 4,
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
        "id": "portal-energy-dot",
        "colorNumber": 2,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 335,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "plasma-thruster",
    "name": "Plasma Drive",
    "emoji": "🔥",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#00E5FF",
      "#0288D1",
      "#FFFFFF",
      "#311B92"
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
        "id": "plasma-exhaust-outer",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "115,140 185,140 220,380 80,380"
        }
      },
      {
        "id": "plasma-exhaust-mid",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,140 175,140 195,350 105,350"
        }
      },
      {
        "id": "plasma-exhaust-core",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,140 165,140 175,300 125,300"
        }
      },
      {
        "id": "engine-bell-nozzle",
        "colorNumber": 5,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,70 195,70 185,140 115,140"
        }
      },
      {
        "id": "fuel-manifold",
        "colorNumber": 3,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 45,
          "w": 70,
          "h": 25,
          "rx": 4
        }
      },
      {
        "id": "injector-port",
        "colorNumber": 2,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 18
        }
      },
      {
        "id": "shock-diamond-1",
        "colorNumber": 4,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "shock-diamond-2",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 245,
          "r": 12
        }
      },
      {
        "id": "shock-diamond-3",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 305,
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
        "id": "cooling-pipe-l",
        "colorNumber": 5,
        "label": [
          95,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "cooling-pipe-r",
        "colorNumber": 5,
        "label": [
          205,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "thrust-vector-ring",
        "colorNumber": 2,
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
        "id": "ion-glow-l",
        "colorNumber": 2,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 280,
          "r": 15
        }
      },
      {
        "id": "ion-glow-r",
        "colorNumber": 2,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 280,
          "r": 15
        }
      },
      {
        "id": "plasma-sparkle-1",
        "colorNumber": 4,
        "label": [
          130,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "plasma-sparkle-2",
        "colorNumber": 4,
        "label": [
          170,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 340,
          "r": 4
        }
      },
      {
        "id": "nozzle-rim-glow",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "alien-signal-beacon",
    "name": "SETI Array",
    "emoji": "📻",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#78909C",
      "#FFD54F",
      "#00E5FF",
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
        "id": "radio-bubble-1",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 125
        }
      },
      {
        "id": "radio-bubble-2",
        "colorNumber": 4,
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
        "id": "radio-bubble-3",
        "colorNumber": 4,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 65
        }
      },
      {
        "id": "beacon-tower",
        "colorNumber": 2,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 140,
          "w": 20,
          "h": 180,
          "rx": 4
        }
      },
      {
        "id": "tripod-base",
        "colorNumber": 2,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,380 240,380 150,300"
        }
      },
      {
        "id": "transmitter-emitter",
        "colorNumber": 3,
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
        "id": "emitter-core",
        "colorNumber": 5,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "dish-left",
        "colorNumber": 2,
        "label": [
          75,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 230,
          "r": 20
        }
      },
      {
        "id": "dish-right",
        "colorNumber": 2,
        "label": [
          225,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 230,
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
        "id": "signal-pulse-a",
        "colorNumber": 3,
        "label": [
          110,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 80,
          "r": 6
        }
      },
      {
        "id": "signal-pulse-b",
        "colorNumber": 3,
        "label": [
          190,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 80,
          "r": 6
        }
      },
      {
        "id": "generator-pod",
        "colorNumber": 3,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 320,
          "r": 14
        }
      },
      {
        "id": "ground-anchor-l",
        "colorNumber": 2,
        "label": [
          60,
          380
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 380,
          "r": 10
        }
      },
      {
        "id": "ground-anchor-r",
        "colorNumber": 2,
        "label": [
          240,
          380
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 380,
          "r": 10
        }
      },
      {
        "id": "binary-message-dot-1",
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
        "id": "binary-message-dot-2",
        "colorNumber": 5,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "beacon-status-led",
        "colorNumber": 4,
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
    "id": "titan-atmosphere",
    "name": "Titan Cloud City",
    "emoji": "☁️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#2E1500",
      "#FFB300",
      "#FFA000",
      "#FFFFFF",
      "#78909C"
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
        "id": "cloud-titan-1",
        "colorNumber": 3,
        "label": [
          80,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 130,
          "r": 65
        }
      },
      {
        "id": "cloud-titan-2",
        "colorNumber": 2,
        "label": [
          220,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 130,
          "r": 65
        }
      },
      {
        "id": "cloud-titan-3",
        "colorNumber": 3,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 330,
          "r": 85
        }
      },
      {
        "id": "aerostat-balloon",
        "colorNumber": 2,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 70
        }
      },
      {
        "id": "city-gondola",
        "colorNumber": 5,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 230,
          "w": 120,
          "h": 40,
          "rx": 6
        }
      },
      {
        "id": "spire-tower-c",
        "colorNumber": 5,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 180,
          "w": 12,
          "h": 60
        }
      },
      {
        "id": "observation-dome",
        "colorNumber": 4,
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
        "id": "suspension-cable-l",
        "colorNumber": 5,
        "label": [
          100,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,210 L 105,230"
        }
      },
      {
        "id": "suspension-cable-r",
        "colorNumber": 5,
        "label": [
          200,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,210 L 195,230"
        }
      },
      {
        "id": "city-light-1",
        "colorNumber": 4,
        "label": [
          110,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "city-light-2",
        "colorNumber": 4,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 5
        }
      },
      {
        "id": "city-light-3",
        "colorNumber": 4,
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
        "id": "saturn-in-sky",
        "colorNumber": 3,
        "label": [
          60,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 70,
          "r": 20
        }
      },
      {
        "id": "shuttle-docked",
        "colorNumber": 5,
        "label": [
          215,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "methane-rain-1",
        "colorNumber": 2,
        "label": [
          70,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "methane-rain-2",
        "colorNumber": 2,
        "label": [
          230,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "aerostat-beacon",
        "colorNumber": 4,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 110,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "cyber-sentinel-mech",
    "name": "Sentinel Mech",
    "emoji": "🛡️",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0A0A2E",
      "#0288D1",
      "#00E5FF",
      "#FFFFFF",
      "#78909C"
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
        "id": "energy-shield-diamond",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,80 250,200 150,320 50,200"
        }
      },
      {
        "id": "shield-core",
        "colorNumber": 2,
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
        "id": "sentinel-eye",
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
        "id": "reticle-center",
        "colorNumber": 1,
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
        "id": "blaster-wing-top",
        "colorNumber": 5,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,140 165,140 150,75"
        }
      },
      {
        "id": "blaster-wing-bot",
        "colorNumber": 5,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,260 165,260 150,325"
        }
      },
      {
        "id": "blaster-wing-left",
        "colorNumber": 5,
        "label": [
          85,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,185 110,215 45,200"
        }
      },
      {
        "id": "blaster-wing-right",
        "colorNumber": 5,
        "label": [
          215,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "190,185 190,215 255,200"
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
        "id": "shield-emitter-1",
        "colorNumber": 3,
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
      },
      {
        "id": "shield-emitter-2",
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
        "id": "shield-emitter-3",
        "colorNumber": 3,
        "label": [
          90,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "shield-emitter-4",
        "colorNumber": 3,
        "label": [
          210,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 200,
          "r": 8
        }
      },
      {
        "id": "plasma-charge-1",
        "colorNumber": 4,
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
      },
      {
        "id": "plasma-charge-2",
        "colorNumber": 4,
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
      },
      {
        "id": "plasma-charge-3",
        "colorNumber": 4,
        "label": [
          30,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "plasma-charge-4",
        "colorNumber": 4,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "sentinel-pupil-spark",
        "colorNumber": 4,
        "label": [
          147,
          197
        ],
        "shape": {
          "kind": "circle",
          "cx": 147,
          "cy": 197,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "galactic-core",
    "name": "Galactic Supercluster",
    "emoji": "💫",
    "category": "space",
    "viewBox": "0 0 300 400",
    "colors": [
      "#050014",
      "#FFD54F",
      "#E040FB",
      "#00E5FF",
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
        "id": "galaxy-halo",
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
        "id": "spiral-arm-a",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 130,
          "ry": 45
        }
      },
      {
        "id": "spiral-arm-b",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 45,
          "ry": 130
        }
      },
      {
        "id": "supermassive-nucleus",
        "colorNumber": 2,
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
        "id": "galactic-core-hot",
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
        "id": "black-hole-singularity",
        "colorNumber": 1,
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
        "id": "globular-cluster-1",
        "colorNumber": 2,
        "label": [
          60,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 120,
          "r": 14
        }
      },
      {
        "id": "globular-cluster-2",
        "colorNumber": 2,
        "label": [
          240,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "globular-cluster-3",
        "colorNumber": 4,
        "label": [
          240,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 120,
          "r": 14
        }
      },
      {
        "id": "globular-cluster-4",
        "colorNumber": 4,
        "label": [
          60,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 280,
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
        "id": "dust-lane-knot-1",
        "colorNumber": 3,
        "label": [
          110,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 175,
          "r": 10
        }
      },
      {
        "id": "dust-lane-knot-2",
        "colorNumber": 3,
        "label": [
          190,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 225,
          "r": 10
        }
      },
      {
        "id": "h-ii-star-nursery-1",
        "colorNumber": 3,
        "label": [
          85,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "h-ii-star-nursery-2",
        "colorNumber": 3,
        "label": [
          215,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 170,
          "r": 8
        }
      },
      {
        "id": "satellite-galaxy",
        "colorNumber": 4,
        "label": [
          260,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "supernova-remnant",
        "colorNumber": 2,
        "label": [
          130,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 250,
          "r": 8
        }
      },
      {
        "id": "core-light-pinpoint",
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
      }
    ]
  }
];
