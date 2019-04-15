<template>
  <div class="section">
    <div class="block">
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img1"
        v-on:input="change"
      >{{$t('question3.img1')}}</b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img2"
        v-on:input="change"
      >{{$t('question3.img2')}}</b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img3"
        v-on:input="change"
      >{{$t('question3.img3')}}</b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img4"
        v-on:input="change"
      >{{$t('question3.img4')}}</b-checkbox>
    </div>
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
