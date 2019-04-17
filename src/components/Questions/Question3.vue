<template>
  <div>
    <div class="block" id="img-choice">
      <input type="checkbox" id="cloture1" value="fence1" v-model="chckboxAnswer" v-on:change="change"/><label for="cloture1"></label>
      <input type="checkbox" id="cloture2" value="fence2" v-model="chckboxAnswer" v-on:change="change"/><label for="cloture2"></label>
      <input type="checkbox" id="cloture3" value="fence3" v-model="chckboxAnswer" v-on:change="change"/><label for="cloture3"></label>
      <input type="checkbox" id="cloture4" value="fence4" v-model="chckboxAnswer" v-on:change="change"/><label for="cloture4"></label>
    </div>
  </div>
</template>
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
      // Sort to always have the same order for the hash
      this.chckboxAnswer.sort((a, b) => {
        if (a < b) { return -1 }
        if (a > b) { return 1 }
        return 0
      })

      this.$emit('change', sha1(JSON.stringify(this.chckboxAnswer)))
    }
  }
}
</script>
<style lang="scss">
input#cloture1[type=checkbox], input#cloture2[type=checkbox], input#cloture3[type=checkbox], input#cloture4[type=checkbox] {
    display:none;
}

input#cloture1[type=checkbox]+ label, input#cloture2[type=checkbox]+ label, input#cloture3[type=checkbox]+ label, input#cloture4[type=checkbox]+ label
{
    background-size: cover;
    border: solid 4px #eee;
    width: 40vw;
    height:60vw;
    display:inline-block;
}
input#cloture1[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/mur1.jpg");
}

input#cloture2[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/cloture1.jpg");
}

input#cloture3[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/mur3.jpg");
}

input#cloture4[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/cloture2.jpg");
}

input#cloture1[type=checkbox]:checked + label, input#cloture2[type=checkbox]:checked + label, input#cloture3[type=checkbox]:checked + label, input#cloture4[type=checkbox]:checked + label
{
  border: solid 4px rgb(38, 148, 38);
}
#img-choice
{
  text-align: center;
}
</style>
