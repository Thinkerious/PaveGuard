import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center text-white mt-5" style={gradientBackground}>
      <h1 className="display-4 mb-4 text-center" style={{ color: "white" }}>Welcome to PaveGuard</h1>
      <br/>
      <div className="mb-3">
        <Link to="/admin-login" className="custom-link text-decoration-none">
          <button className="btn btn-dark-light-hover btn-lg btn-animate mb-2">
            City Official Login
          </button>
          <br/>
        </Link>
        <Link to="/report" className="custom-link text-decoration-none">
          <button className="btn btn-dark-light-hover btn-lg btn-animate">
            Report A Road Hazard
          </button>
        </Link>
      </div>
    </div>
  );
}

const gradientBackground = {
  background: "linear-gradient(to bottom, #1e5799, #00b894, #a55eea)",
  minHeight: "100vh",
};

export default Home;