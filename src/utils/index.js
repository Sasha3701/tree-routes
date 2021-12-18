import { cloneDeep } from "lodash";

const customFind = (routes, id, route) => {
  const currentParent = routes.find((item) => item.id === id);
  if (currentParent) {
    currentParent.nodes.push(route);
  } else {
    routes.forEach((item) => {
      customFind(item.nodes, id, route);
    });
  }
};
export const addRoute = (routes, id, route) => {
  const cloneRoutes = cloneDeep(routes);
  customFind(cloneRoutes, id, route);
  return cloneRoutes;
};

export const validation = (str) => {
  const value = str.trim();
  if (value.includes("/")) {
    return { error: true, value };
  }
  return { error: false, value };
};
