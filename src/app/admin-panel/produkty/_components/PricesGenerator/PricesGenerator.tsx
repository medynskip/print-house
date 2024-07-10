// import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { updateProduct } from "@/fetchers/products";

import PriceRow from "../PriceRow/PriceRow";

// import { updateProduct } from "./../../redux/actions/productActions";

// import PriceRow from "./priceRow";

// import { updateProduct } from "@/fetchers/products";

const PricesGenerator = ({ product }) => {
  // const update = (newPrices) => {
  //   updateProduct({
  //     ...product,
  //     prices: [...newPrices],
  //   });
  // };

  return (
    <>
      <div>
        <h2>POLA</h2>
        <div>
          {product.parameters.map((param) => (
            <Form.Select key={param._id} aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          ))}
        </div>
      </div>
    </>
  );

  // if (product.loading) {
  //   return (
  //     <tr>
  //       <td className="spinner-td">
  //         <Spinner animation="border" role="status">
  //           <span className="sr-only">Loading...</span>
  //         </Spinner>
  //       </td>
  //     </tr>
  //   );
  // } else if (product.prices.length < 1) {
  //   return (
  //     <tr>
  //       <td>
  //         <Alert variant="warning">Ten produkt nie posiada żadnych cen!</Alert>
  //       </td>
  //     </tr>
  //   );
  // } else {
  //   return product.prices.map((el, i) => (
  //     <PriceRow key={i} priceEntry={el} product={product} update={update} />
  //   ));
  // }
};

// const mapStateToProps = (state) => ({
//   product: { ...state.product },
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateProduct: (product) => dispatch(updateProduct(product)),
//   };
// };

export default PricesGenerator;
// export default connect(mapStateToProps, mapDispatchToProps)(PricesGenerator);
