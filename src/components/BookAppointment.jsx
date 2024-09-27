import React from 'react'
import { useLocation } from 'react-router-dom';

const BookAppointment = () => {
    const location = useLocation();
    const { consultNow } = location.state || {};

  return (
    <div>
      <h2>Appointment Details</h2>
      {consultNow ? (<p>consultNow: {consultNow}</p>) : (<p>No appointment type provided.</p>)}
    </div>
  )
}

export default BookAppointment
