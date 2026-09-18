import { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, useWindowDimensions } from 'react-native';

const COLORS = [
  '#FF4D4D', '#FF8C00', '#FFD700', '#4CAF50',
  '#2196F3', '#9C27B0', '#FF69B4', '#00CED1',
  '#FF6B35', '#39FF14',
];

interface Particle {
  x: Animated.Value;
  y: Animated.Value;
  rotate: Animated.Value;
  opacity: Animated.Value;
  color: string;
  w: number;
  h: number;
  startX: number;
  startY: number;
  isCircle: boolean;
}

function makeParticles(count: number, width: number, height: number): Particle[] {
  // Two cracker burst origins — left and right edges, 30% from top. Recomputed
  // per-mount so the current window size is used (important on iPad).
  const origins = [
    { x: -10, y: height * 0.28 },
    { x: width + 10, y: height * 0.28 },
  ];
  const list: Particle[] = [];
  for (let i = 0; i < count; i++) {
    const origin = origins[i % 2];
    list.push({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      rotate: new Animated.Value(0),
      opacity: new Animated.Value(1),
      color: COLORS[i % COLORS.length],
      w: i % 3 === 0 ? 7 : 12 + Math.random() * 8,
      h: i % 3 === 0 ? 14 : 8 + Math.random() * 6,
      startX: origin.x,
      startY: origin.y,
      isCircle: i % 5 === 0,
    });
  }
  return list;
}

export default function WinCelebration() {
  const { width, height } = useWindowDimensions();
  const particles = useRef<Particle[] | null>(null);
  if (particles.current === null) {
    particles.current = makeParticles(60, width, height);
  }
  const list = particles.current;

  useEffect(() => {
    list.forEach((p, i) => {
      const fromLeft = i % 2 === 0;
      const delay = Math.floor(i / 2) * 40;

      // Fan out: left burst goes right, right burst goes left
      const spreadAngle = fromLeft
        ? -60 + Math.random() * 120   // roughly right hemisphere
        : 60 + Math.random() * 120;    // roughly left hemisphere
      const rad = (spreadAngle * Math.PI) / 180;
      const dist = 180 + Math.random() * (height * 0.55);
      const destX = Math.cos(rad) * dist;
      const destY = Math.sin(rad) * dist + dist * 0.25; // arc downward

      const duration = 900 + Math.random() * 600;
      const spins = (fromLeft ? 1 : -1) * (2 + Math.random() * 4);

      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.timing(p.x, { toValue: destX, duration, useNativeDriver: true }),
          Animated.timing(p.y, { toValue: destY, duration, useNativeDriver: true }),
          Animated.timing(p.rotate, { toValue: spins, duration, useNativeDriver: true }),
          Animated.sequence([
            Animated.delay(duration * 0.55),
            Animated.timing(p.opacity, {
              toValue: 0,
              duration: duration * 0.45,
              useNativeDriver: true,
            }),
          ]),
        ]),
      ]).start();
    });
  }, []);

  return (
    <View style={styles.overlay} pointerEvents="none">
      {list.map((p, i) => {
        const rotateStr = p.rotate.interpolate({
          inputRange: [-10, 10],
          outputRange: ['-3600deg', '3600deg'],
        });
        return (
          <Animated.View
            key={i}
            style={{
              position: 'absolute',
              left: p.startX,
              top: p.startY,
              width: p.isCircle ? p.w : p.w,
              height: p.isCircle ? p.w : p.h,
              borderRadius: p.isCircle ? p.w / 2 : 2,
              backgroundColor: p.color,
              opacity: p.opacity,
              transform: [
                { translateX: p.x },
                { translateY: p.y },
                { rotate: rotateStr },
              ],
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    zIndex: 100,
  },
});
