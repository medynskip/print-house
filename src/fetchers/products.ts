import type {
  NewProduct,
  NewProductPriceList,
  Product,
  ProductPriceList,
} from "../../types/types";

export const getProducts = async () => {
  const res = await fetch("http://localhost:5001/product/get", {
    cache: "no-store",
  });

  const products = (await res.json()) as Product[];

  return products;
};

export const getProductDetails = async (productID: string) => {
  const res = await fetch(`http://localhost:5001/product/get/${productID}`, {
    cache: "no-store",
  });

  const product = (await res.json()) as Product;

  return product;
};

export const deleteProduct = async (productID: string) => {
  await fetch(`http://localhost:5001/product/delete/${productID}`, {
    method: "DELETE",
  }).then(() => {
    return "success";
  });
};

export const addProduct = async (product: NewProduct) => {
  await fetch("http://localhost:5001/product/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then(() => {
    return "success";
  });
};

export const updateProduct = async (product: Product) => {
  await fetch(`http://localhost:5001/product/update/${product._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then(() => {
    return "success";
  });
};

// PRICE LIST
export const addProductPriceList = async (item: NewProductPriceList) => {
  await fetch("http://localhost:5001/product/add/pricelist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(() => {
    return "success";
  });
};

export const getProductPriceList = async (key: string) => {
  const res = await fetch(
    `http://localhost:5001/product/get/pricelist/${key}`,
    {
      cache: "no-store",
    },
  );

  const pricelist = (await res.json()) as ProductPriceList;

  return pricelist;
};

export const updateProductPriceList = async (item: ProductPriceList) => {
  await fetch(`http://localhost:5001/product/update/pricelist/${item._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(() => {
    return "success";
  });
};
