export default{
    namespaced:true,
    
    actions:{
        updateCartandPrice(context){
            var totalPrice = 0
            var totalQty =0

            context.rootState.cart.forEach(bill=>{
                totalPrice += +bill.totalPrice
                totalQty += +bill.qty
                
            })
            context.rootState.bill = totalPrice
            context.rootState.cartCounter =  totalQty
        },
        increasePrice(context, payload){
            
            if(payload.qty == 'del'){
              const toDelete =  context.rootState.cart.find(item=>item.id == payload.id)
              const filteredArray = context.rootState.cart.filter(item => item.id !== toDelete.id);
              context.rootState.cart =  filteredArray

              context.dispatch('updateCartandPrice')
            
            }else{
           
                // context.state.theProductQty = payload.qty   
                const theItem = context.rootState.cart.find(item=>item.id == payload.id)
                theItem.totalPrice = 0
                theItem.totalPrice = payload.price*payload.qty
                theItem.qty = payload.qty

                const itemExists = context.rootState.checkoutBill.find(item=>item.id == payload.id )
                itemExists.price = theItem.totalPrice
                context.dispatch('updateCartandPrice')
            
             
        }
        }
    }    
}