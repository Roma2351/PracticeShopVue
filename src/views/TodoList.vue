<template>
<div>

<div>
    <input type="text" v-model="todo" >
    <input type="text" v-model="surname">
    <button @click="addTodo">Добавить</button>
</div>
    
        

    <div v-for="users in user" :key="users">
        <span>{{ users.todo }} </span>
        -
        <span>{{ users.surname }} </span>

        <span>{{ users.id }}</span>
        <button @click="dellTodo( users.id)">Удалить</button>
    </div>

  </div>
</template>

<script>
export default {
name:'TodoList',
data() {
  return {
    surname:'',
    todo:'',
    user: []
  }
},

methods:{
    addTodo(){
          this.user.push({surname:this.surname, todo:this.todo, id:Date.now()})
          console.log(this.user);
    },

    dellTodo(id){
        this.user = this.user.filter((item) => item.id != id)
        //    const index = this.user.findIndex((xuy) => xuy.id == id )
       
    }
}
}


</script>

<style>

</style>