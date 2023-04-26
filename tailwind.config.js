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
    },
  },
  plugins: [],
}
