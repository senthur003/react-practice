import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Appointments = () => {
  return (
    <div className="App">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="ongoing" title="Ongoing">
        Tab content for Ongoing
      </Tab>

      <Tab eventKey="todayPending" title="Today Pending">
        Tab content for Today Pending
      </Tab>
      
      <Tab eventKey="upcoming" title="Upcoming" >
        Tab content for Upcoming
      </Tab>

      <Tab eventKey="todayMissed" title="Today Missed">
        Tab content for Today Missed
      </Tab>

      <Tab eventKey="todayCompleted" title="Today Completed">
        Tab content for Today Completed
      </Tab>

      <Tab eventKey="pastAppointments" title="Past Appointments" >
        Tab content for Past Appointments
      </Tab>

      <Tab eventKey="todayInstant" title="Today Instant" >
        Tab content for Today Instant
      </Tab>

      <Tab eventKey="pastInstant" title="Past Instant" >
        Tab content for Past Instant
      </Tab>
    

    </Tabs>
  </div>
  );
};

export default Appointments;
