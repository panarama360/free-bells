import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";
import DashboardLayout from "./pages/DashboardLayout";

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
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardLayout,
        children: [
            {
                path:'',
                name: "DashboardButtons",
                component: SignUp
            },
            // {
            //     path: "buttons",
            //     name: "DashboardButtons",
            //     component: SignUp
            // }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
