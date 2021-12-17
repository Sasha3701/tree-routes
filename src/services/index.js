import React from "react";
import { Route } from "react-router-dom";
import { Another } from "../pages";
import { ListRoutesView } from "../views";

export const createRoutes = (routes, parent = "") => {
  if (routes.length === 0) {
    return null;
  }
  return routes.map((route) => {
    const path = `${parent}/${route.route}`;

    return (
      <React.Fragment key={route.id}>
        <Route path={path} element={<Another {...route} />} />
        {createRoutes(route.nodes, path)}
      </React.Fragment>
    );
  });
};

export const createList = (routes, parent = "", nested = true) => {
  if (routes.length === 0) {
    return null;
  }
  return (
    <ListRoutesView
      nested={nested}
      routes={routes}
      func={createList}
      parent={parent}
    />
  );
};
