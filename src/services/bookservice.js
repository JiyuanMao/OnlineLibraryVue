import Api from '@/services/api'

export default {
  getBooks () {
    return Api().get('/books')
  },
  addBook (book) {
    return Api().post('/books/', book)
  }
}
