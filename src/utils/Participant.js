import axios from 'axios'

// const URL_API = 'http://localhost:8000/api/v1/'
const URL_API = 'http://intense-forest-96813.herokuapp.com/api/v1/'

export default class Participant {
  constructor (participant) {
    this.name = participant.name
    this.surname = participant.surname
    this.birthdate = participant.birthdate
    this.street = participant.street
    this.npa = participant.npa
    this.email = participant.email
    this.canSendNewsletter = participant.canSendNewsletter
    this.hashAnswers = participant.hashAnswers
    this.answers = participant.answers
  }

  save () {
    console.log('------- PARTICIPANT OBJECT --------\n', this)
    console.log(JSON.stringify(this))

    return axios.post(URL_API + 'participant', this)
  }
}
