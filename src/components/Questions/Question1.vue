<template>
  <div id="question1">
    <div id="fence">
        <img id="lawn" src="../../assets/quizz/cloture_move.png" alt="Herbe">
      </div>
    <b-field :label="$t('question1.fenceHeight')" id="fenceHeight">
      <input ref="sliderBulma" v-model="heightClosure" class="slider is-fullwidth is-large is-circle" step="5" min="0" max="30" type="range" v-on:input="change" >
        <p>{{heightClosure}} cm</p>
      </b-field>
  </div>
</template>

<style lang="scss">
@import "~bulma-slider/dist/css/bulma-slider.min.css";

#fenceHeight
{
  display:block;
}

input.slider{
  display:block;
  width:100%;
}
.field
{
  margin-top:4vw;
}

/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {
  #fence
  {
  text-align: center;
  padding: 0 5vw;
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
      heightClosure: 0,
      bulmaSlider: {}
    }
  },
  mounted () {
    this.bulmaSlider = new BulmaSlider(this.$refs.sliderBulma)
    this.$emit('change', sha1(this.heightClosure))
  },
  methods: {
    change () {
      this.$emit('change', sha1(this.heightClosure))
    }
  }
}

</script>
