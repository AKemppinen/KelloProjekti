<template>
  <div id="app" class="w-full text-highlight">
    <router-view :info="info" :comparison="compare"></router-view>
  </div>
</template>

<style>
@import "/dist/output.css";
</style>

<script>
export default {
  data() {
    return {
      compare: [
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
      ],
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
    }
  }
}

</script>




