import { useParams } from "react-router-dom";
import { Layout } from "../../Layout";

const ProductDetails = () => {
  const { id } = useParams();
  return <Layout>{id}</Layout>;
};

export default ProductDetails;
