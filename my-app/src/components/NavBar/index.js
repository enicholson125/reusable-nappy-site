import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Warwick Nappy Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Kits" id="basic-nav-dropdown">
              <NavDropdown.Item href="/kits">First kit</NavDropdown.Item>
              <NavDropdown.Item href="/notakit">
                Another kit
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#kits">
                Older kid kits
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/washing-advice">Washing Advice</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;