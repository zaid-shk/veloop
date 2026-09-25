import scene from "../shared/scenePalette.module.css";
import styles from "./FollowEarnBanner.module.css";

const ORBS = [
  { cx: 106, cy: 66, glyph: "people", delay: "0s" },
  { cx: 338, cy: 58, glyph: "star", delay: "0.7s" },
  { cx: 88, cy: 186, glyph: "megaphone", delay: "1.4s" },
  { cx: 346, cy: 180, glyph: "heart", delay: "2.1s" },
];

const STATS = [
  { x: 190, value: "128" },
  { x: 218, value: "24.5K" },
  { x: 246, value: "8" },
];

const GRID_ROWS = [160, 190];

function OrbGlyph({ glyph }) {
  if (glyph === "people") {
    return (
      <>
        <circle cx={0} cy={-4} r={5} className={styles.orbGlyph} />
        <path d="M-9 9 a9 9 0 0 1 18 0 z" className={styles.orbGlyph} />
      </>
    );
  }

  if (glyph === "star") {
    return (
      <g transform="translate(-12 -12)">
        <path
          d="M12 2.2 15 9.1 22.4 9.8 16.8 14.6 18.5 21.8 12 17.9 5.5 21.8 7.2 14.6 1.6 9.8 9 9.1 Z"
          className={styles.orbGlyph}
        />
      </g>
    );
  }

  if (glyph === "megaphone") {
    return (
      <g transform="translate(-11 -11)">
        <path d="M2 9.2v5.6h3.2L12 20V4L5.2 9.2Z" className={styles.orbGlyph} />
        <path d="M15 8.4a4.6 4.6 0 0 1 0 7.2" className={styles.orbGlyphStroke} strokeWidth={2} />
      </g>
    );
  }

  return (
    <g transform="translate(-12 -12)">
      <path
        d="M12 20.4C5.4 15.6 2.6 12.3 2.6 9.1 2.6 6.3 4.8 4.3 7.4 4.3c1.8 0 3.5 1 4.6 2.7 1.1-1.7 2.8-2.7 4.6-2.7 2.6 0 4.8 2 4.8 4.8 0 3.2-2.8 6.5-9.4 11.3Z"
        className={styles.orbGlyph}
      />
    </g>
  );
}


export default function FollowEarnVisual() {
  return (
    <svg
      viewBox="0 0 460 250"
      className={styles.scene}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="feScreen" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" className={scene.stopDeep} />
          <stop offset="100%" className={scene.stopInk} />
        </linearGradient>
        <linearGradient id="fePhone" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" className={scene.stopAccent45} />
          <stop offset="100%" className={scene.stopDark} />
        </linearGradient>
      </defs>

      
      <ellipse cx={230} cy={126} rx={148} ry={98} className={`${styles.orbit} ${styles.orbitSpin}`} strokeWidth={1.6} />

      {ORBS.map((orb) => (
        <g key={orb.glyph} className={styles.orbFloat} style={{ "--vx-delay": orb.delay }}>
          <g transform={`translate(${orb.cx} ${orb.cy})`}>
            <circle r={21} className={styles.orb} strokeWidth={1.4} />
            <OrbGlyph glyph={orb.glyph} />
          </g>
        </g>
      ))}

      
      <g className={styles.badgePop}>
        <circle cx={296} cy={42} r={11} className={scene.accent} />
        <text x={296} y={46} textAnchor="middle" className={styles.badgeText}>
          1
        </text>
      </g>

      
      <g className={styles.phoneRise}>
        <rect x={178} y={26} width={104} height={200} rx={18} fill="url(#fePhone)" className={styles.phoneStroke} strokeWidth={1.6} />
        <rect x={185} y={33} width={90} height={186} rx={13} fill="url(#feScreen)" />
        <rect x={214} y={38} width={32} height={5} rx={2.5} className={styles.notch} />

        <circle cx={230} cy={68} r={13} className={scene.accent} />
        <text x={230} y={72.5} textAnchor="middle" className={styles.markText}>
          V
        </text>
        <text x={230} y={93} textAnchor="middle" className={styles.nameText}>
          VELOOP
        </text>
        <text x={230} y={104} textAnchor="middle" className={styles.handleText}>
          @velooprewards
        </text>

        <rect x={196} y={110} width={68} height={17} rx={8.5} className={`${scene.accent} ${styles.pillPulse}`} />
        <text x={230} y={122} textAnchor="middle" className={styles.pillText}>
          Following
        </text>

        {STATS.map((stat) => (
          <g key={`stat-${stat.x}`}>
            <rect x={stat.x} y={134} width={24} height={20} rx={5} className={styles.statTile} />
            <text x={stat.x + 12} y={148} textAnchor="middle" className={styles.statText} style={{ fontSize: "8px" }}>
              {stat.value}
            </text>
          </g>
        ))}

        {GRID_ROWS.map((y) =>
          STATS.map((stat) => (
            <rect
              key={`tile-${y}-${stat.x}`}
              x={stat.x}
              y={y}
              width={24}
              height={26}
              rx={6}
              className={scene.accentFaint}
            />
          ))
        )}
      </g>

      
      <circle cx={150} cy={30} r={3.5} className={scene.accent} opacity={0.5} />
      <circle cx={404} cy={112} r={4} className={scene.accent} opacity={0.45} />
      <circle cx={58} cy={122} r={3} className={scene.accent} opacity={0.4} />
    </svg>
  );
}

