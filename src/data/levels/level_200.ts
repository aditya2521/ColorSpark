import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 200: Dragon Turtle — expert
const LEVEL_200 = buildLevel(200, IMAGE_TEMPLATES[199], PALETTES[21], 'expert');
export default LEVEL_200;
