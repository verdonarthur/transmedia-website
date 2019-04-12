<template>
  <div class="container" id="Results">
    <h1 class="title">{{ $t("results.well-done") }}</h1>
    <div>

    </div>
  </div>
</template>

<style lang="scss">
#Results {
  text-align: center;
  padding-top: 20%;
}
</style>

<script>
import QuizzStorage from '../utils/QuizzStorage'

export default {
  name: 'results',
  data () {
    return {
      results: {},
      quizzStorage: {}
    }
  },
  mounted () {
    this.quizzStorage = QuizzStorage.initQuizzStoage()
    this.results = this.quizzStorage.results
  },
  beforeDestroy () {
    this.quizzStorage = new QuizzStorage()
    this.quizzStorage.save()
  }
}
</script>
