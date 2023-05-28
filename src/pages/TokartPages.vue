<template>
  <div class="product">
    <div class="poduct__navmenu-sort">
     <SortCategory class="poduct__navmenu-categorry" :categoryName="categoryName" @clickSort="clickSort"></SortCategory>
    </div>

    <div class="product-item" v-for="item in items" :key="item">
      <card
        @deletProduct="deletProduct"
        @addBusket="addBusket"
        :nameDellBtn="nameDellBtn"
        :item="item"
        :vievAddBasket="true"
        @click="showModalWindow(item)"
        
      ></card>
    </div>
    <div v-if="showModel == true" class="calculator">
      <Calculator ></Calculator>
    </div>
    <div class="calculator-button">
      <calculator-button @clickShowCalc="showCalculator"></calculator-button>
    </div>

   <ModalWindow :modalWindow="modalWindow"
                :showModel="showModel"
                :modalInformation="modalInformation"
                v-model="comment"
                @showModalWindow="showModalWindow">
   </ModalWindow>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'
import CalculatorButton from "@/components/UI/CalculatorButton.vue";
import SortCategory from "@/components/SortCategory.vue";
import DropDown from "@/components/DropDown.vue";
import axios from "axios";
import Card from "@/components/Card.vue";
import Navbar from "@/components/Navbar.vue";
import Calculator from "@/components/Calculator.vue";


export default {
  components: { Card, DropDown, Navbar,SortCategory, Calculator, CalculatorButton,ModalWindow },
  name: "TokartPages",
  data() {
    return {
      items: [],
      showModel:false,
      modalWindow:false,
      modalInformation: {},
      comment: "",
      comments: [],
      title: "",
      basketItems: [],
      options: [],
      selected: "",
      nameDellBtn: "Удалить",
      categoryName: [{
        id: 1,
        name: 'Мужское',
        category: "mens clothing"
      },
      {
        id: 2,
        name: 'Женское',
        category: "womens clothing"
      },
      {
        id: 3,
        name: 'Бижутерия',
        category: "jewelery"
      },
      {
        id: 4,
        name: 'Техника',
        category: "electronics"
      },
      {
        id: 5,
        name: 'Весь товар',
        category: ""
      },]
    };
  },
  watch: {
    title(value) {
      if (this.title == "") {
        return this.getProduct();
      } else {
        return (this.items = this.items.filter((item) =>
          item.title.includes(this.title)
        ));
      }
    },
    items(value) {},

    selected(val) {
      console.log(val);
      this.getProduct();
      setTimeout(() => {
        this.sortOption();
      }, 300);
      // setTimeout(this.sortOption(), 2000)
    },
  },
  methods: {
    async getProduct() {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          this.items = res.data;
          console.log(this.items);
        });
    },

    async getCategory() {
      const response = await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          this.options = res.data;
          console.log(this.options);
        });
    },

    deletProduct(id) {
      // При написание delete --- Then не используется, только при get
      this.items = this.items.filter((item) => item.id != id);
      axios.delete(`https://fakestoreapi.com/products/${id}`);
      console.log(id);
    },
    addBusket(item) {
      console.log(this.basketItems);
      this.basketItems = [...this.basketItems, item];
      // this.basketItems.push(item);

      localStorage.setItem("item", JSON.stringify(this.basketItems));
    },

    sortOption() {
      this.items = this.items.filter((item) => item.category == this.selected);
    },

    async clickSort(cateqory) {
      if (cateqory == "mens clothing") {
        await this.getProduct();
        this.items = this.items.filter(
          (item) => item.category == "men's clothing"
        );
      }
      if (cateqory == "womens clothing") {
        await this.getProduct();
        this.items = this.items.filter(
          (item) => item.category == "women's clothing"
        );
      }
      if (cateqory == "jewelery") {
        await this.getProduct();
        this.items = this.items.filter((item) => item.category == "jewelery");
      }
      if (cateqory == "electronics") {
        await this.getProduct();
        this.items = this.items.filter(
          (item) => item.category == "electronics"
        );
      }if(cateqory == '') {
       await  this.getProduct()
      }
    },

    showCalculator(){
        this.showModel = !this.showModel
        console.log(this.showModel);
    },
    showModalWindow(tokart){
      this.modalWindow = !this.modalWindow
      this.modalInformation = tokart
      // this.items = this.items.filter((id) => id == this.modalWindow);
      console.log(tokart);

    }
  },

  mounted() {
    this.getProduct();
    if (JSON.parse(localStorage.getItem("item"))) {
      this.basketItems = JSON.parse(localStorage.getItem("item"));
    }
    this.getCategory();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.product {
  display: flex;
  flex-wrap: wrap;
}

.poduct__navmenu-sort {
  width: 100%;
  height: 53px;
  background: #f0f0f4;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.poduct__navmenu-categorry {
  width: 128px;
  height: 25px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;
  color: #2f3035;
  cursor: pointer;
} 

.button {
  text-decoration: none;
  display: inline-block;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
}
.btn-add {
  text-decoration: none;
  margin: 5px;
  background: #cccccc;
  color: rgb(110, 67, 67);
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
}
.product-item:hover .button {
  background: #fc5a5a;
}
.product-link {
  padding: 10px;
}
.product-inp {
  float: left;
  overflow: hidden;
  position: relative;
  width: 261px;
  margin: 17px;
  margin-bottom: 25px;
  float: left;
  height: 50px;
}
.product-btncomm {
  width: 163px;
  height: 36px;
}
.calculator{
  position: fixed;
    left: 0;
    top: 54%;
    opacity: 0.9
}
 .calculator-button{
  position: fixed;
  left: 0;
  top: 50%;
  opacity: 0.5;
 
}

</style>
