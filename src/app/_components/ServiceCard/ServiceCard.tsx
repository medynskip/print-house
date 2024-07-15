import Image from "next/image";
// import Col from "react-bootstrap/Col";

const ServiceCard = ({ service }) => {
  return (
    // <Col>
    <div className="service-card">
      {/* <Image src={"/images/" + service.image} alt="" /> <br /> */}
      <h4>{service.title}</h4>
      <p>{service.text}</p>
    </div>
    // </Col>
  );
};

export default ServiceCard;
