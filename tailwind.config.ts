import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "32px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        offwhite: "#edeeed",
        black: "#0e100e",
        primary: {
          DEFAULT: "#1c3a30",
          "50": "#f1f8f5",
          "100": "#ddeee4",
          "200": "#bedccc",
          "300": "#92c3ad",
          "400": "#63a487",
          "500": "#42876b",
          "600": "#306b55",
          "700": "#265645",
          "800": "#204537",
          "900": "#1c3a30",
          "950": "#0e201a",
        },
        secondary: {
          DEFAULT: "#e8e1f5",
          "50": "#f8f6fc",
          "100": "#f2eef9",
          "200": "#e8e1f5",
          "300": "#d5c6ec",
          "400": "#bea5e0",
          "500": "#a781d1",
          "600": "#9765c2",
          "700": "#8652af",
          "800": "#714493",
          "900": "#5d3979",
          "950": "#3c2451",
        },
        tertiary: {
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
        '50': '#f6f7f6',
        '100': '#e3e4e3',
        '200': '#c8c9c6',
        '300': '#a4a6a2',
        '400': '#888a85',
        '500': '#676963',
        '600': '#51534e',
        '700': '#424441',
        '800': '#373936',
        '900': '#303130',
        '950': '#191a19',
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
            default: {
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
            }
          }
        }
      }
    })
],
};
export default config;
