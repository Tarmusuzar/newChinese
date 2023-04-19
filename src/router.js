import MainGuest from './pages/MainGuest'
import MainAdmin from './pages/MainAdmin.vue'
import MainError from './pages/MainError.vue'
import SingleProduct from './components/SingleProduct'
import AdminOrders from './components/Admin/AdminOrders'
import AuthenticationCodes from './components/Admin/AuthenticationCodes'
import Cartlist from './components/Guest/CartList'
import MainSearch from './components/Guest/MainSearch'
import ComplaintForm from './components/Guest/ComplaintForm'
import ThankYou from './components/Utils/ThankYou'
import FranchisingForm from './components/Guest/FranchisingForm'
import CareersPage from './components/Guest/CareersPage'
import OrderOnline from './components/Guest/OrderOnline'
import RewardProgram from './components/Guest/RewardProgram'
import GuestSignin from './components/Guest/GuestSignin'
import { createRouter,createWebHistory } from 'vue-router'
import AddNavproduct from './components/TODELETE/NavAddproduct'


const router = createRouter({
    scrollBehavior(_, _2, savedPosition){
        
        if(savedPosition){
            return savedPosition
        }else{
            return {left:0, top:0}
        }

    },
    history:createWebHistory(),
    routes:[

        {path:'/orders',component:AdminOrders},
        {path:'/admin',component:MainAdmin},
        {path:'/error',component:MainError},
        {path:'/',component:MainGuest},       
        {path:'/product/:id',component:SingleProduct},       
        {path:'/item', component:SingleProduct},
        {path:'/checkOut', component:Cartlist},
        {path:'/search', component:MainSearch},
        {path:'/satisfactory', component:ComplaintForm},
        {path:'/reviewed', component:ThankYou},
        {path:'/franchise', component:FranchisingForm},
        {path:'/careers', component:CareersPage},
        {path:'/delivery', component:OrderOnline},
        {path:'/rewards', component:RewardProgram},
        {path:'/auth', component:GuestSignin},
        {path:'/pdt', component:AddNavproduct},
        {path:'/acds', component:AuthenticationCodes},


        
    ],
    
})

export default router