import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  login from '../assets/Images/login.jpg';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [username, setUsername] = useState('');
  const forgetApi= (e) => {
    e.preventDefault();
    const formData = { username };
  }
  return (
    <Container fluid className="vh-100 bg-light" >
    <Row className="h-100">
      {/* Left Side - Image */}
      <Col md={6} className="d-md-flex bg-light justify-content-center align-items-center">
        <img
          src={login} 
          alt="Login"
          className="img-fluid"            
        />
      </Col>

      {/* Right Side - Login Form */}
      <Col md={6} className="d-flex justify-content-center align-items-center">
        <div style={{ width: '80%', maxWidth: '400px' }}>
          <h2 className="mb-4 text-center">Forget Password</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-start w-100">Registered Email</Form.Label>
              <Form.Control type="email" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>

           
            <Button variant="primary" type="submit" className="w-100" onClick={forgetApi}>
              Proceed
            </Button>
            <Link to="/login" className="d-block text-end w-100 mt-2">
               Back
            </Link>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>

  )
}

export default ForgetPassword
