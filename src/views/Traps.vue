<template>
  <div class="traps">
    <h1>{{ $t("trapsPage.title") }}</h1>
    <p class="cliquez">{{$t("trapsPage.description")}}</p>
    <div class="bottom">
      <div class="link_to_quizz">
        <p class="trapsFound">{{$t("trapsPage.allTrapsFound")}}</p>
        <p class="goQuizz">{{$t("trapsPage.goQuizz")}}</p>
        <router-link to="/quizz">
          <i class="fas fa-arrow-circle-down"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Traps",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.traps {
  background-color: #beeaf5;
  background-image: url("../assets/website_pieges.png");
  background-position: top;
  background-repeat: no-repeat;
  height: 2500px;
  text-align: center;
}
h1 {
  font-size: 2.5em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(38, 148, 38);
  padding: 50px 50px 0px 50px;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}
.cliquez {
  font-style: italic;
  color: #555;
  padding: 0px 50px;
  line-height: 1.3em;
}

.bottom {
  background-color: #61a52e;
  margin-top: 2150px;
  padding: 40px;
}

.link_to_quizz {
  background-color: #eee;
  padding: 25px;
}

.trapsFound {
  color: #006eab;
  font-size: 1.4em;
  line-height: 1.4em;
  font-weight: bold;
}

.goQuizz {
  font-style: italic;
  font-weight: bold;
  line-height: 1.2em;
  padding-top: 10px;
}
i {
  margin-top: 15px;
  font-size: 3em;
  color: #555;
}
</style>
