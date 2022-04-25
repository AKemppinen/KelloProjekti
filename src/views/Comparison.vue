<template>
  <body class="text-highlight h-full">
    <table class="w-full table-fixed h-full">
      <tbody>
      <tr v-for="(item, key) in info[0]" :key="key" class="border-y border-lightgrey text-center">
        <th class="w-44 border-y border-black text-lightgrey px-4 bg-highlight text-left">{{item}}</th>
        <td v-for="(value, index) in info.slice(1)" :key="index">
          <div class="capitalize py-2">
            <p v-if="key !== 'id' && key !== 'functions'">{{ value[key] }}</p>
            <img v-else-if="key === 'id'" class="block object-contain mx-auto my-4 h-52" :src="require('@/assets/watchfaces/' + value.id + '/front.png')" :alt="value.reference">
            <ul v-else-if="key === 'functions'">
              <li v-for="(func, i) in value.functions" :key="i">{{ func }}</li>
            </ul>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </body>
</template>

<script>
export default {
  name: 'ComparisonView',
  data() {
    return {
      windowHeight: 0,
      isMobile: true,
      info: [
        {
          id: '',
          brand: 'Brand',
          family: 'Family',
          name: 'Name',
          reference: 'Reference',
          glass: 'Crystal',
          dialcolor: 'Color of Dial',
          diameter: 'Diameter',
          lugwidth: 'Lug width',
          material: 'Case material',
          wr: 'Water resistance',
          strap: 'Bracelet',
          back: 'Case back',
          type: 'Watch type',
          year: 'Year of Production',
          msrp: 'Price',
          functions: 'Functions'
        },
        {
          id: 1,
          brand: 'Omega',
          family: 'Aqua Terra',
          name: 'aqua terra 150M "Beijing 2022"',
          reference: '522.10.41.21.04.001',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '41',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 150,
          strap: 'stainless steel bracelet',
          back: 'closed',
          type: 'dress',
          year: '2021',
          msrp: '6500',
          functions: 'hours, minutes, seconds, date, chronometer'
        },
        {
          id: 2,
          brand: 'Omega',
          family: 'Speedmaster',
          name: 'moonwatch professional',
          reference: '310.30.42.50.01.002',
          glass: 'sapphire',
          dialcolor: 'black',
          diameter: '42',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'stainless steel bracelet',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '7800',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 3,
          brand: 'Omega',
          family: 'Speedmaster',
          name: 'moonwatch professional',
          reference: '310.63.42.50.02.001',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '42',
          lugwidth: '20',
          material: 'white gold',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 4,
          brand: 'Omega',
          family: 'Seamaster',
          name: 'Seamaster Diver 300M Master',
          reference: '210.30.42.20.04.001',
          glass: 'sapphire',
          dialcolor: 'white',
          diameter: '42',
          lugwidth: '20',
          material: 'ceramic, stainless steel',
          wr: 300,
          strap: 'stainless steel bracelet',
          back: 'open',
          type: 'diver',
          year: '2019',
          msrp: '5800',
          functions: 'hours, minutes, seconds, date, chronometer'
        },
      ],
    };
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1310;

      this.windowHeight = window.innerHeight - 58;
      document.getElementById("body").style.height = this.windowHeight + "px";
    },

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.onResize();

      this.info.forEach((e, i) => {
        if(i > 0){
          e.functions = e.functions.split(',');
        }
      })
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style scoped>

</style>