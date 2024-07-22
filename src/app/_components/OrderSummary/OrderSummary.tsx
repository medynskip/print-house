// import { useRouter } from "next/router";
// import React, { useState } from "react";

// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Spinner from "react-bootstrap/Spinner";

const OrderSummary = ({ order }) => {
  return (
    <div className="parameters content-box">
      <h4>Wybrane parametry zamówienia</h4>
      <Row>
        <Col>
          <h5>Zamówienie:</h5>

          <ul>
            <li>
              <span>Produkt:</span> <span>{order.product}</span>
            </li>
            <li>
              <span>Czas realizacji:</span>{" "}
              <span>{order.duration} dni robocze</span>
            </li>
            <li>
              <span>Nakład:</span> <span>{order.volume} szt.</span>
            </li>
            <li>
              <span>Cena :</span>{" "}
              <span>
                {order.value}
                .00 zł netto
              </span>
            </li>
            <li>
              <span> </span>
              <span>{(order.value * 1.23).toFixed(2)} zł brutto</span>
            </li>
          </ul>
        </Col>
        <Col>
          <h5>Cechy:</h5>
          <ul>
            {order.parameters.map((el, i) => {
              return (
                <li key={i}>
                  <span>{el.name}</span>
                  <span>{el.value}</span>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;
