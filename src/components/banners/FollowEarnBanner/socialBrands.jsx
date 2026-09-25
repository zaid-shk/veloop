
export const BRAND_PATHS = {
  instagram: (
    <>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.3H16l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.5V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.2H8v2.9h2.5V21z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M6.9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M3.2 21h3.5V8.9H3.2zm6.1 0h3.5v-6.6c0-1.7 2.2-1.9 2.2 0V21h3.5v-7.4c0-5.5-5.7-5.3-5.7-2.6V8.9H9.3z"
    />
  ),
  youtube: (
    <>
      <path
        fill="currentColor"
        d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8"
      />
      <path fill="var(--vx-app-bg)" d="M10 15.2V8.8l5.2 3.2z" />
    </>
  ),
  x: (
    <path
      fill="currentColor"
      d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      d="M21.7 3.3 2.6 10.9c-.8.3-.8 1.4 0 1.7l4.5 1.5 1.8 5.6c.2.6 1 .8 1.4.3l2.5-2.8 4.4 3.3c.5.4 1.3.1 1.4-.6l3.3-15.6c.2-.7-.5-1.3-1.2-1z"
    />
  ),
};


export const CHANNELS = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "youtube", label: "YouTube" },
  { key: "x", label: "X" },
  { key: "telegram", label: "Telegram" },
];
