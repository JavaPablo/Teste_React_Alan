module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blue: {
          500: "#3498db",
        },
        customBlue: {
          500: "#00BDFF",
        },
        customDark: {
          500: "#121929",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
