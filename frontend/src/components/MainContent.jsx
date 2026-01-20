function MainContent({
  input,
  setInput,
  response,
  sendToBackend,
  darkMode
}) {
  return (
    <main
      style={{
        width: "1280px",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "40px 24px",
        boxSizing: "border-box"
      }}
    >
      <h3>SPINE Project UI</h3>

      <input
        type="text"
        placeholder="Type here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "15px",
          borderRadius: "4px",
          boxSizing: "border-box",
          border: darkMode ? "1px solid #555" : "1px solid #ccc",
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000"
        }}
      />

      <br /><br />

      <button
        onClick={sendToBackend}
        style={{
          padding: "10px 20px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          backgroundColor: darkMode ? "#3a7afe" : "#2563eb",
          color: "#ffffff"
        }}
      >
        Send to Backend
      </button>

      <br /><br />

      <h3>Backend Response:</h3>
      <p>{response}</p>
    </main>
  );
}

export default MainContent;
