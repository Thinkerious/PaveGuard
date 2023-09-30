import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Welcome to Home</h1>
      <Link to="/admin-login">
        <button>Go to Admin Login</button>
      </Link>
      <Link to="/report">
        <button>Go to Report</button>
      </Link>
    </>
  );
}

export default Home;
