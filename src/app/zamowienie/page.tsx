"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

// import OrderDetails from "../../components/orderDetails";
import OrderSummary from "../_components/OrderSummary/OrderSummary";

const ValidationErrors = (props) => {
  if (props.errors.length > 0) {
    const message = "Poniższe pola nie mogą być puste:";
    return (
      <Alert variant="warning">
        <p>{message}</p>
        <ul>
          {props.errors.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </Alert>
    );
  } else {
    return null;
  }
};

const Order = () => {
  // const Order = ({ order, updateClient, submitClient, products, pages }) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const parameters = searchParams.get("parameters");

  const order = {
    product: searchParams.get("product"),
    volume: searchParams.get("volume"),
    parameters: parameters ? (JSON.parse(parameters) as object) : null,
  };

  console.log("SP", order);

  const [errorEl, setErrorEl] = useState([]);
  const [company, setCompany] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    firstName: "",
    lastName: "",
    nip: "",
    street: "",
    city: "",
    postal: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckbox = (e) => {
    setCompany(e.target.checked);
  };

  const validation = () => {
    const err = [];
    fields.name != "" ? null : err.push("Nazwa");
    fields.firstName != "" ? null : err.push("Imię");
    fields.lastName != "" ? null : err.push("Nazwisko");
    fields.street != "" ? null : err.push("Ulica");
    fields.city != "" ? null : err.push("Miasto");
    fields.postal != "" ? null : err.push("Kod pocztowy");
    fields.email != "" ? null : err.push("E-mail");
    fields.phone != "" ? null : err.push("Telefon");

    return [...err];
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const err = validation();

    if (err.length < 1) {
      // submitClient({
      //   ...order,
      //   client: { ...fields },
      //   paymentType: "Niezdefiniowana",
      //   paymentStatus: "UNDEFINED",
      //   status: "Nowe",
      //   placed: Date.now(),
      //   history: [
      //     { date: Date.now(), comment: "Zamówienie przyjęte w systemie" },
      //   ],
      // });

      // router.push("/zamowienie/przyjete");

      console.log("SUBMIT");
    } else {
      setErrorEl(err);

      window.scrollTo(0, 100);
    }
  };

  return (
    <Container className="new-order-form">
      <h3>Nowe zamówienie</h3>
      <ValidationErrors errors={errorEl} />
      <Row>
        <Col>
          <Form>
            <div className="client content-box">
              <h4>Dane nabywcy</h4>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    Osoba do kontaktu *
                  </InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="firstName"
                  value={fields.firstName}
                  placeholder="Imię"
                  required
                />
                <FormControl
                  onChange={handleChange}
                  name="lastName"
                  value={fields.lastName}
                  placeholder="Nazwisko"
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Nabywca *</InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="name"
                  value={fields.name}
                  placeholder="Nazwa nabywcy"
                  required
                />
              </InputGroup>
              {/* <Form.Text className="text-muted">
                  Zaznacz tylko jeśli zakup dokonywany jest na firmę i chcesz
                  otrzymać fakturę VAT. W przeciwnym razie do zamówienia
                  wystawiony zostanie paragon fiskalny.
                </Form.Text> */}
              <Row>
                <InputGroup className="col-6">
                  <InputGroup>
                    <InputGroup.Text id="basic-addon1">NIP</InputGroup.Text>
                  </InputGroup>
                  <FormControl
                    onChange={handleChange}
                    name="nip"
                    value={fields.nip}
                    placeholder="NIP nabywcy"
                    disabled={company}
                    required={company}
                  />
                </InputGroup>
                <InputGroup className="col-6">
                  <InputGroup>
                    <InputGroup.Checkbox
                      onChange={handleCheckbox}
                      checked={company}
                      label="Zaznacz jeśli kupujesz jako osoba prywatna"
                    />
                    <InputGroup.Text id="basic-addon1">
                      Zaznacz jeśli kupujesz jako osoba prywatna
                    </InputGroup.Text>
                  </InputGroup>
                </InputGroup>
              </Row>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Ulica *</InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="street"
                  value={fields.street}
                  placeholder="Ulica"
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    Miasto / kod *
                  </InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="city"
                  value={fields.city}
                  placeholder="Miasto"
                  required
                />
                <FormControl
                  onChange={handleChange}
                  name="postal"
                  value={fields.postal}
                  placeholder="Kod"
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">
                    Adres e-mail *
                  </InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="email"
                  value={fields.email}
                  placeholder="Twój adres e-mail"
                  required
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">Telefon *</InputGroup.Text>
                </InputGroup>
                <FormControl
                  onChange={handleChange}
                  name="phone"
                  value={fields.phone}
                  placeholder="Telefon kontaktowy"
                  required
                />
              </InputGroup>
            </div>
            {/* <OrderSummary order={order} /> */}
          </Form>
        </Col>
      </Row>
      <div className="controls-spread">
        <Button
          onClick={() => {
            router.back();
          }}
          variant="secondary"
        >
          Wstecz
        </Button>
        <Button onClick={handlePlaceOrder} variant="success">
          Złóż zamówienie
        </Button>
      </div>
    </Container>
  );
};

export default Order;

// const mapStateToProps = (state) => ({
//   order: { ...state.client },
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateClient: (order) => updateClient(order),
//     submitClient: (order) => dispatch(submitClient(order)),
//   };
// };

// export async function getStaticProps() {
//   const productsQuery = await fetch(
//     `${process.env.NEXT_PUBLIC_API_LINK}/product/get/active`
//   );
//   const products = await productsQuery.json();

//   const pagesQuery = await fetch(
//     `${process.env.NEXT_PUBLIC_API_LINK}/page/get/active`
//   );
//   const pages = await pagesQuery.json();

//   return {
//     props: {
//       products,
//       pages,
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Zamowienie);
