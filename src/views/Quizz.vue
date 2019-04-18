<template>
  <div class="section quizz">
    <div class="linkToHome">
      <router-link to="/pieges">
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1 class="title is-4">{{ $t("quizzPage.title") }}</h1>
    <h2 class="sous-titre subtitle is-4">{{$t("quizzPage.sous-titre")}}</h2>
    <div class="prices ">
      <p class="description">{{$t("quizzPage.description")}}</p>
      <h2 class="subtitle is-5">{{$t("quizzPage.description2")}}</h2>
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
        <div class="column clnPrices">{{$t("quizzPage.prices.brochures")}}</div>
        <div class="column clnPrices">{{$t("quizzPage.prices.ticket")}}</div>
        <div class="column clnPrices">{{$t("quizzPage.prices.coupon")}}</div>
      </div>
    </div>
    <router-link
      to="quizz/question/1"
      class="button cstButton is-success"
    >{{$t("quizzPage.startButton")}}</router-link>
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
.linkToHome {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 25px;
  color: #555;
}
.linkToHome i {
  color: rgba(110, 110, 110, 0.4);
}
.cstButton {
  margin-top:5%;
  width: 150px;
  font-family: "Fjalla One", sans-serif;
}

.quizz {
  background-color: #eee;
  padding-left: 2.5%;
  padding-right: 2.5%;
  padding-bottom: 4%;
  text-align: center;
  min-height: 100vh;
}

.title {
  color: #555;
}

.description {
  font-size: 2.25vh;
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  height: 15vh;
  margin: 4vh 0 5vh 0;
}

h2 {
  color: rgb(38, 148, 38);
  margin: 0 0 4vw 0;
}

.prices {
  padding: 1vw 7vw 7vw 7vw;
}
.column {
  padding: 0 2vw 5px 2vw;
}
.clnPrices {
  font-size: 0.7em;
  font-weight: bold;
}

/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {
  .prices {
    padding: 1vw 7vw 3vw 7vw;
    margin: 0 100px;
  }

  .clnPrices {
    font-size: 1em;
  }
}
</style>
