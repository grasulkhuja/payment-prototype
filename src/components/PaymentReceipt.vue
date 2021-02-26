<template>
  <div class="flex flex-col items-center mt-4 pt-4 md:shadow-2xl md:w-2/5 mr-1">
    <img
      class="rounded-full"
      src="https://androidinsider.ru/wp-content/uploads/2018/06/aliexpress.png"
      alt="Store logo"
      width="150"
      height="150"
    />
    <p class="mb-0 text-gray-700 mt-2 mb-5">AliExpress</p>
    <p class="text-gray-800 mt-4 text-6xl text-opacity-80 my-6">$11.22</p>
    <div
      class="border-2 border-b-0 border-l-0 border-r-0 border-dotted flex justify-between w-full px-6 mt-4 pt-3 text-gray-700 text-opacity-80"
    >
      <p class="mr-2">
        Trans. #458
      </p>
      <p>Visa 1234</p>
    </div>
    <div
      class="border-2 border-b-0 border-l-0 border-r-0 border-dotted flex flex-col w-full px-6 mt-4 pt-3 text-opacity-90"
    >
      <div class="flex w-full justify-between">
        <p>Sausage - Lunch</p>
        <p>$9.00</p>
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
    </div>
    <div
      class="flex w-full justify-between px-6 mt-6 border-2 border-dotted border-b-0 border-l-0 border-r-0 pt-6"
    >
      <p>Total</p>
      <p>$11.22</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentReceipt'
}
</script>

<style scoped></style>
