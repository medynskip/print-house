import Image from "next/image";
import Link from "next/link";
import Col from "react-bootstrap/Col";

// import utils from "../utils/utils";

interface ProductCardProps {
  product: {
    icon?: string;
    name: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  // const nameSlug = utils.slugify(props.product.name);
  const nameSlug = "text";
  // const url = `/produkty/${nameSlug}`;
  return (
    <Col>
      <div className="product-card">
        {product.icon ? (
          <Image src={product.icon} alt="" width="100" height="100" />
        ) : null}
        {product.name.toUpperCase()}

        <div className="reveal">
          <Link href={`/produkty/${nameSlug}`} className="product-card">
            Szczegóły
          </Link>
          <Link href={`/zamowienie/${nameSlug}`} className="product-card">
            Zamów
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
