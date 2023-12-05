<template>
 
    <div class="order-management">
      
      <div class="navbar">
        <h1 class="brand">Frosty Galleria</h1>
        <div class="options">
          <button class="nav-btn" @click="$router.replace('/admin')">Home</button>
          <button class="nav-btn" :class="{ active: activeTab === 'new-orders' }" @click="fetchNewOrders('new-orders')">New Orders</button>
          <button class="nav-btn" :class="{ active: activeTab === 'past-orders' }" @click="fetchPastOrders('past-orders')">Completed Orders</button>

        </div>

      </div>
      <div class="content">       
        <orders-util 
        @orderReady="orderReady"
        @showDialog="showDialog"
        v-if="activeTab == 'new-orders'"
        :newOrders="newOrders"
        title="New Orders"
        mode="new"
        ></orders-util>
        <orders-util 
        
        @showDialog="showDialog"
        v-if="activeTab == 'past-orders'"
        :newOrders="pastOrders"
        title="Completed Orders"
        mode="past"
        ></orders-util>

      </div>
      <single-order 
      
      
      restaurantName="Gypsy Chinese - Dalma"
      :orderNumber=newItem.orderNumber
      :orderDate=newItem.orderDate
      :orderTime= newItem.orderTime
      :customerName = order.customerName
      :orderItems = newItem.orderItems
      vatTax=5%
      :isNewOrder="isNewOrder"
      :total="total"
      @close="this.showSingleOrder = false"
      @rejectOrder="rejectOrder"
      @acceptOrder="acceptOrder"

      v-if="showSingleOrder"
          
      ></single-order>
      <loading-spinner v-if="loading"></loading-spinner>
    </div>
  </template>
  
  <script>
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/database';
  import zomato_ring_3 from '@/components/Utils/zomato_ring_3.mp3';
  import LoadingSpinner from '../LoadingSpinner.vue';
  import SingleOrder from './SingleOrder.vue';
  import OrdersUtil from './OrdersUtil.vue';
  export default {
    components:{
      OrdersUtil, 
      SingleOrder,
      LoadingSpinner,

    },
    data() {
      
      return {
        total:'',
        newItem:{},
        loading:false,
        order:{},
        showSingleOrder:false,
        items:[
          {name:'meeGoreng', price:'60'},
          0
  
        ],
        activeTab: 'new-orders',
        newOrders: [], 
        pastOrders: [], 
        isNewOrder:false
      };
    },
    created(){
      this.fetchNewOrder()
      this.fetchNewOrders('new-orders')
    },
   
    
    methods: {
      orderStatus(order, url){
        this.loading = true
        fetch(url, {
          method: 'post',
          body: JSON.stringify(order)
        }).then(() => {
          const databaseRef = firebase.database().ref('newOrder/' + order.dbId);
          databaseRef.remove().then(() => {
            
            const index = this.newOrders.findIndex(item => item.dbId === order.dbId);
            
            if (index !== -1) {
              this.loading = false
              this.newOrders.splice(index, 1);
            }
          }).catch((error) => {
            console.error('Error deleting item:', error);
          });
        })

      },

      rejectOrder(id){
        const it = this.newOrders.find(item=>item.orderNumber == id)
        
        this.orderReady(it,'https://my-vue-app-8da88-default-rtdb.firebaseio.com/rejectedOrders.json')
        this.showSingleOrder = false
        
      },
      acceptOrder(){
        this.isNewOrder = false
      },
      orderReady(order){
        this.orderStatus(order,'https://my-vue-app-8da88-default-rtdb.firebaseio.com/completedOrders.json')

      },

     
      fetchNewOrder(){
    
        firebase.initializeApp({
                apiKey: "AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY",
                authDomain: "my-vue-app-8da88.firebaseapp.com",
                databaseURL: "https://my-vue-app-8da88-default-rtdb.firebaseio.com",
                projectId: "my-vue-app-8da88",
                storageBucket: "my-vue-app-8da88.appspot.com",
                messagingSenderId: "460227304896",
                appId: "1:460227304896:web:b60519493132d4ebca7c25",
        })

        // Listen for new child added events in the product.json folder
        const db = firebase.database();
        db.ref('newOrder').on('child_added', snapshot => {
            const newItem = snapshot.val()
            this.newItem = newItem
            let total = 0;

            for (const prop in newItem) {
              if (typeof newItem[prop] === 'object' && Array.isArray(newItem[prop]) && prop === 'orderItems') {
                const orderItemsArr = newItem[prop];
                for (const item of orderItemsArr) {
                  if (typeof item === 'object' ) {
                    total += +item.totalPrice;
                    this.total = total
                  }
                }
              }
            }
            this.fetchNewOrders('new-orders')
            this.isNewOrder = true
            


            this.showSingleOrder = true
            // Trigger sound and pop-up notification
            this.playSound()
            this.showNotification(`New item added: ${newItem}`)
        })
      },
      showNotification(message) {
            // Show a pop-up notification (e.g. using the Notifications API)
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('New Item Added', { body: message })
            }
        },
       
      playSound() {
            // Play a sound (e.g. a beep or a ding)
            const audio = new Audio(zomato_ring_3)
            audio.play()
        },
      showDialog(order){
        this.isNewOrder = false
        this.newItem = []
        this.newItem = order
        this.showSingleOrder = true

      },
      
      
      fetchOrders(url,folder){
        this.loading=true
        fetch(url)
        .then(response=>{
          return response.json()
        })
        .then(data=>{
          for(const item in data){
            folder.push({...data[item], dbId:item})
          }
          this.loading = false
        })

      },
      fetchPastOrders(tab) {
        this.pastOrders = []
        this.activeTab = tab

        this.fetchOrders('https://my-vue-app-8da88-default-rtdb.firebaseio.com/completedOrders.json',this.pastOrders,)

      },
      
      fetchNewOrders(tab) {
        this.newOrders = []
        this.activeTab = tab

        this.fetchOrders('https://my-vue-app-8da88-default-rtdb.firebaseio.com/newOrder.json',this.newOrders)
      },
      
    }}
    </script>
  <style scoped>
  .order-management {
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fd2727;
  height: 60px;
}

.nav-btn {
  font-size: 18px;
  color: white;
  background-color: transparent;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.nav-btn.active {
  background-color: white;
  color: #ff3f3f;

}

.content {
  padding: 20px;
}
.brand{
  color: white;
  margin-left: 1rem;

}
.options{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


  </style>
