<template>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"><slot></slot></label>
    <input :type="type"  class="form-control" aria-describedby="emailHelp" v-model="value">
  </div>
</template>

<script>
export default {
name: 'custom-form',
props: ['modelValue','type'],
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
}

</script>

<style>

</style>