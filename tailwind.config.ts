import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-satoshi)"],
      serif: "larken",
    },
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      gridAutoRows: {
        card: "minmax(48px,auto)",
      },
      padding: {
        "safe-bottom": "max(1.5rem, env(safe-area-inset-bottom))",
        "safe-top": "env(safe-area-inset-top)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      borderRadius: {
        "4xl": "32px",
      },
      colors: {
        white: "#FFFFFF",
      black: "#0e100e",
      gray: {
        "50": "#f2f3f2",
        "100": "#e2e5e2",
        "200": "#c5cac5",
        "300": "#a0a8a1",
        "400": "#7c857d",
        "500": "#626a63",
        "600": "#4d544e",
        "700": "#404541",
        "800": "#353a35",
        "900": "#2f3230",
        "950": "#0e100e",
      },
        primary: {
          DEFAULT: "#223c3b",
          "50": "#f4f9f8",
          "100": "#d9eeeb",
          "200": "#b2ddd5",
          "300": "#84c4bc",
          "400": "#5ba69f",
          "500": "#418b85",
          "600": "#326f6c",
          "700": "#2b5a57",
          "800": "#264948",
          "900": "#223c3b",
          "950": "#102223",
        },
        secondary: {
          DEFAULT: "#6ec261",
          "50": "#f3fbf2",
          "100": "#e5f6e2",
          "200": "#ccecc6",
          "300": "#a2dc99",
          "400": "#6ec261",
          "500": "#4ca83f",
          "600": "#3a8a2f",
          "700": "#306d28",
          "800": "#2a5724",
          "900": "#23481f",
          "950": "#0e270c",
        },
        warning: {
          "50": "#fef4f2",
          "100": "#fee7e2",
          "200": "#fed2ca",
          "300": "#fcb3a5",
          "400": "#f88771",
          "500": "#f06449",
          "600": "#dd4325",
          "700": "#b9351c",
          "800": "#992f1b",
          "900": "#7f2d1d",
          "950": "#45140a",
        },
        beige: "#E6EBDB",
      },
      screens: {
        "laptop": "1025px"
      }
    },
    
  },
  darkMode: "class",
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    nextui()
],
};
export default config;
