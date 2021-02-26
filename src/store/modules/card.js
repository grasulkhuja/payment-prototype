import ApiService from '@/services/ApiService'

export const namespaced = true

export const state = {
  cardTypes: []
}
export const mutations = {
  SET_CARD_TYPES(state, cardTypes) {
    state.cardTypes = cardTypes
  }
}
export const actions = {
  async getCardTypes({ commit }) {
    try {
      const response = await ApiService.getCardTypes()
      commit('SET_CARD_TYPES', response.data.schemes)
    } catch (error) {
      console.log(error.message)
    }
  }
}
export const getters = {}
