<template >
  <div  id="home" class="home">
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1 class="title is-4">{{ $t("landingPage.title") }}</h1>
    <h2 class="sous-titre subtitle is-5">{{$t("landingPage.sous-titre")}}</h2>
    <p class="description">{{$t("landingPage.description")}}</p>
    <router-link to="/pieges">
      <i id="next" class="fas fa-arrow-circle-down"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  methods: {
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: #eee;
  min-height: 101%; /* Doit être >100% pour que la fonction de scroll fonctionne */
  text-align: center;
}

h1 {
  line-height: 9vw;
  color: #555;
}

p {
  padding: 0 12vw;
}

.sous-titre {
  margin: 0 0 3vh 0;
  color: rgb(38, 148, 38);
}

.description {
  text-align: left;
  font-size: 17px;
  line-height: 17pt;
}

.logo {
  height: 15vh;
  margin: 8vh 0 5vh 0;
}

i {
  margin-top: 5vh;
  font-size: 8vh;
  color: rgb(38, 148, 38);
  margin-bottom: 100px;
}
/*-----PC-----*/
@media screen and (min-width: 769px) {
h1 {
  font-size: 5vw;
  line-height: 9vw;}

p {
  font-family: "Roboto", sans-serif;
  font-size: 2.0vw;
  padding: 0 12vw;
}
.sous-titre {
  font-size: 4vw;
  margin: 0 0 3vh 0;
}
}
</style>
