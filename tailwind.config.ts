import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A365D',
          light: '#2A4A7F',
          dark: '#0F2341',
        },
        accent: {
          gold: '#D4AF37',
          red: '#E63946',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
