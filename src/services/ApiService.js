import axios from 'axios'

axios.defaults.baseURL = 'http://10.1.1.14/api/'
axios.defaults.headers.common['Accept'] = `application/json`
axios.defaults.headers.common['Content-Type'] = `application/json`
axios.defaults.withCredentials = false

// form/info/<uuid> - url для платёжной формы
// orders/<uuid>/pay - данные туда отправятся после нажатия кнопки сабмит

export default {
  async getFormInfo(uuid) {
    return await axios.get('/form/info/' + uuid)
  },

  async pay(uuid, credentials) {
    console.log(credentials)
    return await axios.post('/orders/' + uuid + '/pay', credentials)
  }
}
