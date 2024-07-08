"use client";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ProductDescription from "../ProductDescription/ProductDescription";
import ProductParameters from "../ProductParameters/ProductParameters";
// import ProductPrices from "../_components/ProductPrices/ProductPrices";

const ProductWrapper = ({ product }: { product: object }) => {
  const update = (params: object) => {
    console.log("PARAMS", params);

    // updateProduct({
    //   ...product,
    //   ...params,
    // });
  };

  return (
    <Tabs>
      <Tab eventKey="opis" title="Opis">
        <ProductDescription product={product} update={update} />
      </Tab>
      <Tab eventKey="parametry" title="Parametry">
        <ProductParameters product={product} update={update} />
      </Tab>
      {/* <Tab eventKey="ceny" title="Ceny">
          <ProductPrices product={product} update={update} />
        </Tab> */}
    </Tabs>
  );
};

export default ProductWrapper;
