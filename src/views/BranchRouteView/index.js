import { Button, Input } from "../../components/UI";
import { createList } from "../../services";
import style from "./styles/index.module.scss";

const BranchRouteView = ({ routes, parent, value, onChange, onSubmit, error }) => {
  return (
    <div className={style["branch-routes"]}>
      <div className={style["branch-routes__routes"]}>
        <h2 className={style["branch-routes__title"]}>Child routes:</h2>
        {routes.length !== 0 ? (
          <nav className={style["branch-routes__nav"]}>
            {createList(routes, parent, false)}
          </nav>
        ) : (
          "This route has no children..."
        )}
      </div>
      <div className={style["branch-routes__form"]}>
        <div className={style["branch-routes__wrappet-input"]}>
          <Input error={error} name="new-route" label="Новый узел:" value={value} onChange={onChange} />
        </div>
        <div className={style["branch-routes__wrapper-button"]}>
          <Button
            theme={routes.length === 0 ? "submit" : "submit-whatsapp"}
            onClick={onSubmit}
            disabled={error || !value}
          >
            Добавить новый узел
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BranchRouteView;
