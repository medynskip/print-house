// import { faEdit, faSave, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import type { ChangeEvent } from "react";

interface PriceRowProps {
  priceEntry: {
    _id: string;
    amount: number;
    price: number;
  };
  update: (value: {
    _id: string;
    amount: number;
    price: number;
  }) => Promise<void>;
  remove?: (id: string) => Promise<void>;
  isVariant?: boolean;
}

const PriceRow = ({
  priceEntry,
  update,
  remove,
  isVariant = false,
}: PriceRowProps) => {
  const [editable, setEditable] = useState(false);

  const [value, setValue] = useState({
    ...priceEntry,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const editThis = async () => {
    if (editable) {
      await update(value);
    }

    setEditable((prev) => !prev);
  };

  const deleteThis = async () => {
    if (typeof remove === "function") {
      await remove(priceEntry._id);
    }
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
          onClick={() => {
            void (async () => {
              await editThis();
            })();
          }}
          variant={editable ? "success" : "primary"}
          size="sm"
        >
          {editable ? "Zapisz" : "Edytuj"}
        </Button>
        {!isVariant ? (
          <Button
            onClick={() => {
              void (async () => {
                await deleteThis();
              })();
            }}
            variant="danger"
            size="sm"
          >
            Usuń
          </Button>
        ) : null}
      </td>
    </tr>
  );
};

export default PriceRow;
