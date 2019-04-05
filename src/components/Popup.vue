<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">{{$t("popupPages." + popupRef +"."+ popupPage +".title")}}</p>
      <p class="modal-card-subtitle">{{$t("popupPages." + popupRef +"."+ popupPage +".subTitle")}}</p>
    </header>
    <section class="modal-card-body">
      <component v-bind:is="popupRef" :popupRef="popupRef" :popupPage="popupPage">
      </component>
    </section>
    <template v-if="popupPage === 'problem'">
      <footer class="modal-card-foot">
        <button @click="loadSolution" class="button is-primary">{{$t("popupPages.learnMore")}}</button>
      </footer>
    </template>
  </div>
</template>
<script>
import Chimney from '../components/Chimney'
export default {
  name: 'Popup',
  components: {
    Chimney
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
<style scoped>
</style>
