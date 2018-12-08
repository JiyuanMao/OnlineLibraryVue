import Api from '@/services/api'

export default {
  getBooks () {
    return Api().get('/books')
  }
  // fetchDonation (id) {
  //   return Api().get(`/donations/${id}`)
  // },
  // postDonation (donation) {
  //   return Api().post('/donations', donation,
  //     { headers: {'Content-type': 'application/json'} })
  // },
  // putDonation (id, donation) {
  //   console.log('REQUESTING ' + donation._id + ' ' + JSON.stringify(donation, null, 5))
  //   return Api().put(`/donations/${id}`, donation,
  //     { headers: {'Content-type': 'application/json'} })
  // },
  // deleteDonation (id) {
  //   return Api().delete(`/donations/${id}`)
  // },
  // upvoteDonation (id) {
  //   return Api().put(`/donations/${id}/vote`)
  // }
}
