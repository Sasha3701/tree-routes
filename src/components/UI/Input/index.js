import style from "./styles/index.module.scss";

const Input = (props) => {
  return <input className={style.input} {...props} />
};

export default Input;
