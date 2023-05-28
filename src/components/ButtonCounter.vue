<template>
  <button @click="count++">
      Счётчик кликов — {{ count }}
    </button>
</template>

<script>
export default {
name: 'ButtonCounter',

data() {
    return {
      count: 0
    }
  },

}

</script>

<style>

</style>