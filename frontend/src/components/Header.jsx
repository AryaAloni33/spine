function Header({
  darkMode,
  setDarkMode,
  showMenu,
  setShowMenu,
  spineLogo
}) {
  return (
    <header
      style={{
        borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
        backgroundColor: darkMode ? "#181818" : "#f9f9f9"
      }}
    >
      <div
        style={{
          width: "1280px",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "16px 24px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between"
        }}
      >
        {/* LEFT SIDE — LOGO + TEXT */}
        <div style={{ display: "flex", gap: "12px" }}>
          {/* LOGO (TOP LEFT) */}
          <img
            src={spineLogo}
            alt="SPINE Logo"
            style={{
              width: "74px",
              height: "74px",
              objectFit: "contain",
              marginTop: "2px"
            }}
          />

          {/* TEXT STACK */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h2 style={{ margin: 0 }}>SPINE</h2>

            {/* DASHBOARD DROPDOWN */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowMenu(!showMenu)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: darkMode ? "#ccc" : "#555"
                }}
              >
                DASHBOARD ▾
              </button>

              {showMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "26px",
                    left: 0,
                    width: "200px",
                    backgroundColor: darkMode ? "#222" : "#ffffff",
                    border: darkMode ? "1px solid #333" : "1px solid #ddd",
                    borderRadius: "6px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    zIndex: 1000
                  }}
                >
                  <MenuItem text="Patient Upload" darkMode={darkMode} />
                  <MenuItem text="View Patients" darkMode={darkMode} />
                  <MenuItem text="Reports" darkMode={darkMode} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TOGGLE ONLY */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: darkMode ? "#ffffff" : "#222",
            color: darkMode ? "#000000" : "#ffffff"
          }}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

function MenuItem({ text, darkMode }) {
  return (
    <div
      style={{
        padding: "10px 14px",
        cursor: "pointer",
        fontSize: "14px",
        color: darkMode ? "#ffffff" : "#000000",
        borderBottom: darkMode ? "1px solid #333" : "1px solid #eee"
      }}
    >
      {text}
    </div>
  );
}

export default Header;
