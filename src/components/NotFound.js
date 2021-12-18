import { useNavigate } from "react-router-dom";
import { NotFoundView } from "../views";

const NotFound = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return <NotFoundView onClick={handleOnClick} />
};

export default NotFound;
