<template>
  <div class="w-full relative leading-loose">
    <div class="my-10 sm:my-28 w-4/5 mx-auto">
      <div class="sm:flex w-full justify-around w-3/4 sm:w-2/3 mx-auto">
        <img class="h-[67px] sm:mt-[5px] object-cover block mx-auto md:my-auto" :src="require('@/assets/rubyv.png')" alt="Watch">
        <h1 class="text-7xl mt-10 sm:mb-10 subpixel-antialiased tracking-wide text-center font-bold uppercase">About Us</h1>
        <img class="h-0 sm:h-[67px] sm:mt-[5px] invisible sm:visible object-cover sm:block mx-auto md:my-auto" :src="require('@/assets/rubyv.png')" alt="Watch">
      </div>
      <p class="my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat neque sem, nec venenatis ante volutpat vel.
        Aliquam commodo condimentum nibh, nec tincidunt sem viverra eu. Nullam mollis,
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
      </p>
    </div>
    <img class="w-full object-cover h-[400px] md:h-[700px]" v-on:load="onLoaded" :src="require('@/assets/watch.jpg')" alt="Movement">
    <div class="my-10 sm:my-28 w-4/5 mx-auto">
      <p class="my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat neque sem, nec venenatis ante volutpat vel.
        Aliquam commodo condimentum nibh, nec tincidunt sem viverra eu. Nullam mollis,
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
      </p>
    </div>
    <img class="w-full object-cover h-[400px] md:h-[500px]" :src="require('@/assets/movement.jpg')" alt="Watch">
    <div class="mb-5 mt-10 sm:my-28 w-4/5 mx-auto">
      <h4 class="text-4xl mb-10 subpixel-antialiased tracking-wide text-center font-bold uppercase">Our Colors</h4>

      <p class="mb-5 sm:mb-28 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat neque sem, nec venenatis ante volutpat vel.
        Aliquam commodo condimentum nibh, nec tincidunt sem viverra eu. Nullam mollis,
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
      </p>

      <div class="flex flex-col sm:flex-row w-fit gap-y-5 sm:gap-x-12 mx-auto leading-normal">
        <div class="h-28 w-28 rounded-xl bg-primary py-5 px-5">
          <h5 class="uppercase text-center font-semibold text-default">Ruby red</h5>
          <p class="text-center text-default">#E0115F</p>
        </div>
        <div class="h-28 w-28 rounded-xl bg-highlight py-5">
          <h5 class="uppercase text-center font-semibold text-default">Very dark gray</h5>
          <p class="text-center text-default">#575757</p>
        </div>
        <div class="h-28 w-28 rounded-xl bg-lightgrey py-5">
          <h5 class="uppercase text-center font-semibold">Very light gray</h5>
          <p class="text-center">#EAEAEA</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-highlight h-[300px]">
    </div>
  </div>
</template>

<script>

export default {
  name: "AboutView",

  data(){
    return {
      loaded: false,
    }
  },

  methods: {
    onLoaded() {
      this.loaded = true
    }
  }
}


</script>

<style scoped>
</style>