import { useEffect, useRef, useState } from "react";

const SUPPORTED =
  typeof window !== "undefined" && typeof window.IntersectionObserver === "function";


export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(!SUPPORTED);

  useEffect(() => {
    const node = ref.current;

    if (!node || !SUPPORTED) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
