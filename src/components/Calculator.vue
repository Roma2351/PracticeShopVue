<template>
<div class="container">
<div class="calculator">
    <input type="text" class="calc-numbers" v-model="numberInput">
    <div class="calculator-buttons">
        <button @click="reset()" class="btn is-clear span-1 orange operator">C</button>
        <button @click="signs(op)" v-for="op in operation" :key="op"  class="btn is-clear span-1 orange operator">{{ op }}</button>
        <button @click="subtractionSigns(num)" v-for="num in numbers" :key="num" class="btn">{{ num }}</button>
        <button @click="calc()" class="btn span-3">=</button>
        <button @click="backspaceNum()" class="btn orange operator">&larr;</button>
</div>
</div>

</div>

</template>

<script>
export default {
name: 'Calculator',
props:{
    
},
data(){
    return{
       numbers: [1,2,3,4,5,6,7,8,9,0,'.'],
       operation:['+','-','*',"/"],
       numberInput: '',
       sign:null,
       number:null,
    }
},

methods: {
subtractionSigns(numb){
    this.numberInput = this.numberInput
    this.numberInput += numb
    console.log(numb); 
    },
signs(numb){
     this.sign = numb
     this.number = this.numberInput
     this.numberInput = ''
    },
calc(){
    if(this.sign == '+'){
      const equal = Number(this.numberInput)
      this.numberInput = Number(this.number) + equal
    }if(this.sign == '-'){
      const equal = Number(this.numberInput)
      this.numberInput = Number(this.number) - equal
    }if(this.sign == '*'){
      const equal = Number(this.numberInput)
      this.numberInput = Number(this.number) * equal
    }if(this.sign == '/'){
      const equal = Number(this.numberInput)
      this.numberInput = Number(this.number) / equal
    }
    this.numberInput = this.numberInput
    console.log(this.numberInput);
},
reset(){
    this.numberInput = ''
},
backspaceNum(){
   this.numberInput = this.numberInput.slice(0, -1)
}    
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

/* quick reset so all our padding is the right size */
* {
  box-sizing: border-box;
}

.calculator{
    max-width:292px;
    background: #eee;
}
.calculator-buttons{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    border:0;
}
.calc-numbers{
    font-family: 'Space Mono', serif;
    background: black;
    color: white;
    font-size: 2em;
    border:0;
    padding: 0.3em;
    text-align: right;
    width: 104.3%;
    height: 100px;
}
.span-2{
    grid-column: span 2;
}
.span-3{
    grid-column: span 3;
}
.btn{
    font-size:1em;
    height: 65px;
    border:1px solid black;
}
.btn:hover{
    background: #fff;
}
.orange{
    background-color:orange;
}
</style>