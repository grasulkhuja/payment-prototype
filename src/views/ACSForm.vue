<template>
  <PaymentACSForm />
</template>

<script>
export default {
  name: 'ACSForm',
  components: {
    PaymentACSForm: () => import('@/components/PaymentACSForm.vue')
  }
}
</script>
