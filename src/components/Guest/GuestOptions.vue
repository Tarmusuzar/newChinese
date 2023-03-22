<template>
    <ul class="options">
        <li @click="changeOption('dineIn')" :class="{toggleOptions:toggleOptions === 'dineIn'}">Dine In <i class="fa-solid fa-utensils"></i></li>
        <li  @click="changeOption('takeAway')" :class="{toggleOptions:toggleOptions === 'takeAway'}">Take Away <i class="fa-solid fa-bag-shopping"></i></li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            toggleOptions:'dineIn'
        }
    },
    methods:{
        changeOption(option){
            this.toggleOptions = option
        }
    }
}
</script>
<style scoped>
    .options{
        display: flex;
        width: 90%;
        margin: 0 auto;
        justify-content: space-around;
        border:none;
        background-color: rgb(222, 221, 221);
        border-radius: 8rem;
    }
    ul>li{
        padding: .5rem;
        width: 90%;
        text-align: center;
        margin: 0 auto;
        border-radius: 5rem;
        
        
    }
    ul>li:hover{
        cursor: pointer;
    }
    li{
        list-style-type: none;
    }
    .toggleOptions{
        background-color: red;
        color: white;
        font-weight: 600;
    }
</style>