import { useSelector } from "react-redux";
import { TreeRoutesView } from "../views";

const TreeRoutes = () => {
  const routes = useSelector(({ routes }) => routes.value);

  return <TreeRoutesView routes={routes} />
};

export default TreeRoutes;
