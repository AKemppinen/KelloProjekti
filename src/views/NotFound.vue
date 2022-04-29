<template>
  <div class="w-screen h-screen bg-highlight relative">
    <div class="absolute top-1/4 inset-x-0 mx-auto">
      <img class="h-52 mx-auto mb-12 animate-bounce" :src="require('@/assets/rubyv.png')" alt="Ruby">
      <h1 class="text-center font-bold text-6xl text-default italic">404!</h1>
      <p class="italic text-lightgrey text-lg font-medium text-center mt-4">The page you are looking for cannot be found.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "NotFoundView",
}


</script>

<style scoped>

</style>