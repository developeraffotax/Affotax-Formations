/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#23314E',
        secondary: '#FC6600',

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Sixtyfour: ["Sixtyfour", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Mulish: ["Mulish", "sans-serif"],
        
      }
    },
  },
  plugins: [],
};
