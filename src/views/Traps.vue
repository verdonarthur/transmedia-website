<template>
  <div id="traps" class="traps">
    <div id="top">
      <div class="previous">
        <router-link to="/">
          <i id="next" class="fas fa-arrow-circle-up" @click="hideAbsoluteElements"></i>
        </router-link>
      </div>
    </div>
    <section id="trapMain" class="pieges">
      <div class="header">
        <h1>{{ $t("trapsPage.title") }}</h1>
        <p class="cliquez">{{$t("trapsPage.description")}}</p>
      </div>
      <div class="cheminee_bloc">
        <img
          src="../assets/website_cheminee.png"
          @click="openPopUp('chimney')"
          alt="cheminee cliquable">
      </div>
      <p @click="openPopUp('homeHoles')">Pop-Up Trous dans la maison</p>
      <p @click="openPopUp('windows')">Pop-Up Fenêtre</p>
      <p @click="openPopUp('fence')">Pop-Up Grillage</p>
      <p @click="openPopUp('pool')">Pop-Up piscine</p>
      <p @click="openPopUp('lawnMower')">Pop-Up tondeuse</p>
    </section>
    <b-modal :active.sync="isPopupActive" has-modal-card>
      <Popup :popupRef="popupRef"></Popup>
    </b-modal>
    <div class="bottom">
      <div class="link_to_quizz">
        <p class="trapsFound">{{$t("trapsPage.allTrapsFound")}}</p>
        <p class="goQuizz">{{$t("trapsPage.goQuizz")}}</p>
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
    },
    handleScroll () {
      if (this.scrollEvent == 0)
      {
        this.scrollEvent ++;
        return
      }
      if(window.scrollY == 0){
        this.$router.push('/')
      }
      else if (window.innerHeight + window.scrollY >= document.getElementById('traps').offsetHeight
      && document.getElementById('traps').offsetHeight > window.innerHeight ) {
        this.$router.push('/quizz')
      }
    }
    
  },
  mounted () {
    document.addEventListener('scroll', this.handleScroll)
    window.scrollTo({ top: document.getElementById('top').offsetHeight})
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.header {
  padding-bottom: 50px;
  background-color: rgba(255, 255, 255, 0.8);
}
.pieges {
  background-color: #beeaf5;
  background-image: url("../assets/website_pieges.png");
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  height: 560vw;
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
  font-size: 2.5em;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: rgb(38, 148, 38);
  padding: 50px 50px 0px 50px;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
}
.cliquez {
  font-style: italic;
  color: #555;
  padding: 0px 50px;
  line-height: 1.3em;
}
.cheminee_bloc {
  opacity: 0;
  width: 100%;
  position: absolute;
  text-align: right;
  top: 74vmin;
  animation: appear 1s forwards;
  animation-delay: 0.9s;
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cheminee_bloc img {
  width: 21%;
  margin-right: 14%;
  animation-name: test;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
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
  background-color: #61a52e;
  padding: 40px;
  margin-top: -2px;
}

.link_to_quizz {
  background-color: #eee;
  padding: 25px;
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
#top{
  text-align:center;
}
</style>
