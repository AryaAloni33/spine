import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PatientUpload from "./pages/PatientUpload";
import Login from "./pages/Login";
import Register from "./pages/Register";
import spineLogo from "./assets/spine_logo.jpeg";

/* =========================
   ROUTES WITH AUTH GUARD
========================= */

function AppRoutes({
  darkMode,
  setDarkMode,
  isAuthenticated,
  setIsAuthenticated,
  userEmail,
  setUserEmail,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔐 Auth redirect logic
  useEffect(() => {
    const publicRoutes = ["/login", "/register"];

    if (!isAuthenticated && !publicRoutes.includes(location.pathname)) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  return (
    <>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        spineLogo={spineLogo}
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        setIsAuthenticated={setIsAuthenticated}
      />

      <Routes>
        {/* Home */}
        <Route path="/" element={<MainContent />} />

        {/* Protected page */}
        <Route path="/upload" element={<PatientUpload />} />

        {/* Auth pages */}
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              setUserEmail={setUserEmail}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              setIsAuthenticated={setIsAuthenticated}
              setUserEmail={setUserEmail}
            />
          }
        />
      </Routes>
    </>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Frontend-only auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  // Apply dark mode class
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <AppRoutes
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        userEmail={userEmail}
        setUserEmail={setUserEmail}
      />
    </BrowserRouter>
  );
}

export default App;
