import Api from '@/services/api'

export default {
  userLogin (user) {
    return Api().post('/users/login', user)
  },
  userRegister (user) {
    user.usertype = 'user'
    return Api().post('/users', user)
  }
}
