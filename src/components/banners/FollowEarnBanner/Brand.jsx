import { BRAND_PATHS } from "./socialBrands";


export default function Brand({ name, size = 16 }) {
  const glyph = BRAND_PATHS[name];

  if (!glyph) {
    return null;
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
      {glyph}
    </svg>
  );
}
