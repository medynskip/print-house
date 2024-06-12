import NavItem from "./components/NavItem/NavItem";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import Tooltip from "react-bootstrap/Tooltip";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>

    
    {/* <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className="top-nav scrolled"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="../../../../images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        > */}
          {/* <Nav> */}
            <NavItem href="/produkty">PRODUKTY
            </NavItem>
            <NavItem href="/uslugi">
             USŁUGI
            </NavItem>
            <NavItem href="/blog">
              BLOG
            </NavItem>
            <NavItem href="/kontakt">
              KONTAKT
            </NavItem>
            <NavItem href="/zamowienie/wyszukaj">
              wyszukaj
            </NavItem>
          {/* </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    </nav>
  );
};

export default Navbar;