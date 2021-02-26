<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-2xl">
    <PaymentFormDebitCard
      class="invisible md:visible"
      :cardDetails="cardDetails"
    />
    <form @submit.prevent="" class="px-6 w-full">
      <label class="my-4 flex flex-col" for="cardNumber">
        <span class="block">Card number</span>
        <input
          type="text"
          id="cardNumber"
          class="rounded w-full placeholder-gray-800 placeholder-opacity-75 block"
          placeholder="Card number"
          required
          v-model="cardDetails.cardNumber"
          v-mask="cardDetails.cardNumberMask"
        />
      </label>
      <label for="cardholderName">
        <span class="block">Cardholder name</span>
        <input
          type="text"
          id="cardholderName"
          placeholder="Cardholder name"
          required
          class="rounded w-full placeholder-gray-800 placeholder-opacity-75"
          v-model="cardDetails.cardholderName"
        />
      </label>
      <div class="flex w-full justify-between mt-4">
        <label for="expirationDate" class="mr-4">
          <span class="block">Expiration date</span>
          <input
            type="text"
            id="expirationDate"
            placeholder="Expiration date"
            class="rounded w-full placeholder-gray-800 placeholder-opacity-75"
            required
            v-model="cardDetails.expirationDate"
            v-mask="cardDetails.expirationDateMask"
          />
        </label>
        <label for="cvv">
          <span class="block">CVV</span>
          <input
            type="text"
            id="cvv"
            placeholder="CVV"
            class="rounded w-full placeholder-gray-800 placeholder-opacity-75"
            required
            v-model="cardDetails.cvv"
            v-mask="cardDetails.cvvMask"
            maxlength="4"
          />
        </label>
      </div>
      <button
        type="submit"
        class="block py-2 my-6 rounded-md bg-blue-800 text-white w-full md:w-2/5 mx-auto"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import PaymentFormDebitCard from '@/components/PaymentFormDebitCard'
export default {
  name: 'PaymentForm',
  components: { PaymentFormDebitCard },
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
