<template>

    <div>
            <div class="backdrop" @click="this.$store.commit('changeSideMenu')">

</div>
    <div class="bigContainer">
        <div class="container">
            <div class="firstWrapper">
                <div class="theButtons">
                    <button>Login </button>
                    <button class="signIn">Sign in</button>
                </div>

                <div class="options">
                    <p>Join The Reward Program</p>
                    <p>I Have A Complaint</p>
                    <p>I need A Job</p>
                    <p>Give A Rating</p>
                </div>
            </div>
       </div>
    
       
       <div>
        <p style="text-align: center;">Created by Francis</p>
       </div>
        
   
    </div>
    </div>
</template>
<style scoped>

.backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(193, 191, 191, 0.4);
}
.bigContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 100vh;
    position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 80%;
}
    .container{
        height: 80vh;
        
      
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }
    .firstWrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
        height: auto;
        min-height: 40vh;
    }
   button{
    padding: 1rem;
    border-radius: 7px;
    background-color: black;
    color: white;
    border: none;

   }
   .theButtons,.options{
    display: flex;
    flex-direction: column;
    width: 80%;
   }
   .theButtons>button{
    margin: .5rem 0;
    font-size: 1.2rem;
   }
  
   .options>p{
    padding: .5rem;
   }
   .signIn{
    background-color: rgb(239, 238, 238);
    color: black;
   }
</style>