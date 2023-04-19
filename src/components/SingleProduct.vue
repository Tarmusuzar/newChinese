<template>
    <loading-spinner v-if="this.$store.state.loading"></loading-spinner>
    <ul class="productContainer" >

        <hoverable-display @changeHolder="changeHolder"></hoverable-display>
        <div class="productDescription">

            <div class="productDetails">
                <li><img :src="item.image" alt=""></li>
                <li class="mainDetail">{{ item.name }}</li>
                <li class="mainDetail">Dhs {{ item.price }}</li>
                <li >{{ item.description }}</li>
            </div>
            <p
                v-if="$store.state.noSauce"
                style="
                color: red;
                width: 90%;
                margin-left: 3%;
                padding: .3rem;

            ">You Must Select One Sauce</p>
            <form>
                
                <label for="spicy">Choice of Sauce</label>
                <div class="sauce" v-for="sauce in sauces" :key="sauce">
                    <p>{{ sauce.name }}<i :class="{'fas fa-pepper-hot':sauce.level=='medium' || sauce.level =='very'}" id="spiceness"></i><i id="spiceness" class="fas fa-pepper-hot" v-if="sauce.level == 'very'"></i></p> 
                    <input type="radio" name="spicy" :value="sauce.name" v-model="selectedSauce"  >
                </div>
                <label for="spicy">Special Request</label>
                <textarea name="" id="" cols="30" rows="10" v-model="specialRequest"></textarea>
                
            </form>            
        </div>
        <div class="backDrop"></div><!--create a blurr effect at the bottom of the page-->
        <order-button
            class="btn addBtn"
            title="Add 1 to Order"
            :otherInfo="item.price +' '+'AED'"
            :id="item.price"
            :name="item.name"
            
            
            @click="addToCart(
                {id:item.price,
                name:item.name,
                qty:1, 
                image:item.image, 
                price:item.price, 
                totalPrice:item.price, 
                customizations:{sauce:selectedSauce,request:specialRequest} ,
                goHome :function(){
                    $router.go(-1)
                }
                })"
        ></order-button>
     </ul>
    
</template>
<style scoped>
    .productContainer{
        overflow: scroll;
      width: 100%;
       color: rgb(29, 28, 28);
    }
  
    .productDescription{
        min-height: 80vh;
        margin-bottom: 20vh;
        width: 100%;
    }
    .productDetails{
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }
    .productDetails img{
        width: 100%;
        border-radius: 4px;
        height: auto;
        max-height: 60vh;   

    }
    .marg1{
        margin-left: 1rem;
    }
    .mainDetail{
        font-weight: 800;
    }
    select{
        width: 90%;
        font-size: 1.4rem;
        margin-left: 5%;
    }
    .backDrop{
        position: fixed;
        bottom: 0;
        width: 100%;
        right: 0;
        left: 0;
        background-color: rgb(223, 222, 222,.5);
        height: 3rem;        
    }
     
    ul li{
        list-style-type: none;
        font-size: 1.4rem;
    }  
    
    
   
    label{
        justify-self: flex-start;
        width: 100%;
        flex-shrink: 0;
        margin-left: 0;
        flex-grow: 0;
        display: block;
        margin-right: 0;
        background-color: rgb(244, 241, 241);
        height: 2rem;
        padding: 2rem;
        padding-left: 1rem;
        margin: .5rem 0;
        display: flex;
        align-items: center;
        
    }
    textarea:focus{
        border: 1px solid gray;
        outline: none;
    }
    textarea{
        font-size: 1rem;
        width: 90%;
        margin-left: 5%;
        height: 4rem;
    }
    .sauce{
        display: flex;
        width: 97%;
        justify-content: space-between;
        margin-left: 1.5%;
        margin-right: 1.5%;
        padding: 1rem;
        border-bottom: 1px solid rgb(219, 217, 217);
    }
    #spiceness{
        color: red;
    }
    
    
</style>
<script>
import HoverableDisplay from './Utils/HoverableDisplay.vue'
import OrderButton from './Utils/OrderButton.vue'
import { mapActions, mapMutations } from 'vuex'
import LoadingSpinner from './LoadingSpinner.vue'
    export default{
        data(){
            return{
                specialRequest:'',
                selectedSauce:'',
                item : [],
                products:[],

                sauces:[
                    { name: "Black Bean", level: "low" },
                    { name: "Burnt Chilly", level: "very" },
                    { name: "Chilly", level: "medium" },
                    { name: "Hot Garlic", level: "medium" },
                    { name: "Hot Plate", level: "very" },
                    { name: "Machurian", level: "low" },
                    { name: "Schezwan", level: "medium" },
                    { name: "Sweet & Sour", level: "low" }
                    ]
,
                
            } 
        },
        
        methods:{
            ...mapActions('addToCart',['addToCart']), 
            ...mapMutations('addToCart',['toggleLoadingTrue', 'toggleLoadingFalse']),
            changeHolder(){
                this.toggleLoadingTrue()
                setTimeout(() => {
                    this.toggleLoadingFalse()

                }, 300);
                this.$router.go(-1)

            },
            
        },
        beforeMount(){
            this.$store.state.loading = true
            fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/gypsy/'+ this.$route.query.id+'.json')
                .then(res=>{
                    return res.json()
                })
                .then(item=>{
                    this.item = item
                    this.$store.state.loading = false

                })
        },
        
        
        components:{
            LoadingSpinner,
            OrderButton,
            HoverableDisplay
        },
        
    }

</script>