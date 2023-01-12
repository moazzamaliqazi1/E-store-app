import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productDetail from '../views/productDetail.vue'
import addProduct from '../views/addProduct.vue'
import loginPage from '../views/loginPage.vue'
import categoryPage from '../views/categoryPage.vue'
import searchProduct from '../views/searchProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: loginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/searchproduct/:search',
    name: 'searchproduct',
    component: searchProduct
  },
  {
    path: '/addproduct',
    name: 'addProduct',
    component: addProduct
  },
  {
    path: '/categoryPage/:cat',
    name: 'categoryPage',
    component: categoryPage
  },
  {
    path: '/productDetail/:id',
    name: 'productDetail',
    component: productDetail,
    props:true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
