import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
      <h1 className="text-center text-muted display-5 fw-semibold mb-4">
        🚧 Login Page Coming Soon...
      </h1>

      <Link to="/" className="btn btn-danger fw-semibold px-4 py-2">
        Back to Home
      </Link>
    </div>
  );
};

export default Login;
