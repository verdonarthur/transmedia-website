<template>
  <div>
    <img src="../../assets/quizz/jardin_nuit.jpg" alt="jardin de nuit">
    <b-field>
      <div class="block" id="garden">
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
#garden .checkbox
{
  display: flex;
  margin: 5vw;
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
      chckboxAnswer: []
    }
  },
  mounted () {
    this.$emit('change', sha1([]))
  },
  methods: {
    change (e) {
      // Sort to always have the same order for the hash
      this.chckboxAnswer.sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
      })
      this.$emit('change', sha1(JSON.stringify(this.chckboxAnswer)))
    }
  }
}
</script>
