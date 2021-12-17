import { createList } from "../../services";
import style from "./styles/index.module.scss";

const BranchRouteView = ({ routes, parent, value, onChange, onSubmit }) => {
  return (
    <div className={style["branch-routes"]}>
      <nav className={style["branch-routes__nav"]}>
        {createList(routes, parent, false)}
      </nav>
      <div className={style["branch-routes__form"]}>
        <input
          className={style["branch-routes__input"]}
          value={value}
          onChange={onChange}
        />
        <button className={style["branch-routes__button"]} onClick={onSubmit}>
          Добавить новый узел
        </button>
      </div>
    </div>
  );
};

export default BranchRouteView;
