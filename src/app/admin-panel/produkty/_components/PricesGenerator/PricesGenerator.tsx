// "use client";

// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import { Spinner } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import Table from "react-bootstrap/Table";

// import {
//   addProductPriceList,
//   getProductPriceList,
//   updateProductPriceList,
// } from "@/fetchers/products";

// import PriceNew from "../PriceNew/PriceNew";
// import PriceRow from "../PriceRow/PriceRow";

// import type { Product } from "../../../../../../types/types";
// import type { ChangeEvent } from "react";

// interface PricesGeneratorProps {
//   product: Product;
// }

// const ProductPrices = ({ product }: PricesGeneratorProps) => {
//   const [filter, setFilter] = useState<object>(() =>
//     product.parameters.reduce(
//       (prev, curr) => ({
//         ...prev,
//         [curr.fieldName]: curr.fieldValues[0]._id,
//       }),
//       {},
//     ),
//   );

//   const filterKey = Object.values(filter).join("-");

//   const { isPending, data } = useQuery({
//     queryKey: [filterKey],
//     queryFn: () => getProductPriceList(filterKey),
//   });

//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const createPriceList = async (value: { amount: number; price: number }) => {
//     await addProductPriceList({
//       configuration: filterKey,
//       values: [value],
//     });
//   };

//   const updatePriceList = async (value: { amount: number; price: number }) => {
//     if (!data) return;

//     await updateProductPriceList({
//       ...data,
//       values: [...data.values, value],
//     });
//   };

//   return (
//     <div>
//       <h2>POLA</h2>
//       <div>
//         {product.parameters.map((param) => (
//           <div key={param.fieldName}>
//             <label>{param.fieldName}</label>
//             <Form.Select
//               onChange={handleChange}
//               key={param._id}
//               aria-label="Default select example"
//               name={param.fieldName}
//             >
//               {param.fieldValues.map((el) => (
//                 <option key={el._id} value={el._id}>
//                   {el.value}
//                 </option>
//               ))}
//             </Form.Select>
//           </div>
//         ))}
//       </div>
//       <h2>WARTOŚCI</h2>
//       {isPending ? (
//         <Spinner />
//       ) : (
//         <>
//           {data ? (
//             <>
//               <Table striped hover>
//                 <tbody>
//                   {data.values.map((el) => (
//                     <PriceRow
//                       key={el.amount}
//                       priceEntry={el}
//                       update={updatePriceList}
//                       product={product}
//                       filterKey={filterKey}
//                     />
//                   ))}
//                 </tbody>
//               </Table>
//               <PriceNew update={updatePriceList} />
//             </>
//           ) : (
//             <div>
//               <div>BRAK ZDEFINIOWANYCH CEN DLA FILTRU</div>
//               <PriceNew update={createPriceList} />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductPrices;
