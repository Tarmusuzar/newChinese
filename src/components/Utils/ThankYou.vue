<template>
    <div class="nkalskl-feedback">
      <h2>Thank You for Your Feedback!</h2>
      <p>We appreciate your input and will use it to improve our service.</p>
      <button @click="goHome">Go Home</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        // Replace this with the appropriate route to your home page
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .nkalskl-feedback {
    background-color: red;
    color: white;
    padding: 20px;
  }
  
  .nkalskl-feedback h2 {
    margin-top: 0;
  }
  
  .nkalskl-feedback button {
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  </style>
  