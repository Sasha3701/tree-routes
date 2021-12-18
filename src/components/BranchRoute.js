import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { BranchRouteView } from "../views";
import { add } from "../store/routesSlice";
import { validation } from "../utils"
import { v4 } from "uuid";

const BranchRoute = ({ nodes, id }) => {
  const [newRoute, setNewRoute] = useState("");
  const [error, setError] = useState("")
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleOnChange = (e) => {
    const value = validation(e.target.value)
    if(value.error) {
      setError(value.error)
    } else {
      setError(false)
    }
    setNewRoute(value.value);
  };

  const handleSubmit = () => {
    const route = {
      id: v4(),
      route: newRoute,
      title: `${newRoute[0].toLocaleUpperCase()}${newRoute.slice(1)}`,
      nodes: [],
    };
    dispatch(add({ parent: id, route }));
    setNewRoute("")
  };

  return (
    <BranchRouteView
      routes={nodes}
      value={newRoute}
      onChange={handleOnChange}
      onSubmit={handleSubmit}
      parent={pathname}
      error={error}
    />
  );
};

export default BranchRoute;
