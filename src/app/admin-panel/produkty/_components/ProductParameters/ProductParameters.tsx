"use client";

import React from "react";
import Table from "react-bootstrap/Table";

// import ParameterNew from "./parameterNew";
import { updateProduct } from "@/fetchers/products";

import AddParameter from "../AddParameter/AddParameter";
import ParametersGenerator from "../ParametersGenerator/ParametersGenerator";
// import ParametersGenerator from "./parametersGenerator";

import type { Parameters, Product } from "../../../../../../types/types";

interface ProductParametersProps {
  product: Product;
}

const ProductParameters = ({ product }: ProductParametersProps) => {
  const addParameter = async (newParamName: string) => {
    await updateParameters([
      ...product.parameters,
      { fieldName: newParamName, fieldValues: [] },
    ]);
  };

  const updateParameters = async (params: Parameters[]) => {
    await updateProduct({
      ...product,
      parameters: [...params],
    });
  };

  return (
    <>
      <Table striped hover>
        <tbody>
          <ParametersGenerator
            product={product}
            updateProduct={updateParameters}
          />
        </tbody>
      </Table>
      <AddParameter update={addParameter} />
    </>
  );
};

export default ProductParameters;
