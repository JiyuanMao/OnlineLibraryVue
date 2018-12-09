import Api from '@/services/api'

export default {
  getComments (bookname) {
    return Api().get('/comments/' + bookname)
  },
  newComment (comment) {
    return Api().post('/comments', comment)
  }
}
