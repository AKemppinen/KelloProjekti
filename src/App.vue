<template>
  <div id="app" class="w-full h-screen text-highlight">
    <div id="nav" class="z-10 w-full flex justify-center border-b-2 border-lightgrey sticky top-0 bg-default">
      <router-link class="SD:px-5 text-center w-1/3 SD:w-fit py-4 h-fit hover:text-primary subpixel-antialiased uppercase" v-for="(link, i) in navLinks"  :key="i" :to="link.href">{{link.name}}</router-link>
    </div>
    <router-view id="body"></router-view>
  </div>
</template>

<style>
@import "/dist/output.css";
</style>

<script>
export default {
  data() {
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
          href: "/about-page",
        }
      ]
    };
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight - 58;
      document.getElementById("body").style.height = this.windowHeight + "px";
    },

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
}

</script>




