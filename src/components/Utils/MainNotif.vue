<template>
    <div>
      <div class="backdrop" :style="{ backgroundColor: backdropColor }"></div>
      <div class="dialog-box">
        <h2>GYPSY CHINESE RESTAURANT</h2>
        <p>-DINE IN ORDER-</p>
       <div class="buttons">
        <button class="accept" @click="$emit('accept')">Accept</button>
        <button class="decline" @click="$emit('accept')">Decline</button>
       </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        backdropColor: 'red',
        isFlashing: true,
      };
    },
    mounted() {
      setInterval(() => {
        this.backdropColor = this.isFlashing ? 'green' : 'red';
        this.isFlashing = !this.isFlashing;
      }, 500);
    },
    methods: {
      closeDialog() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style>
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    animation: flashing 1s linear infinite;
  }
  
  @keyframes flashing {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
  
  .dialog-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 70vh;
    border-radius: 7px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  .buttons{
    margin-top: 45vh;
    margin-left: 50%;
    display: flex;
  }
  .accept,.decline{
    color: white;
    background-color: green;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  .decline{
    background-color: red;
    margin-left: 1rem;
  }
  </style>
  