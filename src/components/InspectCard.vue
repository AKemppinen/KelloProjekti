<template>
  <div class="2xl:fixed z-10 top-0 w-screen h-fit lg:h-screen 2xl:py-10" id="inspectBackground" @click="closeCard">
    <div class="relative lg:flex 2xl:h-full w-full 2xl:w-3/4 2xl:border 2xl:rounded-2xl border-lightgrey 2xl:mx-auto bg-default">
      <button class="absolute z-20 top-8 right-8 text-default lg:text-highlight" @click="closeCard" id="closeButton">Close</button>
      <!-- image -->
      <figure class="bg-highlight relative w-screen lg:w-1/2 2xl:w-1/3 xl:shrink-0 2xl:rounded-l-xl">
        <img class="h-screen 2xl:h-full pb-32 pt-8 sm:pt-16 lg:pb-56 lg:pt-24 mx-auto object-contain xl:object-cover" :src="require('@/assets/watchfaces/' + card.id + '/' + getFace + '.png')" :alt="card.Reference">
        <figcaption class="text-lightgrey">

          <!-- Image caption header -->
          <div class="absolute top-8 inset-x-0 mx-auto text-center w-fit">
            <!-- Front-Back image selector buttons -->
            <table>
              <tr>
                <td class="border-r border-light-card-font w-16 cursor-pointer" :class="{'font-medium': faceFront}" @click="changeFaceToBack">Front</td>
                <td class="w-16 cursor-pointer transition-transform" :class="{'font-medium': !faceFront}" @click="changeFaceToFront" >Back</td>
              </tr>
            </table>
            <!-- /Front-Back image selector buttons -->
          </div>
          <!-- /Image caption header -->

          <!-- Image caption footer -->
          <div class="absolute bottom-8 lg:bottom-16 inset-x-0 mx-auto w-2/3 text-center">
            <h1 class="uppercase text-2xl font-medium">{{ card.name }}</h1>
            <hr class="border-primary my-2">
            <h4 class="text-xl font-medium">{{ card.reference }}</h4>
          </div>
          <!-- /Image caption footer -->

        </figcaption>
      </figure>
      <!-- /image -->

      <!-- description -->
      <div class="my-8 h-fit capitalize md:w-2/3 2xl:w-fit lg:w-fit lg:px-10 xl:px-16 mx-4 md:mx-auto 2xl:my-6 2xl:mx-4">

        <!-- Category -->
        <table class="text-left mb-4 w-full" v-for="(values, key) in descriptionCard" :key="key">
          <fieldset class="border px-6 xl:px-10 pt-3 pb-5 border-lightgrey rounded-lg">

            <legend class="pl-2 text-primary font-medium">{{ key }}</legend> <!-- Name -->

            <tr v-for="(value, name) in values" :key="name">
              <th class="pl-2 pr-6 w-40 border-r border-lightgrey">{{ name }}</th>

              <td v-if="name !== 'Functions' " class="px-6 xl:px-10"> <!-- If is not functions -->
                {{ value }}
              </td>

              <td v-else class="px-6 xl:px-10"> <!-- Generates a list for functions -->
                <ul>
                  <li v-for="funcs in value" :key="funcs">{{ funcs }}</li>
                </ul>
              </td>

            </tr>
          </fieldset>
        </table>
        <!-- /Category -->

      </div>
      <!-- /description -->

    </div>
  </div>
</template>

<script>
export default {
  name: "InspectCardComponent",

  props: {
    card: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isCard: true,
      faceFront: true,
      cardifySize: 1536,
    }
  },

  computed : {
    descriptionCard(){
      return {
        Body: {
          "Case": this.card.material,
          "Diameter": this.card.diameter + " MM",
          "Lug Width": this.card.lugwidth + " MM",
          "Water Resistance": this.card.wr + " M",
          "Strap": this.card.strap,
          "Back Type": this.card.back
        },
        Dial: {
          "Crystal": this.card.glass,
          "Color": this.card.dialcolor
        },
        Watch: {
          "Type": this.card.type,
          "Production Year": this.card.year
        },
        Additional: {
          "Functions": this.card.functions.split(',')
        }
      }
    },

    getFace(){
      if(this.faceFront){
        return "front"
      } else {
        return "back"
      }
    }
  },

  methods: {
    onResize() {
      if(window.innerWidth > this.cardifySize && !this.isCard){
        this.$emit('cardify');
        this.isCard = true;
      } else if(window.innerWidth < this.cardifySize && this.isCard){
        this.$emit('deCardify')
        this.isCard = false;
      }
    },

    changeFaceToBack(){
      this.faceFront = true
    },

    changeFaceToFront(){
      this.faceFront = false
    },

    closeCard(){
      let eti = event.target.id;
      if(eti === 'inspectBackground' || eti === 'closeButton'){
        this.$emit('closeCard')
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

</style>