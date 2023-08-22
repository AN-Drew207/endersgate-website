import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  colors: {
    ...colors,

    current: "currentColor",
    primary: "var(--color-primary)",
    "primary-disabled": "var(--color-primary-disabled)",
    "primary-opacity": "var(--color-primary-opacity)",
    secondary: "var(--color-secondary)",
    terciary: "var(--color-terciary)",
    overlay: "var(--color-overlay)",
    ["overlay-dark"]: "var(--color-overlay-dark)",
    footer: "var(--color-footer)",
    gold: "var(--color-gold)",
    ["gray-text"]: "var(--color-gray-text)",
    bronze: "var(--color-bronze)",
    ["green-button"]: "var(--color-green-button)",
    "overlay-opacity": "var(--color-overlay-opacity)",
    "overlay-border": "var(--color-overlay-border)",
    alert: {
      success: "var(--color-alert-success)",
      error: "var(--color-alert-error)",
    },
    gray: {
      0: "var(--color-gray-0)",
      200: "var(--color-gray-200)",
      500: "var(--color-gray-500)",
      800: "var(--color-gray-800)",
      900: "var(--color-gray-900)",
      opacity: {
        10: "var(--color-gray-500-opacity-10)",
      },
    },
    white: "var(--color-white)",
    dark: "var(--color-dark)",
    transparent: "rgba(0, 0, 0, 0)",
    "transparent-color": {
      gray: {
        200: "var(--transparent-gray-200)",
        800: "var(--transparent-gray-800)",
      },
      dark: {
        100: "var(--transparent-dark-100)",
      },
    },
  },
  plugins: [],
};
export default config;
