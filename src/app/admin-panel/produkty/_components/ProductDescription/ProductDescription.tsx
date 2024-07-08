"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
// import Table from "react-bootstrap/Table";

const ReactQuill = dynamic(() => import("react-quill"));
import "react-quill/dist/quill.snow.css";

interface ProductDescriptionProps {
  product: {
    active: boolean;
    name: string;
    icon: string;
    duration: number;
    descriptionShort: string;
    descriptionLong: string;
  };
  update: (params: object) => void;
}

const ProductDescription = ({ product, update }: ProductDescriptionProps) => {
  const [editable, setEditable] = useState(false);
  const [active, setActive] = useState(product.active);

  const [header, setHeader] = useState({
    name: product.name,
    icon: product.icon,
    duration: product.duration,
  });

  const [shortDesc, setShortDesc] = useState(product.descriptionShort);
  const [longDesc, setLongDesc] = useState(product.descriptionLong);

  const handleChange = (e) => {
    setHeader({
      ...header,
      [e.target.name]: e.target.value,
    });
  };

  const edit = () => {
    setEditable((prev) => !prev);
    if (editable) {
      update({
        ...header,
        descriptionShort: shortDesc,
        descriptionLong: longDesc,
      });
    }
  };

  const activate = () => {
    setActive((prev) => !prev);
    update({ active: !active });
  };

  return (
    <>
      <Row className="product-header">
        <Col>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>NAZWA</InputGroup.Text>
            </InputGroup>
            <FormControl
              name="name"
              value={header.name}
              onChange={handleChange}
              disabled={!editable}
              placeholder=""
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>IKONA</InputGroup.Text>
            </InputGroup>
            <FormControl
              name="icon"
              value={header.icon}
              onChange={handleChange}
              disabled={!editable}
              placeholder="Podaj link do ikony"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup>
              <InputGroup.Text>TERMIN</InputGroup.Text>
            </InputGroup>
            <FormControl
              name="duration"
              value={header.duration}
              onChange={handleChange}
              disabled={!editable}
              placeholder="Podaj czas realizacji w dniach"
            />
          </InputGroup>
        </Col>
        <Col>
          <Button
            onClick={edit}
            variant={editable ? "success" : "primary"}
            size="sm"
          >
            {editable ? "Zapisz zmiany" : "Edytuj nagłówek"}
          </Button>
          <Button
            onClick={activate}
            variant={active ? "danger" : "success"}
            size="sm"
          >
            {active ? "Wyłącz produkt" : "Aktywuj produkt"}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          Krótki opis:
          <ReactQuill
            onChange={setShortDesc}
            readOnly={!editable}
            theme="snow"
            value={shortDesc}
          />
          Długi opis:
          <ReactQuill
            onChange={setLongDesc}
            readOnly={!editable}
            theme="snow"
            value={longDesc}
          />
        </Col>
      </Row>
    </>
  );
};

export default ProductDescription;
