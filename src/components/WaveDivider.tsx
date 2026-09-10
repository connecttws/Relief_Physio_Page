import React from 'react';

/**
 * WaveDivider
 * Renders an SVG wave that transitions from `topColor` (the section above)
 * to `bottomColor` (the section below). Place between two sections.
 *
 * @param flip  - mirrors the wave horizontally for variety
 * @param height - SVG height in px (default 72)
 */
export default function WaveDivider({
  topColor,
  bottomColor,
  flip = false,
  height = 72,
}: {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      style={{
        display: 'block',
        lineHeight: 0,
        fontSize: 0,
        background: bottomColor,
        marginTop: '-1px',   // overlap 1px to avoid hairline gap
        marginBottom: '-1px',
      }}
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        style={{
          display: 'block',
          width: '100%',
          height: `${height}px`,
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The wave path sits on topColor, revealing bottomColor underneath */}
        <path
          d="M0,0 L0,36 Q120,72 240,36 Q360,0 480,36 Q600,72 720,36 Q840,0 960,36 Q1080,72 1200,36 Q1320,0 1440,36 L1440,0 Z"
          fill={topColor}
        />
      </svg>
    </div>
  );
}
