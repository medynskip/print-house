"use client";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Table from "react-bootstrap/Table";

import { updateProduct } from "@/fetchers/products";

import AddParameter from "../AddParameter/AddParameter";
import ParameterItem from "../ParameterItem/ParameterItem";

import type { Parameters, Product } from "../../../../../../types/types";

interface ProductParametersProps {
  product: Product;
}

const ProductParameters = ({
  product: initialProduct,
}: ProductParametersProps) => {
  const [product, setProduct] = useState(initialProduct);

  const addParameter = async (newParamName: string) => {
    await updateParameters([
      ...product.parameters,
      { fieldName: newParamName, fieldValues: [{ value: "Default" }] },
    ]);
  };

  const updateParameters = async (params: Parameters[]) => {
    const updated = await updateProduct({
      ...product,
      parameters: [...params],
    });

    setProduct({ ...updated });
  };

  return (
    <>
      {product.parameters.length < 1 ? (
        <Alert variant="warning">
          Ten produkt nie posiada żadnych parametrów!
        </Alert>
      ) : (
        <Table striped hover>
          <tbody>
            {product.parameters.map((el, i) => (
              <ParameterItem
                key={i}
                product={product}
                parameter={el}
                update={updateParameters}
              />
            ))}
          </tbody>
        </Table>
      )}
      <AddParameter update={addParameter} />
    </>
  );
};

export default ProductParameters;
