<template>
  <div class="product">
    <div class="product-item" v-for="item in basItem" :key="item">
     <tokart-button @clickButton="routAhref(item)">Оформить заказ</tokart-button>
     <card :item="item"
      :nameDellBtn="nameDellBtn"
      :detetBtn="true"
      :vievAddBasket="false"
     @deletProduct="deletProduct"></card>
    </div>
    <SumBaskets :basItem="basItem" :sumProduct="sumProduct"></SumBaskets>
  </div>
</template>

<script>
import SumBaskets from '@/components/SumBaskets.vue';
import TokartButton from '@/components/UI/TokartButton.vue';
import Card from '@/components/Card.vue';
export default {
  components: { Card, TokartButton, SumBaskets },
  name: "BasketPages",
  data() {
    return {
      basItem: [],
      nameDellBtn:'X',
    };
  },

  methods: {
    deletProduct(id) {
      this.basItem = this.basItem.filter((item) => item.id != id);
      localStorage.setItem("item", JSON.stringify(this.basItem));
      console.log(id);
    },
    routAhref(item){
      this.$router.push({path:'/order'});
      console.log(item);
      localStorage.removeItem('order')
      localStorage.setItem("order", JSON.stringify(item));
    }
  },
  computed: {
    sumProduct() {
      let sum = 0;
      if (this.basItem.length) {
        for (let i = 0; i < this.basItem.length; i++) {
            sum+= this.basItem[i].price 
        } return sum
      }
      else{
              return sum
      }
    },
  },

  mounted() {
    this.basItem = JSON.parse(localStorage.getItem("item"));
  },
};
</script>

<style scoped>
::v-deep .product-price{
  height: 40px;
}
.product-item__orderingbutton{
  text-decoration: none;
  display: inline-block;
  background: #cccccc;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: 0.3s ease-in;
  border: none;
}

::v-deep .product-item:hover .product-item__orderingbutton{
  background: #49fc52;
}
</style>
