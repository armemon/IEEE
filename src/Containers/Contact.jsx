import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from './contact.jpg'
import './Contact.css';


class Contact extends React.Component {  //merge this class and React.Component

    render() {
        return (
            <div>
                <div className="conatctImg" style={{ backgroundImage: `url(${logo})`, height: "300px", padding: "100px", color: "white" }}>
                    <h1 style={{ fontWeight: "800", fontSize: "2.3em", marginBottom: "20px" }}>Contact Us</h1>
                    <div >
                        <a className="links" href='/'>HOME></a>
                        <a className="links" href='/'>CONTACT></a>
                    </div>
                </div>
                <Container fluid="xl">
                <div class="boxes">
                    <div className="box" href="water.html" type="button">
                        <FontAwesomeIcon className="FA" icon={faMap} />
                        <h5>Address:</h5>
                        <h6>Electrical Engineering Dept., NED University of Engineering & Technology, University Road, Karachi, Pakistan 75270.</h6>
                    </div>
                    <div className="box" href="temperature.html" type="button">
                        <FontAwesomeIcon className="FA" icon={faMobileAlt} />
                        <h5>Phone:</h5>
                        <h6>+923047683847</h6>
                    </div>
                    <div className="box" href="kitchen.html" type="button">
                        <FontAwesomeIcon className="FA" icon={faEnvelope} />
                        <h5>Email:</h5>
                        <h6>pesneduetsb@gmail.com</h6>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default Contact;