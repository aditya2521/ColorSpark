import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 1: Happy Face — easy
const LEVEL_001 = buildLevel(1, IMAGE_TEMPLATES[0], PALETTES[0], 'easy');
export default LEVEL_001;
