"use client";

import Link from "next/link";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import { deleteProduct } from "@/fetchers/products";
import { slugify } from "@/utils/slugify";

import type { Product } from "../../../../../../types/types";

interface ProductCardProps {
  product: Product;
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
      <Link href={`/panel/produkty/${slugify(product.name)}`}>
        <Button variant="primary" size="sm">
          edit
        </Button>
      </Link>
      <Button
        variant="danger"
        size="sm"
        onClick={() => {
          void (async () => {
            await handleDelete();
          })();
        }}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default ProductCard;
