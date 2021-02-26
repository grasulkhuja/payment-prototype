import axios from 'axios'

axios.defaults.baseURL = 'http://10.1.1.14:8080'
axios.defaults.headers.common['Accept'] = `application/json`
axios.defaults.headers.common['Content-Type'] = `application/json`

export default {
  async getCardTypes() {
    return await axios.get('/api/cards/schemes/')
  }
}
