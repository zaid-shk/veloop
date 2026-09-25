import styles from "./RewardBox.module.css";


export default function RewardBox({ icon, label, value, suffix, status }) {
  return (
    <div className={styles.box}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}

      <span className={styles.copy}>
        <span className={styles.label}>{label}</span>

        <span className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {suffix ? <span className={styles.suffix}>{suffix}</span> : null}
        </span>
      </span>

      {status ? (
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          {status}
        </span>
      ) : null}
    </div>
  );
}
