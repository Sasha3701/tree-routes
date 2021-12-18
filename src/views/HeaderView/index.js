import style from "./styles/index.module.scss";
import classNames from "classnames";
import { Button } from "../../components/UI"

const HeaderView = ({ title, onClick, type, changeColor, content }) => {
  return (
    <>
      <header
        className={classNames(style.header, { [style.whatsapp]: changeColor })}
      >
        <h1 className={style.header__title}>{title}</h1>
        {type !== "Home" ? (
          <div className={style.header__button}>
            <Button onClick={onClick}>{content}</Button>
          </div>
        ) : null}
      </header>
    </>
  );
};

export default HeaderView;
