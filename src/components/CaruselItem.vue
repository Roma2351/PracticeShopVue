<template>
  
 
  <div class="wrapper">
    <div class="slider"  v-for="item in carouselData" :key="item.id" >
      
        <img @click=" clickSliderImg(item)" v-if="curSlider == item.id " class="slider__img" :src=" require('../assets/images/' + item.img)" alt="">
     
      </div>
    </div>
      </template>

<script>
import router from '@/router';

export default {
name: 'CaruselItem',

props: {
    itemData: {
        type:Object,
        default:  {}
    },
    carouselData: {
        type:Array,
    },

    curSlider: {
        type:Number,
        default: 1
    }
},

data(){
  return {
    sliderCategory: null

  }
},

methods:{
  clickSliderImg(item){
    router.push({path: 'tokart'})
    console.log(item);
    if(item.id == 1){
      this.sliderCategory == "men's clothing"
    }if(item.id == 2){
      this.sliderCategory == "women's clothing"
    }if(item.id == 3){
      this.sliderCategory == "jewelery"
    }if(item.id == 4){
      this.sliderCategory == "electronics"
    }
  }
}
}
</script>

<style>

.slider{

  display: flex;
  
}
.slider__img{
  width: 100%;
  max-height: 500px;
  border-radius: 200px;
}


</style>