<template  >
  <div  id="home" class="home">
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1>{{ $t("landingPage.title") }}</h1>
    <p class="sous-titre">{{$t("landingPage.sous-titre")}}</p>
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
    handleScroll () {
      if((window.scrollY + window.innerHeight )>= document.getElementById('home').offsetHeight)
      {
        window.scrollTo(0,0);
        this.$router.push('/pieges')}
        
    }
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
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
  font-size: 7vw;
  line-height: 9vw;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #555;
}

p {
  font-family: "Roboto", sans-serif;
  font-size: 3.25vw;
  padding: 0 12vw;
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
  margin: 8vh 0 5vh 0;
}

i {
  margin-top: 5vh;
  font-size: 8vh;
  color: #555;
}
</style>
