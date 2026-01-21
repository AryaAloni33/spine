import { useState } from "react";

export default function PatientUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [showLLAngle, setShowLLAngle] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
    setUploaded(false);
    setShowLLAngle(false);
  };

  const handleUpload = () => {
    // Mock upload success
    setUploaded(true);
  };

  const handleLLAngle = () => {
    setShowLLAngle(true);
  };

  return (
    <main>
      <h2>Patient Upload</h2>
      <p>Upload a patient spine image for analysis.</p>

      {/* Upload box */}
      <label className={`upload-box ${preview ? "has-image" : ""}`}>
        {!preview && (
          <div>
            <p className="upload-title">Click to upload image</p>
            <p className="upload-subtext">JPG or PNG</p>
          </div>
        )}

        {preview && (
          <img src={preview} alt="Preview" className="upload-preview" />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </label>

      {/* Action buttons */}
      <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
        <button
          className={`upload-btn ${image ? "active" : ""}`}
          disabled={!image}
          onClick={handleUpload}
        >
          Upload Image
        </button>

        <button
          className={`upload-btn ${uploaded ? "active" : ""}`}
          disabled={!uploaded}
          onClick={handleLLAngle}
        >
          LL Angle
        </button>
      </div>

      {/* Upload success message */}
      {uploaded && (
        <div
          style={{
            marginTop: "16px",
            color: "#2563eb",
            fontWeight: "500",
          }}
        >
          ✔ Image uploaded successfully
        </div>
      )}

      {/* LL Angle output */}
      {showLLAngle && (
        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
          }}
        >
          <strong>LL Angle:</strong> 48°
        </div>
      )}
    </main>
  );
}
