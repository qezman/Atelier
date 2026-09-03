import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-newsreader)', 'Newsreader', 'Georgia', 'serif'],
        body: ['var(--font-public-sans)', 'Public Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: 'var(--paper)',
        'paper-raised': 'var(--paper-raised)',
        charcoal: 'var(--charcoal)',
        ink: 'var(--ink)',
        'ink-secondary': 'var(--ink-secondary)',
        'ink-tertiary': 'var(--ink-tertiary)',
        'ink-on-dark': 'var(--ink-on-dark)',
        'ink-on-dark-secondary': 'var(--ink-on-dark-secondary)',
        clay: 'var(--clay)',
        'clay-text': 'var(--clay-text)',
        'clay-dim': 'var(--clay-dim)',
      },
      borderColor: {
        DEFAULT: 'var(--border)',
        strong: 'var(--border-strong)',
        'on-dark': 'var(--border-on-dark)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
