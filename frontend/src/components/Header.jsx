import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header({
  darkMode,
  setDarkMode,
  spineLogo,
  isAuthenticated,
  userEmail,
  setIsAuthenticated,
}) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <header
      style={{
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo + Title */}
      <div
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
      >
        <img src={spineLogo} alt="SPINE logo" style={{ height: "48px" }} />
        <h1 style={{ fontSize: "1.6rem" }}>SPINE</h1>
      </div>

      {/* Right side controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          position: "relative",
        }}
      >
        {/* Dark / Light toggle (unchanged behavior) */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Auth actions */}
        {!isAuthenticated ? (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </>
        ) : (
          <div style={{ position: "relative" }}>
            {/* User icon */}
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "#2563eb",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontWeight: "600",
                userSelect: "none",
              }}
              title={userEmail}
            >
              {userEmail?.charAt(0).toUpperCase()}
            </div>

            {/* Account dropdown */}
            {menuOpen && (
              <div className="account-dropdown">
                <p className="account-email">{userEmail}</p>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
