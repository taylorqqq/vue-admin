const layouts = import.meta.globEager("../components/layout/*.vue"); // vite插件获取所有的layout组件
import { RouteRecordRaw } from "vue-router";

// 获取路由
// Object.entries  将对象转换为数组
function getRoutes() {
  const layoutRoutes: Array<RouteRecordRaw> = [];
  Object.entries(layouts).forEach(([path, component]) => {
    const route = getRouteByModule(path, component);
    layoutRoutes.push(route);
  });

  return layoutRoutes;
}

function getRouteByModule(
  path: string | any,
  component: { [key: string]: any } | any
) {
  // 用正则表达式匹配路径
  //   console.log(path.match(/\/components\/layout\/(.*)\.vue/)[1]);
  // 保留 /
  //   console.log(path.replace(/.+layout|\.vue/gi, ""));
  // 不保留 /
  //   console.log(path.replace(/.+layout\/|\.vue/gi, ""));

  const name = path.replace(/.+layout\/|\.vue/gi, "");

  // 用js字符串和数组的方法匹配路径
  //   console.log(path.split("/").pop().split(".")[0]);
  //   const name = path.split("/").pop().split(".")[0];

  const route = {
    name,
    path: `/${name}`,
    component: component.default,
  } as RouteRecordRaw;

  return route;
}

export default getRoutes();
