// import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCoffee,
//   faEdit,
//   faTrashAlt,
// } from "@fortawesome/free-solid-svg-icons";

const ParameterItemHeader = ({ name, deleteParameter }) => {
  return (
    <>
      <h3>{name}</h3>
      <Button variant="primary" size="sm">
        Edit
        {/* <FontAwesomeIcon icon={faEdit} /> */}
      </Button>
      <Button onClick={deleteParameter} variant="danger" size="sm">
        Delete
        {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
      </Button>
    </>
  );
};

export default ParameterItemHeader;
