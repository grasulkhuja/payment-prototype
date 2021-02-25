<template>
  <div class="flex flex-col container mx-auto">
    <PaymentReceipt />
    <PaymentForm />
  </div>
</template>

<script>
export default {
  name: 'Payment',
  components: {
    PaymentForm: () => import('@/components/PaymentForm'),
    PaymentReceipt: () => import('@/components/PaymentReceipt')
  }
}
</script>
