import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom'

const MyNavbar = () => {
  const location = useLocation()

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#">
            <img src="assets/logo.png" style={{ width: '100px', height: '55px' }} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="d-flex justify-content-between">
            <Nav className="mr-auto">
              <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
              <Link to="/tvshow" className={location.pathname === '/tvshow' ? 'nav-link active' : 'nav-link'}>Tv Show</Link>
              <Link to="*" className={location.pathname === '*' ? 'nav-link active' : 'nav-link'}>Movies</Link>
              <Link to="*" className={location.pathname === '*' ? 'nav-link active' : 'nav-link'}>Recentely Added</Link>
              <Link to="*" className={location.pathname === '*' ? 'nav-link active' : 'nav-link'}>My List</Link>
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