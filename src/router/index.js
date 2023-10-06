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
          path: "itineraries",
          name: "Itineraries",
          component: () => import("../views/frontend/ItinerariesView.vue"),
        },
        {
          path: "itineraries/:id",
          name: "itinerary",
          component: () => import("../views/frontend/ItineraryView.vue"),
        },
        {
          path: "activities",
          name: "Activities",
          component: () => import("../views/frontend/ActivitiesView.vue"),
        },
        {
          path: "activities/:id",
          name: "Activity",
          component: () => import("../views/frontend/ActivityView.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
