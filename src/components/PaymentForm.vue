<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-sm">
    <PaymentFormDebitCard :cardDetails="cardDetails" :card-type="getCardType" />
    <form @submit.prevent="pay" class="px-6 w-full md:w-2/3">
      <label class="mt-4 flex flex-col" for="pan">
        <span class="block mb-2 text-gray-800 text-opacity-80">
          Card number
        </span>
      </label>
      <input
        type="text"
        id="pan"
        class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block mb-4"
        placeholder="Card number"
        required
        v-model="cardDetails.pan"
        v-mask="masks.panMask"
      />
      <transition name="slide-fade">
        <div v-if="hasCVV">
          <label for="cardholderName">
            <span class="block mb-2 text-gray-800 text-opacity-80">
              Cardholder name
            </span>
          </label>
          <input
            type="text"
            id="cardholderName"
            placeholder="Cardholder name"
            class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block"
            v-model="cardDetails.cardholderName"
          />
        </div>
      </transition>
      <div class="flex w-full justify-between mt-4">
        <label for="expirationDate" class="mr-4">
          <span class="block mb-2 text-gray-800 text-opacity-80">
            Expiration date
          </span>
          <input
            type="text"
            id="expirationDate"
            placeholder="MM/YY"
            class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75"
            required
            v-model="cardDetails.expirationDate"
            v-mask="masks.expirationDateMask"
          />
        </label>
        <transition name="slide-fade">
          <div v-if="hasCVV">
            <label for="cvv">
              <span class="block mb-2 text-gray-800 text-opacity-80">
                CVV
              </span>
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="CVV"
              class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75"
              v-model="cardDetails.cvv"
              v-mask="masks.cvvMask"
              maxlength="4"
            />
          </div>
        </transition>
      </div>
      <button
        type="submit"
        class="block py-2 my-6 rounded-md bg-blue-700 bg-opacity-90 text-white w-full md:w-2/5 mx-auto hover:bg-blue-600 hover:bg-opacity-95"
      >
        Submit
      </button>
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
      }
    }
  },
  components: {
    PaymentFormDebitCard: () => import('@/components/PaymentFormDebitCard.vue')
  },
  methods: {
    pay() {
      this.$store
        .dispatch('payment/pay', {
          uuid: this.$route.params.orderId,
          cardDetails: this.cardDetails
        })
        .then(response => {
          // console.log(response)
          if (response.acsid) {
            this.$router.push('/acs/challenge/' + response.acsid)
            return
          }
          window.location.href = response.url
        })
    }
  },
  computed: {
    getCardType() {
      if (this.cardDetails.pan === '') return ''
      if (this.cardDetails.pan.startsWith('8600'))
        return 'http://10.1.1.14/static/schemes/logos/uzcard.svg'
      if (this.cardDetails.pan.startsWith('9860'))
        return 'http://10.1.1.14/static/schemes/logos/humo.svg'
      if (this.cardDetails.pan.startsWith('5'))
        return 'http://10.1.1.14/static/schemes/logos/mastercard.svg'
      if (this.cardDetails.pan.startsWith('4'))
        return 'http://10.1.1.14/static/schemes/logos/visa.svg'
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
