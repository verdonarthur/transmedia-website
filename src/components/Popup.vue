<template>
  <div class="modal-card" style="width: 100%">
   <header class="modal-card-head">
      <h1 class="modal-card-title">{{$t("popupPages." + popupRef +"."+ popupPage +".title")}}</h1>
    </header>
    <section class="modal-card-body">

      <h2 class="">{{$t("popupPages." + popupRef +"."+ popupPage +".subTitle")}}</h2>
      <component v-bind:is="popupRef" :popupRef="popupRef" :popupPage="popupPage">
      </component>
    </section>
    <template v-if="popupPage === 'problem'">
      <footer class="modal-card-foot">
        <button @click="loadSolution" class="button is-medium">{{$t("popupPages.learnMore")}}</button>
      </footer>
    </template>
  </div>
</template>
<script>
import Chimney from '../components/Chimney'
import Fence from '../components/Fence'
import HomeHoles from '../components/HomeHoles'
import LawnMower from '../components/LawnMower'
import Pool from '../components/Pool'
import Windows from '../components/Windows'
export default {
  name: 'Popup',
  components: {
    Chimney, Fence, HomeHoles, LawnMower, Pool, Windows
  },
  props: {
    popupRef: String
  },
  data () {
    return {
      popupPage: 'problem'
    }
  },
  methods: {
    // This method is called everytime the user clicks on the buttont that shows the solution to a trap<<
    loadSolution () {
      this.popupPage = 'solution'
    }
  }
}
</script>
<style>
.button{
  text-align:center;
  display:block;
  margin:auto;
  background-color:rgb(38, 148, 38);
  color:white;
}

.modal-card{

}
.modal-card p
{
  text-align: justify;
}
</style>
