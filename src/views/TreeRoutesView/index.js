import style from "./styles/index.module.scss";
import { createList } from "../../services";

const TreeRoutesView = ({ routes }) => {
  return (
    <div className={style.tree}>
      <h2 className={style.tree__title}>Routes:</h2>
      <nav className={style.tree__nav}>{createList(routes)}</nav>
    </div>
  );
};

export default TreeRoutesView;
