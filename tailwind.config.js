module.exports = {
  content: [
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffbe98',  // Hauptfarbe 1
        secondary: '#a498ff', // Hauptfarbe 2
        accent: '#4a90e2',  // Akzentfarbe (Blau)
        dark: '#343a40',  // Dunkle Textfarbe
        white: '#ffffff', // Weiß
        light_pink: '#FFD9E8', // Hellrosa
        darkblue: '#2C2D6A', // Dunkelblau
        lightblue: '#D4F1F9', // Hellblau
        dark_gray: '#333', // Dunkelgraue Textfarbe
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
}
