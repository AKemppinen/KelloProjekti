<template>
  <div id="app" class="Default:w-max SD:w-full">
    <div id="nav" class="z-10 w-full flex justify-center border-b-2 border-lightgrey sticky top-0 bg-default">
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




