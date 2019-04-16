<template>
  <section class="loginBackend section">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{$t('backend.helloAdmin')}}</h1>
        </div>
      </div>
    </section>
    <div class="box">
      <b-table
        v-if="participants!=[]"
        :data="participants"
        :columns="columns"
        :striped="true"
        :narrowed="true"
        :hoverable="true"
        :paginated="true"
        :per-page="perPage"
        :current-page.sync="current"
      ></b-table>
      <a class="button" download="data.csv" :href="dataURL">{{$t('backend.exportCSV')}}</a>
    </div>
  </section>
</template>

<script>
import { User, Participant, convertToCSV } from '../../utils/Backend'

export default {
  data () {
    return {
      participants: [],
      current: 1,
      perPage: 20,
      dataURL: '',
      columns: [
        {
          field: 'name',
          label: this.$t('backend.fieldName')
        },
        {
          field: 'surname',
          label: this.$t('backend.fieldSurname')
        },
        {
          field: 'birthdate',
          label: this.$t('backend.fieldBirthdate')
        },
        {
          field: 'street',
          label: this.$t('backend.fieldStreet')
        },
        {
          field: 'npa',
          label: this.$t('backend.fieldNPA')
        },
        {
          field: 'email',
          label: this.$t('backend.fieldEmail')
        },
        {
          field: 'canSendNewsletter',
          label: this.$t('backend.fieldCanSendNewsltetter')
        }
      ]
    }
  },
  mounted () {
    if (!User.getToken()) {
      this.$router.push({ name: 'login' })
    }

    Participant.getAll().then(data => {
      this.participants = JSON.parse(data)

      // Create download link
      let fileData = new Blob([convertToCSV(this.participants)], { type: 'data:text/csv;charset=utf-8;' })

      let url = URL.createObjectURL(fileData)
      this.dataURL = url
    })
      .catch((err) => {
        console.log(err)
        this.$router.push({ name: 'login' })
      })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
