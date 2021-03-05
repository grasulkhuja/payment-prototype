<template>
  <div class="flex flex-col items-center mt-4 pt-4 md:shadow-lg md:w-2/5 mr-1">
    <!--  LOGO  -->
    <img
      class="rounded-full"
      src="https://androidinsider.ru/wp-content/uploads/2018/06/aliexpress.png"
      alt="Store logo"
      width="150"
      height="150"
    />
    <p class="text-gray-700 mt-2 mb-5">AliExpress</p>
    <p class="text-gray-800 mt-4 text-6xl text-opacity-80 my-6">
      {{ form.formInfo.total }} {{ form.formInfo.currency }}
    </p>
    <!--  TRANSACTION NUMBER  -->
    <div
      class="border-2 border-b-0 border-l-0 border-r-0 border-dotted flex justify-between w-full px-6 mt-4 pt-3 text-gray-700 text-opacity-80"
    >
      <p class="mr-2">
        Trans. #458
      </p>
      <p>Visa 1234</p>
    </div>
    <!-- ORDERS  -->
    <div
      class="border-2 border-b-0 border-l-0 border-r-0 border-dotted flex flex-col w-full px-6 mt-4 pt-3 text-opacity-90"
    >
      <ul>
        <li
          class="flex flex-col w-full"
          v-for="(good, index) in form.formInfo.goods"
          :key="index"
        >
          <div class="flex w-full justify-between">
            <p>{{ good.name }}</p>
            <p>{{ good.amount }}</p>
          </div>
          <ul class="text-gray-800 text-opacity-80">
            <li class="flex w-full justify-between px-4">
              <p>Subtotal</p>
              <p>$9.00</p>
            </li>
            <li class="flex w-full justify-between px-4">
              <p>Sales tax(8.41%)</p>
              <p>$0.76</p>
            </li>
            <li class="flex w-full justify-between px-4">
              <p>Tip</p>
              <p>$1.46</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--  TOTAL  -->
    <div
      class="flex w-full justify-between px-6 mt-6 border-2 border-dotted border-b-0 border-l-0 border-r-0 pt-6"
    >
      <p>Total</p>
      <p>{{ form.formInfo.total }} {{ form.formInfo.currency }}</p>
    </div>
    <!--  STORE INFO  -->
    <div class="mt-auto mb-2">
      Store info
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PaymentReceipt',
  created() {
    this.$store.dispatch(
      'form/getFormInfo',
      'ab79f7c4-5806-49b7-a7a9-50f775b39bca'
    )
  },
  computed: {
    ...mapState(['form'])
  }
}
</script>

<style scoped></style>
