import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../AuthProvider/UseAuth';
import './Register.css'

const Register = () => {
const{handleRegister}=useAuth();
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

  const emailHandler=(e)=>{
     setEmail(e.target.value);
  }

  const passwordHandler =(e)=>{
     setPassword(e.target.value);
  }

const userRegister =()=>{
 
     handleRegister(email,password);
  }

    return (
        <div>
        <Container>
            <Row>
                <Col md={12}>
               <div className='my-5'>
              <div >
                                        
                      <input onChange={emailHandler} type="email" name="" placeholder='email' required/> <br /> <br/>
                      <input onChange={passwordHandler} type="password" name="" placeholder='password' required/> <br /> <br />
                      <button onClick={userRegister} className='btn btn-primary me-2'>Register</button>
                      <button className='btn btn-warning' >Sign in Google</button> <br /> <br />
                      <p>Already-Register:
                      <Link to='/login'>Login-page</Link>
                      </p>
                    
                  
              </div>
                </div>
                </Col>
            </Row>
        </Container>
     </div>
    );
};

export default Register;