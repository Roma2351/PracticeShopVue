<template>
      <input
        class="product-order__name"
        type="text"
        :placeholder="placeholder"
        v-model="value"
      />
</template>

<script>


export default {
name: 'placeholder-input',
props: ['modelValue', 'placeholder'],
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

.product-order__name{
    margin-top: 5px;
    border-radius: 12px;
    border: ridge;
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
    cursor: pointer;
}

.product-order__name:hover{
    background-color: #faf2f2;
    border: 3px solid #1c62cd
}

.product-order__addres{
    margin-top: 5px;
    border-radius: 12px;
    border: ridge;
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
    cursor: pointer;
}
.product-order__addres:hover{
    background-color: #faf2f2;
    border: 3px solid #1c62cd
}
</style>