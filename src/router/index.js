import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: () => import("../views/frontend/LayoutView.vue"),
      children: [
        {
          path: "/",
          name: "HOME",
          component: () => import("../views/frontend/HomeView.vue"),
        },
        {
          path: "todo",
          name: "ToDo",
          component: () => import("../views/frontend/ToDoView.vue"),
        },
        {
          path: "routes",
          name: "Routes",
          component: () => import("../views/frontend/RoutesView.vue"),
        },
        {
          path: "route/:id",
          name: "Route",
          component: () => import("../views/frontend/RouteView.vue"),
        },
        {
          path: "articles",
          name: "Articles",
          component: () => import("../views/frontend/ArticlesView.vue"),
        },
        {
          path: "activities",
          name: "Activities",
          component: () => import("../views/frontend/ActivitiesView.vue"),
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
          name: "RoutesManage",
          component: () => import("../views/backend/RoutesManage.vue"),
        },
        {
          path: "activities",
          name: "ActivitiesManage",
          component: () => import("../views/backend/ActivitiesManage.vue"),
        },
        {
          path: "articles",
          name: "ArticlesManage",
          component: () => import("../views/backend/ArticlesManage.vue"),
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
