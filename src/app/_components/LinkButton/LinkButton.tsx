// import { useHistory } from "react-router-dom";
import Link from "next/link";

// import Button from "react-bootstrap/Button";

const LinkButton = (props) => {
  return (
    <Link href={props.to}>
        {props.text}
      {/* <a>
        <Button variant={props.variant}></Button>
      </a> */}
    </Link>
  );
};

export default LinkButton;