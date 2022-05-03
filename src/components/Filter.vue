<template>
<div class="p-4 w-screen lg:w-60 min-h-screen md:h-full lg:border-r border-lightgrey absolute top-0 md:relative">

  <div class="flex">
    <h2 class="font-medium text-xl text-primary mb-2">Filters</h2>
    <button class="ml-auto visible lg:invisible font-semibold" @click="$emit('onFilterClose')">Close</button>
  </div>

  <div class="w-full">
    <fieldset class="px-4 py-2 my-2  border border-lightgrey" v-for="(filter, i) in filters" :key="i">
      <legend class="font-medium">{{filter.legend}}</legend>
      <div v-for="(option, i) in filter.options" :key="i">
        <input class="cursor-pointer" type="checkbox" v-model="option.active" :id="'option' + i" :name="option.name" @change="handleSearch(option.name, filter.searchTerm)">
        <label class="px-2 py-1 capitalize cursor-pointer" :for="'option' + i">{{option.name}}</label>
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
      search: {
        value: [],
        term: ''
      },
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
        this.search.value.splice(this.search.value.indexOf(option), 1)
      } else {
        this.search.value.push(option)
        this.search.term = term
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
      if(this.search.value.length > 0){
        return this.info.filter(item => {
            return this.search.value.includes(item[this.search.term])
        })
      } else {
        return this.info
      }
    }
  },

}
</script>

<style scoped>

</style>
