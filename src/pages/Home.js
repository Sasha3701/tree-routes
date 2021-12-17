import Layout from "../layout";
import { TreeRoutes } from "../components";

const Home = (props) => {
  return (
    <Layout {...props}>
      <TreeRoutes {...props} />
    </Layout>
  );
};

export default Home;
