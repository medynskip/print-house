"use client";

import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import { Spinner } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import {
  addProductPriceList,
  getProductPriceList,
  updateProductPriceList,
} from "@/fetchers/products";

import PriceNew from "../PriceNew/PriceNew";
import PriceRow from "../PriceRow/PriceRow";

import type { PriceListValue, Product } from "../../../../../../types/types";
// import type { ChangeEvent } from "react";

interface ProductPricesProps {
  product: Product;
}

const ProductPrices = ({ product }: ProductPricesProps) => {
  // const [filter, setFilter] = useState<object>(() =>
  //   product.parameters.reduce(
  //     (prev, curr) => ({
  //       ...prev,
  //       [curr.fieldName]: curr.fieldValues[0]._id,
  //     }),
  //     {},
  //   ),
  // );

  // const filterKey = Object.values(filter) as string[];

  const { isPending, data, refetch } = useQuery({
    queryKey: [product._id],
    queryFn: () => getProductPriceList(product._id),
  });

  // const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const createPriceList = async (value: { amount: number; price: number }) => {
    await addProductPriceList({
      productID: product._id,
      values: [value as PriceListValue],
      variants: [],
    });

    await refetch();
  };

  const addSinglePriceEntry = async (value: {
    amount: number;
    price: number;
  }) => {
    if (!data) return;

    await updateProductPriceList({
      ...data,
      values: [...data.values, value as PriceListValue],
    });

    await refetch();
  };

  const updateSinglePriceEntry = async (value: {
    _id: string;
    amount: number;
    price: number;
  }) => {
    if (!data) return;

    const i = data.values.findIndex((x) => x._id === value._id);
    const newPrices = [...data.values];
    newPrices[i] = { ...value };

    await updateProductPriceList({
      ...data,
      values: [...newPrices],
    });

    await refetch();
  };

  const deleteSinglePriceEntry = async (id: string) => {
    if (!data) return;

    const i = data.values.findIndex((x) => x._id === id);
    const newValues = [...data.values];
    newValues.splice(i, 1);

    await updateProductPriceList({
      ...data,
      values: newValues,
    });

    await refetch();
  };

  // const createVariant = async () => {
  //   if (!data) return;

  //   await updateProductPriceList({
  //     ...data,
  //     variants: [
  //       ...data.variants,
  //       { configuration: filterKey, values: data.values },
  //     ],
  //   });

  //   await refetch();
  // // };

  // const variant = data?.variants.find(
  //   (el) => el.configuration.join("-") === filterKey.join("-"),
  // );
  // const priceListToDisplay = variant?.values || data?.values;

  return (
    <div>
      {/* <h2>POLA</h2>
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
      </div> */}
      <h2>
        WARTOŚCI
        {/* <Button
          onClick={() => {
            void (async () => {
              await createVariant();
            })();
          }}
          disabled={Boolean(variant)}
        >
          Utwórz wariant
        </Button> */}
      </h2>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {data ? (
            <>
              <Table striped hover>
                <tbody>
                  {data.values.map((el) => (
                    <PriceRow
                      key={el.amount}
                      priceEntry={el}
                      update={updateSinglePriceEntry}
                      remove={deleteSinglePriceEntry}
                      // product={product}
                      // filterKey={filterKey}
                    />
                  ))}
                </tbody>
              </Table>
              <PriceNew update={addSinglePriceEntry} />
            </>
          ) : (
            <div>
              <div>BRAK ZDEFINIOWANYCH CENNIKA</div>
              <PriceNew update={createPriceList} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductPrices;
