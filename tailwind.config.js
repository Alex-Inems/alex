/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',         // Next.js App Router
    './pages/**/*.{js,ts,jsx,tsx}',       // Next.js Pages Router
    './components/**/*.{js,ts,jsx,tsx}',  // All components
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
      },
    },
  },
  plugins: [],
};
