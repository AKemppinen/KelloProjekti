<template>
  <div class="min-h-screen">

    <div v-if="display.body" class="min-h-screen" :class="{'blur-sm mt-[58px]' : display.inspectCard}">

      <div class="lg:flex h-full">

        <!-- Filters -->
        <aside class="md:shrink-0">

          <transition name="slide-fade">
            <Filter v-if="display.filter" :info="info" :filters="filters" @filterList="manipulateArray" @onFilterClose="closeFilters" ></Filter>
          </transition>

          <!-- open filters on mobile -->
          <div v-if="!display.filter" class="lg:invisible">
            <button class="fixed rounded-full px-8 py-4 text-default bottom-4 right-4 bg-primary z-20" @click="openFilters">
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
          <article v-if="display.watchGrid" class="grid w-full place-items-center sm:h-fit sm:p-4 sm:gap-4 grid-cols-1 xl:grid-cols-2 3xl:grid-cols-3 5xl:grid-cols-4 7xl:grid-cols-5 8xl:grid-cols-6 absolute top-[48px] md:top-0 md:relative">
            <!-- watch card -->
              <watch-card
                  v-for="(watch, key) in infoArray" :key="key"
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
            :compareIDs="compareIDs"
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
import Filter from "@/components/Filter";
import InspectCard from "@/components/InspectCard";

export default {
  name: "WatchesView",

  props: {
    info: Array,
    compareIDs: Array,
  },

  data() {
    return {
      filteredList: [],
      display: {
        body: true,
        watchGrid: true,
        filter: false,
        inspectCard: false,
      },
      card: {},
      filters: [
        {
          legend: 'Brand',
          searchTerm: 'brand',
          options: [
            {
              name: 'Omega',
              active: false,
            },
            {
              name: 'Jaeger-LeCoultre',
              active: false,
            },
            {
              name: 'Hublot',
              active: false,
            },
            {
              name: 'A. Lange & Söhne',
              active: false,
            },
            {
              name: 'Patek Philippe',
              active: false,
            },
            {
              name: 'IWC',
              active: false,
            },
            {
              name: 'Zenith',
              active: false,
            },
            {
              name: 'Rolex',
              active: false,
            },
            {
              name: 'Grand Seiko',
              active: false,
            },
            {
              name: 'Certina',
              active: false,
            },
            {
              name: 'Rado',
              active: false,
            },
            {
              name: 'Longines',
              active: false,
            },
            {
              name: 'TAG Heuer',
              active: false,
            },
            {
              name: 'Tissot',
              active: false,
            },
            {
              name: 'Laco',
              active: false,
            },
            {
              name: 'Casio',
              active: false,
            },
          ]
        },
        {
          legend: 'Dial-Color',
          searchTerm: 'dialcolor',
          options: [
            {
              name: 'silver',
              active: false,
            },
            {
              name: 'black',
              active: false,
            },
            {
              name: 'white',
              active: false,
            },
            {
              name: 'skeleton',
              active: false,
            },
            {
              name: 'blue',
              active: false,
            },
          ]
        },
        {
          legend: 'Back',
          searchTerm: 'back',
          options: [
            {
              name: 'open',
              active: false,
            },
            {
              name: 'closed',
              active: false,
            },
          ]
        },
        {
          legend: 'Diameter',
          searchTerm: 'diameter',
          options: [
            {
              name: '28.30',
              active: false,
            },
            {
              name: '39.00',
              active: false,
            },
            {
              name: '40.00',
              active: false,
            },
            {
              name: '40.20',
              active: false,
            },
            {
              name: '40.50',
              active: false,
            },
            {
              name: '41.00',
              active: false,
            },
            {
              name: '41.20',
              active: false,
            },
            {
              name: '42.00',
              active: false,
            },
            {
              name: '42.30',
              active: false,
            },
            {
              name: '43.00',
              active: false,
            },
            {
              name: '43.10',
              active: false,
            },
            {
              name: '44.20',
              active: false,
            },
            {
              name: '45.00',
              active: false,
            },
            {
              name: '55.00',
              active: false,
            }
          ]
        },
        {
          legend: 'Lug-width',
          searchTerm: 'lugwidth',
          options: [
            {
              name: '18',
              active: false,
            },
            {
              name: '19',
              active: false,
            },
            {
              name: '20',
              active: false,
            },
            {
              name: '21',
              active: false,
            },
            {
              name: '22',
              active: false,
            },
            {
              name: '23',
              active: false,
            },
          ]
        },
        {
          legend: 'Material',
          searchTerm: 'material',
          options: [
            {
              name: 'stainless steel',
              active: false,
            },
            {
              name: 'white gold',
              active: false,
            },
            {
              name: 'yellow gold',
              active: false,
            },
            {
              name: 'ceramic',
              active: false,
            },
            {
              name: 'titanium',
              active: false,
            },
            {
              name: 'resin',
              active: false,
            },
            {
              name: 'platinum',
              active: false,
            },
            {
              name: 'PVD Gold coating',
              active: false,
            },
            {
              name: 'ceramos',
              active: false,
            },
          ]
        },
        {
          legend: 'Water Resitance',
          searchTerm: 'wr',
          options: [
            {
              name: '30',
              active: false,
            },
            {
              name: '50',
              active: false,
            },
            {
              name: '100',
              active: false,
            },
            {
              name: '150',
              active: false,
            },
            {
              name: '200',
              active: false,
            },
            {
              name: '300',
              active: false,
            },
            {
              name: '600',
              active: false,
            },
          ]
        },
        {
          legend: 'Bracelet',
          searchTerm: 'strap',
          options: [
            {
              name: 'stainless steel bracelet',
              active: false,
            },
            {
              name: 'alligator leather strap',
              active: false,
            },
            {
              name: 'crocodile leather strap',
              active: false,
            },
            {
              name: 'rubber and alligator leather strap',
              active: false,
            },
            {
              name: 'leather strap',
              active: false,
            },
            {
              name: 'rubber strap',
              active: false,
            },
            {
              name: 'resin strap',
              active: false,
            },
            {
              name: 'oysterflex bracelet',
              active: false,
            },
          ]
        },
        {
          legend: 'Back',
          searchTerm: 'back',
          options: [
            {
              name: 'closed',
              active: false,
            },
            {
              name: 'open',
              active: false,
            }
          ]
        },
        {
          legend: 'Type',
          searchTerm: 'type',
          options: [
            {
              name: 'dress',
              active: false,
            },
            {
              name: 'chronograph',
              active: false,
            },
            {
              name: 'diver',
              active: false,
            },
            {
              name: 'sport',
              active: false,
            },
          ]
        },
      ],
    }
  },

  components: {
    WatchCard,
    Filter,
    InspectCard,
  },

  computed: {
    infoArray() {
      if(this.filteredList.length > 0){
        return this.filteredList
      } else {
        return this.info
      }
    }
  },

  methods: {

    onResize() {
      if(window.innerWidth <= 1024){
        this.closeFilters(true)
      } else {
        this.display.filter = true
        this.display.watchGrid = true
      }
    },

    manipulateArray(filteredArr){
      this.filteredList = filteredArr
    },

    closeFilters(ifResize){
      if(!ifResize) {
        this.showNavbar()
      }
      this.display.filter = false
      this.display.watchGrid = true
    },

    openFilters(){
      this.display.filter = true
      this.hideNavbar()
      this.display.watchGrid = false
    },

    hideNavbar(){
      this.$emit('hideNavbar')
    },

    showNavbar(){
      this.$emit('showNavbar')
    },

    cardify(){
      this.display.body = true
    },

    deCardify(){
      this.display.body = false
    },

    openInspectCard(){
      this.hideNavbar()
      this.display.inspectCard = true
    },

    closeInspectCard(){
      this.showNavbar()
      this.display.inspectCard = false
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

      window.scrollTo(0,0)
      this.openInspectCard()
    },

    addToCompare(id){
      this.$emit('addToCompare', id)
    }

  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
      this.onResize();
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
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