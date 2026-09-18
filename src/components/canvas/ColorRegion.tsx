import React from 'react';
import { Circle, Ellipse, Path, Polygon, Rect } from 'react-native-svg';
import { Region } from '../../types';

interface ColorRegionProps {
  region: Region;
  fillColor: string;
  isFlashing: boolean;
  isHinted: boolean;
  onPress: (regionId: string) => void;
}

const FLASH_COLOR = '#FF4444';
const HINT_STROKE = '#FF6B00';
const DEFAULT_STROKE = '#1E293B';
const STROKE_WIDTH = 1.5;
const HINT_STROKE_WIDTH = 3.5;

export default function ColorRegion({
  region,
  fillColor,
  isFlashing,
  isHinted,
  onPress,
}: ColorRegionProps) {
  const fill = isFlashing
    ? FLASH_COLOR
    : isHinted
    ? '#FFF5E0'
    : fillColor;

  const stroke = isHinted
    ? HINT_STROKE
    : DEFAULT_STROKE;

  const strokeWidth = isHinted
    ? HINT_STROKE_WIDTH
    : STROKE_WIDTH;

  const { shape } = region;

  const commonProps = {
    fill,
    stroke,
    strokeWidth,
    onPress: () => onPress(region.id),
  };

  switch (shape.kind) {
    case 'rect':
      return (
        <Rect
          x={shape.x}
          y={shape.y}
          width={shape.w}
          height={shape.h}
          rx={shape.rx ?? 0}
          {...commonProps}
        />
      );
    case 'circle':
      return <Circle cx={shape.cx} cy={shape.cy} r={shape.r} {...commonProps} />;

    case 'ellipse':
      return <Ellipse cx={shape.cx} cy={shape.cy} rx={shape.rx} ry={shape.ry} {...commonProps} />;

    case 'polygon':
      return <Polygon points={shape.points} {...commonProps} />;

    case 'path':
      return <Path d={shape.d} {...commonProps} />;

    default:
      return null;
  }
}
