/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ], theme: {
    fontFamily: {
      primary: 'orbitron',
      secondary: 'rajdhani',
      tertiary: 'aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#b809c3',
      },
      backgroundImage: {
        // 'site': "url('src\assets\site.jpg')"
        // 'about': "url('./src/assets/about.jpg')",
        // 'services': "url('./src/assets/home.jpg')",
      },
    },
  },
  plugins: [],
}
