import ApiService from '@/services/ApiService'

export const namespaced = true

export const state = {}
export const mutations = {}
export const actions = {
  async getSMS(context, { acsId }) {
    try {
      console.log(acsId)
      const response = await ApiService.getSMS(acsId)
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  },

  async sendOTPCode(context, credentials) {
    try {
      const response = await ApiService.sendOTPCode(credentials)
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }
}
export const getters = {}
