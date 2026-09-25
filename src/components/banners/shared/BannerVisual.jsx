import useTilt from "../../../hooks/useTilt";
import styles from "./BannerVisual.module.css";


export default function BannerVisual({ label, children, padded = false, sceneMax }) {
  const { tiltStyle, onMove, onLeave } = useTilt(5);

  return (
    <div
      role="img"
      aria-label={label}
      className={`${styles.frame} ${padded ? styles.padded : ""} position-relative overflow-hidden`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={sceneMax ? { ...tiltStyle, "--vx-scene-max": sceneMax } : tiltStyle}
    >
      <span className={styles.aura} aria-hidden="true" />
      <span className={styles.floor} aria-hidden="true" />
      <div className={styles.stage}>{children}</div>
    </div>
  );
}
