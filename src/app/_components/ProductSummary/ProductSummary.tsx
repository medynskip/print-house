// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import { calculateWorkDays } from "@/utils/calculateWorkingDays";
// import utils from "../utils/utils";

interface ProductSummaryProps {
  order: {
    product: string;
    parameters: { [n: string]: { _id: string; value: string } };
    duration: string | undefined;
    price: number;
    volume: number;
  };
}

const ProductSummary = ({ order }: ProductSummaryProps) => {
  const selectedFilter = Object.keys(order.parameters).map((key) => ({
    field: key,
    value: order.parameters[key].value,
  }));

  console.log("order.parameters", order.parameters);
  console.log("selectedFilter", selectedFilter);

  const handleClick = () => {
    console.log("CLICK");
  };

  return (
    <div className="shop-module">
      <span className="top">3</span>
      <h4>Potwiedź parametry</h4>
      <ul>
        <li>
          <strong>Produkt:</strong>
          <span> {order.product}</span>
        </li>
        <li>
          <strong>Czas realizacji:</strong>
          <span>{order.duration} dni robocze</span>
        </li>
        <li>
          <strong>Nakład:</strong>
          <span>{order.volume} szt.</span>
        </li>
      </ul>
      <div className="hr-sect">
        <strong>Wybrane parametry:</strong>
      </div>
      <ul>
        {selectedFilter.map((el, i) => {
          return (
            <li key={i}>
              <span>{el.field}:</span>
              <span>{el.value}</span>
            </li>
          );
        })}
      </ul>
      <div className="hr-sect">
        <strong>Dostawa:</strong>
      </div>
      <ul>
        <li>
          <span>Przesyłka kurierska</span>
          <span>GRATIS</span>
        </li>
        {order.duration ? (
          <li>
            <span>Opłać dzisiaj, wyślemy:</span>
            <span>
              {calculateWorkDays(Date.now(), parseInt(order.duration))}
            </span>
          </li>
        ) : null}
      </ul>

      <div className="hr-sect">
        <strong>Płatność:</strong>
      </div>
      <p className="price">
        <span className="netto">{order.price}.00 zł netto</span>
        <br />
        <span className="brutto">
          {(order.price * 1.23).toFixed(2)} zł brutto
        </span>
      </p>
      <Button onClick={handleClick} variant="success">
        Zamów
      </Button>
    </div>
  );
};

export default ProductSummary;
