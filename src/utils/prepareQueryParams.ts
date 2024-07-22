export const prepareQueryParams = (order: {
  product: string;
  parameters: {
    [n: string]: {
      _id: string;
      value: string;
    };
  };
  duration: string | undefined;
  price: number;
  volume: number;
}) => {
  // let params = `?product=${order.product}&volume=${order.volume.toString()}`;
  const params = `?product=${order.product}&volume=${order.volume.toString()}&parameters=${JSON.stringify(order.parameters)}`;

  // console.log("ORDERD IN PARAMS", order);

  // for (const [key, value] of Object.entries(order.parameters)) {
  //   params += `&${key}=${value.value}`;
  // }

  return params;
};
