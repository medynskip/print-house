"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddParameter = ({ update }) => {
  const [parameter, setParameter] = useState({
    fieldName: "",
  });

  const handleChange = (e) => {
    setParameter({
      fieldName: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update({
      ...parameter,
      fieldValues: [],
    });
    setParameter({
      fieldName: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Podaj nazwę nowej grupy"
          aria-label="Podaj nazwę nowej grupy"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={parameter.fieldName}
        />
        <InputGroup>
          <Button type="submit" variant="outline-success">
            Dodaj
          </Button>
        </InputGroup>
      </InputGroup>
    </Form>
  );
};

export default AddParameter;
