<template>
  <div class="error">
    <i id="err" class="fa-solid  fa-triangle-exclamation"></i>
    <h1>Oh Oh, Something Went Wrong</h1>
  </div>
</template>
<style scoped>
.error{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 1rem auto;
  align-items: center;
  color: rgb(65, 64, 64);
}
#err{
  font-size:4rem;
  color: red;
}
</style>