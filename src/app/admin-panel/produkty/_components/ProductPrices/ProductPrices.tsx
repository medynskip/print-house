"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import {
  addProductPriceList,
  getProductPriceList,
  updateProductPriceList,
} from "@/fetchers/products";

import PriceNew from "../PriceNew/PriceNew";
import PriceRow from "../PriceRow/PriceRow";

import type { Product } from "../../../../../../types/types";
import type { ChangeEvent } from "react";

interface ProductPricesProps {
  product: Product;
}

const ProductPrices = ({ product }: ProductPricesProps) => {
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

  const { isPending, data, refetch } = useQuery({
    queryKey: [filterKey],
    queryFn: () => getProductPriceList(product._id),
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createPriceList = async (value: { amount: number; price: number }) => {
    await addProductPriceList({
      productID: product._id,
      values: [value],
      variants: [],
    });

    await refetch();
  };

  const updatePriceList = async (value: { amount: number; price: number }) => {
    if (!data) return;

    await updateProductPriceList({
      ...data,
      values: [...data.values, value],
    });

    await refetch();
  };

  const createVariant = async () => {
    if (!data) return;

    await updateProductPriceList({
      ...data,
      variants: [
        ...data.variants,
        { configuration: filterKey, values: data.values },
      ],
    });

    await refetch();
  };

  const variant = data?.variants.find(
    (el) => el.configuration.join("-") === filterKey.join("-"),
  );
  const priceListToDisplay = variant?.values || data?.values;

  return (
    <div>
      <h2>POLA</h2>
      <div>
        {product.parameters.map((param) => (
          <div key={param.fieldName}>
            <label>{param.fieldName}</label>
            <Form.Select
              onChange={handleChange}
              key={param._id}
              aria-label="Default select example"
              name={param.fieldName}
            >
              {param.fieldValues.map((el) => (
                <option key={el._id} value={el._id}>
                  {el.value}
                </option>
              ))}
            </Form.Select>
          </div>
        ))}
      </div>
      <h2>
        WARTOŚCI
        <Button
          onClick={() => {
            void (async () => {
              await createVariant();
            })();
          }}
          disabled={Boolean(variant)}
        >
          Utwórz wariant
        </Button>
      </h2>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {priceListToDisplay ? (
            <>
              <Table striped hover>
                <tbody>
                  {priceListToDisplay.map((el) => (
                    <PriceRow
                      key={el.amount}
                      priceEntry={el}
                      update={updatePriceList}
                      product={product}
                      filterKey={filterKey}
                    />
                  ))}
                </tbody>
              </Table>
              <PriceNew update={updatePriceList} />
            </>
          ) : (
            <div>
              <div>BRAK ZDEFINIOWANYCH CEN DLA FILTRU</div>
              <PriceNew update={createPriceList} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductPrices;
