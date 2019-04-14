<template>
  <div>
    <h1>Question {{this.idQuestion}}</h1>
    <div>
      <component v-bind:is="currentQuestion" v-on:change="change"></component>
    </div>
    <button class="button" v-on:click="nextQuestion">{{ $t("global.nextQuestion") }}</button>
  </div>
</template>

<style lang="scss">
</style>

<script>
import QuizzStorage from "../utils/QuizzStorage";

const NBR_QUESTION = 2;

// Load all the question : https://forum.vuejs.org/t/dynamically-import-components/33715
let loadedQuestion = {};
for (let i = 0; i < NBR_QUESTION; i++) {
  loadedQuestion["Question" + (i + 1)] = () => {
    return import(`../components/Questions/Question${i + 1}.vue`);
  };
}

export default {
  name: "question",
  components: { ...loadedQuestion },
  data() {
    return {};
  },
  props: ["idQuestion"],
  mounted() {
    this.quizzStorage = QuizzStorage.initQuizzStoage();
  },
  methods: {
    change(e) {
      console.log(e);
      this.quizzStorage.saveResults(this.idQuestion, e);
    },
    nextQuestion() {
      if (this.idQuestion < NBR_QUESTION)
        this.$router.push({
          name: "questions",
          params: { idQuestion: Number(this.idQuestion) + 1 }
        });
    }
  },
  watch: {},
  computed: {
    currentQuestion: function() {
      return "Question" + this.idQuestion;
    }
  }
};
</script>
