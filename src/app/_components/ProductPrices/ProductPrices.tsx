import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import style from "./ProductPrices.module.scss";

import type { PriceListValue } from "../../../../types/types";

interface ProductPricesProps {
  prices: PriceListValue[];
  setSelected: React.Dispatch<React.SetStateAction<PriceListValue>>;
}

const ProductPrices = ({ prices, setSelected }: ProductPricesProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [prices]);

  const handleClick = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setSelected(prices[index]);
    },
    [prices, setSelected],
  );

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
                onClick={() => {
                  handleClick(i);
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
