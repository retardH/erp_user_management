import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: colors.neutral,
        primary: colors.indigo,
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
    },
  },
  plugins: [],
};

export default config;
