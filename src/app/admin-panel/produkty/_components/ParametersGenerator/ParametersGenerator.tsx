// // import React, { useEffect, useState } from "react";
// import Alert from "react-bootstrap/Alert";
// // import Spinner from "react-bootstrap/Spinner";
// // import { connect } from "react-redux";

// // import { updateProduct } from "./../../redux/actions/productActions";
// // import ParameterRow from "./parameterRow";
// import ParameterItem from "../ParameterItem/ParameterItem";

// import type { Parameters, Product } from "../../../../../../types/types";

// interface ParametersGeneratorProps {
//   product: Product;
//   updateProduct: (params: Parameters[]) => Promise<void>;
// }

// const ParametersGenerator = ({
//   product,
//   updateProduct,
// }: ParametersGeneratorProps) => {
//   const update = async (newParams: Parameters[]) => {
//     await updateProduct(newParams);
//   };

//   if (product.parameters.length < 1) {
//     return (
//       <tr>
//         <td>
//           <Alert variant="warning">
//             Ten produkt nie posiada żadnych parametrów!
//           </Alert>
//         </td>
//       </tr>
//     );
//   }

//   return product.parameters.map((el, i) => (
//     <ParameterItem key={i} product={product} parameter={el} update={update} />
//   ));
// };

// export default ParametersGenerator;
