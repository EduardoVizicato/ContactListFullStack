/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
}

