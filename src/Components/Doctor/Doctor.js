import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OurService from '../OurService/OurService';
import './Doctor.css'
const Doctor = () => {
    return (
        <div>
           <Container fluid>
               <Row className='doctor-image'>
                   <Col>
                   <h1>Doctors</h1>
                   </Col>
               </Row>
           </Container>

           <div className='doctor'>
               <OurService></OurService>
           </div>
        </div>
    );
};

export default Doctor;