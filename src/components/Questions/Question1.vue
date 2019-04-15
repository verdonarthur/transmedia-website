<template>
  <div>
    <input type="number" :value="value" v-on:change="change">
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
      value: 0
    }
  },
  mounted () {
    this.$emit('change', sha1(this.value))
  },
  methods: {
    change () {
      this.$emit('change', sha1(this.value))
    }
  }
}
</script>
