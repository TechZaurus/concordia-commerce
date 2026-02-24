import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-crimson)', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui() as any],
};

export default config;
