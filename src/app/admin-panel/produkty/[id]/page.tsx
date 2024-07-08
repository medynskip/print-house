"use server";

// import Link from "next/link";
// import React, { useEffect } from "react";

// import { connect } from "react-redux";
// import {
//   initProduct,
//   updateProduct,
// } from "./../../../redux/actions/productActions";

// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Spinner from "react-bootstrap/Spinner";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { getProductDetails } from "@/fetchers/products";

// import AdminLayout from "./../../../components/admin/adminLayout";
// import ProductDescription from "./../../../components/admin/productDescription";
// import ProductParameters from "./../../../components/admin/productParameters";
// import ProductPrices from "./../../../components/admin/productPrices";

import ProductDescription from "../_components/ProductDescription/ProductDescription";
import ProductParameters from "../_components/ProductParameters/ProductParameters";
import ProductPrices from "../_components/ProductPrices/ProductPrices";
import ProductWrapper from "../_components/ProductWrapper/ProductWrapper";

const ProductCard = async ({ params }: { params: { id: string } }) => {
  // useEffect(() => {
  //   initProduct(id);
  // }, []);

  console.log("GGGGGGGG", params);

  // const update = (params: object) => {
  //   console.log("PARAMS", params);

  //   // updateProduct({
  //   //   ...product,
  //   //   ...params,
  //   // });
  // };

  const product = await getProductDetails(params.id);

  // if (product.loading)
  //   return (
  //     // <AdminLayout>
  //     <Spinner />
  //     // </AdminLayout>
  //   );

  return (
    // <AdminLayout>
    <Container className="product-card">
      <h3>Karta produktu</h3>
      <ProductWrapper product={product} />
    </Container>
  );
};

export default ProductCard;
