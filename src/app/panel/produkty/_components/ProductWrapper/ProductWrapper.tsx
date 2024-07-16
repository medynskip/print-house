"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import { updateProduct } from "@/fetchers/products";

import ProductDescription from "../ProductDescription/ProductDescription";
import ProductParameters from "../ProductParameters/ProductParameters";
import ProductPrices from "../ProductPrices/ProductPrices";
import ProductVariants from "../ProductVariants/ProductVariants";

import type { Product } from "../../../../../../types/types";

interface ProductWrapperProps {
  product: Product;
}
const ProductWrapper = ({ product }: ProductWrapperProps) => {
  return (
    <Tabs>
      <Tab eventKey="opis" title="Opis">
        <ProductDescription product={product} />
      </Tab>
      <Tab eventKey="parametry" title="Parametry">
        <ProductParameters product={product} />
      </Tab>
      <Tab eventKey="ceny" title="Ceny">
        <ProductPrices product={product} />
      </Tab>
      <Tab eventKey="warianty" title="Warianty">
        <ProductVariants product={product} />
      </Tab>
    </Tabs>
  );
};

export default ProductWrapper;
