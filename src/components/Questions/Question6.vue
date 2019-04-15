<template>
  <div class="section">
    <b-field>
      <div class="block">
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="img1"
          v-on:input="change"
        >{{$t('question6.img1')}}</b-checkbox>
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="img2"
          v-on:input="change"
        >{{$t('question6.img2')}}</b-checkbox>
      </div>
    </b-field>
    <b-field :label="$t('question4.distancechoice')">
      <b-select expanded v-model="slctAnswer" v-on:input="change">
        <option value="0">0</option>
        <option value="10">10</option>
      </b-select>
    </b-field>
  </div>
</template>

<style lang="scss">
</style>

<script>
import sha1 from 'sha1'

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
      this.$emit('change', sha1([this.slctAnswer, this.chckboxAnswer]))
    }
  }
}
</script>
