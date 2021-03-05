import ApiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  formInfo: {}
}

export const mutations = {
  SET_FORM_INFO(state, formInfo) {
    state.formInfo = formInfo
  }
}

export const actions = {
  async getFormInfo({ commit }, uuid) {
    try {
      const response = await ApiService.getFormInfo(uuid)
      commit('SET_FORM_INFO', response.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async pay(context, { uuid, pan }) {
    try {
      await ApiService.pay(uuid, pan)
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getters = {}
