import style from "./styles/index.module.scss";
import { CustomLink } from "../../components/UI";

const ListRoutesView = ({ routes, parent = "", func, nested }) => {
  return (
    <ul className={style["list-routes"]}>
      {routes.map((route) => {
        const path = `${parent}/${route.route}`;

        return (
          <li className={style["list-routes__item"]} key={route.id}>
            <CustomLink to={path}>{route.title}</CustomLink>
            {nested ? func(route.nodes, path) : null}
          </li>
        );
      })}
    </ul>
  );
};

export default ListRoutesView;
