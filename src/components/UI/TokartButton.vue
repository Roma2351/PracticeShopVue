<template>
    <div>
        <div v-if="buttonPrevent == true">
            <button :type="type" class="product__button" @click.prevent="$emit('clickButton')"><slot></slot></button>
        </div>
        <div v-if="buttonPrevent == false">
            <button :type="type" class="product__button" @click="$emit('clickButton')"><slot></slot></button>
        </div>
    </div>
  
</template>

<script>
export default {
    name:'tokart-button',
    props: {
        type: String,
        default:'button',

        buttonPrevent:{
            type:Boolean,
            default: false
            }
    }

}
</script>

<style>
.product__button{
    border: none;
    margin-top: 5px;
    background-color: #1c62cd;
    border-radius: 12px;
    
}

.product__button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #fc5a5a;
}

</style>