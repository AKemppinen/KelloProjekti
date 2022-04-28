import {createRouter, createWebHistory} from "vue-router";
import Comparison from "@/views/Comparison";
import Watches from "@/views/Watches";
import About from "@/views/About";
import NotFound from "@/views/NotFound";


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
    },
    {
        path: "/404",
        name: "404",
        component: NotFound,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/404',

    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router