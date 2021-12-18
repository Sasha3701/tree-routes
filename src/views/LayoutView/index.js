import style from "./styles/index.module.scss";
import { Header } from "../../components";

const LayoutView = ({ children, title, type, nodes = [] }) => {
  return (
    <>
      <Header title={title} type={type} nodes={nodes}/>
      <main className={style.layout__main}>{children}</main>
    </>
  );
};

export default LayoutView;
