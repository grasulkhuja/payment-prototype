<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-2xl">
    <PaymentFormDebitCard
      :cardDetails="cardDetails"
    />
    <form @submit.prevent="" class="px-6 w-full md:w-2/3">
      <label class="my-4 flex flex-col" for="cardNumber">
        <span class="block mb-2 text-gray-800 text-opacity-80"
          >Card number</span
        >
        <input
          type="text"
          id="cardNumber"
          class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block"
          placeholder="Card number"
          required
          v-model="cardDetails.cardNumber"
          v-mask="cardDetails.cardNumberMask"
        />
      </label>
      <label for="cardholderName">
        <span class="block mb-2 text-gray-800 text-opacity-80"
          >Cardholder name</span
        >
        <input
          type="text"
          id="cardholderName"
          placeholder="Cardholder name"
          required
          class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block"
          v-model="cardDetails.cardholderName"
        />
      </label>
      <div class="flex w-full justify-between mt-4">
        <label for="expirationDate" class="mr-4">
          <span class="block mb-2 text-gray-800 text-opacity-80"
            >Expiration date</span
          >
          <input
            type="text"
            id="expirationDate"
            placeholder="MM/YY"
            class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75"
            required
            v-model="cardDetails.expirationDate"
            v-mask="cardDetails.expirationDateMask"
          />
        </label>
        <label for="cvv">
          <span class="block mb-2 text-gray-800 text-opacity-80">CVV</span>
          <input
            type="text"
            id="cvv"
            placeholder="CVV"
            class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75"
            required
            v-model="cardDetails.cvv"
            v-mask="cardDetails.cvvMask"
            maxlength="4"
          />
        </label>
      </div>
      <button
        type="submit"
        class="block py-2 my-6 rounded-md bg-blue-700 bg-opacity-90 text-white w-full md:w-2/5 mx-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentForm',
  components: {
    PaymentFormDebitCard: () => import('@/components/PaymentFormDebitCard.vue')
  },
  data() {
    return {
      cardDetails: {
        cardNumber: null,
        cardNumberMask: '#### #### #### ####',
        cardholderName: '',
        expirationDate: null,
        expirationDateMask: '##/##',
        cvv: null,
        cvvMask: '####'
      }
    }
  }
}
</script>
