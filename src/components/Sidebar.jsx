import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUserDetails } from '../userSlice'; // Import your action
import { useNavigate } from 'react-router-dom'; 
import { persistor } from '../store';
import { useSelector } from 'react-redux';


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const userInfo = useSelector((state) => state.user.userInfo);
  const userType = userInfo.user_type;
  
  const handleLogout = () => {
    dispatch(clearUserDetails());
    persistor.purge();
    navigate('/login');
  };
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

          {(userType === 'Doctor'&&
          <Nav.Link as={NavLink} to="/home/appointment" className="text-dark text-start">
           Refferal
          </Nav.Link>)}
           
          <Nav.Link
          as={NavLink}
          to="/login" // Use to="/login" to update the URL
          className="text-dark text-start"
          onClick={handleLogout} // Call the logout function on click
        >
          LogOut
        </Nav.Link>

        </Nav>
      </div>
  );
};

export default Sidebar;
