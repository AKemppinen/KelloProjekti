<template>
  <div class="w-full md:w-2/3 lg:max-w-2xl lg:w-full sm:border-none sm:rounded-md sm:shadow-md overflow-hidden bg-lightgrey border-b border-lightgrey" @click="$emit('cardClick', watchId)">
    <div class="sm:flex">

      <!-- Kuva -->
      <div class="sm:shrink-0 sm:pb-6 sm:pt-2">
        <img class="h-80 w-80 mx-auto object-cover sm:w-full sm:h-full sm:w-48" :src="require('@/assets/watchfaces/' + watchId + '/front.png')" :alt="watchFooterStats.Reference">
      </div>
      <!-- /Kuva -->

      <!-- Kuvaus -->
      <div class="px-8 py-4 bg-default w-full flex flex-col">
        <!-- Header -->
        <div>
          <h1 class="text-xl uppercase font-medium text-primary">{{ watchHeaderStats.Name }}</h1>
          <hr class="border-lightgrey my-1">
          <div class="uppercase tracking-wide text-sm font-semibold flex">
            <h4>{{ watchHeaderStats.Family }}</h4>
            <h4 class="ml-auto">{{ watchHeaderStats.Price }} €</h4>
          </div>
        </div>
        <!-- /Header -->

        <!-- Detail table -->
        <div class="mt-6 mb-4 sm:mt-auto sm:mb-4">
          <table class="table-auto text-left capitalize">
            <tbody>
              <tr v-for="(stat, key) in watchStats" :key="key">
                <th class="border-r pr-4">{{ key }}</th>
                <td class="pl-4">{{ stat }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /Detail table -->

        <!-- Footer -->
        <div class="flex">
          <p class="basis-4/5 my-auto h-fit">{{ watchFooterStats.Reference }}</p>
          <img class="object-contain h-8 basis-1/5" :src="require('@/assets/brands/' + watchFooterStats.Brand + '.png')" :alt="'omega'">
        </div>
        <!-- /Footer -->

      </div>
      <!-- /Kuvaus -->

    </div>
  </div>
</template>

<script>
export default {
  name: "WatchCard",

  props: {
    watchId: Number,

    watchHeaderStats: {
      Name: String,
      Family: String,
      Price: Number,
    },

    watchStats: {
      Case: String,
      Crystal: String,
      Diameter: Number,
    },

    watchFooterStats: {
      Brand: String,
      Reference: String,
    }
  },

}
</script>

<style scoped>

</style>