export default{
    namespaced:true,
    state(){
        return{
        }
    },
    mutations:{
        toggleLoadingTrue(){
            this.state.loading = true
        },
        toggleLoadingFalse(){
            this.state.loading = false
        },
        cartCounter(){
            this.commit('updateCartCounter')
        }
    },
    
    actions:{
       
        addToCart(context,product){
            if(product.customizations.sauce == ''){
                context.rootState.noSauce = true
                return
            }
            context.commit('toggleLoadingTrue')

            if(context.rootState.cart.length == 0){
                context.rootState.cart.push(product)
            }
           else{
            context.rootState.noSauce = false

            const itemExists = context.rootState.cart.find(item=>item.id == product.id )

            if(itemExists){
                if(itemExists.qty<10){
                    itemExists.qty++
                    itemExists.totalPrice = itemExists.price * itemExists.qty
                    

                }
                else{
                    itemExists.qty = 10
                    
                }
               }else{
                context.rootState.cart.push(product)
    
               }
           }
           
           context.rootState.checkoutBill = []
           context.rootState.cart.forEach(item=>{
            context.rootState.checkoutBill.push({id:item.id,name:item.name, price:item.totalPrice,qty:item.qty})
           })

           var total = 0
            context.rootState.checkoutBill.forEach(bill=>{

                total += +bill.price


            })
                context.rootState.bill = total
        
           setTimeout(() => {
            context.rootState.loading = false
            context.rootState.holder = 'guest-wrapper'


           }, 500);

           context.commit('cartCounter')
           product.goHome()
          




        }
    }
}
