<template>
  <div class="home">
    <img src="../assets/logo-birdlife.png" alt="BirdLife logo" class="logo">
    <h1>{{ $t("landingPage.title") }}</h1>

    <p class="sous-titre">{{$t("landingPage.description")}}</p>
    <router-link to="/pieges">{{ $t("landingPage.link-to-traps")}}</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: #eee;
  height: 100%;
  text-align: center;
}

h1 {
  font-size: 2.3em;
  line-height: 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #555;
  padding: 50px 50px 0px 50px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}

.sous-titre
{
font-size: 1.8em;

}
.logo {
  width: 40%;
  margin: 30px;
}
</style>
