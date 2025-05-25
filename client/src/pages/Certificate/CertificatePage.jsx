
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CertificatePage = () => {
  const { id } = useParams(); // courseId
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:5000/api/certificates/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
    setLoading(false);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Download Your Certificate</h2>
      <p className="mb-6">You’ve successfully completed the course. 🎉</p>
      <button
        onClick={handleDownload}
        disabled={loading}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Generating..." : "Download PDF"}
      </button>
    </div>
  );
};

export default CertificatePage;
