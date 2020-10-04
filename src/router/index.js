import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import emptyCart from "../components/EmptyCart";
import EmptyCart from "../components/EmptyCart"
import Cart from "../components/Cart"
import SearchOrderList from "../components/SearchOrderList"
import OrderList from "../components/OrderList"
import BeforeCart from "../components/beforeCart";
import Main from "../components/Main";
import farmInfo from "../components/farmInfo"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },

    {
      path: '/emptyCart',
      name: 'EmptyCart',
      component: EmptyCart
    },

    {
      path: '/searchOrderList',
      name: 'SearchOrderList',
      component: SearchOrderList
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },

    {
      path: '/beforeCart',
      name: 'BeforeCart',
      component: BeforeCart
    },

    {
      path: '/main',
      name: 'Main',
      component: Main
    },

    {
      path: '/farmInfo',
      name: 'farmInfo',
      component: farmInfo
    }
  ]
})
