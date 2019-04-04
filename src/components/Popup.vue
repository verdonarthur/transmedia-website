<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">{{$t("popupPages." + popupRef +"."+ popupPage +".title")}}</p>
      <p class="modal-card-subtitle">{{$t("popupPages." + popupRef +"."+ popupPage +".subTitle")}}</p>
    </header>
    <section class="modal-card-body">{{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</section>
    <template v-if="popupPage === 'problem'">
      <footer class="modal-card-foot">
        <button @click="loadSolution" class="button is-primary">{{$t("popupPages.learnMore")}}</button>
      </footer>
    </template>
  </div>
</template>
<script>
export default {
  name: "Popup",
  props: {
    popupRef: String,
    popupImages: String
  },
  data() {
    return {
      popupPage: "problem"
    };
  },
  methods: {
    // This method is called everytime the user click on the buttont that shows the solution to a trap<<
    loadSolution() {
      this.popupPage = "solution";
    }
  }
};
</script>
<style scoped>
</style>
