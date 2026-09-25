import styles from "./WatchAdsBanner.module.css";

const EQ_BARS = [30, 48, 64, 40, 56];
const COINS = [
  { cx: 404, cy: 86, r: 22, delay: "0s" },
  { cx: 356, cy: 114, r: 19, delay: "0.6s" },
  { cx: 458, cy: 102, r: 18, delay: "1.2s" },
  { cx: 330, cy: 180, r: 16, delay: "1.8s" },
];


export default function WatchAdsVisual() {
  return (
    <svg
      viewBox="0 0 520 320"
      className={styles.scene}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waFrame" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" className={styles.frameTop} />
          <stop offset="52%" className={styles.frameMid} />
          <stop offset="100%" className={styles.frameBottom} />
        </linearGradient>
        <linearGradient id="waScreen" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" className={styles.screenTop} />
          <stop offset="100%" className={styles.screenBottom} />
        </linearGradient>
        <linearGradient id="waWallet" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" className={styles.walletTop} />
          <stop offset="100%" className={styles.walletBottom} />
        </linearGradient>
        <radialGradient id="waCoin" cx="35%" cy="30%" r="75%">
          <stop offset="0%" className={styles.coinTop} />
          <stop offset="100%" className={styles.coinBottom} />
        </radialGradient>
      </defs>

      <ellipse cx={260} cy={288} rx={192} ry={16} className={styles.accentFill} opacity={0.12} />

      
      <g transform="rotate(-6 190 150)">
        <rect x={44} y={52} width={292} height={196} rx={20} className={styles.frameStroke} strokeWidth={1.6} fill="url(#waFrame)" />
        <rect x={58} y={66} width={264} height={168} rx={13} className={styles.screenFill} />

        {EQ_BARS.map((height, index) => (
          <rect
            key={`eq-${index}`}
            x={78 + index * 16}
            y={192 - height}
            width={10}
            height={height}
            rx={4}
            className={`${styles.accentFill} ${styles.eq}`}
            opacity={0.34 + index * 0.13}
            style={{ "--vx-delay": `${index * 0.12}s` }}
          />
        ))}

        <circle cx={206} cy={120} r={36} className={`${styles.playRing} ${styles.rings}`} strokeWidth={2} />
        <circle
          cx={206}
          cy={120}
          r={36}
          className={`${styles.playRing} ${styles.rings}`}
          strokeWidth={2}
          style={{ "--vx-delay": "1.4s" }}
        />
        <circle cx={206} cy={120} r={36} className={`${styles.accentFill} ${styles.playBtn}`} />
        <path d="M197 106 L221 120 L197 134 Z" className={styles.playIcon} />

        <rect x={78} y={202} width={224} height={6} rx={3} className={styles.progressTrack} />
        <rect x={78} y={202} width={96} height={6} rx={3} className={`${styles.progressFill} ${styles.shimmer}`} />

        <text x={302} y={226} textAnchor="end" className={styles.videoLabel}>
          0:12 / 0:15
        </text>
      </g>

      
      <g transform="rotate(8 425 200)">
        <rect x={336} y={142} width={178} height={120} rx={22} className={styles.frameStroke} strokeWidth={1.6} fill="url(#waWallet)" />
        <rect x={354} y={160} width={142} height={84} rx={14} className={styles.walletInner} strokeWidth={1.2} />
        <text x={425} y={224} textAnchor="middle" className={styles.veMark}>
          VE
        </text>
        <rect x={486} y={180} width={38} height={52} rx={11} className={styles.strapFill} />
        <circle cx={505} cy={206} r={6} className={styles.progressFill} opacity={0.85} />
      </g>

      
      {COINS.map((coin, index) => (
        <g key={`coin-${index}`} className={styles.coin} style={{ "--vx-delay": coin.delay }}>
          <circle cx={coin.cx} cy={coin.cy} r={coin.r} fill="url(#waCoin)" />
          <circle cx={coin.cx} cy={coin.cy} r={coin.r - 5} fill="none" className={styles.playRing} strokeWidth={1.4} />
          <text
            x={coin.cx}
            y={coin.cy + coin.r * 0.22}
            textAnchor="middle"
            className={styles.coinMark}
            style={{ fontSize: `${coin.r * 0.66}px` }}
          >
            VE
          </text>
        </g>
      ))}

      <circle cx={70} cy={92} r={4} className={`${styles.accentFill} ${styles.ring}`} opacity={0.6} />
      <circle cx={268} cy={44} r={5} className={`${styles.accentFill} ${styles.ring}`} opacity={0.5} style={{ "--vx-delay": "0.9s" }} />
    </svg>
  );
}

