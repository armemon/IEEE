import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Container} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import logo from './contact.jpg'
import './Contact.css';


class Contact extends React.Component {  //merge this class and React.Component

    render() {
        return (
            <div>
                <div className="conatctImg" style={{ backgroundImage: `url(${logo})`, height: "300px", padding: "100px", color: "white" }}>
                    <h1 style={{ fontWeight: "800", fontSize: "2.3em", marginBottom: "20px" }}>Contact Us</h1>
                    <div >
                        <Link className="links" to='/home'>HOME></Link>
                        <Link className="links" to='/'>CONTACT></Link>
                    </div>
                </div>
                <Container fluid="xl">
                <div className="boxes">
                    <div className="box">
                        <FontAwesomeIcon className="FA" icon={faMap} />
                        <h5>Address:</h5>
                        <a href='https://goo.gl/maps/WkuKDpuvV1HUejnMA' target="_blank"><h6>Electrical Engineering Dept., NED University of Engineering & Technology, University Road, Karachi, Pakistan 75270.</h6></a>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon className="FA" icon={faMobileAlt} />
                        <h5>Phone:</h5>
                        <a href="tel:+923047683847"><h6>+923047683847</h6></a>
                    </div>
                    <div className="box">
                        <FontAwesomeIcon className="FA" icon={faEnvelope} />
                        <h5>Email:</h5>
                        <a href="mailto:pesneduetsb@gmail.com"><h6>pesneduetsb@gmail.com</h6></a>
                    </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default Contact;