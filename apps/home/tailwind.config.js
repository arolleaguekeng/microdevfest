require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */

export const content = [
  join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
  "./src/**/*.{html,ts}"
];

export const theme = {
  extend: {
    keyframes: {
      'slide-in': {
        '0%': { transform: 'translateY(-100px)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
      brilliance: {
        '0%': { textShadow: '0 0 0 rgba(0, 255, 0, 0)' },
        '50%': { textShadow: '0 0 20px rgba(0, 255, 0, 0.8)' },
        '100%': { textShadow: '0 0 0 rgba(0, 255, 0, 0)' },
      },
    },
    animation: {
      'slide-in': 'slide-in 1s ease-out',
      brilliance: 'brilliance 1.5s ease-in-out infinite',
    },
    backgroundImage: {},
    margin: {
      '233': '233px',
    },
    colors: {
      'background-light': '#FFFFFF',
      'background-dark': '#000F22',
      'text-primary': '#015901',
      'custom-gray': '#d9d9d9',
      slate: {
        50: "#F5FBFF",
      },
    },
    fontFamily: {
      'TiltWarp': ['Tilt Warp', 'sans-serif'],
      'Fustat': ['Fustat', 'sans-serif'],
    },
    fontSize: {
      'base': '24px',
    },
    fontWeight: {
      'normal': '400',
    },
    lineHeight: {
      'base': '24px',
    },
    letterSpacing: {
      'wide': '1px',
    },
    textAlign: {
      'left': 'left',
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
};
export const plugins = [];
