<template>
  <div class="w-full relative leading-loose">
    <div class="my-28 w-4/5 mx-auto">
      <div class="flex w-full justify-around w-2/3 mx-auto">
        <img class="h-[67px] mt-[5px] object-cover block" :src="require('@/assets/rubyv.png')" alt="Watch">
        <h1 class="text-7xl mb-10 subpixel-antialiased tracking-wide text-center font-bold uppercase">About Us</h1>
        <img class="h-[67px] mt-[5px] object-cover block" :src="require('@/assets/rubyv.png')" alt="Watch">
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
    <transition name="slide-fade">
      <img class="w-full object-cover h-[600px]" v-on:load="onLoaded" :src="require('@/assets/watch.jpg')" alt="Movement">
    </transition>
    <div class="my-28 w-4/5 mx-auto">
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
    <img class="w-full object-cover h-[500px]" :src="require('@/assets/movement.jpg')" alt="Watch">
    <div class="my-28 w-4/5 mx-auto">
      <h4 class="text-4xl mb-10 subpixel-antialiased tracking-wide text-center font-bold uppercase">Our Colors</h4>

      <p class="mb-28 mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat neque sem, nec venenatis ante volutpat vel.
        Aliquam commodo condimentum nibh, nec tincidunt sem viverra eu. Nullam mollis,
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
        erat quis posuere vulputate, nisl tortor hendrerit est, in hendrerit dui tellus at justo. Nam ultricies in ipsum in elementum.
        Sed eu lorem et diam facilisis pharetra. Morbi nisi leo, mollis nec eros non, condimentum interdum mi.
      </p>

      <div class="flex w-fit gap-x-12 mx-auto leading-normal">
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
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>