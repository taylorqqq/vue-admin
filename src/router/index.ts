import { createRouter, createWebHistory } from "vue-router";
import { App } from "vue";
import routes from "./routes"; // 1. 导入路由配置
import layoutRoutes from "./autoLoad"; // 2. 导入自动加载的路由配置

console.log(layoutRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...layoutRoutes], // 3. 合并路由配置
  //     //  1. 普通路由
  //     // {
  //     //   path: "/",
  //     //   name: "Home",
  //     //   component: () => import("../views/Home/index.vue"),
  //     // },
  //     // 2. 嵌套路由
  //     {
  //       path: "/",
  //       name: "Layout",
  //       component: () => import("../components/layout/index.vue"),
  //       children: [
  //         {
  //           path: "/home",
  //           name: "Home",
  //           component: () => import("../views/Home/index.vue"),
  //         },
  //       ],
  //     },
  //   ],
});

export function setupRouter(app: App) {
  app.use(router);
}

export default router;
