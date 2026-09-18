import { ImageTemplate } from '../../types';
import { ANIMALS_TEMPLATES } from './animals';
import { NATURE_TEMPLATES } from './nature';
import { ARCHITECTURE_TEMPLATES } from './architecture';
import { VEHICLES_TEMPLATES } from './vehicles';
import { FOOD_TEMPLATES } from './food';
import { MYTHICAL_TEMPLATES } from './mythical';
import { MANDALAS_TEMPLATES } from './mandalas';
import { SPACE_TEMPLATES } from './space';
import { FUN_TEMPLATES } from './fun';

export type CategoryKey =
  | 'animals'
  | 'nature'
  | 'food'
  | 'mythical'
  | 'architecture'
  | 'space'
  | 'vehicles'
  | 'fun'
  | 'mandalas';

export interface CategoryMeta {
  key: CategoryKey;
  label: string;
  subtitle: string;
  emoji: string;
  color: string;
  activeBg: string;
  bg: string;
}

export const CATEGORY_LIST: CategoryMeta[] = [
  { key: 'animals', label: 'Animals', subtitle: 'Wildlife, Birds & Sea Life', emoji: '🐾', color: '#10B981', activeBg: '#10B981', bg: '#D1FAE5' },
  { key: 'nature', label: 'Nature', subtitle: 'Flowers, Trees & Landscapes', emoji: '🌸', color: '#EC4899', activeBg: '#EC4899', bg: '#FCE7F3' },
  { key: 'food', label: 'Food & Sweets', subtitle: 'Fruits, Desserts & Treats', emoji: '🍕', color: '#EF4444', activeBg: '#EF4444', bg: '#FEE2E2' },
  { key: 'mythical', label: 'Fantasy', subtitle: 'Dragons, Unicorns & Magic', emoji: '🐉', color: '#8B5CF6', activeBg: '#8B5CF6', bg: '#EDE9FE' },
  { key: 'architecture', label: 'Places', subtitle: 'Castles, Pagodas & Wonders', emoji: '🏰', color: '#F59E0B', activeBg: '#F59E0B', bg: '#FEF3C7' },
  { key: 'space', label: 'Space', subtitle: 'Astronauts, Rockets & Planets', emoji: '🌌', color: '#06B6D4', activeBg: '#06B6D4', bg: '#CFFAFE' },
  { key: 'fun', label: 'Fun & Lifestyle', subtitle: 'Music, Costumes & Toys', emoji: '✨', color: '#F97316', activeBg: '#F97316', bg: '#FFEDD5' },
  { key: 'mandalas', label: 'Mandalas', subtitle: 'Sacred Rosettes & Mosaics', emoji: '☸️', color: '#6366F1', activeBg: '#6366F1', bg: '#E0E7FF' },
  { key: 'vehicles', label: 'Vehicles', subtitle: 'Trains, Planes, Cars & Ships', emoji: '🚗', color: '#3B82F6', activeBg: '#3B82F6', bg: '#DBEAFE' },
];

export const TEMPLATES_BY_CATEGORY: Record<string, ImageTemplate[]> = {
  animals: ANIMALS_TEMPLATES,
  nature: NATURE_TEMPLATES,
  architecture: ARCHITECTURE_TEMPLATES,
  vehicles: VEHICLES_TEMPLATES,
  food: FOOD_TEMPLATES,
  mythical: MYTHICAL_TEMPLATES,
  mandalas: MANDALAS_TEMPLATES,
  space: SPACE_TEMPLATES,
  fun: FUN_TEMPLATES,
};

// All combined image templates in a stable array
export const IMAGE_TEMPLATES: ImageTemplate[] = [
  ...ANIMALS_TEMPLATES,
  ...NATURE_TEMPLATES,
  ...ARCHITECTURE_TEMPLATES,
  ...VEHICLES_TEMPLATES,
  ...FOOD_TEMPLATES,
  ...MYTHICAL_TEMPLATES,
  ...MANDALAS_TEMPLATES,
  ...SPACE_TEMPLATES,
  ...FUN_TEMPLATES,
];
