<template>
    <div class="cartList" >
        <p @click="cancel" style="position:relative">
            <span class="cancel"><toggle-button icon="fa-solid fa-xmark"></toggle-button></span>
        </p>
        <div class="sub">
            <h1>Your Order</h1>
            <div class="offers">
                <button><i class="fa-solid fa-plus"></i> Add Items</button>
                <button>20% Off</button>
                <button>Loyalty</button>
            </div>

            <div class="itemContainer">
                <ul class="cartDisplay" v-for="item in this.$store.state.cart" :key="item">
                <li class="qty">
                    {{ item.qty }}

                    <i class="fa-solid fa-caret-down"></i>
                </li>
            <ul class="name">
                <li ><b>{{ item.name }}</b></li>
                <li>Ads</li>
                
            </ul>
                <li>{{ item.totalPrice }}</li>
            
            </ul>
            </div>
            <order-button
                class="btn"
                :title="'Go to checkout'"
                :otherInfo="' '+'Dhs' +' '+totalBill"
                @click="checkOut"
                
            ></order-button>

        </div>
    </div>
    
</template>

<script>
import OrderButton from '../Utils/OrderButton.vue';
import ToggleButton from '../Utils/ToggleButton.vue';
export default {
    methods:{
        cancel(){
            this.$store.state.cartList = false
        },
        checkOut(){
            fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/newOrder.json',{
                method:'post',
                body:JSON.stringify({
                    name:'Mee Goreng'
                })
            })
            this.cancel()
        }
    },
    computed:{
        totalBill(){
            return this.$store.state.bill
        }

    },
    components:{
        ToggleButton,
        OrderButton
    }
}
</script>

<style scoped>

    .cartList{
        position: fixed;
        background-color: white;
        height: 10 0vh;
        overflow: hidden ;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .cancel{
        position: absolute;
        top: 6px;
        left: 47px;
        background-color: white;
        color: black;
        border-radius: 50%;
        padding: .3rem .5rem;  



    }

    li{
        list-style-type: none;
    }
    .itemContainer{
        height: 40vh;
        overflow-y: auto;
    }
    .cartDisplay{
        width: 90%;
        border-bottom: 1px solid gray;
        display: flex;
        margin: 0 auto 0 auto;
        justify-content: space-evenly;
        align-content: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;

    }
    .name{
        flex-grow: 1;
        max-width: 9rem;
        text-align: center;
        /* background-color: red; */
    }
    .offers>button{
        color: rgb(40, 40, 40);
        border-bottom: 1px solid gray;
        border: none;
        border-radius: 1rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin-right: 1rem;
        align-items: center;
        max-height: auto;
        max-width: auto;
        font-weight: 510;
        font-size:1.2rem ;
        padding: .5rem;
        
    }
    .offers{
        margin: 1rem auto 3rem auto;
        width: 95%;
        display: flex;
        justify-content: flex-start;
    }
    .cartDisplay img{
        width: 1rem;
    }
    .sub h1{
        text-align: center;
        margin-bottom: .6rem;
    }
    .sub{
        width: 100%;
        margin-top:8vh;
    }
    .qty{
        display: flex;
        flex-grow: 0;
        justify-content: space-between;
        height: 1.7rem;
        min-width: 2rem;
        width: auto;
        border: none;
        border-radius: 15px;
        padding: .3rem;
        background-color: rgba(212, 214, 214, 0.935);
    }
  .checkout{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }
  .checkout>button{
   
        width: 90%;
        margin: 0 auto;
        color: white;
        background-color: black;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 10px;
        position: fixed;
        bottom: 1rem;
    

  }
    
</style>