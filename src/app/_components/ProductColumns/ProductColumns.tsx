"use client";

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ProductParameters from "../ProductParameters/ProductParameters";
import ProductPrices from "../ProductPrices/ProductPrices";

import type { Product, ProductPriceList } from "../../../../types/types";

interface ProductColumnsProps {
  product: Product;
  priceList: ProductPriceList;
}

const ProductColumns = ({ product, priceList }: ProductColumnsProps) => {
  const [filter, setFilter] = useState<object>(() =>
    product.parameters.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.fieldName]: curr.fieldValues[0]._id,
      }),
      {},
    ),
  );

  const filterKey = Object.values(filter) as string[];
  const activePriceList =
    priceList.variants.find(
      (el) => el.configuration.join("-") === filterKey.join("-"),
    )?.values || priceList.values;

  console.log("PRICE LIST", activePriceList);

  if (product.parameters.length < 1) return <div>Produkt niedostępny</div>;

  return (
    <Row noGutters xs={1} md={1} lg={3}>
      <Col>
        <ProductParameters
          parameters={product.parameters}
          updateFilter={setFilter}
        />
      </Col>
      <Col>
        Ceny
        <ProductPrices prices={activePriceList} />
      </Col>
      <Col>
        Podsumowanie
        {/* <Summary order={order} sendToStore={sendToStore} /> */}
      </Col>
    </Row>
  );
};

export default ProductColumns;
