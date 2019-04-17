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
              <b-input v-model="name" required></b-input>
            </b-field>

            <b-field :label="$t('registerPage.surname')">
              <b-input v-model="surname" value="johnsilver" maxlength="30" required></b-input>
            </b-field>
          </div>
        </div>

        <b-field :label="$t('registerPage.birthdate')">
          <b-datepicker v-model="birthdate" icon="calendar" required></b-datepicker>
        </b-field>

        <div class="field is-horizontal">
          <div class="field-body">
            <b-field :label="$t('registerPage.city')">
              <b-input v-model="city" required></b-input>
            </b-field>

            <b-field :label="$t('registerPage.NPA')">
              <b-input v-model="npa" type="number" value="1000" max="9999" required></b-input>
            </b-field>
          </div>
        </div>

        <b-field :label="$t('registerPage.address')">
          <b-input v-model="street" type="text" value="ch. de l'oiseau 3" maxlength="50" required></b-input>
        </b-field>

        <b-field :label="$t('registerPage.email')">
          <b-input v-model="email" type="email" value="john@example.ch" maxlength="30" required></b-input>
        </b-field>

        <div class="field">
          <b-checkbox v-model="acceptNewsletter">{{$t('registerPage.acceptNewsletter')}}</b-checkbox>
        </div>

        <div class="field">
          <b-checkbox v-model="acceptCGU">{{$t('registerPage.acceptCGU')}}</b-checkbox>
        </div>

        <b-message
          type="is-danger"
          :active.sync="mustAcceptCGU"
          has-icon
        >{{$t('register.mustAcceptCGU')}}</b-message>

        <b-message
          type="is-danger"
          :active.sync="unknownError"
          has-icon
        >{{$t('register.unknownError')}}</b-message>

        <div class="field">
          <button class="button" >{{$t('registerPage.participate')}}</button>
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
      acceptCGU: false,
      acceptNewsletter: false,
      mustAcceptCGU: false,
      unknownError: false
    }
  },
  methods: {
    register () {
      const loadComp = this.$loading.open()

      let quizzStorage = QuizzStorage.initQuizzStoage()

      // TODO VERIFI DATA

      // user Must accept CGU !!
      if (!this.acceptCGU) {
        this.mustAcceptCGU = true
        loadComp.close()
        return
      }

      this.mustAcceptCGU = false
      this.unknownError = false

      let participant = new Participant({
        name: this.name,
        surname: this.surname,
        birthdate: this.birthdate.toISOString().slice(0, 10), // https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
        street: this.street,
        npa: this.npa,
        email: this.email,
        canSendNewsletter: this.acceptNewsletter,
        hashAnswers: SHA1(quizzStorage.results),
        answers: quizzStorage.results
      })

      participant.save().then(res => {
        loadComp.close()
        this.$router.push({
          name: 'registerConfirm'
        })
      }).catch(() => {
        loadComp.close()
        this.unknownError = true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
 
}
</style>
