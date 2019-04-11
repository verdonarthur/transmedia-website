<template>
  <div class="quizz">
  <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1>{{ $t("quizzPage.title") }}</h1>
    <p class="sous-titre">{{$t("quizzPage.sous-titre")}}</p>
    <p class="description">{{$t("quizzPage.description")}}</p>
    <h2 class="">{{$t("quizzPage.description2")}}</h2>
    <div class="columns is-vcentered is-mobile">
      <div class="column ">
        <img src ="../assets/setBrochure.png">
       </div>
      <div class="column">
        <img src ="../assets/tickets.png">
      </div>
  <div class="column">
    <img src ="../assets/bonAchat.png">
  </div>
</div>
    <div class="columns is-mobile">
  <div class="column ">
    {{$t("quizzPage.prices.brochures")}}
  </div>
  <div class="column">
    {{$t("quizzPage.prices.ticket")}}
  </div>
  <div class="column">
    {{$t("quizzPage.prices.coupon")}}
  </div>
</div>
    <!-- <router-link to="/register">{{ $t("quizzPage.link-to-register")}}</router-link> -->
    <button class="button">{{$t("quizzPage.startButton")}}</button>
  </div>
</template>

<script>
export default {
  name: 'Quizz',
  props: {},
  components: {
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
  background-color: #eee;
  height:100%;
  padding-left:2.5%;
  padding-right:2.5%;
  text-align: center;
}

h1 {
  font-size: 7vw;
  line-height: 9vw;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #555;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 2.25vh;

}

.sous-titre {
  font-size: 7vw;
  margin: 0 0 3vh 0;
}

.description {
  text-align: left;
  color: #006eab;
}

.logo {
  height: 15vh;
  margin: 4vh 0 5vh 0;
}

h2{
  margin-top:4vh;
  font-weight: bold;
  font-size: 5vw
}

</style>
