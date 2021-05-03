import ApiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  receiptInfo: {}
}

export const mutations = {
  SET_RECEIPT_INFO(state, receiptInfo) {
    state.receiptInfo = receiptInfo
  }
}

export const actions = {
  async getReceiptInfo({ commit }, uuid) {
    try {
      const response = await ApiService.getReceiptInfo(uuid)
      commit('SET_RECEIPT_INFO', response.data)
    } catch (error) {
      console.log(error.message)
    }
  },
  async pay(context, { uuid, cardDetails }) {
    try {
      const response = await ApiService.pay(uuid, cardDetails)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getters = {
  getReceiptInfo(state) {
    return state.receiptInfo
  }
}
