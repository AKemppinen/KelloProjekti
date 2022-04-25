
module.exports = {
  content: ["./src/App.vue", "./src/views/*.vue", ],
  theme: {
    extend: {},
    colors: {
      'default': '#FFFFFF',
      'primary': '#E0115F',
      'secondary': '#AAACB0',
      'highlight': '#575757',
      'light-highlight': '#646464',
      'lightgrey': '#eaeaea',
      'black': '#4b4b4b',
      'light-card-font': '#676767',
      'reference-font': '#9a9a9a',
      'price-border': '#fcdae7',
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
    },
  },
  plugins: [],
}
