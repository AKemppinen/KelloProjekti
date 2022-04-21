import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue"
import Comparison from "@/views/Comparison";
import About from "@/views/About";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/comparison",
        name: "Comparison",
        component: Comparison,
    },
    {
        path: "/about-page",
        name: "AboutUs",
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router