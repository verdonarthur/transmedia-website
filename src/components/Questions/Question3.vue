<template>
  <div>
    <div class="block" id="img-choice">
      <input type="checkbox" name='cloture1' id="cloture1" v-on:input="change"/><label for="cloture1"></label>
      <input type="checkbox" name='cloture2' id="cloture2" v-on:input="change"/><label for="cloture2"></label>
      <input type="checkbox" name='cloture3' id="cloture3" v-on:input="change"/><label for="cloture3"></label>
      <input type="checkbox" name='cloture4' id="cloture4" v-on:input="change"/><label for="cloture4"></label>
      <!-- <b-checkbox id="test"
        v-model="chckboxAnswer"
        native-value="img1"
        v-on:input="change" :class="{focused:isFocused}" @click.native="checking"></b-checkbox>
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
      >{{$t('question3.img4')}}</b-checkbox> -->
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
    /* checking (){
      console.log("blabla");
      this.isFocused= !this.isFocused;
      console.log(this.isFocused);
    } */
    
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
    width: 36vw;
    height:53vw; 
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

/*---------------------------------------------PC version-------*/
@media screen and (min-width: 769px) {
  input#cloture1[type=checkbox]+ label, input#cloture2[type=checkbox]+ label, input#cloture3[type=checkbox]+ label, input#cloture4[type=checkbox]+ label
{
      background-size: cover;
    border: solid 4px #eee;
    width: 40%;
    height:280px; 
    display:inline-block;
    margin: 10px;
}
}
@media screen and (min-width: 1194px) {
  input#cloture1[type=checkbox]+ label, input#cloture2[type=checkbox]+ label, input#cloture3[type=checkbox]+ label, input#cloture4[type=checkbox]+ label
{
background-size: cover;
    border: solid 4px #eee;
    width: 250px;
    height:350px; 
    display:inline-block;
    margin: 10px;
}
  
  }
</style>


