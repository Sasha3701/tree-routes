import Layout from "../layout";
import { BranchRoute } from "../components";

const Another = (props) => {
  return (
    <Layout {...props}>
      <BranchRoute {...props} />
    </Layout>
  );
};

export default Another;
