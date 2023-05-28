<template>
  <button class="btn" @click="$emit('clicket')"><slot></slot></button>
</template>

<script>
export default {
name: "CustomBtn",

  
  

};
</script>

<style scoped>
.btn{
    background-color: aqua;
}

</style>
