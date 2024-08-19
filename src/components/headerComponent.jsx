import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container >
          <Navbar.Brand href="#home">Mohan's Web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Stack direction="horizontal" gap={3}>
              <Link to="/Home"><div className="p-2"> <Button variant="secondary">Home</Button></div></Link>
              <Link to="/aboutus"><div className="p-2"> <Button variant="secondary">Aboutus</Button></div></Link>
              <Link to="/contactus"><div className="p-2"> <Button variant="secondary">Contact us</Button></div></Link>
              <Link to="/joinus"><div className="p-2"> <Button variant="secondary">Join us</Button></div></Link>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent
