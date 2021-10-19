import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../AuthProvider/UseAuth';
import './Login.css'
const Login = () => {
    const { handleLogin,signInUsingGoogle}=useAuth();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const emailHanler =(e)=>{
        setEmail(e.target.value)
    }
    
    const passwordHandle=(e)=>{
        setPassword(e.target.value)
    }

    const userLogin=()=>{
       
        handleLogin(email,password)
    }
return (
        <div>
           <Container>
               <Row>
                   <Col md={12}>
                  <div className='my-5'>
                 <div>
                                         
                         <input onChange={emailHanler} type="email" name="" placeholder='email' required/> <br /> <br />
                         <input onChange={passwordHandle} type="password" name="" placeholder='password' required/> <br /> <br />
                         <button onClick={userLogin} className='btn btn-primary me-2'>Login</button>
                         <button onClick={signInUsingGoogle} className='btn btn-warning' >Sign in Google</button> <br /> <br />
                         <p>New-User:
                         <Link to='/register'>Create-Account</Link>
                         </p>                     
                   
                 </div>
                   </div>
                   </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Login;