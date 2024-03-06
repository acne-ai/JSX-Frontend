/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./client/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        style: "scroll-padding-top: 5rem; scroll-behavior: smooth;",
        animation: {
          'infinite-scroll': 'infinite-scroll 5s linear infinite',
          'typewriter' : 'typewriter 2s steps(11) forwards',
          'caret' : 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
        },
        keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(-75%)' },
            to: { transform: 'translateX(50%)' },
          },
          'typewriter': {
            to: {
              left: '100%',
            },
          },
          'blink': {
            '0%': {
              opacity: '0',
            },
            '0.1%': {
              opacity: '1',
            },
            '50%': {
              opacity: '1',
            },
            '50.1%': {
              opacity: '0',
            },
            '100%': {
              opacity: '0',
            },
          },
        
        },                    
      
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      },
    },
    
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dracula",
    ] 
  },
  
 }

