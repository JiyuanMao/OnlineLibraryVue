import Api from '@/services/api'

export default {
  getComments (bookname) {
    return Api().get('/comments/' + bookname)
  },
  newComment (comment) {
    return Api().post('/comments', comment)
  },
  getByUserName (username) {
    return Api().get('/comments/user/' + username)
  },
  updateComment (comment) {
    return Api().put('/comments/' + comment._id, comment)
  },
  deleteComment (comment) {
    return Api().delete('/comments/' + comment._id)
  }
}
