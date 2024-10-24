/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist:[
    "bg-red-500",
    "bg-green-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-lime-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-red-400",
    "bg-yellow-400",
    "bg-orange-400",
    "bg-violet-400",
  ]
}

