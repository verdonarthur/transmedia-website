<template>
  <div>
    <b-field :label="$t('question6.chimneychoice')">
      <div class="block">
        <input type="checkbox" name='chimney1' id="chimney1" v-on:input="change"/><label for="chimney1"></label>
        <input type="checkbox" name='chimney2' id="chimney2" v-on:input="change"/><label for="chimney2"></label>
      </div>
    </b-field>
    <b-field :label="$t('question6.maxopening')" id="openingChimney">
      <input ref="sliderBulma" v-model="value" class="slider is-fullwidth is-large is-circle" step="5" min="0" max="50" type="range" v-on:input="change" >
        <p>{{value}} cm</p>
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

/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {
 input#chimney1[type=checkbox]+ label, input#chimney2[type=checkbox]+ label
{
    background-size: cover;
    border: solid 4px #eee;
    width: 250px;
    height:250px; 
    display:inline-block;
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
      maxopening: 0,
      chckboxAnswer: [],
      value:0
    }
  },
  mounted () {
    this.$emit('change', sha1([0, []]))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1([this.maxopening, this.chckboxAnswer]))
    }
  }
}
</script>
