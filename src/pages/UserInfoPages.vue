<template>
  <div>
 <div v-if="userInformation">
    <div v-for="info in userInformation" :key ='info'>
       {{ info }}
    </div>
</div>
  </div>
</template>

<script>
export default {
name: 'UserInfoPages',

data(){
    return {
        userInformation: {}
    }
},



mounted(){

    this.userInformation = JSON.parse(localStorage.getItem('userInfo'))
    console.log(this.userInformation);
}
}
</script>

<style>

</style>