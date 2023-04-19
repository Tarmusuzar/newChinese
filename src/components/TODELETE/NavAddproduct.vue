<template>
                <h1>Add Product</h1>

    <form action="" class="addProductForm">
        <input id="first" type="text" placeholder="Product Name" v-model="name">
        <input type="text" placeholder="Product Price" v-model="price">
        <input type="text" placeholder="Product Description" v-model="description">
        <input type="text" placeholder="Product image" v-model="image">
        <select name="category" id="" v-model="category" @click="toggleCategory">
            <option value="combos"  >Combo</option>
            <option value="rice">Rice</option>
            <option value="noodles">Noodles</option>
            <option value="starters">Starter</option>
        </select>
        <select name="foodType" id="" v-model="foodType" v-if="categorySelected">
            <option value="veg" >Veg</option>
            <option value="chicken">Chicken</option>
            <option value="prawns">Prawns</option>
        </select>

        <button @click.prevent="addProduct">Upload</button>
    </form>
</template>
<script>
export default {
    watch:{
     category(value){
        if(value === 'starters'){
            this.categorySelected = true
        }else{
            this.categorySelected = false
        }
     }   
    },
    data(){
        return{
            name:'',
            price:'',
            category:'',
            description:'',
            foodType:'',
            categorySelected:false,
            image:''
        }
    },
    methods:{
        
        addProduct(){
                     
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/gypsy.json',
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description,
                    image:this.image,
                    category:this.category
                    

                    
                })
                })
            .then(data=>{
                    if(data.ok){
                        this.$router.go()//if no error, reload the form
                    }
            }
            ).catch(err=>{
                this.$router.push('/error')
                console.log(err)// if any error, load a 404 page 
            })
            }

           
            
            
          
         
      
            
        
    }
}
</script>
<style  scoped>
    .addProductForm{
        /* height: 50vh; */
        display: flex;
        flex-direction: column;
        max-width: 20rem;
        width: 80%;
        margin: 10vh auto;
        justify-content: center;
        /* border: 1px solid red; */
        white-space: nowrap;
        padding: .8rem;
        box-shadow: 0 0  2px 1px gray;
        border-radius: 4px;

    }
    .addProductForm input,select{
        padding: .5rem;
        margin: .3rem ;
        font-size: 1.3rem;

    }
   h1{
        text-align: center;
        background-color: red;
        color: white;
        padding: .5rem;
    }
    
    .addProductForm button{
        margin: .9rem auto 3rem auto;
        font-size: 1.5rem;
        padding: .2rem;
        width: 80%;
        color: white;
        background-color: rgb(254, 34, 34);
        border: 1px solid wheat;
        border-radius: 5px;
    }
    #first{
        margin-top: 2rem;
    
    }
    .addProductForm>button:hover{
        cursor: pointer;
    }

</style>
