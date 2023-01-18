import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Navbar variant="dark" className="p-0 fixed-top navbar bg-negro">
      <Container className="justify-content-end">
        <Nav className="my-2 mb-3">
          <Nav.Item className="me-sm-4">
            <CartWidget />
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="effect-link">Iniciar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="effect-link">Registrarse</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
