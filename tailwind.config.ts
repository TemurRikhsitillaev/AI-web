import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        border: "hsla(0, 0%, 100%, .15)",
        primary: "var(--primary)",
        userResponse: "#2f2f2f",
      },
      borderRadius: {
        buttonRadius: "0.5rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",

        xl: "10rem",
        "2xl": "17rem",
      },
    },
  },
  plugins: [],
};
export default config;
