import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";

export default function Header({ darkMode, setDarkMode, spineLogo }) {
  return (
    <header style={headerStyle}>
      {/* Logo + Title */}
      <div style={leftStyle}>
        <img src={spineLogo} alt="Spine Logo" style={{ height: "48px" }} />
        <span style={titleStyle}>SPINE</span>
      </div>

      {/* Theme Toggle */}
      <Around
        duration={750}
        toggled={!darkMode}
        toggle={() => setDarkMode(!darkMode)}
      />
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 40px",
  borderBottom: "1px solid #e5e7eb",
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const titleStyle = {
  fontSize: "26px",
  fontWeight: 700,
  letterSpacing: "1px",
};
