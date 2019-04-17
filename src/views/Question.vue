<template>
  <div>
    <div class="section">
      <div class="box">
    <h1 class="title is-4">Question {{this.idQuestion}} : {{ $t(`question${this.idQuestion}.title`) }}</h1>
    <div>
      <component v-bind:is="currentQuestion" v-on:change="change"></component>
    </div>
    <button class="button" v-on:click="nextQuestion">{{ $t("global.nextQuestion") }}</button>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
#app, .section
{
  background-color: #eee;
}
h1.title
{
margin-bottom: 4vw;
color: #269426;
}

.button{
  text-align:center;
  display:block;
  margin:auto;
  background-color:rgb(38, 148, 38);
  color:white;
  font-family: 'Fjalla One', sans-serif;
  border:none;
  margin-top:15px;
}
/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {
  .section
  {
    padding: 4vw 25vw;
  }
}

</style>

<script>
import QuizzStorage from '../utils/QuizzStorage'

const NBR_QUESTION = 6

// Load all the question : https://forum.vuejs.org/t/dynamically-import-components/33715
let loadedQuestion = {}
for (let i = 0; i < NBR_QUESTION; i++) {
  loadedQuestion['Question' + (i + 1)] = () => {
    return import(`../components/Questions/Question${i + 1}.vue`)
  }
}

export default {
  name: 'question',
  components: { ...loadedQuestion },
  data () {
    return {}
  },
  props: ['idQuestion'],
  mounted () {
    this.quizzStorage = QuizzStorage.initQuizzStoage()
  },
  methods: {
    change (e) {
      console.log('saving results:', e)
      this.quizzStorage.saveResults(this.idQuestion, e)
    },
    nextQuestion () {
      if (this.idQuestion < NBR_QUESTION) {
        this.$router.push({
          name: 'questions',
          params: { idQuestion: Number(Number(this.idQuestion) + 1) }
        })
      } else {
        this.$router.push({
          name: 'register'
        })
      }
    }
  },
  watch: {},
  computed: {
    currentQuestion: function () {
      return 'Question' + this.idQuestion
    }
  }
}
</script>
