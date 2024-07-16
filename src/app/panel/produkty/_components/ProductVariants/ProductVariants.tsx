"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import {
  getProductPriceList,
  updateProductPriceList,
} from "@/fetchers/products";

import PriceRow from "../PriceRow/PriceRow";

import type { Product } from "../../../../../../types/types";
import type { ChangeEvent } from "react";

interface ProductVariantsProps {
  product: Product;
}

const ProductVariants = ({ product }: ProductVariantsProps) => {
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

  const variantIndex =
    data?.variants.findIndex(
      (el) => el.configuration.join("-") === filterKey.join("-"),
    ) || 0;
  const variant = data?.variants[variantIndex];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateSinglePriceEntry = async (value: {
    _id: string;
    amount: number;
    price: number;
  }) => {
    if (!data || !variant) return;

    const pi = variant.values.findIndex((x) => x._id === value._id);
    const newVariants = [...data.variants];
    newVariants[variantIndex].values[pi] = { ...value };

    await updateProductPriceList({
      ...data,
      variants: [...newVariants],
    });

    await refetch();
  };

  const removeVariant = async () => {
    if (!data || !variant) return;

    const newVariants = [...data.variants];
    newVariants.splice(variantIndex, 1);

    await updateProductPriceList({
      ...data,
      variants: [...newVariants],
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
      <h2>WARTOŚCI</h2>
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {variant ? (
            <div>
              <Button
                onClick={() => {
                  void (async () => {
                    await removeVariant();
                  })();
                }}
                // disabled={Boolean(variant)}
              >
                Usuń wariant
              </Button>
              <Table striped hover>
                <tbody>
                  {variant.values.map((el) => (
                    <PriceRow
                      key={el.amount}
                      priceEntry={el}
                      update={updateSinglePriceEntry}
                      isVariant={true}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <div>
              <div>BRAK ZDEFINIOWANYCH CEN DLA FILTRU</div>
              <Button
                onClick={() => {
                  void (async () => {
                    await createVariant();
                  })();
                }}
              >
                Utwórz wariant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductVariants;
