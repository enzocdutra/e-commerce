const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['poppins', 'sans-serief'],
      },
  colors:{
    '50': '#fefde8',
    '100': '#fefdc3',
    '200': '#fef78a',
    '300': '#fdeb47',
    '400': '#fada15',
    '500': '#f5ca08',
    '600': '#ca9604',
    '700': '#a16c07',
    '800': '#85540e',
    '900': '#714512',
    '950': '#422406',
    },
    
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}