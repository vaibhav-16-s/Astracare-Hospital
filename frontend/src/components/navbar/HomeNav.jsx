import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
export const HomeNav = () => {

  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><img
            src={logo}
            alt="AstraCare Logo"
            width="30"
            height="30"
            className="me-2" />AstraCare</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="/patient/register">Get Started</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </>
  );
}