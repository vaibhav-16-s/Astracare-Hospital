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
            <Nav.Link href="/admin/home">Dashboard</Nav.Link>
            <Nav.Link href="/admin/managedoctors">Doctors</Nav.Link>
            <Nav.Link href="/admin/managestaff">Staff</Nav.Link>
            <Nav.Link href="/admin/managepatients">Patient</Nav.Link>
            <Nav.Link href="/admin/managedept">Department</Nav.Link>
            <Nav.Link href="/admin/manageappointment">appointments</Nav.Link>
            <Nav.Link href="/admin/manageshifts">Shifts</Nav.Link>

          <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Update Password</NavDropdown.Item>
              <NavDropdown.Item href="/admin/register">Register Admin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}