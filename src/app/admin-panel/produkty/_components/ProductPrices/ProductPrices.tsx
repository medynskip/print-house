import React from "react";
import Table from "react-bootstrap/Table";

import PriceNew from "./priceNew";
import PricesGenerator from "./pricesGenerator";

const ProductPrices = ({ product, update }) => {
  const addPrice = (newItem) => {
    update({
      prices: [...product.prices, newItem],
    });
  };

  return (
    <>
      <Table striped hover>
        <tbody>
          <PricesGenerator />
        </tbody>
      </Table>
      <PriceNew update={addPrice} />
    </>
  );
};

export default ProductPrices;
