import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BranchRouteView } from "../views";

const BranchRoute = ({ nodes }) => {
  const [newRoute, setNewRoute] = useState("");
  const { pathname } = useLocation()

  const handleOnChange = (e) => {
    setNewRoute(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <BranchRouteView
      routes={nodes}
      value={newRoute}
      onChange={handleOnChange}
      onSubmit={handleSubmit}
      parent={pathname}
    />
  );
};

export default BranchRoute;
