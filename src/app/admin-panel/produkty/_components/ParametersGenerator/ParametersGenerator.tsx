// import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
// import Spinner from "react-bootstrap/Spinner";
// import { connect } from "react-redux";

// import { updateProduct } from "./../../redux/actions/productActions";
// import ParameterRow from "./parameterRow";
import ParameterItem from "../ParameterItem/ParameterItem";

const ParametersGenerator = ({ product, updateProduct }) => {
  const update = (newParams) => {
    updateProduct({
      ...product,
      parameters: [...newParams],
    });
  };

  if (product.parameters.length < 1) {
    return (
      <tr>
        <td>
          <Alert variant="warning">
            Ten produkt nie posiada żadnych parametrów!
          </Alert>
        </td>
      </tr>
    );
  }

  return product.parameters.map((el, i) => (
    <ParameterItem key={i} product={product} parameter={el} update={update} />
  ));
};

export default ParametersGenerator;

// const mapStateToProps = (state) => ({
//   product: { ...state.product },
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateProduct: (product) => dispatch(updateProduct(product)),
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ParametersGenerator);

// export default ParametersGenerator;
