import { ArrowRight, Clock, Gift } from "lucide-react";

import RewardFeatureBanner from "../shared/RewardFeatureBanner";
import BannerCopy from "../shared/BannerCopy";
import BannerCTA from "../shared/BannerCTA";
import BannerVisual from "../shared/BannerVisual";
import DailyBonusVisual from "./DailyBonusVisual";
import BonusPanel from "./BonusPanel";


export default function DailyBonusBanner({ onClaimBonus = () => {} }) {
  return (
    <RewardFeatureBanner
      id="daily-bonus-card"
      index="05"
      eyebrow="Daily bonus"
      icon={<Gift size={15} strokeWidth={2.3} />}
      accent="violet"
      status="tag"
      statusLabel="Resets 6h"
      statusIcon={<Clock size={11} aria-hidden="true" />}
      labelledBy="db-title"
    >
      <div className="col-12 col-sm-5 col-lg-4 order-2 order-sm-1">
        <BannerCopy
          id="db-title"
          title="Your Daily Bonus"
          accent="Is Waiting"
          accentBlock
          description="Check in regularly and claim your available daily bonus before the opportunity resets."
          actions={
            <BannerCTA icon={<ArrowRight size={17} />} onClick={onClaimBonus}>
              Claim Bonus
            </BannerCTA>
          }
        />
      </div>

      <div className="col-12 col-sm-7 col-lg-4 order-1 order-sm-2">
        <BannerVisual
          sceneMax="128px"
          label="Illustration: an open gift box with gold VE coins spilling out and sparkles"
        >
          <DailyBonusVisual />
        </BannerVisual>
      </div>

      <div className="col-12 col-lg-4 order-3">
        <BonusPanel />
      </div>
    </RewardFeatureBanner>
  );
}
