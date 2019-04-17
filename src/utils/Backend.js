import axios from 'axios'

// const URL_API = 'http://localhost:8000/api/v1/'
const URL_API = 'https://intense-forest-96813.herokuapp.com/api/v1/'
const STORAGE_USER = 'STORAGE_USER'

/**
 * Used ton convert a js object to csv
 * ref : https://medium.com/@danny.pule/export-json-to-csv-file-using-javascript-a0b7bc5b00d2
 * @param {*} objArray
 */
export function convertToCSV (objArray) {
  let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray
  let str = ''

  array.unshift(Object.keys(array[0]))

  for (let i = 0; i < array.length; i++) {
    let line = ''
    for (let index in array[i]) {
      if (line !== '') line += '; '

      line += (String(array[i][index])).replace(';', '')
    }

    str += line + '\r\n'
  }

  return str
}

export class User {
  constructor (username, password) {
    this.username = username
    this.password = password
  }

  static setToken (token) {
    localStorage.setItem(STORAGE_USER, JSON.stringify({ token: token }))
  }

  static getToken () {
    let storageUser = JSON.parse(localStorage.getItem(STORAGE_USER))
    return storageUser.token ? storageUser.token : null
  }

  login () {
    return new Promise((resolve, reject) => {
      axios.post(URL_API + `user/login?login=${this.username}&password=${this.password}`)
        .then((res) => {
          if (res.status !== 200) { reject(new Error('bad login')) } else {
            User.setToken(res.data.token)
            resolve(res.data.token)
          }
        })
        .catch(() => reject(new Error('bad request')))
    })
  }
}

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

  static getAll () {
    return new Promise((resolve, reject) => {
      axios.get(URL_API + 'participant', { headers: { Authorization: `Bearer ${User.getToken()}` } })
        .then(res => {
          if (res.status !== 200) { reject(new Error(res.data)) }

          resolve(res.data)
        }).catch(err => reject(err))
    })
  }

  save () {
    console.log('------- PARTICIPANT OBJECT --------\n', this)
    return axios.post(URL_API + 'participant', this)
  }
}

export { Participant }
