import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../AuthProvider/UseAuth';
import './Register.css'

const Register = () => {
const{handleRegister,signInUsingGoogle,}=useAuth();
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [name,setName]=useState('')

  const emailHandler=(e)=>{
     setEmail(e.target.value);
  }

  const passwordHandler =(e)=>{
     setPassword(e.target.value);
  }

const userRegister =()=>{
 
     handleRegister(email,password,name);
  }

  const handledisplay =(e)=>{
      setName(e.target.value)
  }

    return (
        <div>
        <Container fluid>
            <Row className='register-image'>
                <Col md={12}>
               <div className='my-5'>
              <div >
                      <input onChange={handledisplay}  type="text" placeholder='name' /> <br /><br />              
                      <input onChange={emailHandler}className='text-dark' type="email" name="" placeholder='email' required/> <br /> <br/>
                      <input onChange={passwordHandler}className='text-dark' type="password" name="" placeholder='password' required/> <br /> <br />
                      <button onClick={userRegister} className='btn btn-primary me-2'>Register</button>
                      <button onClick={signInUsingGoogle} className='btn btn-warning' >Sign in Google</button> <br /> <br />
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