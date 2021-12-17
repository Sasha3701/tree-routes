import { HeaderView } from "../views";

const Header = ({ title, type }) => {
  const handleOnClick = () => {};

  return <HeaderView title={title} type={type} onClick={handleOnClick} />;
};

export default Header;
