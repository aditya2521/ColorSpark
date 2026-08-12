import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 100: Mermaid Portrait — expert
const LEVEL_100 = buildLevel(100, IMAGE_TEMPLATES[99], PALETTES[22], 'expert');
export default LEVEL_100;
