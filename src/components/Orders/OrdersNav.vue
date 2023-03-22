<template>
  <div class="cont">
    <ul class="ordersContainer">
        <!-- <li>Dashboard</li> -->
        <li class="selected">New Orders</li>
        <li>Completed Orders</li>
        <li>Order History</li>

    </ul>
  </div>
</template>
<style scoped>
    .selected{
        color: rgb(238, 228, 228);
        text-decoration: underline;
    }
    .cont{
        background-color: rgb(234, 43, 43);
    }
    .ordersContainer{
        justify-content: space-around;
        white-space: nowrap;
        font-size: 1.3rem;
        color: white;
        display: flex;
        width: 80%;
        padding: 1rem;
        margin: 0 auto;
        background-color: transparent;
    }
    li{
        list-style-type: none;
    }
</style>