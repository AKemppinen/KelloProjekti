<template>
  <body class="text-highlight subpixel-antialiased">
  <!-- Kortin tarkastelu -->
    <div class="z-10 fixed h-full w-full overflow-y-auto" v-if="inspectCard" @click="closeFromBackground" id="inspectBackground">
      <div class="z-20 HD:mx-auto HD:my-14 HD:w-fit h-5/6 bg-default HD:rounded-2xl drop-shadow-xl HD:flex">

        <div class="relative pt-20 pb-56 h-screen HD:w-fit text-center bg-highlight HD:rounded-l-2xl shadow-inner">

          <table class="absolute top-7 text-lightgrey inset-x-0 mx-auto">
            <tr>
              <td class="border-r border-light-card-font w-16 cursor-pointer" :class="{'font-medium': faceIsFront}" @click="changeFaceToFront">Front</td>
              <td class="w-16 cursor-pointer transition-transform" :class="{'font-medium': !faceIsFront}" @click="changeFaceToBack">Back</td>
            </tr>
          </table>

          <img class="h-full block object-contain mx-auto" :src="require('@/assets/watchfaces/' + inspectId + '/' + inspectCardImage + '.png')" :alt="info[inspectId-1].reference">
          <div class="absolute tracking-wide py-7 bottom-7 w-full">
            <h2 class="pb-2 uppercase text-2xl font-medium text-default">{{ info[inspectId-1].name }}</h2>
            <hr class="border-primary w-1/2 mx-auto my-1">
            <p class="text-xl font-medium text-default">{{ info[inspectId-1].reference }}</p>
          </div>

        </div>

        <div class="capitalize rounded-2xl px-6 SD:px-12 HD:px-24 py-7 bg-default">
          <table v-for="(categories, i) in inspectStatCategories" :key="i" class="table-auto text-left mb-5 w-full">
            <fieldset class="border px-6 pt-3 pb-5 border-lightgrey rounded-lg">
              <legend class="px-2 text-primary font-medium">{{ categories.stats[0].legend }}</legend>
              <tr v-for="(stats, i) in categories.stats.slice(1)" :key="i">
                <th class="border-r w-44 border-lightgrey pl-2">{{ stats.name}}</th>
                <td v-if="stats.name !== 'functions'" class="pl-6 pr-2">{{ stats.text }}</td>
                <ul v-if="stats.name === 'functions'" class="pl-6 pr-2">
                  <li v-for="(func, i) in stats.text" :key="i"> {{ func }}</li>
                </ul>
              </tr>
            </fieldset>
          </table>
        </div>

        <button class="absolute px-2 right-6 top-7 text-lightgrey HD:text-highlight" @click="closeInspectCard">close</button>

      </div>
    </div>
    <!-- /Kortin tarkastelu -->

    <!-- Yleisnäkymä -->
    <div v-if="!isMobile || !inspectCard" class="Mobile:flex min-h-full" :class="{ 'blur-sm': inspectCard }">

      <!-- Filtterit -->
      <button v-if="isMobile && !visibleFilters" class="border rounded-md border-lightgrey m-2 p-2 hover:font-medium" @click="visibleFilters = true">Filters</button>

      <div v-if="visibleFilters || !isMobile" class="p-4 w-screen Mobile:w-60 Mobile:border-r border-lightgrey">

        <div class="flex">
          <h2 class="font-medium text-xl text-primary my-2">Filters</h2>
          <button v-if="isMobile" class="ml-auto" @click="visibleFilters = false">Close</button>
        </div>

        <div class="w-full">
          <fieldset class="w-full px-4 py-2 my-2 border border-lightgrey" v-for="(filter, i) in filters" :key="i">
            <legend class="font-medium">{{filter.legend}}</legend>
            <div v-for="(option, i) in filter.options" :key="i">
              <input type="checkbox" :id="'option' + i" :name="option.name">
              <label class="ml-2 capitalize" :for="'option' + i">{{option.name}} ({{option.amount}})</label>
            </div>
          </fieldset>
        </div>
      </div>
      <!-- /Filtterit -->

      <!-- Kortti grid -->
      <div v-if="!visibleFilters || !isMobile" class="w-full h-fit grid Default:gap-y-5 HD:gap-y-10 Default:pb-5 Mobile:py-10 leading-normal HD:px-10 FHD:px-14 QHD:px-5 UHD:px-28 Default:grid-cols-1 HD:grid-cols-2 FHD:grid-cols-3 QHD:grid-cols-4 UHD:grid-cols-5 UHD+:grid-cols-6">
        <!-- Kortti -->
        <div class="flex cursor-pointer flex-nowrap card-width card-height mx-auto border-2 border-lightgrey rounded-md overflow-hidden shadow-md" v-for="item in info" :key="item.id" :id="'card'+item.id" @click="cardClick(item.id)">
          <div class="basis-2/5 bg-lightgrey flex items-center">
            <img :src="require('@/assets/watchfaces/' + item.id + '/front.png')" :alt="item.reference">
          </div>
          <div class="flex flex-col basis-3/5 py-3 pl-6 pr-4">
            <div>
              <h2 class="text-lg uppercase font-medium text-primary pb-0.5">{{item.name}}</h2>
              <hr class="border-lightgrey">
              <div class="flex pt-0.5">
                <h2 class="uppercase font-medium">{{item.family}}</h2>
                <h2 class="uppercase font-medium text-highlight ml-auto w-fit"> ~ {{ item.msrp }} €</h2>
              </div>

            </div>

            <div class="mb-4 mt-auto text-light-card-font capitalize">
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
              <img class="object-contain h-5 SD:h-8 basis-1/5" :src="require('@/assets/brands/' + item.brand + '.png')" :alt="item.brand">
            </div>

          </div>
        </div>
        <!-- /Kortti -->
      </div>
      <!-- /Kortti grid -->
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
      visibleFilters: false,
      inspectId: 1,
      inspectCardImage: 'front',
      faceIsFront: true,
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
          wr: 150,
          strap: 'stainless steel bracelet',
          back: 'closed',
          type: 'dress',
          year: '2021',
          msrp: '6500',
          functions: 'hours, minutes, seconds, date, chronometer'
        },
        {
          id: 2,
          brand: 'Omega',
          family: 'Speedmaster',
          name: 'moonwatch professional',
          reference: '310.30.42.50.01.002',
          glass: 'sapphire',
          dialcolor: 'black',
          diameter: '42',
          lugwidth: '20',
          material: 'stainless steel',
          wr: 50,
          strap: 'stainless steel bracelet',
          back: 'open',
          type: 'chronograph',
          year: '2021',
          msrp: '7800',
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
          name: 'Seamaster Diver 300M Master',
          reference: '210.30.42.20.04.001',
          glass: 'sapphire',
          dialcolor: 'white',
          diameter: '42',
          lugwidth: '20',
          material: 'ceramic, stainless steel',
          wr: 300,
          strap: 'stainless steel bracelet',
          back: 'open',
          type: 'diver',
          year: '2019',
          msrp: '5800',
          functions: 'hours, minutes, seconds, date, chronometer'
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
          wr: 30,
          strap: 'leather strap',
          back: 'double dial',
          type: 'dress',
          year: '2018',
          msrp: '9200',
          functions: 'recto: hours, minutes, seconds. verso: second time-zone, 24-hour display'
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
          strap: 'rubber and alligator leather strap',
          back: 'closed',
          type: 'sport',
          year: '2014',
          msrp: '22700',
          functions: 'hours, minutes, small seconds, date, chronograph, column wheel'
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
          strap: 'crocodile leather strap',
          back: 'open',
          type: 'chronograph',
          year: '2017',
          msrp: '480000',
          functions: 'hours, minutes, small seconds, chronograph, column wheel, rattrapante, flyback'
        },
      ],
      filters: [
        {
          legend: 'Case',
          options: [
            {
              name: 'stainless steel',
              amount: 4,
              active: false,
            },
            {
              name: 'white gold',
              amount: 1,
              active: false,
            },
            {
              name: 'ceramic',
              amount: 1,
              active: false,
            },
            {
              name: 'titanium',
              amount: 1,
              active: false,
            },
            {
              name: 'resin',
              amount: 1,
              active: false,
            },
            {
              name: 'platinum',
              amount: 1,
              active: false,
            }
          ]
        },
        {
          legend: 'Diameter',
          options: [
            {
              name: '28,3 MM',
              amount: 1,
              active: false,
            },
            {
              name: '41 MM',
              amount: 2,
              active: false,
            },
            {
              name: '42 MM',
              amount: 3,
              active: false,
            },
            {
              name: '45 MM',
              amount: 1,
              active: false,
            }
          ]
        },
        {
          legend: 'Crystal',
          options: [
            {
              name: 'Sapphire',
              amount: 7,
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
      this.isMobile = window.innerWidth < 1310;

    },

    cardClick(id){
      this.inspectId = id;

      this.inspectStatCategories = [
        {
          stats: [
            {
              legend: 'body',
            },
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
              legend: 'dial',
            },
            {
              name: 'crystal',
              text: this.info[this.inspectId-1].glass,
            },
            {
              name: 'dial-color',
              text: this.info[this.inspectId-1].dialcolor,
            },
            {
              name: 'diameter',
              text: this.info[this.inspectId-1].diameter,
            }

          ]
        },
        {
          stats: [
            {
              legend: 'watch',
            },
            {
              name: 'type',
              text: this.info[this.inspectId-1].type,
            },
            {
              name: 'year',
              text: this.info[this.inspectId-1].year,
            },
          ]
        },
        {
          stats: [
            {
              legend: 'additional',
            },
            {
              name: 'functions',
              text: this.info[this.inspectId-1].functions,
            },
          ]
        }
      ]

      this.inspectCard = true;
    },

    changeFaceToBack(){
      this.inspectCardImage = 'back';
      this.faceIsFront = false;
    },

    changeFaceToFront(){
      this.inspectCardImage = 'front';
      this.faceIsFront = true;
    },

    closeFromBackground(event){
      if(event.target.id === 'inspectBackground'){
        this.closeInspectCard();
      }
    },

    closeInspectCard(){
      this.inspectCard = false;
      this.changeFaceToFront();
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      this.onResize();

      this.info.forEach(e => {
        e.functions = e.functions.split(',');
      })
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style scoped>

@media only screen and (min-width: 480px) {
  .card-width {
    width: 31rem;
  }
}

@media only screen and (max-width: 480px) {
  .card-width {
    width: 100%;
  }
}

  .card-height {
    height: 19rem;
  }
</style>