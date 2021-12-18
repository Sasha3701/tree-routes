import { Link } from "react-router-dom";
import style from "./styles/index.module.scss";

const CustomLink = ({ children, ...props }) => {
  return (
    <Link className={style.link} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
