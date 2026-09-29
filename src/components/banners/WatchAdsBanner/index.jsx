import { ArrowRight, Coins, ShieldCheck, Video, Zap } from "lucide-react";

import RewardFeatureBanner from "../shared/RewardFeatureBanner";
import BannerCopy from "../shared/BannerCopy";
import BannerMetaPill from "../shared/BannerMetaPill";
import BannerCTA from "../shared/BannerCTA";
import BannerVisual from "../shared/BannerVisual";
import WatchAdsVisual from "./WatchAdsVisual";


export default function WatchAdsBanner({ onWatchAndEarn = () => {} }) {
  return (
    <RewardFeatureBanner
      id="watch-earn-card"
      index="02"
      eyebrow="Watch &amp; earn"
      icon={<Video size={15} strokeWidth={2.3} />}
      accent="sky"
      status="live"
      statusLabel="Live"
      labelledBy="wa-title"
    >
      <div className="col-12 col-sm-6 order-2 order-sm-1">
        <BannerCopy
          id="wa-title"
          title="Watch Ads."
          accent="Earn VEs."
          accentBlock
          description="Watch eligible advertisements and earn VEs for completing available ad activities."
          pills={
            <>
              <BannerMetaPill icon={<Zap size={12} />}>Instant credits</BannerMetaPill>
              <BannerMetaPill icon={<ShieldCheck size={12} />}>Eligible ads</BannerMetaPill>
            </>
          }
          actions={
            <BannerCTA icon={<ArrowRight size={17} />} onClick={onWatchAndEarn}>
              Watch &amp; Earn
            </BannerCTA>
          }
          note={
            <>
              <Coins size={13} aria-hidden="true" />
              Reward amount varies by campaign
            </>
          }
        />
      </div>

      <div className="col-12 col-sm-6 order-1 order-sm-2">
        <BannerVisual label="Illustration: a video player with a large play button beside a VE wallet with coins">
          <WatchAdsVisual />
        </BannerVisual>
      </div>
    </RewardFeatureBanner>
  );
}
