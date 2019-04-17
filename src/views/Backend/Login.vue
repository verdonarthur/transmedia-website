<template>
  <section class="loginBackend">
    <div class="section">
      <form class="box" @submit.prevent="login">
        <b-message :active.sync="hasError" type="is-danger">{{$t('backend.loginError')}}</b-message>
        <b-field :label="$t('backend.username')">
          <b-input placeholder="johnsilver" maxlength="30" v-model="username"></b-input>
        </b-field>

        <b-field :label="$t('backend.password')">
          <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>

        <button type="submit" class="button">{{$t('backend.login')}}</button>
      </form>
    </div>
  </section>
</template>

<script>
import { User } from '../../utils/Backend'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      hasError: false
    }
  },
  methods: {
    login () {
      this.hasError = false
      const loadComp = this.$loading.open()

      let user = new User(this.username, this.password)

      user
        .login()
        .then(token => {
          loadComp.close()
          this.$router.push({ name: 'adminHome' })
        })
        .catch(() => {
          loadComp.close()
          this.hasError = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.loginBackend {
}
</style>
