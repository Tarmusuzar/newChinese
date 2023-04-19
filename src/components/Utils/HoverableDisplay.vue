<template>
    <div class="productHeader" :class="{'fixed':$store.state.scrollHoverableDisplay>50}" >
    <!--add class 'fixed' if page scrolled past 7px-->
   <li @click="$emit('changeHolder')">
       <toggle-button icon="fa-solid fa-xmark remove" class="cancel" ></toggle-button>
   </li>
   <h1 v-if="$store.state.scrollHoverableDisplay>50"  >Your Order</h1>
   <!--visible if page scrolled past 7px-->            
</div>
</template>
<style scoped>
 .productHeader{
        width: 100%;
        height: 10vh;
        background-color: white;

    }
    
    .productHeader>h1{
        text-align: center;
        line-height: 2rem;
        margin-top: 1rem;
    }
   
    .cancel{
        position: absolute;
        top: 5px;
        left: 5px;
        color: green;
        padding: .3rem .5rem;
        background-color: black;
    }
    .fixed{
        position: fixed;
        border-bottom: 2px solid rgb(221, 218, 218);
    }
    ul li{
        list-style-type: none;
        font-size: 1.4rem;
    } 
</style>
<script>
import ToggleButton from './ToggleButton.vue'
    export default{
        data(){
            return{
                scroll:0

            }
        },
        components:{
            ToggleButton
        },
        emits:['changeHolder'],
        mounted(){
            this.$store.commit('monitorScrollY', 'aother')        
    }}
    
</script>