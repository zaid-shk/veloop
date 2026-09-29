import { ArrowRight, Trophy, Zap } from "lucide-react";

import RewardFeatureBanner from "../shared/RewardFeatureBanner";
import BannerCopy from "../shared/BannerCopy";
import BannerCTA from "../shared/BannerCTA";
import BannerVisual from "../shared/BannerVisual";
import RewardBox from "../shared/RewardBox";
import LeaderboardVisual from "./LeaderboardVisual";
import useCountUp from "../../../hooks/useCountUp";
import { formatNumber } from "../../../utils/format";

const POOL = 50000;
const COMPETING = 12480;


export default function LeaderboardBanner({ onViewLeaderboard = () => {} }) {
  const pool = useCountUp({ to: POOL, duration: 1600 });

  return (
    <RewardFeatureBanner
      id="leaderboard-card"
      index="01"
      eyebrow="Leaderboard"
      icon={<Trophy size={15} strokeWidth={2.3} />}
      accent="gold"
      status="live"
      statusLabel="Live"
      labelledBy="lb-title"
    >
      <div className="col-12 col-sm-6 order-2 order-sm-1">
        <BannerCopy
          id="lb-title"
          title="Rank Higher."
          accent="Earn More."
          accentBlock
          description="Complete activities, earn rewards, gain XP, and compete with other users to climb the leaderboard."
          reward={
            <RewardBox
              icon={<Trophy size={19} />}
              label="Current pool"
              value={`${formatNumber(pool)} VEs`}
              suffix="in prizes"
            />
          }
          actions={
            <BannerCTA variant="outline" icon={<ArrowRight size={17} />} onClick={onViewLeaderboard}>
              Check rankings
            </BannerCTA>
          }
          note={
            <>
              <Zap size={13} aria-hidden="true" />
              {COMPETING.toLocaleString("en-US")} users competing this week
            </>
          }
        />
      </div>

      <div className="col-12 col-sm-6 order-1 order-sm-2">
        <BannerVisual
          sceneMax="134px"
          label="Illustration: a gold trophy above a gold, silver and bronze ranked leaderboard podium with a rising chart"
        >
          <LeaderboardVisual />
        </BannerVisual>
      </div>
    </RewardFeatureBanner>
  );
}
