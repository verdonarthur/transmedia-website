<template>
  <div id="traps" class="traps">
    <div class="linkToHome">
      <router-link to="/">
        <i class="fas fa-arrow-left"></i>
      </router-link>
    </div>
    <div class="downArrow">
      <i class="fas fa-arrow-down"></i>
    </div>
    <section class="pieges">
      <div class="header">
        <h1 class="title is-3">{{ $t("trapsPage.title") }}</h1>
        <p class="cliquez subtitle is-6">{{$t("trapsPage.description")}}</p>
      </div>
      <div id="cheminee_bloc" class="cliquable">
        <img src="../assets/cheminee.png" @click="openPopUp('chimney')" alt="cheminee cliquable">
      </div>
      <div id="vitre_bloc" class="cliquable">
        <img src="../assets/fenetre.png" @click="openPopUp('windows')" alt="vitre cliquable">
      </div>
      <div id="clotureBack_bloc" class="cliquable">
        <img
          src="../assets/clotureFond.png"
          @click="openPopUp('fence')"
          alt="cloture du fond cliquable"
        >
      </div>
      <div id="clotureFront_bloc" class="cliquable">
        <img
          src="../assets/cloturePremirPlan.png"
          @click="openPopUp('fence')"
          alt="cloture du premier plan cliquable"
        >
      </div>
      <div id="tondeuse_bloc" class="cliquable">
        <img src="../assets/tondeuse.png" @click="openPopUp('lawnMower')" alt="tondeuse cliquable">
      </div>
      <div id="piscine_bloc" class="cliquable">
        <img src="../assets/piscine.png" @click="openPopUp('pool')" alt="piscine cliquable">
      </div>
      <div class="stylePC"></div>
    </section>
    <b-modal :active.sync="isPopupActive" has-modal-card>
      <Popup :popupRef="popupRef"></Popup>
    </b-modal>
    <div class="bottom">
      <div class="link_to_quizz">
        <h2 class="trapsFound subtitle is-4">{{$t("trapsPage.allTrapsFound")}}</h2>
        <h2 class="goQuizz subtitle is-4">{{$t("trapsPage.goQuizz")}}</h2>
        <router-link to="/quizz">
          <i id="next" class="fas fa-arrow-circle-down" @click="hideAbsoluteElements"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Popup from '../components/Popup'
export default {
  name: 'Traps',
  props: {},
  components: {
    Popup
  },
  data () {
    return {
      isPopupActive: false,
      popupRef: String,
      scrollEvent: 0
    }
  },
  methods: {
    hideAbsoluteElements () {
      var allAbsolute = document.getElementsByClassName('cheminee_bloc')
      var i
      for (i = 0; i < allAbsolute.length; i++) {
        allAbsolute[i].style.visibility = 'hidden'
      }
    },
    openPopUp (ref) {
      this.isPopupActive = true
      this.popupRef = ref
    }
  }
}
</script>

<style scoped>
.traps{
  min-height: 100vh
}

.linkToHome {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 2vmin;
  color: #555;
}

.downArrow {
  position: fixed;
  bottom: 10px;
  left: 10px;
  font-size: 2vmin;
  color: #555;
}
.downArrow i {
  color: rgba(238, 238, 238, 0.8);
}
.linkToHome i {
  color: rgba(110, 110, 110, 0.4);
}

.header {
  padding: 20vmin 0;
  background-color: rgba(255, 255, 255, 0.8);
  height: 250px;
}
.pieges {
  background-image: url("../assets/fond_website.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  height: 634vw;
}

h1 {
  color: rgb(38, 148, 38);
  padding: 0 15vw;
}
p {
  font-size: 5vw;
}
.cliquez {
  color: #555;
  padding: 0 15vw;
  line-height: 1.3em;
}

/*-------------ELEMENTS CLIQUABLES----------------*/

.cliquable {
  opacity: 0;
  width: 100%;
  position: absolute;
  animation: appear 1s forwards;
}

.cliquable img {
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 0.5s;
}

/*----------------CHEMINEE-----------------------*/
#cheminee_bloc {
  text-align: right;
  top: 95vw;
}

#cheminee_bloc img {
  width: 21%;
  margin-right: 7%;
  animation-name: boingPetit;
}

/*----------------VITRE-----------------------*/
#vitre_bloc {
  text-align: right;
  top: 150vw;
}

#vitre_bloc img {
  width: 25%;
  margin-right: 30%;
  animation-name: boingPetit;
}

/*----------------CLOTURE DU FOND-----------------------*/
#clotureBack_bloc {
  text-align: left;
  top: 250vw;
}

#clotureBack_bloc img {
  width: 42%;
  margin-right: 10%;
  transform-origin: bottom right;
  animation-name: boingGrand;
}
/*----------------CLOTURE DU PREMIER PLAN-----------------------*/
#clotureFront_bloc {
  top: 500vw;
}

#clotureFront_bloc img {
  width: 100%;
  transform-origin: center bottom;
  animation-name: boingGrand;
}
/*----------------TONDEUSE-----------------------*/
#tondeuse_bloc {
  text-align: left;
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
  top: 400vw;
}

#piscine_bloc img {
  width: 65%;
  margin-right: 0%;
  animation-name: boingGrand;
}

/*----------------ANIMATIONS-----------------------*/

@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  z-index: 999;
}

.trapsFound {
  line-height: 1.4em;
}

.goQuizz {
  line-height: 1.2em;
  padding-top: 10px;
  color: rgb(38, 148, 38);
}
i {
  margin-top: 15px;
  font-size: 3em;
  color: rgb(38, 148, 38);
}

/* PC VERSION ------------------------------------------------------------------------------------------- */
@media screen and (min-width: 769px) {
  .pieges {
    background-color: #fff;
    background-position: top right;
    background-size: 35%;
    height: 222vmax;
  }

  .header{
    padding:6vmax 0;
    background-color:#fff;
    height: 20vmax;
}

h1 {
  font-size: 3vmax;
  padding: 0 20vmax;
}
p {
  font-size: 1.7vmax;
}
.cliquez {
  padding: 0 10vmax;
}
  h1 {
    font-size: 3vmax;
    padding: 0 20vmax;
  }
  p {
    font-size: 1.7vmax;
  }
  .cliquez {
    padding: 0 10vmax;
  }

  .stylePC {
    position: absolute;
    background-color:#eee;
    z-index: 40;
    height: 204vmax;
    width: 65%;
  }
  /*----------------CHEMINEE-----------------------*/
  #cheminee_bloc {
    top: 33vmax;
  }
  #cheminee_bloc img {
    width: 6%;
    margin-right: 5%;
  }

  /*----------------VITRE-----------------------*/
  #vitre_bloc {
    text-align: right;
    top: 51vmax;
  }

  #vitre_bloc img {
    width: 9%;
    margin-right: 10.5%;
  }

  /*----------------CLOTURE DU FOND-----------------------*/
  #clotureBack_bloc {
    text-align: right;
    top: 86vmax;
  }

  #clotureBack_bloc img {
    width: 15%;
    margin-right: 20.1%;
  }
  /*----------------CLOTURE DU PREMIER PLAN-----------------------*/
  #clotureFront_bloc {
    text-align: right;
    top: 172vmax;
  }

  #clotureFront_bloc img {
    width: 35%;
  }
  /*----------------TONDEUSE-----------------------*/
  #tondeuse_bloc {
    text-align: right;
    top: 121vmax;
  }

  #tondeuse_bloc img {
    width: 10%;
    margin-right: 21%;
  }
  /*----------------PISCINE-----------------------*/
  #piscine_bloc {
    text-align: right;
    top: 137vmax;
  }

  #piscine_bloc img {
    width: 22%;
  }
}
/* ----------------------------------------------------------------------------------------------------------*/
</style>
