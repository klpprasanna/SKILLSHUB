import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-4">
      <header className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md text-white">
          Welcome to&nbsp;
          <span className="text-yellow-300 bg-white bg-opacity-10 px-3 py-1 rounded-lg shadow-lg">
            SkillShareHub
          </span>
        </h1>
        <p className="text-lg md:text-xl font-medium mb-2">
          Unlock learning opportunities. Empower your teaching journey.
        </p>
        <p className="text-lg md:text-xl font-medium mb-8">Connect, share, and grow.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Get Started – Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Login
          </button>
        </div>

        {user && (
          <div className="mt-6">
            <button
              onClick={() =>
                navigate(
                  user.role === "admin"
                    ? "/admin"
                    : user.role === "instructor"
                    ? "/instructor"
                    : "/learner"
                )
              }
              className="underline text-yellow-200 hover:text-white text-sm mt-2"
            >
              Go to your Dashboard →
            </button>
          </div>
        )}
      </header>
      <footer className="absolute bottom-6 text-sm opacity-80">
        © 2025 SkillShareHub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
