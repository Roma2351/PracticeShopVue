<template>
  <div class="calculator-button">
      <button class="button-calc" @click="$emit('clickShowCalc')"><span>Calculator</span></button>
    </div>
</template>

<script>
export default {
name:'CalculatorButton'
}
</script>

<style>

.button-calc {
  display: inline-block;
  border-radius: 6px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  /* font-size: 28px; */
  /* padding: 20px; */
  /* width: 106px; */
  transition: all 0.5s;
  cursor: pointer;
  /* margin: 5px; */
}

.button-calc span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-calc span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button-calc:hover span {
  padding-right: 25px;
}

.button-calc:hover span:after {
  opacity: 1;
  right: 0;
}

.button-calc__text{
  display: flex;
}
</style>