"use server";

// const ProductsModule = () => {
//   return <div>PRODUCTS</div>;
// };

// export default ProductsModule;

import Alert from "react-bootstrap/Alert";
import ListGroup from "react-bootstrap/ListGroup";

import { getProducts } from "@/fetchers/products";

import AddProduct from "./_components/AddProduct/AddProduct";
import ProductCard from "./_components/ProductCard/ProductCard";

const ProductsModule = async () => {
  const products = await getProducts();

  console.log("PRODS", products);

  return (
    <>
      <h3>Produkty</h3>
      <div>
        <ListGroup>
          {products.length ? (
            products.map((product) => {
              return (
                <ProductCard
                  key={product._id}
                  product={product}
                  // deleteProduct={deleteProduct}
                />
              );
            })
          ) : (
            <Alert variant="warning">
              <div>Nie skonfigurowałeś żadnych produktów!</div>
            </Alert>
          )}
        </ListGroup>
        <AddProduct />
      </div>
    </>
  );
};

export default ProductsModule;
