//React
import clsx from "clsx";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

import style from "./ProductPrices.module.scss";
// import { ProductPriceList } from "../../../../types/types";

import type { PriceListValue } from "../../../../types/types";
// import type { MouseEvent } from "react";

interface ProductPricesProps {
  prices: PriceListValue[];
  setSelected: React.Dispatch<React.SetStateAction<PriceListValue>>;
}

const ProductPrices = ({ prices, setSelected }: ProductPricesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number, id: string) => {
    // const index = parseInt(e.currentTarget.getAttribute("data-key"));

    setActiveIndex(index);
    setSelected(prices[index]);
    console.log("ID", id);
  };

  return (
    <div className="shop-module">
      <span className="top">2</span>
      <h4>Wybierz nakład</h4>
      <Table>
        <thead>
          <tr>
            <th>Nakład</th>
            <th>Cena netto</th>
          </tr>
          {prices.map((item, i) => {
            return (
              <tr
                className={clsx(
                  style.priceRow,
                  activeIndex === i && style.priceRowActive,
                )}
                key={item._id}
                // data-key={i}
                // data-amount={price.amount}
                // data-price={price.price}
                onClick={() => {
                  handleClick(i, item._id);
                }}
              >
                <td>{item.amount}</td>
                <td>{item.price},00 zł</td>
              </tr>
            );
          })}
        </thead>
      </Table>
    </div>
  );
};

export default ProductPrices;
