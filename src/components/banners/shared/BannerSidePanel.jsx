import styles from "./BannerSidePanel.module.css";


export default function BannerSidePanel({ label, children }) {
  return (
    <aside className={styles.panel} aria-label={label}>
      {children}
    </aside>
  );
}
