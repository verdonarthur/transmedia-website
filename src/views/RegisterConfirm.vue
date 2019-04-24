<template>
  <div class="registerConfirm">
    <div class="section">
      <b-icon id="iconConfirm" pack="fas" icon="check-circle" size="is-large" ></b-icon>
      <p>{{$t('register.confirm')}}</p>
      <router-link id="btnGoHome" to="/" class="button">{{$t('register.goHome')}}</router-link>
    </div>
    <div class="section">
      <div class="container level is-mobile">
        <a href="https://www.instagram.com/birdlife_insta/" class="item">
          <span class="icon is-large">
            <i class="fab fa-instagram fa-3x"></i>
          </span>
        </a>
        <a href="https://www.facebook.com/BirdLifeSuisse/" class="item">
          <span class="icon is-large">
            <i class="fab fa-facebook fa-3x"></i>
          </span>
        </a>
        <a href="https://twitter.com/SVS_BirdLife" class="item">
          <span class="icon is-large">
            <i class="fab fa-twitter fa-3x"></i>
          </span>
        </a>
      </div>
    </div>
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
  min-height: 100vh;
  text-align: center;
  color:rgba(110, 110, 110, 0.4);

  #iconConfirm {
    width: 100%;
    height: 40%;

    font-size: 10vh;
    color:rgb(38, 148, 38);
  }

  #btnGoHome{
    margin-top: 5%
  }
}
</style>
