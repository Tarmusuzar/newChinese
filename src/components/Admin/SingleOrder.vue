<template>
    <div class="order-details">
      <div class="backdrop"  @click="close"></div>
       
            <div class="order-details-content" >
                <div class="header">
            <h2>{{ restaurantName }}</h2>
            <div class="order-number"><b>Invoice No: </b>{{ orderNumber }}</div>
            <div class="order-date"><b>Order Date: </b>{{ orderDate }}</div>
            <div class="order-date"><b>Order Time: </b>{{ orderTime }}</div>
            <div class="order-time"></div>
        </div>
        <div class="customer-name" style="margin-bottom: 1rem;"><b>Customer Details: </b>{{ customerName }}</div>
        <p style="margin-bottom: 1.5rem; text-align: center; text-decoration: underline; font-weight: 600;">Order</p>
        <table id="table" >
          <tr >
            <th>QTY</th>
            <th>ITEM</th>
            <th>TOTAL</th>
          </tr>

          <tr v-for="(item, index) in orderItems" :key="index" class="md">
            <td >{{ item.qty }}</td>
            <td>{{ item.name }} <br><i v-for="it in item.customizations" :key="it"> -{{ it }}</i></td>
            <td>{{ item.price }}</td>
          </tr>

          <tr></tr>
          
          <tr v-if="discount">
            <td class="noBorder"></td>
            <th style="text-align: right; "> Discount:</th>
            <td class="noBorder">{{ discount }}</td>
          </tr>
          <tr >
            <td class="noBorder"></td>
            <th style="text-align: right; " > Total:</th>
            <td class="noBorder">{{ total }}</td>
          </tr>
        </table>


        
       
       
        <div class="order-actions">
          <button @click="close(orderNumber)" :style="{backgroundColor : isNewOrder?'red':'red' }">{{ isNewOrder ?'Reject' :'Back' }}</button>
          <button @click="accept" :style="{backgroundColor : isNewOrder?'green':'orange' }">{{ isNewOrder ? 'Accept':'Print' }}</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [
      'isNewOrder',
      'showBackdrop',
      'showOrder',
      'restaurantName',
      'orderNumber',
      'orderDate',
      'orderTime',
      'customerName',
      'orderItems',
      'vatTax',
      'discount',
      'total'
  ]
    ,
    methods: {
      close(id) {
        if(this.isNewOrder){
         
          if(confirm('Are you sure you want to decline this order?')){
            this.$emit('rejectOrder',id)
          }
        }else{
          this.$emit('close');

        }
      },
    
      accept() {
      if (this.isNewOrder) {
        this.$emit('acceptOrder')
      } else {
        const printStylesheet = document.createElement('link');
        printStylesheet.rel = 'stylesheet';
        printStylesheet.type = 'text/css';
        printStylesheet.href = 'print.css';
        document.head.appendChild(printStylesheet);

        const content = document.querySelector('.order-details-content').innerHTML;
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head>');
        printWindow.document.write('<title>Order Details</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(content);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
        printStylesheet.remove();
  }
},

    },
  };
  </script>
  
  <style scoped>
  
  
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .order-details-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    z-index: 1000;
    width: 80%;
    max-width:40rem ;
    height: auto;
    min-height: 60vh;
    max-height: 80vh;
    overflow: auto;
   
  }
  .header  {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: gray;
  }
  .table{
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    margin-bottom: .6rem;
  }
  .bill{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 1rem;

    
  }
  .order-actions{
    
    
    width: 100%;
    display: flex;

    justify-content: center;
  bottom: 1rem;    
  }
  .order-actions>button{
    flex-grow: 1;
    margin: 0 .4rem;
    font-size: 16px;
    color: white;
    background-color: #45f554;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
  }
  
  #table{
    width: 80%;
    margin: 0 auto;
    overflow: hidden;
    border: none;
    border-spacing: 0 1rem ;

  }
  td{
    text-align: center;
  }
  tr,td,th{
    border: none;
    width: 30px;
    overflow: hidden;
    
  }
  td{
    border-bottom: 1px solid rgb(235, 231, 231);
  }
  .noBorder{
    border-bottom: none;
  }
  .reject{
    color: red;
    background-color: red;
  }
 

  </style>
  