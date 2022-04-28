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
        <input type="checkbox" :id="'option' + i" :name="option.name">
        <label class="ml-2 capitalize" :for="'option' + i">{{option.name}} ({{option.amount}})</label>
      </div>
    </fieldset>
  </div>

  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data() {
    return {
      filters: [
        {
          legend: 'Case',
          options: [
            {
              name: 'stainless steel',
              amount: 4,
              active: false,
            },
            {
              name: 'white gold',
              amount: 1,
              active: false,
            },
            {
              name: 'ceramic',
              amount: 1,
              active: false,
            },
            {
              name: 'titanium',
              amount: 1,
              active: false,
            },
            {
              name: 'resin',
              amount: 1,
              active: false,
            },
            {
              name: 'platinum',
              amount: 1,
              active: false,
            }
          ]
        },
        {
          legend: 'Diameter',
          options: [
            {
              name: '28,3 MM',
              amount: 1,
              active: false,
            },
            {
              name: '41 MM',
              amount: 2,
              active: false,
            },
            {
              name: '42 MM',
              amount: 3,
              active: false,
            },
            {
              name: '45 MM',
              amount: 1,
              active: false,
            }
          ]
        },
        {
          legend: 'Crystal',
          options: [
            {
              name: 'Sapphire',
              amount: 7,
              active: false,
            }
          ]
        }
      ],
    }
  }

}
</script>

<style scoped>

</style>