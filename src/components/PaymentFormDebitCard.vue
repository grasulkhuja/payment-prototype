<template>
  <div
    class="w-72 h-52 sm:w-96 sm:h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105 mt-2"
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
          <p v-if="cardDetails.pan">
            {{ cardDetails.pan }}
          </p>
          <p v-else>#### #### #### ####</p>
        </div>
      </div>
      <div class="flex justify-between text-md">
        <div class="font-medium tracking-widest mt-20">
          <p v-if="cardDetails.cardholderName">
            {{ cardDetails.cardholderName }}
          </p>
          <p v-else class="hidden">CARDHOLDER NAME</p>
        </div>

        <transition name="slide-fade">
          <img
            class="w-20 h-20"
            :src="cardType"
            alt="Card type"
            v-if="cardType"
          />
        </transition>
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

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  //margin-top: -50px;
  opacity: 0;
}
</style>
