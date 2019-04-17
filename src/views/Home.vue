<template>
  <div class="home">
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1 class="title is-3">{{ $t("landingPage.title") }}</h1>
    <h2 class="sous-titre subtitle is-4">{{$t("landingPage.sous-titre")}}</h2>
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
      this.$router.push('/pieges')
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
  min-height: 823px; /* Doit être >100% pour que la fonction de scroll fonctionne */
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
  color:rgb(38, 148, 38);
}

.description {
  text-align: left;
  color: #006eab;
  font-size: 17px;
}

.logo {
  height: 13vh;
  margin: 8vh 0 5vh 0;
}

i {
  margin-top: 5vmax;
  margin-bottom:120px;
  font-size: 8vmax;
  color: #555;
}
</style>
