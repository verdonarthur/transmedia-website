<template>
  <div class="modal-card">
   <header class="modal-card-head">
      <h1 class="popUpTitle">{{$t("popupPages." + popupRef +"."+ popupPage +".title")}}</h1>
    </header>
    <section class="modal-card-body">

      <h2 class="popUpSubtitle">{{$t("popupPages." + popupRef +"."+ popupPage +".subTitle")}}</h2>
      <component v-bind:is="popupRef" :popupRef="popupRef" :popupPage="popupPage">
      </component>
    </section>
    <template v-if="popupPage === 'problem'">
      <footer class="modal-card-foot">
        <button @click="loadSolution" class="button toSoluce">{{$t("popupPages.learnMore")}}</button>
      </footer>
    </template>
  </div>
</template>
<script>
import Chimney from '../components/Chimney'
import Fence from '../components/Fence'
import HomeHoles from '../components/HomeHoles'
import LawnMower from '../components/LawnMower'
import Pool from '../components/Pool'
import Windows from '../components/Windows'
export default {
  name: 'Popup',
  components: {
    Chimney, Fence, HomeHoles, LawnMower, Pool, Windows
  },
  props: {
    popupRef: String
  },
  data () {
    return {
      popupPage: 'problem'
    }
  },
  methods: {
    // This method is called everytime the user clicks on the buttont that shows the solution to a trap<<
    loadSolution () {
      this.popupPage = 'solution'
    }
  }
}
</script>
<style>
.button{
  text-align:center;
  display:block;
  margin:auto;
  background-color:rgb(38, 148, 38);
  color:white;
  font-family: 'Fjalla One', sans-serif;
  border:none;
  margin-top:15px;
}

.button:hover
{
  background-color:transparent;
  color:rgb(38, 148, 38);
  border:2px solid rgb(38, 148, 38);
}

.modal-card{
width: 100%;
background:none;
}
.modal-card-head, .modal-card-foot
{
  border-bottom:none;
  border-top:none;
  background-color:transparent;
  padding: 20px 35px;
}
.popUpTitle
{
font-size:1.4em;
flex-shrink:1;
line-height:1.5;
color: #eee;
}
.popUpSubtitle
{
  color:rgb(38, 148, 38);
  font-size:1.15em;
}
.modal-card-body
{
  padding:0px 35px;
  color:#eee;
  background-color: transparent;
}

.button.toSoluce
{
  font-size: 1.1em;
}
</style>
