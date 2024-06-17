// import Link from "next/link";

// import AdminLayout from "./../../components/admin/adminLayout";

// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const AdminPanel = ({ products, orders }) => {
const AdminPanel = () => {
  return (
    // <AdminLayout>
    //   <Container>
    <div>
      {/* <Row> */}
      <div className="dash-products">
        <span>PRODUKTY</span>
        {/* <span>{products.length}</span> */}
      </div>
      <div className="dash-orders">
        <span>ZAMÓWIENIA</span>
        {/* <span>{orders.length}</span> */}
      </div>
      {/* </Row> */}
      {/* <Row> */}
      <div className="dash-history">
        Ilość zamówień w ciągu ostatnich 30 dni
      </div>
      {/* </Row> */}
    </div>
    //   </Container>
    // </AdminLayout>
  );
};

export default AdminPanel;
