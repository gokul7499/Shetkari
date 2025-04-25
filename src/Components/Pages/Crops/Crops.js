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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">🌱 Crop Analyzer</h1>
            <p className="text-green-100 mt-2">Get analysis in English and मराठी</p>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            {/* Upload Section */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Upload Crop Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, JPEG (MAX. 5MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>

            {/* Preview Section */}
            {preview && (
              <div className="mb-8 text-center">
                <h2 className="text-lg font-medium text-gray-700 mb-3">Image Preview</h2>
                <div className="flex justify-center">
                  <img
                    src={preview}
                    alt="Preview"
                    className="max-h-64 rounded-lg shadow-md border border-gray-200"
                  />
                </div>
              </div>
            )}

            {/* Analyze Button */}
            <div className="flex justify-center mb-8">
              <button
                onClick={handleSubmit}
                disabled={loading || !image}
                className={`px-8 py-3 rounded-full font-medium text-lg shadow-lg transition-all duration-300 ${
                  loading || !image
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white hover:shadow-xl"
                }`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  "Analyze Crop"
                )}
              </button>
            </div>

            {/* Results Section */}
            {(englishResult || marathiResult) && (
              <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
                {/* English Result */}
                <div className="bg-green-50 border border-green-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">English Result</h3>
                  </div>
                  <div className="text-gray-700 whitespace-pre-line">
                    {englishResult}
                  </div>
                </div>

                {/* Marathi Result */}
                <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-2 rounded-full mr-3">
                      <svg
                        className="w-6 h-6 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">मराठी परिणाम</h3>
                  </div>
                  <div className="text-gray-700 whitespace-pre-line">
                    {marathiResult}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-gray-500">
              Upload a crop image to get analysis and recommendations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crops;