import { LayoutView } from "../views";

const Layout = ({ children, ...props }) => {
  return <LayoutView {...props}>{children}</LayoutView>;
};

export default Layout;
