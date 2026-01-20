import { useState, useEffect } from "react";
import spineLogo from "./assets/spine_logo.jpeg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
      }}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        spineLogo={spineLogo}
      />

      <MainContent />
    </div>
  );
}

export default App;
