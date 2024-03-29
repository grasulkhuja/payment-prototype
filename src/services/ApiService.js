import axios from 'axios'

axios.defaults.baseURL = 'https://10.1.1.14/api/'
axios.defaults.headers.common['Accept'] = `application/json`
axios.defaults.headers.common['Content-Type'] = `application/json`
axios.defaults.withCredentials = false
axios.defaults.timeout = 20000

// form/info/<uuid> - url для платёжной формы
// orders/<uuid>/pay - данные туда отправятся после нажатия кнопки сабмит

export default {
  async getReceiptInfo(uuid) {
    return await axios.get('/form/info/' + uuid)
  },

  async pay(uuid, cardDetails) {
    return await axios.post('/order/' + uuid + '/pay', cardDetails)
  },

  async getSMS(challengeId) {
    return await axios.get('/acs/challenge/' + challengeId)
  },

  async sendOTPCode(acsId, otp, trialid) {
    return await axios.post('/acs/challenge/' + acsId + '/', {
      otp,
      trialid
    })
  }
}
