<template>
    <div>

        <loading-spinner v-if="loading"></loading-spinner>
        <guest-nav></guest-nav>
        <router-view v-slot="{ Component }">
    <transition name="slie">
      <component :is="Component" />
    </transition>
  </router-view>
        <side-nav v-if="sideMenu"></side-nav>

    </div>
</template>
<script>
import SideNav from './components/Guest/SideMenu.vue'
import GuestNav from './components/Guest/GuestNav.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { mapState, mapMutations } from 'vuex'
export default{

    components:{
        SideNav,
        LoadingSpinner,
        GuestNav
    },
    computed:{
        theId(){
            return this.$route.params.id
        },
        ...mapState(['loading','sideMenu']),
        ...mapMutations(['toggleLoadingTrue', 'toggleLoadingFalse'])
    },
    data(){
        return{
            products:[],
            combos:[],
            noodles:[],
            rice:[],
            starters_veg:[],
            starters_chicken:[],
            starters_prawns:[],
            cartCounter:0,
            singleItem:[], 

        }
    },
    provide(){
        return{
            products:this.products,
            combos:this.combos,
            rice:this.rice,
            noodles:this.noodles,
            vegStarters:this.starters_veg,
            starters_chicken:this.starters_chicken,
            starters_prawns:this.starters_prawns,
            singleItem:this.singleItem

        }
    },
    beforeCreate(){
       
       
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products.json')
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
                return []
            }
        })
        .then(data=>{
            this.toggleLoadingTrue
            //push the fetched products to the products array as an object
            for(const dat in data){
               this.products.push({[dat]:data[dat]})
            }
                        
          const fetchProducts = (theCategory,folder)=>{
            for(const product in this.products){//loop through products
                for(const category in this.products[product]){
                    if(category ===theCategory){// if a category is combo, push the value of this category to the combos
                        for(const id in this.products[product]){
                            for(const item in this.products[product][id]){
                                folder.push(this.products[product][id][item]) 
                                     
                                    }           
                                        }
                                
                                
                            }
                   
                }
           }

          }
          fetchProducts('combos',this.combos)
          fetchProducts('noodles',this.noodles)
          fetchProducts('rice',this.rice)
          fetchProducts('starters_veg',this.starters_veg)
          fetchProducts('starters_veg',this.starters_chicken)
          fetchProducts('starters_veg',this.starters_prawns)
        this.toggleLoadingFalse

            
        })
        
       

    },
    
    watch:{
        theId(id){
            const itm = this.combos.find(pdt=>pdt.price == id)
            console.log(itm)
        },
    }
    
}
</script>
<style>

.btn{
    position: fixed;
    left: 10%;
    bottom: 2rem;
}
.button{
        width: 80%;
        color: white;
        background-color: black;
        padding: .6rem;
        font-size: 1.1rem;
        border-radius: 10px;
        /* position: fixed; */
        bottom: 1rem;
}
.slide-enter-active {
  animation: slide 0.1s ease-out forwards;
}

.slide-leave-active {
  animation: slide 0.1s ease-out forwards;
}

@keyframes slide {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
</style>