import 'bootstrap/dist/css/bootstrap.min.css';
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Aboutus from './components/Aboutus.jsx';
import Contactus from './components/Contactus.jsx';
import Joinus from './components/Joinus.jsx'
import Layout from './components/Layout.jsx';
import Login from './components/Login.jsx';
import ForgetPassword from './components/ForgetPassword.jsx';
import Dashboard from './components/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Appointments from './components/Appointments.jsx';
import Consultation from './components/Consultation.jsx';
import BookAppointment from './components/BookAppointment.jsx';
import MedicalReport from './components/MedicalReport.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="layout" element={<Layout />} />

            <Route path="/home" element={<Home />}>
              <Route path="appointment" element={<Appointments />} />
              <Route path="consultaion" element={<Consultation />} />
              <Route path="book-appointment" element={<BookAppointment />} />
              <Route path="medical-report" element={<MedicalReport />} />
            </Route>

            <Route path="aboutus" element={<Aboutus />} />
            <Route path="contactus" element={<Contactus />} />
            <Route path="joinus" element={<Joinus />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
