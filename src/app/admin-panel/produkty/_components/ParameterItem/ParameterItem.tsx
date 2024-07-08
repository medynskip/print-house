// import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

// import ParameterHeader from "./parameterHeader";
import ParameterItemHeader from "../ParameterItemHeader/ParameterItemHeader";
import ParameterValueNew from "../ParameterValueNew/ParameterValueNew";
import ParameterValueRow from "../ParameterValueRow/ParameterValueRow";

// import ValueNew from "./valueNew";
// import ValueRow from "./valueRow";

const ParameterItem = ({ product, parameter, update }) => {
  const id = parameter._id;

  const addValue = (newItem) => {
    const i = product.parameters.findIndex((x) => x._id == id);
    const updatedParameters = [...product.parameters];
    updatedParameters[i].fieldValues.push({ ...newItem });

    update(updatedParameters);
  };

  const deleteValue = (idToRemove) => {
    const paramIndex = product.parameters.findIndex((x) => x._id == id);
    const updatedParameters = [...product.parameters];
    const newParams = updatedParameters[paramIndex].fieldValues.filter(
      (each) => each._id != idToRemove,
    );
    updatedParameters[paramIndex].fieldValues = [...newParams];
    update(updatedParameters);
  };

  const updateValue = (updated, idToChange) => {
    const i = product.parameters.findIndex((x) => x._id == id);
    const updatedParameters = [...product.parameters];
    const j = updatedParameters[i].fieldValues.findIndex(
      (x) => x._id == idToChange,
    );
    updatedParameters[i].fieldValues[j] = { ...updated };
    // console.log(updatedParameters);
    update(updatedParameters);
  };

  const deleteParameter = () => {
    const i = product.parameters.findIndex((x) => x._id == id);
    const updatedParameters = [...product.parameters];
    updatedParameters.splice(i, 1);
    update(updatedParameters);
  };

  return (
    <tr className="row">
      <td className="col-4">
        <ParameterItemHeader
          deleteParameter={deleteParameter}
          name={parameter.fieldName}
        />
      </td>
      <td className="col-8">
        <Table hover size="sm">
          <tbody>
            {parameter.fieldValues.map((el, i) => {
              return (
                <ParameterValueRow
                  updateValue={updateValue}
                  deleteValue={deleteValue}
                  key={i}
                  el={el}
                  parentId={id}
                />
              );
            })}
          </tbody>
        </Table>
        <ParameterValueNew addValue={addValue} />
      </td>
    </tr>
  );
};

export default ParameterItem;
