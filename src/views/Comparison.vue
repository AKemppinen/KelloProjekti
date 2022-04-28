<template>
  <body class="text-highlight min-h-screen h-full w-screen text-xs md:text-sm lg:text-base">
  <Navbar></Navbar>
    <table v-if="comparison.length > 0" class="w-full table-fixed h-full break-words">
      <tbody>

      <tr v-for="(item, key) in computedComparisonArray[0]" :key="key" class="border-y border-lightgrey text-center">
        <th class="xl:w-44 border-y border-black text-lightgrey px-2 md:px-4 bg-highlight text-left">{{ item }}</th>

        <td v-for="value in computedComparisonArray.slice(1)" :key="value" class="px-2 py-2">
          <div class="capitalize ">

            <p v-if="key !== 'id' && key !== 'functions'">{{ value[key] }}</p>

            <img v-else-if="key === 'id'" class="block object-cover mx-auto my-4 h-32 lg:h-48 2xl:h-64" :src="require('@/assets/watchfaces/' + value.id + '/front.png')" :alt="value.reference">

            <ul v-else-if="key === 'functions'">
              <li v-for="func in value.functions" :key="func">{{ func }}</li>
            </ul>

          </div>
        </td>

      </tr>

      </tbody>
    </table>
  </body>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'ComparisonView',

  props: {
    comparison: Array
  },

  data() {
    return {
      comparisonArray: [
        {
          id: '',
          brand: 'Brand',
          family: 'Family',
          name: 'Name',
          reference: 'Reference',
          glass: 'Crystal',
          dialcolor: 'Color',
          diameter: 'Diameter',
          lugwidth: 'Lug Width',
          material: 'Material',
          wr: 'Water resistance',
          strap: 'Strap',
          back: 'Back',
          type: 'Type',
          year: 'Year',
          msrp: 'Price',
          functions: 'Functions'
        },
    ]
    }
  },

  components: {
    Navbar,
  },

  computed: {
    computedComparisonArray() {
      this.setup();
      return this.comparisonArray
    }
  },

  methods: {
    setup() {
      this.comparison.forEach(e => {
        this.comparisonArray.push(e)
      })

      try {
        this.comparisonArray.forEach(e => {
          if(e.id){
            e.functions = e.functions.split(',');
          }
        })
      } catch (e) {
        console.log("Known type error handled...")
      }

    }
  },
}
</script>

<style scoped>

</style>