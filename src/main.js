import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './main.css'

import { initializeApp } from "firebase/app";

initializeApp({
    apiKey: "AIzaSyDmOGI6VlXy-FFXRi4RAUceBC0IQGA6ZDw",
    authDomain: "vuechatapp-19262.firebaseapp.com",
    projectId: "vuechatapp-19262",
    storageBucket: "vuechatapp-19262.appspot.com",
    messagingSenderId: "885240724626",
    appId: "1:885240724626:web:dd8f4b7f74cd2257c2ba4b"
});

createApp(App).use(store).use(router).mount('#app')
