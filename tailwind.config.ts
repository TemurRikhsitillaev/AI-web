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
        prompt: "#2f2f2f",
        sidebar: "#171717",
        hover: "#212121",
      },
      borderRadius: {
        buttonRadius: "0.5rem",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "1rem",
        xl: "15rem",
        "2xl": "20rem",
      },
    },
  },
  plugins: [],
};
export default config;
