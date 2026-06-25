import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#728d69',
          50: '#f4f6f3',
          100: '#e7ece4',
          200: '#cfd8ca',
          300: '#b4c1ad',
          400: '#8fa184',
          500: '#728d69',
          600: '#5b6d55',
          700: '#4a5945',
          800: '#3b4738',
          900: '#2f352d',
        },
      },
    },
  },

  plugins: [],
};

export default config;