<template>

    <div>
            <div class="backdrop" @click="this.$store.commit('changeSideMenu')">

</div>
    <div class="bigContainer">
        <div class="container">
            <div class="firstWrapper">
                <div class="credentials" v-if="this.$store.state.signedIn">
                    <h1 style="text-align: center;"><i class="fas fa-user"></i></h1>
                    <b>{{ this.$store.state.credentials.name }}</b>
                    <b>0{{ this.$store.state.credentials.number }}</b>
                    <b>{{ this.$store.state.credentials.points }} Points</b>

                </div>
                <div class="theButtons" v-if="!this.$store.state.signedIn">
                    <button @click="$emit('sideMenuFunction', 'login')">Login </button>
                    <button @click="$emit('sideMenuFunction', 'signup')"  class="signIn">Sign up</button>
                </div>

                <div class="options">
                    <p @click="$emit('sideMenuFunction', 'rewards')" v-if="this.$store.state.signedIn">My Orders</p>
                    <p @click="$emit('sideMenuFunction', 'rewards')" v-if="this.$store.state.signedIn">Delete Account</p>
                    <p @click="$emit('sideMenuFunction', 'complaint')">   Raise A Complaint</p>
                    <p @click="$emit('sideMenuFunction', 'careers')">Careers</p>
                    <p @click="$emit('sideMenuFunction', 'franchise')">Franchising</p>
                    <p @click="$emit('sideMenuFunction', 'delivery')">Home Delivery</p>

                  
                </div>
            </div>
       </div>
    
       
       <div class="contact-info">
          <div>
            <i class="fas fa-phone-alt"></i>
            <span>(971) 547800635</span>
          </div>
          <div>
          <i class="fas fa-envelope"></i>
             <span>gypsydalma@gmail.com</span>
           </div>
        </div>
        
   
    </div>
    </div>
</template>
<script>
export default {
    emits:['sideMenuFunction']
}
</script>
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
   button:hover, p:hover{
    cursor: pointer;
    
   }
   p:hover{
    text-decoration: underline;
   }
   .contact-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 80%;
    margin: 0 auto;
    }

.contact-info i {
  font-size: 20px;
  color: #c2185b;
}
.credentials{
    display: flex;
    flex-direction: column;
    border: 1px solid rgb(228, 220, 220);
    width: 90%;
    padding: 1rem;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
}
</style>