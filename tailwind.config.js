/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors'
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './src/App.jsx'
  ],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    fontFamily: {
      Spartan: ['League Spartan']
    },
    extend: {
      fontSize: {
        numbers: '32px'
      }
    }
  },
  plugins: [
    createThemes({
      Theme1: {
        backgroundMain: 'hsl(222, 26%, 31%)',
        backgroundKeypad: 'hsl(223, 31%, 20%)',
        backgroundScreen: 'hsl(224, 36%, 15%)',
        keyBackgroundP: 'hsl(225, 21%, 49%)',
        keyBackgroundShadowP: 'hsl(224, 28%, 35%)',
        keyBackgroundS: 'hsl(6, 63%, 50%)',
        keyBackgroundShadowS: 'hsl(6, 70%, 34%)',
        keyBackgroundT: 'hsl(30, 25%, 89%)',
        keyBackgroundShadowT: 'hsl(28, 16%, 65%)',
        text: 'hsl(0, 0%, 100%)',
        buttons: 'hsl(221, 14%, 31%)',
        buttonsEqual: 'hsl(0, 0%, 100%)',
        buttonsSpecial: 'hsl(0, 0%, 100%)'
      },
      Theme2: {
        backgroundMain: 'hsl(0, 0%, 90%)',
        backgroundKeypad: 'hsl(0, 5%, 81%)',
        backgroundScreen: 'hsl(0, 0%, 93%)',
        keyBackgroundP: 'hsl(185, 42%, 37%)',
        keyBackgroundShadowP: 'hsl(185, 58%, 25%)',
        keyBackgroundS: 'hsl(25, 98%, 40%)',
        keyBackgroundShadowS: 'hsl(25, 99%, 27%)',
        keyBackgroundT: 'hsl(45, 7%, 89%)',
        keyBackgroundShadowT: 'hsl(35, 11%, 61%)',
        text: 'hsl(60, 10%, 19%)',
        buttons: 'hsl(60, 10%, 19%)',
        buttonsEqual: 'hsl(0, 0%, 100%)',
        buttonsSpecial: 'hsl(0, 0%, 100%)'
      },
      Theme3: {
        backgroundMain: 'hsl(268, 75%, 9%)',
        backgroundKeypad: 'hsl(268, 71%, 12%)',
        backgroundScreen: 'hsl(268, 71%, 12%)',
        keyBackgroundP: 'hsl(281, 89%, 26%)',
        keyBackgroundShadowP: 'hsl(285, 91%, 52%)',
        keyBackgroundS: 'hsl(176, 100%, 44%)',
        keyBackgroundShadowS: 'hsl(177, 92%, 70%)',
        keyBackgroundT: 'hsl(268, 47%, 21%)',
        keyBackgroundShadowT: 'hsl(290, 70%, 36%)',
        text: 'hsl(52, 100%, 62%)',
        buttons: 'hsl(52, 100%, 62%)',
        buttonsEqual: 'hsl(198, 20%, 13%)',
        buttonsSpecial: 'hsl(0, 0%, 100%)'
      }
    })
  ]
}
