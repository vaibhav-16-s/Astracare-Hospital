import { Container, Nav, Navbar,NavDropdown } from "react-bootstrap";

export const AdminNav=()=> {
  return (
    <>
      
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">AstraCare</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Dashboard</Nav.Link>
           
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Staff</NavDropdown.Item>
              <NavDropdown.Item href="#">Patient</NavDropdown.Item>
              <NavDropdown.Item href="#">Doctors</NavDropdown.Item>
              <NavDropdown.Item href="#">Dept</NavDropdown.Item>
              <NavDropdown.Item href="#">Report</NavDropdown.Item>
              <NavDropdown.Item href="#">Appointment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/login">Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}