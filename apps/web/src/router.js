import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";
import DashboardLayout from "./pages/DashboardLayout";
import Events from "./pages/Events";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Buttons from "./pages/Buttons";

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
                name: "Buttons",
                component: Buttons
            },
            {
                path: "settings",
                name: "Settings",
                component: Settings
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
