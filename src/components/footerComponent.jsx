import React from 'react'
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
       <footer className="bg-dark text-white text-center py-3" style={{ position: 'fixed', bottom: 0, width: '100%',right: 0, left: 0 }}>
      <Container>
        <p>© {currentYear} Mohan Website. All Rights Reserved.</p>
      </Container>
    </footer>
    </>
  )
}

export default FooterComponent
