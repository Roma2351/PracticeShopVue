<template>
  <div>
    <div class="model-comment">
      <input class="model-comment__inp" type="text" v-model="commet" />
      <button class="model-comment__btn" @click="addComment">
        Добавить комментарий
      </button>
    </div>
    <div v-for="comm in comments" :key="comm" class="commentary">
      <span class="commentary__span">{{ comm.commet }} </span>
      <button class="commentary__button" @click="deleteComment(comm.id)">
        x
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TokartComment",

  data() {
    return {
      commet: "",
      comments: [],
    };
  },
  methods: {
    addComment() {
      this.comments.push({ commet: this.commet, id: Date.now() });
      console.log(commet);
    },
    deleteComment(id) {
      this.comments = this.comments.filter((commentary) => commentary.id != id);
    },
  },
};
</script>

<style>
.model-comment__btn {
  background-color: #f4511e;
  border: none;
  border-radius: 5px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.model-comment__btn:hover {
  opacity: 1;
}
.model-comment__inp {
  height: 50px;
  border-radius: 6px;
}

.commentary {
  display: flex;
  justify-content: center;
}

.commentary__button {
  background-color: #f4511e;
  border: none;
  border-radius: 5px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.commentary__button:hover {
  opacity: 1;
}
</style>
