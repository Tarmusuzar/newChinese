<template>
   <form action="" class="container">
        <img src="../assets/gclogo.png" alt="Gypsy Chinese Logo">
        <h3 v-if="error">{{ errorMessage }}</h3>
        <input :type="isGuest ? 'text' : 'email'" v-bind:placeholder="firstField" class="nameInput" v-model="fieldOne">
        <input :type="isGuest ? 'number':'password'" v-bind:placeholder="secondField" class="numberInput" v-model="fieldTwo">
        <span class="rememberMe"><input type="checkbox"  > Remember Me</span>
        <button @click.prevent="submit" >{{ prompt }}</button>
        <p>{{ isGuestDisplay}}</p>
        
   </form>
   <footer>
    <b>&copy; Gypsy Chinese Restaurant LLC 2023</b>
   </footer>
</template>
<script>
 export default{
    data(){
        return{
            fieldOne:'',
            fieldTwo:'',
        }
    },
    emits:['submitted'],
    props:['prompt','firstField','secondField','isGuest','error','errorMessage'],
    computed:{
        isGuestDisplay(){
            return this.isGuest ? 'Continue as Guest' : "I'm not Admin" 
        }
    },
   methods:{
    submit(){
        this.$emit('submitted',this.fieldOne,this.fieldTwo)
    }
   }

}
</script>
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        max-width: 30rem;
        width: 90%;
        margin: 10vh auto;
        justify-content: center;
        color: gray;
        height: 60vh;
        padding: 1rem;

        
    }
    img{
        max-width: 9rem;
        max-height: 9rem;
        border-radius: 80%;
        margin: 0 auto 2rem auto;
    }
    input,button{
        padding: .5rem;
        border: 1px solid rgb(160, 159, 159);
        border-radius: 5px;
        font-size: 1.2rem;
    }
    .nameInput{
        border-bottom: none;
    }
    .numberInput{
        border-top:    1px solid rgb(182, 182, 182);
    }
    .rememberMe{
        margin: .4rem 0 ;
        padding: .5rem;
        font-size: 1.2rem;
    }
    button{
        padding: .6rem;
        background-color:rgb(201, 21, 21) ;
        border: 1px solid white;
        color: white;

    }
    button:hover,p:hover,span:hover{
        cursor: pointer;
    }
    h3{
        text-align: center;
        font-weight: 100;
        font-size: 1rem;
        margin: 0 1rem 2rem 1rem ;
        color: red;
        
    }
    p{
        text-align: center;
        padding:2rem;
        color: rgb(9, 11, 28);
        font-size: 1.2rem;
        text-decoration: underline;
    }
    footer{
        text-align: center;
    }
    b{
        color: gray;
    }

</style>
