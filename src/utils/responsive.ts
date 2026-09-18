import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

// Live-updating snapshot of the current window. `Dimensions.get('window')` is
// captured at module load, which on iPad (especially iPadOS 26 with compat/
// split-view transitions) can produce wrong values. We refresh on every change
// so style constants below always reflect the latest measurement.
let current: ScaledSize = Dimensions.get('window');
Dimensions.addEventListener('change', ({ window }) => {
  current = window;
});

function w() { return current.width; }
function h() { return current.height; }

export const SCREEN_W = w();
export const SCREEN_H = h();
export const IS_TABLET = w() >= 768;

// Scale proportionally from a 390pt iPhone base
export function rs(size: number): number {
  return Math.round((size * w()) / 390);
}

// Moderate scale — grows less aggressively on large screens (good for text)
export function ms(size: number, factor = 0.45): number {
  return Math.round(size + (rs(size) - size) * factor);
}

// Clamp a value to a max — useful for card widths on iPad
export function maxW(value: number, max: number): number {
  return Math.min(value, max);
}

// Grid column count based on screen width (3 columns on mobile phones for spacious cards, 4-6 on tablets)
export function gridColumns(itemMinWidth = IS_TABLET ? 160 : 105): number {
  return Math.max(IS_TABLET ? 4 : 3, Math.floor(w() / itemMinWidth));
}

// Hook so components can re-render when the window changes (iPad rotation,
// Slide Over on older devices, Stage Manager, etc). Returns the current window.
export function useResponsive() {
  const [dims, setDims] = useState<ScaledSize>(current);
  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ window }) => setDims(window));
    return () => sub.remove();
  }, []);
  return {
    width: dims.width,
    height: dims.height,
    isTablet: dims.width >= 768,
  };
}
