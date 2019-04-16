<template>
  <div>
    <div id="fence">
        <img id="lawn" src="../../assets/quizz/cloture_base.png" alt="Herbe">
        <img id="cloture" src="../../assets/quizz/cloture_move.png" alt="Clôture à bouger en hauteur">
      </div>
    <b-field :label="$t('question1.fenceHeight')" id="fenceHeight">
      <input ref="sliderBulma" v-model="value" class="slider is-fullwidth is-large is-circle" step="5" min="0" max="30" type="range" v-on:input="change" >
        <p>{{value}} cm</p>
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
#lawn
{
  margin-top:45vw;
  position:relative;
  z-index:1;
}
#cloture
{
  padding:0 1.5rem;
  position: absolute;
  z-index:0;
  left:0;
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
      bulmaSlider:{},
      value:0
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
