<template>
  <div class="w-screen h-screen bg-highlight relative">
    <Navbar></Navbar>
    <div class="absolute top-1/4 inset-x-0 mx-auto">
      <img class="h-52 mx-auto mb-12 animate-bounce" :src="require('@/assets/rubyv.png')" alt="Ruby">
      <h1 class="text-center font-bold text-6xl text-primary italic">Watches!</h1>
      <p class="italic text-lightgrey text-lg font-medium text-center mt-4">Under construction!</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "AboutView",

  components: {
    Navbar
  }
}


</script>

<style scoped>

</style>