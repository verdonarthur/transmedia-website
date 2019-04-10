<template>
  <div class="traps">
    <section class="pieges">
      <div class="header">
    <h1>{{ $t("trapsPage.title") }}</h1>
    <p class="cliquez">{{$t("trapsPage.description")}}</p>
      </div>
    <div id="cheminee_bloc" class="cliquable">
      <img src="../assets/cheminee.png" alt="cheminee cliquable">
    </div>
    <div id="vitre_bloc" class="cliquable">
      <img src="../assets/fenetre.png" alt="vitre cliquable">
    </div>
    <div id="clotureBack_bloc" class="cliquable">
      <img src="../assets/clotureFond.png" alt="cloture du fond cliquable">
    </div>
    <div id="clotureFront_bloc" class="cliquable">
      <img src="../assets/cloturePremirPlan.png" alt="cloture du premier plan cliquable">
    </div>
    <div id="tondeuse_bloc" class="cliquable">
      <img src="../assets/tondeuse.png" alt="tondeuse cliquable">
    </div>
    <div id="piscine_bloc" class="cliquable">
      <img src="../assets/piscine.png" alt="piscine cliquable">
    </div>
    </section>
    <div class="bottom">
      <div class="link_to_quizz">
        <p class="trapsFound">{{$t("trapsPage.allTrapsFound")}}</p>
        <p class="goQuizz">{{$t("trapsPage.goQuizz")}}</p>
        <router-link to="/quizz">
          <i id="next" class="fas fa-arrow-circle-down" @click = "hideAbsoluteElements"></i>
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
  },
  methods:
  {
    hideAbsoluteElements(){
      var allAbsolute = document.getElementsByClassName("cheminee_bloc");
      var i;
      for (i = 0; i < allAbsolute.length; i++) {
      allAbsolute[i].style.visibility = "hidden";
      }
    }
}
}

</script>

<style scoped>

.header{
  padding:20vmin 0;
  background-color: rgba(255, 255, 255, 0.8);
  height:70vmin;
}
.pieges {
  background-color: #beeaf5;
  background-image: url("../assets/fond_website.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  height:645vw;
}


/* PC VERSION ------------------------------------------------------------------------------------------- */
@media screen and (min-width: 769px) {
  .pieges {

    background-position: top right;
    background-size: 45%;
  }
}
/* ----------------------------------------------------------------------------------------------------------*/

h1 {
  font-size: 8.5vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: rgb(38, 148, 38);
  padding: 0 20vmin;
}
p {
  font-family: 'Roboto', sans-serif;
  font-size: 5vmin;
}
.cliquez {
  font-style: italic;
  color: #555;
  padding: 0 20vmin;
  line-height: 1.3em;
}

/*-------------ELEMENTS CLIQUABLES----------------*/

.cliquable
{
  opacity:0;
  width: 100%;
  position: absolute; 
  animation: appear 1s forwards;
  animation-delay: 0.9s;
}

.cliquable img
{
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
}

/*----------------CHEMINEE-----------------------*/
#cheminee_bloc {
  text-align: right;
  top: 95vmin;
}

#cheminee_bloc img {
  width: 21%;
  margin-right: 7%;
  animation-name: boingPetit;
}

/*----------------VITRE-----------------------*/
#vitre_bloc {
  text-align: right;
  top: 150vmin;
}

#vitre_bloc img {
  width: 25%;
  margin-right: 30%;
  animation-name: boingPetit;
}

/*----------------CLOTURE DU FOND-----------------------*/
#clotureBack_bloc {
  text-align: left;
  top: 250vmin;
}

#clotureBack_bloc img {
  width: 42%;
  margin-right: 10%;
  transform-origin: bottom right;
  animation-name: boingGrand;
}
/*----------------CLOTURE DU PREMIER PLAN-----------------------*/
#clotureFront_bloc {
  top: 500vmin;
}

#clotureFront_bloc img {
  width: 100%;
  transform-origin: center bottom;
  animation-name: boingGrand;
}
/*----------------TONDEUSE-----------------------*/
#tondeuse_bloc {
  text-align:left;
  top: 350vmin;
}

#tondeuse_bloc img {
  width: 35%;
  margin-left: 10%;
  transform-origin: center bottom;
  animation-name: boingPetit;
}
/*----------------PISCINE-----------------------*/
#piscine_bloc {
  text-align: right;
  top: 400vmin;
}

#piscine_bloc img {
  width: 65%;
  margin-right: 0%;
  animation-name: boingGrand;
}

/*----------------ANIMATIONS-----------------------*/

@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes boingPetit {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes boingGrand {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}


/*----------------Bloc footer-----------------------*/


.link_to_quizz {
  background-color: #eee;
  padding: 45px;
  text-align: center;
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