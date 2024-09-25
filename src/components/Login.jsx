import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  login from '../assets/Images/login.jpg'

const LoginPage = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Left Side - Image */}
        <Col md={6} className="d-none d-md-flex bg-light justify-content-center align-items-center">
          <img
            src={login} 
            alt="Login"
            className="img-fluid"
            style={{ maxHeight: '70%' }}
          />
        </Col>

        {/* Right Side - Login Form */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div style={{ width: '80%', maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

