<template>
<div class="p-4 w-screen lg:w-60 min-h-screen md:h-full lg:border-r border-lightgrey absolute top-0 md:relative">

  <div class="flex">
    <h2 class="font-medium text-xl text-primary mb-2">Filters</h2>
    <button class="ml-auto visible lg:invisible font-semibold" @click="$emit('onFilterClose')">Close</button>
  </div>

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

  <div class="w-full">
    <fieldset class="px-4 py-2 my-2  border border-lightgrey" v-for="(filter, key) in filters" :key="key">
      <legend class="font-medium">{{filter.legend}}</legend>
      <div v-for="(option, i) in filter.options" :key="i">
        <input class="cursor-pointer" type="checkbox" v-model="option.active" :id="'option' + key + i" :name="option.name" @change="handleSearch(option.name, filter.searchTerm)">
        <label class="px-2 py-1 capitalize cursor-pointer" :for="'option' + key + i">{{option.name}}</label>
      </div>
    </fieldset>
  </div>

  </div>
</template>

<script>
export default {
  name: "FilterComponent",

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
    handleSearch(option, term){
      if(!event.target.checked){
        let delIndex = 0
        this.search.forEach((e, i) => {
          if(e.option === option){
            delIndex = i;
          }
        })
        this.search.splice(delIndex, 1)
      } else {
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
        this.$emit("filterList", filArr)
      }
    },

    handleSort(type){

      function compareString(a, b) {
        if (a[type] < b[type]) {
          return -1;
        }
        if (a[type] > b[type]) {
          return 1;
        }
        return 0;
      }

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

      if(this.sortedBy[type] === 0 || this.sortedBy[type] === 2){
        if(type === 'price'){
          sortArr.sort(compareNum)
        } else {
          sortArr.sort(compareString)
        }

        this.resetSortedBy()
        this.sortedBy[type] = 1
      } else if(this.sortedBy[type] === 1){
        sortArr = sortArr.slice().reverse()

        this.resetSortedBy()
        this.sortedBy[type] = 2
      }

      this.$emit("filterList", sortArr)
    },

    resetSortedBy(){
      this.sortedBy.price = 0
      this.sortedBy.brand = 0
      this.sortedBy.name = 0
    }
  },

  computed: {
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
          //return this.search.value.includes(item[this.search.term])
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
