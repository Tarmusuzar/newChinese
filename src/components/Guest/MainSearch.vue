<template>
  <div class="search-component">
    <div class="back-btn" @click="goBack">
      <i class="fas fa-arrow-left"></i>
    </div>
    <div class="search-bar">
      <input type="text" @input="filter" v-model="searchQuery" placeholder="Search...">
      <i class="fas fa-search"></i>
    </div>
    <ul class="menu" v-for="(item, index) in filteredItems" :key="index" @click="loadSingle(item.id)">
      <ul>
        <b>{{ item.category }}</b>
        <li >{{ item.name }}</li>
       <li >AED {{ item.price }}</li>
       <i class="fas fa-cart-plus" id="cart"></i>
      </ul>
      <li ><img :src="item.image" alt=""></li>
    </ul>
  </div>
  <order-button
    v-if="$store.state.cart.length>0"
     class="btn"
     title="View Order"
     @click="$router.push('/checkout')"
     :items="totalItems"
     :bill="$store.state.bill"
      ></order-button>
</template>

<script>
import OrderButton from '../Utils/OrderButton.vue'
export default {
  data() {
    return {
      items: [],
      searchQuery:'' ,
      sample:[],
      filteredItems:[]
    }
  },
  computed:{
 
      totalItems(){
            if(this.$store.state.cartCounter<10){
                return '0'+ this.$store.state.cartCounter
            }else{
                return this.$store.state.cartCounter
            }
        }
    
  },
  components:{
    OrderButton
  },
  
  methods: {
    filter() {
      
      const theItem =this.items.filter((item) => {
        return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
      this.filteredItems = theItem

    },
    goBack() {
      this.$router.go(-1)
    },
    loadSingle(id){
      this.$router.push('/item?id='+id)
    }

  },
  beforeMount(){
    this.$store.state.theFullMenu.forEach(item=>{
      this.items.push(item)
    })
  }
}
</script>

<style scoped>
.search-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.back-btn {
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
}

.search-bar {
  max-width: 20rem;
  min-width: 17rem;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
}

.search-bar input {
  font-size: 1.2rem;

  border: none;
  outline: none;
  padding: 5px;
  flex: 1;
}

.search-bar i {
  margin-left: 10px;
  color: #333;
}

.menu {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  height: auto;
  max-height: 100px;
  width:99% ;
  justify-content: space-between;
  border-bottom: 1px solid rgb(233, 230, 230);
  margin-top: .3rem;
  padding: .6rem;

}



.menu li img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.menu li h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.menu li p {
  margin: 0;
  font-size: 16px;
  color: #999;
}

.menu li span {
  font-size: 20px;
  font-weight: 600;
}
#cart{
  border: 1px solid rgb(230, 222, 222);
  width: 2rem;
  padding: .3rem;
  color: green;
}
</style>
