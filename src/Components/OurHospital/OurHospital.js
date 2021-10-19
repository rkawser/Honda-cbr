import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurHospital.css'
const OurHospital = () => {
    return (
        <div className='mb-5'>
            <Container>
                <Row >
                    <Col md={6}>
                    <div className='doctor-img'>

                    </div>
                    </Col>

                    <Col md={6}>
                    <div className='side-text'>
                        <h2>About Our Hospital</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <h5>Browse Our Website</h5>
                        <h5>Choose Service</h5>
                        <h5>Send Messege</h5>
                        <button className='btn mt-3 me-2 px-5 py-3 btn-size'>Know More</button>
                    </div>
                   
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurHospital;