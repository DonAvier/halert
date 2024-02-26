import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AddLinkView from "../views/AddLink.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/addlink",
        name: "add link",
        component: AddLinkView,
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: () => import("../views/DetailLink.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
