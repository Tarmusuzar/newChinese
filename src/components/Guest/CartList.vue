<template>

    <div class="cartList" >
        <loading-spinner v-if="loading"></loading-spinner>
        <div class="backD" v-if="showLoyalty">
            <guest-signin @goBack="goBack"></guest-signin>

        </div>
        <empty-cart v-if="$store.state.cart.length == 0"></empty-cart>
        <order-placed v-if="this.$store.state.orderPlaced"></order-placed>
        <hoverable-display @changeHolder="changeHolder" heading="Check Out Now" ></hoverable-display>
        <div class="sub">
            <h1 v-if="$store.state.scrollHoverableDisplay<227">Your Order</h1>
            <guest-options></guest-options>
            <div class="offers">
                <h3>Your Items</h3>
                <h3 @click="goToLoyalty" v-if="!this.$store.state.signedIn"  ><i class="fas fa-coins" style="color:gold"></i> Earn <span style="color:red">{{ totalBill/10 }}</span> Points</h3>
                <h3 @click="goToLoyalty" v-if="this.$store.state.signedIn" ><i class="fas fa-coins" style="color:gold"></i>  <span style="color:red">{{ this.$store.state.credentials.points + totalBill/10 }}</span> Points</h3>

            </div> 

            <div class="itemContainer">
                <ul class="cartDisplay" v-for="item in this.$store.state.cart" :key="item">
                    
                    <select name="qty" id="" @change="newValue(item.qty, item.price, item.id)" v-model="item.qty">
                        <option value="del"  >Remove</option>
                        <option value="1"  >1</option>
                        <option value="2" >2</option>
                        <option value="3" >3</option>
                        <option value="4">4</option>
                        <option value="6" >6</option>
                        <option value="7" >7</option>
                        <option value="8" >8</option>
                        <option value="9" >9</option>
                        <option value="10" >10</option>
                    </select>
               
            <ul class="name">
                <li ><b>{{ item.name }}</b></li>
                <li>{{ item.customizations.sauce }} Sauce</li>
                <li v-if=" item.customizations.request !=''">Notes : {{ item.customizations.request }} </li>
                
            </ul>
                <li>{{ item.totalPrice }}</li>
                <order-button
                class="btn"
                :title="'ORDER NOW'"
                :otherInfo="' '+'Dhs' +' '+totalBill"
                @click="authCode"
                
            ></order-button>
            
            </ul>
            <confirm-code v-if="confirmCode" 
            @goBack="confirmCode=false"
            @authenticate="authenticate"
            :wrongCode = wrongCode
            > </confirm-code>

            </div>

  
           

        </div>

    </div>

    
</template>

<script>
import ConfirmCode from './ConfirmCode.vue';
import LoadingSpinner from '../LoadingSpinner.vue';
import EmptyCart from '../Utils/EmptyCart.vue'
import OrderPlaced from './OrderPlaced'
import HoverableDisplay from '../Utils/HoverableDisplay.vue';
import OrderButton from '../Utils/OrderButton.vue';
import GuestOptions from './GuestOptions.vue';
import GuestSignin from './GuestSignin.vue';
export default {
    data(){
        return{
            showLoyalty:false,
            loading:false,
            quantity:[],
            confirmCode:false,
            result:'',
            wrongCode:false,
        }
    },
    methods:{
        authenticate(code){
            if(this.code == code){
                this.loading = true
                this.confirmCode = false

                setTimeout(() => {
                    this.checkOut()
                    this.loading = false

                }, 300);
            }else{
                this.wrongCode = true
            }
        },
        
        authCode(){
            
            
           if(this.$store.state.signedIn){

            let result = '';
            for (let i = 0; i < 4; i++) {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            result += randomNumber.toString();
            this.code = result
            }


            this.confirmCode = true
            fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/authCodes.json',{
                method:'post',
                body:JSON.stringify({
                    name:this.$store.state.credentials.name,
                    authNumber:result
                })
            })
           }else{
            this.checkOut()
           }
        },
        goBack(){
            this.loading = true 
            this.showLoyalty = false

            setTimeout(() => {
                this.loading = false

            }, 200);
        },
        goToLoyalty(){
            if(this.$store.state.signedIn){
                console.log('')
            }else{
                this.loading = true 
            setTimeout(() => {

                this.loading = false
                this.showLoyalty = true

            }, 200);
            }
        },
        changeHolder(){
            this.$store.state.cartList = false
            this.$store.commit('toggleHorizontalMenu')
            this.$router.go(-1)

        },
        
        checkOut(){
            const currentDate = new Date().toLocaleDateString();
            const currentTime = new Date().toLocaleTimeString();

            function generateUniqueId() {
            const now = new Date()
            const uniqueId = now.getTime().toString(36) + Math.random().toString(36).substr(2)
            return uniqueId
            }
            const id = generateUniqueId()


            this.$store.state.loading = true
            fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/newOrder.json',{
                method:'post',
                body:JSON.stringify({
                    orderDate:currentDate,
                    orderTime:currentTime,
                    orderNumber:id,
                    orderItems:this.$store.state.cart,
                   
                })
            }).then(()=>{
                setTimeout(() => {
                this.$store.state.loading = false
                this.$store.state.orderPlaced = true
 
            }, 1000)
            })
         
        },
        newValue(qty, price, id){
            this.$store.dispatch('updatePrices/increasePrice',{qty,price,id})
            
        }
    },
    mounted(){
        this.$store.commit('toggleHorizontalMenu')
    },
    computed:{
        totalBill(){
            return this.$store.state.bill
        },
        totalItems(){
            if(this.$store.state.cartCounter<10){
                return '0'+ this.$store.state.cartCounter
            }else{
                return this.$store.state.cartCounter
            }
        }
        
    },
    components:{
        ConfirmCode,
        LoadingSpinner,
        OrderPlaced,
        GuestOptions,
        OrderButton,
        HoverableDisplay,
        EmptyCart,
        GuestSignin
    },
    
}
</script>

<style scoped>
    .addItems {
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.addItems:hover {
  color: #0077cc;
  text-decoration: underline;
}
    .backrop{
        position: fixed;
        background-color: white;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
    }
    

    li{
        list-style-type: none;
    }
    .cartList{
        overflow: auto;
        margin-bottom: 10rem;
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
        text-align: flex-start;
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
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .cartDisplay img{
        width: 1rem;
    }
    .sub h1{
        text-align: center;
        margin-bottom: 3rem;
    }
    .sub{
        width: 100%;
    }
    select{
        display: flex;
        flex-grow: 0;
        justify-content: space-between;
        height: 1.7rem;
        min-width: 2rem;
        width: auto;
        border-radius: 15px;
        padding: .3rem;
        background-color: rgb(230, 236, 236);
        padding: 0 1rem;
        color: black;
       min-width: 2rem;
       border: 1px solid white;
       outline: none;
       font-size: 1.1rem;
       max-width: 5rem;

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
  .backD{
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: white;

  }
  
</style>