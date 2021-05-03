<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-md">
    <form @submit.prevent="submitOTPCode" class="flex flex-col">
      <base-input
        label="Введите код подтверждения"
        type="text"
        id="otp"
        placeholder="--- ---"
        v-model="otpCode"
        v-mask="masks.otpMask"
      />
      <base-button type="submit">Submit</base-button>
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
