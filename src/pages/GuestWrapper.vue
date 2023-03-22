<template>
    
        <guest-subnav></guest-subnav>
        <category-template id="combos" heading = 'Combos' :category = combos @single-product="singleProduct" ></category-template>
        <category-template id="vegStarters"  heading="Starters Veg" :category = vegStarters @single-product="singleProduct"></category-template>
        <category-template id="rice" heading="Rice" :category = rice @single-product="singleProduct"></category-template>
        <category-template id="noodles"  heading="Noodles" :category = noodles @single-product="singleProduct"></category-template>    
        
</template>

<script>
import CategoryTemplate from '../components/Guest/CategoryTemplate.vue';
import GuestSubnav from '../components/Guest/GuestSubnav.vue'
export default {
    data(){
        return{
            heading:''

        }
    },
    components:{
        CategoryTemplate,
        GuestSubnav,
    },
    emits:['single-product'],
    inject:['combos','vegStarters','rice','noodles'],
    methods:{
        singleProduct(id,category){
            this.$emit('single-product', id,category)

        },
        scroll(){
            console.log(this.$refs.Combos)
        }
    },
    mounted(){
            window.addEventListener('scroll',()=>{

            this.$nextTick(()=>{
                
            })
        })
    }

}
</script>