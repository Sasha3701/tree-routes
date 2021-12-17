import { useLocation, useNavigate } from "react-router-dom";
import { HeaderView } from "../views";

const Header = ({ title, type }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    const indexSlash = pathname.lastIndexOf("/");
    const path = pathname.slice(0, indexSlash)
    navigate(path ? path : "/");
  };

  return <HeaderView title={title} type={type} onClick={handleOnClick}/>;
};

export default Header;
