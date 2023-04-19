<template>
    <div>
        <guest-wrapper @single-product = singleProduct>
        </guest-wrapper>

    <order-button
    v-if="cartLength"
     class="btn"
     title="View Order"
     @click="checkout"
     :items="totalItems"
     :bill="bill"
      ></order-button>
      <horizontal-menu v-if="this.$store.state.scrollY>227 && this.$store.state.hideHorizontalMenu &&!this.$store.state.cartList"></horizontal-menu>
    </div>




</template>

<script>
import HorizontalMenu from '@/components/Guest/HorizontalMenu.vue';
import OrderButton from '@/components/Utils/OrderButton.vue';
import { mapGetters, mapState, mapMutations } from 'vuex';
import GuestWrapper from './GuestWrapper.vue';
export default {
    components:{
        OrderButton,
        HorizontalMenu,
        GuestWrapper,
    },
    data(){
        return{
            singleItem:'single-product',
            theId:8,
            scrollY
        }
    },
    inject:['combos','vegStarters','rice','noodles'],

    methods:{
        
        // showProduct(id){
        //     this.$store.state.cartCounter++
        //     this.$router.push('/product/'+id)
        // },
        singleProduct(id,itemCategory){
            this.$router.push('/item')

            // this.toggleLoadingTrue
            // this.$store.state.holder = 'single-product'
            this.$store.state.singleProductId = id
            this.$store.state.itemCategory = itemCategory
           

            

        },
        checkout(){
            this.$router.push('/checkout')
            // this.$store.state.cartList = true
            
        }
    },
    computed:{
        ...mapGetters(['theCounter']),
        ...mapState(['holder','cartList','bill']),
        ...mapMutations(['toggleLoadingTrue','toggleLoadingFalse']),

        cartLength(){
            return this.$store.state.cart.length>0 &&
             this.$store.state.holder !== 'single-product'&&
             this.$store.state.cartList !== true
            
        },
        totalItems(){
            if(this.$store.state.cartCounter<10){
                return '0'+ this.$store.state.cartCounter
            }else{
                return this.$store.state.cartCounter
            }
        }

    },
    provide(){
        return{
            theId:this.theId
        }
    },
    mounted(){
        this.$store.commit('monitorScrollY', 'MainGuest')
    }}
    
</script>
<style scoped>
.menuContainer{
    overflow: hidden;
    height: 100vh;
}




</style>