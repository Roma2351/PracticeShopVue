<template>
  <div>
    <!-- <input type="text" name="" id="" v-model="name" />
    <input type="text" v-model="addres" />
    <input type="number" v-model="age" />
    <input type="text" placeholder="Поиск" v-model="search">
    <button @click="addBut">booom</button>
    <button @click="dellBut">Delet</button> -->
    <div v-for="xuy in arr" :key="xuy">
      {{ xuy.name }} {{ xuy.addres }} {{ xuy.age }}
      <button @click="dellIdBut(xuy.id)">Удалить</button>
    
    </div>
    <div v-for="arr in array" :key="arr">
      <span>{{ arr.name }}</span>
      <span v-if="arr.age > 10">{{ arr.age }}</span>
      <span v-else>ПИЗДЮК</span>
    </div>
    <div v-for="user in users" :key="user">
   {{ user }}
    </div>

    <div v-for="number in num" :key="number">
      {{ number }}
    </div>

    <div v-for="cre in creat" :key="cre">
    {{ cre.street }}
    {{ cre.number }}
    </div>

    <div v-for="masss in mass" :key="masss">
      {{ masss }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [

      ],
      search: '',
      name: "",
      addres: "",
      age: "",
      array: [{
        name: 'roma',
        age: 9,
      },{
        name: 'vladelen',
        age: 11
      }],

     users: [
       'roma',
       'lexa',
       'test'
     ],

     num:[
      1,2,3,4
     ],

     creat: [
      {
        street: 'xanlar',
        name: 'test',
        number: 2
      },
      {
        street: 'xanlar1',
        name: 'test2',
        number: 23
      },
      {
        street: 'xanlar1231',
        name: 'test232',
        number: 22133
      }
     ],
     mass: [
      123, 1995, 2023
     ]
    };
  },
  watch: {
    search(value){
      if(value != ''){
        return (this.arr = this.arr.filter((el) => 
        el.name.includes(value)))
      }
    }

  },

  methods: {
    addBut() {
      this.arr.push({
        id: Date.now(),
        name: this.name,
        addres: this.addres,
        age: this.age,
      });
      console.log(this.arr);
    },
    dellBut() {
      this.arr.pop();
      console.log(this.arr);
    },
    dellIdBut(id){
      this.arr = this.arr.filter((el) => el.id != id)
    }
  },
};
</script>

<style></style>
