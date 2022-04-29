<template>
  <!-- image -->
  <figure class="bg-highlight relative w-screen lg:w-1/2 2xl:w-2/5 4xl:w-1/3 xl:shrink-0 border border-highlight">
    <transition mode="out-in" name="faceChange">
      <img v-if="faceFront" class="h-screen 2xl:h-full pb-32 pt-8 sm:pt-16 lg:pt-10 lg:pb-36 2xl:pb-56 2xl:pt-24 mx-auto object-contain 2xl:object-cover" :src="require('@/assets/watchfaces/' + cardImageData.id + '/front.png')" :alt="cardImageData.Reference">
      <img v-else class="h-screen 2xl:h-full pb-32 pt-8 sm:pt-16 lg:pb-56 lg:pt-24 mx-auto object-contain 2xl:object-cover" :src="require('@/assets/watchfaces/' + cardImageData.id + '/back.png')" :alt="cardImageData.Reference">
    </transition>
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
      <div class="absolute lg:h-screen 2xl:h-fit lg:flex lg:flex-col lg:justify-end 2xl:flex-none bottom-8 lg:pb-6 2xl:pb-0 lg:top-0 2xl:top-auto 2xl:bottom-16 inset-x-0 mx-auto w-2/3 text-center">
        <h1 class="uppercase text-2xl font-medium">{{ cardImageData.Name }}</h1>
        <hr class="border-primary my-2">
        <h4 class="text-xl font-medium">{{ cardImageData.Reference }}</h4>
      </div>
      <!-- /Image caption footer -->

    </figcaption>
  </figure>
  <!-- /image -->
</template>

<script>
export default {
  name: "InspectCardImage",

  props: {
    cardImageData: {
      id: Number,
      Reference: String,
      Name: String,
    },
  },

  data() {
    return {
      faceFront: true,
    }
  },

  methods: {
    changeFaceToBack(){
      this.faceFront = true
    },

    changeFaceToFront(){
      this.faceFront = false
    },
  }
}
</script>

<style scoped>
.faceChange-enter-active {
  transition: all 0.2s ease-out;
}

.faceChange-leave-active {
  transition: all 0.2s ease-in;
}

.faceChange-leave-to {
  opacity: 30%;
  transform: translateY(-20px);
}

.faceChange-enter-from {
  opacity: 30%;
  transform: translateY(20px);
}
</style>