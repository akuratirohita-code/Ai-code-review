// Single source of truth for the project's fixed palette.
// Mirrors tailwind.config.js so JS logic (e.g. severity badge colors)
// never has to hardcode a hex value in a component.
export const COLORS = {
  primary: "#C0E1D2",
  background: "#E5EEE4",
  card: "#F6F4E8",
  accent: "#DC9B9B",
  ink: "#2F3E34",
  border: "#D7DDD6",
};

export const SEVERITY_COLORS = {
  high: "#DC9B9B",
  medium: "#F6F4E8",
  low: "#C0E1D2",
};
