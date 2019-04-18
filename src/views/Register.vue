<template>
  <div class="register">
    <div class="section">
      <form class="box" @submit.prevent="register">
        <h1>{{ $t("registerPage.title") }}</h1>
        <p>{{$t("registerPage.description")}}</p>
        <section>
          <div class="field is-horizontal">
            <div class="field-body">
              <b-field :label="$t('registerPage.name')">
                <b-input v-model="name" maxlength="50" required></b-input>
              </b-field>

              <b-field :label="$t('registerPage.surname')">
                <b-input v-model="surname" maxlength="50" required></b-input>
              </b-field>
            </div>
          </div>

          <b-field :label="$t('registerPage.birthdate')">
            <b-datepicker v-model="birthdate" icon="calendar" required></b-datepicker>
          </b-field>

          <b-field :label="$t('registerPage.address')">
            <b-input v-model="street" type="text" maxlength="50" required></b-input>
          </b-field>

          <div class="field is-horizontal">
            <div class="field-body">
              <b-field :label="$t('registerPage.NPA')">
                <b-input v-model="npa" type="number"  max="9999"  required></b-input>
              </b-field>

              <b-field :label="$t('registerPage.city')">
                <b-input v-model="city" maxlength="50" required></b-input>
              </b-field>
            </div>
          </div>

          <b-field :label="$t('registerPage.email')">
            <b-input v-model="email" type="email"  maxlength="50" required></b-input>
          </b-field>

          <div class="field">
            <b-checkbox v-model="acceptNewsletter">{{$t('registerPage.acceptNewsletter')}}</b-checkbox>
          </div>

          <div class="field">
            <b-checkbox v-model="acceptCGP">
              {{$t('registerPage.acceptCGP')}}
              <a
                :href="($router.resolve({name:'cgp'})).href"
                target="_blank"
              >CGP</a>
            </b-checkbox>
          </div>

          <b-message
            type="is-danger"
            :active.sync="mustAcceptCGP"
            has-icon
          >{{$t('register.mustAcceptCGP')}}</b-message>

          <b-message
            type="is-danger"
            :active.sync="unknownError"
            has-icon
          >{{$t('register.unknownError')}}</b-message>

          <div class="field">
            <button class="button">{{$t('registerPage.participate')}}</button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>

<script>
import QuizzStorage from '../utils/QuizzStorage'
import Participant from '../utils/Backend'
import SHA1 from 'sha1'

export default {
  name: 'Register',
  data: () => {
    return {
      name: '',
      surname: '',
      email: '',
      birthdate: new Date(),
      street: '',
      npa: '',
      city: '',
      acceptCGP: false,
      acceptNewsletter: false,
      mustAcceptCGP: false,
      unknownError: false
    }
  },
  methods: {
    register () {
      const loadComp = this.$loading.open()

      let quizzStorage = QuizzStorage.initQuizzStoage()

      // TODO VERIFI DATA

      // user Must accept CGP !!
      if (!this.acceptCGP) {
        this.mustAcceptCGP = true
        loadComp.close()
        return
      }

      this.mustAcceptCGP = false
      this.unknownError = false

      let participant = new Participant({
        name: this.name,
        surname: this.surname,
        birthdate: this.birthdate.toISOString().slice(0, 10), // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        street: this.street,
        npa: this.npa,
        email: this.email,
        canSendNewsletter: this.acceptNewsletter,
        hashAnswers: SHA1(JSON.stringify(quizzStorage.results)),
        answers: quizzStorage.results
      })

      participant
        .save()
        .then(res => {
          loadComp.close()
          this.$router.push({
            name: 'registerConfirm'
          })
        })
        .catch(() => {
          loadComp.close()
          this.unknownError = true
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
