<template>
  <div
    class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105 mt-2"
  >
    <img
      class="relative object-cover w-full h-full rounded-xl"
      :src="
        'http://10.1.1.14:8080/static/bgs/card/' +
          currentCardBackground +
          '.jpeg'
      "
      alt="Card background"
    />

    <div class="w-full px-6 absolute top-6">
      <div class="pt-1">
        <div class="font-medium tracking-more-wider text-xl">
          <p v-if="cardDetails.cardNumber">
            {{ cardDetails.cardNumber }}
          </p>
          <p v-else>#### #### #### ####</p>
        </div>
      </div>
      <div class="flex justify-between text-md">
        <div class="font-medium tracking-widest mt-20">
          <p v-if="cardDetails.cardholderName">
            {{ cardDetails.cardholderName }}
          </p>
          <p v-else class="uppercase">
            Cardholder name
          </p>
        </div>
        <img class="w-20 h-20" :src="getCardType" alt="Card logo" />
      </div>
      <div class="pt-6 pr-6">
        <div class="flex justify-between">
          <div class="font-light tracking-wider text-md">
            <p v-if="cardDetails.expirationDate">
              {{ cardDetails.expirationDate }}
            </p>
            <p v-else>MM/YY</p>
          </div>

          <div class="font-light text-md">
            <p v-if="cardDetails.cvv" class="">
              {{ cardDetails.cvv }}
            </p>
            <p v-else>CVV</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PaymentFormDebitCard',
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 15 + 1),
      uz: false
    }
  },
  props: {
    cardDetails: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapState(['card']),
    getCardType() {
      if (this.cardDetails.cardNumber === null)
        return ''
      if (this.cardDetails.cardNumber.startsWith('9860'))
        return 'http://10.1.1.14:8080/static/schemes/humo.svg'
      if (this.cardDetails.cardNumber.startsWith('5'))
        return 'http://10.1.1.14:8080/static/schemes/mastercard.svg'
      if (this.cardDetails.cardNumber.startsWith('8600'))
        return 'http://10.1.1.14:8080/static/schemes/uzcard.svg'
      if (this.cardDetails.cardNumber.startsWith('4'))
        return 'http://10.1.1.14:8080/static/schemes/visa.svg'
      return ''
    }
  },
  created() {
    this.$store.dispatch('card/getCardTypes')
  }
}
</script>
