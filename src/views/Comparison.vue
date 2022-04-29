<template>
  <body class="w-screen min-h-screen">
    <Navbar></Navbar>
    <div class="text-highlight flex justify-center text-xs md:text-sm lg:text-base">
      <table v-if="comparison.length > 0" class="break-words w-full md:w-fit h-fit md:h-full lg:mr-60 capitalize text-center">
        <tbody>

        <!-- Table row -->
        <tr v-for="(item, key, index) in computedComparisonArray[0]" :key="key" class="border-b border-lightgrey" :class="{'text-primary border-t border-default' : index === 0}">

          <!-- Table headers -->
          <th class="sm:w-60 invisible sm:visible mobileBlock border-lightgrey font-semibold md:px-2 md:px-4 text-left" :class="{'border-t border-default' : index === 1}">{{ item }}</th>
          <!-- /Table headers -->

          <!-- Table points -->
          <td v-for="value in computedComparisonArray.slice(1)" :key="value" class="border-x border-lightgrey h-10">
            <div class=" sm:w-36 md:w-52 xl:w-64 md:px-2 py-2 mx-auto" :class="{'text-primary font-semibold sm:font-bold text-lg h-full' : index === 1}">

              <p v-if="key !== 'id' && key !== 'functions' && key !== 'brand'">{{ value[key] }}</p> <!-- Text -->

              <img v-else-if="key === 'brand'" class="object-contain mx-auto w-1/2 md:w-1/3 py-1 md:py-2" :src="require('@/assets/brands/' + value.brand + '.png')" :alt="value.brand"> <!-- Brand image -->

              <div v-else-if="key === 'id'">
                <button class="uppercase text-sm py-1 px-4 hover:text-primary-lighter" :id="value.id" @click="deleteComparison(value.id)">Delete</button>
                <img class="object-cover mx-auto md:mb-4 h-48 2xl:h-64" :src="require('@/assets/watchfaces/' + value.id + '/front.png')" :alt="value.reference"> <!-- Watch image -->
              </div>

              <!-- Functions list -->
              <ul v-else-if="key === 'functions'">
                <li v-for="func in value.functions" :key="func">{{ func }}</li>
              </ul>
              <!-- /Functions list -->

            </div>
          </td>
          <!-- /Table points -->
        </tr>
        <!-- /Table row -->
        </tbody>
      </table>
    </div>
  </body>
  <!--<div class="fixed h-screen bg-highlight w-20 md:w-32 lg:w-44"></div>-->
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
          name: '',
          brand: 'Brand',
          family: 'Family',
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
    },

    deleteComparison(id){
      this.comparisonArray.splice(1, this.computedComparisonArray.length-1)
      this.$emit('deleteComparison', id)
    }
  },
}
</script>

<style scoped>
  @media only screen and (max-width: 540px) {
    .mobileBlock{
      display: block;
      height: 0;
      width: 0;
    }
  }
</style>