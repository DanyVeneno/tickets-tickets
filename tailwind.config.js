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
        nav: "#18222f",
        page: "#1B2229",
        card: "#47566a",
        "card-hover": "#4f5e74",
        "default-text": "#F7FEE7",
        "blue-accent": "#84CC12",
        "blue-accent-hover": "rgb(132, 204, 18,0.7)",
      },
    },
  },
  plugins: [],
};
