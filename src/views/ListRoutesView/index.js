import style from "./styles/index.module.scss";
import { Link } from "react-router-dom";

const ListRoutesView = ({ routes, parent = "", func, nested }) => {
  return (
    <ul className={style["list-routes"]}>
      {routes.map((route) => {
        const path = `${parent}/${route.route}`;

        return (
          <li className={style["list-routes__item"]} key={route.id}>
            <Link to={path}>{route.title}</Link>
            {nested ? func(route.nodes, path) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ListRoutesView;
