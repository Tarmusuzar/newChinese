<template>
   <ul class="holder">
        <div class="label">
            <li>Products</li>
        </div>
        <span class="label" v-if="toggleMenu" @click="changeToggleNav"  >
                        <i class="fa-solid fa-bars "></i>
                    </span>
        <div class="second" v-show="toggleNav" >
                <div class="others">      
                    <span  @click="revert" class="flex" >
                         <i class="fa-solid fa-arrow-left "></i>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-dashboard')">
                        <i class="fa-solid fa-house-chimney" ></i>                    
                        <li>Dashboard </li>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-addproduct')">
                        <i class="fa-solid fa-circle-plus "></i>
                        <li>Add Product </li>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-manageorders')">
                        <i class="fa-solid fa-list-ul "></i>
                        <li>Manage Orders</li>
                    </span>
                    <span class="flex" @click="toggleComponent('nav-manageproducts')">
                        <i class="fa-solid fa-list-ul "></i>
                        <li>Manage Products</li>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-stocklevel')">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <li>Stock Level </li>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-assistance')">
                        <i class="fa-solid fa-phone"></i>   
                        <li>Assistance </li>
                    </span>

                    <span class="flex" @click="toggleComponent('nav-settings')">
                        <i class="fa-solid fa-gear"></i>
                        <li>Settings</li>
                    </span>
                
                
                </div>

                <div class="signout" @click="toggleComponent('nav-signout')">
                    <span class="flex">
                    <i class="fa-solid fa-right-from-bracket "></i>
                    <li>Sign Out </li>
                </span>
                </div>
                
            
       

        </div>
 
   </ul><hr>

    
</template>
<script>
export default {
    data(){
        return{
            toggleNav:false,
            toggleMenu:true,
        }
    },
    emits:['toggle-component'],
    methods:{
        changeToggleNav(){
            this.toggleNav = !this.toggleNav
            this.toggleMenu =!this.toggleMenu
        },
        revert(){
            this.toggleNav = false
            this.toggleMenu =true
        },
        toggleComponent(component){
            this.$emit('toggle-component',component)

        }
    }
}
</script>
<style scoped>
    .holder{
        display:flex ;
        justify-content: space-between;
        width: 80%;
        margin: .1rem auto;
        align-items: center;
        

    }
    li{
        list-style-type: none;
        padding: .5rem;
    }
    
    .second{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
        height: 100vh;
        background-color: rgb(201, 21, 21);
        color: white;
        font-size: 1.2rem;
        width: 15rem;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .label{
        /* padding: .5rem; */
        font-size: 1.6rem;
        color: gray;
        
    }
    .label:hover{
        cursor: pointer;
        color: rgb(188, 188, 188);
    }

    span:hover{
        cursor: pointer;
        text-decoration: underline;
        font-size: 1.3rem;
    }
   
    .flex{
        background-color: transparent;
        display: block;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        padding:.2rem 1rem;

    }
    .others,.signout{
        display: flex;
        flex-direction: column;
        width: 100%;
        
   
    }
    .others>span{
        margin-bottom: 1rem;
        text-align: center  ;
    }
</style>