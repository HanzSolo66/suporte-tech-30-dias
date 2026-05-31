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
          DEFAULT: '#6C63FF',
          50: '#F0EFFF',
          100: '#E2E0FF',
          500: '#6C63FF',
          600: '#5A52E0',
          700: '#4840C0',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          500: '#FF6B6B',
        },
        success: {
          DEFAULT: '#4CAF50',
          500: '#4CAF50',
        },
        xp: {
          DEFAULT: '#FFD700',
          500: '#FFD700',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
        'xp-pop': 'xpPop 0.8s ease-out forwards',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        xpPop: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-40px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
