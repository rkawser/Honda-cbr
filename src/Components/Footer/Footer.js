import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
import { MdEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
    return (
        <div className='footer-style'>
            <Container>
                <Row>
                    <Col md={3}>
                    <div className='contact-part'>
                        <h3>Contact Us</h3>
                        <div className='e-part'>
                        <MdEmail className='f-icon'/>
                            <div>
                             <h6>info@opvix.com</h6>
                             <h6>hello@opvix.com</h6>
                            </div>
                        </div>
                        <div className='e-part'>
                            <MdPhoneAndroid className='f-icon'/>
                            <div>
                                <h6>Call: +07 554 332 322</h6>
                                <h6>Call: +236 256 256 365</h6>
                            </div>
                        </div>

                        <div className='e-part'>
                            <ImLocation2 className='f-icon'/>
                            <div>
                                <h6>210-27 Quadra, Market Street, Victoria Canada</h6>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col md={3}>
                        <div className='link-style'>
                            <h3>Quick Links</h3>
                            <div >
                                <h6>About us</h6>
                                <h6>Blog</h6>
                                <h6>Our Expertise</h6>
                                <h6>Faq</h6>
                                <h6>Doctors</h6>
                                <h6>Contact us</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='link-style'>
                            <h3>Our Services</h3>
                            <div>
                                <h6>Dental Care</h6>
                                <h6>Cardiology</h6>
                                <h6>Hijama Therapy</h6>
                                <h6>Massage Therapy</h6>
                                <h6>Ambluance Sevices</h6>
                                <h6>Medicine</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className='feedback'>
                            <h4>Feedback</h4>
                            <div>
                                <form>
                                    <input type="text" placeholder='Name'/>
                                    <br /><br />
                                    <input type="number" placeholder='Number'/> <br /> <br />
                                    <input type="text" placeholder='message'/> <br /><br />
                                   <button className='btn footer-btn'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;