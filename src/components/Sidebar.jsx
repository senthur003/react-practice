import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const userType = localStorage.getItem('userType');
  return (
      <div className="d-flex flex-column vh-100 bg-light p-3" style={{ width: '250px' }}>
        <Nav className="flex-column">

          <Nav.Link as={NavLink} to="/home/appointment" className="text-dark text-start">
            Appointments
          </Nav.Link>
        
          <Nav.Link as={NavLink} to="/home/book-appointment" className="text-dark text-start">
           Book Appointments
          </Nav.Link>

          <Nav.Link as={NavLink} to="/home/book-appointment" state={{ consultNow: 'true' }} className="text-dark  text-start">
            Emergency Consult
          </Nav.Link>


          <Nav.Link as={NavLink} to="/home/consultaion" className="text-dark text-start">
             Consultaion
          </Nav.Link>

          <Nav.Link as={NavLink} to="/home/medical-report" className="text-dark text-start">
            Medical Report
          </Nav.Link>

          {(userType === 'doctor'&&
          <Nav.Link as={NavLink} to="/home/appointment" className="text-dark text-start">
           Refferal
          </Nav.Link>)}
           
          <Nav.Link as={NavLink} to="/home/appointment" className="text-dark text-start">
           LogOut
          </Nav.Link>

        </Nav>
      </div>
  );
};

export default Sidebar;
