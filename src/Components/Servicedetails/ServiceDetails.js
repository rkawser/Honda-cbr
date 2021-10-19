import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { IoIosArrowForward } from "react-icons/io";

import './ServiceDetails.css'
const ServiceDetails = () => {
    const {cardId}=useParams();
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        fetch('/ServiceData.json')
        .then(res=>res.json())
        .then(data=>setDetail(data))
    },[])
    const found =  detail?.find( details=> details?.id ==cardId)

    console.log(found?.name);
    return (
        <div className='mb-5'>
            <Container fluid>
                <Row className='detail-image'>
                    <Col>
                    <h1>Service Details</h1>
                    <h5>Home <IoIosArrowForward/> ServiceDetails</h5>
                    
                    </Col>
                </Row>
            </Container>
            
            <div className='my-5'>
            <Container>
            <div className='detail-top'>
                <div>
                    <img src={found?.Image} className='img-fluid bg-size w-75' alt="" />
                </div>
                <div>
                    <h3>{found?.Work}</h3>
                    <h4>Our hospital always provide good services</h4>
                    <h6>''Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident mollitia modi aut voluptates odit non hic culpa quas distinctio?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa earum repudiandae possimus, ipsam praesentium, nemo quos deleniti quisquam labore minima harum perspiciatis iusto vero omnis quibusdam nam corrupti ea at accusantium necessitatibus doloremque facilis provident a beatae! Consequuntur, obcaecati? Provident officia, nulla enim fugit cum aliquam consectetur porro officiis nostrum? Commodi illo odio minima rem dolores voluptates, distinctio illum placeat aspernatur consectetur, et recusandae eaque dolore provident, eveniet debitis quidem amet dolor perspiciatis nobis harum laboriosam? At, unde sunt velit, animi necessitatibus fugiat ea voluptatum placeat veritatis a corrupti rerum, sequi aut magnam perferendis! Impedit aut animi quae doloribus nam!
                    </h6>
                </div>
            </div>
            </Container>
            </div>
        </div>
    );
};

export default ServiceDetails;