import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/home/Home.vue'
import GoHome from '@/pages/gohome/GoHome.vue'
import Mine from '@/pages/mine/Mine.vue'
import Cart from '@/pages/cart/Cart.vue'
import Address from '@/pages/address/Address.vue'
import CreateAddress from '@/pages/createAddress/CreateAddress.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:Home,
      redirect:'/gohome',
      children:[
        {
          path:'/gohome',
          name:'gohome',
          component:GoHome
        },
        {
          path:'/cart',
          name:'cart',
          component:Cart
        },
        {
          path:'/mine',
          name:'mine',
          component:Mine
        },
      ]
    },
    {
      path:'/address',
      name:'address',
      component:Address
    },
    {
      path:'/createAddress',
      name:'createAddress',
      component:CreateAddress
    }
  ]
})

export default router
