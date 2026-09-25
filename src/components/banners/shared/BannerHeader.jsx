import styles from "./BannerHeader.module.css";


export default function BannerHeader({
  index,
  eyebrow,
  icon,
  status,
  statusLabel,
  statusIcon,
}) {
  return (
    <header className={styles.header}>
      <span className={styles.left}>
        {index ? <span className={styles.index}>{index}</span> : null}

        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>

        <span className={styles.label}>{eyebrow}</span>
      </span>

      {status && statusLabel ? (
        <span
          className={`${styles.status} ${status === "live" ? styles.statusLive : styles.statusTag}`}
        >
          {status === "live" ? (
            <span className={styles.dot} aria-hidden="true" />
          ) : (
            statusIcon
          )}
          {statusLabel}
        </span>
      ) : null}
    </header>
  );
}
