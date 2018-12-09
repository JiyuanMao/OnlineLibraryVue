import Api from '@/services/api'

export default {
  getBooks () {
    return Api().get('/books')
  },
  addBook (book) {
    return Api().post('/books/', book)
  },
  deleteBook (id) {
    return Api().delete('/books/' + id)
  },
  getBookInfo(bookname) {
    return Api().get('/books/bname/' + bookname)
  }
}
