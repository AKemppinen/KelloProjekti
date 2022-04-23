<template>
  <body class="text-highlight subpixel-antialiased">
  <!-- Kortin tarkastelu -->
    <div class="z-10 fixed w-full h-full cursor-pointer" v-if="inspectCard" @click="closeFromBackground" id="inspectBackground">
      <div class="z-20 flex mx-auto my-14 w-4/5 h-5/6 bg-default rounded-2xl overscroll-contain drop-shadow-xl block">

        <div class="relative h-full pt-20 pb-40 w-fit text-center bg-highlight rounded-l-2xl shadow-inner">
          <img class="h-full block object-contain" :src="require('@/assets/watchfaces/' + inspectId + '/' + inspectCardImage + '.png')" :alt="info[inspectId-1].reference">
          <div class="absolute tracking-wide py-7 bottom-0 w-full">
            <h2 class="pb-2 uppercase text-2xl font-medium text-default">{{ info[inspectId-1].name }}</h2>
            <hr class="border-primary w-1/2 mx-auto my-1">
            <p class="text-xl font-medium text-default">{{ info[inspectId-1].reference }}</p>
          </div>
        </div>

        <div class="capitalize mx-28 my-6">
          <button @click="changeFace">Change face</button>
          <table v-for="(categories, i) in inspectStatCategories" :key="i" class="table-auto text-left mb-5">
            <fieldset class="border px-6 pt-3 pb-5 border-lightgrey rounded-lg">
              <legend>Test</legend>
              <tr v-for="(stats, i) in categories.stats" :key="i">
                <th class="border-r w-44 border-lightgrey">{{ stats.name}}</th>
                <td class="pl-4">{{ stats.text }}</td>
              </tr>
            </fieldset>
          </table>
        </div>

        <button class="absolute right-7 top-5" @click="closeInspectCard">close</button>
      </div>
    </div>
    <!-- /Kortin tarkastelu -->

    <!-- Yleisnäkymä -->
    <div class="flex h-full" :class="{ 'blur-sm': inspectCard}">
      <div class="w-60 p-4 border-r border-lightgrey" v-if="!isMobile">
        <h2 class="font-medium text-xl text-primary mb-2 ml-4">Filters</h2>
        <fieldset class="w-full px-4 py-2 border border-lightgrey" v-for="(filter, i) in filters" :key="i">
          <legend class="font-medium">{{filter.legend}}</legend>
          <div v-for="(option, i) in filter.options" :key="i">
            <input type="checkbox" :id="'option' + i" :name="option.name">
            <label class="ml-2 capitalize" :for="'option' + i">{{option.name}} ({{option.amount}})</label>
          </div>
        </fieldset>
      </div>

      <div class="w-full grid Default:gap-y-5 HD:gap-y-10 Default:py-5 HD:py-10 leading-normal HD:px-10 FHD:px-14 QHD:px-5 UHD:px-28 Default:grid-cols-1 HD:grid-cols-2 FHD:grid-cols-3 QHD:grid-cols-4 UHD:grid-cols-5 UHD+:grid-cols-6">
        <!-- Kortti -->
        <div class="flex flex-nowrap card-width card-height mx-auto border-2 border-lightgrey rounded-md overflow-hidden shadow-md" v-for="item in info" :key="item.id" :id="'card'+item.id" @click="cardClick(item.id)">
          <div class="basis-2/5 bg-lightgrey">
            <img :src="require('@/assets/watchfaces/' + item.id + '/front.png')" :alt="item.reference">
          </div>
          <div class="flex flex-col basis-3/5 py-3 pl-6 pr-3">
            <div>
              <h2 class="text-lg uppercase font-medium text-primary">{{item.name}}</h2>
              <hr class="border-lightgrey">
              <h2 class="text-md uppercase font-medium">{{item.family}}</h2>
            </div>

            <div class="mt-auto mb-4 text-light-card-font capitalize">
              <table class="table-auto text-left">
                <tr>
                  <th class="border-r">Case</th>
                  <td class="pl-4">{{ item.material }}</td>
                </tr>
                <tr>
                  <th class="border-r">Crystal</th>
                  <td class="pl-4">{{ item.glass }}</td>
                </tr>
                <tr>
                  <th class="border-r pr-4">Diameter</th>
                  <td class="pl-4">{{ item.diameter }} MM</td>
                </tr>
              </table>
            </div>

            <div class="flex">
              <p class="basis-4/5 h-fit my-auto text-reference-font">{{item.reference}}</p>
              <img class="block h-8 basis-1/5" :src="require('@/assets/brands/' + item.brand + '.png')" :alt="item.brand">
            </div>

          </div>
        </div>
        <!-- /Kortti -->
      </div>
    </div>
  <!-- /Yleisnäkymä -->
  </body>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      isMobile: true,
      inspectCard: false,
      inspectId: 1,
      inspectCardImage: 'front',
      info: [
        {
          id: 1,
          brand: 'Omega',
          family: 'Aqua Terra',
          name: 'aqua terra 150M "Beijing 2022"',
          reference: '522.10.41.21.04.001',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '41',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 2,
          brand: 'Omega',
          family: 'Speedmaster',
          name: 'moonwatch professional',
          reference: '310.30.42.50.01.002',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '42',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 3,
          brand: 'Omega',
          family: 'Speedmaster',
          name: 'moonwatch professional',
          reference: '310.63.42.50.02.001',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '42',
          lugwidth: '20',
          material: 'white gold',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 4,
          brand: 'Omega',
          family: 'Seamaster',
          name: 'Seamaster Diver 300M Master Co-Axial',
          reference: '210.30.42.20.04.001',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '42',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 5,
          brand: 'Jaeger-LeCoultre',
          family: 'Reverso',
          name: 'Reverso Classic Large Duoface Small Seconds',
          reference: '3848422',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '28,3',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 6,
          brand: 'Hublot',
          family: 'Spirit of Big Bang',
          name: 'Spirit of Big Bang Titanium',
          reference: '601.NX.0173.LR',
          glass: 'sapphire',
          dialcolor: 'skeleton',
          diameter: '45',
          lugwidth: '',
          material: 'titanium, resin',
          wr: 100,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
        {
          id: 7,
          brand: 'A. Lange & Söhne',
          family: 'Tourbillon',
          name: 'Tourbograph "Pour le Mérite"',
          reference: '702.025',
          glass: 'sapphire',
          dialcolor: 'silver',
          diameter: '41,2',
          lugwidth: '20',
          material: 'platinum',
          wr: 0,
          strap: 'alligator leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
        },
      ],
      visibleFilters: true,
      filters: [
        {
          legend: 'Crystal',
          options: [
            {
              name: 'Sapphire',
              amount: 5,
              active: false,
            },
            {
              name: 'Sapphire',
              amount: 5,
              active: false,
            },
            {
              name: 'Sapphire',
              amount: 5,
              active: false,
            }
          ]
        },
        {
          legend: 'Crystal',
          options: [
            {
              name: 'Sapphire Sapphire Sapphire Sapphire Sapphire Sapphire',
              amount: 5,
              active: false,
            }
          ]
        }
      ],
      inspectStatCategories: [],
    };
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1300;
    },

    cardClick(id){
      this.inspectId = id;

      this.inspectStatCategories = [
        {
          stats: [
            {
              name: 'case',
              text: this.info[this.inspectId-1].material,
            },
            {
              name: 'diamater',
              text: this.info[this.inspectId-1].diameter,
            },
            {
              name: 'lugwidth',
              text: this.info[this.inspectId-1].lugwidth,
            },
            {
              name: 'water resistance',
              text: this.info[this.inspectId-1].wr,
            },
            {
              name: 'strap',
              text: this.info[this.inspectId-1].strap,
            },
            {
              name: 'back-type',
              text: this.info[this.inspectId-1].back,
            },

          ]
        },
        {
          stats: [
            {
              name: 'crystal',
              text: this.info[this.inspectId-1].glass,
            },
            {
              name: 'dial-color',
              text: this.info[this.inspectId-1].dialcolor,
            },
            {
              name: 'dsdsds',
              text: this.info[this.inspectId-1].diameter,
            }

          ]
        }
      ]

      /*
      id: 4,
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '32900',
          functions: 'small seconds, hours, minutes, chronometer, chronograph, tachymeter'
       */

      this.inspectCard = true;
    },

    changeFace(){
      if(this.inspectCardImage === 'front'){
        this.inspectCardImage = 'back';
      } else if (this.inspectCardImage === 'back'){
        this.inspectCardImage = 'front';
      } else {
        this.inspectCardImage = 'front';
      }
    },

    closeFromBackground(event){
      if(event.target.id === 'inspectBackground'){
        this.closeInspectCard();
      }
    },

    closeInspectCard(){
      this.inspectCard = false;
      this.inspectCardImage = 'front';
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
  .card-width {
    width: 31rem;
  }

  .card-height {
    height: 19rem;
  }
</style>