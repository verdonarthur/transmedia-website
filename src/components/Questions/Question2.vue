<template>
  <div class="section">
    <div class="block">
      <b-radio
        v-model="radioAnswer"
        native-value="Plank"
        :checked="checked"
        v-on:input="change"
      >{{$t('question2.plank')}}</b-radio>
      <b-radio v-model="radioAnswer" native-value="Lifebuoy" v-on:input="change">{{$t('question2.lifebuoy')}}</b-radio>
      <b-radio v-model="radioAnswer" native-value="Paperboat" v-on:input="change">{{$t('question2.paperboat')}}</b-radio>
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
      checked: true,
      radioAnswer: 'Plank'
    }
  },
  mounted () {
    this.$emit('change', sha1('Plank'))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1(this.radioAnswer))
    }
  }
}
</script>
