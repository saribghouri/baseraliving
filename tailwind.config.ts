import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#16140F',
        ivory: '#FBF9F4',
        bone: '#F3EFE6',
        sand: '#E7E1D4',
        walnut: '#7A5C3E',
        brass: '#B08E6B',
        line: '#D9CFBC',
        muted: '#6E675C',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      maxWidth: { wrap: '1280px' },
      transitionTimingFunction: {
        brand: 'cubic-bezier(.22,1,.36,1)',
      },
    },
  },
  plugins: [],
};

export default config;
