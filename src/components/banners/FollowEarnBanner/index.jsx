import { ArrowRight, Heart, Megaphone } from "lucide-react";

import RewardFeatureBanner from "../shared/RewardFeatureBanner";
import BannerCopy from "../shared/BannerCopy";
import BannerCTA from "../shared/BannerCTA";
import BannerVisual from "../shared/BannerVisual";
import FollowEarnVisual from "./FollowEarnVisual";
import FollowPanel from "./FollowPanel";


export default function FollowEarnBanner({ onFollowEarn = () => {} }) {
  return (
    <RewardFeatureBanner
      id="social"
      index="04"
      eyebrow={"Follow & earn"}
      icon={<Heart size={15} strokeWidth={2.3} />}
      accent="rose"
      status="tag"
      statusLabel="6 channels"
      statusIcon={<Megaphone size={11} aria-hidden="true" />}
      labelledBy="fe-title"
    >
      <div className="col-12 col-sm-5 col-lg-4 order-2 order-sm-1">
        <BannerCopy
          id="fe-title"
          title={"Follow &"}
          accent="Earn"
          description="Follow VELOOP Rewards on our official channels and participate in eligible social campaigns to unlock rewards."
          actions={
            <BannerCTA icon={<ArrowRight size={17} />} onClick={onFollowEarn}>
              Explore Our Channels
            </BannerCTA>
          }
        />
      </div>

      <div className="col-12 col-sm-7 col-lg-4 order-1 order-sm-2">
        <BannerVisual
          sceneMax="128px"
          label="Illustration: a phone showing the VELOOP Rewards social profile surrounded by animated social channel icons"
        >
          <FollowEarnVisual />
        </BannerVisual>
      </div>

      <div className="col-12 col-lg-4 order-3">
        <FollowPanel />
      </div>
    </RewardFeatureBanner>
  );
}
