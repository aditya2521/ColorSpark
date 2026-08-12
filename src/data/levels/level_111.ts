import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 111: Snow Leopard — expert
const LEVEL_111 = buildLevel(111, IMAGE_TEMPLATES[110], PALETTES[16], 'expert');
export default LEVEL_111;
