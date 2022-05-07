<template>
  <!-- navbar -->
  <div id="nav" class="z-10 w-screen flex justify-center border-b-2 border-lightgrey sticky top-0 bg-default">
    <!-- Router-link contains the path for router -->
    <router-link class="sm:px-5 text-center w-1/3 sm:w-fit py-3 sm:py-4 h-fit hover:text-primary subpixel-antialiased uppercase" v-for="(link, i) in navLinks"  :key="i" :to="link.href">
      {{link.name}}
    </router-link>
    <!-- /Router-link contains the path for router -->
  </div>
  <!-- /navbar -->
</template>

<script>
export default {
  name: "NavbarComponent",

  data() {
    //Navbar items
    return {
      windowHeight: 0,
      navLinks: [
        {
          name: "Watches",
          href: "/",
        },
        {
          name: "Comparison",
          href: "/comparison",
        },
        {
          name: "About Us",
          href: "/about",
        }
      ]
    };
  },
}
</script>

<style scoped>

</style>