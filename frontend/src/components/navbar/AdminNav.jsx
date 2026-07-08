import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../assets/logo.png";
export const AdminNav = () => {
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
            <Nav.Link href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Doctors</Nav.Link>
            <Nav.Link href="#">Staff</Nav.Link>
            <Nav.Link href="#">Patient</Nav.Link>
            <Nav.Link href="#">Department</Nav.Link>
            <Nav.Link href="#">appointments</Nav.Link>
            <Nav.Link href="#">Shifts</Nav.Link>

          <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Update Password</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Register Admin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}