<template>
  <div>

    <select v-model="value" class="product-selected">
    <option v-for="option in options" :key="option">
    {{ option }}</option>
    </select>
    </div>

</template>

<script>
export default {
name:'DropDown',
props: {
    options: {
        type: Array
    },
    modelValue:'' 
},
emits: ['update:modelValue'],

computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>

<style>

</style>