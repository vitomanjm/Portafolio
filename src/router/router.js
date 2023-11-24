import { createRouter, createWebHistory } from 'vue-router';

import Home from "../layout/Home.vue";
import about from '../views/about.vue';
import projects from '../views/projects.vue';
import contact from '../views/contact.vue';


const routes = [

    { path: '/', component: Home, name: 'Home' },
    { path: '/about', component: about, name: 'about' },
    { path: '/projects', component: projects, name: 'projects' },
    { path: '/contact', component: contact, name: 'contact' },
        
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});


export default router;