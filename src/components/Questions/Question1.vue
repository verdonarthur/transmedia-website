<template>
  <div>
    <div id="fence">
        <img id="lawn" src="../../assets/quizz/cloture_base.png" alt="Herbe">
        <img id="cloture" src="../../assets/quizz/cloture_move.png" alt="Clôture à bouger en hauteur">
      </div>
    <b-field :label="$t('question1.fenceHeight')">
        <b-input v-model="value" type="number" :value="value" maxlength="3" v-on:input="change" />
      </b-field>
  </div>
</template>

<style lang="scss">
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

export default {
  model: {
    event: 'change'
  },
  data () {
    return {
      heightClosure: 0
    }
  },
  mounted () {
    this.$emit('change', sha1(this.heightClosure))
  },
  methods: {
    change () {
      this.$emit('change', sha1(this.heightClosure))
    }
  }
}

</script>
