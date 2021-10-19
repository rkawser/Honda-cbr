import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Services.css'
import { IoIosArrowForward } from "react-icons/io";
import OurService from '../OurService/OurService';

const Services = () => {
    return (
        <div>
           <Container fluid>
               <Row className='service-image'>
                   <div>
                       <h1>Services</h1>
                       <h5>Home<IoIosArrowForward/> Service</h5>
                   </div>
               </Row>
               <div className='my-5'>
                   <Container>
                       <OurService></OurService>
                   </Container>
               </div>
           </Container>
        </div>
    );
};

export default Services;