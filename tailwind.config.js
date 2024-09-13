/** @type {import("tailwindcss").Config} */

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
        primary: "var(--primary)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
      },
    },
  },
  plugins: [],
};
