<template>
  <div>
    <input type="radio" name="testRadio" value="plank" :checked="checked" v-on:change="change">
    <input type="radio" name="testRadio" value="lifebuoy" v-on:change="change">
    <input type="radio" name="testRadio" value="paperboat" v-on:change="change">
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
      checked: true
    }
  },
  mounted () {
    this.$emit('change', sha1('plank'))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1(e.target.value))
    }
  }
}
</script>
