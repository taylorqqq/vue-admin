import { RouteRecordRaw } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../components/layout/index.vue"),
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home/index.vue"),
      },
    ],
  },
] as RouteRecordRaw[];

export default routes;