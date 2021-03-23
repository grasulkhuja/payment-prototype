import Vue from 'vue'
import Vuex from 'vuex'

import * as payment from '@/store/modules/payment.js'
import * as acsForm from '@/store/modules/acsForm.js'
import * as result from '@/store/modules/result.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    payment,
    acsForm,
    result
  }
})
