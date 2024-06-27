/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'KoinXBlue':'#0052FE',
        'BaseGray':'#EFF2F5',
        'BaseFont' : '#0F1629',
        'BaseSelection' : '#EFF2F5',
        'BaseGreen' : '#0FBA83',
        'BaseBlue' : '#0141CF',
      }
    },
  },
  plugins: [],
}

