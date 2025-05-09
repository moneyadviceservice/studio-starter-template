import type { Config } from 'tailwindcss';
import StudioConfig from './studio.config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...StudioConfig.colors,
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
