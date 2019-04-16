<template>
  <div>
    <img id="herisson" src="../../assets/quizz/piscine_herisson.jpg" alt="">
    <div class="block" id="answers">
      <b-radio v-model="radioAnswer" native-value="Plank" :checked="checked" v-on:input="change">
        <p class="object-name"><img id="plancheBois" src="../../assets/quizz/planche_bois.png" alt="planche de bois" align="middle">   {{$t('question2.plank')}}</p>
      </b-radio>
      <b-radio v-model="radioAnswer" native-value="Lifebuoy" v-on:input="change">
        <p class="object-name"><img id="bouee" src="../../assets/quizz/bouee.png" alt="bouée de sauvetage" align="middle">    {{$t('question2.lifebuoy')}}</p>
      </b-radio>
      <b-radio v-model="radioAnswer" native-value="Paperboat" v-on:input="change">
        <p class="object-name"><img id="bateau" src="../../assets/quizz/bateau_papier.png" alt="bateau en papier" align="middle">    {{$t('question2.paperboat')}}</p>
      </b-radio>
    </div>
  </div>
</template>

<style lang="scss">
#answers
{
  margin-bottom: 5vw;
}
#answers .b-radio
{
  margin: 0 0 1vw 0;
}
#answers .b-radio span.check
{
  border-color:rgb(38, 148, 38);
}

#answers .b-radio span.check::before
{
  background-color:rgb(38, 148, 38);
}
#answers .b-radio .control-label
{
  padding: 2vw 5vw;
}
#bouee, #bateau
{
  margin-right:5vw;
  width:25%;
}
#plancheBois
{
  margin-right:5vw;
  width: 18%;
}

#herisson
{
  margin-bottom: 2vw;
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
      checked: true,
      radioAnswer: 'Plank'
    }
  },
  mounted () {
    this.$emit('change', sha1('Plank'))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1(this.radioAnswer))
    }
  }
}
</script>
