import { Button } from "../../components/UI";
import style from "./styles/index.module.scss";

const NotFoundView = ({ onClick }) => {
  return (
    <main className={style["not-found"]}>
      <div className={style["not-found__window"]}>
        <p className={style["not-found__description"]}>
          This page was not found...
        </p>
        <Button theme="submit" onClick={onClick}>To main</Button>
      </div>
    </main>
  );
};

export default NotFoundView;
