'use client';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa';
import { BsHouseFill, BsSearch, BsPersonFill, BsCartFill } from 'react-icons/bs';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      {/* Social Icons (Left) */}
      <Nav className="me-auto">
        <Nav.Link href="#"><FaFacebook aria-label="Facebook" /></Nav.Link>
        <Nav.Link href="#"><FaTwitter aria-label="Twitter" /></Nav.Link>
        <Nav.Link href="#"><FaPinterest aria-label="Pinterest" /></Nav.Link>
        <Nav.Link href="#"><FaInstagram aria-label="Instagram" /></Nav.Link>
      </Nav>

      {/* Functional Icons (Right) */}
      <Nav className="ms-auto">
        <Nav.Link href="#"><BsHouseFill aria-label="Home" /></Nav.Link>
        <Nav.Link href="#"><BsSearch aria-label="Search" /></Nav.Link>
        <Nav.Link href="#"><BsPersonFill aria-label="Account" /></Nav.Link>
        <NavDropdown title={<BsCartFill aria-label="Cart" />} align="end">
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;
