import scene from "../shared/scenePalette.module.css";
import styles from "./ContactBanner.module.css";

const TYPING_DOTS = [
  { cx: 44, delay: "0s" },
  { cx: 62, delay: "0.2s" },
  { cx: 80, delay: "0.4s" },
];


export default function ContactVisual() {
  return (
    <svg
      viewBox="0 0 460 250"
      className={styles.scene}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="csShirt" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" className={styles.shirtTop} />
          <stop offset="100%" className={styles.shirtBottom} />
        </linearGradient>
        <linearGradient id="csGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className={scene.stopAccent45} />
          <stop offset="100%" className={scene.stopAccent0} />
        </linearGradient>
      </defs>

      <ellipse cx={180} cy={232} rx={120} ry={18} fill="url(#csGlow)" />

      
      <g className={styles.bubbleFloat}>
        <rect x={16} y={58} width={96} height={48} rx={17} className={styles.bubble} strokeWidth={1.4} />
        <path d="M38 106 L34 122 L56 106 Z" className={styles.bubble} strokeWidth={1.4} />
        {TYPING_DOTS.map((dot, index) => (
          <circle
            key={`dot-${index}`}
            cx={dot.cx}
            cy={82}
            r={5}
            className={`${scene.accent} ${styles.typing}`}
            style={{ "--vx-delay": dot.delay }}
          />
        ))}
      </g>

      
      <g className={styles.bubbleLate}>
        <rect x={326} y={40} width={112} height={56} rx={17} className={styles.bubble} strokeWidth={1.4} />
        <path d="M416 96 L422 112 L398 96 Z" className={styles.bubble} strokeWidth={1.4} />
        <text x={340} y={66} className={styles.bubbleText}>
          We are here
        </text>
        <text x={340} y={82} className={styles.bubbleText}>
          to help
        </text>
      </g>

      
      <path d="M124 232 C124 186 148 160 180 160 C212 160 236 186 236 232 Z" fill="url(#csShirt)" strokeWidth={1.4} />
      <rect x={170} y={142} width={20} height={26} rx={9} className={styles.skin} />
      <ellipse cx={145} cy={112} rx={6} ry={9} className={styles.skin} />
      <ellipse cx={215} cy={112} rx={6} ry={9} className={styles.skin} />
      <ellipse cx={180} cy={108} rx={38} ry={43} className={styles.skin} />
      <path
        d="M142 106 C138 66 160 50 180 50 C200 50 222 66 218 106 C210 86 198 78 180 78 C162 78 150 86 142 106 Z"
        className={styles.hair}
      />
      <ellipse cx={168} cy={112} rx={4} ry={5} className={styles.faceInk} />
      <ellipse cx={192} cy={112} rx={4} ry={5} className={styles.faceInk} />
      <path d="M160 99 q8 -6 16 0" className={styles.faceStroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M184 99 q8 -6 16 0" className={styles.faceStroke} strokeWidth={2.4} strokeLinecap="round" />
      <path d="M180 118 q5 6 0 9" className={styles.faceStroke} strokeWidth={2.2} strokeLinecap="round" />
      <path d="M166 132 q14 12 28 0" className={styles.faceStroke} strokeWidth={2.8} strokeLinecap="round" />

      
      <path d="M140 104 C140 50 220 50 220 104" className={styles.band} strokeWidth={6} strokeLinecap="round" />
      <rect x={128} y={98} width={17} height={28} rx={7} className={styles.cup} />
      <rect x={215} y={98} width={17} height={28} rx={7} className={styles.cup} />
      <path d="M132 126 C132 152 152 162 166 156" className={styles.band} strokeWidth={4} strokeLinecap="round" />
      <circle cx={168} cy={156} r={5} className={scene.accent} />
      <circle cx={168} cy={156} r={5} className={`${scene.strokeAccent} ${styles.micPulse}`} strokeWidth={2} />

      
      <rect x={132} y={178} width={96} height={52} rx={7} className={styles.device} />
      <rect x={137} y={183} width={86} height={42} rx={5} className={scene.strokeAccentSoft} strokeWidth={1.2} />
      <text x={180} y={212} textAnchor="middle" className={`${styles.logoMark} ${styles.logoPulse}`}>
        V
      </text>
      <rect x={118} y={230} width={124} height={9} rx={4} className={styles.device} />

      
      <circle cx={292} cy={150} r={4} className={`${scene.accent} ${styles.spark}`} />
      <circle cx={104} cy={168} r={3} className={`${scene.accent} ${styles.spark}`} style={{ "--vx-delay": "0.9s" }} />
      <circle cx={392} cy={168} r={3.5} className={`${scene.accent} ${styles.spark}`} style={{ "--vx-delay": "1.6s" }} />
      <circle cx={60} cy={30} r={3} className={`${scene.accent} ${styles.spark}`} style={{ "--vx-delay": "2.1s" }} />
    </svg>
  );
}

