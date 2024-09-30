import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        age: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'dob') {
            const age = calculateAge(value);  
            setFormData({
                ...formData,
                [name]: value,
                age: age,  
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
    
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
    
        return age;
    };

    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="profile" title="Profile">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        {/* First Column */}
                        <Col md={6}>
                            <Form.Group controlId="firstName">
                                <Form.Label className="text-start w-100">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your first name"
                                />
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label className="text-start w-100">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your last name"
                                />
                            </Form.Group>

                            <Form.Group controlId="genderSelect">
                                <Form.Label className="text-start w-100">Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>

                        {/* Second Column */}
                        <Col md={6}>
                            <Form.Group controlId="email">
                                <Form.Label className="text-start w-100">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                            </Form.Group>

                            <Form.Group controlId="phone">
                                <Form.Label className="text-start w-100">Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                />
                            </Form.Group>

                            <Form.Group controlId="datePicker">
                                <Form.Label className="text-start w-100">Select Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="age">
                                <Form.Label className="text-start w-100">Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    disabled
                                />
                            </Form.Group>

                        </Col>
                    </Row>

                    <Button type="submit" className="mt-3" variant="primary">
                        Submit
                    </Button>
                </Form>
            </Tab>

            <Tab eventKey="Address" title="Address">
                Address
            </Tab>

            <Tab eventKey="emergencycontact" title="Emergency Contact" >
                Emergency Contact
            </Tab>
        </Tabs>
    )
}

export default Profile
