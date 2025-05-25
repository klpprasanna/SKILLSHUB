import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const baseURL = import.meta.env.VITE_API_BASE;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      login(data.token);
      if (data.user.role === "admin") navigate("/admin");
      else if (data.user.role === "instructor") navigate("/instructor");
      else navigate("/learner");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 p-6">
      <div className="w-full max-w-md bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-800 mb-6">
          Login to <span className="text-yellow-500">SkillShareHub</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span
            className="text-yellow-500 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up here
          </span>
        </p>
      </div>
     <div className="absolute top-4 left-4">
        <Link to="/" className="text-sm text-white bg-indigo-600 px-3 py-1 rounded hover:bg-indigo-700 shadow">
            ← Back to Home
        </Link>
    </div>
    </div>
    
  );
};

export default Login;
