
export const THEMES = {
  
  gold: {
    accent: "#f0c44c",
    rgb: "240, 196, 76",
    deep: "#8a6520",
    ink: "#2b1e03",
  },
  
  sky: {
    accent: "#5ea2ff",
    rgb: "94, 162, 255",
    deep: "#2b5fb8",
    ink: "#04162e",
  },
  
  mint: {
    accent: "#48d4a3",
    rgb: "72, 212, 163",
    deep: "#12775a",
    ink: "#03291e",
  },
  
  rose: {
    accent: "#ff8fab",
    rgb: "255, 143, 171",
    deep: "#b84468",
    ink: "#330a16",
  },
  
  violet: {
    accent: "#b79dff",
    rgb: "183, 157, 255",
    deep: "#6b4fd0",
    ink: "#180a37",
  },
};


export function themeVars(key) {
  const theme = THEMES[key] ?? THEMES.gold;

  return {
    "--vx-accent": theme.accent,
    "--vx-accent-rgb": theme.rgb,
    "--vx-accent-deep": theme.deep,
    "--vx-accent-ink": theme.ink,
  };
}
