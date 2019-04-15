<template>
  <div class="section">
<<<<<<< HEAD
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
=======
    <b-field :label="$t('question6.colorchoice')">
      <div class="block">
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="chimney1"
          v-on:input="change"
        >{{$t('question6.chimney1')}}</b-checkbox>
        <b-checkbox
          v-model="chckboxAnswer"
          native-value="chimney2"
          v-on:input="change"
        >{{$t('question6.chimney2')}}</b-checkbox>
>>>>>>> 8f81fc6b8b22b3fc79c569809d6aa1983b7438bf
      </div>
    </b-field>
    <b-field :label="$t('question6.maxopening')">
      <b-input v-model="maxopening" type="number" :value="maxopening" maxlength="3" v-on:input="change" />
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
      maxopening: 0,
      chckboxAnswer: []
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
