<template>
  <i :class="icon" id="add" ></i>
</template>
<script>
export default {
    props:['icon']
}
</script>
<style scoped>
     #add{
            position: absolute;
            color: black;
            background-color: white;
            border-radius: 50%;
            font-size: 1.8rem;
            top: 8px;
            right: 12px;
    
    
    
        }
        #add:hover{
            cursor:pointer ;
        }
</style>