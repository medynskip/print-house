"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// import { updateProduct } from "@/fetchers/products";

import ProductDescription from "../ProductDescription/ProductDescription";
import ProductParameters from "../ProductParameters/ProductParameters";
import ProductPrices from "../ProductPrices/ProductPrices";

import type { Product } from "../../../../../../types/types";

interface ProductWrapperProps {
  product: Product;
}
const ProductWrapper = ({ product }: ProductWrapperProps) => {
  // const update = async (params: object) => {
  //   await updateProduct({
  //     ...product,
  //     ...params,
  //   });
  // };

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
    </Tabs>
  );
};

export default ProductWrapper;
