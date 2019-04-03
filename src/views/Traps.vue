<template>
  <div class="traps">
    <h1>{{ $t("trapsPage.title") }}</h1>
    <p class="cliquez">{{$t("trapsPage.description")}}</p>
    <div class="cheminee_bloc">
      <img src="../assets/website_cheminee.png" alt="cheminee cliquable">
    </div>
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
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  height:560vw;
}


/* PC VERSION ------------------------------------------------------------------------------------------- */
@media screen and (min-width: 769px) {
  .traps {

    background-position: top right;
    background-size: 45%;
  }
}
/* ----------------------------------------------------------------------------------------------------------*/

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
.cheminee_bloc {
  width: 100%;
  position: absolute;
  text-align: right;
  top: 74vmin;
}
.cheminee_bloc img {
  /* margin-left:45%;
margin-top: 32%; */
  width: 21%;
  margin-right: 14%;
  /*margin-right:20px;*/
  animation-name: test;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes test {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.bottom {
  display:none;
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
