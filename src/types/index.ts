export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export type ShapeKind = 'path' | 'rect' | 'circle' | 'ellipse' | 'polygon';

export type RegionShape =
  | { kind: 'path'; d: string }
  | { kind: 'rect'; x: number; y: number; w: number; h: number; rx?: number }
  | { kind: 'circle'; cx: number; cy: number; r: number }
  | { kind: 'ellipse'; cx: number; cy: number; rx: number; ry: number }
  | { kind: 'polygon'; points: string };

export interface Region {
  id: string;
  colorNumber: number;
  label: [number, number];
  shape: RegionShape;
}

export interface ImageTemplate {
  id: string;
  name: string;
  emoji: string;
  category: string;
  viewBox: string;
  regions: Region[];
}

export interface ColorSlot {
  number: number;
  color: string;
  name: string;
}

export interface Level {
  id: number;
  name: string;
  emoji: string;
  difficulty: Difficulty;
  colorSlots: ColorSlot[];
  template: ImageTemplate;
}

export type GameScreen = 'menu' | 'levelSelect' | 'playing' | 'levelComplete';

export interface GameState {
  screen: GameScreen;
  currentLevel: number;
  unlockedLevels: number;
  filledRegions: Record<string, number>;
  selectedColorNumber: number | null;
  score: number;
  wrongAttempts: number;
  flashRegion: string | null;
  hintsLeft: number;
  hintRegion: string | null;
}

export type GameAction =
  | { type: 'GO_MENU' }
  | { type: 'GO_LEVEL_SELECT' }
  | { type: 'START_LEVEL'; levelId: number }
  | { type: 'SELECT_COLOR'; colorNumber: number }
  | { type: 'FILL_REGION'; regionId: string; colorNumber: number; correct: boolean }
  | { type: 'LEVEL_COMPLETE' }
  | { type: 'CLEAR_FLASH' }
  | { type: 'USE_HINT'; regionId: string }
  | { type: 'CLEAR_HINT' }
  | { type: 'LOAD_SAVED'; saved: { currentLevel: number; unlockedLevels: number; score: number } };
