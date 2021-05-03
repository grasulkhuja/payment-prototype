<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-md">
    <form @submit.prevent="submitOTPCode" class="flex flex-col">
      <label class="mt-4 flex flex-col" for="otp">
        <span class="block mb-2 text-gray-800 text-opacity-80">
          Введите код подтверждения
        </span>
      </label>
      <input
        type="text"
        id="otp"
        class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block mb-4"
        placeholder="--- ---"
        required
        v-model="otpCode"
        v-mask="masks.otpMask"
      />
      <button
        type="submit"
        class="block py-2 my-6 rounded-md bg-blue-700 bg-opacity-90 text-white w-full md:w-2/5 mx-auto hover:bg-blue-600 hover:bg-opacity-95"
      >
        Submit
      </button>
    </form>
    <form id="hiddenForm" method="post" :action="this.url" ref="acsForm">
      <input
        type="hidden"
        v-for="(data, index) in this.data"
        :name="index"
        :value="data"
        :key="index"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentACSForm',
  data() {
    return {
      otpCode: null,
      trialId: null,
      masks: {
        otpMask: '### ###'
      },
      url: ''
    }
  },
  created() {
    this.$store
      .dispatch('acsForm/getSMS', {
        challengeId: this.$route.params.challengeId
      })
      .then(response => {
        this.trialId = response.trialid
      })
  },
  methods: {
    submitOTPCode() {
      this.$store
        .dispatch('acsForm/sendOTPCode', {
          challengeId: this.$route.params.challengeId,
          otpCode: this.otpCode,
          trialid: this.trialId
        })
        .then(response => {
          this.data = response.resources
          this.url = response.url
        })
        .then(() => {
          this.$refs.acsForm.submit()
        })
    }
  }
}
</script>
