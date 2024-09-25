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

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="layout" element={<Layout />} />
        <Route path="home" element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="joinus" element={<Joinus />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
