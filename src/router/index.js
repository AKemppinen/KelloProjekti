import {createRouter, createWebHistory} from "vue-router";
import Comparison from "@/views/Comparison";
import Watches from "@/views/Watches";
import About from "@/views/About";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Watches,
        props: true,
    },
    {
        path: "/comparison",
        name: "Comparison",
        component: Comparison,
        props: true,
    },
    {
        path: "/about",
        name: "AboutUs",
        component: About,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router