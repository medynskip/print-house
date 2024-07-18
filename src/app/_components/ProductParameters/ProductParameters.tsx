// import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import type { Parameters } from "../../../../types/types";
import type { ChangeEvent } from "react";

interface ProductParametersProps {
  parameters: Parameters[];
  updateFilter: React.Dispatch<
    React.SetStateAction<{
      [n: string]: { _id: string; value: string };
    }>
  >;
}

const ProductParameters = ({
  parameters,
  updateFilter,
}: ProductParametersProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // const index = e.target.selectedIndex;
    // const el = e.target.childNodes[index];
    const option = JSON.parse(e.target.value) as { _id: string; value: string };

    // console.log(option);

    updateFilter((prev) => ({
      ...prev,
      [e.target.name]: { ...option },
    }));
    // updateFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <span>1.</span>
      <h4>Wybierz cechy druku</h4>
      <Form>
        {parameters.map((parameter) => {
          return (
            <Form.Group key={parameter._id}>
              <Form.Label>{parameter.fieldName}</Form.Label>
              <Form.Select onChange={handleChange} name={parameter.fieldName}>
                {parameter.fieldValues.map((option) => {
                  return (
                    <option key={option._id} value={JSON.stringify(option)}>
                      {option.value}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          );
        })}
      </Form>
    </div>
  );
};

export default ProductParameters;
