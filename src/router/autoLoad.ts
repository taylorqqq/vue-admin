const layouts = import.meta.globEager("../components/layout/*.vue"); // vite插件获取所有的layout组件
import { RouteRecordRaw } from "vue-router";

// Object.entries  将对象转换为数组
Object.entries(layouts).forEach(([path, component]) => {
  const route = getRouteByModule(path, component);
});

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

const layoutRoutes: Array<RouteRecordRaw> = [];

export default layoutRoutes;
