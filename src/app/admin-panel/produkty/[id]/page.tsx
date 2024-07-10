"use server";

import Container from "react-bootstrap/Container";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

import { getProductDetails } from "@/fetchers/products";

// import ProductDescription from "../_components/ProductDescription/ProductDescription";
// import ProductParameters from "../_components/ProductParameters/ProductParameters";
// import ProductPrices from "../_components/ProductPrices/ProductPrices";
import ProductWrapper from "../_components/ProductWrapper/ProductWrapper";

const ProductCard = async ({ params }: { params: { id: string } }) => {
  const product = await getProductDetails(params.id);

  return (
    <Container className="product-card">
      <h3>Karta produktu</h3>
      <ProductWrapper product={product} />
    </Container>
  );
};

export default ProductCard;
