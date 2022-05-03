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
        <input class="cursor-pointer" type="checkbox" :id="'option' + key + i" :name="option.name" @change="handleSearch(option.name, filter.searchTerm)">
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
    info: Array
  },

  data() {
    return {
      listSize: 0,
      search: [],
      filters: [
        {
          legend: 'Brand',
          searchTerm: 'brand',
          options: [
            {
              name: 'Omega',
              active: false,
            },
          ]
        },
        {
          legend: 'Dial-Color',
          searchTerm: 'dialcolor',
          options: [
            {
              name: 'silver',
              active: false,
            },
            {
              name: 'black',
              active: false,
            }
          ]
        },
        {
          legend: 'Diameter',
          searchTerm: 'diameter',
          options: [
            {
              name: '41.00',
              active: false,
            },
            {
              name: '42.00',
              active: false,
            }
          ]
        },
        {
          legend: 'Material',
          searchTerm: 'material',
          options: [
            {
              name: 'stainless steel',
              active: false,
            },
          ]
        },
        {
          legend: 'Water Resitance',
          searchTerm: 'wr',
          options: [
            {
              name: '150',
              active: false,
            },
            {
              name: '50',
              active: false,
            }
          ]
        },
        {
          legend: 'Bracelet',
          searchTerm: 'strap',
          options: [
            {
              name: 'stainless steel bracelet',
              active: false,
            },
          ]
        },
        {
          legend: 'Back',
          searchTerm: 'back',
          options: [
            {
              name: 'closed',
              active: false,
            },
            {
              name: 'open',
              active: false,
            }
          ]
        },
        {
          legend: 'Type',
          searchTerm: 'type',
          options: [
            {
              name: 'dress',
              active: false,
            },
            {
              name: 'chronograph',
              active: false,
            }
          ]
        },
      ],
    }
  },

  methods: {
    handleSearch(option, term){
      if(!event.target.checked){
        let delIndex
        this.search.forEach((e, i) => {
          if(e.option === option){
            delIndex = i;
          }
        })
        if(delIndex){
          this.search.value.splice(delIndex, 1)
        }
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
