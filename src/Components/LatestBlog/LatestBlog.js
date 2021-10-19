import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowRightShort} from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";

import './LatestBlog.css'
const LatestBlog = () => {
    return (
        <div className='my-5'>
           <Container>
               <div className='blog-text'>
                   <h2><span>Our </span>Latest Blog</h2>
               </div>
               <Row>
                   <Col md={4}>
                   <div className='card-top shadow-lg'>
                       <div className='latest-card'>
                       </div>
                       <div className='latest-text'>
                           <h4>In this hospital there are <br /> special surgeon.</h4>
                           <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                           <hr />
                           <div className='latest-footer'>
                               <p>Read More<BsArrowRightShort/> </p>
                               <p><IoCalendarOutline/>Jan 03, 2021</p>
                           </div>
                       </div>
                   </div>
                   </Col>
                   <Col md={4}>
                   <div className='card-top shadow-lg'>
                       <div className='latest-card2'>
                       </div>
                       <div className='latest-text'>
                           <h4>World AIDS Day, designated <br /> on 1 December.</h4>
                           <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                           <hr />
                           <div className='latest-footer'>
                               <p>Read More<BsArrowRightShort/> </p>
                               <p><IoCalendarOutline/>Jan 03, 2021</p>
                           </div>
                       </div>
                   </div>
                   </Col>

                   <Col md={4}>
                   <div className='card-top shadow-lg'>
                       <div className='latest-card3'>
                       </div>
                       <div className='latest-text'>
                           <h4>More than 80 clinical trials <br /> launch to test coronavirus.</h4>
                           <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et....</p>
                           <hr />
                           <div className='latest-footer'>
                               <p>Read More<BsArrowRightShort/> </p>
                               <p><IoCalendarOutline/>Jan 03, 2021</p>
                           </div>
                       </div>
                   </div>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default LatestBlog;