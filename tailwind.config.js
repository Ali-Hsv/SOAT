/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#119C59',
          2: '#14B86E',
          3: '#94DD8B',
        },
        secondary: '#780116',
        error: '#F01445',
        dark: {
          black_1: '#25282B',
          black_2: '#52575C',
          gray_1: '#A0A4A8',
          gray_2: '#CACCCF',
          white_1: '#F4F3F1',
          white_2: '#FAF9F7',
        }
      },
      fontFamily: {
        lexend: ['Lexend'],
        quicksand: ['Quicksand'],
      }
    },
  },
  plugins: [],
}

