<template>
  <div>
    <b-field :label="$t('question4.colorchoice')">
      <div class="block" id="colors">
        <b-checkbox id="yellow" type="is-warning"
          v-model="chckboxAnswer"
          native-value="color1"
          v-on:input="change"
        >{{$t('question4.color1')}}</b-checkbox>
        <b-checkbox id="blue"
          v-model="chckboxAnswer"
          native-value="color2"
          v-on:input="change"
        >{{$t('question4.color2')}}</b-checkbox>
        <b-checkbox id="black"
          v-model="chckboxAnswer"
          native-value="color3"
          v-on:input="change"
        >{{$t('question4.color3')}}</b-checkbox>
        <b-checkbox id="white" type="is-warning"
          v-model="chckboxAnswer"
          native-value="color4"
          v-on:input="change"
        >{{$t('question4.color4')}}</b-checkbox>
      </div>
    </b-field>
    <b-field :label="$t('question4.distancechoice')" id="distanceSticker">
      <input ref="sliderBulma" v-model="slctAnswer" class="slider is-fullwidth is-large is-circle" step="5" min="0" max="100" type="range" v-on:input="change" >
        <p>{{slctAnswer}} cm</p>
    </b-field>
  </div>
</template>

<style lang="scss">
@import "~bulma-slider/dist/css/bulma-slider.min.css";
#distanceSticker
{
  display: block;
}
#colors .check
{
  width:15vw;
  height:15vw;
  border:none;
  margin: 2vw 1vw;
}
#colors .checkbox
{
  width: 45%;
  margin: 0;
}
#yellow .check
{
  background-color: #50280C;
}
#blue .check
{
  background-color: lightgreen;
}
#black .check
{
  background-color: black;
}
#white .check
{
  background-color: white;
  border: solid 2px #ccc;
}
/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {

  #colors .check
{
  width:70px;
  height:70px;
  border:none;
  margin: 2vw 1vw;
}
#white .check
{
  border: solid 2px #ccc;
}
  }
</style>

<script>
import sha1 from 'sha1'
import BulmaSlider from 'bulma-slider/dist/js/bulma-slider.min.js'

export default {
  model: {
    event: 'change'
  },
  data () {
    return {
      slctAnswer: 0,
      chckboxAnswer: []
    }
  },
  mounted () {
    this.$emit('change', sha1([0, []]))
  },
  methods: {
    change (e) {
      // Sort to always have the same order for the hash
      this.chckboxAnswer.sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
      })

      this.$emit('change', sha1(JSON.stringify([this.slctAnswer, this.chckboxAnswer])))
    }
  }
}
</script>
