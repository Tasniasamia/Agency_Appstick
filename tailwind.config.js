/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#55E6A5",
        textcolor: "#2B2B2B",
        secondarytext:"#534C4C",
        textcolor2:" #534C4C",
        primarytextColor:"#888AA0"
        
      },
      letterSpacing: {
        small: '2%',}
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],

};
