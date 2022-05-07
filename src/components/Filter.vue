<template>
<div class="p-4 w-screen lg:w-60 min-h-screen md:h-full lg:border-r border-lightgrey absolute top-0 md:relative">

  <!-- Title for filters -->
  <div class="flex">
    <h2 class="font-medium text-xl text-primary mb-2">Filters</h2>
    <button class="ml-auto visible lg:invisible font-semibold" @click="$emit('onFilterClose')">Close</button>
  </div>
  <!-- /Title for filters -->

  <!-- Sorters bar -->
  <div>
    <fieldset class="px-4 py-2 my-2  border border-lightgrey">
      <legend class="font-medium">Sort By</legend>
      <div class="flex justify-between">
        <button class="uppercase text-sm" :class="{'font-bold' : sortedBy.price === 1, 'font-medium' : sortedBy.price === 2}" @click="handleSort('price')">Price</button>
        <button class="uppercase text-sm" :class="{'font-bold' : sortedBy.name === 1, 'font-medium' : sortedBy.name === 2}" @click="handleSort('name')">Name</button>
        <button class="uppercase text-sm" :class="{'font-bold' : sortedBy.brand === 1, 'font-medium' : sortedBy.brand === 2}" @click="handleSort('brand')">Brand</button>
      </div>
    </fieldset>
  </div>
  <!-- /Sorters bar -->

  <!-- Generating filters -->
  <div class="w-full">
    <fieldset class="px-4 py-2 my-2  border border-lightgrey" v-for="(filter, key) in filters" :key="key">
      <legend class="font-medium">{{filter.legend}}</legend>
      <div v-for="(option, i) in filter.options" :key="i">
        <input class="cursor-pointer" type="checkbox" v-model="option.active" :id="'option' + key + i" :name="option.name" @change="handleSearch(option.name, filter.searchTerm)">
        <label class="px-2 py-1 capitalize cursor-pointer" :for="'option' + key + i">{{option.name}}</label>
      </div>
    </fieldset>
  </div>
  <!-- /Generating filters -->

  </div>
</template>

<script>
export default {
  name: "FilterComponent",

  // Common prop info and Filter prop passed down that
  // includes the filters passed down from App
  props: {
    info: Array,
    filters: Array
  },

  data() {
    return {
      listSize: 0,
      sortedBy: {
        brand: 0,
        price: 0,
        name: 0,
      },
      search: [],
    }
  },

  methods: {
    //Handles a filter click
    handleSearch(option, term){
      //If the filter is disabled on change (not enabled)
      if(!event.target.checked){
        let delIndex = 0
        // Searches each element of the search array,
        // if it includes the option to be deleted and
        // saves the id of the one that does
        this.search.forEach((e, i) => {
          if(e.option === option){
            delIndex = i;
          }
        })
        this.search.splice(delIndex, 1)
      } else {
        //If the filter is enabled on change (not disabled)
        // it will add the option to the list of searches
        this.search.push(
            {
              option: option,
              term: term
            }
        )
      }
      let filArr = this.filteredArray
      if(filArr.length !== this.listSize){
        this.listSize = filArr.length

        //Emits the new list for the watches view.
        this.$emit("filterList", filArr)
      }
    },

    //Handles sorting
    handleSort(type){

      //Compare function of strings (name or brand)
      function compareString(a, b) {
        if (a[type] < b[type]) {
          return -1;
        }
        if (a[type] > b[type]) {
          return 1;
        }
        return 0;
      }

      //Compare function for numers (price)
      function compareNum(a, b) {
        if (parseInt(a.msrp) < parseInt(b.msrp) ) {
          return -1;
        }
        if (parseInt(a.msrp)  > parseInt(b.msrp) ) {
          return 1;
        }
        return 0;
      }

      let sortArr = this.filteredArray

      // Determine if sort is for the first, second time (1. apply sort, 2. reverse)
      // Numbers are for CSS class of the sort bar.
      if(this.sortedBy[type] === 0 || this.sortedBy[type] === 2){
        //Price uses a different compare system (is a number)
        if(type === 'price'){
          sortArr.sort(compareNum)
        } else {
          sortArr.sort(compareString)
        }

        this.resetSortedBy() // Resets all the sort values to 0
        this.sortedBy[type] = 1 // Reinstates the correct value for the type
      } else if(this.sortedBy[type] === 1){
        sortArr = sortArr.slice().reverse()

        this.resetSortedBy() // Resets all the sort values to 0
        this.sortedBy[type] = 2 // Reinstates the correct value for the type
      }

      // Emits the sorted function to watches view.
      this.$emit("filterList", sortArr)
    },

    // Resets all the sort values to 0
    resetSortedBy(){
      this.sortedBy.price = 0
      this.sortedBy.brand = 0
      this.sortedBy.name = 0
    }
  },

  computed: {
    // Filtered array applies the filters set by the user by passing
    // the previous enabled searches and adding new ones.
    filteredArray() {
      if(this.search.length > 0){
        return this.info.filter(item => {
          let returnVal = false
          this.search.forEach(e => {
            if(item[e.term].includes(e.option)){
              returnVal = true
            }
          })
          return returnVal
        })
      } else {
        return this.info
      }
    },
  }

}
</script>

<style scoped>

</style>
