<template>
    
    <div class="menuContainer">
        <h1 ref="heading">{{ heading }}</h1>
    
    
        <ul class="menu">
            <li class="itemWrapper"  v-for="item in category " :key="item"  @click="showSingleProduct(item.id,heading)">
                <toggle-button :icon="icon"></toggle-button>
                <img :src="item.image" alt="">
                <span id="itemDescription">{{ item.name }}</span>
                <span class="itemPrice"><b>Dhs {{ item.price }}</b></span>
            </li>
        </ul>
      </div>
      
      
    </template>
    <script>
    import ToggleButton from '../Utils/ToggleButton.vue';
    export default {
        data(){
            return{
                icon:'fa-solid fa-circle-plus'
            }
        },
        props:['category','heading']
        ,
        emits:['single-product']
        ,
        methods:{
            showSingleProduct(id){
                this.$router.push('/item?id='+id)
            }
        },
        components:{
            ToggleButton
        },
        mounted(){
            this.$store.state.theSelectedHeading.push(this.$refs.heading)
        }
    }
    </script>
    <style scoped>
    .menuContainer{
        margin-top: 2rem;
    
    }
    h1{
        margin: 1rem;
    }
        .menu{
            display: flex;
            flex-direction: row;
            width: 90%;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content: center;
            margin: 0 auto;
        }
        .itemWrapper{
            position: relative;

            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            max-width: 50%;
            justify-content: center;
            align-items: center;
            
        }
        #add{
            position: absolute;
            color: black;
            /* background-color: black; */
            font-size: 1.8rem;
            top: 8px;
            right: 12px;
    
    
    
        }
        #add:hover{
            cursor:pointer ;
        }
        .itemWrapper>img{
            width: auto;
            max-width: 10rem;
            height: 9rem;
            background-size: contain;
        }
    </style>