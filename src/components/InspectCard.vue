<template>
  <div class="2xl:fixed z-10 top-0 w-full h-fit lg:h-screen 2xl:p-4 3xl:py-8" id="inspectBackground" @click="closeCard">
    <div class="relative lg:flex 2xl:h-full w-full 2xl:w-3/4 2xl:rounded-2xl 2xl:mx-auto bg-default 2xl:border border-lightgrey">
      <button class="absolute z-20 top-8 right-8 text-default lg:text-highlight font-semibold" @click="closeCard" id="closeButton">Close</button>
      <!-- image -->
      <InspectCardImage
          class="2xl:rounded-l-xl"
          :cardImageData="{ id: card.id, Reference: card.reference, Name: card.name }"
      ></InspectCardImage>
      <!-- /image -->

      <!-- description -->
      <div class="mt-8 h-fit capitalize md:w-2/3 lg:w-fit lg:px-2 2xl:px-16 mx-4 md:mx-auto 2xl:my-6 2xl:mx-8 flex flex-col">

        <!-- Category -->
        <table class="text-left mb-4 w-full order-2 lg:order-1" v-for="(values, key) in descriptionCard" :key="key">
          <fieldset class="border px-6 xl:px-10 pt-3 pb-5 border-lightgrey rounded-lg">

            <legend class="pl-2 text-primary font-medium">{{ key }}</legend> <!-- Name -->

            <tr v-for="(value, name) in values" :key="name">
              <th class="pl-2 pr-6 w-40 border-r border-lightgrey">{{ name }}</th>

              <td v-if="name !== 'Functions' " class="px-6 xl:px-10"> <!-- If is not functions -->
                {{ value }}
              </td>

              <td v-else class="px-6 2xl:px-10"> <!-- Generates a list for functions -->
                <ul>
                  <li v-for="funcs in value" :key="funcs">{{ funcs }}</li>
                </ul>
              </td>

            </tr>
          </fieldset>
        </table>

        <button class="order-1 lg:order-2 w-full py-4 mb-4 rounded-lg border border-lightgrey uppercase text-primary text-default font-medium text-lg"
                :class="{'bg-lightgrey cursor-auto' : !freeForCompare, 'bg-primary hover:bg-primary-lighter' : freeForCompare }"
                @click="addCompareCard" >
          <p v-if="freeForCompare">Add to Compare <span v-if="compareIDs.length > 0">{{compareIDs.length}}/{{maxCompareLength}}</span> </p>
          <p v-else-if="compareIDs.length >= 3"> list is full ({{compareIDs.length}}/{{maxCompareLength}})</p>
          <p v-else class="text-reference-font">Added {{compareIDs.length}}/{{maxCompareLength}}</p>
        </button>
        <!-- /Category -->

      </div>
      <!-- /description -->

    </div>
  </div>
</template>

<script>
import InspectCardImage from "@/components/InspectCardImage";

export default {
  name: "InspectCardComponent",

  props: {
    compareIDs: Array,
    card: {
      type: Object,
      required: true
    }
  },

  components: {
    InspectCardImage,
  },

  data() {
    return {
      maxCompareLength: 3,
      addedToCompare: false,
      isCard: true,
      cardifySize: 1738,
    }
  },

  computed : {
    freeForCompare(){
      if(this.compareIDs.includes(this.card.id)){
        return false
      } else {
        return !(this.compareIDs.length >= 3 || this.addedToCompare);
      }
    },

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
          "Functions": this.card.functions
        }
      }
    },
  },

  methods: {
    onResize() {
      if(window.innerWidth >= this.cardifySize && !this.isCard){
        this.$emit('cardify');
        this.isCard = true;
      } else if(window.innerWidth < this.cardifySize && this.isCard){
        this.$emit('deCardify')
        this.isCard = false;
      }
    },

    closeCard(){
      let eti = event.target.id;
      if(eti === 'inspectBackground' || eti === 'closeButton'){
        this.$emit('closeCard')
      }
    },

    addCompareCard(){
      this.addedToCompare = true;
      this.$emit('addCompareCard', this.card.id)
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