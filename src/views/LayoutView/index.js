import style from "./styles/index.module.scss";
import { Header } from "../../components";

const LayoutView = ({ children, title, type }) => {
  return (
    <>
      <Header title={title} type={type} />
      <main className={style.layout__main}>{children}</main>
    </>
  );
};

export default LayoutView;
