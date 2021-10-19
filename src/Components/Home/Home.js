import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import OurHospital from '../OurHospital/OurHospital';
import OurService from '../OurService/OurService';
import ServiceCount from '../Service.Count/ServiceCount';
import OurExpertice from '../OurExpertise/OurExpertise'
import LatestBlog from '../LatestBlog/LatestBlog'
import './Home.css'
import HospitalIntroduction from '../HospitalIntroduce/HospitalIntroduction';
const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
   <div>
   <Container fluid>
       <Row className='slider-one'>
     <Col>
       <Container>
       <div className='slider-text'>
           <h1>Caring Health is <br /> Important Than All </h1>
           <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />  Ipsam similique   obcaecati blanditiis, exercitationem repellendus<br />  perspiciatis quo minusmodi sunt nemo! Lorem ipsum dolor sit amet<br />  consectetur adipisicing elit. Tempore, architecto.
           </h6>
           <button className='btn  me-2 px-3 py-3 btn-size'>Get Appointment</button>
           <button className='btn  px-3 py-3 btn-size2'>Learn More</button>
       </div>
       </Container>
     </Col>        
       </Row>
   </Container>
  </div>

  </Carousel.Item>

  <Carousel.Item>
  <div>
   <Container fluid>
       <Row className='slider-two'>
           <Col>
           <Container>
           <div className='slider-text'>
           <h1>We Always Provide Best <br />Services</h1>
           <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />  Ipsam similique   obcaecati blanditiis, exercitationem repellendus<br />  perspiciatis quo minusmodi sunt nemo! Lorem ipsum dolor sit amet<br />  consectetur adipisicing elit. Tempore, architecto.
           </h6>
           <button className='btn  me-2 px-3 py-3 btn-size'>Get Appointment</button>
           <button className='btn  px-3 py-3 btn-size2'>Learn More</button>
       </div>
       </Container>
           </Col>
       </Row>
   </Container>
  </div>
  </Carousel.Item>
</Carousel>
       <div>
          <ServiceCount></ServiceCount>
        </div>
        <div>
          <OurHospital></OurHospital>
        </div>
        <div>
          <OurService></OurService>
        </div>
        <div>
            <OurExpertice></OurExpertice>
        </div>
        <div>
            <HospitalIntroduction></HospitalIntroduction>
        </div>
        <div>
          <LatestBlog>

          </LatestBlog>
        </div>
        </div>
    );
};

export default Home;