<template>
  <div class="container__home-page">
    <div class="nav-menu">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link
            :to="{ path: '/' }"
            class="nav-link active"
            aria-current="page"
          >
            Главная
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ path: '/tokart' }" class="nav-link link-info">
            Товары
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ path: '/basket' }" class="nav-link link-warning">
            Корзина
          </router-link>
        </li>
        <li class="nav-item" v-if="checkRegisterUser == false">
          <router-link :to="{ path: '/Users' }" class="nav-link link-info">
            Регистрация
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ path: '/order' }" class="nav-link link-info">
            Офорление заказа
          </router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {},

  computed: {
    checkRegisterUser() {
      let userRegister = JSON.parse(localStorage.getItem("userInfo"));
      if (userRegister) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.nav-menu {
  border-bottom: 1px solid;
  margin-bottom: 1px;
}
</style>
