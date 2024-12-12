// src/components/LogoutButton.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogout = async () => {
    try {
      // Kirim permintaan POST ke endpoint logout
      const response = await axios.post(
        "http://localhost:8080/api/logoutUser",
        {},
        { withCredentials: true } // Penting agar cookie JWT dikirimkan
      );

      if (response.status === 200) {
        // Logout berhasil, navigasi ke halaman login atau halaman utama
        navigate("/"); // Ganti dengan rute yang sesuai
      }
    } catch (err) {
      console.error("Logout failed:", err);
      setError("Logout gagal. Silakan coba lagi.");
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>
        <div className="logout flex items-center mt-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-[#D7904D]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
            />
          </svg>

          <h2 className="text-black font-medium ml-[15px] text-[18px]">
            Log Out
          </h2>
        </div>
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default LogoutButton;
