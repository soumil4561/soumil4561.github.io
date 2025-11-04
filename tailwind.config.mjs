/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-heading)",
        content: "var(--font-content)",
      },
      colors: {
        default: "var(--default)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundSecondary: "var(--background-secondary)",
        border: "var(--border)"
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

