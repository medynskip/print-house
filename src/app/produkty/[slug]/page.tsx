import Image from "next/image";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Spinner from "react-bootstrap/Spinner";
// import Table from "react-bootstrap/Table";

import ProductColumns from "@/app/_components/ProductColumns/ProductColumns";
import { getProductDetails, getProductPriceList } from "@/fetchers/products";

// import Layout from "../../components/layout";
// import ProductColumns from "../../components/productColumns";
// import ProductOther from "../../components/productOther";
// import utils from "../../utils/utils";

const Product = async ({ params }: { params: { slug: string } }) => {
  const productName = params.slug;
  console.log("ITEM", productName);

  const product = await getProductDetails(productName);
  const priceList = await getProductPriceList(product._id);

  console.log("priceList", priceList);

  // const htmlContent = () => {
  //   return { __html: product.descriptionShort };
  // };

  return (
    <>
      {/* <Layout
        title={`${product.name} - najlepsza cena i bogate opcje wydruku`}
        products={allProducts}
        pages={pages}
      > */}
      <section className="print">
        {/* <Container> */}
        {/* <Row className="shop-item-header"> */}
        <div>
          <h2>
            {product.icon ? (
              <Image
                src={product.icon}
                alt={product.name}
                width="50"
                height="50"
              />
            ) : null}
            {product.name}
          </h2>
          <Link href="/produkty">
            <Button variant="outline-primary">Powrót do listy</Button>
          </Link>
        </div>
        {product.descriptionShort ? (
          <div dangerouslySetInnerHTML={{ __html: product.descriptionShort }} />
        ) : null}
        {/* {product.descriptionShort}
              </p> */}
        {/* </Row> */}

        {/* <ProductColumns product={product} /> */}
        <ProductColumns product={product} priceList={priceList} />

        {/* <ProductOther products={allProducts} /> */}
        {/* </Container> */}
      </section>
      {/* </Layout> */}
    </>
  );
};

export default Product;
