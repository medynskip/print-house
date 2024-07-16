"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import type { FormEvent } from "react";

interface ParameterValueNewProps {
  addValue: (value: string) => Promise<void>;
}

const ParameterValueNew = ({ addValue }: ParameterValueNewProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    // console.log(value);

    setValue(e.target.value);
  };

  const handleSubmit = async () => {
    await addValue(value);

    setValue("");
  };

  return (
    <Form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        void (async () => {
          await handleSubmit();
        })();
      }}
    >
      <InputGroup className="row">
        <Form.Control
          name="name"
          placeholder="Podaj nową wartość"
          aria-label="Podaj nową wartość"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={value}
          className="col-8"
        />
        <InputGroup className="col-2">
          <Button type="submit" variant="outline-success">
            Dodaj
          </Button>
        </InputGroup>
      </InputGroup>
    </Form>
  );
};

export default ParameterValueNew;
