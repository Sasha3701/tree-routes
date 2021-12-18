import { Button, Input } from "../../components/UI";
import { createList } from "../../services";
import style from "./styles/index.module.scss";

const BranchRouteView = ({ routes, parent, value, onChange, onSubmit }) => {
  return (
    <div className={style["branch-routes"]}>
      <nav className={style["branch-routes__nav"]}>
        {createList(routes, parent, false)}
      </nav>
      <div className={style["branch-routes__form"]}>
        <div className={style["branch-routes__wrappet-input"]}>
          <Input value={value} onChange={onChange} />
        </div>
        <div className={style["branch-routes__wrapper-button"]}>
          <Button
            theme={routes.length === 0 ? "submit" : "submit-whatsapp"}
            onClick={onSubmit}
          >
            Добавить новый узел
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BranchRouteView;
