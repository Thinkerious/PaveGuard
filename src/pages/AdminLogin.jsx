import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>AdminLogin page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default AdminLogin;