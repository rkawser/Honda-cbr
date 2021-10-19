import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css'
import { IoIosArrowForward } from "react-icons/io";
import OurHospital from '../OurHospital/OurHospital';
import ServiceCount from '../Service.Count/ServiceCount';
import OurExpertice from '../OurExpertise/OurExpertise'
const About = () => {
    return (
        <div>
            <Container fluid>
                <Row className='about-image'>
                    <div >
                        <h1>About</h1>
                        <h5>Home <IoIosArrowForward/> About</h5>
                    </div>
                </Row>
            </Container>
            <Container>
                    <div className='about-hospital'>
                        <OurHospital></OurHospital>
                    </div>
                                                     
           </Container>

            <div>
            <ServiceCount></ServiceCount>
             </div>
            <div>
                <OurExpertice></OurExpertice>
            </div>  
        </div>
    );
};

export default About;