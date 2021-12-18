import style from "./styles/index.module.scss";

const Button = ({ children, theme = "link", ...props }) => {
  return (
    <button className={style[theme]} {...props}>
      {children}
    </button>
  );
};

export default Button;
