<template>
  <div class="info-model" v-if="modalWindow == true">
    <div class="model-window">
      <div class="headerModal">
        <button class="headerModal-button" @click="$emit('showModalWindow')">
          X
        </button>
      </div>
      <img :src="modalInformation.image" />
      <div class="textModal">
        <h4>Название:</h4>
        {{ modalInformation.title }}
        <br />
        <h4>Описание:</h4>
        {{ modalInformation.description }}
        <br />
        <h4>Рейтинг: {{ modalInformation.rating.rate }} &#9733;</h4>

        <tokart-comment></tokart-comment>
      </div>
    </div>
  </div>
</template>

<script>
import TokartComment from "./TokartComment.vue";

export default {
  components: { TokartComment },
  name: "ModalWindow",
  props: {
    modalWindow: {
      type: Boolean,
      default: true,
    },
    showModel: {
      type: Boolean,
    },
    modalInformation: {
      type: Object,
    },
  },

  mounted() {
    this.comments = [];
    console.log(1);
  },
};
</script>

<style>
.info-model {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(56, 69, 93, 0.5);
}

.model-window {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);


  border-radius: 10px;
  background-color: white;
}

.model-window img {
  float: left;
  overflow: hidden;
  position: relative;
  width: 250px;
  height: 295px;
  float: left;
  border-radius: 10px;
}
.headerModal-button {
  background-color: #f4511e;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 16px 32px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.headerModal-button:hover {
  opacity: 1;
}
.textModal {
  font-size: 14px;
  text-align: darkslateblue;
  display: contents;
  font-family: fantasy;
  color: initial;
}
</style>
