import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard';
import Report from './pages/Report';
import AdminLogin from './pages/AdminLogin';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <div className="gradient-background">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path ="/report" element={<Report />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </Router> 
      </div>
    </>
  );
} 

export default App;