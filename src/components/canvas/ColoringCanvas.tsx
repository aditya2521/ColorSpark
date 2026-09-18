import React, { useState, useCallback, useRef } from 'react';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import Svg, { Text as SvgText, G, Rect, Ellipse } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Level } from '../../types';
import ColorRegion from './ColorRegion';

const ZOOM_TIMING = { duration: 200, easing: Easing.out(Easing.quad) };
const MAX_ZOOM = 5;

interface Props {
  level: Level;
  filledRegions: Record<string, number>;
  flashRegion: string | null;
  hintRegion: string | null;
  selectedColorNumber: number | null;
  onRegionPress: (regionId: string) => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onZoomReset: () => void;
  zoomControls: {
    zoomIn: (fn: () => void) => void;
    zoomOut: (fn: () => void) => void;
    reset: (fn: () => void) => void;
  };
}

export default function ColoringCanvas({
  level,
  filledRegions,
  flashRegion,
  hintRegion,
  selectedColorNumber,
  onRegionPress,
  zoomControls,
}: Props) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  // Shared values (live on UI thread — used by gestures)
  const scale      = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const transX     = useSharedValue(0);
  const transY     = useSharedValue(0);
  const savedX     = useSharedValue(0);
  const savedY     = useSharedValue(0);
  const contW      = useSharedValue(1);
  const contH      = useSharedValue(1);

  // JS-thread refs — readable synchronously in button callbacks
  const scaleRef  = useRef(1);
  const transXRef = useRef(0);
  const transYRef = useRef(0);

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ width, height });
    contW.value = width;
    contH.value = height;
  }, []);

  const getFillColor = (region: (typeof level.template.regions)[0]) => {
    const filled = filledRegions[region.id];
    if (filled !== undefined) {
      return level.colorSlots.find(s => s.number === filled)?.color ?? '#FFFFFF';
    }
    return '#FFFFFF';
  };

  const bgSlot  = level.colorSlots.find(s => s.number === 1);
  const bgColor = filledRegions['bg'] !== undefined ? (bgSlot?.color ?? '#FFFFFF') : '#FFFFFF';

  // ── Gestures ──────────────────────────────────────────────────────────────

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      const s = Math.max(1, Math.min(MAX_ZOOM, savedScale.value * e.scale));
      scale.value = s;
      const mx = Math.max(0, (s - 1) * contW.value / 2);
      const my = Math.max(0, (s - 1) * contH.value / 2);
      transX.value = Math.max(-mx, Math.min(mx, transX.value));
      transY.value = Math.max(-my, Math.min(my, transY.value));
    })
    .onEnd(() => {
      const s = scale.value;
      savedScale.value = s;
      scaleRef.current  = s;
      if (s <= 1.02) {
        transX.value = withTiming(0, ZOOM_TIMING);
        transY.value = withTiming(0, ZOOM_TIMING);
        savedX.value = 0; savedY.value = 0;
        transXRef.current = 0; transYRef.current = 0;
      } else {
        savedX.value = transX.value; savedY.value = transY.value;
        transXRef.current = transX.value; transYRef.current = transY.value;
      }
    });

  const panGesture = Gesture.Pan()
    .minPointers(1)
    .onUpdate((e) => {
      if (savedScale.value <= 1.02) return;
      const mx = Math.max(0, (savedScale.value - 1) * contW.value / 2);
      const my = Math.max(0, (savedScale.value - 1) * contH.value / 2);
      transX.value = Math.max(-mx, Math.min(mx, savedX.value + e.translationX));
      transY.value = Math.max(-my, Math.min(my, savedY.value + e.translationY));
    })
    .onEnd(() => {
      savedX.value = transX.value; savedY.value = transY.value;
      transXRef.current = transX.value; transYRef.current = transY.value;
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      scale.value = withTiming(1, ZOOM_TIMING);
      savedScale.value = 1; scaleRef.current = 1;
      transX.value = withTiming(0, ZOOM_TIMING);
      transY.value = withTiming(0, ZOOM_TIMING);
      savedX.value = 0; savedY.value = 0;
      transXRef.current = 0; transYRef.current = 0;
    });

  const composedGesture = Gesture.Simultaneous(doubleTap, pinchGesture, panGesture);

  // ── Zoom logic (called from HUD buttons) ──────────────────────────────────

  const applyZoom = useCallback((newScale: number) => {
    const oldScale = scaleRef.current;
    scaleRef.current = newScale;
    scale.value = withTiming(newScale, ZOOM_TIMING);
    savedScale.value = newScale;

    if (newScale <= 1) {
      // Full reset
      transX.value = withTiming(0, ZOOM_TIMING);
      transY.value = withTiming(0, ZOOM_TIMING);
      savedX.value = 0; savedY.value = 0;
      transXRef.current = 0; transYRef.current = 0;
    } else {
      // Scale translation proportionally so the view re-centres as you zoom out
      const ratio = oldScale > 1 ? (newScale - 1) / (oldScale - 1) : 1;
      const cx = transXRef.current * ratio;
      const cy = transYRef.current * ratio;
      const mx = Math.max(0, (newScale - 1) * contW.value / 2);
      const my = Math.max(0, (newScale - 1) * contH.value / 2);
      const nx = Math.max(-mx, Math.min(mx, cx));
      const ny = Math.max(-my, Math.min(my, cy));
      transX.value = withTiming(nx, ZOOM_TIMING);
      transY.value = withTiming(ny, ZOOM_TIMING);
      savedX.value = nx; savedY.value = ny;
      transXRef.current = nx; transYRef.current = ny;
    }
  }, []);

  // Register handlers with parent via ref callbacks
  React.useEffect(() => {
    zoomControls.zoomIn(() => applyZoom(Math.min(MAX_ZOOM, scaleRef.current + 0.75)));
    zoomControls.zoomOut(() => applyZoom(Math.max(1, scaleRef.current - 0.75)));
    zoomControls.reset(() => applyZoom(1));
  }, [applyZoom]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: transX.value },
      { translateY: transY.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]} onLayout={onLayout}>
      {size.width > 0 && (
        <GestureDetector gesture={composedGesture}>
          <Animated.View style={[styles.svgWrap, { backgroundColor: bgColor }, animStyle]}>
            <Svg
              width={size.width}
              height={size.height}
              viewBox="0 0 300 400"
              preserveAspectRatio="xMidYMid meet"
            >
              <Rect x={0} y={0} width={300} height={400} fill={bgColor} />

              {/* Pass 1 – shapes */}
              {level.template.regions.map(region => (
                <ColorRegion
                  key={region.id}
                  region={region}
                  fillColor={getFillColor(region)}
                  isFlashing={flashRegion === region.id}
                  isHinted={hintRegion === region.id}
                  onPress={onRegionPress}
                />
              ))}

              {/* Pass 2 – number badges with circle border */}
              {level.template.regions.map(region => {
                if (filledRegions[region.id] !== undefined) return null;
                const isHinted = hintRegion === region.id;
                const isMatchingSelected = selectedColorNumber !== null && region.colorNumber === selectedColorNumber;

                const isDouble = region.colorNumber >= 10;
                const rx = isHinted ? (isDouble ? 16 : 13) : (isDouble ? 13 : 10.5);
                const ry = isHinted ? 13 : 10.5;

                const badgeBorder = isHinted
                  ? '#FF6B00'
                  : isMatchingSelected
                  ? '#6366F1'
                  : '#1E293B';

                const badgeFill = isHinted
                  ? '#FFF3CD'
                  : isMatchingSelected
                  ? '#EEF2FF'
                  : '#FFFFFF';

                const textFill = isHinted
                  ? '#FF6B00'
                  : isMatchingSelected
                  ? '#4338CA'
                  : '#0F172A';

                return (
                  <G key={`lbl-${region.id}`} onPress={() => onRegionPress(region.id)}>
                    <Ellipse
                      cx={region.label[0]}
                      cy={region.label[1]}
                      rx={rx}
                      ry={ry}
                      fill={badgeFill}
                      fillOpacity={0.96}
                      stroke={badgeBorder}
                      strokeWidth={isHinted || isMatchingSelected ? 2 : 1.3}
                    />
                    <SvgText
                      x={region.label[0]}
                      y={region.label[1]}
                      fontSize={isHinted ? '13' : (isDouble ? '10' : '11')}
                      fontWeight="bold"
                      fill={textFill}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                    >
                      {region.colorNumber}
                    </SvgText>
                  </G>
                );
              })}
            </Svg>
          </Animated.View>
        </GestureDetector>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', overflow: 'hidden' },
  svgWrap:   { flex: 1 },
});
