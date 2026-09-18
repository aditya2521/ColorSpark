import { ImageTemplate } from '../../types';

// Category: vehicles (50 strictly verified 100% unique bespoke templates, all with >= 21 sections)
export const VEHICLES_TEMPLATES: ImageTemplate[] = [
  {
    "id": "submarine",
    "name": "Yellow Submarine",
    "emoji": "🤿",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0D47A1",
      "#1976D2",
      "#FDD835",
      "#FBC02D",
      "#F57F17",
      "#00E5FF",
      "#78909C",
      "#FFFFFF",
      "#4CAF50",
      "#E91E63"
    ],
    "regions": [
      {
        "id": "sub-sea-bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sub-surface-waves",
        "colorNumber": 2,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,85 Q 75,65 150,85 Q 225,105 300,85 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "sub-main-hull",
        "colorNumber": 3,
        "label": [
          145,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 210,
          "rx": 105,
          "ry": 50
        }
      },
      {
        "id": "sub-hull-belly-shade",
        "colorNumber": 4,
        "label": [
          145,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 235,
          "rx": 95,
          "ry": 22
        }
      },
      {
        "id": "sub-conning-tower",
        "colorNumber": 4,
        "label": [
          140,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 120,
          "w": 50,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "sub-periscope-mast-1",
        "colorNumber": 7,
        "label": [
          125,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 122,
          "y": 80,
          "w": 5,
          "h": 40
        }
      },
      {
        "id": "sub-periscope-lens-1",
        "colorNumber": 7,
        "label": [
          132,
          82
        ],
        "shape": {
          "kind": "rect",
          "x": 122,
          "y": 80,
          "w": 20,
          "h": 5,
          "rx": 2
        }
      },
      {
        "id": "sub-periscope-mast-2",
        "colorNumber": 7,
        "label": [
          145,
          90
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 70,
          "w": 5,
          "h": 50
        }
      },
      {
        "id": "sub-periscope-lens-2",
        "colorNumber": 7,
        "label": [
          152,
          72
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 70,
          "w": 20,
          "h": 5,
          "rx": 2
        }
      },
      {
        "id": "sub-porthole-1-rim",
        "colorNumber": 5,
        "label": [
          95,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 205,
          "r": 14
        }
      },
      {
        "id": "sub-porthole-1-glass",
        "colorNumber": 6,
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
        "id": "sub-porthole-1-shine",
        "colorNumber": 8,
        "label": [
          92,
          202
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 202,
          "r": 3
        }
      },
      {
        "id": "sub-porthole-2-rim",
        "colorNumber": 5,
        "label": [
          145,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 205,
          "r": 14
        }
      },
      {
        "id": "sub-porthole-2-glass",
        "colorNumber": 6,
        "label": [
          145,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "sub-porthole-2-shine",
        "colorNumber": 8,
        "label": [
          142,
          202
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 202,
          "r": 3
        }
      },
      {
        "id": "sub-porthole-3-rim",
        "colorNumber": 5,
        "label": [
          195,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 205,
          "r": 14
        }
      },
      {
        "id": "sub-porthole-3-glass",
        "colorNumber": 6,
        "label": [
          195,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 205,
          "r": 10
        }
      },
      {
        "id": "sub-porthole-3-shine",
        "colorNumber": 8,
        "label": [
          192,
          202
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 202,
          "r": 3
        }
      },
      {
        "id": "sub-rudder-top",
        "colorNumber": 4,
        "label": [
          40,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,195 25,160 50,180"
        }
      },
      {
        "id": "sub-rudder-bot",
        "colorNumber": 4,
        "label": [
          40,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,225 25,260 50,240"
        }
      },
      {
        "id": "sub-propeller-hub",
        "colorNumber": 7,
        "label": [
          35,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 202,
          "w": 10,
          "h": 16
        }
      },
      {
        "id": "sub-prop-blade-1",
        "colorNumber": 7,
        "label": [
          25,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,205 18,185 28,190"
        }
      },
      {
        "id": "sub-prop-blade-2",
        "colorNumber": 7,
        "label": [
          25,
          225
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,215 18,235 28,230"
        }
      },
      {
        "id": "sub-bubble-1",
        "colorNumber": 8,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "sub-bubble-2",
        "colorNumber": 8,
        "label": [
          220,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 110,
          "r": 8
        }
      },
      {
        "id": "sub-bubble-3",
        "colorNumber": 8,
        "label": [
          240,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "sub-coral-reef-1",
        "colorNumber": 9,
        "label": [
          45,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 365,
          "r": 24
        }
      },
      {
        "id": "sub-coral-reef-2",
        "colorNumber": 10,
        "label": [
          85,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 375,
          "r": 18
        }
      },
      {
        "id": "sub-coral-reef-3",
        "colorNumber": 9,
        "label": [
          255,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 365,
          "r": 24
        }
      }
    ]
  },
  {
    "id": "train-220",
    "name": "Steam Locomotive 1880",
    "emoji": "🚂",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#263238",
      "#37474F",
      "#D32F2F",
      "#FFD54F",
      "#78909C",
      "#ECEFF1",
      "#212121",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "train-sky",
        "colorNumber": 5,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "train-ballast",
        "colorNumber": 8,
        "label": [
          150,
          360
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
        "id": "train-rail",
        "colorNumber": 1,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 332,
          "w": 300,
          "h": 6
        }
      },
      {
        "id": "train-boiler",
        "colorNumber": 2,
        "label": [
          130,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 175,
          "w": 130,
          "h": 90,
          "rx": 4
        }
      },
      {
        "id": "train-boiler-band-1",
        "colorNumber": 4,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 93,
          "y": 175,
          "w": 4,
          "h": 90
        }
      },
      {
        "id": "train-boiler-band-2",
        "colorNumber": 4,
        "label": [
          135,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 133,
          "y": 175,
          "w": 4,
          "h": 90
        }
      },
      {
        "id": "train-boiler-band-3",
        "colorNumber": 4,
        "label": [
          175,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 173,
          "y": 175,
          "w": 4,
          "h": 90
        }
      },
      {
        "id": "train-driver-cab",
        "colorNumber": 3,
        "label": [
          225,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 135,
          "w": 60,
          "h": 130,
          "rx": 4
        }
      },
      {
        "id": "train-cab-roof",
        "colorNumber": 1,
        "label": [
          225,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 190,
          "y": 125,
          "w": 70,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "train-cab-window-l",
        "colorNumber": 6,
        "label": [
          212,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 202,
          "y": 150,
          "w": 20,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "train-cab-window-r",
        "colorNumber": 6,
        "label": [
          238,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 228,
          "y": 150,
          "w": 20,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "train-smokestack-pipe",
        "colorNumber": 1,
        "label": [
          90,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 115,
          "w": 20,
          "h": 60
        }
      },
      {
        "id": "train-stack-funnel",
        "colorNumber": 3,
        "label": [
          90,
          115
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 115,
          "rx": 18,
          "ry": 6
        }
      },
      {
        "id": "train-steam-dome-brass",
        "colorNumber": 4,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 170,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "train-cowcatcher",
        "colorNumber": 3,
        "label": [
          45,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "65,265 65,330 20,330"
        }
      },
      {
        "id": "train-lantern-box",
        "colorNumber": 1,
        "label": [
          55,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 185,
          "w": 20,
          "h": 20
        }
      },
      {
        "id": "train-lantern-beam",
        "colorNumber": 4,
        "label": [
          55,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 195,
          "r": 7
        }
      },
      {
        "id": "train-drive-wheel-1",
        "colorNumber": 7,
        "label": [
          100,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 300,
          "r": 26
        }
      },
      {
        "id": "train-drive-hub-1",
        "colorNumber": 4,
        "label": [
          100,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "train-drive-wheel-2",
        "colorNumber": 7,
        "label": [
          160,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 300,
          "r": 26
        }
      },
      {
        "id": "train-drive-hub-2",
        "colorNumber": 4,
        "label": [
          160,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "train-drive-wheel-3",
        "colorNumber": 7,
        "label": [
          220,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 300,
          "r": 26
        }
      },
      {
        "id": "train-drive-hub-3",
        "colorNumber": 4,
        "label": [
          220,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 300,
          "r": 8
        }
      },
      {
        "id": "train-side-rod",
        "colorNumber": 4,
        "label": [
          160,
          298
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 296,
          "w": 140,
          "h": 8
        }
      },
      {
        "id": "train-steam-puff-1",
        "colorNumber": 6,
        "label": [
          70,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 85,
          "r": 18
        }
      },
      {
        "id": "train-steam-puff-2",
        "colorNumber": 6,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 24
        }
      },
      {
        "id": "train-steam-puff-3",
        "colorNumber": 6,
        "label": [
          20,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 35,
          "r": 28
        }
      }
    ]
  },
  {
    "id": "f1-223",
    "name": "Formula 1 Monaco GP",
    "emoji": "🏎️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1A1A2E",
      "#D32F2F",
      "#B71C1C",
      "#FFD54F",
      "#00E5FF",
      "#FFFFFF",
      "#78909C",
      "#212121"
    ],
    "regions": [
      {
        "id": "f1-track-bg",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "f1-asphalt-road",
        "colorNumber": 8,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 280,
          "w": 300,
          "h": 120
        }
      },
      {
        "id": "f1-kerb-red-1",
        "colorNumber": 2,
        "label": [
          50,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 365,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "f1-kerb-white-1",
        "colorNumber": 6,
        "label": [
          125,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 365,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "f1-kerb-red-2",
        "colorNumber": 2,
        "label": [
          200,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 365,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "f1-kerb-white-2",
        "colorNumber": 6,
        "label": [
          275,
          375
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 365,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "f1-monocoque-chassis",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,270 L 95,250 L 140,225 L 215,225 L 245,250 L 245,270 L 35,270 Z"
        }
      },
      {
        "id": "f1-nosecone",
        "colorNumber": 2,
        "label": [
          65,
          258
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,270 95,250 95,270"
        }
      },
      {
        "id": "f1-sidepod",
        "colorNumber": 3,
        "label": [
          170,
          248
        ],
        "shape": {
          "kind": "polygon",
          "points": "135,250 215,240 225,268 135,268"
        }
      },
      {
        "id": "f1-airbox-intake",
        "colorNumber": 3,
        "label": [
          175,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 195,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "f1-driver-helmet",
        "colorNumber": 4,
        "label": [
          145,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 215,
          "r": 12
        }
      },
      {
        "id": "f1-helmet-visor",
        "colorNumber": 5,
        "label": [
          142,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 136,
          "y": 212,
          "w": 12,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "f1-halo-ring",
        "colorNumber": 7,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 22,
          "ry": 10
        }
      },
      {
        "id": "f1-front-wing",
        "colorNumber": 8,
        "label": [
          30,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "15,260 45,260 40,280 15,280"
        }
      },
      {
        "id": "f1-rear-wing-pylon",
        "colorNumber": 8,
        "label": [
          250,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 240,
          "y": 190,
          "w": 20,
          "h": 60,
          "rx": 2
        }
      },
      {
        "id": "f1-rear-wing-flap",
        "colorNumber": 2,
        "label": [
          235,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 190,
          "w": 45,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "f1-tyre-fl",
        "colorNumber": 8,
        "label": [
          85,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 275,
          "r": 26
        }
      },
      {
        "id": "f1-rim-fl",
        "colorNumber": 4,
        "label": [
          85,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 275,
          "r": 14
        }
      },
      {
        "id": "f1-hub-fl",
        "colorNumber": 7,
        "label": [
          85,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "f1-tyre-rl",
        "colorNumber": 8,
        "label": [
          225,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 270,
          "r": 30
        }
      },
      {
        "id": "f1-rim-rl",
        "colorNumber": 4,
        "label": [
          225,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 270,
          "r": 16
        }
      },
      {
        "id": "f1-hub-rl",
        "colorNumber": 7,
        "label": [
          225,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 270,
          "r": 7
        }
      },
      {
        "id": "f1-number-1-badge",
        "colorNumber": 6,
        "label": [
          115,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 255,
          "r": 10
        }
      },
      {
        "id": "f1-sponsor-line",
        "colorNumber": 4,
        "label": [
          175,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 253,
          "w": 50,
          "h": 4
        }
      },
      {
        "id": "f1-flag-light-1",
        "colorNumber": 4,
        "label": [
          50,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 90,
          "r": 12
        }
      },
      {
        "id": "f1-flag-light-2",
        "colorNumber": 4,
        "label": [
          250,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 90,
          "r": 12
        }
      }
    ]
  },
  {
    "id": "sailboat",
    "name": "White Sailboat",
    "emoji": "⛵",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#0288D1",
      "#01579B",
      "#FFFFFF",
      "#ECEFF1",
      "#D32F2F",
      "#8D6E63",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "sail-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sail-ocean-waves",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,270 Q 75,250 150,270 Q 225,290 300,270 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "sail-boat-hull",
        "colorNumber": 7,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,265 240,265 205,305 75,305"
        }
      },
      {
        "id": "sail-hull-stripe",
        "colorNumber": 6,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 267,
          "w": 180,
          "h": 6
        }
      },
      {
        "id": "sail-wood-mast",
        "colorNumber": 7,
        "label": [
          145,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 143,
          "y": 60,
          "w": 6,
          "h": 210
        }
      },
      {
        "id": "sail-mainsail",
        "colorNumber": 4,
        "label": [
          180,
          150
        ],
        "shape": {
          "kind": "polygon",
          "points": "152,70 235,250 152,250"
        }
      },
      {
        "id": "sail-jib",
        "colorNumber": 5,
        "label": [
          110,
          165
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,85 65,250 140,250"
        }
      },
      {
        "id": "sail-pennant",
        "colorNumber": 6,
        "label": [
          155,
          65
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,60 170,68 145,76"
        }
      },
      {
        "id": "sail-sun",
        "colorNumber": 8,
        "label": [
          240,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 75,
          "r": 22
        }
      },
      {
        "id": "sail-cloud-1",
        "colorNumber": 4,
        "label": [
          75,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 75,
          "r": 16
        }
      },
      {
        "id": "sail-cloud-2",
        "colorNumber": 4,
        "label": [
          95,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 70,
          "r": 22
        }
      },
      {
        "id": "sail-cloud-3",
        "colorNumber": 4,
        "label": [
          115,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 75,
          "r": 16
        }
      },
      {
        "id": "sail-seagull-1",
        "colorNumber": 4,
        "label": [
          50,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "sail-seagull-2",
        "colorNumber": 4,
        "label": [
          75,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 130,
          "r": 5
        }
      },
      {
        "id": "sail-wake-foam",
        "colorNumber": 4,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,340 Q 150,360 240,340 Q 150,350 60,340 Z"
        }
      },
      {
        "id": "sail-lifebuoy",
        "colorNumber": 6,
        "label": [
          195,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "sail-lifebuoy-core",
        "colorNumber": 4,
        "label": [
          195,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 275,
          "r": 4
        }
      },
      {
        "id": "sail-porthole-1",
        "colorNumber": 8,
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
        "id": "sail-porthole-2",
        "colorNumber": 8,
        "label": [
          135,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "sail-porthole-3",
        "colorNumber": 8,
        "label": [
          165,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 280,
          "r": 5
        }
      },
      {
        "id": "sail-sea-splash-1",
        "colorNumber": 4,
        "label": [
          40,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 275,
          "r": 5
        }
      },
      {
        "id": "sail-sea-splash-2",
        "colorNumber": 4,
        "label": [
          245,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 275,
          "r": 5
        }
      },
      {
        "id": "sail-sky-sparkle",
        "colorNumber": 8,
        "label": [
          270,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "sail-deep-wave",
        "colorNumber": 3,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 375,
          "r": 20
        }
      }
    ]
  },
  {
    "id": "helicopter",
    "name": "Rescue Helicopter",
    "emoji": "🚁",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#D32F2F",
      "#B71C1C",
      "#FFD54F",
      "#00E5FF",
      "#212121",
      "#78909C",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "heli-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "heli-fuselage",
        "colorNumber": 2,
        "label": [
          130,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 205,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "heli-windshield",
        "colorNumber": 5,
        "label": [
          95,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,200 Q 80,175 115,175 L 115,225 Q 85,225 75,200 Z"
        }
      },
      {
        "id": "heli-tail-boom",
        "colorNumber": 2,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 190,
          "w": 75,
          "h": 16,
          "rx": 2
        }
      },
      {
        "id": "heli-tail-fin",
        "colorNumber": 3,
        "label": [
          260,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "245,190 265,150 255,205"
        }
      },
      {
        "id": "heli-rotor-mast",
        "colorNumber": 6,
        "label": [
          135,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 132,
          "y": 140,
          "w": 6,
          "h": 25
        }
      },
      {
        "id": "heli-rotor-blade",
        "colorNumber": 6,
        "label": [
          135,
          138
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 135,
          "w": 200,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "heli-rotor-hub",
        "colorNumber": 4,
        "label": [
          135,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 138,
          "r": 8
        }
      },
      {
        "id": "heli-tail-rotor",
        "colorNumber": 6,
        "label": [
          262,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 262,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "heli-skid-strut-f",
        "colorNumber": 7,
        "label": [
          105,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 245,
          "w": 6,
          "h": 20
        }
      },
      {
        "id": "heli-skid-strut-r",
        "colorNumber": 7,
        "label": [
          155,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 152,
          "y": 245,
          "w": 6,
          "h": 20
        }
      },
      {
        "id": "heli-skid-pipe",
        "colorNumber": 7,
        "label": [
          130,
          272
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 268,
          "w": 110,
          "h": 8,
          "rx": 4
        }
      },
      {
        "id": "heli-cross-h",
        "colorNumber": 8,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 200,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "heli-cross-v",
        "colorNumber": 8,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 195,
          "w": 10,
          "h": 20
        }
      },
      {
        "id": "heli-cloud-1",
        "colorNumber": 8,
        "label": [
          50,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 80,
          "r": 22
        }
      },
      {
        "id": "heli-cloud-2",
        "colorNumber": 8,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 25
        }
      },
      {
        "id": "heli-sun",
        "colorNumber": 4,
        "label": [
          260,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "heli-rotor-blur-1",
        "colorNumber": 8,
        "label": [
          70,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 138,
          "r": 6
        }
      },
      {
        "id": "heli-rotor-blur-2",
        "colorNumber": 8,
        "label": [
          200,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 138,
          "r": 6
        }
      },
      {
        "id": "heli-searchlight",
        "colorNumber": 4,
        "label": [
          85,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 245,
          "r": 8
        }
      },
      {
        "id": "heli-antenna-beacon",
        "colorNumber": 4,
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
        "id": "heli-landing-pad",
        "colorNumber": 7,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 50
        }
      },
      {
        "id": "heli-pad-ring",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 35
        }
      },
      {
        "id": "heli-pad-h-bar",
        "colorNumber": 8,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 352,
          "w": 30,
          "h": 16
        }
      }
    ]
  },
  {
    "id": "airplane",
    "name": "Passenger Jet",
    "emoji": "✈️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#FFFFFF",
      "#ECEFF1",
      "#0288D1",
      "#01579B",
      "#78909C",
      "#D32F2F",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "air-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "air-fuselage",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 115,
          "ry": 30
        }
      },
      {
        "id": "air-nosecone",
        "colorNumber": 2,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,180 25,200 60,220"
        }
      },
      {
        "id": "air-wing-l",
        "colorNumber": 3,
        "label": [
          145,
          135
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,185 160,185 190,85 155,85"
        }
      },
      {
        "id": "air-wing-r",
        "colorNumber": 3,
        "label": [
          145,
          265
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,215 160,215 190,315 155,315"
        }
      },
      {
        "id": "air-engine-l",
        "colorNumber": 6,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 118,
          "w": 30,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "air-engine-fan-l",
        "colorNumber": 5,
        "label": [
          135,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "air-engine-r",
        "colorNumber": 6,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 268,
          "w": 30,
          "h": 14,
          "rx": 4
        }
      },
      {
        "id": "air-engine-fan-r",
        "colorNumber": 5,
        "label": [
          135,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "air-vertical-fin",
        "colorNumber": 4,
        "label": [
          240,
          155
        ],
        "shape": {
          "kind": "polygon",
          "points": "220,185 260,125 250,185"
        }
      },
      {
        "id": "air-stabilizer",
        "colorNumber": 5,
        "label": [
          245,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,195 260,195 255,205 235,205"
        }
      },
      {
        "id": "air-window-strip",
        "colorNumber": 4,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 192,
          "w": 140,
          "h": 6
        }
      },
      {
        "id": "air-cockpit-glass",
        "colorNumber": 5,
        "label": [
          50,
          192
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,190 60,186 60,195 45,195"
        }
      },
      {
        "id": "air-cloud-1",
        "colorNumber": 2,
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
      },
      {
        "id": "air-cloud-2",
        "colorNumber": 2,
        "label": [
          95,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 70,
          "r": 26
        }
      },
      {
        "id": "air-cloud-3",
        "colorNumber": 2,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 25
        }
      },
      {
        "id": "air-sun",
        "colorNumber": 8,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "air-contrail-1",
        "colorNumber": 2,
        "label": [
          265,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "air-contrail-2",
        "colorNumber": 2,
        "label": [
          285,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 125,
          "r": 6
        }
      },
      {
        "id": "air-winglet-l",
        "colorNumber": 7,
        "label": [
          188,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "air-winglet-r",
        "colorNumber": 7,
        "label": [
          188,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "air-nav-light-red",
        "colorNumber": 7,
        "label": [
          190,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 85,
          "r": 4
        }
      },
      {
        "id": "air-nav-light-green",
        "colorNumber": 4,
        "label": [
          190,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 315,
          "r": 4
        }
      },
      {
        "id": "air-beacon-belly",
        "colorNumber": 7,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 230,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "tractor",
    "name": "Farm Tractor",
    "emoji": "🚜",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#43A047",
      "#2E7D32",
      "#FFD54F",
      "#212121",
      "#78909C",
      "#8D6E63",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "trac-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "trac-ground",
        "colorNumber": 7,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 325,
          "w": 300,
          "h": 75
        }
      },
      {
        "id": "trac-engine-hood",
        "colorNumber": 2,
        "label": [
          105,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 195,
          "w": 90,
          "h": 60,
          "rx": 4
        }
      },
      {
        "id": "trac-front-grill",
        "colorNumber": 5,
        "label": [
          65,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 58,
          "y": 205,
          "w": 10,
          "h": 40
        }
      },
      {
        "id": "trac-cab-frame",
        "colorNumber": 6,
        "label": [
          180,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 150,
          "w": 60,
          "h": 80
        }
      },
      {
        "id": "trac-cab-glass",
        "colorNumber": 1,
        "label": [
          180,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 154,
          "y": 155,
          "w": 52,
          "h": 45
        }
      },
      {
        "id": "trac-cab-roof",
        "colorNumber": 2,
        "label": [
          180,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 140,
          "w": 80,
          "h": 12,
          "rx": 2
        }
      },
      {
        "id": "trac-rear-tyre",
        "colorNumber": 5,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 280,
          "r": 42
        }
      },
      {
        "id": "trac-rear-rim",
        "colorNumber": 4,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 280,
          "r": 24
        }
      },
      {
        "id": "trac-rear-hub",
        "colorNumber": 5,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "trac-front-tyre",
        "colorNumber": 5,
        "label": [
          85,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 300,
          "r": 24
        }
      },
      {
        "id": "trac-front-rim",
        "colorNumber": 4,
        "label": [
          85,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "trac-front-hub",
        "colorNumber": 5,
        "label": [
          85,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 300,
          "r": 5
        }
      },
      {
        "id": "trac-exhaust-pipe",
        "colorNumber": 6,
        "label": [
          115,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 135,
          "w": 6,
          "h": 60
        }
      },
      {
        "id": "trac-exhaust-puff",
        "colorNumber": 8,
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
        "id": "trac-headlight-l",
        "colorNumber": 4,
        "label": [
          62,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 62,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "trac-headlight-r",
        "colorNumber": 4,
        "label": [
          62,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 62,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "trac-fender-rear",
        "colorNumber": 3,
        "label": [
          205,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 230,
          "w": 80,
          "h": 10,
          "rx": 4
        }
      },
      {
        "id": "trac-sun",
        "colorNumber": 4,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "trac-cloud-1",
        "colorNumber": 8,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 16
        }
      },
      {
        "id": "trac-cloud-2",
        "colorNumber": 8,
        "label": [
          85,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 70,
          "r": 22
        }
      },
      {
        "id": "trac-soil-ridge-1",
        "colorNumber": 7,
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
        "id": "trac-soil-ridge-2",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 365,
          "r": 15
        }
      },
      {
        "id": "trac-soil-ridge-3",
        "colorNumber": 7,
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
      }
    ]
  },
  {
    "id": "fire-truck",
    "name": "Fire Engine",
    "emoji": "🚒",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#D32F2F",
      "#B71C1C",
      "#FFD54F",
      "#00E5FF",
      "#212121",
      "#78909C"
    ],
    "regions": [
      {
        "id": "fire-city-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "fire-asphalt-street",
        "colorNumber": 6,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "fire-truck-body",
        "colorNumber": 2,
        "label": [
          170,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 175,
          "w": 140,
          "h": 95,
          "rx": 4
        }
      },
      {
        "id": "fire-crew-cab",
        "colorNumber": 2,
        "label": [
          75,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 175,
          "w": 70,
          "h": 95,
          "rx": 6
        }
      },
      {
        "id": "fire-windshield",
        "colorNumber": 5,
        "label": [
          65,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 185,
          "w": 35,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "fire-ladder-top",
        "colorNumber": 7,
        "label": [
          155,
          150
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 145,
          "w": 160,
          "h": 6
        }
      },
      {
        "id": "fire-ladder-bot",
        "colorNumber": 7,
        "label": [
          155,
          162
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 158,
          "w": 160,
          "h": 6
        }
      },
      {
        "id": "fire-lightbar-base",
        "colorNumber": 6,
        "label": [
          80,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 162,
          "w": 30,
          "h": 8
        }
      },
      {
        "id": "fire-siren-blue",
        "colorNumber": 5,
        "label": [
          72,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 158,
          "r": 6
        }
      },
      {
        "id": "fire-siren-red",
        "colorNumber": 3,
        "label": [
          88,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 88,
          "cy": 158,
          "r": 6
        }
      },
      {
        "id": "fire-wheel-f",
        "colorNumber": 6,
        "label": [
          80,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 300,
          "r": 25
        }
      },
      {
        "id": "fire-rim-f",
        "colorNumber": 7,
        "label": [
          80,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "fire-wheel-r1",
        "colorNumber": 6,
        "label": [
          180,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 300,
          "r": 25
        }
      },
      {
        "id": "fire-rim-r1",
        "colorNumber": 7,
        "label": [
          180,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "fire-wheel-r2",
        "colorNumber": 6,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 300,
          "r": 25
        }
      },
      {
        "id": "fire-rim-r2",
        "colorNumber": 7,
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
      },
      {
        "id": "fire-hose-reel",
        "colorNumber": 4,
        "label": [
          135,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 225,
          "w": 30,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "fire-hose-core",
        "colorNumber": 2,
        "label": [
          135,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 240,
          "r": 8
        }
      },
      {
        "id": "fire-equipment-door-1",
        "colorNumber": 7,
        "label": [
          170,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 158,
          "y": 220,
          "w": 24,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "fire-equipment-door-2",
        "colorNumber": 7,
        "label": [
          200,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 188,
          "y": 220,
          "w": 24,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "fire-headlight-top",
        "colorNumber": 4,
        "label": [
          43,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 43,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "fire-headlight-bot",
        "colorNumber": 4,
        "label": [
          43,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 43,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "fire-chrome-bumper",
        "colorNumber": 7,
        "label": [
          35,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 265,
          "w": 12,
          "h": 18
        }
      },
      {
        "id": "fire-sun",
        "colorNumber": 4,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 55,
          "r": 18
        }
      }
    ]
  },
  {
    "id": "bicycle",
    "name": "Classic Bicycle",
    "emoji": "🚲",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#0288D1",
      "#01579B",
      "#212121",
      "#78909C",
      "#FFD54F",
      "#8D6E63",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bike-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "bike-park-ground",
        "colorNumber": 7,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "bike-top-tube",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,240 L 195,190 L 115,190 Z"
        }
      },
      {
        "id": "bike-seat-stays",
        "colorNumber": 2,
        "label": [
          95,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,280 L 115,190 L 115,280 Z"
        }
      },
      {
        "id": "bike-chain-stays",
        "colorNumber": 2,
        "label": [
          95,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,280 L 155,280"
        }
      },
      {
        "id": "bike-seat-post",
        "colorNumber": 5,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 113,
          "y": 160,
          "w": 4,
          "h": 30
        }
      },
      {
        "id": "bike-leather-saddle",
        "colorNumber": 7,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 160,
          "rx": 18,
          "ry": 6
        }
      },
      {
        "id": "bike-handlebars",
        "colorNumber": 5,
        "label": [
          205,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,190 L 205,150 L 190,150"
        }
      },
      {
        "id": "bike-wheel-f-tyre",
        "colorNumber": 4,
        "label": [
          225,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 280,
          "r": 40
        }
      },
      {
        "id": "bike-wheel-f-rim",
        "colorNumber": 5,
        "label": [
          225,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 280,
          "r": 32
        }
      },
      {
        "id": "bike-hub-f",
        "colorNumber": 6,
        "label": [
          225,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 280,
          "r": 8
        }
      },
      {
        "id": "bike-wheel-r-tyre",
        "colorNumber": 4,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 40
        }
      },
      {
        "id": "bike-wheel-r-rim",
        "colorNumber": 5,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 32
        }
      },
      {
        "id": "bike-hub-r",
        "colorNumber": 6,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 8
        }
      },
      {
        "id": "bike-chainring",
        "colorNumber": 6,
        "label": [
          145,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "bike-pedal-l",
        "colorNumber": 4,
        "label": [
          145,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 295,
          "r": 5
        }
      },
      {
        "id": "bike-pedal-r",
        "colorNumber": 4,
        "label": [
          145,
          265
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 265,
          "r": 5
        }
      },
      {
        "id": "bike-sun",
        "colorNumber": 6,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "bike-cloud-1",
        "colorNumber": 8,
        "label": [
          65,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 80,
          "r": 18
        }
      },
      {
        "id": "bike-cloud-2",
        "colorNumber": 8,
        "label": [
          90,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 75,
          "r": 24
        }
      },
      {
        "id": "bike-tree-canopy",
        "colorNumber": 3,
        "label": [
          45,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 220,
          "r": 28
        }
      },
      {
        "id": "bike-tree-trunk",
        "colorNumber": 7,
        "label": [
          45,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 41,
          "y": 248,
          "w": 8,
          "h": 85
        }
      },
      {
        "id": "bike-park-flower-1",
        "colorNumber": 6,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 6
        }
      },
      {
        "id": "bike-park-flower-2",
        "colorNumber": 6,
        "label": [
          220,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 360,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "balloon",
    "name": "Hot Air Balloon",
    "emoji": "🎈",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#E91E63",
      "#FF9800",
      "#FFEB3B",
      "#4CAF50",
      "#2196F3",
      "#9C27B0",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "ball-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ball-core",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 160,
          "rx": 85,
          "ry": 110
        }
      },
      {
        "id": "ball-gore-pink-l",
        "colorNumber": 2,
        "label": [
          95,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,50 C 80,60 70,220 135,265 C 100,220 100,80 150,50 Z"
        }
      },
      {
        "id": "ball-gore-blue-r",
        "colorNumber": 6,
        "label": [
          205,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,50 C 220,60 230,220 165,265 C 200,220 200,80 150,50 Z"
        }
      },
      {
        "id": "ball-gore-orange-c",
        "colorNumber": 3,
        "label": [
          125,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,50 C 115,70 115,220 142,268 C 130,220 130,70 150,50 Z"
        }
      },
      {
        "id": "ball-gore-green-c",
        "colorNumber": 5,
        "label": [
          175,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,50 C 185,70 185,220 158,268 C 170,220 170,70 150,50 Z"
        }
      },
      {
        "id": "ball-burner-flame",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,285 155,285 150,265"
        }
      },
      {
        "id": "ball-basket-ropes",
        "colorNumber": 8,
        "label": [
          150,
          290
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
        "id": "ball-wicker-basket",
        "colorNumber": 8,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 305,
          "w": 40,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "ball-sandbag-l",
        "colorNumber": 7,
        "label": [
          127,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 127,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "ball-sandbag-r",
        "colorNumber": 7,
        "label": [
          173,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 173,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "ball-cloud-1",
        "colorNumber": 1,
        "label": [
          50,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 340,
          "r": 30
        }
      },
      {
        "id": "ball-cloud-2",
        "colorNumber": 1,
        "label": [
          250,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 340,
          "r": 30
        }
      },
      {
        "id": "ball-sun",
        "colorNumber": 4,
        "label": [
          40,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "ball-bird-1",
        "colorNumber": 7,
        "label": [
          220,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "ball-bird-2",
        "colorNumber": 7,
        "label": [
          245,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 70,
          "r": 5
        }
      },
      {
        "id": "ball-distant-balloon",
        "colorNumber": 2,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 180,
          "r": 12
        }
      },
      {
        "id": "ball-distant-basket",
        "colorNumber": 8,
        "label": [
          250,
          196
        ],
        "shape": {
          "kind": "rect",
          "x": 247,
          "y": 194,
          "w": 6,
          "h": 5
        }
      },
      {
        "id": "ball-cloud-top-1",
        "colorNumber": 1,
        "label": [
          180,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 40,
          "r": 16
        }
      },
      {
        "id": "ball-cloud-top-2",
        "colorNumber": 1,
        "label": [
          205,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 35,
          "r": 20
        }
      },
      {
        "id": "ball-cloud-bot-1",
        "colorNumber": 1,
        "label": [
          110,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 370,
          "r": 24
        }
      },
      {
        "id": "ball-cloud-bot-2",
        "colorNumber": 1,
        "label": [
          190,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 370,
          "r": 24
        }
      },
      {
        "id": "ball-rainbow-sparkle-1",
        "colorNumber": 3,
        "label": [
          80,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 300,
          "r": 6
        }
      },
      {
        "id": "ball-rainbow-sparkle-2",
        "colorNumber": 5,
        "label": [
          220,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 300,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "vintage-roadster",
    "name": "Vintage Roadster",
    "emoji": "🚗",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#C62828",
      "#B71C1C",
      "#FFD54F",
      "#212121",
      "#78909C",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "roadster-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "roadster-road",
        "colorNumber": 5,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "roadster-flowing-body",
        "colorNumber": 2,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,275 C 35,250 55,230 115,225 L 175,200 L 235,235 C 265,250 265,275 265,275 Z"
        }
      },
      {
        "id": "roadster-fender-front",
        "colorNumber": 3,
        "label": [
          65,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,275 95,245 105,275"
        }
      },
      {
        "id": "roadster-fender-rear",
        "colorNumber": 3,
        "label": [
          225,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "195,245 255,245 265,275"
        }
      },
      {
        "id": "roadster-split-windshield",
        "colorNumber": 6,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 180,
          "w": 35,
          "h": 25,
          "rx": 2
        }
      },
      {
        "id": "roadster-headlamp-round",
        "colorNumber": 4,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "roadster-headlamp-bulb",
        "colorNumber": 7,
        "label": [
          45,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "roadster-spoke-wheel-f",
        "colorNumber": 5,
        "label": [
          85,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 290,
          "r": 28
        }
      },
      {
        "id": "roadster-whitewall-f",
        "colorNumber": 7,
        "label": [
          85,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 290,
          "r": 20
        }
      },
      {
        "id": "roadster-hubcap-f",
        "colorNumber": 4,
        "label": [
          85,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "roadster-spoke-wheel-r",
        "colorNumber": 5,
        "label": [
          220,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 290,
          "r": 28
        }
      },
      {
        "id": "roadster-whitewall-r",
        "colorNumber": 7,
        "label": [
          220,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 290,
          "r": 20
        }
      },
      {
        "id": "roadster-hubcap-r",
        "colorNumber": 4,
        "label": [
          220,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 290,
          "r": 10
        }
      },
      {
        "id": "roadster-spare-tyre",
        "colorNumber": 5,
        "label": [
          262,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 262,
          "cy": 245,
          "rx": 10,
          "ry": 24
        }
      },
      {
        "id": "roadster-chrome-bumper-f",
        "colorNumber": 6,
        "label": [
          28,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 22,
          "y": 268,
          "w": 12,
          "h": 14
        }
      },
      {
        "id": "roadster-hood-louvers",
        "colorNumber": 6,
        "label": [
          85,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 227,
          "w": 25,
          "h": 6
        }
      },
      {
        "id": "roadster-steering-wheel",
        "colorNumber": 5,
        "label": [
          160,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "roadster-sun",
        "colorNumber": 4,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 18
        }
      },
      {
        "id": "roadster-cloud-1",
        "colorNumber": 7,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "roadster-cloud-2",
        "colorNumber": 7,
        "label": [
          85,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 70,
          "r": 24
        }
      },
      {
        "id": "roadster-dash-line-1",
        "colorNumber": 7,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 357,
          "w": 30,
          "h": 6
        }
      },
      {
        "id": "roadster-dash-line-2",
        "colorNumber": 7,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 357,
          "w": 30,
          "h": 6
        }
      },
      {
        "id": "roadster-dash-line-3",
        "colorNumber": 7,
        "label": [
          260,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 245,
          "y": 357,
          "w": 30,
          "h": 6
        }
      }
    ]
  },
  {
    "id": "vespa-scooter",
    "name": "Vespa Scooter",
    "emoji": "🛵",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F7FA",
      "#00BCD4",
      "#00838F",
      "#ECEFF1",
      "#212121",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "vespa-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "vespa-cobblestone-street",
        "colorNumber": 4,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "vespa-curved-legshield",
        "colorNumber": 2,
        "label": [
          110,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 95,160 L 125,160 L 105,270 L 85,270 Z"
        }
      },
      {
        "id": "vespa-engine-cowl-bulbous",
        "colorNumber": 2,
        "label": [
          195,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 255,
          "rx": 45,
          "ry": 25
        }
      },
      {
        "id": "vespa-footboard",
        "colorNumber": 3,
        "label": [
          145,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,270 L 175,270 L 175,280 L 105,280 Z"
        }
      },
      {
        "id": "vespa-leather-saddle",
        "colorNumber": 5,
        "label": [
          175,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 215,
          "rx": 28,
          "ry": 10
        }
      },
      {
        "id": "vespa-handlebar-stem",
        "colorNumber": 4,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 120,
          "w": 6,
          "h": 40
        }
      },
      {
        "id": "vespa-round-headlight",
        "colorNumber": 6,
        "label": [
          115,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 115,
          "r": 12
        }
      },
      {
        "id": "vespa-headlight-bulb",
        "colorNumber": 7,
        "label": [
          115,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 115,
          "r": 6
        }
      },
      {
        "id": "vespa-wheel-front-tyre",
        "colorNumber": 5,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 295,
          "r": 24
        }
      },
      {
        "id": "vespa-rim-f",
        "colorNumber": 4,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 295,
          "r": 14
        }
      },
      {
        "id": "vespa-hub-f",
        "colorNumber": 6,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 295,
          "r": 6
        }
      },
      {
        "id": "vespa-wheel-rear-tyre",
        "colorNumber": 5,
        "label": [
          220,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 295,
          "r": 24
        }
      },
      {
        "id": "vespa-rim-r",
        "colorNumber": 4,
        "label": [
          220,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 295,
          "r": 14
        }
      },
      {
        "id": "vespa-hub-r",
        "colorNumber": 6,
        "label": [
          220,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 295,
          "r": 6
        }
      },
      {
        "id": "vespa-luggage-rack",
        "colorNumber": 4,
        "label": [
          235,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 220,
          "y": 220,
          "w": 30,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "vespa-mirror-round",
        "colorNumber": 4,
        "label": [
          130,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 95,
          "r": 7
        }
      },
      {
        "id": "vespa-taillight",
        "colorNumber": 6,
        "label": [
          242,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 242,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "vespa-sun",
        "colorNumber": 6,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "vespa-cloud-1",
        "colorNumber": 7,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "vespa-cloud-2",
        "colorNumber": 7,
        "label": [
          80,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 70,
          "r": 22
        }
      },
      {
        "id": "vespa-street-lamp",
        "colorNumber": 5,
        "label": [
          265,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 180,
          "r": 10
        }
      },
      {
        "id": "vespa-lamp-post",
        "colorNumber": 5,
        "label": [
          265,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 263,
          "y": 190,
          "w": 4,
          "h": 140
        }
      },
      {
        "id": "vespa-sparkle",
        "colorNumber": 7,
        "label": [
          45,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 180,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "skateboard",
    "name": "Skater Board",
    "emoji": "🛹",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF3E0",
      "#FF6D00",
      "#FFAB00",
      "#212121",
      "#78909C",
      "#00E5FF",
      "#FFFFFF",
      "#E91E63"
    ],
    "regions": [
      {
        "id": "skate-park-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "skate-concrete-ramp",
        "colorNumber": 5,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,220 Q 150,330 300,330 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "skate-deck-wood",
        "colorNumber": 2,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,150 250,210 245,225 35,165"
        }
      },
      {
        "id": "skate-deck-griptape",
        "colorNumber": 4,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,150 250,210 248,215 38,155"
        }
      },
      {
        "id": "skate-truck-front",
        "colorNumber": 5,
        "label": [
          85,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 180,
          "w": 20,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "skate-truck-rear",
        "colorNumber": 5,
        "label": [
          195,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 210,
          "w": 20,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "skate-wheel-fl",
        "colorNumber": 6,
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
        "id": "skate-bearing-fl",
        "colorNumber": 4,
        "label": [
          75,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 205,
          "r": 5
        }
      },
      {
        "id": "skate-wheel-fr",
        "colorNumber": 6,
        "label": [
          95,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 210,
          "r": 14
        }
      },
      {
        "id": "skate-bearing-fr",
        "colorNumber": 4,
        "label": [
          95,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 210,
          "r": 5
        }
      },
      {
        "id": "skate-wheel-rl",
        "colorNumber": 6,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 235,
          "r": 14
        }
      },
      {
        "id": "skate-bearing-rl",
        "colorNumber": 4,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "skate-wheel-rr",
        "colorNumber": 6,
        "label": [
          205,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 240,
          "r": 14
        }
      },
      {
        "id": "skate-bearing-rr",
        "colorNumber": 4,
        "label": [
          205,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 240,
          "r": 5
        }
      },
      {
        "id": "skate-flame-graphic-1",
        "colorNumber": 8,
        "label": [
          125,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "skate-flame-graphic-2",
        "colorNumber": 3,
        "label": [
          155,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 200,
          "r": 10
        }
      },
      {
        "id": "skate-sun",
        "colorNumber": 3,
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
        "id": "skate-cloud-1",
        "colorNumber": 7,
        "label": [
          60,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 70,
          "r": 18
        }
      },
      {
        "id": "skate-cloud-2",
        "colorNumber": 7,
        "label": [
          85,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 65,
          "r": 24
        }
      },
      {
        "id": "skate-motion-spark-1",
        "colorNumber": 6,
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
        "id": "skate-motion-spark-2",
        "colorNumber": 6,
        "label": [
          35,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "skate-ramp-coaping",
        "colorNumber": 7,
        "label": [
          20,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "skate-graffiti-tag",
        "colorNumber": 8,
        "label": [
          220,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 360,
          "r": 16
        }
      },
      {
        "id": "skate-graffiti-core",
        "colorNumber": 6,
        "label": [
          220,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 360,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "canoe",
    "name": "Wooden Canoe",
    "emoji": "🛶",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#0288D1",
      "#01579B",
      "#8D6E63",
      "#6D4C41",
      "#4E342E",
      "#4CAF50",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "canoe-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "canoe-lake-water",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 240,
          "w": 300,
          "h": 160
        }
      },
      {
        "id": "canoe-wood-hull",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,230 Q 150,275 270,230 Q 150,250 30,230 Z"
        }
      },
      {
        "id": "canoe-inner-rim",
        "colorNumber": 5,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,232 Q 150,248 255,232 Q 150,240 45,232 Z"
        }
      },
      {
        "id": "canoe-thwart-bar-1",
        "colorNumber": 6,
        "label": [
          115,
          238
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 236,
          "w": 10,
          "h": 6
        }
      },
      {
        "id": "canoe-thwart-bar-2",
        "colorNumber": 6,
        "label": [
          185,
          238
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 236,
          "w": 10,
          "h": 6
        }
      },
      {
        "id": "canoe-seat-bow",
        "colorNumber": 6,
        "label": [
          90,
          238
        ],
        "shape": {
          "kind": "rect",
          "x": 82,
          "y": 235,
          "w": 16,
          "h": 6
        }
      },
      {
        "id": "canoe-seat-stern",
        "colorNumber": 6,
        "label": [
          210,
          238
        ],
        "shape": {
          "kind": "rect",
          "x": 202,
          "y": 235,
          "w": 16,
          "h": 6
        }
      },
      {
        "id": "canoe-paddle-blade",
        "colorNumber": 4,
        "label": [
          145,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,150 150,150 155,210 135,210"
        }
      },
      {
        "id": "canoe-paddle-shaft",
        "colorNumber": 6,
        "label": [
          145,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 143,
          "y": 110,
          "w": 4,
          "h": 70
        }
      },
      {
        "id": "canoe-pine-tree-1",
        "colorNumber": 7,
        "label": [
          50,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "50,130 75,235 25,235"
        }
      },
      {
        "id": "canoe-pine-tree-2",
        "colorNumber": 7,
        "label": [
          250,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "250,130 275,235 225,235"
        }
      },
      {
        "id": "canoe-sun",
        "colorNumber": 8,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 20
        }
      },
      {
        "id": "canoe-cloud-1",
        "colorNumber": 1,
        "label": [
          70,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "canoe-cloud-2",
        "colorNumber": 1,
        "label": [
          95,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 70,
          "r": 24
        }
      },
      {
        "id": "canoe-water-ripple-1",
        "colorNumber": 3,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "canoe-water-ripple-2",
        "colorNumber": 3,
        "label": [
          220,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "canoe-water-lily",
        "colorNumber": 7,
        "label": [
          70,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "canoe-flower-petal",
        "colorNumber": 8,
        "label": [
          70,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 340,
          "r": 5
        }
      },
      {
        "id": "canoe-water-splash-1",
        "colorNumber": 1,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "canoe-water-splash-2",
        "colorNumber": 1,
        "label": [
          165,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 260,
          "r": 4
        }
      },
      {
        "id": "canoe-mountain-peak-l",
        "colorNumber": 5,
        "label": [
          90,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 170,
          "r": 40
        }
      },
      {
        "id": "canoe-mountain-peak-r",
        "colorNumber": 5,
        "label": [
          210,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 170,
          "r": 40
        }
      },
      {
        "id": "canoe-mountain-snow",
        "colorNumber": 1,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 150,
          "r": 20
        }
      }
    ]
  },
  {
    "id": "speedboat",
    "name": "Ocean Speedboat",
    "emoji": "🚤",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0288D1",
      "#01579B",
      "#FFFFFF",
      "#D32F2F",
      "#212121",
      "#00E5FF",
      "#78909C",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "speed-sky",
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
        "id": "speed-sea-wake",
        "colorNumber": 1,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,250 Q 150,220 300,250 L 300,400 L 0,400 Z"
        }
      },
      {
        "id": "speed-sharp-hull",
        "colorNumber": 3,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "35,220 255,220 225,270 55,260"
        }
      },
      {
        "id": "speed-red-stripe",
        "colorNumber": 4,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "45,235 245,235 238,245 50,245"
        }
      },
      {
        "id": "speed-tinted-windshield",
        "colorNumber": 6,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "polygon",
          "points": "105,220 185,220 170,185 120,185"
        }
      },
      {
        "id": "speed-cockpit-opening",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 200,
          "w": 70,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "speed-driver-helm",
        "colorNumber": 5,
        "label": [
          140,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 195,
          "r": 8
        }
      },
      {
        "id": "speed-outboard-engine",
        "colorNumber": 5,
        "label": [
          40,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 220,
          "w": 18,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "speed-engine-shaft",
        "colorNumber": 7,
        "label": [
          40,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 34,
          "y": 250,
          "w": 10,
          "h": 25
        }
      },
      {
        "id": "speed-rooster-tail-spray",
        "colorNumber": 3,
        "label": [
          25,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,250 C 15,220 10,180 30,160 C 25,185 28,220 35,250 Z"
        }
      },
      {
        "id": "speed-spray-bubble-1",
        "colorNumber": 3,
        "label": [
          20,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "speed-spray-bubble-2",
        "colorNumber": 3,
        "label": [
          15,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 15,
          "cy": 210,
          "r": 10
        }
      },
      {
        "id": "speed-sun",
        "colorNumber": 8,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "speed-cloud-1",
        "colorNumber": 3,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "speed-cloud-2",
        "colorNumber": 3,
        "label": [
          85,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 70,
          "r": 24
        }
      },
      {
        "id": "speed-cleat-bow",
        "colorNumber": 7,
        "label": [
          240,
          222
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 222,
          "r": 4
        }
      },
      {
        "id": "speed-cleat-stern",
        "colorNumber": 7,
        "label": [
          60,
          222
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 222,
          "r": 4
        }
      },
      {
        "id": "speed-ocean-swell-1",
        "colorNumber": 2,
        "label": [
          80,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "speed-ocean-swell-2",
        "colorNumber": 2,
        "label": [
          220,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 340,
          "r": 20
        }
      },
      {
        "id": "speed-sea-foam-1",
        "colorNumber": 3,
        "label": [
          100,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "speed-sea-foam-2",
        "colorNumber": 3,
        "label": [
          180,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "speed-seabird-1",
        "colorNumber": 3,
        "label": [
          180,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "speed-seabird-2",
        "colorNumber": 3,
        "label": [
          205,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 100,
          "r": 5
        }
      },
      {
        "id": "speed-deep-blue",
        "colorNumber": 2,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 375,
          "r": 25
        }
      }
    ]
  },
  {
    "id": "metro-tram",
    "name": "City Metro Tram",
    "emoji": "🚋",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#FFD54F",
      "#FFA000",
      "#212121",
      "#0288D1",
      "#78909C",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "tram-city-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "tram-street-asphalt",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "tram-track-groove",
        "colorNumber": 6,
        "label": [
          150,
          336
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 334,
          "w": 300,
          "h": 4
        }
      },
      {
        "id": "tram-body-yellow",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 175,
          "w": 220,
          "h": 100,
          "rx": 6
        }
      },
      {
        "id": "tram-body-skirt",
        "colorNumber": 3,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 255,
          "w": 220,
          "h": 20
        }
      },
      {
        "id": "tram-pantograph-arm",
        "colorNumber": 6,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,175 135,115 165,115 155,175"
        }
      },
      {
        "id": "tram-pantograph-head",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 112,
          "w": 50,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "tram-windshield-front",
        "colorNumber": 5,
        "label": [
          65,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 185,
          "w": 40,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "tram-window-1",
        "colorNumber": 5,
        "label": [
          110,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 185,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "tram-window-2",
        "colorNumber": 5,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 185,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "tram-window-3",
        "colorNumber": 5,
        "label": [
          190,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 185,
          "w": 30,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "tram-window-rear",
        "colorNumber": 5,
        "label": [
          235,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 185,
          "w": 40,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "tram-passenger-door",
        "colorNumber": 6,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 220,
          "w": 24,
          "h": 55
        }
      },
      {
        "id": "tram-wheel-1",
        "colorNumber": 4,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "tram-rim-1",
        "colorNumber": 6,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 10
        }
      },
      {
        "id": "tram-wheel-2",
        "colorNumber": 4,
        "label": [
          125,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "tram-rim-2",
        "colorNumber": 6,
        "label": [
          125,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 300,
          "r": 10
        }
      },
      {
        "id": "tram-wheel-3",
        "colorNumber": 4,
        "label": [
          175,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "tram-rim-3",
        "colorNumber": 6,
        "label": [
          175,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 300,
          "r": 10
        }
      },
      {
        "id": "tram-wheel-4",
        "colorNumber": 4,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 300,
          "r": 20
        }
      },
      {
        "id": "tram-rim-4",
        "colorNumber": 6,
        "label": [
          225,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 300,
          "r": 10
        }
      },
      {
        "id": "tram-route-display",
        "colorNumber": 4,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 177,
          "w": 40,
          "h": 8
        }
      },
      {
        "id": "tram-headlight-f",
        "colorNumber": 7,
        "label": [
          43,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 43,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "tram-taillight-r",
        "colorNumber": 3,
        "label": [
          257,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 257,
          "cy": 240,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "biplane",
    "name": "Vintage Biplane",
    "emoji": "🛩️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#81D4FA",
      "#FFCA28",
      "#FFA000",
      "#D32F2F",
      "#212121",
      "#FFFFFF",
      "#78909C"
    ],
    "regions": [
      {
        "id": "bi-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "bi-fuselage",
        "colorNumber": 2,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 215,
          "rx": 110,
          "ry": 25
        }
      },
      {
        "id": "bi-upper-wing",
        "colorNumber": 3,
        "label": [
          145,
          145
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 140,
          "w": 200,
          "h": 12,
          "rx": 4
        }
      },
      {
        "id": "bi-lower-wing",
        "colorNumber": 3,
        "label": [
          145,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 225,
          "w": 160,
          "h": 12,
          "rx": 4
        }
      },
      {
        "id": "bi-wing-strut-l",
        "colorNumber": 7,
        "label": [
          85,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 83,
          "y": 152,
          "w": 4,
          "h": 73
        }
      },
      {
        "id": "bi-wing-strut-r",
        "colorNumber": 7,
        "label": [
          205,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 203,
          "y": 152,
          "w": 4,
          "h": 73
        }
      },
      {
        "id": "bi-cockpit-hole",
        "colorNumber": 5,
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
        "id": "bi-pilot-helmet",
        "colorNumber": 4,
        "label": [
          145,
          192
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 192,
          "r": 7
        }
      },
      {
        "id": "bi-vertical-tail",
        "colorNumber": 4,
        "label": [
          245,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "235,200 265,150 255,205"
        }
      },
      {
        "id": "bi-tail-horizontal",
        "colorNumber": 2,
        "label": [
          245,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 212,
          "w": 35,
          "h": 6
        }
      },
      {
        "id": "bi-radial-engine",
        "colorNumber": 5,
        "label": [
          45,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 215,
          "r": 18
        }
      },
      {
        "id": "bi-prop-hub",
        "colorNumber": 7,
        "label": [
          32,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 32,
          "cy": 215,
          "r": 6
        }
      },
      {
        "id": "bi-prop-blade-top",
        "colorNumber": 5,
        "label": [
          32,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,215 28,140 36,140"
        }
      },
      {
        "id": "bi-prop-blade-bot",
        "colorNumber": 5,
        "label": [
          32,
          255
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,215 28,290 36,290"
        }
      },
      {
        "id": "bi-landing-gear-strut",
        "colorNumber": 7,
        "label": [
          105,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "95,235 115,235 105,280"
        }
      },
      {
        "id": "bi-wheel-tyre",
        "colorNumber": 5,
        "label": [
          105,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 285,
          "r": 14
        }
      },
      {
        "id": "bi-wheel-spoke",
        "colorNumber": 6,
        "label": [
          105,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 285,
          "r": 7
        }
      },
      {
        "id": "bi-sun",
        "colorNumber": 2,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "bi-cloud-1",
        "colorNumber": 6,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "bi-cloud-2",
        "colorNumber": 6,
        "label": [
          85,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 70,
          "r": 24
        }
      },
      {
        "id": "bi-smoke-trail-1",
        "colorNumber": 6,
        "label": [
          265,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 215,
          "r": 8
        }
      },
      {
        "id": "bi-smoke-trail-2",
        "colorNumber": 6,
        "label": [
          285,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 215,
          "r": 12
        }
      },
      {
        "id": "bi-wing-roundel-l",
        "colorNumber": 4,
        "label": [
          105,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 145,
          "r": 5
        }
      },
      {
        "id": "bi-wing-roundel-r",
        "colorNumber": 4,
        "label": [
          185,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 145,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "big-rig-truck",
    "name": "Big Rig Truck",
    "emoji": "🚛",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#1565C0",
      "#0D47A1",
      "#78909C",
      "#212121",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "rig-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "rig-highway",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "rig-cargo-trailer",
        "colorNumber": 4,
        "label": [
          195,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 150,
          "w": 130,
          "h": 120,
          "rx": 4
        }
      },
      {
        "id": "rig-sleeper-cab",
        "colorNumber": 2,
        "label": [
          90,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 170,
          "w": 80,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "rig-hood-nose",
        "colorNumber": 3,
        "label": [
          45,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 210,
          "w": 35,
          "h": 60,
          "rx": 4
        }
      },
      {
        "id": "rig-chrome-grill",
        "colorNumber": 4,
        "label": [
          25,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 215,
          "w": 8,
          "h": 50
        }
      },
      {
        "id": "rig-windshield",
        "colorNumber": 1,
        "label": [
          65,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 52,
          "y": 180,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "rig-exhaust-stack-1",
        "colorNumber": 4,
        "label": [
          85,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 82,
          "y": 110,
          "w": 6,
          "h": 60
        }
      },
      {
        "id": "rig-exhaust-stack-2",
        "colorNumber": 4,
        "label": [
          95,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 92,
          "y": 110,
          "w": 6,
          "h": 60
        }
      },
      {
        "id": "rig-sun-visor",
        "colorNumber": 3,
        "label": [
          65,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 48,
          "y": 172,
          "w": 40,
          "h": 6
        }
      },
      {
        "id": "rig-steer-wheel",
        "colorNumber": 5,
        "label": [
          50,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 295,
          "r": 22
        }
      },
      {
        "id": "rig-steer-rim",
        "colorNumber": 4,
        "label": [
          50,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "rig-drive-wheel-1",
        "colorNumber": 5,
        "label": [
          105,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 295,
          "r": 22
        }
      },
      {
        "id": "rig-drive-rim-1",
        "colorNumber": 4,
        "label": [
          105,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "rig-trailer-wheel-1",
        "colorNumber": 5,
        "label": [
          195,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 295,
          "r": 22
        }
      },
      {
        "id": "rig-trailer-rim-1",
        "colorNumber": 4,
        "label": [
          195,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "rig-trailer-wheel-2",
        "colorNumber": 5,
        "label": [
          235,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 295,
          "r": 22
        }
      },
      {
        "id": "rig-trailer-rim-2",
        "colorNumber": 4,
        "label": [
          235,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 295,
          "r": 11
        }
      },
      {
        "id": "rig-headlight",
        "colorNumber": 6,
        "label": [
          24,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 24,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "rig-fuel-tank-chrome",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 270,
          "w": 30,
          "h": 18,
          "rx": 4
        }
      },
      {
        "id": "rig-sun",
        "colorNumber": 6,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "rig-cloud-1",
        "colorNumber": 7,
        "label": [
          55,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "rig-cloud-2",
        "colorNumber": 7,
        "label": [
          80,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "rig-highway-line",
        "colorNumber": 6,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 362,
          "w": 300,
          "h": 6
        }
      }
    ]
  },
  {
    "id": "motorcycle",
    "name": "Sport Motorcycle",
    "emoji": "🏍️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#D50000",
      "#B71C1C",
      "#212121",
      "#00E5FF",
      "#78909C",
      "#FFD54F",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "moto-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "moto-road",
        "colorNumber": 4,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "moto-aerodynamic-fairing",
        "colorNumber": 2,
        "label": [
          110,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,190 L 145,190 L 135,270 L 85,270 Z"
        }
      },
      {
        "id": "moto-windscreen-tinted",
        "colorNumber": 5,
        "label": [
          95,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,190 115,190 105,160"
        }
      },
      {
        "id": "moto-sculpted-tank",
        "colorNumber": 2,
        "label": [
          145,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,190 Q 155,180 175,210 L 135,225 Z"
        }
      },
      {
        "id": "moto-tail-cowl",
        "colorNumber": 3,
        "label": [
          205,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,210 235,200 225,230 175,225"
        }
      },
      {
        "id": "moto-leather-seat",
        "colorNumber": 4,
        "label": [
          170,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 205,
          "w": 25,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "moto-engine-block",
        "colorNumber": 6,
        "label": [
          140,
          245
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,230 165,230 155,275 125,275"
        }
      },
      {
        "id": "moto-exhaust-pipe",
        "colorNumber": 6,
        "label": [
          185,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 155,265 L 225,255 L 235,245"
        }
      },
      {
        "id": "moto-front-forks",
        "colorNumber": 6,
        "label": [
          85,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 195,
          "w": 8,
          "h": 90
        }
      },
      {
        "id": "moto-wheel-front-tyre",
        "colorNumber": 4,
        "label": [
          75,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 285,
          "r": 32
        }
      },
      {
        "id": "moto-rim-f",
        "colorNumber": 7,
        "label": [
          75,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 285,
          "r": 20
        }
      },
      {
        "id": "moto-brake-disc-f",
        "colorNumber": 6,
        "label": [
          75,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 285,
          "r": 12
        }
      },
      {
        "id": "moto-wheel-rear-tyre",
        "colorNumber": 4,
        "label": [
          225,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 285,
          "r": 34
        }
      },
      {
        "id": "moto-rim-r",
        "colorNumber": 7,
        "label": [
          225,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 285,
          "r": 22
        }
      },
      {
        "id": "moto-brake-disc-r",
        "colorNumber": 6,
        "label": [
          225,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 285,
          "r": 14
        }
      },
      {
        "id": "moto-headlight-led",
        "colorNumber": 7,
        "label": [
          73,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 200,
          "r": 6
        }
      },
      {
        "id": "moto-taillight-led",
        "colorNumber": 2,
        "label": [
          237,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 237,
          "cy": 200,
          "r": 5
        }
      },
      {
        "id": "moto-clipon-handlebar",
        "colorNumber": 4,
        "label": [
          105,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 105,190 L 115,180 L 100,180"
        }
      },
      {
        "id": "moto-sun",
        "colorNumber": 7,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "moto-cloud-1",
        "colorNumber": 8,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "moto-cloud-2",
        "colorNumber": 8,
        "label": [
          85,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 70,
          "r": 24
        }
      },
      {
        "id": "moto-lane-dash-1",
        "colorNumber": 8,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 357,
          "w": 35,
          "h": 6
        }
      },
      {
        "id": "moto-lane-dash-2",
        "colorNumber": 8,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 357,
          "w": 35,
          "h": 6
        }
      }
    ]
  },
  {
    "id": "city-bus",
    "name": "Double Decker Bus",
    "emoji": "🚍",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#D32F2F",
      "#B71C1C",
      "#212121",
      "#0288D1",
      "#FFFFFF",
      "#FFD54F"
    ],
    "regions": [
      {
        "id": "bus-city-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "bus-street",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "bus-main-body",
        "colorNumber": 2,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 130,
          "w": 220,
          "h": 150,
          "rx": 6
        }
      },
      {
        "id": "bus-roof",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 125,
          "w": 230,
          "h": 10,
          "rx": 4
        }
      },
      {
        "id": "bus-window-upper-1",
        "colorNumber": 5,
        "label": [
          65,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 145,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-upper-2",
        "colorNumber": 5,
        "label": [
          110,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 145,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-upper-3",
        "colorNumber": 5,
        "label": [
          155,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 145,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-upper-4",
        "colorNumber": 5,
        "label": [
          200,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 145,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-upper-5",
        "colorNumber": 5,
        "label": [
          240,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 230,
          "y": 145,
          "w": 20,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-driver-windshield",
        "colorNumber": 5,
        "label": [
          65,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 205,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-lower-1",
        "colorNumber": 5,
        "label": [
          110,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 205,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-window-lower-2",
        "colorNumber": 5,
        "label": [
          155,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 205,
          "w": 35,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bus-door-entrance",
        "colorNumber": 6,
        "label": [
          215,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 205,
          "w": 45,
          "h": 65,
          "rx": 2
        }
      },
      {
        "id": "bus-destination-board",
        "colorNumber": 4,
        "label": [
          65,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 48,
          "y": 190,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "bus-wheel-front",
        "colorNumber": 4,
        "label": [
          80,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 295,
          "r": 25
        }
      },
      {
        "id": "bus-rim-front",
        "colorNumber": 6,
        "label": [
          80,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 295,
          "r": 12
        }
      },
      {
        "id": "bus-wheel-rear-1",
        "colorNumber": 4,
        "label": [
          195,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 295,
          "r": 25
        }
      },
      {
        "id": "bus-rim-rear-1",
        "colorNumber": 6,
        "label": [
          195,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 295,
          "r": 12
        }
      },
      {
        "id": "bus-wheel-rear-2",
        "colorNumber": 4,
        "label": [
          235,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 295,
          "r": 25
        }
      },
      {
        "id": "bus-rim-rear-2",
        "colorNumber": 6,
        "label": [
          235,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 295,
          "r": 12
        }
      },
      {
        "id": "bus-headlight",
        "colorNumber": 7,
        "label": [
          42,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 42,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "bus-sun",
        "colorNumber": 7,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "bus-cloud-1",
        "colorNumber": 6,
        "label": [
          55,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "bus-cloud-2",
        "colorNumber": 6,
        "label": [
          80,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 60,
          "r": 22
        }
      }
    ]
  },
  {
    "id": "auto-rickshaw",
    "name": "Auto Rickshaw",
    "emoji": "🛺",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#2E7D32",
      "#1B5E20",
      "#FFD54F",
      "#212121",
      "#78909C",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "tuk-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "tuk-street",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "tuk-canopy-roof",
        "colorNumber": 5,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,160 Q 150,140 235,160 L 235,185 L 65,185 Z"
        }
      },
      {
        "id": "tuk-lower-body-green",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,275 L 75,210 L 225,210 L 235,275 Z"
        }
      },
      {
        "id": "tuk-door-cutout-open",
        "colorNumber": 4,
        "label": [
          145,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 185,
          "w": 60,
          "h": 55
        }
      },
      {
        "id": "tuk-windshield-front",
        "colorNumber": 1,
        "label": [
          85,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 180,
          "w": 25,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "tuk-headlight-round",
        "colorNumber": 4,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 230,
          "r": 10
        }
      },
      {
        "id": "tuk-headlight-bulb",
        "colorNumber": 7,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 230,
          "r": 5
        }
      },
      {
        "id": "tuk-front-wheel",
        "colorNumber": 5,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 22
        }
      },
      {
        "id": "tuk-front-rim",
        "colorNumber": 6,
        "label": [
          75,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 300,
          "r": 11
        }
      },
      {
        "id": "tuk-rear-wheel",
        "colorNumber": 5,
        "label": [
          205,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 300,
          "r": 24
        }
      },
      {
        "id": "tuk-rear-rim",
        "colorNumber": 6,
        "label": [
          205,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 300,
          "r": 12
        }
      },
      {
        "id": "tuk-driver-seat",
        "colorNumber": 5,
        "label": [
          105,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 225,
          "w": 20,
          "h": 10
        }
      },
      {
        "id": "tuk-passenger-seat",
        "colorNumber": 5,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 225,
          "w": 40,
          "h": 12
        }
      },
      {
        "id": "tuk-yellow-stripe",
        "colorNumber": 4,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 220,
          "w": 180,
          "h": 8
        }
      },
      {
        "id": "tuk-handlebar-stem",
        "colorNumber": 6,
        "label": [
          90,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 75,260 L 90,215 L 80,215"
        }
      },
      {
        "id": "tuk-meter-console",
        "colorNumber": 4,
        "label": [
          90,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "tuk-sun",
        "colorNumber": 4,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "tuk-cloud-1",
        "colorNumber": 7,
        "label": [
          55,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "tuk-cloud-2",
        "colorNumber": 7,
        "label": [
          80,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "tuk-side-mirror",
        "colorNumber": 6,
        "label": [
          72,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 72,
          "cy": 190,
          "r": 5
        }
      },
      {
        "id": "tuk-mudguard-f",
        "colorNumber": 3,
        "label": [
          75,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 275,
          "r": 16
        }
      },
      {
        "id": "tuk-mudguard-r",
        "colorNumber": 3,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 275,
          "r": 18
        }
      },
      {
        "id": "tuk-street-dash",
        "colorNumber": 7,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 362,
          "w": 30,
          "h": 6
        }
      }
    ]
  },
  {
    "id": "police-car",
    "name": "Highway Patrol",
    "emoji": "🚓",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#212121",
      "#FFFFFF",
      "#0288D1",
      "#D32F2F",
      "#FFD54F",
      "#78909C"
    ],
    "regions": [
      {
        "id": "cop-sky",
        "colorNumber": 1,
        "label": [
          25,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "cop-highway",
        "colorNumber": 2,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "cop-car-body-black",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 35,275 L 65,225 L 125,200 L 205,200 L 245,235 L 265,275 Z"
        }
      },
      {
        "id": "cop-door-white",
        "colorNumber": 3,
        "label": [
          145,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 220,
          "w": 80,
          "h": 50
        }
      },
      {
        "id": "cop-windshield-front",
        "colorNumber": 4,
        "label": [
          110,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 195,
          "w": 40,
          "h": 25,
          "rx": 2
        }
      },
      {
        "id": "cop-window-rear",
        "colorNumber": 4,
        "label": [
          180,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 195,
          "w": 45,
          "h": 25,
          "rx": 2
        }
      },
      {
        "id": "cop-lightbar-base",
        "colorNumber": 2,
        "label": [
          145,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 182,
          "w": 30,
          "h": 6
        }
      },
      {
        "id": "cop-siren-blue",
        "colorNumber": 4,
        "label": [
          135,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 178,
          "r": 6
        }
      },
      {
        "id": "cop-siren-red",
        "colorNumber": 5,
        "label": [
          155,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 178,
          "r": 6
        }
      },
      {
        "id": "cop-pushbar-bullbar",
        "colorNumber": 2,
        "label": [
          30,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "25,245 35,245 35,280 25,280"
        }
      },
      {
        "id": "cop-wheel-front",
        "colorNumber": 2,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 25
        }
      },
      {
        "id": "cop-rim-front",
        "colorNumber": 7,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "cop-wheel-rear",
        "colorNumber": 2,
        "label": [
          215,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 290,
          "r": 25
        }
      },
      {
        "id": "cop-rim-rear",
        "colorNumber": 7,
        "label": [
          215,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "cop-star-badge",
        "colorNumber": 6,
        "label": [
          145,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 245,
          "r": 10
        }
      },
      {
        "id": "cop-spotlight-pillar",
        "colorNumber": 7,
        "label": [
          85,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 205,
          "r": 5
        }
      },
      {
        "id": "cop-headlight",
        "colorNumber": 6,
        "label": [
          36,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 36,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "cop-taillight",
        "colorNumber": 5,
        "label": [
          264,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 264,
          "cy": 245,
          "r": 6
        }
      },
      {
        "id": "cop-sun",
        "colorNumber": 6,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "cop-cloud-1",
        "colorNumber": 3,
        "label": [
          55,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 65,
          "r": 16
        }
      },
      {
        "id": "cop-cloud-2",
        "colorNumber": 3,
        "label": [
          80,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cop-road-dash-1",
        "colorNumber": 3,
        "label": [
          40,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 357,
          "w": 30,
          "h": 6
        }
      },
      {
        "id": "cop-road-dash-2",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 357,
          "w": 30,
          "h": 6
        }
      },
      {
        "id": "cop-road-dash-3",
        "colorNumber": 3,
        "label": [
          260,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 245,
          "y": 357,
          "w": 30,
          "h": 6
        }
      }
    ]
  },
  {
    "id": "ambulance",
    "name": "Emergency Medic",
    "emoji": "🚑",
    "colors": [
      "#ECEFF1",
      "#FFFFFF",
      "#D32F2F",
      "#0288D1",
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
        "id": "road",
        "colorNumber": 5,
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
        "id": "van-body",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 150,
          "w": 220,
          "h": 140,
          "rx": 10
        }
      },
      {
        "id": "cab-windshield",
        "colorNumber": 4,
        "label": [
          215,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 165,
          "w": 55,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "side-stripe-red",
        "colorNumber": 3,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 225,
          "w": 220,
          "h": 18
        }
      },
      {
        "id": "cross-v",
        "colorNumber": 3,
        "label": [
          120,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 175,
          "w": 16,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "cross-h",
        "colorNumber": 3,
        "label": [
          120,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 187,
          "w": 40,
          "h": 16,
          "rx": 2
        }
      },
      {
        "id": "siren-red",
        "colorNumber": 3,
        "label": [
          150,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 138,
          "r": 10
        }
      },
      {
        "id": "siren-blue",
        "colorNumber": 4,
        "label": [
          165,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 138,
          "r": 10
        }
      },
      {
        "id": "wheel-f",
        "colorNumber": 5,
        "label": [
          210,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 290,
          "r": 26
        }
      },
      {
        "id": "wheel-r",
        "colorNumber": 5,
        "label": [
          90,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 290,
          "r": 26
        }
      },
      {
        "id": "rim-f",
        "colorNumber": 1,
        "label": [
          210,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "rim-r",
        "colorNumber": 1,
        "label": [
          90,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 290,
          "r": 12
        }
      },
      {
        "id": "headlight",
        "colorNumber": 6,
        "label": [
          255,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 245,
          "r": 8
        }
      },
      {
        "id": "door-seam",
        "colorNumber": 1,
        "label": [
          170,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 168,
          "y": 150,
          "w": 4,
          "h": 140
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          60,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 70,
          "r": 18
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 2,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 70,
          "r": 18
        }
      },
      {
        "id": "sun-light",
        "colorNumber": 6,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 20
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
        "id": "road-dash-1",
        "colorNumber": 6,
        "label": [
          80,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 375,
          "r": 5
        }
      },
      {
        "id": "road-dash-2",
        "colorNumber": 6,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 375,
          "r": 5
        }
      },
      {
        "id": "road-dash-3",
        "colorNumber": 6,
        "label": [
          220,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 375,
          "r": 5
        }
      },
      {
        "id": "star-top",
        "colorNumber": 6,
        "label": [
          270,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 120,
          "r": 4
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "taxicab",
    "name": "City Taxi Cab",
    "emoji": "🚕",
    "colors": [
      "#FFF8E1",
      "#FFD54F",
      "#212121",
      "#0288D1",
      "#FFFFFF",
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
        "id": "road",
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
        "id": "taxi-roof",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "polygon",
          "points": "85,210 115,150 185,150 215,210"
        }
      },
      {
        "id": "taxi-body",
        "colorNumber": 2,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 210,
          "w": 210,
          "h": 75,
          "rx": 8
        }
      },
      {
        "id": "taxi-sign",
        "colorNumber": 5,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 125,
          "w": 50,
          "h": 22,
          "rx": 4
        }
      },
      {
        "id": "windshield-f",
        "colorNumber": 4,
        "label": [
          195,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 160,
          "w": 35,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "windshield-r",
        "colorNumber": 4,
        "label": [
          105,
          180
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 160,
          "w": 35,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "checker-1",
        "colorNumber": 3,
        "label": [
          90,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 240,
          "w": 16,
          "h": 12
        }
      },
      {
        "id": "checker-2",
        "colorNumber": 5,
        "label": [
          110,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 240,
          "w": 16,
          "h": 12
        }
      },
      {
        "id": "checker-3",
        "colorNumber": 3,
        "label": [
          130,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 240,
          "w": 16,
          "h": 12
        }
      },
      {
        "id": "checker-4",
        "colorNumber": 5,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 240,
          "w": 16,
          "h": 12
        }
      },
      {
        "id": "checker-5",
        "colorNumber": 3,
        "label": [
          170,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 240,
          "w": 16,
          "h": 12
        }
      },
      {
        "id": "wheel-f",
        "colorNumber": 3,
        "label": [
          205,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 285,
          "r": 25
        }
      },
      {
        "id": "wheel-r",
        "colorNumber": 3,
        "label": [
          95,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 285,
          "r": 25
        }
      },
      {
        "id": "hub-f",
        "colorNumber": 5,
        "label": [
          205,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 285,
          "r": 10
        }
      },
      {
        "id": "hub-r",
        "colorNumber": 5,
        "label": [
          95,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 285,
          "r": 10
        }
      },
      {
        "id": "headlight",
        "colorNumber": 5,
        "label": [
          250,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 235,
          "r": 8
        }
      },
      {
        "id": "taillight",
        "colorNumber": 6,
        "label": [
          50,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 235,
          "r": 8
        }
      },
      {
        "id": "building-1",
        "colorNumber": 3,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 80,
          "r": 20
        }
      },
      {
        "id": "building-2",
        "colorNumber": 3,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 80,
          "r": 20
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
        "id": "road-stripe-1",
        "colorNumber": 5,
        "label": [
          100,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 375,
          "r": 6
        }
      },
      {
        "id": "road-stripe-2",
        "colorNumber": 5,
        "label": [
          200,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 375,
          "r": 6
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "pickup-truck",
    "name": "4x4 Pickup Truck",
    "emoji": "🛻",
    "colors": [
      "#ECEFF1",
      "#0288D1",
      "#212121",
      "#78909C",
      "#FFD54F",
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
        "id": "offroad-ground",
        "colorNumber": 4,
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
        "id": "truck-cab",
        "colorNumber": 2,
        "label": [
          170,
          185
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 145,
          "w": 95,
          "h": 75,
          "rx": 8
        }
      },
      {
        "id": "truck-bed",
        "colorNumber": 2,
        "label": [
          80,
          205
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 180,
          "w": 80,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "rollbar",
        "colorNumber": 4,
        "label": [
          125,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 118,
          "y": 120,
          "w": 12,
          "h": 60
        }
      },
      {
        "id": "rollbar-spotlight-1",
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
        "id": "rollbar-spotlight-2",
        "colorNumber": 5,
        "label": [
          135,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "windshield-tilt",
        "colorNumber": 4,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 155,
          "w": 40,
          "h": 40,
          "rx": 2
        }
      },
      {
        "id": "chassis-heavy",
        "colorNumber": 3,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 220,
          "w": 230,
          "h": 40,
          "rx": 6
        }
      },
      {
        "id": "big-tyre-f",
        "colorNumber": 3,
        "label": [
          205,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 290,
          "r": 32
        }
      },
      {
        "id": "big-tyre-r",
        "colorNumber": 3,
        "label": [
          95,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 290,
          "r": 32
        }
      },
      {
        "id": "alloy-rim-f",
        "colorNumber": 4,
        "label": [
          205,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 290,
          "r": 16
        }
      },
      {
        "id": "alloy-rim-r",
        "colorNumber": 4,
        "label": [
          95,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 290,
          "r": 16
        }
      },
      {
        "id": "lift-suspension-f",
        "colorNumber": 6,
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
        "id": "lift-suspension-r",
        "colorNumber": 6,
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
        "id": "headlight-amber",
        "colorNumber": 5,
        "label": [
          260,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "taillight-red",
        "colorNumber": 6,
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
        "id": "mud-splash-1",
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
        "id": "mud-splash-2",
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
        "id": "cloud-sky",
        "colorNumber": 1,
        "label": [
          70,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 65,
          "r": 20
        }
      },
      {
        "id": "sun-sky",
        "colorNumber": 5,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 20
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
          "r": 4
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
          "r": 4
        }
      },
      {
        "id": "door-handle",
        "colorNumber": 3,
        "label": [
          155,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 195,
          "r": 4
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "camper-van",
    "name": "Retro Camper Van",
    "emoji": "🚐",
    "colors": [
      "#FFF3E0",
      "#00ACC1",
      "#FFFFFF",
      "#212121",
      "#FFD54F",
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
        "id": "road",
        "colorNumber": 4,
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
        "id": "pop-up-roof",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,140 150,80 210,140"
        }
      },
      {
        "id": "van-upper",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 140,
          "w": 200,
          "h": 50,
          "rx": 6
        }
      },
      {
        "id": "van-lower",
        "colorNumber": 2,
        "label": [
          150,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 190,
          "w": 200,
          "h": 75,
          "rx": 8
        }
      },
      {
        "id": "v-front-chevron",
        "colorNumber": 3,
        "label": [
          230,
          225
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,190 250,225 210,260"
        }
      },
      {
        "id": "vw-badge",
        "colorNumber": 3,
        "label": [
          240,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 225,
          "r": 12
        }
      },
      {
        "id": "split-window-1",
        "colorNumber": 2,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 145,
          "w": 35,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "split-window-2",
        "colorNumber": 2,
        "label": [
          130,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 145,
          "w": 35,
          "h": 35,
          "rx": 2
        }
      },
      {
        "id": "round-wheel-f",
        "colorNumber": 4,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 275,
          "r": 24
        }
      },
      {
        "id": "round-wheel-r",
        "colorNumber": 4,
        "label": [
          95,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 275,
          "r": 24
        }
      },
      {
        "id": "hubcap-chrome-f",
        "colorNumber": 3,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "hubcap-chrome-r",
        "colorNumber": 3,
        "label": [
          95,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "round-headlight",
        "colorNumber": 5,
        "label": [
          248,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 205,
          "r": 9
        }
      },
      {
        "id": "taillight-oval",
        "colorNumber": 6,
        "label": [
          52,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 52,
          "cy": 215,
          "r": 7
        }
      },
      {
        "id": "sun-coastal",
        "colorNumber": 5,
        "label": [
          65,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 75,
          "r": 22
        }
      },
      {
        "id": "palm-leaves",
        "colorNumber": 2,
        "label": [
          245,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 85,
          "r": 20
        }
      },
      {
        "id": "surfboard-on-top",
        "colorNumber": 6,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 10
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          95,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          205,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "curtain-dot-1",
        "colorNumber": 6,
        "label": [
          170,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "curtain-dot-2",
        "colorNumber": 6,
        "label": [
          120,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "side-mirror",
        "colorNumber": 3,
        "label": [
          225,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "road-striping",
        "colorNumber": 3,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 375,
          "r": 6
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "cable-tram",
    "name": "Mountain Tramway",
    "emoji": "🚡",
    "colors": [
      "#E1F5FE",
      "#D32F2F",
      "#ECEFF1",
      "#212121",
      "#FFD54F",
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
        "id": "cable-wire",
        "colorNumber": 4,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,50 L 300,110"
        }
      },
      {
        "id": "alpine-peak-1",
        "colorNumber": 3,
        "label": [
          80,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,380 80,240 160,380"
        }
      },
      {
        "id": "alpine-peak-2",
        "colorNumber": 3,
        "label": [
          220,
          310
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,380 220,220 300,380"
        }
      },
      {
        "id": "cabin-body",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 150,
          "w": 130,
          "h": 120,
          "rx": 12
        }
      },
      {
        "id": "panoramic-window-1",
        "colorNumber": 6,
        "label": [
          120,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 165,
          "w": 45,
          "h": 50,
          "rx": 4
        }
      },
      {
        "id": "panoramic-window-2",
        "colorNumber": 6,
        "label": [
          180,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 165,
          "w": 45,
          "h": 50,
          "rx": 4
        }
      },
      {
        "id": "hanger-arm",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 80,
          "w": 12,
          "h": 70
        }
      },
      {
        "id": "roller-wheel-1",
        "colorNumber": 4,
        "label": [
          135,
          76
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 76,
          "r": 8
        }
      },
      {
        "id": "roller-wheel-2",
        "colorNumber": 4,
        "label": [
          165,
          82
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 82,
          "r": 8
        }
      },
      {
        "id": "passenger-silhouette-1",
        "colorNumber": 4,
        "label": [
          120,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "passenger-silhouette-2",
        "colorNumber": 4,
        "label": [
          180,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "snow-patch-1",
        "colorNumber": 3,
        "label": [
          80,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 250,
          "r": 12
        }
      },
      {
        "id": "snow-patch-2",
        "colorNumber": 3,
        "label": [
          220,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "pine-tree-1",
        "colorNumber": 4,
        "label": [
          50,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 350,
          "r": 16
        }
      },
      {
        "id": "pine-tree-2",
        "colorNumber": 4,
        "label": [
          250,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 350,
          "r": 16
        }
      },
      {
        "id": "sun-alpine",
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
        "id": "cloud-high",
        "colorNumber": 3,
        "label": [
          65,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 60,
          "r": 18
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          95,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          205,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "cabin-light-top",
        "colorNumber": 5,
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
        "id": "cabin-light-bot",
        "colorNumber": 5,
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
        "id": "ski-rack-l",
        "colorNumber": 4,
        "label": [
          80,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "ski-rack-r",
        "colorNumber": 4,
        "label": [
          220,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 240,
          "r": 6
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "ski-gondola",
    "name": "Ski Gondola",
    "emoji": "🚠",
    "colors": [
      "#E0F7FA",
      "#FFD54F",
      "#00ACC1",
      "#212121",
      "#FFFFFF",
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
        "id": "gondola-wire",
        "colorNumber": 4,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,40 L 300,100"
        }
      },
      {
        "id": "egg-cabin",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 75,
          "ry": 85
        }
      },
      {
        "id": "front-bubble-window",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 55,
          "ry": 45
        }
      },
      {
        "id": "suspension-hanger",
        "colorNumber": 4,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 70,
          "w": 12,
          "h": 50
        }
      },
      {
        "id": "pulley-wheel-1",
        "colorNumber": 4,
        "label": [
          135,
          67
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 67,
          "r": 8
        }
      },
      {
        "id": "pulley-wheel-2",
        "colorNumber": 4,
        "label": [
          165,
          73
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 73,
          "r": 8
        }
      },
      {
        "id": "snow-hill",
        "colorNumber": 5,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,400 150,320 300,400"
        }
      },
      {
        "id": "door-center",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 147,
          "y": 180,
          "w": 6,
          "h": 95
        }
      },
      {
        "id": "ski-tip-1",
        "colorNumber": 6,
        "label": [
          70,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "ski-tip-2",
        "colorNumber": 6,
        "label": [
          80,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 270,
          "r": 6
        }
      },
      {
        "id": "skier-head-l",
        "colorNumber": 4,
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
        "id": "skier-head-r",
        "colorNumber": 4,
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
        "id": "sun-glare",
        "colorNumber": 5,
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
        "id": "snowflake-1",
        "colorNumber": 5,
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
        "id": "snowflake-2",
        "colorNumber": 5,
        "label": [
          255,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "snowflake-3",
        "colorNumber": 5,
        "label": [
          40,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "snowflake-4",
        "colorNumber": 5,
        "label": [
          260,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 250,
          "r": 6
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
        "id": "pylon-tower",
        "colorNumber": 4,
        "label": [
          270,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 280,
          "r": 14
        }
      },
      {
        "id": "pine-tree",
        "colorNumber": 3,
        "label": [
          35,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 340,
          "r": 15
        }
      },
      {
        "id": "roof-vent",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 8
        }
      },
      {
        "id": "gondola-bumper",
        "colorNumber": 4,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 285,
          "r": 12
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "oceanliner",
    "name": "Luxury Oceanliner",
    "emoji": "🚢",
    "colors": [
      "#E1F5FE",
      "#212121",
      "#FFFFFF",
      "#D32F2F",
      "#0288D1",
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
        "id": "sea",
        "colorNumber": 5,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 300,
          "w": 300,
          "h": 100
        }
      },
      {
        "id": "hull-black",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "polygon",
          "points": "30,220 270,220 230,300 70,300"
        }
      },
      {
        "id": "superstructure-tier-1",
        "colorNumber": 3,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 170,
          "w": 180,
          "h": 50,
          "rx": 2
        }
      },
      {
        "id": "superstructure-tier-2",
        "colorNumber": 3,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 140,
          "w": 140,
          "h": 30,
          "rx": 2
        }
      },
      {
        "id": "bridge-tier-3",
        "colorNumber": 3,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 120,
          "w": 100,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "funnel-1",
        "colorNumber": 4,
        "label": [
          115,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 75,
          "w": 20,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "funnel-2",
        "colorNumber": 4,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 75,
          "w": 20,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "funnel-3",
        "colorNumber": 4,
        "label": [
          185,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 75,
          "w": 20,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "porthole-1",
        "colorNumber": 6,
        "label": [
          90,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "porthole-2",
        "colorNumber": 6,
        "label": [
          130,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "porthole-3",
        "colorNumber": 6,
        "label": [
          170,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "porthole-4",
        "colorNumber": 6,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 250,
          "r": 6
        }
      },
      {
        "id": "smoke-puff-1",
        "colorNumber": 3,
        "label": [
          115,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 3,
        "label": [
          150,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "smoke-puff-3",
        "colorNumber": 3,
        "label": [
          185,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "sun-sky",
        "colorNumber": 6,
        "label": [
          50,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "seagull-1",
        "colorNumber": 2,
        "label": [
          70,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 110,
          "r": 5
        }
      },
      {
        "id": "seagull-2",
        "colorNumber": 2,
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
        "id": "wave-crest-1",
        "colorNumber": 3,
        "label": [
          80,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 340,
          "r": 8
        }
      },
      {
        "id": "wave-crest-2",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "wave-crest-3",
        "colorNumber": 3,
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
        "id": "anchor-crest",
        "colorNumber": 6,
        "label": [
          55,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "flag-stern",
        "colorNumber": 4,
        "label": [
          260,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 205,
          "r": 6
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "yacht",
    "name": "Riviera Yacht",
    "emoji": "🛥️",
    "colors": [
      "#E0F7FA",
      "#FFFFFF",
      "#0288D1",
      "#78909C",
      "#FFD54F",
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
        "id": "water",
        "colorNumber": 3,
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
        "id": "yacht-hull",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,240 260,240 210,320 60,320"
        }
      },
      {
        "id": "cabin-windshield",
        "colorNumber": 6,
        "label": [
          170,
          210
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,240 180,180 230,240"
        }
      },
      {
        "id": "sun-deck-roof",
        "colorNumber": 2,
        "label": [
          145,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 165,
          "w": 90,
          "h": 15,
          "rx": 3
        }
      },
      {
        "id": "radar-arch",
        "colorNumber": 4,
        "label": [
          125,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,165 L 125,135 L 140,165"
        }
      },
      {
        "id": "radar-dome",
        "colorNumber": 2,
        "label": [
          125,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 130,
          "r": 8
        }
      },
      {
        "id": "sun-bed-cushion",
        "colorNumber": 5,
        "label": [
          80,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 230,
          "r": 12
        }
      },
      {
        "id": "hull-stripe-blue",
        "colorNumber": 3,
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
        "id": "rooster-tail-spray",
        "colorNumber": 2,
        "label": [
          35,
          300
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 300,
          "r": 18
        }
      },
      {
        "id": "wake-foam-1",
        "colorNumber": 2,
        "label": [
          80,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 340,
          "r": 10
        }
      },
      {
        "id": "wake-foam-2",
        "colorNumber": 2,
        "label": [
          160,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 350,
          "r": 10
        }
      },
      {
        "id": "wake-foam-3",
        "colorNumber": 2,
        "label": [
          240,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 340,
          "r": 10
        }
      },
      {
        "id": "sun-glare",
        "colorNumber": 5,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 22
        }
      },
      {
        "id": "cloud-puff",
        "colorNumber": 2,
        "label": [
          70,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 70,
          "r": 18
        }
      },
      {
        "id": "spark-1",
        "colorNumber": 5,
        "label": [
          95,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "spark-2",
        "colorNumber": 5,
        "label": [
          205,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 45,
          "r": 5
        }
      },
      {
        "id": "porthole-window-1",
        "colorNumber": 3,
        "label": [
          110,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "porthole-window-2",
        "colorNumber": 3,
        "label": [
          140,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "porthole-window-3",
        "colorNumber": 3,
        "label": [
          170,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "swim-platform",
        "colorNumber": 4,
        "label": [
          45,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 310,
          "r": 8
        }
      },
      {
        "id": "handrail-stanchion-1",
        "colorNumber": 4,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 230,
          "r": 4
        }
      },
      {
        "id": "handrail-stanchion-2",
        "colorNumber": 4,
        "label": [
          190,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 230,
          "r": 4
        }
      },
      {
        "id": "flag-ensign",
        "colorNumber": 5,
        "label": [
          50,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 220,
          "r": 6
        }
      }
    ],
    "category": "vehicles",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "ferry",
    "name": "Harbor Ferry",
    "emoji": "⛴️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E1F5FE",
      "#0288D1",
      "#01579B",
      "#D32F2F",
      "#FFFFFF",
      "#37474F",
      "#FFD700",
      "#90A4AE"
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
        "id": "harbor-sea",
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
        "id": "hull-base",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,280 L 280,280 L 250,350 L 50,350 Z"
        }
      },
      {
        "id": "hull-waterline-stripe",
        "colorNumber": 4,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 330,
          "w": 220,
          "h": 12
        }
      },
      {
        "id": "car-deck-lower",
        "colorNumber": 6,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 255,
          "w": 230,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "passenger-deck",
        "colorNumber": 5,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 200,
          "w": 190,
          "h": 55,
          "rx": 4
        }
      },
      {
        "id": "deck-window-1",
        "colorNumber": 1,
        "label": [
          85,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 215,
          "w": 30,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "deck-window-2",
        "colorNumber": 1,
        "label": [
          130,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 215,
          "w": 30,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "deck-window-3",
        "colorNumber": 1,
        "label": [
          170,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 155,
          "y": 215,
          "w": 30,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "deck-window-4",
        "colorNumber": 1,
        "label": [
          215,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 215,
          "w": 30,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "bridge-cabin",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 155,
          "w": 110,
          "h": 45,
          "rx": 4
        }
      },
      {
        "id": "bridge-windshield",
        "colorNumber": 1,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 160,
          "w": 80,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "funnel-l",
        "colorNumber": 4,
        "label": [
          115,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 105,
          "w": 20,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "funnel-r",
        "colorNumber": 4,
        "label": [
          185,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 105,
          "w": 20,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "funnel-top-l",
        "colorNumber": 6,
        "label": [
          115,
          108
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 103,
          "w": 26,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "funnel-top-r",
        "colorNumber": 6,
        "label": [
          185,
          108
        ],
        "shape": {
          "kind": "rect",
          "x": 172,
          "y": 103,
          "w": 26,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "radar-mast",
        "colorNumber": 6,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 148,
          "y": 90,
          "w": 4,
          "h": 65
        }
      },
      {
        "id": "radar-antenna",
        "colorNumber": 7,
        "label": [
          150,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 90,
          "r": 8
        }
      },
      {
        "id": "life-buoy-l",
        "colorNumber": 4,
        "label": [
          65,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 270,
          "r": 9
        }
      },
      {
        "id": "life-buoy-r",
        "colorNumber": 4,
        "label": [
          235,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 270,
          "r": 9
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 5,
        "label": [
          65,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 5,
        "label": [
          235,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 55,
          "r": 18
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
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
        "colorNumber": 7,
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
    "id": "scooter-electric",
    "name": "City Scooter",
    "emoji": "🛴",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#212121",
      "#37474F",
      "#00E676",
      "#00C853",
      "#00B0FF",
      "#FFD700",
      "#D50000",
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
        "id": "city-asphalt",
        "colorNumber": 3,
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
        "id": "curb-edge",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 8
        }
      },
      {
        "id": "foot-deck",
        "colorNumber": 2,
        "label": [
          140,
          320
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 310,
          "w": 130,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "deck-grip-tape",
        "colorNumber": 4,
        "label": [
          140,
          314
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 310,
          "w": 110,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "kickstand",
        "colorNumber": 3,
        "label": [
          110,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 322,
          "w": 6,
          "h": 22,
          "rx": 2
        }
      },
      {
        "id": "steering-column",
        "colorNumber": 3,
        "label": [
          205,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,315 L 225,120 L 232,120 L 202,315 Z"
        }
      },
      {
        "id": "folding-clamp",
        "colorNumber": 4,
        "label": [
          200,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 192,
          "y": 280,
          "w": 16,
          "h": 20,
          "rx": 3
        }
      },
      {
        "id": "handlebar",
        "colorNumber": 3,
        "label": [
          228,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 110,
          "w": 96,
          "h": 10,
          "rx": 4
        }
      },
      {
        "id": "grip-l",
        "colorNumber": 2,
        "label": [
          190,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 108,
          "w": 20,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "grip-r",
        "colorNumber": 2,
        "label": [
          266,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 256,
          "y": 108,
          "w": 20,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "digital-dash",
        "colorNumber": 6,
        "label": [
          228,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 105,
          "r": 9
        }
      },
      {
        "id": "headlight-led",
        "colorNumber": 9,
        "label": [
          238,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 135,
          "r": 7
        }
      },
      {
        "id": "front-tire",
        "colorNumber": 2,
        "label": [
          215,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 335,
          "r": 28
        }
      },
      {
        "id": "front-rim",
        "colorNumber": 3,
        "label": [
          215,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "front-hub",
        "colorNumber": 4,
        "label": [
          215,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "rear-tire",
        "colorNumber": 2,
        "label": [
          65,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 335,
          "r": 28
        }
      },
      {
        "id": "rear-rim",
        "colorNumber": 3,
        "label": [
          65,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "rear-hub",
        "colorNumber": 4,
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
        "id": "rear-mudguard",
        "colorNumber": 3,
        "label": [
          55,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 305,
          "w": 45,
          "h": 10,
          "rx": 4
        }
      },
      {
        "id": "taillight-red",
        "colorNumber": 8,
        "label": [
          42,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 42,
          "cy": 310,
          "r": 5
        }
      },
      {
        "id": "sun",
        "colorNumber": 7,
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
        "id": "sparkle-1",
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
          "r": 6
        }
      }
    ]
  },
  {
    "id": "roller-skates",
    "name": "Roller Skates",
    "emoji": "🛼",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF0F5",
      "#EC4899",
      "#DB2777",
      "#F472B6",
      "#FBBF24",
      "#60A5FA",
      "#FFFFFF",
      "#212121",
      "#8B5CF6"
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
        "id": "skate-rink-floor",
        "colorNumber": 9,
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
        "id": "skate-boot-high",
        "colorNumber": 2,
        "label": [
          140,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,100 L 175,100 L 175,200 L 235,240 C 245,260 235,285 205,285 L 85,285 C 75,255 75,170 100,100 Z"
        }
      },
      {
        "id": "boot-ankle-collar",
        "colorNumber": 4,
        "label": [
          138,
          108
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 95,
          "w": 85,
          "h": 25,
          "rx": 6
        }
      },
      {
        "id": "boot-sole-base",
        "colorNumber": 8,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 280,
          "w": 160,
          "h": 16,
          "rx": 4
        }
      },
      {
        "id": "side-stripe-1",
        "colorNumber": 5,
        "label": [
          145,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 110,140 L 195,245 L 180,255 L 100,150 Z"
        }
      },
      {
        "id": "side-stripe-2",
        "colorNumber": 6,
        "label": [
          140,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,165 L 175,260 L 160,270 L 90,175 Z"
        }
      },
      {
        "id": "lace-bar-1",
        "colorNumber": 7,
        "label": [
          125,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 110,
          "y": 136,
          "w": 30,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "lace-bar-2",
        "colorNumber": 7,
        "label": [
          135,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 120,
          "y": 161,
          "w": 30,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "lace-bar-3",
        "colorNumber": 7,
        "label": [
          145,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 186,
          "w": 30,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "lace-bar-4",
        "colorNumber": 7,
        "label": [
          160,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 211,
          "w": 30,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "toe-stop",
        "colorNumber": 3,
        "label": [
          245,
          295
        ],
        "shape": {
          "kind": "polygon",
          "points": "230,285 260,285 250,315 240,315"
        }
      },
      {
        "id": "wheel-chassis-plate",
        "colorNumber": 7,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 296,
          "w": 140,
          "h": 10,
          "rx": 3
        }
      },
      {
        "id": "wheel-front-outer",
        "colorNumber": 5,
        "label": [
          205,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 335,
          "r": 28
        }
      },
      {
        "id": "wheel-front-rim",
        "colorNumber": 7,
        "label": [
          205,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "wheel-front-nut",
        "colorNumber": 8,
        "label": [
          205,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "wheel-rear-outer",
        "colorNumber": 5,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 335,
          "r": 28
        }
      },
      {
        "id": "wheel-rear-rim",
        "colorNumber": 7,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 335,
          "r": 18
        }
      },
      {
        "id": "wheel-rear-nut",
        "colorNumber": 8,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 335,
          "r": 8
        }
      },
      {
        "id": "disco-star-1",
        "colorNumber": 5,
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
        "id": "disco-star-2",
        "colorNumber": 5,
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
        "id": "disco-sparkle-1",
        "colorNumber": 6,
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
        "id": "disco-sparkle-2",
        "colorNumber": 6,
        "label": [
          50,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 220,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "bobsled",
    "name": "Winter Bobsled",
    "emoji": "🛷",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#0284C7",
      "#0369A1",
      "#D97706",
      "#F59E0B",
      "#FFFFFF",
      "#212121",
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
        "id": "ice-track-curve",
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
        "id": "ice-bank-wall",
        "colorNumber": 1,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,270 Q 150,330 300,270 L 300,350 Q 150,400 0,350 Z"
        }
      },
      {
        "id": "bobsled-hull",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M 260,220 C 275,235 240,270 200,270 L 50,270 C 35,270 30,240 45,220 C 70,185 220,185 260,220 Z"
        }
      },
      {
        "id": "speed-stripe-gold",
        "colorNumber": 4,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,225 L 240,225 L 235,240 L 65,240 Z"
        }
      },
      {
        "id": "speed-stripe-red",
        "colorNumber": 8,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M 65,245 L 230,245 L 225,255 L 70,255 Z"
        }
      },
      {
        "id": "cockpit-opening",
        "colorNumber": 7,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 195,
          "rx": 60,
          "ry": 16
        }
      },
      {
        "id": "pilot-1-helmet",
        "colorNumber": 8,
        "label": [
          175,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 175,
          "r": 18
        }
      },
      {
        "id": "pilot-1-visor",
        "colorNumber": 7,
        "label": [
          184,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 184,
          "cy": 175,
          "r": 8
        }
      },
      {
        "id": "pilot-2-helmet",
        "colorNumber": 2,
        "label": [
          125,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 180,
          "r": 16
        }
      },
      {
        "id": "pilot-2-visor",
        "colorNumber": 7,
        "label": [
          132,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 180,
          "r": 7
        }
      },
      {
        "id": "windshield",
        "colorNumber": 6,
        "label": [
          215,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,200 L 230,190 L 225,205 Z"
        }
      },
      {
        "id": "runner-support-f",
        "colorNumber": 7,
        "label": [
          205,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 200,
          "y": 270,
          "w": 10,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "runner-support-r",
        "colorNumber": 7,
        "label": [
          95,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 270,
          "w": 10,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "steel-runner-bar",
        "colorNumber": 6,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,295 L 255,295 L 265,285 L 250,290 L 45,290 Z"
        }
      },
      {
        "id": "ice-spray-1",
        "colorNumber": 6,
        "label": [
          35,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 305,
          "r": 8
        }
      },
      {
        "id": "ice-spray-2",
        "colorNumber": 6,
        "label": [
          55,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 315,
          "r": 10
        }
      },
      {
        "id": "ice-spray-3",
        "colorNumber": 6,
        "label": [
          25,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 325,
          "r": 6
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 6,
        "label": [
          50,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 60,
          "r": 10
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 6,
        "label": [
          250,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 60,
          "r": 10
        }
      },
      {
        "id": "sparkle-1",
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
        "id": "sparkle-2",
        "colorNumber": 5,
        "label": [
          95,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 5,
        "label": [
          210,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 90,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "sleigh",
    "name": "Holiday Sleigh",
    "emoji": "🎅",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#1E1B4B",
      "#DC2626",
      "#B91C1C",
      "#FBBF24",
      "#F59E0B",
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
        "id": "snow-drift",
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
        "id": "gold-runner-main",
        "colorNumber": 4,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M 25,290 C 15,350 75,340 100,340 L 260,340 C 285,340 295,310 275,310 L 250,330 L 95,330 C 65,330 35,320 40,290 Z"
        }
      },
      {
        "id": "runner-strut-1",
        "colorNumber": 5,
        "label": [
          85,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 280,
          "w": 10,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "runner-strut-2",
        "colorNumber": 5,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 145,
          "y": 280,
          "w": 10,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "runner-strut-3",
        "colorNumber": 5,
        "label": [
          215,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 280,
          "w": 10,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "sleigh-body",
        "colorNumber": 2,
        "label": [
          145,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,180 C 45,260 85,280 150,280 L 245,280 C 275,280 280,220 255,200 C 235,185 210,230 180,230 L 105,230 C 85,230 65,160 55,180 Z"
        }
      },
      {
        "id": "sleigh-gold-trim",
        "colorNumber": 4,
        "label": [
          145,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,180 C 65,160 85,230 105,230 L 180,230 C 210,230 235,185 255,200"
        }
      },
      {
        "id": "seat-cushion",
        "colorNumber": 6,
        "label": [
          140,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 225,
          "rx": 45,
          "ry": 14
        }
      },
      {
        "id": "gift-sack",
        "colorNumber": 8,
        "label": [
          95,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 175,
          "rx": 42,
          "ry": 45
        }
      },
      {
        "id": "gift-box-1",
        "colorNumber": 4,
        "label": [
          75,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 60,
          "y": 115,
          "w": 30,
          "h": 30,
          "rx": 3
        }
      },
      {
        "id": "gift-ribbon-1",
        "colorNumber": 2,
        "label": [
          75,
          135
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 115,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "gift-box-2",
        "colorNumber": 6,
        "label": [
          115,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 110,
          "w": 30,
          "h": 30,
          "rx": 3
        }
      },
      {
        "id": "gift-ribbon-2",
        "colorNumber": 4,
        "label": [
          115,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 112,
          "y": 110,
          "w": 6,
          "h": 30
        }
      },
      {
        "id": "sack-holly-berry-1",
        "colorNumber": 2,
        "label": [
          95,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "sack-holly-berry-2",
        "colorNumber": 2,
        "label": [
          105,
          184
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 184,
          "r": 5
        }
      },
      {
        "id": "moon",
        "colorNumber": 7,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 24
        }
      },
      {
        "id": "north-star",
        "colorNumber": 4,
        "label": [
          65,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 55,
          "r": 10
        }
      },
      {
        "id": "star-1",
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
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          180,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "star-3",
        "colorNumber": 7,
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
          230,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 270,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "cement-mixer",
    "name": "Cement Mixer",
    "emoji": "🚚",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#F59E0B",
      "#D97706",
      "#37474F",
      "#212121",
      "#94A3B8",
      "#FFFFFF",
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
        "id": "road",
        "colorNumber": 4,
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
        "id": "chassis-beam",
        "colorNumber": 5,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "rect",
          "x": 30,
          "y": 305,
          "w": 240,
          "h": 16,
          "rx": 3
        }
      },
      {
        "id": "cab-lower",
        "colorNumber": 2,
        "label": [
          235,
          265
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 230,
          "w": 65,
          "h": 75,
          "rx": 4
        }
      },
      {
        "id": "cab-windshield",
        "colorNumber": 8,
        "label": [
          245,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 205,230 L 230,175 L 270,175 L 270,230 Z"
        }
      },
      {
        "id": "cab-roof-cap",
        "colorNumber": 3,
        "label": [
          250,
          172
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 168,
          "w": 48,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "headlight-chrome",
        "colorNumber": 7,
        "label": [
          268,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 268,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "front-bumper",
        "colorNumber": 4,
        "label": [
          265,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 255,
          "y": 298,
          "w": 20,
          "h": 15,
          "rx": 2
        }
      },
      {
        "id": "mixer-drum-body",
        "colorNumber": 2,
        "label": [
          125,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 215,
          "rx": 65,
          "ry": 45
        }
      },
      {
        "id": "spiral-blade-1",
        "colorNumber": 3,
        "label": [
          105,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,180 Q 125,215 110,250"
        }
      },
      {
        "id": "spiral-blade-2",
        "colorNumber": 3,
        "label": [
          145,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M 120,180 Q 165,215 150,250"
        }
      },
      {
        "id": "mixer-rear-hopper",
        "colorNumber": 6,
        "label": [
          50,
          195
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 175,
          "w": 25,
          "h": 50,
          "rx": 3
        }
      },
      {
        "id": "discharge-chute",
        "colorNumber": 6,
        "label": [
          35,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,230 L 20,285 L 35,290 L 65,240 Z"
        }
      },
      {
        "id": "water-tank-cyl",
        "colorNumber": 7,
        "label": [
          185,
          210
        ],
        "shape": {
          "kind": "rect",
          "x": 175,
          "y": 190,
          "w": 18,
          "h": 40,
          "rx": 6
        }
      },
      {
        "id": "wheel-front",
        "colorNumber": 5,
        "label": [
          240,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 340,
          "r": 26
        }
      },
      {
        "id": "rim-front",
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
      },
      {
        "id": "wheel-mid",
        "colorNumber": 5,
        "label": [
          140,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 340,
          "r": 26
        }
      },
      {
        "id": "rim-mid",
        "colorNumber": 6,
        "label": [
          140,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 340,
          "r": 15
        }
      },
      {
        "id": "wheel-rear",
        "colorNumber": 5,
        "label": [
          80,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 340,
          "r": 26
        }
      },
      {
        "id": "rim-rear",
        "colorNumber": 6,
        "label": [
          80,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 340,
          "r": 15
        }
      },
      {
        "id": "sun",
        "colorNumber": 2,
        "label": [
          55,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 60,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 14
        }
      }
    ]
  },
  {
    "id": "monorail",
    "name": "Sky Monorail",
    "emoji": "🚝",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#0284C7",
      "#0369A1",
      "#38BDF8",
      "#FFFFFF",
      "#64748B",
      "#475569",
      "#FBBF24"
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
        "colorNumber": 6,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 360,
          "w": 300,
          "h": 40
        }
      },
      {
        "id": "track-beam",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 280,
          "w": 300,
          "h": 25
        }
      },
      {
        "id": "pylon-left",
        "colorNumber": 7,
        "label": [
          75,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 65,
          "y": 305,
          "w": 20,
          "h": 65
        }
      },
      {
        "id": "pylon-right",
        "colorNumber": 7,
        "label": [
          225,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 305,
          "w": 20,
          "h": 65
        }
      },
      {
        "id": "train-front-car",
        "colorNumber": 2,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,190 L 255,190 C 285,210 290,265 265,280 L 150,280 Z"
        }
      },
      {
        "id": "train-rear-car",
        "colorNumber": 2,
        "label": [
          85,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,190 L 145,190 L 145,280 L 20,280 Z"
        }
      },
      {
        "id": "car-coupler-gap",
        "colorNumber": 7,
        "label": [
          147,
          235
        ],
        "shape": {
          "kind": "rect",
          "x": 144,
          "y": 195,
          "w": 6,
          "h": 80
        }
      },
      {
        "id": "speed-stripe-cyan",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 250,
          "w": 260,
          "h": 10
        }
      },
      {
        "id": "speed-stripe-dark",
        "colorNumber": 3,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 260,
          "w": 260,
          "h": 8
        }
      },
      {
        "id": "front-cockpit-window",
        "colorNumber": 1,
        "label": [
          260,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 250,195 L 275,225 L 250,235 Z"
        }
      },
      {
        "id": "passenger-window-1",
        "colorNumber": 1,
        "label": [
          220,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 202,
          "w": 30,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "passenger-window-2",
        "colorNumber": 1,
        "label": [
          175,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 202,
          "w": 30,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "passenger-window-3",
        "colorNumber": 1,
        "label": [
          115,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 100,
          "y": 202,
          "w": 30,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "passenger-window-4",
        "colorNumber": 1,
        "label": [
          65,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 202,
          "w": 30,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "headlight-glow",
        "colorNumber": 8,
        "label": [
          282,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 282,
          "cy": 255,
          "r": 6
        }
      },
      {
        "id": "tail-marker-light",
        "colorNumber": 8,
        "label": [
          24,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 24,
          "cy": 255,
          "r": 4
        }
      },
      {
        "id": "pylon-light-l",
        "colorNumber": 8,
        "label": [
          75,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 315,
          "r": 4
        }
      },
      {
        "id": "pylon-light-r",
        "colorNumber": 8,
        "label": [
          225,
          315
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 315,
          "r": 4
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
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
        "colorNumber": 5,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 75,
          "r": 18
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 5,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 70,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 8,
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
      },
      {
        "id": "sparkle-2",
        "colorNumber": 8,
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
    "id": "shinkansen",
    "name": "Shinkansen Bullet",
    "emoji": "🚄",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EDE7F6",
      "#FFFFFF",
      "#1E40AF",
      "#3B82F6",
      "#64748B",
      "#334155",
      "#F59E0B",
      "#EF4444"
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
        "id": "ballast-bed",
        "colorNumber": 5,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "steel-rail-1",
        "colorNumber": 6,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 326,
          "w": 300,
          "h": 8
        }
      },
      {
        "id": "shinkansen-body",
        "colorNumber": 2,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,180 L 190,180 C 255,180 290,240 280,310 L 20,310 Z"
        }
      },
      {
        "id": "shinkansen-blue-stripe-1",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 262,
          "w": 240,
          "h": 14
        }
      },
      {
        "id": "shinkansen-blue-stripe-2",
        "colorNumber": 4,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 286,
          "w": 255,
          "h": 8
        }
      },
      {
        "id": "bullet-windshield",
        "colorNumber": 6,
        "label": [
          240,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M 220,185 L 265,225 L 235,235 Z"
        }
      },
      {
        "id": "window-1",
        "colorNumber": 6,
        "label": [
          180,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 165,
          "y": 205,
          "w": 24,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "window-2",
        "colorNumber": 6,
        "label": [
          140,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 125,
          "y": 205,
          "w": 24,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "window-3",
        "colorNumber": 6,
        "label": [
          100,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 205,
          "w": 24,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "window-4",
        "colorNumber": 6,
        "label": [
          60,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 45,
          "y": 205,
          "w": 24,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "pantograph-frame",
        "colorNumber": 8,
        "label": [
          90,
          145
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,180 90,135 110,135 120,180"
        }
      },
      {
        "id": "pantograph-contact-shoe",
        "colorNumber": 6,
        "label": [
          100,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 125,
          "w": 50,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "shinkansen-headlight",
        "colorNumber": 7,
        "label": [
          272,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 272,
          "cy": 280,
          "r": 7
        }
      },
      {
        "id": "cabin-door-line",
        "colorNumber": 3,
        "label": [
          35,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 245,
          "r": 4
        }
      },
      {
        "id": "speed-whirl-1",
        "colorNumber": 4,
        "label": [
          285,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 240,
          "r": 5
        }
      },
      {
        "id": "speed-whirl-2",
        "colorNumber": 4,
        "label": [
          275,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 320,
          "r": 5
        }
      },
      {
        "id": "mt-fuji-peak",
        "colorNumber": 2,
        "label": [
          65,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 95,
          "r": 35
        }
      },
      {
        "id": "mt-fuji-base",
        "colorNumber": 3,
        "label": [
          65,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 130,
          "r": 45
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 2,
        "label": [
          160,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 65,
          "r": 16
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
        "id": "sparkle-3",
        "colorNumber": 7,
        "label": [
          130,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 45,
          "r": 5
        }
      }
    ]
  },
  {
    "id": "cogwheel-train",
    "name": "Cogwheel Railway",
    "emoji": "🚞",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#DC2626",
      "#B91C1C",
      "#FBBF24",
      "#FFFFFF",
      "#475569",
      "#15803D",
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
        "id": "mountain-slope",
        "colorNumber": 7,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,250 300,120 300,400 0,400"
        }
      },
      {
        "id": "snow-summit",
        "colorNumber": 5,
        "label": [
          240,
          100
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,170 300,120 300,80 260,60"
        }
      },
      {
        "id": "cog-track",
        "colorNumber": 6,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,250 L 300,120 L 300,135 L 0,265 Z"
        }
      },
      {
        "id": "train-coach",
        "colorNumber": 2,
        "label": [
          145,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "60,200 220,130 235,210 75,280"
        }
      },
      {
        "id": "coach-roof",
        "colorNumber": 3,
        "label": [
          140,
          155
        ],
        "shape": {
          "kind": "polygon",
          "points": "55,195 225,120 230,130 50,205"
        }
      },
      {
        "id": "window-1",
        "colorNumber": 5,
        "label": [
          95,
          220
        ],
        "shape": {
          "kind": "polygon",
          "points": "80,215 110,200 115,240 85,255"
        }
      },
      {
        "id": "window-2",
        "colorNumber": 5,
        "label": [
          135,
          200
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,195 150,180 155,220 125,235"
        }
      },
      {
        "id": "window-3",
        "colorNumber": 5,
        "label": [
          175,
          180
        ],
        "shape": {
          "kind": "polygon",
          "points": "160,175 190,160 195,200 165,215"
        }
      },
      {
        "id": "window-front",
        "colorNumber": 5,
        "label": [
          208,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "198,155 220,145 225,185 203,195"
        }
      },
      {
        "id": "cogwheel-1",
        "colorNumber": 8,
        "label": [
          90,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 275,
          "r": 16
        }
      },
      {
        "id": "cog-hub-1",
        "colorNumber": 4,
        "label": [
          90,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "cogwheel-2",
        "colorNumber": 8,
        "label": [
          205,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 225,
          "r": 16
        }
      },
      {
        "id": "cog-hub-2",
        "colorNumber": 4,
        "label": [
          205,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 225,
          "r": 6
        }
      },
      {
        "id": "headlight-top",
        "colorNumber": 4,
        "label": [
          226,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 226,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "headlight-bot-l",
        "colorNumber": 4,
        "label": [
          230,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "headlight-bot-r",
        "colorNumber": 4,
        "label": [
          215,
          202
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 202,
          "r": 5
        }
      },
      {
        "id": "pine-tree-1",
        "colorNumber": 7,
        "label": [
          40,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 210,
          "r": 18
        }
      },
      {
        "id": "pine-tree-2",
        "colorNumber": 7,
        "label": [
          260,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 280,
          "r": 20
        }
      },
      {
        "id": "pine-tree-3",
        "colorNumber": 7,
        "label": [
          180,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 360,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 4,
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
        "colorNumber": 5,
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
        "colorNumber": 4,
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
        "colorNumber": 4,
        "label": [
          45,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 130,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "go-kart",
    "name": "Sprint Kart",
    "emoji": "🏁",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFFBEB",
      "#DC2626",
      "#B91C1C",
      "#F59E0B",
      "#212121",
      "#37474F",
      "#FFFFFF",
      "#2563EB"
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
        "id": "race-track-asphalt",
        "colorNumber": 6,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 335,
          "w": 300,
          "h": 65
        }
      },
      {
        "id": "kerb-white-1",
        "colorNumber": 7,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "kerb-red-1",
        "colorNumber": 2,
        "label": [
          115,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 330,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "kerb-white-2",
        "colorNumber": 7,
        "label": [
          190,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 150,
          "y": 330,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "kerb-red-2",
        "colorNumber": 2,
        "label": [
          265,
          340
        ],
        "shape": {
          "kind": "rect",
          "x": 225,
          "y": 330,
          "w": 75,
          "h": 15
        }
      },
      {
        "id": "side-pod-l",
        "colorNumber": 2,
        "label": [
          140,
          280
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 260,
          "w": 110,
          "h": 35,
          "rx": 6
        }
      },
      {
        "id": "front-nose-cone",
        "colorNumber": 2,
        "label": [
          240,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M 190,260 L 265,285 L 190,305 Z"
        }
      },
      {
        "id": "front-spoiler-wing",
        "colorNumber": 3,
        "label": [
          255,
          305
        ],
        "shape": {
          "kind": "rect",
          "x": 240,
          "y": 298,
          "w": 35,
          "h": 12,
          "rx": 3
        }
      },
      {
        "id": "bucket-seat",
        "colorNumber": 5,
        "label": [
          110,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,190 125,190 130,270 95,270"
        }
      },
      {
        "id": "steering-wheel",
        "colorNumber": 5,
        "label": [
          170,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 230,
          "rx": 16,
          "ry": 22
        }
      },
      {
        "id": "engine-block",
        "colorNumber": 6,
        "label": [
          70,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 215,
          "w": 30,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "exhaust-pipe-header",
        "colorNumber": 4,
        "label": [
          55,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,235 C 30,240 30,280 60,280"
        }
      },
      {
        "id": "number-badge",
        "colorNumber": 7,
        "label": [
          220,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 275,
          "r": 12
        }
      },
      {
        "id": "tire-front",
        "colorNumber": 5,
        "label": [
          225,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 330,
          "r": 28
        }
      },
      {
        "id": "rim-front",
        "colorNumber": 4,
        "label": [
          225,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 330,
          "r": 14
        }
      },
      {
        "id": "tire-rear",
        "colorNumber": 5,
        "label": [
          75,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 330,
          "r": 32
        }
      },
      {
        "id": "rim-rear",
        "colorNumber": 4,
        "label": [
          75,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 330,
          "r": 16
        }
      },
      {
        "id": "check-flag-1",
        "colorNumber": 7,
        "label": [
          65,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "40,60 90,80 75,120 25,100"
        }
      },
      {
        "id": "check-flag-2",
        "colorNumber": 5,
        "label": [
          235,
          95
        ],
        "shape": {
          "kind": "polygon",
          "points": "210,80 260,60 275,100 225,120"
        }
      },
      {
        "id": "flag-pole-l",
        "colorNumber": 4,
        "label": [
          40,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 120,
          "r": 4
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 4,
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
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 4,
        "label": [
          255,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 160,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "freight-train",
    "name": "Steam Freight Train",
    "emoji": "🚆",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E2E8F0",
      "#1E293B",
      "#334155",
      "#475569",
      "#D97706",
      "#B91C1C",
      "#FFFFFF",
      "#FBBF24"
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
        "id": "ballast-gravel",
        "colorNumber": 4,
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
        "id": "railroad-track",
        "colorNumber": 3,
        "label": [
          150,
          335
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 10
        }
      },
      {
        "id": "locomotive-boiler",
        "colorNumber": 2,
        "label": [
          180,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 200,
          "w": 110,
          "h": 70,
          "rx": 6
        }
      },
      {
        "id": "driver-cabin",
        "colorNumber": 2,
        "label": [
          90,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 55,
          "y": 175,
          "w": 75,
          "h": 100,
          "rx": 4
        }
      },
      {
        "id": "cab-roof",
        "colorNumber": 3,
        "label": [
          90,
          168
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 162,
          "w": 85,
          "h": 14,
          "rx": 3
        }
      },
      {
        "id": "cab-window",
        "colorNumber": 8,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 68,
          "y": 185,
          "w": 26,
          "h": 26,
          "rx": 2
        }
      },
      {
        "id": "smokestack",
        "colorNumber": 3,
        "label": [
          215,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 205,
          "y": 140,
          "w": 20,
          "h": 60,
          "rx": 3
        }
      },
      {
        "id": "cowcatcher-grill",
        "colorNumber": 5,
        "label": [
          255,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "240,265 285,325 240,325"
        }
      },
      {
        "id": "smoke-puff-1",
        "colorNumber": 7,
        "label": [
          215,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 115,
          "r": 16
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 7,
        "label": [
          185,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 80,
          "r": 22
        }
      },
      {
        "id": "smoke-puff-3",
        "colorNumber": 7,
        "label": [
          135,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 55,
          "r": 28
        }
      },
      {
        "id": "smoke-puff-4",
        "colorNumber": 7,
        "label": [
          85,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 45,
          "r": 18
        }
      },
      {
        "id": "drive-wheel-1",
        "colorNumber": 3,
        "label": [
          90,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 325,
          "r": 24
        }
      },
      {
        "id": "drive-wheel-2",
        "colorNumber": 3,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 325,
          "r": 24
        }
      },
      {
        "id": "drive-wheel-3",
        "colorNumber": 3,
        "label": [
          210,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 325,
          "r": 24
        }
      },
      {
        "id": "connecting-side-rod",
        "colorNumber": 5,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 322,
          "w": 120,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "front-headlamp",
        "colorNumber": 8,
        "label": [
          245,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 220,
          "r": 10
        }
      },
      {
        "id": "lamp-lens",
        "colorNumber": 7,
        "label": [
          245,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 220,
          "r": 6
        }
      },
      {
        "id": "signal-post",
        "colorNumber": 5,
        "label": [
          280,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 280,
          "cy": 180,
          "r": 8
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
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
        "colorNumber": 8,
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
    "id": "bullet-train",
    "name": "Express Bullet",
    "emoji": "🚅",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#EFF6FF",
      "#1D4ED8",
      "#2563EB",
      "#60A5FA",
      "#FFFFFF",
      "#334155",
      "#F59E0B",
      "#EF4444"
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
        "id": "track-viaduct",
        "colorNumber": 6,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 330,
          "w": 300,
          "h": 70
        }
      },
      {
        "id": "bullet-nose-body",
        "colorNumber": 5,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,185 L 180,185 C 260,185 295,250 280,315 L 20,315 Z"
        }
      },
      {
        "id": "speed-ribbon-red",
        "colorNumber": 8,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,255 L 245,255 L 240,268 L 20,268 Z"
        }
      },
      {
        "id": "speed-ribbon-blue",
        "colorNumber": 3,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,275 L 260,275 L 255,290 L 20,290 Z"
        }
      },
      {
        "id": "cockpit-glass",
        "colorNumber": 6,
        "label": [
          245,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M 225,190 L 270,230 L 240,240 Z"
        }
      },
      {
        "id": "pass-window-1",
        "colorNumber": 6,
        "label": [
          175,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 210,
          "w": 28,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "pass-window-2",
        "colorNumber": 1,
        "label": [
          130,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 210,
          "w": 28,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "pass-window-3",
        "colorNumber": 6,
        "label": [
          85,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 210,
          "w": 28,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "pass-window-4",
        "colorNumber": 1,
        "label": [
          40,
          220
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 210,
          "w": 28,
          "h": 20,
          "rx": 2
        }
      },
      {
        "id": "headlight-l",
        "colorNumber": 7,
        "label": [
          272,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 272,
          "cy": 275,
          "r": 6
        }
      },
      {
        "id": "headlight-r",
        "colorNumber": 7,
        "label": [
          275,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 275,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "speed-trail-1",
        "colorNumber": 4,
        "label": [
          100,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 40,150 L 160,150"
        }
      },
      {
        "id": "speed-trail-2",
        "colorNumber": 4,
        "label": [
          80,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M 20,165 L 140,165"
        }
      },
      {
        "id": "speed-trail-3",
        "colorNumber": 4,
        "label": [
          120,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M 60,135 L 180,135"
        }
      },
      {
        "id": "track-pillar-1",
        "colorNumber": 6,
        "label": [
          80,
          365
        ],
        "shape": {
          "kind": "rect",
          "x": 70,
          "y": 340,
          "w": 20,
          "h": 60
        }
      },
      {
        "id": "track-pillar-2",
        "colorNumber": 6,
        "label": [
          220,
          365
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 340,
          "w": 20,
          "h": 60
        }
      },
      {
        "id": "sun",
        "colorNumber": 7,
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
        "id": "cloud-1",
        "colorNumber": 5,
        "label": [
          140,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 70,
          "r": 16
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 5,
        "label": [
          60,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 75,
          "r": 14
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 7,
        "label": [
          45,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 40,
          "r": 7
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 7,
        "label": [
          260,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 130,
          "r": 7
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 7,
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
        "id": "marker-light",
        "colorNumber": 7,
        "label": [
          285,
          305
        ],
        "shape": {
          "kind": "circle",
          "cx": 285,
          "cy": 305,
          "r": 4
        }
      }
    ]
  },
  {
    "id": "aerial-tram",
    "name": "Alpine Cable Car",
    "emoji": "🚟",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#DC2626",
      "#B91C1C",
      "#FFFFFF",
      "#334155",
      "#15803D",
      "#FBBF24",
      "#64748B"
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
        "id": "peak-left",
        "colorNumber": 4,
        "label": [
          75,
          140
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,220 80,80 150,220"
        }
      },
      {
        "id": "peak-right",
        "colorNumber": 4,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,240 220,110 300,240"
        }
      },
      {
        "id": "forest-slope",
        "colorNumber": 6,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,280 300,240 300,400 0,400"
        }
      },
      {
        "id": "cable-line",
        "colorNumber": 5,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,110 L 300,50 L 300,56 L 0,116 Z"
        }
      },
      {
        "id": "trolley-bracket",
        "colorNumber": 8,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 80,
          "w": 20,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "hanger-vertical-arm",
        "colorNumber": 8,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 105,
          "w": 8,
          "h": 80
        }
      },
      {
        "id": "pulley-wheel-1",
        "colorNumber": 5,
        "label": [
          138,
          82
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 82,
          "r": 8
        }
      },
      {
        "id": "pulley-wheel-2",
        "colorNumber": 5,
        "label": [
          162,
          78
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 78,
          "r": 8
        }
      },
      {
        "id": "cabin-body",
        "colorNumber": 2,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 185,
          "w": 130,
          "h": 110,
          "rx": 14
        }
      },
      {
        "id": "cabin-roof",
        "colorNumber": 3,
        "label": [
          150,
          190
        ],
        "shape": {
          "kind": "rect",
          "x": 80,
          "y": 180,
          "w": 140,
          "h": 15,
          "rx": 6
        }
      },
      {
        "id": "window-large-l",
        "colorNumber": 1,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 95,
          "y": 205,
          "w": 45,
          "h": 55,
          "rx": 4
        }
      },
      {
        "id": "window-large-r",
        "colorNumber": 1,
        "label": [
          185,
          230
        ],
        "shape": {
          "kind": "rect",
          "x": 160,
          "y": 205,
          "w": 45,
          "h": 55,
          "rx": 4
        }
      },
      {
        "id": "cabin-door-center",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 205,
          "w": 16,
          "h": 85,
          "rx": 2
        }
      },
      {
        "id": "cabin-light",
        "colorNumber": 7,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 5
        }
      },
      {
        "id": "pine-1",
        "colorNumber": 6,
        "label": [
          40,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 330,
          "r": 20
        }
      },
      {
        "id": "pine-2",
        "colorNumber": 6,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 310,
          "r": 22
        }
      },
      {
        "id": "pine-3",
        "colorNumber": 6,
        "label": [
          140,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 360,
          "r": 16
        }
      },
      {
        "id": "sun",
        "colorNumber": 7,
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
        "id": "cloud-snow",
        "colorNumber": 4,
        "label": [
          210,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 55,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
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
          "r": 6
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 4,
        "label": [
          105,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 30,
          "r": 6
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 4,
        "label": [
          270,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 270,
          "cy": 95,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "cutter-ship",
    "name": "Coast Guard Cutter",
    "emoji": "🛳️",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#FFFFFF",
      "#DC2626",
      "#1D4ED8",
      "#334155",
      "#0284C7",
      "#0369A1",
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
        "id": "sea-surface",
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
        "id": "wake-waves",
        "colorNumber": 7,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,370 300,335 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "cutter-hull",
        "colorNumber": 2,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 25,260 L 275,260 L 245,340 L 45,340 Z"
        }
      },
      {
        "id": "racing-stripe-red",
        "colorNumber": 3,
        "label": [
          205,
          295
        ],
        "shape": {
          "kind": "polygon",
          "points": "200,260 220,260 195,340 175,340"
        }
      },
      {
        "id": "racing-stripe-blue",
        "colorNumber": 4,
        "label": [
          225,
          295
        ],
        "shape": {
          "kind": "polygon",
          "points": "224,260 232,260 207,340 199,340"
        }
      },
      {
        "id": "superstructure-tier-1",
        "colorNumber": 2,
        "label": [
          130,
          225
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 195,
          "w": 110,
          "h": 65,
          "rx": 4
        }
      },
      {
        "id": "bridge-tier-2",
        "colorNumber": 2,
        "label": [
          130,
          175
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 155,
          "w": 80,
          "h": 40,
          "rx": 3
        }
      },
      {
        "id": "bridge-windshield",
        "colorNumber": 5,
        "label": [
          130,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 98,
          "y": 160,
          "w": 64,
          "h": 16,
          "rx": 2
        }
      },
      {
        "id": "radar-mast",
        "colorNumber": 5,
        "label": [
          130,
          125
        ],
        "shape": {
          "kind": "rect",
          "x": 127,
          "y": 95,
          "w": 6,
          "h": 60
        }
      },
      {
        "id": "radome-sphere",
        "colorNumber": 2,
        "label": [
          130,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 95,
          "r": 10
        }
      },
      {
        "id": "funnel",
        "colorNumber": 5,
        "label": [
          85,
          170
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 150,
          "w": 20,
          "h": 45,
          "rx": 3
        }
      },
      {
        "id": "funnel-top-black",
        "colorNumber": 5,
        "label": [
          85,
          152
        ],
        "shape": {
          "kind": "rect",
          "x": 73,
          "y": 148,
          "w": 24,
          "h": 8,
          "rx": 2
        }
      },
      {
        "id": "helipad-deck",
        "colorNumber": 5,
        "label": [
          45,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 25,
          "y": 250,
          "w": 40,
          "h": 10
        }
      },
      {
        "id": "helipad-h",
        "colorNumber": 8,
        "label": [
          45,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 255,
          "r": 5
        }
      },
      {
        "id": "life-ring-1",
        "colorNumber": 3,
        "label": [
          95,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 235,
          "r": 6
        }
      },
      {
        "id": "life-ring-2",
        "colorNumber": 3,
        "label": [
          165,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 235,
          "r": 6
        }
      },
      {
        "id": "anchor-crest",
        "colorNumber": 5,
        "label": [
          255,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 280,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 8,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
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
          170,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 50,
          "r": 14
        }
      },
      {
        "id": "seagull-1",
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
        "id": "seagull-2",
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
    "id": "hot-air-balloon",
    "name": "Sunrise Balloon",
    "emoji": "🌅",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FEF3C7",
      "#F59E0B",
      "#EF4444",
      "#8B5CF6",
      "#3B82F6",
      "#10B981",
      "#78350F",
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
        "id": "sunrise-sun",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 280,
          "r": 60
        }
      },
      {
        "id": "valley-hills",
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
          "ry": 30
        }
      },
      {
        "id": "balloon-envelope",
        "colorNumber": 3,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 80,140 C 80,60 220,60 220,140 C 220,195 175,230 160,245 L 140,245 C 125,230 80,195 80,140 Z"
        }
      },
      {
        "id": "gore-purple-l",
        "colorNumber": 4,
        "label": [
          115,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 115,140 C 115,75 145,65 150,65 L 150,245 C 142,235 115,190 115,140 Z"
        }
      },
      {
        "id": "gore-blue-r",
        "colorNumber": 5,
        "label": [
          185,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,140 C 185,75 155,65 150,65 L 150,245 C 158,235 185,190 185,140 Z"
        }
      },
      {
        "id": "gore-green-c",
        "colorNumber": 6,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M 135,140 C 135,70 165,70 165,140 C 165,195 155,245 150,245 C 145,245 135,195 135,140 Z"
        }
      },
      {
        "id": "burner-flame",
        "colorNumber": 2,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "polygon",
          "points": "144,265 156,265 150,248"
        }
      },
      {
        "id": "rigging-ropes",
        "colorNumber": 7,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 260,
          "w": 24,
          "h": 20
        }
      },
      {
        "id": "wicker-basket",
        "colorNumber": 7,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "rect",
          "x": 135,
          "y": 280,
          "w": 30,
          "h": 28,
          "rx": 4
        }
      },
      {
        "id": "basket-rim",
        "colorNumber": 3,
        "label": [
          150,
          282
        ],
        "shape": {
          "kind": "rect",
          "x": 132,
          "y": 278,
          "w": 36,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "cloud-l",
        "colorNumber": 8,
        "label": [
          55,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "cloud-r",
        "colorNumber": 8,
        "label": [
          245,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 200,
          "r": 18
        }
      },
      {
        "id": "mini-balloon-1",
        "colorNumber": 4,
        "label": [
          50,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 80,
          "r": 12
        }
      },
      {
        "id": "mini-balloon-2",
        "colorNumber": 5,
        "label": [
          250,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 95,
          "r": 10
        }
      },
      {
        "id": "mini-basket-1",
        "colorNumber": 7,
        "label": [
          50,
          96
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 96,
          "r": 3
        }
      },
      {
        "id": "mini-basket-2",
        "colorNumber": 7,
        "label": [
          250,
          109
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 109,
          "r": 3
        }
      },
      {
        "id": "hill-tree-1",
        "colorNumber": 6,
        "label": [
          70,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "hill-tree-2",
        "colorNumber": 6,
        "label": [
          230,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "sun-ray-1",
        "colorNumber": 2,
        "label": [
          80,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "sun-ray-2",
        "colorNumber": 2,
        "label": [
          220,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 2,
        "label": [
          45,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 30,
          "r": 8
        }
      },
      {
        "id": "sparkle-2",
        "colorNumber": 2,
        "label": [
          255,
          30
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 30,
          "r": 8
        }
      },
      {
        "id": "sparkle-3",
        "colorNumber": 2,
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
    "id": "motocross",
    "name": "Motocross Bike",
    "emoji": "🚵",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#FFF7ED",
      "#EA580C",
      "#C2410C",
      "#212121",
      "#37474F",
      "#FBBF24",
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
        "id": "dirt-jump-mound",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "polygon",
          "points": "0,400 120,310 240,400 300,400"
        }
      },
      {
        "id": "moto-frame",
        "colorNumber": 2,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "polygon",
          "points": "110,240 185,185 195,245 130,270"
        }
      },
      {
        "id": "engine-crankcase",
        "colorNumber": 5,
        "label": [
          145,
          255
        ],
        "shape": {
          "kind": "rect",
          "x": 130,
          "y": 235,
          "w": 35,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "expansion-chamber-exhaust",
        "colorNumber": 5,
        "label": [
          115,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,245 C 95,255 85,225 65,220"
        }
      },
      {
        "id": "front-fender-beak",
        "colorNumber": 2,
        "label": [
          225,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,185 L 255,160 L 235,185 Z"
        }
      },
      {
        "id": "rear-fender-tail",
        "colorNumber": 2,
        "label": [
          90,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 130,200 L 60,185 L 85,215 Z"
        }
      },
      {
        "id": "racing-number-plate",
        "colorNumber": 7,
        "label": [
          195,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 185,
          "y": 145,
          "w": 24,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "front-forks",
        "colorNumber": 4,
        "label": [
          210,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M 185,175 L 235,285 L 242,282 L 192,172 Z"
        }
      },
      {
        "id": "rear-swingarm",
        "colorNumber": 5,
        "label": [
          105,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 75,
          "y": 268,
          "w": 65,
          "h": 10,
          "rx": 3
        }
      },
      {
        "id": "front-knobby-tire",
        "colorNumber": 4,
        "label": [
          238,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 295,
          "r": 30
        }
      },
      {
        "id": "front-spoke-rim",
        "colorNumber": 6,
        "label": [
          238,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 295,
          "r": 18
        }
      },
      {
        "id": "front-axle-hub",
        "colorNumber": 5,
        "label": [
          238,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 295,
          "r": 8
        }
      },
      {
        "id": "rear-knobby-tire",
        "colorNumber": 4,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 30
        }
      },
      {
        "id": "rear-spoke-rim",
        "colorNumber": 6,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 18
        }
      },
      {
        "id": "rear-axle-hub",
        "colorNumber": 5,
        "label": [
          75,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 280,
          "r": 8
        }
      },
      {
        "id": "dirt-clod-1",
        "colorNumber": 8,
        "label": [
          45,
          310
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 310,
          "r": 6
        }
      },
      {
        "id": "dirt-clod-2",
        "colorNumber": 8,
        "label": [
          30,
          285
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 285,
          "r": 8
        }
      },
      {
        "id": "dirt-clod-3",
        "colorNumber": 8,
        "label": [
          20,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 20,
          "cy": 335,
          "r": 6
        }
      },
      {
        "id": "dirt-clod-4",
        "colorNumber": 8,
        "label": [
          55,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 350,
          "r": 5
        }
      },
      {
        "id": "handlebar-grip",
        "colorNumber": 4,
        "label": [
          170,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 155,
          "r": 5
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
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          180,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 65,
          "r": 16
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
    "id": "tow-truck",
    "name": "Heavy Tow Truck",
    "emoji": "🪝",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#ECEFF1",
      "#2563EB",
      "#1D4ED8",
      "#F59E0B",
      "#EF4444",
      "#37474F",
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
        "id": "highway-road",
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
        "id": "truck-cab",
        "colorNumber": 2,
        "label": [
          230,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 195,
          "y": 220,
          "w": 75,
          "h": 85,
          "rx": 4
        }
      },
      {
        "id": "cab-windshield",
        "colorNumber": 8,
        "label": [
          240,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M 195,220 L 225,165 L 265,165 L 265,220 Z"
        }
      },
      {
        "id": "cab-bumper-heavy",
        "colorNumber": 6,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "rect",
          "x": 245,
          "y": 300,
          "w": 30,
          "h": 16,
          "rx": 3
        }
      },
      {
        "id": "headlight",
        "colorNumber": 4,
        "label": [
          265,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 275,
          "r": 8
        }
      },
      {
        "id": "lightbar-base",
        "colorNumber": 6,
        "label": [
          230,
          162
        ],
        "shape": {
          "kind": "rect",
          "x": 215,
          "y": 158,
          "w": 30,
          "h": 6,
          "rx": 2
        }
      },
      {
        "id": "beacon-amber",
        "colorNumber": 4,
        "label": [
          222,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 222,
          "cy": 154,
          "r": 5
        }
      },
      {
        "id": "beacon-red",
        "colorNumber": 5,
        "label": [
          238,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 238,
          "cy": 154,
          "r": 5
        }
      },
      {
        "id": "wrecker-bed",
        "colorNumber": 3,
        "label": [
          115,
          285
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 270,
          "w": 155,
          "h": 35,
          "rx": 4
        }
      },
      {
        "id": "boom-crane-arm",
        "colorNumber": 4,
        "label": [
          110,
          190
        ],
        "shape": {
          "kind": "polygon",
          "points": "145,270 65,150 78,145 155,270"
        }
      },
      {
        "id": "steel-winch-cable",
        "colorNumber": 7,
        "label": [
          68,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 70,148 L 45,235"
        }
      },
      {
        "id": "heavy-tow-hook",
        "colorNumber": 7,
        "label": [
          45,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M 45,235 C 35,245 35,265 50,265 C 60,265 60,250 50,250"
        }
      },
      {
        "id": "wheel-front",
        "colorNumber": 7,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 26
        }
      },
      {
        "id": "rim-front",
        "colorNumber": 8,
        "label": [
          235,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 335,
          "r": 14
        }
      },
      {
        "id": "wheel-rear-1",
        "colorNumber": 7,
        "label": [
          145,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 335,
          "r": 26
        }
      },
      {
        "id": "rim-rear-1",
        "colorNumber": 8,
        "label": [
          145,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 335,
          "r": 14
        }
      },
      {
        "id": "wheel-rear-2",
        "colorNumber": 7,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 335,
          "r": 26
        }
      },
      {
        "id": "rim-rear-2",
        "colorNumber": 8,
        "label": [
          85,
          335
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 335,
          "r": 14
        }
      },
      {
        "id": "tool-cabinet",
        "colorNumber": 6,
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
        "id": "sun",
        "colorNumber": 4,
        "label": [
          50,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 55,
          "r": 20
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 8,
        "label": [
          160,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 60,
          "r": 16
        }
      },
      {
        "id": "sparkle-1",
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
        "id": "sparkle-2",
        "colorNumber": 4,
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
      }
    ]
  },
  {
    "id": "tugboat",
    "name": "Harbor Tugboat",
    "emoji": "⚓",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#DC2626",
      "#B91C1C",
      "#1E293B",
      "#FFFFFF",
      "#F59E0B",
      "#0284C7",
      "#0369A1"
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
        "id": "wake-splash",
        "colorNumber": 8,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M 0,335 Q 150,370 300,335 L 300,380 Q 150,400 0,380 Z"
        }
      },
      {
        "id": "tug-hull",
        "colorNumber": 2,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M 25,260 L 275,260 C 285,290 255,340 215,340 L 65,340 C 35,340 15,290 25,260 Z"
        }
      },
      {
        "id": "hull-rub-rail-black",
        "colorNumber": 4,
        "label": [
          150,
          262
        ],
        "shape": {
          "kind": "rect",
          "x": 20,
          "y": 256,
          "w": 260,
          "h": 12,
          "rx": 3
        }
      },
      {
        "id": "tire-bumper-1",
        "colorNumber": 4,
        "label": [
          55,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "tire-bumper-2",
        "colorNumber": 4,
        "label": [
          115,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "tire-bumper-3",
        "colorNumber": 4,
        "label": [
          185,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "tire-bumper-4",
        "colorNumber": 4,
        "label": [
          245,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 280,
          "r": 10
        }
      },
      {
        "id": "pilot-house-lower",
        "colorNumber": 5,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 185,
          "w": 120,
          "h": 70,
          "rx": 4
        }
      },
      {
        "id": "pilot-house-upper",
        "colorNumber": 5,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "rect",
          "x": 105,
          "y": 145,
          "w": 90,
          "h": 40,
          "rx": 4
        }
      },
      {
        "id": "pilot-windshield",
        "colorNumber": 1,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "rect",
          "x": 115,
          "y": 150,
          "w": 70,
          "h": 18,
          "rx": 2
        }
      },
      {
        "id": "tug-smokestack",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 90,
          "w": 20,
          "h": 55,
          "rx": 3
        }
      },
      {
        "id": "stack-gold-band",
        "colorNumber": 6,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 138,
          "y": 105,
          "w": 24,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "smoke-puff-1",
        "colorNumber": 5,
        "label": [
          150,
          70
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 70,
          "r": 14
        }
      },
      {
        "id": "smoke-puff-2",
        "colorNumber": 5,
        "label": [
          125,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 45,
          "r": 10
        }
      },
      {
        "id": "tow-winch",
        "colorNumber": 4,
        "label": [
          55,
          245
        ],
        "shape": {
          "kind": "rect",
          "x": 40,
          "y": 235,
          "w": 30,
          "h": 20,
          "rx": 3
        }
      },
      {
        "id": "porthole-1",
        "colorNumber": 4,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "porthole-2",
        "colorNumber": 4,
        "label": [
          185,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 230,
          "r": 6
        }
      },
      {
        "id": "sun",
        "colorNumber": 6,
        "label": [
          240,
          65
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 65,
          "r": 22
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 5,
        "label": [
          65,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 60,
          "r": 16
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
        "id": "harbor-buoy",
        "colorNumber": 2,
        "label": [
          30,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 30,
          "cy": 360,
          "r": 8
        }
      }
    ]
  },
  {
    "id": "fighter-jet",
    "name": "Supersonic Fighter",
    "emoji": "🛫",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0F172A",
      "#334155",
      "#475569",
      "#64748B",
      "#38BDF8",
      "#F59E0B",
      "#EF4444",
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
        "id": "cloud-layer",
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
        "id": "jet-fuselage",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M 150,60 L 175,190 L 195,290 L 105,290 L 125,190 Z"
        }
      },
      {
        "id": "nose-radome",
        "colorNumber": 3,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "142,100 158,100 150,55"
        }
      },
      {
        "id": "cockpit-canopy",
        "colorNumber": 5,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 135,
          "rx": 12,
          "ry": 32
        }
      },
      {
        "id": "pilot-helmet",
        "colorNumber": 1,
        "label": [
          150,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 135,
          "r": 6
        }
      },
      {
        "id": "wing-left",
        "colorNumber": 3,
        "label": [
          75,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,190 20,280 120,270"
        }
      },
      {
        "id": "wing-right",
        "colorNumber": 3,
        "label": [
          225,
          240
        ],
        "shape": {
          "kind": "polygon",
          "points": "175,190 280,280 180,270"
        }
      },
      {
        "id": "missile-l",
        "colorNumber": 7,
        "label": [
          18,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 16,
          "y": 240,
          "w": 6,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "missile-r",
        "colorNumber": 7,
        "label": [
          282,
          260
        ],
        "shape": {
          "kind": "rect",
          "x": 280,
          "y": 240,
          "w": 6,
          "h": 45,
          "rx": 2
        }
      },
      {
        "id": "tail-fin-l",
        "colorNumber": 4,
        "label": [
          115,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "120,260 100,220 115,290"
        }
      },
      {
        "id": "tail-fin-r",
        "colorNumber": 4,
        "label": [
          185,
          290
        ],
        "shape": {
          "kind": "polygon",
          "points": "180,260 200,220 185,290"
        }
      },
      {
        "id": "afterburner-flame-l",
        "colorNumber": 6,
        "label": [
          130,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "122,290 138,290 130,360"
        }
      },
      {
        "id": "afterburner-flame-r",
        "colorNumber": 6,
        "label": [
          170,
          335
        ],
        "shape": {
          "kind": "polygon",
          "points": "162,290 178,290 170,360"
        }
      },
      {
        "id": "shock-diamond-l",
        "colorNumber": 8,
        "label": [
          130,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "126,310 134,310 130,325"
        }
      },
      {
        "id": "shock-diamond-r",
        "colorNumber": 8,
        "label": [
          170,
          320
        ],
        "shape": {
          "kind": "polygon",
          "points": "166,310 174,310 170,325"
        }
      },
      {
        "id": "wing-roundel-l",
        "colorNumber": 7,
        "label": [
          80,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 245,
          "r": 8
        }
      },
      {
        "id": "wing-roundel-r",
        "colorNumber": 7,
        "label": [
          220,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 245,
          "r": 8
        }
      },
      {
        "id": "star-1",
        "colorNumber": 8,
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
        "id": "star-2",
        "colorNumber": 8,
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
        "id": "sonic-ring-1",
        "colorNumber": 5,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 65
        }
      },
      {
        "id": "sonic-ring-2",
        "colorNumber": 5,
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
          "r": 6
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
          "r": 6
        }
      }
    ]
  },
  {
    "id": "paraglider",
    "name": "Sky Glider",
    "emoji": "🪂",
    "category": "vehicles",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E0F2FE",
      "#EF4444",
      "#F59E0B",
      "#10B981",
      "#3B82F6",
      "#8B5CF6",
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
        "id": "mountain-valley",
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
        "id": "glider-canopy-arc",
        "colorNumber": 2,
        "label": [
          150,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,120 C 50,40 250,40 270,120 C 240,90 60,90 30,120 Z"
        }
      },
      {
        "id": "cell-red-l",
        "colorNumber": 2,
        "label": [
          70,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 30,120 C 45,60 85,55 85,95 C 60,90 40,105 30,120 Z"
        }
      },
      {
        "id": "cell-orange-ml",
        "colorNumber": 3,
        "label": [
          105,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 85,95 C 85,55 125,50 125,92 C 105,88 90,92 85,95 Z"
        }
      },
      {
        "id": "cell-green-c",
        "colorNumber": 4,
        "label": [
          150,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M 125,92 C 125,50 175,50 175,92 C 155,88 140,88 125,92 Z"
        }
      },
      {
        "id": "cell-blue-mr",
        "colorNumber": 5,
        "label": [
          195,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M 175,92 C 175,50 215,55 215,95 C 205,92 190,88 175,92 Z"
        }
      },
      {
        "id": "cell-purple-r",
        "colorNumber": 6,
        "label": [
          230,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,95 C 215,55 255,60 270,120 C 260,105 240,90 215,95 Z"
        }
      },
      {
        "id": "riser-line-1",
        "colorNumber": 7,
        "label": [
          80,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 50,110 L 145,260"
        }
      },
      {
        "id": "riser-line-2",
        "colorNumber": 7,
        "label": [
          110,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 100,95 L 148,260"
        }
      },
      {
        "id": "riser-line-3",
        "colorNumber": 7,
        "label": [
          190,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M 200,95 L 152,260"
        }
      },
      {
        "id": "riser-line-4",
        "colorNumber": 7,
        "label": [
          220,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M 250,110 L 155,260"
        }
      },
      {
        "id": "pilot-harness",
        "colorNumber": 8,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "rect",
          "x": 140,
          "y": 260,
          "w": 20,
          "h": 30,
          "rx": 4
        }
      },
      {
        "id": "pilot-helmet",
        "colorNumber": 3,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 250,
          "r": 10
        }
      },
      {
        "id": "pilot-legs",
        "colorNumber": 5,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "rect",
          "x": 142,
          "y": 290,
          "w": 16,
          "h": 25,
          "rx": 3
        }
      },
      {
        "id": "cloud-1",
        "colorNumber": 7,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "cloud-2",
        "colorNumber": 7,
        "label": [
          245,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 230,
          "r": 18
        }
      },
      {
        "id": "bird-1",
        "colorNumber": 8,
        "label": [
          65,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M 55,150 Q 65,140 75,150 Q 85,140 95,150"
        }
      },
      {
        "id": "bird-2",
        "colorNumber": 8,
        "label": [
          225,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M 215,160 Q 225,150 235,160 Q 245,150 255,160"
        }
      },
      {
        "id": "sun",
        "colorNumber": 3,
        "label": [
          240,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 45,
          "r": 20
        }
      },
      {
        "id": "sparkle-1",
        "colorNumber": 3,
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
        "colorNumber": 3,
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
      },
      {
        "id": "thermal-stream",
        "colorNumber": 7,
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
  }
];
