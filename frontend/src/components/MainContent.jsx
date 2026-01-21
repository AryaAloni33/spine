import { useNavigate } from "react-router-dom";

export default function MainContent() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="card-grid">
        <div className="hover-card" onClick={() => navigate("/upload")}>
          <h3>Patient Upload</h3>
          <p>Upload new patient scans for analysis</p>
        </div>

        <div className="hover-card">
          <h3>Patient Records</h3>
          <p>View and manage existing patient data</p>
        </div>

        <div className="hover-card">
          <h3>Reports</h3>
          <p>Analysis results and insights</p>
        </div>
      </div>
    </main>
  );
}
