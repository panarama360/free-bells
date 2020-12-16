import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";

const routes = [
    {
        path: "/",
        name: "SignUp",
        component: SignUp,
    },
    {
        path: "/registration",
        name: "Registration",
        component: Registration,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
