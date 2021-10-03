import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';
import './navbar.css';
import logo from '../../assets/images/lg.png';

export const TopNavbar = () => {
   return (
      <div className="navlists bg-dark ">
         <Navbar collapseOnSelect expand="md">
            <Container>
               <LinkContainer className="logo" to="/">
                  <Nav.Link>
                     <img src={logo} height="60px" alt="Logo" />
                  </Nav.Link>
               </LinkContainer>
               <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="toggler"
               />
               <Navbar.Collapse id="basic-navbar-nav" className="toggler">
                  <Nav className="ms-auto lists">
                     <LinkContainer to="/Home">
                        <Nav.Link> <i className="fas fa-home text-secondary"></i> Home</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/Projects">
                        <Nav.Link> <i className="fas fa-camera-retro text-secondary "></i> Photos</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/About">
                        <Nav.Link> <i class="far fa-address-card text-secondary"></i> About</Nav.Link>
                     </LinkContainer>
                     <LinkContainer to="/Contact">
                        <Nav.Link>  <i class="fas fa-mobile-alt text-secondary"></i> Contact</Nav.Link>
                     </LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </div>
   );
};
