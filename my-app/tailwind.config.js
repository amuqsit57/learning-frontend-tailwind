/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        abdi: "var(--abdi)",
        primary: "var(--primary)",
        primaryForeground: "var(--primary-foreground)",

        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
