export interface Parameters {
  fieldName: string;
  fieldValues: [];
}

export interface Product {
  _id: string;
  name: string;
  active: boolean;
  descriptionShort?: string;
  descriptionLong?: string;
  parameters: Parameters[];
  prices: object[];
  icon?: string;
  duration?: number;
}

export type NewProduct = Omit<Product, "_id">;
