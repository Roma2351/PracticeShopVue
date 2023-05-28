<template>
  <div class="poduct__navmenu-sort">
    <div v-for="category in categoryName" :key="category.id">
      <div
        class="poduct__navmenu-categorry"
        @click="$emit('clickSort', category.category)"
      >
        <span>{{ category.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SortCategory",
  props: {
    categoryName: {
      type: Array,
    },
  },
};
</script>

<style>
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
</style>
