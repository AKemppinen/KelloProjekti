<template>
<div class="p-4 w-screen lg:w-60 min-h-screen md:h-full lg:border-r border-lightgrey absolute top-0 md:relative">

  <div class="flex">
    <h2 class="font-medium text-xl text-primary mb-2">Filters</h2>
    <button class="ml-auto visible lg:invisible font-semibold" @click="$emit('onFilterClose')">Close</button>
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
    }
  },

  computed: {
    filteredArray() {
      if(this.search.length > 0){
        return this.info.filter(item => {
          let returnVal = false
          this.search.forEach(e => {
            if(e.option === item[e.term]){
              returnVal = true
            }
          })
          return returnVal
          //return this.search.value.includes(item[this.search.term])
        })
      } else {
        return this.info
      }
    }
  }

}
</script>

<style scoped>

</style>
