<template>
  <div class="flex flex-col container mx-auto md:flex-row">
    <PaymentReceipt />
    <PaymentForm />
  </div>
</template>

<script>
export default {
  name: 'Payment',
  components: {
    PaymentReceipt: () => import('@/components/PaymentReceipt'),
    PaymentForm: () => import('@/components/PaymentForm')
  }
}
</script>
