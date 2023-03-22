<template>
    <ul class="horizontal" ref="menu" >
        <li><i class="fa-solid fa-magnifying-glass"></i></li>
       <li class="selected" ><a href="#combos">Combos</a> </li>
       <li ><a href="#vegStarters">Starters Veg</a></li>
       <li ><a href="#rice">Rice</a></li>
       <li><a href="#noodles">Noodles</a></li>
       
    </ul>
</template>
<script>
export default {
    methods:{
       
    
    },
    computed:{
        height(){
            return window.scrollY >= window.innerHeight * 1.1
        }
    },
    watch:{
        
    },
    mounted(){
        this.$nextTick(()=>{
            const menu = this.$refs.menu
            window.addEventListener('scroll',()=>{
                if(window.scrollY>390.5){
                    menu.scrollLeft = menu.scrollWidth
                }else{
                    menu.scrollLeft = 0
                }
            })
           
            
            
        })
    }
    
}
</script>
<style scoped>

    .horizontal{
        position: fixed;
        top: 0;
        width: 100%;
        background-color: white;
        text-align: center;
        display: flex;
        overflow-x: auto;
        justify-content: space-between;
        /* border-bottom: 1px solid red; */
    }
    .horizontal>li{
        white-space: nowrap;
        flex-grow: 1;
        padding: 1rem;
        width: 105rem;
        
        border-bottom: 5px solid rgb(226, 224, 224);
        
    }
    .selected{
        border-top: 3px solid red;
    }
    li{
        flex-grow: 1;
        list-style-type: none;

    }
    a{
        color: rgb(11, 10, 10);
        font-weight: 500;
        text-decoration: none;
    }
</style>