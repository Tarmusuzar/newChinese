<template>
  <loading-spinner v-if="loading"></loading-spinner>
  <div style="display: flex; background-color: white; flex-direction: column; justify-content: center; height: 90vh; align-items: center;">
    <form action="">
      <h2 style="color:gold"><i class="fas fa-coins"></i>
</h2>
      <h2>{{ isLogin ? 'Earn Points' :'Sign Up'}}</h2>

      <div class="numberHolder" v-if="!isLogin">
        <label for="name" class="code fst"><i class="fas fa-user"></i></label>
        <input class="name"  id="name" type="text" placeholder="Name" v-model="name">
      </div>

      <div class="numberHolder ">
        <label for="number" class="code">+971</label>
        <input v-model="number" class="number validNumber" type="number" id="number" :class="{invalidNumber:invalidNumber}" placeholder="Mobile Number" @input="crossCheck">
      </div>
      <div class="numberHolder fetchedUser" v-if="theUser !=''" >
        <h4 v-if="theUser !=''" @click="proceed">{{ theUser }}</h4>
      </div>


      <div class="otherOptions buttons">
        <button :disabled="invalidNumber" @click.prevent="login" style="background-color:green ; " >{{ isLogin ? 'Login' :'Sign Up'}}</button>
        <button @click.prevent="notIntersted">Go Back</button>
      </div>
      <div class="otherOptions ">
        <p @click="toggleLogin">{{ isLogin ? 'Sign up' :'Login'}} Instead</p>
        <b style="color:gray" class="sep">|</b>
        <p @click.prevent="notIntersted">Not Interested</p>
        
      </div>
    </form>
  </div>
 
</template>
<script>
import LoadingSpinner from '../LoadingSpinner.vue'
export default{
  data(){
    return{
      isLogin:true,
      isSignup:false,
      invalidNumber:false,
      number:'',
      name:'',
      users:[],
      theUser:'',
      loading:false
    }
  },
  emits:['goBack'],
  methods:{
    toggleLogin(){
      this.isLogin= !this.isLogin
      this.theUser = ''
      this.name =''
      this.number =''
      
    },
    proceed(){
      if(!this.invalidNumber){
       
        this.login()


      }
      
    },
    notIntersted(){
      this.$router.go(-1)
    },
    
    crossCheck(){
      const regex = /^(5\d{8}|05\d{9})$/;

      if(this.isLogin){
       if(regex.test(this.number)){

        this.invalidNumber = false   
        fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/users.json')
          .then(res=>{
            return res.json()            
          })
          .then(data=>{
            for(const dat in data){
              this.users.push(data[dat])
            }
            const user = this.users.find(user=>user.number == this.number)
            if(user){
              this.theUser = user.name
            }else{
              this.theUser = 'No record found'
              this.invalidNumber = true
            }
           

          })
        
      }
      


      }else{
        if(regex.test(this.number)){
          this.invalidNumber = false       

        }else{
          this.invalidNumber = true       

        }
      
      }
    },
    
    login(){
      this.theUser = ''
     
      this.loading = true
      const regex = /^(5\d{8}|05\d{9})$/;
      if(regex.test(this.number)){
        this.invalidNumber = false   
        if(!this.isLogin){
          fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/users.json',{
            method:'post',
            body:JSON.stringify({
              name:this.name,
              number:this.number,
              points:0
            })
           
          }) .then(()=>{
            if(this.$route.path == 'checkOut'){
              this.isLogin = true
              this.login()
            this.$emit('goBack')

           }else{
            this.isLogin = true
              this.login()
            this.$router.push('/')
           }
              
            })
        }  
        if(this.isLogin){
          fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/users.json')
          .then(res=>{
            return res.json()            
          })
          .then(data=>{
            for(const dat in data){
              this.users.push(data[dat])
            }
            this.theUser = this.users.find(user=>user.number == this.number)
            this.loading = false
            this.$store.commit('signedIn', this.theUser)
           if(this.$route.path == 'checkOut'){
            this.$emit('goBack')

           }else{
            this.$router.push('/')
           }

          })
          
        }
      }else{
        this.invalidNumber = true          

      }
    }
  },
  components:{
    LoadingSpinner
  }
}
</script>
<style scoped>

form{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  border-radius: 10px;
  box-shadow: 2px  2px 10px  rgb(245, 241, 241);


}
  input{
    border: 1px solid rgb(194, 191, 191);
    font-size: 1.2rem;
    padding: .7rem;
    width: 90%;
    max-width: 20rem;
    border-radius: 4px;
  }
  button{
    margin-top: .7rem;
    padding: .7rem;
    width: 70%;
    border: 1px solid rgb(248, 244, 244);
    font-size: 1.2rem;
    border-radius: 5px;
    background-color: red;
    outline: none;
    color: white;
    max-width: 20rem;
  }
  .validNumber{
    border: 1px solid green;
    outline: none;
  }
  button:hover{

    cursor: pointer;
    padding: .6rem;
    background-color: rgb(240, 89, 89);
  }
  .name{
    border-bottom: none;
  }
 
  .otherOptions{
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    color: red;
    margin-top: 2rem;
    max-width: 20rem;
  }
  p:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  .numberHolder{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;


    
  }
  .code{
    font-weight: bold;
    text-align: center;
    border: 1px solid gray;
    padding: .8rem;
    border: 1px solid rgb(194, 191, 191);
    border-right: none;
    min-width: 4rem;
    flex-grow: 1;
    border-right: none;
    max-width: 4rem;

  }
  .fst{
    border-bottom: none;
  }
  h2{
    margin-bottom: 2rem;
  }
  .invalidNumber{
    border: 1px solid red;
  }
  
  .fetchedUser{
    margin-top: .2rem;
    background-color: rgb(238, 236, 236);
    max-width: 24rem;
    padding: .4rem 0;
    font-weight: 200;
    text-align: start;
  }
  .fetchedUser:hover{
    background-color: green;
    color: white;
    cursor: pointer;
    border-radius: 4px;
  }
  .buttons{
    margin-top: 1rem;
    width: 90%;
    max-width: 23rem;
  }
</style>