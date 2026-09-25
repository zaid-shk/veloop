import styles from "./BannerCTA.module.css";


export default function BannerCTA({
  children,
  icon,
  onClick,
  variant = "solid",
  href,
  ariaLabel,
  fluid = true,
}) {
  const classes = [
    "btn",
    styles.cta,
    variant === "outline" ? styles.outline : styles.solid,
    fluid ? styles.fluid : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
