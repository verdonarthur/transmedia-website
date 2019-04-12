<template>
  <div>
    <QuestionHeader title="TITRE"></QuestionHeader>
    <a class="button" v-on:click="nextQuestion">{{ $t("global.nextQuestion") }}</a>
  </div>
</template>

<style lang="scss">
</style>

<script>
import QuestionHeader from '../../components/Questions/QuestionHeader'
import QuizzStorage from '../utils/QuizzStorage'

export default {
  name: 'question-1',
  components: { QuestionHeader },
  data () {
    return {
      answers: this.$i18n.t('question-1.answers')
    }
  },
  mounted () {
    this.quizzStorage = QuizzStorage.initQuizzStoage()
  },
  methods: {
    nextQuestion () {
    // TODO VERIF ANSWERS QUESTION
      this.$router.push('question/2')
    } },
  watch: {}
}
</script>
