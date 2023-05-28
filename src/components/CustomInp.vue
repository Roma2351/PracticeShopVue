<template>
      <input v-model="value" type="number">

</template>

<script>
export default {
  name: "CustomInp",
  props: ['modelValue'],
  emits: ['update:modelValue'],

  
  data(){
    return {
     
    }
  },

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
};
</script>

<style></style>
