import { useCallback, useState } from "react";
import { BookOpen, Check, ChevronRight, Copy, Mail, Ticket, UserRound } from "lucide-react";

import BannerSidePanel from "../shared/BannerSidePanel";
import styles from "./ContactBanner.module.css";

export const SUPPORT_EMAIL = "velooprewardsofficial@gmail.com";


export default function SupportPanel({ onHelpCenter = () => {}, onSubmitTicket = () => {} }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${SUPPORT_EMAIL}`;
    }
  }, []);

  return (
    <BannerSidePanel label="Support contact options">
      <span className={styles.panelHead}>
        <span className={styles.panelHeadIcon} aria-hidden="true">
          <UserRound size={14} strokeWidth={2.4} />
        </span>
        <span className={styles.panelHeadText}>We&apos;re here to help</span>
      </span>

      <div className={styles.rows}>
        <div className={styles.item}>
          <span className={styles.itemIcon} aria-hidden="true">
            <Mail size={15} strokeWidth={2.3} />
          </span>
          <span className={styles.itemBody}>
            <span className={styles.itemLabel}>Email us</span>
            <span className={styles.itemValue}>{SUPPORT_EMAIL}</span>
          </span>
          <button
            type="button"
            className={`${styles.copyBtn} ${copied ? styles.copyDone : ""}`}
            onClick={handleCopy}
            aria-label={
              copied ? "Support email copied to clipboard" : `Copy support email ${SUPPORT_EMAIL}`
            }
          >
            {copied ? <Check size={13} strokeWidth={3} aria-hidden="true" /> : <Copy size={13} strokeWidth={2.4} aria-hidden="true" />}
            <span className={styles.copyLabel}>{copied ? "Copied" : "Copy"}</span>
          </button>
          <span className="visually-hidden" role="status">
            {copied ? "Support email copied to clipboard" : ""}
          </span>
        </div>

        <button type="button" className={`${styles.item} ${styles.itemAction}`} onClick={onHelpCenter}>
          <span className={styles.itemIcon} aria-hidden="true">
            <BookOpen size={15} strokeWidth={2.3} />
          </span>
          <span className={styles.itemBody}>
            <span className={styles.itemTitle}>Help Center</span>
          </span>
          <span className={styles.itemTrail} aria-hidden="true">
            <ChevronRight size={16} strokeWidth={2.4} />
          </span>
        </button>

        <button type="button" className={`${styles.item} ${styles.itemAction}`} onClick={onSubmitTicket}>
          <span className={styles.itemIcon} aria-hidden="true">
            <Ticket size={15} strokeWidth={2.3} />
          </span>
          <span className={styles.itemBody}>
            <span className={styles.itemTitle}>Submit a Ticket</span>
          </span>
          <span className={styles.itemTrail} aria-hidden="true">
            <ChevronRight size={16} strokeWidth={2.4} />
          </span>
        </button>
      </div>
    </BannerSidePanel>
  );
}
