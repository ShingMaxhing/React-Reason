import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap';
import ReactLogo from '../react-logo.png'

export default function AppNavbar(){
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
      <img src={ReactLogo}
           alt="logo"
           className="logo"
           />
      <Nav>
        <h5>My React Profile</h5>
      </Nav>
      </Container>
    </Navbar>
    )
}