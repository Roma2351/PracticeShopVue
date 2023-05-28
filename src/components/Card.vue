<template>
  <div class="cartpages">
    <div class="product-img">
      <img :src="item.image" />
    </div>

    <div class="product-title">
      {{ item.title }}
    </div>

    <div class="product-price">
      <span>{{ item.price }} AZN</span>
    </div>
    <!-- <div v-if="vievAddBasket == true" class="product-list"> -->
    <!-- <div class="product-inp">
        <input v-model="comment" type="text" />
      </div>
      <button class="product-btncomm" @click="getComment">
        Добавить коммент
      </button> -->
    <div v-if="vievAddBasket == true" class="bascet-button">
      <button  class="bascet-button__add" @click="addBusket(item)">
        <img
          class="bascet-button__add-bascet"
          src="@/assets/bascet.svg"
          alt=""
        />
      </button>
    </div>
    <div v-for="comment in comments" :key="comment">
      {{ comment }}
    </div>
    <!-- </div> -->

    <button
      v-if="detetBtn == true"
      class="button"
      @click.prevent="deletProduct(item.id)"
    >
      {{ nameDellBtn }}
    </button>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    item: {
      type: Object,
    },
    vievAddBasket: {
      type: Boolean,
    },

    nameDellBtn: {
      type: String,
    },
    detetBtn: {
      type: Boolean,
    },
  },
  data() {
    return {
      comment: "",
      comments: [],
    };
  },
  methods: {
    deletProduct(id) {
      this.$emit("deletProduct", id);
    },
    addBusket(item) {
      this.$emit("addBusket", item);
    },
    getComment() {
      this.comments.push(this.comment);
      console.log(this.comments);
    },
  },
};
</script>

<style>
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.cartpages {
  max-width: 251px;
  max-height: 408px;
}
.product-title {
  /* width: 230px; */
  height: 110px;
  left: 1294px;
  top: 684px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #1c62cd;
}
.product-item {
  max-width: 271px;
  max-height: 403px;
  text-align: center;
  margin-top: 30px;
  margin-left: 29px;
  border-bottom: 2px solid #f5f5f5;
  border: 1px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
  border-radius: 3px;
  cursor: pointer;
}
.product-item:hover {
  border-bottom: 2px solid #fc5a5a;
}
.product-item img {
  float: left;
  overflow: hidden;
  position: relative;
  width: 250px;
  height: 190px;
  float: left;
}
/* .product-list {
  float: left;
  overflow: hidden;
  position: relative;
  width: 261px;
  margin-bottom: 25px;
  float: left;
  height: 250px;
} */
.bascet-button__add-bascet {
  left: 13.12%;
  right: 16.31%;
  top: 0.85%;
  bottom: 68.27%;
  /* background: #fdf8f8; */
  width: 36px !important;
  height: 24px !important;
}
.poduct-navmenu {
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row-reverse;
}
/* .product-list h3 {
  font-size: 18px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
} */
.product-price {
  /* width: 148px; */
  height: 60px;
  left: 1335px;
  top: 754px;

  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  /* акцент */

  color: #1c62cd;
}
.button {
  position: relative;
  left: 116px;
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

.bascet-button {
  display: flex;
  /* width: 60px; */
  height: 40px;
  flex-direction: row-reverse;
}
.bascet-button__add {
  width: 60px;
  height: 40px;
  background: #1c62cd;
  border-radius: 10px 0px 0px 0px;
  border: none;
}
.product-item:hover .button {
  background: #fc5a5a;
}
.product-link {
  padding: 10px;
}
.product-img {
  width: 250px;
  height: 190px;
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
.product-selected {
  width: 200px;
  height: 32px;
}
</style>
