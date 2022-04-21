<template>
  <div class="flex h-full subpixel-antialiased">
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

    <div class="w-full grid gap-y-10 py-10 leading-normal HD:px-10 FHD:px-14 QHD:px-5 UHD:px-28 Default:grid-cols-1 HD:grid-cols-2 FHD:grid-cols-3 QHD:grid-cols-4 UHD:grid-cols-5 UHD+:grid-cols-6">
      <div class="flex flex-nowrap card-width card-height mx-auto border-2 border-lightgrey rounded-md overflow-hidden shadow-md" v-for="item in info" :key="item.id">
        <div class="basis-2/5 bg-lightgrey">
          <img :src="require('@/assets/watchfaces/' + item.id + '/front.png')" :alt="item.reference">
        </div>
        <div class="flex flex-col basis-3/5 py-3 pl-6 pr-3">
          <div>
            <h2 class="text-lg uppercase subpixel-antialiased font-medium text-primary">{{item.name}}</h2>
            <hr class="border-lightgrey">
            <h2 class="text-md uppercase subpixel-antialiased font-medium text-highlight">{{item.family}}</h2>
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
    </div>
  </div>


</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      isMobile: true,
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
        }
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
      ]
    };
  },

  methods: {
    onResize() {
      if(window.innerWidth < 1300){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
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