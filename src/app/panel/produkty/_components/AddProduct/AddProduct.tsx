"use client";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { addProduct } from "@/fetchers/products";

// import { ChangeEvent } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length < 3) {
      alert("Nazwa musi mieć przynajmniej 3 znaki");
    } else {
      const newProduct = {
        name: name,
        parameters: [],
        prices: [],
        active: false,
        icon: "",
        duration: "1",
        descriptionShort: "",
        descriptionLong: "",
      };

      await addProduct(newProduct);
      setName("");
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form className="top-margin" onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Podaj nazwę produktu"
          aria-label="Podaj nazwę produktu"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          value={name}
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

export default AddProduct;
