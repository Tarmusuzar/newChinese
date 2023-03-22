<template>
    <main-notif v-if="newOrder" @accept="accept"></main-notif>
</template>
<script>
import MainNotif from '@/components/Utils/MainNotif.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import zomato_ring_3 from '@/components/Utils/zomato_ring_3.mp3';

export default{
    data() {
        return {
            items: [],
            newOrder:false
        }
    },
    
    components:{
        MainNotif
    },

    //connect to db
    created(){
        firebase.initializeApp({
                apiKey: "AIzaSyBA3XZ9UkBN0mtJKzZNLFaCd1A9fPNjnBY",
                authDomain: "my-vue-app-8da88.firebaseapp.com",
                databaseURL: "https://my-vue-app-8da88-default-rtdb.firebaseio.com",
                projectId: "my-vue-app-8da88",
                storageBucket: "my-vue-app-8da88.appspot.com",
                messagingSenderId: "460227304896",
                appId: "1:460227304896:web:b60519493132d4ebca7c25",
        })

        // Listen for new child added events in the product.json folder
        const db = firebase.database();
        db.ref('newOrder').on('child_added', snapshot => {
            const newItem = snapshot.val()
            this.items.push(newItem)

            // Trigger sound and pop-up notification
            this.playSound()
            this.showNotification(`New item added: ${newItem}`)
        })
    },

    methods: {
        playSound() {
            // Play a sound (e.g. a beep or a ding)
            const audio = new Audio(zomato_ring_3)
            audio.play()
            console.log('clal')
        },

        showNotification(message) {
            // Show a pop-up notification (e.g. using the Notifications API)
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('New Item Added', { body: message })
            }
            this.newOrder = true
        },
        accept(){
            this.newOrder = false
        }
    }
}
</script>
