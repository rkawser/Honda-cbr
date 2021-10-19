import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBed, FaUserNurse } from "react-icons/fa";
import './ServiceCount.css'
import {IoIosPeople  } from "react-icons/io";
import { IoIosApps } from "react-icons/io";


const ServiceCount = () => {
    return (
      <div className='mb-5'>
       <Container fluid className='main-count'>
           <Row>
               <Col>
               <div>
                   <FaBed className='icon-size'/>
                   <h1>850</h1>
                   <h5>Patients Beds</h5>
               </div>
               </Col>
               <Col>
               <div>                 
                   <IoIosPeople className='icon-size'/>
                   <h1>25000+</h1>
                   <h5>Happy Patients</h5>
               </div>
               </Col>
               <Col>
               <div>
                   <FaUserNurse className='icon-size'/>
                   <h1>750</h1>
                   <h5>Doctors & Nurse</h5>
               </div>
               </Col>
               <Col>
               <div>
                   <IoIosApps className='icon-size'/>
                   <h1>18</h1>
                   <h5>Years Experience</h5>
               </div>
               </Col>
           </Row>
       </Container>
      </div>
    );
};

export default ServiceCount;