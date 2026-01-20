export default function MainContent() {
  return (
    <main
      style={{
        padding: "50px",
        maxWidth: "1366px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
      }}
    >
      <div className="hover-card">
        <h3>Patient Upload</h3>
        <p>Upload new patient scans</p>
      </div>

      <div className="hover-card">
        <h3>Patient Records</h3>
        <p>View existing patient data</p>
      </div>

      <div className="hover-card">
        <h3>Reports</h3>
        <p>Analysis &amp; results</p>
      </div>
      <div className="fact-box">
        <span>💡</span>
        <p>
          Did you know? Early spinal analysis helps detect posture abnormalities
          before chronic issues develop.
        </p>
      </div>
    </main>
  );
}
