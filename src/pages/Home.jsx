import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="container-fluid text-center mt-5" style={gradientBackground}>
      <h1 className="display-4 mb-4 text-white">PaveGuard</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <Link to="/admin-login" className="text-decoration-none">
            <button className="btn btn-primary btn-lg btn-block mb-3">
              City Official Login
            </button>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/report" className="text-decoration-none">
            <button className="btn btn-success btn-lg btn-block">
              Report Road Hazard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const gradientBackground = {
  background: "linear-gradient(to bottom, #1e5799, #00b894, #a55eea)",
  minHeight: "100vh", // Ensure full viewport height
};

export default Home;