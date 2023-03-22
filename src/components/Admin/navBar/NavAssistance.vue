
<template>
    <div class="assistanceContainer">
        <div class= "contactHolder">   
                <i class="fa-solid fa-phone-volume"></i>
                <p>Call Francis</p>
                <p> 05478006354</p>
        </div>      
        
         <div class= "contactHolder">   
                <i class="fa-solid fa-envelope"></i>
                <p>Email Francis</p>
                <p> Tarmusuzar@gmail.com</p>
        </div> 
        
         <div class= "contactHolder">   
                <i class="fa-solid fa-message-bot"></i>
                <p>Talk to a Rebot</p>
                <p> Link here</p>
        </div> 
    </div>
</template>
<style scoped>
    .assistanceContainer,.contactHolder{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        width:80%;
        margin:3rem auto;
        box-shadow:0 0 2px 1px black;
    }
    .contactHolder{
        width:100%;
        box-shadow:0 0 0 0 black;
    }
    
</style>
