import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from './logoLarge.jpg'


class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p className="header" >Welcome to IEEE PES NEDUET Branch.</p>
                </div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto me-3" >
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown title="Our Team" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Excom</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Directors</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#link">Blog</Nav.Link>
                                <Nav.Link href="#link">Events</Nav.Link>
                                <Nav.Link href="#link">About PES</Nav.Link>
                                <Nav.Link href="#link">Contact Us</Nav.Link>
                                <Nav.Link href="#link">Attendence Area</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        {/* <h6>Copyright ©2022 All rights reserved | Designed And Developed By <Link to="/IT" className="green">IEEE IT TEAM</Link></h6> */}
        <h6>Copyright ©2022 All rights reserved | Designed And Developed By <a href="https://armemon.github.io/arm" target="_blank" className="green">AR Memon</a></h6>
      
        </div>
    )}
}
export {
    Header, Footer
}