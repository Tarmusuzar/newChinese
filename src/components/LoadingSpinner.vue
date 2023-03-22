<template>
    <div class="overlay-spinner">
  <div class="loading-spinner"></div>
</div>

</template>

<style scoped>
 /* The overlay */
.overlay-spinner {
  position: fixed; /* Sit on top of the page */
  display: flex; /* Center the spinner horizontally and vertically */
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  z-index: 9999; /* Sit on top of all other elements */
}

/* The spinner */
.loading-spinner {
  border: 4px solid #f3f3f3; /* Light grey color */
  border-top: 4px solid #3498db; /* Blue color */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}


</style>