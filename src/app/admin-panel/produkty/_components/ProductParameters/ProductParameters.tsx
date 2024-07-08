import React from "react";
import Table from "react-bootstrap/Table";

// import ParameterNew from "./parameterNew";
import AddParameter from "../AddParameter/AddParameter";
import ParametersGenerator from "../ParametersGenerator/ParametersGenerator";
// import ParametersGenerator from "./parametersGenerator";

interface ProductParametersProps {
  product: object;
  update: (item: object) => void;
}

const ProductParameters = ({ product, update }: ProductParametersProps) => {
  const addParameter = (newItem) => {
    update({
      parameters: [...product.parameters, newItem],
    });
  };

  return (
    <>
      <Table striped hover>
        <tbody>
          <ParametersGenerator product={product} updateProduct={update} />
        </tbody>
      </Table>
      <AddParameter update={addParameter} />
    </>
  );
};

export default ProductParameters;
