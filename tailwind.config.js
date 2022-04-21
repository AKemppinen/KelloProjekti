
module.exports = {
  content: ["./src/App.vue", "./src/views/*.vue", ],
  theme: {
    extend: {},
    colors: {
      'primary': '#E0115F',
      'secondary': '#AAACB0',
      'highlight': '#575757',
      'lightgrey': '#eaeaea',
      'light-card-font': '#676767',
      'reference-font': '#9a9a9a',
    },
    screens: {
      'Default': '0px',
      // => @media (min-width: 0px) { ... }

      'SD': '640px',
      // => @media (min-width: 640px) { ... }

      'HD': '1100px',
      // => @media (min-width: 1100px) { ... }

      'FHD': '1850px',
      // => @media (min-width: 1680px) { ... }

      'QHD': '2300px',
      // => @media (min-width: 2500px) { ... }

      'UHD': '2800px',
      // => @media (min-width: 3800px) { ... }

      'UHD+': '3500px',
      // => @media (min-width: 3800px) { ... }
    },
  },
  plugins: [],
}
