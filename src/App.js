import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home, NotPage } from "./pages"
import { createRoutes } from "./services";

const App = () => {

  const routes = useSelector(({ routes }) => routes.value)

  return (
    <Routes>
      <Route path="/" element={<Home title="Tree Routes" type="Home"/>}/>
      {createRoutes(routes)}
      <Route path="*" element={<NotPage />} />
    </Routes>
  )
};

export default App;
