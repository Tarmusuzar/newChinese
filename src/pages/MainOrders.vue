<template>
    <orders-nav></orders-nav>
    <new-orders></new-orders>
</template>
<script>
import NewOrders from '../components/Orders/NewOrders.vue'
import OrdersNav from '@/components/Orders/OrdersNav.vue';
export default {
    components:{
        OrdersNav,
        NewOrders
    }
}
</script>