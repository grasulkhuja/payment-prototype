<template>
  <div
    class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-105"
  >
    <img
      class="relative object-cover w-full h-full rounded-xl"
      src="https://i.imgur.com/kGkSg1v.png"
      alt=""
    />

    <div class="w-full px-8 absolute top-8">
      <div class="pt-1">
        <div class="font-medium tracking-more-wider mb-2">
          <p v-if="cardDetails.cardNumber">
            {{ cardDetails.cardNumber }}
          </p>
          <p v-else>#### #### #### ####</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="">
          <p class="font-light">
            Name
          </p>
          <p class="font-medium tracking-widest">
            Karthik P
          </p>
        </div>
        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" alt="" />
      </div>
      <div class="pt-6 pr-6">
        <div class="flex justify-between">
          <div class="">
            <p class="font-light text-xs text-xs">
              Expiry
            </p>
            <p class="font-medium tracking-wider text-sm">
              03/25
            </p>
          </div>

          <div class="">
            <p class="font-light text-xs">
              CVV
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentFormDebitCard',
  props: {
    cardDetails: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped></style>
