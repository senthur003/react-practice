import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';


const Appointments = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const userType = userInfo.user_type;
  const [activeTab, setActiveTab] = useState('ongoing');
  const [counts, setCounts] = useState(1);
  return (
    <div className="App">
     
      <Tabs
        defaultActiveKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="ongoing" title={
          <div>
            Ongoing{' '}
            {counts > 0 && (
              <Badge pill bg="danger" className="ml-2">
                {counts}
              </Badge>
            )}
          </div>
        }>
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
