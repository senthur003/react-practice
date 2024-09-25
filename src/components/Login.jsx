import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import  login from '../assets/Images/login.jpg';
import { Link } from 'react-router-dom';
import { loginApi,getUserDetails } from '../service/Authservice';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [generalError, setGeneralError] = useState('');
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username_or_email: username,
      password: password,
    };
    try {
      const response = await loginApi(formData); // Call the loginApi
      console.log('Login successful!', response);
      localStorage.setItem('token', response.access);
      const UserDetails = await getUserDetails();
      console.log('User Details:', UserDetails);
      // window.location.href = '/home';
    } catch (error) {
      console.error('Login failed:', error.message);
      setGeneralError(error.message); // Set the general error to display on the form
    }
  };
  
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setUsername(email);

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

 
  const validatePassword = (password) => {
    return password.length >= 8; 
  };


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
            <h2 className="mb-4 text-center">Login</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-start w-100">Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username"  onChange={handleEmailChange}
                  isInvalid={!!emailError} />
                  {emailError && <Form.Text className="text-danger">{emailError}</Form.Text>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-start w-100">Password</Form.Label>
                <Form.Control type="password" placeholder="Password"  onChange={handlePasswordChange} 
                  isInvalid={!!passwordError} />
                  {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" onClick={HandleSubmit}>
                Login
              </Button>
              <Link to="/forgot-password" className="d-block text-end w-100 mt-2">
              Forgot password?
            </Link>
            
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;

