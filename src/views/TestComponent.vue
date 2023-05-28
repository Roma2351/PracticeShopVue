<template>
  <div>
    <div v-for="array in arrays" :key="array">
      <div class="div1" ref="div1"
        :class="[
          { green: array.status == 1 },
          { blue: array.status == 2 },
          { red: array.status == 3 },
        ]"
      >
        {{ array.status }}
        {{ array.name }}
      </div>

      
      
    </div>
    

    <div v-for="user in filterUsers" :key="user">
      <div :class="{ red: user.id <= 5 }">
        {{ user.name }}
        {{ user.username }}
        {{ user.phone }}
        <!-- <button @click="deletUser(user.id)">Dellet</button> -->
        <DeletUserBtn @deleteUser="deletUser(user.id)"></DeletUserBtn>
      </div>
    </div>

    <select v-model="selectUser">
    <option v-for="sort in userSort" :key="sort">
        {{ sort }}
    </option>
   </select>
    <div>
      <input type="number" v-model="userId" />
    </div>


    <div id="computed-basics">
  <p>Есть опубликованные книги:</p>
  <span>{{ publishedBooksMessage }}</span>
</div>


<div><button @click="checkDom">DOM</button></div>
  </div>
</template>

<script>
import axios from "axios";
import DeletUserBtn from "@/components/DeletUserBtn.vue"
export default {
  components: {DeletUserBtn},
  name: "TestComponent",
  data() {
    return {
      arrays: [
        {
          status: 1,
          name: "green",
        },
        {
          status: 2,
          name: "blue",
        },
        {
          status: 3,
          name: "red",
        },
      ],
      users: [],
      userSort: 5,
      userId: "",
      selectUser: "",


      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          
        ]
      }

    };

    
  },
  computed: {
    
    publishedBooksMessage() {
      
      return this.author.books.length > 0 ? 'Да' : 'Нет'
    },

    filterUsers(){
        const newUsers = this.users.map((user) => user = {...user, status:1})
      console.log(newUsers);
        return newUsers
    }
  },

  watch: {
    userId(id) {
      if (this.userId == "") {
        return this.getUsers();
      } else {
        return (this.users = this.users.filter((user) => user.id == id));
      }
    },
    async selectUser(val){
      await this.getUsers()
        this.users = this.users.filter((item) => item.id == val)
        // console.log(val);
        // if(val == ''){
        //     return this.getUsers()
        // }else {
        //     return (this.users = this.users.filter((item) => item.id == val))
        // }
    },
   
   
  },

  methods: {
    async getUsers(id) {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          this.users = res.data;
          console.log(this.users);
          this.users = this.users.filter((user) => user.id <= 5);
        });
    },

    deletUser(id){
        this.users = this.users.filter((user) => user.id != id)
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(id);
    },

    sortUserOptions(){
        this.users = this.users.filter((item) => item.userSort == this.selectUser)
    },
    
    checkDom(){
      const divs = document.getElementsByClassName('div1')
      const body = document.body
      console.log(divs);
      console.log(body);
      console.log(this.$refs.dev1);
      
    }

  },
 
  
//  beforeCreate(){console.log('beforeCreate');},
//  created(){console.log('created');},
//  beforeMount(){console.log('beforeMount');},
 mounted() {
    this.getUsers();
    console.log('mounted');
  },
//   beforeUpdate(){console.log('beforeUpdate');},
//   updated(){console.log('updated');},
//   destroyed() {
// console.log('beforeDestroy');},
};
</script>

<style>
.green {
  color: green;
}
.green:hover {
  background-color: black;
}
.red {
  color: red;
}
.red:hover {
  background-color: rgb(34, 110, 50);
}
.blue {
  color: blue;
}
.blue:hover {
  background-color: chocolate;
}
</style>
