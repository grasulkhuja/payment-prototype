<template>
  <div>
    <label class="mt-4 flex flex-col" :for="id" v-if="label">
      <span class="block mb-2 text-gray-800 text-opacity-80">
        {{ label }}
      </span>
    </label>
    <input
      :type="type"
      :id="id"
      class="rounded-lg w-full placeholder-gray-800 placeholder-opacity-75 block mb-4"
      :placeholder="label"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      autocomplete="off"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
