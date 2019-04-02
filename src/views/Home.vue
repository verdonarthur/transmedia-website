<template>
  <div class="home">
      <h1> {{ $t("landingPage.title") }}</h1>
      <p> {{$t("landingPage.description")}}</p>
      <router-link to="/pieges">{{ $t("landingPage.link-to-traps")}}</router-link> 
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  background-color:cyan;
  height: 100%;
}
</style>
