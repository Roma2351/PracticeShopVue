<template>
  <div class="product-summ">
      <span>Колличество товаров: {{ basItem.length }}</span>
      /
      <span>Сумма товаров: {{ sumProduct }}</span>
    </div>
</template>

<script>
export default {
name: 'SumBaskets',
props: {
    basItem:{
        type:Array
    },
    sumProduct:{
        type:Number
    }
}

}
</script>

<style>

</style>