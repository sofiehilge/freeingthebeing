/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'baskerville-regular': ['Baskervville', 'serif'],
        'baskerville-italic': ['Baskervville', 'serif'],
      },
      fontSize: {
        h1: ['32px', { lineHeight: '40px' }], // Default size
        'h1-md': ['36px', { lineHeight: '44px' }], // Medium screens
        'h1-lg': ['40px', { lineHeight: '48px' }], // Large screens
        h2: ['24px', { lineHeight: '32px' }],
        'h2-md': ['28px', { lineHeight: '36px' }],
        'h2-lg': ['32px', { lineHeight: '40px' }],
        h3: ['20px', { lineHeight: '28px' }],
        'h3-md': ['24px', { lineHeight: '32px' }],
        'h3-lg': ['28px', { lineHeight: '36px' }],
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      // Simplified components for testing
      addComponents({
        '.h1': {
          '@apply text-h1 md:text-h1-md lg:text-h1-lg': {}, // Font sizes
        },
        '.h2': {
          '@apply text-h2 md:text-h2-md lg:text-h2-lg': {},
        },
        '.h3': {
          '@apply text-h3 md:text-h3-md lg:text-h3-lg': {},
        },
      });
    },
  ],
};
