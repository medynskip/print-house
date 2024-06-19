interface Product {
  _id: string;
  name: string;
  active: boolean;
  parameters: object[];
  prices: object[];
}

type NewProduct = Omit<Product, "_id">;

export const getActiveProducts = async () => {
  const res = await fetch("http://localhost:5001/product/get", {
    cache: "no-store",
  });

  const products = (await res.json()) as Product[];

  return products;
};

export const deleteProduct = async (productID: string) => {
  console.log("DELETE PRODUCT", productID);
  await fetch(`http://localhost:5001/product/delete/${productID}`, {
    method: "DELETE",
  }).then(() => {
    return "success";
    // router.replace(router.asPath);
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
    // router.replace(router.asPath);
  });
};
