<template>
  <div>
    <b-field :label="$t('question6.chimneychoice')">
      <div class="block">
        <input type="checkbox" v-model="chckboxAnswer" value='chimney1' id="chimney1" v-on:change="change"/><label for="chimney1"></label>
        <input type="checkbox" v-model="chckboxAnswer" value='chimney2' id="chimney2" v-on:change="change"/><label for="chimney2"></label>
      </div>
    </b-field>
    <b-field :label="$t('question6.maxopening')" id="openingChimney">
      <input ref="sliderBulma" v-model="maxopening" class="slider is-fullwidth is-large is-circle" step="5" min="0" max="50" type="range" v-on:input="change" >
        <p>{{maxopening}} mm</p>
    </b-field>
  </div>
</template>

<style lang="scss">
@import "~bulma-slider/dist/css/bulma-slider.min.css";

#openingChimney
{
  display: block;
}
input#chimney1[type=checkbox], input#chimney2[type=checkbox]
 {
    display:none;
}

input#chimney1[type=checkbox]+ label, input#chimney2[type=checkbox]+ label
{
    background-size: cover;
    border: solid 4px #eee;
    width: 42vw;
    height:42vw;
    display:inline-block;
}
input#chimney1[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/chimney2.jpg");
}

input#chimney2[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/chimney1.jpg");
}

input#chimney1[type=checkbox]:checked + label, input#chimney2[type=checkbox]:checked + label
{
border: solid 4px rgb(38, 148, 38);
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
      maxopening: 0,
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

      this.$emit('change', sha1(JSON.stringify([this.maxopening, this.chckboxAnswer])))
    }
  }
}
</script>
