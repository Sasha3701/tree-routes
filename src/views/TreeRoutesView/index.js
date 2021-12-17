import style from "./styles/index.module.scss";
import { createList } from "../../services";

const TreeRoutesView = ({ routes }) => {
  return <nav className={style.tree}>{createList(routes)}</nav>
};

export default TreeRoutesView;
