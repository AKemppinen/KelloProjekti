<template>
  <div id="app" class="w-full text-highlight">
    <router-view v-slot="{ Component }"
                 :info="computedInfo"
                 :comparison="compare"
                 @addToCompare="addToCompare"
                 @deleteComparison="deleteCompare"
    >
      <transition name="change">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
@import "/dist/output.css";
</style>

<script>
export default {
  data() {
    return {
      maxCompareLength: 3,
      compare: [],
      compareIds: [],
      info: [
        {
          id: 1,
          name: 'aqua terra 150M "Beijing 2022"',
          family: 'Aqua Terra',
          brand: 'Omega',
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
          name: 'moonwatch professional',
          family: 'Speedmaster',
          brand: 'Omega',
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
          name: 'moonwatch professional',
          family: 'Speedmaster',
          brand: 'Omega',
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
          name: 'Seamaster Diver 300M Master',
          family: 'Seamaster',
          brand: 'Omega',
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
          name: 'Reverso Classic Large Duoface Small Seconds',
          family: 'Reverso',
          brand: 'Jaeger-LeCoultre',
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
          name: 'Spirit of Big Bang Titanium',
          family: 'Spirit of Big Bang',
          brand: 'Hublot',
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
          name: 'Tourbograph "Pour le Mérite"',
          family: 'Tourbillon',
          brand: 'A. Lange & Söhne',
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
    }
  },

  computed: {
    computedInfo() {
      try {
        this.info.forEach(e => {
          if(e.id){
            e.functions = e.functions.split(',');
          }
        })
        return this.info
      } catch (e) {
        console.log("Known type error handled...")
        return null
      }
    }
  },

  methods: {
    addToCompare(id){
      if(this.compare.length < this.maxCompareLength){
        try {
          this.info.forEach(e => {
            if(e.id === id && !this.compareIds.includes(id)){
              this.compareIds.push(id);
              this.compare.push(e)
            }
          })
        } catch (e) {
          console.log(e)
        }
      }
    },

    deleteCompare(id){
      try {
        if(this.compareIds.includes(id)){
          this.compare.forEach((e, index) => {
            if(e.id === id){
              this.compare.splice(index, 1);
              this.compareIds.splice(index, 1)
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

}

</script>




