<template>
  <div class="register">
      <h1> {{ $t("registerPage.title") }}</h1>
      <p> {{$t("registerPage.description")}}</p>
      
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  background-color:hotpink;
  height: 100%;
}
</style>
