<template>
  <div class="section registerConfirm">
    <b-icon id="iconConfirm" pack="fas" icon="check-circle" size="is-large" ></b-icon>
    <p>{{$t('register.confirm')}}</p>
    <router-link id="btnGoHome" to="/" class="button">{{$t('register.goHome')}}</router-link>
  </div>
</template>

<script>
import QuizzStorage from '../utils/QuizzStorage'

export default {
  name: 'RegisterConfirm',
  data: () => {
    return {}
  },
  mounted () {
    let quizzStorage = new QuizzStorage()
    quizzStorage.save()
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.registerConfirm {
  height: 100%;
  text-align: center;
  color:rgba(110, 110, 110, 0.4);

  #iconConfirm {
    width: 100%;
    height: 40%;

    font-size: 15vw;
    color:rgb(38, 148, 38);
  }

  #btnGoHome{
    margin-top: 5%
  }
}
</style>
