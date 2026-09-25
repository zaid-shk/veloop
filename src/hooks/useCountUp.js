import { useEffect, useState } from "react";

const EASING_POWER = 3;


const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;


export default function useCountUp({ to, duration = 1400, enabled = true }) {
  const isValid = typeof to === "number" && !Number.isNaN(to);
  const shouldAnimate = enabled && isValid && !prefersReducedMotion;

  const [animated, setAnimated] = useState(shouldAnimate ? 0 : to);

  useEffect(() => {
    if (!shouldAnimate) {
      return undefined;
    }

    let animationFrame = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, EASING_POWER);

      setAnimated(Math.round(to * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration, shouldAnimate]);

  return shouldAnimate ? animated : to;
}
