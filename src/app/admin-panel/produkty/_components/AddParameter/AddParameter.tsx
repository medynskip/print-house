"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import type { ChangeEvent, FormEvent } from "react";
// import type { ChangeEvent } from "react";

// type FormControlElement = HTMLInputElement | HTMLTextAreaElement;
interface AddParameterProps {
  update: (param: string) => Promise<void>;
}

const AddParameter = ({ update }: AddParameterProps) => {
  const [parameter, setParameter] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParameter(e.target.value);
  };

  const handleSubmit = async () => {
    await update(parameter);

    setParameter("");
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
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Podaj nazwę nowej grupy"
          aria-label="Podaj nazwę nowej grupy"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={parameter}
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
