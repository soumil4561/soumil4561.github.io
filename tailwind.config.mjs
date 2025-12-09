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
        mono: "var(--font-mono)",
        quote: "var(--font-quote)",
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
        backgroundTertiary: "var(--background-tertiary)",
        backgroundTertiaryHover: "var(--background-tertiary-hover)",
        border: "var(--border)",
        borderHover: "var(--border-hover)",
        inverse: "var(--inverse)",
      },
      typography: {
        DEFAULT: {
          css: {
            "&&": {
              fontFamily: "var(--font-content)",
              color: "var(--default)",
            },

            // Headings use heading font
            "&& h1, && h2, && h3, && h4, && h5, && h6": {
              fontFamily: "var(--font-heading)",
              color: "var(--foreground)",
            },

            // Code blocks
            "&& pre": {
              fontFamily: "var(--font-mono)",
              backgroundColor: "var(--background-secondary)",
              color: "var(--primary)",
              padding: "1rem",
              borderRadius: "0.5rem",
            },

            // Inline code
            "&& code": {
              fontFamily: "var(--font-code)",
              backgroundColor: "var(--background-secondary)",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.3rem",
            },

            // Blockquotes
            "&& blockquote": {
              fontFamily: "var(--font-quote, var(--font-content))",
              color: "var(--primary)",
              borderColor: "var(--primary)",
            },

            // Links
            "&& a": {
              color: "var(--primary)",
              textDecoration: "underline",
              fontWeight: "500",
            },

            // Lists
            "&& li::marker": {
              color: "var(--primary)",
            },
          },
        },

        dark: {
          css: {
            "&&": {
              color: "var(--default)",
            },

            "&& pre": {
              backgroundColor: "var(--background-secondary)",
            },

            "&& code": {
              backgroundColor: "var(--background-secondary)",
            },

            "&& blockquote": {
              color: "var(--primary)",
              borderColor: "var(--primary)",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
