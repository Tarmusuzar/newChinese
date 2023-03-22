
import MainGuest from './pages/MainGuest'
import MainAdmin from './pages/MainAdmin.vue'
import MainError from './pages/MainError.vue'
import SingleProduct from './components/SingleProduct'
import MainOrders from './pages/MainOrders'

import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    scrollBehavior(to, from, savedPosition){
        console.log(to)
        console.log(from)
        console.log(savedPosition)
        if(savedPosition){
            return savedPosition
        }else{
            return {left:0, top:0}
        }

    },
    history:createWebHistory(),
    routes:[

        {path:'/orders',component:MainOrders},
        {path:'/admin',component:MainAdmin},
        {path:'/error',component:MainError},
        {path:'/',component:MainGuest},       
        {path:'/product/:id',component:SingleProduct},       
        {path:'/item', component:SingleProduct}
        
    ],
    
})

export default router