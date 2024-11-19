import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import { colors } from "./src/lib/definitions";

const safeColors = colors.flatMap((color) => [
  `bg-${color}`,
  `bg-${color}-dark`,
  `bg-${color}-light`,
  `border-${color}`,
  `border-${color}-dark`,
  `border-${color}-light`,
]);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [...safeColors],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "32px",
      },
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        foreground: "var(--foreground)",
        "foreground-1": "var(--foreground-1)",
        "foreground-2": "var(--foreground-2)",
        "foreground-primary": "var(--foreground-primary)",
        white: "#FFFFFF",
        offwhite: "#e6e7e4",
        black: "#0e100e",
        primary: {
          DEFAULT: "#383c2b",
          "50": "#f6f6ef",
          "100": "#e9eadd",
          "200": "#d5d7bf",
          "300": "#b9be98",
          "400": "#9ea576",
          "500": "#818959",
          "600": "#646c44",
          "700": "#515739",
          "800": "#40452f",
          "900": "#383c2b",
          "950": "#1d1f14",
        },
        secondary: {
          DEFAULT: "#94ad61",
          "50": "#f4f7ee",
          "100": "#e8edda",
          "200": "#d3deb8",
          "300": "#b6c88e",
          "400": "#94ad61",
          "500": "#7d964c",
          "600": "#60763a",
          "700": "#4b5c2f",
          "800": "#3e4a2a",
          "900": "#364027",
          "950": "#1b2211",
        },
        gray: {
          "50": "#f3f3f1",
          "100": "#e6e7e4",
          "200": "#cdceca",
          "300": "#b4b6af",
          "400": "#b4b6af",
          "500": "#9a9d95",
          "600": "#81857a",
          "700": "#676a62",
          "800": "#4e5049",
          "900": "#343531",
          "950": "#1a1b18",
        },
        sky: {
          DEFAULT: "#86b6f9",
          dark: "#2b7cee",
          light: "#cee2fd",
        },
        coral: {
          DEFAULT: "#f99585",
          dark: "#ee452b",
          light: "#fdd4ce",
        },
        sun: {
          DEFAULT: "#f9ee85",
          dark: "#eeda2b",
          light: "#fdf8ce",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        serif: "larken",
      },
      padding: {
        "safe-bottom": "max(1.5rem, env(safe-area-inset-bottom))",
        "safe-top": "env(safe-area-inset-top)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#383c2b",
              "50": "#f6f6ef",
              "100": "#e9eadd",
              "200": "#d5d7bf",
              "300": "#b9be98",
              "400": "#9ea576",
              "500": "#818959",
              "600": "#646c44",
              "700": "#515739",
              "800": "#40452f",
              "900": "#383c2b",
            },
            default: {
              "50": "#f3f3f1",
              "100": "#e6e7e4",
              "200": "#cdceca",
              "300": "#b4b6af",
              "400": "#b4b6af",
              "500": "#9a9d95",
              "600": "#81857a",
              "700": "#676a62",
              "800": "#4e5049",
              "900": "#343531",
            },
          },
        },
      },
    }),
  ],
};
export default config;