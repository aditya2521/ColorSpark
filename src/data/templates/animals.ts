import { ImageTemplate } from '../../types';

// Category: animals (68 100% bespoke unique templates - every region is part of the actual animal, no filler)
export const ANIMALS_TEMPLATES: ImageTemplate[] = [
  {
    "id": "fish",
    "name": "Happy Fish",
    "emoji": "🐟",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#4A90D9",
      "#2563A8",
      "#D4B896",
      "#FF6B42",
      "#FF8C5A",
      "#FFB899",
      "#FFFFFF",
      "#3D2B1F",
      "#E8853A",
      "#FF4500",
      "#FF4500",
      "#B0E0FF",
      "#FF6B6B",
      "#FF9955",
      "#228B22",
      "#FF6347"
    ],
    "regions": [
      {
        "id": "water",
        "colorNumber": 1,
        "label": [
          22,
          22
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "deep",
        "colorNumber": 2,
        "label": [
          22,
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
        "id": "sand",
        "colorNumber": 3,
        "label": [
          150,
          388
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
        "id": "fish-body",
        "colorNumber": 4,
        "label": [
          140,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M240,200 C220,160 170,148 130,158 C90,168 65,195 70,228 C75,260 108,278 148,272 C188,265 225,242 240,200 Z"
        }
      },
      {
        "id": "fish-tail",
        "colorNumber": 5,
        "label": [
          268,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M240,200 L278,168 L290,200 L278,232 Z"
        }
      },
      {
        "id": "fish-belly",
        "colorNumber": 6,
        "label": [
          140,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M80,230 C88,258 118,272 148,268 C178,264 210,248 225,228 C205,240 172,250 148,252 C124,254 98,248 80,230 Z"
        }
      },
      {
        "id": "fish-eye",
        "colorNumber": 7,
        "label": [
          100,
          188
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 190,
          "r": 18
        }
      },
      {
        "id": "fish-pupil",
        "colorNumber": 8,
        "label": [
          116,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 192,
          "r": 8
        }
      },
      {
        "id": "scale1",
        "colorNumber": 9,
        "label": [
          165,
          182
        ],
        "shape": {
          "kind": "path",
          "d": "M158,178 Q170,168 182,178 Q178,188 170,188 Q162,188 158,178 Z"
        }
      },
      {
        "id": "scale2",
        "colorNumber": 9,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M188,192 Q200,182 212,192 Q208,202 200,202 Q192,202 188,192 Z"
        }
      },
      {
        "id": "scale3",
        "colorNumber": 9,
        "label": [
          155,
          208
        ],
        "shape": {
          "kind": "path",
          "d": "M148,205 Q160,195 172,205 Q168,215 160,215 Q152,215 148,205 Z"
        }
      },
      {
        "id": "scale4",
        "colorNumber": 9,
        "label": [
          183,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M176,218 Q188,208 200,218 Q196,228 188,228 Q180,228 176,218 Z"
        }
      },
      {
        "id": "fin-top",
        "colorNumber": 10,
        "label": [
          165,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M148,162 C158,140 185,135 195,155 C182,158 165,160 148,162 Z"
        }
      },
      {
        "id": "fin-bot",
        "colorNumber": 10,
        "label": [
          165,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M148,265 C158,285 185,290 198,272 C185,268 168,265 148,265 Z"
        }
      },
      {
        "id": "smile-f",
        "colorNumber": 11,
        "label": [
          78,
          218
        ],
        "shape": {
          "kind": "path",
          "d": "M68,210 Q78,225 88,215 L88,220 Q78,232 68,215 Z"
        }
      },
      {
        "id": "bubble1",
        "colorNumber": 12,
        "label": [
          55,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 148,
          "r": 12
        }
      },
      {
        "id": "bubble2",
        "colorNumber": 12,
        "label": [
          35,
          105
        ],
        "shape": {
          "kind": "circle",
          "cx": 35,
          "cy": 108,
          "r": 8
        }
      },
      {
        "id": "bubble3",
        "colorNumber": 12,
        "label": [
          68,
          88
        ],
        "shape": {
          "kind": "circle",
          "cx": 68,
          "cy": 90,
          "r": 6
        }
      },
      {
        "id": "coral1",
        "colorNumber": 13,
        "label": [
          250,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M245,362 L248,332 Q252,318 258,325 Q262,332 258,345 L265,332 Q270,318 275,325 Q280,340 272,362 Z"
        }
      },
      {
        "id": "coral2",
        "colorNumber": 14,
        "label": [
          42,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M35,362 L38,340 Q42,328 48,335 Q50,342 48,355 L54,340 Q58,328 63,335 Q66,348 60,362 Z"
        }
      },
      {
        "id": "seaweed",
        "colorNumber": 15,
        "label": [
          220,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M218,365 Q212,348 218,335 Q224,322 218,310 Q224,298 222,285 Q228,282 232,290 Q228,304 232,318 Q236,332 230,345 Q236,358 232,365 Z"
        }
      },
      {
        "id": "starfish",
        "colorNumber": 16,
        "label": [
          95,
          372
        ],
        "shape": {
          "kind": "path",
          "d": "M95,362 L99,372 L110,372 L101,378 L105,390 L95,382 L85,390 L89,378 L80,372 L91,372 Z"
        }
      }
    ]
  },
  {
    "id": "butterfly",
    "name": "Beautiful Butterfly",
    "emoji": "🦋",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#FF6B9D",
      "#FF9EBC",
      "#FFD700",
      "#FF8C00",
      "#8B1A8B",
      "#4B0082",
      "#3D2B1F",
      "#4D2600",
      "#FF4500",
      "#FFFFFF",
      "#FF6B9D",
      "#FFE566",
      "#228B22"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "wing-tl",
        "colorNumber": 2,
        "label": [
          68,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C140,180 115,145 85,120 C55,95 18,95 12,128 C6,160 30,195 65,210 C100,225 138,215 150,200 Z"
        }
      },
      {
        "id": "wing-tr",
        "colorNumber": 2,
        "label": [
          230,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C160,180 185,145 215,120 C245,95 282,95 288,128 C294,160 270,195 235,210 C200,225 162,215 150,200 Z"
        }
      },
      {
        "id": "wing-bl",
        "colorNumber": 3,
        "label": [
          72,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C135,220 105,250 75,268 C45,285 15,278 15,255 C15,232 42,212 75,215 C108,218 140,212 150,200 Z"
        }
      },
      {
        "id": "wing-br",
        "colorNumber": 3,
        "label": [
          228,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C165,220 195,250 225,268 C255,285 285,278 285,255 C285,232 258,212 225,215 C192,218 160,212 150,200 Z"
        }
      },
      {
        "id": "inner-tl",
        "colorNumber": 4,
        "label": [
          88,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M150,198 C138,180 118,160 95,148 C72,135 48,138 44,158 C40,178 58,200 88,208 C118,216 142,208 150,198 Z"
        }
      },
      {
        "id": "inner-tr",
        "colorNumber": 4,
        "label": [
          210,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M150,198 C162,180 182,160 205,148 C228,135 252,138 256,158 C260,178 242,200 212,208 C182,216 158,208 150,198 Z"
        }
      },
      {
        "id": "inner-bl",
        "colorNumber": 5,
        "label": [
          90,
          252
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C138,218 115,240 92,252 C68,264 48,258 48,242 C48,226 68,215 92,217 C116,219 140,212 150,200 Z"
        }
      },
      {
        "id": "inner-br",
        "colorNumber": 5,
        "label": [
          208,
          252
        ],
        "shape": {
          "kind": "path",
          "d": "M150,200 C162,218 185,240 208,252 C232,264 252,258 252,242 C252,226 232,215 208,217 C184,219 160,212 150,200 Z"
        }
      },
      {
        "id": "dot-tl",
        "colorNumber": 6,
        "label": [
          82,
          182
        ],
        "shape": {
          "kind": "circle",
          "cx": 82,
          "cy": 184,
          "r": 16
        }
      },
      {
        "id": "dot-tr",
        "colorNumber": 6,
        "label": [
          218,
          182
        ],
        "shape": {
          "kind": "circle",
          "cx": 218,
          "cy": 184,
          "r": 16
        }
      },
      {
        "id": "dot-bl",
        "colorNumber": 7,
        "label": [
          60,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 78,
          "cy": 248,
          "r": 12
        }
      },
      {
        "id": "dot-br",
        "colorNumber": 7,
        "label": [
          222,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 222,
          "cy": 248,
          "r": 12
        }
      },
      {
        "id": "body",
        "colorNumber": 8,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 250,
          "rx": 12,
          "ry": 65
        }
      },
      {
        "id": "head",
        "colorNumber": 9,
        "label": [
          150,
          172
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 18
        }
      },
      {
        "id": "ant-l",
        "colorNumber": 8,
        "label": [
          134,
          132
        ],
        "shape": {
          "kind": "path",
          "d": "M146,160 C140,145 130,132 122,122 C120,120 118,122 120,124 C126,132 134,145 142,160 Z"
        }
      },
      {
        "id": "ant-r",
        "colorNumber": 8,
        "label": [
          166,
          132
        ],
        "shape": {
          "kind": "path",
          "d": "M154,160 C160,145 170,132 178,122 C180,120 182,122 180,124 C174,132 166,145 158,160 Z"
        }
      },
      {
        "id": "ant-ball-l",
        "colorNumber": 10,
        "label": [
          122,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "ant-ball-r",
        "colorNumber": 10,
        "label": [
          178,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 120,
          "r": 7
        }
      },
      {
        "id": "eye-b-l",
        "colorNumber": 11,
        "label": [
          153,
          186
        ],
        "shape": {
          "kind": "circle",
          "cx": 143,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "eye-b-r",
        "colorNumber": 11,
        "label": [
          173,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 157,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "flower-bg",
        "colorNumber": 12,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 370,
          "r": 22
        }
      },
      {
        "id": "flower-petal",
        "colorNumber": 13,
        "label": [
          150,
          348
        ],
        "shape": {
          "kind": "path",
          "d": "M150,345 Q158,354 155,365 Q150,360 145,365 Q142,354 150,345 Z M167,355 Q162,366 150,368 Q154,362 155,357 Q162,358 167,355 Z M163,382 Q156,376 150,378 Q153,372 157,370 Q162,375 163,382 Z M138,382 Q142,375 147,370 Q151,372 148,378 Q142,376 138,382 Z M133,355 Q138,358 145,357 Q146,362 148,368 Q138,366 133,355 Z"
        }
      },
      {
        "id": "stem-bg",
        "colorNumber": 14,
        "label": [
          150,
          395
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 390,
          "w": 8,
          "h": 10
        }
      }
    ]
  },
  {
    "id": "cat",
    "name": "Cute Cat",
    "emoji": "🐱",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#7EC850",
      "#E8B87A",
      "#FFD9D9",
      "#7EC8E3",
      "#3D2B1F",
      "#FF6B9D",
      "#FFFACD",
      "#FF8080",
      "#FFB3C6",
      "#CC3333",
      "#FFD700"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 348,
          "w": 300,
          "h": 52
        }
      },
      {
        "id": "body",
        "colorNumber": 3,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 305,
          "rx": 80,
          "ry": 72
        }
      },
      {
        "id": "head",
        "colorNumber": 3,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 82
        }
      },
      {
        "id": "ear-l-out",
        "colorNumber": 3,
        "label": [
          84,
          108
        ],
        "shape": {
          "kind": "polygon",
          "points": "78,145 82,88 122,130"
        }
      },
      {
        "id": "ear-r-out",
        "colorNumber": 3,
        "label": [
          216,
          108
        ],
        "shape": {
          "kind": "polygon",
          "points": "222,145 218,88 178,130"
        }
      },
      {
        "id": "ear-l-in",
        "colorNumber": 4,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "polygon",
          "points": "88,140 92,100 118,132"
        }
      },
      {
        "id": "ear-r-in",
        "colorNumber": 4,
        "label": [
          219,
          129
        ],
        "shape": {
          "kind": "polygon",
          "points": "212,140 208,100 182,132"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 5,
        "label": [
          112,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 178,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 5,
        "label": [
          188,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 178,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          128,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 180,
          "rx": 8,
          "ry": 14
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          204,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 180,
          "rx": 8,
          "ry": 14
        }
      },
      {
        "id": "nose",
        "colorNumber": 7,
        "label": [
          150,
          212
        ],
        "shape": {
          "kind": "polygon",
          "points": "150,206 143,218 157,218"
        }
      },
      {
        "id": "muzzle-l",
        "colorNumber": 8,
        "label": [
          118,
          222
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 225,
          "rx": 24,
          "ry": 16
        }
      },
      {
        "id": "muzzle-r",
        "colorNumber": 8,
        "label": [
          182,
          222
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 225,
          "rx": 24,
          "ry": 16
        }
      },
      {
        "id": "mouth",
        "colorNumber": 9,
        "label": [
          150,
          232
        ],
        "shape": {
          "kind": "path",
          "d": "M143,220 Q150,230 157,220 L157,224 Q150,235 143,224 Z"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 10,
        "label": [
          80,
          232
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 235,
          "rx": 24,
          "ry": 15
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 10,
        "label": [
          218,
          232
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 235,
          "rx": 24,
          "ry": 15
        }
      },
      {
        "id": "tail",
        "colorNumber": 3,
        "label": [
          248,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M225,345 C255,330 280,310 272,285 C265,262 248,268 242,288 C236,308 242,332 225,345 Z"
        }
      },
      {
        "id": "tail-tip",
        "colorNumber": 4,
        "label": [
          265,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 265,
          "cy": 280,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 3,
        "label": [
          88,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 358,
          "rx": 28,
          "ry": 16
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 3,
        "label": [
          212,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 358,
          "rx": 28,
          "ry": 16
        }
      },
      {
        "id": "collar",
        "colorNumber": 11,
        "label": [
          150,
          252
        ],
        "shape": {
          "kind": "path",
          "d": "M90,250 Q150,265 210,250 L210,262 Q150,278 90,262 Z"
        }
      },
      {
        "id": "bell",
        "colorNumber": 12,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 272,
          "r": 10
        }
      }
    ]
  },
  {
    "id": "parrot",
    "name": "Colorful Parrot",
    "emoji": "🦜",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B5E3C",
      "#228B22",
      "#1A6B1A",
      "#2D9B2D",
      "#FF4757",
      "#FFD700",
      "#FF8C00",
      "#FF6B42",
      "#228B22",
      "#FF4757",
      "#FFD700",
      "#FF8C00",
      "#FFFFFF",
      "#3D2B1F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch",
        "colorNumber": 2,
        "label": [
          60,
          358
        ],
        "shape": {
          "kind": "path",
          "d": "M0,345 Q100,355 300,342 L300,360 Q100,372 0,362 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 3,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 258,
          "rx": 65,
          "ry": 88
        }
      },
      {
        "id": "wing",
        "colorNumber": 4,
        "label": [
          90,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M100,200 C62,215 45,252 55,295 C65,328 90,340 110,330 C130,320 135,288 135,260 C135,232 120,210 100,200 Z"
        }
      },
      {
        "id": "wing-inner",
        "colorNumber": 5,
        "label": [
          95,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M105,218 C80,232 68,262 75,295 C82,318 100,328 112,320 C124,312 128,285 128,262 C128,238 118,222 105,218 Z"
        }
      },
      {
        "id": "tail-f1",
        "colorNumber": 6,
        "label": [
          128,
          372
        ],
        "shape": {
          "kind": "path",
          "d": "M135,342 C128,360 120,385 128,398 C136,388 138,365 140,342 Z"
        }
      },
      {
        "id": "tail-f2",
        "colorNumber": 7,
        "label": [
          150,
          378
        ],
        "shape": {
          "kind": "path",
          "d": "M146,342 C144,362 142,388 150,400 C158,388 156,362 154,342 Z"
        }
      },
      {
        "id": "tail-f3",
        "colorNumber": 8,
        "label": [
          170,
          372
        ],
        "shape": {
          "kind": "path",
          "d": "M160,342 C162,365 164,388 172,398 C180,385 172,360 165,342 Z"
        }
      },
      {
        "id": "chest",
        "colorNumber": 9,
        "label": [
          165,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 168,
          "cy": 255,
          "rx": 40,
          "ry": 55
        }
      },
      {
        "id": "head",
        "colorNumber": 3,
        "label": [
          155,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 152,
          "r": 58
        }
      },
      {
        "id": "crest1",
        "colorNumber": 10,
        "label": [
          148,
          82
        ],
        "shape": {
          "kind": "path",
          "d": "M148,100 C145,82 140,68 148,52 C156,68 155,82 152,100 Z"
        }
      },
      {
        "id": "crest2",
        "colorNumber": 11,
        "label": [
          165,
          88
        ],
        "shape": {
          "kind": "path",
          "d": "M155,100 C158,82 165,68 170,55 C175,72 170,86 160,100 Z"
        }
      },
      {
        "id": "crest3",
        "colorNumber": 12,
        "label": [
          133,
          88
        ],
        "shape": {
          "kind": "path",
          "d": "M145,100 C138,82 132,68 128,55 C135,72 138,86 142,100 Z"
        }
      },
      {
        "id": "eye-p",
        "colorNumber": 13,
        "label": [
          170,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "pupil-p",
        "colorNumber": 14,
        "label": [
          186,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 142,
          "r": 7
        }
      },
      {
        "id": "beak-top",
        "colorNumber": 15,
        "label": [
          188,
          158
        ],
        "shape": {
          "kind": "path",
          "d": "M178,155 C188,148 205,152 208,162 C202,165 188,162 178,155 Z"
        }
      },
      {
        "id": "beak-bot",
        "colorNumber": 14,
        "label": [
          208,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M180,162 C190,158 205,162 206,172 C198,178 185,174 180,162 Z"
        }
      },
      {
        "id": "feet-p",
        "colorNumber": 2,
        "label": [
          150,
          348
        ],
        "shape": {
          "kind": "path",
          "d": "M130,345 L122,358 L128,358 L132,348 L136,358 L140,358 L140,345 Z M158,345 L150,358 L156,358 L160,348 L164,358 L168,358 L168,345 Z"
        }
      },
      {
        "id": "env-leaf-18",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-19",
        "colorNumber": 5,
        "label": [
          166,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 355,
          "r": 6
        }
      },
      {
        "id": "env-spark-20",
        "colorNumber": 7,
        "label": [
          10,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M5,200.00000000000003 L10,192.00000000000003 L15,200.00000000000003 L10,208.00000000000003 Z"
        }
      },
      {
        "id": "env-leaf-21",
        "colorNumber": 5,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 60,
          "rx": 14,
          "ry": 8
        }
      }
    ]
  },
  {
    "id": "puppy",
    "name": "Puppy Dog",
    "emoji": "🐶",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#D4A882",
      "#C09060",
      "#FFFFFF",
      "#3D2B1F",
      "#F5DEB3",
      "#3D2B1F",
      "#FF8080",
      "#CC3333",
      "#FFD700",
      "#FFB3C6"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 352,
          "w": 300,
          "h": 48
        }
      },
      {
        "id": "grass-pp",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,362 Q75,338 150,352 Q225,338 300,362 L300,375 L0,375 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 285,
          "rx": 88,
          "ry": 75
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 172,
          "r": 82
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 5,
        "label": [
          75,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M80,105 C55,105 42,130 50,162 C62,175 85,175 95,155 C105,135 100,105 80,105 Z"
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 5,
        "label": [
          225,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M220,105 C245,105 258,130 250,162 C238,175 215,175 205,155 C195,135 200,105 220,105 Z"
        }
      },
      {
        "id": "spot-eye-l",
        "colorNumber": 5,
        "label": [
          110,
          152
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 155,
          "rx": 24,
          "ry": 22
        }
      },
      {
        "id": "spot-eye-r",
        "colorNumber": 5,
        "label": [
          190,
          152
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 155,
          "rx": 24,
          "ry": 22
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          126,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 160,
          "r": 16
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          206,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 160,
          "r": 16
        }
      },
      {
        "id": "pupil-pp-l",
        "colorNumber": 7,
        "label": [
          121,
          173
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 162,
          "r": 7
        }
      },
      {
        "id": "pupil-pp-r",
        "colorNumber": 7,
        "label": [
          201,
          173
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 162,
          "r": 7
        }
      },
      {
        "id": "muzzle",
        "colorNumber": 8,
        "label": [
          150,
          208
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "nose-pp",
        "colorNumber": 9,
        "label": [
          168,
          196
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 198,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "tongue-pp",
        "colorNumber": 10,
        "label": [
          150,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M138,218 Q150,242 162,218 L162,228 Q150,254 138,228 Z"
        }
      },
      {
        "id": "tail",
        "colorNumber": 4,
        "label": [
          252,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M228,272 C245,258 268,240 272,218 C276,200 264,192 255,202 C246,212 245,238 228,255 Z"
        }
      },
      {
        "id": "spot-back",
        "colorNumber": 5,
        "label": [
          175,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 268,
          "rx": 32,
          "ry": 25
        }
      },
      {
        "id": "paw-fl",
        "colorNumber": 4,
        "label": [
          90,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 90,
          "cy": 352,
          "rx": 28,
          "ry": 16
        }
      },
      {
        "id": "paw-fr",
        "colorNumber": 4,
        "label": [
          210,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 210,
          "cy": 352,
          "rx": 28,
          "ry": 16
        }
      },
      {
        "id": "collar-pp",
        "colorNumber": 11,
        "label": [
          150,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M98,238 Q150,252 202,238 L202,252 Q150,266 98,252 Z"
        }
      },
      {
        "id": "tag-pp",
        "colorNumber": 12,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 262,
          "r": 10
        }
      },
      {
        "id": "blush-pp-l",
        "colorNumber": 13,
        "label": [
          78,
          198
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 80,
          "cy": 200,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "blush-pp-r",
        "colorNumber": 13,
        "label": [
          222,
          198
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 220,
          "cy": 200,
          "rx": 22,
          "ry": 14
        }
      }
    ]
  },
  {
    "id": "elephant",
    "name": "Jolly Elephant",
    "emoji": "🐘",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#9E9E9E",
      "#B8B8B8",
      "#FFCCC0",
      "#888888",
      "#FFFFF0",
      "#FFFFFF",
      "#3D2B1F",
      "#FF6B6B",
      "#FF8C00",
      "#FFD700",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ground-el",
        "colorNumber": 2,
        "label": [
          150,
          388
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
        "id": "grass-el",
        "colorNumber": 3,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,340 150,355 Q225,340 300,365 L300,378 L0,378 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 105,
          "ry": 85
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 152,
          "cy": 165,
          "r": 88
        }
      },
      {
        "id": "ear",
        "colorNumber": 5,
        "label": [
          58,
          162
        ],
        "shape": {
          "kind": "path",
          "d": "M78,130 C42,125 15,148 18,185 C20,215 48,235 75,225 C100,215 110,188 105,162 C100,138 88,128 78,130 Z"
        }
      },
      {
        "id": "ear-inner",
        "colorNumber": 6,
        "label": [
          74,
          168
        ],
        "shape": {
          "kind": "path",
          "d": "M75,142 C55,140 38,158 40,185 C42,208 60,222 78,215 C95,208 102,188 98,168 C94,150 85,142 75,142 Z"
        }
      },
      {
        "id": "trunk",
        "colorNumber": 4,
        "label": [
          108,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M130,220 C105,228 85,248 88,275 C90,292 100,302 115,298 C128,295 132,278 128,260 C124,242 118,228 130,220 Z"
        }
      },
      {
        "id": "trunk-tip",
        "colorNumber": 7,
        "label": [
          105,
          296
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 298,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "tusk",
        "colorNumber": 8,
        "label": [
          130,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M128,240 C120,248 112,268 118,282 C122,290 130,288 135,278 C140,268 138,252 128,240 Z"
        }
      },
      {
        "id": "eye-el",
        "colorNumber": 9,
        "label": [
          192,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 148,
          "r": 18
        }
      },
      {
        "id": "pupil-el",
        "colorNumber": 10,
        "label": [
          208,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 150,
          "r": 8
        }
      },
      {
        "id": "leg-fl",
        "colorNumber": 4,
        "label": [
          92,
          348
        ],
        "shape": {
          "kind": "rect",
          "x": 72,
          "y": 318,
          "w": 40,
          "h": 52,
          "rx": 8
        }
      },
      {
        "id": "leg-fr",
        "colorNumber": 4,
        "label": [
          148,
          348
        ],
        "shape": {
          "kind": "rect",
          "x": 128,
          "y": 318,
          "w": 40,
          "h": 52,
          "rx": 8
        }
      },
      {
        "id": "leg-bl",
        "colorNumber": 4,
        "label": [
          178,
          348
        ],
        "shape": {
          "kind": "rect",
          "x": 162,
          "y": 318,
          "w": 40,
          "h": 52,
          "rx": 8
        }
      },
      {
        "id": "leg-br",
        "colorNumber": 4,
        "label": [
          215,
          348
        ],
        "shape": {
          "kind": "rect",
          "x": 210,
          "y": 318,
          "w": 40,
          "h": 52,
          "rx": 8
        }
      },
      {
        "id": "blanket",
        "colorNumber": 11,
        "label": [
          150,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M68,238 Q150,250 232,238 L230,280 Q150,292 70,280 Z"
        }
      },
      {
        "id": "blanket-trim",
        "colorNumber": 12,
        "label": [
          166,
          282
        ],
        "shape": {
          "kind": "path",
          "d": "M70,278 Q150,290 230,278 L230,286 Q150,298 70,286 Z"
        }
      },
      {
        "id": "tail-el",
        "colorNumber": 4,
        "label": [
          248,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M235,275 C245,272 258,278 258,290 C258,302 246,308 240,300 Z"
        }
      },
      {
        "id": "spot1",
        "colorNumber": 5,
        "label": [
          175,
          165
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 168,
          "rx": 18,
          "ry": 14
        }
      },
      {
        "id": "spot2",
        "colorNumber": 5,
        "label": [
          215,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 198,
          "rx": 15,
          "ry": 12
        }
      },
      {
        "id": "sun-el",
        "colorNumber": 13,
        "label": [
          262,
          38
        ],
        "shape": {
          "kind": "circle",
          "cx": 262,
          "cy": 38,
          "r": 24
        }
      },
      {
        "id": "cloud-el",
        "colorNumber": 14,
        "label": [
          58,
          48
        ],
        "shape": {
          "kind": "path",
          "d": "M18,60 Q26,42 48,50 Q56,32 78,44 Q92,32 98,50 Q112,40 110,65 Q88,80 18,75 Z"
        }
      }
    ]
  },
  {
    "id": "penguin",
    "name": "Cool Penguin",
    "emoji": "🐧",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#E0F0FF",
      "#FFFFFF",
      "#2C2C3C",
      "#FFFFFF",
      "#FFFFFF",
      "#3D2B1F",
      "#FF8C00",
      "#FF8C00",
      "#2C2C3C",
      "#CC3333",
      "#CC3333",
      "#FF6B9D",
      "#87CEEB"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ice-bg",
        "colorNumber": 2,
        "label": [
          150,
          388
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
        "id": "ice-shelf",
        "colorNumber": 3,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M0,355 Q75,325 150,342 Q225,325 300,355 L300,370 L0,370 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 88,
          "ry": 100
        }
      },
      {
        "id": "belly-p",
        "colorNumber": 5,
        "label": [
          166,
          272
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 55,
          "ry": 72
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 162,
          "r": 70
        }
      },
      {
        "id": "face",
        "colorNumber": 5,
        "label": [
          166,
          168
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 172,
          "rx": 45,
          "ry": 52
        }
      },
      {
        "id": "eye-l-p",
        "colorNumber": 6,
        "label": [
          122,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "eye-r-p",
        "colorNumber": 6,
        "label": [
          178,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "pupil-l-p",
        "colorNumber": 7,
        "label": [
          138,
          173
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 157,
          "r": 6
        }
      },
      {
        "id": "pupil-r-p",
        "colorNumber": 7,
        "label": [
          194,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 157,
          "r": 6
        }
      },
      {
        "id": "beak",
        "colorNumber": 8,
        "label": [
          150,
          188
        ],
        "shape": {
          "kind": "polygon",
          "points": "138,182 162,182 150,202"
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 4,
        "label": [
          55,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M62,225 C38,238 22,262 28,295 C34,318 55,328 68,318 C82,308 80,280 75,255 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 4,
        "label": [
          245,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M238,225 C262,238 278,262 272,295 C266,318 245,328 232,318 C218,308 220,280 225,255 Z"
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 9,
        "label": [
          108,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M95,345 L88,360 L98,358 L102,345 L108,358 L115,360 L115,345 Z"
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 9,
        "label": [
          192,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M182,345 L175,360 L185,358 L188,345 L195,358 L202,360 L198,345 Z"
        }
      },
      {
        "id": "hat",
        "colorNumber": 10,
        "label": [
          150,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M98,125 L102,72 L198,72 L202,125 Z"
        }
      },
      {
        "id": "hat-brim-p",
        "colorNumber": 10,
        "label": [
          150,
          128
        ],
        "shape": {
          "kind": "rect",
          "x": 90,
          "y": 122,
          "w": 120,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "hat-band-p",
        "colorNumber": 11,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "rect",
          "x": 102,
          "y": 105,
          "w": 96,
          "h": 12
        }
      },
      {
        "id": "scarf-p",
        "colorNumber": 12,
        "label": [
          150,
          218
        ],
        "shape": {
          "kind": "path",
          "d": "M95,215 Q150,228 205,215 L205,228 Q150,242 95,228 Z"
        }
      },
      {
        "id": "scarf-end-p",
        "colorNumber": 13,
        "label": [
          180,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M182,228 C186,238 184,252 180,260 C176,256 174,240 178,228 Z"
        }
      },
      {
        "id": "snowflake-p1",
        "colorNumber": 14,
        "label": [
          42,
          85
        ],
        "shape": {
          "kind": "path",
          "d": "M38,78 L42,78 L42,92 L38,92 Z M31,80 L33,83 L47,86 L45,83 Z M31,89 L33,86 L47,83 L45,86 Z"
        }
      },
      {
        "id": "snowflake-p2",
        "colorNumber": 14,
        "label": [
          258,
          132
        ],
        "shape": {
          "kind": "path",
          "d": "M254,126 L258,126 L258,140 L254,140 Z M247,128 L249,131 L263,134 L261,131 Z M247,137 L249,134 L263,131 L261,134 Z"
        }
      },
      {
        "id": "snowflake-p3",
        "colorNumber": 14,
        "label": [
          258,
          62
        ],
        "shape": {
          "kind": "path",
          "d": "M254,56 L258,56 L258,68 L254,68 Z M247,58 L249,61 L263,64 L261,61 Z M247,65 L249,62 L263,59 L261,62 Z"
        }
      },
      {
        "id": "belly-spot",
        "colorNumber": 5,
        "label": [
          150,
          312
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 312,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "button-p",
        "colorNumber": 11,
        "label": [
          150,
          248
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
    "id": "owl",
    "name": "Wise Owl",
    "emoji": "🦉",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#E8D5A0",
      "#1A1040",
      "#8B5E3C",
      "#8B6914",
      "#F5DEB3",
      "#D4B896",
      "#FFD700",
      "#3D2B1F",
      "#FFFFFF",
      "#FF8C00",
      "#C8A882",
      "#C8A882",
      "#8B5E3C",
      "#F0F0D8",
      "#FFFACD",
      "#D4A017"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "night-sky",
        "colorNumber": 2,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 200
        }
      },
      {
        "id": "branch",
        "colorNumber": 3,
        "label": [
          62,
          358
        ],
        "shape": {
          "kind": "path",
          "d": "M0,345 Q100,355 300,342 L300,365 Q100,375 0,365 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 265,
          "rx": 80,
          "ry": 95
        }
      },
      {
        "id": "belly-ow",
        "colorNumber": 5,
        "label": [
          166,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 272,
          "rx": 50,
          "ry": 68
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 158,
          "r": 72
        }
      },
      {
        "id": "face-disc",
        "colorNumber": 6,
        "label": [
          166,
          160
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 162,
          "rx": 54,
          "ry": 58
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 4,
        "label": [
          98,
          98
        ],
        "shape": {
          "kind": "polygon",
          "points": "90,125 98,82 112,125"
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 4,
        "label": [
          202,
          98
        ],
        "shape": {
          "kind": "polygon",
          "points": "188,125 202,82 210,125"
        }
      },
      {
        "id": "eye-l-ow",
        "colorNumber": 7,
        "label": [
          122,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 155,
          "r": 24
        }
      },
      {
        "id": "eye-r-ow",
        "colorNumber": 7,
        "label": [
          196,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 155,
          "r": 24
        }
      },
      {
        "id": "pupil-l-ow",
        "colorNumber": 8,
        "label": [
          147,
          171
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 157,
          "r": 12
        }
      },
      {
        "id": "pupil-r-ow",
        "colorNumber": 8,
        "label": [
          212,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 157,
          "r": 12
        }
      },
      {
        "id": "shine-l",
        "colorNumber": 9,
        "label": [
          117,
          137
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 150,
          "r": 4
        }
      },
      {
        "id": "shine-r",
        "colorNumber": 9,
        "label": [
          173,
          137
        ],
        "shape": {
          "kind": "circle",
          "cx": 184,
          "cy": 150,
          "r": 4
        }
      },
      {
        "id": "beak-ow",
        "colorNumber": 10,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "polygon",
          "points": "140,180 160,180 150,200"
        }
      },
      {
        "id": "wing-l-ow",
        "colorNumber": 4,
        "label": [
          68,
          272
        ],
        "shape": {
          "kind": "path",
          "d": "M72,230 C48,242 30,268 35,302 C40,328 62,342 78,330 C94,318 92,288 88,258 Z"
        }
      },
      {
        "id": "wing-r-ow",
        "colorNumber": 4,
        "label": [
          232,
          272
        ],
        "shape": {
          "kind": "path",
          "d": "M228,230 C252,242 270,268 265,302 C260,328 238,342 222,330 C206,318 208,288 212,258 Z"
        }
      },
      {
        "id": "wing-feather-l",
        "colorNumber": 11,
        "label": [
          55,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M38,308 Q52,295 68,305 Q52,318 38,308 Z M38,325 Q52,312 68,322 Q52,335 38,325 Z"
        }
      },
      {
        "id": "wing-feather-r",
        "colorNumber": 11,
        "label": [
          245,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M232,308 Q248,295 262,305 Q248,318 232,308 Z M232,325 Q248,312 262,322 Q248,335 232,325 Z"
        }
      },
      {
        "id": "belly-marks",
        "colorNumber": 12,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M130,280 Q150,272 170,280 L168,290 Q150,283 132,290 Z M128,300 Q150,292 172,300 L170,310 Q150,303 130,310 Z"
        }
      },
      {
        "id": "talon-l",
        "colorNumber": 13,
        "label": [
          110,
          358
        ],
        "shape": {
          "kind": "path",
          "d": "M103,345 L98,360 L102,360 L107,345 Z M110,345 L106,360 L110,360 L114,345 Z M116,345 L113,360 L117,360 L120,345 Z"
        }
      },
      {
        "id": "talon-r",
        "colorNumber": 13,
        "label": [
          190,
          358
        ],
        "shape": {
          "kind": "path",
          "d": "M183,345 L178,360 L182,360 L187,345 Z M190,345 L186,360 L190,360 L194,345 Z M196,345 L193,360 L197,360 L200,345 Z"
        }
      },
      {
        "id": "moon-ow",
        "colorNumber": 14,
        "label": [
          258,
          52
        ],
        "shape": {
          "kind": "path",
          "d": "M244,35 C235,45 232,62 240,75 C252,65 258,47 252,33 C250,32 247,32 244,35 Z"
        }
      },
      {
        "id": "star-ow1",
        "colorNumber": 15,
        "label": [
          42,
          48
        ],
        "shape": {
          "kind": "path",
          "d": "M42,40 L44,34 L46,40 L52,40 L47,44 L49,50 L44,46 L39,50 L41,44 L36,40 Z"
        }
      },
      {
        "id": "star-ow2",
        "colorNumber": 15,
        "label": [
          175,
          32
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 32,
          "r": 4
        }
      },
      {
        "id": "star-ow3",
        "colorNumber": 15,
        "label": [
          125,
          22
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 22,
          "r": 3
        }
      },
      {
        "id": "glasses",
        "colorNumber": 16,
        "label": [
          166,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M96,148 Q122,138 148,148 L150,155 Q122,146 96,155 Z M152,148 Q178,138 204,148 L202,155 Q178,146 154,155 Z M148,148 L152,148 L152,151 L148,151 Z"
        }
      }
    ]
  },
  {
    "id": "frog",
    "name": "Happy Frog",
    "emoji": "🐸",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#4A90D9",
      "#228B22",
      "#4A90D9",
      "#2D7A2D",
      "#4CAF50",
      "#90EE90",
      "#FFD700",
      "#3D2B1F",
      "#FF4D4D",
      "#FF6B6B",
      "#FF8C00",
      "#2D8B2D",
      "#4444DD",
      "#88CCFF",
      "#FF6B9D"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-fr",
        "colorNumber": 2,
        "label": [
          150,
          358
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
        "id": "lily-pad",
        "colorNumber": 3,
        "label": [
          150,
          342
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 342,
          "r": 68
        }
      },
      {
        "id": "lily-slot",
        "colorNumber": 2,
        "label": [
          150,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M150,342 L150,308 L168,330 Z"
        }
      },
      {
        "id": "lily-vein1",
        "colorNumber": 4,
        "label": [
          118,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M150,342 L105,318 L108,322 Z"
        }
      },
      {
        "id": "lily-vein2",
        "colorNumber": 4,
        "label": [
          178,
          338
        ],
        "shape": {
          "kind": "path",
          "d": "M150,342 L195,322 L192,326 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 5,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 268,
          "rx": 88,
          "ry": 72
        }
      },
      {
        "id": "belly-fr",
        "colorNumber": 6,
        "label": [
          166,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 265,
          "rx": 58,
          "ry": 52
        }
      },
      {
        "id": "head",
        "colorNumber": 5,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 82,
          "ry": 68
        }
      },
      {
        "id": "eye-bump-l",
        "colorNumber": 5,
        "label": [
          92,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 138,
          "r": 28
        }
      },
      {
        "id": "eye-bump-r",
        "colorNumber": 5,
        "label": [
          208,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 208,
          "cy": 138,
          "r": 28
        }
      },
      {
        "id": "eye-fr-l",
        "colorNumber": 7,
        "label": [
          108,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 135,
          "r": 18
        }
      },
      {
        "id": "eye-fr-r",
        "colorNumber": 7,
        "label": [
          224,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 208,
          "cy": 135,
          "r": 18
        }
      },
      {
        "id": "pupil-fr-l",
        "colorNumber": 8,
        "label": [
          103,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 137,
          "r": 8
        }
      },
      {
        "id": "pupil-fr-r",
        "colorNumber": 8,
        "label": [
          219,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 208,
          "cy": 137,
          "r": 8
        }
      },
      {
        "id": "mouth-fr",
        "colorNumber": 9,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M95,198 Q150,228 205,198 L205,210 Q150,242 95,210 Z"
        }
      },
      {
        "id": "tongue-fr",
        "colorNumber": 10,
        "label": [
          150,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M122,215 Q150,245 178,215 L178,228 Q150,258 122,228 Z"
        }
      },
      {
        "id": "leg-fl-fr",
        "colorNumber": 5,
        "label": [
          68,
          328
        ],
        "shape": {
          "kind": "path",
          "d": "M62,310 C48,318 38,332 42,348 C46,362 62,365 72,355 C82,345 80,325 68,310 Z"
        }
      },
      {
        "id": "foot-fl",
        "colorNumber": 11,
        "label": [
          48,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M38,355 L30,368 L42,365 L48,355 L55,365 L65,368 L62,355 Z"
        }
      },
      {
        "id": "leg-fr-fr",
        "colorNumber": 5,
        "label": [
          232,
          328
        ],
        "shape": {
          "kind": "path",
          "d": "M238,310 C252,318 262,332 258,348 C254,362 238,365 228,355 C218,345 220,325 232,310 Z"
        }
      },
      {
        "id": "foot-fr",
        "colorNumber": 11,
        "label": [
          252,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M238,355 L232,368 L242,365 L248,355 L255,365 L268,368 L262,355 Z"
        }
      },
      {
        "id": "spot-fr1",
        "colorNumber": 12,
        "label": [
          115,
          252
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 255,
          "r": 12
        }
      },
      {
        "id": "spot-fr2",
        "colorNumber": 12,
        "label": [
          185,
          252
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 255,
          "r": 12
        }
      },
      {
        "id": "dragonfly-body",
        "colorNumber": 13,
        "label": [
          255,
          168
        ],
        "shape": {
          "kind": "rect",
          "x": 235,
          "y": 158,
          "w": 50,
          "h": 8,
          "rx": 3
        }
      },
      {
        "id": "dragonfly-wing",
        "colorNumber": 14,
        "label": [
          258,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M248,158 Q238,145 252,142 Q258,152 248,158 Z M268,158 Q278,145 265,142 Q259,152 268,158 Z"
        }
      },
      {
        "id": "flower-fr",
        "colorNumber": 15,
        "label": [
          42,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 42,
          "cy": 342,
          "r": 10
        }
      },
      {
        "id": "flower2-fr",
        "colorNumber": 15,
        "label": [
          262,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 262,
          "cy": 342,
          "r": 10
        }
      },
      {
        "id": "ripple1",
        "colorNumber": 16,
        "label": [
          71,
          368
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 55,
          "cy": 368,
          "rx": 20,
          "ry": 5
        }
      },
      {
        "id": "ripple2",
        "colorNumber": 16,
        "label": [
          266,
          368
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 368,
          "rx": 20,
          "ry": 5
        }
      }
    ]
  },
  {
    "id": "lion",
    "name": "Brave Lion",
    "emoji": "🦁",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#C8873A",
      "#E8A050",
      "#F5DEB3",
      "#4A2C0A",
      "#FF8080",
      "#8B5E3C",
      "#3D2B1F",
      "#E8A050",
      "#3D2B1F",
      "#FFD700",
      "#FFFFFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ground-li",
        "colorNumber": 2,
        "label": [
          150,
          388
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 352,
          "w": 300,
          "h": 48
        }
      },
      {
        "id": "grass-li",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,362 Q38,348 75,358 Q112,342 150,358 Q188,342 225,358 Q262,348 300,362 L300,375 L0,375 Z"
        }
      },
      {
        "id": "mane",
        "colorNumber": 4,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 188,
          "r": 112
        }
      },
      {
        "id": "face",
        "colorNumber": 5,
        "label": [
          168,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 172,
          "r": 78
        }
      },
      {
        "id": "muzzle-li",
        "colorNumber": 6,
        "label": [
          150,
          218
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 222,
          "rx": 45,
          "ry": 32
        }
      },
      {
        "id": "nose-li",
        "colorNumber": 7,
        "label": [
          150,
          202
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 204,
          "rx": 16,
          "ry": 11
        }
      },
      {
        "id": "mouth-li",
        "colorNumber": 8,
        "label": [
          166,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M128,222 Q150,240 172,222 L172,230 Q150,248 128,230 Z"
        }
      },
      {
        "id": "eye-li-l",
        "colorNumber": 9,
        "label": [
          112,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 165,
          "r": 18
        }
      },
      {
        "id": "eye-li-r",
        "colorNumber": 9,
        "label": [
          188,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 165,
          "r": 18
        }
      },
      {
        "id": "pupil-li-l",
        "colorNumber": 10,
        "label": [
          128,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 167,
          "r": 8
        }
      },
      {
        "id": "pupil-li-r",
        "colorNumber": 10,
        "label": [
          204,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 167,
          "r": 8
        }
      },
      {
        "id": "ear-li-l",
        "colorNumber": 5,
        "label": [
          72,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 120,
          "r": 22
        }
      },
      {
        "id": "ear-li-r",
        "colorNumber": 5,
        "label": [
          228,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 120,
          "r": 22
        }
      },
      {
        "id": "brow-li-l",
        "colorNumber": 4,
        "label": [
          112,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M92,152 Q112,140 132,150 L132,156 Q112,146 92,158 Z"
        }
      },
      {
        "id": "brow-li-r",
        "colorNumber": 4,
        "label": [
          188,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M168,150 Q188,140 208,152 L208,158 Q188,146 168,156 Z"
        }
      },
      {
        "id": "body-li",
        "colorNumber": 5,
        "label": [
          150,
          312
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 308,
          "rx": 95,
          "ry": 72
        }
      },
      {
        "id": "chest-li",
        "colorNumber": 6,
        "label": [
          166,
          308
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 302,
          "rx": 58,
          "ry": 48
        }
      },
      {
        "id": "paw-fl",
        "colorNumber": 5,
        "label": [
          85,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 355,
          "rx": 30,
          "ry": 18
        }
      },
      {
        "id": "paw-fr",
        "colorNumber": 5,
        "label": [
          215,
          360
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 212,
          "cy": 355,
          "rx": 30,
          "ry": 18
        }
      },
      {
        "id": "claws-fl",
        "colorNumber": 11,
        "label": [
          106,
          372
        ],
        "shape": {
          "kind": "path",
          "d": "M76,368 L73,376 L77,376 L80,368 Z M86,368 L84,376 L88,376 L90,368 Z M96,368 L97,376 L101,376 L100,368 Z"
        }
      },
      {
        "id": "claws-fr",
        "colorNumber": 11,
        "label": [
          230,
          372
        ],
        "shape": {
          "kind": "path",
          "d": "M200,368 L196,376 L200,376 L204,368 Z M210,368 L208,376 L212,376 L214,368 Z M220,368 L221,376 L225,376 L224,368 Z"
        }
      },
      {
        "id": "tail-li",
        "colorNumber": 5,
        "label": [
          255,
          308
        ],
        "shape": {
          "kind": "path",
          "d": "M235,330 C252,318 272,302 275,282 C278,265 265,260 255,270 C245,280 242,308 238,328 Z"
        }
      },
      {
        "id": "tail-tuft",
        "colorNumber": 4,
        "label": [
          272,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 272,
          "cy": 272,
          "r": 16
        }
      },
      {
        "id": "whisker-l",
        "colorNumber": 12,
        "label": [
          85,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M105,218 L65,213 L65,217 L105,222 Z M105,224 L62,226 L62,230 L105,228 Z M105,230 L68,236 L68,240 L105,234 Z"
        }
      },
      {
        "id": "whisker-r",
        "colorNumber": 12,
        "label": [
          215,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M195,218 L235,213 L235,217 L195,222 Z M195,224 L238,226 L238,230 L195,228 Z M195,230 L232,236 L232,240 L195,234 Z"
        }
      },
      {
        "id": "sun-li",
        "colorNumber": 13,
        "label": [
          265,
          42
        ],
        "shape": {
          "kind": "circle",
          "cx": 265,
          "cy": 42,
          "r": 24
        }
      },
      {
        "id": "cloud-li",
        "colorNumber": 14,
        "label": [
          52,
          42
        ],
        "shape": {
          "kind": "path",
          "d": "M12,54 Q20,36 40,44 Q48,26 68,36 Q82,26 88,42 Q100,32 98,56 Q76,70 12,66 Z"
        }
      }
    ]
  },
  {
    "id": "panda",
    "name": "Cute Panda",
    "emoji": "🐼",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#4CAF50",
      "#3D8B3D",
      "#FFFFFF",
      "#F5F5F5",
      "#2C2C2C",
      "#FFFFFF",
      "#3D2B1F",
      "#FF6B9D",
      "#FF8080",
      "#FFB3C6",
      "#4CAF50"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ground-pa",
        "colorNumber": 2,
        "label": [
          150,
          388
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 352,
          "w": 300,
          "h": 48
        }
      },
      {
        "id": "grass-pa",
        "colorNumber": 3,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,362 Q75,338 150,352 Q225,338 300,362 L300,375 L0,375 Z"
        }
      },
      {
        "id": "bamboo-l",
        "colorNumber": 4,
        "label": [
          38,
          188
        ],
        "shape": {
          "kind": "rect",
          "x": 28,
          "y": 72,
          "w": 18,
          "h": 285
        }
      },
      {
        "id": "bamboo-r",
        "colorNumber": 4,
        "label": [
          255,
          188
        ],
        "shape": {
          "kind": "rect",
          "x": 254,
          "y": 72,
          "w": 18,
          "h": 285
        }
      },
      {
        "id": "bam-joint-l1",
        "colorNumber": 5,
        "label": [
          38,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 26,
          "y": 125,
          "w": 22,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "bam-joint-l2",
        "colorNumber": 5,
        "label": [
          56,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 26,
          "y": 195,
          "w": 22,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "bam-joint-r1",
        "colorNumber": 5,
        "label": [
          255,
          130
        ],
        "shape": {
          "kind": "rect",
          "x": 252,
          "y": 125,
          "w": 22,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "bam-joint-r2",
        "colorNumber": 5,
        "label": [
          273,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 252,
          "y": 195,
          "w": 22,
          "h": 10,
          "rx": 2
        }
      },
      {
        "id": "body",
        "colorNumber": 6,
        "label": [
          150,
          298
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 295,
          "rx": 88,
          "ry": 82
        }
      },
      {
        "id": "belly-spot",
        "colorNumber": 7,
        "label": [
          166,
          295
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 292,
          "rx": 52,
          "ry": 55
        }
      },
      {
        "id": "head",
        "colorNumber": 6,
        "label": [
          150,
          172
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 80
        }
      },
      {
        "id": "ear-l-pa",
        "colorNumber": 8,
        "label": [
          82,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 85,
          "cy": 108,
          "r": 28
        }
      },
      {
        "id": "ear-r-pa",
        "colorNumber": 8,
        "label": [
          218,
          102
        ],
        "shape": {
          "kind": "circle",
          "cx": 215,
          "cy": 108,
          "r": 28
        }
      },
      {
        "id": "eye-patch-l",
        "colorNumber": 8,
        "label": [
          108,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 165,
          "rx": 30,
          "ry": 25
        }
      },
      {
        "id": "eye-patch-r",
        "colorNumber": 8,
        "label": [
          192,
          162
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 165,
          "rx": 30,
          "ry": 25
        }
      },
      {
        "id": "eye-pa-l",
        "colorNumber": 9,
        "label": [
          124,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 168,
          "r": 14
        }
      },
      {
        "id": "eye-pa-r",
        "colorNumber": 9,
        "label": [
          208,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 168,
          "r": 14
        }
      },
      {
        "id": "pupil-pa-l",
        "colorNumber": 10,
        "label": [
          119,
          179
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 170,
          "r": 6
        }
      },
      {
        "id": "pupil-pa-r",
        "colorNumber": 10,
        "label": [
          203,
          179
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 170,
          "r": 6
        }
      },
      {
        "id": "nose-pa",
        "colorNumber": 11,
        "label": [
          150,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 207,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "mouth-pa",
        "colorNumber": 12,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M138,215 Q150,228 162,215 L162,221 Q150,234 138,221 Z"
        }
      },
      {
        "id": "arm-l",
        "colorNumber": 8,
        "label": [
          65,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M70,265 C48,272 35,292 40,318 C45,338 65,345 78,335 C90,322 88,298 80,272 Z"
        }
      },
      {
        "id": "arm-r",
        "colorNumber": 8,
        "label": [
          235,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M230,265 C252,272 265,292 260,318 C255,338 235,345 222,335 C210,322 212,298 220,272 Z"
        }
      },
      {
        "id": "leg-pa-l",
        "colorNumber": 8,
        "label": [
          98,
          362
        ],
        "shape": {
          "kind": "rect",
          "x": 78,
          "y": 338,
          "w": 42,
          "h": 38,
          "rx": 10
        }
      },
      {
        "id": "leg-pa-r",
        "colorNumber": 8,
        "label": [
          202,
          362
        ],
        "shape": {
          "kind": "rect",
          "x": 180,
          "y": 338,
          "w": 42,
          "h": 38,
          "rx": 10
        }
      },
      {
        "id": "foot-pa-l",
        "colorNumber": 6,
        "label": [
          98,
          378
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 98,
          "cy": 378,
          "rx": 25,
          "ry": 14
        }
      },
      {
        "id": "foot-pa-r",
        "colorNumber": 6,
        "label": [
          202,
          378
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 202,
          "cy": 378,
          "rx": 25,
          "ry": 14
        }
      },
      {
        "id": "blush-pa-l",
        "colorNumber": 13,
        "label": [
          82,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 82,
          "cy": 218,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "blush-pa-r",
        "colorNumber": 13,
        "label": [
          218,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 218,
          "cy": 218,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "leaf-l",
        "colorNumber": 14,
        "label": [
          55,
          82
        ],
        "shape": {
          "kind": "path",
          "d": "M46,78 C38,60 52,42 66,48 C62,60 55,72 46,78 Z"
        }
      },
      {
        "id": "leaf-r",
        "colorNumber": 14,
        "label": [
          245,
          82
        ],
        "shape": {
          "kind": "path",
          "d": "M254,78 C262,60 248,42 234,48 C238,60 245,72 254,78 Z"
        }
      }
    ]
  },
  {
    "id": "crab",
    "name": "Snappy Crab",
    "emoji": "🦀",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#4A90D9",
      "#D4B896",
      "#3A8AC8",
      "#E84545",
      "#CC3333",
      "#FF8C00",
      "#FF6B42",
      "#FFFFFF",
      "#3D2B1F",
      "#E84545",
      "#CC3333",
      "#E84545",
      "#C83030",
      "#FF6347",
      "#D4B896"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 2,
        "label": [
          22,
          142
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 250
        }
      },
      {
        "id": "sand",
        "colorNumber": 3,
        "label": [
          150,
          375
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
        "id": "wave-cr",
        "colorNumber": 4,
        "label": [
          150,
          252
        ],
        "shape": {
          "kind": "path",
          "d": "M0,258 Q38,238 75,258 Q112,278 150,258 Q188,238 225,258 Q262,278 300,258 L300,278 Q262,298 225,278 Q188,258 150,278 Q112,298 75,278 Q38,258 0,278 Z"
        }
      },
      {
        "id": "body-cr",
        "colorNumber": 5,
        "label": [
          150,
          308
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 308,
          "rx": 88,
          "ry": 55
        }
      },
      {
        "id": "shell-pattern",
        "colorNumber": 6,
        "label": [
          166,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M108,305 Q150,295 192,305 Q192,315 150,318 Q108,315 108,305 Z"
        }
      },
      {
        "id": "shell-spots",
        "colorNumber": 7,
        "label": [
          134,
          304
        ],
        "shape": {
          "kind": "path",
          "d": "M128,298 Q142,292 158,298 Q158,304 142,306 Q128,304 128,298 Z M170,302 Q182,296 194,302 Q194,308 182,310 Q170,308 170,302 Z M108,302 Q118,296 130,302 Q130,308 118,310 Q108,308 108,302 Z"
        }
      },
      {
        "id": "head-cr",
        "colorNumber": 5,
        "label": [
          168,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 268,
          "rx": 55,
          "ry": 32
        }
      },
      {
        "id": "eye-stalk-l",
        "colorNumber": 8,
        "label": [
          122,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 118,
          "y": 235,
          "w": 8,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "eye-stalk-r",
        "colorNumber": 8,
        "label": [
          170,
          240
        ],
        "shape": {
          "kind": "rect",
          "x": 174,
          "y": 235,
          "w": 8,
          "h": 22,
          "rx": 3
        }
      },
      {
        "id": "eye-cr-l",
        "colorNumber": 9,
        "label": [
          138,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 233,
          "r": 12
        }
      },
      {
        "id": "eye-cr-r",
        "colorNumber": 9,
        "label": [
          194,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 233,
          "r": 12
        }
      },
      {
        "id": "pupil-cr-l",
        "colorNumber": 10,
        "label": [
          106,
          233
        ],
        "shape": {
          "kind": "circle",
          "cx": 122,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "pupil-cr-r",
        "colorNumber": 10,
        "label": [
          205,
          253
        ],
        "shape": {
          "kind": "circle",
          "cx": 178,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "claw-l-upper",
        "colorNumber": 11,
        "label": [
          48,
          272
        ],
        "shape": {
          "kind": "path",
          "d": "M75,280 C58,268 38,262 25,272 C18,280 22,295 38,300 C52,305 68,298 75,280 Z"
        }
      },
      {
        "id": "claw-l-lower",
        "colorNumber": 12,
        "label": [
          42,
          302
        ],
        "shape": {
          "kind": "path",
          "d": "M75,295 C62,305 45,308 32,300 C24,310 30,325 45,325 C60,325 72,312 75,295 Z"
        }
      },
      {
        "id": "claw-r-upper",
        "colorNumber": 11,
        "label": [
          252,
          272
        ],
        "shape": {
          "kind": "path",
          "d": "M225,280 C242,268 262,262 275,272 C282,280 278,295 262,300 C248,305 232,298 225,280 Z"
        }
      },
      {
        "id": "claw-r-lower",
        "colorNumber": 12,
        "label": [
          258,
          302
        ],
        "shape": {
          "kind": "path",
          "d": "M225,295 C238,305 255,308 268,300 C276,310 270,325 255,325 C240,325 228,312 225,295 Z"
        }
      },
      {
        "id": "arm-l",
        "colorNumber": 5,
        "label": [
          88,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M75,285 C80,278 90,272 100,278 L95,290 C88,285 80,282 75,285 Z"
        }
      },
      {
        "id": "arm-r",
        "colorNumber": 5,
        "label": [
          212,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M225,285 C220,278 210,272 200,278 L205,290 C212,285 220,282 225,285 Z"
        }
      },
      {
        "id": "leg-1l",
        "colorNumber": 8,
        "label": [
          105,
          338
        ],
        "shape": {
          "kind": "path",
          "d": "M108,315 L88,348 L94,352 L114,318 Z"
        }
      },
      {
        "id": "leg-2l",
        "colorNumber": 8,
        "label": [
          120,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M118,315 L105,352 L111,354 L124,318 Z"
        }
      },
      {
        "id": "leg-3l",
        "colorNumber": 8,
        "label": [
          135,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M128,315 L120,355 L126,356 L134,318 Z"
        }
      },
      {
        "id": "leg-1r",
        "colorNumber": 8,
        "label": [
          195,
          338
        ],
        "shape": {
          "kind": "path",
          "d": "M192,315 L212,348 L206,352 L186,318 Z"
        }
      },
      {
        "id": "leg-2r",
        "colorNumber": 8,
        "label": [
          180,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M182,315 L195,352 L189,354 L176,318 Z"
        }
      },
      {
        "id": "leg-3r",
        "colorNumber": 8,
        "label": [
          165,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M172,315 L180,355 L174,356 L166,318 Z"
        }
      },
      {
        "id": "mouth-cr",
        "colorNumber": 13,
        "label": [
          150,
          282
        ],
        "shape": {
          "kind": "path",
          "d": "M135,278 Q150,288 165,278 L165,284 Q150,295 135,284 Z"
        }
      },
      {
        "id": "bubble-cr1",
        "colorNumber": 14,
        "label": [
          55,
          188
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 190,
          "r": 10
        }
      },
      {
        "id": "bubble-cr2",
        "colorNumber": 14,
        "label": [
          38,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 38,
          "cy": 165,
          "r": 7
        }
      },
      {
        "id": "bubble-cr3",
        "colorNumber": 14,
        "label": [
          68,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 68,
          "cy": 147,
          "r": 6
        }
      },
      {
        "id": "starfish-cr",
        "colorNumber": 15,
        "label": [
          252,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M252,335 L255,343 L264,343 L257,348 L260,356 L252,350 L244,356 L247,348 L240,343 L249,343 Z"
        }
      },
      {
        "id": "sand-ripple",
        "colorNumber": 16,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M80,358 Q150,350 220,358 L220,362 Q150,354 80,362 Z M80,366 Q150,358 220,366 L220,370 Q150,362 80,370 Z"
        }
      }
    ]
  },
  {
    "id": "seaturtle",
    "name": "Sea Turtle",
    "emoji": "🐢",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#0284C7",
      "#FDE68A",
      "#F43F5E",
      "#FB923C",
      "#10B981",
      "#34D399",
      "#FEF9C3",
      "#0F172A",
      "#059669",
      "#047857",
      "#065F46",
      "#D97706"
    ],
    "regions": [
      {
        "id": "bg-ocean",
        "colorNumber": 1,
        "label": [
          25,
          25
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sand",
        "colorNumber": 2,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q75,340 150,355 Q225,370 300,345 L300,400 L0,400 Z"
        }
      },
      {
        "id": "coral-l",
        "colorNumber": 3,
        "label": [
          35,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M10,400 L10,340 Q25,320 35,345 Q45,310 60,335 Q75,320 85,360 L85,400 Z"
        }
      },
      {
        "id": "coral-r",
        "colorNumber": 4,
        "label": [
          265,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M215,400 L215,355 Q230,325 245,350 Q260,315 275,340 Q290,325 295,355 L295,400 Z"
        }
      },
      {
        "id": "seaweed-1",
        "colorNumber": 5,
        "label": [
          95,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M90,400 Q105,330 85,280 Q105,330 100,400 Z"
        }
      },
      {
        "id": "seaweed-2",
        "colorNumber": 5,
        "label": [
          205,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M200,400 Q215,330 195,275 Q215,330 210,400 Z"
        }
      },
      {
        "id": "flipper-fl",
        "colorNumber": 6,
        "label": [
          55,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M115,160 C80,130 25,120 15,145 C20,165 75,190 115,185 Z"
        }
      },
      {
        "id": "flipper-fr",
        "colorNumber": 6,
        "label": [
          245,
          135
        ],
        "shape": {
          "kind": "path",
          "d": "M185,160 C220,130 275,120 285,145 C280,165 225,190 185,185 Z"
        }
      },
      {
        "id": "flipper-bl",
        "colorNumber": 6,
        "label": [
          95,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M115,250 C95,265 80,295 95,305 C110,300 125,280 125,260 Z"
        }
      },
      {
        "id": "flipper-br",
        "colorNumber": 6,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M185,250 C205,265 220,295 205,305 C190,300 175,280 175,260 Z"
        }
      },
      {
        "id": "tail",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M142,275 Q150,305 158,275 Z"
        }
      },
      {
        "id": "neck",
        "colorNumber": 6,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M135,130 L135,105 L165,105 L165,130 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 6,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 80,
          "rx": 24,
          "ry": 28
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          138,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 8,
        "label": [
          138,
          89
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 75,
          "r": 2
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          162,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 75,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 8,
        "label": [
          176,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 75,
          "r": 2
        }
      },
      {
        "id": "beak",
        "colorNumber": 9,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M142,65 Q150,52 158,65 Z"
        }
      },
      {
        "id": "shell-rim",
        "colorNumber": 10,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 62,
          "ry": 76
        }
      },
      {
        "id": "shell-dome",
        "colorNumber": 11,
        "label": [
          164,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 205,
          "rx": 54,
          "ry": 68
        }
      },
      {
        "id": "scute-c1",
        "colorNumber": 12,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M150,140 L164,152 L164,168 L150,178 L136,168 L136,152 Z"
        }
      },
      {
        "id": "scute-c2",
        "colorNumber": 12,
        "label": [
          150,
          212
        ],
        "shape": {
          "kind": "path",
          "d": "M150,180 L166,192 L166,210 L150,222 L134,210 L134,192 Z"
        }
      },
      {
        "id": "scute-c3",
        "colorNumber": 12,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M150,224 L164,236 L164,254 L150,265 L136,254 L136,236 Z"
        }
      },
      {
        "id": "scute-l1",
        "colorNumber": 11,
        "label": [
          120,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M134,152 L134,174 L108,182 L102,160 Z"
        }
      },
      {
        "id": "scute-l2",
        "colorNumber": 11,
        "label": [
          116,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M132,188 L132,216 L104,225 L104,195 Z"
        }
      },
      {
        "id": "scute-l3",
        "colorNumber": 11,
        "label": [
          120,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M134,230 L134,256 L108,252 L106,232 Z"
        }
      },
      {
        "id": "scute-r1",
        "colorNumber": 11,
        "label": [
          180,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M166,152 L166,174 L192,182 L198,160 Z"
        }
      },
      {
        "id": "scute-r2",
        "colorNumber": 11,
        "label": [
          184,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M168,188 L168,216 L196,225 L196,195 Z"
        }
      },
      {
        "id": "scute-r3",
        "colorNumber": 11,
        "label": [
          180,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M166,230 L166,256 L192,252 L194,232 Z"
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 1,
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
        "id": "bubble-2",
        "colorNumber": 1,
        "label": [
          75,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 55,
          "r": 5
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 1,
        "label": [
          235,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 75,
          "r": 7
        }
      }
    ]
  },
  {
    "id": "flamingo",
    "name": "Pink Flamingo",
    "emoji": "🦩",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#4A90D9",
      "#2B6CB0",
      "#FF69B4",
      "#FF80BF",
      "#FF4499",
      "#2C2C2C",
      "#FF8C00",
      "#3D2B1F",
      "#2C2C2C",
      "#FF85B5",
      "#FF5599",
      "#FFB3C6",
      "#87CEEB",
      "#228B22",
      "#FFFFFF",
      "#FFD700",
      "#FF4488",
      "#FFB3C6",
      "#228B22"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-fl",
        "colorNumber": 2,
        "label": [
          150,
          358
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 310,
          "w": 300,
          "h": 90
        }
      },
      {
        "id": "water-deep",
        "colorNumber": 3,
        "label": [
          150,
          385
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
        "id": "body",
        "colorNumber": 4,
        "label": [
          162,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 205,
          "rx": 68,
          "ry": 52
        }
      },
      {
        "id": "wing-fl",
        "colorNumber": 5,
        "label": [
          162,
          222
        ],
        "shape": {
          "kind": "path",
          "d": "M112,215 C130,238 158,248 188,240 C205,235 215,222 210,208 C202,195 185,198 168,208 C150,218 132,218 112,215 Z"
        }
      },
      {
        "id": "wing-edge",
        "colorNumber": 6,
        "label": [
          150,
          238
        ],
        "shape": {
          "kind": "path",
          "d": "M115,220 C132,242 158,252 185,245 C170,248 148,245 128,235 Q118,228 115,220 Z"
        }
      },
      {
        "id": "neck",
        "colorNumber": 4,
        "label": [
          185,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M172,205 C175,185 185,162 192,142 C198,125 205,130 202,148 C198,168 188,188 178,205 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          210,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 122,
          "r": 32
        }
      },
      {
        "id": "beak-upper",
        "colorNumber": 7,
        "label": [
          235,
          122
        ],
        "shape": {
          "kind": "path",
          "d": "M228,118 C238,114 255,118 258,128 C250,130 236,126 228,118 Z"
        }
      },
      {
        "id": "beak-lower",
        "colorNumber": 8,
        "label": [
          256,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M228,125 C238,122 255,126 258,136 C248,140 235,135 228,125 Z"
        }
      },
      {
        "id": "eye-fl",
        "colorNumber": 9,
        "label": [
          209,
          101
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 115,
          "r": 10
        }
      },
      {
        "id": "pupil-fl",
        "colorNumber": 10,
        "label": [
          236,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 117,
          "r": 4
        }
      },
      {
        "id": "leg-fl-1",
        "colorNumber": 11,
        "label": [
          155,
          308
        ],
        "shape": {
          "kind": "path",
          "d": "M150,258 C148,280 148,302 150,325 C154,322 154,298 152,275 Z"
        }
      },
      {
        "id": "leg-fl-2",
        "colorNumber": 11,
        "label": [
          178,
          308
        ],
        "shape": {
          "kind": "path",
          "d": "M175,255 C178,278 182,300 178,325 C174,322 170,298 172,272 Z"
        }
      },
      {
        "id": "knee-bend",
        "colorNumber": 11,
        "label": [
          175,
          282
        ],
        "shape": {
          "kind": "circle",
          "cx": 176,
          "cy": 284,
          "r": 8
        }
      },
      {
        "id": "foot-fl",
        "colorNumber": 12,
        "label": [
          145,
          332
        ],
        "shape": {
          "kind": "path",
          "d": "M140,325 L128,335 L135,337 L145,328 L152,338 L160,340 L155,325 Z"
        }
      },
      {
        "id": "reflection",
        "colorNumber": 13,
        "label": [
          165,
          338
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 340,
          "rx": 48,
          "ry": 18
        }
      },
      {
        "id": "ripple-fl1",
        "colorNumber": 14,
        "label": [
          166,
          362
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 362,
          "rx": 65,
          "ry": 9
        }
      },
      {
        "id": "ripple-fl2",
        "colorNumber": 14,
        "label": [
          166,
          378
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 378,
          "rx": 45,
          "ry": 7
        }
      },
      {
        "id": "water-plant1",
        "colorNumber": 15,
        "label": [
          42,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M38,335 Q30,318 38,305 Q46,318 44,330 Z M44,328 Q52,312 60,320 Q55,330 44,328 Z"
        }
      },
      {
        "id": "water-plant2",
        "colorNumber": 15,
        "label": [
          258,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M262,335 Q254,318 262,305 Q270,318 268,330 Z M268,328 Q276,312 284,320 Q279,330 268,328 Z"
        }
      },
      {
        "id": "cloud-fl1",
        "colorNumber": 16,
        "label": [
          52,
          72
        ],
        "shape": {
          "kind": "path",
          "d": "M12,85 Q20,67 42,75 Q50,57 70,68 Q84,57 90,74 Q102,64 100,88 Q78,102 12,98 Z"
        }
      },
      {
        "id": "cloud-fl2",
        "colorNumber": 16,
        "label": [
          255,
          55
        ],
        "shape": {
          "kind": "path",
          "d": "M222,68 Q230,50 252,58 Q260,40 280,52 Q294,40 298,58 Q310,47 308,72 Q287,85 222,82 Z"
        }
      },
      {
        "id": "sun-fl",
        "colorNumber": 17,
        "label": [
          152,
          48
        ],
        "shape": {
          "kind": "circle",
          "cx": 152,
          "cy": 48,
          "r": 26
        }
      },
      {
        "id": "tail-fl",
        "colorNumber": 4,
        "label": [
          112,
          198
        ],
        "shape": {
          "kind": "path",
          "d": "M115,215 C98,205 82,192 78,178 C75,165 85,158 95,168 C105,178 112,198 115,215 Z"
        }
      },
      {
        "id": "crest",
        "colorNumber": 18,
        "label": [
          228,
          88
        ],
        "shape": {
          "kind": "path",
          "d": "M205,108 C202,92 205,78 212,68 C218,80 218,95 212,108 Z"
        }
      },
      {
        "id": "breast-patch",
        "colorNumber": 19,
        "label": [
          152,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 188,
          "rx": 30,
          "ry": 22
        }
      },
      {
        "id": "lily-pad-fl",
        "colorNumber": 20,
        "label": [
          73,
          328
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 330,
          "r": 18
        }
      }
    ]
  },
  {
    "id": "tropicalfish",
    "name": "Tropical Fish",
    "emoji": "🐠",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#4A90D9",
      "#2B6CB0",
      "#D4B896",
      "#C8A882",
      "#FF6B42",
      "#FF8C5A",
      "#FFFFFF",
      "#FFD9B0",
      "#FF4500",
      "#FF8C00",
      "#FFFFFF",
      "#3D2B1F",
      "#FFFFFF",
      "#FF6B42",
      "#FFD700",
      "#FF6B6B",
      "#CC3333",
      "#228B22",
      "#B0E0FF",
      "#FF6347",
      "#87CEEB"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-tf",
        "colorNumber": 2,
        "label": [
          150,
          202
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sand-tf",
        "colorNumber": 3,
        "label": [
          150,
          378
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
        "id": "seabed",
        "colorNumber": 4,
        "label": [
          150,
          358
        ],
        "shape": {
          "kind": "path",
          "d": "M0,360 Q75,335 150,350 Q225,335 300,360 L300,378 L0,378 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 5,
        "label": [
          164,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M242,205 C222,162 172,148 132,158 C92,168 62,195 68,232 C74,268 110,285 152,278 C194,270 228,248 242,205 Z"
        }
      },
      {
        "id": "tail-tf",
        "colorNumber": 6,
        "label": [
          268,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M242,205 L278,172 L290,205 L278,238 Z"
        }
      },
      {
        "id": "stripe1",
        "colorNumber": 7,
        "label": [
          210,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M198,165 C208,168 215,185 212,205 C210,225 202,242 195,248 C188,238 186,218 190,198 Q194,178 198,165 Z"
        }
      },
      {
        "id": "stripe2",
        "colorNumber": 7,
        "label": [
          188,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M162,162 C172,165 178,182 175,205 C172,228 164,245 157,252 C150,242 148,222 152,200 Q156,178 162,162 Z"
        }
      },
      {
        "id": "stripe3",
        "colorNumber": 7,
        "label": [
          135,
          218
        ],
        "shape": {
          "kind": "path",
          "d": "M128,168 C138,170 142,186 140,210 C138,232 130,248 122,255 C115,245 114,225 118,205 Q122,182 128,168 Z"
        }
      },
      {
        "id": "belly-tf",
        "colorNumber": 8,
        "label": [
          148,
          252
        ],
        "shape": {
          "kind": "path",
          "d": "M75,235 C85,262 115,278 150,275 C185,272 218,252 228,232 C210,244 178,255 150,258 C122,260 95,252 75,235 Z"
        }
      },
      {
        "id": "fin-top1",
        "colorNumber": 9,
        "label": [
          172,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M155,162 C162,142 182,135 195,152 C182,158 168,160 155,162 Z"
        }
      },
      {
        "id": "fin-top2",
        "colorNumber": 10,
        "label": [
          130,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M118,165 C125,145 148,140 158,155 C145,160 132,162 118,165 Z"
        }
      },
      {
        "id": "fin-bot",
        "colorNumber": 9,
        "label": [
          145,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M135,272 C145,292 172,296 185,278 C172,275 155,272 135,272 Z"
        }
      },
      {
        "id": "eye-tf",
        "colorNumber": 11,
        "label": [
          98,
          192
        ],
        "shape": {
          "kind": "circle",
          "cx": 98,
          "cy": 195,
          "r": 18
        }
      },
      {
        "id": "pupil-tf",
        "colorNumber": 12,
        "label": [
          114,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 98,
          "cy": 197,
          "r": 8
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 13,
        "label": [
          84,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 104,
          "cy": 190,
          "r": 4
        }
      },
      {
        "id": "mouth-tf",
        "colorNumber": 14,
        "label": [
          72,
          218
        ],
        "shape": {
          "kind": "path",
          "d": "M65,212 Q72,225 80,215 L80,221 Q72,232 65,218 Z"
        }
      },
      {
        "id": "scale-a",
        "colorNumber": 15,
        "label": [
          190,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M185,186 Q196,178 207,186 Q204,196 196,196 Q188,196 185,186 Z"
        }
      },
      {
        "id": "scale-b",
        "colorNumber": 15,
        "label": [
          168,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M148,191 Q158,183 168,191 Q165,201 158,201 Q150,201 148,191 Z"
        }
      },
      {
        "id": "scale-c",
        "colorNumber": 15,
        "label": [
          186,
          226
        ],
        "shape": {
          "kind": "path",
          "d": "M170,211 Q180,203 190,211 Q187,221 180,221 Q172,221 170,211 Z"
        }
      },
      {
        "id": "coral-tf1",
        "colorNumber": 16,
        "label": [
          42,
          342
        ],
        "shape": {
          "kind": "path",
          "d": "M35,355 L38,328 Q42,315 48,322 Q50,332 46,345 L54,330 Q58,315 64,322 Q66,338 58,355 Z"
        }
      },
      {
        "id": "coral-tf2",
        "colorNumber": 17,
        "label": [
          258,
          342
        ],
        "shape": {
          "kind": "path",
          "d": "M252,355 L254,328 Q258,315 264,322 Q266,332 262,345 L270,330 Q274,315 280,322 Q282,338 275,355 Z"
        }
      },
      {
        "id": "seaweed-tf",
        "colorNumber": 18,
        "label": [
          222,
          342
        ],
        "shape": {
          "kind": "path",
          "d": "M220,355 Q214,338 220,325 Q226,312 220,298 Q226,294 230,302 Q224,316 228,330 Q232,344 226,355 Z"
        }
      },
      {
        "id": "bubble-tf1",
        "colorNumber": 19,
        "label": [
          42,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 42,
          "cy": 178,
          "r": 12
        }
      },
      {
        "id": "bubble-tf2",
        "colorNumber": 19,
        "label": [
          25,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 150,
          "r": 8
        }
      },
      {
        "id": "bubble-tf3",
        "colorNumber": 19,
        "label": [
          55,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 135,
          "r": 6
        }
      },
      {
        "id": "starfish-tf",
        "colorNumber": 20,
        "label": [
          245,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M245,350 L248,358 L257,358 L250,363 L253,372 L245,366 L237,372 L240,363 L233,358 L242,358 Z"
        }
      },
      {
        "id": "gem",
        "colorNumber": 21,
        "label": [
          105,
          368
        ],
        "shape": {
          "kind": "path",
          "d": "M100,358 L110,358 L115,368 L110,378 L100,378 L95,368 Z"
        }
      }
    ]
  },
  {
    "id": "bee",
    "name": "Cartoon Bee",
    "emoji": "🐝",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#FFD700",
      "#2C2C2C",
      "#FFFFFF",
      "#3D2B1F",
      "#FF4757",
      "#DDEEFF"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "body",
        "colorNumber": 2,
        "label": [
          150,
          248
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 248,
          "rx": 62,
          "ry": 90
        }
      },
      {
        "id": "stripe1",
        "colorNumber": 3,
        "label": [
          150,
          208
        ],
        "shape": {
          "kind": "path",
          "d": "M90,200 Q150,190 210,200 L210,220 Q150,210 90,220 Z"
        }
      },
      {
        "id": "stripe2",
        "colorNumber": 3,
        "label": [
          166,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M88,235 Q150,225 212,235 L212,255 Q150,245 88,255 Z"
        }
      },
      {
        "id": "stripe3",
        "colorNumber": 3,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M90,270 Q150,260 210,270 L210,290 Q150,280 90,290 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 2,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 145,
          "r": 48
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 4,
        "label": [
          125,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 138,
          "r": 14
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 4,
        "label": [
          175,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 138,
          "r": 14
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          125,
          154
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 138,
          "r": 7
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          191,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 138,
          "r": 7
        }
      },
      {
        "id": "smile",
        "colorNumber": 5,
        "label": [
          150,
          162
        ],
        "shape": {
          "kind": "path",
          "d": "M132,155 Q150,172 168,155 L168,161 Q150,180 132,161 Z"
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 3,
        "label": [
          122,
          92
        ],
        "shape": {
          "kind": "path",
          "d": "M134,100 C128,82 118,68 110,58 C108,55 105,57 107,60 C114,70 122,84 128,100 Z"
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 3,
        "label": [
          178,
          92
        ],
        "shape": {
          "kind": "path",
          "d": "M166,100 C172,82 182,68 190,58 C192,55 195,57 193,60 C186,70 178,84 172,100 Z"
        }
      },
      {
        "id": "ball-l",
        "colorNumber": 6,
        "label": [
          108,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 55,
          "r": 9
        }
      },
      {
        "id": "ball-r",
        "colorNumber": 6,
        "label": [
          192,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 55,
          "r": 9
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 7,
        "label": [
          78,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 70,
          "cy": 185,
          "rx": 38,
          "ry": 22
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 7,
        "label": [
          222,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 230,
          "cy": 185,
          "rx": 38,
          "ry": 22
        }
      },
      {
        "id": "stinger",
        "colorNumber": 3,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M140,335 Q150,360 160,335 L156,335 Q150,350 144,335 Z"
        }
      },
      {
        "id": "env-leaf-18",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-19",
        "colorNumber": 5,
        "label": [
          166,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 355,
          "r": 6
        }
      },
      {
        "id": "env-spark-20",
        "colorNumber": 7,
        "label": [
          10,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M5,200.00000000000003 L10,192.00000000000003 L15,200.00000000000003 L10,208.00000000000003 Z"
        }
      },
      {
        "id": "env-leaf-21",
        "colorNumber": 5,
        "label": [
          150,
          60
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 60,
          "rx": 14,
          "ry": 8
        }
      }
    ]
  },
  {
    "id": "babychick",
    "name": "Baby Chick",
    "emoji": "🐥",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#FFD700",
      "#F5BE00",
      "#FFFFFF",
      "#3D2B1F",
      "#FF8C00",
      "#FFB3C6",
      "#FFD700"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
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
        "id": "grass",
        "colorNumber": 3,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,345 150,355 Q225,345 300,365 L300,378 L0,378 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          150,
          282
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 282,
          "rx": 88,
          "ry": 78
        }
      },
      {
        "id": "head",
        "colorNumber": 4,
        "label": [
          150,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 168,
          "r": 72
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 5,
        "label": [
          68,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M68,260 C45,268 35,290 45,315 C55,335 78,342 98,332 C85,330 72,318 72,302 C72,288 78,278 88,272 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 5,
        "label": [
          232,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M232,260 C255,268 265,290 255,315 C245,335 222,342 202,332 C215,330 228,318 228,302 C228,288 222,278 212,272 Z"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          118,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 158,
          "r": 16
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          182,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 158,
          "r": 16
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 7,
        "label": [
          134,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 158,
          "r": 7
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 7,
        "label": [
          198,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 158,
          "r": 7
        }
      },
      {
        "id": "beak",
        "colorNumber": 8,
        "label": [
          150,
          192
        ],
        "shape": {
          "kind": "path",
          "d": "M135,185 L165,185 L150,210 Z"
        }
      },
      {
        "id": "cheek-l",
        "colorNumber": 9,
        "label": [
          95,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 192,
          "rx": 20,
          "ry": 14
        }
      },
      {
        "id": "cheek-r",
        "colorNumber": 9,
        "label": [
          205,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 192,
          "rx": 20,
          "ry": 14
        }
      },
      {
        "id": "tuft",
        "colorNumber": 4,
        "label": [
          150,
          92
        ],
        "shape": {
          "kind": "path",
          "d": "M140,100 Q148,75 150,60 Q152,75 160,100 Z"
        }
      },
      {
        "id": "sun",
        "colorNumber": 10,
        "label": [
          258,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 258,
          "cy": 45,
          "r": 26
        }
      },
      {
        "id": "env-leaf-16",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-17",
        "colorNumber": 5,
        "label": [
          213,
          334
        ],
        "shape": {
          "kind": "circle",
          "cx": 213,
          "cy": 334,
          "r": 6
        }
      },
      {
        "id": "env-spark-18",
        "colorNumber": 7,
        "label": [
          80,
          347
        ],
        "shape": {
          "kind": "path",
          "d": "M75.00000000000003,347.2243186433546 L80.00000000000003,339.2243186433546 L85.00000000000003,347.2243186433546 L80.00000000000003,355.2243186433546 Z"
        }
      },
      {
        "id": "env-leaf-19",
        "colorNumber": 5,
        "label": [
          40,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 40,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-20",
        "colorNumber": 4,
        "label": [
          87,
          66
        ],
        "shape": {
          "kind": "circle",
          "cx": 87,
          "cy": 66,
          "r": 6
        }
      },
      {
        "id": "env-spark-21",
        "colorNumber": 7,
        "label": [
          220,
          53
        ],
        "shape": {
          "kind": "path",
          "d": "M215,52.775681356645435 L220,44.775681356645435 L225,52.775681356645435 L220,60.775681356645435 Z"
        }
      }
    ]
  },
  {
    "id": "fish2",
    "name": "Simple Fish",
    "emoji": "🐡",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#4A90D9",
      "#3A8AC8",
      "#FF8C42",
      "#FF6B20",
      "#FFD9B0",
      "#FFFFFF",
      "#3D2B1F",
      "#FF6B20",
      "#B0E0FF",
      "#FF6B6B"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 2,
        "label": [
          150,
          385
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
        "id": "waves",
        "colorNumber": 3,
        "label": [
          150,
          348
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q50,335 100,348 Q150,360 200,348 Q250,335 300,348 L300,362 Q250,348 200,362 Q150,375 100,362 Q50,348 0,362 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          155,
          202
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 202,
          "rx": 95,
          "ry": 60
        }
      },
      {
        "id": "tail",
        "colorNumber": 5,
        "label": [
          268,
          202
        ],
        "shape": {
          "kind": "path",
          "d": "M250,202 L282,170 L295,202 L282,234 Z"
        }
      },
      {
        "id": "belly",
        "colorNumber": 6,
        "label": [
          155,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M70,225 C90,255 125,268 155,265 C185,262 218,248 235,225 C215,238 185,248 155,248 C125,248 95,242 70,225 Z"
        }
      },
      {
        "id": "eye",
        "colorNumber": 7,
        "label": [
          80,
          192
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 192,
          "r": 18
        }
      },
      {
        "id": "pupil",
        "colorNumber": 8,
        "label": [
          96,
          192
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 192,
          "r": 8
        }
      },
      {
        "id": "fin-top",
        "colorNumber": 5,
        "label": [
          160,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M135,148 C145,125 175,118 195,142 C180,148 158,148 135,148 Z"
        }
      },
      {
        "id": "fin-bot",
        "colorNumber": 5,
        "label": [
          165,
          262
        ],
        "shape": {
          "kind": "path",
          "d": "M138,258 C148,278 178,285 198,262 C182,262 160,260 138,258 Z"
        }
      },
      {
        "id": "stripe1",
        "colorNumber": 9,
        "label": [
          171,
          202
        ],
        "shape": {
          "kind": "path",
          "d": "M152,145 L148,258 L155,258 L159,145 Z"
        }
      },
      {
        "id": "stripe2",
        "colorNumber": 9,
        "label": [
          195,
          202
        ],
        "shape": {
          "kind": "path",
          "d": "M192,148 L188,255 L195,255 L199,148 Z"
        }
      },
      {
        "id": "bubble1",
        "colorNumber": 10,
        "label": [
          45,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "bubble2",
        "colorNumber": 10,
        "label": [
          25,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 25,
          "cy": 120,
          "r": 8
        }
      },
      {
        "id": "coral",
        "colorNumber": 11,
        "label": [
          262,
          318
        ],
        "shape": {
          "kind": "path",
          "d": "M258,340 L262,312 Q266,300 270,308 Q274,318 268,332 L278,315 Q282,302 286,310 Q290,328 282,340 Z"
        }
      },
      {
        "id": "env-leaf-15",
        "colorNumber": 2,
        "label": [
          260,
          216
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-16",
        "colorNumber": 5,
        "label": [
          228,
          321
        ],
        "shape": {
          "kind": "circle",
          "cx": 228,
          "cy": 321,
          "r": 6
        }
      },
      {
        "id": "env-spark-17",
        "colorNumber": 7,
        "label": [
          119,
          366
        ],
        "shape": {
          "kind": "path",
          "d": "M113.84706924611599,365.73774507091 L118.84706924611599,357.73774507091 L123.84706924611599,365.73774507091 L118.84706924611599,373.73774507091 Z"
        }
      },
      {
        "id": "env-leaf-18",
        "colorNumber": 5,
        "label": [
          51,
          261
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 51,
          "cy": 261,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-19",
        "colorNumber": 4,
        "label": [
          53,
          133
        ],
        "shape": {
          "kind": "circle",
          "cx": 37,
          "cy": 133,
          "r": 6
        }
      },
      {
        "id": "env-spark-20",
        "colorNumber": 7,
        "label": [
          119,
          34
        ],
        "shape": {
          "kind": "path",
          "d": "M113.84706924611595,34.26225492908998 L118.84706924611595,26.262254929089977 L123.84706924611595,34.26225492908998 L118.84706924611595,42.26225492908998 Z"
        }
      },
      {
        "id": "env-leaf-21",
        "colorNumber": 3,
        "label": [
          219,
          91
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 219,
          "cy": 91,
          "rx": 14,
          "ry": 8
        }
      }
    ]
  },
  {
    "id": "shark",
    "name": "Shark",
    "emoji": "🦈",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#4A90D9",
      "#3A8AC8",
      "#6E7E9B",
      "#F0F0F0",
      "#FFFFFF",
      "#3D2B1F",
      "#FF8080",
      "#888888",
      "#5A6B8A"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 2,
        "label": [
          150,
          385
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
        "id": "waves",
        "colorNumber": 3,
        "label": [
          150,
          338
        ],
        "shape": {
          "kind": "path",
          "d": "M0,340 Q38,325 75,338 Q112,350 150,338 Q188,325 225,338 Q262,350 300,338 L300,352 Q262,364 225,352 Q188,340 150,352 Q112,364 75,352 Q38,340 0,352 Z"
        }
      },
      {
        "id": "body",
        "colorNumber": 4,
        "label": [
          148,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M28,268 C28,225 60,185 105,172 C135,162 168,162 198,172 C243,185 272,225 272,268 C272,295 258,315 240,328 L60,328 C42,315 28,295 28,268 Z"
        }
      },
      {
        "id": "belly",
        "colorNumber": 5,
        "label": [
          150,
          302
        ],
        "shape": {
          "kind": "path",
          "d": "M62,328 C80,310 115,298 150,298 C185,298 220,310 238,328 Z"
        }
      },
      {
        "id": "dorsal-fin",
        "colorNumber": 4,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M135,175 L150,90 L165,175 Z"
        }
      },
      {
        "id": "pect-l",
        "colorNumber": 4,
        "label": [
          72,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M90,268 C75,252 50,248 35,262 C45,278 68,282 90,278 Z"
        }
      },
      {
        "id": "pect-r",
        "colorNumber": 4,
        "label": [
          228,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M210,268 C225,252 250,248 265,262 C255,278 232,282 210,278 Z"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          100,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 232,
          "r": 14
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 7,
        "label": [
          116,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 232,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          200,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 232,
          "r": 14
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 7,
        "label": [
          216,
          232
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 232,
          "r": 6
        }
      },
      {
        "id": "mouth",
        "colorNumber": 8,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M105,278 Q150,305 195,278 L195,286 Q150,318 105,286 Z"
        }
      },
      {
        "id": "teeth-top",
        "colorNumber": 5,
        "label": [
          166,
          282
        ],
        "shape": {
          "kind": "path",
          "d": "M110,280 L125,295 L140,280 L155,295 L170,280 L185,295 L190,280 Z"
        }
      },
      {
        "id": "gill1",
        "colorNumber": 9,
        "label": [
          118,
          262
        ],
        "shape": {
          "kind": "path",
          "d": "M115,250 C112,258 112,268 118,275 C122,268 122,258 115,250 Z"
        }
      },
      {
        "id": "gill2",
        "colorNumber": 9,
        "label": [
          132,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M129,246 C126,254 126,264 132,272 C136,264 136,254 129,246 Z"
        }
      },
      {
        "id": "stripe",
        "colorNumber": 10,
        "label": [
          150,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M70,215 Q150,205 230,215 L230,225 Q150,215 70,225 Z"
        }
      },
      {
        "id": "env-leaf-17",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-18",
        "colorNumber": 5,
        "label": [
          189,
          347
        ],
        "shape": {
          "kind": "circle",
          "cx": 189,
          "cy": 347,
          "r": 6
        }
      },
      {
        "id": "env-spark-19",
        "colorNumber": 7,
        "label": [
          37,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M31.737620787507367,299.9234928897205 L36.73762078750737,291.9234928897205 L41.73762078750737,299.9234928897205 L36.73762078750737,307.9234928897205 Z"
        }
      },
      {
        "id": "env-leaf-20",
        "colorNumber": 5,
        "label": [
          61,
          118
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 61,
          "cy": 118,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-21",
        "colorNumber": 4,
        "label": [
          189,
          53
        ],
        "shape": {
          "kind": "circle",
          "cx": 189,
          "cy": 53,
          "r": 6
        }
      }
    ]
  },
  {
    "id": "snail",
    "name": "Snail",
    "emoji": "🐌",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#C8873A",
      "#E8A050",
      "#D4782A",
      "#8B5E3C",
      "#F5DEB3",
      "#FFFFFF",
      "#3D2B1F",
      "#D4A017",
      "#FF8080",
      "#D4C090"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
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
        "id": "grass",
        "colorNumber": 3,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,345 150,355 Q225,345 300,365 L300,378 L0,378 Z"
        }
      },
      {
        "id": "shell",
        "colorNumber": 4,
        "label": [
          175,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 215,
          "r": 90
        }
      },
      {
        "id": "shell-s1",
        "colorNumber": 5,
        "label": [
          175,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M175,215 C155,185 152,155 175,138 C198,155 195,185 175,215 Z"
        }
      },
      {
        "id": "shell-s2",
        "colorNumber": 6,
        "label": [
          228,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M175,215 C205,198 228,175 225,148 C248,162 252,195 235,218 Z"
        }
      },
      {
        "id": "shell-s3",
        "colorNumber": 5,
        "label": [
          240,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M175,215 C208,225 238,248 235,278 C215,288 195,275 175,255 Z"
        }
      },
      {
        "id": "shell-s4",
        "colorNumber": 6,
        "label": [
          160,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M175,215 C162,245 148,268 120,275 C108,258 118,232 135,218 Z"
        }
      },
      {
        "id": "shell-center",
        "colorNumber": 7,
        "label": [
          191,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 215,
          "r": 30
        }
      },
      {
        "id": "body",
        "colorNumber": 8,
        "label": [
          95,
          298
        ],
        "shape": {
          "kind": "path",
          "d": "M55,280 C55,262 68,250 88,248 L155,248 C168,250 178,262 178,280 C178,298 168,310 155,312 L88,312 C68,310 55,298 55,280 Z"
        }
      },
      {
        "id": "head",
        "colorNumber": 8,
        "label": [
          68,
          262
        ],
        "shape": {
          "kind": "circle",
          "cx": 68,
          "cy": 265,
          "r": 28
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 9,
        "label": [
          58,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 58,
          "cy": 248,
          "r": 10
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 9,
        "label": [
          80,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 245,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 10,
        "label": [
          42,
          248
        ],
        "shape": {
          "kind": "circle",
          "cx": 58,
          "cy": 248,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 10,
        "label": [
          96,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 245,
          "r": 5
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 11,
        "label": [
          55,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M58,248 C54,235 52,220 52,210 C56,208 60,210 60,215 C60,225 60,238 58,248 Z"
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 11,
        "label": [
          78,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M80,245 C78,232 78,218 80,208 C84,206 88,208 88,213 C86,222 84,235 80,245 Z"
        }
      },
      {
        "id": "mouth",
        "colorNumber": 12,
        "label": [
          68,
          278
        ],
        "shape": {
          "kind": "path",
          "d": "M56,272 Q68,284 80,272 L80,277 Q68,290 56,277 Z"
        }
      },
      {
        "id": "foot",
        "colorNumber": 13,
        "label": [
          105,
          318
        ],
        "shape": {
          "kind": "path",
          "d": "M55,312 Q115,330 178,312 L185,330 Q115,348 48,330 Z"
        }
      },
      {
        "id": "env-leaf-19",
        "colorNumber": 2,
        "label": [
          260,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 260,
          "cy": 200,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "env-flower-20",
        "colorNumber": 5,
        "label": [
          88,
          334
        ],
        "shape": {
          "kind": "circle",
          "cx": 88,
          "cy": 334,
          "r": 6
        }
      },
      {
        "id": "env-spark-21",
        "colorNumber": 7,
        "label": [
          80,
          53
        ],
        "shape": {
          "kind": "path",
          "d": "M74.99999999999994,52.775681356645464 L79.99999999999994,44.775681356645464 L84.99999999999994,52.775681356645464 L79.99999999999994,60.775681356645464 Z"
        }
      }
    ]
  },
  {
    "id": "ladybug",
    "name": "Ladybug",
    "emoji": "🐞",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#8B6914",
      "#4CAF50",
      "#E63232",
      "#1A1A1A",
      "#1A1A1A",
      "#FFFFFF",
      "#3D2B1F",
      "#FF6B9D"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
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
        "id": "grass",
        "colorNumber": 3,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,345 150,355 Q225,345 300,365 L300,378 L0,378 Z"
        }
      },
      {
        "id": "wing-l",
        "colorNumber": 4,
        "label": [
          100,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M150,165 C120,165 85,185 70,220 C55,255 62,295 88,318 C108,335 135,342 150,342 L150,165 Z"
        }
      },
      {
        "id": "wing-r",
        "colorNumber": 4,
        "label": [
          200,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M150,165 C180,165 215,185 230,220 C245,255 238,295 212,318 C192,335 165,342 150,342 L150,165 Z"
        }
      },
      {
        "id": "center-line",
        "colorNumber": 5,
        "label": [
          150,
          262
        ],
        "shape": {
          "kind": "rect",
          "x": 146,
          "y": 165,
          "w": 8,
          "h": 177
        }
      },
      {
        "id": "dot1-l",
        "colorNumber": 5,
        "label": [
          105,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 215,
          "r": 22
        }
      },
      {
        "id": "dot2-l",
        "colorNumber": 5,
        "label": [
          92,
          278
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 278,
          "r": 18
        }
      },
      {
        "id": "dot3-l",
        "colorNumber": 5,
        "label": [
          115,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 330,
          "r": 15
        }
      },
      {
        "id": "dot1-r",
        "colorNumber": 5,
        "label": [
          195,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 215,
          "r": 22
        }
      },
      {
        "id": "dot2-r",
        "colorNumber": 5,
        "label": [
          208,
          278
        ],
        "shape": {
          "kind": "circle",
          "cx": 208,
          "cy": 278,
          "r": 18
        }
      },
      {
        "id": "dot3-r",
        "colorNumber": 5,
        "label": [
          185,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 330,
          "r": 15
        }
      },
      {
        "id": "head",
        "colorNumber": 6,
        "label": [
          150,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 142,
          "r": 42
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          128,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 132,
          "r": 14
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          172,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 132,
          "r": 14
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 8,
        "label": [
          128,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 132,
          "r": 6
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 8,
        "label": [
          188,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 132,
          "r": 6
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 6,
        "label": [
          125,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M134,108 C128,90 122,75 116,64 C113,60 110,62 112,65 C118,76 124,92 130,108 Z"
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 6,
        "label": [
          175,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M166,108 C172,90 178,75 184,64 C187,60 190,62 188,65 C182,76 176,92 170,108 Z"
        }
      },
      {
        "id": "smile",
        "colorNumber": 9,
        "label": [
          150,
          158
        ],
        "shape": {
          "kind": "path",
          "d": "M136,150 Q150,165 164,150 L164,156 Q150,172 136,156 Z"
        }
      }
    ]
  },
  {
    "id": "tigerface",
    "name": "Tiger Face",
    "emoji": "🐯",
    "category": "animals",
    "viewBox": "0 0 300 400",
    "colors": [
      "#87CEEB",
      "#E8893A",
      "#2C2C2C",
      "#FFD700",
      "#3D2B1F",
      "#FFFACD",
      "#FF6B9D",
      "#FF8080",
      "#FFB3C6",
      "#C8702A"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "face",
        "colorNumber": 2,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 215,
          "r": 145
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 2,
        "label": [
          60,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "52,120 68,55 112,105"
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 2,
        "label": [
          240,
          80
        ],
        "shape": {
          "kind": "polygon",
          "points": "248,120 232,55 188,105"
        }
      },
      {
        "id": "ear-in-l",
        "colorNumber": 3,
        "label": [
          86,
          92
        ],
        "shape": {
          "kind": "polygon",
          "points": "66,115 74,68 108,108"
        }
      },
      {
        "id": "ear-in-r",
        "colorNumber": 3,
        "label": [
          248,
          101
        ],
        "shape": {
          "kind": "polygon",
          "points": "234,115 226,68 192,108"
        }
      },
      {
        "id": "stripe-t1",
        "colorNumber": 4,
        "label": [
          150,
          108
        ],
        "shape": {
          "kind": "path",
          "d": "M138,95 L142,125 L158,125 L162,95 L155,90 L145,90 Z"
        }
      },
      {
        "id": "stripe-l1",
        "colorNumber": 4,
        "label": [
          82,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M70,135 Q82,148 75,165 L82,165 Q90,148 78,135 Z"
        }
      },
      {
        "id": "stripe-l2",
        "colorNumber": 4,
        "label": [
          60,
          188
        ],
        "shape": {
          "kind": "path",
          "d": "M50,175 Q62,190 56,210 L64,210 Q72,190 60,175 Z"
        }
      },
      {
        "id": "stripe-r1",
        "colorNumber": 4,
        "label": [
          218,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M230,135 Q218,148 225,165 L218,165 Q210,148 222,135 Z"
        }
      },
      {
        "id": "stripe-r2",
        "colorNumber": 4,
        "label": [
          240,
          188
        ],
        "shape": {
          "kind": "path",
          "d": "M250,175 Q238,190 244,210 L236,210 Q228,190 240,175 Z"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 5,
        "label": [
          105,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 188,
          "rx": 24,
          "ry": 20
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 5,
        "label": [
          195,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 188,
          "rx": 24,
          "ry": 20
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          121,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 190,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          211,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 190,
          "rx": 9,
          "ry": 15
        }
      },
      {
        "id": "nose",
        "colorNumber": 7,
        "label": [
          150,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M135,222 L165,222 L150,242 Z"
        }
      },
      {
        "id": "muzzle-l",
        "colorNumber": 8,
        "label": [
          108,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 248,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "muzzle-r",
        "colorNumber": 8,
        "label": [
          192,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 248,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "mouth",
        "colorNumber": 9,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M138,244 Q150,260 162,244 L162,250 Q150,268 138,250 Z"
        }
      },
      {
        "id": "whisker-l1",
        "colorNumber": 10,
        "label": [
          62,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M78,240 L45,238 L45,242 L78,244 Z"
        }
      },
      {
        "id": "whisker-l2",
        "colorNumber": 10,
        "label": [
          78,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M76,252 L44,256 L44,260 L76,257 Z"
        }
      },
      {
        "id": "whisker-r1",
        "colorNumber": 10,
        "label": [
          238,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M222,240 L255,238 L255,242 L222,244 Z"
        }
      },
      {
        "id": "whisker-r2",
        "colorNumber": 10,
        "label": [
          258,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M224,252 L256,256 L256,260 L224,257 Z"
        }
      }
    ]
  },
  {
    "id": "hedgehog",
    "name": "Hedgehog",
    "emoji": "🦔",
    "colors": [
      "#E8F5E9",
      "#D7CCC8",
      "#5D4037",
      "#3E2723",
      "#FF80AB",
      "#FFFFFF",
      "#4CAF50",
      "#FF5722",
      "#A1887F",
      "#BCAAA4"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 7,
        "label": [
          150,
          385
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
        "id": "grass",
        "colorNumber": 7,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,340 150,355 Q225,340 300,365 L300,380 L0,380 Z"
        }
      },
      {
        "id": "quill-cloak",
        "colorNumber": 3,
        "label": [
          170,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M90,120 C60,180 60,310 130,340 L200,340 C260,310 270,180 230,120 Z"
        }
      },
      {
        "id": "quill-spine-1",
        "colorNumber": 4,
        "label": [
          115,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M110,140 L95,80 L130,135 Z"
        }
      },
      {
        "id": "quill-spine-2",
        "colorNumber": 4,
        "label": [
          155,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M145,130 L150,65 L165,125 Z"
        }
      },
      {
        "id": "quill-spine-3",
        "colorNumber": 4,
        "label": [
          195,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M185,135 L205,75 L210,130 Z"
        }
      },
      {
        "id": "quill-spine-4",
        "colorNumber": 4,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M225,160 L250,105 L245,155 Z"
        }
      },
      {
        "id": "quill-spine-5",
        "colorNumber": 4,
        "label": [
          70,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M80,175 L55,115 L95,170 Z"
        }
      },
      {
        "id": "quill-spine-side-r",
        "colorNumber": 3,
        "label": [
          255,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M245,190 L275,175 L260,215 Z"
        }
      },
      {
        "id": "quill-spine-side-l",
        "colorNumber": 3,
        "label": [
          60,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M75,215 L40,200 L65,245 Z"
        }
      },
      {
        "id": "belly-soft",
        "colorNumber": 2,
        "label": [
          155,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 270,
          "rx": 60,
          "ry": 50
        }
      },
      {
        "id": "head-round",
        "colorNumber": 2,
        "label": [
          110,
          215
        ],
        "shape": {
          "kind": "circle",
          "cx": 110,
          "cy": 215,
          "r": 45
        }
      },
      {
        "id": "snout-pointy",
        "colorNumber": 2,
        "label": [
          55,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M85,210 L42,230 L85,245 Z"
        }
      },
      {
        "id": "nose-shiny",
        "colorNumber": 4,
        "label": [
          42,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 42,
          "cy": 230,
          "r": 7
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 6,
        "label": [
          100,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 205,
          "r": 12
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 4,
        "label": [
          100,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 205,
          "r": 6
        }
      },
      {
        "id": "eye-glint",
        "colorNumber": 6,
        "label": [
          97,
          202
        ],
        "shape": {
          "kind": "circle",
          "cx": 97,
          "cy": 202,
          "r": 2
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 5,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 230,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "ear-outer",
        "colorNumber": 9,
        "label": [
          135,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 180,
          "r": 12
        }
      },
      {
        "id": "ear-inner",
        "colorNumber": 5,
        "label": [
          135,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 180,
          "r": 6
        }
      },
      {
        "id": "paw-front-l",
        "colorNumber": 9,
        "label": [
          100,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 335,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "paw-front-r",
        "colorNumber": 9,
        "label": [
          175,
          338
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 338,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "paw-toes-l",
        "colorNumber": 10,
        "label": [
          100,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 340,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "paw-toes-r",
        "colorNumber": 10,
        "label": [
          175,
          343
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 343,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "mushroom-cap",
        "colorNumber": 8,
        "label": [
          40,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 340,
          "r": 14
        }
      },
      {
        "id": "mushroom-stem",
        "colorNumber": 2,
        "label": [
          40,
          352
        ],
        "shape": {
          "kind": "rect",
          "x": 35,
          "y": 348,
          "w": 10,
          "h": 12
        }
      },
      {
        "id": "leaf-decor",
        "colorNumber": 7,
        "label": [
          260,
          340
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 340,
          "r": 12
        }
      },
      {
        "id": "apple-snack",
        "colorNumber": 8,
        "label": [
          255,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 110,
          "r": 14
        }
      },
      {
        "id": "apple-leaf",
        "colorNumber": 7,
        "label": [
          260,
          95
        ],
        "shape": {
          "kind": "path",
          "d": "M258,100 L270,85 L262,100 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "chameleon",
    "name": "Chameleon",
    "emoji": "🦎",
    "colors": [
      "#E0F7FA",
      "#33691E",
      "#4CAF50",
      "#76FF03",
      "#00BCD4",
      "#FFD54F",
      "#FF5722",
      "#212121",
      "#FFFFFF",
      "#81C784",
      "#8BC34A",
      "#AED581"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-thick",
        "colorNumber": 2,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M0,320 Q75,285 150,300 Q225,285 300,315 L300,340 Q225,315 150,330 Q75,315 0,350 Z"
        }
      },
      {
        "id": "branch-bark-texture",
        "colorNumber": 2,
        "label": [
          80,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M60,325 Q80,315 100,325 L100,335 Q80,325 60,335 Z"
        }
      },
      {
        "id": "body-main",
        "colorNumber": 3,
        "label": [
          160,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 220,
          "rx": 65,
          "ry": 48
        }
      },
      {
        "id": "belly-stripe-light",
        "colorNumber": 12,
        "label": [
          160,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M110,245 Q160,270 210,245 L210,255 Q160,280 110,255 Z"
        }
      },
      {
        "id": "body-pattern-1",
        "colorNumber": 4,
        "label": [
          140,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 210,
          "rx": 18,
          "ry": 14
        }
      },
      {
        "id": "body-pattern-2",
        "colorNumber": 4,
        "label": [
          180,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 210,
          "rx": 14,
          "ry": 12
        }
      },
      {
        "id": "body-pattern-3",
        "colorNumber": 11,
        "label": [
          155,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 235,
          "rx": 12,
          "ry": 10
        }
      },
      {
        "id": "head-dome",
        "colorNumber": 3,
        "label": [
          95,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 190,
          "r": 38
        }
      },
      {
        "id": "casque-crest",
        "colorNumber": 5,
        "label": [
          100,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M80,175 L100,115 L120,170 Z"
        }
      },
      {
        "id": "turret-eye-outer",
        "colorNumber": 4,
        "label": [
          95,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 185,
          "r": 18
        }
      },
      {
        "id": "turret-eye-ring",
        "colorNumber": 6,
        "label": [
          95,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 185,
          "r": 12
        }
      },
      {
        "id": "turret-eye-pupil",
        "colorNumber": 8,
        "label": [
          95,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 9,
        "label": [
          92,
          182
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 182,
          "r": 2
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 8,
        "label": [
          72,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M65,200 Q80,215 95,205"
        }
      },
      {
        "id": "curl-tail-spiral",
        "colorNumber": 3,
        "label": [
          240,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M205,230 C250,220 265,260 240,280 C220,295 205,275 220,265 C230,258 240,270 235,275"
        }
      },
      {
        "id": "curl-tail-inner",
        "colorNumber": 10,
        "label": [
          245,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M215,240 C245,235 255,265 240,275"
        }
      },
      {
        "id": "front-foot-zygo",
        "colorNumber": 3,
        "label": [
          115,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 280,
          "rx": 14,
          "ry": 18
        }
      },
      {
        "id": "back-foot-zygo",
        "colorNumber": 3,
        "label": [
          190,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 275,
          "rx": 14,
          "ry": 18
        }
      },
      {
        "id": "toe-front-split",
        "colorNumber": 4,
        "label": [
          115,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M108,290 L105,300 M122,290 L125,300"
        }
      },
      {
        "id": "toe-back-split",
        "colorNumber": 4,
        "label": [
          190,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M183,285 L180,295 M197,285 L200,295"
        }
      },
      {
        "id": "tongue-tip-fly",
        "colorNumber": 7,
        "label": [
          40,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "tongue-line",
        "colorNumber": 7,
        "label": [
          65,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M65,195 Q50,175 42,163"
        }
      },
      {
        "id": "leaf-big-l",
        "colorNumber": 10,
        "label": [
          35,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M30,130 Q20,100 45,90 Q55,115 30,130 Z"
        }
      },
      {
        "id": "leaf-big-r",
        "colorNumber": 10,
        "label": [
          265,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M270,130 Q280,100 255,90 Q245,115 270,130 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "koi",
    "name": "Japanese Koi",
    "emoji": "🎏",
    "colors": [
      "#B3E5FC",
      "#00BCD4",
      "#FFFFFF",
      "#FF5722",
      "#D84315",
      "#212121",
      "#F8BBD0",
      "#4CAF50",
      "#81D4FA",
      "#FF8A65"
    ],
    "regions": [
      {
        "id": "pond-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "pond-ripple-1",
        "colorNumber": 9,
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
        "id": "pond-ripple-2",
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
        "id": "koi-body-flowing",
        "colorNumber": 3,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M150,70 C210,100 215,250 150,290 C85,250 90,100 150,70 Z"
        }
      },
      {
        "id": "koi-tail-left",
        "colorNumber": 3,
        "label": [
          115,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M150,290 Q105,340 80,335 Q110,310 150,290 Z"
        }
      },
      {
        "id": "koi-tail-right",
        "colorNumber": 3,
        "label": [
          185,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M150,290 Q195,340 220,335 Q190,310 150,290 Z"
        }
      },
      {
        "id": "kohaku-head-spot",
        "colorNumber": 4,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 22
        }
      },
      {
        "id": "kohaku-back-spot",
        "colorNumber": 4,
        "label": [
          155,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 195,
          "rx": 26,
          "ry": 20
        }
      },
      {
        "id": "kohaku-tail-spot",
        "colorNumber": 5,
        "label": [
          148,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 255,
          "r": 14
        }
      },
      {
        "id": "sumi-mark-1",
        "colorNumber": 6,
        "label": [
          135,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "sumi-mark-2",
        "colorNumber": 6,
        "label": [
          165,
          220
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 220,
          "r": 7
        }
      },
      {
        "id": "fin-pectoral-l",
        "colorNumber": 3,
        "label": [
          100,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 145,
          "rx": 24,
          "ry": 12
        }
      },
      {
        "id": "fin-pectoral-r",
        "colorNumber": 3,
        "label": [
          200,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 145,
          "rx": 24,
          "ry": 12
        }
      },
      {
        "id": "dorsal-fin",
        "colorNumber": 3,
        "label": [
          155,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M140,140 L155,95 L170,140 Z"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          135,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          165,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 95,
          "r": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 3,
        "label": [
          133,
          93
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 93,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 3,
        "label": [
          163,
          93
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 93,
          "r": 2
        }
      },
      {
        "id": "whisker-l",
        "colorNumber": 6,
        "label": [
          115,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M130,100 L100,110"
        }
      },
      {
        "id": "whisker-r",
        "colorNumber": 6,
        "label": [
          185,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M170,100 L200,110"
        }
      },
      {
        "id": "lily-pad-1",
        "colorNumber": 8,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 22
        }
      },
      {
        "id": "lily-pad-2",
        "colorNumber": 8,
        "label": [
          245,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 280,
          "r": 22
        }
      },
      {
        "id": "lotus-bloom",
        "colorNumber": 7,
        "label": [
          55,
          75
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 75,
          "r": 10
        }
      },
      {
        "id": "lotus-petal",
        "colorNumber": 7,
        "label": [
          45,
          65
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 45,
          "cy": 65,
          "rx": 8,
          "ry": 14
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 3,
        "label": [
          95,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 50,
          "r": 7
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 3,
        "label": [
          205,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 50,
          "r": 5
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 9,
        "label": [
          180,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 55,
          "r": 4
        }
      },
      {
        "id": "scale-accent-1",
        "colorNumber": 10,
        "label": [
          140,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "scale-accent-2",
        "colorNumber": 10,
        "label": [
          160,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 180,
          "r": 6
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "foxface",
    "name": "Fox Face",
    "emoji": "🦊",
    "colors": [
      "#FFF8E1",
      "#FF6D00",
      "#E65100",
      "#FFFFFF",
      "#212121",
      "#FFD54F",
      "#FF80AB",
      "#FFAB91",
      "#FFE0B2"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "face-aura",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 195,
          "r": 120
        }
      },
      {
        "id": "fox-head-shape",
        "colorNumber": 2,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M150,95 L245,185 L215,290 L150,310 L85,290 L55,185 Z"
        }
      },
      {
        "id": "ear-left",
        "colorNumber": 2,
        "label": [
          80,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M55,185 L65,40 L110,120 Z"
        }
      },
      {
        "id": "ear-right",
        "colorNumber": 2,
        "label": [
          220,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M245,185 L235,40 L190,120 Z"
        }
      },
      {
        "id": "ear-tip-l",
        "colorNumber": 5,
        "label": [
          68,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M65,40 L72,65 L58,65 Z"
        }
      },
      {
        "id": "ear-tip-r",
        "colorNumber": 5,
        "label": [
          232,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M235,40 L228,65 L242,65 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 8,
        "label": [
          85,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M70,60 L80,160 L105,125 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 8,
        "label": [
          215,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M230,60 L220,160 L195,125 Z"
        }
      },
      {
        "id": "forehead-mark",
        "colorNumber": 3,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M150,105 L170,155 L150,145 L130,155 Z"
        }
      },
      {
        "id": "white-cheek-l",
        "colorNumber": 4,
        "label": [
          105,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M55,185 L150,220 L85,290 Z"
        }
      },
      {
        "id": "white-cheek-r",
        "colorNumber": 4,
        "label": [
          195,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M245,185 L150,220 L215,290 Z"
        }
      },
      {
        "id": "chin-white",
        "colorNumber": 4,
        "label": [
          150,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M85,290 L150,310 L215,290 L150,280 Z"
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 4,
        "label": [
          120,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 180,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 4,
        "label": [
          180,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 180,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "eye-pupil-l",
        "colorNumber": 5,
        "label": [
          120,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 180,
          "rx": 8,
          "ry": 6
        }
      },
      {
        "id": "eye-pupil-r",
        "colorNumber": 5,
        "label": [
          180,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 180,
          "rx": 8,
          "ry": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 4,
        "label": [
          117,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 117,
          "cy": 178,
          "r": 3
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 4,
        "label": [
          177,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 177,
          "cy": 178,
          "r": 3
        }
      },
      {
        "id": "nose-black",
        "colorNumber": 5,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 260,
          "r": 12
        }
      },
      {
        "id": "nose-shine",
        "colorNumber": 4,
        "label": [
          148,
          257
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 257,
          "r": 4
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 5,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M150,270 L150,280 M142,278 Q150,288 158,278"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          95,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 225,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          205,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 225,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "whisker-dot-l",
        "colorNumber": 9,
        "label": [
          80,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 245,
          "r": 3
        }
      },
      {
        "id": "whisker-dot-r",
        "colorNumber": 9,
        "label": [
          220,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 245,
          "r": 3
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "narwhal",
    "name": "Narwhal",
    "emoji": "🐬",
    "colors": [
      "#0D47A1",
      "#1565C0",
      "#64B5F6",
      "#BBDEFB",
      "#FFFFFF",
      "#FFD54F",
      "#212121",
      "#00E5FF",
      "#81D4FA",
      "#E3F2FD",
      "#42A5F5",
      "#90CAF9"
    ],
    "regions": [
      {
        "id": "deep-sea-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-glow",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 130
        }
      },
      {
        "id": "narwhal-body-chubby",
        "colorNumber": 3,
        "label": [
          155,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M70,250 C75,160 230,160 245,235 C235,290 95,300 70,250 Z"
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 4,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 255,
          "rx": 65,
          "ry": 30
        }
      },
      {
        "id": "belly-spot-1",
        "colorNumber": 12,
        "label": [
          130,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M120,245 Q130,260 140,245 Z"
        }
      },
      {
        "id": "belly-spot-2",
        "colorNumber": 12,
        "label": [
          170,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M160,245 Q170,260 180,245 Z"
        }
      },
      {
        "id": "head-bulge",
        "colorNumber": 3,
        "label": [
          90,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 90,
          "cy": 210,
          "r": 40
        }
      },
      {
        "id": "horn-spiral",
        "colorNumber": 6,
        "label": [
          55,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M80,195 L20,55"
        }
      },
      {
        "id": "horn-stripe-1",
        "colorNumber": 5,
        "label": [
          60,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M65,160 L55,140"
        }
      },
      {
        "id": "horn-stripe-2",
        "colorNumber": 5,
        "label": [
          45,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M50,120 L40,100"
        }
      },
      {
        "id": "horn-stripe-3",
        "colorNumber": 5,
        "label": [
          32,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M37,90 L27,70"
        }
      },
      {
        "id": "fluke-tail-top",
        "colorNumber": 3,
        "label": [
          265,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M245,235 Q275,195 290,210"
        }
      },
      {
        "id": "fluke-tail-bot",
        "colorNumber": 3,
        "label": [
          265,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M245,235 Q275,275 290,260"
        }
      },
      {
        "id": "flipper-fin",
        "colorNumber": 11,
        "label": [
          130,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 265,
          "rx": 24,
          "ry": 12
        }
      },
      {
        "id": "eye-big-white",
        "colorNumber": 5,
        "label": [
          95,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 210,
          "r": 12
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 7,
        "label": [
          95,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 210,
          "r": 6
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 5,
        "label": [
          92,
          207
        ],
        "shape": {
          "kind": "circle",
          "cx": 92,
          "cy": 207,
          "r": 3
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 9,
        "label": [
          115,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 230,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 7,
        "label": [
          80,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M70,225 Q82,240 95,228"
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 8,
        "label": [
          80,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 155,
          "r": 8
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 8,
        "label": [
          95,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 8,
        "label": [
          70,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 125,
          "r": 4
        }
      },
      {
        "id": "iceberg-top-1",
        "colorNumber": 10,
        "label": [
          50,
          55
        ],
        "shape": {
          "kind": "path",
          "d": "M25,75 L50,30 L75,75 Z"
        }
      },
      {
        "id": "iceberg-top-2",
        "colorNumber": 10,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "path",
          "d": "M225,75 L250,30 L275,75 Z"
        }
      },
      {
        "id": "star-twinkle-1",
        "colorNumber": 6,
        "label": [
          45,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 45,
          "r": 3
        }
      },
      {
        "id": "star-twinkle-2",
        "colorNumber": 6,
        "label": [
          255,
          45
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 45,
          "r": 3
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "koala",
    "name": "Koala",
    "emoji": "🐨",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#795548",
      "#78909C",
      "#B0BEC5",
      "#FFFFFF",
      "#212121",
      "#FF80AB",
      "#2E7D32",
      "#90A4AE",
      "#CFD8DC"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "tree-trunk",
        "colorNumber": 3,
        "label": [
          65,
          200
        ],
        "shape": {
          "kind": "rect",
          "x": 50,
          "y": 0,
          "w": 30,
          "h": 400
        }
      },
      {
        "id": "bark-texture-1",
        "colorNumber": 3,
        "label": [
          60,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M52,110 Q65,105 78,115 L78,125 Q65,120 52,125 Z"
        }
      },
      {
        "id": "bark-texture-2",
        "colorNumber": 3,
        "label": [
          60,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M52,250 Q65,245 78,255 L78,265 Q65,260 52,265 Z"
        }
      },
      {
        "id": "koala-body",
        "colorNumber": 4,
        "label": [
          165,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 275,
          "rx": 65,
          "ry": 55
        }
      },
      {
        "id": "belly-patch",
        "colorNumber": 11,
        "label": [
          165,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 275,
          "rx": 35,
          "ry": 28
        }
      },
      {
        "id": "koala-head",
        "colorNumber": 4,
        "label": [
          165,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 165,
          "r": 48
        }
      },
      {
        "id": "fluffy-ear-l",
        "colorNumber": 10,
        "label": [
          118,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 118,
          "r": 26
        }
      },
      {
        "id": "fluffy-ear-r",
        "colorNumber": 10,
        "label": [
          212,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 212,
          "cy": 118,
          "r": 26
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 5,
        "label": [
          118,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 5,
        "label": [
          212,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 212,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "big-leather-nose",
        "colorNumber": 7,
        "label": [
          165,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 182,
          "rx": 16,
          "ry": 20
        }
      },
      {
        "id": "nose-shine",
        "colorNumber": 6,
        "label": [
          162,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 178,
          "r": 4
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 6,
        "label": [
          140,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 6,
        "label": [
          190,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 7,
        "label": [
          140,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 7,
        "label": [
          190,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 190,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 6,
        "label": [
          138,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 6,
        "label": [
          188,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "cheek-blush-l",
        "colorNumber": 8,
        "label": [
          125,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 190,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "cheek-blush-r",
        "colorNumber": 8,
        "label": [
          205,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 190,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 7,
        "label": [
          165,
          198
        ],
        "shape": {
          "kind": "path",
          "d": "M155,196 Q165,206 175,196"
        }
      },
      {
        "id": "arm-hug-top",
        "colorNumber": 4,
        "label": [
          100,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 215,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "arm-hug-bot",
        "colorNumber": 4,
        "label": [
          100,
          295
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 295,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "leaf-eucalyptus-1",
        "colorNumber": 2,
        "label": [
          35,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M25,130 Q20,100 50,90 Q48,120 25,130 Z"
        }
      },
      {
        "id": "leaf-eucalyptus-2",
        "colorNumber": 9,
        "label": [
          40,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M28,200 Q25,170 55,160 Q52,190 28,200 Z"
        }
      },
      {
        "id": "leaf-eucalyptus-3",
        "colorNumber": 2,
        "label": [
          35,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M25,340 Q20,310 50,300 Q48,330 25,340 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "gorilla",
    "name": "Gorilla",
    "emoji": "🦍",
    "colors": [
      "#263238",
      "#37474F",
      "#455A64",
      "#546E7A",
      "#78909C",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#B0BEC5",
      "#90A4AE"
    ],
    "regions": [
      {
        "id": "misty-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mist-fog",
        "colorNumber": 3,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M0,360 Q75,340 150,355 Q225,340 300,360 L300,400 L0,400 Z"
        }
      },
      {
        "id": "gorilla-body-massive",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M60,195 C40,230 40,340 90,355 L210,355 C260,340 260,230 240,195 Z"
        }
      },
      {
        "id": "sagittal-crest",
        "colorNumber": 2,
        "label": [
          150,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M110,140 C105,60 195,60 190,140 Z"
        }
      },
      {
        "id": "brow-ridge-heavy",
        "colorNumber": 3,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M108,125 Q150,145 192,125 Q150,110 108,125 Z"
        }
      },
      {
        "id": "face-area",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 35
        }
      },
      {
        "id": "muzzle-leathery",
        "colorNumber": 5,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 170,
          "rx": 25,
          "ry": 18
        }
      },
      {
        "id": "nostril-l",
        "colorNumber": 6,
        "label": [
          140,
          168
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 168,
          "rx": 6,
          "ry": 5
        }
      },
      {
        "id": "nostril-r",
        "colorNumber": 6,
        "label": [
          160,
          168
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 168,
          "rx": 6,
          "ry": 5
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 6,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M138,178 Q150,188 162,178"
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 8,
        "label": [
          132,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 135,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 8,
        "label": [
          168,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 135,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          132,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 135,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          168,
          135
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 135,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          130,
          133
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 133,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          166,
          133
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 133,
          "r": 2
        }
      },
      {
        "id": "cheek-blush-l",
        "colorNumber": 7,
        "label": [
          112,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "cheek-blush-r",
        "colorNumber": 7,
        "label": [
          188,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "pec-muscle-l",
        "colorNumber": 3,
        "label": [
          120,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 230,
          "rx": 28,
          "ry": 22
        }
      },
      {
        "id": "pec-muscle-r",
        "colorNumber": 3,
        "label": [
          180,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 230,
          "rx": 28,
          "ry": 22
        }
      },
      {
        "id": "silverback-patch",
        "colorNumber": 9,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M125,245 L175,245 L165,300 L135,300 Z"
        }
      },
      {
        "id": "arm-thick-l",
        "colorNumber": 2,
        "label": [
          65,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 270,
          "rx": 22,
          "ry": 50
        }
      },
      {
        "id": "arm-thick-r",
        "colorNumber": 2,
        "label": [
          235,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 235,
          "cy": 270,
          "rx": 22,
          "ry": 50
        }
      },
      {
        "id": "knuckle-fist-l",
        "colorNumber": 3,
        "label": [
          65,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 65,
          "cy": 330,
          "r": 18
        }
      },
      {
        "id": "knuckle-fist-r",
        "colorNumber": 3,
        "label": [
          235,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 330,
          "r": 18
        }
      },
      {
        "id": "vine-jungle",
        "colorNumber": 10,
        "label": [
          270,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M275,0 Q260,60 270,120 Q280,180 270,240"
        }
      },
      {
        "id": "leaf-jungle",
        "colorNumber": 10,
        "label": [
          260,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M265,70 L280,60 L275,85 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "kangaroo",
    "name": "Kangaroo",
    "emoji": "🦘",
    "colors": [
      "#FFF8E1",
      "#FF8F00",
      "#FFD54F",
      "#3E2723",
      "#FFFFFF",
      "#FF80AB",
      "#D84315",
      "#FFAB91",
      "#BF360C",
      "#FFE0B2",
      "#A1887F"
    ],
    "regions": [
      {
        "id": "outback-sky",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "outback-ground",
        "colorNumber": 7,
        "label": [
          150,
          380
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
        "id": "ground-ripple",
        "colorNumber": 9,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,345 150,360 Q225,345 300,365 L300,375 L0,375 Z"
        }
      },
      {
        "id": "torso-body",
        "colorNumber": 2,
        "label": [
          140,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 255,
          "rx": 60,
          "ry": 80
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 8,
        "label": [
          135,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 265,
          "rx": 35,
          "ry": 45
        }
      },
      {
        "id": "head-round",
        "colorNumber": 2,
        "label": [
          130,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 130,
          "r": 38
        }
      },
      {
        "id": "ear-perked-l",
        "colorNumber": 2,
        "label": [
          100,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M100,120 L88,40 L115,110 Z"
        }
      },
      {
        "id": "ear-perked-r",
        "colorNumber": 2,
        "label": [
          145,
          65
        ],
        "shape": {
          "kind": "path",
          "d": "M130,120 L145,35 L155,110 Z"
        }
      },
      {
        "id": "ear-inner-pink-l",
        "colorNumber": 6,
        "label": [
          100,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M102,115 L92,55 L112,108 Z"
        }
      },
      {
        "id": "ear-inner-pink-r",
        "colorNumber": 6,
        "label": [
          143,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M132,115 L145,50 L152,108 Z"
        }
      },
      {
        "id": "snout-wedge",
        "colorNumber": 8,
        "label": [
          90,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M115,130 L70,145 L115,155 Z"
        }
      },
      {
        "id": "nose-black",
        "colorNumber": 4,
        "label": [
          70,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 70,
          "cy": 145,
          "r": 6
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 5,
        "label": [
          118,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 125,
          "r": 10
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 4,
        "label": [
          118,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 125,
          "r": 5
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 5,
        "label": [
          116,
          123
        ],
        "shape": {
          "kind": "circle",
          "cx": 116,
          "cy": 123,
          "r": 2
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 6,
        "label": [
          118,
          150
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 150,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 4,
        "label": [
          85,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M80,152 Q90,162 100,152"
        }
      },
      {
        "id": "powerful-thigh",
        "colorNumber": 7,
        "label": [
          175,
          305
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 305,
          "rx": 38,
          "ry": 45
        }
      },
      {
        "id": "big-foot",
        "colorNumber": 2,
        "label": [
          130,
          348
        ],
        "shape": {
          "kind": "rect",
          "x": 85,
          "y": 340,
          "w": 90,
          "h": 16,
          "rx": 7
        }
      },
      {
        "id": "toe-pad-1",
        "colorNumber": 11,
        "label": [
          95,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 345,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "toe-pad-2",
        "colorNumber": 11,
        "label": [
          120,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 345,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "toe-pad-3",
        "colorNumber": 11,
        "label": [
          145,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 345,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "thick-tail",
        "colorNumber": 2,
        "label": [
          240,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M175,285 Q255,290 275,355"
        }
      },
      {
        "id": "tail-stripe",
        "colorNumber": 9,
        "label": [
          255,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M185,290 Q260,295 275,355"
        }
      },
      {
        "id": "pouch-cream",
        "colorNumber": 10,
        "label": [
          120,
          275
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 275,
          "r": 22
        }
      },
      {
        "id": "joey-head",
        "colorNumber": 8,
        "label": [
          115,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 260,
          "r": 12
        }
      },
      {
        "id": "joey-eye",
        "colorNumber": 4,
        "label": [
          112,
          258
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 258,
          "r": 3
        }
      },
      {
        "id": "outback-sun",
        "colorNumber": 3,
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "gecko",
    "name": "Gecko",
    "emoji": "🐉",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#76FF03",
      "#FFD54F",
      "#FF5722",
      "#212121",
      "#FFFFFF",
      "#81C784",
      "#00E676",
      "#AED581",
      "#C8E6C9"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "rock-surface",
        "colorNumber": 8,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M0,330 Q75,310 150,325 Q225,310 300,330 L300,400 L0,400 Z"
        }
      },
      {
        "id": "gecko-body-sleek",
        "colorNumber": 2,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 220,
          "rx": 45,
          "ry": 80
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 11,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M125,160 Q150,150 175,160 L175,280 Q150,290 125,280 Z"
        }
      },
      {
        "id": "head-wide-flat",
        "colorNumber": 2,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 120,
          "r": 35
        }
      },
      {
        "id": "head-shape-flat",
        "colorNumber": 3,
        "label": [
          150,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 125,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "giant-eye-l-outer",
        "colorNumber": 4,
        "label": [
          128,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 110,
          "r": 16
        }
      },
      {
        "id": "giant-eye-r-outer",
        "colorNumber": 4,
        "label": [
          172,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 110,
          "r": 16
        }
      },
      {
        "id": "eye-slit-l",
        "colorNumber": 6,
        "label": [
          128,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "eye-slit-r",
        "colorNumber": 6,
        "label": [
          172,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 110,
          "r": 4
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          125,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 107,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          169,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 169,
          "cy": 107,
          "r": 2
        }
      },
      {
        "id": "smile-wide",
        "colorNumber": 6,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M125,138 Q150,152 175,138"
        }
      },
      {
        "id": "front-leg-l",
        "colorNumber": 2,
        "label": [
          85,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M120,180 L65,165 L55,180 L70,180 Z"
        }
      },
      {
        "id": "front-leg-r",
        "colorNumber": 2,
        "label": [
          215,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M180,180 L235,165 L245,180 L230,180 Z"
        }
      },
      {
        "id": "back-leg-l",
        "colorNumber": 2,
        "label": [
          85,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M120,270 L65,285 L55,295 L75,290 Z"
        }
      },
      {
        "id": "back-leg-r",
        "colorNumber": 2,
        "label": [
          215,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M180,270 L235,285 L245,295 L225,290 Z"
        }
      },
      {
        "id": "toe-pad-fl",
        "colorNumber": 9,
        "label": [
          55,
          177
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 177,
          "r": 8
        }
      },
      {
        "id": "toe-pad-fr",
        "colorNumber": 9,
        "label": [
          245,
          177
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 177,
          "r": 8
        }
      },
      {
        "id": "toe-pad-bl",
        "colorNumber": 9,
        "label": [
          55,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 293,
          "r": 8
        }
      },
      {
        "id": "toe-pad-br",
        "colorNumber": 9,
        "label": [
          245,
          293
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 293,
          "r": 8
        }
      },
      {
        "id": "tail-curvy",
        "colorNumber": 2,
        "label": [
          160,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M150,300 Q180,340 160,370 Q140,390 155,395"
        }
      },
      {
        "id": "spot-body-1",
        "colorNumber": 10,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 190,
          "r": 8
        }
      },
      {
        "id": "spot-body-2",
        "colorNumber": 10,
        "label": [
          160,
          230
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 230,
          "r": 8
        }
      },
      {
        "id": "spot-body-3",
        "colorNumber": 10,
        "label": [
          145,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 260,
          "r": 7
        }
      },
      {
        "id": "bug-fly",
        "colorNumber": 5,
        "label": [
          45,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 90,
          "r": 6
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "capuchin",
    "name": "Capuchin Monkey",
    "emoji": "🐒",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#5D4037",
      "#D7CCC8",
      "#FFE0B2",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#3E2723",
      "#8D6E63",
      "#BCAAA4"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-perch",
        "colorNumber": 10,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M0,340 Q150,305 300,335 L300,360 Q150,330 0,365 Z"
        }
      },
      {
        "id": "branch-leaves-l",
        "colorNumber": 2,
        "label": [
          45,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M30,320 Q20,300 45,290 Q50,310 30,320 Z"
        }
      },
      {
        "id": "branch-leaves-r",
        "colorNumber": 2,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M270,325 Q280,305 255,295 Q250,315 270,325 Z"
        }
      },
      {
        "id": "body-chubby",
        "colorNumber": 3,
        "label": [
          150,
          255
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 255,
          "rx": 55,
          "ry": 60
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 32,
          "ry": 35
        }
      },
      {
        "id": "head-round",
        "colorNumber": 3,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 48
        }
      },
      {
        "id": "face-cream-area",
        "colorNumber": 5,
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
        "id": "ear-l",
        "colorNumber": 11,
        "label": [
          105,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 145,
          "r": 14
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 11,
        "label": [
          195,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 145,
          "r": 14
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 5,
        "label": [
          105,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 145,
          "r": 7
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 5,
        "label": [
          195,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 145,
          "r": 7
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 8,
        "label": [
          133,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 8,
        "label": [
          167,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 167,
          "cy": 150,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          133,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          167,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 167,
          "cy": 150,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          131,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 131,
          "cy": 148,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          165,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 148,
          "r": 2
        }
      },
      {
        "id": "nose-flat",
        "colorNumber": 6,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 170,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "smile",
        "colorNumber": 6,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M140,178 Q150,188 160,178"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          122,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          178,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "curly-tail",
        "colorNumber": 11,
        "label": [
          225,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M195,255 Q240,230 250,260 Q255,290 235,285 Q225,275 240,270"
        }
      },
      {
        "id": "hand-l",
        "colorNumber": 12,
        "label": [
          105,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 310,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "hand-r",
        "colorNumber": 12,
        "label": [
          195,
          310
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 310,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "banana-fruit",
        "colorNumber": 9,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 290,
          "r": 12
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "turkey",
    "name": "Turkey",
    "emoji": "🦃",
    "colors": [
      "#FFF3E0",
      "#795548",
      "#5D4037",
      "#FF5722",
      "#F44336",
      "#FFD54F",
      "#212121",
      "#FFFFFF",
      "#FF9800",
      "#4CAF50",
      "#3E2723",
      "#FFAB91"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 10,
        "label": [
          150,
          385
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
        "id": "tail-fan-outer",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M75,250 C30,100 270,100 225,250 Z"
        }
      },
      {
        "id": "tail-fan-stripe-l",
        "colorNumber": 4,
        "label": [
          95,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M100,240 C55,130 100,110 120,155 Z"
        }
      },
      {
        "id": "tail-fan-stripe-r",
        "colorNumber": 4,
        "label": [
          205,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M200,240 C245,130 200,110 180,155 Z"
        }
      },
      {
        "id": "tail-fan-stripe-c",
        "colorNumber": 9,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M140,230 C110,110 190,110 160,230 Z"
        }
      },
      {
        "id": "body-round",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 65,
          "ry": 55
        }
      },
      {
        "id": "breast-feather",
        "colorNumber": 12,
        "label": [
          150,
          285
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 285,
          "rx": 38,
          "ry": 35
        }
      },
      {
        "id": "wing-left",
        "colorNumber": 2,
        "label": [
          80,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M100,250 Q60,280 75,320 Q95,300 100,280 Z"
        }
      },
      {
        "id": "wing-right",
        "colorNumber": 2,
        "label": [
          220,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M200,250 Q240,280 225,320 Q205,300 200,280 Z"
        }
      },
      {
        "id": "head-small",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 22
        }
      },
      {
        "id": "wattle-red",
        "colorNumber": 5,
        "label": [
          145,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M145,225 Q135,248 145,260 Q155,248 145,225 Z"
        }
      },
      {
        "id": "snood-droop",
        "colorNumber": 5,
        "label": [
          158,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M155,220 Q165,240 155,250"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 8,
        "label": [
          142,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 205,
          "r": 7
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 7,
        "label": [
          142,
          205
        ],
        "shape": {
          "kind": "circle",
          "cx": 142,
          "cy": 205,
          "r": 3
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 8,
        "label": [
          140,
          203
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 203,
          "r": 1
        }
      },
      {
        "id": "beak-upper",
        "colorNumber": 6,
        "label": [
          165,
          212
        ],
        "shape": {
          "kind": "path",
          "d": "M155,208 L175,212 L155,216 Z"
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 9,
        "label": [
          120,
          358
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 358,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 9,
        "label": [
          180,
          358
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 358,
          "rx": 18,
          "ry": 8
        }
      },
      {
        "id": "toe-l-1",
        "colorNumber": 11,
        "label": [
          110,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M120,355 L100,365"
        }
      },
      {
        "id": "toe-l-2",
        "colorNumber": 11,
        "label": [
          130,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M120,355 L135,368"
        }
      },
      {
        "id": "toe-r-1",
        "colorNumber": 11,
        "label": [
          190,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M180,355 L200,365"
        }
      },
      {
        "id": "toe-r-2",
        "colorNumber": 11,
        "label": [
          170,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M180,355 L165,368"
        }
      },
      {
        "id": "leg-l",
        "colorNumber": 9,
        "label": [
          125,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M130,330 L122,355"
        }
      },
      {
        "id": "leg-r",
        "colorNumber": 9,
        "label": [
          175,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M170,330 L178,355"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "crocodile",
    "name": "Crocodile",
    "emoji": "🐊",
    "colors": [
      "#E8F5E9",
      "#388E3C",
      "#4CAF50",
      "#FFFFFF",
      "#212121",
      "#FFD54F",
      "#81C784",
      "#1B5E20",
      "#A5D6A7",
      "#C8E6C9"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "river-water",
        "colorNumber": 7,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,340 Q75,320 150,335 Q225,320 300,340 L300,400 L0,400 Z"
        }
      },
      {
        "id": "riverbank-mud",
        "colorNumber": 8,
        "label": [
          150,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q150,325 300,350 L300,360 Q150,340 0,360 Z"
        }
      },
      {
        "id": "croc-body-long",
        "colorNumber": 2,
        "label": [
          160,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M60,220 C60,180 250,170 260,210 C270,260 80,270 60,220 Z"
        }
      },
      {
        "id": "belly-scales-light",
        "colorNumber": 9,
        "label": [
          160,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M90,235 Q160,260 235,230 L235,245 Q160,275 90,250 Z"
        }
      },
      {
        "id": "head-snout-long",
        "colorNumber": 2,
        "label": [
          100,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M105,180 L25,195 L25,215 L105,225 Z"
        }
      },
      {
        "id": "upper-jaw",
        "colorNumber": 3,
        "label": [
          60,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M105,180 L25,195 L60,200 Z"
        }
      },
      {
        "id": "lower-jaw",
        "colorNumber": 3,
        "label": [
          60,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M105,225 L25,215 L60,210 Z"
        }
      },
      {
        "id": "teeth-top",
        "colorNumber": 4,
        "label": [
          55,
          198
        ],
        "shape": {
          "kind": "path",
          "d": "M35,195 L40,205 L48,195 L53,205 L60,195 L65,205 L72,195 L78,205 L85,195"
        }
      },
      {
        "id": "teeth-bottom",
        "colorNumber": 4,
        "label": [
          55,
          213
        ],
        "shape": {
          "kind": "path",
          "d": "M35,215 L40,205 L48,215 L53,205 L60,215 L65,205 L72,215 L78,205 L85,215"
        }
      },
      {
        "id": "eye-bump-l",
        "colorNumber": 2,
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
        "id": "eye-white-l",
        "colorNumber": 6,
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
        "id": "eye-slit-l",
        "colorNumber": 5,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 175,
          "r": 3
        }
      },
      {
        "id": "nostril-l",
        "colorNumber": 5,
        "label": [
          32,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 32,
          "cy": 195,
          "r": 3
        }
      },
      {
        "id": "nostril-r",
        "colorNumber": 5,
        "label": [
          32,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 32,
          "cy": 210,
          "r": 3
        }
      },
      {
        "id": "scute-row-1",
        "colorNumber": 8,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M130,195 L140,180 L150,195 L160,180 L170,195"
        }
      },
      {
        "id": "scute-row-2",
        "colorNumber": 8,
        "label": [
          195,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M180,195 L190,180 L200,195 L210,180 L220,195"
        }
      },
      {
        "id": "front-leg-l",
        "colorNumber": 2,
        "label": [
          100,
          255
        ],
        "shape": {
          "kind": "path",
          "d": "M105,240 L85,275 L75,280 L95,275 Z"
        }
      },
      {
        "id": "front-leg-r",
        "colorNumber": 2,
        "label": [
          130,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M135,245 L125,280 L115,285 L130,280 Z"
        }
      },
      {
        "id": "back-leg-l",
        "colorNumber": 2,
        "label": [
          210,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M215,235 L200,275 L190,280 L210,270 Z"
        }
      },
      {
        "id": "back-leg-r",
        "colorNumber": 2,
        "label": [
          240,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M240,235 L230,275 L220,280 L240,270 Z"
        }
      },
      {
        "id": "tail-thick-long",
        "colorNumber": 2,
        "label": [
          270,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M260,210 Q295,215 290,240 Q285,260 265,255"
        }
      },
      {
        "id": "tail-scute-marks",
        "colorNumber": 8,
        "label": [
          280,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M270,215 L275,225 M280,218 L283,228"
        }
      },
      {
        "id": "water-ripple-1",
        "colorNumber": 10,
        "label": [
          50,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "water-ripple-2",
        "colorNumber": 10,
        "label": [
          250,
          350
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 350,
          "r": 8
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "hippo",
    "name": "Hippo",
    "emoji": "🦛",
    "colors": [
      "#B3E5FC",
      "#00BCD4",
      "#78909C",
      "#90A4AE",
      "#FF80AB",
      "#212121",
      "#FFFFFF",
      "#546E7A",
      "#E0E0E0"
    ],
    "regions": [
      {
        "id": "water-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-surface",
        "colorNumber": 2,
        "label": [
          150,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M0,290 Q75,270 150,285 Q225,270 300,290 L300,400 L0,400 Z"
        }
      },
      {
        "id": "water-ripple-l",
        "colorNumber": 1,
        "label": [
          60,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M30,295 Q60,285 90,295"
        }
      },
      {
        "id": "water-ripple-r",
        "colorNumber": 1,
        "label": [
          240,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M210,295 Q240,285 270,295"
        }
      },
      {
        "id": "hippo-body-massive",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 90,
          "ry": 55
        }
      },
      {
        "id": "hippo-belly",
        "colorNumber": 9,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 290,
          "rx": 55,
          "ry": 30
        }
      },
      {
        "id": "hippo-head-wide",
        "colorNumber": 3,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 60
        }
      },
      {
        "id": "broad-snout",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 210,
          "rx": 45,
          "ry": 28
        }
      },
      {
        "id": "nostril-bump-l",
        "colorNumber": 8,
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
        "id": "nostril-bump-r",
        "colorNumber": 8,
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
        "id": "nostril-hole-l",
        "colorNumber": 6,
        "label": [
          135,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "nostril-hole-r",
        "colorNumber": 6,
        "label": [
          165,
          200
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 200,
          "r": 4
        }
      },
      {
        "id": "eye-bump-l",
        "colorNumber": 3,
        "label": [
          118,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 148,
          "r": 16
        }
      },
      {
        "id": "eye-bump-r",
        "colorNumber": 3,
        "label": [
          182,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 148,
          "r": 16
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 7,
        "label": [
          118,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 7,
        "label": [
          182,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          118,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          182,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 182,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          116,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 116,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          180,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "tiny-ear-l",
        "colorNumber": 8,
        "label": [
          98,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 98,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "tiny-ear-r",
        "colorNumber": 8,
        "label": [
          202,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 202,
          "cy": 130,
          "r": 10
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 5,
        "label": [
          98,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M93,130 Q98,122 103,130"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 5,
        "label": [
          202,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M197,130 Q202,122 207,130"
        }
      },
      {
        "id": "mouth-wide",
        "colorNumber": 6,
        "label": [
          150,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M120,222 Q150,240 180,222"
        }
      },
      {
        "id": "cheek-blush-l",
        "colorNumber": 5,
        "label": [
          105,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 215,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "cheek-blush-r",
        "colorNumber": 5,
        "label": [
          195,
          215
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 215,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "water-splash-1",
        "colorNumber": 7,
        "label": [
          55,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 260,
          "r": 8
        }
      },
      {
        "id": "water-splash-2",
        "colorNumber": 7,
        "label": [
          245,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 260,
          "r": 8
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "bunny",
    "name": "Bunny",
    "emoji": "🐰",
    "colors": [
      "#FFF8E1",
      "#FFFFFF",
      "#D7CCC8",
      "#FF80AB",
      "#212121",
      "#4CAF50",
      "#FF5722",
      "#BCAAA4",
      "#F8BBD0"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass-tufts",
        "colorNumber": 6,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "bunny-body-fluffy",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 70,
          "ry": 60
        }
      },
      {
        "id": "belly-fluff",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 40,
          "ry": 35
        }
      },
      {
        "id": "bunny-head",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 55
        }
      },
      {
        "id": "ear-tall-l",
        "colorNumber": 2,
        "label": [
          125,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M115,130 C105,30 130,20 140,130 Z"
        }
      },
      {
        "id": "ear-tall-r",
        "colorNumber": 2,
        "label": [
          175,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M160,130 C170,20 195,30 185,130 Z"
        }
      },
      {
        "id": "ear-inner-pink-l",
        "colorNumber": 4,
        "label": [
          125,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M120,125 C114,45 135,38 138,125 Z"
        }
      },
      {
        "id": "ear-inner-pink-r",
        "colorNumber": 4,
        "label": [
          175,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M162,125 C166,38 186,45 180,125 Z"
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 2,
        "label": [
          128,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 2,
        "label": [
          172,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          128,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          172,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 2,
        "label": [
          126,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 126,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 2,
        "label": [
          170,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "nose-twitch-pink",
        "colorNumber": 4,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 178,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "mouth-y",
        "colorNumber": 5,
        "label": [
          150,
          188
        ],
        "shape": {
          "kind": "path",
          "d": "M150,182 L150,192 M143,188 Q150,196 157,188"
        }
      },
      {
        "id": "whisker-l-1",
        "colorNumber": 5,
        "label": [
          100,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M120,175 L80,170"
        }
      },
      {
        "id": "whisker-l-2",
        "colorNumber": 5,
        "label": [
          100,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M120,182 L80,185"
        }
      },
      {
        "id": "whisker-r-1",
        "colorNumber": 5,
        "label": [
          200,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M180,175 L220,170"
        }
      },
      {
        "id": "whisker-r-2",
        "colorNumber": 5,
        "label": [
          200,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M180,182 L220,185"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 9,
        "label": [
          110,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 185,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 9,
        "label": [
          190,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 185,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "paw-front-l",
        "colorNumber": 8,
        "label": [
          110,
          342
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 342,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "paw-front-r",
        "colorNumber": 8,
        "label": [
          190,
          342
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 342,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "cotton-tail-puff",
        "colorNumber": 2,
        "label": [
          225,
          280
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 280,
          "r": 16
        }
      },
      {
        "id": "carrot-body",
        "colorNumber": 7,
        "label": [
          150,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M140,295 L160,295 L150,330 Z"
        }
      },
      {
        "id": "carrot-leaves",
        "colorNumber": 6,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M145,298 L135,280 M150,298 L150,278 M155,298 L165,280"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "monkey",
    "name": "Jungle Monkey",
    "emoji": "🐵",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#795548",
      "#D7CCC8",
      "#FFE0B2",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#3E2723",
      "#8D6E63",
      "#A1887F"
    ],
    "regions": [
      {
        "id": "jungle-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "vine-hang",
        "colorNumber": 10,
        "label": [
          60,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M55,0 Q65,40 55,80 Q45,120 55,160"
        }
      },
      {
        "id": "vine-hang-r",
        "colorNumber": 10,
        "label": [
          250,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M245,0 Q255,30 248,60 Q240,90 248,120"
        }
      },
      {
        "id": "leaf-l",
        "colorNumber": 2,
        "label": [
          45,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M40,120 Q25,90 50,80 Q55,110 40,120 Z"
        }
      },
      {
        "id": "leaf-r",
        "colorNumber": 2,
        "label": [
          255,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M260,100 Q275,70 250,60 Q245,90 260,100 Z"
        }
      },
      {
        "id": "body-round",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 60,
          "ry": 55
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 4,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 35,
          "ry": 30
        }
      },
      {
        "id": "head",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 50
        }
      },
      {
        "id": "face-muzzle-area",
        "colorNumber": 5,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 32
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 11,
        "label": [
          102,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 102,
          "cy": 150,
          "r": 16
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 11,
        "label": [
          198,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 150,
          "r": 16
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 5,
        "label": [
          102,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 102,
          "cy": 150,
          "r": 9
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 5,
        "label": [
          198,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 198,
          "cy": 150,
          "r": 9
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 8,
        "label": [
          132,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 152,
          "r": 11
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 8,
        "label": [
          168,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 152,
          "r": 11
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          132,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 152,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          168,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 152,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          130,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 150,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          166,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 150,
          "r": 2
        }
      },
      {
        "id": "nose-flat-wide",
        "colorNumber": 6,
        "label": [
          150,
          172
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 172,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "cheeky-grin",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M132,180 Q150,198 168,180"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          118,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 180,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          182,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 180,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "curled-tail",
        "colorNumber": 11,
        "label": [
          235,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M195,265 Q245,240 255,270 Q260,300 240,295"
        }
      },
      {
        "id": "hand-l",
        "colorNumber": 12,
        "label": [
          100,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 320,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "hand-r",
        "colorNumber": 12,
        "label": [
          200,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 320,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "banana-snack",
        "colorNumber": 9,
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
        "id": "banana-curve",
        "colorNumber": 9,
        "label": [
          155,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M140,310 Q155,290 165,310"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "snow-leopard",
    "name": "Snow Leopard",
    "emoji": "🐆",
    "colors": [
      "#E3F2FD",
      "#ECEFF1",
      "#CFD8DC",
      "#B0BEC5",
      "#78909C",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#455A64",
      "#90A4AE"
    ],
    "regions": [
      {
        "id": "snowy-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "snow-mountain",
        "colorNumber": 2,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q75,310 150,330 Q225,310 300,350 L300,400 L0,400 Z"
        }
      },
      {
        "id": "snow-peak-l",
        "colorNumber": 8,
        "label": [
          60,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M20,340 L60,270 L100,340 Z"
        }
      },
      {
        "id": "snow-peak-r",
        "colorNumber": 8,
        "label": [
          240,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M200,340 L240,260 L280,340 Z"
        }
      },
      {
        "id": "body-sleek",
        "colorNumber": 3,
        "label": [
          155,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 260,
          "rx": 65,
          "ry": 50
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 2,
        "label": [
          155,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 270,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "head-round",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 45
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 4,
        "label": [
          115,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 4,
        "label": [
          185,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 125,
          "r": 14
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          115,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 125,
          "r": 7
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          185,
          125
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 125,
          "r": 7
        }
      },
      {
        "id": "eye-l-white",
        "colorNumber": 8,
        "label": [
          132,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "eye-r-white",
        "colorNumber": 8,
        "label": [
          168,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          132,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          168,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          130,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          166,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "nose-dark",
        "colorNumber": 9,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 6
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 6,
        "label": [
          150,
          184
        ],
        "shape": {
          "kind": "path",
          "d": "M143,182 Q150,190 157,182"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          120,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 180,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          180,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 180,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "rosette-1",
        "colorNumber": 5,
        "label": [
          130,
          245
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 245,
          "r": 10
        }
      },
      {
        "id": "rosette-2",
        "colorNumber": 5,
        "label": [
          170,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 235,
          "r": 8
        }
      },
      {
        "id": "rosette-3",
        "colorNumber": 5,
        "label": [
          155,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 270,
          "r": 9
        }
      },
      {
        "id": "rosette-4",
        "colorNumber": 5,
        "label": [
          120,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "rosette-5",
        "colorNumber": 5,
        "label": [
          180,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "thick-fluffy-tail",
        "colorNumber": 4,
        "label": [
          240,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M205,275 Q260,270 270,310 Q275,345 255,340 Q245,330 260,325"
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 10,
        "label": [
          105,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 330,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 10,
        "label": [
          195,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 330,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 8,
        "label": [
          40,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 8,
        "label": [
          260,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 80,
          "r": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "arctic-fox",
    "name": "Arctic Fox",
    "emoji": "🦊",
    "colors": [
      "#ECEFF1",
      "#FFFFFF",
      "#CFD8DC",
      "#212121",
      "#FF80AB",
      "#B3E5FC",
      "#FFD54F",
      "#B0BEC5"
    ],
    "regions": [
      {
        "id": "arctic-bg",
        "colorNumber": 6,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "snow-ground",
        "colorNumber": 2,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M0,355 Q75,335 150,350 Q225,335 300,355 L300,400 L0,400 Z"
        }
      },
      {
        "id": "snow-drift-l",
        "colorNumber": 1,
        "label": [
          50,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M20,360 Q50,330 80,355"
        }
      },
      {
        "id": "snow-drift-r",
        "colorNumber": 1,
        "label": [
          250,
          342
        ],
        "shape": {
          "kind": "path",
          "d": "M220,360 Q250,330 280,355"
        }
      },
      {
        "id": "fluffy-body",
        "colorNumber": 2,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 72,
          "ry": 58
        }
      },
      {
        "id": "chest-fluff",
        "colorNumber": 1,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 42,
          "ry": 32
        }
      },
      {
        "id": "head-round",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 48
        }
      },
      {
        "id": "ear-pointed-l",
        "colorNumber": 2,
        "label": [
          118,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M115,140 L100,70 L140,130 Z"
        }
      },
      {
        "id": "ear-pointed-r",
        "colorNumber": 2,
        "label": [
          182,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M185,140 L200,70 L160,130 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 5,
        "label": [
          115,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M118,135 L105,80 L135,128 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 5,
        "label": [
          185,
          105
        ],
        "shape": {
          "kind": "path",
          "d": "M182,135 L195,80 L165,128 Z"
        }
      },
      {
        "id": "eye-l-white",
        "colorNumber": 2,
        "label": [
          132,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "eye-r-white",
        "colorNumber": 2,
        "label": [
          168,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 4,
        "label": [
          132,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 4,
        "label": [
          168,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 2,
        "label": [
          130,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 2,
        "label": [
          166,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "nose-tiny-black",
        "colorNumber": 4,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 178,
          "r": 6
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 4,
        "label": [
          150,
          186
        ],
        "shape": {
          "kind": "path",
          "d": "M143,184 Q150,192 157,184"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 5,
        "label": [
          122,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 182,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 5,
        "label": [
          178,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 182,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "bushy-tail-huge",
        "colorNumber": 3,
        "label": [
          235,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M195,280 Q255,255 270,295 Q280,340 250,335 Q235,325 255,315 Q260,305 245,300"
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 8,
        "label": [
          108,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 340,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 8,
        "label": [
          192,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 340,
          "rx": 18,
          "ry": 12
        }
      },
      {
        "id": "aurora-band",
        "colorNumber": 6,
        "label": [
          150,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M30,60 Q150,25 270,55"
        }
      },
      {
        "id": "star-1",
        "colorNumber": 7,
        "label": [
          45,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 40,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 7,
        "label": [
          255,
          35
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 35,
          "r": 4
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "sloth",
    "name": "Sloth",
    "emoji": "🦥",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#795548",
      "#D7CCC8",
      "#5D4037",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#8D6E63",
      "#3E2723",
      "#A1887F"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-hang",
        "colorNumber": 5,
        "label": [
          150,
          120
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 110,
          "w": 300,
          "h": 25
        }
      },
      {
        "id": "branch-bark-1",
        "colorNumber": 10,
        "label": [
          80,
          118
        ],
        "shape": {
          "kind": "path",
          "d": "M70,115 Q80,108 90,118"
        }
      },
      {
        "id": "branch-bark-2",
        "colorNumber": 10,
        "label": [
          220,
          118
        ],
        "shape": {
          "kind": "path",
          "d": "M210,115 Q220,108 230,118"
        }
      },
      {
        "id": "leaf-clust-l",
        "colorNumber": 2,
        "label": [
          30,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M20,115 Q15,85 40,80 Q45,105 20,115 Z"
        }
      },
      {
        "id": "leaf-clust-r",
        "colorNumber": 2,
        "label": [
          270,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M280,115 Q285,85 260,80 Q255,105 280,115 Z"
        }
      },
      {
        "id": "body-hanging",
        "colorNumber": 3,
        "label": [
          150,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 240,
          "rx": 60,
          "ry": 55
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 4,
        "label": [
          150,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 245,
          "rx": 35,
          "ry": 30
        }
      },
      {
        "id": "head-round",
        "colorNumber": 3,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 40
        }
      },
      {
        "id": "face-mask-light",
        "colorNumber": 4,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 28
        }
      },
      {
        "id": "eye-patch-l",
        "colorNumber": 5,
        "label": [
          135,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "eye-patch-r",
        "colorNumber": 5,
        "label": [
          165,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 160,
          "r": 14
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 8,
        "label": [
          135,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 160,
          "r": 8
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 8,
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
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          135,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 160,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          165,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 160,
          "r": 4
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          133,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 158,
          "r": 1
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          163,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 158,
          "r": 1
        }
      },
      {
        "id": "nose-brown",
        "colorNumber": 5,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 178,
          "r": 5
        }
      },
      {
        "id": "lazy-smile",
        "colorNumber": 6,
        "label": [
          150,
          186
        ],
        "shape": {
          "kind": "path",
          "d": "M142,184 Q150,192 158,184"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          125,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 125,
          "cy": 180,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          175,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 180,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "arm-hang-l-claw",
        "colorNumber": 9,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M115,180 C90,160 85,130 95,115"
        }
      },
      {
        "id": "arm-hang-r-claw",
        "colorNumber": 9,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M185,180 C210,160 215,130 205,115"
        }
      },
      {
        "id": "claw-hook-l",
        "colorNumber": 6,
        "label": [
          95,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 95,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "claw-hook-r",
        "colorNumber": 6,
        "label": [
          205,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 11,
        "label": [
          120,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 300,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 11,
        "label": [
          180,
          300
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 300,
          "rx": 16,
          "ry": 10
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "fennec-fox",
    "name": "Fennec Fox",
    "emoji": "🦊",
    "colors": [
      "#FFF8E1",
      "#FFD54F",
      "#FFE082",
      "#FFFFFF",
      "#3E2723",
      "#FF80AB",
      "#212121",
      "#FFE0B2",
      "#F9A825",
      "#FFF9C4",
      "#FFB74D"
    ],
    "regions": [
      {
        "id": "desert-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sand-dunes",
        "colorNumber": 9,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,355 Q75,330 150,345 Q225,330 300,355 L300,400 L0,400 Z"
        }
      },
      {
        "id": "sand-ripple",
        "colorNumber": 11,
        "label": [
          100,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M60,365 Q100,355 140,365"
        }
      },
      {
        "id": "body-tiny",
        "colorNumber": 3,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 55,
          "ry": 48
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 4,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 32,
          "ry": 28
        }
      },
      {
        "id": "head-round",
        "colorNumber": 3,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 170,
          "r": 42
        }
      },
      {
        "id": "giant-ear-l",
        "colorNumber": 2,
        "label": [
          110,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M120,140 C85,100 85,30 115,25 C130,22 140,70 140,130 Z"
        }
      },
      {
        "id": "giant-ear-r",
        "colorNumber": 2,
        "label": [
          190,
          75
        ],
        "shape": {
          "kind": "path",
          "d": "M180,140 C215,100 215,30 185,25 C170,22 160,70 160,130 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 6,
        "label": [
          112,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M122,135 C95,100 95,45 118,40 C132,38 138,80 138,128 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 6,
        "label": [
          188,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M178,135 C205,100 205,45 182,40 C168,38 162,80 162,128 Z"
        }
      },
      {
        "id": "eye-huge-l",
        "colorNumber": 4,
        "label": [
          135,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 162,
          "r": 12
        }
      },
      {
        "id": "eye-huge-r",
        "colorNumber": 4,
        "label": [
          165,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 162,
          "r": 12
        }
      },
      {
        "id": "pupil-big-l",
        "colorNumber": 7,
        "label": [
          135,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 162,
          "r": 6
        }
      },
      {
        "id": "pupil-big-r",
        "colorNumber": 7,
        "label": [
          165,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 162,
          "r": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 4,
        "label": [
          133,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 160,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 4,
        "label": [
          163,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 160,
          "r": 2
        }
      },
      {
        "id": "nose-tiny",
        "colorNumber": 5,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 180,
          "r": 5
        }
      },
      {
        "id": "mouth-little",
        "colorNumber": 7,
        "label": [
          150,
          188
        ],
        "shape": {
          "kind": "path",
          "d": "M144,186 Q150,193 156,186"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          122,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 178,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          178,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 178,
          "cy": 178,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "fluffy-tail-big",
        "colorNumber": 3,
        "label": [
          230,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M190,280 Q245,260 258,295 Q265,330 240,325"
        }
      },
      {
        "id": "tail-white-tip",
        "colorNumber": 4,
        "label": [
          250,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M258,295 Q265,325 240,320"
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 8,
        "label": [
          110,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 335,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 8,
        "label": [
          190,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 190,
          "cy": 335,
          "rx": 16,
          "ry": 10
        }
      },
      {
        "id": "desert-moon",
        "colorNumber": 10,
        "label": [
          250,
          55
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 55,
          "r": 22
        }
      },
      {
        "id": "star-1",
        "colorNumber": 2,
        "label": [
          40,
          50
        ],
        "shape": {
          "kind": "circle",
          "cx": 40,
          "cy": 50,
          "r": 4
        }
      },
      {
        "id": "star-2",
        "colorNumber": 2,
        "label": [
          210,
          40
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 40,
          "r": 3
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "deer-antlers",
    "name": "Deer",
    "emoji": "🦌",
    "colors": [
      "#FFF8E1",
      "#8D6E63",
      "#A1887F",
      "#D7CCC8",
      "#FFFFFF",
      "#212121",
      "#FF80AB",
      "#4CAF50",
      "#5D4037",
      "#3E2723"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 8,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass",
        "colorNumber": 8,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "antler-l-main",
        "colorNumber": 9,
        "label": [
          105,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M120,120 L100,65 L80,45 M100,65 L110,35 M100,80 L75,70"
        }
      },
      {
        "id": "antler-r-main",
        "colorNumber": 9,
        "label": [
          195,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M180,120 L200,65 L220,45 M200,65 L190,35 M200,80 L225,70"
        }
      },
      {
        "id": "body-graceful",
        "colorNumber": 2,
        "label": [
          155,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 270,
          "rx": 60,
          "ry": 55
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 4,
        "label": [
          155,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 278,
          "rx": 35,
          "ry": 30
        }
      },
      {
        "id": "head-gentle",
        "colorNumber": 2,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 40
        }
      },
      {
        "id": "face-muzzle",
        "colorNumber": 4,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 178,
          "rx": 22,
          "ry": 16
        }
      },
      {
        "id": "ear-leaf-l",
        "colorNumber": 3,
        "label": [
          108,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M115,145 C95,130 90,105 105,100 C115,98 120,120 120,140 Z"
        }
      },
      {
        "id": "ear-leaf-r",
        "colorNumber": 3,
        "label": [
          192,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M185,145 C205,130 210,105 195,100 C185,98 180,120 180,140 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          110,
          118
        ],
        "shape": {
          "kind": "path",
          "d": "M117,140 C100,128 97,110 108,107 C114,105 118,122 118,135 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          190,
          118
        ],
        "shape": {
          "kind": "path",
          "d": "M183,140 C200,128 203,110 192,107 C186,105 182,122 182,135 Z"
        }
      },
      {
        "id": "eye-doe-l",
        "colorNumber": 5,
        "label": [
          135,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "eye-doe-r",
        "colorNumber": 5,
        "label": [
          165,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          135,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          165,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 5,
        "label": [
          133,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 5,
        "label": [
          163,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "nose-black",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 185,
          "r": 5
        }
      },
      {
        "id": "cheek-blush-l",
        "colorNumber": 7,
        "label": [
          120,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 170,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "cheek-blush-r",
        "colorNumber": 7,
        "label": [
          180,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 170,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "white-tail-spot",
        "colorNumber": 5,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "circle",
          "cx": 210,
          "cy": 260,
          "r": 14
        }
      },
      {
        "id": "short-tail",
        "colorNumber": 2,
        "label": [
          218,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M208,255 Q225,240 230,250"
        }
      },
      {
        "id": "leg-front-l",
        "colorNumber": 9,
        "label": [
          115,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 345,
          "rx": 12,
          "ry": 14
        }
      },
      {
        "id": "leg-front-r",
        "colorNumber": 9,
        "label": [
          175,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 345,
          "rx": 12,
          "ry": 14
        }
      },
      {
        "id": "hoof-l",
        "colorNumber": 10,
        "label": [
          115,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 355,
          "rx": 8,
          "ry": 5
        }
      },
      {
        "id": "hoof-r",
        "colorNumber": 10,
        "label": [
          175,
          355
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 175,
          "cy": 355,
          "rx": 8,
          "ry": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "cheetah",
    "name": "Cheetah",
    "emoji": "🐆",
    "colors": [
      "#FFF8E1",
      "#FF8F00",
      "#FFB74D",
      "#FFE0B2",
      "#212121",
      "#FFFFFF",
      "#FF80AB",
      "#FFD54F",
      "#3E2723",
      "#E65100"
    ],
    "regions": [
      {
        "id": "savanna-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "savanna-ground",
        "colorNumber": 10,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M0,358 Q75,340 150,352 Q225,340 300,358 L300,400 L0,400 Z"
        }
      },
      {
        "id": "body-sleek-fast",
        "colorNumber": 3,
        "label": [
          155,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 260,
          "rx": 65,
          "ry": 52
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 4,
        "label": [
          155,
          268
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 268,
          "rx": 38,
          "ry": 28
        }
      },
      {
        "id": "head-small-aero",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 40
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 2,
        "label": [
          118,
          122
        ],
        "shape": {
          "kind": "path",
          "d": "M120,140 L108,108 L135,130 Z"
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 2,
        "label": [
          182,
          122
        ],
        "shape": {
          "kind": "path",
          "d": "M180,140 L192,108 L165,130 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          120,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M122,136 L113,114 L132,130 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          180,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M178,136 L187,114 L168,130 Z"
        }
      },
      {
        "id": "tear-mark-l",
        "colorNumber": 5,
        "label": [
          135,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M130,165 L128,195"
        }
      },
      {
        "id": "tear-mark-r",
        "colorNumber": 5,
        "label": [
          165,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M170,165 L172,195"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 6,
        "label": [
          135,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 155,
          "r": 8
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 6,
        "label": [
          165,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 155,
          "r": 8
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          135,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          165,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 155,
          "r": 4
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 6,
        "label": [
          133,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 6,
        "label": [
          163,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "nose-dark",
        "colorNumber": 5,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 5
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 5,
        "label": [
          150,
          183
        ],
        "shape": {
          "kind": "path",
          "d": "M143,181 Q150,189 157,181"
        }
      },
      {
        "id": "spot-1",
        "colorNumber": 5,
        "label": [
          130,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 240,
          "r": 6
        }
      },
      {
        "id": "spot-2",
        "colorNumber": 5,
        "label": [
          170,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 235,
          "r": 5
        }
      },
      {
        "id": "spot-3",
        "colorNumber": 5,
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
        "id": "spot-4",
        "colorNumber": 5,
        "label": [
          185,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 255,
          "r": 5
        }
      },
      {
        "id": "spot-5",
        "colorNumber": 5,
        "label": [
          140,
          270
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 270,
          "r": 4
        }
      },
      {
        "id": "long-tail-spot",
        "colorNumber": 3,
        "label": [
          245,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M200,270 Q260,265 275,300 Q280,330 260,325"
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 9,
        "label": [
          108,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 335,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 9,
        "label": [
          195,
          335
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 195,
          "cy": 335,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "sun-hot",
        "colorNumber": 8,
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "polar-bear",
    "name": "Polar Bear",
    "emoji": "🐻‍❄️",
    "colors": [
      "#B3E5FC",
      "#E3F2FD",
      "#FFFFFF",
      "#ECEFF1",
      "#CFD8DC",
      "#212121",
      "#FF80AB",
      "#00BCD4",
      "#90CAF9"
    ],
    "regions": [
      {
        "id": "arctic-sky-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ice-ground",
        "colorNumber": 4,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q75,330 150,345 Q225,330 300,350 L300,400 L0,400 Z"
        }
      },
      {
        "id": "ice-crack-1",
        "colorNumber": 5,
        "label": [
          100,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M80,360 L100,375 L120,365"
        }
      },
      {
        "id": "ice-crack-2",
        "colorNumber": 5,
        "label": [
          220,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M200,365 L220,378 L240,362"
        }
      },
      {
        "id": "body-massive-white",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 78,
          "ry": 62
        }
      },
      {
        "id": "chest-fluff",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 45,
          "ry": 35
        }
      },
      {
        "id": "head-big-round",
        "colorNumber": 3,
        "label": [
          150,
          162
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 162,
          "r": 52
        }
      },
      {
        "id": "ear-round-l",
        "colorNumber": 4,
        "label": [
          112,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "ear-round-r",
        "colorNumber": 4,
        "label": [
          188,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          112,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 112,
          "cy": 118,
          "r": 9
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          188,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 188,
          "cy": 118,
          "r": 9
        }
      },
      {
        "id": "muzzle-snout",
        "colorNumber": 2,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 28,
          "ry": 20
        }
      },
      {
        "id": "nose-black-big",
        "colorNumber": 6,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 178,
          "r": 8
        }
      },
      {
        "id": "nose-shine",
        "colorNumber": 3,
        "label": [
          148,
          176
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 176,
          "r": 3
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 3,
        "label": [
          130,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 155,
          "r": 10
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 3,
        "label": [
          170,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 155,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          130,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 155,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
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
        "id": "eye-shine-l",
        "colorNumber": 3,
        "label": [
          128,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 3,
        "label": [
          168,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 6,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M140,192 Q150,202 160,192"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          118,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 188,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          182,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 188,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 5,
        "label": [
          100,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 100,
          "cy": 345,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 5,
        "label": [
          200,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 200,
          "cy": 345,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "aurora-green",
        "colorNumber": 8,
        "label": [
          80,
          50
        ],
        "shape": {
          "kind": "path",
          "d": "M20,65 Q80,30 140,55"
        }
      },
      {
        "id": "aurora-blue",
        "colorNumber": 9,
        "label": [
          220,
          45
        ],
        "shape": {
          "kind": "path",
          "d": "M160,50 Q220,25 280,55"
        }
      },
      {
        "id": "snowflake-1",
        "colorNumber": 3,
        "label": [
          45,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 90,
          "r": 5
        }
      },
      {
        "id": "snowflake-2",
        "colorNumber": 3,
        "label": [
          255,
          85
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 85,
          "r": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "capybara",
    "name": "Capybara",
    "emoji": "🦫",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#795548",
      "#A1887F",
      "#D7CCC8",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#3E2723",
      "#8D6E63",
      "#BCAAA4"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-pond",
        "colorNumber": 2,
        "label": [
          150,
          355
        ],
        "shape": {
          "kind": "path",
          "d": "M0,345 Q75,325 150,340 Q225,325 300,345 L300,400 L0,400 Z"
        }
      },
      {
        "id": "body-barrel-chubby",
        "colorNumber": 3,
        "label": [
          155,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 265,
          "rx": 75,
          "ry": 60
        }
      },
      {
        "id": "belly-warm",
        "colorNumber": 12,
        "label": [
          155,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 278,
          "rx": 45,
          "ry": 32
        }
      },
      {
        "id": "head-boxy-round",
        "colorNumber": 3,
        "label": [
          140,
          170
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 170,
          "r": 48
        }
      },
      {
        "id": "broad-flat-snout",
        "colorNumber": 4,
        "label": [
          140,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 200,
          "rx": 32,
          "ry": 18
        }
      },
      {
        "id": "nostril-bump-l",
        "colorNumber": 10,
        "label": [
          130,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 195,
          "r": 6
        }
      },
      {
        "id": "nostril-bump-r",
        "colorNumber": 10,
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
        "id": "eye-tiny-l",
        "colorNumber": 8,
        "label": [
          120,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 158,
          "r": 8
        }
      },
      {
        "id": "eye-tiny-r",
        "colorNumber": 8,
        "label": [
          155,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 158,
          "r": 8
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          120,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 120,
          "cy": 158,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          155,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 158,
          "r": 4
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          118,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 118,
          "cy": 156,
          "r": 1
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          153,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 153,
          "cy": 156,
          "r": 1
        }
      },
      {
        "id": "ear-tiny-l",
        "colorNumber": 11,
        "label": [
          108,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 138,
          "r": 10
        }
      },
      {
        "id": "ear-tiny-r",
        "colorNumber": 11,
        "label": [
          168,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 138,
          "r": 10
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          108,
          138
        ],
        "shape": {
          "kind": "path",
          "d": "M103,138 Q108,132 113,138"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          168,
          138
        ],
        "shape": {
          "kind": "path",
          "d": "M163,138 Q168,132 173,138"
        }
      },
      {
        "id": "mouth-calm",
        "colorNumber": 6,
        "label": [
          140,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M130,210 Q140,220 150,210"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          112,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 112,
          "cy": 195,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          168,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 168,
          "cy": 195,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "paw-l",
        "colorNumber": 5,
        "label": [
          105,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 105,
          "cy": 340,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "paw-r",
        "colorNumber": 5,
        "label": [
          205,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 340,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "water-ripple-1",
        "colorNumber": 2,
        "label": [
          80,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M60,350 Q80,342 100,350"
        }
      },
      {
        "id": "water-ripple-2",
        "colorNumber": 2,
        "label": [
          230,
          348
        ],
        "shape": {
          "kind": "path",
          "d": "M210,348 Q230,340 250,348"
        }
      },
      {
        "id": "orange-on-head",
        "colorNumber": 9,
        "label": [
          145,
          128
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 128,
          "r": 14
        }
      },
      {
        "id": "orange-leaf",
        "colorNumber": 2,
        "label": [
          155,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M152,122 L162,108 L158,122 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "okapi",
    "name": "Okapi",
    "emoji": "🦓",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#3E2723",
      "#795548",
      "#FFFFFF",
      "#212121",
      "#FF80AB",
      "#FFD54F",
      "#8D6E63",
      "#D7CCC8",
      "#2E7D32"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass",
        "colorNumber": 11,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "body-chocolate",
        "colorNumber": 3,
        "label": [
          155,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 265,
          "rx": 65,
          "ry": 55
        }
      },
      {
        "id": "leg-stripe-back-l",
        "colorNumber": 5,
        "label": [
          105,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M95,300 L90,355 L100,355 L110,300 Z"
        }
      },
      {
        "id": "leg-stripe-back-r",
        "colorNumber": 5,
        "label": [
          205,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M195,300 L190,355 L200,355 L210,300 Z"
        }
      },
      {
        "id": "zebra-band-l-1",
        "colorNumber": 3,
        "label": [
          95,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M90,310 L95,325 L105,310 Z"
        }
      },
      {
        "id": "zebra-band-l-2",
        "colorNumber": 3,
        "label": [
          95,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M90,330 L95,345 L105,330 Z"
        }
      },
      {
        "id": "zebra-band-r-1",
        "colorNumber": 3,
        "label": [
          195,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M190,310 L195,325 L205,310 Z"
        }
      },
      {
        "id": "zebra-band-r-2",
        "colorNumber": 3,
        "label": [
          195,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M190,330 L195,345 L205,330 Z"
        }
      },
      {
        "id": "head-round",
        "colorNumber": 4,
        "label": [
          145,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 155,
          "r": 40
        }
      },
      {
        "id": "long-face-muzzle",
        "colorNumber": 10,
        "label": [
          145,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 145,
          "cy": 185,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "ear-leaf-l",
        "colorNumber": 4,
        "label": [
          112,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M120,135 L100,85 L135,125 Z"
        }
      },
      {
        "id": "ear-leaf-r",
        "colorNumber": 4,
        "label": [
          178,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M170,135 L190,85 L155,125 Z"
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          112,
          112
        ],
        "shape": {
          "kind": "path",
          "d": "M122,130 L106,92 L132,123 Z"
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          178,
          112
        ],
        "shape": {
          "kind": "path",
          "d": "M168,130 L184,92 L158,123 Z"
        }
      },
      {
        "id": "ossicone-l",
        "colorNumber": 9,
        "label": [
          108,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M115,95 L105,65 L118,90 Z"
        }
      },
      {
        "id": "ossicone-r",
        "colorNumber": 9,
        "label": [
          180,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M175,95 L185,65 L172,90 Z"
        }
      },
      {
        "id": "eye-gentle-l",
        "colorNumber": 5,
        "label": [
          130,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 148,
          "r": 8
        }
      },
      {
        "id": "eye-gentle-r",
        "colorNumber": 5,
        "label": [
          158,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 148,
          "r": 8
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          130,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 148,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          158,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 148,
          "r": 4
        }
      },
      {
        "id": "nose-dark",
        "colorNumber": 6,
        "label": [
          145,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 195,
          "r": 5
        }
      },
      {
        "id": "mouth-calm",
        "colorNumber": 6,
        "label": [
          145,
          205
        ],
        "shape": {
          "kind": "path",
          "d": "M138,202 Q145,212 152,202"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          118,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 170,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          170,
          170
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 170,
          "rx": 10,
          "ry": 6
        }
      },
      {
        "id": "sun-sky",
        "colorNumber": 8,
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "toucan",
    "name": "Toucan",
    "emoji": "🦤",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#212121",
      "#FF9800",
      "#FF5722",
      "#FFD54F",
      "#FFFFFF",
      "#00BCD4",
      "#2E7D32",
      "#3E2723"
    ],
    "regions": [
      {
        "id": "jungle-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-perch",
        "colorNumber": 10,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M20,340 Q150,305 280,335 L280,355 Q150,325 20,360 Z"
        }
      },
      {
        "id": "leaves-l",
        "colorNumber": 2,
        "label": [
          35,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M25,325 Q15,300 40,290 Q48,315 25,325 Z"
        }
      },
      {
        "id": "leaves-r",
        "colorNumber": 9,
        "label": [
          265,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M275,325 Q285,300 260,290 Q252,315 275,325 Z"
        }
      },
      {
        "id": "body-black-round",
        "colorNumber": 3,
        "label": [
          155,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 250,
          "rx": 55,
          "ry": 55
        }
      },
      {
        "id": "chest-white-bib",
        "colorNumber": 7,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 30,
          "ry": 32
        }
      },
      {
        "id": "head-black",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 40
        }
      },
      {
        "id": "giant-banana-beak-top",
        "colorNumber": 4,
        "label": [
          90,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M120,165 L35,178 L35,185 L120,180 Z"
        }
      },
      {
        "id": "giant-banana-beak-bot",
        "colorNumber": 5,
        "label": [
          90,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M120,180 L35,185 L35,192 L120,195 Z"
        }
      },
      {
        "id": "beak-tip-red",
        "colorNumber": 5,
        "label": [
          38,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M45,178 L28,185 L45,192 Z"
        }
      },
      {
        "id": "beak-ridge",
        "colorNumber": 6,
        "label": [
          75,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M120,168 L65,178"
        }
      },
      {
        "id": "beak-nostril",
        "colorNumber": 3,
        "label": [
          48,
          180
        ],
        "shape": {
          "kind": "circle",
          "cx": 48,
          "cy": 180,
          "r": 3
        }
      },
      {
        "id": "eye-ring-blue",
        "colorNumber": 8,
        "label": [
          140,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 152,
          "r": 14
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          140,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 152,
          "r": 10
        }
      },
      {
        "id": "pupil",
        "colorNumber": 3,
        "label": [
          140,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 152,
          "r": 5
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 7,
        "label": [
          138,
          150
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 150,
          "r": 2
        }
      },
      {
        "id": "wing-fold",
        "colorNumber": 10,
        "label": [
          190,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M175,215 Q220,240 200,285 Q185,260 175,235 Z"
        }
      },
      {
        "id": "tail-feathers-dark",
        "colorNumber": 3,
        "label": [
          200,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M180,295 L215,310 L200,320 L175,305 Z"
        }
      },
      {
        "id": "foot-grip-l",
        "colorNumber": 6,
        "label": [
          135,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 320,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "foot-grip-r",
        "colorNumber": 6,
        "label": [
          170,
          318
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 318,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "toe-l-1",
        "colorNumber": 10,
        "label": [
          125,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M135,318 L118,328"
        }
      },
      {
        "id": "toe-r-1",
        "colorNumber": 10,
        "label": [
          180,
          323
        ],
        "shape": {
          "kind": "path",
          "d": "M170,316 L188,326"
        }
      },
      {
        "id": "tropical-leaf-bg-l",
        "colorNumber": 2,
        "label": [
          45,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M30,130 Q15,85 55,70 Q60,115 30,130 Z"
        }
      },
      {
        "id": "tropical-leaf-bg-r",
        "colorNumber": 9,
        "label": [
          255,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M270,130 Q285,85 245,70 Q240,115 270,130 Z"
        }
      },
      {
        "id": "fruit-berry",
        "colorNumber": 5,
        "label": [
          260,
          145
        ],
        "shape": {
          "kind": "circle",
          "cx": 260,
          "cy": 145,
          "r": 8
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "hummingbird",
    "name": "Hummingbird",
    "emoji": "🐦",
    "colors": [
      "#E0F7FA",
      "#00BCD4",
      "#4CAF50",
      "#76FF03",
      "#FF80AB",
      "#FFD54F",
      "#212121",
      "#FFFFFF",
      "#E91E63",
      "#81C784",
      "#00E676",
      "#B2FF59"
    ],
    "regions": [
      {
        "id": "sky-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "flower-bloom-big",
        "colorNumber": 9,
        "label": [
          60,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 320,
          "r": 32
        }
      },
      {
        "id": "flower-center",
        "colorNumber": 6,
        "label": [
          60,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 320,
          "r": 14
        }
      },
      {
        "id": "flower-petal-1",
        "colorNumber": 5,
        "label": [
          40,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M45,300 Q30,280 50,285 Z"
        }
      },
      {
        "id": "flower-petal-2",
        "colorNumber": 5,
        "label": [
          80,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M75,300 Q90,280 70,285 Z"
        }
      },
      {
        "id": "flower-stem",
        "colorNumber": 3,
        "label": [
          55,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M58,340 L52,395"
        }
      },
      {
        "id": "flower-leaf-1",
        "colorNumber": 10,
        "label": [
          40,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M55,370 Q30,360 50,350 Z"
        }
      },
      {
        "id": "flower-leaf-2",
        "colorNumber": 10,
        "label": [
          75,
          375
        ],
        "shape": {
          "kind": "path",
          "d": "M55,380 Q80,370 65,360 Z"
        }
      },
      {
        "id": "hum-body-irid",
        "colorNumber": 2,
        "label": [
          160,
          220
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 160,
          "cy": 220,
          "rx": 35,
          "ry": 48
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 12,
        "label": [
          155,
          235
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 235,
          "rx": 20,
          "ry": 25
        }
      },
      {
        "id": "hum-head",
        "colorNumber": 4,
        "label": [
          155,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 155,
          "r": 25
        }
      },
      {
        "id": "throat-gorget",
        "colorNumber": 9,
        "label": [
          155,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 175,
          "r": 16
        }
      },
      {
        "id": "long-thin-beak",
        "colorNumber": 7,
        "label": [
          105,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M130,150 L70,155 L70,160 L130,162 Z"
        }
      },
      {
        "id": "eye-bright",
        "colorNumber": 8,
        "label": [
          148,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 148,
          "r": 6
        }
      },
      {
        "id": "pupil",
        "colorNumber": 7,
        "label": [
          148,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 148,
          "r": 3
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 8,
        "label": [
          146,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 146,
          "cy": 146,
          "r": 1
        }
      },
      {
        "id": "wing-spread-l",
        "colorNumber": 3,
        "label": [
          210,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M175,195 Q240,120 280,155 Q250,180 200,195 Z"
        }
      },
      {
        "id": "wing-feather-tips",
        "colorNumber": 11,
        "label": [
          260,
          145
        ],
        "shape": {
          "kind": "path",
          "d": "M255,135 L275,150 L260,160"
        }
      },
      {
        "id": "wing-spread-r",
        "colorNumber": 2,
        "label": [
          120,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M140,195 Q100,250 85,220 Q105,200 135,195 Z"
        }
      },
      {
        "id": "tail-fan",
        "colorNumber": 2,
        "label": [
          175,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M165,268 L200,290 L185,300 L160,280 Z"
        }
      },
      {
        "id": "tail-feather-2",
        "colorNumber": 4,
        "label": [
          190,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M170,275 L210,300 L195,310 Z"
        }
      },
      {
        "id": "motion-blur-1",
        "colorNumber": 1,
        "label": [
          235,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 235,
          "cy": 140,
          "r": 6
        }
      },
      {
        "id": "motion-blur-2",
        "colorNumber": 1,
        "label": [
          250,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 160,
          "r": 5
        }
      },
      {
        "id": "motion-blur-3",
        "colorNumber": 1,
        "label": [
          245,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 175,
          "r": 4
        }
      },
      {
        "id": "sun-warmth",
        "colorNumber": 6,
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "eagle",
    "name": "Bald Eagle",
    "emoji": "🦅",
    "colors": [
      "#E3F2FD",
      "#3E2723",
      "#5D4037",
      "#FFFFFF",
      "#FFD54F",
      "#FF8F00",
      "#212121",
      "#90CAF9",
      "#81D4FA",
      "#795548",
      "#B3E5FC"
    ],
    "regions": [
      {
        "id": "sky-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "cloud-l",
        "colorNumber": 8,
        "label": [
          60,
          60
        ],
        "shape": {
          "kind": "path",
          "d": "M30,70 Q60,45 90,70 Q60,65 30,70 Z"
        }
      },
      {
        "id": "cloud-r",
        "colorNumber": 11,
        "label": [
          240,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M210,80 Q240,55 270,80 Q240,70 210,80 Z"
        }
      },
      {
        "id": "wing-spread-l",
        "colorNumber": 2,
        "label": [
          60,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M150,190 Q40,160 20,210 Q40,220 80,215 Q120,210 150,210 Z"
        }
      },
      {
        "id": "wing-spread-r",
        "colorNumber": 2,
        "label": [
          240,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M150,190 Q260,160 280,210 Q260,220 220,215 Q180,210 150,210 Z"
        }
      },
      {
        "id": "wing-feather-tip-l",
        "colorNumber": 3,
        "label": [
          30,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M20,210 L10,220 L30,215"
        }
      },
      {
        "id": "wing-feather-tip-r",
        "colorNumber": 3,
        "label": [
          270,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M280,210 L290,220 L270,215"
        }
      },
      {
        "id": "body-dark-brown",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 45,
          "ry": 55
        }
      },
      {
        "id": "belly-feather",
        "colorNumber": 10,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 28,
          "ry": 30
        }
      },
      {
        "id": "head-white-plume",
        "colorNumber": 4,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 35
        }
      },
      {
        "id": "hooked-beak-top",
        "colorNumber": 5,
        "label": [
          120,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M135,162 L100,172 Q105,165 110,170 Z"
        }
      },
      {
        "id": "hooked-beak-bot",
        "colorNumber": 6,
        "label": [
          118,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M135,175 L105,180 L100,175 Z"
        }
      },
      {
        "id": "fierce-eye-l",
        "colorNumber": 4,
        "label": [
          140,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 148,
          "r": 8
        }
      },
      {
        "id": "eye-iris",
        "colorNumber": 5,
        "label": [
          140,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "pupil-dark",
        "colorNumber": 7,
        "label": [
          140,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 148,
          "r": 3
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 4,
        "label": [
          138,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 146,
          "r": 1
        }
      },
      {
        "id": "brow-fierce",
        "colorNumber": 7,
        "label": [
          145,
          140
        ],
        "shape": {
          "kind": "path",
          "d": "M128,142 L155,138"
        }
      },
      {
        "id": "tail-fan",
        "colorNumber": 2,
        "label": [
          150,
          325
        ],
        "shape": {
          "kind": "path",
          "d": "M130,315 L120,345 L150,340 L180,345 L170,315 Z"
        }
      },
      {
        "id": "tail-feather-white",
        "colorNumber": 4,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M135,335 L150,355 L165,335 Z"
        }
      },
      {
        "id": "talon-l",
        "colorNumber": 5,
        "label": [
          120,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 330,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "talon-r",
        "colorNumber": 5,
        "label": [
          180,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 180,
          "cy": 330,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "claw-l-1",
        "colorNumber": 7,
        "label": [
          112,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M120,328 L108,338"
        }
      },
      {
        "id": "claw-r-1",
        "colorNumber": 7,
        "label": [
          188,
          335
        ],
        "shape": {
          "kind": "path",
          "d": "M180,328 L192,338"
        }
      },
      {
        "id": "mountain-bg",
        "colorNumber": 9,
        "label": [
          80,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M0,400 L80,340 L160,400 Z"
        }
      },
      {
        "id": "mountain-bg-2",
        "colorNumber": 8,
        "label": [
          220,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M140,400 L220,345 L300,400 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "kingfisher",
    "name": "Kingfisher",
    "emoji": "🐦‍🔥",
    "colors": [
      "#E0F7FA",
      "#00BCD4",
      "#FF5722",
      "#FF9800",
      "#FFFFFF",
      "#212121",
      "#FFD54F",
      "#0097A7",
      "#81D4FA",
      "#004D40",
      "#B2EBF2",
      "#26C6DA"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "water-surface",
        "colorNumber": 9,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M0,345 Q75,325 150,340 Q225,325 300,345 L300,400 L0,400 Z"
        }
      },
      {
        "id": "branch-perch",
        "colorNumber": 10,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M40,325 Q150,290 260,320 L260,340 Q150,310 40,345 Z"
        }
      },
      {
        "id": "body-round-blue",
        "colorNumber": 2,
        "label": [
          155,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 245,
          "rx": 40,
          "ry": 50
        }
      },
      {
        "id": "chest-orange-bright",
        "colorNumber": 3,
        "label": [
          155,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 260,
          "rx": 25,
          "ry": 30
        }
      },
      {
        "id": "head-blue",
        "colorNumber": 8,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 32
        }
      },
      {
        "id": "crown-feathers",
        "colorNumber": 2,
        "label": [
          150,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M130,145 L125,115 L140,138 L145,108 L155,135 L160,110 L170,140 L175,118 Z"
        }
      },
      {
        "id": "dagger-beak-long",
        "colorNumber": 6,
        "label": [
          100,
          168
        ],
        "shape": {
          "kind": "path",
          "d": "M120,162 L55,168 L55,174 L120,175 Z"
        }
      },
      {
        "id": "beak-tip",
        "colorNumber": 4,
        "label": [
          58,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M68,165 L50,170 L68,175 Z"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 5,
        "label": [
          145,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 158,
          "r": 8
        }
      },
      {
        "id": "pupil",
        "colorNumber": 6,
        "label": [
          145,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 158,
          "r": 4
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 5,
        "label": [
          143,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 143,
          "cy": 156,
          "r": 1
        }
      },
      {
        "id": "eye-stripe-dark",
        "colorNumber": 6,
        "label": [
          158,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M155,155 L175,165"
        }
      },
      {
        "id": "white-throat-patch",
        "colorNumber": 5,
        "label": [
          145,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M130,178 Q145,195 160,178 Z"
        }
      },
      {
        "id": "wing-fold-blue",
        "colorNumber": 8,
        "label": [
          185,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M170,210 Q210,240 195,280 Q180,255 170,230 Z"
        }
      },
      {
        "id": "wing-detail",
        "colorNumber": 12,
        "label": [
          195,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M180,230 Q210,250 200,270"
        }
      },
      {
        "id": "tail-blue-long",
        "colorNumber": 2,
        "label": [
          165,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M155,295 L180,310 L170,320 L150,305 Z"
        }
      },
      {
        "id": "foot-perch-l",
        "colorNumber": 4,
        "label": [
          140,
          305
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 140,
          "cy": 305,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "foot-perch-r",
        "colorNumber": 4,
        "label": [
          165,
          303
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 165,
          "cy": 303,
          "rx": 12,
          "ry": 6
        }
      },
      {
        "id": "toe-grip-l",
        "colorNumber": 6,
        "label": [
          130,
          308
        ],
        "shape": {
          "kind": "path",
          "d": "M140,303 L125,310"
        }
      },
      {
        "id": "toe-grip-r",
        "colorNumber": 6,
        "label": [
          175,
          306
        ],
        "shape": {
          "kind": "path",
          "d": "M165,301 L180,308"
        }
      },
      {
        "id": "water-splash-1",
        "colorNumber": 11,
        "label": [
          60,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 360,
          "r": 8
        }
      },
      {
        "id": "water-splash-2",
        "colorNumber": 11,
        "label": [
          240,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 355,
          "r": 8
        }
      },
      {
        "id": "fish-catch-silver",
        "colorNumber": 5,
        "label": [
          80,
          355
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 355,
          "r": 6
        }
      },
      {
        "id": "sun-warm",
        "colorNumber": 7,
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "cardinal",
    "name": "Cardinal",
    "emoji": "🐦",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#D32F2F",
      "#F44336",
      "#FF8A80",
      "#212121",
      "#FFFFFF",
      "#FFD54F",
      "#B71C1C",
      "#2E7D32",
      "#FFCDD2"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch",
        "colorNumber": 10,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M30,340 Q150,305 270,335 L270,355 Q150,325 30,360 Z"
        }
      },
      {
        "id": "leaf-l",
        "colorNumber": 2,
        "label": [
          40,
          315
        ],
        "shape": {
          "kind": "path",
          "d": "M30,325 Q20,305 45,295 Q50,318 30,325 Z"
        }
      },
      {
        "id": "leaf-r",
        "colorNumber": 2,
        "label": [
          260,
          318
        ],
        "shape": {
          "kind": "path",
          "d": "M270,330 Q280,310 255,300 Q250,322 270,330 Z"
        }
      },
      {
        "id": "body-red-round",
        "colorNumber": 3,
        "label": [
          155,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 250,
          "rx": 48,
          "ry": 52
        }
      },
      {
        "id": "breast-lighter",
        "colorNumber": 11,
        "label": [
          155,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 155,
          "cy": 265,
          "rx": 28,
          "ry": 28
        }
      },
      {
        "id": "wing-fold-dark",
        "colorNumber": 9,
        "label": [
          195,
          245
        ],
        "shape": {
          "kind": "path",
          "d": "M175,220 Q215,245 200,290 Q185,260 175,235 Z"
        }
      },
      {
        "id": "head-red",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 35
        }
      },
      {
        "id": "crest-pointy",
        "colorNumber": 4,
        "label": [
          155,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M140,135 L155,80 L170,135 Z"
        }
      },
      {
        "id": "crest-inner",
        "colorNumber": 5,
        "label": [
          155,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M145,132 L155,95 L165,132 Z"
        }
      },
      {
        "id": "face-mask-black",
        "colorNumber": 6,
        "label": [
          150,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M130,155 Q150,165 170,155 L170,180 Q150,190 130,180 Z"
        }
      },
      {
        "id": "beak-cone-top",
        "colorNumber": 8,
        "label": [
          122,
          168
        ],
        "shape": {
          "kind": "path",
          "d": "M130,162 L105,168 Z"
        }
      },
      {
        "id": "beak-cone-bot",
        "colorNumber": 8,
        "label": [
          122,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M130,175 L105,172 Z"
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          138,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 155,
          "r": 7
        }
      },
      {
        "id": "pupil",
        "colorNumber": 6,
        "label": [
          138,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 155,
          "r": 3
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 7,
        "label": [
          136,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 136,
          "cy": 153,
          "r": 1
        }
      },
      {
        "id": "tail-long-red",
        "colorNumber": 3,
        "label": [
          170,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M158,300 L190,320 L175,330 L148,310 Z"
        }
      },
      {
        "id": "tail-feather-dark",
        "colorNumber": 9,
        "label": [
          180,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M165,305 L195,325 L180,335 Z"
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 6,
        "label": [
          135,
          322
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 322,
          "rx": 12,
          "ry": 7
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 6,
        "label": [
          170,
          320
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 320,
          "rx": 12,
          "ry": 7
        }
      },
      {
        "id": "toe-l",
        "colorNumber": 6,
        "label": [
          125,
          326
        ],
        "shape": {
          "kind": "path",
          "d": "M135,320 L120,328"
        }
      },
      {
        "id": "toe-r",
        "colorNumber": 6,
        "label": [
          180,
          324
        ],
        "shape": {
          "kind": "path",
          "d": "M170,318 L185,326"
        }
      },
      {
        "id": "berry-1",
        "colorNumber": 4,
        "label": [
          50,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 50,
          "cy": 295,
          "r": 6
        }
      },
      {
        "id": "berry-2",
        "colorNumber": 4,
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
      },
      {
        "id": "snow-flurry",
        "colorNumber": 7,
        "label": [
          45,
          60
        ],
        "shape": {
          "kind": "circle",
          "cx": 45,
          "cy": 60,
          "r": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "blue-whale",
    "name": "Blue Whale",
    "emoji": "🐋",
    "colors": [
      "#0D47A1",
      "#1565C0",
      "#1976D2",
      "#42A5F5",
      "#90CAF9",
      "#BBDEFB",
      "#FFFFFF",
      "#212121",
      "#FFD54F",
      "#64B5F6",
      "#E3F2FD",
      "#B3E5FC"
    ],
    "regions": [
      {
        "id": "deep-ocean-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ocean-glow",
        "colorNumber": 2,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 130
        }
      },
      {
        "id": "whale-body-massive",
        "colorNumber": 3,
        "label": [
          150,
          220
        ],
        "shape": {
          "kind": "path",
          "d": "M50,230 C50,150 250,140 260,220 C260,280 60,290 50,230 Z"
        }
      },
      {
        "id": "belly-pleats",
        "colorNumber": 5,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M80,250 Q150,275 225,245 L225,260 Q150,290 80,265 Z"
        }
      },
      {
        "id": "belly-pleat-line-1",
        "colorNumber": 10,
        "label": [
          120,
          262
        ],
        "shape": {
          "kind": "path",
          "d": "M90,258 Q120,270 150,258"
        }
      },
      {
        "id": "belly-pleat-line-2",
        "colorNumber": 10,
        "label": [
          185,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M155,255 Q185,268 215,252"
        }
      },
      {
        "id": "head-dome",
        "colorNumber": 3,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M60,220 C55,170 100,155 110,195 Z"
        }
      },
      {
        "id": "blowhole-spout",
        "colorNumber": 7,
        "label": [
          95,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M95,165 Q92,130 85,100 M95,165 Q98,130 105,100"
        }
      },
      {
        "id": "spout-mist-1",
        "colorNumber": 12,
        "label": [
          82,
          95
        ],
        "shape": {
          "kind": "circle",
          "cx": 82,
          "cy": 95,
          "r": 8
        }
      },
      {
        "id": "spout-mist-2",
        "colorNumber": 12,
        "label": [
          105,
          90
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 90,
          "r": 7
        }
      },
      {
        "id": "spout-mist-3",
        "colorNumber": 7,
        "label": [
          93,
          80
        ],
        "shape": {
          "kind": "circle",
          "cx": 93,
          "cy": 80,
          "r": 5
        }
      },
      {
        "id": "eye-small",
        "colorNumber": 6,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 210,
          "r": 8
        }
      },
      {
        "id": "pupil",
        "colorNumber": 8,
        "label": [
          75,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 210,
          "r": 4
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 6,
        "label": [
          73,
          208
        ],
        "shape": {
          "kind": "circle",
          "cx": 73,
          "cy": 208,
          "r": 2
        }
      },
      {
        "id": "pectoral-fin-l",
        "colorNumber": 4,
        "label": [
          120,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 120,
          "cy": 260,
          "rx": 28,
          "ry": 12
        }
      },
      {
        "id": "fluke-tail-top",
        "colorNumber": 3,
        "label": [
          265,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M260,220 Q285,180 295,195"
        }
      },
      {
        "id": "fluke-tail-bot",
        "colorNumber": 3,
        "label": [
          265,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M260,220 Q285,265 295,250"
        }
      },
      {
        "id": "mouth-line-long",
        "colorNumber": 8,
        "label": [
          100,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M65,228 Q100,240 140,230"
        }
      },
      {
        "id": "chin-barnacle-1",
        "colorNumber": 4,
        "label": [
          85,
          240
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 85,
          "cy": 240,
          "rx": 6,
          "ry": 4
        }
      },
      {
        "id": "chin-barnacle-2",
        "colorNumber": 4,
        "label": [
          110,
          245
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 110,
          "cy": 245,
          "rx": 5,
          "ry": 3
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 11,
        "label": [
          60,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 160,
          "r": 7
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 11,
        "label": [
          80,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 140,
          "r": 5
        }
      },
      {
        "id": "bubble-3",
        "colorNumber": 11,
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
        "id": "tiny-fish-1",
        "colorNumber": 9,
        "label": [
          250,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 120,
          "r": 6
        }
      },
      {
        "id": "tiny-fish-2",
        "colorNumber": 9,
        "label": [
          230,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 230,
          "cy": 140,
          "r": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "lobster",
    "name": "Lobster",
    "emoji": "🦞",
    "colors": [
      "#E3F2FD",
      "#00BCD4",
      "#D32F2F",
      "#F44336",
      "#FF8A80",
      "#212121",
      "#FFFFFF",
      "#FFCDD2",
      "#B71C1C",
      "#81D4FA"
    ],
    "regions": [
      {
        "id": "ocean-floor-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sandy-bottom",
        "colorNumber": 10,
        "label": [
          150,
          375
        ],
        "shape": {
          "kind": "path",
          "d": "M0,365 Q75,350 150,360 Q225,350 300,365 L300,400 L0,400 Z"
        }
      },
      {
        "id": "body-segmented-main",
        "colorNumber": 3,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 40,
          "ry": 55
        }
      },
      {
        "id": "body-segment-1",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 35,
          "ry": 18
        }
      },
      {
        "id": "body-segment-2",
        "colorNumber": 4,
        "label": [
          150,
          230
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 230,
          "rx": 38,
          "ry": 16
        }
      },
      {
        "id": "body-segment-3",
        "colorNumber": 4,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 35,
          "ry": 14
        }
      },
      {
        "id": "head-carapace",
        "colorNumber": 3,
        "label": [
          150,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 155,
          "r": 35
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 6,
        "label": [
          70,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M130,145 Q60,90 40,70"
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 6,
        "label": [
          230,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M170,145 Q240,90 260,70"
        }
      },
      {
        "id": "claw-arm-l",
        "colorNumber": 3,
        "label": [
          80,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M115,180 L65,190 Z"
        }
      },
      {
        "id": "claw-arm-r",
        "colorNumber": 3,
        "label": [
          220,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M185,180 L235,190 Z"
        }
      },
      {
        "id": "crusher-claw-l",
        "colorNumber": 9,
        "label": [
          50,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 50,
          "cy": 185,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "crusher-claw-r",
        "colorNumber": 9,
        "label": [
          250,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 185,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "claw-pincer-l",
        "colorNumber": 3,
        "label": [
          35,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M40,180 L22,170 L30,185 Z"
        }
      },
      {
        "id": "claw-pincer-r",
        "colorNumber": 3,
        "label": [
          265,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M260,180 L278,170 L270,185 Z"
        }
      },
      {
        "id": "eye-stalk-l",
        "colorNumber": 6,
        "label": [
          135,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 138,
          "r": 6
        }
      },
      {
        "id": "eye-stalk-r",
        "colorNumber": 6,
        "label": [
          165,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 138,
          "r": 6
        }
      },
      {
        "id": "eye-pupil-l",
        "colorNumber": 7,
        "label": [
          135,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 138,
          "r": 3
        }
      },
      {
        "id": "eye-pupil-r",
        "colorNumber": 7,
        "label": [
          165,
          138
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 138,
          "r": 3
        }
      },
      {
        "id": "tail-fan-center",
        "colorNumber": 4,
        "label": [
          150,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M140,280 L150,320 L160,280 Z"
        }
      },
      {
        "id": "tail-fan-l",
        "colorNumber": 5,
        "label": [
          135,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M135,280 L120,315 L145,285 Z"
        }
      },
      {
        "id": "tail-fan-r",
        "colorNumber": 5,
        "label": [
          165,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M165,280 L180,315 L155,285 Z"
        }
      },
      {
        "id": "leg-l-1",
        "colorNumber": 8,
        "label": [
          105,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M125,220 L95,235"
        }
      },
      {
        "id": "leg-l-2",
        "colorNumber": 8,
        "label": [
          100,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M120,238 L90,255"
        }
      },
      {
        "id": "leg-r-1",
        "colorNumber": 8,
        "label": [
          195,
          230
        ],
        "shape": {
          "kind": "path",
          "d": "M175,220 L205,235"
        }
      },
      {
        "id": "leg-r-2",
        "colorNumber": 8,
        "label": [
          200,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M180,238 L210,255"
        }
      },
      {
        "id": "bubble-seafloor-1",
        "colorNumber": 2,
        "label": [
          55,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 330,
          "r": 6
        }
      },
      {
        "id": "bubble-seafloor-2",
        "colorNumber": 2,
        "label": [
          245,
          325
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 325,
          "r": 6
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "dragonfly",
    "name": "Dragonfly",
    "emoji": "🪰",
    "colors": [
      "#E0F7FA",
      "#00BCD4",
      "#4CAF50",
      "#76FF03",
      "#00E5FF",
      "#FFD54F",
      "#212121",
      "#FFFFFF",
      "#81C784",
      "#E8F5E9",
      "#26C6DA"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M0,360 Q75,345 150,355 Q225,345 300,360 L300,400 L0,400 Z"
        }
      },
      {
        "id": "cattail-stem-l",
        "colorNumber": 3,
        "label": [
          50,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M48,355 L52,200"
        }
      },
      {
        "id": "cattail-stem-r",
        "colorNumber": 3,
        "label": [
          250,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M248,355 L252,230"
        }
      },
      {
        "id": "cattail-head-l",
        "colorNumber": 7,
        "label": [
          50,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 50,
          "cy": 195,
          "rx": 8,
          "ry": 18
        }
      },
      {
        "id": "cattail-head-r",
        "colorNumber": 7,
        "label": [
          250,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 250,
          "cy": 225,
          "rx": 8,
          "ry": 18
        }
      },
      {
        "id": "head-big-compound",
        "colorNumber": 2,
        "label": [
          150,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 140,
          "r": 28
        }
      },
      {
        "id": "compound-eye-l",
        "colorNumber": 5,
        "label": [
          135,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 132,
          "r": 14
        }
      },
      {
        "id": "compound-eye-r",
        "colorNumber": 5,
        "label": [
          165,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 132,
          "r": 14
        }
      },
      {
        "id": "eye-center-l",
        "colorNumber": 7,
        "label": [
          135,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 132,
          "r": 5
        }
      },
      {
        "id": "eye-center-r",
        "colorNumber": 7,
        "label": [
          165,
          132
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 132,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          132,
          129
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 129,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          162,
          129
        ],
        "shape": {
          "kind": "circle",
          "cx": 162,
          "cy": 129,
          "r": 2
        }
      },
      {
        "id": "thorax-section",
        "colorNumber": 2,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 175,
          "rx": 18,
          "ry": 15
        }
      },
      {
        "id": "abdomen-needle-1",
        "colorNumber": 4,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "path",
          "d": "M142,190 L158,190 L156,230 L144,230 Z"
        }
      },
      {
        "id": "abdomen-needle-2",
        "colorNumber": 11,
        "label": [
          150,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M144,230 L156,230 L154,270 L146,270 Z"
        }
      },
      {
        "id": "abdomen-needle-3",
        "colorNumber": 2,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M146,270 L154,270 L152,310 L148,310 Z"
        }
      },
      {
        "id": "wing-top-l",
        "colorNumber": 8,
        "label": [
          85,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M140,170 Q60,130 70,160 Q80,180 140,175 Z"
        }
      },
      {
        "id": "wing-top-r",
        "colorNumber": 8,
        "label": [
          215,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M160,170 Q240,130 230,160 Q220,180 160,175 Z"
        }
      },
      {
        "id": "wing-bot-l",
        "colorNumber": 10,
        "label": [
          90,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M140,180 Q65,170 75,195 Q85,210 140,195 Z"
        }
      },
      {
        "id": "wing-bot-r",
        "colorNumber": 10,
        "label": [
          210,
          190
        ],
        "shape": {
          "kind": "path",
          "d": "M160,180 Q235,170 225,195 Q215,210 160,195 Z"
        }
      },
      {
        "id": "wing-vein-l",
        "colorNumber": 11,
        "label": [
          100,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M138,172 L80,155"
        }
      },
      {
        "id": "wing-vein-r",
        "colorNumber": 11,
        "label": [
          200,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M162,172 L220,155"
        }
      },
      {
        "id": "lily-pad",
        "colorNumber": 3,
        "label": [
          80,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 365,
          "r": 16
        }
      },
      {
        "id": "water-flower",
        "colorNumber": 6,
        "label": [
          220,
          360
        ],
        "shape": {
          "kind": "circle",
          "cx": 220,
          "cy": 360,
          "r": 10
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "stag-beetle",
    "name": "Stag Beetle",
    "emoji": "🪲",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#3E2723",
      "#5D4037",
      "#795548",
      "#8D6E63",
      "#212121",
      "#FFFFFF",
      "#2E7D32"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "leaf-surface",
        "colorNumber": 2,
        "label": [
          150,
          350
        ],
        "shape": {
          "kind": "path",
          "d": "M0,335 Q75,315 150,330 Q225,315 300,335 L300,400 L0,400 Z"
        }
      },
      {
        "id": "leaf-vein-center",
        "colorNumber": 9,
        "label": [
          150,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M150,335 L150,395"
        }
      },
      {
        "id": "leaf-vein-l",
        "colorNumber": 9,
        "label": [
          100,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M150,360 L80,380"
        }
      },
      {
        "id": "leaf-vein-r",
        "colorNumber": 9,
        "label": [
          200,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M150,360 L220,380"
        }
      },
      {
        "id": "mandible-antler-l",
        "colorNumber": 3,
        "label": [
          100,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M125,155 Q70,100 65,70 Q80,80 95,75 Q115,90 125,130 Z"
        }
      },
      {
        "id": "mandible-antler-r",
        "colorNumber": 3,
        "label": [
          200,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M175,155 Q230,100 235,70 Q220,80 205,75 Q185,90 175,130 Z"
        }
      },
      {
        "id": "mandible-tip-l",
        "colorNumber": 7,
        "label": [
          68,
          72
        ],
        "shape": {
          "kind": "path",
          "d": "M65,70 Q55,60 70,55 Q78,68 65,70 Z"
        }
      },
      {
        "id": "mandible-tip-r",
        "colorNumber": 7,
        "label": [
          232,
          72
        ],
        "shape": {
          "kind": "path",
          "d": "M235,70 Q245,60 230,55 Q222,68 235,70 Z"
        }
      },
      {
        "id": "head-plate",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 30
        }
      },
      {
        "id": "pronotum-shield",
        "colorNumber": 4,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 200,
          "rx": 38,
          "ry": 22
        }
      },
      {
        "id": "elytra-wing-l",
        "colorNumber": 5,
        "label": [
          120,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M115,215 C95,240 95,310 120,325 L150,325 L150,215 Z"
        }
      },
      {
        "id": "elytra-wing-r",
        "colorNumber": 5,
        "label": [
          180,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M185,215 C205,240 205,310 180,325 L150,325 L150,215 Z"
        }
      },
      {
        "id": "elytra-seam",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "path",
          "d": "M150,215 L150,325"
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          135,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 152,
          "r": 6
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          165,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 152,
          "r": 6
        }
      },
      {
        "id": "eye-pupil-l",
        "colorNumber": 7,
        "label": [
          135,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 152,
          "r": 3
        }
      },
      {
        "id": "eye-pupil-r",
        "colorNumber": 7,
        "label": [
          165,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 152,
          "r": 3
        }
      },
      {
        "id": "leg-front-l",
        "colorNumber": 3,
        "label": [
          85,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M115,218 L75,230"
        }
      },
      {
        "id": "leg-front-r",
        "colorNumber": 3,
        "label": [
          215,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M185,218 L225,230"
        }
      },
      {
        "id": "leg-mid-l",
        "colorNumber": 3,
        "label": [
          80,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M110,255 L70,268"
        }
      },
      {
        "id": "leg-mid-r",
        "colorNumber": 3,
        "label": [
          220,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M190,255 L230,268"
        }
      },
      {
        "id": "leg-back-l",
        "colorNumber": 3,
        "label": [
          85,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M110,290 L75,305"
        }
      },
      {
        "id": "leg-back-r",
        "colorNumber": 3,
        "label": [
          215,
          295
        ],
        "shape": {
          "kind": "path",
          "d": "M190,290 L225,305"
        }
      },
      {
        "id": "elytra-shine-l",
        "colorNumber": 6,
        "label": [
          125,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 240,
          "r": 10
        }
      },
      {
        "id": "elytra-shine-r",
        "colorNumber": 6,
        "label": [
          175,
          240
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 240,
          "r": 10
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "lemur",
    "name": "Ring-tailed Lemur",
    "emoji": "🦝",
    "colors": [
      "#E8F5E9",
      "#78909C",
      "#CFD8DC",
      "#FFFFFF",
      "#FFD54F",
      "#212121",
      "#FF80AB",
      "#212121",
      "#2E7D32",
      "#90A4AE"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-perch",
        "colorNumber": 9,
        "label": [
          150,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M20,340 Q150,305 280,335 L280,355 Q150,325 20,360 Z"
        }
      },
      {
        "id": "body-gray",
        "colorNumber": 2,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 50,
          "ry": 55
        }
      },
      {
        "id": "belly-white",
        "colorNumber": 3,
        "label": [
          150,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 265,
          "rx": 28,
          "ry": 30
        }
      },
      {
        "id": "head-triangular",
        "colorNumber": 2,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 160,
          "r": 40
        }
      },
      {
        "id": "face-white-mask",
        "colorNumber": 4,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 28
        }
      },
      {
        "id": "ear-tuft-l",
        "colorNumber": 2,
        "label": [
          115,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M120,140 L105,100 L135,130 Z"
        }
      },
      {
        "id": "ear-tuft-r",
        "colorNumber": 2,
        "label": [
          185,
          120
        ],
        "shape": {
          "kind": "path",
          "d": "M180,140 L195,100 L165,130 Z"
        }
      },
      {
        "id": "ear-white-l",
        "colorNumber": 4,
        "label": [
          118,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M123,138 L112,108 L132,130 Z"
        }
      },
      {
        "id": "ear-white-r",
        "colorNumber": 4,
        "label": [
          182,
          125
        ],
        "shape": {
          "kind": "path",
          "d": "M177,138 L188,108 L168,130 Z"
        }
      },
      {
        "id": "huge-eye-l-gold",
        "colorNumber": 5,
        "label": [
          135,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 135,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "huge-eye-r-gold",
        "colorNumber": 5,
        "label": [
          165,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
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
        "id": "pupil-r",
        "colorNumber": 6,
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
        "id": "eye-shine-l",
        "colorNumber": 4,
        "label": [
          133,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 133,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 4,
        "label": [
          163,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 163,
          "cy": 153,
          "r": 2
        }
      },
      {
        "id": "nose-dark-patch",
        "colorNumber": 8,
        "label": [
          150,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 178,
          "r": 12
        }
      },
      {
        "id": "nose-tip",
        "colorNumber": 6,
        "label": [
          150,
          175
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 175,
          "r": 4
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 6,
        "label": [
          150,
          186
        ],
        "shape": {
          "kind": "path",
          "d": "M143,184 Q150,192 157,184"
        }
      },
      {
        "id": "ring-tail-stripe-1-white",
        "colorNumber": 4,
        "label": [
          230,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M195,260 Q235,200 260,210"
        }
      },
      {
        "id": "ring-tail-stripe-2-dark",
        "colorNumber": 8,
        "label": [
          240,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M230,200 Q245,175 260,185"
        }
      },
      {
        "id": "ring-tail-stripe-3-white",
        "colorNumber": 4,
        "label": [
          248,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M240,185 Q253,160 265,170"
        }
      },
      {
        "id": "ring-tail-stripe-4-dark",
        "colorNumber": 8,
        "label": [
          255,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M248,170 Q260,145 270,158"
        }
      },
      {
        "id": "hand-l",
        "colorNumber": 10,
        "label": [
          115,
          318
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 318,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "hand-r",
        "colorNumber": 10,
        "label": [
          185,
          318
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 318,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          122,
          180
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 122,
          "cy": 180,
          "rx": 8,
          "ry": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "quokka",
    "name": "Quokka",
    "emoji": "🐿️",
    "colors": [
      "#FFF8E1",
      "#8D6E63",
      "#D7CCC8",
      "#4CAF50",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#5D4037",
      "#FFD54F",
      "#A1887F",
      "#BCAAA4"
    ],
    "regions": [
      {
        "id": "island-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 4,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass-tufts",
        "colorNumber": 4,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "chubby-body",
        "colorNumber": 2,
        "label": [
          150,
          275
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 275,
          "rx": 68,
          "ry": 58
        }
      },
      {
        "id": "belly-cream",
        "colorNumber": 3,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 38,
          "ry": 32
        }
      },
      {
        "id": "head-smiling-round",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 52
        }
      },
      {
        "id": "chubby-cheek-l",
        "colorNumber": 3,
        "label": [
          118,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 182,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "chubby-cheek-r",
        "colorNumber": 3,
        "label": [
          182,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 182,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "round-ear-l",
        "colorNumber": 8,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 18
        }
      },
      {
        "id": "round-ear-r",
        "colorNumber": 8,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 18
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 6,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 6,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "big-eye-l",
        "colorNumber": 7,
        "label": [
          132,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "big-eye-r",
        "colorNumber": 7,
        "label": [
          168,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 155,
          "r": 12
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          132,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          168,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 155,
          "r": 6
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          130,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 153,
          "r": 3
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          166,
          153
        ],
        "shape": {
          "kind": "circle",
          "cx": 166,
          "cy": 153,
          "r": 3
        }
      },
      {
        "id": "black-nose",
        "colorNumber": 5,
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
        "id": "famous-smile",
        "colorNumber": 5,
        "label": [
          150,
          188
        ],
        "shape": {
          "kind": "path",
          "d": "M136,183 Q150,198 164,183"
        }
      },
      {
        "id": "rosy-cheek-l",
        "colorNumber": 6,
        "label": [
          115,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 190,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "rosy-cheek-r",
        "colorNumber": 6,
        "label": [
          185,
          190
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 190,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "leaf-held-green",
        "colorNumber": 4,
        "label": [
          150,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M135,228 L165,228 L150,275 Z"
        }
      },
      {
        "id": "paw-hold-l",
        "colorNumber": 10,
        "label": [
          132,
          248
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 132,
          "cy": 248,
          "rx": 12,
          "ry": 10
        }
      },
      {
        "id": "paw-hold-r",
        "colorNumber": 10,
        "label": [
          168,
          248
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 168,
          "cy": 248,
          "rx": 12,
          "ry": 10
        }
      },
      {
        "id": "sitting-foot-l",
        "colorNumber": 11,
        "label": [
          108,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 108,
          "cy": 340,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "sitting-foot-r",
        "colorNumber": 11,
        "label": [
          192,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 192,
          "cy": 340,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "sun-happy",
        "colorNumber": 9,
        "label": [
          252,
          58
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 58,
          "r": 22
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "proboscis-monkey",
    "name": "Proboscis Monkey",
    "emoji": "🦧",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#E65100",
      "#FFE0B2",
      "#212121",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#3E2723",
      "#8D6E63"
    ],
    "regions": [
      {
        "id": "mangrove-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "mangrove-roots",
        "colorNumber": 2,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M0,360 Q40,345 80,358 Q120,345 160,360 Q200,345 240,358 Q280,345 300,360 L300,400 L0,400 Z"
        }
      },
      {
        "id": "vine-hang",
        "colorNumber": 9,
        "label": [
          50,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M45,0 Q55,40 48,80 Q42,120 50,160"
        }
      },
      {
        "id": "leaf-vine",
        "colorNumber": 2,
        "label": [
          40,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M42,120 Q25,100 45,90 Z"
        }
      },
      {
        "id": "potbelly-body",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 70,
          "ry": 62
        }
      },
      {
        "id": "cream-belly",
        "colorNumber": 4,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 278,
          "rx": 42,
          "ry": 35
        }
      },
      {
        "id": "head-round",
        "colorNumber": 3,
        "label": [
          150,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 158,
          "r": 48
        }
      },
      {
        "id": "face-cream",
        "colorNumber": 4,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 165,
          "r": 35
        }
      },
      {
        "id": "giant-droopy-nose",
        "colorNumber": 3,
        "label": [
          150,
          188
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 188,
          "rx": 18,
          "ry": 32
        }
      },
      {
        "id": "nose-tip-round",
        "colorNumber": 6,
        "label": [
          150,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 210,
          "r": 12
        }
      },
      {
        "id": "nostril-dot-l",
        "colorNumber": 5,
        "label": [
          145,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 210,
          "r": 3
        }
      },
      {
        "id": "nostril-dot-r",
        "colorNumber": 5,
        "label": [
          155,
          210
        ],
        "shape": {
          "kind": "circle",
          "cx": 155,
          "cy": 210,
          "r": 3
        }
      },
      {
        "id": "ear-l",
        "colorNumber": 4,
        "label": [
          105,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 152,
          "r": 14
        }
      },
      {
        "id": "ear-r",
        "colorNumber": 4,
        "label": [
          195,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 195,
          "cy": 152,
          "r": 14
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 7,
        "label": [
          130,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 7,
        "label": [
          170,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 148,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          130,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 130,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          170,
          148
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 148,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          128,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          168,
          146
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 146,
          "r": 2
        }
      },
      {
        "id": "mouth-line",
        "colorNumber": 5,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M140,220 Q150,230 160,220"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          118,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 178,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          182,
          178
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 178,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "hand-l",
        "colorNumber": 10,
        "label": [
          95,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 330,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "hand-r",
        "colorNumber": 10,
        "label": [
          205,
          330
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 330,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "sun-glow",
        "colorNumber": 8,
        "label": [
          252,
          58
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 58,
          "r": 20
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "wombat",
    "name": "Wombat",
    "emoji": "🦡",
    "colors": [
      "#FFF8E1",
      "#4CAF50",
      "#6D4C41",
      "#8D6E63",
      "#D7CCC8",
      "#3E2723",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#A1887F",
      "#BCAAA4"
    ],
    "regions": [
      {
        "id": "grass-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass-tufts",
        "colorNumber": 2,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "barrel-body",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 78,
          "ry": 62
        }
      },
      {
        "id": "belly-light",
        "colorNumber": 5,
        "label": [
          150,
          278
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 278,
          "rx": 45,
          "ry": 35
        }
      },
      {
        "id": "chubby-head",
        "colorNumber": 3,
        "label": [
          150,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 168,
          "r": 52
        }
      },
      {
        "id": "broad-snout",
        "colorNumber": 5,
        "label": [
          150,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 192,
          "rx": 34,
          "ry": 22
        }
      },
      {
        "id": "ear-round-l",
        "colorNumber": 4,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "ear-round-r",
        "colorNumber": 4,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 16
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 7,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 9
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 7,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 9
        }
      },
      {
        "id": "big-leather-nose",
        "colorNumber": 6,
        "label": [
          150,
          185
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 185,
          "rx": 14,
          "ry": 10
        }
      },
      {
        "id": "nose-shine",
        "colorNumber": 8,
        "label": [
          148,
          183
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 183,
          "r": 3
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 8,
        "label": [
          128,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 8,
        "label": [
          172,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          128,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          172,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          126,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 126,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          170,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 6,
        "label": [
          150,
          202
        ],
        "shape": {
          "kind": "path",
          "d": "M140,200 Q150,210 160,200"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 7,
        "label": [
          118,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 192,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 7,
        "label": [
          182,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 192,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "digging-paw-l",
        "colorNumber": 4,
        "label": [
          95,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 340,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "digging-paw-r",
        "colorNumber": 4,
        "label": [
          205,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 340,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "paw-pad-l",
        "colorNumber": 10,
        "label": [
          95,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 345,
          "rx": 14,
          "ry": 7
        }
      },
      {
        "id": "paw-pad-r",
        "colorNumber": 10,
        "label": [
          205,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 345,
          "rx": 14,
          "ry": 7
        }
      },
      {
        "id": "burrow-mound",
        "colorNumber": 11,
        "label": [
          50,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M20,360 Q50,330 80,355"
        }
      },
      {
        "id": "sun-glow",
        "colorNumber": 9,
        "label": [
          252,
          58
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 58,
          "r": 20
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "tapir",
    "name": "Tapir",
    "emoji": "🐗",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#212121",
      "#ECEFF1",
      "#37474F",
      "#FF80AB",
      "#FFFFFF",
      "#78909C",
      "#2E7D32",
      "#FFD54F",
      "#455A64",
      "#CFD8DC"
    ],
    "regions": [
      {
        "id": "jungle-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass-pond",
        "colorNumber": 9,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "body-dark-front",
        "colorNumber": 3,
        "label": [
          135,
          265
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 265,
          "rx": 55,
          "ry": 55
        }
      },
      {
        "id": "white-saddle-back",
        "colorNumber": 4,
        "label": [
          195,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M155,215 C225,215 245,260 240,310 C235,340 180,340 155,320 Z"
        }
      },
      {
        "id": "saddle-pattern-line",
        "colorNumber": 12,
        "label": [
          165,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M155,220 Q170,250 155,310"
        }
      },
      {
        "id": "head-round-dark",
        "colorNumber": 3,
        "label": [
          105,
          185
        ],
        "shape": {
          "kind": "circle",
          "cx": 105,
          "cy": 185,
          "r": 45
        }
      },
      {
        "id": "trunk-snout-flexible",
        "colorNumber": 5,
        "label": [
          55,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M85,190 C50,190 32,210 42,235 C55,245 78,235 88,218 Z"
        }
      },
      {
        "id": "trunk-nostril",
        "colorNumber": 3,
        "label": [
          44,
          228
        ],
        "shape": {
          "kind": "circle",
          "cx": 44,
          "cy": 228,
          "r": 5
        }
      },
      {
        "id": "trunk-nostril-hole",
        "colorNumber": 11,
        "label": [
          44,
          228
        ],
        "shape": {
          "kind": "circle",
          "cx": 44,
          "cy": 228,
          "r": 2
        }
      },
      {
        "id": "ear-l-outer",
        "colorNumber": 3,
        "label": [
          78,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 78,
          "cy": 142,
          "r": 14
        }
      },
      {
        "id": "ear-r-outer",
        "colorNumber": 3,
        "label": [
          132,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 142,
          "r": 14
        }
      },
      {
        "id": "ear-l-tip-white",
        "colorNumber": 4,
        "label": [
          78,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 78,
          "cy": 142,
          "r": 7
        }
      },
      {
        "id": "ear-r-tip-white",
        "colorNumber": 4,
        "label": [
          132,
          142
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 142,
          "r": 7
        }
      },
      {
        "id": "eye-white",
        "colorNumber": 7,
        "label": [
          100,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 178,
          "r": 10
        }
      },
      {
        "id": "eye-pupil",
        "colorNumber": 3,
        "label": [
          100,
          178
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 178,
          "r": 5
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 7,
        "label": [
          98,
          176
        ],
        "shape": {
          "kind": "circle",
          "cx": 98,
          "cy": 176,
          "r": 2
        }
      },
      {
        "id": "cheek-blush",
        "colorNumber": 6,
        "label": [
          115,
          205
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 205,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 3,
        "label": [
          78,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M70,210 Q82,222 95,212"
        }
      },
      {
        "id": "paw-front-l",
        "colorNumber": 8,
        "label": [
          88,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 88,
          "cy": 340,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "paw-front-r",
        "colorNumber": 8,
        "label": [
          135,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 340,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "paw-hind-l",
        "colorNumber": 8,
        "label": [
          188,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 188,
          "cy": 340,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "paw-hind-r",
        "colorNumber": 8,
        "label": [
          228,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 228,
          "cy": 340,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "lily-pad-water",
        "colorNumber": 2,
        "label": [
          255,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 320,
          "r": 14
        }
      },
      {
        "id": "lily-bloom",
        "colorNumber": 6,
        "label": [
          255,
          320
        ],
        "shape": {
          "kind": "circle",
          "cx": 255,
          "cy": 320,
          "r": 7
        }
      },
      {
        "id": "sun-sky",
        "colorNumber": 10,
        "label": [
          248,
          58
        ],
        "shape": {
          "kind": "circle",
          "cx": 248,
          "cy": 58,
          "r": 20
        }
      },
      {
        "id": "leaf-big",
        "colorNumber": 2,
        "label": [
          265,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M260,120 Q275,85 250,75 Q245,110 260,120 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "praying-mantis",
    "name": "Praying Mantis",
    "emoji": "🦗",
    "colors": [
      "#E8F5E9",
      "#2E7D32",
      "#4CAF50",
      "#76FF03",
      "#81C784",
      "#212121",
      "#FFFFFF",
      "#AED581",
      "#1B5E20"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "leaf-perch-big",
        "colorNumber": 3,
        "label": [
          150,
          340
        ],
        "shape": {
          "kind": "path",
          "d": "M0,340 Q75,300 150,325 Q225,300 300,340 L300,400 L0,400 Z"
        }
      },
      {
        "id": "leaf-vein-center",
        "colorNumber": 9,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M150,330 L150,395"
        }
      },
      {
        "id": "leaf-vein-l",
        "colorNumber": 9,
        "label": [
          100,
          375
        ],
        "shape": {
          "kind": "path",
          "d": "M150,360 L70,385"
        }
      },
      {
        "id": "leaf-vein-r",
        "colorNumber": 9,
        "label": [
          200,
          375
        ],
        "shape": {
          "kind": "path",
          "d": "M150,360 L230,385"
        }
      },
      {
        "id": "head-triangle",
        "colorNumber": 3,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M125,130 L150,85 L175,130 Z"
        }
      },
      {
        "id": "compound-eye-l",
        "colorNumber": 4,
        "label": [
          132,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 115,
          "r": 14
        }
      },
      {
        "id": "compound-eye-r",
        "colorNumber": 4,
        "label": [
          168,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 115,
          "r": 14
        }
      },
      {
        "id": "eye-pupil-l",
        "colorNumber": 6,
        "label": [
          132,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 132,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "eye-pupil-r",
        "colorNumber": 6,
        "label": [
          168,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 168,
          "cy": 115,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          129,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 129,
          "cy": 112,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          165,
          112
        ],
        "shape": {
          "kind": "circle",
          "cx": 165,
          "cy": 112,
          "r": 2
        }
      },
      {
        "id": "prothorax-long-neck",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M143,130 L157,130 L155,200 L145,200 Z"
        }
      },
      {
        "id": "raptorial-arm-l-upper",
        "colorNumber": 3,
        "label": [
          115,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M143,155 L95,140 L100,150 L140,165 Z"
        }
      },
      {
        "id": "raptorial-arm-l-lower",
        "colorNumber": 8,
        "label": [
          85,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M95,140 L75,170 L82,178 L100,150 Z"
        }
      },
      {
        "id": "raptorial-arm-r-upper",
        "colorNumber": 3,
        "label": [
          185,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M157,155 L205,140 L200,150 L160,165 Z"
        }
      },
      {
        "id": "raptorial-arm-r-lower",
        "colorNumber": 8,
        "label": [
          215,
          175
        ],
        "shape": {
          "kind": "path",
          "d": "M205,140 L225,170 L218,178 L200,150 Z"
        }
      },
      {
        "id": "spike-l-1",
        "colorNumber": 9,
        "label": [
          82,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M88,148 L78,155 L88,160 Z"
        }
      },
      {
        "id": "spike-r-1",
        "colorNumber": 9,
        "label": [
          218,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M212,148 L222,155 L212,160 Z"
        }
      },
      {
        "id": "abdomen-seg-1",
        "colorNumber": 3,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 225,
          "rx": 22,
          "ry": 18
        }
      },
      {
        "id": "abdomen-seg-2",
        "colorNumber": 5,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 260,
          "rx": 20,
          "ry": 16
        }
      },
      {
        "id": "abdomen-seg-3",
        "colorNumber": 3,
        "label": [
          150,
          290
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 290,
          "rx": 18,
          "ry": 14
        }
      },
      {
        "id": "abdomen-seg-4",
        "colorNumber": 5,
        "label": [
          150,
          315
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 315,
          "rx": 16,
          "ry": 12
        }
      },
      {
        "id": "leg-mid-l",
        "colorNumber": 2,
        "label": [
          100,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M130,225 L85,245"
        }
      },
      {
        "id": "leg-mid-r",
        "colorNumber": 2,
        "label": [
          200,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M170,225 L215,245"
        }
      },
      {
        "id": "leg-back-l",
        "colorNumber": 2,
        "label": [
          95,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M128,265 L80,290"
        }
      },
      {
        "id": "leg-back-r",
        "colorNumber": 2,
        "label": [
          205,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M172,265 L220,290"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "scorpion",
    "name": "Scorpion",
    "emoji": "🦂",
    "colors": [
      "#FFF8E1",
      "#FFD54F",
      "#FF8F00",
      "#E65100",
      "#212121",
      "#FF5722",
      "#FFFFFF",
      "#D7CCC8",
      "#FFE082",
      "#3E2723"
    ],
    "regions": [
      {
        "id": "desert-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "sand-ground",
        "colorNumber": 8,
        "label": [
          150,
          370
        ],
        "shape": {
          "kind": "path",
          "d": "M0,358 Q75,340 150,355 Q225,340 300,358 L300,400 L0,400 Z"
        }
      },
      {
        "id": "sand-ripple-1",
        "colorNumber": 9,
        "label": [
          100,
          368
        ],
        "shape": {
          "kind": "path",
          "d": "M60,368 Q100,358 140,368"
        }
      },
      {
        "id": "sand-ripple-2",
        "colorNumber": 9,
        "label": [
          220,
          365
        ],
        "shape": {
          "kind": "path",
          "d": "M180,365 Q220,355 260,365"
        }
      },
      {
        "id": "body-carapace",
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
          "ry": 28
        }
      },
      {
        "id": "head-plate",
        "colorNumber": 4,
        "label": [
          150,
          195
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 195,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "arm-l",
        "colorNumber": 3,
        "label": [
          100,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M120,198 L80,188 Z"
        }
      },
      {
        "id": "arm-r",
        "colorNumber": 3,
        "label": [
          200,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M180,198 L220,188 Z"
        }
      },
      {
        "id": "pincer-claw-l",
        "colorNumber": 4,
        "label": [
          65,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 65,
          "cy": 182,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "pincer-claw-r",
        "colorNumber": 4,
        "label": [
          235,
          182
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 235,
          "cy": 182,
          "rx": 20,
          "ry": 12
        }
      },
      {
        "id": "pincer-tip-l",
        "colorNumber": 3,
        "label": [
          50,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M55,180 L40,172 L48,185 Z"
        }
      },
      {
        "id": "pincer-tip-r",
        "colorNumber": 3,
        "label": [
          250,
          178
        ],
        "shape": {
          "kind": "path",
          "d": "M245,180 L260,172 L252,185 Z"
        }
      },
      {
        "id": "tail-seg-1",
        "colorNumber": 3,
        "label": [
          155,
          265
        ],
        "shape": {
          "kind": "path",
          "d": "M145,260 L165,260 L162,280 L148,280 Z"
        }
      },
      {
        "id": "tail-seg-2",
        "colorNumber": 4,
        "label": [
          165,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M148,280 L162,280 L172,295 L155,300 Z"
        }
      },
      {
        "id": "tail-seg-3",
        "colorNumber": 3,
        "label": [
          178,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M155,300 L172,295 L190,305 L175,315 Z"
        }
      },
      {
        "id": "tail-seg-4",
        "colorNumber": 4,
        "label": [
          195,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M175,315 L190,305 L210,295 L200,315 Z"
        }
      },
      {
        "id": "tail-seg-5",
        "colorNumber": 3,
        "label": [
          215,
          290
        ],
        "shape": {
          "kind": "path",
          "d": "M200,315 L210,295 L230,278 L225,300 Z"
        }
      },
      {
        "id": "stinger-venom",
        "colorNumber": 6,
        "label": [
          235,
          268
        ],
        "shape": {
          "kind": "path",
          "d": "M230,278 L245,258 L238,282 Z"
        }
      },
      {
        "id": "stinger-drop",
        "colorNumber": 6,
        "label": [
          245,
          255
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 255,
          "r": 4
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 7,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 190,
          "r": 5
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 7,
        "label": [
          160,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 190,
          "r": 5
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 5,
        "label": [
          140,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 190,
          "r": 2
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 5,
        "label": [
          160,
          190
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 190,
          "r": 2
        }
      },
      {
        "id": "leg-l-1",
        "colorNumber": 10,
        "label": [
          110,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M125,220 L100,232"
        }
      },
      {
        "id": "leg-l-2",
        "colorNumber": 10,
        "label": [
          105,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M122,235 L95,250"
        }
      },
      {
        "id": "leg-l-3",
        "colorNumber": 10,
        "label": [
          100,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M120,250 L90,268"
        }
      },
      {
        "id": "leg-r-1",
        "colorNumber": 10,
        "label": [
          190,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M175,220 L200,232"
        }
      },
      {
        "id": "leg-r-2",
        "colorNumber": 10,
        "label": [
          195,
          242
        ],
        "shape": {
          "kind": "path",
          "d": "M178,235 L205,250"
        }
      },
      {
        "id": "leg-r-3",
        "colorNumber": 10,
        "label": [
          200,
          258
        ],
        "shape": {
          "kind": "path",
          "d": "M180,250 L210,268"
        }
      },
      {
        "id": "moon-desert",
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
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "stick-insect",
    "name": "Stick Insect",
    "emoji": "🐛",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#795548",
      "#8D6E63",
      "#A1887F",
      "#212121",
      "#FFD54F",
      "#FFFFFF",
      "#2E7D32",
      "#3E2723"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "branch-diagonal",
        "colorNumber": 3,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M30,350 L270,50 L280,55 L40,355 Z"
        }
      },
      {
        "id": "branch-bark-1",
        "colorNumber": 10,
        "label": [
          100,
          280
        ],
        "shape": {
          "kind": "path",
          "d": "M80,292 Q100,285 120,295"
        }
      },
      {
        "id": "branch-bark-2",
        "colorNumber": 10,
        "label": [
          200,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M185,142 Q200,135 215,142"
        }
      },
      {
        "id": "leaf-branch-1",
        "colorNumber": 2,
        "label": [
          45,
          320
        ],
        "shape": {
          "kind": "path",
          "d": "M55,330 Q30,310 50,295 Q60,318 55,330 Z"
        }
      },
      {
        "id": "leaf-branch-2",
        "colorNumber": 9,
        "label": [
          250,
          80
        ],
        "shape": {
          "kind": "path",
          "d": "M260,90 Q280,70 260,55 Q248,78 260,90 Z"
        }
      },
      {
        "id": "leaf-branch-3",
        "colorNumber": 2,
        "label": [
          270,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M275,110 Q290,90 270,80 Q262,98 275,110 Z"
        }
      },
      {
        "id": "twig-body-head",
        "colorNumber": 4,
        "label": [
          175,
          130
        ],
        "shape": {
          "kind": "path",
          "d": "M168,115 L182,115 L180,150 L170,150 Z"
        }
      },
      {
        "id": "twig-body-thorax",
        "colorNumber": 4,
        "label": [
          160,
          170
        ],
        "shape": {
          "kind": "path",
          "d": "M155,150 L165,150 L163,195 L153,195 Z"
        }
      },
      {
        "id": "twig-body-abdomen-1",
        "colorNumber": 5,
        "label": [
          148,
          215
        ],
        "shape": {
          "kind": "path",
          "d": "M143,195 L153,195 L152,240 L142,240 Z"
        }
      },
      {
        "id": "twig-body-abdomen-2",
        "colorNumber": 4,
        "label": [
          138,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M133,240 L143,240 L142,285 L132,285 Z"
        }
      },
      {
        "id": "twig-body-abdomen-3",
        "colorNumber": 5,
        "label": [
          128,
          305
        ],
        "shape": {
          "kind": "path",
          "d": "M123,285 L133,285 L132,325 L122,325 Z"
        }
      },
      {
        "id": "head-tiny",
        "colorNumber": 4,
        "label": [
          175,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 175,
          "cy": 110,
          "r": 10
        }
      },
      {
        "id": "eye-l",
        "colorNumber": 8,
        "label": [
          170,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 107,
          "r": 4
        }
      },
      {
        "id": "eye-r",
        "colorNumber": 8,
        "label": [
          180,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 107,
          "r": 4
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          170,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 107,
          "r": 2
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          180,
          107
        ],
        "shape": {
          "kind": "circle",
          "cx": 180,
          "cy": 107,
          "r": 2
        }
      },
      {
        "id": "antenna-l",
        "colorNumber": 6,
        "label": [
          162,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M168,105 L155,82"
        }
      },
      {
        "id": "antenna-r",
        "colorNumber": 6,
        "label": [
          188,
          90
        ],
        "shape": {
          "kind": "path",
          "d": "M182,105 L195,82"
        }
      },
      {
        "id": "leg-pair-1-l",
        "colorNumber": 4,
        "label": [
          140,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M158,148 L130,165"
        }
      },
      {
        "id": "leg-pair-1-r",
        "colorNumber": 4,
        "label": [
          190,
          148
        ],
        "shape": {
          "kind": "path",
          "d": "M172,148 L200,140"
        }
      },
      {
        "id": "leg-pair-2-l",
        "colorNumber": 4,
        "label": [
          128,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M148,192 L118,210"
        }
      },
      {
        "id": "leg-pair-2-r",
        "colorNumber": 4,
        "label": [
          172,
          185
        ],
        "shape": {
          "kind": "path",
          "d": "M162,190 L185,180"
        }
      },
      {
        "id": "leg-pair-3-l",
        "colorNumber": 4,
        "label": [
          115,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M138,242 L108,260"
        }
      },
      {
        "id": "leg-pair-3-r",
        "colorNumber": 4,
        "label": [
          158,
          240
        ],
        "shape": {
          "kind": "path",
          "d": "M148,245 L172,235"
        }
      },
      {
        "id": "ladybug-friend",
        "colorNumber": 7,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 6
        }
      },
      {
        "id": "ladybug-dot",
        "colorNumber": 6,
        "label": [
          80,
          290
        ],
        "shape": {
          "kind": "circle",
          "cx": 80,
          "cy": 290,
          "r": 2
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "peacock-spider",
    "name": "Peacock Spider",
    "emoji": "🕷️",
    "colors": [
      "#E8F5E9",
      "#1565C0",
      "#D32F2F",
      "#FF9800",
      "#FFD54F",
      "#4CAF50",
      "#212121",
      "#FFFFFF",
      "#00BCD4",
      "#FF5722",
      "#81C784"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "leaf-ground",
        "colorNumber": 6,
        "label": [
          150,
          360
        ],
        "shape": {
          "kind": "path",
          "d": "M0,350 Q75,330 150,345 Q225,330 300,350 L300,400 L0,400 Z"
        }
      },
      {
        "id": "leaf-vein-c",
        "colorNumber": 11,
        "label": [
          150,
          380
        ],
        "shape": {
          "kind": "path",
          "d": "M150,350 L150,395"
        }
      },
      {
        "id": "fan-outer-circle",
        "colorNumber": 2,
        "label": [
          150,
          165
        ],
        "shape": {
          "kind": "path",
          "d": "M70,190 C60,100 240,100 230,190 C220,245 80,245 70,190 Z"
        }
      },
      {
        "id": "fan-ocular-pattern-l",
        "colorNumber": 3,
        "label": [
          115,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 155,
          "r": 18
        }
      },
      {
        "id": "fan-ocular-pattern-r",
        "colorNumber": 3,
        "label": [
          185,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 155,
          "r": 18
        }
      },
      {
        "id": "fan-ocular-inner-l",
        "colorNumber": 9,
        "label": [
          115,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 115,
          "cy": 155,
          "r": 10
        }
      },
      {
        "id": "fan-ocular-inner-r",
        "colorNumber": 9,
        "label": [
          185,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 185,
          "cy": 155,
          "r": 10
        }
      },
      {
        "id": "fan-center-dot",
        "colorNumber": 5,
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
        "id": "fan-stripe-l",
        "colorNumber": 4,
        "label": [
          95,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M80,190 Q95,165 110,185"
        }
      },
      {
        "id": "fan-stripe-r",
        "colorNumber": 4,
        "label": [
          205,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M220,190 Q205,165 190,185"
        }
      },
      {
        "id": "fan-border-dots",
        "colorNumber": 10,
        "label": [
          150,
          110
        ],
        "shape": {
          "kind": "path",
          "d": "M100,120 Q150,95 200,120"
        }
      },
      {
        "id": "abdomen-fuzzy",
        "colorNumber": 7,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 35,
          "ry": 28
        }
      },
      {
        "id": "cephalothorax",
        "colorNumber": 7,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 225,
          "r": 22
        }
      },
      {
        "id": "big-eye-l",
        "colorNumber": 8,
        "label": [
          140,
          218
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 218,
          "r": 8
        }
      },
      {
        "id": "big-eye-r",
        "colorNumber": 8,
        "label": [
          160,
          218
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 218,
          "r": 8
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 7,
        "label": [
          140,
          218
        ],
        "shape": {
          "kind": "circle",
          "cx": 140,
          "cy": 218,
          "r": 4
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 7,
        "label": [
          160,
          218
        ],
        "shape": {
          "kind": "circle",
          "cx": 160,
          "cy": 218,
          "r": 4
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 8,
        "label": [
          138,
          216
        ],
        "shape": {
          "kind": "circle",
          "cx": 138,
          "cy": 216,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 8,
        "label": [
          158,
          216
        ],
        "shape": {
          "kind": "circle",
          "cx": 158,
          "cy": 216,
          "r": 2
        }
      },
      {
        "id": "pedipalp-l",
        "colorNumber": 4,
        "label": [
          128,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 235,
          "r": 6
        }
      },
      {
        "id": "pedipalp-r",
        "colorNumber": 4,
        "label": [
          172,
          235
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 235,
          "r": 6
        }
      },
      {
        "id": "dance-leg-l-1",
        "colorNumber": 7,
        "label": [
          90,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M125,245 L75,265"
        }
      },
      {
        "id": "dance-leg-l-2",
        "colorNumber": 7,
        "label": [
          80,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M120,260 L65,290"
        }
      },
      {
        "id": "dance-leg-r-1",
        "colorNumber": 7,
        "label": [
          210,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M175,245 L225,265"
        }
      },
      {
        "id": "dance-leg-r-2",
        "colorNumber": 7,
        "label": [
          220,
          285
        ],
        "shape": {
          "kind": "path",
          "d": "M180,260 L235,290"
        }
      },
      {
        "id": "raised-leg-l",
        "colorNumber": 7,
        "label": [
          70,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M125,240 L60,220 L55,210"
        }
      },
      {
        "id": "raised-leg-r",
        "colorNumber": 7,
        "label": [
          230,
          225
        ],
        "shape": {
          "kind": "path",
          "d": "M175,240 L240,220 L245,210"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "sloth-bear",
    "name": "Sloth Bear",
    "emoji": "🐻",
    "colors": [
      "#E8F5E9",
      "#4CAF50",
      "#212121",
      "#3E2723",
      "#ECEFF1",
      "#FF80AB",
      "#FFFFFF",
      "#FFD54F",
      "#5D4037"
    ],
    "regions": [
      {
        "id": "forest-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "grass",
        "colorNumber": 2,
        "label": [
          150,
          362
        ],
        "shape": {
          "kind": "path",
          "d": "M0,368 Q75,348 150,362 Q225,348 300,368 L300,378 L0,378 Z"
        }
      },
      {
        "id": "shaggy-body",
        "colorNumber": 3,
        "label": [
          150,
          270
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 270,
          "rx": 75,
          "ry": 62
        }
      },
      {
        "id": "shaggy-fur-texture-l",
        "colorNumber": 4,
        "label": [
          85,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M80,240 Q75,265 85,285"
        }
      },
      {
        "id": "shaggy-fur-texture-r",
        "colorNumber": 4,
        "label": [
          215,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M220,240 Q225,265 215,285"
        }
      },
      {
        "id": "creamy-v-chest",
        "colorNumber": 5,
        "label": [
          150,
          260
        ],
        "shape": {
          "kind": "polygon",
          "points": "125,235 175,235 150,290"
        }
      },
      {
        "id": "head-shaggy",
        "colorNumber": 3,
        "label": [
          150,
          168
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 168,
          "r": 52
        }
      },
      {
        "id": "long-pale-snout",
        "colorNumber": 5,
        "label": [
          150,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 192,
          "rx": 30,
          "ry": 20
        }
      },
      {
        "id": "ear-shaggy-l",
        "colorNumber": 4,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 18
        }
      },
      {
        "id": "ear-shaggy-r",
        "colorNumber": 4,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 18
        }
      },
      {
        "id": "ear-inner-l",
        "colorNumber": 6,
        "label": [
          108,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 108,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "ear-inner-r",
        "colorNumber": 6,
        "label": [
          192,
          118
        ],
        "shape": {
          "kind": "circle",
          "cx": 192,
          "cy": 118,
          "r": 10
        }
      },
      {
        "id": "nose-big-dark",
        "colorNumber": 3,
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
        "id": "nose-shine",
        "colorNumber": 7,
        "label": [
          148,
          183
        ],
        "shape": {
          "kind": "circle",
          "cx": 148,
          "cy": 183,
          "r": 3
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 7,
        "label": [
          128,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 7,
        "label": [
          172,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 158,
          "r": 10
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 3,
        "label": [
          128,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 3,
        "label": [
          172,
          158
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 158,
          "r": 5
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          126,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 126,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          170,
          156
        ],
        "shape": {
          "kind": "circle",
          "cx": 170,
          "cy": 156,
          "r": 2
        }
      },
      {
        "id": "mouth-smile",
        "colorNumber": 3,
        "label": [
          150,
          202
        ],
        "shape": {
          "kind": "path",
          "d": "M142,200 Q150,210 158,200"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 6,
        "label": [
          118,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 118,
          "cy": 192,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 6,
        "label": [
          182,
          192
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 182,
          "cy": 192,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "curved-claw-paw-l",
        "colorNumber": 9,
        "label": [
          95,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 95,
          "cy": 340,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "curved-claw-paw-r",
        "colorNumber": 9,
        "label": [
          205,
          340
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 205,
          "cy": 340,
          "rx": 22,
          "ry": 14
        }
      },
      {
        "id": "claw-marks-l",
        "colorNumber": 4,
        "label": [
          85,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M82,340 L78,352 M90,340 L86,352 M98,340 L94,352"
        }
      },
      {
        "id": "claw-marks-r",
        "colorNumber": 4,
        "label": [
          215,
          345
        ],
        "shape": {
          "kind": "path",
          "d": "M202,340 L198,352 M210,340 L206,352 M218,340 L214,352"
        }
      },
      {
        "id": "sun-glow",
        "colorNumber": 8,
        "label": [
          252,
          58
        ],
        "shape": {
          "kind": "circle",
          "cx": 252,
          "cy": 58,
          "r": 20
        }
      },
      {
        "id": "tree-trunk-bg",
        "colorNumber": 9,
        "label": [
          270,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M262,0 L278,0 L278,350 L262,350 Z"
        }
      },
      {
        "id": "jungle-leaf",
        "colorNumber": 2,
        "label": [
          270,
          100
        ],
        "shape": {
          "kind": "path",
          "d": "M265,120 Q280,85 255,75 Q248,108 265,120 Z"
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "peacock",
    "name": "Peacock",
    "emoji": "🦚",
    "colors": [
      "#E8F5E9",
      "#1565C0",
      "#00BCD4",
      "#4CAF50",
      "#FFD54F",
      "#212121",
      "#FFFFFF",
      "#00897B",
      "#81D4FA",
      "#FF9800"
    ],
    "regions": [
      {
        "id": "bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
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
        "colorNumber": 4,
        "label": [
          150,
          385
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 358,
          "w": 300,
          "h": 42
        }
      },
      {
        "id": "tail-fan-outer",
        "colorNumber": 2,
        "label": [
          150,
          150
        ],
        "shape": {
          "kind": "path",
          "d": "M40,270 C20,80 280,80 260,270 Z"
        }
      },
      {
        "id": "tail-fan-inner",
        "colorNumber": 3,
        "label": [
          150,
          160
        ],
        "shape": {
          "kind": "path",
          "d": "M65,260 C50,105 250,105 235,260 Z"
        }
      },
      {
        "id": "eye-spot-1-outer",
        "colorNumber": 5,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "eye-spot-1-inner",
        "colorNumber": 4,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "eye-spot-1-center",
        "colorNumber": 2,
        "label": [
          100,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "eye-spot-2-outer",
        "colorNumber": 5,
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
        "id": "eye-spot-2-inner",
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
        "id": "eye-spot-2-center",
        "colorNumber": 2,
        "label": [
          150,
          115
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 115,
          "r": 4
        }
      },
      {
        "id": "eye-spot-3-outer",
        "colorNumber": 5,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 140,
          "r": 16
        }
      },
      {
        "id": "eye-spot-3-inner",
        "colorNumber": 4,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 140,
          "r": 8
        }
      },
      {
        "id": "eye-spot-3-center",
        "colorNumber": 2,
        "label": [
          200,
          140
        ],
        "shape": {
          "kind": "circle",
          "cx": 200,
          "cy": 140,
          "r": 4
        }
      },
      {
        "id": "eye-spot-4",
        "colorNumber": 5,
        "label": [
          75,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 75,
          "cy": 195,
          "r": 12
        }
      },
      {
        "id": "eye-spot-5",
        "colorNumber": 5,
        "label": [
          225,
          195
        ],
        "shape": {
          "kind": "circle",
          "cx": 225,
          "cy": 195,
          "r": 12
        }
      },
      {
        "id": "body-blue",
        "colorNumber": 2,
        "label": [
          150,
          280
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 280,
          "rx": 40,
          "ry": 38
        }
      },
      {
        "id": "breast-teal",
        "colorNumber": 8,
        "label": [
          150,
          288
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 288,
          "rx": 24,
          "ry": 22
        }
      },
      {
        "id": "head-small",
        "colorNumber": 2,
        "label": [
          150,
          225
        ],
        "shape": {
          "kind": "circle",
          "cx": 150,
          "cy": 225,
          "r": 20
        }
      },
      {
        "id": "crest-feathers",
        "colorNumber": 9,
        "label": [
          150,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M145,218 L140,192 L148,212 L150,188 L152,212 L160,192 L155,218 Z"
        }
      },
      {
        "id": "beak-tiny",
        "colorNumber": 5,
        "label": [
          168,
          228
        ],
        "shape": {
          "kind": "path",
          "d": "M162,225 L175,228 L162,232 Z"
        }
      },
      {
        "id": "eye-bright",
        "colorNumber": 7,
        "label": [
          145,
          222
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 222,
          "r": 5
        }
      },
      {
        "id": "pupil",
        "colorNumber": 6,
        "label": [
          145,
          222
        ],
        "shape": {
          "kind": "circle",
          "cx": 145,
          "cy": 222,
          "r": 2
        }
      },
      {
        "id": "neck-long",
        "colorNumber": 2,
        "label": [
          150,
          248
        ],
        "shape": {
          "kind": "path",
          "d": "M143,238 L157,238 L155,268 L145,268 Z"
        }
      },
      {
        "id": "foot-l",
        "colorNumber": 10,
        "label": [
          135,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 135,
          "cy": 345,
          "rx": 14,
          "ry": 8
        }
      },
      {
        "id": "foot-r",
        "colorNumber": 10,
        "label": [
          170,
          345
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 345,
          "rx": 14,
          "ry": 8
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "seahorse",
    "name": "Seahorse",
    "emoji": "🐴",
    "colors": [
      "#E0F7FA",
      "#00BCD4",
      "#FF9800",
      "#FFD54F",
      "#FF5722",
      "#212121",
      "#FFFFFF",
      "#FF80AB",
      "#81D4FA",
      "#F57F17",
      "#B2EBF2",
      "#26C6DA"
    ],
    "regions": [
      {
        "id": "ocean-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ocean-glow",
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
        "id": "seagrass-l",
        "colorNumber": 11,
        "label": [
          40,
          300
        ],
        "shape": {
          "kind": "path",
          "d": "M35,395 Q30,300 45,250 Q50,300 35,395 Z"
        }
      },
      {
        "id": "seagrass-r",
        "colorNumber": 11,
        "label": [
          260,
          310
        ],
        "shape": {
          "kind": "path",
          "d": "M255,395 Q250,310 265,260 Q270,310 255,395 Z"
        }
      },
      {
        "id": "seahorse-head-snout",
        "colorNumber": 3,
        "label": [
          120,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M150,130 C150,90 120,80 100,100 L75,110 L100,120 C115,108 145,110 150,130 Z"
        }
      },
      {
        "id": "coronet-crown",
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
        "id": "coronet-spike-1",
        "colorNumber": 5,
        "label": [
          145,
          70
        ],
        "shape": {
          "kind": "path",
          "d": "M142,82 L140,60 L150,78 Z"
        }
      },
      {
        "id": "coronet-spike-2",
        "colorNumber": 5,
        "label": [
          158,
          72
        ],
        "shape": {
          "kind": "path",
          "d": "M152,80 L160,58 L162,78 Z"
        }
      },
      {
        "id": "eye-round",
        "colorNumber": 7,
        "label": [
          128,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 108,
          "r": 8
        }
      },
      {
        "id": "pupil",
        "colorNumber": 6,
        "label": [
          128,
          108
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 108,
          "r": 4
        }
      },
      {
        "id": "eye-shine",
        "colorNumber": 7,
        "label": [
          126,
          106
        ],
        "shape": {
          "kind": "circle",
          "cx": 126,
          "cy": 106,
          "r": 2
        }
      },
      {
        "id": "snout-tube",
        "colorNumber": 3,
        "label": [
          90,
          115
        ],
        "shape": {
          "kind": "path",
          "d": "M100,108 L72,115 L100,122 Z"
        }
      },
      {
        "id": "body-plate-1",
        "colorNumber": 3,
        "label": [
          155,
          155
        ],
        "shape": {
          "kind": "path",
          "d": "M140,135 L170,135 L168,175 L142,175 Z"
        }
      },
      {
        "id": "body-plate-2",
        "colorNumber": 4,
        "label": [
          158,
          195
        ],
        "shape": {
          "kind": "path",
          "d": "M142,175 L168,175 L170,215 L145,215 Z"
        }
      },
      {
        "id": "body-plate-3",
        "colorNumber": 3,
        "label": [
          160,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M145,215 L170,215 L172,255 L148,255 Z"
        }
      },
      {
        "id": "body-plate-4",
        "colorNumber": 4,
        "label": [
          158,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M148,255 L172,255 L170,295 L150,295 Z"
        }
      },
      {
        "id": "belly-pouch",
        "colorNumber": 10,
        "label": [
          152,
          250
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 152,
          "cy": 250,
          "rx": 16,
          "ry": 22
        }
      },
      {
        "id": "curl-tail",
        "colorNumber": 3,
        "label": [
          160,
          330
        ],
        "shape": {
          "kind": "path",
          "d": "M150,295 Q175,320 165,345 Q155,365 140,355 Q130,345 145,340 Q155,338 158,345"
        }
      },
      {
        "id": "dorsal-fin",
        "colorNumber": 9,
        "label": [
          180,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M170,185 Q200,200 175,220 Z"
        }
      },
      {
        "id": "dorsal-fin-rays",
        "colorNumber": 12,
        "label": [
          185,
          200
        ],
        "shape": {
          "kind": "path",
          "d": "M175,190 L190,198 M175,200 L192,205 M175,210 L188,215"
        }
      },
      {
        "id": "pectoral-fin",
        "colorNumber": 9,
        "label": [
          138,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 138,
          "cy": 175,
          "rx": 12,
          "ry": 8
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 7,
        "label": [
          60,
          130
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 130,
          "r": 6
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 7,
        "label": [
          240,
          120
        ],
        "shape": {
          "kind": "circle",
          "cx": 240,
          "cy": 120,
          "r": 5
        }
      },
      {
        "id": "coral-blob",
        "colorNumber": 5,
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
        "id": "coral-blob-2",
        "colorNumber": 8,
        "label": [
          250,
          365
        ],
        "shape": {
          "kind": "circle",
          "cx": 250,
          "cy": 365,
          "r": 10
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  },
  {
    "id": "octopus",
    "name": "Octopus",
    "emoji": "🐙",
    "colors": [
      "#0D47A1",
      "#1565C0",
      "#E91E63",
      "#F48FB1",
      "#FF80AB",
      "#212121",
      "#FFFFFF",
      "#CE93D8",
      "#81D4FA",
      "#F8BBD0"
    ],
    "regions": [
      {
        "id": "deep-sea-bg",
        "colorNumber": 1,
        "label": [
          22,
          30
        ],
        "shape": {
          "kind": "rect",
          "x": 0,
          "y": 0,
          "w": 300,
          "h": 400
        }
      },
      {
        "id": "ocean-glow",
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
        "id": "head-bulb",
        "colorNumber": 3,
        "label": [
          150,
          145
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 150,
          "cy": 145,
          "rx": 55,
          "ry": 50
        }
      },
      {
        "id": "head-spot-1",
        "colorNumber": 8,
        "label": [
          130,
          125
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 130,
          "cy": 125,
          "rx": 12,
          "ry": 10
        }
      },
      {
        "id": "head-spot-2",
        "colorNumber": 8,
        "label": [
          170,
          135
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 170,
          "cy": 135,
          "rx": 10,
          "ry": 8
        }
      },
      {
        "id": "eye-white-l",
        "colorNumber": 7,
        "label": [
          128,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "eye-white-r",
        "colorNumber": 7,
        "label": [
          172,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 155,
          "r": 14
        }
      },
      {
        "id": "pupil-l",
        "colorNumber": 6,
        "label": [
          128,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 128,
          "cy": 155,
          "r": 7
        }
      },
      {
        "id": "pupil-r",
        "colorNumber": 6,
        "label": [
          172,
          155
        ],
        "shape": {
          "kind": "circle",
          "cx": 172,
          "cy": 155,
          "r": 7
        }
      },
      {
        "id": "eye-shine-l",
        "colorNumber": 7,
        "label": [
          125,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 125,
          "cy": 152,
          "r": 3
        }
      },
      {
        "id": "eye-shine-r",
        "colorNumber": 7,
        "label": [
          169,
          152
        ],
        "shape": {
          "kind": "circle",
          "cx": 169,
          "cy": 152,
          "r": 3
        }
      },
      {
        "id": "smile-cute",
        "colorNumber": 6,
        "label": [
          150,
          180
        ],
        "shape": {
          "kind": "path",
          "d": "M138,175 Q150,190 162,175"
        }
      },
      {
        "id": "blush-l",
        "colorNumber": 5,
        "label": [
          115,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 115,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "blush-r",
        "colorNumber": 5,
        "label": [
          185,
          175
        ],
        "shape": {
          "kind": "ellipse",
          "cx": 185,
          "cy": 175,
          "rx": 10,
          "ry": 7
        }
      },
      {
        "id": "tentacle-1",
        "colorNumber": 4,
        "label": [
          80,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M110,195 Q65,230 55,280 Q50,310 70,300"
        }
      },
      {
        "id": "tentacle-2",
        "colorNumber": 3,
        "label": [
          55,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M100,200 Q45,250 40,310 Q38,340 55,330"
        }
      },
      {
        "id": "tentacle-3",
        "colorNumber": 4,
        "label": [
          120,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M130,195 Q110,260 95,320 Q88,345 105,335"
        }
      },
      {
        "id": "tentacle-4",
        "colorNumber": 3,
        "label": [
          145,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M148,195 Q140,270 135,340 Q132,360 148,350"
        }
      },
      {
        "id": "tentacle-5",
        "colorNumber": 4,
        "label": [
          165,
          260
        ],
        "shape": {
          "kind": "path",
          "d": "M155,195 Q165,270 170,340 Q173,360 158,350"
        }
      },
      {
        "id": "tentacle-6",
        "colorNumber": 3,
        "label": [
          195,
          250
        ],
        "shape": {
          "kind": "path",
          "d": "M175,195 Q200,260 215,320 Q222,345 205,335"
        }
      },
      {
        "id": "tentacle-7",
        "colorNumber": 4,
        "label": [
          235,
          275
        ],
        "shape": {
          "kind": "path",
          "d": "M200,200 Q255,250 260,310 Q262,340 245,330"
        }
      },
      {
        "id": "tentacle-8",
        "colorNumber": 3,
        "label": [
          240,
          235
        ],
        "shape": {
          "kind": "path",
          "d": "M195,195 Q240,230 250,280 Q255,310 235,300"
        }
      },
      {
        "id": "sucker-1",
        "colorNumber": 10,
        "label": [
          60,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 60,
          "cy": 295,
          "r": 4
        }
      },
      {
        "id": "sucker-2",
        "colorNumber": 10,
        "label": [
          100,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 100,
          "cy": 330,
          "r": 4
        }
      },
      {
        "id": "sucker-3",
        "colorNumber": 10,
        "label": [
          205,
          330
        ],
        "shape": {
          "kind": "circle",
          "cx": 205,
          "cy": 330,
          "r": 4
        }
      },
      {
        "id": "sucker-4",
        "colorNumber": 10,
        "label": [
          245,
          295
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 295,
          "r": 4
        }
      },
      {
        "id": "bubble-1",
        "colorNumber": 9,
        "label": [
          55,
          110
        ],
        "shape": {
          "kind": "circle",
          "cx": 55,
          "cy": 110,
          "r": 6
        }
      },
      {
        "id": "bubble-2",
        "colorNumber": 9,
        "label": [
          245,
          100
        ],
        "shape": {
          "kind": "circle",
          "cx": 245,
          "cy": 100,
          "r": 5
        }
      }
    ],
    "category": "animals",
    "viewBox": "0 0 300 400"
  }
];
