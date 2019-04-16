<template>
  <div>
    <b-field :label="$t('question6.chimneychoice')">
      <div class="block">
        <input type="checkbox" name='chimney1' id="chimney1" v-on:input="change"/><label for="chimney1"></label>
        <input type="checkbox" name='chimney2' id="chimney2" v-on:input="change"/><label for="chimney2"></label>
      </div>
    </b-field>
    <b-field :label="$t('question6.maxopening')">
      <b-input v-model="maxopening" type="number" :value="maxopening" maxlength="3" v-on:input="change" />
    </b-field>
  </div>
</template>

<style lang="scss">
input#chimney1[type=checkbox], input#chimney2[type=checkbox]
 {
    display:none;
}

input#chimney1[type=checkbox]+ label, input#chimney2[type=checkbox]+ label
{
    background-size: cover;
    border: solid 4px #eee;
    width: 42vw;
    height:42vw; 
    display:inline-block;
}
input#chimney1[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/chimney2.jpg");
}

input#chimney2[type=checkbox]+ label
{
  background-image: url("../../assets/quizz/chimney1.jpg");
}

input#chimney1[type=checkbox]:checked + label, input#chimney2[type=checkbox]:checked + label
{
border: solid 4px rgb(38, 148, 38);
}
</style>

<script>
import sha1 from 'sha1'

export default {
  model: {
    event: 'change'
  },
  data () {
    return {
      maxopening: 0,
      chckboxAnswer: []
    }
  },
  mounted () {
    this.$emit('change', sha1([0, []]))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1([this.maxopening, this.chckboxAnswer]))
    }
  }
}
</script>
