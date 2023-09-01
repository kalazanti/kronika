import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import HomeView from "../views/HomeView.vue";
import ArticleView from "../views/ArticleView.vue";
import AuthView from "../views/AuthView.vue";
import EditView from "../views/EditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cikkek/:link",
      name: "article",
      component: ArticleView,
    },
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/edit",
      name: "edit",
      component: EditView,
      beforeEnter: () => {
        if (!useAuthStore().isAuthenticated) {
          return { name: "home" };
        }
      },
    },
  ],
});

export default router;
