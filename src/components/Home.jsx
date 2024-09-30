import React , { useState } from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import Navbar from './Navbar'; // Navbar component
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap grid components
import { Outlet } from 'react-router-dom';
import '../../src/assets/style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to appointments with ongoing tab on page load
    if (location.pathname === '/home') {
    navigate('/home/appointment', { state: { defaultTab: 'ongoing' } });}
  }, [navigate]);
  return (
    <div className="App">
    <Navbar />
    <Container  > 
      <Row> 
        <Col md={3}> 
          <Sidebar />
        </Col>
        <Col md={9}>
          <Outlet /> 
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Home;
