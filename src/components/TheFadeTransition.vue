<template>
  <transition name="fade" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'TheFadeTransition'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
