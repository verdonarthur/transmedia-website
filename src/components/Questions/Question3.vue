<template>
  <div>
    <div class="block" id="img-choice">
      <input type="checkbox" name='cloture1' id="cloture1"/><label for="cloture1"></label>
      <input type="checkbox" name='cloture2' id="cloture2"/><label for="cloture2"></label>
      <input type="checkbox" name='cloture3' id="cloture3"/><label for="cloture3"></label>
      <input type="checkbox" name='cloture4' id="cloture4"/><label for="cloture4"></label>
      <b-checkbox id="test"
        v-model="chckboxAnswer"
        native-value="img1"
        v-on:input="change" @click="checking()"></b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img2"
        v-on:input="change"
      ></b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img3"
        v-on:input="change"
      >{{$t('question3.img3')}}</b-checkbox>
      <b-checkbox
        v-model="chckboxAnswer"
        native-value="img4"
        v-on:input="change"
      >{{$t('question3.img4')}}</b-checkbox>
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
      this.$emit('change', sha1(this.chckboxAnswer))
    },
    checking (){
      console.log("merde")
    }
    
  }
}
</script>
<style lang="scss">
input#cloture1[type=checkbox], input#cloture2[type=checkbox], input#cloture3[type=checkbox], input#cloture4[type=checkbox] {
    display:none;
}

#test input[type=checkbox], span.check 
{
 display:none;
}
#test
{
  background-image: url("../../assets/quizz/mur1.jpg");
background-size: cover;
    border: solid 4px #eee;
    width: 40vw;
    height:60vw; 
    display:inline-block;
}
#test.focused
{
  border: solid 4px rgb(38, 148, 38);
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


