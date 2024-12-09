import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Service from "../views/service.vue";
import Agents from "../views/Agents.vue";
import Properties from "../views/properties.vue";
import Contact from "../views/contact.vue";

const routes = [
    {
        path:'/',
        name : 'home',
        component : Home
    },
    {
        path: '/about',
        name : 'about',
        component: About
    },
    {
        path: '/service',
        name : 'service',
        component: Service
    },
    {
        path: '/agents',
        name : 'agents',
        component: Agents
    },
    {
        path: '/properties',
        name : 'properties',
        component: Properties
    },
    {
        path: '/contact',
        name : 'contact',
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router