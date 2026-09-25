import { useCallback, useRef, useState } from "react";


export default function useTilt(max = 6) {
  const [style, setStyle] = useState({});
  const frame = useRef(0);

  const onMove = useCallback(
    (event) => {
      if (
        event.pointerType === "touch" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() =>
        setStyle({
          transform: `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`,
          transition: "transform 0.08s linear",
        })
      );
    },
    [max]
  );

  const onLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.35s ease",
    });
  }, []);

  return { tiltStyle: { ...style, willChange: "transform" }, onMove, onLeave };
}
