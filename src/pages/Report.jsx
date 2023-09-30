import React, { useState } from "react";

function Report() {
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    description: "",
    location: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can access the form data in formData
    console.log(formData);
  };

  return (
    <>
      <h1>Report page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="file"
            accept="image/*"
            // Handle file upload here
          />
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
            />
            Provide extra information
          </label>
        </div>
        {showExtraInfo && (
          <>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Description of the Hazard:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Location of the Hazard:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>
          </>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Report;