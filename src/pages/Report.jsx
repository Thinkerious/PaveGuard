import React, { useState } from "react";


import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
//import sendData from "../Firebase";
import "./pages.css";


function Report() {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    description: "",
    location: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setShowExtraInfo(!showExtraInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, you can access the form data in formData
    console.log(formData);
    sendData(formData);
    
  };

  return (
    <>
    <div className="container mt-5">
      <h1 className="mb-4">Report a Hazard</h1>
      {isFormSubmitted ? (
        <>
          <div className="alert alert-success">
            Thank you for your report! We appreciate your contribution.
          </div>
          <button
            onClick={handleReturnToHome}
            className="btn btn-primary mt-3"
          >
            Return to Home
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Upload an Image:</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              // Handle file upload here
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={handleCheckboxChange}
              id="extraInfoCheckbox"
            />
            <label className="form-check-label" htmlFor="extraInfoCheckbox">
              Provide extra information
            </label>
          </div>
          {showExtraInfo && (
            <div>
              <label className="form-label">Full Name:</label>
              <input
                type="text"
                className="form-control mb-3"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <label className="form-label">Phone Number:</label>
              <input
                type="text"
                className="form-control mb-3"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control mb-3"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label className="form-label">Description of the Hazard:</label>
              <textarea
                className="form-control mb-3"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <label className="form-label">Location of the Hazard:</label>
              <input
                type="text"
                className="form-control mb-3"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
    </>
  );
}

export default Report;