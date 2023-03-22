<template>
    <button class="button" >{{ title }} 
    <span class="onViewOrder" v-if="this.$store.state.holder == 'guest-wrapper' && !this.$store.state.cartList ">
        <b class="items">{{ items }}</b>
        <b class="bill">{{ bill }}</b>
    </span>
    <span class="period" v-if="this.$store.state.cartList "><i class="fa-solid fa-circle"></i></span>
    {{ otherInfo }}</button>
</template>
<script>
export default {
    props:['title','otherInfo','items','bill']
}
</script>
<style scoped>
    .period{
        font-size: .3rem;
        text-align: center;
        padding: 0 .4rem;
    }
   
    .onViewOrder{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 6rem;
    }
    .items,.bill{
        border: 1px solid white;
        border-radius: 50%;
        padding: .1rem;
        background-color: white;
        color: black;
    }
    .button{
        align-items: center;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: center   ;
    }
</style>
