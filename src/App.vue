<template>
  <div id="app">
    <div id="nav" class="w-full flex justify-center border-b-2 border-lightgrey">
      <router-link class="px-5 py-4 h-fit hover:text-primary text-highlight subpixel-antialiased uppercase" v-for="(link, i) in navLinks"  :key="i" :to="link.href">{{link.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
@import "/dist/output.css";
</style>

<script>
export default {
  data() {
    return {
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
          href: "/about-page",
        }
      ]
    };
  },
}
</script>




