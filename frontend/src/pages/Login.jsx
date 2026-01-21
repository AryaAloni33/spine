import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated, setUserEmail }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields!");
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
        <h1>Log in</h1>
        <p>Welcome back! Please enter your details.</p>

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

          <label style={{ display: "flex", gap: "8px", fontSize: "0.9rem" }}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            Remember for 30 days
          </label>

          <button onClick={handleSubmit}>Log in</button>
        </div>

        <div className="auth-switch">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Create account</span>
        </div>
      </div>
    </div>
  );
}
