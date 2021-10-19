import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({card}) => {
    const{id,name,img,drescription,Work}=card
    return (
        <Col>
      <Card className='h-100'>
        <Card.Img variant="top" src={img} className='w-100 h-100 img-fluid' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{Work}</Card.Title>
          <Card.Text>
            {drescription}
          </Card.Text>
        </Card.Body> 
        <Link to={`/CardDetail/${id}`}>
        <button className='btn btn-primary px-5 m-2'>click</button> 
        </Link>                        
      </Card>
    </Col>
    );
};

export default ServiceCard;