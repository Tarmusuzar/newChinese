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
               //uploading products that are not deeply nested
           const uploadMainsAndCombos = (category)=>{
             if(this.category === category){
                //check if the category selected on form is the 
                //same as the perimeter, if so
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/'+ category +'.json',
                //go to products file in firebase and create the perimeter folder
            {   
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({//push the form inputs to the folder as an object
                    name:this.name,
                    price:this.price,
                    decription:this.description,
                    image:this.image

                    
                })
                }).then(data=>{
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
         uploadMainsAndCombos('rice')
         uploadMainsAndCombos('noodles')
         uploadMainsAndCombos('combos')
         
         //uploading products for deeply nested items
         const startersAndMains = (category,foodType)=>{
            if(this.category === category && this.foodType === foodType){
                fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/products/'+category+'_' +foodType+'.json',
            {   //check if the selected foodtype matches the foodtype perimeter, if so, create that perimeter folder in category  
                method:'post',
                headers:{
                   'content-type':'json'
                },
                body:JSON.stringify({
                    name:this.name,
                    price:this.price,
                    decription:this.description,
                    image:this.image

                    
                })
                }).then(data=>{
                    if(data.ok){
                        this.$router.go()
                    }else{
                        this.$router.push('/error')
                    }
            }
            )
            }
          
         }
        startersAndMains('starters','veg')
        startersAndMains('starters','chicken')
        startersAndMains('starters','prawns')
            
            
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
