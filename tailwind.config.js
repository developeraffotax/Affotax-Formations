const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],

  
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          secondary: {
            DEFAULT: "#FC6600",
            foreground: "#FDC9A5",
          },
          focus: "#000000",
        },
      },
      
    },
  })],

  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: '#23314E',
        secondary: '#FC6600',
        c1: '#FC6600',
        c2: '#002B5B',
        c3: '#00555A',
        c4: '#FFFFFF',

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
  
};
