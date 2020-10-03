import { createWebHistory, createRouter } from "vue-router";
import Home from "@/layout/AppHome.vue";
import CharacterList from "@/components/CharacterList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/characters",
        name: "CharacterList",
        component: CharacterList,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;