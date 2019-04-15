<template>
  <div class="section">
    <b-field :label="$t('question1.fenceHeight')">
        <b-input v-model="value" type="number" :value="value" maxlength="3" v-on:input="change" />
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
