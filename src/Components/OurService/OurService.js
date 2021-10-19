import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';
import './OurService.css'
const OurService = () => {
    const [service,setService]=useState([])

    useEffect(()=>{
        fetch('/ServiceData.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className='mb-5'>
            <Container>
            <div className='service-text mb-5'>
                <h1>Our Hospital Services</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    service.map(cards=><ServiceCard card={cards} key={cards.id}></ServiceCard>)
                }
            </Row>

            </Container>
           
        </div>
    );
};

export default OurService;