import styles from "./BannerMetaPill.module.css";


export default function BannerMetaPill({ icon, children }) {
  return (
    <span className={styles.pill}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <span className={styles.text}>{children}</span>
    </span>
  );
}
