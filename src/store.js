import { createStore } from 'vuex'
 import addToCart from './store/addToCart.js'
 import updatePrices from './store/updatePrices'
 import auth from './store/auth.js'
const store = createStore({
    modules:{
        addToCart,
        updatePrices,
        auth
        
    },
    state(){
        return{
            token:'1',
            theFullMenu:[],
            noSauce :false,
            orderPlaced:false,
            scrollHoverableDisplay:'',
            theProductQty:'',
            hideHorizontalMenu:true,
            scrollY:'',
            cartCounter:0,
            singleProductId:'that',
            holder:'guest-wrapper',
            cart:[],
            cartList:false,
            categoryId:'',
            itemCategory:'',
            checkoutBill:[],
            bill:'',
            theSelectedHeading:[],
            loading:true,
            sideMenu:false,
            myItem:{},
            credentials:{},
            signedIn : false

            

            
        }
    },
    getters:{
        theCounter(state){
            return state.cartCounter
        }
    },
    actions:{
        login(){
            
        }
    },
    mutations:{
        signedIn(state,payload){
            state.signedIn = true,
            state.credentials = payload
        },
        filterOut(state,payload){
            const theItme = state.theFullMenu.find(item=>item.price == payload)
            state.myItem = theItme
        },
        
        resetVuex(state){
            state.cart = []
            state.cartCounter  = 0
            state.orderPlaced = false
        },
        updateCartCounter(state){
            let ttl =0
            state.cart.forEach(item=>{
                ttl += +item.qty
            })
            state.cartCounter = ttl
        },

        toggleHorizontalMenu(state){
            state.hideHorizontalMenu = !state.hideHorizontalMenu
        },

        monitorScrollY(state,payload){
            window.addEventListener('scroll',()=>{
               if(payload == 'MainGuest'){
                state.scrollY = window.scrollY
               }else{
                state.scrollHoverableDisplay = window.scrollY
               }    
            })
        },

        changeSideMenu(state){
            state.sideMenu = !state.sideMenu
        },

        changeHolder(state,holder){
            state.holder = holder
        }
    }
})

export default store