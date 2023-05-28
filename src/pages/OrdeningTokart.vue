<template>
  <div  class="product">
    <div v-if="ordTokart" class="product-item">
      <card :item="ordTokart" :detetBtn="false"></card>
      <div class="product-order">
        <placeholder-input
          v-model="nameUser"
          :placeholder="'Укажите имя'"
        ></placeholder-input>
        <placeholder-input
          v-model="addresUser"
          :placeholder="'Укажите аддрес'"
        ></placeholder-input>
        <tokart-button @clickButton="getOrdering">Заказать</tokart-button>
      </div>
    </div>
  <div v-else>Заказ не офрмлен</div>
    
  </div>

</template>

<script>
import TokartButton from "@/components/UI/TokartButton.vue";
import Card from "../components/Card.vue";
import PlaceholderInput from "../components/UI/PlaceholderInput.vue";
export default {
  components: { Card, TokartButton, PlaceholderInput },
  name: "OrdeningTokart",
  data() {
    return {
      ordTokart: {},
      nameUser: "",
      addresUser: "",
    };
  },

  methods: {
    getOrdering() {
      if (this.nameUser != "" && this.addresUser != "") {
        alert("Ваш заказ оформлен");
        this.$router.push({ path: "/" });
      } else {
        alert("Для оформления заказа, заполните формы");
      }
    },
  },

  mounted() {
    this.ordTokart = JSON.parse(localStorage.getItem("order"));
    console.log(this.ordTokart);
  },
};
</script>

<style scoped>
.product-order {
  display: flex;
  width: 250px;
  height: 183px;
  justify-content: center;
  flex-direction: column;
}

</style>
