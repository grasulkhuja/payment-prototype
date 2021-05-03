import ApiService from '@/services/ApiService'

export const namespaced = true

export const state = {}

export const mutations = {}

export const actions = {
  async getSMS(context, { challengeId }) {
    try {
      const response = await ApiService.getSMS(challengeId)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  },

  async sendOTPCode(context, { challengeId, otpCode, trialid }) {
    try {
      const response = await ApiService.sendOTPCode(
        challengeId,
        otpCode,
        trialid
      )
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const getters = {}
