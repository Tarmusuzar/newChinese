<template>
    <guest-subnav></guest-subnav>
    <category-template heading = 'Combos' :category = combos></category-template>
    <category-template heading="Starters" :category = vegStarters></category-template>
    <category-template heading="Rice" :category = rice></category-template>
    <category-template heading="Noodles" :category = noodles></category-template>
</template>
<script>
import CategoryTemplate from './CategoryTemplate.vue';
import GuestSubnav from '../Guest/GuestSubnav.vue'

export default {
    components:{
        CategoryTemplate,
        GuestSubnav
    },
    inject:['combos','vegStarters','rice','noodles'],
    
}
</script>
