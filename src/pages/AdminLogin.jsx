import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the credentials are correct
    if (formData.username === "admin" && formData.password === "admin123") {
      // Clear the error message
      setError("");

      // Redirect to AdminDashboard on successful login
      navigate("/admin-dashboard");
    } else {
      // Display an error message and clear the password field
      setError("Incorrect username or password.");
      setFormData({
        ...formData,
        password: "",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
    </>
  );
}

export default AdminLogin;