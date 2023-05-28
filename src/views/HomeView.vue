<template>

<div class="homePage">
  <carusel-item :carouselData="sliderItems" :curSlider="currentSlider"></carusel-item>
    <button @click="nextSlider">Netx</button>
    <button @click="prevSlider">Prev</button>
</div>
</template>

<script>

import CaruselItem from '@/components/CaruselItem.vue'
export default {
  name: "HomeView",
  components:{CaruselItem},
 

  data(){
    return {
      sliderItems: [
        {id:1, name:'img1', img:'1.jpg'},
        {id:2, name:'img2', img:'2.jpg'},
        {id:3, name:'img3', img:'3.jpg'},
        {id:4, name:'img4', img:'4.jpg'},
      ],

      currentSlider: 1,
      intervals: false,
      intrvalName: null,
      item:{}
      
    }
  },

  methods: {
     nextSlider(){
      this.intervals = true
      if(this.currentSlider >= this.sliderItems.length){
         this.currentSlider = 1
      }else{
        this.currentSlider+=1
      }
     },

     prevSlider(){
      if(this.currentSlider > 1){
        this.currentSlider -=1
      }else{
        this.currentSlider = this.sliderItems.length
        
      }

      
     }
  },
  watch: {
    intervals(value){
      if(value = true){
        clearInterval(this.intrvalName)
      }
  },
  },
  mounted(){
         
        if(this.currentSlider > 0){
          this.intrvalName = setInterval(() =>{
            this.nextSlider()}, 2000)
        }

       
  },
 
}
</script>

<style>

</style>
