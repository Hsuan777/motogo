import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("../views/frontend/LayoutView.vue"),
      children: [
        {
          path: "/",
          name: "HOME",
          component: () => import("../views/frontend/HomeView.vue"),
        },
        {
          path: "/todo",
          name: "ToDo",
          component: () => import("../views/frontend/ToDoView.vue"),
        },
      ],
    },
    // 後台路由
    {
      path: "/manage",
      name: "Manage",
      component: () => import("../views/backend/DashboardView.vue"),
      children: [
        {
          path: "routes",
          name: "Routes",
          component: () => import("../views/backend/RoutesView.vue"),
        },
        {
          path: "activities",
          name: "Activities",
          component: () => import("../views/backend/ActivitiesView.vue"),
        },
        {
          path: "articles",
          name: "Articles",
          component: () => import("../views/backend/ArticlesView.vue"),
        },
        {
          path: ":pathMatch(.*)*",
          component: () => import("../views/NotFound.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: {
        name: "Home",
      },
    },
  ],
});

export default router;
