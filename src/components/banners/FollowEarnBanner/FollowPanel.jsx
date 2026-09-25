import { Gift } from "lucide-react";

import BannerSidePanel from "../shared/BannerSidePanel";
import Brand from "./Brand";
import { CHANNELS } from "./socialBrands";
import styles from "./FollowEarnBanner.module.css";


export default function FollowPanel() {
  return (
    <BannerSidePanel label="Social campaign details">
      <div className={styles.panelGrid}>
        <div className={styles.note}>
          <span className={styles.noteIcon} aria-hidden="true">
            <Gift size={16} strokeWidth={2.3} />
          </span>
          <p className={styles.noteText}>
            Participate in eligible social campaigns and unlock rewards.
          </p>
        </div>

        <div className={styles.reward}>
          <span className={styles.rewardValue}>+500 SVEs</span>
          <span className={styles.rewardLabel}>Demo campaign</span>
        </div>

        <ul className={styles.channels}>
          {CHANNELS.map((channel) => (
            <li key={channel.key} className={styles.channel} title={channel.label}>
              <Brand name={channel.key} size={16} />
              <span className="visually-hidden">{channel.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.finePrint}>
          Rewards apply to eligible campaigns only and are subject to campaign rules.
        </p>
      </div>
    </BannerSidePanel>
  );
}
