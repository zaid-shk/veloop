import { Check, Gift } from "lucide-react";

import BannerSidePanel from "../shared/BannerSidePanel";
import styles from "./DailyBonusBanner.module.css";

const DAYS = [1, 2, 3, 4, 5, 6, 7];
const COMPLETED = 6;


export default function BonusPanel() {
  return (
    <BannerSidePanel label="Daily bonus and streak">
      <div className={styles.panelGrid}>
        <div className={styles.bonus}>
          <span className={styles.bonusLabel}>Today&apos;s Bonus</span>
          <span className={styles.bonusValue}>+25 Gems</span>
          <span className={styles.bonusStatus}>
            <span className={styles.bonusDot} aria-hidden="true" />
            Available now
          </span>
        </div>

        <div className={styles.streak}>
          <span className={styles.streakHead}>
            <span className={styles.streakTitle}>7-Day Streak</span>
            <span className={styles.streakCount}>6 Days Completed</span>
          </span>

          <ul className={styles.days}>
            {DAYS.map((day, index) => {
              const done = index < COMPLETED;
              const today = index === COMPLETED;

              return (
                <li
                  key={day}
                  className={`${styles.day} ${done ? styles.dayDone : ""} ${
                    today ? styles.dayToday : ""
                  }`}
                >
                  {done ? <Check size={12} strokeWidth={3} aria-hidden="true" /> : day}
                  <span className="visually-hidden">
                    {`Day ${day}${done ? " completed" : today ? " available today" : " locked"}`}
                  </span>
                </li>
              );
            })}
          </ul>

          <span className={styles.streakNote}>Come back tomorrow!</span>
          <p className={styles.streakHint}>
            <Gift size={12} aria-hidden="true" /> Demo values — the streak resets daily.
          </p>
        </div>
      </div>
    </BannerSidePanel>
  );
}
