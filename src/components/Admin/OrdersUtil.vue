<template>
    <div class="new-orders">
          <h2>{{ title }}</h2>
          <div v-if="newOrders.length > 0" class="order-list">
            <div v-for="order in newOrders" :key="order.id" class="order-item">
              <div class="order-info" @click="showDialog(order)" :class="{selected:selectedItemId ==order.orderNumber}">
                <p><strong>Order ID:</strong> {{ order.orderNumber }}</p>
                <p><strong>Place At:</strong> {{ order.orderTime }}</p>
                <p><strong>Total Amount:</strong> {{ total(order.orderItems) }}</p>
              </div>
              <div class="order-actions">
                <button class="accept-btn" @click="$emit('orderReady',order)" v-if="mode == 'new'" style="background-color: green;">Ready</button>
                <button class="accept-btn" @click="showDialog(order)" style="background-color:orange">View Order</button>
              </div>
            </div>
          </div>
          <div v-else class="no-orders">
            <i id="frawn" class="fas fa-frown"></i>
            <p>No new orders available</p>
          </div>
        </div>
</template>
<script>

    export default{
      props:['newOrders', 'title', 'mode'],
      data(){
        return{
          selectedItemId:''
        }
      },
      methods:{
   
        showDialog(order){
          this.$emit('showDialog',order)
          this.selectedItemId = order.orderNumber
        },
      total(items){
        let it =0
        items.forEach(item=>{
          it += +item.totalPrice
        })
          
        
        return it

      }
    }
    }
    
</script>


<style scoped>
.selected{
  border-left: 8px solid purple;
}
    .new-orders h2{
  font-size: 24px;
  margin-bottom: 20px;
}
#frawn{
  font-size: 5rem;
}
.order-list {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.order-item {
  margin-bottom: .7rem;

  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order-info p {
  font-size: 16px;
  margin: 5px 0;
}

.order-actions {
  display: flex;
}

.accept-btn {
  font-size: 16px;
  color: white;
  background-color: #6ab04c;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.2s ease-in-out;
}


.accept-btn:hover {
  opacity: 0.8;
}

.no-orders {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #aaa;
}

.no-orders i {
  font-size: 48px;
  margin-bottom: 20px;
}

.no-orders p {
  font-size: 20px;
  text-align: center;
}


@media screen and (max-width: 576px) {
  .nav-btn {
    font-size: 16px;
    padding: 0 10px;
  }

 
  .new-orders h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  

}

</style>