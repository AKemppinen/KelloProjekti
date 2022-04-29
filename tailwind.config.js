
module.exports = {
  content: ["./src/App.vue", "./src/views/*.vue", "./src/components/*.vue" ],
  theme: {
    extend: {},
    colors: {
      'default': '#FFFFFF',
      'primary': '#E0115F',
      'secondary': '#AAACB0',
      'highlight': '#575757',
      'light-highlight': '#646464',
      'lightgrey': '#eaeaea',
      'light-card-font': '#676767',
      'reference-font': '#9a9a9a',
      'primary-lighter': '#f0347b',
    },
    screens: {
      'Default': '0px',

      'Mobile': '1310px',

      'SD': '570px',

      'HD': '1100px',

      'FHD': '1850px',

      'QHD': '2300px',

      'UHD': '2800px',

      'UHD+': '3500px',

      'sm': '540px',
      'md': '768px',
      'lg': '1025px',
      'xl': '1280px',
      '2xl': '1738px',
      '3xl': '1836px',
      '4xl': '2136px',
      '5xl': '2336px',
      '6xl': '2736px',
      '7xl': '3136px',
      '8xl': '3536px',
    },
  },
  plugins: [],
}
