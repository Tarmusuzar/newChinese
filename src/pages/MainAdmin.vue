<template>
    <admin-nav></admin-nav>
    <admin-dashboard></admin-dashboard>
    
</template>
<script>
import AdminNav from '../components/Admin/AdminNav.vue'
import AdminDashboard from '../components/Admin/AdminDashboard.vue'


export default {
    components:{
        AdminNav,
        AdminDashboard,
      
    },
    data(){
        return{
            NavDashboard:'nav-manageorders'
        }
    },
    methods:{
        changeComponent(component){
            this.NavDashboard = component
    }
    }
}
</script>
