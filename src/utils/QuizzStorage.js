const STORAGE_QUIZZ_NAME = 'QuizzStorage'

export default class QuizzStorage {
  constructor (results = {}) {
    this.results = results
  }

  saveResults (idQuestion, result) {
    this.results[idQuestion] = { idQuestion: idQuestion, hashAnswer: result }
    this.save()
  }

  static initQuizzStoage () {
    let savedQuizzStorage = JSON.parse(localStorage.getItem(STORAGE_QUIZZ_NAME))
    if (savedQuizzStorage) {
      return new QuizzStorage(savedQuizzStorage.results)
    } else {
      return new QuizzStorage()
    }
  }

  save () {
    localStorage.setItem(STORAGE_QUIZZ_NAME, JSON.stringify(this))
  }
}
