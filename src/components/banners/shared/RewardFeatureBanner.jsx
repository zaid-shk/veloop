import useInView from "../../../hooks/useInView";
import BannerHeader from "./BannerHeader";
import { themeVars } from "./theme";
import styles from "./RewardFeatureBanner.module.css";


export default function RewardFeatureBanner({
  id,
  index,
  eyebrow,
  icon,
  accent = "gold",
  status = "live",
  statusLabel = "Live",
  statusIcon,
  labelledBy,
  children,
}) {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
      data-inview={inView ? "true" : "false"}
      style={themeVars(accent)}
      className={`${styles.card} text-light w-100`}
    >
      <span className={styles.glow} aria-hidden="true" />

      <BannerHeader
        index={index}
        eyebrow={eyebrow}
        icon={icon}
        status={status}
        statusLabel={statusLabel}
        statusIcon={statusIcon}
      />

      <div className={styles.body}>
        <div className="row g-2 g-sm-3 g-md-4 align-items-center">{children}</div>
      </div>
    </section>
  );
}
