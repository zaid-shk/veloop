import scene from "../shared/scenePalette.module.css";
import styles from "./DailyBonusBanner.module.css";

const COINS_BACK = [
  { cx: 112, cy: 190, r: 19, delay: "0s" },
  { cx: 348, cy: 186, r: 18, delay: "0.8s" },
  { cx: 86, cy: 150, r: 14, delay: "1.6s" },
  { cx: 382, cy: 146, r: 13, delay: "2.2s" },
];

const COINS_FRONT = [
  { cx: 128, cy: 216, r: 15, delay: "0.4s" },
  { cx: 176, cy: 233, r: 12, delay: "1.2s" },
  { cx: 322, cy: 212, r: 14, delay: "1.9s" },
  { cx: 300, cy: 234, r: 11, delay: "2.6s" },
];

const SPARKS = [
  { x: 120, y: 78, s: 9, delay: "0s" },
  { x: 340, y: 70, s: 8, delay: "0.6s" },
  { x: 92, y: 116, s: 6, delay: "1.2s" },
  { x: 388, y: 104, s: 7, delay: "1.8s" },
  { x: 230, y: 24, s: 8, delay: "2.4s" },
];

function sparkPath(x, y, s) {
  const n = s * 0.24;
  return `M${x} ${y - s} L${x + n} ${y - n} L${x + s} ${y} L${x + n} ${y + n} L${x} ${y + s} L${x - n} ${y + n} L${x - s} ${y} L${x - n} ${y - n} Z`;
}

function Coin({ cx, cy, r, delay }) {
  return (
    <g className={styles.giftCoin} style={{ "--vx-delay": delay }}>
      <circle cx={cx} cy={cy} r={r} fill="url(#dbCoin)" />
      <circle cx={cx} cy={cy} r={r - 4} className={scene.strokeGold} strokeWidth={1.3} />
      <text
        x={cx}
        y={cy + r * 0.24}
        textAnchor="middle"
        className={styles.coinMark}
        style={{ fontSize: `${r * 0.62}px` }}
      >
        VE
      </text>
    </g>
  );
}


export default function DailyBonusVisual() {
  return (
    <svg
      viewBox="0 0 460 250"
      className={styles.scene}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="dbBox" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" className={scene.stopGoldLight} />
          <stop offset="42%" className={scene.stopGold} />
          <stop offset="100%" className={scene.stopGoldDeep} />
        </linearGradient>
        <linearGradient id="dbLid" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" className={scene.stopGoldLight} />
          <stop offset="100%" className={scene.stopGold} />
        </linearGradient>
        <radialGradient id="dbCoin" cx="34%" cy="28%" r="76%">
          <stop offset="0%" className={scene.stopGoldLight} />
          <stop offset="58%" className={scene.stopGold} />
          <stop offset="100%" className={scene.stopGoldDeep} />
        </radialGradient>
        <radialGradient id="dbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" className={scene.stopAccent45} />
          <stop offset="100%" className={scene.stopAccent0} />
        </radialGradient>
      </defs>

      <ellipse cx={230} cy={200} rx={138} ry={28} fill="url(#dbGlow)" className={styles.giftGlow} />

      {COINS_BACK.map((coin) => (
        <Coin key={`back-${coin.cx}`} {...coin} />
      ))}

      
      <g className={styles.giftBox}>
        <rect x={160} y={112} width={140} height={96} rx={12} fill="url(#dbBox)" />
        <rect x={160} y={112} width={140} height={14} rx={7} className={scene.goldLight} opacity={0.34} />
        <rect x={222} y={112} width={16} height={96} className={scene.goldLight} opacity={0.55} />
        <rect x={160} y={158} width={140} height={13} className={scene.goldDeep} opacity={0.22} />
        <circle cx={230} cy={164} r={22} fill="url(#dbCoin)" />
        <text x={230} y={171} textAnchor="middle" className={styles.medalMark}>
          VE
        </text>
      </g>

      
      <g className={styles.giftLid}>
        <path d="M214 78 C188 62 172 42 194 32 C214 24 224 52 214 78 Z" className={scene.gold} />
        <path d="M246 78 C272 62 288 42 266 32 C246 24 236 52 246 78 Z" className={scene.gold} />
        <circle cx={230} cy={74} r={10} className={scene.goldDeep} />
        <rect x={146} y={78} width={168} height={28} rx={10} fill="url(#dbLid)" />
        <rect x={146} y={78} width={168} height={8} rx={4} className={scene.goldLight} opacity={0.5} />
        <rect x={218} y={78} width={24} height={28} className={scene.goldLight} opacity={0.45} />
      </g>

      {COINS_FRONT.map((coin) => (
        <Coin key={`front-${coin.cx}`} {...coin} />
      ))}

      {SPARKS.map((spark) => (
        <path
          key={`spark-${spark.x}-${spark.y}`}
          d={sparkPath(spark.x, spark.y, spark.s)}
          className={`${scene.accent} ${styles.giftSpark}`}
          style={{ "--vx-delay": spark.delay }}
        />
      ))}
    </svg>
  );
}

