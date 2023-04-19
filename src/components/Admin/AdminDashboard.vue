<template>
    <div class="dashboard">
      <div class="card">
        <h2>Total Sales</h2>
        <p><SPAN style="font-size: 2rem;">AED </SPAN>{{ totalSales }}</p>
      </div>
      <div class="card">
        <h2>Total Orders</h2>
        <p>{{ totalOrders }}</p>
      </div>
      <div class="card">
        <h2>Bill Avg</h2>
        <p>{{ Math.ceil(totalSales/totalOrders) }}</p>
      </div>
      <div class="card">
        <h2>Top Sellers</h2>
        <p style="font-size: 5rem;">Mee Goreng</p>
      </div>
      <!-- Add more cards to display additional statistics -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalSales: 0,
        totalOrders: 0,
        totalCustomers: 0,
      };
    },
    created() {
      let allData = []
      let orderItems=[]

      fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/completedOrders.json')
      .then(response=>{return response.json()})
      .then(data=>{
        console.log(data)
         this.totalOrders =Object.keys(data).length
        for(const dat in data){
          allData.push(data[dat])
        }
        allData.forEach(dat=>{
          orderItems.push(dat.orderItems)

        })
        orderItems.forEach(item=>{
          item.forEach(obj=>{
            this.totalSales += +obj.totalPrice
          })
        })


      })

    },
    methods: {
      fetchStatistics() {
        // Make API request to fetch statistics data
        // and update the component state with the response
      },
    },
  };
  </script>
  
  <style>
  .dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .card {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    padding: 1rem;
    border: 2px solid #eaeaea;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .card h2 {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }
  
  .card p {
    font-size: 10rem;
    font-weight: bold;
    color:rgb(78, 77, 77);
  }
  </style>
  