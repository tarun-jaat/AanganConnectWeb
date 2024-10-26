/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        'custom-tight': '-0.05em',
        'custom-wide': '0.1em',
      },
    },
  },
  plugins: [],
}

