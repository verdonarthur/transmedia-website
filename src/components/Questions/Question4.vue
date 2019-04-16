<template>
  <div>
    <b-field :label="$t('question4.colorchoice')">
      <div class="block" id="colors">
        <b-checkbox id="yellow" type="is-warning"
          v-model="chckboxAnswer"
          native-value="color1"
          v-on:input="change"
        >{{$t('question4.color1')}}</b-checkbox>
        <b-checkbox id="blue"
          v-model="chckboxAnswer"
          native-value="color2"
          v-on:input="change"
        >{{$t('question4.color2')}}</b-checkbox>
        <b-checkbox id="black"
          v-model="chckboxAnswer"
          native-value="color3"
          v-on:input="change"
        >{{$t('question4.color3')}}</b-checkbox>
        <b-checkbox id="white" type="is-warning"
          v-model="chckboxAnswer"
          native-value="color4"
          v-on:input="change"
        >{{$t('question4.color4')}}</b-checkbox>
      </div>
    </b-field>
    <b-field :label="$t('question4.distancechoice')">
      <b-select expanded v-model="slctAnswer" v-on:input="change">
        <option value="0">0</option>
        <option value="2">2</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="150">150</option>
      </b-select>
    </b-field>
  </div>
</template>

<style lang="scss">
#colors .check
{
  width:15vw;
  height:15vw;
  border:none;
  margin: 2vw 1vw;
}
#colors .checkbox
{
  width: 45%;
  margin: 0;
}
#yellow .check
{
  background-color: yellow;
}
#blue .check
{
  background-color: blue;
}
#black .check
{
  background-color: black;
}
#white .check
{
  background-color: white;
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
      slctAnswer: 0,
      chckboxAnswer: []
    }
  },
  mounted () {
    this.$emit('change', sha1([0, []]))
  },
  methods: {
    change (e) {
      this.$emit('change', sha1([this.slctAnswer, this.chckboxAnswer]))
    }
  }
}
</script>
