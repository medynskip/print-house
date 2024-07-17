import Image from "next/image";
import Link from "next/link";
import Col from "react-bootstrap/Col";

import { slugify } from "@/utils/slugify";

import style from "./ProductCard.module.scss";
// import utils from "../utils/utils";

interface ProductCardProps {
  product: {
    icon?: string;
    name: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const nameSlug = slugify(product.name);
  // const nameSlug = "text";
  // const url = `/produkty/${nameSlug}`;
  return (
    <Col className={style.card}>
      <Link href={`/produkty/${nameSlug}`} className={style.link}>
        {product.icon ? (
          <Image src={product.icon} alt="" width="100" height="100" />
        ) : null}
        {product.name.toUpperCase()}
        {/* <Link href={`/produkty/${nameSlug}`}>Szczegóły</Link> */}
      </Link>
    </Col>
  );
};

export default ProductCard;
