import style from "./styles/index.module.scss";

const Input = ({ name, label, error, ...props }) => {
  return (
    <>
      <label className={style.label} htmlFor={name}>{label}</label>
      <input id={name} className={style.input} {...props} />
      {error ? <p className={style.error}>Incorrect data</p> : null}
    </>
  )
};

export default Input;
