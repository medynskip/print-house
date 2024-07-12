// import { faEdit, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { updateProduct } from "@/fetchers/products";

import type { Product } from "../../../../../../types/types";

interface PriceRowProps {
  priceEntry: {
    _id?: string;
    amount: number;
    price: number;
  };
  product: Product;
  update: (value: { amount: number; price: number }) => Promise<void>;
  filterKey: string[];
}

const PriceRow = ({
  priceEntry,
  product,
  update,
  filterKey,
}: PriceRowProps) => {
  const [editable, setEditable] = useState(false);

  const [value, setValue] = useState({
    amount: priceEntry.amount,
    price: priceEntry.price,
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const editThis = () => {
    setEditable((prev) => !prev);
    if (editable) {
      updatePrice();
    }
  };

  const updatePrice = () => {
    const i = product.prices.findIndex((x) => x._id == priceEntry._id);
    const newPrices = [...product.prices];
    newPrices[i] = { ...value };
    update(newPrices);
  };

  const deleteThis = async () => {
    const groupIndex = product.prices.findIndex(
      (el) => el.configuration === filterKey,
    );

    const itemIndex = product.prices[groupIndex].values.findIndex(
      (el) => el._id === priceEntry._id,
    );

    const newPrices = [...product.prices];
    newPrices[groupIndex].values.splice(itemIndex, 1);
    // const newPrices = product.prices.filter(
    //   (each) => each._id != priceEntry._id,
    // );
    // await update(newPrices);
    await updateProduct({
      ...product,
      prices: [...newPrices],
    });
  };

  return (
    <tr>
      <td>
        <Form.Control
          name="amount"
          value={value.amount}
          onChange={handleChange}
          disabled={!editable}
        />
      </td>
      <td>
        <Form.Control
          name="price"
          value={value.price}
          onChange={handleChange}
          disabled={!editable}
        />
      </td>
      <td>
        <Button
          onClick={editThis}
          variant={editable ? "success" : "primary"}
          size="sm"
        >
          {editable ? "Zapisz" : "Edytuj"}
        </Button>
        <Button onClick={deleteThis} variant="danger" size="sm">
          Usuń
        </Button>
      </td>
    </tr>
  );
};

export default PriceRow;
