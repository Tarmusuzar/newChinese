<template>
    <div class="guestContainer">
        <ul class="first">
            <li @click="toggleSideMenu"><i class="fa-solid fa-bars"></i></li>
            <li >Francis <span class="label">Chinese</span></li>
        </ul>
        <ul class="last">
            <ul class="theCart" @click="showCartList">
                <li ><i class="fa-solid fa-cart-shopping"></i></li>
                <span class="cartCounter">{{this.$store.state.cartCounter  }}</span>
            </ul>
            <li @click="$router.push('/auth')" v-if="!this.$store.state.signedIn"><b style="font-size: 1rem; font-weight: 100;">Login</b></li>
            <li @click="toggleSideMenu" v-if="this.$store.state.signedIn"><b style="font-size: 1rem; font-weight: 100;"><i class="fas fa-user"></i></b></li>
            
        </ul>
    </div>
</template>

<script>
export default {

    methods:{
   
        showCartList(){
            this.$router.push('/checkout')
        },
        toggleSideMenu(){
            this.$store.commit('changeSideMenu')
        }
    }
}
</script>


<style scoped>
    .theCart{
        display: flex;
    }
    .theCart>li{
        list-style-type: none;
    }
    .cartCounter{
        background-color: red;
        color: white;
        border-radius: 40px;
        padding:0 .3rem;
    }

    .guestContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 97%;
        margin: .4rem auto;
        color: rgb(81, 79, 79);
        

    }
     .guestContainer>ul>li{
        list-style-type: none;
        font-size: 1.4rem;
        
    }
    .last,.first{
        display: flex;
        align-items: center;
    }
    
    .first{
        flex-basis: auto;
        flex-grow: 0;
        justify-content: space-around   ;
        flex-grow: 1;
    }
       
    .last{
        justify-content: space-around;
        flex-grow: 1;
    }
    .label{
        font-weight: 700;
    }
    .last>li>button, .last>li>.fa-cart-shopping{
        font-size: .9rem;
        padding: .4rem;
        border: none ;
        border-radius: 1rem;
        /* font-weight: 600; */
        background-color: rgb(248, 240, 240);

    }
    .fa-cart-shopping{
        border-radius: .2rem;
        text-align: center;
        align-self: center;

    }
 


</style>
