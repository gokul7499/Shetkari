import React, { useState } from "react";
import axios from "axios";

function Crops() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [englishResult, setEnglishResult] = useState("");
  const [marathiResult, setMarathiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const res = await axios.post("https://website-backend-royal.onrender.com/analyze", formData);
      setEnglishResult(res.data.english);
      setMarathiResult(res.data.marathi);
    } catch (err) {
      alert("Something went wrong!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg p-4 border-0">
            <h2 className="text-center mb-4 text-success">🌱 Crop Analyzer (English + मराठी)</h2>

            <div className="mb-3">
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>

            {preview && (
              <div className="text-center mb-4">
                <img src={preview} alt="Preview" className="img-fluid rounded shadow" style={{ maxHeight: "300px" }} />
              </div>
            )}

            <div className="d-grid mb-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="btn btn-success"
              >
                {loading ? "Analyzing..." : "Analyze Crop"}
              </button>
            </div>

            {(englishResult || marathiResult) && (
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="p-3 bg-light border rounded">
                    <h5>📝 English Result</h5>
                    <p>{englishResult}</p>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                  <div className="p-3 bg-light border rounded">
                    <h5>📝 मराठी परिणाम</h5>
                    <p>{marathiResult}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crops;
