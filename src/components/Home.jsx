import React from 'react';
import Sidebar from './Sidebar'; // Sidebar component
import Navbar from './Navbar'; // Navbar component
import { Container, Row, Col } from 'react-bootstrap'; // Bootstrap grid components
import { Outlet } from 'react-router-dom';
import '../../src/assets/style.css';

const Home = () => {
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
