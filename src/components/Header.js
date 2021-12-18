import Media from "react-media";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderView } from "../views";

const Header = ({ title, type, nodes }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleOnClick = () => {
    const indexSlash = pathname.lastIndexOf("/");
    const path = pathname.slice(0, indexSlash);
    navigate(path ? path : "/");
  };

  return (
    <Media queries={{ small: "(max-width: 426px)" }}>
      {(matches) =>
        matches.small ? (
          <HeaderView
            title={title}
            type={type}
            onClick={handleOnClick}
            changeColor={!!nodes.length}
            content={"Назад"}
          />
        ) : (
          <HeaderView
            title={title}
            type={type}
            onClick={handleOnClick}
            changeColor={!!nodes.length}
            content={"Перейти к родительскому узлу"}
          />
        )
      }
    </Media>
  );
};

export default Header;
