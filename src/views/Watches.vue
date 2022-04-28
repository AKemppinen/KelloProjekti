<template>
  <div class="min-h-screen">

    <!-- inspect card -->
    <div v-if="display.inspectCard">
      <InspectCard :card="card" @closeCard="closeInspectCard" @cardify="cardify" @deCardify="deCardify" ></InspectCard>
    </div>
    <!-- /inspect card -->

    <div v-if="display.body" class="min-h-screen" :class="{'blur-sm' : display.inspectCard}">
      <Navbar v-if="display.navbar" ></Navbar>

      <div class="lg:flex h-max">

        <!-- Filters -->
        <aside class="shrink-0">

          <Filter v-if="display.filter" @onFilterClose="closeFilters" ></Filter>

          <!-- open filters on mobile -->
          <div v-if="!display.filter" class="lg:invisible">
            <button class="fixed rounded-full px-8 py-4 text-default bottom-4 left-4 bg-primary" @click="openFilters">Filters</button>
          </div>
          <!-- /open filters on mobile -->

        </aside>
        <!-- /Filters -->

        <!-- watch grid -->
        <article v-if="display.watchGrid" class="grid w-full place-items-center sm:p-4 sm:gap-4 grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 5xl:grid-cols-4 7xl:grid-cols-5 8xl:grid-cols-6">
          <!-- watch card -->
          <watch-card
              v-for="(watch, key) in info" :key="key"
              :watch-id="watch.id"
              :watch-header-stats="{ Name: watch.name, Family: watch.family, Price: watch.msrp }"
              :watch-stats="{ Case: watch.material, Crystal: watch.glass, Diameter: watch.diameter}"
              :watch-footer-stats="{ Brand: watch.brand, Reference: watch.reference }"
              @cardClick="cardClick"
          ></watch-card>
          <!-- /watch card -->
        </article>
        <!-- //watch grid -->

      </div>

    </div>
  </div>
</template>

<script>
import WatchCard from "@/components/Card";
import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";
import InspectCard from "@/components/InspectCard";

export default {
  name: "WatchesView",

  props: {
    info: Array
  },

  data() {
    return {
      display: {
        navbar: true,
        body: true,
        watchGrid: true,
        filter: true,
        inspectCard: false,
      },
      card: {},
    }
  },

  components: {
    WatchCard,
    Navbar,
    Filter,
    InspectCard,
  },

  methods: {

    onResize() {
      if(window.innerWidth < 1024){
        this.closeFilters();
      } else {
        this.display.filter = true;
        this.display.watchGrid = true;
      }
    },

    closeFilters(){
      this.display.filter = false;
      this.display.watchGrid = true;
    },

    openFilters(){
      this.display.filter = true;
      this.display.watchGrid = false;
    },

    cardify(){
      this.display.body = true;
    },

    deCardify(){
      this.display.body = false;
    },

    openInspectCard(){
      this.display.inspectCard = true;
    },

    closeInspectCard(){
      this.display.inspectCard = false;
      if(!this.display.body){
        this.display.body = true
      }
    },

    cardClick(id){
     this.info.forEach(e => {
       if(e.id === id){
         this.card = e
       }
     })

      window.scrollTo(0,0);
      this.openInspectCard();
    }

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

<style scoped>
</style>