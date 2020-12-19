import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";
import DashboardLayout from "./pages/DashboardLayout";
import Events from "./pages/Events";
import Users from "./pages/Users";

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
                component: Events
            },
            {
                path: "buttons",
                name: "DashboardButtons",
                component: SignUp
            },
            {
                path: "events",
                name: "Events",
                component: Registration
            },
            {
                path: "users",
                name: "User",
                component: Users
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
