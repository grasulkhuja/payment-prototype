<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-sm">
    <PaymentFormDebitCard :cardDetails="cardDetails" :card-type="getCardType" />
    <form @submit.prevent="pay" class="px-6 w-full md:w-2/3">
      <base-input
        label="Card number"
        type="text"
        id="pan"
        v-model="cardDetails.pan"
        v-mask="masks.panMask"
      />
      <transition name="slide-fade">
        <div v-if="hasCVV">
          <base-input
            label="Cardholder name"
            type="text"
            id="cardholderName"
            placeholder="Cardholder name"
            v-model="cardDetails.cardholderName"
          />
        </div>
      </transition>
      <div class="flex w-full justify-between mt-4">
        <base-input
          label="Expiration date"
          type="text"
          id="cardholderName"
          placeholder="MM/YY"
          v-model="cardDetails.expirationDate"
          v-mask="masks.expirationDateMask"
        />
        <transition name="slide-fade">
          <div v-if="hasCVV">
            <base-input
              label="CVV"
              type="text"
              id="cvv"
              placeholder="CVV"
              v-model="cardDetails.expirationDate"
              v-mask="masks.cvvMask"
            />
          </div>
        </transition>
      </div>
      <base-button type="submit">Submit</base-button>
    </form>
    <form id="hiddenForm" method="post" :action="this.url" ref="MPSForm">
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
  name: 'PaymentForm',
  data() {
    return {
      masks: {
        panMask: '#### #### #### ####',
        expirationDateMask: '##/##',
        cvvMask: '####'
      },
      cardDetails: {
        pan: '',
        cardholderName: '',
        expirationDate: null,
        cvv: null
      },
      url: '',
      data: {},
      year: '',
      month: ''
    }
  },
  components: {
    PaymentFormDebitCard: () => import('@/components/PaymentFormDebitCard.vue')
  },
  methods: {
    pay() {
      this.year = this.cardDetails.expirationDate.substr(0, 2)
      this.month = this.cardDetails.expirationDate.substr(3, 2)
      this.cardDetails.expirationDate = this.year + this.month
      this.$store
        .dispatch('payment/pay', {
          uuid: this.$route.params.orderId,
          cardDetails: this.cardDetails
        })
        .then(response => {
          if (response.challengeid) {
            this.$router.push('/acs/challenge/' + response.challengeid)
            return
          }
          if (response.url) {
            this.data = response.resources
            this.url = response.url
          }
          this.cardDetails.expirationDate = this.year + '/' + this.month
        })
        .then(() => {
          if (this.data) {
            this.$refs.MPSForm.submit()
          }
        })
    }
  },
  computed: {
    getCardType() {
      if (this.cardDetails.pan.startsWith('8600'))
        return 'https://10.1.1.14/static/schemes/logos/uzcard.svg'
      if (this.cardDetails.pan.startsWith('9860'))
        return 'https://10.1.1.14/static/schemes/logos/humo.svg'
      if (this.cardDetails.pan.startsWith('5'))
        return 'https://10.1.1.14/static/schemes/logos/mastercard.svg'
      if (this.cardDetails.pan.startsWith('4'))
        return 'https://10.1.1.14/static/schemes/logos/visa.svg'
      return ''
    },
    hasCVV() {
      return (
        this.cardDetails.pan.startsWith('5') ||
        this.cardDetails.pan.startsWith('4')
      )
    }
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  margin-top: -90px;
  opacity: 0;
}
</style>
