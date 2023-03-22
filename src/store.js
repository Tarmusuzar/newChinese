import { createStore } from 'vuex'
 
const store = createStore({
    state(){
        return{
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
            sideMenu:false

            
        }
    },
    getters:{
        theCounter(state){
            return state.cartCounter
        }
    },
    mutations:{
        changeSideMenu(state){
            state.sideMenu = !state.sideMenu
        },
        changeHolder(state,holder){
            state.holder = holder
        },
        
        toggleLoadingTrue(state){
            state.loading = true
        },
        toggleLoadingFalse(state){
            state.loading = false
        },
        addToCart(state,product){
            if(state.cart.length == 0){
                state.cart.push(product)
            }
           else{
            const itemExists = state.cart.find(item=>item.id == product.id )

            if(itemExists){
                itemExists.qty++
                itemExists.totalPrice = itemExists.price * itemExists.qty

               }else{
                state.cart.push(product)
    
               }
           }
           
           state.checkoutBill = []
           state.cart.forEach(item=>{
            state.checkoutBill.push(item.totalPrice)
           })

           var total = 0
           for(var i=0; i<state.checkoutBill.length;i++){
                total += +state.checkoutBill[i]
                state.bill = total
           }
           state.cartCounter++
           setTimeout(() => {
            state.loading = false
            state.holder = 'guest-wrapper'


           }, 500);


        }
    },
    actions:{
        addToCart(context,id){
            context.commit('toggleLoadingTrue')
            context.commit('addToCart',id)
        }
    }

})

export default store