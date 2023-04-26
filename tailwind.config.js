/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins_400Regular'],
        'poppins-semi': ['Poppins_600SemiBold'],
        'poppins-bold': ['Poppins_700Bold'],
        'poppins-medium': ['Poppins_500Medium'],
        'poppins-black': ['Poppins_800ExtraBold'],
      },
      colors: {
        primary: {
          100: '#fff2cc',
          200: '#ffe699',
          300: '#fed966',
          400: '#fecd33',
          500: '#fec000',
          600: '#cb9a00',
          700: '#987300',
          800: '#664d00',
          900: '#332600',
        },
      },
    },
  },
  plugins: [],
}
