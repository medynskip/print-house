"use client";

import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ProductParameters from "../ProductParameters/ProductParameters";
import ProductPrices from "../ProductPrices/ProductPrices";
import ProductSummary from "../ProductSummary/ProductSummary";

import type { Product, ProductPriceList } from "../../../../types/types";

interface ProductColumnsProps {
  product: Product;
  priceList: ProductPriceList;
}

const ProductColumns = ({ product, priceList }: ProductColumnsProps) => {
  const [filter, setFilter] = useState<{
    [n: string]: { _id: string; value: string };
  }>(() =>
    product.parameters.reduce(
      (prev, curr) => ({
        ...prev,
        [curr.fieldName]: curr.fieldValues[0],
      }),
      {},
    ),
  );

  const filterKey = Object.values(filter).map(
    (el: { _id: string; value: string }) => el._id,
  );

  const activePriceList =
    priceList.variants.find(
      (el) => el.configuration.join("-") === filterKey.join("-"),
    )?.values || priceList.values;

  const [selectedVolume, setSelectedVolume] = useState(activePriceList[0]);

  useEffect(() => {
    setSelectedVolume(activePriceList[0]);
  }, [filter, activePriceList]);

  const order = {
    product: product.name,
    parameters: filter,
    duration: product.duration,
    price: selectedVolume.price,
    volume: selectedVolume.amount,
  };

  return (
    <Row noGutters xs={1} md={1} lg={3}>
      <Col>
        <ProductParameters
          parameters={product.parameters}
          updateFilter={setFilter}
        />
      </Col>
      <Col>
        <ProductPrices
          prices={activePriceList}
          setSelected={setSelectedVolume}
        />
      </Col>
      <Col>
        <ProductSummary order={order} />
      </Col>
    </Row>
  );
};

export default ProductColumns;
