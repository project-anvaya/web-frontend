import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Material You color tokens
      colors: {
        // Primary colors
        primary: {
          DEFAULT: 'var(--md-sys-color-primary)',
          container: 'var(--md-sys-color-primary-container)',
          on: 'var(--md-sys-color-on-primary)',
          'on-container': 'var(--md-sys-color-on-primary-container)',
        },
        // Secondary colors
        secondary: {
          DEFAULT: 'var(--md-sys-color-secondary)',
          container: 'var(--md-sys-color-secondary-container)',
          on: 'var(--md-sys-color-on-secondary)',
          'on-container': 'var(--md-sys-color-on-secondary-container)',
        },
        // Tertiary colors
        tertiary: {
          DEFAULT: 'var(--md-sys-color-tertiary)',
          container: 'var(--md-sys-color-tertiary-container)',
          on: 'var(--md-sys-color-on-tertiary)',
          'on-container': 'var(--md-sys-color-on-tertiary-container)',
        },
        // Surface colors
        surface: {
          DEFAULT: 'var(--md-sys-color-surface)',
          dim: 'var(--md-sys-color-surface-dim)',
          bright: 'var(--md-sys-color-surface-bright)',
          'low-1': 'var(--md-sys-color-surface-container-lowest)',
          'low-2': 'var(--md-sys-color-surface-container-low)',
          'low-3': 'var(--md-sys-color-surface-container)',
          'low-4': 'var(--md-sys-color-surface-container-high)',
          'low-5': 'var(--md-sys-color-surface-container-highest)',
        },
        // Error colors
        error: {
          DEFAULT: 'var(--md-sys-color-error)',
          container: 'var(--md-sys-color-error-container)',
          on: 'var(--md-sys-color-on-error)',
          'on-container': 'var(--md-sys-color-on-error-container)',
        },
      },
      // Material You typography
      fontFamily: {
        sans: ['var(--md-sys-typescale-body-large-font)'],
        display: ['var(--md-sys-typescale-display-large-font)'],
        headline: ['var(--md-sys-typescale-headline-large-font)'],
        title: ['var(--md-sys-typescale-title-large-font)'],
        label: ['var(--md-sys-typescale-label-large-font)'],
      },
      // Material You elevation
      boxShadow: {
        'elevation-1': 'var(--md-sys-elevation-level1)',
        'elevation-2': 'var(--md-sys-elevation-level2)',
        'elevation-3': 'var(--md-sys-elevation-level3)',
        'elevation-4': 'var(--md-sys-elevation-level4)',
        'elevation-5': 'var(--md-sys-elevation-level5)',
      },
    },
  },
  plugins: [],
};

export default config;
