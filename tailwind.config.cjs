/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",         // dark gray-black
        secondary: "#6b7280",       // muted gray-blue
        tertiary: "#1f2937",        // dark slate
        "accent-blue": "#3b82f6",   // vibrant blue
        "white-100": "#f3f3f3",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #ffffff, #1f2937)", // white to slate gray
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0,0,0,0.3)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
