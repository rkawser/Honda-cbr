import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Ourexpertice.css'
import { FaUserNurse,FaChalkboardTeacher,FaAmbulance } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const OurExpertise = () => {
    return (
        <div className='my-5'>
            <Container>
                <div className='expert-text'>
                    <h2> <span> Our </span>Expertice</h2>
                </div>
                <Container>
                    <Row className='main-expart'>
                        <Col md={6}>
                        <Row className='expert-bg'>
                            <Col md={12}>
                                <Row>
                                <Col>
                                <div className='expart-card'>
                                    <FaUserNurse className='expart-icon'/>
                                    <h4>Certified Doctors</h4>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                                </div>
                                </Col>
                                <Col>
                                <div className='expart-card'>
                                    <SiPostman className='expart-icon'/>
                                    <h4>Emergency </h4>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                              </div>
                                                            
                                </Col>
                                </Row>                                
                            </Col>

                            <Col md={12}>
                                <Row>
                                <Col>
                                <div className='expart-card'>
                                    <FaChalkboardTeacher className='expart-icon'/>
                                    <h4>Teachnology</h4>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                                </div> 
                                                            
                                </Col>
                                <Col>
                                <div className='expart-card'>
                                    <FaAmbulance className='expart-icon'/>
                                    <h4>Ambulance</h4>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                                </div>
                                
                                </Col>
                                </Row>
                                
                             </Col>
                            
                        </Row>
                        </Col>
                        <Col md={6}>
                        <div className='expert-doctor'>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default OurExpertise;