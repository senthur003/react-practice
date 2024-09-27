import React from 'react';
import suriya from "../assets/Images/suriya.jpg";
import audilogo from "../assets/Images/audilogo.webp";
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const userName = userInfo.username;
  const profileImage = suriya;
  return (

    <Stack direction="horizontal" gap={3}>
      <div className="p-2"><img
        src={audilogo}  // Example logo URL
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="Logo"
      /></div>
      <div className="p-2 ms-auto"></div>
      
      <div className="p-2"><img
        src={profileImage}
        width="40"
        height="40"
        className="rounded-circle me-2"
        alt="Profile"
      />
        <span style={{ color: 'black' }}>{userName}</span></div>

    </Stack>

  );
};

export default NavbarComponent;
