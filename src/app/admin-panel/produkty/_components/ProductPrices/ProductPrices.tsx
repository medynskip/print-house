import React from "react";
import Table from "react-bootstrap/Table";

// import PriceNew from "./priceNew";
// import PricesGenerator from "./pricesGenerator";

import PricesGenerator from "../PricesGenerator/PricesGenerator";
// import PriceNew from "../PriceNew/PriceNew";

const ProductPrices = ({ product }) => {
  const addPrice = (newItem) => {
    update({
      prices: [...product.prices, newItem],
    });
  };

  return (
    <>
      <Table striped hover>
        <tbody>
          <PricesGenerator product={product} />
        </tbody>
      </Table>
      {/* <PriceNew update={addPrice} /> */}
    </>
  );
};

export default ProductPrices;
