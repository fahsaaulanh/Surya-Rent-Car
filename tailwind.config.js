/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        fnd: {
          // Ganti hitam pekat dengan Slate-900 (Biru dongker sangat gelap yang elegan)
          black: "#0f172a",
          dark: "#1e293b",
          // Ganti kuning standar dengan Emas/Amber modern
          yellow: "#f59e0b",
          yellowHover: "#d97706",
          grayText: "#64748b",
          lightBg: "#f8fafc",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
