import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from './views/HomeComponent.vue'
import AboutComponent from './views/AboutComponent.vue'
//yg diatas config vue router

//penentuan route nya
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name: "home",
            component: HomeComponent,
        },
        {
            path:"/about",
            name: "about",
            component: AboutComponent,
        },
    ]
});

//aplikasi memnaggil fungsi router
createApp(App).use(router).mount('#app')
