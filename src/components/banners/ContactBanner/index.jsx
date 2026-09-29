import { Headphones, MessageCircle } from "lucide-react";

import RewardFeatureBanner from "../shared/RewardFeatureBanner";
import BannerCopy from "../shared/BannerCopy";
import BannerCTA from "../shared/BannerCTA";
import BannerVisual from "../shared/BannerVisual";
import ContactVisual from "./ContactVisual";
import SupportPanel from "./SupportPanel";


export default function ContactBanner({
  onContactSupport = () => {},
  onHelpCenter = () => {},
  onSubmitTicket = () => {},
}) {
  return (
    <RewardFeatureBanner
      id="support-card"
      index="03"
      eyebrow="Contact us"
      icon={<Headphones size={15} strokeWidth={2.3} />}
      accent="mint"
      status="live"
      statusLabel="Open"
      labelledBy="cs-title"
    >
      <div className="col-12 col-sm-5 col-lg-4 order-2 order-sm-1">
        <BannerCopy
          id="cs-title"
          title="Need Help?"
          accent="We're Here."
          description="Have a question, concern, or need assistance? Get in touch with the VELOOP Rewards team."
          actions={
            <BannerCTA icon={<MessageCircle size={17} />} onClick={onContactSupport}>
              Contact Support
            </BannerCTA>
          }
        />
      </div>

      <div className="col-12 col-sm-7 col-lg-4 order-1 order-sm-2">
        <BannerVisual
          sceneMax="128px"
          label="Illustration: a VELOOP support agent wearing a headset at a laptop, with animated chat bubbles"
        >
          <ContactVisual />
        </BannerVisual>
      </div>

      <div className="col-12 col-lg-4 order-3">
        <SupportPanel onHelpCenter={onHelpCenter} onSubmitTicket={onSubmitTicket} />
      </div>
    </RewardFeatureBanner>
  );
}
