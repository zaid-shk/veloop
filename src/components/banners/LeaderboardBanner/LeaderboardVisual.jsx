import { formatNumber } from "../../../utils/format";
import styles from "./LeaderboardBanner.module.css";

const SILVER = "#c9d2e4";
const BRONZE = "#d9945a";

const PLAYERS = [
  { rank: "02", name: "User B", score: 11820, x: 52, y: 148, w: 118, h: 96, cx: 111, tone: "silver" },
  { rank: "01", name: "User A", score: 12450, x: 196, y: 118, w: 128, h: 126, cx: 260, tone: "gold" },
  { rank: "03", name: "User C", score: 10970, x: 350, y: 148, w: 118, h: 96, cx: 409, tone: "bronze" },
];

const BADGE_FILL = { gold: "var(--vx-accent)", silver: SILVER, bronze: BRONZE };


export default function LeaderboardVisual() {
  return (
    <svg
      viewBox="0 0 520 320"
      className={styles.scene}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lbCup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff0bd" />
          <stop offset="52%" stopColor="#f0c44c" />
          <stop offset="100%" stopColor="#a9741f" />
        </linearGradient>
        <linearGradient id="lbCard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#262e45" />
          <stop offset="100%" stopColor="#131725" />
        </linearGradient>
      </defs>

      

      

      

      


      {PLAYERS.map((player, index) => {
        const isChampion = player.tone === "gold";

        return (
          <g key={player.rank} className={styles.rise} style={{ "--vx-delay": `${0.14 + index * 0.1}s` }}>
            <rect
              x={player.x}
              y={player.y}
              width={player.w}
              height={player.h}
              rx={14}
              fill="url(#lbCard)"
              stroke={isChampion ? "var(--vx-accent)" : "rgba(255,255,255,0.2)"}
              strokeOpacity={isChampion ? 0.7 : 1}
            />
            <text x={player.cx} y={player.y + (isChampion ? 58 : 52)} textAnchor="middle" className={styles.name}>
              {player.name}
            </text>
            <text
              x={player.cx}
              y={player.y + (isChampion ? 82 : 74)}
              textAnchor="middle"
              className={isChampion ? styles.scoreGold : styles.score}
            >
              {formatNumber(player.score)} VEs
            </text>
          </g>
        );
      })}

      {PLAYERS.map((player, index) => (
        <g key={`badge-${player.rank}`} className={styles.pop} style={{ "--vx-delay": `${0.3 + index * 0.1}s` }}>
          <circle
            cx={player.cx}
            cy={player.y}
            r={player.tone === "gold" ? 22 : 19}
            fill={BADGE_FILL[player.tone]}
            stroke="rgba(10,14,24,0.55)"
            strokeWidth={2}
          />
          <text
            x={player.cx}
            y={player.y + (player.tone === "gold" ? 8 : 7)}
            textAnchor="middle"
            className={styles.rankText}
          >
            {player.rank}
          </text>
        </g>
      ))}

      <g className={styles.float} aria-hidden="true">
        <path d="M238 44 L244 25 L253 37 L260 19 L267 37 L276 25 L282 44 Z" fill="#ffe09a" stroke="#b8862b" strokeWidth={1.6} strokeLinejoin="round" />
        <path d="M222 48 H298 V62 A38 38 0 0 1 260 100 A38 38 0 0 1 222 62 Z" fill="url(#lbCup)" stroke="#c99a34" strokeWidth={1.6} />
        <path d="M222 56 C202 56 200 82 226 85" fill="none" stroke="#e0b352" strokeWidth={6} strokeLinecap="round" />
        <path d="M298 56 C318 56 320 82 294 85" fill="none" stroke="#e0b352" strokeWidth={6} strokeLinecap="round" />
        <path d="M260 60 L264 70 L275 71 L267 78 L269 88 L260 82 L251 88 L253 78 L245 71 L256 70 Z" fill="#7c5713" fillOpacity="0.75" />
        <rect x={252} y={98} width={16} height={16} rx={3} fill="#b8862b" />
        <rect x={236} y={112} width={48} height={10} rx={4} fill="#e0b352" />
      </g>

      <circle cx={40} cy={62} r={5} fill="var(--vx-accent)" opacity="0.55" className={styles.twinkle} />
      <circle cx={492} cy={40} r={4} fill="var(--vx-accent)" opacity="0.5" className={styles.twinkle} style={{ "--vx-delay": "0.9s" }} />
      <circle cx={470} cy={208} r={5} fill="var(--vx-accent)" opacity="0.45" className={styles.twinkle} style={{ "--vx-delay": "1.5s" }} />
    </svg>
  );
}

