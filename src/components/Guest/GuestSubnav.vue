<template>
    <div class="subNav">
        <img src="../../assets/portugal.jpg" alt="">
        <div class="icons">
            <i class="fa-solid fa-magnifying-glass fa" id="fa1"></i>
            <i class="fa-light fa-heart fa" id="fa"></i>
        </div>
    </div>
    <guest-options></guest-options>
</template>
<script>
import GuestOptions from './GuestOptions.vue'
export default {
    
    components:{
        GuestOptions
    }
}
</script>
<style scoped>
.subNav{
    position: relative;

}
    .subNav>img{
        width: 100%;
        height: 9rem;
        background-size: contain;
        
    }
    .icons{
        display: flex;
        background-color: transparent;
        position: absolute;
        bottom:1rem;
        right:2rem;
        width: auto;
        justify-content: space-between;
   
    }
    #fa{
        background-color: white;
        color: red;
        padding:.3rem;
        border-radius: 50%;
        text-align: center;

    }
    #fa1{
        background-color: white;
        color: black; 
        padding:.3rem;
        margin-right: .4rem;
        border-radius: 50%;

    }
</style>