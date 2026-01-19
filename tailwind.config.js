import plugin from "tailwindcss/plugin";

const themeColors = {
  hifi: {
    "bg-primary": "#3c1642",
    "bg-secondary": "#086375",
    "text-primary": "#b2ff9e",
    "text-secondary": "#affc41",
    "text-accent": "#1dd3b0",
    "border-primary": "#086375",
    "border-secondary": "#1dd3b0",
    "accent-primary": "#1dd3b0",
    "accent-secondary": "#affc41",
  },
  lofi: {
    "bg-primary": "#004232",
    "bg-secondary": "#18a779",
    "text-primary": "#afd377",
    "text-secondary": "#90bc42",
    "text-accent": "#48872f",
    "border-primary": "#18a779",
    "border-secondary": "#48872f",
    "accent-primary": "#48872f",
    "accent-secondary": "#90bc42",
  },
};

/**
 * Converts a hex color string to an RGB string.
 * @param {string} hex - The hex color string (e.g., "#RRGGBB").
 * @returns {string} The RGB color string "R G B".
 */
const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        // Dynamic theme colors using CSS variables
        theme: {
          // Background colors
          bg: {
            primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-bg-secondary) / <alpha-value>)",
          },
          // Text colors
          text: {
            primary: "rgb(var(--color-text-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
            accent: "rgb(var(--color-text-accent) / <alpha-value>)",
          },
          // Border colors
          border: {
            primary: "rgb(var(--color-border-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-border-secondary) / <alpha-value>)",
          },
          // Accent colors
          accent: {
            primary: "rgb(var(--color-accent-primary) / <alpha-value>)",
            secondary: "rgb(var(--color-accent-secondary) / <alpha-value>)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(({ addBase }) => {
      addBase({
        ":root": Object.fromEntries(
          Object.entries(themeColors.hifi).map(([key, value]) => [
            `--color-${key}`,
            hexToRgb(value),
          ]),
        ),
        '[data-theme="lofi"]': Object.fromEntries(
          Object.entries(themeColors.lofi).map(([key, value]) => [
            `--color-${key}`,
            hexToRgb(value),
          ]),
        ),
      });
    }),
  ],
};
