<template>
  <div class="min-h-screen">

    <div v-if="display.body" class="min-h-screen z-0" :class="{'blur-sm' : display.inspectCard}">
      <Navbar v-if="display.navbar" ></Navbar>

      <div class="lg:flex h-full">

        <!-- Filters -->
        <aside class="md:shrink-0">

          <transition name="slide-fade">
            <Filter v-if="display.filter" @onFilterClose="closeFilters" ></Filter>
          </transition>

          <!-- open filters on mobile -->
          <div v-if="!display.filter" class="lg:invisible">
            <button class="fixed rounded-full px-8 py-4 text-default bottom-2 right-2 bg-primary z-20" @click="openFilters">
              <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
              </svg>
              <p class="font-semibold">Filters</p>
              </div>
            </button>
          </div>
          <!-- /open filters on mobile -->

        </aside>
        <!-- /Filters -->

        <!-- watch grid -->
        <transition name="slide-fade">
          <article v-if="display.watchGrid" class="grid w-full place-items-center 2xl:h-fit sm:p-4 sm:gap-4 grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 5xl:grid-cols-4 7xl:grid-cols-5 8xl:grid-cols-6 absolute top-[48px] md:top-0 md:relative">
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
        </transition>
        <!-- //watch grid -->

      </div>

    </div>

    <!-- inspect card -->
    <transition name="fade">
      <div v-if="display.inspectCard">
        <InspectCard
            :card="card"
            @closeCard="closeInspectCard"
            @cardify="cardify"
            @deCardify="deCardify"
            @addCompareCard="addToCompare"
        ></InspectCard>
      </div>
    </transition>
    <!-- /inspect card -->

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
        filter: false,
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
      if(window.innerWidth <= 1024){
        this.closeFilters();
      } else {
        this.display.filter = true;
        this.display.watchGrid = true;
      }
    },

    closeFilters(){
      this.display.filter = false;
      this.display.navbar = true;
      this.display.watchGrid = true;
    },

    openFilters(){
      this.display.filter = true;
      this.display.navbar = false;
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
    },

    addToCompare(id){
      this.$emit('addToCompare', id)
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(40px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>