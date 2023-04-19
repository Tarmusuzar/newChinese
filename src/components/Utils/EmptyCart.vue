<template>
    <div v-if="$store.state.cart.length == 0">
    <div class="emptyCart">
    <i class="fas fa-shopping-cart fa-5x"></i>
    <i class="fas fa-exclamation-circle fa-2x"></i>
   </div>
  <div class="emptyCart ext">
    <b>Empty Cart</b>
    <p>Looks like you haven't made your choice yet</p>
    <button @click="$router.replace('/')">Back to Menu</button>
  </div>

  </div>
</template>
<script></script>
  <style scoped>
  .emptyCart{
    position: absolute;
     top: 0;
      left: 0; 
      right: 0; 
      bottom: 0; 
      display: flex; 
      align-items: center; 
      justify-content: center;
  }
  .emptyCartContainer{
    display: flex;
  } 
  .ext{
    margin-top: 16rem;
    flex-direction: column;
  }
  .ext>button{
    padding: .7rem;
    font-size: 1.3rem;
    width: 70%;
    margin-top: 3rem;
    color: white;
    background-color: red;
    border-radius: 10px;
    border: 1px solid rgb(218, 213, 213);
  }
  </style>