import { Container, Nav, Navbar } from "react-bootstrap";

export const HomeNav=()=> {
  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">AstraCare</Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/doc/register">Login</Nav.Link>
            <Nav.Link href="#">##</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    

    </>
  );
}