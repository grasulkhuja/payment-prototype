<template>
  <button
    v-on="$listeners"
    v-bind="$attrs"
    class="block py-2 my-6 rounded-md bg-blue-700 bg-opacity-90 text-white w-full md:w-2/5 mx-auto hover:bg-blue-600 hover:bg-opacity-95"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style scoped></style>
