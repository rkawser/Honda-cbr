import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HospitalIntroduction.css'
import { BsPlayFill} from "react-icons/bs";

const HospitalIntroduction = () => {
    return (
        <div className='my-5'>
            <Container fluid>
                <Row className='intro-img'>
                    <div>
                        <h2 className='icon-head'>                         
                                <a href="https://youtu.be/eDw_Na4-jNk"> 
                                <BsPlayFill className='special-icon'/>
                                </a>                        
                        </h2>
                    </div>
                    <Col md={12}>
                   <Container>
                   <div className='intro-text'>
                        <h1>Hospital Introduction</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo <br /> viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                   </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HospitalIntroduction;