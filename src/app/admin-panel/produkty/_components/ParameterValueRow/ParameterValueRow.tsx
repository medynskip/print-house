"use client";

// import { faEdit, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import type { ChangeEvent } from "react";

interface ParameterValueRowProps {
  el: {
    value: string;
    _id: string;
  };
  deleteValue: (id: string) => void;
  updateValue: (value: string, id: string) => void;
}

const ParameterValueRow = ({
  el,
  deleteValue,
  updateValue,
}: ParameterValueRowProps) => {
  const [value, setValue] = useState(el.value);
  const [editable, setEditable] = useState(false);

  // const handleChange = (e) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const editThis = () => {
    if (editable) {
      updateValue(value, el._id);
    }

    setEditable((prev) => !prev);
  };

  const deleteThis = () => {
    deleteValue(el._id);
  };

  return (
    <tr>
      <td>
        <Form.Control
          name="name"
          value={value}
          onChange={handleChange}
          disabled={!editable}
        />
      </td>
      {/* <td className="col-2">
        <Form.Control
          name="multiplier"
          value={values.multiplier}
          onChange={handleChange}
          disabled={!editable}
        />
      </td> */}
      <td className="col-2">
        <Button
          onClick={editThis}
          variant={editable ? "success" : "primary"}
          size="sm"
        >
          {editable ? "zapisz" : "edytuj"}
          {/* <FontAwesomeIcon icon={editable ? faSave : faEdit} /> */}
        </Button>
        <Button onClick={deleteThis} variant="danger" size="sm">
          usuń
          {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
        </Button>
      </td>
    </tr>
  );
};

export default ParameterValueRow;
