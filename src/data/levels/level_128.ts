import { buildLevel } from './utils';
import { IMAGE_TEMPLATES } from '../imageTemplates';
import { PALETTES } from '../palettes';

// Level 128: Kingfisher — expert
const LEVEL_128 = buildLevel(128, IMAGE_TEMPLATES[127], PALETTES[14], 'expert');
export default LEVEL_128;
