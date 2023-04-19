<template>
    <div class="backrop">
        <div class="congratulations">
      <i class="fas fa-check-circle" id="done"></i>
      <h2>Congratulations!</h2>
      <p>Your order has been received. It will be ready in the next 10 minutes.</p>
      <button class="button" @click="goBack">Okay</button>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goBack() {
        // Navigate the user back to the previous page or route
        this.$router.push('/');
        this.$store.commit('resetVuex')
      }
    }
  };
  </script>
  
  <style scoped>
  .backrop{
    position: fixed; /* Sit on top of the page */
  display: flex; /* Center the spinner horizontally and vertically */
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white; /* Transparent white background */
  z-index: 9999; 
   } 
  .congratulations {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }
  
  .fas {
    color: green;
    font-size: 3em;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #0069d9;
  }
  #done{
    color:green;
    font-size: 2rem;
  }
  </style>
  