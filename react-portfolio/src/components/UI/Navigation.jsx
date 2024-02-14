import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../../styles/Header.css';

export default function Navigation({ links }) {
  return (
    <Navbar
      variant="dark"
      expand="md"
      collapseOnSelect
      className="fixed-top p-4"
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <span className="h3">Denise Vasquez</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar=-nav">
          <Nav className="ms-auto">
            {links.map((link, i) => (
              <LinkContainer key={i} to={link.path}>
                <Nav.Link>{link.title}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}