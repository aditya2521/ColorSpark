import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 101: Wizard — expert
const LEVEL_101 = buildLevel(101, IMAGE_TEMPLATES[100], PALETTES[6], 'expert');
export default LEVEL_101;
