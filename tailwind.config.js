/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burnt-brown': '#54230F',
        'burnt-dark': '#3D1708',
        'chocolate-brown': '#713315',
        'warm-caramel': '#C47A3E',
        'golden-amber': '#E8A65D',
        'amber-light': '#F7D4A8',
        'soft-cream': '#FFF9EE',
        'warm-beige': '#F6EBD6',
        'beige-light': '#FBF4E9',
        'beige-border': '#E8DAC4',
        'dark-typography': '#171310',
        'dark-subtle': '#453A33',
        'muted-text': '#7A695E',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        hero: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(84, 35, 15, 0.15)',
        'luxury-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

