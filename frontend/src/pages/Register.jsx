import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register({ setIsAuthenticated, setUserEmail }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // ✅ TEMP AUTH (frontend-only)
    setIsAuthenticated(true);
    setUserEmail(formData.email);

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
      }}
    >
      <div className="auth-container">
        <h1>Create Account</h1>
        <p>Create an account to continue.</p>

        <div className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />

          <button onClick={handleSubmit}>Create Account</button>
        </div>

        <div className="auth-switch">
          Already registered?{" "}
          <span onClick={() => navigate("/login")}>Log in</span>
        </div>
      </div>
    </div>
  );
}
