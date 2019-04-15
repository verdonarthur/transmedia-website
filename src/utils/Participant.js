const URL_API = 'https://intense-forest-96813.herokuapp.com/api/v1/'

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

    fetch(URL_API + '/participant/', { method: 'POST', body: this })
      .then(data => { console.log(data) })
      .catch(err => console.log(err))
  }
}
