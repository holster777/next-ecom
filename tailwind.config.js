/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem,1fr))"
      },
      boxShadow: {
        'purple': 'inset 0 -0.69em 0 rgb(216, 191, 216)'
      },
      colors: {
        'purple': 'rgb(216, 191, 216)',
        'sand': '#C48B78'
      }
    },
  },
  plugins: [],
}

