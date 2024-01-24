import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#0e100e',
      gray: {
        '50': '#f6f7f6',
    '100': '#e2e5e2',
    '200': '#c5cbc4',
    '300': '#a0aa9e',
    '400': '#7c877a',
    '500': '#616c60',
    '600': '#4c564b',
    '700': '#3f473e',
    '800': '#353b34',
    '900': '#2e332e',
    '950': '#0e100e',
      },
    },
    fontFamily: {
      sans: ['var(--font-satoshi)'],
      serif: ['var(--font-erode)'],
    },
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        primary: {
          DEFAULT: '#17412d',
          '50': '#f0f9f3',
          '100': '#daf1e0',
          '200': '#b8e2c6',
          '300': '#89cca3',
          '400': '#57b07c',
          '500': '#359460',
          '600': '#25764c',
          '700': '#1e5e3e',
          '800': '#1a4b33',
          '900': '#17412d',
          '950': '#0b2318',
        },
        secondary: {
          DEFAULT: '#6ec261',
          '50': '#f3fbf2',
          '100': '#e5f6e2',
          '200': '#ccecc6',
          '300': '#a2dc99',
          '400': '#6ec261',
          '500': '#4ca83f',
          '600': '#3a8a2f',
          '700': '#306d28',
          '800': '#2a5724',
          '900': '#23481f',
          '950': '#0e270c',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
