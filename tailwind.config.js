/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF90E8',
        secondary: '#FFD000',
        success: '#4ade80',
        danger: '#ff4949',
        muted: '#f4f4f5',
        surface: '#ffffff',
        background: '#FFF9E6',
        border: '#000000'
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '2px 2px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}

