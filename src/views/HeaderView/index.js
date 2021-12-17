import style from "./styles/index.module.scss";

const HeaderView = ({ title, onClick, type }) => {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.header__title}>{title}</h1>
        {type !== "Home" ? (
          <button className={style.header__button} onClick={onClick}>
            Перейдите к родительскому узлу
          </button>
        ) : null}
      </header>
    </>
  );
};

export default HeaderView;
