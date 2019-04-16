<template>
  <div class="quizz">
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1>{{ $t("quizzPage.title") }}</h1>
    <h2 class="sous-titre">{{$t("quizzPage.sous-titre")}}</h2>
  <div class="prices">
    <p class="description">{{$t("quizzPage.description")}}</p>
    <h2 class>{{$t("quizzPage.description2")}}</h2>
    <div class="columns is-vcentered is-mobile">
      <div class="column">
        <img src="../assets/quizz/set-brochures.png">
      </div>
      <div class="column">
        <img src="../assets/quizz/lasauge.jpg">
      </div>
      <div class="column">
        <img src="../assets/quizz/bon_100CHF.png">
      </div>
    </div>
    <div class="columns is-mobile">
      <div class="column">{{$t("quizzPage.prices.brochures")}}</div>
      <div class="column">{{$t("quizzPage.prices.ticket")}}</div>
      <div class="column">{{$t("quizzPage.prices.coupon")}}</div>
    </div>
    </div>
    <router-link to="quizz/question/1">
    <button class="button is-success">{{$t("quizzPage.startButton")}}</button>
    </router-link>
    
  </div>
</template>

<script>
export default {
  name: 'Quizz',
  props: {},
  components: {},
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
.button{
  color:white;
  font-family: 'Fjalla One', sans-serif;
  border:none;
  margin-top:15px;
}

.quizz {
  background-color: #eee;
  height: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  text-align: center;
}

h1 {
  font-size: 6vw;
  line-height: 8vw;
  color: #555;
}

.description {
  font-family: "Roboto", sans-serif;
  font-size: 2.25vh;
  text-align: left;
  margin-bottom:7vw;
}

.sous-titre {
  font-size: 5vw;
}

.logo {
  height: 15vh;
  margin: 4vh 0 5vh 0;
}

h2 {
  color: rgb(38, 148, 38);
  margin: 0 0 4vw 0;
}

.prices
{
  padding:1vw 7vw 7vw 7vw;
}
.column
{
 padding:0 2vw 1vw 2vw;
}
</style>
