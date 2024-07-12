import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import type { ChangeEvent, FormEvent } from "react";

// import FormCont
interface PriceNewProps {
  update: (param: { amount: number; price: number }) => Promise<void>;
}

const PriceNew = ({ update }: PriceNewProps) => {
  const [value, setValue] = useState({
    amount: 0,
    price: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    await update(value);
    setValue({
      amount: 0,
      price: 0,
    });
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
          name="amount"
          placeholder="Wprowadź ilość"
          aria-label="Wprowadź ilość"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={value.amount}
        />
        <Form.Control
          name="price"
          placeholder="Wprowadź cenę"
          aria-label="Wprowadź cenę"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={value.price}
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

export default PriceNew;
