<template>
    
    

  

</template>


<script>
import CaruselItem from './CaruselItem.vue';
export default {
name:'custom-carusel',
components: {CaruselItem},
props:{
    carouselData: {
        type:Array,
        default:() => []
    },
    intevals:{
        type: Number,
        default: 0
    }
},

data(){
    return {
        currenSlideIndex: 0
    }
},

methods: {
    prevSlide(){
        if(this.currenSlideIndex > 0){

            this.currenSlideIndex--
        }
    },
    nextSlide(){
            if(this.currenSlideIndex >= this.carouselData.length -1){
                this.currenSlideIndex = 0
            }else{
                this.currenSlideIndex++
            }
            
            console.log(this.currenSlideIndex);
        
    }
},
mounted(){
    let vm = this
    if(this.intevals > 0) {
        setInterval(function (){
            vm.nextSlide()
        }, vm.intevals)
    }
}
}
</script>

<style>
 .wraper{
    max-width: 300px;
    overflow: hidden; 
}

 .wrapper__v-corusel{
     display: flex;
     transition: all ease .5s;
 }
 
</style>