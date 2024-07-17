"use server";

import Container from "react-bootstrap/Container";

import { getProductDetails } from "@/fetchers/products";

import ProductWrapper from "../_components/ProductWrapper/ProductWrapper";

const ProductCard = async ({ params }: { params: { slug: string } }) => {
  const product = await getProductDetails(params.slug);

  return (
    <Container className="product-card">
      <h3>Karta produktu</h3>
      <ProductWrapper product={product} />
    </Container>
  );
};

export default ProductCard;
