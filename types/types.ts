export interface PriceListValue {
  _id: string;
  amount: number;
  price: number;
}

export type NewPriceListValue = Omit<PriceListValue, "_id">;
export interface ProductPriceList {
  _id: string;
  productID: string;
  variants: {
    configuration: string[];
    values: PriceListValue[];
  }[];
  values: PriceListValue[];
}

export type NewProductPriceList = Omit<ProductPriceList, "_id">;

export interface Parameters {
  _id?: string;
  fieldName: string;
  fieldValues: {
    _id?: string;
    value: string;
  }[];
}

export interface Product {
  _id: string;
  name: string;
  active: boolean;
  descriptionShort?: string;
  descriptionLong?: string;
  parameters: Parameters[];
  icon?: string;
  duration?: number;
}

export type NewProduct = Omit<Product, "_id">;
