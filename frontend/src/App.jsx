import { useState } from "react";
import spineLogo from "./assets/spine_logo.jpeg";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const sendToBackend = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input })
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (err) {
      setResponse("Backend not reachable!!!");
      console.error(err);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        fontFamily: "Arial"
      }}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        spineLogo={spineLogo}
      />

      <MainContent
        input={input}
        setInput={setInput}
        response={response}
        sendToBackend={sendToBackend}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
