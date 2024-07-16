"use client";

import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { deleteProduct } from "@/fetchers/products";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    active: boolean;
    parameters: object[];
    prices: object[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleDelete = async () => {
    const approve = confirm("Potwierdź usunięcie produktu");

    if (approve) {
      await deleteProduct(product._id);
    }
  };

  return (
    <ListGroup.Item>
      <h4>{product.name}</h4>
      <Badge bg={product.active ? "success" : "warning"}>
        {product.active ? "AKTYWNY" : "NIEAKTYWNY"}
      </Badge>
      <span> | </span>
      <Badge bg={product.parameters.length > 0 ? "success" : "secondary"}>
        Parametry: {product.parameters.length}
      </Badge>
      <Badge bg={product.prices.length > 0 ? "success" : "secondary"}>
        Ceny: {product.prices.length}
      </Badge>

      <Link href={`/admin-panel/produkty/${product._id}`}>
        <Button variant="primary" size="sm">
          edit
        </Button>
      </Link>
      <Button variant="danger" size="sm" onClick={handleDelete}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default ProductCard;
