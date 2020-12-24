import {createRouter, createWebHistory} from "vue-router";
import SignUp from "./pages/SignUp";
import Registration from "./pages/Registration";
import DashboardLayout from "./pages/DashboardLayout";
import Events from "./pages/Events";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Buttons from "./pages/Buttons";
import appFirebase from "@/firebase";
import AddOrganisation from "@/pages/AddOrganisation";

const routes = [
    {
        path: "/",
        name: "SignUp",
        meta: {
            skipAuth: true,
            redirect: '/dashboard'
        },
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
        meta: {
            auth: true,
            redirect: '/'
        },
        component: DashboardLayout,
        children: [
            {
                path: '',
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
            },
            {
                path: "add-organisation",
                name: "AddOrganisation",
                component: AddOrganisation
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    console.log('to.path', to.path);
    const getUser = () => new Promise(resolve => appFirebase.auth().onAuthStateChanged(a => resolve(a)))
    if (to.matched.some(record => record.meta.skipAuth)) {
        const user = await getUser();
            if (user) {
                console.log('to.meta.redirect', to.meta.redirect)
                return next({
                    path: to.meta.redirect
                })
            } else {
                return next();
            }
    }
    next()
    // if (to.matched.some(record => record.meta.auth)) {
    //     const user = await getUser();
    //         if (user) {
    //             if(!store.state.organisation.currentOrganisation && '/dashboard/add-organisation' != to.path)
    //                 return next({
    //                     path: '/dashboard/add-organisation'
    //                 })
    //             next()
    //         } else {
    //             next({
    //                 path: to.meta.redirect
    //             })
    //         }
    // } else {
    //     next()
    // }
})
export default router;
