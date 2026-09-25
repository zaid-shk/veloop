import styles from "./BannerCopy.module.css";


export default function BannerCopy({
  id,
  title,
  accent,
  accentBlock = false,
  description,
  pills,
  reward,
  actions,
  note,
}) {
  return (
    <div className={styles.stack}>
      <h2 id={id} className={`${styles.title} vx-reveal`}>
        {title}
        {accent ? (
          <>
            {accentBlock ? " " : " "}
            <span className={accentBlock ? styles.accentBlock : styles.accent}>
              {accent}
            </span>
          </>
        ) : null}
      </h2>

      {description ? (
        <p className={`${styles.text} vx-reveal`} style={{ "--vx-delay": "0.08s" }}>
          {description}
        </p>
      ) : null}

      {pills ? (
        <div className={`${styles.pills} vx-reveal`} style={{ "--vx-delay": "0.14s" }}>
          {pills}
        </div>
      ) : null}

      {reward ? (
        <div className={`${styles.reward} vx-reveal`} style={{ "--vx-delay": "0.2s" }}>
          {reward}
        </div>
      ) : null}

      {actions ? (
        <div className={`${styles.actions} vx-reveal`} style={{ "--vx-delay": "0.26s" }}>
          {actions}
        </div>
      ) : null}

      {note ? (
        <div className={`${styles.note} vx-reveal`} style={{ "--vx-delay": "0.32s" }}>
          {note}
        </div>
      ) : null}
    </div>
  );
}
