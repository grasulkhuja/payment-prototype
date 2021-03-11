<template>
  <div class="flex flex-col mt-4 items-center w-full shadow-md">
    <form @submit.prevent="SendOTP" class="flex flex-col">
      <label class="mt-4 flex flex-col" for="otp">
        <span class="block mb-2 text-gray-800 text-opacity-80">
          Введите код подтверждения
        </span>
      </label>
      <input
        type="text"
        id="otp"
        class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block mb-4"
        placeholder="----"
        required
        v-model="otp"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaymentACSForm',
  data() {
    return {
      otp: ''
    }
  },
  methods: {
    sendOTP() {}
  }
}
</script>
