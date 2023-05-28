import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TokartPages from '../pages/TokartPages'
import BasketPages from '../pages/BasketPages'
import OrdeningTokart from '../pages/OrdeningTokart'
import UserPages from '../pages/UserPages';
import TodoList from '../views/TodoList'

import TestComponent from '../views/TestComponent'
import UserInfoPages from '../pages/UserInfoPages'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tokart',
    name: 'tokart',
    component: TokartPages
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPages
  },
  {
    path: '/users',
    name: 'users',
    component: UserPages
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: TodoList
  },
  
  {
    path: '/test',
    name: 'TestComponent',
    component: TestComponent
  },
  {
    path: '/order',
    name: 'OrdeningTokart',
    component: OrdeningTokart
  },
  {
    path: '/userinfo',
    name: 'UserInfoPages',
    component: UserInfoPages
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
