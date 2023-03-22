<template>
    <admin-nav
        
        @toggle-component="changeComponent"

    ></admin-nav>
    <component
     :is="NavDashboard" 
    ></component>
</template>
<script>
import AdminNav from '../components/Admin/AdminNav.vue'
import NavDashboard from '../components/Admin/navBar/NavDashboard.vue'
import NavAddproduct from '../components/Admin/navBar/NavAddproduct.vue'
import NavManageorders from '../components/Admin/navBar/NavManageorders.vue'
import NavManageproducts from '../components/Admin/navBar/NavManageproducts.vue'
import NavStocklevel from '../components/Admin/navBar/NavStocklevel.vue'
import NavAssistance from '../components/Admin/navBar/NavAssistance.vue'
import NavSettings from '../components/Admin/navBar/NavSettings.vue'
import NavSignout from '../components/Admin/navBar/NavSignout.vue'

export default {
    components:{
        AdminNav,
        NavDashboard,
        NavAddproduct,
        NavManageorders,
        NavStocklevel,
        NavAssistance,
        NavSettings,
        NavSignout,
        NavManageproducts
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
