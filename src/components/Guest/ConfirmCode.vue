<template>
    <div class="backdrop">
        <form action="" >
        <h1>Enter Auth Code</h1>
        <p>To earn/redeem points, please ask staff for an authentication code at the counter.</p>
        <input type="text" @input="authenticate" v-model="name" :class="{wrongCode:wrongCode}">
        <div class="buttons">
            <button id="btn" class="redeem">Reedem</button>
            <button class="cancel" @click.prevent="$emit('goBack')">Cancel</button>

        </div>
    </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                name:''
            }
        },
        methods:{
            authenticate(){
                this.$emit('authenticate', this.name)
            }
        },
        props:[
            'wrongCode'
        ]
    }
</script>
<style scoped>
.wrongCode{
    border: 1px solid red;
    outline: none;
}
    .backdrop{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        background-color: rgba(73, 73, 73, 0.8);
        z-index: 9999;
    }
    form{
        

        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center ;
        width: 90%;
        max-width: 50rem;
        height: 50vh;
        max-height: auto;
        flex-direction: column;
        padding: 1rem;
        border-radius: 10px;

    }
    input{
        width: 90%;
        max-width: 30rem;
        padding: 1rem;
        border: 1px solid green;
        outline: none;
        font-size: 1.5rem;
        text-align: center;
        letter-spacing: 1rem;
        border-radius: 10px;
    }
    p{
        padding: 1rem;
        text-align: center;
    }
    .buttons{
        display: flex;
        justify-content: center;
        align-content: center;
        margin: .3rem;
        width: 70%;
    }
    button{
        margin: .1rem;
        padding: .8rem;
        color: white;
        font-size: 1rem;
        flex-grow: 1;
        border: none;
        border-radius: 10px;

    }
    .cancel{
        background-color: red;
    }
    .redeem{
        background-color: green;

    }

</style>