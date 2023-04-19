<template>
    <div>

        <loading-spinner v-if="loading"></loading-spinner>
        <guest-nav v-if="$route.path =='/' "></guest-nav>
        <router-view v-slot="{ Component }">
 
      <component :is="Component" />
    
  </router-view>
        <side-nav v-if="sideMenu"
         @sideMenuFunction="sideMenuFunction"
         ></side-nav>

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
        ...mapMutations('addToCart',['toggleLoadingTrue', 'toggleLoadingFalse'],'changeSideMenu')
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
    methods:{
        sideMenuFunction(option){
            this.$store.commit('changeSideMenu')
            if(option == 'complaint'){
                this.$router.push('/satisfactory')

            }else if(option == 'franchise'){
                this.$router.push('/franchise')

            }
            else if(option == 'careers'){
                this.$router.push('/careers')

            }
            else if(option == 'delivery'){
                this.$router.push('/delivery')

            }
            else if(option == 'rewards'){
                this.$router.push('/rewards')

            }
            else if(option == 'login'){
                this.$router.push('/auth')
            }
            else if(option =='signup'){
                this.$router.push('/auth?opt=signup')

            }
            
        }
    },
    beforeCreate(){
       
    
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/gypsy.json')
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
                this.products.push({id:dat,...data[dat]})
                this.$store.state.theFullMenu.push({id:dat,...data[dat]})

               

            }

          const fetchProducts = (theCategory,folder)=>{
             this.products.forEach(product=>{
                if(product.category ===theCategory){// if a category is combo, push the value of this category to the combos
                    folder.push(product)    
                }

           
             })

                    

          }


          fetchProducts('combos',this.combos)
          fetchProducts('noodles',this.noodles)
          fetchProducts('rice',this.rice)
          fetchProducts('starters',this.starters_veg)
          fetchProducts('starters_veg',this.starters_chicken)
          fetchProducts('starters_veg',this.starters_prawns)
        this.toggleLoadingFalse
        
            
        })
        
       

    },
    
    
}
</script>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

.btn{
    position: fixed;
    left: 2.5%;
    bottom: 2rem;
   
    
}
.button{
        width: 80%;
        color: white;
        background-color: black;
        padding: .6rem;
        font-size: 1.1rem;
        border-radius: 7px;
        /* position: fixed; */
        bottom: 1rem;
}
li{
    list-style-type: none;
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


</style>