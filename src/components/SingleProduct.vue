<template>
    <ul class="single" v-for="item in theItem" :key="item"  >
        <div class="anotherHolder">
            <li @click="changeHolder" style="position:relative"><toggle-button icon="fa-solid fa-xmark" class="cancel" ></toggle-button></li>
            <div class="first">
                <li><img :src="item.image" alt=""></li>
                <li class="price">{{ item.name }}</li>
                <li class="price">Dhs {{ item.price }}</li>
            </div>

            <li>{{ item.description }}</li>
            <form action="">
            
                <input type="checkbox"> Spicy
            </form>
        </div>
        
            <order-button
            class="btn"
            title="Add 1 to Order"
            :id="item.price"
            :name="item.name"
            @click="addToCart({id:item.price,qty:1,name:item.name, image:item.image, price:item.price, totalPrice:item.price})"
             ></order-button>
        
        <!-- <button class="add" >Add 1 to order . Dhs {{ item.price }}</button> -->

        
    </ul>
</template>
<style scoped>
  
    ul li{
        list-style-type: none;
        font-size: 1.4rem;
    }
    .single{
      
        margin-top: 0;
        padding: 1rem;
       display: flex;
       flex-direction: column;
       overflow: auto;
       color: rgb(29, 28, 28);
    }
   
    .cancel{
        position: absolute;
        top: 5px;
        left: 5px;
        color: green;
        padding: .3rem .5rem;
        /* background-color: black; */
        
        



    }

    .first{
        display: flex;

        flex-direction: column;

    }
    
    .price{
        font-weight: 800;
    }
    .add{
        width: 90%;
        margin: 0 auto;
        color: white;
        background-color: black;
        padding: .6rem;
        font-size: 1.1rem;
        border-radius: 10px;
        position: fixed;
        bottom: 1rem;
    }

    .single img{
        width: 100%;
        border-radius: 4px;
        height: auto;
        max-height: 60vh;
    

    }
</style>
<script>
import OrderButton from './Utils/OrderButton.vue'
import ToggleButton from './Utils/ToggleButton.vue'
import { mapActions, mapMutations } from 'vuex'
    export default{
        data(){
            return{
                theItem : [],
            } 
        },
        methods:{
            ...mapActions(['addToCart']), 
            ...mapMutations(['toggleLoadingTrue', 'toggleLoadingFalse']),
            changeHolder(){
                this.toggleLoadingTrue()
                setTimeout(() => {
                    this.toggleLoadingFalse()

                }, 300);
                this.$router.go(-1)

            }
        },
        computed:{
            id(){
                return  this.$route.params.id
            }
        },
        inject:['combos','singleItem','theId','vegStarters','rice','noodles','products'],
        beforeMount(){
            if(this.$store.state.itemCategory === 'Combos'){
                this.theItem.push(this.combos.find(pdt=>pdt.price == this.$store.state.singleProductId))
            }
            else if(this.$store.state.itemCategory === 'Rice'){
                this.theItem.push(this.rice.find(pdt=>pdt.price == this.$store.state.singleProductId))

            }
            else if(this.$store.state.itemCategory === 'Starters Veg'){
            this.theItem.push(this.vegStarters.find(pdt=>pdt.price == this.$store.state.singleProductId))

            }
            
        },
        components:{
            ToggleButton,
            OrderButton
        }
    }

</script>
