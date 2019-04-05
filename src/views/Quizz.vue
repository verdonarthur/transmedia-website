<template>
  <div class="quizz">
    <h1>{{ $t("quizzPage.title") }}</h1>
    <p>{{$t("quizzPage.description")}}</p>

    <button class="button is-primary is-medium" @click="openPopUp('chimney')">Ouvrir Pop Up</button>

    <b-modal :active.sync="isPopupActive" has-modal-card>
      <Popup :popupRef=popupRef :popupImages=popupImages></Popup>
    </b-modal>

    <router-link to="/register">{{ $t("quizzPage.link-to-register")}}</router-link>
  </div>
</template>

<script>
import Popup from '../components/Popup'
export default {
  name: 'Quizz',
  props: {},
  components: {
    Popup
  },
  data () {
    return {
      isPopupActive: false,
      popupRef: String,
      popupImages: '../assets/logo-birdlife.png'
    }
  },
  methods: {
    openPopUp (ref) {
      this.isPopupActive = true
      this.popupRef = ref
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quizz {
  background-color: green;
  height: 100%;
}
</style>
