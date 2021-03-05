<template>
  <div
    class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105 mt-2"
  >
    <img
      class="relative object-cover w-full h-full rounded-xl"
      :src="
        'http://10.1.1.14:80/static/bgs/card/' + currentCardBackground + '.jpeg'
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
        <img class="w-20 h-20" :src="cardType" alt="Card type" />
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
            <p>
              {{ cardDetails.cvv }}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentFormDebitCard',
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 15 + 1)
    }
  },
  props: {
    cardDetails: {
      type: Object,
      default: () => {}
    },
    cardType: {
      type: String,
      default: () => ''
    }
  }
}
</script>
