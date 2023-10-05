/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      mon: ['Montserrat','sans-serif']
    }
  },
  //plug in flow bite
  plugins: [

    // require('flowbite/plugin')
  ],
}

