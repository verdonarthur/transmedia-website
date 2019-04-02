<template>
  <div class="traps">
      <h1> {{ $t("trapsPage.title") }}</h1>
      <p> {{$t("trapsPage.description")}}</p>
      <router-link to="/quizz">{{ $t("trapsPage.link-to-quizz")}}</router-link> 
  </div>
</template>
<script>
export default {
  name: 'Traps',
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.traps{
  background-color:yellow;
  height: 100%;
}
</style>
