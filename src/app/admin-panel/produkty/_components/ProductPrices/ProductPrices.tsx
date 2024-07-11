"use client";

import React from "react";
// import Table from "react-bootstrap/Table";

// import PriceNew from "./priceNew";
// import PricesGenerator from "./pricesGenerator";

import PricesGenerator from "../PricesGenerator/PricesGenerator";

import type { Product } from "../../../../../../types/types";
// import PriceNew from "../PriceNew/PriceNew";

const ProductPrices = ({ product }: { product: Product }) => {
  // const addPrice = (newItem) => {
  //   update({
  //     prices: [...product.prices, newItem],
  //   });
  // };

  return (
    <>
      <PricesGenerator product={product} />
      {/* <PriceNew update={addPrice} /> */}
    </>
  );
};

export default ProductPrices;
