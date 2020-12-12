import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";

const routes = [
    {
        path: "/",
        name: "SignUp",
        component: SignUp,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
