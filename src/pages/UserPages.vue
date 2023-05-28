<template>
  <div class="container mt-5">

<form v-if="step === 1">
<div class="step">
     <custom-form :type="'email'" v-model="formReg.email">Адрес электронной почты</custom-form>
     <custom-form :type="'text'" v-model="formReg.username">Ваше имя</custom-form>
     <custom-form :type="'text'" v-model="formReg.surname">Ваша Фамилия</custom-form>
     <tokart-button @clickButton="nextStep">Следующий шаг</tokart-button>
</div>
</form>


<transition name="slide-fade">
<form v-if="step === 2">
  <div class="step">
    <custom-form :type="'password'" v-model="formReg.password">Ваш пороль</custom-form>
    <custom-form :type="'password'" v-model="formReg.chekPassword">Повторите пороль</custom-form>
    <tokart-button @clickButton="backStep">Назад</tokart-button>
    <tokart-button :type="'submit'" @clickButton="registerUser" :buttonPrevent="true">Регистрация</tokart-button>
</div>
</form>
</transition>
</div>
</template>

<script>
import TokartButton from '@/components/UI/TokartButton.vue';
import CustomForm from '@/components/UI/CustomForm.vue';
export default {
  components: { CustomForm, TokartButton },
  name: "UserPages",

  data() {
    return {

      formReg: {
      username: "",
      surname: "",
      email: "",
      password: "",
      chekPassword: "",
      },
      validate: false,
      step: 1,
    };
  },
  methods: {
    nextStep(){
        this.validateFormStepOne()

        if( this.validate == true){
            this.step = 2
            this.validate = false

        }
    },
    validateFormStepOne(){
        if(this.formReg.email == '') {
            alert('Вы не заполнели поле "Адрес электронной почты"')
            return
        }
        if(this.formReg.name == '') {
            alert('Вы не заполнели поле "Ваше имя"')
            return
        }
        if(this.formReg.surname == '') {
            alert('Вы не заполнели поле "Ваша фамилия"')
            return
        }else {
            this.validate = true
        }
    },

    validateFormStepTwo(){ 
    
    if(this.formReg.password == ''){
        alert('Вы не заполнели поле "Ваш пороль"')
        return
    }
    if(this.formReg.chekPassword == ''){
        alert('Вы не заполнели поле "Проверка пороля"')
        return
    } else {
        this.validate = true
    }
    },

    backStep(){

            this.step = 1
    },
    registerUser(){
        this.validateFormStepTwo()
        console.log('Registration sucessful');
        if(this.validate == true){
          const object = {
            name:this.formReg.username,
            surname:this.formReg.surname,
            email:this.formReg.email,
          }
          localStorage.setItem('userInfo', JSON.stringify(object))
          // console.log(JSON.parse(localStorage.getItem('userInfo')));
          // console.log(this.username);
          this.$router.push('/userinfo')
        }
    }
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

</style>
