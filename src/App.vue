<template>
  <div id="app" class="w-full text-highlight subpixel-antialiased">

    <Navbar v-if="showNav" :compareIDs="compareIds" ></Navbar>

    <!-- Page loads here -->
    <router-view v-slot="{ Component }"
                 :info="computedInfo"
                 :comparison="compare"
                 :compareIDs="compareIds"
                 :error="error"
                 @addToCompare="addToCompare"
                 @deleteComparison="deleteCompare"
                 @hideNavbar="hideNavbar"
                 @showNavbar="showNavbar"
    >
      <transition name="change">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- /Page loads here -->
  </div>
</template>

<style scoped>
@import "/dist/output.css";

.change-enter-active {
  transition: opacity 0.3s ease;
}

.change-leave-active {
}

.change-leave-to {
  opacity: 50%;
}

.change-enter-from {
  opacity: 20%;
}

</style>

<script>
import Navbar from "@/components/Navbar";
import axios from "axios";

export default {
  data() {
    return {
      showNav: true,
      error:
          {
          type: null,
          message: null,
          },
      maxCompareLength: 3,
      compare: [],
      compareIds: [],
      info: [],
    }
  },

  components: {
    Navbar
  },

  computed: {
    // Modifies the info received from server by
    // splitting the function variable into an array by comma`s
    computedInfo() {
      try {
        this.info.forEach(e => {
          e.functions = e.functions.split(',');
        })
        return this.info
      } catch (e) {
        console.log("Known type error handled...")
        return this.info
      }
    },
  },

  methods: {
    // Gets the id of the watch in question and adds to compare and compareIDs.
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

    // Deletes the watch from compare and compareIDs by id.
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
    },

    // Hides navbar when requested to do so.
    hideNavbar(){
      this.showNav = false
    },

    // Shows navbar when requested to do so.
    showNavbar(){
      this.showNav = true
    }
  },

  // Gets the watch list from http://localhost:8080 node.js server.
  mounted () {
    try {
      axios
          .get('http://localhost:8080')
          .then(response => (this.info = response.data.rows))
    } catch (e) {
          this.error.type = "Connection error";
          this.error.message = e
    }
  }

}

</script>




