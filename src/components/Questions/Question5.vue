<template>
  <div class="section">
    <b-field :label="$t('question5.colorchoice')">
      <div class="block">
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="choice1"
          v-on:input="change"
        >{{$t('question5.choice1')}}</b-checkbox>
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="choice2"
          v-on:input="change"
        >{{$t('question5.choice2')}}</b-checkbox>
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="choice3"
          v-on:input="change"
        >{{$t('question5.choice3')}}</b-checkbox>
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="choice4"
          v-on:input="change"
        >{{$t('question5.choice4')}}</b-checkbox>
      </div>
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
    this.$emit('change', sha1([]))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1(this.chckboxAnswer))
    }
  }
}
</script>
