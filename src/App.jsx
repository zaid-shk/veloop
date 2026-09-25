import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  Gift,
  Headphones,
  Heart,
  ShieldCheck,
  Sparkles,
  Trophy,
  Video,
  Zap,
} from "lucide-react";

import LeaderboardBanner from "./components/banners/LeaderboardBanner";
import WatchAdsBanner from "./components/banners/WatchAdsBanner";
import ContactBanner from "./components/banners/ContactBanner";
import FollowEarnBanner from "./components/banners/FollowEarnBanner";
import DailyBonusBanner from "./components/banners/DailyBonusBanner";

import page from "./styles/page.module.css";


const SECTIONS = [
  {
    id: "leaderboard",
    icon: Trophy,
    kicker: "01 - Compete",
    text: "Weekly ranking with live scores and the VE prize pool.",
    render: (notify) => (
      <LeaderboardBanner onViewLeaderboard={() => notify("Leaderboard · /leaderboard")} />
    ),
  },
  {
    id: "watch-earn",
    icon: Video,
    kicker: "02 - Earn",
    text: "Eligible ads credit VEs straight to the wallet.",
    render: (notify) => (
      <WatchAdsBanner onWatchAndEarn={() => notify("Watch and Earn · /watch-and-earn")} />
    ),
  },
  {
    id: "support",
    icon: Headphones,
    kicker: "03 - Trust",
    text: "Real people, fast answers, every day of the week.",
    render: (notify) => (
      <ContactBanner
        onContactSupport={() => notify("Contact Support · /support")}
        onHelpCenter={() => notify("Help Center · /support/help-center")}
        onSubmitTicket={() => notify("Submit a Ticket · /support/ticket")}
      />
    ),
  },
  {
    id: "social",
    icon: Heart,
    kicker: "04 - Connect",
    text: "Follow the official channels and join eligible campaigns.",
    render: (notify) => (
      <FollowEarnBanner onFollowEarn={() => notify("Follow and Earn · /social")} />
    ),
  },
  {
    id: "daily-bonus",
    icon: Gift,
    kicker: "05 - Retain",
    text: "A daily reason to come back and claim the bonus.",
    render: (notify) => (
      <DailyBonusBanner onClaimBonus={() => notify("Daily Bonus · /daily-bonus")} />
    ),
  },
];

const TRUST = [
  { icon: ShieldCheck, label: "Verified payouts" },
  { icon: Zap, label: "Instant credit" },
  { icon: Sparkles, label: "Reduced-motion ready" },
];

const NAV = [
  { id: "leaderboard", icon: Trophy, label: "Leaderboard" },
  { id: "watch-earn", icon: Video, label: "Watch & Earn" },
  { id: "support", icon: Headphones, label: "Contact" },
  { id: "social", icon: Heart, label: "Follow & Earn" },
  { id: "daily-bonus", icon: Gift, label: "Daily Bonus" },
];

export default function App() {
  const [toast, setToast] = useState("");

  const notify = useCallback((message) => setToast(message), []);

  
  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const id = window.setTimeout(() => setToast(""), 2600);

    return () => window.clearTimeout(id);
  }, [toast]);

  return (
    <div className={page.page}>
      <header className={page.header}>
        <div className={page.headerInner}>
          <a className={page.brand} href="#top">
            <span className={page.brandMark} aria-hidden="true">
              <Sparkles size={17} strokeWidth={2.4} />
            </span>
            <span className={page.brandCopy}>
              <strong className={page.brandName}>VELOOP Rewards</strong>
              <span className={page.brandSub}>Reward banner suite</span>
            </span>
          </a>

          <nav className={page.nav} aria-label="Banner sections">
            {NAV.map((item) => (
              <a key={item.id} className={page.navLink} href={`#${item.id}`}>
                <item.icon size={14} strokeWidth={2.3} aria-hidden="true" />
                <span className="d-none d-lg-inline">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className={page.main} id="top">
        <div className={page.hero}>
          <p className={page.heroKicker}>
            <Sparkles size={12} strokeWidth={2.6} aria-hidden="true" />
            Task 0G · rewards utility banners
          </p>
          <h1 className={page.heroTitle}>
            Premium, trustworthy{" "}
            <span className={page.heroAccent}>rewards utility</span> banners.
          </h1>
          <p className={page.heroText}>
            Five redesigned VELOOP Rewards banners built on the existing React, Vite and Bootstrap
            stack — one design system, five distinct visual identities, and a large contextual
            illustration in every card.
          </p>
          <div className={page.trustRow}>
            {TRUST.map((item) => (
              <span key={item.label} className={page.trust}>
                <item.icon size={13} strokeWidth={2.4} aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id} className={page.section}>
            <div className={page.sectionLabel}>
              <span className={page.sectionIcon} aria-hidden="true">
                <section.icon size={16} strokeWidth={2.2} />
              </span>
              <span className={page.sectionCopy}>
                <span className={page.sectionKicker}>{section.kicker}</span>
                <p className={page.sectionText}>{section.text}</p>
              </span>
            </div>

            {section.render(notify)}
          </div>
        ))}
      </main>

      <footer className={page.footer}>
        <div className={page.footerInner}>
          <span>VELOOP Rewards · premium banner suite</span>
          <a className={page.navLink} href="#top">
            Back to top
            <ArrowUpRight size={13} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </footer>

      <div
        role="status"
        aria-live="polite"
        className={`${page.toast} ${toast ? page.toastOn : ""}`}
      >
        {toast}
      </div>
    </div>
  );
}
