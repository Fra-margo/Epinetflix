import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <img src="../src/logo.png" style={{ width: '100px', height: '55px' }} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="d-flex justify-content-between">
            <Nav className="mr-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#" active>
                TV Shows
              </Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <div className="d-flex">
              <FontAwesomeIcon icon={faSearch} className="icons" />
              <div id="kids">KIDS</div>
              <FontAwesomeIcon icon={faBell} className="icons" />
              <FontAwesomeIcon icon={faUser} className="icons" />
            </div>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar